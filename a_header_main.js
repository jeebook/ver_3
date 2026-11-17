function fa_jello_effect(id_action){
    // id_action = {div_id: "header_main_right_button_txt_id", action: "add"}
    if (!id_action?.div_id || !id_action?.action) return;
    const element = document.getElementById(id_action.div_id);
    if (!element) return;
    
    if (id_action.action === "add") {
        element.classList.add("fa-jello");
    } else if (id_action.action === "remove") {
        element.classList.remove("fa-jello");
    }
}

function fa_jello_add(div_id){
    if (!div_id) return;
    const element = document.getElementById(div_id);
    if (!element) return;
    
    element.classList.add("fa-jello");
}
function fa_jello_remove(div_id){
    if (!div_id) return;
    const element = document.getElementById(div_id);
    if (!element) return;
    
    element.classList.remove("fa-jello");
}

// a_header_maisn.js

const header_main_typing_text_list = ["Year 2026-27", "Download as PDF", "Happy journey"];
let header_main_typing_text_element; // Declare globally, but don't look for the HTML yet

let header_main_list_index = 0, header_main_char_index = 0, header_main_is_deleting = false;
const header_main_typing_delay = 100, header_main_erasing_delay = 50, header_main_new_text_delay = 1500;

function header_main_type_effect_fc() {
  // 1. Safely grab the element the first time this function runs
  if (!header_main_typing_text_element) {
    header_main_typing_text_element = document.getElementById("header_main_typing_text_span_id");
  }
  
  // 2. If the element still isn't found, stop the function so it doesn't crash
  if (!header_main_typing_text_element) return; 

  const current_text = header_main_typing_text_list[header_main_list_index];
  
  if (header_main_is_deleting) { 
    header_main_typing_text_element.textContent = current_text.substring(0, header_main_char_index - 1); 
    header_main_char_index--; 
  } else { 
    header_main_typing_text_element.textContent = current_text.substring(0, header_main_char_index + 1); 
    header_main_char_index++; 
  }
  
  let type_speed = header_main_is_deleting ? header_main_erasing_delay : header_main_typing_delay;
  
  if (!header_main_is_deleting && header_main_char_index === current_text.length) { 
    type_speed = header_main_new_text_delay; 
    header_main_is_deleting = true; 
  } else if (header_main_is_deleting && header_main_char_index === 0) { 
    header_main_is_deleting = false; 
    header_main_list_index = (header_main_list_index + 1) % header_main_typing_text_list.length; 
    type_speed = 500; 
  }
  
  setTimeout(header_main_type_effect_fc, type_speed);
}