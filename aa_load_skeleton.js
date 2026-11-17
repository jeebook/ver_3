    // Remove main load skeleton
    function remove_load_skeleton_fc() {
      const load_skeleton_loader = document.getElementById('load_skeleton_cl');
      if (load_skeleton_loader) {
        load_skeleton_loader.style.opacity = '0';
        setTimeout(() => {
          load_skeleton_loader.remove();
        }, 300);
      }
    }
    
    // Activate data action skeleton with custom text
    // https://gemini.google.com/app/6c5953eef53d5e83
    function active_data_action_skeleton_fc(active_data_action_custom_text) {
      const action_loader = document.getElementById('data_action_skeleton_id');
      const text_container = document.getElementById('data_action_text_id');
      
      if (action_loader && text_container) {
        text_container.innerText = active_data_action_custom_text;
        action_loader.style.display = 'flex';
        
        // Disable background scrolling
        document.body.style.overflow = 'hidden';
        
        setTimeout(() => {
          action_loader.style.opacity = '1';
        }, 10);
      }
    }
    
    // Remove (hide) data action skeleton
    function remove_data_action_skeleton_fc() {
      const action_loader = document.getElementById('data_action_skeleton_id');
      if (action_loader) {
        action_loader.style.opacity = '0';
        
        // Re-enable background scrolling
        document.body.style.overflow = '';
        
        setTimeout(() => {
          action_loader.style.display = 'none';
        }, 300);
      }
    }

