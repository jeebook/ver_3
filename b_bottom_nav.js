function move_bottom_nav_active_circle(clicked_element) {
  if(web_para.is_back_button) return;
  // render home content 
  let target_element = typeof clicked_element === "string" ? document.getElementById(clicked_element) : clicked_element;
  if (!target_element) return;

  // 2. Render the content based on the element's ID
  web_para.active_bottom_nav = target_element.id;
  render_home_content_by_nav(target_element.id);
  
// 3. Update the active class on the buttons
  document.querySelectorAll('.bottom_nav_normal_item_cl').forEach(btn => { 
      btn.classList.remove('active_nav_button_cl'); 
  });
  target_element.classList.add('active_nav_button_cl');

  // 4. Calculate the index and move the active circle
  const buttons = Array.from(document.querySelectorAll('.bottom_nav_normal_item_cl'));
  const index = buttons.indexOf(target_element);
  
  if (index !== -1) {
      const target_x = index * 55; 
      document.getElementById('bottom_nav_active_circle_id').style.transform = `translateX(${target_x}px)`;
  }
}

function build_bottom_nav_fc() {
  const navWrapper = document.getElementById("bottom_nav_wrapper_id");
  
  const navHTML = `
    <div class="bottom_nav_container_cl bottom_nav_load_state_cl" id="bottom_nav_container_id">
      <div class="bottom_nav_active_circle_cl" id="bottom_nav_active_circle_id"></div>
      
      <button class="bottom_nav_item_cl bottom_nav_normal_item_cl" id="bottom_nav_home_button_id" onclick="move_bottom_nav_active_circle(this);">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="24" height="24" fill="#ffffff"><path d="M23 9.99V22a2.006 2.006 0 0 1-2 2h-6v-8h-5v8H4a2.006 2.006 0 0 1-2-2V9.99a1.999 1.999 0 0 1 .79-1.59L12.5 1l9.71 7.4A1.999 1.999 0 0 1 23 9.99z"/></svg>
      </button>

      <button class="bottom_nav_item_cl bottom_nav_normal_item_cl" id="bottom_nav_myunlocks_button_id" onclick="move_bottom_nav_active_circle(this);">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#ffffff"><path fill-rule="evenodd" d="M12 2c-.791 0-1.55.314-2.11.874l-.893.893a.985.985 0 0 1-.696.288H7.04A2.984 2.984 0 0 0 4.055 7.04v1.262a.986.986 0 0 1-.288.696l-.893.893a2.984 2.984 0 0 0 0 4.22l.893.893a.985.985 0 0 1 .288.696v1.262a2.984 2.984 0 0 0 2.984 2.984h1.262c.261 0 .512.104.696.288l.893.893a2.984 2.984 0 0 0 4.22 0l.893-.893a.985.985 0 0 1 .696-.288h1.262a2.984 2.984 0 0 0 2.984-2.984V15.7c0-.261.104-.512.288-.696l.893-.893a2.984 2.984 0 0 0 0-4.22l-.893-.893a.985.985 0 0 1-.288-.696V7.04a2.984 2.984 0 0 0-2.984-2.984h-1.262a.985.985 0 0 1-.696-.288l-.893-.893A2.984 2.984 0 0 0 12 2Zm3.683 7.73a1 1 0 1 0-1.414-1.413l-4.253 4.253-1.277-1.277a1 1 0 0 0-1.415 1.414l1.985 1.984a1 1 0 0 0 1.414 0l4.96-4.96Z" clip-rule="evenodd"/></svg>
      </button>

      <button class="bottom_nav_item_cl bottom_nav_normal_item_cl" id="bottom_nav_offerpage_button_id" onclick="move_bottom_nav_active_circle(this);">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/></svg>
      </button>

      <button class="bottom_nav_item_cl bottom_nav_normal_item_cl" id="bottom_nav_user_button_id" onclick="move_bottom_nav_active_circle(this);">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#ffffff"><path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/></svg>
      </button>

      <button class="bottom_nav_item_cl bottom_nav_back_item_cl" id="bottom_nav_back_button_id" onclick="restore_bottom_nav()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="m15 19-7-7 7-7"/></svg>
      </button>
    </div>
  `;
  
  navWrapper.innerHTML = navHTML;
  activate_flowting_nav();
}
function activate_flowting_nav() {
  const default_active = document.getElementById(web_para.active_bottom_nav);
  if (default_active) {
    move_bottom_nav_active_circle(default_active);
    setTimeout(() => { document.getElementById('bottom_nav_container_id').classList.remove('bottom_nav_load_state_cl'); }, 600);}
}


function activate_back_button() {
      web_para.is_back_button = true;
      document.getElementById('bottom_nav_container_id').classList.add('bottom_nav_collapsed_cl');
      document.getElementById('bottom_nav_active_circle_id').style.transform = `translateX(0px)`;
    }

function restore_bottom_nav() {
  if (web_para.active_bottom_back_button.length > 0 ) {
    let last_string_key = web_para.active_bottom_back_button.pop();
    render_home_content_by_nav(last_string_key);
    return;
  }
      web_para.is_back_button = false;
      document.getElementById('bottom_nav_container_id').classList.remove('bottom_nav_collapsed_cl');
      
      document.getElementById('bottom_nav_unlock_btn_id').classList.remove("show");

      const active_element = document.getElementById(web_para.active_bottom_nav);
      if (active_element) {
        const buttons = Array.from(document.querySelectorAll('.bottom_nav_normal_item_cl'));
        const index = buttons.indexOf(active_element);
        document.getElementById('bottom_nav_active_circle_id').style.transform = `translateX(${index * 55}px)`;
      }
      render_home_content_by_nav(web_para.active_bottom_nav);
    }