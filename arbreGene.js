



   
   var chart = new OrgChart(document.getElementById("orgchart"), {
       template: "diva",
       menu: {
           importCSV: {
               text: "Import CSV",
               icon: OrgChart.icon.csv(24, 24, '#7A7A7A'),
               onClick: function () { chart.importCSV(); }
           },
           csv: { text: "Export CSV" }
       },
       
        nodeBinding: {
        field_0: "name",
        field_1: "Nee",
        field_2: "StatutMatrimonial",
        field_3: "Adresse",
        field_4: "Telephone",
        field_5: "Email",
        field_6: "Deces",
        img_0: "img"

            },
    nodes: [
        { id: 1, pid: 2, tags: ['partner'], name: "FOKAM DAVID", Nee: "1936", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 2, name: "MAKOUNDJOU Madeleine", Nee: "1939", img: "images/images.png", StatutMatrimonial: "Mariée" },
        // { id: 3, pid: 1, tags: ['partner'], name: "MAHOUT Lydie", Nee: "", img: "images/images.png", StatutMatrimonial: "Mariée" },
        // { id: 4, pid: 1, tags: ['partner'], name: "MANDE Odette", Nee: "1954", img: "images/images.png", StatutMatrimonial: "Mariée" },
        { id: 3, pid: 2, name: "TCHOUGA Cécile Véronique", Nee: "03 janvier  à Bameka", Adresse: "Cameroun, Bertoua", Telephone: "", Email: "", img: "images/images.png", StatutMatrimonial: "Mariée" },
        { id: 4, pid: 2, name: "NDE FOKAM Léonard", Nee: "01 octobre  à Bameka", Adresse: "Cameroun, Ebolowa", Telephone: "", Email: "", img: "images/images.png", StatutMatrimonial: "Marié" },
        { id: 5, pid: 2, name: "MACHE FOKAM Christine Gisele", Nee: "23 Décembre 1962 à Bameka", Adresse: "Cameroun, Douala", Telephone: "", Email: "", img: "images/images.png", StatutMatrimonial: "Mariée" },
        { id: 6, pid: 2, name: "MAFOTSING Brigitte", Nee: "19 Février  à Bafoussam", Adresse: "Cameroun, Bafoussam", Telephone: "", Email: "", img: "images/images.png", StatutMatrimonial: "Mariée" },
        { id: 7, pid: 2, name: "KENGNE FOKAM Hortense Bernadette", Nee: "29 Aout  à Bafoussam", Adresse: "Cameroun, Dschang", Telephone: "", Email: "", img: "images/images.png", StatutMatrimonial: "" },
        { id: 8, pid: 2, name: "NGUMETE FOKAM Roland Guy", Nee: "06 novembre  à Bafoussam", Adresse: "Cameroun, Douala", Telephone: "", Email: "", img: "images/images.png", StatutMatrimonial: "Marié", Deces: "15 janvier 2015" },
        { id: 9, pid: 2, name: "PEHUI FOKAM	Francis Emmanuel", Nee: "20 février  à Bafoussam", Adresse: "Canada", Telephone: "", Email: "", img: "images/images.png", StatutMatrimonial: "Marié" },
        { id: 10, pid: 2, pid: 11, tags: ['partner'], name: "FOKOU Elvis", Nee: "18 septembre 1982 à Bafoussam", Adresse: "Cameroun, Yaoundé", Telephone: "", Email: "", img: "images/images.png", StatutMatrimonial: "Mariée" },
        { id: 11, pid: 2, name: "MATCHI FOKAM Lydie Charlotte", Nee: "18 septembre  à Bafoussam", Adresse: "Cameroun, Yaoundé", Telephone: "", Email: "", img: "images/images.png", StatutMatrimonial: "Mariée" },
        { id: 12, pid: 3, tags: ['partner'], name: "TEGAH Alain Perault", Nee: "05 Mai a Bameka", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 13, pid: 4, tags: ['partner'], name: "CLemence", Nee: "", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 14, pid: 5, tags: ['partner'], name: "JAKAM jean Moise", Nee: "12 Janvier a BAMEKA", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 15, pid: 6, tags: ['partner'], name: "MBA Simeon", Nee: "08 Novembre", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 16, pid: 8, tags: ['partner'], name: "MAHADAT NZUEMEGUE Alvine Flore", Nee: " ", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 17, pid: 9, tags: ['partner'], name: "DJOUISSI NDE Diane", Nee: "", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 18, pid: 3, name: "PEHUI TEGAH Franklin Aurel", Nee: "28 Mai a Bertoua", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 19, pid: 3, name: "KOUGANG TEGAH Anne Nadege", Nee: "27 Avril a Bertoua", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 20, pid: 3, name: "Youogho TEGAH Edwige Laure", Nee: "22 Novembre a Bertoua", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 21, pid: 3, name: "MADJOU TEGAH NATHALIE", Nee: "22 Novembre a Bertoua", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 22, pid: 3, name: "MBE TEGAH Hyacinthe Raoul ", Nee: "26 juin  a Bertoua", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 23, pid: 3, name: "KUISSI TEGAH Adelaide Marie-noel", Nee: "24 decembre a Bertoua", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 24, pid: 4, name: "FOKAM NDE Alain David", Nee: "02 Janvier a Bameka", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 25, pid: 4, name: "AKAM NDE Corine Clemence", Nee: "02 Avril a Bameka", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 26, pid: 4, name: "FOSSI NDE Willy Edwin", Nee: "15 mars a Bameka", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 27, pid: 4, name: "AKOUNDJOU NDE Joyce Madeleine", Nee: "16 Janvier a Hopital provincial du sud", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 28, pid: 4, name: "NDE FOKAM Paul Harmony", Nee: "22 juillet  a EBOLOWA", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 29, pid: 4, name: "NDE JAKAM Jonathan Mathis", Nee: "11 Novembre", img: "images/images.png", StatutMatrimonial : "Celibataire" },
        { id: 30, pid: 5, name: "JAKAM NONO Francine Aurelie", Nee: "20 Octobre a Yaounde", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 31, pid: 5, name: " JAKAM FEUKAM Jurgen", Nee: "21 Mars a Yaounde", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 32, pid: 5, name: "MATCHI JAKAM Valerie", Nee: "08 Juillet a Douala", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 33, pid: 5, name: "JAKAM NACKOP Arthur", Nee: "25 Mai a Daouala", img: "images/images.png", StatutMatrimonial : "Marié" },
        { id: 34, pid: 5, name: " CHEUTSHUA JAKAM Larry", Nee: "08 Juin a Douala", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 35, pid: 7, name: " FOKAM MBA Hermann Thierry", Nee: "02 Fevrier a Douala", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 36, pid: 6, name: " MADJOU MBA Esperance Marguerite", Nee: "26 Mai", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 37, pid: 6, name: " Massuh MBA Carelle Patricia", Nee: "22 Fevrier a ", img: "images/images.png", StatutMatrimonial : "mariee" },
        { id: 38, pid: 6, name: " MAKOUNDJOU  MBA Ruth", Nee: "06 Fevrier a ", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 39, pid: 6, name: " TAKAMTE MBA Madeleine Rhodes", Nee: "06 Fevrier a", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 40, pid: 6, name: " KENGNE MBA Diane Lauriane", Nee: "02 Juillet a ", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 41, pid: 6, name: " FOKAM MBA David", Nee: "15 juillet a ", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 42, pid: 6, name: " MAFOKUONG MBA Danielle  Joelle", Nee: "02 Fevrier a Douala", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 43, pid: 8, name: " MAKOUDJOU NGUEMETE Ornella", Nee: "23 Juillet a Douala", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 44, pid: 8, name: " CHOUPA NGUEMETE Arold", Nee: "29 Mai a Douala", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 45, pid: 8, name: " YEMELI NGUEMETE Junior ", Nee: "03 Janvier a Douala", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 46, pid: 8, name: " YOUMBISSI NGUEMETE Christ Stephane", Nee: "21 Aout a Douala", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 47, pid: 9, name: " Brittany Carmella", Nee: "", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 48, pid: 9, name: " Joseph Farel", Nee: "02 Fevrier a Douala", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 49, pid: 9, name: " Sarah", Nee: "02 Fevrier a Douala", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 50, pid: 11, name: " MAKOUNDJOU FOGOU Manuella Kelly", Nee: "03 Janvier a Douala", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 51, pid: 11, name: " SOH FOGOU Arnold Chrislain", Nee: "11 Juin a Yaounde", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 52, pid: 11, name: " TCHOUGA FOGOU Joelle Jemima", Nee: "03 Janvier a Yaounde", img: "images/images.png", StatutMatrimonial : "celibataire" },
        { id: 53, pid: 11, name: " Djoungouang Fogou Michelle Lydiana", Nee: "08 Juillet a Yaounde", img: "images/images.png", StatutMatrimonial : "celibataire" },
    ]
    
        });


// window.onload = function () {

//     var familyGroupTag = {
//         group: true,
//         template: "group"
//     };

//     var familyGroupTag3 = {
//         group: true,
//         template: "group3"
//     };

//     OrgChart.templates.group.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}"/>';
//     btnMinimize =
//         '<svg fill="#aeaeae" x="410" y="17" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
//         'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
//         '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
//         '<polygon points="311.683,349.411 205.12,242.5 311.683,135.589 290.435,114.411 162.762,242.5 290.435,370.589 	"/>' +
//         '</svg>';
//     btnMaximize =
//         '<svg fill="#aeaeae" x="198" y="47" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
//         'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
//         '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
//         '<polygon points="194.565,370.589 322.237,242.5 194.565,114.411 173.317,135.589 279.88,242.5 173.317,349.411 	"/>' +
//         '</svg>';
//     btnMinimize3 =
//         '<svg fill="#aeaeae" x="630" y="17" height="24" width="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"' +
//         'viewBox="0 0 485 485" style="enable-background:new 0 0 485 485;" xml:space="preserve">' +
//         '<path d="M0,0v485h485V0H0z M455,455H30V30h425V455z"/>' +
//         '<polygon points="311.683,349.411 205.12,242.5 311.683,135.589 290.435,114.411 162.762,242.5 290.435,370.589 	"/>' +
//         '</svg>';

//     OrgChart.templates.group.min = Object.assign({}, OrgChart.templates.group);
//     OrgChart.templates.group.min.name = '<text data-width="230" data-text-overflow="multiline" style="font-size: 24px;" fill="#aeaeae" x="125" y="65" text-anchor="middle">{val}</text>';
//     OrgChart.templates.group.minBtn = btnMinimize +
//         '<rect data-btn-min="{val}" x="410" y="17" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
//     OrgChart.templates.group3 = Object.assign({}, OrgChart.templates.group);
//     OrgChart.templates.group3.minBtn = btnMinimize3 +
//         '<rect data-btn-min="{val}" x="630" y="17" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';
//     OrgChart.templates.group.min.maxBtn = btnMaximize +
//         '<rect data-btn-max="{val}" x="198" y="47" height="24" width="24" fill="red" fill-opacity="0" opastroke-width="1" stroke="#aeaeae"></rect>';

//     var chart = new OrgChart(document.getElementById("orgchart"), {
        
//         template: "diva",
//         enableDragDrop: true,
//         nodeBinding: {
//             field_0: "name",
//             field_1: "title",
//             img_0: "img",
//             minBtn: "id",
//             maxBtn: "id",
            
//         },
//         tags: {
//             f1: familyGroupTag,
//             f2: familyGroupTag,
//             f3: familyGroupTag3,
//             f4: familyGroupTag,
//             f5: familyGroupTag
//         },

//     });

//     nodes = [
//         { id: "f1", tags: ["f1"] },
//         { id: 1, stpid: "f1", name: "FOKAM DAVID", img: "https://cdn.balkan.app/shared/f1.png", title: "1936" },
//         { id: 2, stpid: "f1", name: "MAKOUNDJOU Madeleine", title: "1939", img: "https://cdn.balkan.app/shared/f2.png" },
//         { id: "f2", pid: "f1", tags: ["f2"] },
//         { id: 3, stpid: "f2", pid: 2, name: "Prince Philip", title: "Duke of Edinburgh", img: "https://cdn.balkan.app/shared/f3.png" },
//         { id: 4, stpid: "f2", pid: 2, name: "Queen Elizabeth II", img: "https://cdn.balkan.app/shared/f5.png" },
//         { id: 5, pid: "f1", name: "Princess Margaret", img: "https://cdn.balkan.app/shared/f6.png" },
//         { id: "f3", pid: "f2", tags: ["f3"] },
//         { id: 6, stpid: "f3", name: "Camila", title: "Duchess of Cornwall", img: "https://cdn.balkan.app/shared/f7.png" },
//         { id: 7, stpid: "f3", name: "Charles", title: "Prince of Wales", img: "https://cdn.balkan.app/shared/f8.png" },
//         { id: 8, stpid: "f3", name: "Diana", title: "Princess of Wales", img: "https://cdn.balkan.app/shared/f9.png" },
//         { id: 9, pid: "f2", name: "Anne", title: "Princess Royal", img: "https://cdn.balkan.app/shared/f10.png" },
//         { id: 10, pid: "f2", name: "Prince Andrew", title: "Duke of York", img: "https://cdn.balkan.app/shared/f11.png" },
//         { id: 11, pid: "f2", name: "Prince Edward", title: "Earl of Wessex", img: "https://cdn.balkan.app/shared/f12.png" },
//         { id: "f4", pid: "f3", tags: ["f4"] },
//         { id: 12, stpid: "f4", name: "Catherine", title: "Duchess of Cambridge", img: "https://cdn.balkan.app/shared/f13.png" },
//         { id: 13, stpid: "f4", name: "Prince William", title: "Duch of Cambridge", img: "https://cdn.balkan.app/shared/f14.png" },
//         { id: "f5", pid: "f3", tags: ["f5"] },
//         { id: 14, stpid: "f5", name: "Prince Harry", img: "https://cdn.balkan.app/shared/f15.png" },
//         { id: 15, stpid: "f5", name: "Meghan Markle", img: "https://cdn.balkan.app/shared/f16.png" },
//         { id: 16, pid: "f4", name: "Prince George of Cambridge", img: "https://cdn.balkan.app/shared/f17.png" },
//         { id: 17, pid: "f4", name: "Prince Charlotte of Cambridge", img: "https://cdn.balkan.app/shared/f18.png" },
//         { id: 18, pid: "f4", name: "Prince Louis of Cambridge", img: "https://cdn.balkan.app/shared/f19.png" }
//     ];


//     chart.on('redraw', (sender) => {
//         let minBtns = document.querySelectorAll('*[data-btn-min]');

//         minBtns.forEach(btn => {
//             btn.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 chart.minimize(btn.getAttribute('data-btn-min'));
//             });
//         });

//         let maxBtns = document.querySelectorAll('*[data-btn-max]');

//         maxBtns.forEach(btn => {
//             btn.addEventListener('click', (e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//                 chart.maximize(btn.getAttribute('data-btn-max'));
//             });
//         });

//     });


//     chart.load(nodes);

// };