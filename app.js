// Budget Pro 2025 - Clean Edition
// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyB1WmFllcL533zhqG4ARD6Wx35YUksLmW4",
    authDomain: "budget-pro-7ea05.firebaseapp.com",
    projectId: "budget-pro-7ea05",
    storageBucket: "budget-pro-7ea05.firebasestorage.app",
    messagingSenderId: "547730622802",
    appId: "1:547730622802:web:b9e49710b77dc7b1d7bd55"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
db.enablePersistence().catch(() => {});

// MEGA Categories - Extended Version cu keywords pentru AI
const categories = {
    expense: [
        // 🍔 MÂNCARE & BĂUTURI - MEGA COMPREHENSIVE
        { id: 'food', name: 'Mâncare & Băuturi', icon: '🍔', color: '#ef4444', 
          keywords: ['mancare', 'food', 'meal', 'lunch', 'dinner', 'breakfast', 'mic dejun', 'pranz', 'cina', 'supermarket', 'restaurant'],
          subs: [
            // === SUPERMARKETURI & HYPERMARKETURI ===
            'Lidl', 'Kaufland', 'Carrefour', 'Carrefour Express', 'Carrefour Market', 'Mega Image', 'Shop&Go', 'Auchan', 'Cora', 'Metro', 'Selgros', 'Profi', 'Penny', 'Penny Market', 'La Doi Pași', 'ABC', 'Spar', 'MyAuchan', 'Freshful', 'Bringo',
            // === MAGAZINE ALIMENTARE ===
            'Magazin alimentar', 'Băcănie', 'Piață', 'Piața agroalimentară', 'Piața de gros', 'Aprozar', 'Măcelărie', 'Carmangerie', 'Pescărie', 'Brutărie', 'Patiserie', 'Covrigărie', 'Simigerie', 'Cofetărie', 'Plăcintărie', 'Gogoșerie',
            // === RESTAURANTE FAST-FOOD ===
            'McDonald\'s', 'KFC', 'Burger King', 'Subway', 'Taco Bell', 'Wendy\'s', 'Five Guys', 'Shake Shack', 'Dristor Kebab', 'Calif', 'Spartan', 'Mesopotamia', 'Shaormerie', 'Spring Time', 'City Grill', 'Hanu Berarilor',
            // === PIZZERII ===
            'Domino\'s', 'Pizza Hut', 'Jerry\'s Pizza', 'Trenta', 'Pizza Colosseum', 'Bella Italia', 'Il Calcio', 'Pizzerie',
            // === LIVRARE MÂNCARE ===
            'Tazz', 'Tazz by eMAG', 'Glovo', 'Bolt Food', 'Foodpanda', 'Takeaway', 'Just Eat', 'Uber Eats', 'Bringo', 'Freshful', 'Flink', 'Gorillas',
            // === RESTAURANTE BY CUISINE ===
            'Restaurant', 'Restaurant românesc', 'Restaurant chinezesc', 'Restaurant japonez', 'Sushi', 'Restaurant italian', 'Restaurant grecesc', 'Restaurant indian', 'Restaurant mexican', 'Restaurant turcesc', 'Restaurant libanez', 'Restaurant asiatic', 'Restaurant vegetarian', 'Restaurant vegan', 'Restaurant fusion', 'Fine dining', 'Bistro', 'Brasserie', 'Grill',
            // === CAFENELE & CEAINĂRII ===
            'Starbucks', 'Ted\'s Coffee', 'Costa Coffee', 'Gregory\'s', 'Tucano Coffee', '5 to Go', 'Narcoffee', 'Origo', 'Steam', 'M60', 'Caffè Vergnano', 'Gloria Jean\'s', 'McCafé', 'Cafenea', 'Coffee shop', 'Ceainărie', 'Ceai', 'Cafea',
            // === BĂUTURI ===
            'Sucuri', 'Băuturi răcoritoare', 'Apă minerală', 'Apă plată', 'Coca-Cola', 'Pepsi', 'Fanta', 'Sprite', 'Energizante', 'Red Bull', 'Monster', 'Hell', 'Smoothie', 'Fresh',
            // === ALCOOL ===
            'Bere', 'Vin', 'Vinărie', 'Cramă', 'Spirtoase', 'Țuică', 'Pălincă', 'Whisky', 'Vodka', 'Rom', 'Gin', 'Cocktailuri', 'Pub', 'Bar', 'Club', 'Beer garden', 'Berărie',
            // === GUSTĂRI & DULCIURI ===
            'Gustări', 'Snacks', 'Chipsuri', 'Dulciuri', 'Ciocolată', 'Milka', 'Oreo', 'Kinder', 'Ferrero', 'Bomboane', 'Gumă', 'Înghețată', 'Gelaterie',
            // === ALIMENTE DE BAZĂ ===
            'Fructe', 'Legume', 'Carne', 'Pui', 'Porc', 'Vită', 'Pește', 'Fructe de mare', 'Lactate', 'Lapte', 'Iaurt', 'Brânză', 'Smântână', 'Ouă', 'Pâine', 'Produse panificație', 'Conserve', 'Murături', 'Condimente', 'Ulei', 'Oțet', 'Făină', 'Zahăr', 'Sare', 'Orez', 'Paste', 'Cereale', 'Muesli', 'Miere', 'Gem', 'Unt', 'Margarină',
            // === MÂNCARE SPECIALĂ ===
            'Mâncare bio', 'Organic', 'Gluten free', 'Lactose free', 'Vegan', 'Vegetarian', 'Keto', 'Low carb', 'Proteine', 'Suplimente alimentare'
          ]},
        
        // 🚗 TRANSPORT - MEGA COMPREHENSIVE
        { id: 'transport', name: 'Transport', icon: '🚗', color: '#f59e0b',
          keywords: ['transport', 'masina', 'car', 'benzina', 'motorina', 'uber', 'bolt', 'taxi', 'bus', 'metrou', 'tren'],
          subs: [
            // === COMBUSTIBIL ===
            'Benzină', 'Motorină', 'Diesel', 'GPL', 'AdBlue', 'Încărcare electrică', 'Stație încărcare', 'Tesla Supercharger', 'Enel X', 'Renovatio', 'OMV', 'Petrom', 'Rompetrol', 'MOL', 'Lukoil', 'Socar', 'Gazprom', 'Shell',
            // === RIDESHARING & TAXI ===
            'Uber', 'Bolt', 'Bolt Drive', 'Free Now', 'Yango', 'Taxi', 'Taxi Pelicanul', 'Speed Taxi', 'Meridian Taxi', 'Leone', 'Cobalcescu',
            // === TRANSPORT PUBLIC ===
            'STB', 'Metrorex', 'Abonament STB', 'Bilet STB', 'Bilet metrou', 'Abonament metrou', 'Card transport', 'Transport public', 'Autobuz', 'Tramvai', 'Troleibuz',
            // === TREN ===
            'CFR', 'CFR Călători', 'Interregio', 'Regio', 'InterCity', 'Tren', 'Bilet tren', 'Abonament tren', 'Softrans', 'Astra Trans Carpatic', 'Trenurile Soarelui',
            // === AVION ===
            'Wizz Air', 'Ryanair', 'Blue Air', 'Tarom', 'Lufthansa', 'KLM', 'Air France', 'British Airways', 'Turkish Airlines', 'Qatar Airways', 'Emirates', 'Austrian Airlines', 'LOT', 'Bilet avion', 'Bagaj cală', 'Bagaj mână', 'Priority boarding', 'Selectare loc',
            // === PARCARE ===
            'Parcare', 'Parcare mall', 'Parcare stradală', 'Parcare aeroport', 'Parcare privată', 'Parcare rezidențială', 'Parcare subterană', 'Parcomatic', 'Telverde parcare', 'Aplicație parcare',
            // === TAXE & ROVINIETE ===
            'Rovignetă', 'Peaj', 'Taxa pod', 'Pod Cernavodă', 'Taxa autostradă', 'Autostradă', 'Taxă drum', 'Taxa oxigen', 'Timbru mediu', 'Taxa poluare',
            // === SERVICE AUTO ===
            'Service auto', 'ITP', 'Revizie', 'Schimb ulei', 'Ulei motor', 'Filtru ulei', 'Filtru aer', 'Frâne', 'Plăcuțe frână', 'Discuri frână', 'Amortizoare', 'Suspensie', 'Direcție', 'Climatizare auto', 'AC auto', 'Geometrie roți', 'Echilibrare roți', 'Bujii', 'Curea distribuție', 'Alternator', 'Electromotor', 'Baterie auto', 'Acumulator',
            // === ANVELOPE ===
            'Cauciucuri', 'Anvelope', 'Anvelope iarnă', 'Anvelope vară', 'Anvelope all season', 'Vulcanizare', 'Hotel anvelope', 'Michelin', 'Continental', 'Pirelli', 'Bridgestone', 'Goodyear', 'Hankook', 'Nokian',
            // === SPĂLĂTORIE & DETAILING ===
            'Spălătorie auto', 'Self wash', 'Detailing', 'Polish', 'Ceruire', 'Curățare interior', 'Curățare tapițerie', 'Igienizare AC',
            // === PIESE & ACCESORII ===
            'Piese auto', 'Accesorii auto', 'Covorase', 'Huse scaune', 'Suport telefon', 'Încărcător auto', 'Cameră bord', 'GPS', 'AutoDoc', 'Eta Beta', 'Inter Cars', 'Motrio',
            // === ASIGURĂRI AUTO ===
            'RCA', 'CASCO', 'Asigurare auto', 'Decontare directă', 'Allianz RCA', 'Groupama RCA', 'Euroins', 'City Insurance', 'Omniasig', 'Asirom', 'Generali',
            // === LEASING & RATĂ ===
            'Rată mașină', 'Leasing auto', 'Leasing operațional', 'Credit auto', 'Chirie mașină', 'Rent a car', 'Car sharing', 'Spark', 'Share Now', 'CityLink', 'PONY',
            // === AMENZI ===
            'Amendă', 'Amendă rutieră', 'Amendă parcare', 'Amendă viteză', 'Radar', 'Puncte permis'
          ]},

        // 🏠 LOCUINȚĂ - MEGA COMPREHENSIVE
        { id: 'housing', name: 'Locuință', icon: '🏠', color: '#8b5cf6',
          keywords: ['casa', 'locuinta', 'chirie', 'rent', 'apartament', 'rata', 'intretinere', 'bloc', 'dedeman', 'ikea'],
          subs: [
            // === CHIRIE ===
            'Chirie apartament', 'Chirie casă', 'Chirie garsonieră', 'Chirie studio', 'Chirie cameră', 'Chirie vilă', 'Garanție chirie', 'Avans chirie',
            // === CREDIT IMOBILIAR ===
            'Rată ipotecară', 'Credit imobiliar', 'Credit ipotecar', 'Dobândă credit casă', 'Refinanțare', 'Prima casă', 'Noua casă', 'Credit construcție',
            // === ÎNTREȚINERE BLOC ===
            'Întreținere', 'Asociație proprietari', 'Fond rulment', 'Fond reparații', 'Fond special', 'Curățenie scară', 'Dezinsecție', 'Deratizare', 'Salubrizare', 'Lift', 'Interfon', 'Iluminat scară',
            // === REPARAȚII & MEȘTERI ===
            'Reparații casă', 'Instalator', 'Instalații sanitare', 'Electrician', 'Instalații electrice', 'Zugrav', 'Zugrăveli', 'Vopsit', 'Tâmplar', 'Lacătuș', 'Faianțar', 'Parchetar', 'Rigipsar', 'Tinichigiu', 'Reparații acoperiș', 'Hidroizolație', 'Termoizolație',
            // === RENOVARE & AMENAJARE ===
            'Renovare', 'Renovare apartament', 'Renovare casă', 'Renovare baie', 'Renovare bucătărie', 'Amenajare', 'Amenajări interioare', 'Design interior', 'Arhitect',
            // === MAGAZINE BRICOLAJ ===
            'Dedeman', 'Hornbach', 'Leroy Merlin', 'Brico Depot', 'MatHaus', 'Ambient', 'Diego', 'Praktiker', 'OBI', 'Baumax',
            // === MOBILĂ ===
            'IKEA', 'JYSK', 'Mobexpert', 'Kika', 'XXXLutz', 'Dormeo', 'Saltele', 'Mobila.ro', 'Vivre', 'WestwingNow', 'Somproduct', 'Elvila', 'Staer', 'Casa Rusu', 'Rus Savitar',
            // === MOBILIER SPECIFIC ===
            'Mobilier living', 'Canapea', 'Fotoliu', 'Masă living', 'Comodă', 'Bibliotecă', 'Mobilier dormitor', 'Pat', 'Saltea', 'Noptieră', 'Dulap', 'Șifonier', 'Dressing', 'Mobilier bucătărie', 'Masă bucătărie', 'Scaune bucătărie', 'Mobilier baie', 'Mobilier copii', 'Birou', 'Scaun birou', 'Scaun gaming', 'Masă dining',
            // === ELECTROCASNICE ===
            'Electrocasnice', 'Frigider', 'Congelator', 'Combină frigorifică', 'Mașină spălat rufe', 'Mașină spălat vase', 'Uscător', 'Aragaz', 'Cuptor electric', 'Cuptor microunde', 'Hotă', 'Plită', 'Plită inductie', 'Plită gaz', 'Espressor', 'Cafetieră', 'Fierbător', 'Toaster', 'Mixer', 'Blender', 'Robot bucătărie', 'Thermomix', 'Friteuză', 'Air fryer', 'Multicooker', 'Aparat pâine', 'Storcător', 'Aspirator', 'Aspirator robot', 'iRobot', 'Roborock', 'Xiaomi', 'Dyson', 'Fier călcat', 'Stație călcat', 'Aparat aer condiționat', 'AC', 'Centrală termică', 'Boiler', 'Calorifer electric', 'Convector', 'Aeroterma', 'Ventilator', 'Purificator aer', 'Dezumidificator', 'Umidificator',
            // === ARTICOLE MENAJ ===
            'Vase', 'Oale', 'Tigăi', 'Tefal', 'Tacâmuri', 'Farfurii', 'Pahare', 'Căni', 'Castroane', 'Cutii depozitare', 'Recipient', 'Tocător', 'Cuțite', 'Ustensile bucătărie', 'Recipiente', 'Uscător vase',
            // === TEXTILE CASĂ ===
            'Lenjerie pat', 'Cearșaf', 'Pătură', 'Plapumă', 'Pernă', 'Prosoape', 'Halat', 'Perdele', 'Draperii', 'Jaluzele', 'Storuri', 'Rolete', 'Covoare', 'Mochete', 'Pres intrare',
            // === DECORAȚIUNI ===
            'Decorațiuni', 'Tablouri', 'Oglinzi', 'Vaze', 'Lumânări', 'Plante artificiale', 'Ghivece', 'Cadre foto', 'Ceasuri perete', 'Statuete',
            // === GRĂDINĂ ===
            'Plante', 'Flori', 'Ghivece plante', 'Pământ', 'Îngrășământ', 'Unelte grădină', 'Furtun', 'Stropitoare', 'Mașină tuns iarbă', 'Motocositoare', 'Drujbă', 'Mobilier grădină', 'Masă grădină', 'Scaune grădină', 'Umbrela soare', 'Grătar', 'Hamac', 'Piscină', 'Piscină gonflabilă',
            // === SECURITATE ===
            'Alarmă', 'Sistem alarmă', 'Cameră supraveghere', 'Videointerfon', 'Interfon', 'Sonerie', 'Sonerie video', 'Ring', 'Încuietoare', 'Încuietoare smart', 'Yale', 'Seif',
            // === ASIGURARE LOCUINȚĂ ===
            'Asigurare locuință', 'Asigurare casă', 'Asigurare apartament', 'PAD', 'Asigurare incendiu', 'Asigurare inundații'
          ]},
        
        // UTILITĂȚI - COMPREHENSIVE
        { id: 'utilities', name: 'Utilități', icon: '💡', color: '#3b82f6',
          keywords: ['utilitate', 'curent', 'gaz', 'apa', 'electricitate', 'factura', 'enel', 'engie', 'digi', 'rds'],
          subs: [
            // === ELECTRICITATE ===
            'Electricitate', 'Curent', 'Enel', 'E.ON', 'Electrica', 'CEZ', 'Hidroelectrica', 'DEER', 'Restart Energy', 'Nova Power',
            // === GAZ ===
            'Gaz', 'Gaz natural', 'Engie', 'E.ON Gaz', 'Gaz metan', 'Premier Energy', 'Distrigaz',
            // === APĂ ===
            'Apă', 'Apă Nova', 'Apa Canal', 'Apă caldă', 'Apă rece', 'Canalizare', 'RAJA', 'Vital', 'Aquaserv', 'Compania de Apă',
            // === GUNOI & SALUBRITATE ===
            'Gunoi', 'Salubritate', 'Colectare deșeuri', 'Romprest', 'Eco-Sud', 'Supercom', 'Rosal', 'Iridex',
            // === ÎNCĂLZIRE ===
            'Încălzire', 'Termoficare', 'RADET', 'Termoenergetica', 'Lemne', 'Peleți', 'Cărbuni', 'Butelie gaz',
            // === INTERNET ===
            'Internet', 'Digi', 'RCS-RDS', 'Orange Home', 'Vodafone Home', 'Telekom', 'UPC', 'Fibră optică', 'Net',
            // === TELEFONIE ===
            'Telefon fix', 'Telefon mobil', 'Abonament Orange', 'Abonament Vodafone', 'Abonament Telekom', 'Abonament Digi', 'Cartela prepaid', 'Orange Prepay', 'Vodafone Prepay', 'Extra opțiuni', 'Date mobile', 'Roaming', 'Minute', 'SMS',
            // === TV ===
            'TV cablu', 'TV satelit', 'Digi TV', 'Orange TV', 'Telekom TV', 'Focus Sat', 'Dolce', 'Antena Play',
            // === ADMINISTRARE ===
            'Întreținere bloc', 'Administrator bloc', 'Contorizare', 'Repartitoare', 'Citire contor'
          ]},
        
        // 💊 SĂNĂTATE - MEGA COMPREHENSIVE
        { id: 'health', name: 'Sănătate', icon: '💊', color: '#10b981',
          keywords: ['sanatate', 'doctor', 'medic', 'farmacie', 'medicamente', 'spital', 'clinica', 'dentist', 'stomatolog'],
          subs: [
            // === FARMACII ===
            'Farmacie', 'Catena', 'Sensiblu', 'HelpNet', 'Dr. Max', 'Tei', 'Dona', 'Ropharma', 'Farmacia Inimii', 'Punkt', 'Remedium', 'Belladonna',
            // === MEDICAMENTE ===
            'Medicamente', 'Pastile', 'Antibiotice', 'Antiinflamatoare', 'Analgezice', 'Sirop', 'Spray', 'Picături', 'Unguent', 'Cremă medicinală', 'Plasturi', 'Bandaje', 'Dezinfectant',
            // === SUPLIMENTE ===
            'Vitamine', 'Suplimente', 'Vitamina C', 'Vitamina D', 'Multivitamine', 'Omega 3', 'Magneziu', 'Fier', 'Calciu', 'Zinc', 'Probiotice', 'Colagen', 'Proteine', 'Aminoacizi',
            // === CLINICI PRIVATE ===
            'Regina Maria', 'MedLife', 'Sanador', 'Arcadia', 'Medicover', 'Medpark', 'Affidea', 'Neolife', 'Monza', 'Polisano', 'Sanovil', 'Enayati Medical',
            // === CONSULTAȚII ===
            'Consultație medic', 'Medic familie', 'Medic specialist', 'Internist', 'Cardiolog', 'Dermatolog', 'Ginecolog', 'Urolog', 'Neurolog', 'Endocrinolog', 'Gastroenterolog', 'Pneumolog', 'Reumatolog', 'Oncolog', 'Hematolog', 'Alergolog', 'Imunolog', 'Nefrolog', 'Infectolog', 'Chirurg', 'Ortoped', 'Traumatolog',
            // === ORL & OCHI ===
            'ORL', 'Otorinolaringolog', 'Oftalmolog', 'Oculist', 'Control vedere', 'Ochelari', 'Rame', 'Lentile', 'Lentile contact', 'Lentile progresive', 'Operație ochi', 'LASIK', 'Optică medicală', 'Optica Optiblu', 'Optica Lensa',
            // === STOMATOLOGIE ===
            'Stomatolog', 'Dentist', 'Cabinet dentar', 'Consultație dentară', 'Plomba', 'Tratament canal', 'Extracție', 'Detartraj', 'Albire dinți', 'Implant dentar', 'Coroană dentară', 'Punte dentară', 'Proteză', 'Aparat dentar', 'Ortodont', 'Aparat ortodontic', 'Gutieră', 'Invisalign', 'Denta Vita', 'Dent Estet',
            // === SĂNĂTATE MINTALĂ ===
            'Psihiatru', 'Psiholog', 'Psihoterapeut', 'Terapie', 'Psihoterapie', 'Consiliere psihologică', 'Coaching', 'Mindfulness',
            // === ANALIZE & INVESTIGAȚII ===
            'Analize medicale', 'Analize sânge', 'Hemoleucogramă', 'Biochimie', 'Analize urină', 'Recoltare', 'Synevo', 'MedLife Analize', 'Regina Maria Lab', 'Ecografie', 'RMN', 'CT', 'Radiografie', 'Mamografie', 'EKG', 'Holter', 'Ecocardiografie', 'Endoscopie', 'Colonoscopie',
            // === SPITAL ===
            'Spital', 'Internare', 'Operație', 'Intervenție chirurgicală', 'Urgențe', 'Camera de gardă', 'Ambulanță', 'SMURD', 'Salvare',
            // === FIZIOTERAPIE ===
            'Kinetoterapie', 'Fizioterapie', 'Recuperare', 'Masaj terapeutic', 'Masaj medical', 'Electroterapie', 'Hidroterapie', 'Reflexoterapie', 'Acupunctură',
            // === PREVENȚIE ===
            'Vaccinuri', 'Vaccin gripal', 'Vaccin COVID', 'Vaccin HPV', 'Vaccin copii', 'Control medical', 'Screening', 'Control periodic', 'Medicina muncii',
            // === ASIGURARE SĂNĂTATE ===
            'Asigurare sănătate', 'Asigurare privată', 'Abonament medical', 'Card sănătate', 'CNAS', 'Decontare', 'Signal Iduna', 'Allianz Health'
          ]},
        
        // 🛍️ CUMPĂRĂTURI - MEGA COMPREHENSIVE
        { id: 'shopping', name: 'Cumpărături', icon: '🛍️', color: '#ec4899',
          keywords: ['shopping', 'cumparaturi', 'mall', 'haine', 'incaltaminte', 'pantofi', 'geanta', 'accesorii', 'fashion', 'emag', 'altex'],
          subs: [
            // === MAGAZINE HAINE ===
            'H&M', 'Zara', 'Reserved', 'C&A', 'New Yorker', 'Bershka', 'Pull&Bear', 'Mango', 'Stradivarius', 'Massimo Dutti', 'Oysho', 'LC Waikiki', 'Koton', 'Terranova', 'OVS', 'Takko', 'KiK', 'Pepco', 'Primark', 'Peek & Cloppenburg', 'Van Graaf', 'Marks & Spencer', 'GAP', 'Guess', 'Tommy Hilfiger', 'Calvin Klein', 'Levi\'s', 'Moncler', 'Ralph Lauren', 'Lacoste', 'Hugo Boss', 'Armani', 'Versace', 'Prada', 'Gucci', 'Louis Vuitton', 'Hermes', 'Dior', 'Chanel', 'Burberry',
            // === MAGAZINE ONLINE FASHION ===
            'About You', 'Fashion Days', 'Answear', 'Modivo', 'FashionUP', 'Shopkins', 'Superbebeshop', 'Kurtmann', 'Stkan', 'Secretele Mireselor', 'Croitorie',
            // === HAINE ===
            'Haine', 'Blugi', 'Jeans', 'Pantaloni', 'Cămăși', 'Cămașă', 'Tricouri', 'Tricou', 'Rochii', 'Rochie', 'Fuste', 'Fustă', 'Sacouri', 'Sacou', 'Costume', 'Costum', 'Paltoane', 'Palton', 'Geci', 'Geacă', 'Jachete', 'Pulovere', 'Pulover', 'Hanorac', 'Bluză', 'Top', 'Maiou', 'Body', 'Lenjerie intimă', 'Sutiene', 'Chiloți', 'Boxeri', 'Șosete', 'Ciorapi', 'Dresuri', 'Pijamale', 'Halat baie',
            // === ÎNCĂLȚĂMINTE ===
            'Deichmann', 'CCC', 'Office Shoes', 'Otter', 'Ecco', 'Geox', 'Clarks', 'Salamander', 'Benvenuti', 'Il Passo', 'Musette', 'Marelbo', 'Leonardo', 'epantofi.ro', 'Pantofi', 'Adidași', 'Sneakers', 'Ghete', 'Bocanci', 'Sandale', 'Papuci', 'Saboti', 'Cizme', 'Balerini', 'Mocasini', 'Pantofi sport', 'Pantofi eleganți',
            // === SPORT FASHION ===
            'Nike', 'Adidas', 'Puma', 'Reebok', 'Under Armour', 'New Balance', 'Asics', 'Fila', 'Converse', 'Vans', 'Jordan', 'Skechers', 'Footshop', 'Sizeer', 'Snipes',
            // === ACCESORII ===
            'Genți', 'Geantă', 'Rucsacuri', 'Rucsac', 'Poșete', 'Clutch', 'Valize', 'Troler', 'Samsonite', 'American Tourister', 'Curele', 'Centură', 'Portofele', 'Portofel', 'Bijuterii', 'Cercei', 'Coliere', 'Brățări', 'Inele', 'Pandora', 'Swarovski', 'Teilor', 'Ceasuri', 'Fossil', 'Casio', 'Daniel Wellington', 'Seiko', 'Citizen', 'Tissot', 'Ochelari soare', 'Ray-Ban', 'Oakley', 'Eșarfe', 'Fulare', 'Mănuși', 'Șepci', 'Pălării', 'Cravate', 'Papioane', 'Butoni',
            // === COSMETICE & PARFUMURI ===
            'Sephora', 'Douglas', 'Marionnaud', 'Notino', 'Makeup', 'Kendra', 'Makeup.ro', 'Cosmetice', 'Machiaj', 'Fond de ten', 'Rimel', 'Ruj', 'Fard', 'Concealer', 'Pudra', 'Primer', 'Parfum', 'Apă de parfum', 'Apă de toaletă', 'Colonie', 'Parfumuri nișă', 'Dior Parfum', 'Chanel No 5', 'YSL', 'Armani Parfum', 'Lancôme', 'Estée Lauder', 'Clinique', 'MAC', 'Îngrijire piele', 'Cremă față', 'Ser', 'Mască', 'Demachiant', 'Toner', 'Îngrijire păr', 'Șampon', 'Balsam', 'Mască păr', 'Ulei păr', 'Styling', 'L\'Oréal', 'Garnier', 'Nivea', 'Neutrogena', 'CeraVe', 'The Ordinary', 'La Roche-Posay', 'Vichy', 'Avène',
            // === ELECTRONICE ===
            'eMAG', 'Altex', 'Flanco', 'Media Galaxy', 'PCGarage', 'CEL.ro', 'evomag', 'PC House', 'Germanos', 'Orange Shop', 'Vodafone Shop', 'iStyle', 'iSTYLE Apple', 'Samsung Store', 'Huawei Store', 'Xiaomi Store', 'QuickMobile', 'Vegashop',
            // === GADGETURI ===
            'Telefon', 'Smartphone', 'iPhone', 'Samsung Galaxy', 'Huawei', 'Xiaomi', 'OnePlus', 'Google Pixel', 'Laptop', 'MacBook', 'ThinkPad', 'ASUS', 'Lenovo', 'HP', 'Dell', 'Acer', 'MSI', 'PC', 'Desktop', 'Monitor', 'Tabletă', 'iPad', 'Samsung Tab', 'Cască', 'Căști', 'AirPods', 'Sony WH', 'Bose', 'JBL', 'Ceas smart', 'Smartwatch', 'Apple Watch', 'Samsung Watch', 'Garmin', 'Fitbit', 'Cameră foto', 'Canon', 'Nikon', 'Sony', 'GoPro', 'Dronă', 'DJI', 'Consolă', 'PlayStation', 'PS5', 'Xbox', 'Nintendo Switch', 'Controller',
            // === CADOURI ===
            'Cadouri', 'Flori', 'Florist', 'Floria', 'FlorideLux', 'Jucării', 'Lego', 'Hasbro', 'Mattel', 'Noriel', 'ToysRUs', 'Jumbo', 'Carturesti', 'Decorațiuni', 'Artizanat'
          ]},
        
        // 🎬 DIVERTISMENT - COMPREHENSIVE
        { id: 'entertainment', name: 'Divertisment', icon: '🎬', color: '#06b6d4',
          keywords: ['divertisment', 'entertainment', 'film', 'cinema', 'concert', 'festival', 'teatru', 'muzeu', 'joc', 'game', 'netflix'],
          subs: [
            // === CINEMA ===
            'Cinema City', 'Cinemax', 'Cinegold', 'MoviePlex', 'Hollywood Multiplex', 'IMAX', 'VIP Cinema', 'Bilet film', 'Popcorn cinema', '3D', '4DX',
            // === TEATRU & CULTURĂ ===
            'Teatru', 'Teatru Național', 'Operă', 'Opera Națională', 'Filarmonică', 'Balet', 'Musical', 'Stand-up', 'Comedy club', 'iMapp', 'Bilet teatru',
            // === CONCERTE & FESTIVALURI ===
            'Concert', 'Bilet concert', 'Festival', 'Untold', 'Electric Castle', 'Neversea', 'Summer Well', 'Saga', 'Beach Please', 'Afterhills', 'TIFF', 'George Enescu', 'Jazz in the Park', 'Rock festival', 'Concert în aer liber',
            // === MUZEE & EXPOZIȚII ===
            'Muzeu', 'Muzeu Național', 'Muzeu Satului', 'Muzeu Țăranului', 'Muzeul de Artă', 'Expoziție', 'Galerie artă', 'Vernisaj',
            // === LOCURI DE VIZITAT ===
            'Zoo', 'Grădina Zoologică', 'Grădină botanică', 'Parc', 'Parc distracții', 'Aqua park', 'Therme', 'Therme București', 'Băile Felix', 'SPA',
            // === ACTIVITĂȚI ===
            'Bowling', 'Biliard', 'Darts', 'Escape room', 'Quest Room', 'Laser tag', 'Paintball', 'Airsoft', 'Karting', 'Karaoke', 'Pub quiz', 'Board games cafe',
            // === VIAȚĂ NOAPTE ===
            'Club noapte', 'Club', 'Discotecă', 'Lounge', 'Bar', 'Pub', 'Rooftop bar', 'Beach bar', 'Karaoke bar',
            // === GAMBLING ===
            'Casino', 'Pariuri', 'Pariuri sportive', 'Betano', 'Superbet', 'Fortuna', 'Unibet', 'Betfair', 'eFortuna', 'Maxbet', 'Admiral', 'Loto', '6/49', 'Joker', 'Noroc', 'Lozuri',
            // === GAMING ===
            'Jocuri video', 'PlayStation', 'PlayStation Plus', 'PS Plus', 'Xbox', 'Xbox Game Pass', 'Nintendo', 'Nintendo Online', 'Steam', 'Steam games', 'Epic Games', 'Origin', 'Battle.net', 'Ubisoft', 'EA', 'Riot Games', 'In-game purchase', 'V-Bucks', 'Robux', 'Gaming PC',
            // === SPORT & FITNESS ===
            'World Class', 'Next Level', 'SmartFit', 'FitLife', 'Gold\'s Gym', 'Igloo', '18 Gym', 'Sală fitness', 'Gym', 'Fitness', 'Personal trainer', 'Yoga', 'Pilates', 'CrossFit', 'Dans', 'Zumba', 'Spinning', 'TRX', 'Arte marțiale', 'Box', 'Kickbox', 'MMA', 'Judo', 'Karate', 'Taekwondo',
            // === SPORTURI ===
            'Fotbal', 'Tenis', 'Tenis masă', 'Badminton', 'Squash', 'Golf', 'Înot', 'Ciclism', 'Bicicletă', 'Alergare', 'Running', 'Patinaj', 'Patinoar', 'Schi', 'Snowboard', 'Skate', 'Role', 'Echitație', 'Escaladă', 'Cățărare', 'Alpinism',
            // === ECHIPAMENT SPORT ===
            'Decathlon', 'Intersport', 'Hervis', 'Sport Vision', 'SportsDirect', 'Sportisimo', 'Echipament sport', 'Echipament fitness', 'Echipament schi', 'Echipament ciclism'
          ]},
        
        // ABONAMENTE & SUBSCRIPTIONS
        { id: 'subscriptions', name: 'Abonamente', icon: '📱', color: '#a855f7',
          keywords: ['abonament', 'subscription', 'netflix', 'spotify', 'youtube', 'hbo', 'disney', 'streaming'],
          subs: [
            // === VIDEO STREAMING ===
            'Netflix', 'HBO Max', 'Disney+', 'Amazon Prime Video', 'Apple TV+', 'Hulu', 'Paramount+', 'Voyo', 'Antena Play', 'Digi Online', 'Orange TV Go', 'SkyShowtime', 'MUBI', 'Crunchyroll', 'Discovery+',
            // === MUSIC STREAMING ===
            'Spotify', 'Apple Music', 'YouTube Music', 'YouTube Premium', 'Deezer', 'Tidal', 'Amazon Music', 'SoundCloud Go',
            // === AI & PRODUCTIVITY ===
            'ChatGPT Plus', 'OpenAI', 'Claude Pro', 'Anthropic', 'Midjourney', 'DALL-E', 'Notion', 'Notion AI', 'Evernote', 'Todoist', 'Trello', 'Asana', 'Slack', 'Zoom', 'Microsoft Teams', 'Google Workspace', 'Grammarly',
            // === CREATIVE SOFTWARE ===
            'Adobe Creative Cloud', 'Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects', 'Lightroom', 'InDesign', 'Canva Pro', 'Figma', 'Sketch', 'Procreate',
            // === OFFICE & CLOUD ===
            'Microsoft 365', 'Office 365', 'Google One', 'iCloud+', 'iCloud storage', 'Dropbox', 'OneDrive', 'Box', 'pCloud',
            // === SECURITY ===
            'VPN', 'NordVPN', 'ExpressVPN', 'Surfshark', 'ProtonVPN', 'CyberGhost', 'Antivirus', 'Kaspersky', 'Bitdefender', 'Norton', 'McAfee', 'ESET', 'Malwarebytes', '1Password', 'LastPass', 'Dashlane',
            // === GAMING SUBSCRIPTIONS ===
            'PlayStation Plus', 'PS Plus Extra', 'PS Plus Premium', 'Xbox Game Pass', 'Xbox Game Pass Ultimate', 'Nintendo Online', 'EA Play', 'Ubisoft+', 'GeForce Now', 'Xbox Cloud Gaming',
            // === NEWS & LEARNING ===
            'Patreon', 'Substack', 'Medium', 'Kindle Unlimited', 'Audible', 'Scribd', 'Blinkist', 'MasterClass', 'Skillshare', 'LinkedIn Learning', 'Coursera Plus', 'Duolingo Plus',
            // === PRESS ===
            'Financial Times', 'The Economist', 'Wall Street Journal', 'New York Times', 'Bloomberg', 'Digi24 Premium', 'HotNews Premium',
            // === DATING & SOCIAL ===
            'Tinder', 'Tinder Plus', 'Tinder Gold', 'Bumble', 'Hinge', 'LinkedIn Premium', 'LinkedIn Recruiter', 'Twitter Blue', 'X Premium', 'Snapchat+', 'Discord Nitro',
            // === OTHER ===
            'Revolut Premium', 'Revolut Metal', 'Monzo Plus', 'N26 Metal', 'Strava', 'AllTrails', 'Headspace', 'Calm', 'Noom', 'MyFitnessPal'
          ]},
        
        // 📚 EDUCAȚIE
        { id: 'education', name: 'Educație', icon: '📚', color: '#84cc16',
          keywords: ['educatie', 'education', 'curs', 'course', 'carte', 'book', 'scoala', 'universitate', 'facultate'],
          subs: [
            // === LIBRĂRII ===
            'Cărturești', 'Elefant', 'Libris', 'Diverta', 'Librex', 'Nemira', 'Polirom', 'Humanitas', 'RAO', 'Librăria Bastilia', 'Librăria Mihai Eminescu', 'BookDepository', 'Amazon Books', 'Kindle', 'eBooks', 'Audiobooks', 'Audible',
            // === CURSURI ONLINE ===
            'Udemy', 'Coursera', 'edX', 'LinkedIn Learning', 'Skillshare', 'MasterClass', 'Pluralsight', 'Treehouse', 'Codecademy', 'FreeCodeCamp', 'DataCamp', 'Brilliant',
            // === LIMBI STRĂINE ===
            'Duolingo', 'Babbel', 'Rosetta Stone', 'Busuu', 'italki', 'Preply', 'Curs engleză', 'Curs germană', 'Curs franceză', 'Curs spaniolă', 'Curs italiană', 'British Council',
            // === CERTIFICĂRI ===
            'Certificări IT', 'AWS Certification', 'Google Cloud', 'Azure', 'Cisco', 'CompTIA', 'PMP', 'Scrum', 'IELTS', 'TOEFL', 'Cambridge', 'Goethe', 'DELF',
            // === UNIVERSITATE ===
            'Taxă școlarizare', 'Universitate', 'Facultate', 'Master', 'MBA', 'Doctorat', 'Postuniversitar', 'UBB', 'Universitatea București', 'ASE', 'Politehnica', 'UAUIM', 'SNSPA',
            // === ȘCOALĂ ===
            'Școală privată', 'Liceu privat', 'Grădiniță', 'Grădiniță privată', 'Creșă', 'Afterschool', 'Taxă grădiniță', 'Taxă școală',
            // === MEDITAȚII ===
            'Meditații', 'Profesor particular', 'Tutoring', 'Pregătire BAC', 'Pregătire Evaluare Națională', 'Pregătire admitere', 'Meditații matematică', 'Meditații română', 'Meditații engleză',
            // === RECHIZITE ===
            'Rechizite', 'Caiete', 'Pixuri', 'Creioane', 'Ghiozdan', 'Penar', 'Stilou', 'Markere', 'Acuarele', 'Uniformă școlară', 'Papetărie', 'Staples', 'Birou pentru copii',
            // === DEZVOLTARE ===
            'Workshop', 'Seminar', 'Webinar', 'Conferință', 'Training', 'Team building', 'Dezvoltare personală', 'Coaching', 'Life coaching', 'Business coaching'
          ]},
        
        // 👨‍👩‍👧 FAMILIE & COPII
        { id: 'family', name: 'Familie & Copii', icon: '👨‍👩‍👧', color: '#f97316',
          keywords: ['familie', 'family', 'copil', 'copii', 'baby', 'kids', 'jucarii', 'scutece', 'lapte praf'],
          subs: [
            // === MAGAZINE COPII ===
            'Noriel', 'Smyk', 'Toys R Us', 'Jumbo', 'Pepco Kids', 'KiK Kids', 'Takko Kids', 'H&M Kids', 'Zara Kids', 'Reserved Kids', 'C&A Kids', 'Benetton Kids', 'OVS Kids', 'Chicco', 'Prenatal', 'BabyNeeds', 'Nichiduta', 'Bekid', 'Bebe Tei', 'BabyPlus',
            // === SCUTECE & ÎNGRIJIRE ===
            'Scutece', 'Pampers', 'Huggies', 'Libero', 'Molfix', 'Happy', 'Scutece textile', 'Șervețele umede', 'Cremă bebeluș', 'Pudră', 'Ulei bebeluș', 'Șampon bebeluș', 'Cremă fund', 'Bepanthen', 'Sudocrem',
            // === ALIMENTAȚIE BEBELUȘI ===
            'Lapte praf', 'Aptamil', 'NAN', 'Hipp', 'Nutricia', 'Similac', 'Piure', 'Cereale bebeluș', 'Biberoane', 'Suzete', 'Căni antivărsare', 'Sterilizator', 'Încălzitor biberoane', 'Pompa san', 'Medela',
            // === MOBILIER COPII ===
            'Pătuț', 'Landou', 'Cărucior', 'Scoică auto', 'Scaun auto', 'Leagăn', 'Balansoar', 'Premergător', 'Tarc', 'Saltea copii', 'Asternut copii', 'Păturică', 'Pernă copii',
            // === HAINE COPII ===
            'Body copii', 'Salopetă', 'Pijamale copii', 'Costum botez', 'Rochie fetițe', 'Pantaloni copii', 'Tricou copii', 'Geacă copii', 'Ghete copii', 'Sandale copii', 'Adidași copii',
            // === JUCĂRII ===
            'Lego', 'Playmobil', 'Fisher Price', 'Vtech', 'Barbie', 'Hot Wheels', 'Nerf', 'Hasbro', 'Mattel', 'Paw Patrol', 'Peppa Pig', 'LOL Surprise', 'Puzzle', 'Jocuri societate', 'Jocuri educative', 'Lego Duplo', 'Lego Technic', 'Lego City', 'Lego Star Wars',
            // === EDUCAȚIE COPII ===
            'Cărți copii', 'Povești', 'Colorat', 'Carioci', 'Creioane colorate', 'Plastilină', 'Instrumente muzicale copii', 'Piano copii', 'Chitară copii',
            // === ACTIVITĂȚI COPII ===
            'Animatori', 'Petrecere copii', 'Loc de joaca', 'Trambulină', 'Piscină gonflabilă', 'Parc copii', 'Grădină zoologică', 'Circ', 'Teatru copii', 'Babysitter', 'Bonă', 'Baby sitting'
          ]},
        
        // ✈️ CĂLĂTORII
        { id: 'travel', name: 'Călătorii', icon: '✈️', color: '#0ea5e9',
          keywords: ['calatorie', 'travel', 'vacanta', 'vacation', 'hotel', 'zbor', 'flight', 'booking', 'airbnb'],
          subs: [
            // === REZERVĂRI ===
            'Booking.com', 'Airbnb', 'Hotels.com', 'Expedia', 'Trivago', 'Agoda', 'Hostelworld', 'Vrbo', 'HomeAway', 'TripAdvisor',
            // === AGENȚII ===
            'TUI TravelCenter', 'Paralela 45', 'Christian Tour', 'Dertour', 'Eurolines', 'Karpaten Turism', 'Perfect Tour', 'Vola.ro', 'Paravion', 'eSky', 'Momondo', 'Skyscanner', 'Google Flights', 'Kayak',
            // === CAZARE ===
            'Hotel', 'Pensiune', 'Vila', 'Apartament vacanță', 'Hostel', 'Motel', 'Camping', 'Glamping', 'Resort', 'All inclusive', 'Bungalow', 'Cabană', 'AirBnB',
            // === LANȚURI HOTELIERE ===
            'Marriott', 'Hilton', 'IHG', 'Accor', 'Radisson', 'Ibis', 'Novotel', 'Mercure', 'Best Western', 'Holiday Inn', 'Crowne Plaza', 'InterContinental', 'Sheraton', 'Hyatt', 'Four Seasons', 'Ritz Carlton',
            // === TRANSPORT ===
            'Bilet avion', 'Bilet tren', 'Bilet autocar', 'FlixBus', 'Eurolines', 'Rent a car', 'Închiriere mașină', 'Transfer aeroport', 'Taxi aeroport',
            // === ACTIVITĂȚI TURISTICE ===
            'Tur ghidat', 'Excursie', 'City tour', 'Free walking tour', 'GetYourGuide', 'Viator', 'Musement', 'Bilete muzeu', 'Intrări obiective', 'Croazieră', 'Safari', 'Trekking',
            // === DOCUMENTE ===
            'Pașaport', 'Viză', 'Asigurare călătorie', 'Travel insurance', 'Green Card', 'Vigneta', 'Roamingul', 'SIM internațional',
            // === BAGAJE ===
            'Bagaj cală', 'Bagaj mână', 'Geantă voiaj', 'Rucsac călătorie', 'Accesorii călătorie', 'Adaptor priză', 'Power bank', 'Pernă gât', 'Geantă cosmetice travel'
          ]},
        
        // 🐕 ANIMALE
        { id: 'pets', name: 'Animale', icon: '🐕', color: '#eab308',
          keywords: ['animal', 'pet', 'caine', 'pisica', 'veterinar', 'mancare animale', 'hrana'],
          subs: [
            // === MAGAZINE PET SHOP ===
            'Pet Shop', 'Animax', 'Zoo Center', 'Hornbach Pets', 'Dedeman Pets', 'Carrefour Pet', 'Lidl Pet', 'Kaufland Pet', 'Mega Image Pet', 'zooplus', 'Petissimo', 'Pet Boutique', 'Biotur',
            // === HRANĂ ===
            'Hrană câini', 'Hrană pisici', 'Royal Canin', 'Hills', 'Purina', 'Whiskas', 'Pedigree', 'Felix', 'Brit', 'Acana', 'Orijen', 'Taste of the Wild', 'Josera', 'Happy Dog', 'Happy Cat', 'Recompense', 'Snacks animale',
            // === ÎNGRIJIRE ===
            'Veterinar', 'Consultație veterinar', 'Vaccinuri animale', 'Deparazitare', 'Vermifugare', 'Operație animale', 'Sterilizare', 'Castrare', 'Detartraj câini', 'Tratament', 'Spitalizare animale',
            // === ACCESORII ===
            'Cusca', 'Tarc animale', 'Pat câine', 'Pat pisică', 'Litieră', 'Nisip pisici', 'Lesa', 'Ham', 'Zgardă', 'Botniță', 'Jucării animale', 'Bol hrană', 'Fântână apă', 'Perie animale', 'Tuns câini', 'Grooming', 'Salon frizerie canină', 'Transport animale', 'Cușcă transport', 'Geantă transport',
            // === ALTE ANIMALE ===
            'Pești', 'Acvariu', 'Păsări', 'Cușcă păsări', 'Hamsteri', 'Iepuri', 'Rozătoare', 'Reptile', 'Terariu'
          ]},
        
        // 🎁 CADOURI
        { id: 'gifts', name: 'Cadouri', icon: '🎁', color: '#ec4899',
          keywords: ['cadou', 'gift', 'dar', 'aniversare', 'craciun', 'paste'],
          subs: [
            // === OCAZII ===
            'Cadou ziua de naștere', 'Cadou aniversare', 'Cadou Crăciun', 'Cadou Paște', 'Cadou Mărțișor', 'Cadou Valentine\'s', 'Cadou 8 Martie', 'Cadou nuntă', 'Dar nuntă', 'Cadou botez', 'Dar botez', 'Cadou absolvire', 'Cadou promovare', 'Cadou pensionare',
            // === MAGAZINE CADOURI ===
            'Floria', 'FlorideLux', 'Flori', 'Buchete', 'Aranjamente florale', 'Carturești Cadouri', 'Elefant Cadouri', 'eMAG Gift', 'Voucher cadou', 'Card cadou', 'Gift card', 'Experience gift', 'Voiaj.ro',
            // === TIPURI ===
            'Bijuterii cadou', 'Ceas cadou', 'Parfum cadou', 'Cosmetice cadou', 'Gadget cadou', 'Experiență cadou', 'Sărituri cu parașuta', 'Zbor cu balonul', 'Spa cadou', 'Cină romantică', 'Concert cadou', 'Carte cadou', 'Album foto', 'Personalizat', 'Gravura'
          ]},
        
        // 🏛️ TAXE & IMPOZITE
        { id: 'taxes', name: 'Taxe & Impozite', icon: '🏛️', color: '#64748b',
          keywords: ['taxa', 'impozit', 'tax', 'anaf', 'stat', 'contributii'],
          subs: [
            // === IMPOZITE ===
            'Impozit venit', 'Impozit salariu', 'CAS', 'CASS', 'Impozit dividende', 'Impozit pe profit', 'Impozit clădiri', 'Impozit teren', 'Impozit auto', 'Taxă auto', 'Impozit locuință',
            // === TAXE ===
            'ANAF', 'Taxă timbru', 'Taxă judiciară', 'Taxă notarială', 'Taxă cadastru', 'Taxă întabulare', 'Taxă pașaport', 'Taxă viză', 'Taxă certificat', 'Taxă copie legalizată',
            // === CONTRIBUȚII ===
            'Contribuții sociale', 'Pensie stat', 'Sănătate stat', 'Șomaj', 'Contribuție asiguratorie',
            // === AMENZI ===
            'Amendă', 'Penalizări', 'Dobânzi întârziere', 'Majorări', 'Executare silită'
          ]},
        
        // 💼 BUSINESS & FREELANCE
        { id: 'business', name: 'Business', icon: '💼', color: '#6366f1',
          keywords: ['business', 'afacere', 'firma', 'pfa', 'srl', 'freelance'],
          subs: [
            // === ÎNFIINȚARE ===
            'Înființare SRL', 'Înființare PFA', 'Înființare II', 'Registrul Comerțului', 'Autorizații', 'Licențe', 'Avize', 'Semnătură electronică',
            // === OPERAȚIONAL ===
            'Contabilitate', 'Contabil', 'Soft contabilitate', 'Saga', 'WinMentor', 'SmartBill', 'Facturis', 'Oblio', 'Consultanță', 'Avocat', 'Juridic', 'Audit', 'Expertiză',
            // === MARKETING ===
            'Marketing', 'Facebook Ads', 'Google Ads', 'SEO', 'SMM', 'Content marketing', 'Email marketing', 'Mailchimp', 'Sendinblue', 'Design grafic', 'Logo', 'Branding', 'Website', 'Hosting', 'Domeniu',
            // === OFFICE ===
            'Chirie birou', 'Coworking', 'Impact Hub', 'TechHub', 'Regus', 'Spaces', 'Mobila birou', 'Echipamente birou', 'Papetărie birou', 'Imprimantă', 'Xerox', 'Scanner', 'Toner', 'Hârtie',
            // === SOFT & TOOLS ===
            'Software', 'Licențe software', 'CRM', 'ERP', 'Project management', 'Jira', 'Monday.com', 'Basecamp', 'Cloud hosting', 'AWS', 'Google Cloud', 'Azure', 'Servere', 'Domenii'
          ]},
        
        // 🤝 DATORII & ÎMPRUMUTURI
        { id: 'debt', name: 'Datorii', icon: '🤝', color: '#ef4444',
          keywords: ['datorie', 'imprumut', 'credit', 'rata', 'banca', 'refinantare'],
          subs: [
            // === BĂNCI ===
            'BCR', 'BRD', 'ING', 'Raiffeisen', 'UniCredit', 'Banca Transilvania', 'Alpha Bank', 'CEC Bank', 'OTP Bank', 'Intesa Sanpaolo', 'Libra Bank', 'Garanti', 'First Bank', 'Credit Europe', 'Patria Bank', 'Idea Bank', 'ProCredit',
            // === TIPURI CREDIT ===
            'Credit nevoi personale', 'Credit consum', 'Credit ipotecar', 'Credit auto', 'Credit IMM', 'Linie credit', 'Overdraft', 'Card credit', 'Rate fără dobândă', 'Buy Now Pay Later', 'Klarna', 'PayPal Credit',
            // === RAMBURSARE ===
            'Rată credit', 'Dobândă credit', 'Comision credit', 'Asigurare credit', 'Rambursare anticipată', 'Refinanțare', 'Consolidare datorii',
            // === IFN ===
            'IFN', 'Provident', 'Cetelem', 'TBI Bank', 'Credius', 'Ferratum', 'Viva Credit', 'Zaplo', 'Creditfix',
            // === PERSONAL ===
            'Împrumut prieten', 'Împrumut familie', 'Bani datorați', 'Restituire împrumut'
          ]},
        
        // 🎨 ÎNGRIJIRE PERSONALĂ
        { id: 'personal_care', name: 'Îngrijire', icon: '🎨', color: '#f472b6',
          keywords: ['ingrijire', 'salon', 'frizerie', 'coafor', 'manichiura', 'spa', 'masaj'],
          subs: [
            // === PĂRUL ===
            'Frizerie', 'Coafor', 'Salon', 'Tuns', 'Vopsit', 'Meșe', 'Balayage', 'Coafat', 'Ondulat', 'Permanent', 'Tratament păr', 'Keratină', 'Botox păr', 'Extensii', 'Barbershop', 'Bărbierit', 'Aranjat barbă',
            // === UNGHII ===
            'Manichiură', 'Pedichiură', 'Mani-pedi', 'Unghii gel', 'Unghii acryl', 'Oja semipermanentă', 'Nail art', 'Nail salon',
            // === COSMETICĂ ===
            'Cosmetică', 'Curățare ten', 'Tratament facial', 'Peeling', 'Microdermabraziune', 'Lifting', 'Botox', 'Acid hialuronic', 'Filler', 'Gene false', 'Extensii gene', 'Laminare gene', 'Sprâncene', 'Microblading', 'Dermopigmentare',
            // === BODY ===
            'Masaj', 'Masaj relaxare', 'Masaj anticelulitic', 'Masaj terapeutic', 'SPA', 'Saună', 'Jacuzzi', 'Împachetări', 'Tratament corp', 'Epilare', 'Epilare laser', 'IPL', 'Epilare cu ceară', 'Bronzare', 'Solar', 'Spray tan',
            // === LANȚURI ===
            'Nomasvello', 'Hegemon', 'Excellence Spa', 'Mandara Spa', 'Zen Spa'
          ]},
        
        // 🎲 ALTELE
        { id: 'other', name: 'Altele', icon: '🎲', color: '#78716c',
          keywords: ['altele', 'other', 'diverse', 'misc'],
          subs: [
            'Diverse', 'Neprevăzute', 'Urgențe', 'Situații speciale', 'Cheltuieli neplanificate', 'Comisioane', 'Taxe diverse', 'Servicii diverse', 'Reparații diverse', 'Cheltuieli casă', 'Cheltuieli personale', 'Bacșiș', 'Tips', 'Donații', 'Caritate', 'Biserică', 'Pomană', 'Parastase', 'Înmormântare', 'Coroane', 'Sicriu', 'Ceremonii'
          ]}
    ],
    
    income: [
        // 💵 SALARIU
        { id: 'salary', name: 'Salariu', icon: '💵', color: '#22c55e',
          keywords: ['salariu', 'salary', 'leafa', 'plata', 'wage', 'income'],
          subs: [
            'Salariu net', 'Salariu brut', 'Avans salariu', 'Lichidare', 'Prima', 'Bonus', 'Bonus performanță', 'Bonus Crăciun', 'Bonus Paște', 'Al 13-lea salariu', 'Ore suplimentare', 'Overtime', 'Spor noapte', 'Spor weekend', 'Spor vechime', 'Tichet masă', 'Tichet cadou', 'Tichet vacanță', 'Decontare', 'Diurnă', 'Concediu plătit', 'CO plătit', 'Indemnizație concediu'
          ]},
        
        // 💼 FREELANCE & BUSINESS
        { id: 'freelance', name: 'Freelance', icon: '💼', color: '#06b6d4',
          keywords: ['freelance', 'pfa', 'srl', 'business', 'afacere', 'consultant'],
          subs: [
            // === FREELANCE ===
            'Proiect freelance', 'Contract', 'Consultanță', 'Servicii', 'Mentenanță', 'Retainer', 'Upwork', 'Fiverr', 'Toptal', 'Freelancer.com', 'PeoplePerHour', '99designs',
            // === IT ===
            'Programare', 'Web development', 'Mobile development', 'Design UI/UX', 'DevOps', 'QA Testing', 'Data Science', 'Machine Learning', 'Cybersecurity',
            // === CREATIVE ===
            'Design grafic', 'Logo design', 'Video editing', 'Foto', 'Copywriting', 'Content writing', 'Traduceri', 'Voice over', 'Ilustrație',
            // === MARKETING ===
            'SEO', 'SMM', 'Facebook Ads', 'Google Ads', 'Email marketing', 'Influencer', 'Affiliate marketing',
            // === BUSINESS ===
            'Profit SRL', 'Dividende SRL', 'Facturi PFA', 'Încasări', 'Venit net afacere', 'Cifră afaceri', 'Royalties'
          ]},
        
        // INVESTIȚII
        { id: 'investments', name: 'Investiții', icon: '📈', color: '#22c55e',
          keywords: ['investitie', 'investment', 'dividend', 'dobanda', 'profit', 'actiuni', 'etf', 'obligatiuni'],
          subs: [
            // === DIVIDENDE ===
            'Dividende acțiuni', 'Dividende ETF', 'Dividende fonduri', 'Dividend BRD', 'Dividend BVB', 'Dividend S&P500', 'Dividend VWCE',
            // === DOBÂNZI ===
            'Dobândă depozit', 'Dobândă cont economii', 'Dobândă obligațiuni', 'Cupon obligațiuni', 'Titluri stat', 'Tezaur', 'Fidelis',
            // === CAPITAL GAINS ===
            'Profit acțiuni', 'Profit ETF', 'Profit obligațiuni', 'Vânzare acțiuni', 'Vânzare ETF', 'Capital gains', 'Randament fonduri',
            // === FONDURI ===
            'BT Asset Management', 'NN Investment', 'Franklin Templeton', 'BRD Asset', 'Erste Asset', 'Raiffeisen Asset', 'BCR Asset',
            // === PENSIE ===
            'Pilon 2', 'Pilon 3', 'Pensie privată', 'NN Pensii', 'Metropolitan', 'Allianz Țiriac',
            // === REAL ESTATE ===
            'REITs', 'Real estate income', 'Crowdfunding returns',
            // === P2P ===
            'P2P lending', 'Mintos', 'Bondora', 'PeerBerry', 'Twino', 'Robocash'
          ]},
        
        // ₿ CRYPTO
        { id: 'crypto', name: 'Crypto', icon: '₿', color: '#f7931a',
          keywords: ['crypto', 'bitcoin', 'ethereum', 'btc', 'eth', 'binance', 'coinbase'],
          subs: [
            // === EXCHANGE ===
            'Binance', 'Coinbase', 'Kraken', 'FTX', 'Crypto.com', 'KuCoin', 'Bybit', 'OKX', 'Gate.io', 'Revolut Crypto', 'TradeVille Crypto',
            // === TRADING ===
            'Profit Bitcoin', 'Profit Ethereum', 'Profit altcoins', 'Profit Solana', 'Profit Cardano', 'Profit XRP', 'Profit memecoins', 'Day trading', 'Swing trading',
            // === PASSIVE ===
            'Staking', 'Staking ETH', 'Staking SOL', 'Staking ADA', 'Staking DOT', 'Yield farming', 'Liquidity mining', 'DeFi yields', 'Lending crypto', 'Aave', 'Compound',
            // === AIRDROPS & NFT ===
            'Airdrops', 'NFT sales', 'NFT royalties', 'OpenSea', 'Blur',
            // === MISC ===
            'Mining', 'Referral bonus', 'Learn to earn', 'Play to earn', 'Cashback crypto'
          ]},
        
        // 🏢 CHIRIE PRIMITĂ
        { id: 'rental', name: 'Chirii', icon: '🏢', color: '#0ea5e9',
          keywords: ['chirie', 'rent', 'airbnb', 'imobiliar', 'inchiriere'],
          subs: [
            'Chirie apartament', 'Chirie garsonieră', 'Chirie cameră', 'Chirie casă', 'Airbnb host', 'Booking.com host', 'Short term rental', 'Long term rental', 'Chirie birou', 'Chirie spațiu comercial', 'Chirie depozit', 'Chirie teren', 'Chirie parcare', 'Chirie garaj', 'Property management'
          ]},
        
        // 👴 PENSIE & SOCIAL
        { id: 'pension', name: 'Pensie & Social', icon: '👴', color: '#64748b',
          keywords: ['pensie', 'pension', 'ajutor', 'social', 'alocatie', 'somaj', 'stat'],
          subs: [
            'Pensie stat', 'Pensie limită vârstă', 'Pensie anticipată', 'Pensie invaliditate', 'Pensie urmaș', 'Pensie specială', 'Pensie militară', 'Pilon 2 încasări', 'Pilon 3 încasări', 'Alocație copii', 'Alocație stat', 'Indemnizație creștere copil', 'Concediu maternitate', 'Concediu paternitate', 'Șomaj', 'Ajutor social', 'VMG', 'Ajutor încălzire', 'Bursă', 'Grant', 'Subvenții', 'Fonduri europene', 'Start-Up Nation'
          ]},
        
        // 🎁 CADOURI & MOȘTENIRI
        { id: 'gifts_income', name: 'Cadouri', icon: '🎁', color: '#ec4899',
          keywords: ['cadou', 'gift', 'mostenire', 'dar', 'bani primiti'],
          subs: ['Bani cadou', 'Cadou ziua naștere', 'Cadou Crăciun', 'Dar nuntă', 'Dar botez', 'Moștenire', 'Donații primite', 'Premii', 'Tombola', 'Bani găsiți']},
        
        // ↩️ RAMBURSĂRI
        { id: 'refunds', name: 'Rambursări', icon: '↩️', color: '#3b82f6',
          keywords: ['rambursare', 'refund', 'retur', 'return', 'cashback'],
          subs: ['Retur produse', 'Rambursare', 'Refund', 'Garanție', 'Decontări medicale', 'Tax refund', 'Cashback', 'Revolut cashback', 'ING cashback', 'Rebates', 'Compensații', 'Despăgubiri']},
        
        // 🏷️ VÂNZĂRI
        { id: 'sales', name: 'Vânzări', icon: '🏷️', color: '#f97316',
          keywords: ['vanzare', 'sale', 'olx', 'marketplace', 'second hand', 'vinted'],
          subs: ['OLX', 'Facebook Marketplace', 'Vinted', 'Lajumate', 'Publi24', 'Second hand', 'Vânzare haine', 'Vânzare telefon', 'Vânzare laptop', 'Vânzare auto', 'Vânzare mobilă', 'Garage sale']},
        
        // 🎰 CÂȘTIGURI
        { id: 'winnings', name: 'Câștiguri', icon: '🎰', color: '#eab308',
          keywords: ['castig', 'winning', 'loto', 'pariuri', 'noroc'],
          subs: ['Loto', 'Pariuri sportive', 'Casino', 'Poker', 'Concursuri', 'Premiu', 'Giveaway', 'Tombola']},
        
        // ALTE VENITURI
        { id: 'other_income', name: 'Alte Venituri', icon: '💰', color: '#84cc16',
          keywords: ['venit', 'income', 'altele', 'diverse'],
          subs: ['Diverse', 'Side hustle', 'Gig economy', 'Uber driver', 'Bolt driver', 'Glovo curier', 'Tazz curier', 'Babysitting', 'Pet sitting', 'Sondaje', 'User testing', 'Împrumuturi returnate', 'Depozite recuperate']}
    ]
};

// ═══════════════════════════════════════════════════════════════
// 🤖 SMART CATEGORY SYSTEM - AI + Custom + Auto-Learn
// ═══════════════════════════════════════════════════════════════

// Custom categories storage
let customCategories = { expense: [], income: [] };

// Auto-learn database - stores user category preferences
let learnedPatterns = {};

// Smart Category Engine
const SmartCategoryEngine = {
    
    // 📂 STORAGE KEYS
    STORAGE_KEYS: {
        customCategories: 'budget_custom_categories',
        learnedPatterns: 'budget_learned_patterns',
        merchantHistory: 'budget_merchant_history'
    },
    
    // 🚀 INITIALIZE - Load saved data
    init: function() {
        try {
            // Load custom categories
            const savedCustom = localStorage.getItem(this.STORAGE_KEYS.customCategories);
            if (savedCustom) {
                customCategories = JSON.parse(savedCustom);
            }
            
            // Load learned patterns
            const savedPatterns = localStorage.getItem(this.STORAGE_KEYS.learnedPatterns);
            if (savedPatterns) {
                learnedPatterns = JSON.parse(savedPatterns);
            }
            
            console.log('🤖 SmartCategoryEngine initialized:', {
                customCategories: customCategories,
                learnedPatterns: Object.keys(learnedPatterns).length + ' patterns'
            });
        } catch (e) {
            console.error('SmartCategoryEngine init error:', e);
        }
    },
    
    // 💾 SAVE - Persist data to localStorage
    save: function() {
        try {
            localStorage.setItem(this.STORAGE_KEYS.customCategories, JSON.stringify(customCategories));
            localStorage.setItem(this.STORAGE_KEYS.learnedPatterns, JSON.stringify(learnedPatterns));
        } catch (e) {
            console.error('SmartCategoryEngine save error:', e);
        }
    },
    
    // ═══════════════════════════════════════════════════════════
    // 🔍 AI AUTO-DETECT - Intelligent category detection
    // ═══════════════════════════════════════════════════════════
    
    autoCategorize: function(description, amount, type = 'expense') {
        if (!description) return null;
        
        const desc = description.toLowerCase().trim();
        
        // 1️⃣ FIRST: Check learned patterns (user preferences)
        const learnedResult = this.checkLearnedPatterns(desc);
        if (learnedResult) {
            console.log('🧠 Auto-categorized from learned:', learnedResult);
            return learnedResult;
        }
        
        // 2️⃣ SECOND: Check custom categories
        const customResult = this.checkCustomCategories(desc, type);
        if (customResult) {
            console.log('📁 Auto-categorized from custom:', customResult);
            return customResult;
        }
        
        // 3️⃣ THIRD: Smart detection from built-in categories
        const smartResult = this.smartDetect(desc, type);
        if (smartResult) {
            console.log('🤖 Auto-categorized with AI:', smartResult);
            return smartResult;
        }
        
        // 4️⃣ FOURTH: Brand/Company detection (for unknown merchants)
        const brandResult = this.detectBrand(desc, amount, type);
        if (brandResult) {
            console.log('🏪 Auto-categorized by brand detection:', brandResult);
            return brandResult;
        }
        
        return null;
    },
    
    // Check learned patterns from user history
    checkLearnedPatterns: function(desc) {
        // Exact match first
        if (learnedPatterns[desc]) {
            return learnedPatterns[desc];
        }
        
        // Partial match
        for (const [pattern, result] of Object.entries(learnedPatterns)) {
            if (desc.includes(pattern) || pattern.includes(desc)) {
                return result;
            }
        }
        
        // Word-based match
        const words = desc.split(/\s+/);
        for (const word of words) {
            if (word.length >= 4 && learnedPatterns[word]) {
                return learnedPatterns[word];
            }
        }
        
        return null;
    },
    
    // Check custom categories
    checkCustomCategories: function(desc, type) {
        const customs = customCategories[type] || [];
        
        for (const custom of customs) {
            // Check main category name
            if (desc.includes(custom.name.toLowerCase())) {
                return { category: custom.id, subcategory: custom.name };
            }
            
            // Check subcategories
            for (const sub of (custom.subs || [])) {
                if (desc.includes(sub.toLowerCase())) {
                    return { category: custom.id, subcategory: sub };
                }
            }
            
            // Check keywords
            for (const kw of (custom.keywords || [])) {
                if (desc.includes(kw.toLowerCase())) {
                    return { category: custom.id, subcategory: custom.name };
                }
            }
        }
        
        return null;
    },
    
    // Smart detection from built-in categories
    smartDetect: function(desc, type) {
        const cats = categories[type] || [];
        let bestMatch = null;
        let bestScore = 0;
        
        for (const cat of cats) {
            let score = 0;
            let matchedSub = null;
            
            // Check subcategories (highest priority)
            for (const sub of (cat.subs || [])) {
                const subLower = sub.toLowerCase();
                
                // Exact match = 100 points
                if (desc === subLower) {
                    return { category: cat.id, subcategory: sub, confidence: 100 };
                }
                
                // Contains match = 80 points
                if (desc.includes(subLower) || subLower.includes(desc)) {
                    const matchScore = 80 + (subLower.length / desc.length * 20);
                    if (matchScore > score) {
                        score = matchScore;
                        matchedSub = sub;
                    }
                }
                
                // Word match = 50 points per word
                const subWords = subLower.split(/\s+/);
                const descWords = desc.split(/\s+/);
                for (const sw of subWords) {
                    if (sw.length >= 3 && descWords.some(dw => dw.includes(sw) || sw.includes(dw))) {
                        score += 50;
                        if (!matchedSub) matchedSub = sub;
                    }
                }
            }
            
            // Check keywords (medium priority)
            for (const kw of (cat.keywords || [])) {
                if (desc.includes(kw.toLowerCase())) {
                    score += 30;
                }
            }
            
            // Check category name (lower priority)
            if (desc.includes(cat.name.toLowerCase())) {
                score += 20;
            }
            
            if (score > bestScore) {
                bestScore = score;
                bestMatch = { category: cat.id, subcategory: matchedSub || cat.name, confidence: Math.min(score, 100) };
            }
        }
        
        return bestScore >= 30 ? bestMatch : null;
    },
    
    // Brand/Company detection for unknown merchants
    detectBrand: function(desc, amount, type) {
        if (type !== 'expense') return null;
        
        // Common patterns for Romanian transactions
        const patterns = [
            // Bank/Card patterns
            { regex: /pos\s+(.+)/i, extract: 1 },
            { regex: /plata\s+(.+)/i, extract: 1 },
            { regex: /transfer\s+(.+)/i, extract: 1 },
            { regex: /(.+)\s+srl/i, extract: 1 },
            { regex: /(.+)\s+sa\b/i, extract: 1 },
            { regex: /sc\s+(.+)/i, extract: 1 },
        ];
        
        let merchantName = desc;
        for (const p of patterns) {
            const match = desc.match(p.regex);
            if (match && match[p.extract]) {
                merchantName = match[p.extract].trim();
                break;
            }
        }
        
        // Try to categorize by amount ranges and keywords
        if (amount) {
            // Small amounts (< 50) often food/coffee
            if (amount < 50 && /coffee|cafea|cafe|latte|cappuccino/i.test(desc)) {
                return { category: 'food', subcategory: merchantName, confidence: 60 };
            }
            
            // Medium amounts with food keywords
            if (amount < 200 && /restaurant|bistro|grill|kitchen|bucatarie|mancare|food|pizza|burger|kebab/i.test(desc)) {
                return { category: 'food', subcategory: merchantName, confidence: 60 };
            }
            
            // Fuel station patterns
            if (/benzina|petrol|mol |omv |lukoil|rompetrol|socar|shell/i.test(desc)) {
                return { category: 'transport', subcategory: merchantName, confidence: 70 };
            }
            
            // Pharmacy patterns
            if (/farmacie|pharmacy|catena|sensiblu|helpnet|dr\.?\s*max|dona\s|tei\b/i.test(desc)) {
                return { category: 'health', subcategory: merchantName, confidence: 70 };
            }
            
            // Supermarket patterns
            if (/market|magazin|shop|store|mega|lidl|kaufland|carrefour|auchan|penny|profi/i.test(desc)) {
                return { category: 'food', subcategory: merchantName, confidence: 65 };
            }
        }
        
        // Return as uncategorized but with merchant name extracted
        return { category: null, subcategory: merchantName, confidence: 0 };
    },
    
    // ═══════════════════════════════════════════════════════════
    // 📚 AUTO-LEARN - Remember user preferences
    // ═══════════════════════════════════════════════════════════
    
    learn: function(description, category, subcategory) {
        if (!description || !category) return;
        
        const key = description.toLowerCase().trim();
        
        // Store the pattern
        learnedPatterns[key] = {
            category: category,
            subcategory: subcategory || category,
            learnedAt: new Date().toISOString(),
            useCount: (learnedPatterns[key]?.useCount || 0) + 1
        };
        
        // Also learn significant words (3+ chars)
        const words = key.split(/\s+/).filter(w => w.length >= 4);
        for (const word of words) {
            if (!learnedPatterns[word]) {
                learnedPatterns[word] = {
                    category: category,
                    subcategory: subcategory || category,
                    learnedAt: new Date().toISOString(),
                    useCount: 1,
                    isWord: true
                };
            }
        }
        
        this.save();
        console.log('📚 Learned pattern:', key, '->', category, '/', subcategory);
    },
    
    // Forget a learned pattern
    forget: function(description) {
        const key = description.toLowerCase().trim();
        delete learnedPatterns[key];
        this.save();
    },
    
    // Get all learned patterns
    getLearnedPatterns: function() {
        return Object.entries(learnedPatterns)
            .filter(([k, v]) => !v.isWord)
            .sort((a, b) => (b[1].useCount || 0) - (a[1].useCount || 0));
    },
    
    // ═══════════════════════════════════════════════════════════
    // ✏️ CUSTOM CATEGORIES - User-defined categories
    // ═══════════════════════════════════════════════════════════
    
    // Add a new custom category
    addCustomCategory: function(type, category) {
        if (!type || !category || !category.name) return false;
        
        // Generate ID if not provided
        if (!category.id) {
            category.id = 'custom_' + category.name.toLowerCase().replace(/\s+/g, '_') + '_' + Date.now();
        }
        
        // Set defaults
        category.icon = category.icon || '📁';
        category.color = category.color || '#6b7280';
        category.subs = category.subs || [];
        category.keywords = category.keywords || [];
        category.isCustom = true;
        
        // Check for duplicates
        const existing = customCategories[type].find(c => c.id === category.id || c.name.toLowerCase() === category.name.toLowerCase());
        if (existing) return false;
        
        customCategories[type].push(category);
        this.save();
        
        console.log('✏️ Added custom category:', category);
        return true;
    },
    
    // Add subcategory to existing category
    addSubcategory: function(type, categoryId, subcategoryName) {
        if (!subcategoryName) return false;
        
        // Check in custom categories first
        let cat = customCategories[type]?.find(c => c.id === categoryId);
        
        if (cat) {
            if (!cat.subs.includes(subcategoryName)) {
                cat.subs.push(subcategoryName);
                this.save();
                return true;
            }
        } else {
            // For built-in categories, create a custom extension
            const builtIn = categories[type]?.find(c => c.id === categoryId);
            if (builtIn && !builtIn.subs.includes(subcategoryName)) {
                // Add to a custom extensions storage
                if (!customCategories[type + '_extensions']) {
                    customCategories[type + '_extensions'] = {};
                }
                if (!customCategories[type + '_extensions'][categoryId]) {
                    customCategories[type + '_extensions'][categoryId] = [];
                }
                if (!customCategories[type + '_extensions'][categoryId].includes(subcategoryName)) {
                    customCategories[type + '_extensions'][categoryId].push(subcategoryName);
                    this.save();
                    return true;
                }
            }
        }
        return false;
    },
    
    // Get all subcategories for a category (built-in + custom)
    getSubcategories: function(type, categoryId) {
        const subs = new Set();
        
        // Built-in subcategories
        const builtIn = categories[type]?.find(c => c.id === categoryId);
        if (builtIn) {
            builtIn.subs.forEach(s => subs.add(s));
        }
        
        // Custom category subcategories
        const custom = customCategories[type]?.find(c => c.id === categoryId);
        if (custom) {
            custom.subs.forEach(s => subs.add(s));
        }
        
        // Custom extensions for built-in categories
        const extensions = customCategories[type + '_extensions']?.[categoryId] || [];
        extensions.forEach(s => subs.add(s));
        
        return Array.from(subs).sort();
    },
    
    // Get all categories (built-in + custom)
    getAllCategories: function(type) {
        const builtIn = categories[type] || [];
        const custom = customCategories[type] || [];
        return [...builtIn, ...custom];
    },
    
    // Delete custom category
    deleteCustomCategory: function(type, categoryId) {
        const index = customCategories[type]?.findIndex(c => c.id === categoryId);
        if (index >= 0) {
            customCategories[type].splice(index, 1);
            this.save();
            return true;
        }
        return false;
    },
    
    // Delete custom subcategory
    deleteSubcategory: function(type, categoryId, subcategoryName) {
        // From custom category
        const cat = customCategories[type]?.find(c => c.id === categoryId);
        if (cat) {
            const idx = cat.subs.indexOf(subcategoryName);
            if (idx >= 0) {
                cat.subs.splice(idx, 1);
                this.save();
                return true;
            }
        }
        
        // From extensions
        const ext = customCategories[type + '_extensions']?.[categoryId];
        if (ext) {
            const idx = ext.indexOf(subcategoryName);
            if (idx >= 0) {
                ext.splice(idx, 1);
                this.save();
                return true;
            }
        }
        
        return false;
    },
    
    // ═══════════════════════════════════════════════════════════
    // ANALYTICS - Category usage statistics
    // ═══════════════════════════════════════════════════════════
    
    getUsageStats: function(transactions) {
        const stats = {
            categoryCounts: {},
            subcategoryCounts: {},
            uncategorized: 0,
            autoCategCount: 0,
            manualCount: 0
        };
        
        for (const tx of (transactions || [])) {
            if (tx.category) {
                stats.categoryCounts[tx.category] = (stats.categoryCounts[tx.category] || 0) + 1;
                if (tx.subcategory) {
                    const key = `${tx.category}:${tx.subcategory}`;
                    stats.subcategoryCounts[key] = (stats.subcategoryCounts[key] || 0) + 1;
                }
            } else {
                stats.uncategorized++;
            }
        }
        
        return stats;
    },
    
    // Get suggested subcategories based on usage
    getSuggestedSubcategories: function(type, categoryId, limit = 10) {
        const allSubs = this.getSubcategories(type, categoryId);
        
        // Get usage from learned patterns
        const usage = {};
        for (const [pattern, data] of Object.entries(learnedPatterns)) {
            if (data.category === categoryId && data.subcategory) {
                usage[data.subcategory] = (usage[data.subcategory] || 0) + (data.useCount || 1);
            }
        }
        
        // Sort by usage
        return allSubs.sort((a, b) => (usage[b] || 0) - (usage[a] || 0)).slice(0, limit);
    },
    
    // Export learned data (for backup)
    exportData: function() {
        return {
            customCategories: customCategories,
            learnedPatterns: learnedPatterns,
            exportedAt: new Date().toISOString()
        };
    },
    
    // Import learned data
    importData: function(data) {
        if (data.customCategories) {
            customCategories = { ...customCategories, ...data.customCategories };
        }
        if (data.learnedPatterns) {
            learnedPatterns = { ...learnedPatterns, ...data.learnedPatterns };
        }
        this.save();
    },
    
    // Clear all learned data
    clearAllData: function() {
        customCategories = { expense: [], income: [] };
        learnedPatterns = {};
        this.save();
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => SmartCategoryEngine.init());

// ═══════════════════════════════════════════════════════════════
// 🧠 GENIUS ANALYTICS ENGINE - Advanced Financial Intelligence
// ═══════════════════════════════════════════════════════════════

const GeniusEngine = {
    // 🔮 SPENDING PREDICTIONS - ML-like prediction engine
    predictSpending: function() {
        const allTx = state.transactions || [];
        if (allTx.length < 5) return null;
        
        // Get last 6 months data
        const monthlyData = {};
        const categoryMonthly = {};
        
        for (let i = 0; i < 6; i++) {
            const d = new Date();
            d.setMonth(d.getMonth() - i);
            const key = `${d.getFullYear()}-${d.getMonth()}`;
            const monthTx = allTx.filter(t => {
                const td = new Date(t.date);
                return td.getMonth() === d.getMonth() && td.getFullYear() === d.getFullYear();
            });
            
            monthlyData[key] = {
                income: monthTx.filter(t => t.type === 'income').reduce((s, t) => s + (t.amount || 0), 0),
                expense: monthTx.filter(t => t.type === 'expense').reduce((s, t) => s + (t.amount || 0), 0)
            };
            
            // Category breakdown
            monthTx.filter(t => t.type === 'expense').forEach(t => {
                const cat = t.category || 'other';
                if (!categoryMonthly[cat]) categoryMonthly[cat] = [];
                categoryMonthly[cat].push({ month: key, amount: t.amount || 0 });
            });
        }
        
        // Calculate trends
        const values = Object.values(monthlyData);
        const avgExpense = values.reduce((s, v) => s + v.expense, 0) / values.length;
        const avgIncome = values.reduce((s, v) => s + v.income, 0) / values.length;
        
        // Weighted average (recent months matter more)
        const weights = [0.3, 0.25, 0.2, 0.12, 0.08, 0.05];
        let weightedExpense = 0;
        let weightedIncome = 0;
        values.forEach((v, i) => {
            weightedExpense += v.expense * (weights[i] || 0.05);
            weightedIncome += v.income * (weights[i] || 0.05);
        });
        
        // Trend detection (going up or down?)
        const recentAvg = (values[0]?.expense + values[1]?.expense) / 2;
        const olderAvg = (values[3]?.expense + values[4]?.expense) / 2;
        const trend = olderAvg > 0 ? ((recentAvg - olderAvg) / olderAvg * 100) : 0;
        
        // Category predictions
        const categoryPredictions = {};
        Object.entries(categoryMonthly).forEach(([cat, data]) => {
            const catAvg = data.reduce((s, d) => s + d.amount, 0) / Math.max(data.length, 1);
            const catRecent = data.filter((d, i) => i < 2).reduce((s, d) => s + d.amount, 0) / 2;
            categoryPredictions[cat] = {
                predicted: Math.round((catAvg + catRecent) / 2),
                trend: catAvg > 0 ? ((catRecent - catAvg) / catAvg * 100) : 0
            };
        });
        
        // Seasonality check (is this month typically higher?)
        const currentMonth = new Date().getMonth();
        const seasonalFactor = [1.1, 0.95, 1.0, 1.0, 1.0, 1.05, 1.1, 0.9, 1.15, 1.0, 1.1, 1.3][currentMonth]; // Dec is highest
        
        return {
            nextMonth: {
                expense: Math.round(weightedExpense * seasonalFactor),
                income: Math.round(weightedIncome),
                savings: Math.round(weightedIncome - weightedExpense * seasonalFactor)
            },
            trend: trend,
            trendDirection: trend > 5 ? 'up' : trend < -5 ? 'down' : 'stable',
            confidence: Math.min(85, 50 + allTx.length / 2),
            categoryPredictions,
            seasonalFactor,
            avgExpense: Math.round(avgExpense),
            avgIncome: Math.round(avgIncome)
        };
    },

    // ANOMALY DETECTION - Find unusual spending
    detectAnomalies: function() {
        const allTx = state.transactions || [];
        if (allTx.length < 10) return [];
        
        const anomalies = [];
        const now = new Date();
        const thisMonth = now.getMonth();
        const thisYear = now.getFullYear();
        
        // Get this month's transactions
        const monthTx = allTx.filter(t => {
            const d = new Date(t.date);
            return d.getMonth() === thisMonth && d.getFullYear() === thisYear && t.type === 'expense';
        });
        
        // Calculate category averages from history
        const categoryHistory = {};
        allTx.filter(t => t.type === 'expense').forEach(t => {
            const cat = t.category || 'other';
            if (!categoryHistory[cat]) categoryHistory[cat] = [];
            categoryHistory[cat].push(t.amount || 0);
        });
        
        const categoryStats = {};
        Object.entries(categoryHistory).forEach(([cat, amounts]) => {
            const avg = amounts.reduce((s, a) => s + a, 0) / amounts.length;
            const variance = amounts.reduce((s, a) => s + Math.pow(a - avg, 2), 0) / amounts.length;
            const stdDev = Math.sqrt(variance);
            categoryStats[cat] = { avg, stdDev, count: amounts.length };
        });
        
        // Check for anomalies
        // 1. Single large transactions (> 3x average for category)
        monthTx.forEach(t => {
            const cat = t.category || 'other';
            const stats = categoryStats[cat];
            if (stats && t.amount > stats.avg * 3 && t.amount > 100) {
                anomalies.push({
                    type: 'large_transaction',
                    severity: 'high',
                    icon: '🚨',
                    title: 'Tranzacție mare neobișnuită',
                    message: `${t.amount} ${state.currency} la ${t.subcategory || findCat('expense', cat)?.name || cat} - de ${(t.amount / stats.avg).toFixed(1)}x mai mult decât de obicei!`,
                    transaction: t,
                    suggestion: 'Verifică dacă această cheltuială era planificată'
                });
            }
        });
        
        // 2. Category overspending (> 150% of average)
        const monthCategoryTotals = {};
        monthTx.forEach(t => {
            const cat = t.category || 'other';
            monthCategoryTotals[cat] = (monthCategoryTotals[cat] || 0) + (t.amount || 0);
        });
        
        Object.entries(monthCategoryTotals).forEach(([cat, total]) => {
            const stats = categoryStats[cat];
            const monthlyAvg = stats ? (stats.avg * stats.count / 6) : 0; // Rough monthly average
            if (monthlyAvg > 0 && total > monthlyAvg * 1.5 && total > 200) {
                const catInfo = findCat('expense', cat);
                anomalies.push({
                    type: 'category_overspend',
                    severity: total > monthlyAvg * 2 ? 'high' : 'medium',
                    icon: '⚠️',
                    title: `Depășire ${catInfo?.name || cat}`,
                    message: `Ai cheltuit ${total} ${state.currency} luna asta - ${((total / monthlyAvg - 1) * 100).toFixed(0)}% mai mult decât media!`,
                    category: cat,
                    suggestion: `Încearcă să reduci cheltuielile pe ${catInfo?.name || cat} în următoarele zile`
                });
            }
        });
        
        // 3. Spending velocity (spending too fast this month)
        const dayOfMonth = now.getDate();
        const daysInMonth = new Date(thisYear, thisMonth + 1, 0).getDate();
        const expectedProgress = dayOfMonth / daysInMonth;
        const monthExpense = monthTx.reduce((s, t) => s + (t.amount || 0), 0);
        const predictions = this.predictSpending();
        
        if (predictions && monthExpense > predictions.avgExpense * expectedProgress * 1.3) {
            anomalies.push({
                type: 'velocity',
                severity: 'medium',
                icon: '⏰',
                title: 'Cheltuiești prea repede!',
                message: `La ziua ${dayOfMonth} ai cheltuit deja ${monthExpense} ${state.currency}. La acest ritm vei ajunge la ${Math.round(monthExpense / expectedProgress)} ${state.currency}!`,
                suggestion: 'Încearcă să reduci ritmul cheltuielilor în următoarele zile'
            });
        }
        
        // 4. Weekend overspending
        const weekendTx = monthTx.filter(t => {
            const d = new Date(t.date).getDay();
            return d === 0 || d === 6;
        });
        const weekdayTx = monthTx.filter(t => {
            const d = new Date(t.date).getDay();
            return d > 0 && d < 6;
        });
        
        const weekendAvg = weekendTx.length > 0 ? weekendTx.reduce((s, t) => s + t.amount, 0) / weekendTx.length : 0;
        const weekdayAvg = weekdayTx.length > 0 ? weekdayTx.reduce((s, t) => s + t.amount, 0) / weekdayTx.length : 0;
        
        if (weekendAvg > weekdayAvg * 2 && weekendAvg > 50) {
            anomalies.push({
                type: 'weekend',
                severity: 'low',
                icon: '📅',
                title: 'Cheltuiești mult în weekend',
                message: `Media în weekend: ${Math.round(weekendAvg)} ${state.currency}/tranzacție vs ${Math.round(weekdayAvg)} ${state.currency} în timpul săptămânii`,
                suggestion: 'Planifică activități gratuite sau ieftine pentru weekend'
            });
        }
        
        return anomalies.sort((a, b) => {
            const severity = { high: 0, medium: 1, low: 2 };
            return severity[a.severity] - severity[b.severity];
        });
    },

    // WHAT-IF SIMULATOR
    simulateScenario: function(changes) {
        const predictions = this.predictSpending();
        if (!predictions) return null;
        
        let newExpense = predictions.nextMonth.expense;
        let newIncome = predictions.nextMonth.income;
        const impacts = [];
        
        // Process changes
        if (changes.cutSubscription) {
            const subTotal = (state.subscriptions || []).reduce((s, sub) => s + (sub.monthlyAvg || 0), 0);
            newExpense -= subTotal * (changes.cutSubscription / 100);
            impacts.push({
                icon: '📱',
                text: `Reducere abonamente ${changes.cutSubscription}%`,
                monthly: -Math.round(subTotal * changes.cutSubscription / 100),
                yearly: -Math.round(subTotal * changes.cutSubscription / 100 * 12)
            });
        }
        
        if (changes.reduceFoodDelivery) {
            const foodEstimate = predictions.categoryPredictions?.food?.predicted || predictions.avgExpense * 0.25;
            const deliveryEstimate = foodEstimate * 0.3; // Assume 30% is delivery
            newExpense -= deliveryEstimate * (changes.reduceFoodDelivery / 100);
            impacts.push({
                icon: '🍔',
                text: `Reducere livrări mâncare ${changes.reduceFoodDelivery}%`,
                monthly: -Math.round(deliveryEstimate * changes.reduceFoodDelivery / 100),
                yearly: -Math.round(deliveryEstimate * changes.reduceFoodDelivery / 100 * 12)
            });
        }
        
        if (changes.reduceEntertainment) {
            const entEstimate = predictions.categoryPredictions?.entertainment?.predicted || predictions.avgExpense * 0.1;
            newExpense -= entEstimate * (changes.reduceEntertainment / 100);
            impacts.push({
                icon: '🎬',
                text: `Reducere divertisment ${changes.reduceEntertainment}%`,
                monthly: -Math.round(entEstimate * changes.reduceEntertainment / 100),
                yearly: -Math.round(entEstimate * changes.reduceEntertainment / 100 * 12)
            });
        }
        
        if (changes.additionalIncome) {
            newIncome += changes.additionalIncome;
            impacts.push({
                icon: '💼',
                text: `Venit suplimentar`,
                monthly: changes.additionalIncome,
                yearly: changes.additionalIncome * 12
            });
        }
        
        if (changes.reduceTransport) {
            const transportEstimate = predictions.categoryPredictions?.transport?.predicted || predictions.avgExpense * 0.15;
            newExpense -= transportEstimate * (changes.reduceTransport / 100);
            impacts.push({
                icon: '🚗',
                text: `Reducere transport ${changes.reduceTransport}%`,
                monthly: -Math.round(transportEstimate * changes.reduceTransport / 100),
                yearly: -Math.round(transportEstimate * changes.reduceTransport / 100 * 12)
            });
        }
        
        const newSavings = newIncome - newExpense;
        const currentSavings = predictions.nextMonth.income - predictions.nextMonth.expense;
        
        return {
            current: {
                expense: predictions.nextMonth.expense,
                income: predictions.nextMonth.income,
                savings: currentSavings,
                savingsRate: predictions.nextMonth.income > 0 ? (currentSavings / predictions.nextMonth.income * 100) : 0
            },
            simulated: {
                expense: Math.round(newExpense),
                income: Math.round(newIncome),
                savings: Math.round(newSavings),
                savingsRate: newIncome > 0 ? (newSavings / newIncome * 100) : 0
            },
            impacts,
            totalMonthlyImpact: Math.round(newSavings - currentSavings),
            totalYearlyImpact: Math.round((newSavings - currentSavings) * 12),
            fireImpact: this.calculateFireImpact(newSavings - currentSavings)
        };
    },
    
    calculateFireImpact: function(additionalMonthlySavings) {
        const currentNetWorth = state.netWorth || 0;
        const monthlyExpense = this.predictSpending()?.avgExpense || 5000;
        const fireNumber = monthlyExpense * 12 * 25;
        
        // Current years to FIRE
        const currentMonthlySavings = (state.savingsRate || 10) / 100 * (this.predictSpending()?.avgIncome || 7000);
        const currentYearsToFire = this.yearsToFire(currentNetWorth, currentMonthlySavings, fireNumber);
        
        // New years to FIRE
        const newMonthlySavings = currentMonthlySavings + additionalMonthlySavings;
        const newYearsToFire = this.yearsToFire(currentNetWorth, newMonthlySavings, fireNumber);
        
        return {
            currentYears: currentYearsToFire,
            newYears: newYearsToFire,
            yearsSaved: currentYearsToFire - newYearsToFire
        };
    },
    
    yearsToFire: function(currentAmount, monthlySavings, target) {
        if (monthlySavings <= 0) return 99;
        const annualReturn = 0.07;
        let years = 0;
        let amount = currentAmount;
        while (amount < target && years < 100) {
            amount = amount * (1 + annualReturn) + monthlySavings * 12;
            years++;
        }
        return years;
    },

    // TIME ANALYSIS - When do you spend?
    analyzeTimePatterns: function() {
        const allTx = (state.transactions || []).filter(t => t.type === 'expense');
        if (allTx.length < 10) return null;
        
        // Day of week analysis
        const dayData = { 0: [], 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
        const dayNames = ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'];
        
        // Week of month
        const weekData = { 1: [], 2: [], 3: [], 4: [], 5: [] };
        
        // Month analysis
        const monthData = {};
        
        allTx.forEach(t => {
            const d = new Date(t.date);
            dayData[d.getDay()].push(t.amount || 0);
            
            const weekOfMonth = Math.ceil(d.getDate() / 7);
            weekData[weekOfMonth].push(t.amount || 0);
            
            const monthKey = d.getMonth();
            if (!monthData[monthKey]) monthData[monthKey] = [];
            monthData[monthKey].push(t.amount || 0);
        });
        
        // Calculate stats
        const dayStats = Object.entries(dayData).map(([day, amounts]) => ({
            day: parseInt(day),
            name: dayNames[day],
            total: amounts.reduce((s, a) => s + a, 0),
            average: amounts.length > 0 ? amounts.reduce((s, a) => s + a, 0) / amounts.length : 0,
            count: amounts.length
        })).sort((a, b) => b.total - a.total);
        
        const weekStats = Object.entries(weekData).map(([week, amounts]) => ({
            week: parseInt(week),
            name: `Săptămâna ${week}`,
            total: amounts.reduce((s, a) => s + a, 0),
            average: amounts.length > 0 ? amounts.reduce((s, a) => s + a, 0) / amounts.length : 0,
            count: amounts.length
        }));
        
        // Find patterns
        const highestDay = dayStats[0];
        const lowestDay = dayStats[dayStats.length - 1];
        const weekendTotal = dayStats.filter(d => d.day === 0 || d.day === 6).reduce((s, d) => s + d.total, 0);
        const weekdayTotal = dayStats.filter(d => d.day > 0 && d.day < 6).reduce((s, d) => s + d.total, 0);
        
        return {
            byDay: dayStats,
            byWeek: weekStats,
            insights: {
                highestDay: { name: highestDay.name, amount: highestDay.total },
                lowestDay: { name: lowestDay.name, amount: lowestDay.total },
                weekendVsWeekday: {
                    weekend: weekendTotal,
                    weekday: weekdayTotal,
                    ratio: weekdayTotal > 0 ? (weekendTotal / weekdayTotal * 100).toFixed(0) : 0
                },
                mostActiveWeek: weekStats.sort((a, b) => b.total - a.total)[0]
            }
        };
    },

    // 📝 AUTO-BUDGETING - AI creates optimal budgets
    generateSmartBudgets: function() {
        const predictions = this.predictSpending();
        if (!predictions) return [];
        
        const targetSavingsRate = 0.20; // 20% savings target
        const predictedIncome = predictions.avgIncome;
        const maxSpend = predictedIncome * (1 - targetSavingsRate);
        
        const budgets = [];
        const categoryPreds = predictions.categoryPredictions || {};
        
        // Sort categories by predicted spending
        const sortedCats = Object.entries(categoryPreds)
            .sort((a, b) => b[1].predicted - a[1].predicted);
        
        let totalAllocated = 0;
        
        sortedCats.forEach(([catId, data]) => {
            const catInfo = findCat('expense', catId);
            if (!catInfo) return;
            
            // Calculate recommended budget
            let recommended = data.predicted;
            
            // If trending up, suggest slightly lower to curb spending
            if (data.trend > 10) {
                recommended = Math.round(data.predicted * 0.9);
            }
            
            // Make sure we don't exceed total
            if (totalAllocated + recommended > maxSpend) {
                recommended = Math.max(0, maxSpend - totalAllocated);
            }
            
            if (recommended > 50) { // Only suggest budgets > 50
                budgets.push({
                    category: catId,
                    categoryName: catInfo.name,
                    icon: catInfo.icon,
                    recommended: Math.round(recommended),
                    currentAvg: data.predicted,
                    trend: data.trend,
                    trendDirection: data.trend > 5 ? 'up' : data.trend < -5 ? 'down' : 'stable',
                    priority: data.trend > 10 ? 'high' : 'normal'
                });
                totalAllocated += recommended;
            }
        });
        
        return {
            budgets,
            summary: {
                totalBudgeted: totalAllocated,
                predictedIncome,
                targetSavings: Math.round(predictedIncome * targetSavingsRate),
                savingsRate: targetSavingsRate * 100
            }
        };
    },

    // SMART GOALS - AI suggests achievable goals
    suggestSmartGoals: function() {
        const predictions = this.predictSpending();
        if (!predictions) return [];
        
        const monthlySavings = predictions.nextMonth.savings;
        const monthlyIncome = predictions.avgIncome;
        const monthlyExpense = predictions.avgExpense;
        const goals = [];
        
        // 🛡️ Emergency Fund - PRIORITATE MAXIMĂ
        const emergencyTarget = predictions.avgExpense * 6;
        const currentEmergency = (state.goals || []).find(g => g.name?.toLowerCase().includes('urgență'))?.current || 0;
        if (currentEmergency < emergencyTarget) {
            goals.push({
                icon: '🛡️',
                name: 'Fond de Urgență (6 luni)',
                target: emergencyTarget,
                current: currentEmergency,
                monthly: Math.round(emergencyTarget / 12),
                months: Math.ceil((emergencyTarget - currentEmergency) / Math.max(monthlySavings * 0.5, 100)),
                priority: 'high',
                reason: '6 luni de cheltuieli - siguranța ta financiară #1',
                category: 'safety'
            });
        }
        
        // 💳 Zero Datorii
        const totalDebt = (state.debts || []).reduce((s, d) => s + (d.remaining || d.amount || 0), 0);
        if (totalDebt > 0) {
            goals.push({
                icon: '💳',
                name: 'Zero Datorii',
                target: totalDebt,
                current: 0,
                monthly: Math.round(totalDebt / 12),
                months: Math.ceil(totalDebt / Math.max(monthlySavings * 0.4, 100)),
                priority: 'high',
                reason: 'Elimină toate datoriile pentru libertate financiară',
                category: 'debt'
            });
        }
        
        // 🚗 Avans Mașină
        if (monthlyIncome > 4000) {
            goals.push({
                icon: '🚗',
                name: 'Avans Mașină',
                target: 15000,
                current: 0,
                monthly: Math.round(15000 / 18),
                months: Math.ceil(15000 / Math.max(monthlySavings * 0.35, 100)),
                priority: 'medium',
                reason: 'Avans 20-30% pentru credit auto mai bun',
                category: 'purchase'
            });
        }
        
        // 🏠 Avans Apartament
        if (monthlyIncome > 5000 && monthlySavings > 1000) {
            goals.push({
                icon: '🏠',
                name: 'Avans Apartament',
                target: 50000,
                current: 0,
                monthly: Math.round(50000 / 36),
                months: Math.ceil(50000 / Math.max(monthlySavings * 0.6, 500)),
                priority: 'long-term',
                reason: 'Avans 15-20% pentru apartament',
                category: 'purchase'
            });
        }
        
        // ✈️ Vacanță de Vis
        const vacationTarget = Math.round(monthlyIncome * 1.5);
        goals.push({
            icon: '✈️',
            name: 'Vacanță de Vis',
            target: vacationTarget,
            current: 0,
            monthly: Math.round(vacationTarget / 6),
            months: Math.ceil(vacationTarget / Math.max(monthlySavings * 0.25, 100)),
            priority: 'medium',
            reason: 'O vacanță memorabilă de 1-2 săptămâni',
            category: 'lifestyle'
        });
        
        // Start Investiții
        if (monthlySavings > 300) {
            goals.push({
                icon: '📈',
                name: 'Start Investiții',
                target: 5000,
                current: 0,
                monthly: 500,
                months: Math.ceil(5000 / Math.max(monthlySavings * 0.3, 100)),
                priority: 'medium',
                reason: 'Capital inițial pentru ETF-uri (S&P 500, Global)',
                category: 'investment'
            });
        }
        
        // 🎓 Educație & Cursuri
        goals.push({
            icon: '🎓',
            name: 'Fond Educație',
            target: 3000,
            current: 0,
            monthly: 250,
            months: Math.ceil(3000 / Math.max(monthlySavings * 0.15, 50)),
            priority: 'medium',
            reason: 'Cursuri, certificări, skill-uri noi',
            category: 'education'
        });
        
        // Tech Upgrade
        goals.push({
            icon: '📱',
            name: 'Telefon/Laptop Nou',
            target: 5000,
            current: 0,
            monthly: Math.round(5000 / 10),
            months: Math.ceil(5000 / Math.max(monthlySavings * 0.2, 100)),
            priority: 'low',
            reason: 'Upgrade tehnologie fără rate',
            category: 'purchase'
        });
        
        // 🎁 Fond Cadouri
        goals.push({
            icon: '🎁',
            name: 'Fond Cadouri & Sărbători',
            target: 2000,
            current: 0,
            monthly: Math.round(2000 / 12),
            months: 12,
            priority: 'low',
            reason: 'Crăciun, zile de naștere, nunți fără stres',
            category: 'lifestyle'
        });
        
        // 🏥 Fond Medical
        goals.push({
            icon: '🏥',
            name: 'Fond Medical',
            target: 3000,
            current: 0,
            monthly: 250,
            months: Math.ceil(3000 / Math.max(monthlySavings * 0.1, 50)),
            priority: 'medium',
            reason: 'Stomatolog, analize, consultații neprevăzute',
            category: 'safety'
        });
        
        // 👶 Fond Copii (dacă detectăm cheltuieli Family)
        const hasKids = (state.transactions || []).some(t => t.category === 'family');
        if (hasKids) {
            goals.push({
                icon: '👶',
                name: 'Fond Copii/Familie',
                target: 10000,
                current: 0,
                monthly: Math.round(10000 / 24),
                months: 24,
                priority: 'high',
                reason: 'Educație, activități, viitorul copiilor',
                category: 'family'
            });
        }
        
        // 🎭 Hobby & Pasiuni
        goals.push({
            icon: '🎭',
            name: 'Fond Hobby',
            target: 1500,
            current: 0,
            monthly: 125,
            months: 12,
            priority: 'low',
            reason: 'Echipament, cursuri pentru pasiunile tale',
            category: 'lifestyle'
        });
        
        // 💎 Independență Financiară (FIRE)
        if (monthlySavings > 2000) {
            const fireNumber = monthlyExpense * 12 * 25;
            goals.push({
                icon: '💎',
                name: 'Independență Financiară',
                target: fireNumber,
                current: state.netWorth || 0,
                monthly: monthlySavings,
                months: Math.ceil(fireNumber / (monthlySavings * 12)),
                priority: 'long-term',
                reason: `${Math.ceil(fireNumber / (monthlySavings * 12))} ani până la libertate financiară`,
                category: 'fire'
            });
        }
        
        // Sort by priority and achievability
        const priorityOrder = { 'high': 0, 'medium': 1, 'low': 2, 'long-term': 3 };
        return goals.sort((a, b) => {
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            }
            return a.months - b.months;
        });
    },

    // ⚡ DAILY SPENDING COACH - Personalized tips
    getDailyCoachTip: function() {
        const anomalies = this.detectAnomalies();
        const predictions = this.predictSpending();
        const timePatterns = this.analyzeTimePatterns();
        const tips = [];
        
        const today = new Date();
        const dayOfWeek = today.getDay();
        const dayOfMonth = today.getDate();
        const dayNames = ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'];
        
        // High-severity anomaly tip
        const highAnomaly = anomalies.find(a => a.severity === 'high');
        if (highAnomaly) {
            tips.push({
                icon: highAnomaly.icon,
                title: 'Alertă Importantă',
                message: highAnomaly.message,
                action: highAnomaly.suggestion,
                priority: 1
            });
        }
        
        // Weekend tip (Friday)
        if (dayOfWeek === 5) {
            const weekendSpending = timePatterns?.insights?.weekendVsWeekday;
            if (weekendSpending && parseInt(weekendSpending.ratio) > 100) {
                tips.push({
                    icon: '🎉',
                    title: 'Weekend aproape!',
                    message: `De obicei cheltuiești ${weekendSpending.ratio}% din media săptămânii în weekend.`,
                    action: 'Planifică activități gratuite: plimbări, gătit acasă, seri de film',
                    priority: 2
                });
            }
        }
        
        // End of month tip
        if (dayOfMonth > 25) {
            const monthTx = getMonthTx().filter(t => t.type === 'expense');
            const spent = monthTx.reduce((s, t) => s + (t.amount || 0), 0);
            const predicted = predictions?.nextMonth?.expense || spent;
            const remaining = predicted - spent;
            
            tips.push({
                icon: '📅',
                title: 'Final de lună',
                message: `Mai ai ~${Math.round(remaining)} ${state.currency} buget până la finalul lunii.`,
                action: remaining > 0 ? 'Ești pe drumul cel bun!' : 'Încearcă să reduci cheltuielile zilele astea',
                priority: 3
            });
        }
        
        // Payday tip (1st or 15th)
        if (dayOfMonth === 1 || dayOfMonth === 15) {
            tips.push({
                icon: '💰',
                title: 'Zi de salariu?',
                message: 'Acum e momentul perfect să pui deoparte economiile!',
                action: 'Transferă 20% din salariu într-un cont de economii înainte să cheltuiești',
                priority: 2
            });
        }
        
        // Motivational based on streak
        if (state.streak >= 7) {
            tips.push({
                icon: '🔥',
                title: `${state.streak} zile streak!`,
                message: 'Continuă să-ți înregistrezi cheltuielile!',
                action: 'Consistența e cheia succesului financiar',
                priority: 4
            });
        }
        
        // Random financial wisdom
        const wisdoms = [
            { icon: '🧠', title: 'Sfatul zilei', message: 'Regula 24 de ore: Înainte de o achiziție mare, așteaptă 24h.', action: 'Previne cumpărăturile impulsive' },
            { icon: '☕', title: 'Sfatul zilei', message: 'O cafea de 15 RON/zi = 5,475 RON/an!', action: 'Micile cheltuieli se adună' },
            { icon: '🎯', title: 'Sfatul zilei', message: 'Plătește-te pe tine mai întâi - economisește înainte să cheltuiești.', action: 'Automatizează economiile' },
            { icon: '📊', title: 'Sfatul zilei', message: 'Verifică-ți abonamentele lunar - plătești pentru ce nu folosești?', action: 'Anulează serviciile neutilizate' },
            { icon: '🏦', title: 'Sfatul zilei', message: 'Fondul de urgență = liniște sufletească.', action: 'Țintește 3-6 luni de cheltuieli' }
        ];
        
        tips.push({ ...wisdoms[dayOfMonth % wisdoms.length], priority: 5 });
        
        // Sort by priority and return top 3
        return tips.sort((a, b) => a.priority - b.priority).slice(0, 3);
    },

    // 🏪 MERCHANT ANALYTICS - Where do you spend?
    analyzeMerchants: function() {
        const allTx = (state.transactions || []).filter(t => t.type === 'expense');
        if (allTx.length < 5) return null;
        
        // Group by subcategory (merchant)
        const merchants = {};
        
        allTx.forEach(t => {
            const merchant = t.subcategory || t.note || findCat('expense', t.category)?.name || 'Altele';
            if (!merchants[merchant]) {
                merchants[merchant] = {
                    name: merchant,
                    category: t.category,
                    transactions: [],
                    total: 0,
                    count: 0
                };
            }
            merchants[merchant].transactions.push(t);
            merchants[merchant].total += t.amount || 0;
            merchants[merchant].count++;
        });
        
        // Convert to array and sort
        const merchantList = Object.values(merchants)
            .map(m => ({
                ...m,
                average: m.total / m.count,
                categoryInfo: findCat('expense', m.category),
                frequency: m.count / 6 // per month average
            }))
            .sort((a, b) => b.total - a.total);
        
        // Top 10
        const top10 = merchantList.slice(0, 10);
        
        // Find potential savings
        const potentialSavings = merchantList
            .filter(m => m.count >= 3 && (
                m.name.toLowerCase().includes('glovo') ||
                m.name.toLowerCase().includes('tazz') ||
                m.name.toLowerCase().includes('uber') ||
                m.name.toLowerCase().includes('bolt') ||
                m.name.toLowerCase().includes('starbucks') ||
                m.name.toLowerCase().includes('netflix') ||
                m.name.toLowerCase().includes('spotify')
            ))
            .map(m => ({
                ...m,
                savingsPotential: Math.round(m.total * 0.5),
                suggestion: `Reducerea cu 50% ar economisi ${Math.round(m.total * 0.5)} ${state.currency}`
            }));
        
        return {
            top10,
            totalMerchants: merchantList.length,
            potentialSavings,
            insights: {
                mostFrequent: merchantList.sort((a, b) => b.count - a.count)[0],
                highestAverage: merchantList.filter(m => m.count >= 2).sort((a, b) => b.average - a.average)[0],
                totalFromTop10: top10.reduce((s, m) => s + m.total, 0)
            }
        };
    },

    // 💪 FINANCIAL HEALTH SCORE - Comprehensive health assessment
    calculateHealthScore: function() {
        const predictions = this.predictSpending();
        const anomalies = this.detectAnomalies();
        const monthTx = getMonthTx();
        const monthIncome = monthTx.filter(t => t.type === 'income').reduce((s, t) => s + (t.amount || 0), 0);
        const monthExpense = monthTx.filter(t => t.type === 'expense').reduce((s, t) => s + (t.amount || 0), 0);
        
        let score = 0;
        const factors = [];
        
        // 1. Savings Rate (max 25 points)
        const savingsRate = monthIncome > 0 ? ((monthIncome - monthExpense) / monthIncome * 100) : 0;
        if (savingsRate >= 30) { score += 25; factors.push({ name: 'Economii excelente', score: 25, icon: '💰', status: 'excellent' }); }
        else if (savingsRate >= 20) { score += 20; factors.push({ name: 'Economii foarte bune', score: 20, icon: '💰', status: 'good' }); }
        else if (savingsRate >= 10) { score += 12; factors.push({ name: 'Economii moderate', score: 12, icon: '💰', status: 'ok' }); }
        else if (savingsRate > 0) { score += 5; factors.push({ name: 'Economii mici', score: 5, icon: '💰', status: 'warning' }); }
        else { factors.push({ name: 'Fără economii', score: 0, icon: '💰', status: 'bad' }); }
        
        // 2. Budget Adherence (max 20 points)
        const budgets = state.budgets || [];
        if (budgets.length > 0) {
            const budgetAdherence = budgets.filter(b => {
                const spent = monthTx.filter(t => t.type === 'expense' && t.category === b.category)
                    .reduce((s, t) => s + (t.amount || 0), 0);
                return spent <= b.limit;
            }).length / budgets.length;
            
            const budgetScore = Math.round(budgetAdherence * 20);
            score += budgetScore;
            factors.push({ 
                name: `Bugete respectate (${Math.round(budgetAdherence * 100)}%)`, 
                score: budgetScore, 
                icon: '📊',
                status: budgetAdherence >= 0.8 ? 'good' : budgetAdherence >= 0.5 ? 'ok' : 'warning'
            });
        } else {
            factors.push({ name: 'Setează bugete', score: 0, icon: '📊', status: 'warning' });
        }
        
        // 3. Consistency/Streak (max 15 points)
        const streak = state.streak || 0;
        if (streak >= 30) { score += 15; factors.push({ name: 'Streak legendar', score: 15, icon: '🔥', status: 'excellent' }); }
        else if (streak >= 14) { score += 12; factors.push({ name: 'Streak puternic', score: 12, icon: '🔥', status: 'good' }); }
        else if (streak >= 7) { score += 8; factors.push({ name: 'Streak bun', score: 8, icon: '🔥', status: 'ok' }); }
        else if (streak >= 3) { score += 4; factors.push({ name: 'Începi să fii consistent', score: 4, icon: '🔥', status: 'warning' }); }
        else { factors.push({ name: 'Construiește un streak', score: 0, icon: '🔥', status: 'bad' }); }
        
        // 4. No Anomalies (max 15 points)
        const highAnomalies = (anomalies || []).filter(a => a.severity === 'high').length;
        if (highAnomalies === 0) { score += 15; factors.push({ name: 'Fără anomalii', score: 15, icon: '✅', status: 'excellent' }); }
        else if (highAnomalies <= 1) { score += 8; factors.push({ name: '1 anomalie', score: 8, icon: '⚠️', status: 'ok' }); }
        else { factors.push({ name: `${highAnomalies} anomalii`, score: 0, icon: '🚨', status: 'bad' }); }
        
        // 5. Emergency Fund Progress (max 15 points)
        const emergencyTarget = (predictions?.avgExpense || monthExpense) * 6;
        const emergencyGoal = (state.goals || []).find(g => 
            g.name?.toLowerCase().includes('urgență') || g.name?.toLowerCase().includes('emergency')
        );
        const emergencyProgress = emergencyGoal ? (emergencyGoal.current / emergencyGoal.target) : 0;
        
        if (emergencyProgress >= 1) { score += 15; factors.push({ name: 'Fond urgență complet', score: 15, icon: '🛡️', status: 'excellent' }); }
        else if (emergencyProgress >= 0.5) { score += 10; factors.push({ name: 'Fond urgență 50%+', score: 10, icon: '🛡️', status: 'good' }); }
        else if (emergencyProgress > 0) { score += 5; factors.push({ name: 'Fond urgență început', score: 5, icon: '🛡️', status: 'ok' }); }
        else { factors.push({ name: 'Creează fond urgență', score: 0, icon: '🛡️', status: 'warning' }); }
        
        // 6. Diversification & Goals (max 10 points)
        const goalsProgress = (state.goals || []).filter(g => g.current >= g.target * 0.5).length;
        if (goalsProgress >= 3) { score += 10; factors.push({ name: 'Multiple obiective', score: 10, icon: '🎯', status: 'excellent' }); }
        else if (goalsProgress >= 1) { score += 5; factors.push({ name: 'Obiective active', score: 5, icon: '🎯', status: 'good' }); }
        else { factors.push({ name: 'Setează obiective', score: 0, icon: '🎯', status: 'warning' }); }
        
        // Calculate grade
        let grade, gradeColor, message;
        if (score >= 90) { grade = 'A+'; gradeColor = '#00ff88'; message = 'Excelent! Ești un maestru al finanțelor!'; }
        else if (score >= 80) { grade = 'A'; gradeColor = '#10b981'; message = 'Foarte bine! Finanțele tale sunt sănătoase.'; }
        else if (score >= 70) { grade = 'B'; gradeColor = '#06b6d4'; message = 'Bine! Câteva îmbunătățiri și ești perfect.'; }
        else if (score >= 60) { grade = 'C'; gradeColor = '#f59e0b'; message = 'OK. Ai potențial de îmbunătățire.'; }
        else if (score >= 50) { grade = 'D'; gradeColor = '#ef4444'; message = 'Necesită atenție. Focus pe economii!'; }
        else { grade = 'F'; gradeColor = '#dc2626'; message = 'Critic! Acționează acum pentru a îmbunătăți.'; }
        
        return {
            score,
            maxScore: 100,
            grade,
            gradeColor,
            message,
            factors,
            savingsRate,
            streak
        };
    },

    // SPENDING VELOCITY - How fast are you spending?
    getSpendingVelocity: function() {
        const monthTx = getMonthTx().filter(t => t.type === 'expense');
        const now = new Date();
        const dayOfMonth = now.getDate();
        const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        
        const spent = monthTx.reduce((s, t) => s + (t.amount || 0), 0);
        const predictions = this.predictSpending();
        const expectedMonthly = predictions?.avgExpense || spent;
        
        const expectedByNow = expectedMonthly * (dayOfMonth / daysInMonth);
        const velocity = expectedByNow > 0 ? (spent / expectedByNow * 100) : 100;
        
        const projectedTotal = (spent / dayOfMonth) * daysInMonth;
        const daysRemaining = daysInMonth - dayOfMonth;
        const dailyBudgetRemaining = Math.max(0, (expectedMonthly - spent) / daysRemaining);
        
        return {
            spent,
            expectedByNow: Math.round(expectedByNow),
            velocity: Math.round(velocity),
            status: velocity <= 90 ? 'under' : velocity <= 110 ? 'on-track' : 'over',
            projectedTotal: Math.round(projectedTotal),
            daysRemaining,
            dailyBudget: Math.round(dailyBudgetRemaining),
            message: velocity <= 90 
                ? `Ești ${Math.round(100 - velocity)}% sub buget! 🎉` 
                : velocity <= 110 
                    ? 'Ești pe track! 👍' 
                    : `Ești ${Math.round(velocity - 100)}% peste buget! ⚠️`
        };
    },

    // PERSONALIZED RECOMMENDATIONS - AI-powered suggestions
    getPersonalizedRecommendations: function() {
        const health = this.calculateHealthScore();
        const anomalies = this.detectAnomalies();
        const predictions = this.predictSpending();
        const velocity = this.getSpendingVelocity();
        const merchants = this.analyzeMerchants();
        
        const recommendations = [];
        
        // Based on health score factors
        health.factors.filter(f => f.status === 'bad' || f.status === 'warning').forEach(f => {
            if (f.name.includes('economii') || f.name.includes('Economii')) {
                recommendations.push({
                    priority: 1,
                    icon: '💰',
                    title: 'Crește rata de economisire',
                    description: 'Țintește minim 20% din venituri. Începe cu 10% și crește treptat.',
                    action: 'Setează transfer automat în ziua de salariu',
                    impact: 'high'
                });
            }
            if (f.name.includes('Bugete') || f.name.includes('bugete')) {
                recommendations.push({
                    priority: 2,
                    icon: '📊',
                    title: 'Setează bugete pentru categorii',
                    description: 'Bugetele te ajută să controlezi cheltuielile.',
                    action: 'Creează bugete pentru top 5 categorii de cheltuieli',
                    impact: 'medium'
                });
            }
            if (f.name.includes('urgență')) {
                recommendations.push({
                    priority: 1,
                    icon: '🛡️',
                    title: 'Construiește fondul de urgență',
                    description: `Ținta: ${(predictions?.avgExpense || 5000) * 6} ${state.currency} (6 luni cheltuieli)`,
                    action: 'Creează un obiectiv pentru fondul de urgență',
                    impact: 'high'
                });
            }
        });
        
        // Based on velocity
        if (velocity.status === 'over') {
            recommendations.push({
                priority: 1,
                icon: '⏰',
                title: 'Reduce ritmul cheltuielilor',
                description: `Mai ai ${velocity.daysRemaining} zile și ${velocity.dailyBudget} ${state.currency}/zi buget.`,
                action: 'Amână achizițiile non-esențiale',
                impact: 'high'
            });
        }
        
        // Based on merchant analysis
        if (merchants?.potentialSavings?.length > 0) {
            const topSaving = merchants.potentialSavings[0];
            recommendations.push({
                priority: 2,
                icon: '🏪',
                title: `Reduce cheltuielile la ${topSaving.name}`,
                description: `Poți economisi ~${topSaving.savingsPotential} ${state.currency}`,
                action: 'Caută alternative mai ieftine sau reduce frecvența',
                impact: 'medium'
            });
        }
        
        // Based on anomalies
        if (anomalies?.length > 0) {
            const highAnomaly = anomalies.find(a => a.severity === 'high');
            if (highAnomaly) {
                recommendations.push({
                    priority: 1,
                    icon: '🚨',
                    title: highAnomaly.title,
                    description: highAnomaly.message,
                    action: highAnomaly.suggestion,
                    impact: 'high'
                });
            }
        }
        
        // Generic improvement recommendations
        if (health.score < 70) {
            recommendations.push({
                priority: 3,
                icon: '📱',
                title: 'Înregistrează toate cheltuielile',
                description: 'Consistența este cheia. Înregistrează fiecare tranzacție.',
                action: 'Setează reminder zilnic pentru tracking',
                impact: 'medium'
            });
        }
        
        // Sort by priority and return top 5
        return recommendations.sort((a, b) => a.priority - b.priority).slice(0, 5);
    },

    // INVESTMENT READINESS - Are you ready to invest?
    checkInvestmentReadiness: function() {
        const health = this.calculateHealthScore();
        const predictions = this.predictSpending();
        const monthTx = getMonthTx();
        const monthIncome = monthTx.filter(t => t.type === 'income').reduce((s, t) => s + (t.amount || 0), 0);
        const monthExpense = monthTx.filter(t => t.type === 'expense').reduce((s, t) => s + (t.amount || 0), 0);
        const monthlySavings = monthIncome - monthExpense;
        
        const checks = [];
        let readinessScore = 0;
        
        // Check 1: Emergency fund
        const emergencyTarget = (predictions?.avgExpense || monthExpense) * 3;
        const emergencyGoal = (state.goals || []).find(g => 
            g.name?.toLowerCase().includes('urgență') || g.name?.toLowerCase().includes('emergency')
        );
        const hasEmergencyFund = emergencyGoal && emergencyGoal.current >= emergencyTarget;
        checks.push({
            name: 'Fond de urgență (3 luni)',
            passed: hasEmergencyFund,
            icon: hasEmergencyFund ? '✅' : '❌',
            note: hasEmergencyFund ? 'Complet!' : `Ai nevoie de ${emergencyTarget} ${state.currency}`
        });
        if (hasEmergencyFund) readinessScore += 30;
        
        // Check 2: No high-interest debt
        const highInterestDebt = (state.debts || []).filter(d => d.type === 'owed').length === 0;
        checks.push({
            name: 'Fără datorii cu dobândă mare',
            passed: highInterestDebt,
            icon: highInterestDebt ? '✅' : '⚠️',
            note: highInterestDebt ? 'Perfect!' : 'Plătește mai întâi datoriile'
        });
        if (highInterestDebt) readinessScore += 25;
        
        // Check 3: Positive cash flow
        const positiveCashFlow = monthlySavings > 0;
        checks.push({
            name: 'Cash flow pozitiv',
            passed: positiveCashFlow,
            icon: positiveCashFlow ? '✅' : '❌',
            note: positiveCashFlow ? `+${monthlySavings} ${state.currency}/lună` : 'Crește veniturile sau reduce cheltuielile'
        });
        if (positiveCashFlow) readinessScore += 20;
        
        // Check 4: Consistent tracking
        const consistentTracking = (state.streak || 0) >= 7;
        checks.push({
            name: 'Tracking consistent (7+ zile)',
            passed: consistentTracking,
            icon: consistentTracking ? '✅' : '⚠️',
            note: consistentTracking ? `${state.streak} zile streak!` : 'Continuă să trackuiești'
        });
        if (consistentTracking) readinessScore += 15;
        
        // Check 5: Savings rate
        const goodSavingsRate = health.savingsRate >= 15;
        checks.push({
            name: 'Rată economii 15%+',
            passed: goodSavingsRate,
            icon: goodSavingsRate ? '✅' : '⚠️',
            note: `${health.savingsRate.toFixed(1)}% acum`
        });
        if (goodSavingsRate) readinessScore += 10;
        
        const ready = readinessScore >= 70;
        const investableAmount = Math.max(0, monthlySavings * 0.5);
        
        return {
            ready,
            readinessScore,
            checks,
            investableAmount: Math.round(investableAmount),
            recommendation: ready 
                ? `Poți investi ~${Math.round(investableAmount)} ${state.currency}/lună în ETF-uri sau Pilon 3` 
                : 'Focus mai întâi pe fundație: fond de urgență și plata datoriilor',
            nextSteps: ready 
                ? ['Deschide cont la un broker (XTB, Interactive Brokers)', 'Începe cu ETF-uri globale (VWCE)', 'Investește lunar, nu timing market']
                : ['Completează fondul de urgență', 'Plătește datoriile cu dobândă mare', 'Crește rata de economisire la 20%']
        };
    }
};

// State

// Achievements
const achievementsList = [
    { id: 'first_tx', name: 'Prima', icon: '🎉', desc: 'Prima tranzacție' },
    { id: 'week_streak', name: '7 zile', icon: '🔥', desc: 'Streak 7 zile' },
    { id: 'month_streak', name: '30 zile', icon: '🌟', desc: 'Streak 30 zile' },
    { id: 'saver_10', name: 'Econom', icon: '💰', desc: '10% economisit' },
    { id: 'saver_20', name: 'Super', icon: '🏆', desc: '20% economisit' },
    { id: 'budget_master', name: 'Bugetar', icon: '📊', desc: 'Buget respectat' },
    { id: 'goal_set', name: 'Visător', icon: '🎯', desc: 'Primul obiectiv' },
    { id: 'goal_done', name: 'Winner', icon: '🥇', desc: 'Obiectiv atins' },
    { id: 'tx_100', name: 'Activ', icon: '📝', desc: '100 tranzacții' },
    { id: 'ai_user', name: 'Smart', icon: '🤖', desc: 'AI folosit' },
    { id: 'night_owl', name: 'Nocturn', icon: '🦉', desc: 'Activ noaptea' },
    { id: 'early_bird', name: 'Matinal', icon: '🐦', desc: 'Activ dimineața' }
];

const months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

// Savings Challenges Templates
const challengeTemplates = [
    // SĂPTĂMÂNALE
    { id: '52week', name: '52 Săptămâni', icon: '📅', desc: 'Economisește crescător: 10 RON săpt 1, 20 RON săpt 2... = 13,780 RON/an', duration: 52, weeklyIncrease: 10, category: 'savings' },
    { id: 'reverseWeek', name: '52 Săptămâni Invers', icon: '🔄', desc: 'Începi cu 520 RON și scazi câte 10 RON', duration: 52, weeklyIncrease: -10, startAmount: 520, category: 'savings' },
    
    // LUNARE
    { id: 'noSpend', name: 'Weekend Zero', icon: '🚫', desc: 'Un weekend complet fără cheltuieli', duration: 2, target: 0, category: 'discipline' },
    { id: 'noSpendWeek', name: 'Săptămâna Zero', icon: '⛔', desc: 'O săptămână cu cheltuieli doar pe necesități', duration: 7, category: 'discipline' },
    { id: 'noSpendMonth', name: 'Luna Frugală', icon: '🏆', desc: 'O lună întreagă cu cheltuieli minime', duration: 30, category: 'discipline' },
    
    // PROCENTUALE
    { id: 'roundUp', name: 'Rotunjește în Sus', icon: '⬆️', desc: 'Rotunjește cheltuielile, economisește diferența', duration: 30, target: 500, category: 'auto' },
    { id: '1percent', name: '1% pe Zi', icon: '📈', desc: 'Economisește 1% din venit zilnic', duration: 30, category: 'savings' },
    { id: '10percent', name: 'Regula 10%', icon: '🎯', desc: 'Economisește minim 10% din fiecare venit', duration: 30, category: 'savings' },
    { id: '50-30-20', name: 'Regula 50/30/20', icon: '⚖️', desc: '50% nevoi, 30% dorințe, 20% economii', duration: 30, category: 'budget' },
    
    // CATEGORII SPECIFICE
    { id: 'noCoffee', name: 'Fără Cafea Afară', icon: '☕', desc: '30 zile fără cafea cumpărată', duration: 30, category: 'food', restrictCategory: 'food' },
    { id: 'noDelivery', name: 'Fără Delivery', icon: '🚫🍕', desc: '30 zile fără comenzi de mâncare', duration: 30, category: 'food', restrictCategory: 'food' },
    { id: 'noShopping', name: 'Fără Shopping', icon: '🛍️', desc: '30 zile fără cumpărături non-esențiale', duration: 30, category: 'shopping', restrictCategory: 'shopping' },
    { id: 'noSubscriptions', name: 'Audit Abonamente', icon: '📱', desc: 'Anulează abonamentele nefolosite', duration: 7, category: 'subscriptions' },
    
    // TRANSPORT
    { id: 'publicTransport', name: 'Transport Public', icon: '🚌', desc: '30 zile doar transport public/bicicletă', duration: 30, category: 'transport', restrictCategory: 'transport' },
    { id: 'carpoolWeek', name: 'Carpool Week', icon: '🚗', desc: 'O săptămână de ride-sharing', duration: 7, category: 'transport' },
    
    // EXTREME
    { id: 'cashOnly', name: 'Cash Only', icon: '💵', desc: '30 zile doar cu cash (mai conștient de cheltuieli)', duration: 30, category: 'discipline' },
    { id: 'envelope', name: 'Metoda Plicurilor', icon: '✉️', desc: 'Împarte cash-ul în plicuri pe categorii', duration: 30, category: 'budget' },
    { id: 'minimalist', name: 'Minimalist', icon: '🧘', desc: 'Cumpără doar ce ai NEVOIE, nu ce vrei', duration: 30, category: 'discipline' },
    
    // VENITURI EXTRA
    { id: 'sideHustle', name: 'Side Hustle', icon: '💼', desc: 'Câștigă 500 RON extra luna asta', duration: 30, target: 500, category: 'income' },
    { id: 'sellStuff', name: 'Vinde & Economisește', icon: '🏷️', desc: 'Vinde 10 lucruri nefolosite', duration: 30, target: 10, category: 'income' },
    
    // RAPIDE
    { id: '24hNoSpend', name: '24h Zero', icon: '⏰', desc: '24 de ore fără nicio cheltuială', duration: 1, category: 'discipline' },
    { id: 'pantryWeek', name: 'Săptămâna Cămării', icon: '🥫', desc: 'Mănâncă doar ce ai deja în casă', duration: 7, category: 'food' }
];

// State
let state = {
    user: null,
    transactions: [],
    goals: [],
    debts: [],
    accounts: [],
    budgets: [],
    reminders: [],
    utilities: [],
    achievements: [],
    shownAchievements: [],
    recurring: [], // NEW: Recurring transactions
    subscriptions: [], // NEW: Detected subscriptions
    challenges: [], // NEW: Active challenges
    netWorthHistory: [], // NEW: Net worth timeline
    tags: [], // NEW: Custom tags
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    currency: 'RON',
    netWorth: 0,
    streak: 0,
    savingsRate: 0,
    editingId: null,
    trendChart: null,
    netWorthChart: null,
    filter: 'all',
    search: '',
    viewMode: 'list', // list or calendar
    selectedDate: new Date()
};

// DOM helpers
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// ═══════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    // Hide splash after delay
    setTimeout(() => $('splash')?.classList.add('hide'), 1500);
    
    // Firebase auth listener
    auth.onAuthStateChanged(user => {
        if (user) {
            state.user = user;
            showApp();
            loadData();
        } else {
            state.user = null;
            showAuth();
        }
    });
});

function showAuth() {
    $('splash')?.classList.add('hide');
    $('auth')?.classList.remove('hide');
    $('app')?.classList.add('hide');
}

function showApp() {
    $('splash')?.classList.add('hide');
    $('auth')?.classList.add('hide');
    $('app')?.classList.remove('hide');
    updateUI();
}

// ═══════════════════════════════════════════
// AUTH FUNCTIONS
// ═══════════════════════════════════════════
function showTab(tab) {
    $$('.auth-tab').forEach((t, i) => t.classList.toggle('on', (i === 0 && tab === 'login') || (i === 1 && tab === 'register')));
    $('loginForm')?.classList.toggle('hide', tab !== 'login');
    $('registerForm')?.classList.toggle('hide', tab !== 'register');
}

async function doLogin(e) {
    e.preventDefault();
    const email = $('loginEmail')?.value;
    const pass = $('loginPass')?.value;
    try {
        await auth.signInWithEmailAndPassword(email, pass);
        toast('Conectat!', 'success');
    } catch (err) {
        toast('Eroare: ' + err.message, 'error');
    }
}

async function doRegister(e) {
    e.preventDefault();
    const name = $('regName')?.value;
    const email = $('regEmail')?.value;
    const pass = $('regPass')?.value;
    try {
        const { user } = await auth.createUserWithEmailAndPassword(email, pass);
        await user.updateProfile({ displayName: name });
        await db.collection('users').doc(user.uid).set({ name, email, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
        toast('Cont creat!', 'success');
    } catch (err) {
        toast('Eroare: ' + err.message, 'error');
    }
}

function doLogout() {
    auth.signOut();
    toast('Deconectat');
}

// Google Sign-In
async function doGoogleLogin() {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({
            prompt: 'select_account'
        });
        
        const result = await auth.signInWithPopup(provider);
        const user = result.user;
        
        // Check if user exists in Firestore, if not create profile
        const userDoc = await db.collection('users').doc(user.uid).get();
        if (!userDoc.exists) {
            await db.collection('users').doc(user.uid).set({
                name: user.displayName || 'User',
                email: user.email,
                photoURL: user.photoURL || '',
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                provider: 'google'
            });
        }
        
        toast('Conectat cu Google!', 'success');
    } catch (err) {
        console.error('Google Sign-In error:', err);
        if (err.code === 'auth/popup-closed-by-user') {
            toast('Autentificare anulată', 'error');
        } else if (err.code === 'auth/popup-blocked') {
            toast('Popup blocat! Permite popup-urile.', 'error');
        } else {
            toast('Eroare: ' + err.message, 'error');
        }
    }
}

// ═══════════════════════════════════════════
// DATA LOADING
// ═══════════════════════════════════════════
async function loadData() {
    if (!state.user) return;
    const uid = state.user.uid;
    try {
        const [txSnap, goalsSnap, debtsSnap, accSnap, budSnap, remSnap, utilSnap, recurSnap, chalSnap, userDoc] = await Promise.all([
            db.collection('users').doc(uid).collection('transactions').orderBy('date', 'desc').get(),
            db.collection('users').doc(uid).collection('goals').get(),
            db.collection('users').doc(uid).collection('debts').get(),
            db.collection('users').doc(uid).collection('accounts').get(),
            db.collection('users').doc(uid).collection('budgets').get(),
            db.collection('users').doc(uid).collection('reminders').get(),
            db.collection('users').doc(uid).collection('utilities').get(),
            db.collection('users').doc(uid).collection('recurring').get(),
            db.collection('users').doc(uid).collection('challenges').get(),
            db.collection('users').doc(uid).get()
        ]);
        
        state.transactions = txSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.goals = goalsSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.debts = debtsSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.accounts = accSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.budgets = budSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.reminders = remSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.utilities = utilSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.recurring = recurSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.challenges = chalSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        
        if (userDoc.exists) {
            const data = userDoc.data();
            state.achievements = data.achievements || [];
            state.shownAchievements = data.shownAchievements || [...state.achievements];
            state.netWorth = data.netWorth || 0;
            state.currency = data.currency || 'RON';
            state.tags = data.tags || [];
            state.netWorthHistory = data.netWorthHistory || [];
            customCategories = data.customCategories || { expense: [], income: [] };
        }
        
        detectSubscriptions();
        processRecurring();
        calcStreak();
        updateUI();
    } catch (err) {
        console.error('Load error:', err);
    }
}

// ═══════════════════════════════════════════
// UI UPDATES
// ═══════════════════════════════════════════
function updateUI() {
    updateProfile();
    updateHome();
    updateMonthText();
}

function updateProfile() {
    if (!state.user) return;
    const name = state.user.displayName || 'Utilizator';
    const initial = name.charAt(0).toUpperCase();
    const photoURL = state.user.photoURL;
    
    // Header avatar
    if ($('hdrAvatar')) {
        if (photoURL) {
            $('hdrAvatar').innerHTML = `<img src="${photoURL}" alt="${initial}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
        } else {
            $('hdrAvatar').textContent = initial;
        }
    }
    
    // Profile section avatar
    if ($('profilePic')) {
        if (photoURL) {
            $('profilePic').innerHTML = `<img src="${photoURL}" alt="${initial}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
        } else {
            $('profilePic').textContent = initial;
        }
    }
    
    if ($('profileName')) $('profileName').textContent = name;
    if ($('profileEmail')) $('profileEmail').textContent = state.user.email || '';
    if ($('currSel')) $('currSel').value = state.currency;
    if ($('netWorthIn')) $('netWorthIn').value = state.netWorth || '';
}

function updateHome() {
    const trans = getMonthTx();
    let income = 0, expense = 0;
    trans.forEach(t => {
        if (t.type === 'income') income += t.amount;
        else if (t.type === 'expense') expense += t.amount;
    });
    const balance = income - expense;
    state.savingsRate = income > 0 ? ((income - expense) / income * 100) : 0;
    
    // Hero
    const heroBal = $('heroBal');
    if (heroBal) {
        heroBal.textContent = fmt(balance);
        heroBal.className = 'hero-bal ' + (balance >= 0 ? 'pos' : 'neg');
    }
    if ($('heroInc')) $('heroInc').textContent = fmt(income);
    if ($('heroExp')) $('heroExp').textContent = fmt(expense);
    
    // Stats
    const days = new Date().getDate();
    const dailyAvg = days > 0 ? expense / days : 0;
    
    const statSave = $('statSave');
    if (statSave) {
        statSave.textContent = state.savingsRate.toFixed(0) + '%';
        statSave.className = 'stat-val ' + (state.savingsRate >= 20 ? 'good' : state.savingsRate > 0 ? 'warn' : 'bad');
    }
    if ($('statDaily')) $('statDaily').textContent = Math.round(dailyAvg);
    if ($('statStreak')) $('statStreak').textContent = state.streak + '🔥';
    
    // Welcome
    updateWelcome();
    
    // Recent transactions
    renderRecentTx();
}

function updateWelcome() {
    if (!state.user) return;
    const hour = new Date().getHours();
    const name = state.user.displayName?.split(' ')[0] || 'prietene';
    let greet = 'Bună seara';
    if (hour < 12) greet = 'Bună dimineața';
    else if (hour < 18) greet = 'Bună ziua';
    
    if ($('welcomeText')) $('welcomeText').textContent = `${greet}, ${name}! `;
    if ($('welcomeSub')) {
        const trans = getMonthTx();
        if (trans.length === 0) $('welcomeSub').textContent = 'Începe să adaugi tranzacții';
        else if (state.savingsRate >= 20) $('welcomeSub').textContent = 'Luna merge excelent! 💪';
        else if (state.savingsRate > 0) $('welcomeSub').textContent = 'Ești pe plus luna asta';
        else $('welcomeSub').textContent = 'Atenție la cheltuieli!';
    }
}

function updateMonthText() {
    const text = months[state.month].substring(0, 3) + ' ' + state.year;
    if ($('monthTxt')) $('monthTxt').textContent = text;
    if ($('txMonthTxt')) $('txMonthTxt').textContent = text;
}

// ═══════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════
function nav(view) {
    $$('.view').forEach(v => v.classList.remove('on'));
    $(view + 'View')?.classList.add('on');
    
    $$('.nav-btn').forEach(btn => btn.classList.toggle('on', btn.dataset.v === view));
    
    const titles = { 
        home: 'Budget Pro', 
        transactions: 'Tranzacții', 
        analytics: 'Analiză', 
        budgets: 'Bugete', 
        menu: 'Cont',
        calendar: 'Calendar',
        recurring: 'Recurente',
        subscriptions: 'Abonamente',
        challenges: 'Provocări',
        netWorth: 'Patrimoniu',
        insights: 'AI Insights',
        customcats: 'Categorii Smart',
        settings: 'Setări',
        faq: 'FAQ & Ghid',
        // GENIUS views
        anomalies: 'Anomalii',
        predictions: '🔮 Predicții',
        timeAnalysis: 'Analiză Timp',
        merchants: '🏪 Magazine',
        smartBudgets: '📝 Bugete AI',
        smartGoals: 'Obiective AI',
        healthScore: '💪 Scor Sănătate',
        investment: 'Investiții',
        recommendations: 'Recomandări'
    };
    if ($('hdrTitle')) $('hdrTitle').textContent = titles[view] || 'Budget Pro';
    
    // Render content
    if (view === 'home') { updateHome(); renderGeniusDashboard(); }
    if (view === 'transactions') { updateMonthText(); renderAllTx(); }
    if (view === 'analytics') renderAnalytics();
    if (view === 'budgets') renderBudgets();
    if (view === 'goals') renderGoals();
    if (view === 'accounts') renderAccounts();
    if (view === 'debts') renderDebts();
    if (view === 'utilities') renderUtilities();
    if (view === 'reminders') renderReminders();
    if (view === 'achievements') renderAchievements();
    if (view === 'calendar') { updateMonthText(); renderCalendar(); }
    if (view === 'recurring') renderRecurring();
    if (view === 'subscriptions') { detectSubscriptions(); renderSubscriptions(); }
    if (view === 'challenges') renderChallenges();
    if (view === 'netWorth') renderNetWorthTimeline();
    if (view === 'insights') renderAdvancedInsights();
    if (view === 'customcats') { renderCustomCategories(); renderLearnedPatterns(); }
    // GENIUS views
    if (view === 'anomalies') renderAllAnomalies();
    if (view === 'predictions') renderPredictionsView();
    if (view === 'timeAnalysis') renderTimeAnalysis();
    if (view === 'merchants') renderMerchantAnalytics();
    if (view === 'smartBudgets') renderSmartBudgets();
    if (view === 'smartGoals') renderSmartGoals();
    if (view === 'healthScore') renderHealthScore();
    if (view === 'investment') renderInvestmentReadiness();
    if (view === 'recommendations') renderRecommendations();
}

function prevMonth() {
    if (state.month === 0) { state.month = 11; state.year--; }
    else state.month--;
    updateMonthText();
    updateHome();
    renderAllTx();
}

function nextMonth() {
    if (state.month === 11) { state.month = 0; state.year++; }
    else state.month++;
    updateMonthText();
    updateHome();
    renderAllTx();
}

// ═══════════════════════════════════════════
// TRANSACTIONS
// ═══════════════════════════════════════════
function getMonthTx() {
    return state.transactions.filter(t => {
        const d = new Date(t.date);
        return d.getMonth() === state.month && d.getFullYear() === state.year;
    });
}

function renderRecentTx() {
    const container = $('recentTx');
    if (!container) return;
    
    const trans = getMonthTx().slice(0, 5);
    if (trans.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">📝</div><p class="empty-txt">Nicio tranzacție</p><button class="empty-btn" onclick="openTxModal()">+ Adaugă</button></div>`;
        return;
    }
    container.innerHTML = trans.map(t => txHTML(t)).join('');
}

function renderAllTx() {
    const container = $('allTx');
    if (!container) return;
    
    let trans = getMonthTx();
    
    // Filter
    if (state.filter !== 'all') trans = trans.filter(t => t.type === state.filter);
    
    // Search
    if (state.search) {
        const q = state.search.toLowerCase();
        trans = trans.filter(t => {
            const cat = findCat(t.type, t.category);
            return (cat?.name || '').toLowerCase().includes(q) || (t.note || '').toLowerCase().includes(q);
        });
    }
    
    trans.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (trans.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">🔍</div><p class="empty-txt">${state.search ? 'Nimic găsit' : 'Nicio tranzacție'}</p></div>`;
        return;
    }
    container.innerHTML = trans.map(t => txHTML(t)).join('');
}

function txHTML(t) {
    const cat = findCat(t.type, t.category);
    return `
        <div class="tx-item" onclick="editTx('${t.id}')">
            <div class="tx-icon" style="background:${cat?.color || '#666'}20">${cat?.icon || '📦'}</div>
            <div class="tx-info">
                <div class="tx-name">${cat?.name || t.category}</div>
                <div class="tx-meta">${t.subcategory || ''} · ${fmtDate(t.date)}</div>
            </div>
            <div class="tx-amt ${t.type === 'income' ? 'inc' : ''}">${t.type === 'expense' ? '-' : '+'}${fmt(t.amount)}</div>
        </div>
    `;
}

function doSearch() {
    state.search = $('searchIn')?.value || '';
    renderAllTx();
}

function setFilter(f) {
    state.filter = f;
    $$('.flt-btn').forEach(btn => btn.classList.toggle('on', btn.dataset.f === f));
    renderAllTx();
}

// Transaction Modal
function openTxModal(type = 'expense') {
    state.editingId = null;
    $('txId').value = '';
    $('txForm')?.reset();
    $('txModalTitle').textContent = 'Tranzacție nouă';
    $('txDate').value = new Date().toISOString().split('T')[0];
    $('txDeleteBtn').style.display = 'none';
    setTxType(type);
    openModal('txModal');
}

function setTxType(type) {
    $('txType').value = type;
    $$('#txModal .type-tab').forEach(tab => {
        const isActive = tab.dataset.t === type;
        tab.classList.toggle('on', isActive);
        tab.classList.toggle('exp', isActive && type === 'expense');
        tab.classList.toggle('inc', isActive && type === 'income');
    });
    loadCats(type);
}

function loadCats(type) {
    const sel = $('txCat');
    if (!sel) return;
    const cats = getAllCategories(type);
    sel.innerHTML = cats.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
    loadSubcats();
}

function loadSubcats() {
    const type = $('txType')?.value;
    const catId = $('txCat')?.value;
    const sel = $('txSubcat');
    if (!sel) return;
    
    // Get subcategories from SmartCategoryEngine (includes custom + extensions)
    const subs = SmartCategoryEngine.getSubcategories(type, catId);
    
    // Add "Add new" option at the end
    sel.innerHTML = '<option value="">-- Selectează --</option>' + 
        subs.map(s => `<option value="${s}">${s}</option>`).join('') +
        '<option value="__add_new__">➕ Adaugă nou...</option>';
}

// Handle subcategory change - allow adding new subcategories
function handleSubcatChange() {
    const sel = $('txSubcat');
    if (sel?.value === '__add_new__') {
        const newSub = prompt('Introdu noua subcategorie:');
        if (newSub && newSub.trim()) {
            const type = $('txType')?.value;
            const catId = $('txCat')?.value;
            SmartCategoryEngine.addSubcategory(type, catId, newSub.trim());
            loadSubcats();
            sel.value = newSub.trim();
            toast('Subcategorie adăugată!', 'success');
        } else {
            sel.value = '';
        }
    }
}

// Auto-categorize when user types in note field
function handleNoteInput(e) {
    const note = e.target.value;
    const type = $('txType')?.value;
    const amount = parseFloat($('txAmount')?.value) || 0;
    
    // Only auto-suggest if no category selected yet (or default)
    const currentCat = $('txCat')?.value;
    if (!currentCat || currentCat === 'other' || currentCat === 'other_income') {
        const suggestion = SmartCategoryEngine.autoCategorize(note, amount, type);
        
        if (suggestion && suggestion.category && suggestion.confidence > 50) {
            // Show suggestion toast
            const catInfo = findCat(type, suggestion.category);
            if (catInfo) {
                showAutoCategorizeSuggestion(suggestion, catInfo);
            }
        }
    }
}

// Show auto-categorize suggestion
function showAutoCategorizeSuggestion(suggestion, catInfo) {
    // Remove existing suggestion
    const existing = document.querySelector('.auto-cat-suggestion');
    if (existing) existing.remove();
    
    const suggestionEl = document.createElement('div');
    suggestionEl.className = 'auto-cat-suggestion';
    suggestionEl.innerHTML = `
        <span class="suggestion-icon">🤖</span>
        <span class="suggestion-text">
            Sugerez: <strong>${catInfo.icon} ${catInfo.name}</strong>
            ${suggestion.subcategory ? ` → ${suggestion.subcategory}` : ''}
        </span>
        <button type="button" class="suggestion-btn" onclick="applyAutoSuggestion('${suggestion.category}', '${suggestion.subcategory || ''}')">
            Aplică
        </button>
        <button type="button" class="suggestion-close" onclick="this.parentElement.remove()">✕</button>
    `;
    
    const form = $('txForm');
    if (form) {
        form.insertBefore(suggestionEl, form.firstChild);
    }
}

// Apply auto-categorization suggestion
function applyAutoSuggestion(category, subcategory) {
    const catSel = $('txCat');
    const subSel = $('txSubcat');
    
    if (catSel) {
        catSel.value = category;
        loadSubcats();
    }
    if (subSel && subcategory) {
        subSel.value = subcategory;
    }
    
    // Remove suggestion
    const suggestion = document.querySelector('.auto-cat-suggestion');
    if (suggestion) suggestion.remove();
    
    toast('Categorie aplicată automat!', 'success');
}

async function saveTx(e) {
    e.preventDefault();
    const tagsInput = $('txTagsInput')?.value || '';
    const tags = tagsInput.split(',').map(t => t.trim()).filter(t => t);
    
    const data = {
        type: $('txType').value,
        amount: parseFloat($('txAmount').value),
        category: $('txCat').value,
        subcategory: $('txSubcat')?.value || '',
        date: $('txDate').value,
        note: $('txNote')?.value || '',
        tags: tags,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    // 🤖 AUTO-LEARN: Remember this categorization for future
    const learnText = data.subcategory || data.note;
    if (learnText && data.category) {
        SmartCategoryEngine.learn(learnText, data.category, data.subcategory);
    }
    
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('transactions');
        if (state.editingId) {
            await ref.doc(state.editingId).update(data);
            const idx = state.transactions.findIndex(t => t.id === state.editingId);
            if (idx >= 0) state.transactions[idx] = { ...state.transactions[idx], ...data };
            toast('Actualizat!', 'success');
        } else {
            const doc = await ref.add(data);
            state.transactions.unshift({ id: doc.id, ...data });
            toast('Adăugat!', 'success');
            checkAchievement('first_tx');
        }
        closeModal('txModal');
        updateHome();
        renderAllTx();
    } catch (err) {
        toast('Eroare', 'error');
    }
}

function editTx(id) {
    const t = state.transactions.find(x => x.id === id);
    if (!t) return;
    
    state.editingId = id;
    $('txId').value = id;
    $('txModalTitle').textContent = 'Editează';
    setTxType(t.type);
    $('txCat').value = t.category;
    loadSubcats();
    $('txSubcat').value = t.subcategory || '';
    $('txAmount').value = t.amount;
    $('txDate').value = t.date;
    $('txNote').value = t.note || '';
    $('txTagsInput').value = (t.tags || []).join(', ');
    $('txDeleteBtn').style.display = 'block';
    openModal('txModal');
}

async function deleteTx() {
    if (!state.editingId || !confirm('Ștergi tranzacția?')) return;
    try {
        await db.collection('users').doc(state.user.uid).collection('transactions').doc(state.editingId).delete();
        state.transactions = state.transactions.filter(t => t.id !== state.editingId);
        closeModal('txModal');
        updateHome();
        renderAllTx();
        toast('Șters!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// ═══════════════════════════════════════════
// GOALS
// ═══════════════════════════════════════════
function renderGoals() {
    const container = $('goalsList');
    if (!container) return;
    if (state.goals.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">🎯</div><p class="empty-txt">Niciun obiectiv</p><button class="empty-btn" onclick="openGoalModal()">+ Adaugă</button></div>`;
        return;
    }
    container.innerHTML = state.goals.map(g => {
        const pct = g.target > 0 ? Math.min((g.saved / g.target) * 100, 100) : 0;
        return `
            <div class="item-card">
                <div class="item-row">
                    <div class="item-emoji">🎯</div>
                    <div class="item-info">
                        <div class="item-name">${g.name}</div>
                        <div class="item-sub">${fmt(g.saved)} / ${fmt(g.target)}</div>
                    </div>
                    <div class="item-actions">
                        <button class="item-btn" onclick="editGoal('${g.id}')">✏️</button>
                        <button class="item-btn" onclick="deleteGoal('${g.id}')">🗑️</button>
                    </div>
                </div>
                <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
                <div class="progress-txt"><span>${pct.toFixed(0)}%</span><span>${g.deadline || ''}</span></div>
            </div>
        `;
    }).join('');
}

function openGoalModal() {
    state.editingId = null;
    $('goalForm')?.reset();
    openModal('goalModal');
}

function editGoal(id) {
    const g = state.goals.find(x => x.id === id);
    if (!g) return;
    state.editingId = id;
    $('goalId').value = id;
    $('goalName').value = g.name;
    $('goalTarget').value = g.target;
    $('goalSaved').value = g.saved || 0;
    $('goalDeadline').value = g.deadline || '';
    openModal('goalModal');
}

async function saveGoal(e) {
    e.preventDefault();
    const data = {
        name: $('goalName').value,
        target: parseFloat($('goalTarget').value),
        saved: parseFloat($('goalSaved').value) || 0,
        deadline: $('goalDeadline').value || ''
    };
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('goals');
        if (state.editingId) {
            await ref.doc(state.editingId).update(data);
            const idx = state.goals.findIndex(g => g.id === state.editingId);
            if (idx >= 0) state.goals[idx] = { ...state.goals[idx], ...data };
        } else {
            const doc = await ref.add(data);
            state.goals.push({ id: doc.id, ...data });
            checkAchievement('goal_set');
        }
        closeModal('goalModal');
        renderGoals();
        toast('Salvat!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

async function deleteGoal(id) {
    if (!confirm('Ștergi obiectivul?')) return;
    try {
        await db.collection('users').doc(state.user.uid).collection('goals').doc(id).delete();
        state.goals = state.goals.filter(g => g.id !== id);
        renderGoals();
        toast('Șters!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// ═══════════════════════════════════════════
// BUDGETS
// ═══════════════════════════════════════════
function renderBudgets() {
    const container = $('budgetsList');
    if (!container) return;
    if (state.budgets.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">📊</div><p class="empty-txt">Niciun buget</p><button class="empty-btn" onclick="openBudgetModal()">+ Adaugă</button></div>`;
        return;
    }
    
    const monthTx = getMonthTx();
    container.innerHTML = state.budgets.map(b => {
        const cat = findCat('expense', b.category);
        const spent = monthTx.filter(t => t.type === 'expense' && t.category === b.category).reduce((s, t) => s + t.amount, 0);
        const pct = b.limit > 0 ? Math.min((spent / b.limit) * 100, 100) : 0;
        const cls = pct >= 100 ? 'bad' : pct >= 80 ? 'warn' : '';
        return `
            <div class="item-card">
                <div class="item-row">
                    <div class="item-emoji">${cat?.icon || '📊'}</div>
                    <div class="item-info">
                        <div class="item-name">${cat?.name || b.category}</div>
                        <div class="item-sub">${fmt(spent)} / ${fmt(b.limit)}</div>
                    </div>
                    <div class="item-actions">
                        <button class="item-btn" onclick="editBudget('${b.id}')">✏️</button>
                        <button class="item-btn" onclick="deleteBudget('${b.id}')">🗑️</button>
                    </div>
                </div>
                <div class="progress-bar"><div class="progress-fill ${cls}" style="width:${pct}%"></div></div>
                <div class="progress-txt"><span>${pct.toFixed(0)}%</span><span>${pct >= 100 ? 'Depășit!' : ''}</span></div>
            </div>
        `;
    }).join('');
}

function openBudgetModal() {
    state.editingId = null;
    $('budgetForm')?.reset();
    // Populate categories
    const sel = $('budgetCat');
    if (sel) sel.innerHTML = categories.expense.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
    openModal('budgetModal');
}

function editBudget(id) {
    const b = state.budgets.find(x => x.id === id);
    if (!b) return;
    state.editingId = id;
    openBudgetModal();
    $('budgetCat').value = b.category;
    $('budgetLimit').value = b.limit;
}

async function saveBudget(e) {
    e.preventDefault();
    const data = {
        category: $('budgetCat').value,
        limit: parseFloat($('budgetLimit').value)
    };
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('budgets');
        if (state.editingId) {
            await ref.doc(state.editingId).update(data);
            const idx = state.budgets.findIndex(b => b.id === state.editingId);
            if (idx >= 0) state.budgets[idx] = { ...state.budgets[idx], ...data };
        } else {
            const doc = await ref.add(data);
            state.budgets.push({ id: doc.id, ...data });
        }
        closeModal('budgetModal');
        renderBudgets();
        toast('Salvat!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

async function deleteBudget(id) {
    if (!confirm('Ștergi bugetul?')) return;
    try {
        await db.collection('users').doc(state.user.uid).collection('budgets').doc(id).delete();
        state.budgets = state.budgets.filter(b => b.id !== id);
        renderBudgets();
        toast('Șters!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// ═══════════════════════════════════════════
// ACCOUNTS
// ═══════════════════════════════════════════
function renderAccounts() {
    const container = $('accountsList');
    if (!container) return;
    if (state.accounts.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">🏦</div><p class="empty-txt">Niciun cont</p><button class="empty-btn" onclick="openAccountModal()">+ Adaugă</button></div>`;
        return;
    }
    const icons = { bank: '🏦', cash: '💵', savings: '🐷' };
    container.innerHTML = state.accounts.map(a => `
        <div class="item-card">
            <div class="item-row">
                <div class="item-emoji">${icons[a.type] || '🏦'}</div>
                <div class="item-info">
                    <div class="item-name">${a.name}</div>
                    <div class="item-sub">${fmt(a.balance)}</div>
                </div>
                <div class="item-actions">
                    <button class="item-btn" onclick="editAccount('${a.id}')">✏️</button>
                    <button class="item-btn" onclick="deleteAccount('${a.id}')">🗑️</button>
                </div>
            </div>
        </div>
    `).join('');
}

function openAccountModal() {
    state.editingId = null;
    $('accountForm')?.reset();
    openModal('accountModal');
}

function editAccount(id) {
    const a = state.accounts.find(x => x.id === id);
    if (!a) return;
    state.editingId = id;
    $('accountName').value = a.name;
    $('accountType').value = a.type;
    $('accountBal').value = a.balance;
    openModal('accountModal');
}

async function saveAccount(e) {
    e.preventDefault();
    const data = {
        name: $('accountName').value,
        type: $('accountType').value,
        balance: parseFloat($('accountBal').value)
    };
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('accounts');
        if (state.editingId) {
            await ref.doc(state.editingId).update(data);
            const idx = state.accounts.findIndex(a => a.id === state.editingId);
            if (idx >= 0) state.accounts[idx] = { ...state.accounts[idx], ...data };
        } else {
            const doc = await ref.add(data);
            state.accounts.push({ id: doc.id, ...data });
        }
        closeModal('accountModal');
        renderAccounts();
        toast('Salvat!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

async function deleteAccount(id) {
    if (!confirm('Ștergi contul?')) return;
    try {
        await db.collection('users').doc(state.user.uid).collection('accounts').doc(id).delete();
        state.accounts = state.accounts.filter(a => a.id !== id);
        renderAccounts();
        toast('Șters!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// ═══════════════════════════════════════════
// DEBTS
// ═══════════════════════════════════════════
function renderDebts() {
    const container = $('debtsList');
    if (!container) return;
    if (state.debts.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">🤝</div><p class="empty-txt">Nicio datorie</p><button class="empty-btn" onclick="openDebtModal()">+ Adaugă</button></div>`;
        return;
    }
    container.innerHTML = state.debts.map(d => `
        <div class="item-card">
            <div class="item-row">
                <div class="item-emoji">${d.type === 'owe' ? '📤' : '📥'}</div>
                <div class="item-info">
                    <div class="item-name">${d.person}</div>
                    <div class="item-sub">${d.type === 'owe' ? 'Datorez' : 'Îmi datorează'}: ${fmt(d.amount)}</div>
                </div>
                <div class="item-actions">
                    <button class="item-btn" onclick="editDebt('${d.id}')">✏️</button>
                    <button class="item-btn" onclick="deleteDebt('${d.id}')">🗑️</button>
                </div>
            </div>
        </div>
    `).join('');
}

function openDebtModal() {
    state.editingId = null;
    $('debtForm')?.reset();
    setDebtType('owe');
    openModal('debtModal');
}

function setDebtType(type) {
    $('debtType').value = type;
    $$('#debtModal .type-tab').forEach(tab => {
        const isActive = tab.dataset.t === type;
        tab.classList.toggle('on', isActive);
        tab.classList.toggle('exp', isActive && type === 'owe');
        tab.classList.toggle('inc', isActive && type === 'owed');
    });
}

function editDebt(id) {
    const d = state.debts.find(x => x.id === id);
    if (!d) return;
    state.editingId = id;
    setDebtType(d.type);
    $('debtPerson').value = d.person;
    $('debtAmount').value = d.amount;
    $('debtNote').value = d.note || '';
    openModal('debtModal');
}

async function saveDebt(e) {
    e.preventDefault();
    const data = {
        type: $('debtType').value,
        person: $('debtPerson').value,
        amount: parseFloat($('debtAmount').value),
        note: $('debtNote').value || ''
    };
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('debts');
        if (state.editingId) {
            await ref.doc(state.editingId).update(data);
            const idx = state.debts.findIndex(d => d.id === state.editingId);
            if (idx >= 0) state.debts[idx] = { ...state.debts[idx], ...data };
        } else {
            const doc = await ref.add(data);
            state.debts.push({ id: doc.id, ...data });
        }
        closeModal('debtModal');
        renderDebts();
        toast('Salvat!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

async function deleteDebt(id) {
    if (!confirm('Ștergi datoria?')) return;
    try {
        await db.collection('users').doc(state.user.uid).collection('debts').doc(id).delete();
        state.debts = state.debts.filter(d => d.id !== id);
        renderDebts();
        toast('Șters!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// ═══════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════
function renderUtilities() {
    // Update summary cards
    const latest = {};
    state.utilities.forEach(u => {
        if (!latest[u.type] || u.month > latest[u.type].month) latest[u.type] = u;
    });
    if ($('uElec')) $('uElec').textContent = latest.electricity ? fmt(latest.electricity.amount) : '--';
    if ($('uGas')) $('uGas').textContent = latest.gas ? fmt(latest.gas.amount) : '--';
    if ($('uWater')) $('uWater').textContent = latest.water ? fmt(latest.water.amount) : '--';
    if ($('uNet')) $('uNet').textContent = latest.internet ? fmt(latest.internet.amount) : '--';
    
    // History
    const container = $('utilHistory');
    if (!container) return;
    const sorted = [...state.utilities].sort((a, b) => b.month.localeCompare(a.month));
    if (sorted.length === 0) {
        container.innerHTML = '';
        return;
    }
    const icons = { electricity: '⚡', gas: '🔥', water: '💧', internet: '📶' };
    container.innerHTML = '<div class="sec-title" style="margin:16px 0 10px">Istoric</div>' + sorted.slice(0, 10).map(u => `
        <div class="item-card">
            <div class="item-row">
                <div class="item-emoji">${icons[u.type] || '💡'}</div>
                <div class="item-info">
                    <div class="item-name">${u.type}</div>
                    <div class="item-sub">${u.month}</div>
                </div>
                <div class="item-sub">${fmt(u.amount)}</div>
            </div>
        </div>
    `).join('');
}

function openUtilityModal(type) {
    state.editingId = null;
    $('utilityForm')?.reset();
    if (type) $('utilityType').value = type;
    $('utilityMonth').value = new Date().toISOString().slice(0, 7);
    openModal('utilityModal');
}

async function saveUtility(e) {
    e.preventDefault();
    const data = {
        type: $('utilityType').value,
        month: $('utilityMonth').value,
        amount: parseFloat($('utilityAmount').value)
    };
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('utilities');
        const doc = await ref.add(data);
        state.utilities.push({ id: doc.id, ...data });
        closeModal('utilityModal');
        renderUtilities();
        toast('Salvat!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// ═══════════════════════════════════════════
// REMINDERS
// ═══════════════════════════════════════════
function renderReminders() {
    const container = $('remindersList');
    if (!container) return;
    if (state.reminders.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">⏰</div><p class="empty-txt">Niciun reminder</p><button class="empty-btn" onclick="openReminderModal()">+ Adaugă</button></div>`;
        return;
    }
    container.innerHTML = state.reminders.map(r => `
        <div class="item-card">
            <div class="item-row">
                <div class="item-emoji">⏰</div>
                <div class="item-info">
                    <div class="item-name">${r.name}</div>
                    <div class="item-sub">Ziua ${r.day} - ${fmt(r.amount)}</div>
                </div>
                <div class="item-actions">
                    <button class="item-btn" onclick="deleteReminder('${r.id}')">🗑️</button>
                </div>
            </div>
        </div>
    `).join('');
}

function openReminderModal() {
    state.editingId = null;
    $('reminderForm')?.reset();
    openModal('reminderModal');
}

async function saveReminder(e) {
    e.preventDefault();
    const data = {
        name: $('reminderName').value,
        amount: parseFloat($('reminderAmount').value),
        day: parseInt($('reminderDay').value)
    };
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('reminders');
        const doc = await ref.add(data);
        state.reminders.push({ id: doc.id, ...data });
        closeModal('reminderModal');
        renderReminders();
        toast('Salvat!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

async function deleteReminder(id) {
    if (!confirm('Ștergi reminderul?')) return;
    try {
        await db.collection('users').doc(state.user.uid).collection('reminders').doc(id).delete();
        state.reminders = state.reminders.filter(r => r.id !== id);
        renderReminders();
        toast('Șters!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// ═══════════════════════════════════════════
// ACHIEVEMENTS
// ═══════════════════════════════════════════
function renderAchievements() {
    const container = $('achGrid');
    const countEl = $('achCount');
    if (!container) return;
    
    if (countEl) countEl.textContent = `${state.achievements.length}/${achievementsList.length}`;
    
    container.innerHTML = achievementsList.map(a => `
        <div class="badge ${state.achievements.includes(a.id) ? 'on' : ''}">
            <div class="badge-icon">${a.icon}</div>
            <div class="badge-name">${a.name}</div>
        </div>
    `).join('');
}

function checkAchievement(id) {
    if (state.achievements.includes(id)) return;
    state.achievements.push(id);
    state.shownAchievements.push(id);
    
    const ach = achievementsList.find(a => a.id === id);
    if (ach) toast(`${ach.name}!`, 'success');
    
    // Save
    if (state.user) {
        db.collection('users').doc(state.user.uid).update({
            achievements: state.achievements,
            shownAchievements: state.shownAchievements
        }).catch(() => {});
    }
}

// ═══════════════════════════════════════════
// ANALYTICS
// ═══════════════════════════════════════════
function renderAnalytics() {
    // Health score
    const health = calcHealthScore();
    if ($('scoreNum')) $('scoreNum').textContent = health;
    if ($('scoreFill')) $('scoreFill').style.width = health + '%';
    
    // FIRE
    const fire = calcFIRE();
    if ($('metricFire')) $('metricFire').textContent = fire.progress.toFixed(1) + '%';
    if ($('metricYears')) $('metricYears').textContent = fire.years > 100 ? '∞' : fire.years.toFixed(0);
    
    // Tips
    renderTips();
    
    // Chart
    renderTrendChart();
}

function calcHealthScore() {
    let score = 50;
    if (state.savingsRate >= 20) score += 20;
    else if (state.savingsRate >= 10) score += 10;
    else if (state.savingsRate < 0) score -= 20;
    
    if (state.streak >= 30) score += 15;
    else if (state.streak >= 7) score += 10;
    
    if (state.budgets.length > 0) score += 10;
    if (state.goals.length > 0) score += 5;
    
    return Math.max(0, Math.min(100, score));
}

function calcFIRE() {
    const yearlyExpense = getMonthTx().filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0) * 12;
    const fireNumber = yearlyExpense * 25;
    const progress = fireNumber > 0 ? (state.netWorth / fireNumber) * 100 : 0;
    const yearlySavings = getMonthTx().filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0) * 12 - yearlyExpense;
    const years = yearlySavings > 0 ? (fireNumber - state.netWorth) / yearlySavings : Infinity;
    return { progress, years: Math.max(0, years) };
}

function renderTips() {
    const container = $('tipsList');
    if (!container) return;
    
    const tips = [];
    if (state.savingsRate < 10) tips.push({ icon: '💡', title: 'Economisește mai mult', txt: 'Încearcă să economisești cel puțin 10% din venituri.' });
    if (state.budgets.length === 0) tips.push({ icon: '📊', title: 'Setează bugete', txt: 'Bugetele te ajută să controlezi cheltuielile.' });
    if (state.goals.length === 0) tips.push({ icon: '🎯', title: 'Adaugă un obiectiv', txt: 'Obiectivele te motivează să economisești.' });
    if (tips.length === 0) tips.push({ icon: '🎉', title: 'Excelent!', txt: 'Finanțele tale arată bine!' });
    
    container.innerHTML = tips.slice(0, 3).map(t => `
        <div class="tip-item">
            <div class="tip-icon">${t.icon}</div>
            <div class="tip-content">
                <div class="tip-title">${t.title}</div>
                <div class="tip-txt">${t.txt}</div>
            </div>
        </div>
    `).join('');
}

function renderTrendChart() {
    const ctx = $('trendChart');
    if (!ctx) return;
    
    if (state.trendChart) state.trendChart.destroy();
    
    const data = [];
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const trans = state.transactions.filter(t => {
            const td = new Date(t.date);
            return td.getMonth() === d.getMonth() && td.getFullYear() === d.getFullYear();
        });
        let inc = 0, exp = 0;
        trans.forEach(t => { if (t.type === 'income') inc += t.amount; else if (t.type === 'expense') exp += t.amount; });
        data.push({ m: months[d.getMonth()].substring(0, 3), inc, exp });
    }
    
    state.trendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.m),
            datasets: [
                { label: 'Venituri', data: data.map(d => d.inc), borderColor: '#00d4aa', backgroundColor: 'rgba(0,212,170,0.1)', fill: true, tension: 0.4 },
                { label: 'Cheltuieli', data: data.map(d => d.exp), borderColor: '#ff4757', backgroundColor: 'rgba(255,71,87,0.1)', fill: true, tension: 0.4 }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#555' } },
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#555' } }
            }
        }
    });
}

// ═══════════════════════════════════════════════════════════════
// 🧠 GENIUS ANALYTICS UI - Advanced Financial Dashboard
// ═══════════════════════════════════════════════════════════════

function renderGeniusDashboard() {
    renderCoachTips();
    renderAnomalyAlerts();
    renderPredictionsWidget();
}

function renderCoachTips() {
    const container = $('coachTips');
    if (!container) return;
    
    const tips = GeniusEngine.getDailyCoachTip();
    if (!tips || tips.length === 0) {
        container.innerHTML = '<div class="empty-tip">Continuă să adaugi tranzacții pentru sfaturi!</div>';
        return;
    }
    
    container.innerHTML = tips.map(tip => `
        <div class="coach-tip">
            <div class="tip-icon">${tip.icon}</div>
            <div class="tip-content">
                <div class="tip-title">${tip.title}</div>
                <div class="tip-message">${tip.message}</div>
                <div class="tip-action">${tip.action}</div>
            </div>
        </div>
    `).join('');
}

function renderAnomalyAlerts() {
    const container = $('anomalyAlerts');
    if (!container) return;
    
    const anomalies = GeniusEngine.detectAnomalies();
    if (!anomalies || anomalies.length === 0) {
        container.classList.add('hide');
        return;
    }
    
    container.classList.remove('hide');
    container.innerHTML = `
        <div class="anomaly-header">Alerte (${anomalies.length})</div>
        ${anomalies.slice(0, 3).map(a => `
            <div class="anomaly-item ${a.severity}">
                <span class="anomaly-icon">${a.icon}</span>
                <div class="anomaly-content">
                    <div class="anomaly-title">${a.title}</div>
                    <div class="anomaly-msg">${a.message}</div>
                </div>
            </div>
        `).join('')}
        ${anomalies.length > 3 ? `<button class="see-all-btn" onclick="nav('anomalies')">Vezi toate</button>` : ''}
    `;
}

function renderPredictionsWidget() {
    const container = $('predictionsWidget');
    if (!container) return;
    
    const pred = GeniusEngine.predictSpending();
    if (!pred) {
        container.innerHTML = '';
        return;
    }
    
    const icon = pred.trendDirection === 'up' ? '📈' : pred.trendDirection === 'down' ? '📉' : '➡️';
    container.innerHTML = `
        <div class="pred-widget">
            <div class="pred-widget-header">🔮 Predicție</div>
            <div class="pred-widget-value">${pred.nextMonth.expense.toLocaleString()} ${state.currency}</div>
            <div class="pred-widget-trend">${icon} ${pred.trend > 0 ? '+' : ''}${pred.trend.toFixed(0)}%</div>
        </div>
    `;
}

function renderAllAnomalies() {
    const container = $('anomaliesList');
    if (!container) return;
    
    const anomalies = GeniusEngine.detectAnomalies();
    if (!anomalies || anomalies.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">✅</div><p>Nicio anomalie! Felicitări!</p></div>`;
        return;
    }
    
    container.innerHTML = anomalies.map(a => `
        <div class="anomaly-card ${a.severity}">
            <div class="anomaly-card-header">
                <span>${a.icon}</span>
                <span class="anomaly-card-title">${a.title}</span>
                <span class="severity-badge ${a.severity}">${a.severity === 'high' ? 'Urgent' : a.severity === 'medium' ? 'Atenție' : 'Info'}</span>
            </div>
            <div class="anomaly-card-msg">${a.message}</div>
            <div class="anomaly-card-tip">${a.suggestion}</div>
        </div>
    `).join('');
}

function renderPredictionsView() {
    const container = $('predictionsContent');
    if (!container) return;
    
    const pred = GeniusEngine.predictSpending();
    if (!pred) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">📊</div><p>Adaugă cel puțin 5 tranzacții</p></div>`;
        return;
    }
    
    const cats = pred.categoryPredictions || {};
    const sortedCats = Object.entries(cats).sort((a, b) => b[1].predicted - a[1].predicted).slice(0, 8);
    
    container.innerHTML = `
        <div class="pred-main">
            <div class="pred-main-title">🔮 Predicție Luna Viitoare</div>
            <div class="pred-main-grid">
                <div class="pred-main-item">
                    <div class="pred-label">Cheltuieli</div>
                    <div class="pred-value red">${pred.nextMonth.expense.toLocaleString()} ${state.currency}</div>
                </div>
                <div class="pred-main-item">
                    <div class="pred-label">Venituri</div>
                    <div class="pred-value grn">${pred.nextMonth.income.toLocaleString()} ${state.currency}</div>
                </div>
                <div class="pred-main-item">
                    <div class="pred-label">Economii</div>
                    <div class="pred-value ${pred.nextMonth.savings >= 0 ? 'grn' : 'red'}">${pred.nextMonth.savings.toLocaleString()} ${state.currency}</div>
                </div>
            </div>
            <div class="pred-confidence">
                <div class="pred-conf-bar"><div class="pred-conf-fill" style="width:${pred.confidence}%"></div></div>
                <span>${pred.confidence.toFixed(0)}% încredere</span>
            </div>
        </div>
        
        <h3 class="section-title">Pe categorii</h3>
        <div class="pred-cats">
            ${sortedCats.map(([catId, data]) => {
                const cat = findCat('expense', catId);
                const icon = data.trend > 5 ? '📈' : data.trend < -5 ? '📉' : '➡️';
                return `
                    <div class="pred-cat">
                        <span class="pred-cat-icon">${cat?.icon || '📦'}</span>
                        <div class="pred-cat-info">
                            <div class="pred-cat-name">${cat?.name || catId}</div>
                            <div class="pred-cat-trend">${icon} ${data.trend > 0 ? '+' : ''}${data.trend.toFixed(0)}%</div>
                        </div>
                        <div class="pred-cat-value">${data.predicted.toLocaleString()} ${state.currency}</div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderTimeAnalysis() {
    const container = $('timeAnalysisContent');
    if (!container) return;
    
    const analysis = GeniusEngine.analyzeTimePatterns();
    if (!analysis) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">⏰</div><p>Adaugă mai multe tranzacții</p></div>`;
        return;
    }
    
    const maxDay = Math.max(...analysis.byDay.map(d => d.total));
    const dayNames = ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sâ'];
    
    container.innerHTML = `
        <h3 class="section-title">📅 Cheltuieli pe zile</h3>
        <div class="day-chart">
            ${analysis.byDay.sort((a, b) => a.day - b.day).map(d => `
                <div class="day-bar">
                    <div class="day-bar-fill" style="height:${maxDay > 0 ? (d.total / maxDay * 100) : 0}%"></div>
                    <div class="day-bar-label">${dayNames[d.day]}</div>
                </div>
            `).join('')}
        </div>
        
        <div class="time-insights">
            <div class="time-insight high">
                <span class="time-insight-icon">🔥</span>
                <div>
                    <div class="time-insight-title">Cea mai scumpă zi</div>
                    <div class="time-insight-value">${analysis.insights.highestDay.name}</div>
                </div>
            </div>
            <div class="time-insight low">
                <span class="time-insight-icon">💚</span>
                <div>
                    <div class="time-insight-title">Cea mai ieftină zi</div>
                    <div class="time-insight-value">${analysis.insights.lowestDay.name}</div>
                </div>
            </div>
            <div class="time-insight">
                <span class="time-insight-icon">📊</span>
                <div>
                    <div class="time-insight-title">Weekend vs Weekday</div>
                    <div class="time-insight-value">${analysis.insights.weekendVsWeekday.ratio}%</div>
                </div>
            </div>
        </div>
    `;
}

function renderMerchantAnalytics() {
    const container = $('merchantContent');
    if (!container) return;
    
    const analysis = GeniusEngine.analyzeMerchants();
    if (!analysis) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">🏪</div><p>Adaugă tranzacții cu subcategorii</p></div>`;
        return;
    }
    
    container.innerHTML = `
        <div class="merchant-stats">
            <div class="merchant-stat">
                <div class="merchant-stat-val">${analysis.totalMerchants}</div>
                <div class="merchant-stat-lbl">Magazine</div>
            </div>
            <div class="merchant-stat">
                <div class="merchant-stat-val">${analysis.insights.totalFromTop10.toLocaleString()}</div>
                <div class="merchant-stat-lbl">${state.currency} Top 10</div>
            </div>
        </div>
        
        <h3 class="section-title">Top 10</h3>
        <div class="merchant-list">
            ${analysis.top10.map((m, i) => `
                <div class="merchant-item">
                    <span class="merchant-rank">#${i + 1}</span>
                    <span class="merchant-icon">${m.categoryInfo?.icon || '🏪'}</span>
                    <div class="merchant-info">
                        <div class="merchant-name">${m.name}</div>
                        <div class="merchant-meta">${m.count} tranzacții</div>
                    </div>
                    <div class="merchant-total">${m.total.toLocaleString()}</div>
                </div>
            `).join('')}
        </div>
        
        ${analysis.potentialSavings.length > 0 ? `
            <h3 class="section-title">Economii potențiale</h3>
            ${analysis.potentialSavings.map(m => `
                <div class="savings-tip">
                    <span>${m.categoryInfo?.icon || '💰'}</span>
                    <div>
                        <div>${m.name}</div>
                        <div class="savings-tip-val grn">+${m.savingsPotential.toLocaleString()} ${state.currency}</div>
                    </div>
                </div>
            `).join('')}
        ` : ''}
    `;
}

function renderSmartBudgets() {
    const container = $('smartBudgetsContent');
    if (!container) return;
    
    const result = GeniusEngine.generateSmartBudgets();
    if (!result || result.budgets.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">📊</div><p>Adaugă tranzacții pentru bugete AI</p></div>`;
        return;
    }
    
    container.innerHTML = `
        <div class="smart-budget-header">
            <div class="smart-budget-title">🤖 Bugete recomandate de AI</div>
            <div class="smart-budget-summary">
                <span>Total: ${result.summary.totalBudgeted.toLocaleString()} ${state.currency}</span>
                <span>Economii: ${result.summary.targetSavings.toLocaleString()} ${state.currency}</span>
            </div>
        </div>
        
        <div class="smart-budget-list">
            ${result.budgets.map(b => `
                <div class="smart-budget-item ${b.priority}">
                    <span class="smart-budget-icon">${b.icon}</span>
                    <div class="smart-budget-info">
                        <div class="smart-budget-name">${b.categoryName}</div>
                        <div class="smart-budget-trend">${b.trendDirection === 'up' ? '📈' : b.trendDirection === 'down' ? '📉' : '➡️'} ${b.trend > 0 ? '+' : ''}${b.trend.toFixed(0)}%</div>
                    </div>
                    <div class="smart-budget-value">${b.recommended.toLocaleString()} ${state.currency}</div>
                    <button class="smart-budget-btn" onclick="applySmartBudget('${b.category}', ${b.recommended})">✓</button>
                </div>
            `).join('')}
        </div>
        
        <button class="apply-all-btn" onclick="applyAllSmartBudgets()">✨ Aplică toate</button>
    `;
}

async function applySmartBudget(category, amount) {
    if (!state.user) return;
    const existing = state.budgets.find(b => b.category === category);
    if (existing) {
        existing.limit = amount;
        await db.collection('users').doc(state.user.uid).collection('budgets').doc(existing.id).update({ limit: amount });
    } else {
        const doc = await db.collection('users').doc(state.user.uid).collection('budgets').add({
            category, limit: amount, createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        state.budgets.push({ id: doc.id, category, limit: amount });
    }
    toast('Buget aplicat!', 'success');
    renderSmartBudgets();
}

async function applyAllSmartBudgets() {
    const result = GeniusEngine.generateSmartBudgets();
    if (!result) return;
    for (const b of result.budgets) await applySmartBudget(b.category, b.recommended);
    toast('Toate bugetele aplicate!', 'success');
}

function renderSmartGoals() {
    const container = $('smartGoalsContent');
    if (!container) return;
    
    const goals = GeniusEngine.suggestSmartGoals();
    if (!goals || goals.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">🎯</div><p>Adaugă tranzacții pentru sugestii</p></div>`;
        return;
    }
    
    container.innerHTML = `
        <div class="smart-goals-header">🤖 Obiective sugerate de AI</div>
        <div class="smart-goals-list">
            ${goals.map(g => `
                <div class="smart-goal ${g.priority}">
                    <span class="smart-goal-icon">${g.icon}</span>
                    <div class="smart-goal-info">
                        <div class="smart-goal-name">${g.name}</div>
                        <div class="smart-goal-target">${g.target.toLocaleString()} ${state.currency}</div>
                        <div class="smart-goal-reason">${g.reason}</div>
                        <div class="smart-goal-time">~${g.monthly.toLocaleString()}/lună · ${g.months} luni</div>
                    </div>
                    <button class="smart-goal-btn" onclick="addSmartGoal('${g.name}', ${g.target})">+</button>
                </div>
            `).join('')}
        </div>
    `;
}

async function addSmartGoal(name, target) {
    if (!state.user) return;
    const doc = await db.collection('users').doc(state.user.uid).collection('goals').add({
        name, target, current: 0, createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    state.goals.push({ id: doc.id, name, target, current: 0 });
    toast('Obiectiv adăugat!', 'success');
    renderSmartGoals();
    renderGoals();
}

function openWhatIfSimulator() {
    openModal('whatIfModal');
    updateWhatIfSimulation();
}

// 💪 HEALTH SCORE VIEW
function renderHealthScore() {
    const container = $('healthScoreContent');
    if (!container) return;
    
    const health = GeniusEngine.calculateHealthScore();
    if (!health) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">💪</div><p>Adaugă tranzacții pentru scor</p></div>`;
        return;
    }
    
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (health.score / 100) * circumference;
    
    container.innerHTML = `
        <div class="health-main">
            <div class="health-ring">
                <svg width="120" height="120">
                    <circle class="health-ring-bg" cx="60" cy="60" r="45"></circle>
                    <circle class="health-ring-progress" cx="60" cy="60" r="45" 
                        stroke="${health.gradeColor}"
                        stroke-dasharray="${circumference}"
                        stroke-dashoffset="${offset}">
                    </circle>
                </svg>
                <div class="health-ring-text">
                    <span class="health-score" style="color: ${health.gradeColor}">${health.score}</span>
                </div>
            </div>
            <div class="health-grade" style="color: ${health.gradeColor}">${health.grade}</div>
            <div class="health-message">${health.message}</div>
        </div>
        
        <h3 class="section-title">Factori de evaluare</h3>
        <div class="health-factors">
            ${health.factors.map(f => `
                <div class="health-factor ${f.status}">
                    <span class="health-factor-icon">${f.icon}</span>
                    <div class="health-factor-info">
                        <div class="health-factor-name">${f.name}</div>
                        <div class="health-factor-bar">
                            <div class="health-factor-fill" style="width: ${f.score / 25 * 100}%"></div>
                        </div>
                    </div>
                    <span class="health-factor-score">+${f.score}</span>
                </div>
            `).join('')}
        </div>
        
        <div class="health-tip">
            Îmbunătățește factorii cu scor mic pentru a crește scorul general!
        </div>
    `;
}

// INVESTMENT READINESS VIEW
function renderInvestmentReadiness() {
    const container = $('investmentContent');
    if (!container) return;
    
    const readiness = GeniusEngine.checkInvestmentReadiness();
    if (!readiness) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">📈</div><p>Adaugă date pentru analiză</p></div>`;
        return;
    }
    
    container.innerHTML = `
        <div class="invest-main ${readiness.ready ? 'ready' : 'not-ready'}">
            <div class="invest-status-icon">${readiness.ready ? '✅' : '⏳'}</div>
            <div class="invest-status-title">${readiness.ready ? 'Ești pregătit să investești!' : 'Mai ai câțiva pași'}</div>
            <div class="invest-status-score">${readiness.readinessScore}% pregătit</div>
            ${readiness.ready ? `<div class="invest-amount">Poți investi ~${readiness.investableAmount} ${state.currency}/lună</div>` : ''}
        </div>
        
        <h3 class="section-title">✓ Checklist pregătire</h3>
        <div class="invest-checks">
            ${readiness.checks.map(c => `
                <div class="invest-check ${c.passed ? 'passed' : 'pending'}">
                    <span class="invest-check-icon">${c.icon}</span>
                    <div class="invest-check-info">
                        <div class="invest-check-name">${c.name}</div>
                        <div class="invest-check-note">${c.note}</div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        <h3 class="section-title">📝 Următorii pași</h3>
        <div class="invest-steps">
            ${readiness.nextSteps.map((step, i) => `
                <div class="invest-step">
                    <span class="invest-step-num">${i + 1}</span>
                    <span class="invest-step-text">${step}</span>
                </div>
            `).join('')}
        </div>
        
        <div class="invest-disclaimer">
            Aceasta nu este consiliere financiară. Consultă un specialist înainte de a investi.
        </div>
    `;
}

// RECOMMENDATIONS VIEW
function renderRecommendations() {
    const container = $('recommendationsContent');
    if (!container) return;
    
    const recs = GeniusEngine.getPersonalizedRecommendations();
    if (!recs || recs.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">✨</div><p>Totul arată bine! Nicio recomandare urgentă.</p></div>`;
        return;
    }
    
    container.innerHTML = `
        <div class="recs-header">
            <span class="recs-icon">🎯</span>
            <span class="recs-title">Recomandări personalizate</span>
        </div>
        <div class="recs-list">
            ${recs.map(r => `
                <div class="rec-card ${r.impact}">
                    <div class="rec-priority">${r.priority === 1 ? '🔴' : r.priority === 2 ? '🟡' : '🟢'}</div>
                    <div class="rec-icon">${r.icon}</div>
                    <div class="rec-content">
                        <div class="rec-title">${r.title}</div>
                        <div class="rec-desc">${r.description}</div>
                        <div class="rec-action">👉 ${r.action}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// VELOCITY WIDGET (for home)
function renderVelocityWidget() {
    const container = $('velocityWidget');
    if (!container) return;
    
    const velocity = GeniusEngine.getSpendingVelocity();
    if (!velocity) return;
    
    const statusColors = { under: '#10b981', 'on-track': '#06b6d4', over: '#ef4444' };
    const statusIcons = { under: '🎉', 'on-track': '👍', over: '⚠️' };
    
    container.innerHTML = `
        <div class="velocity-widget" style="border-color: ${statusColors[velocity.status]}">
            <div class="velocity-header">
                <span>${statusIcons[velocity.status]}</span>
                <span class="velocity-pct" style="color: ${statusColors[velocity.status]}">${velocity.velocity}%</span>
            </div>
            <div class="velocity-msg">${velocity.message}</div>
            <div class="velocity-detail">
                ${velocity.dailyBudget > 0 ? `Budget zilnic rămas: ${velocity.dailyBudget} ${state.currency}` : ''}
            </div>
        </div>
    `;
}

function updateWhatIfSimulation() {
    const subCut = parseInt($('simSubCut')?.value) || 0;
    const foodCut = parseInt($('simFoodCut')?.value) || 0;
    const entCut = parseInt($('simEntCut')?.value) || 0;
    const transportCut = parseInt($('simTransportCut')?.value) || 0;
    const extraIncome = parseInt($('simExtraIncome')?.value) || 0;
    
    if ($('simSubCutVal')) $('simSubCutVal').textContent = subCut + '%';
    if ($('simFoodCutVal')) $('simFoodCutVal').textContent = foodCut + '%';
    if ($('simEntCutVal')) $('simEntCutVal').textContent = entCut + '%';
    if ($('simTransportCutVal')) $('simTransportCutVal').textContent = transportCut + '%';
    if ($('simExtraIncomeVal')) $('simExtraIncomeVal').textContent = extraIncome.toLocaleString() + ' ' + state.currency;
    
    const result = GeniusEngine.simulateScenario({
        cutSubscription: subCut,
        reduceFoodDelivery: foodCut,
        reduceEntertainment: entCut,
        reduceTransport: transportCut,
        additionalIncome: extraIncome
    });
    
    const container = $('whatIfResults');
    if (!result || !container) return;
    
    container.innerHTML = `
        <div class="whatif-compare">
            <div class="whatif-box">
                <div class="whatif-box-label">Acum</div>
                <div class="whatif-box-value">${result.current.savings.toLocaleString()}</div>
                <div class="whatif-box-rate">${result.current.savingsRate.toFixed(1)}%</div>
            </div>
            <div class="whatif-arrow">→</div>
            <div class="whatif-box ${result.simulated.savings > result.current.savings ? 'positive' : ''}">
                <div class="whatif-box-label">După</div>
                <div class="whatif-box-value">${result.simulated.savings.toLocaleString()}</div>
                <div class="whatif-box-rate">${result.simulated.savingsRate.toFixed(1)}%</div>
            </div>
        </div>
        
        <div class="whatif-impact">
            <div class="whatif-impact-row ${result.totalMonthlyImpact >= 0 ? 'positive' : ''}">
                <span>Impact lunar:</span>
                <span>${result.totalMonthlyImpact >= 0 ? '+' : ''}${result.totalMonthlyImpact.toLocaleString()} ${state.currency}</span>
            </div>
            <div class="whatif-impact-row ${result.totalYearlyImpact >= 0 ? 'positive' : ''}">
                <span>Impact anual:</span>
                <span>${result.totalYearlyImpact >= 0 ? '+' : ''}${result.totalYearlyImpact.toLocaleString()} ${state.currency}</span>
            </div>
        </div>
        
        ${result.fireImpact && result.fireImpact.yearsSaved > 0 ? `
            <div class="whatif-fire">
                Ajungi la FIRE cu <strong>${result.fireImpact.yearsSaved.toFixed(1)} ani</strong> mai devreme!
            </div>
        ` : ''}
    `;
}

// ═══════════════════════════════════════════
// AI
// ═══════════════════════════════════════════
function askAI(q) {
    const input = $('aiInput');
    if (input) input.value = q;
    sendAI();
}

// ═══════════════════════════════════════════
// GENIUS AI - CONSILIER FINANCIAR PERSONAL
// ═══════════════════════════════════════════

function buildFullFinancialContext() {
    // Safe helper for numbers
    const safeNum = (n) => (n === undefined || n === null || isNaN(n)) ? 0 : n;
    const safeFmt = (n) => safeNum(n).toLocaleString('ro-RO');
    
    // === TRANZACȚII LUNA CURENTĂ ===
    const monthTx = getMonthTx() || [];
    const monthIncome = monthTx.filter(t => t.type === 'income').reduce((s, t) => s + safeNum(t.amount), 0);
    const monthExpense = monthTx.filter(t => t.type === 'expense').reduce((s, t) => s + safeNum(t.amount), 0);
    const monthBalance = monthIncome - monthExpense;
    
    // === TRANZACȚII LUNA TRECUTĂ ===
    const lastMonth = state.month === 0 ? 11 : state.month - 1;
    const lastYear = state.month === 0 ? state.year - 1 : state.year;
    const allTx = state.transactions || [];
    const lastMonthTx = allTx.filter(t => {
        const d = new Date(t.date);
        return d.getMonth() === lastMonth && d.getFullYear() === lastYear;
    });
    const lastMonthExpense = lastMonthTx.filter(t => t.type === 'expense').reduce((s, t) => s + safeNum(t.amount), 0);
    const lastMonthIncome = lastMonthTx.filter(t => t.type === 'income').reduce((s, t) => s + safeNum(t.amount), 0);
    
    // === ANALIZĂ PE CATEGORII ===
    const categoryBreakdown = {};
    monthTx.filter(t => t.type === 'expense').forEach(t => {
        const cat = findCat('expense', t.category);
        const catName = cat?.name || t.category || 'Altele';
        if (!categoryBreakdown[catName]) categoryBreakdown[catName] = { total: 0, count: 0 };
        categoryBreakdown[catName].total += safeNum(t.amount);
        categoryBreakdown[catName].count++;
    });
    
    // Top categorii
    const topCategories = Object.entries(categoryBreakdown)
        .sort((a, b) => b[1].total - a[1].total)
        .slice(0, 5)
        .map(([name, data]) => `${name}: ${safeFmt(data.total)} ${state.currency || 'RON'} (${data.count} tranzacții)`);
    
    // === TENDINȚE PE 6 LUNI ===
    const monthlyTrends = [];
    for (let i = 5; i >= 0; i--) {
        const m = new Date();
        m.setMonth(m.getMonth() - i);
        const mTx = allTx.filter(t => {
            const d = new Date(t.date);
            return d.getMonth() === m.getMonth() && d.getFullYear() === m.getFullYear();
        });
        const mInc = mTx.filter(t => t.type === 'income').reduce((s, t) => s + safeNum(t.amount), 0);
        const mExp = mTx.filter(t => t.type === 'expense').reduce((s, t) => s + safeNum(t.amount), 0);
        monthlyTrends.push({
            month: months[m.getMonth()] || 'N/A',
            income: mInc,
            expense: mExp,
            savings: mInc - mExp,
            savingsRate: mInc > 0 ? ((mInc - mExp) / mInc * 100).toFixed(1) : '0'
        });
    }
    
    // === ZIUA DIN SĂPTĂMÂNĂ ===
    const daySpending = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    allTx.filter(t => t.type === 'expense').forEach(t => {
        const day = new Date(t.date).getDay();
        daySpending[day] += safeNum(t.amount);
    });
    const dayNames = ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'];
    const sortedDays = Object.entries(daySpending).sort((a, b) => b[1] - a[1]);
    const maxSpendingDay = sortedDays[0] || ['0', 0];
    
    // === OBIECTIVE ===
    const goals = state.goals || [];
    const goalsStatus = goals.map(g => ({
        name: g.name || 'Obiectiv',
        target: safeNum(g.target),
        current: safeNum(g.current),
        progress: g.target > 0 ? ((safeNum(g.current) / safeNum(g.target)) * 100).toFixed(1) : '0',
        remaining: safeNum(g.target) - safeNum(g.current)
    }));
    
    // === BUGETE ===
    const budgets = state.budgets || [];
    const budgetStatus = budgets.map(b => {
        const spent = monthTx.filter(t => t.type === 'expense' && t.category === b.category)
            .reduce((s, t) => s + safeNum(t.amount), 0);
        const limit = safeNum(b.limit) || 1;
        return {
            category: findCat('expense', b.category)?.name || b.category || 'Categorie',
            limit: limit,
            spent: spent,
            remaining: limit - spent,
            percentUsed: ((spent / limit) * 100).toFixed(1)
        };
    });
    
    // === DATORII ===
    const debts = state.debts || [];
    const debtsStatus = debts.map(d => ({
        name: d.name || 'Datorie',
        total: safeNum(d.amount),
        remaining: safeNum(d.remaining || d.amount),
        type: d.type || 'owed'
    }));
    const totalDebt = debtsStatus.filter(d => d.type === 'owed').reduce((s, d) => s + d.remaining, 0);
    const totalOwedToMe = debtsStatus.filter(d => d.type === 'lent').reduce((s, d) => s + d.remaining, 0);
    
    // === CONTURI ===
    const accounts = state.accounts || [];
    const accountsStatus = accounts.map(a => ({
        name: a.name || 'Cont',
        balance: safeNum(a.balance),
        type: a.type || 'checking'
    }));
    const totalAccounts = accountsStatus.reduce((s, a) => s + a.balance, 0);
    
    // === ABONAMENTE ===
    const subs = state.subscriptions || [];
    const subscriptionsTotal = subs.reduce((s, sub) => s + safeNum(sub.monthlyAvg), 0);
    
    // === PROVOCĂRI ACTIVE ===
    const challenges = state.challenges || [];
    const activeChallenges = challenges.map(c => {
        const tpl = (typeof challengeTemplates !== 'undefined' ? challengeTemplates : []).find(t => t.id === c.templateId);
        return {
            name: tpl?.name || c.name || 'Provocare',
            target: safeNum(c.target),
            saved: safeNum(c.saved),
            progress: c.target > 0 ? ((safeNum(c.saved) / safeNum(c.target)) * 100).toFixed(1) : '0'
        };
    });
    
    // === PREDICȚII ===
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const currentDay = new Date().getDate() || 1;
    const avgDailyExpense = monthExpense / currentDay;
    const predictedMonthExpense = avgDailyExpense * daysInMonth;
    const avgDailyIncome = monthIncome / currentDay;
    const predictedMonthIncome = avgDailyIncome * daysInMonth;
    
    // === FIRE METRICS ===
    const netWorth = safeNum(state.netWorth);
    const annualExpense = monthExpense * 12;
    const fireNumber = annualExpense * 25 || 1;
    const fireProgress = netWorth > 0 ? ((netWorth / fireNumber) * 100).toFixed(1) : '0';
    const savingsRate = safeNum(state.savingsRate);
    const yearsToFire = savingsRate > 0 && monthIncome > 0 ? 
        Math.log(1 + (fireNumber - netWorth) / (monthIncome * savingsRate / 100 * 12 || 1)) / Math.log(1.07) : 999;
    
    // === HEALTH SCORE ===
    let healthScore = 50;
    if (savingsRate >= 20) healthScore += 20;
    else if (savingsRate >= 10) healthScore += 10;
    if (monthBalance >= 0) healthScore += 10;
    if (safeNum(state.streak) >= 7) healthScore += 10;
    if (budgetStatus.length === 0 || budgetStatus.every(b => parseFloat(b.percentUsed) <= 100)) healthScore += 10;
    healthScore = Math.min(100, healthScore);
    
    const currency = state.currency || 'RON';
    
    // === BUILD CONTEXT STRING ===
    return `
PROFILUL FINANCIAR AL UTILIZATORULUI
=====================================

📅 LUNA CURENTĂ (${months[state.month] || 'N/A'} ${state.year}):
• Venituri: ${safeFmt(monthIncome)} ${currency}
• Cheltuieli: ${safeFmt(monthExpense)} ${currency}
• Balanță: ${monthBalance >= 0 ? '+' : ''}${safeFmt(monthBalance)} ${currency}
• Rată economisire: ${monthIncome > 0 ? ((monthBalance / monthIncome) * 100).toFixed(1) : 0}%

COMPARAȚIE CU LUNA TRECUTĂ:
• Cheltuieli luna trecută: ${safeFmt(lastMonthExpense)} ${currency}
• Venituri luna trecută: ${safeFmt(lastMonthIncome)} ${currency}

TOP CATEGORII CHELTUIELI:
${topCategories.length > 0 ? topCategories.join('\n') : '• Nicio cheltuială înregistrată'}

TENDINȚE 6 LUNI:
${monthlyTrends.map(m => `• ${m.month}: V:${safeFmt(m.income)}, C:${safeFmt(m.expense)}, E:${safeFmt(m.savings)}`).join('\n')}

📅 PATTERN ZILNIC:
• Ziua cu cele mai mari cheltuieli: ${dayNames[parseInt(maxSpendingDay[0])] || 'N/A'} (${safeFmt(maxSpendingDay[1])} ${currency})

OBIECTIVE (${goalsStatus.length}):
${goalsStatus.length > 0 ? goalsStatus.map(g => `• ${g.name}: ${safeFmt(g.current)}/${safeFmt(g.target)} ${currency} (${g.progress}%)`).join('\n') : '• Niciun obiectiv setat'}

BUGETE (${budgetStatus.length}):
${budgetStatus.length > 0 ? budgetStatus.map(b => `• ${b.category}: ${safeFmt(b.spent)}/${safeFmt(b.limit)} ${currency} (${b.percentUsed}%)`).join('\n') : '• Niciun buget setat'}

🏦 CONTURI: ${safeFmt(totalAccounts)} ${currency} total
${accountsStatus.length > 0 ? accountsStatus.map(a => `• ${a.name}: ${safeFmt(a.balance)} ${currency}`).join('\n') : '• Niciun cont'}

💳 DATORII: ${safeFmt(totalDebt)} ${currency} de plătit, ${safeFmt(totalOwedToMe)} ${currency} de recuperat

ABONAMENTE: ~${safeFmt(subscriptionsTotal)} ${currency}/lună

FIRE:
• Patrimoniu: ${safeFmt(netWorth)} ${currency}
• Număr FIRE necesar: ${safeFmt(fireNumber)} ${currency}
• Progres: ${fireProgress}%

💪 HEALTH SCORE: ${healthScore}/100
• Streak: ${safeNum(state.streak)} zile
• Total tranzacții: ${allTx.length}
`;
}


// ═══════════════════════════════════════════════════════════════════════════════
// 🧠 FINLEY AI ENGINE - Advanced Financial AI with Function Calling
// ═══════════════════════════════════════════════════════════════════════════════

const FinleyAI = {
    // Conversation history for multi-turn
    conversationHistory: [],
    maxHistoryLength: 20,
    
    // ═══════════════════════════════════════════════════════════════
    // 📋 FUNCTION DECLARATIONS - What Finley can DO
    // ═══════════════════════════════════════════════════════════════
    functionDeclarations: [
        // TRANSACTION MANAGEMENT
        {
            name: "add_transaction",
            description: "Adaugă o tranzacție nouă (cheltuială sau venit). Folosește când utilizatorul vrea să înregistreze o cheltuială sau un venit.",
            parameters: {
                type: "object",
                properties: {
                    type: { 
                        type: "string", 
                        enum: ["expense", "income"],
                        description: "Tipul tranzacției: 'expense' pentru cheltuială, 'income' pentru venit"
                    },
                    amount: { 
                        type: "number", 
                        description: "Suma în RON (sau moneda curentă)"
                    },
                    category: { 
                        type: "string", 
                        description: "Categoria (ex: food, transport, housing, health, shopping, entertainment, subscriptions, salary, freelance)"
                    },
                    subcategory: { 
                        type: "string", 
                        description: "Subcategoria sau numele comerciantului (ex: Lidl, KFC, Uber, Netflix)"
                    },
                    date: { 
                        type: "string", 
                        description: "Data în format YYYY-MM-DD. Folosește data de azi dacă nu e specificată."
                    },
                    note: { 
                        type: "string", 
                        description: "Notă opțională"
                    }
                },
                required: ["type", "amount", "category"]
            }
        },
        {
            name: "search_transactions",
            description: "Caută tranzacții după criterii. Folosește pentru a găsi cheltuieli specifice.",
            parameters: {
                type: "object",
                properties: {
                    query: { type: "string", description: "Text de căutat în subcategorie sau notă" },
                    category: { type: "string", description: "Filtrare după categorie" },
                    type: { type: "string", enum: ["expense", "income", "all"], description: "Tip tranzacție" },
                    minAmount: { type: "number", description: "Suma minimă" },
                    maxAmount: { type: "number", description: "Suma maximă" },
                    startDate: { type: "string", description: "Data start (YYYY-MM-DD)" },
                    endDate: { type: "string", description: "Data end (YYYY-MM-DD)" },
                    limit: { type: "integer", description: "Număr maxim de rezultate (default 10)" }
                }
            }
        },
        {
            name: "delete_transaction",
            description: "Șterge o tranzacție după ID. Întreabă mai întâi pentru confirmare.",
            parameters: {
                type: "object",
                properties: {
                    transactionId: { type: "string", description: "ID-ul tranzacției de șters" }
                },
                required: ["transactionId"]
            }
        },
        
        // BUDGET MANAGEMENT
        {
            name: "set_budget",
            description: "Setează sau actualizează un buget pentru o categorie.",
            parameters: {
                type: "object",
                properties: {
                    category: { type: "string", description: "Categoria pentru buget (ex: food, transport, entertainment)" },
                    limit: { type: "number", description: "Limita bugetului în RON" }
                },
                required: ["category", "limit"]
            }
        },
        {
            name: "get_budget_status",
            description: "Verifică statusul bugetelor - cât s-a cheltuit vs limită.",
            parameters: {
                type: "object",
                properties: {
                    category: { type: "string", description: "Categoria specifică (opțional, dacă lipsește returnează toate)" }
                }
            }
        },
        
        // GOALS MANAGEMENT
        {
            name: "create_goal",
            description: "Creează un obiectiv financiar nou.",
            parameters: {
                type: "object",
                properties: {
                    name: { type: "string", description: "Numele obiectivului" },
                    target: { type: "number", description: "Suma țintă în RON" },
                    deadline: { type: "string", description: "Data limită (YYYY-MM-DD)" },
                    current: { type: "number", description: "Suma deja economisită (default 0)" }
                },
                required: ["name", "target"]
            }
        },
        {
            name: "update_goal_progress",
            description: "Actualizează progresul unui obiectiv.",
            parameters: {
                type: "object",
                properties: {
                    goalId: { type: "string", description: "ID-ul obiectivului" },
                    amount: { type: "number", description: "Suma nouă economisită sau suma de adăugat" },
                    isAddition: { type: "boolean", description: "True = adaugă la suma curentă, False = setează suma nouă" }
                },
                required: ["goalId", "amount"]
            }
        },
        
        // 🔄 RECURRING TRANSACTIONS
        {
            name: "add_recurring",
            description: "Adaugă o tranzacție recurentă (salariu, chirie, abonament, etc).",
            parameters: {
                type: "object",
                properties: {
                    type: { type: "string", enum: ["expense", "income"], description: "Tip tranzacție" },
                    amount: { type: "number", description: "Suma" },
                    category: { type: "string", description: "Categoria" },
                    frequency: { type: "string", enum: ["daily", "weekly", "monthly", "yearly"], description: "Frecvența" },
                    nextDate: { type: "string", description: "Data următoare (YYYY-MM-DD)" },
                    note: { type: "string", description: "Descriere (ex: Chirie apartament)" }
                },
                required: ["type", "amount", "category", "frequency"]
            }
        },
        
        // ANALYSIS & INSIGHTS
        {
            name: "get_spending_analysis",
            description: "Analizează cheltuielile pe o perioadă. Returnează breakdown pe categorii, trends, comparații.",
            parameters: {
                type: "object",
                properties: {
                    period: { 
                        type: "string", 
                        enum: ["today", "week", "month", "last_month", "3months", "6months", "year"],
                        description: "Perioada de analizat"
                    },
                    groupBy: { 
                        type: "string", 
                        enum: ["category", "day", "week", "month"],
                        description: "Cum să grupeze datele"
                    }
                },
                required: ["period"]
            }
        },
        {
            name: "get_predictions",
            description: "Obține predicții pentru cheltuieli viitoare bazate pe istoric.",
            parameters: {
                type: "object",
                properties: {
                    months: { type: "integer", description: "Câte luni în viitor să prezică (1-6)" }
                }
            }
        },
        {
            name: "get_anomalies",
            description: "Detectează anomalii și cheltuieli neobișnuite.",
            parameters: {
                type: "object",
                properties: {}
            }
        },
        {
            name: "get_savings_opportunities",
            description: "Identifică oportunități de economisire bazate pe pattern-uri de cheltuieli.",
            parameters: {
                type: "object",
                properties: {}
            }
        },
        {
            name: "compare_periods",
            description: "Compară cheltuielile între două perioade.",
            parameters: {
                type: "object",
                properties: {
                    period1: { type: "string", description: "Prima perioadă (ex: 'luna aceasta', '2024-01')" },
                    period2: { type: "string", description: "A doua perioadă (ex: 'luna trecută', '2023-12')" }
                },
                required: ["period1", "period2"]
            }
        },
        
        // CHALLENGES
        {
            name: "start_challenge",
            description: "Începe o provocare de economisire.",
            parameters: {
                type: "object",
                properties: {
                    challengeType: { 
                        type: "string", 
                        description: "Tipul provocării: 52week, noSpend, noDelivery, noCoffee, cashOnly, etc."
                    }
                },
                required: ["challengeType"]
            }
        },
        {
            name: "get_challenge_status",
            description: "Verifică statusul provocărilor active.",
            parameters: {
                type: "object",
                properties: {}
            }
        },
        
        // 💳 ACCOUNTS & DEBTS
        {
            name: "add_account",
            description: "Adaugă un cont nou (card, cont economii, cash, etc).",
            parameters: {
                type: "object",
                properties: {
                    name: { type: "string", description: "Numele contului" },
                    balance: { type: "number", description: "Soldul curent" },
                    type: { type: "string", enum: ["checking", "savings", "credit", "cash", "investment"], description: "Tipul contului" }
                },
                required: ["name", "balance"]
            }
        },
        {
            name: "add_debt",
            description: "Adaugă o datorie (de plătit sau de recuperat).",
            parameters: {
                type: "object",
                properties: {
                    name: { type: "string", description: "Numele/descrierea datoriei" },
                    amount: { type: "number", description: "Suma totală" },
                    type: { type: "string", enum: ["owed", "lent"], description: "'owed' = de plătit, 'lent' = de recuperat" },
                    dueDate: { type: "string", description: "Data scadentă (opțional)" }
                },
                required: ["name", "amount", "type"]
            }
        },
        
        // 🔧 UTILITIES
        {
            name: "get_financial_health",
            description: "Calculează și explică scorul de sănătate financiară.",
            parameters: {
                type: "object",
                properties: {}
            }
        },
        {
            name: "calculate_fire",
            description: "Calculează progresul spre independența financiară (FIRE).",
            parameters: {
                type: "object",
                properties: {
                    monthlyExpense: { type: "number", description: "Cheltuieli lunare estimate pentru FIRE" },
                    currentNetWorth: { type: "number", description: "Patrimoniul curent" }
                }
            }
        },
        {
            name: "export_report",
            description: "Generează un raport financiar pentru o perioadă.",
            parameters: {
                type: "object",
                properties: {
                    period: { type: "string", enum: ["month", "quarter", "year"], description: "Perioada raportului" },
                    format: { type: "string", enum: ["summary", "detailed"], description: "Nivelul de detaliu" }
                },
                required: ["period"]
            }
        },
        
        // 🧭 NAVIGATION & UI
        {
            name: "navigate_to",
            description: "Navighează la o secțiune din aplicație. Folosește când utilizatorul vrea să vadă o secțiune specifică.",
            parameters: {
                type: "object",
                properties: {
                    section: { 
                        type: "string", 
                        enum: ["home", "transactions", "analytics", "budgets", "goals", "accounts", "debts", "recurring", "subscriptions", "challenges", "insights", "settings"],
                        description: "Secțiunea unde să navigheze"
                    }
                },
                required: ["section"]
            }
        },
        {
            name: "get_quick_stats",
            description: "Obține statistici rapide despre situația financiară curentă.",
            parameters: {
                type: "object",
                properties: {}
            }
        },
        {
            name: "list_recent_transactions",
            description: "Listează cele mai recente tranzacții.",
            parameters: {
                type: "object",
                properties: {
                    count: { type: "integer", description: "Numărul de tranzacții (default 5, max 20)" }
                }
            }
        },
        {
            name: "list_goals",
            description: "Listează toate obiectivele financiare și progresul lor.",
            parameters: {
                type: "object",
                properties: {}
            }
        },
        {
            name: "list_budgets",
            description: "Listează toate bugetele și statusul lor.",
            parameters: {
                type: "object",
                properties: {}
            }
        },
        {
            name: "add_reminder",
            description: "Adaugă un reminder pentru o plată sau acțiune.",
            parameters: {
                type: "object",
                properties: {
                    title: { type: "string", description: "Titlul reminderului" },
                    date: { type: "string", description: "Data (YYYY-MM-DD)" },
                    amount: { type: "number", description: "Suma asociată (opțional)" },
                    recurring: { type: "boolean", description: "Dacă se repetă lunar" }
                },
                required: ["title", "date"]
            }
        },
        {
            name: "suggest_savings",
            description: "Analizează și sugerează unde poate economisi utilizatorul.",
            parameters: {
                type: "object",
                properties: {}
            }
        },
        {
            name: "get_category_details",
            description: "Obține detalii despre cheltuielile dintr-o categorie specifică.",
            parameters: {
                type: "object",
                properties: {
                    category: { type: "string", description: "Categoria de analizat (food, transport, etc)" },
                    period: { type: "string", enum: ["week", "month", "3months"], description: "Perioada" }
                },
                required: ["category"]
            }
        }
    ],
    
    // ═══════════════════════════════════════════════════════════════
    // ⚡ FUNCTION EXECUTORS - Actually perform the actions
    // ═══════════════════════════════════════════════════════════════
    executors: {
        // Add Transaction
        add_transaction: async function(args) {
            const { type, amount, category, subcategory, date, note } = args;
            
            const data = {
                type: type || 'expense',
                amount: parseFloat(amount) || 0,
                category: category || 'other',
                subcategory: subcategory || '',
                date: date || new Date().toISOString().split('T')[0],
                note: note || '',
                tags: [],
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                addedByAI: true
            };
            
            try {
                const doc = await db.collection('users').doc(state.user.uid).collection('transactions').add(data);
                state.transactions.unshift({ id: doc.id, ...data });
                updateHome();
                
                const catInfo = findCat(type, category);
                return {
                    success: true,
                    message: `Am adăugat ${type === 'income' ? 'venitul' : 'cheltuiala'} de ${fmt(amount)} la ${catInfo?.name || category}${subcategory ? ` (${subcategory})` : ''}.`,
                    transactionId: doc.id,
                    data: data
                };
            } catch (err) {
                return { success: false, error: err.message };
            }
        },
        
        // Search Transactions
        search_transactions: function(args) {
            const { query, category, type, minAmount, maxAmount, startDate, endDate, limit = 10 } = args;
            
            let results = [...(state.transactions || [])];
            
            if (type && type !== 'all') {
                results = results.filter(t => t.type === type);
            }
            if (category) {
                results = results.filter(t => t.category === category || t.category?.includes(category));
            }
            if (query) {
                const q = query.toLowerCase();
                results = results.filter(t => 
                    (t.subcategory || '').toLowerCase().includes(q) ||
                    (t.note || '').toLowerCase().includes(q) ||
                    (t.category || '').toLowerCase().includes(q)
                );
            }
            if (minAmount !== undefined) {
                results = results.filter(t => t.amount >= minAmount);
            }
            if (maxAmount !== undefined) {
                results = results.filter(t => t.amount <= maxAmount);
            }
            if (startDate) {
                results = results.filter(t => t.date >= startDate);
            }
            if (endDate) {
                results = results.filter(t => t.date <= endDate);
            }
            
            results = results.slice(0, limit);
            
            const total = results.reduce((s, t) => s + (t.amount || 0), 0);
            
            return {
                success: true,
                count: results.length,
                total: total,
                transactions: results.map(t => ({
                    id: t.id,
                    type: t.type,
                    amount: t.amount,
                    category: findCat(t.type, t.category)?.name || t.category,
                    subcategory: t.subcategory,
                    date: t.date,
                    note: t.note
                }))
            };
        },
        
        // Delete Transaction
        delete_transaction: async function(args) {
            const { transactionId } = args;
            try {
                await db.collection('users').doc(state.user.uid).collection('transactions').doc(transactionId).delete();
                state.transactions = state.transactions.filter(t => t.id !== transactionId);
                updateHome();
                return { success: true, message: 'Tranzacția a fost ștearsă.' };
            } catch (err) {
                return { success: false, error: err.message };
            }
        },
        
        // Set Budget
        set_budget: async function(args) {
            const { category, limit } = args;
            
            const existingIdx = (state.budgets || []).findIndex(b => b.category === category);
            const data = {
                category: category,
                limit: parseFloat(limit) || 0
            };
            
            try {
                const ref = db.collection('users').doc(state.user.uid).collection('budgets');
                if (existingIdx >= 0) {
                    await ref.doc(state.budgets[existingIdx].id).update(data);
                    state.budgets[existingIdx] = { ...state.budgets[existingIdx], ...data };
                } else {
                    const doc = await ref.add(data);
                    state.budgets.push({ id: doc.id, ...data });
                }
                
                const catInfo = findCat('expense', category);
                return {
                    success: true,
                    message: `Am setat bugetul pentru ${catInfo?.name || category} la ${fmt(limit)}.`
                };
            } catch (err) {
                return { success: false, error: err.message };
            }
        },
        
        // Get Budget Status
        get_budget_status: function(args) {
            const { category } = args;
            const now = new Date();
            const monthTx = (state.transactions || []).filter(t => {
                const d = new Date(t.date);
                return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear() && t.type === 'expense';
            });
            
            let budgets = state.budgets || [];
            if (category) {
                budgets = budgets.filter(b => b.category === category);
            }
            
            const status = budgets.map(b => {
                const spent = monthTx.filter(t => t.category === b.category).reduce((s, t) => s + (t.amount || 0), 0);
                const catInfo = findCat('expense', b.category);
                return {
                    category: catInfo?.name || b.category,
                    limit: b.limit,
                    spent: spent,
                    remaining: b.limit - spent,
                    percentUsed: Math.round((spent / b.limit) * 100),
                    status: spent > b.limit ? '🔴 Depășit' : spent > b.limit * 0.8 ? '🟡 Aproape' : '🟢 OK'
                };
            });
            
            return { success: true, budgets: status };
        },
        
        // Create Goal
        create_goal: async function(args) {
            const { name, target, deadline, current = 0 } = args;
            
            const data = {
                name: name,
                target: parseFloat(target) || 0,
                current: parseFloat(current) || 0,
                deadline: deadline || null,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            
            try {
                const doc = await db.collection('users').doc(state.user.uid).collection('goals').add(data);
                state.goals.push({ id: doc.id, ...data });
                
                return {
                    success: true,
                    message: `Am creat obiectivul "${name}" cu ținta de ${fmt(target)}.`,
                    goalId: doc.id
                };
            } catch (err) {
                return { success: false, error: err.message };
            }
        },
        
        // Update Goal Progress
        update_goal_progress: async function(args) {
            const { goalId, amount, isAddition = true } = args;
            
            const goal = (state.goals || []).find(g => g.id === goalId);
            if (!goal) {
                return { success: false, error: 'Obiectivul nu a fost găsit.' };
            }
            
            const newAmount = isAddition ? (goal.current || 0) + amount : amount;
            
            try {
                await db.collection('users').doc(state.user.uid).collection('goals').doc(goalId).update({ current: newAmount });
                goal.current = newAmount;
                
                const progress = Math.round((newAmount / goal.target) * 100);
                return {
                    success: true,
                    message: `Am actualizat "${goal.name}": ${fmt(newAmount)} / ${fmt(goal.target)} (${progress}%)`,
                    progress: progress
                };
            } catch (err) {
                return { success: false, error: err.message };
            }
        },
        
        // Add Recurring
        add_recurring: async function(args) {
            const { type, amount, category, frequency, nextDate, note } = args;
            
            const data = {
                type: type,
                amount: parseFloat(amount) || 0,
                category: category,
                frequency: frequency,
                nextDate: nextDate || new Date().toISOString().split('T')[0],
                note: note || ''
            };
            
            try {
                const doc = await db.collection('users').doc(state.user.uid).collection('recurring').add(data);
                state.recurring.push({ id: doc.id, ...data });
                
                const freq = { daily: 'zilnic', weekly: 'săptămânal', monthly: 'lunar', yearly: 'anual' };
                return {
                    success: true,
                    message: `Am adăugat ${type === 'income' ? 'venitul' : 'cheltuiala'} recurent(ă) de ${fmt(amount)} ${freq[frequency]}.`
                };
            } catch (err) {
                return { success: false, error: err.message };
            }
        },
        
        // Get Spending Analysis
        get_spending_analysis: function(args) {
            const { period, groupBy = 'category' } = args;
            
            const now = new Date();
            let startDate, endDate = now;
            
            switch (period) {
                case 'today':
                    startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
                    break;
                case 'week':
                    startDate = new Date(now);
                    startDate.setDate(now.getDate() - 7);
                    break;
                case 'month':
                    startDate = new Date(now.getFullYear(), now.getMonth(), 1);
                    break;
                case 'last_month':
                    startDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
                    endDate = new Date(now.getFullYear(), now.getMonth(), 0);
                    break;
                case '3months':
                    startDate = new Date(now);
                    startDate.setMonth(now.getMonth() - 3);
                    break;
                case '6months':
                    startDate = new Date(now);
                    startDate.setMonth(now.getMonth() - 6);
                    break;
                case 'year':
                    startDate = new Date(now.getFullYear(), 0, 1);
                    break;
                default:
                    startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            }
            
            const expenses = (state.transactions || []).filter(t => {
                const d = new Date(t.date);
                return t.type === 'expense' && d >= startDate && d <= endDate;
            });
            
            const income = (state.transactions || []).filter(t => {
                const d = new Date(t.date);
                return t.type === 'income' && d >= startDate && d <= endDate;
            });
            
            const totalExpense = expenses.reduce((s, t) => s + (t.amount || 0), 0);
            const totalIncome = income.reduce((s, t) => s + (t.amount || 0), 0);
            
            // Group by category
            const byCategory = {};
            expenses.forEach(t => {
                const cat = t.category || 'other';
                if (!byCategory[cat]) byCategory[cat] = 0;
                byCategory[cat] += t.amount || 0;
            });
            
            const categoryBreakdown = Object.entries(byCategory)
                .map(([cat, amount]) => ({
                    category: findCat('expense', cat)?.name || cat,
                    amount: amount,
                    percent: Math.round((amount / totalExpense) * 100)
                }))
                .sort((a, b) => b.amount - a.amount);
            
            return {
                success: true,
                period: period,
                startDate: startDate.toISOString().split('T')[0],
                endDate: endDate.toISOString().split('T')[0],
                totalExpense: totalExpense,
                totalIncome: totalIncome,
                balance: totalIncome - totalExpense,
                transactionCount: expenses.length + income.length,
                categoryBreakdown: categoryBreakdown.slice(0, 10),
                topCategory: categoryBreakdown[0] || null,
                avgDailyExpense: Math.round(totalExpense / Math.max(1, Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24))))
            };
        },
        
        // Get Predictions
        get_predictions: function(args) {
            const predictions = GeniusEngine.predictSpending();
            if (!predictions) {
                return { success: false, error: 'Nu sunt suficiente date pentru predicții.' };
            }
            
            return {
                success: true,
                nextMonth: predictions.nextMonth,
                trend: predictions.trendDirection,
                trendPercent: Math.round(predictions.trend),
                confidence: Math.round(predictions.confidence),
                avgExpense: predictions.avgExpense,
                avgIncome: predictions.avgIncome,
                topCategoryPredictions: Object.entries(predictions.categoryPredictions || {})
                    .slice(0, 5)
                    .map(([cat, data]) => ({
                        category: findCat('expense', cat)?.name || cat,
                        predicted: data.predicted,
                        trend: data.trend > 0 ? '📈' : data.trend < 0 ? '📉' : '➡️'
                    }))
            };
        },
        
        // Get Anomalies
        get_anomalies: function() {
            const anomalies = GeniusEngine.detectAnomalies();
            return {
                success: true,
                count: anomalies.length,
                anomalies: anomalies.map(a => ({
                    type: a.type,
                    severity: a.severity,
                    title: a.title,
                    message: a.message,
                    suggestion: a.suggestion
                }))
            };
        },
        
        // Get Savings Opportunities
        get_savings_opportunities: function() {
            const recs = GeniusEngine.getPersonalizedRecommendations();
            return {
                success: true,
                opportunities: recs.slice(0, 5).map(r => ({
                    icon: r.icon,
                    title: r.title,
                    description: r.text,
                    potentialSavings: r.savings || null
                }))
            };
        },
        
        // Start Challenge
        start_challenge: async function(args) {
            const { challengeType } = args;
            const tpl = challengeTemplates.find(t => t.id === challengeType);
            
            if (!tpl) {
                return { 
                    success: false, 
                    error: 'Provocare necunoscută.',
                    availableChallenges: challengeTemplates.map(t => ({ id: t.id, name: t.name, description: t.desc }))
                };
            }
            
            const endDate = new Date();
            endDate.setDate(endDate.getDate() + tpl.duration);
            
            const data = {
                templateId: challengeType,
                name: tpl.name,
                startDate: new Date().toISOString().split('T')[0],
                endDate: endDate.toISOString().split('T')[0],
                target: tpl.target || 500,
                saved: 0
            };
            
            try {
                const doc = await db.collection('users').doc(state.user.uid).collection('challenges').add(data);
                state.challenges.push({ id: doc.id, ...data });
                
                return {
                    success: true,
                    message: `Ai început provocarea "${tpl.name}"! ${tpl.desc}`,
                    challengeId: doc.id,
                    endDate: data.endDate
                };
            } catch (err) {
                return { success: false, error: err.message };
            }
        },
        
        // Get Challenge Status
        get_challenge_status: function() {
            const active = (state.challenges || []).map(c => {
                const tpl = challengeTemplates.find(t => t.id === c.templateId);
                const daysLeft = Math.ceil((new Date(c.endDate) - new Date()) / (1000 * 60 * 60 * 24));
                return {
                    name: tpl?.name || c.name,
                    description: tpl?.desc,
                    progress: c.target > 0 ? Math.round((c.saved / c.target) * 100) : 0,
                    saved: c.saved,
                    target: c.target,
                    daysLeft: Math.max(0, daysLeft),
                    status: daysLeft <= 0 ? 'Terminat' : daysLeft <= 3 ? 'Aproape gata!' : 'În desfășurare'
                };
            });
            
            return {
                success: true,
                activeChallenges: active.length,
                challenges: active
            };
        },
        
        // Add Account
        add_account: async function(args) {
            const { name, balance, type = 'checking' } = args;
            
            const data = {
                name: name,
                balance: parseFloat(balance) || 0,
                type: type
            };
            
            try {
                const doc = await db.collection('users').doc(state.user.uid).collection('accounts').add(data);
                state.accounts.push({ id: doc.id, ...data });
                
                return {
                    success: true,
                    message: `Am adăugat contul "${name}" cu soldul de ${fmt(balance)}.`
                };
            } catch (err) {
                return { success: false, error: err.message };
            }
        },
        
        // Add Debt
        add_debt: async function(args) {
            const { name, amount, type, dueDate } = args;
            
            const data = {
                name: name,
                amount: parseFloat(amount) || 0,
                remaining: parseFloat(amount) || 0,
                type: type,
                dueDate: dueDate || null
            };
            
            try {
                const doc = await db.collection('users').doc(state.user.uid).collection('debts').add(data);
                state.debts.push({ id: doc.id, ...data });
                
                const typeText = type === 'owed' ? 'de plătit' : 'de recuperat';
                return {
                    success: true,
                    message: `Am adăugat datoria "${name}" de ${fmt(amount)} (${typeText}).`
                };
            } catch (err) {
                return { success: false, error: err.message };
            }
        },
        
        // Get Financial Health
        get_financial_health: function() {
            const health = GeniusEngine.calculateHealthScore();
            return {
                success: true,
                score: health.score,
                grade: health.grade,
                factors: health.factors,
                recommendations: health.recommendations?.slice(0, 3)
            };
        },
        
        // Calculate FIRE
        calculate_fire: function(args) {
            const monthlyExpense = args.monthlyExpense || GeniusEngine.predictSpending()?.avgExpense || 5000;
            const netWorth = args.currentNetWorth || state.netWorth || 0;
            
            const annualExpense = monthlyExpense * 12;
            const fireNumber = annualExpense * 25;
            const progress = (netWorth / fireNumber) * 100;
            
            // Years to FIRE calculation with 7% annual return
            const monthlySavings = (state.savingsRate || 10) / 100 * (GeniusEngine.predictSpending()?.avgIncome || 7000);
            const yearsToFire = GeniusEngine.yearsToFire(netWorth, monthlySavings, fireNumber);
            
            return {
                success: true,
                fireNumber: fireNumber,
                currentNetWorth: netWorth,
                progress: Math.round(progress * 10) / 10,
                yearsToFire: yearsToFire,
                monthlyExpenseUsed: monthlyExpense,
                monthlySavingsEstimate: monthlySavings,
                explanation: `Ai nevoie de ${fmt(fireNumber)} pentru independență financiară (25x cheltuielile anuale de ${fmt(annualExpense)}). Cu rata actuală de economisire, vei ajunge în ~${yearsToFire} ani.`
            };
        },
        
        // Compare Periods
        compare_periods: function(args) {
            // Simplified - just compare current vs last month
            const now = new Date();
            const thisMonth = (state.transactions || []).filter(t => {
                const d = new Date(t.date);
                return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
            });
            const lastMonth = (state.transactions || []).filter(t => {
                const d = new Date(t.date);
                const lm = new Date(now.getFullYear(), now.getMonth() - 1, 1);
                return d.getMonth() === lm.getMonth() && d.getFullYear() === lm.getFullYear();
            });
            
            const thisExpense = thisMonth.filter(t => t.type === 'expense').reduce((s, t) => s + (t.amount || 0), 0);
            const lastExpense = lastMonth.filter(t => t.type === 'expense').reduce((s, t) => s + (t.amount || 0), 0);
            const thisIncome = thisMonth.filter(t => t.type === 'income').reduce((s, t) => s + (t.amount || 0), 0);
            const lastIncome = lastMonth.filter(t => t.type === 'income').reduce((s, t) => s + (t.amount || 0), 0);
            
            return {
                success: true,
                comparison: {
                    thisMonth: { expense: thisExpense, income: thisIncome, balance: thisIncome - thisExpense },
                    lastMonth: { expense: lastExpense, income: lastIncome, balance: lastIncome - lastExpense },
                    expenseChange: lastExpense > 0 ? Math.round(((thisExpense - lastExpense) / lastExpense) * 100) : 0,
                    incomeChange: lastIncome > 0 ? Math.round(((thisIncome - lastIncome) / lastIncome) * 100) : 0
                }
            };
        },
        
        // Export Report
        export_report: function(args) {
            const { period, format = 'summary' } = args;
            const analysis = FinleyAI.executors.get_spending_analysis({ period: period === 'quarter' ? '3months' : period });
            
            return {
                success: true,
                report: {
                    title: `Raport Financiar - ${period}`,
                    generatedAt: new Date().toISOString(),
                    ...analysis
                }
            };
        },
        
        // Navigate to section
        navigate_to: function(args) {
            const { section } = args;
            const validSections = ['home', 'transactions', 'analytics', 'budgets', 'goals', 'accounts', 'debts', 'recurring', 'subscriptions', 'challenges', 'insights', 'settings'];
            
            if (!validSections.includes(section)) {
                return { success: false, error: `Secțiune invalidă: ${section}` };
            }
            
            // Navigate
            nav(section);
            
            const sectionNames = {
                home: 'Acasă',
                transactions: 'Tranzacții',
                analytics: 'Analiză',
                budgets: 'Bugete',
                goals: 'Obiective',
                accounts: 'Conturi',
                debts: 'Datorii',
                recurring: 'Recurente',
                subscriptions: 'Abonamente',
                challenges: 'Provocări',
                insights: 'AI Insights',
                settings: 'Setări'
            };
            
            return {
                success: true,
                message: `Am deschis secțiunea "${sectionNames[section]}".`
            };
        },
        
        // Quick stats
        get_quick_stats: function() {
            const now = new Date();
            const monthTx = (state.transactions || []).filter(t => {
                const d = new Date(t.date);
                return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
            });
            
            const income = monthTx.filter(t => t.type === 'income').reduce((s, t) => s + (t.amount || 0), 0);
            const expense = monthTx.filter(t => t.type === 'expense').reduce((s, t) => s + (t.amount || 0), 0);
            const balance = income - expense;
            const savingsRate = income > 0 ? Math.round((balance / income) * 100) : 0;
            
            // Goals progress
            const goalsTotal = (state.goals || []).length;
            const goalsOnTrack = (state.goals || []).filter(g => {
                const progress = g.target > 0 ? (g.current / g.target) * 100 : 0;
                return progress >= 50;
            }).length;
            
            // Budgets
            const budgetsTotal = (state.budgets || []).length;
            const budgetsExceeded = (state.budgets || []).filter(b => {
                const spent = monthTx.filter(t => t.type === 'expense' && t.category === b.category)
                    .reduce((s, t) => s + (t.amount || 0), 0);
                return spent > b.limit;
            }).length;
            
            return {
                success: true,
                stats: {
                    thisMonth: {
                        income: income,
                        expense: expense,
                        balance: balance,
                        savingsRate: savingsRate,
                        transactionCount: monthTx.length
                    },
                    goals: {
                        total: goalsTotal,
                        onTrack: goalsOnTrack
                    },
                    budgets: {
                        total: budgetsTotal,
                        exceeded: budgetsExceeded
                    },
                    streak: state.streak || 0,
                    netWorth: state.netWorth || 0
                }
            };
        },
        
        // List recent transactions
        list_recent_transactions: function(args) {
            const count = Math.min(args.count || 5, 20);
            const recent = (state.transactions || [])
                .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
                .slice(0, count);
            
            return {
                success: true,
                transactions: recent.map(t => ({
                    id: t.id,
                    type: t.type,
                    amount: t.amount,
                    category: findCat(t.type, t.category)?.name || t.category,
                    subcategory: t.subcategory,
                    date: t.date,
                    note: t.note
                }))
            };
        },
        
        // List goals
        list_goals: function() {
            const goals = (state.goals || []).map(g => ({
                id: g.id,
                name: g.name,
                target: g.target,
                current: g.current || 0,
                progress: g.target > 0 ? Math.round((g.current / g.target) * 100) : 0,
                remaining: g.target - (g.current || 0),
                deadline: g.deadline
            }));
            
            return {
                success: true,
                count: goals.length,
                goals: goals,
                totalTarget: goals.reduce((s, g) => s + g.target, 0),
                totalSaved: goals.reduce((s, g) => s + g.current, 0)
            };
        },
        
        // List budgets
        list_budgets: function() {
            const now = new Date();
            const monthTx = (state.transactions || []).filter(t => {
                const d = new Date(t.date);
                return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear() && t.type === 'expense';
            });
            
            const budgets = (state.budgets || []).map(b => {
                const spent = monthTx.filter(t => t.category === b.category)
                    .reduce((s, t) => s + (t.amount || 0), 0);
                const catInfo = findCat('expense', b.category);
                return {
                    id: b.id,
                    category: catInfo?.name || b.category,
                    categoryId: b.category,
                    limit: b.limit,
                    spent: spent,
                    remaining: b.limit - spent,
                    percentUsed: Math.round((spent / b.limit) * 100),
                    status: spent > b.limit ? 'exceeded' : spent > b.limit * 0.8 ? 'warning' : 'ok'
                };
            });
            
            return {
                success: true,
                count: budgets.length,
                budgets: budgets,
                totalLimit: budgets.reduce((s, b) => s + b.limit, 0),
                totalSpent: budgets.reduce((s, b) => s + b.spent, 0)
            };
        },
        
        // Add reminder
        add_reminder: async function(args) {
            const { title, date, amount, recurring = false } = args;
            
            const data = {
                title: title,
                date: date,
                amount: amount || null,
                recurring: recurring,
                completed: false,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            
            try {
                const doc = await db.collection('users').doc(state.user.uid).collection('reminders').add(data);
                state.reminders = state.reminders || [];
                state.reminders.push({ id: doc.id, ...data });
                
                return {
                    success: true,
                    message: `Am adăugat reminder: "${title}" pentru ${date}${amount ? ` (${fmt(amount)})` : ''}.`
                };
            } catch (err) {
                return { success: false, error: err.message };
            }
        },
        
        // Suggest savings
        suggest_savings: function() {
            const now = new Date();
            const monthTx = (state.transactions || []).filter(t => {
                const d = new Date(t.date);
                return d.getMonth() === now.getMonth() && t.type === 'expense';
            });
            
            // Analyze categories
            const byCategory = {};
            monthTx.forEach(t => {
                const cat = t.category || 'other';
                if (!byCategory[cat]) byCategory[cat] = { total: 0, count: 0, items: [] };
                byCategory[cat].total += t.amount || 0;
                byCategory[cat].count++;
                byCategory[cat].items.push(t);
            });
            
            const suggestions = [];
            
            // High spending categories
            Object.entries(byCategory).forEach(([cat, data]) => {
                const catInfo = findCat('expense', cat);
                if (data.total > 500 && ['food', 'entertainment', 'shopping', 'subscriptions'].includes(cat)) {
                    suggestions.push({
                        category: catInfo?.name || cat,
                        amount: data.total,
                        suggestion: `Ai cheltuit ${fmt(data.total)} pe ${catInfo?.name || cat}. Încearcă să reduci cu 20% luna viitoare.`,
                        potential: Math.round(data.total * 0.2)
                    });
                }
            });
            
            // Subscriptions check
            const subs = state.subscriptions || [];
            if (subs.length > 3) {
                const totalSubs = subs.reduce((s, sub) => s + (sub.monthlyAvg || 0), 0);
                suggestions.push({
                    category: 'Abonamente',
                    amount: totalSubs,
                    suggestion: `Ai ${subs.length} abonamente (${fmt(totalSubs)}/lună). Verifică dacă le folosești pe toate.`,
                    potential: Math.round(totalSubs * 0.3)
                });
            }
            
            // Round up savings
            const potentialRoundUp = monthTx.reduce((s, t) => {
                const rounded = Math.ceil(t.amount / 10) * 10;
                return s + (rounded - t.amount);
            }, 0);
            
            if (potentialRoundUp > 50) {
                suggestions.push({
                    category: 'Rotunjiri',
                    amount: potentialRoundUp,
                    suggestion: `Dacă ai rotunji fiecare cheltuială în sus, ai economisi ${fmt(potentialRoundUp)} luna asta.`,
                    potential: potentialRoundUp
                });
            }
            
            return {
                success: true,
                suggestions: suggestions,
                totalPotential: suggestions.reduce((s, sug) => s + (sug.potential || 0), 0)
            };
        },
        
        // Category details
        get_category_details: function(args) {
            const { category, period = 'month' } = args;
            
            const now = new Date();
            let startDate;
            
            switch (period) {
                case 'week':
                    startDate = new Date(now);
                    startDate.setDate(now.getDate() - 7);
                    break;
                case '3months':
                    startDate = new Date(now);
                    startDate.setMonth(now.getMonth() - 3);
                    break;
                default:
                    startDate = new Date(now.getFullYear(), now.getMonth(), 1);
            }
            
            const transactions = (state.transactions || []).filter(t => {
                const d = new Date(t.date);
                return t.category === category && t.type === 'expense' && d >= startDate;
            });
            
            const total = transactions.reduce((s, t) => s + (t.amount || 0), 0);
            const catInfo = findCat('expense', category);
            
            // Group by subcategory
            const bySubcat = {};
            transactions.forEach(t => {
                const sub = t.subcategory || 'Altele';
                if (!bySubcat[sub]) bySubcat[sub] = 0;
                bySubcat[sub] += t.amount || 0;
            });
            
            const subcategories = Object.entries(bySubcat)
                .map(([name, amount]) => ({ name, amount, percent: Math.round((amount / total) * 100) }))
                .sort((a, b) => b.amount - a.amount);
            
            return {
                success: true,
                category: catInfo?.name || category,
                period: period,
                total: total,
                transactionCount: transactions.length,
                avgPerTransaction: transactions.length > 0 ? Math.round(total / transactions.length) : 0,
                subcategories: subcategories.slice(0, 10),
                recentTransactions: transactions.slice(0, 5).map(t => ({
                    date: t.date,
                    amount: t.amount,
                    subcategory: t.subcategory,
                    note: t.note
                }))
            };
        }
    },
    
    // ═══════════════════════════════════════════════════════════════
    // MAIN CONVERSATION METHOD - with full agentic loop
    // ═══════════════════════════════════════════════════════════════
    async chat(userMessage) {
        const context = buildFullFinancialContext();
        
        const systemPrompt = `Ești Finley, un asistent financiar profesionist integrat în aplicația Budget Pro.

ROLUL TĂU:
Ajuți utilizatorii să-și gestioneze finanțele prin acțiuni concrete și analize precise.

CAPACITĂȚI:
- Înregistrare tranzacții (cheltuieli și venituri)
- Configurare și monitorizare bugete
- Creare și urmărire obiective financiare
- Analiză detaliată a cheltuielilor
- Identificare pattern-uri și anomalii
- Gestionare conturi și datorii

REGULI DE OPERARE:
1. Când utilizatorul solicită o acțiune, execută funcția corespunzătoare
2. Extrage parametrii din context (sumă, categorie, dată)
3. Categorii disponibile: food, transport, housing, health, shopping, entertainment, subscriptions, utilities, education, personal, family, travel, gifts, other (cheltuieli) | salary, freelance, investments, gifts_income, other_income (venituri)
4. Solicită clarificări doar când informațiile sunt insuficiente
5. Răspunde în română, concis și profesionist
6. Confirmă acțiunile executate cu date relevante
7. Nu folosi emoji-uri - menține un ton profesionist

CONTEXT FINANCIAR CURENT:
${context}

EXEMPLE DE PROCESARE:
- "Am cheltuit 50 lei la Lidl" → add_transaction({type:"expense", amount:50, category:"food", subcategory:"Lidl"})
- "Care sunt cheltuielile lunii?" → get_spending_analysis({period:"month"})
- "Setează buget 1000 lei alimentație" → set_budget({category:"food", limit:1000})
- "Obiectiv 5000 lei pentru vacanță" → create_goal({name:"Vacanță", target:5000})`;

        const MAX_ITERATIONS = 5;
        let iterations = 0;
        let allFunctionResults = [];
        let finalText = '';
        
        // Build initial conversation
        let currentHistory = [...this.conversationHistory.slice(-10)];
        
        // Add user message
        currentHistory.push({
            role: 'user',
            parts: [{ text: userMessage }]
        });

        try {
            // Agentic loop - keep going until model gives text response or max iterations
            while (iterations < MAX_ITERATIONS) {
                iterations++;
                console.log(`[Finley] Iteration ${iterations}`);
                
                const response = await fetch('/api/gemini', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        prompt: iterations === 1 ? userMessage : null,
                        systemPrompt: systemPrompt,
                        conversationHistory: iterations === 1 ? this.conversationHistory.slice(-10) : currentHistory,
                        tools: this.functionDeclarations,
                        functionResponses: iterations > 1 ? allFunctionResults.slice(-5).map(fr => ({
                            name: fr.name,
                            response: fr.result || { error: fr.error }
                        })) : [],
                        maxTokens: 4096
                    })
                });
                
                const data = await response.json();
                
                if (!data.success) {
                    return { text: `Eroare API: ${data.error}`, functionResults: allFunctionResults };
                }
                
                // Check if model wants to call functions
                if (data.functionCalls && data.functionCalls.length > 0) {
                    console.log(`[Finley] Model requested ${data.functionCalls.length} function(s)`);
                    
                    // Add model's function call to history
                    currentHistory.push({
                        role: 'model',
                        parts: data.functionCalls.map(fc => ({
                            functionCall: { name: fc.name, args: fc.args }
                        }))
                    });
                    
                    // Execute each function
                    const functionResponseParts = [];
                    for (const fc of data.functionCalls) {
                        console.log(`[Finley] Executing: ${fc.name}`, fc.args);
                        
                        const executor = this.executors[fc.name];
                        let result;
                        
                        if (executor) {
                            try {
                                result = await executor(fc.args);
                            } catch (err) {
                                result = { success: false, error: err.message };
                            }
                        } else {
                            result = { success: false, error: `Funcție necunoscută: ${fc.name}` };
                        }
                        
                        allFunctionResults.push({
                            name: fc.name,
                            args: fc.args,
                            result: result
                        });
                        
                        functionResponseParts.push({
                            functionResponse: {
                                name: fc.name,
                                response: { result: result }
                            }
                        });
                    }
                    
                    // Add function responses to history
                    currentHistory.push({
                        role: 'user',
                        parts: functionResponseParts
                    });
                    
                    // If there's also text, save it
                    if (data.text) {
                        finalText += data.text + '\n';
                    }
                    
                    // Continue loop to let model process results
                    continue;
                }
                
                // Model gave text response (no more function calls)
                if (data.text) {
                    finalText += data.text;
                }
                
                // Done - model finished
                break;
            }
            
            // Update conversation history
            this.conversationHistory.push(
                { role: 'user', parts: [{ text: userMessage }] }
            );
            
            if (finalText) {
                this.conversationHistory.push(
                    { role: 'model', parts: [{ text: finalText }] }
                );
            }
            
            // Trim history
            if (this.conversationHistory.length > this.maxHistoryLength * 2) {
                this.conversationHistory = this.conversationHistory.slice(-this.maxHistoryLength * 2);
            }
            
            // If no text but we have function results, generate summary
            if (!finalText && allFunctionResults.length > 0) {
                finalText = allFunctionResults.map(fr => {
                    if (fr.result?.message) return fr.result.message;
                    if (fr.result?.success) return `Acțiune completată: ${fr.name}`;
                    if (fr.result?.error) return `Eroare: ${fr.result.error}`;
                    return null;
                }).filter(Boolean).join('\n\n');
            }
            
            return {
                text: finalText || '🤔 Nu am putut genera un răspuns.',
                functionResults: allFunctionResults,
                iterations: iterations
            };
            
        } catch (err) {
            console.error('[Finley] Error:', err);
            return { 
                text: `Eroare: ${err.message}`, 
                functionResults: allFunctionResults 
            };
        }
    },
    
    // Clear conversation history
    clearHistory() {
        this.conversationHistory = [];
    }
};

// ═══════════════════════════════════════════════════════════════
// 💬 SEND AI MESSAGE - Updated to use FinleyAI
// ═══════════════════════════════════════════════════════════════
async function sendAI() {
    const input = $('aiInput');
    const chat = $('aiChat');
    const msg = input?.value?.trim();
    if (!msg || !chat) return;
    
    // Add user message
    chat.innerHTML += `<div class="ai-msg user"><div class="ai-pic">👤</div><div class="ai-bubble">${escapeHtml(msg)}</div></div>`;
    input.value = '';
    chat.scrollTop = chat.scrollHeight;
    
    // Add typing indicator
    chat.innerHTML += `<div class="ai-msg" id="aiTyping"><div class="ai-pic">🧠</div><div class="ai-bubble typing">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        <span class="typing-text">Analizez și procesez...</span>
    </div></div>`;
    chat.scrollTop = chat.scrollHeight;
    
    checkAchievement('ai_user');
    
    try {
        // Use FinleyAI engine
        const result = await FinleyAI.chat(msg);
        
        // Remove typing indicator
        $('aiTyping')?.remove();
        
        // Format response
        const reply = formatAIResponse(result.text);
        
        // Show function calls if any (for transparency)
        let functionInfo = '';
        if (result.functionResults && result.functionResults.length > 0) {
            const actionNames = result.functionResults.map(fr => {
                const names = {
                    'add_transaction': 'Adăugat tranzacție',
                    'set_budget': 'Setat buget',
                    'create_goal': 'Creat obiectiv',
                    'search_transactions': '🔍 Căutat tranzacții',
                    'get_spending_analysis': 'Analizat cheltuieli',
                    'start_challenge': 'Început provocare'
                };
                return names[fr.name] || fr.name;
            });
            functionInfo = `<div class="ai-actions">${actionNames.join(' • ')}</div>`;
        }
        
        chat.innerHTML += `<div class="ai-msg"><div class="ai-pic">🧠</div><div class="ai-bubble">${functionInfo}${reply}</div></div>`;
        
    } catch (err) {
        console.error('AI Error:', err);
        $('aiTyping')?.remove();
        
        chat.innerHTML += `<div class="ai-msg"><div class="ai-pic">⚠️</div><div class="ai-bubble">
            <strong>Eroare</strong><br>${err.message}
        </div></div>`;
    }
    
    chat.scrollTop = chat.scrollHeight;
}

function formatAIResponse(text) {
    if (!text) return '<em>Nu am putut genera un răspuns.</em>';
    
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^### (.*$)/gm, '<h4>$1</h4>')
        .replace(/^## (.*$)/gm, '<h3>$1</h3>')
        .replace(/^# (.*$)/gm, '<h2>$1</h2>')
        .replace(/^[•\-] /gm, '• ')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
}


// ═══════════════════════════════════════════
// SETTINGS
// ═══════════════════════════════════════════
function setCurrency(c) {
    state.currency = c;
    if (state.user) db.collection('users').doc(state.user.uid).update({ currency: c }).catch(() => {});
    updateHome();
}

function saveNetWorth() {
    const val = parseFloat($('netWorthIn')?.value) || 0;
    state.netWorth = val;
    if (state.user) db.collection('users').doc(state.user.uid).update({ netWorth: val }).catch(() => {});
    toast('Salvat!', 'success');
}

function exportData() {
    const data = {
        transactions: state.transactions,
        goals: state.goals,
        budgets: state.budgets,
        accounts: state.accounts,
        debts: state.debts
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'budget-export.json';
    a.click();
    toast('Exportat!', 'success');
}

function clearData() {
    if (!confirm('Sigur ștergi TOATE datele?')) return;
    if (!confirm('Acțiunea este ireversibilă!')) return;
    
    const uid = state.user?.uid;
    if (!uid) return;
    
    // Delete all collections
    ['transactions', 'goals', 'budgets', 'accounts', 'debts', 'reminders', 'utilities'].forEach(async col => {
        const snap = await db.collection('users').doc(uid).collection(col).get();
        snap.docs.forEach(doc => doc.ref.delete());
    });
    
    state.transactions = [];
    state.goals = [];
    state.budgets = [];
    state.accounts = [];
    state.debts = [];
    state.reminders = [];
    state.utilities = [];
    
    updateUI();
    toast('Date șterse!', 'success');
}

// ═══════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════
function openModal(id) {
    $(id)?.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    $(id)?.classList.remove('open');
    document.body.style.overflow = '';
    state.editingId = null;
}

function toast(msg, type = 'info') {
    const container = $('toasts');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'toast ' + type;
    div.textContent = msg;
    container.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}

function fmt(n) {
    return Math.abs(n).toLocaleString('ro-RO', { maximumFractionDigits: 0 }) + ' ' + state.currency;
}

function fmtDate(d) {
    const date = new Date(d);
    return date.getDate() + ' ' + months[date.getMonth()].substring(0, 3);
}

function findCat(type, id) {
    return getAllCategories(type).find(c => c.id === id);
}

function calcStreak() {
    // Simple streak calculation
    const today = new Date().toISOString().split('T')[0];
    const dates = [...new Set(state.transactions.map(t => t.date))].sort().reverse();
    
    let streak = 0;
    let checkDate = new Date();
    
    for (let i = 0; i < 365; i++) {
        const dateStr = checkDate.toISOString().split('T')[0];
        if (dates.includes(dateStr)) {
            streak++;
            checkDate.setDate(checkDate.getDate() - 1);
        } else if (i === 0) {
            // Allow today to be missing
            checkDate.setDate(checkDate.getDate() - 1);
        } else {
            break;
        }
    }
    
    state.streak = streak;
    
    if (streak >= 7) checkAchievement('week_streak');
    if (streak >= 30) checkAchievement('month_streak');
}

// ═══════════════════════════════════════════
// NEW FEATURES
// ═══════════════════════════════════════════

// 1. RECURRING TRANSACTIONS
async function processRecurring() {
    const today = new Date().toISOString().split('T')[0];
    for (const r of state.recurring) {
        if (!r.nextDate || r.nextDate <= today) {
            // Create transaction
            const data = {
                type: r.type,
                amount: r.amount,
                category: r.category,
                subcategory: r.subcategory || '',
                date: today,
                note: r.note + ' (Recurent)',
                recurring: true,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            const doc = await db.collection('users').doc(state.user.uid).collection('transactions').add(data);
            state.transactions.unshift({ id: doc.id, ...data });
            
            // Update next date
            const next = new Date(r.nextDate || today);
            if (r.frequency === 'daily') next.setDate(next.getDate() + 1);
            else if (r.frequency === 'weekly') next.setDate(next.getDate() + 7);
            else if (r.frequency === 'monthly') next.setMonth(next.getMonth() + 1);
            else if (r.frequency === 'yearly') next.setFullYear(next.getFullYear() + 1);
            
            await db.collection('users').doc(state.user.uid).collection('recurring').doc(r.id).update({
                nextDate: next.toISOString().split('T')[0]
            });
        }
    }
}

function renderRecurring() {
    const container = $('recurringList');
    if (!container) return;
    if (state.recurring.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">🔄</div><p class="empty-txt">Nicio tranzacție recurentă</p><button class="empty-btn" onclick="openRecurringModal()">+ Adaugă</button></div>`;
        return;
    }
    const freq = { daily: 'Zilnic', weekly: 'Săptămânal', monthly: 'Lunar', yearly: 'Anual' };
    container.innerHTML = state.recurring.map(r => {
        const cat = findCat(r.type, r.category);
        return `
            <div class="item-card">
                <div class="item-row">
                    <div class="item-emoji">${cat?.icon || '🔄'}</div>
                    <div class="item-info">
                        <div class="item-name">${cat?.name || r.category} - ${freq[r.frequency]}</div>
                        <div class="item-sub">${fmt(r.amount)} · Next: ${r.nextDate}</div>
                    </div>
                    <div class="item-actions">
                        <button class="item-btn" onclick="editRecurring('${r.id}')">✏️</button>
                        <button class="item-btn" onclick="deleteRecurring('${r.id}')">🗑️</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function openRecurringModal() {
    state.editingId = null;
    $('recurringForm')?.reset();
    $('recurringModalTitle').textContent = 'Tranzacție Recurentă';
    $('recurDeleteBtn').style.display = 'none';
    setRecurType('expense');
    $('recurStart').value = new Date().toISOString().split('T')[0];
    openModal('recurringModal');
}

// Edit recurring transaction
function editRecurring(id) {
    const r = state.recurring.find(x => x.id === id);
    if (!r) return;
    
    state.editingId = id;
    $('recurringModalTitle').textContent = 'Editează Recurent';
    setRecurType(r.type);
    $('recurCat').value = r.category;
    $('recurAmount').value = r.amount;
    $('recurFreq').value = r.frequency;
    $('recurStart').value = r.nextDate;
    $('recurNote').value = r.note || '';
    $('recurDeleteBtn').style.display = 'block';
    openModal('recurringModal');
}

function setRecurType(type) {
    $('recurType').value = type;
    $$('#recurringModal .type-tab').forEach(tab => {
        const isActive = tab.dataset.t === type;
        tab.classList.toggle('on', isActive);
        tab.classList.toggle('exp', isActive && type === 'expense');
        tab.classList.toggle('inc', isActive && type === 'income');
    });
    // Load categories for recurring
    const sel = $('recurCat');
    if (!sel) return;
    const cats = getAllCategories(type);
    sel.innerHTML = cats.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
}

async function saveRecurring(e) {
    e.preventDefault();
    const data = {
        type: $('recurType').value,
        amount: parseFloat($('recurAmount').value),
        category: $('recurCat').value,
        subcategory: $('recurSubcat')?.value || '',
        note: $('recurNote')?.value || '',
        frequency: $('recurFreq').value,
        nextDate: $('recurStart').value
    };
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('recurring');
        if (state.editingId) {
            await ref.doc(state.editingId).update(data);
            const idx = state.recurring.findIndex(r => r.id === state.editingId);
            if (idx >= 0) state.recurring[idx] = { ...state.recurring[idx], ...data };
            toast('Actualizat!', 'success');
        } else {
            const doc = await ref.add(data);
            state.recurring.push({ id: doc.id, ...data });
            toast('Salvat!', 'success');
        }
        closeModal('recurringModal');
        renderRecurring();
    } catch (err) {
        toast('Eroare', 'error');
    }
}

async function deleteRecurring(id) {
    if (!confirm('Ștergi tranzacția recurentă?')) return;
    try {
        await db.collection('users').doc(state.user.uid).collection('recurring').doc(id).delete();
        state.recurring = state.recurring.filter(r => r.id !== id);
        renderRecurring();
        toast('Șters!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// 2. SUBSCRIPTION TRACKER
function detectSubscriptions() {
    const subs = {};
    state.transactions.filter(t => t.type === 'expense' && t.category === 'subscriptions').forEach(t => {
        const key = t.subcategory || t.note || 'Unknown';
        if (!subs[key]) subs[key] = { name: key, amount: 0, count: 0, dates: [] };
        subs[key].amount += t.amount;
        subs[key].count++;
        subs[key].dates.push(t.date);
    });
    
    state.subscriptions = Object.values(subs).filter(s => s.count >= 2).map(s => ({
        name: s.name,
        monthlyAvg: s.amount / s.count,
        count: s.count
    }));
}

function renderSubscriptions() {
    const container = $('subsList');
    if (!container) return;
    if (state.subscriptions.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">📱</div><p class="empty-txt">Niciun abonament detectat</p></div>`;
        return;
    }
    const total = state.subscriptions.reduce((s, sub) => s + sub.monthlyAvg, 0);
    container.innerHTML = `
        <div class="item-card" style="background:linear-gradient(135deg,#a855f7,#8b5cf6);color:#fff;margin-bottom:12px">
            <div style="font-size:13px;opacity:0.9">Total abonamente/lună</div>
            <div style="font-size:28px;font-weight:700;margin-top:4px">${fmt(total)}</div>
        </div>
    ` + state.subscriptions.map(s => `
        <div class="item-card">
            <div class="item-row">
                <div class="item-emoji">📱</div>
                <div class="item-info">
                    <div class="item-name">${s.name}</div>
                    <div class="item-sub">${fmt(s.monthlyAvg)}/lună · ${s.count} plăți</div>
                </div>
            </div>
        </div>
    `).join('');
}

// 3. TAGS
function renderTags() {
    const sel = $('txTags');
    if (!sel) return;
    sel.innerHTML = state.tags.map(t => `<option value="${t}">${t}</option>`).join('');
}

async function addTag(tag) {
    if (!tag || state.tags.includes(tag)) return;
    state.tags.push(tag);
    await db.collection('users').doc(state.user.uid).update({ tags: state.tags });
    renderTags();
}

// 4. CALENDAR VIEW
function renderCalendar() {
    const container = $('calendarGrid');
    if (!container) return;
    
    // Update month text
    const text = months[state.month].substring(0, 3) + ' ' + state.year;
    if ($('calMonthTxt')) $('calMonthTxt').textContent = text;
    
    const year = state.year;
    const month = state.month;
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    let html = '<div class="cal-grid">';
    ['D', 'L', 'M', 'M', 'J', 'V', 'S'].forEach(d => html += `<div class="cal-day-name">${d}</div>`);
    
    for (let i = 0; i < firstDay; i++) html += '<div class="cal-day empty"></div>';
    
    for (let day = 1; day <= daysInMonth; day++) {
        const date = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const dayTx = state.transactions.filter(t => t.date === date);
        const total = dayTx.reduce((s, t) => s + (t.type === 'expense' ? -t.amount : t.amount), 0);
        const cls = total > 0 ? 'pos' : total < 0 ? 'neg' : '';
        html += `
            <div class="cal-day ${cls}" onclick="showDayTx('${date}')">
                <div class="cal-day-num">${day}</div>
                ${dayTx.length > 0 ? `<div class="cal-day-dot">${dayTx.length}</div>` : ''}
            </div>
        `;
    }
    html += '</div>';
    container.innerHTML = html;
}

function showDayTx(date) {
    state.selectedDate = new Date(date);
    const dayTx = state.transactions.filter(t => t.date === date);
    const modal = $('dayTxModal');
    if (!modal) return;
    $('dayTxDate').textContent = new Date(date).toLocaleDateString('ro-RO', { day: 'numeric', month: 'long' });
    $('dayTxList').innerHTML = dayTx.length > 0 ? dayTx.map(t => txHTML(t)).join('') : '<div class="empty-txt">Nicio tranzacție</div>';
    openModal('dayTxModal');
}

// 5. NET WORTH TIMELINE
async function saveNetWorthSnapshot() {
    const snap = {
        date: new Date().toISOString().split('T')[0],
        value: state.netWorth,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };
    state.netWorthHistory.push(snap);
    await db.collection('users').doc(state.user.uid).update({ netWorthHistory: state.netWorthHistory });
}

function renderNetWorthTimeline() {
    const ctx = $('netWorthChart');
    if (!ctx || state.netWorthHistory.length === 0) return;
    
    if (state.netWorthChart) state.netWorthChart.destroy();
    
    const sorted = [...state.netWorthHistory].sort((a, b) => a.date.localeCompare(b.date));
    
    state.netWorthChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: sorted.map(s => new Date(s.date).toLocaleDateString('ro-RO', { month: 'short' })),
            datasets: [{
                label: 'Patrimoniu',
                data: sorted.map(s => s.value),
                borderColor: '#00d4aa',
                backgroundColor: 'rgba(0,212,170,0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#555' } },
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#555' } }
            }
        }
    });
}

// 6. SAVINGS CHALLENGES
function renderChallenges() {
    const container = $('challengesList');
    if (!container) return;
    
    if (state.challenges.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">🎯</div><p class="empty-txt">Nicio provocare activă</p><button class="empty-btn" onclick="openChallengeModal()">+ Începe</button></div>`;
        return;
    }
    
    container.innerHTML = state.challenges.map(c => {
        const tpl = challengeTemplates.find(t => t.id === c.templateId);
        const progress = c.target > 0 ? Math.min((c.saved / c.target) * 100, 100) : 0;
        const daysLeft = Math.ceil((new Date(c.endDate) - new Date()) / (1000 * 60 * 60 * 24));
        return `
            <div class="item-card">
                <div class="item-row">
                    <div class="item-emoji">${tpl?.icon || '🎯'}</div>
                    <div class="item-info">
                        <div class="item-name">${tpl?.name || c.name}</div>
                        <div class="item-sub">${fmt(c.saved)} / ${fmt(c.target)} · ${daysLeft} zile</div>
                    </div>
                    <div class="item-actions">
                        <button class="item-btn" onclick="deleteChallenge('${c.id}')">🗑️</button>
                    </div>
                </div>
                <div class="progress-bar"><div class="progress-fill" style="width:${progress}%"></div></div>
            </div>
        `;
    }).join('');
}

function openChallengeModal() {
    const modal = $('challengeModal');
    if (!modal) return;
    
    // Group challenges by category
    const categoryNames = {
        savings: 'Economisire',
        discipline: 'Disciplină',
        food: '🍔 Mâncare',
        transport: '🚗 Transport',
        shopping: '🛍️ Shopping',
        income: '💵 Venituri Extra',
        budget: 'Bugetare',
        auto: '🔄 Automat',
        subscriptions: 'Abonamente'
    };
    
    const grouped = {};
    challengeTemplates.forEach(t => {
        const cat = t.category || 'other';
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(t);
    });
    
    let html = '';
    Object.entries(grouped).forEach(([cat, templates]) => {
        html += `
            <div style="margin-bottom:20px;">
                <div style="font-size:14px;font-weight:600;color:var(--accent);margin-bottom:10px;padding-left:4px;">
                    ${categoryNames[cat] || '📦 Altele'}
                </div>
                <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
                    ${templates.map(t => `
                        <div class="challenge-card" onclick="startChallenge('${t.id}')" style="cursor:pointer;">
                            <div class="challenge-icon">${t.icon}</div>
                            <div class="challenge-name">${t.name}</div>
                            <div class="challenge-desc">${t.desc}</div>
                            <div style="font-size:10px;color:var(--text3);margin-top:6px;">${t.duration} ${t.duration === 1 ? 'zi' : t.duration < 7 ? 'zile' : t.duration < 30 ? 'săptămâni' : 'zile'}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });
    
    $('challengeTemplates').innerHTML = html;
    openModal('challengeModal');
}

async function startChallenge(templateId) {
    const tpl = challengeTemplates.find(t => t.id === templateId);
    if (!tpl) return;
    
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + tpl.duration);
    
    const data = {
        templateId,
        name: tpl.name,
        startDate: new Date().toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
        target: tpl.target || (tpl.weeklyIncrease ? tpl.duration * (tpl.duration + 1) / 2 * tpl.weeklyIncrease : 500),
        saved: 0
    };
    
    try {
        const doc = await db.collection('users').doc(state.user.uid).collection('challenges').add(data);
        state.challenges.push({ id: doc.id, ...data });
        closeModal('challengeModal');
        renderChallenges();
        toast(`Provocare începută: ${tpl.name}!`, 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

async function deleteChallenge(id) {
    if (!confirm('Ștergi provocarea?')) return;
    try {
        await db.collection('users').doc(state.user.uid).collection('challenges').doc(id).delete();
        state.challenges = state.challenges.filter(c => c.id !== id);
        renderChallenges();
        toast('Șters!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// 7. AI INSIGHTS ADVANCED
function generateAdvancedInsights() {
    const insights = [];
    
    // Day of week analysis
    const daySpending = {};
    state.transactions.filter(t => t.type === 'expense').forEach(t => {
        const day = new Date(t.date).getDay();
        daySpending[day] = (daySpending[day] || 0) + t.amount;
    });
    const maxDay = Object.keys(daySpending).reduce((a, b) => daySpending[a] > daySpending[b] ? a : b);
    const days = ['Duminica', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbăta'];
    insights.push({ icon: '📅', text: `Cheltuiești cel mai mult ${days[maxDay]}: ${fmt(daySpending[maxDay])}` });
    
    // Compare to last month
    const lastMonth = state.transactions.filter(t => {
        const d = new Date(t.date);
        return d.getMonth() === (state.month - 1 + 12) % 12 && d.getFullYear() === state.year;
    });
    const lastMonthExp = lastMonth.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const thisMonthExp = getMonthTx().filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const diff = ((thisMonthExp - lastMonthExp) / lastMonthExp * 100) || 0;
    if (Math.abs(diff) > 5) {
        insights.push({ icon: diff > 0 ? '📈' : '📉', text: `${diff > 0 ? '+' : ''}${diff.toFixed(0)}% față de luna trecută` });
    }
    
    // Category trends
    const catSpending = {};
    getMonthTx().filter(t => t.type === 'expense').forEach(t => {
        catSpending[t.category] = (catSpending[t.category] || 0) + t.amount;
    });
    const topCat = Object.keys(catSpending).reduce((a, b) => catSpending[a] > catSpending[b] ? a : b, null);
    if (topCat) {
        const cat = findCat('expense', topCat);
        insights.push({ icon: '🏆', text: `Categoria top: ${cat?.name || topCat} (${fmt(catSpending[topCat])})` });
    }
    
    // Prediction
    const dayNum = new Date().getDate();
    const avgDaily = thisMonthExp / days;
    const dayNumInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const predicted = avgDaily * daysInMonth;
    insights.push({ icon: '🔮', text: `Predicție: ~${fmt(predicted)} cheltuieli luna asta` });
    
    return insights;
}

function renderAdvancedInsights() {
    const container = $('advancedInsights');
    if (!container) return;
    const insights = generateAdvancedInsights();
    container.innerHTML = insights.map(i => `
        <div class="insight-card">
            <div class="insight-icon">${i.icon}</div>
            <div class="insight-text">${i.text}</div>
        </div>
    `).join('');
}

// ═══════════════════════════════════════════
// AI AUTO-CATEGORIZATION
// ═══════════════════════════════════════════

function aiCategorize(text) {
    text = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    
    // Try to extract amount
    const amountMatch = text.match(/(\d+(?:[.,]\d+)?)/);
    const amount = amountMatch ? parseFloat(amountMatch[1].replace(',', '.')) : null;
    
    // Remove amount from text for better matching
    const cleanText = text.replace(/\d+(?:[.,]\d+)?/g, '').trim();
    
    // Determine type (expense vs income)
    const incomeKeywords = ['salariu', 'salary', 'venit', 'income', 'primit', 'castig', 'dividend', 'chirie primita', 'freelance', 'bonus', 'prima'];
    let type = 'expense';
    for (const kw of incomeKeywords) {
        if (cleanText.includes(kw)) {
            type = 'income';
            break;
        }
    }
    
    // Find category
    const allCats = [...categories[type], ...customCategories[type]];
    let bestCat = null;
    let bestSub = '';
    let maxScore = 0;
    
    for (const cat of allCats) {
        // Check category keywords
        for (const kw of (cat.keywords || [])) {
            if (cleanText.includes(kw.toLowerCase())) {
                const score = kw.length;
                if (score > maxScore) {
                    maxScore = score;
                    bestCat = cat;
                }
            }
        }
        
        // Check subcategories
        for (const sub of cat.subs) {
            const subLower = sub.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            if (cleanText.includes(subLower)) {
                const score = sub.length + 10; // Bonus for exact sub match
                if (score > maxScore) {
                    maxScore = score;
                    bestCat = cat;
                    bestSub = sub;
                }
            }
            // Partial match
            const words = subLower.split(' ');
            for (const word of words) {
                if (word.length > 3 && cleanText.includes(word)) {
                    const score = word.length;
                    if (score > maxScore) {
                        maxScore = score;
                        bestCat = cat;
                        bestSub = sub;
                    }
                }
            }
        }
    }
    
    // Default if nothing found
    if (!bestCat) {
        bestCat = allCats.find(c => c.id === 'other') || allCats[0];
    }
    
    return {
        type,
        amount,
        category: bestCat?.id,
        subcategory: bestSub,
        categoryName: bestCat?.name,
        icon: bestCat?.icon,
        confidence: maxScore > 0 ? Math.min(maxScore / 20 * 100, 100) : 0
    };
}

// Smart input - parse "50 cafea" or "salariu 5000"
function parseSmartInput(text) {
    const result = aiCategorize(text);
    
    // Also try to get note (remaining text after removing recognized parts)
    let note = text;
    if (result.amount) note = note.replace(result.amount.toString(), '');
    if (result.subcategory) note = note.replace(new RegExp(result.subcategory, 'i'), '');
    note = note.replace(/\s+/g, ' ').trim();
    
    result.note = note.length > 2 && note.length < 50 ? note : '';
    
    return result;
}

// Open smart add modal
function openSmartAdd() {
    openModal('smartAddModal');
    $('smartInput')?.focus();
}

// Process smart input
function processSmartInput() {
    const input = $('smartInput')?.value;
    if (!input) return;
    
    const result = parseSmartInput(input);
    
    // Show preview
    const preview = $('smartPreview');
    if (preview) {
        preview.innerHTML = `
            <div class="smart-result">
                <div class="smart-icon">${result.icon || '📦'}</div>
                <div class="smart-info">
                    <div class="smart-type">${result.type === 'expense' ? '💸 Cheltuială' : '💵 Venit'}</div>
                    <div class="smart-cat">${result.categoryName || 'Altele'} ${result.subcategory ? '→ ' + result.subcategory : ''}</div>
                    <div class="smart-amount">${result.amount ? fmt(result.amount) : 'Sumă lipsă'}</div>
                    ${result.confidence > 0 ? `<div class="smart-conf">Încredere: ${result.confidence.toFixed(0)}%</div>` : ''}
                </div>
            </div>
        `;
        preview.classList.remove('hide');
    }
    
    // Store result for saving
    window.smartResult = result;
}

// Save from smart input
async function saveSmartTx() {
    const result = window.smartResult;
    if (!result || !result.amount) {
        toast('Introdu o sumă!', 'error');
        return;
    }
    
    const data = {
        type: result.type,
        amount: result.amount,
        category: result.category,
        subcategory: result.subcategory || '',
        date: new Date().toISOString().split('T')[0],
        note: result.note || $('smartInput')?.value || '',
        tags: [],
        smart: true, // Flag that it was added via smart input
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    try {
        const doc = await db.collection('users').doc(state.user.uid).collection('transactions').add(data);
        state.transactions.unshift({ id: doc.id, ...data });
        closeModal('smartAddModal');
        $('smartInput').value = '';
        $('smartPreview')?.classList.add('hide');
        updateHome();
        toast(`${result.icon} ${fmt(result.amount)} adăugat!`, 'success');
        checkAchievement('first_tx');
    } catch (err) {
        toast('Eroare la salvare', 'error');
    }
}

// ═══════════════════════════════════════════
// CUSTOM CATEGORIES
// ═══════════════════════════════════════════

async function loadCustomCategories() {
    if (!state.user) return;
    try {
        const doc = await db.collection('users').doc(state.user.uid).get();
        if (doc.exists && doc.data().customCategories) {
            customCategories = doc.data().customCategories;
        }
    } catch (err) {
        console.error('Error loading custom categories:', err);
    }
}

function renderCustomCategories() {
    const container = $('customCatsList');
    if (!container) return;
    
    const all = [...customCategories.expense.map(c => ({...c, type: 'expense'})), 
                 ...customCategories.income.map(c => ({...c, type: 'income'}))];
    
    if (all.length === 0) {
        container.innerHTML = `<div class="empty"><div class="empty-icon">🏷️</div><p class="empty-txt">Nicio categorie personalizată</p></div>`;
        return;
    }
    
    container.innerHTML = all.map(c => `
        <div class="item-card">
            <div class="item-row">
                <div class="item-emoji">${c.icon}</div>
                <div class="item-info">
                    <div class="item-name">${c.name}</div>
                    <div class="item-sub">${c.type === 'expense' ? 'Cheltuială' : 'Venit'} · ${c.subs.length} subcategorii</div>
                </div>
                <div class="item-actions">
                    <button class="item-btn" onclick="editCustomCat('${c.type}', '${c.id}')">✏️</button>
                    <button class="item-btn" onclick="deleteCustomCat('${c.type}', '${c.id}')">🗑️</button>
                </div>
            </div>
        </div>
    `).join('');
}

function openCustomCatModal() {
    state.editingId = null;
    $('customCatForm')?.reset();
    $('customCatSubs').value = '';
    openModal('customCatModal');
}

function editCustomCat(type, id) {
    const cat = customCategories[type].find(c => c.id === id);
    if (!cat) return;
    
    state.editingId = id;
    state.editingType = type;
    $('customCatType').value = type;
    $('customCatName').value = cat.name;
    $('customCatIcon').value = cat.icon;
    $('customCatColor').value = cat.color;
    $('customCatSubs').value = cat.subs.join(', ');
    $('customCatKeywords').value = (cat.keywords || []).join(', ');
    openModal('customCatModal');
}

async function saveCustomCat(e) {
    e.preventDefault();
    
    const type = $('customCatType').value;
    const name = $('customCatName').value;
    const icon = $('customCatIcon').value || '📦';
    const color = $('customCatColor').value || '#78716c';
    const subsText = $('customCatSubs').value;
    const keywordsText = $('customCatKeywords').value;
    
    const subs = subsText.split(',').map(s => s.trim()).filter(s => s);
    const keywords = keywordsText.split(',').map(k => k.trim().toLowerCase()).filter(k => k);
    
    const cat = {
        id: state.editingId || 'custom_' + Date.now(),
        name,
        icon,
        color,
        subs,
        keywords,
        custom: true
    };
    
    if (state.editingId) {
        const idx = customCategories[state.editingType].findIndex(c => c.id === state.editingId);
        if (idx >= 0) customCategories[state.editingType][idx] = cat;
    } else {
        customCategories[type].push(cat);
    }
    
    try {
        await db.collection('users').doc(state.user.uid).update({ customCategories });
        closeModal('customCatModal');
        renderCustomCategories();
        toast('Categorie salvată!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

async function deleteCustomCat(type, id) {
    if (!confirm('Ștergi categoria?')) return;
    
    customCategories[type] = customCategories[type].filter(c => c.id !== id);
    
    try {
        await db.collection('users').doc(state.user.uid).update({ customCategories });
        renderCustomCategories();
        toast('Șters!', 'success');
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// Get all categories (default + custom)
function getAllCategories(type) {
    return [...categories[type], ...customCategories[type]];
}

// Update loadCats to include custom categories
function loadCatsWithCustom(type) {
    const sel = $('txCat');
    if (!sel) return;
    const cats = getAllCategories(type);
    sel.innerHTML = cats.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
    loadSubcats();
}

// Export functions to window
window.showTab = showTab;
window.doLogin = doLogin;
window.doRegister = doRegister;
window.doLogout = doLogout;
window.doGoogleLogin = doGoogleLogin;
window.nav = nav;
window.prevMonth = prevMonth;
window.nextMonth = nextMonth;
window.openTxModal = openTxModal;
window.setTxType = setTxType;
window.loadSubcats = loadSubcats;
window.saveTx = saveTx;
window.editTx = editTx;
window.deleteTx = deleteTx;
window.doSearch = doSearch;
window.setFilter = setFilter;
window.openGoalModal = openGoalModal;
window.editGoal = editGoal;
window.saveGoal = saveGoal;
window.deleteGoal = deleteGoal;
window.openBudgetModal = openBudgetModal;
window.editBudget = editBudget;
window.saveBudget = saveBudget;
window.deleteBudget = deleteBudget;
window.openAccountModal = openAccountModal;
window.editAccount = editAccount;
window.saveAccount = saveAccount;
window.deleteAccount = deleteAccount;
window.openDebtModal = openDebtModal;
window.setDebtType = setDebtType;
window.editDebt = editDebt;
window.saveDebt = saveDebt;
window.deleteDebt = deleteDebt;
window.openUtilityModal = openUtilityModal;
window.saveUtility = saveUtility;
window.openReminderModal = openReminderModal;
window.saveReminder = saveReminder;
window.deleteReminder = deleteReminder;
window.openModal = openModal;
window.closeModal = closeModal;
window.askAI = askAI;
window.sendAI = sendAI;
window.setCurrency = setCurrency;
window.saveNetWorth = saveNetWorth;

// Balance correction function
async function applyBalanceCorrection() {
    const targetBalance = parseFloat($('balanceCorrectionAmount')?.value);
    if (isNaN(targetBalance)) {
        toast('Introdu soldul corect', 'error');
        return;
    }
    
    // Calculate current balance
    const income = (state.transactions || [])
        .filter(t => t.type === 'income')
        .reduce((s, t) => s + (t.amount || 0), 0);
    const expense = (state.transactions || [])
        .filter(t => t.type === 'expense')
        .reduce((s, t) => s + (t.amount || 0), 0);
    const currentBalance = income - expense;
    
    const difference = targetBalance - currentBalance;
    
    if (Math.abs(difference) < 0.01) {
        toast('Soldul este deja corect!', 'success');
        return;
    }
    
    // Create correction transaction
    const correctionData = {
        type: difference > 0 ? 'income' : 'expense',
        amount: Math.abs(difference),
        category: difference > 0 ? 'other_income' : 'other',
        subcategory: '⚖️ Corecție sold',
        date: new Date().toISOString().split('T')[0],
        note: `Corecție automată: sold ajustat de la ${fmt(currentBalance)} la ${fmt(targetBalance)}`,
        tags: ['corecție', 'ajustare'],
        isCorrection: true,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    try {
        const doc = await db.collection('users').doc(state.user.uid).collection('transactions').add(correctionData);
        state.transactions.unshift({ id: doc.id, ...correctionData });
        
        $('balanceCorrectionAmount').value = '';
        toast(`Sold corectat! ${difference > 0 ? '+' : ''}${fmt(difference)}`, 'success');
        updateHome();
    } catch (err) {
        toast('Eroare la corecție', 'error');
    }
}
window.applyBalanceCorrection = applyBalanceCorrection;
window.editRecurring = editRecurring;
window.exportData = exportData;
window.clearData = clearData;
// NEW exports
window.openRecurringModal = openRecurringModal;
window.setRecurType = setRecurType;
window.saveRecurring = saveRecurring;
window.deleteRecurring = deleteRecurring;
window.renderCalendar = renderCalendar;
window.showDayTx = showDayTx;
window.openChallengeModal = openChallengeModal;
window.startChallenge = startChallenge;
window.deleteChallenge = deleteChallenge;
window.saveNetWorthSnapshot = saveNetWorthSnapshot;
// ═══════════════════════════════════════════════════════════════
// 🤖 SMART CATEGORY UI FUNCTIONS
// ═══════════════════════════════════════════════════════════════

// Tab switching for smart categories view
function showSmartTab(tab) {
    // Hide all tabs
    document.querySelectorAll('.smart-tab-content').forEach(el => el.style.display = 'none');
    document.querySelectorAll('#customcatsView .sub-tab').forEach(btn => btn.classList.remove('on'));
    
    // Show selected tab
    const tabEl = $(`smartTab${tab.charAt(0).toUpperCase() + tab.slice(1)}`);
    if (tabEl) tabEl.style.display = 'block';
    
    // Activate button
    event?.target?.classList.add('on');
    
    // Render content
    if (tab === 'learned') {
        renderLearnedPatterns();
    } else if (tab === 'stats') {
        renderSmartStats();
    } else if (tab === 'custom') {
        renderCustomCategories();
    }
}

// Render learned patterns list
function renderLearnedPatterns() {
    const container = $('learnedPatternsList');
    if (!container) return;
    
    const patterns = SmartCategoryEngine.getLearnedPatterns();
    
    if (patterns.length === 0) {
        container.innerHTML = `
            <div class="learned-empty">
                <div class="learned-empty-icon">🧠</div>
                <div class="learned-empty-text">Niciun model învățat încă</div>
                <div class="learned-empty-hint">Aplicația va învăța automat din tranzacțiile tale</div>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="learned-list">
            ${patterns.slice(0, 50).map(([pattern, data]) => {
                const catInfo = findCat(data.category.includes('income') ? 'income' : 'expense', data.category);
                return `
                    <div class="learned-item">
                        <div class="learned-pattern">"${escapeHtml(pattern)}"</div>
                        <div class="learned-category">${catInfo?.icon || '📁'} ${data.subcategory || catInfo?.name || data.category}</div>
                        <button class="learned-delete" onclick="forgetPattern('${escapeHtml(pattern)}')" title="Uită">🗑️</button>
                    </div>
                `;
            }).join('')}
        </div>
        ${patterns.length > 50 ? `<p style="text-align: center; color: var(--text2); font-size: 12px; margin-top: 12px;">+ ${patterns.length - 50} alte modele</p>` : ''}
    `;
}

// Forget a learned pattern
function forgetPattern(pattern) {
    SmartCategoryEngine.forget(pattern);
    renderLearnedPatterns();
    toast('Model uitat!', 'success');
}

// Clear all learned patterns
function clearLearnedPatterns() {
    if (!confirm('Ești sigur că vrei să ștergi toate modelele învățate? Această acțiune nu poate fi anulată.')) return;
    
    SmartCategoryEngine.clearAllData();
    renderLearnedPatterns();
    toast('Toate modelele au fost șterse!', 'success');
}

// Render smart statistics
function renderSmartStats() {
    const container = $('smartStats');
    if (!container) return;
    
    const stats = SmartCategoryEngine.getUsageStats(state.transactions);
    const patterns = SmartCategoryEngine.getLearnedPatterns();
    
    // Category usage stats
    const sortedCats = Object.entries(stats.categoryCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
    
    container.innerHTML = `
        <div class="card" style="margin-bottom: 16px;">
            <div class="card-hdr">
                <span class="card-title">Statistici Generale</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; padding: 16px;">
                <div class="stat-box" style="text-align: center;">
                    <div style="font-size: 28px; font-weight: 700; color: var(--accent);">${patterns.length}</div>
                    <div style="font-size: 12px; color: var(--text2);">Modele învățate</div>
                </div>
                <div class="stat-box" style="text-align: center;">
                    <div style="font-size: 28px; font-weight: 700; color: var(--green);">${customCategories.expense.length + customCategories.income.length}</div>
                    <div style="font-size: 12px; color: var(--text2);">Categorii custom</div>
                </div>
                <div class="stat-box" style="text-align: center;">
                    <div style="font-size: 28px; font-weight: 700; color: var(--blue);">${state.transactions?.length || 0}</div>
                    <div style="font-size: 12px; color: var(--text2);">Total tranzacții</div>
                </div>
                <div class="stat-box" style="text-align: center;">
                    <div style="font-size: 28px; font-weight: 700; color: ${stats.uncategorized > 0 ? 'var(--orange)' : 'var(--green)'};">${stats.uncategorized}</div>
                    <div style="font-size: 12px; color: var(--text2);">Necategorizate</div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <div class="card-hdr">
                <span class="card-title">Top 10 Categorii</span>
            </div>
            <div style="padding: 12px;">
                ${sortedCats.map(([catId, count], i) => {
                    const catInfo = findCat('expense', catId) || findCat('income', catId);
                    const percentage = state.transactions?.length > 0 ? Math.round(count / state.transactions.length * 100) : 0;
                    return `
                        <div style="display: flex; align-items: center; gap: 12px; padding: 10px 0; ${i < sortedCats.length - 1 ? 'border-bottom: 1px solid var(--border);' : ''}">
                            <span style="font-size: 24px;">${catInfo?.icon || '📁'}</span>
                            <div style="flex: 1;">
                                <div style="font-weight: 500;">${catInfo?.name || catId}</div>
                                <div style="font-size: 12px; color: var(--text2);">${count} tranzacții</div>
                            </div>
                            <div style="font-weight: 600; color: var(--accent);">${percentage}%</div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

// Export smart data
function exportSmartData() {
    const data = SmartCategoryEngine.exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `budget-smart-data-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast('Date exportate!', 'success');
}

// Import smart data
function importSmartData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                SmartCategoryEngine.importData(data);
                renderLearnedPatterns();
                renderSmartStats();
                toast('Date importate cu succes!', 'success');
            } catch (err) {
                toast('Eroare la import', 'error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// Helper: escape HTML
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ═══════════════════════════════════════════════════════════════════════════════
// DEBT PAYOFF PLANNER - Snowball & Avalanche Strategies
// ═══════════════════════════════════════════════════════════════════════════════

let debtStrategy = 'snowball';

function setDebtStrategy(strategy) {
    debtStrategy = strategy;
    document.getElementById('stratSnowball').classList.toggle('on', strategy === 'snowball');
    document.getElementById('stratAvalanche').classList.toggle('on', strategy === 'avalanche');
    
    const desc = document.getElementById('strategyDesc');
    if (strategy === 'snowball') {
        desc.textContent = 'Snowball: Plătește mai întâi datoria cea mai mică. Motivație psihologică prin victorii rapide.';
    } else {
        desc.textContent = 'Avalanche: Plătește mai întâi datoria cu dobânda cea mai mare. Economisești mai mult pe termen lung.';
    }
    calculateDebtPlan();
}

function calculateDebtPlan() {
    const monthlyPayment = parseFloat(document.getElementById('monthlyDebtPayment').value) || 0;
    const debts = (state.debts || []).filter(d => d.type === 'owed' && d.amount > 0);
    
    if (debts.length === 0 || monthlyPayment <= 0) {
        document.getElementById('debtPlanResults').style.display = 'none';
        return;
    }
    
    // Clone debts for simulation
    let simDebts = debts.map(d => ({
        name: d.name,
        amount: d.amount,
        rate: d.interestRate || 0,
        minPayment: d.minPayment || Math.ceil(d.amount * 0.02)
    }));
    
    // Sort based on strategy
    if (debtStrategy === 'snowball') {
        simDebts.sort((a, b) => a.amount - b.amount);
    } else {
        simDebts.sort((a, b) => b.rate - a.rate);
    }
    
    // Calculate minimum payments total
    const minTotal = simDebts.reduce((s, d) => s + d.minPayment, 0);
    
    if (monthlyPayment < minTotal) {
        document.getElementById('debtPlanResults').style.display = 'block';
        document.getElementById('debtPlanSummary').innerHTML = `
            <div style="padding:16px;background:var(--negative-subtle);border-radius:var(--radius-md);color:var(--negative);">
                Plata lunară minimă necesară: <strong>${fmt(minTotal)}</strong>. 
                Crește suma pentru a acoperi cel puțin plățile minime.
            </div>
        `;
        document.getElementById('debtPlanTimeline').innerHTML = '';
        return;
    }
    
    // Simulate payoff
    let months = 0;
    let totalInterest = 0;
    const timeline = [];
    const maxMonths = 360; // 30 years max
    
    while (simDebts.some(d => d.amount > 0) && months < maxMonths) {
        months++;
        let available = monthlyPayment;
        
        // Apply interest
        simDebts.forEach(d => {
            if (d.amount > 0 && d.rate > 0) {
                const interest = d.amount * (d.rate / 100 / 12);
                d.amount += interest;
                totalInterest += interest;
            }
        });
        
        // Pay minimums first
        simDebts.forEach(d => {
            if (d.amount > 0) {
                const payment = Math.min(d.minPayment, d.amount, available);
                d.amount -= payment;
                available -= payment;
            }
        });
        
        // Extra payment to first debt (snowball/avalanche target)
        for (const d of simDebts) {
            if (d.amount > 0 && available > 0) {
                const extra = Math.min(available, d.amount);
                d.amount -= extra;
                available -= extra;
                
                if (d.amount <= 0.01) {
                    timeline.push({ month: months, name: d.name });
                }
                break;
            }
        }
        
        simDebts = simDebts.filter(d => d.amount > 0.01);
    }
    
    // Display results
    document.getElementById('debtPlanResults').style.display = 'block';
    
    const totalDebt = debts.reduce((s, d) => s + d.amount, 0);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    const timeStr = years > 0 ? `${years} ani și ${remainingMonths} luni` : `${months} luni`;
    
    document.getElementById('debtPlanSummary').innerHTML = `
        <div class="stats-row">
            <div class="stat-card">
                <div class="stat-val">${timeStr}</div>
                <div class="stat-lbl">Timp până la zero</div>
            </div>
            <div class="stat-card">
                <div class="stat-val">${fmt(totalDebt)}</div>
                <div class="stat-lbl">Total datorii</div>
            </div>
            <div class="stat-card">
                <div class="stat-val" style="color:var(--negative)">${fmt(totalInterest)}</div>
                <div class="stat-lbl">Dobândă totală</div>
            </div>
        </div>
    `;
    
    // Timeline
    let timelineHtml = '<div style="font-size:14px;">';
    timelineHtml += '<p style="color:var(--text-secondary);margin-bottom:12px;"><strong>Ordinea plății:</strong></p>';
    
    timeline.forEach((item, i) => {
        timelineHtml += `
            <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border);">
                <div style="width:28px;height:28px;background:var(--accent-subtle);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;color:var(--accent);">${i + 1}</div>
                <div style="flex:1;">
                    <div style="font-weight:500;">${item.name}</div>
                    <div style="font-size:12px;color:var(--text-tertiary);">Luna ${item.month}</div>
                </div>
                <div style="color:var(--positive);font-size:12px;font-weight:500;">PLĂTIT</div>
            </div>
        `;
    });
    
    timelineHtml += '</div>';
    document.getElementById('debtPlanTimeline').innerHTML = timelineHtml;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CASH FLOW FORECAST
// ═══════════════════════════════════════════════════════════════════════════════

function renderCashFlowForecast() {
    const now = new Date();
    const transactions = state.transactions || [];
    const recurring = state.recurring || [];
    
    // Calculate historical averages (last 3 months)
    const threeMonthsAgo = new Date(now);
    threeMonthsAgo.setMonth(now.getMonth() - 3);
    
    const recentTx = transactions.filter(t => new Date(t.date) >= threeMonthsAgo);
    const avgIncome = recentTx.filter(t => t.type === 'income').reduce((s, t) => s + (t.amount || 0), 0) / 3;
    const avgExpense = recentTx.filter(t => t.type === 'expense').reduce((s, t) => s + (t.amount || 0), 0) / 3;
    const avgSavings = avgIncome - avgExpense;
    
    document.getElementById('cfAvgIncome').textContent = fmt(avgIncome);
    document.getElementById('cfAvgExpense').textContent = fmt(avgExpense);
    document.getElementById('cfNetSavings').textContent = fmt(avgSavings);
    document.getElementById('cfNetSavings').style.color = avgSavings >= 0 ? 'var(--positive)' : 'var(--negative)';
    
    // Calculate recurring monthly totals
    let recurringIncome = 0;
    let recurringExpense = 0;
    
    recurring.forEach(r => {
        const monthlyAmount = r.frequency === 'weekly' ? r.amount * 4.33 :
                             r.frequency === 'biweekly' ? r.amount * 2.17 :
                             r.frequency === 'yearly' ? r.amount / 12 : r.amount;
        
        if (r.type === 'income') {
            recurringIncome += monthlyAmount;
        } else {
            recurringExpense += monthlyAmount;
        }
    });
    
    // Project next 6 months
    const forecast = [];
    let runningBalance = state.netWorth || 0;
    const monthNames = ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let i = 0; i < 6; i++) {
        const futureDate = new Date(now);
        futureDate.setMonth(now.getMonth() + i + 1);
        
        // Use recurring + historical variance
        const projectedIncome = recurringIncome > 0 ? recurringIncome : avgIncome;
        const projectedExpense = recurringExpense > 0 ? recurringExpense : avgExpense;
        const netFlow = projectedIncome - projectedExpense;
        runningBalance += netFlow;
        
        forecast.push({
            month: monthNames[futureDate.getMonth()],
            year: futureDate.getFullYear(),
            income: projectedIncome,
            expense: projectedExpense,
            net: netFlow,
            balance: runningBalance
        });
    }
    
    // Render chart
    const maxVal = Math.max(...forecast.map(f => Math.max(f.income, f.expense)));
    let chartHtml = '';
    
    forecast.forEach(f => {
        const incWidth = maxVal > 0 ? (f.income / maxVal) * 100 : 0;
        const expWidth = maxVal > 0 ? (f.expense / maxVal) * 100 : 0;
        
        chartHtml += `
            <div style="margin-bottom:16px;">
                <div style="font-size:12px;color:var(--text-tertiary);margin-bottom:6px;">${f.month} ${f.year}</div>
                <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                    <div style="width:60px;font-size:12px;color:var(--text-secondary);">Venituri</div>
                    <div style="flex:1;height:8px;background:var(--bg);border-radius:4px;overflow:hidden;">
                        <div style="width:${incWidth}%;height:100%;background:var(--positive);border-radius:4px;"></div>
                    </div>
                    <div style="width:70px;text-align:right;font-size:12px;font-weight:500;color:var(--positive);">${fmt(f.income)}</div>
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                    <div style="width:60px;font-size:12px;color:var(--text-secondary);">Cheltuieli</div>
                    <div style="flex:1;height:8px;background:var(--bg);border-radius:4px;overflow:hidden;">
                        <div style="width:${expWidth}%;height:100%;background:var(--negative);border-radius:4px;"></div>
                    </div>
                    <div style="width:70px;text-align:right;font-size:12px;font-weight:500;color:var(--negative);">${fmt(f.expense)}</div>
                </div>
            </div>
        `;
    });
    
    document.getElementById('cashFlowChart').innerHTML = chartHtml;
    
    // Render recurring impact
    let recurringHtml = '';
    if (recurring.length === 0) {
        recurringHtml = '<p style="color:var(--text-tertiary);font-size:14px;">Nu ai tranzacții recurente configurate.</p>';
    } else {
        recurringHtml = `
            <div class="stats-row" style="margin-bottom:16px;">
                <div class="stat-card">
                    <div class="stat-val" style="color:var(--positive);">${fmt(recurringIncome)}</div>
                    <div class="stat-lbl">Venituri lunare</div>
                </div>
                <div class="stat-card">
                    <div class="stat-val" style="color:var(--negative);">${fmt(recurringExpense)}</div>
                    <div class="stat-lbl">Cheltuieli fixe</div>
                </div>
            </div>
            <div style="font-size:14px;">
        `;
        
        recurring.slice(0, 5).forEach(r => {
            const cat = findCat(r.type, r.category);
            recurringHtml += `
                <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border);">
                    <span style="color:var(--text-secondary);">${r.note || cat?.name || r.category}</span>
                    <span style="font-weight:500;color:${r.type === 'income' ? 'var(--positive)' : 'var(--negative)'};">${r.type === 'income' ? '+' : '-'}${fmt(r.amount)}</span>
                </div>
            `;
        });
        
        recurringHtml += '</div>';
    }
    
    document.getElementById('recurringImpact').innerHTML = recurringHtml;
    
    // Render projected balance
    let balanceHtml = '<div style="font-size:14px;">';
    forecast.forEach(f => {
        balanceHtml += `
            <div style="display:flex;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--border);">
                <span>${f.month} ${f.year}</span>
                <span style="font-weight:600;color:${f.balance >= 0 ? 'var(--positive)' : 'var(--negative)'};">${fmt(f.balance)}</span>
            </div>
        `;
    });
    balanceHtml += '</div>';
    
    document.getElementById('projectedBalance').innerHTML = balanceHtml;
}

// ═══════════════════════════════════════════════════════════════════════════════
// CSV IMPORT - ING, BT, BCR, Raiffeisen
// ═══════════════════════════════════════════════════════════════════════════════

let pendingCSVTransactions = [];

function handleCSVUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const bank = document.getElementById('bankSelect').value;
    if (!bank) {
        toast('Selectează banca mai întâi', 'warning');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const content = e.target.result;
            pendingCSVTransactions = parseCSV(content, bank);
            
            if (pendingCSVTransactions.length === 0) {
                toast('Nu s-au găsit tranzacții în fișier', 'warning');
                return;
            }
            
            // Show preview
            document.getElementById('csvPreview').style.display = 'block';
            document.getElementById('csvCount').textContent = `${pendingCSVTransactions.length} tranzacții`;
            
            let previewHtml = '';
            pendingCSVTransactions.slice(0, 10).forEach(tx => {
                previewHtml += `
                    <div class="tx-item" style="cursor:default;">
                        <div class="tx-icon">${tx.type === 'income' ? '↑' : '↓'}</div>
                        <div class="tx-info">
                            <div class="tx-name">${tx.note || 'Fără descriere'}</div>
                            <div class="tx-cat">${tx.date} • ${findCat(tx.type, tx.category)?.name || tx.category}</div>
                        </div>
                        <div class="tx-amt ${tx.type === 'expense' ? 'exp' : 'inc'}">${tx.type === 'income' ? '+' : '-'}${fmt(tx.amount)}</div>
                    </div>
                `;
            });
            
            if (pendingCSVTransactions.length > 10) {
                previewHtml += `<p style="text-align:center;padding:12px;color:var(--text-tertiary);">... și încă ${pendingCSVTransactions.length - 10} tranzacții</p>`;
            }
            
            document.getElementById('csvPreviewList').innerHTML = previewHtml;
            
        } catch (err) {
            console.error('CSV parse error:', err);
            toast('Eroare la citirea fișierului', 'error');
        }
    };
    reader.readAsText(file);
}

function parseCSV(content, bank) {
    const lines = content.split('\n').filter(l => l.trim());
    const transactions = [];
    
    // Bank-specific parsers
    const parsers = {
        ing: parseINGCSV,
        bt: parseBTCSV,
        bcr: parseBCRCSV,
        raiffeisen: parseRaiffeisenCSV,
        generic: parseGenericCSV
    };
    
    const parser = parsers[bank] || parsers.generic;
    return parser(lines);
}

function parseINGCSV(lines) {
    // ING format: Data, Descriere, Debit, Credit, Sold
    const transactions = [];
    
    for (let i = 1; i < lines.length; i++) {
        const cols = parseCSVLine(lines[i]);
        if (cols.length < 4) continue;
        
        const date = parseDate(cols[0]);
        const description = cols[1] || '';
        const debit = parseAmount(cols[2]);
        const credit = parseAmount(cols[3]);
        
        if (debit > 0 || credit > 0) {
            const amount = debit > 0 ? debit : credit;
            const type = debit > 0 ? 'expense' : 'income';
            
            transactions.push({
                date: date,
                type: type,
                amount: amount,
                note: description.substring(0, 100),
                category: detectCategory(description, type),
                subcategory: description.substring(0, 50)
            });
        }
    }
    
    return transactions;
}

function parseBTCSV(lines) {
    // BT format: Data, Referinta, Descriere, Suma, Moneda
    const transactions = [];
    
    for (let i = 1; i < lines.length; i++) {
        const cols = parseCSVLine(lines[i]);
        if (cols.length < 4) continue;
        
        const date = parseDate(cols[0]);
        const description = cols[2] || '';
        const amount = parseAmount(cols[3]);
        
        if (amount !== 0) {
            const type = amount < 0 ? 'expense' : 'income';
            
            transactions.push({
                date: date,
                type: type,
                amount: Math.abs(amount),
                note: description.substring(0, 100),
                category: detectCategory(description, type),
                subcategory: description.substring(0, 50)
            });
        }
    }
    
    return transactions;
}

function parseBCRCSV(lines) {
    // BCR/George format: Data, Descriere, Suma, Sold
    const transactions = [];
    
    for (let i = 1; i < lines.length; i++) {
        const cols = parseCSVLine(lines[i]);
        if (cols.length < 3) continue;
        
        const date = parseDate(cols[0]);
        const description = cols[1] || '';
        const amount = parseAmount(cols[2]);
        
        if (amount !== 0) {
            const type = amount < 0 ? 'expense' : 'income';
            
            transactions.push({
                date: date,
                type: type,
                amount: Math.abs(amount),
                note: description.substring(0, 100),
                category: detectCategory(description, type),
                subcategory: description.substring(0, 50)
            });
        }
    }
    
    return transactions;
}

function parseRaiffeisenCSV(lines) {
    // Similar to BCR
    return parseBCRCSV(lines);
}

function parseGenericCSV(lines) {
    // Generic: tries to detect columns
    const transactions = [];
    const header = parseCSVLine(lines[0]).map(h => h.toLowerCase());
    
    // Find column indices
    const dateIdx = header.findIndex(h => h.includes('dat') || h.includes('date'));
    const descIdx = header.findIndex(h => h.includes('desc') || h.includes('note') || h.includes('detail'));
    const amountIdx = header.findIndex(h => h.includes('sum') || h.includes('amount') || h.includes('val'));
    const debitIdx = header.findIndex(h => h.includes('debit') || h.includes('cheltu'));
    const creditIdx = header.findIndex(h => h.includes('credit') || h.includes('venit'));
    
    for (let i = 1; i < lines.length; i++) {
        const cols = parseCSVLine(lines[i]);
        
        const date = dateIdx >= 0 ? parseDate(cols[dateIdx]) : new Date().toISOString().split('T')[0];
        const description = descIdx >= 0 ? cols[descIdx] : '';
        
        let amount = 0;
        let type = 'expense';
        
        if (debitIdx >= 0 && creditIdx >= 0) {
            const debit = parseAmount(cols[debitIdx]);
            const credit = parseAmount(cols[creditIdx]);
            amount = debit > 0 ? debit : credit;
            type = debit > 0 ? 'expense' : 'income';
        } else if (amountIdx >= 0) {
            amount = parseAmount(cols[amountIdx]);
            type = amount < 0 ? 'expense' : 'income';
            amount = Math.abs(amount);
        }
        
        if (amount > 0) {
            transactions.push({
                date: date,
                type: type,
                amount: amount,
                note: description.substring(0, 100),
                category: detectCategory(description, type),
                subcategory: description.substring(0, 50)
            });
        }
    }
    
    return transactions;
}

function parseCSVLine(line) {
    const result = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if ((char === ',' || char === ';') && !inQuotes) {
            result.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    result.push(current.trim());
    
    return result;
}

function parseDate(str) {
    if (!str) return new Date().toISOString().split('T')[0];
    
    // Try various formats
    const cleaned = str.trim().replace(/['"]/g, '');
    
    // DD.MM.YYYY or DD/MM/YYYY
    const euMatch = cleaned.match(/(\d{1,2})[.\/](\d{1,2})[.\/](\d{4})/);
    if (euMatch) {
        return `${euMatch[3]}-${euMatch[2].padStart(2, '0')}-${euMatch[1].padStart(2, '0')}`;
    }
    
    // YYYY-MM-DD
    const isoMatch = cleaned.match(/(\d{4})-(\d{2})-(\d{2})/);
    if (isoMatch) {
        return cleaned.substring(0, 10);
    }
    
    return new Date().toISOString().split('T')[0];
}

function parseAmount(str) {
    if (!str) return 0;
    
    // Remove currency symbols and spaces
    let cleaned = str.replace(/[RON|EUR|USD|LEI|\s]/gi, '').trim();
    
    // Handle European format (1.234,56) vs US format (1,234.56)
    if (cleaned.includes(',') && cleaned.includes('.')) {
        if (cleaned.lastIndexOf(',') > cleaned.lastIndexOf('.')) {
            // European: 1.234,56
            cleaned = cleaned.replace(/\./g, '').replace(',', '.');
        } else {
            // US: 1,234.56
            cleaned = cleaned.replace(/,/g, '');
        }
    } else if (cleaned.includes(',')) {
        // Could be either 1234,56 or 1,234
        const parts = cleaned.split(',');
        if (parts[1] && parts[1].length === 2) {
            cleaned = cleaned.replace(',', '.');
        } else {
            cleaned = cleaned.replace(',', '');
        }
    }
    
    return parseFloat(cleaned) || 0;
}

function detectCategory(description, type) {
    const desc = description.toLowerCase();
    
    if (type === 'income') {
        if (desc.includes('salar') || desc.includes('wage')) return 'salary';
        if (desc.includes('dividen') || desc.includes('dobând')) return 'investments';
        return 'other_income';
    }
    
    // Expense categories
    if (desc.includes('lidl') || desc.includes('kaufland') || desc.includes('mega') || desc.includes('carrefour') || desc.includes('auchan') || desc.includes('penny') || desc.includes('profi')) return 'food';
    if (desc.includes('glovo') || desc.includes('tazz') || desc.includes('bolt food') || desc.includes('foodpanda')) return 'food';
    if (desc.includes('uber') || desc.includes('bolt') || desc.includes('taxi')) return 'transport';
    if (desc.includes('omv') || desc.includes('petrom') || desc.includes('mol') || desc.includes('rompetrol') || desc.includes('benzin')) return 'transport';
    if (desc.includes('enel') || desc.includes('electrica') || desc.includes('curent')) return 'utilities';
    if (desc.includes('engie') || desc.includes('distrigaz') || desc.includes('gaz')) return 'utilities';
    if (desc.includes('raja') || desc.includes('apa nova') || desc.includes('apă')) return 'utilities';
    if (desc.includes('orange') || desc.includes('vodafone') || desc.includes('digi') || desc.includes('telekom')) return 'subscriptions';
    if (desc.includes('netflix') || desc.includes('spotify') || desc.includes('hbo') || desc.includes('disney')) return 'subscriptions';
    if (desc.includes('emag') || desc.includes('altex') || desc.includes('flanco') || desc.includes('media galaxy')) return 'shopping';
    if (desc.includes('zara') || desc.includes('h&m') || desc.includes('reserved') || desc.includes('decathlon')) return 'shopping';
    if (desc.includes('farmacie') || desc.includes('sensiblu') || desc.includes('catena') || desc.includes('doctor')) return 'health';
    if (desc.includes('chirie') || desc.includes('rent') || desc.includes('întreținere')) return 'housing';
    if (desc.includes('cinema') || desc.includes('bilet') || desc.includes('concert')) return 'entertainment';
    
    return 'other';
}

async function importCSVTransactions() {
    if (pendingCSVTransactions.length === 0) return;
    
    let imported = 0;
    const batch = db.batch();
    
    for (const tx of pendingCSVTransactions) {
        const data = {
            type: tx.type,
            amount: tx.amount,
            category: tx.category,
            subcategory: tx.subcategory || '',
            date: tx.date,
            note: tx.note || '',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        const ref = db.collection('users').doc(state.user.uid).collection('transactions').doc();
        batch.set(ref, data);
        
        state.transactions.push({ id: ref.id, ...data });
        imported++;
    }
    
    await batch.commit();
    
    toast(`${imported} tranzacții importate`, 'success');
    cancelCSVImport();
    updateHome();
}

function cancelCSVImport() {
    pendingCSVTransactions = [];
    document.getElementById('csvPreview').style.display = 'none';
    document.getElementById('csvFileInput').value = '';
}

// Drag and drop support
document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    if (dropZone) {
        dropZone.addEventListener('dragover', e => {
            e.preventDefault();
            dropZone.style.borderColor = 'var(--accent)';
        });
        
        dropZone.addEventListener('dragleave', e => {
            dropZone.style.borderColor = 'var(--border)';
        });
        
        dropZone.addEventListener('drop', e => {
            e.preventDefault();
            dropZone.style.borderColor = 'var(--border)';
            
            const file = e.dataTransfer.files[0];
            if (file) {
                document.getElementById('csvFileInput').files = e.dataTransfer.files;
                handleCSVUpload({ target: { files: [file] } });
            }
        });
    }
});

// ═══════════════════════════════════════════════════════════════════════════════
// PDF REPORT GENERATION
// ═══════════════════════════════════════════════════════════════════════════════

async function generatePDFReport() {
    toast('Se generează raportul...', 'info');
    
    const now = new Date();
    const monthName = now.toLocaleDateString('ro-RO', { month: 'long', year: 'numeric' });
    
    // Get data for report
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthTx = (state.transactions || []).filter(t => new Date(t.date) >= monthStart);
    
    const income = monthTx.filter(t => t.type === 'income').reduce((s, t) => s + (t.amount || 0), 0);
    const expense = monthTx.filter(t => t.type === 'expense').reduce((s, t) => s + (t.amount || 0), 0);
    const balance = income - expense;
    
    // Group expenses by category
    const byCategory = {};
    monthTx.filter(t => t.type === 'expense').forEach(t => {
        const cat = t.category || 'other';
        if (!byCategory[cat]) byCategory[cat] = 0;
        byCategory[cat] += t.amount || 0;
    });
    
    const sortedCategories = Object.entries(byCategory)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
    
    // Create PDF using HTML + print
    const reportHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Raport Financiar - ${monthName}</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { font-family: 'Inter', sans-serif; padding: 40px; color: #1a1a1a; line-height: 1.6; }
                .header { text-align: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid #14b8a6; }
                .header h1 { font-size: 28px; font-weight: 700; margin-bottom: 8px; }
                .header p { color: #666; font-size: 14px; }
                .summary { display: flex; justify-content: space-around; margin-bottom: 40px; }
                .summary-item { text-align: center; padding: 20px; background: #f8f8f8; border-radius: 12px; min-width: 150px; }
                .summary-item .value { font-size: 24px; font-weight: 700; margin-bottom: 4px; }
                .summary-item .label { font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 0.5px; }
                .positive { color: #22c55e; }
                .negative { color: #ef4444; }
                .section { margin-bottom: 30px; }
                .section h2 { font-size: 18px; font-weight: 600; margin-bottom: 16px; padding-bottom: 8px; border-bottom: 1px solid #e5e5e5; }
                table { width: 100%; border-collapse: collapse; }
                th, td { padding: 12px; text-align: left; border-bottom: 1px solid #e5e5e5; }
                th { font-weight: 600; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; color: #666; }
                td { font-size: 14px; }
                .amount { text-align: right; font-weight: 500; }
                .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e5e5; text-align: center; font-size: 12px; color: #999; }
                @media print { body { padding: 20px; } }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>Raport Financiar</h1>
                <p>${monthName} • ${state.user?.displayName || state.user?.email || 'Utilizator'}</p>
            </div>
            
            <div class="summary">
                <div class="summary-item">
                    <div class="value positive">+${formatNumber(income)} RON</div>
                    <div class="label">Venituri</div>
                </div>
                <div class="summary-item">
                    <div class="value negative">-${formatNumber(expense)} RON</div>
                    <div class="label">Cheltuieli</div>
                </div>
                <div class="summary-item">
                    <div class="value ${balance >= 0 ? 'positive' : 'negative'}">${balance >= 0 ? '+' : ''}${formatNumber(balance)} RON</div>
                    <div class="label">Balanță</div>
                </div>
            </div>
            
            <div class="section">
                <h2>Cheltuieli pe categorii</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Categorie</th>
                            <th class="amount">Sumă</th>
                            <th class="amount">%</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${sortedCategories.map(([cat, amount]) => `
                            <tr>
                                <td>${findCat('expense', cat)?.name || cat}</td>
                                <td class="amount">${formatNumber(amount)} RON</td>
                                <td class="amount">${expense > 0 ? Math.round((amount / expense) * 100) : 0}%</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="section">
                <h2>Ultimele tranzacții</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Descriere</th>
                            <th>Categorie</th>
                            <th class="amount">Sumă</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${monthTx.slice(0, 15).map(t => `
                            <tr>
                                <td>${t.date}</td>
                                <td>${t.subcategory || t.note || '-'}</td>
                                <td>${findCat(t.type, t.category)?.name || t.category}</td>
                                <td class="amount ${t.type === 'expense' ? 'negative' : 'positive'}">${t.type === 'income' ? '+' : '-'}${formatNumber(t.amount)} RON</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            <div class="footer">
                <p>Generat de Budget Pro • ${new Date().toLocaleDateString('ro-RO')} ${new Date().toLocaleTimeString('ro-RO', { hour: '2-digit', minute: '2-digit' })}</p>
            </div>
        </body>
        </html>
    `;
    
    // Open in new window for printing
    const printWindow = window.open('', '_blank');
    printWindow.document.write(reportHtml);
    printWindow.document.close();
    
    // Wait for fonts to load then print
    setTimeout(() => {
        printWindow.print();
    }, 500);
}

function formatNumber(num) {
    return Math.round(num).toLocaleString('ro-RO');
}

// ═══════════════════════════════════════════════════════════════════════════════
// NAV UPDATES FOR NEW VIEWS
// ═══════════════════════════════════════════════════════════════════════════════

// Update nav function to handle new views
const originalNav = window.nav || nav;
const newNav = function(view) {
    // Call original nav
    if (typeof originalNav === 'function') {
        originalNav(view);
    }
    
    // Render specific views
    if (view === 'cashFlow') {
        renderCashFlowForecast();
    }
    if (view === 'debtPlanner') {
        calculateDebtPlan();
    }
};

// Override nav
window.nav = function(view) {
    // Hide all views
    document.querySelectorAll('.view').forEach(v => v.classList.remove('on'));
    
    // Show target view
    const targetView = document.getElementById(view + 'View');
    if (targetView) {
        targetView.classList.add('on');
    }
    
    // Update header
    const titles = {
        home: 'Budget Pro',
        transactions: 'Tranzacții',
        analytics: 'Analiză',
        budgets: 'Bugete',
        goals: 'Obiective',
        menu: 'Profil',
        settings: 'Setări',
        debts: 'Datorii',
        debtPlanner: 'Debt Planner',
        cashFlow: 'Cash Flow',
        import: 'Import CSV'
    };
    
    const hdrTitle = document.getElementById('hdrTitle');
    if (hdrTitle) {
        hdrTitle.textContent = titles[view] || 'Budget Pro';
    }
    
    // Render specific views
    if (view === 'cashFlow') {
        renderCashFlowForecast();
    }
    if (view === 'debtPlanner') {
        calculateDebtPlan();
    }
};

// AI & Custom Categories exports
window.openSmartAdd = openSmartAdd;
window.processSmartInput = processSmartInput;
window.saveSmartTx = saveSmartTx;
window.openCustomCatModal = openCustomCatModal;
window.editCustomCat = editCustomCat;
window.saveCustomCat = saveCustomCat;
window.deleteCustomCat = deleteCustomCat;
window.getAllCategories = getAllCategories;
// Smart Category System exports
window.showSmartTab = showSmartTab;
window.renderLearnedPatterns = renderLearnedPatterns;
window.forgetPattern = forgetPattern;
window.clearLearnedPatterns = clearLearnedPatterns;
window.exportSmartData = exportSmartData;
window.importSmartData = importSmartData;
window.handleSubcatChange = handleSubcatChange;
window.handleNoteInput = handleNoteInput;
window.applyAutoSuggestion = applyAutoSuggestion;
window.SmartCategoryEngine = SmartCategoryEngine;
// GENIUS AI exports
window.openWhatIfSimulator = openWhatIfSimulator;
window.updateWhatIfSimulation = updateWhatIfSimulation;
window.applySmartBudget = applySmartBudget;
window.applyAllSmartBudgets = applyAllSmartBudgets;
window.addSmartGoal = addSmartGoal;
window.renderGeniusDashboard = renderGeniusDashboard;
// Quick Wins exports
window.setDebtStrategy = setDebtStrategy;
window.calculateDebtPlan = calculateDebtPlan;
window.renderCashFlowForecast = renderCashFlowForecast;
window.handleCSVUpload = handleCSVUpload;
window.importCSVTransactions = importCSVTransactions;
window.cancelCSVImport = cancelCSVImport;
window.generatePDFReport = generatePDFReport;
