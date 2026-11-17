function show_custom_popup(message) {
  let popup = document.getElementById("custom_popup_id");
  if (!popup) {
    popup = document.createElement("div");
    popup.id = "custom_popup_id";
    popup.className = "custom_popup_toast";
    document.body.appendChild(popup);
  }
  popup.textContent = message;
  popup.classList.add("show");
  if (popup.hideTimeout) clearTimeout(popup.hideTimeout);
  popup.hideTimeout = setTimeout(() => { popup.classList.remove("show"); }, 3000);
}
// show_custom_popupper("Select a Board first!", "#D1B200");
function show_custom_popupper(message, color) {
  let popup = document.getElementById("custom_popuppper_id");
  if (!popup) {
    popup = document.createElement("div");
    popup.id = "custom_popup_id";
    popup.className = "custom_popuppper_cl";
    document.body.appendChild(popup);
  }
  popup.textContent = message;
  // Set the background color (or reset to CSS default if none provided)
  if (color) {
    popup.style.backgroundColor = color;
  } else {
    popup.style.backgroundColor = "";
  }
  
  // Show the popup
  popup.classList.add("show");
  
  // Handle the timeout
  if (popup.hideTimeout) clearTimeout(popup.hideTimeout);
  popup.hideTimeout = setTimeout(() => { 
    popup.classList.remove("show"); 
  }, 3000);
}