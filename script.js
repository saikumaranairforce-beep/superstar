/* JavaScript Functionality
   Note: For each song / comedy card below, replace 'YOUR_YOUTUBE_URL_HERE'
   with the actual YouTube URL of that clip. This keeps the JSON structure
   simple and easy to update for fans.
*/

// --- Local Rajini Images for Dynamic Gallery ---
// (Use all your local images here)
const RAJINI_IMAGES = [
    'img1.jpeg', 'img2.jpeg', 'img3.jpeg',
    'img4.jpeg', 'img5.jpeg', 'img6.jpeg',
    'img7.jpeg', 'img8.jpeg', ,'img9.jpeg','img10.jpeg','img11.jpeg','img12.jpeg','img13.jpeg','img14.jpeg','img15.jpeg','img16.jpeg','img17.jpeg','img18.jpeg','img19.jpeg'
];

// Full Filmography Data (unchanged from your file)

const FILMOGRAPHY_DATA = [
    {
        "Year": "1975",
        "Title": "Apoorva Raagangal",
        "Role": "Pandiyan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1976",
        "Title": "Katha Sangama",
        "Role": "Kondaji",
        "Language": "Kannada",
        "Notes": ""
    },
    {
        "Year": "1976",
        "Title": "Anthuleni Katha",
        "Role": "Murthy",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1976",
        "Title": "Moondru Mudichu",
        "Role": "Prasath",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1976",
        "Title": "Baalu Jenu",
        "Role": "Vasu",
        "Language": "Kannada",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Avargal",
        "Role": "Ramanathan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Kavikkuyil",
        "Role": "Murugan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Raghupathi Raghavan Rajaram",
        "Role": "Veeraiyan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Chilakamma Cheppindi",
        "Role": "Ravi",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Bhuvana Oru Kelvi Kuri",
        "Role": "Sampath",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Ondu Premada Kathe",
        "Role": "Chairman of village panchayat",
        "Language": "Kannada",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "16 Vayathinile",
        "Role": "Parattai",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Sahodarara Savaal",
        "Role": "Somashekhar",
        "Language": "Kannada",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Aadu Puli Attam",
        "Role": "Rajini",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Gayathri",
        "Role": "Rajarathnam",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Kumkuma Rakshe",
        "Role": "Murali",
        "Language": "Kannada",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Aaru Pushpangal",
        "Role": "Ravi",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Tholireyi Gadichindi",
        "Role": "Chitti Babu",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1977",
        "Title": "Aame Katha",
        "Role": "–",
        "Language": "Telugu",
        "Notes": "Guest appearance"
    },
    {
        "Year": "1977",
        "Title": "Galate Samsara",
        "Role": "Sundar",
        "Language": "Kannada",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Shankar Salim Simon",
        "Role": "Simon",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Kiladi Kittu",
        "Role": "Srikanth",
        "Language": "Kannada",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Annadammula Savaal",
        "Role": "Rangababu",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Aayiram Jenmangal",
        "Role": "Ramesh",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Maathu Tappada Maga",
        "Role": "Chandru",
        "Language": "Kannada",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Mangudi Minor",
        "Role": "Kumar",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Bairavi",
        "Role": "Mookaiah",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Ilamai Oonjal Aadukirathu",
        "Role": "Murali",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Sadhurangam",
        "Role": "Sundaresan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Vanakkatukuriya Kathaliye",
        "Role": "Joe",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Vayasu Pilichindi",
        "Role": "Murali",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Mullum Malarum",
        "Role": "Kaali",
        "Language": "Tamil",
        "Notes": "Tamil Nadu State Film Award Special Prize"
    },
    {
        "Year": "1978",
        "Title": "Iraivan Kodutha Varam",
        "Role": "Rajnikanth",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Thappida Thala",
        "Role": "Devu",
        "Language": "Kannada",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Thappu Thalangal",
        "Role": "Devu",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Aval Appadithan",
        "Role": "Thyagu",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Thai Meethu Sathiyam",
        "Role": "Babu",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "En Kelvikku Enna Bathil",
        "Role": "Saravana",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Paavathin Sambalam",
        "Role": "Himself",
        "Language": "Tamil",
        "Notes": "Guest appearance"
    },
    {
        "Year": "1978",
        "Title": "Justice Gopinath",
        "Role": "Ravi",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Priya",
        "Role": "Ganesh",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1978",
        "Title": "Priya",
        "Role": "Ganesh",
        "Language": "Kannada",
        "Notes": ""
    },
    {
        "Year": "1979",
        "Title": "Kuppathu Raja",
        "Role": "Raja",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1979",
        "Title": "Iddaru Asadhyule",
        "Role": "Bhaskar",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1979",
        "Title": "Allauddinum Albhutha Vilakkum",
        "Role": "Kamruddin",
        "Language": "Malayalam",
        "Notes": "Bilingual film"
    },
    {
        "Year": "1979",
        "Title": "Allaudinaum Arputha Vilakkum",
        "Role": "Kamruddin",
        "Language": "Tamil",
        "Notes": "Bilingual film"
    },
    {
        "Year": "1979",
        "Title": "Ninaithale Inikkum",
        "Role": "Deepak",
        "Language": "Tamil",
        "Notes": "Bilingual film"
    },
    {
        "Year": "1979",
        "Title": "Andamaina Anubhavam",
        "Role": "Dilip",
        "Language": "Telugu",
        "Notes": "Bilingual film"
    },
    {
        "Year": "1979",
        "Title": "Thaayillamal Naan Illai",
        "Role": "Bichwa Bakri",
        "Language": "Tamil",
        "Notes": "Guest appearance"
    },
    {
        "Year": "1979",
        "Title": "Dharma Yuddham",
        "Role": "Vijay",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1979",
        "Title": "Naan Vazhavaippen",
        "Role": "Michael D'Souza",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1979",
        "Title": "Tiger",
        "Role": "Rashid",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1979",
        "Title": "Aarilirunthu Arubathu Varai",
        "Role": "Santhanam",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1979",
        "Title": "Annai Oru Aalayam",
        "Role": "Vijay",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1979",
        "Title": "Amma Evarikkaina Amma",
        "Role": "Vijay",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "Billa",
        "Role": "David Billa, Rajappa",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "Natchathiram",
        "Role": "Himself",
        "Language": "Tamil",
        "Notes": "Guest appearance"
    },
    {
        "Year": "1980",
        "Title": "Ram Robert Rahim",
        "Role": "Inspector Ram",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "Anbukku Naan Adimai",
        "Role": "Gopinath",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "Kaali",
        "Role": "Kaali",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "Kaali",
        "Role": "Kaali",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "Mayadari Krishnudu",
        "Role": "Krishnudu",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "Naan Potta Savaal",
        "Role": "Ramu (Shiva)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "Johnny",
        "Role": "Johnny, Vidyasagar",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "Ellam Un Kairasi",
        "Role": "Raja",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "Polladhavan",
        "Role": "Manohar",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1980",
        "Title": "Murattu Kaalai",
        "Role": "Kaalaiyan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1981",
        "Title": "Thee",
        "Role": "Rajashekar",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1981",
        "Title": "Kazhugu",
        "Role": "Raja",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1981",
        "Title": "Thillu Mullu",
        "Role": "Chandran (Indiran)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1981",
        "Title": "Garjanai",
        "Role": "Vijay",
        "Language": "Tamil",
        "Notes": "Trilingual film"
    },
    {
        "Year": "1981",
        "Title": "Garjanam",
        "Role": "Vijay",
        "Language": "Malayalam",
        "Notes": "Trilingual film"
    },
    {
        "Year": "1981",
        "Title": "Garjane",
        "Role": "Vijay",
        "Language": "Kannada",
        "Notes": "Trilingual film"
    },
    {
        "Year": "1981",
        "Title": "Netrikkan",
        "Role": "Chakravarthi, Santhosh",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1981",
        "Title": "Ranuva Veeran",
        "Role": "Raghu",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1982",
        "Title": "Pokkiri Raja",
        "Role": "Ramesh, Raja",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1982",
        "Title": "Thanikattu Raja",
        "Role": "Suryaprakash",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1982",
        "Title": "Ranga",
        "Role": "Ranganathan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1982",
        "Title": "Pudukavithai",
        "Role": "Anand",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1982",
        "Title": "Nandri, Meendum Varuga",
        "Role": "Himself",
        "Language": "Tamil",
        "Notes": "Guest appearance"
    },
    {
        "Year": "1982",
        "Title": "Enkeyo Ketta Kural",
        "Role": "Kumaran",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1982",
        "Title": "Moondru Mugam",
        "Role": "SP Alex Pandian IPS, Arun, John",
        "Language": "Tamil",
        "Notes": "Tamil Nadu State Film Award Special Prize"
    },
    {
        "Year": "1982",
        "Title": "Agni Sakshi",
        "Role": "Himself",
        "Language": "Tamil",
        "Notes": "Guest appearance"
    },
    {
        "Year": "1983",
        "Title": "Paayum Puli",
        "Role": "Bharani",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1983",
        "Title": "Uruvangal Maralam",
        "Role": "Himself (Raghavendrar)",
        "Language": "Tamil",
        "Notes": "Guest appearance"
    },
    {
        "Year": "1983",
        "Title": "Thudikkum Karangal",
        "Role": "Gopi",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1983",
        "Title": "Andhaa Kaanoon",
        "Role": "Vijay Kumar Singh",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1983",
        "Title": "Thai Veedu",
        "Role": "Raju",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1983",
        "Title": "Sivappu Sooriyan",
        "Role": "Vijay",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1983",
        "Title": "Jeet Hamaari",
        "Role": "Raju",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1983",
        "Title": "Adutha Varisu",
        "Role": "Kannan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1983",
        "Title": "Thanga Magan",
        "Role": "Arun",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1984",
        "Title": "Meri Adalat",
        "Role": "Inspector Ashok",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1984",
        "Title": "Naan Mahan Alla",
        "Role": "Vishwanath",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1984",
        "Title": "Thambikku Entha Ooru",
        "Role": "Balu",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1984",
        "Title": "Kai Kodukkum Kai",
        "Role": "Kaalimuthu",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1984",
        "Title": "Idhe Naa Savaal",
        "Role": "Ramu (Shiva)",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1984",
        "Title": "Anbulla Rajinikanth",
        "Role": "Himself",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1984",
        "Title": "Gangvaa",
        "Role": "Gangvaa",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1984",
        "Title": "Nallavanukku Nallavan",
        "Role": "Manikkam",
        "Language": "Tamil",
        "Notes": "Filmfare Award for Best Actor – Tamil"
    },
    {
        "Year": "1984",
        "Title": "John Jani Janardhan",
        "Role": "John Mendez / Janardhan Gupta / Jani",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1985",
        "Title": "Nyayam Meere Cheppali",
        "Role": "Aathmaram",
        "Language": "Telugu",
        "Notes": "Guest appearance"
    },
    {
        "Year": "1985",
        "Title": "Naan Sigappu Manithan",
        "Role": "Vijay",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1985",
        "Title": "Mahaguru",
        "Role": "Vijay \"Mahaguru\"",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1985",
        "Title": "Un Kannil Neer Vazhinthal...",
        "Role": "Ravi",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1985",
        "Title": "Wafadaar",
        "Role": "Ranga",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1985",
        "Title": "Sri Raghavendrar",
        "Role": "Sri Raghavendrar",
        "Language": "Tamil",
        "Notes": "100th Film"
    },
    {
        "Year": "1985",
        "Title": "Geraftaar",
        "Role": "Inspector Hussain",
        "Language": "Hindi",
        "Notes": "Cameo"
    },
    {
        "Year": "1985",
        "Title": "Yaar...",
        "Role": "Raja",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1986",
        "Title": "Nee Kodutha Vaazhkai",
        "Role": "Raja",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1986",
        "Title": "Viduthalai",
        "Role": "Rajasekhar",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1986",
        "Title": "Naan Adimai Illai",
        "Role": "Vijay",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1986",
        "Title": "Bhagwaan Dada",
        "Role": "Bhagwaan Dada",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1986",
        "Title": "Mr. Bharath",
        "Role": "Bharath",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1986",
        "Title": "Aakhree Raasta",
        "Role": "Inspector Vijay",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1986",
        "Title": "Maeystar",
        "Role": "Bhairava",
        "Language": "Kannada",
        "Notes": ""
    },
    {
        "Year": "1986",
        "Title": "Pannaendrangal",
        "Role": "Raja",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1986",
        "Title": "Asli Naqli",
        "Role": "Shankar",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1986",
        "Title": "Dosti Dushmani",
        "Role": "Ranjeet",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1986",
        "Title": "Maaveeran",
        "Role": "Raja (Maaveeran)",
        "Language": "Tamil",
        "Notes": "Also co-producer"
    },
    {
        "Year": "1987",
        "Title": "Daku Hasina",
        "Role": "Mangal Singh",
        "Language": "Hindi",
        "Notes": "Cameo"
    },
    {
        "Year": "1987",
        "Title": "Velaikkaran",
        "Role": "Raghupathi",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1987",
        "Title": "Insaaf Kaun Karega",
        "Role": "Inspector Arjun Singh",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1987",
        "Title": "Manithan",
        "Role": "Raja",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1987",
        "Title": "Oor Kavalan",
        "Role": "Kannan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1987",
        "Title": "Uttar Dakshin",
        "Role": "Shankar",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1988",
        "Title": "Guru Sishyan",
        "Role": "Raja",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1988",
        "Title": "Dharmathin Thalaivan",
        "Role": "Balu, Shankar",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1988",
        "Title": "Khatron Ke Khiladi",
        "Role": "Inspector Balwant",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1988",
        "Title": "Tamacha",
        "Role": "Inspector Jaishankar",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1988",
        "Title": "Bloodstone",
        "Role": "Shyam Sabu",
        "Language": "English",
        "Notes": ""
    },
    {
        "Year": "1988",
        "Title": "Kodi Parakkuthu",
        "Role": "DCP Erode Shivagiri (Dhadha)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1989",
        "Title": "Rajadhi Raja",
        "Role": "Rajashekar, Chinnarasu",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1989",
        "Title": "Gair Kanooni",
        "Role": "Adam Khan, Azam Khan",
        "Language": "Hindi",
        "Notes": "Cameo"
    },
    {
        "Year": "1989",
        "Title": "Siva",
        "Role": "Siva (Tiger)",
        "Language": "Tamil",
        "Notes": "125th Film"
    },
    {
        "Year": "1989",
        "Title": "Raja Chinna Roja",
        "Role": "Raja (Kumar)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1989",
        "Title": "Mappillai",
        "Role": "Aarumugam",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1989",
        "Title": "Bhrashtachar",
        "Role": "Inspector Ashok",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1989",
        "Title": "ChaalBaaz",
        "Role": "Jaggu",
        "Language": "Hindi",
        "Notes": "Guest appearance"
    },
    {
        "Year": "1990",
        "Title": "Puttintiki Ra Chelli",
        "Role": "Chandram",
        "Language": "Telugu",
        "Notes": "Guest appearance"
    },
    {
        "Year": "1990",
        "Title": "Dharma Durai",
        "Role": "Dharma Durai (Dhurai)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1990",
        "Title": "Athisaya Piravi",
        "Role": "Balu, Kaalaiyan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1990",
        "Title": "Jeene Do",
        "Role": "Shankar",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1991",
        "Title": "Hum",
        "Role": "Inspector Girdhar",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1991",
        "Title": "Dhalapathi",
        "Role": "Dhalapathi (Surya)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1991",
        "Title": "Farishtay",
        "Role": "Inspector Ranjeet Singh",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1991",
        "Title": "Khoon Ka Karz",
        "Role": "Kishan",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1991",
        "Title": "Phool Bane Angaray",
        "Role": "Inspector Ranjeet Singh",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1991",
        "Title": "Nattukku Oru Nallavan",
        "Role": "Inspector Subhash",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1991",
        "Title": "Shanti Kranti",
        "Role": "Inspector Subhash",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1992",
        "Title": "Mannan",
        "Role": "Krishnan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1992",
        "Title": "Tyagi",
        "Role": "Surendra Singh",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1992",
        "Title": "Annamalai",
        "Role": "Annamalai",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1992",
        "Title": "Pandiyan",
        "Role": "Pandiyan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1993",
        "Title": "Yejaman",
        "Role": "Vaanavarayan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1993",
        "Title": "Uzhaippali",
        "Role": "Tamilarasan (Tamiz)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1993",
        "Title": "Insaniyat Ke Devta",
        "Role": "Inspector Vivek",
        "Language": "Hindi",
        "Notes": ""
    },
    {
        "Year": "1993",
        "Title": "Valli",
        "Role": "Valli's teacher",
        "Language": "Tamil",
        "Notes": "Also wrote story and screenplay; Guest appearance"
    },
    {
        "Year": "1994",
        "Title": "Veera",
        "Role": "Muthuveerappan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1995",
        "Title": "Baashha",
        "Role": "Manikam (Manik Baashha)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1995",
        "Title": "Pedarayudu",
        "Role": "Paparayudu",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "1995",
        "Title": "Aatank Hi Aatank",
        "Role": "Munna",
        "Language": "Hindi",
        "Notes": "150th Film"
    },
    {
        "Year": "1995",
        "Title": "Muthu",
        "Role": "Muthu, Zamindar",
        "Language": "Tamil",
        "Notes": "Tamil Nadu State Film Award for Best Actor"
    },
    {
        "Year": "1995",
        "Title": "Bhagya Debata",
        "Role": "Singer",
        "Language": "Bengali",
        "Notes": "Guest appearance"
    },
    {
        "Year": "1997",
        "Title": "Arunachalam",
        "Role": "Arunachalam, Vedachalam",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "1999",
        "Title": "Padayappa",
        "Role": "Aarupadayappan",
        "Language": "Tamil",
        "Notes": "Tamil Nadu State Film Award for Best Actor"
    },
    {
        "Year": "2000",
        "Title": "Bulandi",
        "Role": "Vasu, Dharma",
        "Language": "Hindi",
        "Notes": "Guest appearance"
    },
    {
        "Year": "2002",
        "Title": "Baba",
        "Role": "Baba",
        "Language": "Tamil",
        "Notes": "Also wrote story and screenplay"
    },
    {
        "Year": "2005",
        "Title": "Chandramukhi",
        "Role": "Dr. Saravanan, Vettaiyan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "2007",
        "Title": "Sivaji",
        "Role": "Sivaji Arumugam (M.G.R)",
        "Language": "Tamil",
        "Notes": "Nominated—Filmfare Award for Best Actor – Tamil"
    },
    {
        "Year": "2008",
        "Title": "Kuselan",
        "Role": "Ashok Kumar (Ashok)",
        "Language": "Tamil",
        "Notes": "Guest appearance"
    },
    {
        "Year": "2008",
        "Title": "Kathanayakudu",
        "Role": "Ashok Kumar",
        "Language": "Telugu",
        "Notes": "Guest appearance"
    },
    {
        "Year": "2010",
        "Title": "Enthiran",
        "Role": "Vaseegaran, Chitti",
        "Language": "Tamil",
        "Notes": "Nominated—Filmfare Award for Best Actor – Tamil"
    },
    {
        "Year": "2011",
        "Title": "Ra.One",
        "Role": "Chitti (Himself)",
        "Language": "Hindi",
        "Notes": "Cameo, computer generated"
    },
    {
        "Year": "2014",
        "Title": "Kochadaiiyaan",
        "Role": "Kochadaiiyaan, Ranadheeran, Senadheeran",
        "Language": "Tamil",
        "Notes": "Also playback singer"
    },
    {
        "Year": "2014",
        "Title": "Lingaa",
        "Role": "K. Lingeswaran, Raja Lingeswaran",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "2016",
        "Title": "Kabali",
        "Role": "Kabaleeswaran (Kabali)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "2016",
        "Title": "Annavaru",
        "Role": "Kabaleeswaran",
        "Language": "Telugu",
        "Notes": ""
    },
    {
        "Year": "2017",
        "Title": "Velaiyilla Pattathari 2",
        "Role": "Himself",
        "Language": "Tamil",
        "Notes": "Cameo"
    },
    {
        "Year": "2017",
        "Title": "Kaala",
        "Role": "Karikaalan (Kaala)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "2018",
        "Title": "2.0",
        "Role": "Vaseegaran, Chitti",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "2019",
        "Title": "Petta",
        "Role": "Petta Velan (Kaali)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "2020",
        "Title": "Darbar",
        "Role": "Aaditya Arunachalam",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "2021",
        "Title": "Annaatthe",
        "Role": "Kaalaiyan",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "2022",
        "Title": "The Warrior",
        "Role": "Himself",
        "Language": "Telugu",
        "Notes": "Guest appearance"
    },
    {
        "Year": "2023",
        "Title": "Jailer",
        "Role": "Muthuvel Pandian (Tiger)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "2024",
        "Title": "Lal Salaam",
        "Role": "Moideen Bhai",
        "Language": "Tamil",
        "Notes": "Cameo"
    },
    {
        "Year": "2024",
        "Title": "Vettaiyan",
        "Role": "SP V. Athiyan IPS (Vettaiyan)",
        "Language": "Tamil",
        "Notes": ""
    },
    {
        "Year": "2025",
        "Title": "Coolie",
        "Role": "Devaraj \"Deva\"",
        "Language": "Tamil",
        "Notes": ""
    },
    ];

// countries json
const wishCountries = [
    { "name": "Singapore 🇸🇬", "code": "SG" },
    { "name": "Malaysia 🇲🇾", "code": "MY" },
    { "name": "United States (America) 🇺🇸", "code": "US" },
    { "name": "Japan 🇯🇵", "code": "JP" },
    { "name": "South Korea 🇰🇷", "code": "KR" },
    { "name": "Thailand 🇹🇭", "code": "TH" },
    { "name": "Indonesia 🇮🇩", "code": "ID" },
    { "name": "Vietnam 🇻🇳", "code": "VN" },
    { "name": "Germany 🇩🇪", "code": "DE" },
    { "name": "France 🇫🇷", "code": "FR" },
    { "name": "United Kingdom (UK) 🇬🇧", "code": "GB" },
    { "name": "India 🇮🇳", "code": "IN" },
    { "name": "United Arab Emirates (UAE) 🇦🇪", "code": "AE" },
    { "name": "Australia 🇦🇺", "code": "AU" },
    // This is the special entry for all others
    { "name": "Rest of Other Countries 🌍", "code": "OTHERS" }
];

// Function to generate and display the Live Fan Histogram using Chart.js
function plotFanHistogram() {
    // --- 1. Retrieve and Parse Data from localStorage ---
    const storageKey = 'rajiniBirthdayWishes2025';
    const storedString = localStorage.getItem(storageKey);
    let wishesData = {};

    if (storedString) {
        // localStorage stores strings, so we must parse the JSON back into a JavaScript object
        try {
            wishesData = JSON.parse(storedString);
        } catch (e) {
            console.error("Error parsing JSON from localStorage:", e);
            return; // Exit if data is corrupted
        }
    }

    // --- 2. Process and Sort Data for Chart.js ---
    
    // Convert the object into an array of [countryCode, count] pairs for sorting
    const dataArray = Object.entries(wishesData);

    // Filter out countries with 0 wishes and sort by count (descending)
    dataArray.sort((a, b) => b[1] - a[1]); 

    // Extract sorted labels (Country Codes) and data (Counts)
    const labels = dataArray.map(item => item[0]);
    const counts = dataArray.map(item => item[1]);

    // Update the total count displayed on the page
    const totalWishes = counts.reduce((sum, current) => sum + current, 0);
    const totalCountElement = document.getElementById('birthday-total-count');
    if (totalCountElement) {
        totalCountElement.textContent = totalWishes.toLocaleString();
    }


    // --- 3. Initialize and Render the Chart ---
    
    const ctx = document.getElementById('birthday-country-chart').getContext('2d');
    
    // Check if a chart instance already exists (to prevent redraw errors on updates)
    if (window.countryChart instanceof Chart) {
        window.countryChart.destroy();
    }

    // Create the new Chart.js instance (a Horizontal Bar Chart works well for histograms)
    window.countryChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Wishes Sent',
                data: counts,
                backgroundColor: 'rgba(230, 0, 51, 0.8)', // Rajini's color/style
                borderColor: 'rgba(200, 0, 40, 1)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y', // Makes it a horizontal bar chart
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Wishes'
                    }
                },
                y: {
                    // Set bar thickness if you have many countries
                    barPercentage: 0.9, 
                    categoryPercentage: 0.9
                }
            },
            plugins: {
                legend: {
                    display: false // Hide the legend since there is only one dataset
                },
                title: {
                    display: false 
                }
            }
        }
    });
}

// Check if a chart instance already exists (to prevent redraw errors on updates)
if (window.countryChart instanceof Chart) {
    window.countryChart.destroy();
}

// Ensure the plot function runs when the page loads
document.addEventListener('DOMContentLoaded', plotFanHistogram);


// Dialogues
const DIALOGUES_DATA = [
    { text: "Naan oru thadava sonna, nooru thadava sonna madhiri. ரஜினி வசனம்| நான் ஒரு தடவை சொன்னா 100ரு தடவை சொன்ன மாதிரி", movie: "Baashha", Link: "https://www.youtube.com/shorts/8oDFULMAwEA" },
    { text: "Andavan solran. Arunachalam seiran.", movie: "Arunachalam" },
    { text: "Kanna, panni dhan kootama varum. Singam single aa dhan varum.", movie: "Sivaji" },
    { text: "Idhu eppadi irukku?", movie: "16 Vayathinile" },
    { text: "Seeviduven... Seevi!", movie: "Murattu Kaalai" },
    { text: "Naan eppo varuven, eppadi varuvennu yarukkum theriyadhu. Aana vara vendiya nerathula correct aa varuven.", movie: "Muthu" },
    { text: "En vazhi, thani vazhi.", movie: "Padayappa" },
    { text: "Magizhchi.", movie: "Kabali" },
    { text: "Ketta payale sir indha Kaali.", movie: "Mullum Malarum" },
    { text: "Coolie... Super Coolie!", movie: "Coolie" }
];

// Songs – put your YouTube URL in link
const SONGS_DATA = [
    { title: "Oruvan Oruvan Mudhalali", movie: "Muthu", link: "https://www.youtube.com/watch?v=gWaKxi0O2iE" },
    { title: "Thillana Thillana", movie: "Muthu", link: "https://www.youtube.com/watch?v=5NEK2JSIHOs" },
    { title: "Balleilakka", movie: "Sivaji", link: "https://www.youtube.com/watch?v=J2GXBLVZk60" },
    { title: "Vetri Kodi Kattu", movie: "Padayappa", link: "https://www.youtube.com/watch?v=Ht-m1n4lD9E" },
    { title: "Naa autokaran", movie: "Baashha", link: "https://www.youtube.com/watch?v=fZOuVgaB774" },
    { title: "En Vaanilay", movie: "Johnny", link: "https://www.youtube.com/watch?v=tEoSaLOUG1E" }
];

// Comedy – put your YouTube URL in link
const COMEDY_DATA = [
    { title: "Snake Scene", movie: "Chandramukhi", link: "https://www.youtube.com/watch?v=16e8lHLraWI" },
    { title: "Interview Scene", movie: "Thillu Mullu", link: "https://www.youtube.com/watch?v=1Eiq-FgNI7I" },
    { title: "Sivaji vs Karuppu Sivaji", movie: "Sivaji", link: "https://www.youtube.com/watch?v=4rWv1aVppPQ" },
    { title: "Muthu & Chariot", movie: "Muthu", link: "https://www.youtube.com/watch?v=cTnhvtoF9CQ" }
];

// --- Core Elements ---
const pages = document.querySelectorAll('.page-content');
const navLinks = document.querySelectorAll('.nav-link');

// Page 1: Home/Search Elements
const rajiniPoseDynamic = document.getElementById('rajini-pose-dynamic');
const rajiniPosePublic = document.getElementById('rajini-pose-public');
const newPoseBtn = document.getElementById('new-pose-btn');
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsOutput = document.getElementById('results-output');

// Page 2: Histogram Elements
const languageFilters = document.querySelectorAll('input[name="language-filter"]');
const histogramChart = document.getElementById('histogram-chart');

// Page 3: Selfie Elements
const BDAY_STORAGE_KEY = 'rajiniBirthdayWishes2025';
const REGIONS_API = 'https://restcountries.com/v3.1/all?fields=region';

// Elements
const birthdayForm = document.getElementById('birthday-wish-form');
const birthdayCountrySelect = document.getElementById('birthday-country-select');
const birthdayWishButton = document.getElementById('birthday-wish-button');
const birthdayTotalCountEl = document.getElementById('birthday-total-count');
const birthdayStatusMsgEl = document.getElementById('birthday-status-msg');
const birthdayChartCanvas = document.getElementById('birthday-country-chart');

let birthdayChart = null;
let birthdayCounters = {};

// Page 4: Best of Superstar Elements
const dialoguesList = document.getElementById('dialogues-list');
const songsList = document.getElementById('songs-list');
const comedyList = document.getElementById('comedy-list');


// --- Helper Functions ---
// Helpers
const REGION_ICONS = {
    Africa: '🌍',
    Americas: '🌎',
    Asia: '🌏',
    Europe: '🌍',
    Oceania: '🏝️',
    Antarctic: '🧊'
};

function getRegionIcon(region) {
    return REGION_ICONS[region] || '🌐';
}

function bdayLoadCounters() {
    try {
        const stored = localStorage.getItem(BDAY_STORAGE_KEY);
        birthdayCounters = stored ? JSON.parse(stored) : {};
    } catch (e) {
        console.warn('Error loading birthday counters', e);
        birthdayCounters = {};
    }
}

function bdaySaveCounters() {
    try {
        localStorage.setItem(BDAY_STORAGE_KEY, JSON.stringify(birthdayCounters));
    } catch (e) {
        console.warn('Error saving birthday counters', e);
    }
}

function bdayTotalCount() {
    return Object.values(birthdayCounters).reduce((a, b) => a + b, 0);
}

function bdayShowStatus(message, isError = false) {
    if (!birthdayStatusMsgEl) return;
    birthdayStatusMsgEl.textContent = message || '';
    birthdayStatusMsgEl.className = 'birthday-status-msg ' + (isError ? 'err' : 'ok');
}

// Chart
function bdayInitChart() {
    if (!birthdayChartCanvas) return;
    const ctx = birthdayChartCanvas.getContext('2d');

    birthdayChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Number of Wishes',
                data: [],
                backgroundColor: 'rgba(250, 204, 21, 0.85)'
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            return ` ${ctx.raw} wish(es)`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#e5e7eb' },
                    grid: { color: 'rgba(55,65,81,0.5)' }
                },
                y: {
                    ticks: { color: '#e5e7eb' },
                    grid: { display: false }
                }
            }
        }
    });
}

let chart = null;   // 👈 important: global chart variable

function initChart() {
    const canvas = document.getElementById('countryChart');   // or birthday-country-chart if you renamed it
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [],
            datasets: [{
                label: 'Number of Wishes',
                data: [],
                backgroundColor: 'rgba(250, 204, 21, 0.85)'
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function (ctx) {
                            return ` ${ctx.raw} wish(es)`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#e5e7eb' },
                    grid: { color: 'rgba(55,65,81,0.5)' }
                },
                y: {
                    ticks: { color: '#e5e7eb' },
                    grid: { display: false }
                }
            }
        }
    });
}

function getRegionIcon(region) {
    const REGION_ICONS = {
        Africa: '🌍',
        Americas: '🌎',
        Asia: '🌏',
        Europe: '🌍',
        Oceania: '🏝️',
        Antarctic: '🧊'
    };
    return REGION_ICONS[region] || '🌐';
}

function updateChart(counters) {
    if (!chart) return;   // 👈 avoids errors if initChart() not run yet

    const entries = Object.entries(counters);

    // sort by count desc
    entries.sort((a, b) => b[1] - a[1]);

    chart.data.labels = entries.map(([region]) => `${getRegionIcon(region)} ${region}`);
    chart.data.datasets[0].data = entries.map(([, count]) => count);
    chart.update();
}

function bdayUpdateChart(counters) {
    if (!chart) return;
    const entries = Object.entries(counters);

    // sort by count desc
    entries.sort((a, b) => b[1] - a[1]);

    chart.data.labels = entries.map(([region]) => `${getRegionIcon(region)} ${region}`);
    chart.data.datasets[0].data = entries.map(([, count]) => count);
    chart.update();
}

function bdayUpdateTotalDisplay() {
    if (!birthdayTotalCountEl) return;
    birthdayTotalCountEl.textContent = bdayTotalCount();
}

// Function to Populate the Dropdown ---
function populateCountrySelect() {
    const selectElement = document.getElementById('birthday-country-select');
    
    // Clear any existing options (except the first placeholder)
    // The loop starts at 1 to skip the placeholder option: <option value="">🌐 Select your country</option>
    for (let i = selectElement.options.length - 1; i >= 1; i--) {
        selectElement.remove(i);
    }
    
    // Loop through the JSON array and create an option for each country
    wishCountries.forEach(country => {
        const option = document.createElement('option');
        option.value = country.code; // The value will be the country code (e.g., 'SG', 'IN')
        option.textContent = country.name; // The visible text
        
        selectElement.appendChild(option);
    });
}
// Populate country dropdown
//async function populateCountrySelect() {
//    const select = document.getElementById('countrySelect');
 //   try {
 //       const res = await fetch(REGIONS_API);
 //       const data = await res.json();

        // Extract unique, non-empty regions
 //       const regionSet = new Set();
//     data.forEach(item => {
//          if (item.region) {
//              regionSet.add(item.region);
//          }
//      });

  //      const regions = Array.from(regionSet).sort();
//
 //       regions.forEach(region => {
 //           const opt = document.createElement('option');
 //           opt.value = region;              // value is region name, e.g. "Asia"
 //           opt.textContent = `${getRegionIcon(region)} ${region}`;
 //           select.appendChild(opt);
 //       });
  //  } catch (e) {
 //       console.error('Error fetching regions', e);
 //       showStatus('Could not load region list. Please check your internet connection.', true);
 //   }
//}

// Form handling


function bdaySetupForm() {
    if (!birthdayForm || !birthdayCountrySelect || !birthdayWishButton) return;

    birthdayForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const countryCode = birthdayCountrySelect.value;

        if (!countryCode) {
            bdayShowStatus('Please select your country before sending wishes.', true);
            return;
        }

        if (birthdayWishButton.disabled) return;
        birthdayWishButton.disabled = true;

        birthdayCounters[countryCode] = (birthdayCounters[countryCode] || 0) + 1;
        bdaySaveCounters();
        bdayUpdateTotalDisplay();
        //bdayUpdateChart();

        plotFanHistogram();

        bdayShowStatus('Thank you! Your wishes have been recorded. 💛', false);

        setTimeout(() => {
            birthdayWishButton.disabled = false;
        }, 800);
    });
}

// Call from your main init / DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // existing init code already here (navigation, search, histogram, best-of, etc.)

    // Birthday wishes init
    bdayLoadCounters();
    bdayUpdateTotalDisplay();
    //bdayInitChart();
    bdayUpdateChart();
    populateCountrySelect();
    bdaySetupForm();
    populateCountrySelect();
});

// 1. Navigation – core for ALL FOUR TABS
function navigateTo(pageId) {
    // Hide all pages
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.style.display = 'block';

    // Update active link styling
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === pageId);
    });

    // Page-specific initialisation
    if (pageId === 'histogram-page') {
        const currentFilter = document.querySelector('input[name="language-filter"]:checked').value;
        renderHistogram(currentFilter);
    }

    if (pageId === 'best-of-page') {
        renderDialogues();
        renderSongs();
        renderComedy();
    }
}

// 2. Image Rotation Using Local Files
function updateImages() {
    if (!RAJINI_IMAGES.length) return;

    if (rajiniPoseDynamic) {
        const randomIndex = Math.floor(Math.random() * RAJINI_IMAGES.length);
        rajiniPoseDynamic.src = RAJINI_IMAGES[randomIndex];
    }

    if (rajiniPosePublic) {
        const altIndex = (Math.floor(Math.random() * RAJINI_IMAGES.length) + 1) % RAJINI_IMAGES.length;
        rajiniPosePublic.src = RAJINI_IMAGES[altIndex];
    }
}

// 3. Search Handler
function handleSearch(event) {
    event.preventDefault();
    const query = (searchInput.value || '').trim().toLowerCase();

    if (query === '') {
        resultsOutput.innerHTML = '<p>Please enter a keyword to search the filmography.</p>';
        return;
    }

    const filteredResults = FILMOGRAPHY_DATA.filter(film => {
        return film.Year.toLowerCase().includes(query) ||
            film.Title.toLowerCase().includes(query) ||
            film.Role.toLowerCase().includes(query) ||
            film.Language.toLowerCase().includes(query) ||
            (film.Notes || '').toLowerCase().includes(query);
    });

    renderSearchResults(filteredResults);
}

function renderSearchResults(results) {
    if (!results.length) {
        resultsOutput.innerHTML = '<p class="no-results" style="color:#ffc94d;">No films found matching your query.</p>';
        return;
    }

    let html = '<table class="results-table">';
    html += '<thead><tr><th>Year</th><th>Title</th><th>Role</th><th>Language</th><th>Notes</th></tr></thead>';
    html += '<tbody>';

    results.forEach(film => {
        html += `
            <tr>
                <td>${film.Year}</td>
                <td>${film.Title}</td>
                <td>${film.Role}</td>
                <td>${film.Language}</td>
                <td>${film.Notes || '-'}</td>
            </tr>
        `;
    });

    html += '</tbody></table>';
    resultsOutput.innerHTML = html;
}

// 4. Histogram Generation
function calculateFilmCounts(filter) {
    const counts = {};
    FILMOGRAPHY_DATA.forEach(film => {
        const year = film.Year;
        if (filter === 'all' || (filter === 'tamil' && film.Language.toLowerCase() === 'tamil')) {
            counts[year] = (counts[year] || 0) + 1;
        }
    });

    const sortedCounts = Object.entries(counts)
        .map(([year, count]) => ({ year: parseInt(year, 10), count }))
        .sort((a, b) => a.year - b.year)
        .filter(item => item.count > 0);

    return sortedCounts;
}

function renderHistogram(filter) {
    const data = calculateFilmCounts(filter);
    histogramChart.innerHTML = '';

    if (!data.length) {
        histogramChart.innerHTML = '<p style="margin: auto; color:#ffc94d;">No films found for the selected filter.</p>';
        return;
    }

    const maxCount = Math.max(...data.map(d => d.count));
    const minYear = data[0].year;
    const maxYear = data[data.length - 1].year;

    data.forEach(item => {
        const barHeight = (item.count / maxCount) * 90;
        const wrapper = document.createElement('div');
        wrapper.className = 'bar-wrapper';

        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${barHeight}%`;
        bar.title = `${item.count} film(s) in ${item.year}`;

        const label = document.createElement('span');
        label.className = 'bar-label';
        label.textContent = item.count;

        const yearLabel = document.createElement('span');
        yearLabel.className = 'year-label';
        if (item.year % 5 === 0 || item.year === minYear || item.year === maxYear) {
            yearLabel.textContent = item.year;
        }

        wrapper.appendChild(label);
        wrapper.appendChild(bar);
        wrapper.appendChild(yearLabel);
        histogramChart.appendChild(wrapper);
    });
}

// 5. Selfie/Image Manipulation

function createMergedImage() {
    if (!userImage) {
        alert("Please upload your picture first!");
        return;
    }

    const rajiniImg = new Image();
    // Use one of the local Rajini images for the selfie composition
    rajiniImg.src = RAJINI_IMAGES[0] || 'img3.jpeg';

    rajiniImg.onload = () => {
        const userImg = new Image();
        userImg.src = userImage;

        userImg.onload = () => {
            const canvasWidth = 600;
            const canvasHeight = 400;
            mergedImageCanvas.width = canvasWidth;
            mergedImageCanvas.height = canvasHeight;

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);

            const halfWidth = canvasWidth / 2;

            // Draw User on left
            ctx.drawImage(
                userImg,
                0, 0, userImg.width, userImg.height,
                0, 0, halfWidth, canvasHeight
            );

            // Draw Rajini on right
            ctx.drawImage(
                rajiniImg,
                0, 0, rajiniImg.width, rajiniImg.height,
                halfWidth, 0, halfWidth, canvasHeight
            );

            // Separator
            ctx.fillStyle = 'rgba(247, 179, 0, 0.9)';
            ctx.fillRect(halfWidth - 4, 0, 8, canvasHeight);

            // Title Text
            ctx.fillStyle = 'white';
            ctx.font = '20px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Thalaivar & Me – 50 Years Tribute', canvasWidth / 2, 30);

            mergedImageCanvas.style.display = 'block';
            downloadSelfieBtn.style.display = 'block';
        };
        userImg.onerror = () => { alert("Error loading your image. Please try another picture."); };
    };
    rajiniImg.onerror = () => { alert("Error loading Rajini image. Please check image files."); };
}

function downloadMergedImage() {
    const dataURL = mergedImageCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'Rajini_50Years_Selfie.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 6. Best of Superstar Rendering
function renderDialogues() {
    if (!dialoguesList) return;
    dialoguesList.innerHTML = '';

    DIALOGUES_DATA.forEach(item => {
        const card = document.createElement('div');
        card.className = 'dialogue-card';

        const text = document.createElement('div');
        text.className = 'dialogue-text';
        text.textContent = `"${item.text}"`;

        const movie = document.createElement('div');
        movie.className = 'dialogue-movie';
        movie.textContent = `– ${item.movie}`;

        card.appendChild(text);
        card.appendChild(movie);
        dialoguesList.appendChild(card);
    });
}

function renderSongs() {
    if (!songsList) return;
    songsList.innerHTML = '';

    SONGS_DATA.forEach(item => {
        const card = document.createElement('div');
        card.className = 'video-card';

        const placeholder = document.createElement('div');
        placeholder.className = 'video-placeholder';

        const info = document.createElement('div');
        info.className = 'video-info';

        const title = document.createElement('div');
        title.className = 'video-title';
        title.textContent = item.title;

        const movie = document.createElement('div');
        movie.className = 'video-movie';
        movie.textContent = item.movie;

        const linkEl = document.createElement('a');
        linkEl.className = 'video-link';

        const hasRealLink = item.link && !item.link.includes('YOUR_YOUTUBE_URL_HERE');

        if (hasRealLink) {
            linkEl.href = item.link;
            linkEl.target = '_blank';
            linkEl.rel = 'noopener noreferrer';
            linkEl.textContent = 'Watch on YouTube';
            linkEl.classList.add('real-link');
        } else {
            linkEl.href = '#';
            linkEl.textContent = 'YOUR_YOUTUBE_URL_HERE (edit in script.js)';
            linkEl.classList.add('placeholder-link');
        }

        info.appendChild(title);
        info.appendChild(movie);
        info.appendChild(linkEl);
        card.appendChild(placeholder);
        card.appendChild(info);
        songsList.appendChild(card);
    });
}

function renderComedy() {
    if (!comedyList) return;
    comedyList.innerHTML = '';

    COMEDY_DATA.forEach(item => {
        const card = document.createElement('div');
        card.className = 'video-card';

        const placeholder = document.createElement('div');
        placeholder.className = 'video-placeholder';

        const info = document.createElement('div');
        info.className = 'video-info';

        const title = document.createElement('div');
        title.className = 'video-title';
        title.textContent = item.title;

        const movie = document.createElement('div');
        movie.className = 'video-movie';
        movie.textContent = item.movie;

        const linkEl = document.createElement('a');
        linkEl.className = 'video-link';

        const hasRealLink = item.link && !item.link.includes('YOUR_YOUTUBE_URL_HERE');

        if (hasRealLink) {
            linkEl.href = item.link;
            linkEl.target = '_blank';
            linkEl.rel = 'noopener noreferrer';
            linkEl.textContent = 'Watch on YouTube';
            linkEl.classList.add('real-link');
        } else {
            linkEl.href = '#';
            linkEl.textContent = 'YOUR_YOUTUBE_URL_HERE (edit in script.js)';
            linkEl.classList.add('placeholder-link');
        }

        info.appendChild(title);
        info.appendChild(movie);
        info.appendChild(linkEl);
        card.appendChild(placeholder);
        card.appendChild(info);
        comedyList.appendChild(card);
    });
}


// --- Event Listener Setup ---

// Navigation for all four tabs
navLinks.forEach(link => {
    link.addEventListener('click', () => navigateTo(link.dataset.page));
});

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    updateImages();
    navigateTo('home-page');   // show Home & Tribute first
});

// Home/Search
if (newPoseBtn) newPoseBtn.addEventListener('click', updateImages);
if (searchForm) searchForm.addEventListener('submit', handleSearch);

// Histogram
languageFilters.forEach(filter => {
    filter.addEventListener('change', (e) => renderHistogram(e.target.value));
});

// Selfie
//if (userImageInput) userImageInput.addEventListener('change', handleImageSelect);
//if (createSelfieBtn) createSelfieBtn.addEventListener('click', createMergedImage);
//if (downloadSelfieBtn) downloadSelfieBtn.addEventListener('click', downloadMergedImage);
