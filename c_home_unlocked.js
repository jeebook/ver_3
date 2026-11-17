function render_unlocked_content() {
  // 1. FIXED: Safely handle missing unlocked_list
  let consunlocked_content_list = Object.values(user_data?.unlocked_list || {}).flat();
  
  // 2. FIXED: Safely handle missing subject_data AND flatten the array properly
  let show_data_from_json = Object.values(subject_data || {})
    .flatMap(board => Object.values(board))
    .flat(); // <--- ADDED: This makes it a flat list of section objects so .items works!
  
  const content_area = document.getElementById("content_area_container_id");
  content_area.innerHTML = "";
  
  const show_container = document.createElement("div");
  show_container.id = "show_in_content_area_id";
  show_container.className = "show_in_content_area_cl fade-in";
  
  // 3. FIXED: An empty array is truthy, so we must check .length === 0
  if (!show_data_from_json || show_data_from_json.length === 0) {
    show_container.innerHTML = `
    <div class="fade-in" style="display: flex; justify-content: center; align-items: center; min-height: 250px; height: 100%; color: red; font-weight: bold; font-size: 1.2rem;">
      Data Not Found
    </div>`;
    content_area.appendChild(show_container);
    return;
  }
  
  let has_unlocked_items = false;
  
  show_data_from_json.forEach(section => {
    // This will now safely work because section is a real object containing .items
    const unlocked_items = (section.items || []).filter(item =>
      consunlocked_content_list.includes(item.subject_item_id)
    );
    
    if (unlocked_items.length > 0) {
      has_unlocked_items = true;
      const heading_el = document.createElement("h1");
      heading_el.textContent = section.section_heading;
      show_container.appendChild(heading_el);
      
      const thumb_container = document.createElement("div");
      thumb_container.className = "thumb_subject_container";
      
      unlocked_items.forEach(item => {
        const card_div = document.createElement("div");
        card_div.className = "thumb_cover_card";
        
        if (item.click_function) {
          card_div.setAttribute("onclick", item.click_function);
        } else {
          card_div.onclick = function() { open_subj_fc(item.subject_item_id); };
        }
        
        const skeleton = document.createElement("div");
        skeleton.className = "skeleton_loader";
        
        const img = document.createElement("img");
        img.src = item.url;
        img.alt = "Cover";
        img.onload = function() {
          skeleton.style.display = "none";
          img.classList.add("loaded");
        };
        
        card_div.appendChild(skeleton);
        card_div.appendChild(img);
        thumb_container.appendChild(card_div);
      });
      show_container.appendChild(thumb_container);
    }
  });
  
  if (!has_unlocked_items) {
    show_container.innerHTML = `<div class="fade-in" style="text-align: center; padding: 30px; color: #877E78;font-weight: bold; margin-top:100px;">No unlocked content yet.</div>`;
  }
  content_area.appendChild(show_container);
}

function render_offerpage_content(){
  const content_area = document.getElementById("content_area_container_id");
  content_area.innerHTML = "";
  
  const show_container = document.createElement("div");
  show_container.id = "show_in_content_area_id";
  show_container.className = "show_in_content_area_cl fade-in";
  
  if (content_area) {
    show_container.innerHTML = `
    <div class="fade-in" style="display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; min-height: 250px; height: 100%; color: gray; font-weight: bold; font-size: 1.2rem;">
      (New Features)<br>Coming Soon !!
    </div>`;
    content_area.appendChild(show_container);
    return;
  }
}