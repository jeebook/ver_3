    let board_menu_data = {
      board_menu_closeButtonSvg: '<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>',
      board_menu_submitBtnText: "Continue",
      boards_menu: [
        {
          board: "cbse",
          label: "CBSE",
          classes: [
            { id: "c9", value: { grade: 9, board: "cbse" }, img: "med/sel_cl/cbse_9.webp", color: "#eaf6ff" },
            { id: "c10", value: { grade: 10, board: "cbse" }, img: "med/sel_cl/cbse_10.webp", color: "#ebfaf0" },
            { id: "c11", value: { grade: 11, board: "cbse" }, img: "med/sel_cl/cbse_11.webp", color: "#f4effe" },
            { id: "c12", value: { grade: 12, board: "cbse" }, img: "med/sel_cl/cbse_12.webp", color: "#fef8e6" }
          ]
        },
        {
          board: "icse",
          label: "ICSE",
          classes: [
            /*
            { id: "i9", value: { grade: 9, board: "icse" }, img: "med/sel_cl/icse_9.webp", color: "#def1fc" },
            */
            { id: "i10", value: { grade: 10, board: "icse" }, img: "med/sel_cl/icse_10.webp", color: "#ece9fc" },
            /*
            { id: "i11", value: { grade: 11, board: "icse" }, img: "med/sel_cl/icse_11.webp", color: "#dff6e5" },
            { id: "i12", value: { grade: 12, board: "icse" }, img: "med/sel_cl/icse_12.webp", color: "#fef5d8" }
            */
          ]
        },
        /*
        {
          board: "up",
          label: "UP Board",
          classes: [
            { id: "up9", value: { grade: 9, board: "up" }, img: "med/sel_cl/up_9.webp", color: "#dceefc" },
            { id: "up10", value: { grade: 10, board: "up" }, img: "med/sel_cl/up_10.webp", color: "#e0f8e7" },
            { id: "up11", value: { grade: 11, board: "up" }, img: "med/sel_cl/up_11.webp", color: "#ebe8fb" },
            { id: "up12", value: { grade: 12, board: "up" }, img: "med/sel_cl/up_12.webp", color: "#fdeeda" }
          ]
        },
        */
        {
          board: "njee",
          label: "NEET/JEE",
          classes: [
            { id: "njee", value: { grade: "njee", board: "njee" }, img: "med/sel_cl/jee_neet.webp", color: "#e9faf5" }
          ]
        }
      ]
    };

    function submitForm() {
      active_data_action_skeleton_fc("Processing")
      web_para.ative_realtime = "eze_para_update";
      manage_supabase_connection();
      const payload = {
        action_type: "eze_para_update",
        user_id: user_info.user_id,
        grade: current_UI_ClassData.grade,
        board: current_UI_ClassData.board
      };
      
      fetch(user_info.day_hook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
        .then(response => {
          let dataudtjfg= "gssg"
          //show_custom_popup("Wait..");
        })
        .catch(error => {
          show_bulletin_msg_fc("Something went wrong! Try Again.");
          remove_data_action_skeleton_fc()
        });
    }