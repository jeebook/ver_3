const eze_get_data_api = 'https://ozxvulrbqxkvivvvupsn.supabase.co/functions/v1/eze_req_chap_api';
    // DOM Elements (These will now work because populateShowNotesContainer already ran!)
    const targetBox = document.getElementById('show_notes_img_inrow_box_id');
    const scrollContainer = document.getElementById('show_notes_img_container_id');
    const sizeSlider = document.getElementById('imageSizeSlider');

    // Global State
    let allImages = [];
    let currentIndex = 0;
    const chunkSize = 7; 
    let animationFrameId;
    
    // ==========================================
    // 3. OBSERVER & SCROLL LOGIC
    // ==========================================
    const observerOptions = {
      root: scrollContainer, 
      rootMargin: '0px 0px 300px 0px', 
      threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          loadNextBatch();
        }
      });
    }, observerOptions);

    function loadNextBatch() {
      if (currentIndex >= allImages.length) return;
      
      const nextBatch = allImages.slice(currentIndex, currentIndex + chunkSize);
      
      nextBatch.forEach(item => {
  const wrapper = document.createElement('div');
  wrapper.className = 'img_wrapper_cl';
  
  // 1. We use a real <img> to naturally push the container height
  // 2. We put a transparent .trap_overlay div on top to block clicks
  wrapper.innerHTML = `
          <img src="" id="img_${item.index}" class="real_image_element" alt="Protected Note">
          <div class="trap_overlay"></div>
          <div class="img_index_cl">${item.index}</div>
        `;
  
  targetBox.appendChild(wrapper);
  
  // Load image smoothly
  const imgPreloader = new Image();
  imgPreloader.onload = () => {
    const realImg = document.getElementById(`img_${item.index}`);
    if (realImg) {
      realImg.src = item.url;
      realImg.classList.add('loaded');
      wrapper.style.animation = 'none'; // Stop shimmer
      wrapper.style.minHeight = 'auto'; // Remove temporary skeleton height
    }
  };
  imgPreloader.src = item.url;
});

      currentIndex += chunkSize;

      if (currentIndex < allImages.length) {
        const currentElements = targetBox.querySelectorAll('.img_wrapper_cl');
        const lastElement = currentElements[currentElements.length - 1];
        if (lastElement) {
          imageObserver.observe(lastElement);
        }
      }
    }

    // ==========================================
    // 4. API & RENDERING LOGIC
    // ==========================================
    function loadScript(src) {
      return new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    }

    function render_pdf(chapter_code) {
      targetBox.innerHTML = ''; 
      allImages = [...web_para[chapter_code]].sort((a, b) => a.index - b.index);
      loadNextBatch();
    }

    async function open_as_pdf(subject_code, chapter_code) {
      web_para.active_bottom_back_button.push("close_openasPdf_container");
      
      scrollContainer.classList.add('active');
      targetBox.innerHTML = '<div class="loading_text">Loading notes...</div>';
      currentIndex = 0;
      imageObserver.disconnect();
      allImages = [];
      
      if (web_para[chapter_code]) {
        render_pdf(chapter_code);
        return;
      }
      
      try {
        await loadScript(`${web_para.selected_board}/${web_para.selected_grade}/${subject_code}/${chapter_code}.js`);
        
        let enc_chapter_data = window[chapter_code];
        
        if (!enc_chapter_data) {
          targetBox.innerHTML = '<div class="error_text">Something went wrong</div>';
          return;
        }
        
        let enc_key = null;
        try {
          const response = await fetch(eze_get_data_api, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${sb_key}`
            },
            body: JSON.stringify({
              user_auth: target_auth_string,
              request_for: "enc_code", 
              subject_code: subject_code,
              chapter_code: chapter_code
            })
          });

          if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Server returned ${response.status}: ${errText}`);
          }

          const got_data_json = await response.json();
          enc_key = got_data_json.data;

        } catch (error) {
          throw new Error(`Server returned ${error.message}`);
        }
            
        let bytes = CryptoJS.AES.decrypt(enc_chapter_data, enc_key);
        let decryptedString = bytes.toString(CryptoJS.enc.Utf8);
        
        if (!decryptedString) {
          throw new Error("Decryption failed.");
        }

        let decodedArray = JSON.parse(decryptedString);
        web_para[chapter_code] = decodedArray;
        render_pdf(chapter_code);
        
      } catch (error) {
        targetBox.innerHTML = '<div class="error_text">Something went wrong</div>';
      }
    }

    function close_show_notes_img_container() {
      scrollContainer.classList.remove('active');
      setTimeout(() => {
        targetBox.innerHTML = '';
        allImages = [];
        currentIndex = 0;
        imageObserver.disconnect();
      }, 400);
    }
    // Slider Size Logic
    sizeSlider.addEventListener('input', function() {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(() => {
        targetBox.style.width = this.value + '%';
      });
    });