let njee_notesdata = {
    section_heading: "Ezee Notes (NEET/JEE)",
    items: [
        { url: "med/thumb/njee/njee/njee_fbook1112p.webp", subject_item_id: "njee_fbook1112p", click_function: "open_subj_fc('njee_fbook1112p')" },
        { url: "med/thumb/njee/njee/njee_fbook1112c.webp", subject_item_id: "njee_fbook1112c", click_function: "open_subj_fc('njee_fbook1112c')" },
        /*
        { url: "https://ik.imagekit.io/kd7hxq8py/thumb/2611/njee/njee_fbook1112m.webp?updatedAt=1793692565204", subject_item_id: "njee_fbook1112m", click_function: "open_subj_fc('njee_fbook1112m')" },
        */
        { url: "med/thumb/njee/njee/njee_hbook11p.webp", subject_item_id: "njee_hbook11p", click_function: "open_subj_fc('njee_hbook11p')" },
        { url: "med/thumb/njee/njee/njee_hbook12p.webp", subject_item_id: "njee_hbook12p", click_function: "open_subj_fc('njee_hbook12p')" }
    ]
};

let njee_data = [
    njee_notesdata,
    {
        section_heading: "PYQ's",
        items: [
            { url: "med/thumb/njee/njee/njee_pyqnjeep.webp", subject_item_id: "njee_pyqnjeep", click_function: "open_subj_fc('njee_pyqnjeep')" },
            { url: "med/thumb/njee/njee/njee_pyqnjeec.webp", subject_item_id: "njee_pyqnjeec", click_function: "open_subj_fc('njee_pyqnjeec')" },
            { url: "med/thumb/njee/njee/njee_pyqnjeeb.webp", subject_item_id: "neet_pyqnjeeb", click_function: "open_subj_fc('neet_pyqnjeeb')" }
        ]
    }
];

let subject_data = {
    // CBSE
    cbse: {
        grade_9: [
            {
                section_heading: "Short Notes - Grade 9",
                items: [
                    { url: "med/thumb/cbse/9/cbse_nShort9s.webp", subject_item_id: "cbse_nShort9s", click_function: "open_subj_fc('cbse_nShort9s')" },
                    { url: "med/thumb/cbse/9/cbse_nShort9m.webp", subject_item_id: "cbse_nShort9m", click_function: "open_subj_fc('cbse_nShort9m')" },
                    { url: "med/thumb/cbse/9/cbse_nShort9ss.webp", subject_item_id: "cbse_nShort9ss", click_function: "open_subj_fc('cbse_nShort9ss')" }
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

        grade_10: [
            {
                section_heading: "Ezee Notes (Class 10)",
                items: [
                    { url: "med/thumb/cbse/10/cbse_n10s.webp", subject_item_id: "cbse_n10s", click_function: "open_subj_fc('cbse_n10s')" },
                    { url: "med/thumb/cbse/10/cbse_n10m.webp", subject_item_id: "cbse_n10m", click_function: "open_subj_fc('cbse_n10m')" },
                    { url: "med/thumb/cbse/10/cbse_n10ss.webp", subject_item_id: "cbse_n10ss", click_function: "open_subj_fc('cbse_n10ss')" }
                ]
            }
        ],

        grade_11: [
            {
                section_heading: "Ezee Notes - Grade 11",
                items: [
                    { url: "med/thumb/cbse/11/cbse_n11p.webp", subject_item_id: "cbse_n11p", click_function: "open_subj_fc('cbse_n11p')" },
                    { url: "med/thumb/cbse/11/cbse_n11c.webp", subject_item_id: "cbse_n11c", click_function: "open_subj_fc('cbse_n11c')" },
                    { url: "med/thumb/cbse/11/cbse_n11b.webp", subject_item_id: "cbse_n11b", click_function: "open_subj_fc('cbse_n11b')" }
                ]
            },
            {
                section_heading: "Formula Sheets",
                items: [
                    { url: "med/thumb/cbse/11/cbse_fs11p.webp", subject_item_id: "cbse_fs11p", click_function: "open_subj_fc('cbse_fs11p')" },
                    { url: "med/thumb/cbse/11/cbse_fs11c.webp", subject_item_id: "cbse_fs11c", click_function: "open_subj_fc('cbse_fs11c')" }
                ]
            }
        ],

        grade_12: [
            {
                section_heading: "Ezee Notes - Grade 12",
                items: [
                    { url: "med/thumb/cbse/12/cbse_n12p.webp", subject_item_id: "cbse_n12p", click_function: "open_subj_fc('cbse_n12p')" },
                    { url: "med/thumb/cbse/12/cbse_n12c.webp", subject_item_id: "cbse_n12c", click_function: "open_subj_fc('cbse_n12c')" },
                    { url: "med/thumb/cbse/12/cbse_n12m.webp", subject_item_id: "cbse_n12m", click_function: "open_subj_fc('cbse_n12m')" },
                    { url: "med/thumb/cbse/12/cbse_n12b.webp", subject_item_id: "cbse_n12b", click_function: "open_subj_fc('cbse_n12b')" }
                ]
            },
            {
                section_heading: "Short Notes",
                items: [
                    { url: "med/thumb/cbse/12/cbse_nShort12p.webp", subject_item_id: "cbse_nShort12p", click_function: "open_subj_fc('cbse_nShort12p')" },
                    { url: "med/thumb/cbse/12/cbse_nShort12c.webp", subject_item_id: "cbse_nShort12c", click_function: "open_subj_fc('cbse_nShort12c')" },
                    { url: "med/thumb/cbse/12/cbse_nShort12m.webp", subject_item_id: "cbse_nShort12m", click_function: "open_subj_fc('cbse_nShort12m')" },
                    { url: "med/thumb/cbse/12/cbse_nShort12b.webp", subject_item_id: "cbse_nShort12b", click_function: "open_subj_fc('cbse_nShort12b')" }
                ]
            },
            {
                section_heading: "Formula Sheets",
                items: [
                    { url: "med/thumb/cbse/12/cbse_fs12p.webp", subject_item_id: "cbse_fs12p", click_function: "open_subj_fc('cbse_fs12p')" },
                    { url: "med/thumb/cbse/12/cbse_fs12c.webp", subject_item_id: "cbse_fs12c", click_function: "open_subj_fc('cbse_fs12c')" },
                    { url: "med/thumb/cbse/12/cbse_fs12m.webp", subject_item_id: "cbse_fs12m", click_function: "open_subj_fc('cbse_fs12m')" }
                ]
            }
        ]
    },

    // ICSE BOARD
    icse: {
        grade_10: [
            {
                section_heading: "Ezee Notes – Grade 10",
                items: [
                    { url: "med/thumb/icse/10/icse_n10p.webp", subject_item_id: "icse_n10p", click_function: "open_subj_fc('icse_n10p')" },
                    { url: "med/thumb/icse/10/icse_n10c.webp", subject_item_id: "icse_n10c", click_function: "open_subj_fc('icse_n10c')" },
                    //{ url: "med/thumb/icse/10/icse_n10m.webp", subject_item_id: "icse_n10m", click_function: "open_subj_fc('icse_n10m')" },
                    { url: "med/thumb/icse/10/icse_n10b.webp", subject_item_id: "icse_n10b", click_function: "open_subj_fc('icse_n10b')" },
                    //{ url: "med/thumb/icse/10/icse_n10geo.webp", subject_item_id: "icse_n10geo", click_function: "open_subj_fc('icse_n10geo')" },
                    //{ url: "med/thumb/icse/10/icse_n10hisCiv.webp", subject_item_id: "icse_n10hisCiv", click_function: "open_subj_fc('icse_n10hisCiv')" }
                ]
            }
        ]
    },

    // NEET AND JEE
    njee: {
        grade_njee: njee_data
    }
};

subject_data.cbse.grade_11.push(njee_notesdata);
subject_data.cbse.grade_12.push(njee_notesdata);
subject_data.icse.grade_10.push(njee_notesdata);
