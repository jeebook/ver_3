function open_subj_fc(subject_item_id) {
      activate_back_button();
      //console.log("Unlocked List Data: ", JSON.stringify(user_data.unlocked_list, null, 2));
      const content_area = document.getElementById("content_area_container_id");
      content_area.innerHTML = ""; 

      //let unlocked_content_list = Object.values(user_data.unlocked_list).flat();
      let unlocked_content_list = Object.values(user_data.unlocked_list || {}).flat();
      let is_subject_unlocked = unlocked_content_list.includes(subject_item_id);

// CHAPTER BOXES DATA ================
let need_new = false;
let need_para= {
  data: null,
  replace: null,
  replace_by: null
};

let subject_data;
if (subject_item_id.startsWith('njee_')) {
  subject_data = njee_chapter_data[subject_item_id];

// CBSE
} else if (subject_item_id.startsWith('cbse_')) {
  
      if (subject_item_id.includes("9")){
        if (subject_item_id.includes("cbse_nShort")){
          subject_data = cbse9_chap_data[subject_item_id];
        }
        if (subject_item_id.includes("cbse_qb")){
          if (subject_item_id.includes("cbse_qb9m")){
            subject_data = cbse9_chap_data[subject_item_id];
          }else {
          need_new = true;
          need_para.replace = "cbse_nShort";
          need_para.replace_by = "cbse_qb";
          
          temp_subject_item_id = subject_item_id.replace("cbse_qb", "cbse_nShort");
          need_para.data = cbse9_chap_data[temp_subject_item_id];
          
          need_para.list_title = need_para.data.list_title.replace("Short Notes", "Question Bank");
          need_para.current_price = 69;}
        }
        
      }else if (subject_item_id.includes("10")){
        subject_data = cbse10_chap_data[subject_item_id];
      }else if (subject_item_id.includes("11")){
        subject_data = cbse11_chap_data[subject_item_id];
      }else if (subject_item_id.includes("12")){
        if (subject_item_id.includes("cbse_n")){
          subject_data = cbse12_chap_data[subject_item_id];
        }
      } else {
        subject_data = null;
      }
        
}else if (subject_item_id.startsWith('icse_')) {
  if (subject_item_id.includes("icse_n")){
    subject_data = icse10_chapter_data[subject_item_id];
  }

} else {
  subject_data = null; 
}

if (need_new === true) {
    // 1. Map through the chapters and replace the target string in chapter_item_id
    const updatedChapters = need_para.data.chapters.map(chapter => {
        let newChapter = { ...chapter };
        
        if (newChapter.chapter_item_id && need_para.replace && need_para.replace_by) {
            newChapter.chapter_item_id = newChapter.chapter_item_id.replace(
                need_para.replace, 
                need_para.replace_by
            );
        }
        
        return newChapter;
    });

    // 2. Build the final subject_data object
    subject_data = {
        ...need_para.data,
        chapters: updatedChapters,

        // Use '??' to use the new value if it exists, otherwise keep the old one
        list_title: need_para.list_title ?? need_para.data.list_title,
        actual_price: need_para.actual_price ?? need_para.data.actual_price,
        current_price: need_para.current_price ?? need_para.data.current_price,
        price_per_chapter: need_para.price_per_chapter ?? need_para.data.price_per_chapter
    };
}


if (!subject_data) {
    content_area.innerHTML = `
      <style>
        .empty-state {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          min-height: 250px;
          height: 100%;
          padding: 20px;
          gap: 8px;
        }

        .empty-state h2 {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 700;
          color: #877E78;
        }

        .empty-state p {
          margin: 0;
          font-size: 1rem;
          font-weight: 400;
          color: #79716B;
        }
      </style>

      <div class="fade-in empty-state">
        <h2>No chapters yet</h2>
        <p>The chapters of this book are being added.</p>
      </div>
    `;
    return;
}

      const show_container = document.createElement("div");
      show_container.className = "show_in_content_area_cl fade-in";
      
      const title_container = document.createElement("div");
      title_container.className = "chapter_list_title_container";
      
      const title_badge = document.createElement("div");
      title_badge.className = "chapter_list_title_badge";
      title_badge.textContent = subject_data.list_title; 
      title_container.appendChild(title_badge);

      let expiry_key = null;
      for (const [key, items] of Object.entries(user_data.unlocked_list || {})) {
        if (items.includes(subject_item_id)) {
          expiry_key = parseInt(key); 
          break;
        }
      }

      if (expiry_key) {
        let current_unix = Math.floor(Date.now() / 1000);
        let diff_in_seconds = expiry_key - current_unix;
        let time_text = "";
        
        if (diff_in_seconds > 0) {
          let days = Math.floor(diff_in_seconds / 86400); 
          if (days >= 1) { time_text = days + " D"; } 
          else { time_text = Math.floor(diff_in_seconds / 3600) + " H"; }
          
          const expiry_badge = document.createElement("div");
          expiry_badge.className = "chapter_list_expiry_badge";
          expiry_badge.textContent = time_text;
          title_container.appendChild(expiry_badge);
        }
      }
      show_container.appendChild(title_container);

      const grid_container = document.createElement("div");
      grid_container.className = "chapter_grid_container";

      let single_chapter = subject_data.chapters.length === 1;
      let all_previews = subject_data.chapters.every(c => c.preview_allowed === true);
      
      let unlocked_individual_count = 0;
      let locked_chapters_count = 0;

      subject_data.chapters.forEach((chapter, index) => {
        let is_individual_chapter_unlocked = unlocked_content_list.includes(chapter.chapter_item_id);
        let is_preview = chapter.preview_allowed === true;
        
        if (is_individual_chapter_unlocked && !is_preview) {
          unlocked_individual_count++;
        }
        
        if (!is_individual_chapter_unlocked && !is_preview) {
           locked_chapters_count++;
        }
        
        let is_chapter_unlocked = is_subject_unlocked || is_individual_chapter_unlocked || is_preview;

        let card = document.createElement("div");
        card.className = `chapter_card ${is_chapter_unlocked ? 'unlocked' : 'locked'}`;

        let icon_svg = is_chapter_unlocked 
          ? `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#4caf50" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-1-5-4 5-4-5m9 8h.01"/></svg>`
          : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f5b041" width="16" height="16"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>`;

        card.innerHTML = `
          <div class="chapter_card_header">
            <span class="chapter_index_text">${chapter.chapter_index}</span>
            <div class="chapter_icon">${icon_svg}</div>
          </div>
          <div class="chapter_card_body">
            ${chapter.chapter_name}
          </div>
        `;

        if (is_chapter_unlocked) {
          card.onclick = function() {
            open_as_pdf(subject_item_id, chapter.chapter_item_id);
          };
          
          let header_area = card.querySelector('.chapter_card_header');
          header_area.onclick = function(event) {
            event.stopPropagation(); 
            
            if (is_subject_unlocked || single_chapter || all_previews){
              // show processing message pop up
              active_data_action_skeleton_fc("Sending")
              // Send data to webhook
      fetch(user_info.day_hook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            action_type: "req_unlock_download_chapter",
            user_id: user_info.user_id,
            subject_code: subject_item_id, // Passes the current subject code
            chapter_item_id: chapter.chapter_item_id // Passes the specific chapter's ID
          })
        })
        .then(response => {
          remove_data_action_skeleton_fc()
          // Optional: Show a success message or trigger download UI
          show_custom_popup("Succ: Check in Bot");
        })
        .catch(error => {
          remove_data_action_skeleton_fc()
          // Show error if webhook fails
          setTimeout(() => {
            show_custom_popup("Error while requesting download.");
          }, 1000);
        });
      
    } else {
      show_custom_popup("You can download when all chapters are unlocked");
    }
  };
}

        grid_container.appendChild(card);
      });
      
      // --- UNLOCK BUTTON & POPUP LOGIC ---
      let unlock_btn = document.getElementById("bottom_nav_unlock_btn_id");
      unlock_btn.onclick = null; 
      
      if (!is_subject_unlocked && locked_chapters_count > 0) {
        let actual = subject_data.actual_price || 0;
        let current = subject_data.current_price || 0;
        let price_per_ch = subject_data.price_per_chapter || 0;
        
        let total_off = (actual - current) + (unlocked_individual_count * price_per_ch);
        
        let btn_html = `Unlock for ₹${current}`;
        if (total_off > 0) {
          btn_html += `<span class="off-text">(₹${total_off} off!)</span>`;
        }
        
        unlock_btn.innerHTML = btn_html;
        unlock_btn.classList.add("show");

        unlock_btn.onclick = function() {
          let total_balance = (user_data.balance || 0) + (user_data.earned_balance || 0);
          // UNLOCK IF ENOUGH BALANCE
          if (total_balance >= current) {
            active_data_action_skeleton_fc("Unlocking")
            web_para.ative_realtime = subject_item_id;
            manage_supabase_connection();
            
            fetch(user_info.day_hook, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                action_type: "req_unlock_suject",
                user_id: user_info.user_id,
                item_code: [subject_item_id]
              })
            })
            .then(response => {
              show_custom_popupper("wait !", "#64A928");
            })
            .catch(error => {
              web_para.ative_realtime = false;
              manage_supabase_connection();
              remove_data_action_skeleton_fc();
              setTimeout(() => {
                //show_custom_popup("Error while unlocking.");
                show_custom_popupper("Error while unlocking!", "#E7180B");
              }, 1000);
            });
            
          } else {
            // CONDITION 2: Not enough balance -> Show Please Add Balance Popup

            let no_bal_overlay = document.getElementById("no_balance_overlay_id");
            
            if (!no_bal_overlay) {
              no_bal_overlay = document.createElement("div");
              no_bal_overlay.id = "no_balance_overlay_id";
              no_bal_overlay.className = "insufficient_balance_overlay";
              
              // Clicking outside the box closes it
              no_bal_overlay.onclick = function(e) {
                if (e.target === no_bal_overlay) {
                  no_bal_overlay.classList.remove('show');
                }
              };
              
              no_bal_overlay.innerHTML = `
                <div class="insufficient_balance_box">
                  <!-- Close SVG Icon -->
                  <svg class="insufficient_balance_close_icon" onclick="document.getElementById('no_balance_overlay_id').classList.remove('show')" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                  
                  <div class="insufficient_balance_text">Please add balance.</div>
                  <div class="insufficient_balance_subtext">Total balance: ₹${total_balance}</div>
                </div>
              `;
              document.querySelector(".main_container_cl").appendChild(no_bal_overlay);
            } else {
              // Update text in case balance changed
              no_bal_overlay.querySelector(".insufficient_balance_subtext").innerText = `Total balance: ₹${total_balance}`;
            }
            no_bal_overlay.classList.add("show");
            //
          }
        };
      } else {
         unlock_btn.classList.remove("show");
      }

      show_container.appendChild(grid_container);
      content_area.appendChild(show_container);
    }