function usr_info_tab_fc() {
    const content_area = document.getElementById("content_area_container_id");

    // Create the UI dynamically
    content_area.innerHTML = `
      <div class="contn_usr_info_cl fade-in" id="contn_usr_info_id">
        <div class="contn_usr_info_card_cl">
          
          <div class="usr_info_card_header_cl">
              <div class="usr_info_profile_info_cl">
                <div class="usr_info_avatar_box_cl">
                  <div class="usr_info_avatar_svg_cl">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>Avatar-3</title><g id="Sweater-2" data-name="Sweater"><path d="M45,8v9.27A2,2,0,0,0,44,17H41V13s-2,0-5.4-3c0,0-3.6,4-12.6,4v3H20a2,2,0,0,0-1,.27V8a7,7,0,0,1,7-7H38a3,3,0,0,1,3,3A4,4,0,0,1,45,8Z" style="fill:#494a59"/><path d="M37.953,33.9,52.1,40.35A9.992,9.992,0,0,1,58,49.47V62.25a.75.75,0,0,1-.75.75H6.75A.75.75,0,0,1,6,62.25V49.47a9.992,9.992,0,0,1,5.9-9.12L26.051,33.9" style="fill:#4294ff"/><path d="M32.75,44.5V63h-1.5V44.5a.75.75,0,0,1,1.5,0Z" style="fill:#376cfb"/><path d="M48.75,51V63h-1.5V51a.75.75,0,0,1,1.5,0Z" style="fill:#376cfb"/><path d="M16.75,51V63h-1.5V51a.75.75,0,0,1,1.5,0Z" style="fill:#376cfb"/><path d="M38,26.7V33a6.009,6.009,0,0,1-6,6,6,6,0,0,1-6-6V26.71a8.991,8.991,0,0,0,12-.01Z" style="fill:#eac2b9"/><path d="M23,13v8a9,9,0,0,0,9,9h0a9,9,0,0,0,9-9V12s-2,0-5.4-3C35.6,9,32,13,23,13Z" style="fill:#ffddd4"/><path d="M44,16H41l-.226,7H44a2,2,0,0,0,2-2V18A2,2,0,0,0,44,16Z" style="fill:#eac2b9"/><path d="M23,16H20a2,2,0,0,0-2,2v3a2,2,0,0,0,2,2h3.225Z" style="fill:#eac2b9"/><path d="M38,30l.568.213a6,6,0,0,1,3.375,8.064,6.1,6.1,0,0,1-1.219,1.7L32,49s10.38-6.891,17.8-8.461a1.977,1.977,0,0,0,1.415-2.751C49.751,34.551,46.136,29.456,38,30" style="fill:#376cfb"/><path d="M26,30l-.568.213a6,6,0,0,0-3.375,8.064,6.1,6.1,0,0,0,1.219,1.7L32,49s-10.38-6.891-17.8-8.461a1.977,1.977,0,0,1-1.415-2.751C14.249,34.551,17.864,29.456,26,30" style="fill:#376cfb"/><path d="M42.45,36.01l-4.53-2.04A6.143,6.143,0,0,0,38,33V30l.57.21A5.988,5.988,0,0,1,42.45,36.01Z" style="fill:#2946ed"/><path d="M42.45,36.01a5.547,5.547,0,0,1-1.73,3.97L32,49l-8.72-9.02a5.548,5.548,0,0,1-1.73-3.97l4.53-2.05a5.994,5.994,0,0,0,10.16,3.28,5.9,5.9,0,0,0,1.68-3.27Z" style="fill:#343544"/><path d="M26.08,33.96l-4.53,2.05a5.988,5.988,0,0,1,3.88-5.8L26,30v3A6.017,6.017,0,0,0,26.08,33.96Z" style="fill:#2946ed"/></g></svg>
                  </div>
                  <div class="usr_info_status_dot"></div>
                </div>
                
              <div class="usr_info_info_text" style="cursor: default;">
                <h2 id="usr_info_profileName">None..</h2>
                <h3 id="usr_info_profileClass">None...</h3>
              </div>
          </div>
          <div class="usr_info_edit_icon_cl" onclick="open_board_FullScreen()">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"/>
            </svg>
          </div>
        </div>
        
        <div class="usr_info_divider_cl"></div>
        
        <div class="usr_info_balance_sec_cl">
            <span class="usr_info_balance_text_cl">Available Balance:</span>
            <div class="usr_info_balance_amt_wrapper">
                <div id="success_icon_id" class="success_icon_cl"></div>
                <span class="usr_info_balance_amt_cl" id="usr_info_balance_amt_id">₹0</span>
            </div>
        </div>
        
      </div>
    </div>
    `;

    // Wait a tiny moment for the DOM to update before running the next functions
    setTimeout(() => {
        usr_card_dada_updated_fc();
    }, 0);
    manage_supabase_connection();
}

// --- DATA UPDATER ---
function usr_card_dada_updated_fc() {
    // 1. Update Profile Name
    const name_el = document.getElementById("usr_info_profileName");
    if (name_el) {
        name_el.textContent = user_data.name_is || "Unknown";
    }

    // 2. Update Class / Board (UPDATED TO ACCESS eze_para)
    const class_el = document.getElementById("usr_info_profileClass");
    if (class_el) {
        // Look inside user_data.eze_para
        let board = user_data.eze_para?.selected_board ? user_data.eze_para.selected_board.toUpperCase() : "";
        let grade = user_data.eze_para?.selected_grade ? `- ${user_data.eze_para.selected_grade}` : "";
        
        class_el.textContent = `${board} ${grade}`.trim() || "No Class Selected";
    }

    // 3. Update Balance Amount (Total = balance + earned_balance)
    const balance_el = document.getElementById("usr_info_balance_amt_id");
    if (balance_el) {
        const base_balance = user_data.balance ?? 0;
        const earned_balance = user_data.earned_balance ?? 0;
        const total_balance = base_balance + earned_balance;

        balance_el.textContent = `₹${total_balance}`;
    }
}

// Animation controllers
function success_icon_startWave() {
    if (!success_icon_id) return; 
    success_icon_id.style.backgroundColor = '#10B981'; 
    success_icon_id.classList.add('animate-wave');
}
    
function success_icon_stopWave() {
    if (!success_icon_id) return; 
    success_icon_id.style.backgroundColor = '#EF4444'; 
    success_icon_id.classList.remove('animate-wave');
}
