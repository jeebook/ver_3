let njee_notesdata = {
        section_heading: "Ezee Notes (NEET/JEE)",
        items: [
          { url: "/med/thumb/njee/njee/njee_fbook1112p.webp", subject_item_id: "njee_fbook1112p", click_function: "open_subj_fc('njee_fbook1112p')" },
          { url: "/med/thumb/njee/njee/njee_fbook1112c.webp", subject_item_id: "njee_fbook1112c", click_function: "open_subj_fc('njee_fbook1112c')" },
          /*
          { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/njee/njee_fbook1112m.webp?updatedAt=1793692565204", subject_item_id: "njee_fbook1112m", click_function: "open_subj_fc('njee_fbook1112m')" },
          */
          
          { url: "/med/thumb/njee/njee/njee_hbook11p.webp", subject_item_id: "njee_hbook11p", click_function: "open_subj_fc('njee_hbook11p')" },
          { url: "/med/thumb/njee/njee/njee_hbook12p.webp", subject_item_id: "njee_hbook12p", click_function: "open_subj_fc('njee_hbook12p')" }
        ]
}

let njee_data = [
    njee_notesdata,
    {
        section_heading: "PYQ's",
        items: [
            { url: "/med/thumb/njee/njee/njee_pyqnjeep.webp", subject_item_id: "njee_pyqnjeep", click_function: "open_subj_fc('njee_pyqnjeep')" },
            { url: "/med/thumb/njee/njee/njee_pyqnjeec.webp", subject_item_id: "njee_pyqnjeec", click_function: "open_subj_fc('njee_pyqnjeec')" },
            { url: "/med/thumb/njee/njee/njee_pyqnjeeb.webp", subject_item_id: "neet_pyqnjeeb", click_function: "open_subj_fc('neet_pyqnjeeb')" }
        ]
    }
]
let subject_data = {
  // CBSE
  cbse: {
    grade_9: [
    {
        section_heading: "Short Notes - Grade 9",
        items: [
            { url: "/med/thumb/cbse/9/cbse_nShort9s.webp", subject_item_id: "cbse_nShort9s", click_function: "open_subj_fc('cbse_nShort9s')" },
            { url: "/med/thumb/cbse/9/cbse_nShort9m.webp", subject_item_id: "cbse_nShort9m", click_function: "open_subj_fc('cbse_nShort9m')" },
            { url: "/med/thumb/cbse/9/cbse_nShort9ss.webp", subject_item_id: "cbse_nShort9ss", click_function: "open_subj_fc('cbse_nShort9ss')" }
        ]
    },
    /*{
        section_heading: "Question Bank",
        items: [
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/9/cbse_qb9s_20261103_202651_0000.webp?updatedAt=1793717914382", subject_item_id: "cbse_qb9s", click_function: "open_subj_fc('cbse_qb9s')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/9/cbse_qb9m_20261103_202651_0001.webp?updatedAt=1793717914281", subject_item_id: "cbse_qb9m", click_function: "open_subj_fc('cbse_qb9m')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/9/cbse_qb9ss_20261103_202651_0002.webp?updatedAt=1793717914192", subject_item_id: "cbse_qb9ss", click_function: "open_subj_fc('cbse_qb9ss')" }
        ]
    }*/
],
    grade_10:[
      {
        section_heading: "Ezee Notes (Class 10)",
        items: [
          { url: "/med/thumb/cbse/10/cbse_n10s.webp", subject_item_id: "cbse_n10s", click_function: "open_subj_fc('cbse_n10s')" },
          { url: "/med/thumb/cbse/10/cbse_n10m.webp", subject_item_id: "cbse_n10m", click_function: "open_subj_fc('cbse_n10m')" },
          { url: "/med/thumb/cbse/10/cbse_n10ss.webp", subject_item_id: "cbse_n10ss", click_function: "open_subj_fc('cbse_n10ss')" }
        ]
      }
    ],
    grade_11: [
    {
        section_heading: "Ezee Notes - Grade 11",
        items: [
            { url: "/med/thumb/cbse/11/cbse_n11p.webp", subject_item_id: "cbse_n11p", click_function: "open_subj_fc('cbse_n11p')" },
            { url: "/med/thumb/cbse/11/cbse_n11c.webp", subject_item_id: "cbse_n11c", click_function: "open_subj_fc('cbse_n11c')" },
            { url: "/med/thumb/cbse/11/cbse_n11b.webp", subject_item_id: "cbse_n11b", click_function: "open_subj_fc('cbse_n11b')" }
        ]
    },
    {
        section_heading: "Formula Sheets",
        items: [
            { url: "/med/thumb/cbse/11/cbse_fs11p.webp", subject_item_id: "cbse_fs11p", click_function: "open_subj_fc('cbse_fs11p')" },
            { url: "/med/thumb/cbse/11/cbse_fs11c.webp", subject_item_id: "cbse_fs11c", click_function: "open_subj_fc('cbse_fs11c')" }
        ]
    },
    /*{
        section_heading: "Question Bank",
        items: [
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/11/cbse_qb11p_20261103_135237_0000.webp?updatedAt=1793694429438", subject_item_id: "cbse_qb11p", click_function: "open_subj_fc('cbse_qb11p')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/11/cbse_qb11c_20261103_135237_0001.webp?updatedAt=1793694429538", subject_item_id: "cbse_qb11c", click_function: "open_subj_fc('cbse_qb11c')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/11/cbse_qb11m_20261103_135237_0002.webp?updatedAt=1793694429064", subject_item_id: "cbse_qb11m", click_function: "open_subj_fc('cbse_qb11m')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/11/cbse_qb11b_20261103_135237_0003.webp?updatedAt=1793694429536", subject_item_id: "cbse_qb11b", click_function: "open_subj_fc('cbse_qb11b')" }
        ]
    },
    {
        section_heading: "PYQ's",
        items: [
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/11/cbse_pyq11p_20261103_135237_0004.webp?updatedAt=1793694429466", subject_item_id: "cbse_pyq11p", click_function: "open_subj_fc('cbse_pyq11p')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/11/cbse_pyq11c_20261103_135237_0005.webp?updatedAt=1793694429847", subject_item_id: "cbse_pyq11c", click_function: "open_subj_fc('cbse_pyq11c')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/11/cbse_pyq11m_20261103_135237_0006.webp?updatedAt=1793694429474", subject_item_id: "cbse_pyq11m", click_function: "open_subj_fc('cbse_pyq11m')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/11/cbse_pyq11b_20261103_135237_0007.webp?updatedAt=1793694429441", subject_item_id: "cbse_pyq11b", click_function: "open_subj_fc('cbse_pyq11b')" }
        ]
    },
    {
        section_heading: "Sample Paper",
        items: [
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/11/cbse_sp11p_20261103_135237_0008.webp?updatedAt=1793694429493", subject_item_id: "cbse_sp11p", click_function: "open_subj_fc('cbse_sp11p')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/11/cbse_sp11c_20261103_135238_0009.webp?updatedAt=1793694429270", subject_item_id: "cbse_sp11c", click_function: "open_subj_fc('cbse_sp11c')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/11/cbse_sp11m_20261103_135238_0010.webp?updatedAt=1793694429438", subject_item_id: "cbse_sp11m", click_function: "open_subj_fc('cbse_sp11m')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/11/cbse_sp11b_20261103_135238_0011.webp?updatedAt=1793694429370", subject_item_id: "cbse_sp11b", click_function: "open_subj_fc('cbse_sp11b')" }
        ]
    }*/
],
    
    grade_12: [
    {
        section_heading: "Ezee Notes - Grade 12",
        items: [
            { url: "/med/thumb/cbse/12/cbse_n12p.webp", subject_item_id: "cbse_n12p", click_function: "open_subj_fc('cbse_n12p')" },
            { url: "/med/thumb/cbse/12/cbse_n12c.webp", subject_item_id: "cbse_n12c", click_function: "open_subj_fc('cbse_n12c')" },
            { url: "/med/thumb/cbse/12/cbse_n12m.webp", subject_item_id: "cbse_n12m", click_function: "open_subj_fc('cbse_n12m')" },
            { url: "/med/thumb/cbse/12/cbse_n12b.webp", subject_item_id: "cbse_n12b", click_function: "open_subj_fc('cbse_n12b')" }
        ]
    },
    {
        section_heading: "Short Notes",
        items: [
            { url: "/med/thumb/cbse/12/cbse_nShort12p.webp", subject_item_id: "cbse_nShort12p", click_function: "open_subj_fc('cbse_nShort12p')" },
            { url: "/med/thumb/cbse/12/cbse_nShort12c.webp", subject_item_id: "cbse_nShort12c", click_function: "open_subj_fc('cbse_nShort12c')" },
            { url: "/med/thumb/cbse/12/cbse_nShort12m.webp", subject_item_id: "cbse_nShort12m", click_function: "open_subj_fc('cbse_nShort12m')" },
            { url: "/med/thumb/cbse/12/cbse_nShort12b.webp", subject_item_id: "cbse_nShort12b", click_function: "open_subj_fc('cbse_nShort12b')" }
        ]
    },
    {
        section_heading: "Formula Sheets",
        items: [
            { url: "/med/thumb/cbse/12/cbse_fs12p.webp", subject_item_id: "cbse_fs12p", click_function: "open_subj_fc('cbse_fs12p')" },
            { url: "/med/thumb/cbse/12/cbse_fs12c.webp", subject_item_id: "cbse_fs12c", click_function: "open_subj_fc('cbse_fs12c')" },
            { url: "/med/thumb/cbse/12/cbse_fs12m.webp", subject_item_id: "cbse_fs12m", click_function: "open_subj_fc('cbse_fs12m')" }
        ]
    },
    /*{
        section_heading: "Question Bank",
        items: [
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/12/cbse_qb12p_20261103_171302_0000.webp?updatedAt=1793706363678", subject_item_id: "cbse_qb12p", click_function: "open_subj_fc('cbse_qb12p')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/12/cbse_qb12c_20261103_171302_0001.webp?updatedAt=1793706364038", subject_item_id: "cbse_qb12c", click_function: "open_subj_fc('cbse_qb12c')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/12/cbse_qb12m_20261103_171302_0002.webp?updatedAt=1793706363523", subject_item_id: "cbse_qb12m", click_function: "open_subj_fc('cbse_qb12m')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/12/cbse_qb12b_20261103_171302_0003.webp?updatedAt=1793706363385", subject_item_id: "cbse_qb12b", click_function: "open_subj_fc('cbse_qb12b')" }
        ]
    },
    {
        section_heading: "PYQ's",
        items: [
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/12/cbse_pyq12p_20261103_171302_0004.webp?updatedAt=1793706363383", subject_item_id: "cbse_pyq12p", click_function: "open_subj_fc('cbse_pyq12p')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/12/cbse_pyq12c_20261103_171302_0005.webp?updatedAt=1793706363509", subject_item_id: "cbse_pyq12c", click_function: "open_subj_fc('cbse_pyq12c')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/12/cbse_pyq12m_20261103_171302_0007.webp?updatedAt=1793706363425", subject_item_id: "cbse_pyq12m", click_function: "open_subj_fc('cbse_pyq12m')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/12/cbse_pyq12b_20261103_171302_0006.webp?updatedAt=1793706363549", subject_item_id: "cbse_pyq12b", click_function: "open_subj_fc('cbse_pyq12b')" }
        ]
    },
    {
        section_heading: "Sample Paper",
        items: [
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/12/cbse_sp12p_20261103_171302_0008.webp?updatedAt=1793706363429", subject_item_id: "cbse_sp12p", click_function: "open_subj_fc('cbse_sp12p')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/12/cbse_sp12c_20261103_171303_0009.webp?updatedAt=1793706363276", subject_item_id: "cbse_sp12c", click_function: "open_subj_fc('cbse_sp12c')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/12/cbse_sp12m_20261103_171303_0010.webp?updatedAt=1793706363349", subject_item_id: "cbse_sp12m", click_function: "open_subj_fc('cbse_sp12m')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/cbse/12/cbse_sp12b_20261103_171303_0011.webp?updatedAt=1793706363378", subject_item_id: "cbse_sp12b", click_function: "open_subj_fc('cbse_sp12b')" }
        ]
    }*/
]
  },
  // ICSE BOARD =====================
  icse: {
    grade_10:[
    {
        section_heading: "Ezee Notes – Grade 10",
        items: [
            { url: "/med/thumb/icse/10/icse_n10p.webp", subject_item_id: "icse_n10p", click_function: "open_subj_fc('icse_n10p')" },
            { url: "/med/thumb/icse/10/icse_n10c.webp", subject_item_id: "icse_n10c", click_function: "open_subj_fc('icse_n10c')" },
            //{ url: "/med/thumb/icse/10/icse_n10m.webp", subject_item_id: "icse_n10m", click_function: "open_subj_fc('icse_n10m')" },
            { url: "/med/thumb/icse/10/icse_n10b.webp", subject_item_id: "icse_n10b", click_function: "open_subj_fc('icse_n10b')" },
            //{ url: "/med/thumb/icse/10/icse_n10geo.webp", subject_item_id: "icse_n10geo", click_function: "open_subj_fc('icse_n10geo')" },
            //{ url: "/med/thumb/icse/10/icse_n10hisCiv.webp", subject_item_id: "icse_n10hisCiv", click_function: "open_subj_fc('icse_n10hisCiv')" }
        ]
    },
    /*{
        section_heading: "Short Notes",
        items: [
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_nShort10p_20261103_173148_0006.webp?updatedAt=1793707966519", subject_item_id: "icse_nShort10p", click_function: "open_subj_fc('icse_nShort10p')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_nShort10c_20261103_173148_0007.webp?updatedAt=1793707966551", subject_item_id: "icse_nShort10c", click_function: "open_subj_fc('icse_nShort10c')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_nShort10m_20261103_173148_0008.webp?updatedAt=1793707966225", subject_item_id: "icse_nShort10m", click_function: "open_subj_fc('icse_nShort10m')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_nShort10b_20261103_173148_0009.webp?updatedAt=1793707966594", subject_item_id: "icse_nShort10b", click_function: "open_subj_fc('icse_nShort10b')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_nShort10geo_20261103_173148_0011.webp?updatedAt=1793707966504", subject_item_id: "icse_nShort10geo", click_function: "open_subj_fc('icse_nShort10geo')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_nShort10hisCiv_20261103_173148_0010.webp?updatedAt=1793707966339", subject_item_id: "icse_nShort10hisCiv", click_function: "open_subj_fc('icse_nShort10hisCiv')" }
        ]
    },
    {
        section_heading: "Question Bank",
        items: [
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_qb10p_20261103_173949_0000.webp?updatedAt=1793707966647", subject_item_id: "icse_qb10p", click_function: "open_subj_fc('icse_qb10p')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_qb10c_20261103_173950_0001.webp?updatedAt=1793707966279", subject_item_id: "icse_qb10c", click_function: "open_subj_fc('icse_qb10c')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_qb10m_20261103_173950_0002.webp?updatedAt=1793707966479", subject_item_id: "icse_qb10m", click_function: "open_subj_fc('icse_qb10m')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_qb10b_20261103_173951_0003.webp?updatedAt=1793707966482", subject_item_id: "icse_qb10b", click_function: "open_subj_fc('icse_qb10b')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_qb10geo_20261103_173951_0004.webp?updatedAt=1793707966411", subject_item_id: "icse_qb10geo", click_function: "open_subj_fc('icse_qb10geo')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_qb10hisCiv_20261103_173951_0005.webp?updatedAt=1793707966555", subject_item_id: "icse_qb10hisCiv", click_function: "open_subj_fc('icse_qb10hisCiv')" }
        ]
    },
    {
        section_heading: "PYQ's",
        items: [
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_pyq10p_20261103_173951_0006.webp?updatedAt=1793707966554", subject_item_id: "icse_pyq10p", click_function: "open_subj_fc('icse_pyq10p')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_pyq10c_20261103_173951_0007.webp?updatedAt=1793707966592", subject_item_id: "icse_pyq10c", click_function: "open_subj_fc('icse_pyq10c')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_pyq10m_20261103_173951_0008.webp?updatedAt=1793707966524", subject_item_id: "icse_pyq10m", click_function: "open_subj_fc('icse_pyq10m')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_pyq10b_20261103_173951_0009.webp?updatedAt=1793707966623", subject_item_id: "icse_pyq10b", click_function: "open_subj_fc('icse_pyq10b')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_pyq10geo_20261103_173951_0010.webp?updatedAt=1793707966417", subject_item_id: "icse_pyq10geo", click_function: "open_subj_fc('icse_pyq10geo')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_pyq10hisCiv_20261103_173952_0011.webp?updatedAt=1793707966521", subject_item_id: "icse_pyq10hisCiv", click_function: "open_subj_fc('icse_pyq10hisCiv')" }
        ]
    },
    {
        section_heading: "Sample Paper",
        items: [
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_sp10p_20261103_173952_0012.webp?updatedAt=1793707966451", subject_item_id: "icse_sp10p", click_function: "open_subj_fc('icse_sp10p')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_sp10c_20261103_173952_0013.webp?updatedAt=1793707966254", subject_item_id: "icse_sp10c", click_function: "open_subj_fc('icse_sp10c')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_sp10m_20261103_173952_0014.webp?updatedAt=1793707966236", subject_item_id: "icse_sp10m", click_function: "open_subj_fc('icse_sp10m')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_sp10b_20261103_173952_0015.webp?updatedAt=1793707966593", subject_item_id: "icse_sp10b", click_function: "open_subj_fc('icse_sp10b')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_sp10geo_20261103_173952_0017.webp?updatedAt=1793707966442", subject_item_id: "icse_sp10geo", click_function: "open_subj_fc('icse_sp10geo')" },
            { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/icse/10/icse_sp10hisCiv_20261103_173952_0016.webp?updatedAt=1793707966558", subject_item_id: "icse_sp10hisCiv", click_function: "open_subj_fc('icse_sp10hisCiv')" }
        ]
    }*/
]
  },
  // NEET AND JEE ===================
  njee: {
      grade_njee: njee_data}
}
subject_data.cbse.grade_11.push(njee_notesdata);
subject_data.cbse.grade_12.push(njee_notesdata);

subject_data.icse.grade_10.push(njee_notesdata);