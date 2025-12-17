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
        // 🍔 MÂNCARE & BĂUTURI
        { id: 'food', name: 'Mâncare & Băuturi', icon: '🍔', color: '#ef4444', 
          keywords: ['mancare', 'food', 'meal', 'lunch', 'dinner', 'breakfast', 'mic dejun', 'pranz', 'cina'],
          subs: ['Supermarket', 'Hypermarket', 'Magazin alimentar', 'Piață', 'Aprozar', 'Măcelărie', 'Brutărie', 'Patiserie', 'Cofetărie', 'Restaurant', 'Pizzerie', 'Fast-food', 'McDonalds', 'KFC', 'Subway', 'Burger King', 'Shaormerie', 'Chinezesc', 'Sushi', 'Italienesc', 'Grecesc', 'Românesc', 'Livrare mâncare', 'Glovo', 'Tazz', 'Bolt Food', 'Foodpanda', 'Cafea', 'Starbucks', 'Ted\'s Coffee', 'Cafenea', 'Ceainărie', 'Sucuri', 'Băuturi răcoritoare', 'Apă', 'Alcool', 'Bere', 'Vin', 'Spirtoase', 'Pub', 'Bar', 'Club', 'Gustări', 'Snacks', 'Dulciuri', 'Ciocolată', 'Înghețată', 'Fructe', 'Legume', 'Carne', 'Lactate', 'Ouă', 'Pâine', 'Conserve', 'Condimente', 'Mâncare bio', 'Vegan', 'Vegetarian'] },
        
        // 🚗 TRANSPORT
        { id: 'transport', name: 'Transport', icon: '🚗', color: '#f59e0b',
          keywords: ['transport', 'masina', 'car', 'benzina', 'motorina', 'uber', 'bolt', 'taxi', 'bus', 'metrou', 'tren'],
          subs: ['Benzină', 'Motorină', 'GPL', 'Încărcare electrică', 'Tesla Supercharger', 'Uber', 'Bolt', 'Taxi', 'Transport public', 'STB', 'Metrorex', 'Abonament transport', 'Bilet autobuz', 'Bilet metrou', 'CFR', 'Tren', 'Interregio', 'Regio', 'Avion', 'Bilet avion', 'Wizz Air', 'Ryanair', 'Blue Air', 'Tarom', 'Parcare', 'Parcare mall', 'Parcare stradală', 'Parcare aeroport', 'Rovignetă', 'Taxa pod', 'Taxă drum', 'Autostradă', 'Service auto', 'ITP', 'Schimb ulei', 'Revizie', 'Frâne', 'Cauciucuri', 'Anvelope iarnă', 'Anvelope vară', 'Vulcanizare', 'Spălătorie auto', 'Detailing', 'Polish', 'Piese auto', 'Accesorii auto', 'Asigurare RCA', 'Asigurare CASCO', 'Leasing auto', 'Rată mașină', 'Chirie mașină', 'Rent a car', 'Car sharing', 'Amendă rutieră', 'Amendă parcare', 'Combustibil', 'OMV', 'Petrom', 'Rompetrol', 'MOL', 'Lukoil'] },
        
        // 🏠 LOCUINȚĂ
        { id: 'housing', name: 'Locuință', icon: '🏠', color: '#8b5cf6',
          keywords: ['casa', 'locuinta', 'chirie', 'rent', 'apartament', 'rata', 'intretinere', 'bloc'],
          subs: ['Chirie apartament', 'Chirie casă', 'Chirie garsonieră', 'Chirie cameră', 'Rată ipotecară', 'Credit imobiliar', 'Dobândă credit', 'Întreținere', 'Asociație proprietari', 'Fond rulment', 'Fond reparații', 'Curățenie scară', 'Salubrizare', 'Reparații casă', 'Instalator', 'Electrician', 'Zugrav', 'Tâmplar', 'Lacătuș', 'Reparații urgente', 'Renovare', 'Amenajare', 'Decorațiuni', 'Mobilă', 'IKEA', 'JYSK', 'Dedeman', 'Hornbach', 'Leroy Merlin', 'Mobilier living', 'Mobilier dormitor', 'Mobilier bucătărie', 'Canapea', 'Pat', 'Masă', 'Scaune', 'Dulap', 'Birou', 'Electrocasnice', 'Frigider', 'Mașină spălat', 'Uscător', 'Aragaz', 'Cuptor', 'Hotă', 'Aspirator', 'Aer condiționat', 'Centrală termică', 'Boiler', 'Articole menaj', 'Vase', 'Tacâmuri', 'Oale', 'Lenjerie pat', 'Prosoape', 'Perdele', 'Draperii', 'Covoare', 'Plante', 'Grădinărit', 'Unelte grădină', 'Mobilier grădină', 'Piscină', 'Securitate', 'Alarmă', 'Cameră supraveghere', 'Interfon', 'Încuietoare smart', 'Asigurare locuință'] },
        
        // 💡 UTILITĂȚI
        { id: 'utilities', name: 'Utilități', icon: '💡', color: '#3b82f6',
          keywords: ['utilitate', 'curent', 'gaz', 'apa', 'electricitate', 'factura', 'enel', 'engie', 'digi', 'rds'],
          subs: ['Electricitate', 'Enel', 'E.ON', 'Electrica', 'CEZ', 'Gaz', 'Engie', 'E.ON Gaz', 'Apă', 'Apă Nova', 'Apa Canal', 'Apă caldă', 'Apă rece', 'Canalizare', 'Gunoi', 'Salubritate', 'Încălzire', 'Termoficare', 'RADET', 'Lemne', 'Peleți', 'Cărbuni', 'Internet', 'Digi', 'RCS-RDS', 'Orange Home', 'Vodafone', 'Telekom', 'UPC', 'Fibră optică', 'Telefon fix', 'Telefon mobil', 'Abonament Orange', 'Abonament Vodafone', 'Abonament Telekom', 'Abonament Digi', 'Cartela prepaid', 'TV cablu', 'TV satelit', 'Digi TV', 'Orange TV', 'Telekom TV', 'Focus Sat', 'Întreținere bloc', 'Administrator bloc'] },
        
        // 💊 SĂNĂTATE
        { id: 'health', name: 'Sănătate', icon: '💊', color: '#10b981',
          keywords: ['sanatate', 'doctor', 'medic', 'farmacie', 'medicamente', 'spital', 'clinica', 'dentist', 'stomatolog'],
          subs: ['Medicamente', 'Farmacie', 'Catena', 'Sensiblu', 'HelpNet', 'Dr. Max', 'Tei', 'Antibiotice', 'Vitamine', 'Suplimente', 'Consultație medic', 'Medic familie', 'Medic specialist', 'Cardiolog', 'Dermatolog', 'Ginecolog', 'Urolog', 'Neurolog', 'Oftalmolog', 'ORL', 'Psihiatru', 'Psiholog', 'Psihoterapeut', 'Analize medicale', 'Analize sânge', 'Ecografie', 'RMN', 'CT', 'Radiografie', 'EKG', 'Spital', 'Internare', 'Operație', 'Urgențe', 'Ambulanță', 'Stomatolog', 'Dentist', 'Implant dentar', 'Coroană dentară', 'Detartraj', 'Albire dinți', 'Aparat dentar', 'Ortodont', 'Oftalmolog', 'Ochelari', 'Lentile contact', 'Operație ochi', 'Kinetoterapie', 'Fizioterapie', 'Masaj terapeutic', 'Recuperare', 'Tratament spa', 'Vaccinuri', 'Vaccin gripal', 'Asigurare sănătate', 'Asigurare privată', 'Regina Maria', 'MedLife', 'Sanador', 'Memorial'] },
        
        // 🛍️ CUMPĂRĂTURI
        { id: 'shopping', name: 'Cumpărături', icon: '🛍️', color: '#ec4899',
          keywords: ['shopping', 'cumparaturi', 'mall', 'haine', 'incaltaminte', 'pantofi', 'geanta', 'accesorii', 'fashion'],
          subs: ['Haine', 'Blugi', 'Pantaloni', 'Cămăși', 'Tricouri', 'Rochii', 'Fuste', 'Sacouri', 'Paltoane', 'Geci', 'Pulovere', 'Lenjerie intimă', 'Șosete', 'H&M', 'Zara', 'Reserved', 'C&A', 'New Yorker', 'Bershka', 'Pull&Bear', 'Mango', 'Stradivarius', 'Massimo Dutti', 'Încălțăminte', 'Pantofi', 'Adidași', 'Ghete', 'Sandale', 'Papuci', 'Cizme', 'deichmann', 'CCC', 'Office Shoes', 'Ecco', 'Geox', 'Nike', 'Adidas', 'Puma', 'Genți', 'Rucsacuri', 'Valize', 'Curele', 'Portofele', 'Bijuterii', 'Ceasuri', 'Ochelari soare', 'Accesorii', 'Eșarfe', 'Mănuși', 'Șepci', 'Pălării', 'Cosmetice', 'Machiaj', 'Parfumuri', 'Sephora', 'Douglas', 'Marionnaud', 'Îngrijire piele', 'Îngrijire păr', 'Electronice', 'Telefon', 'Laptop', 'Tabletă', 'Cască', 'eMAG', 'Altex', 'Flanco', 'MediaGalaxy', 'PCGarage', 'Apple', 'Samsung', 'Huawei', 'Xiaomi', 'Cadouri', 'Flori', 'Jucării', 'Decorațiuni'] },
        
        // 🎬 DIVERTISMENT
        { id: 'entertainment', name: 'Divertisment', icon: '🎬', color: '#06b6d4',
          keywords: ['divertisment', 'entertainment', 'film', 'cinema', 'concert', 'festival', 'teatru', 'muzeu', 'joc', 'game'],
          subs: ['Cinema', 'Cinema City', 'Cinemax', 'IMAX', 'Bilet film', 'Popcorn', 'Teatru', 'Operă', 'Filarmonică', 'Concert', 'Festival', 'Untold', 'Electric Castle', 'Neversea', 'Summer Well', 'Muzeu', 'Expoziție', 'Galerie artă', 'Zoo', 'Grădină botanică', 'Parc distracții', 'Aqua park', 'Bowling', 'Biliard', 'Darts', 'Escape room', 'Karaoke', 'Club noapte', 'Discotecă', 'Casino', 'Pariuri', 'Loto', 'Jocuri video', 'PlayStation', 'Xbox', 'Nintendo', 'Gaming', 'Steam', 'Epic Games', 'Jocuri PC', 'Jocuri mobile', 'Board games', 'Jocuri societate', 'Puzzle', 'Sport', 'Fotbal', 'Baschet', 'Tenis', 'Golf', 'Înot', 'Ciclism', 'Alergare', 'Sală fitness', 'Gym', 'World Class', 'NextFit', 'SmartFit', 'Yoga', 'Pilates', 'CrossFit', 'Dans', 'Arte marțiale', 'Box', 'Schi', 'Snowboard', 'Patinaj', 'Echipament sport', 'Decathlon', 'Intersport', 'Hervis'] },
        
        // 📱 ABONAMENTE & STREAMING
        { id: 'subscriptions', name: 'Abonamente', icon: '📱', color: '#a855f7',
          keywords: ['abonament', 'subscription', 'netflix', 'spotify', 'youtube', 'hbo', 'disney', 'streaming'],
          subs: ['Netflix', 'HBO Max', 'Disney+', 'Amazon Prime', 'Apple TV+', 'Hulu', 'Paramount+', 'Voyo', 'Spotify', 'Apple Music', 'YouTube Music', 'Deezer', 'Tidal', 'SoundCloud', 'YouTube Premium', 'Twitch', 'ChatGPT Plus', 'OpenAI', 'Claude Pro', 'Midjourney', 'Adobe Creative Cloud', 'Photoshop', 'Illustrator', 'Premiere', 'Microsoft 365', 'Office 365', 'Google One', 'iCloud', 'Dropbox', 'OneDrive', 'VPN', 'NordVPN', 'ExpressVPN', 'Antivirus', 'Kaspersky', 'Bitdefender', 'Norton', 'Gaming', 'PlayStation Plus', 'Xbox Game Pass', 'Nintendo Online', 'EA Play', 'Ubisoft+', 'Patreon', 'OnlyFans', 'Substack', 'Medium', 'Presă online', 'Digi24', 'HotNews', 'Ziare.com', 'The Economist', 'Financial Times', 'Kindle Unlimited', 'Audible', 'Scribd', 'Dating apps', 'Tinder', 'Bumble', 'LinkedIn Premium', 'Notion', 'Slack', 'Zoom', 'Canva Pro', 'Figma', 'Domain hosting', 'Website', 'Shopify', 'WordPress'] },
        
        // 📚 EDUCAȚIE
        { id: 'education', name: 'Educație', icon: '📚', color: '#84cc16',
          keywords: ['educatie', 'education', 'curs', 'course', 'carte', 'book', 'scoala', 'universitate', 'facultate'],
          subs: ['Cărți', 'Cărți Online', 'eBooks', 'Kindle', 'Librărie', 'Cărturești', 'Elefant', 'Libris', 'Audiobooks', 'Audible', 'Cursuri online', 'Udemy', 'Coursera', 'LinkedIn Learning', 'Skillshare', 'MasterClass', 'Duolingo', 'Babbel', 'Engleza', 'Germană', 'Franceză', 'Spaniolă', 'Programare', 'Codecademy', 'FreeCodeCamp', 'Pluralsight', 'Certificări IT', 'AWS', 'Google Cloud', 'Azure', 'MBA', 'Executive education', 'Facultate', 'Universitate', 'Taxă școlarizare', 'Master', 'Doctorat', 'Liceu privat', 'Școală privată', 'Grădiniță', 'Afterschool', 'Meditații', 'Tutoring', 'Profesor particular', 'Pregătire BAC', 'Pregătire admitere', 'Rechizite', 'Caiete', 'Pixuri', 'Ghiozdan', 'Uniformă', 'Conferințe', 'Workshop', 'Seminar', 'Webinar', 'Training', 'Dezvoltare personală', 'Coaching'] },
        
        // 👨‍👩‍👧 FAMILIE & COPII
        { id: 'family', name: 'Familie & Copii', icon: '👨‍👩‍👧', color: '#f97316',
          keywords: ['familie', 'family', 'copil', 'copii', 'baby', 'kids', 'jucarii', 'scutece', 'lapte praf'],
          subs: ['Scutece', 'Pampers', 'Huggies', 'Lapte praf', 'Mâncare bebeluși', 'Hipp', 'Nestle', 'Biberon', 'Suzeta', 'Haine copii', 'Haine bebeluși', 'Body', 'Salopete', 'Încălțăminte copii', 'Jucării', 'LEGO', 'Playmobil', 'Barbie', 'Hot Wheels', 'Păpuși', 'Mașinuțe', 'Jocuri educative', 'Puzzle copii', 'Cărți copii', 'Cărucior', 'Scaun auto', 'Pătuț', 'Leagăn', 'Baby monitor', 'Babysitter', 'Bonă', 'Grădiniță', 'Creșă', 'Afterschool', 'Tabără copii', 'Activități copii', 'Cursuri copii', 'Înot copii', 'Balet', 'Fotbal copii', 'Tenis copii', 'Petrecere copii', 'Animatori', 'Loc de joacă', 'Animale companie', 'Câine', 'Pisică', 'Hamster', 'Pește', 'Papagal', 'Mâncare animale', 'Royal Canin', 'Whiskas', 'Pedigree', 'Veterinar', 'Vaccin animal', 'Deparazitare', 'Frizerie animale', 'Pet shop', 'Accesorii animale', 'Cușcă', 'Lesa', 'Jucării animale'] },
        
        // 💆 PERSONAL & BEAUTY
        { id: 'personal', name: 'Personal & Beauty', icon: '💆', color: '#14b8a6',
          keywords: ['personal', 'beauty', 'frizerie', 'salon', 'coafor', 'manichiura', 'spa', 'masaj'],
          subs: ['Frizerie', 'Coafor', 'Tunsoare', 'Vopsit păr', 'Coafură', 'Manichiură', 'Pedichiură', 'Unghii gel', 'Unghii acryl', 'Manichiură semipermanentă', 'Cosmetică', 'Tratament facial', 'Curățare ten', 'Epilare', 'Epilare laser', 'Epilare ceară', 'IPL', 'Masaj', 'Masaj relaxare', 'Masaj terapeutic', 'Masaj anticelulitic', 'SPA', 'Saună', 'Jacuzzi', 'Tratament corporal', 'Împachetări', 'Bronzare', 'Solar', 'Spray tan', 'Botox', 'Acid hialuronic', 'Lifting', 'Chirurgie estetică', 'Implant silicon', 'Liposucție', 'Tatuaj', 'Piercing', 'Microbladding', 'Extensii gene', 'Laminare gene', 'Barbershop', 'Bărbierit', 'Contur barbă', 'Tratament păr'] },
        
        // 🏛️ TAXE & IMPOZITE
        { id: 'taxes', name: 'Taxe & Impozite', icon: '🏛️', color: '#64748b',
          keywords: ['taxa', 'impozit', 'tax', 'anaf', 'stat', 'amenda', 'timbru', 'notar'],
          subs: ['Impozit pe venit', 'Impozit salariu', 'CAS', 'CASS', 'Contribuții sociale', 'Impozit locuință', 'Impozit apartament', 'Impozit casă', 'Impozit teren', 'Impozit auto', 'Taxă auto', 'Timbru mediu', 'Taxe locale', 'Taxă gunoi', 'ANAF', 'Declarație unică', 'Amenzi', 'Amendă rutieră', 'Amendă parcare', 'Amendă circulație', 'Taxe notariale', 'Notar', 'Autentificare', 'Legalizare', 'Taxe consulare', 'Viză', 'Pașaport', 'Carte identitate', 'Permis conducere', 'Certificat naștere', 'Certificat căsătorie', 'Taxe judiciare', 'Avocat', 'Consultant juridic', 'Executor judecătoresc', 'Taxe înmatriculare', 'Radiere auto', 'Taxe cadastru', 'Intabulare'] },
        
        // 🛡️ ASIGURĂRI
        { id: 'insurance', name: 'Asigurări', icon: '🛡️', color: '#0ea5e9',
          keywords: ['asigurare', 'insurance', 'rca', 'casco', 'polita'],
          subs: ['RCA', 'CASCO', 'Asigurare auto', 'Asigurare locuință', 'Asigurare casă', 'Asigurare apartament', 'Asigurare incendiu', 'Asigurare furt', 'Asigurare inundații', 'Asigurare viață', 'Asigurare deces', 'Asigurare sănătate', 'Asigurare privată sănătate', 'Asigurare călătorie', 'Asigurare accidente', 'Asigurare credit', 'Asigurare animale', 'Allianz', 'Generali', 'Omniasig', 'Groupama', 'Euroins', 'City Insurance', 'Asirom', 'Grawe'] },
        
        // 🏦 BANCAR & FINANCIAR
        { id: 'banking', name: 'Bancar & Financiar', icon: '🏦', color: '#6366f1',
          keywords: ['banca', 'bank', 'comision', 'transfer', 'card', 'credit', 'dobanda'],
          subs: ['Comision administrare cont', 'Comision card', 'Comision transfer', 'Comision retragere', 'Comision interbancar', 'Comision schimb valutar', 'Comision ATM', 'Dobândă credit', 'Dobândă overdraft', 'Rată credit consum', 'Rată credit nevoi personale', 'Rată card credit', 'Rată overdraft', 'Comision acordare credit', 'Comision administrare credit', 'ING', 'BT', 'BCR', 'BRD', 'Raiffeisen', 'UniCredit', 'CEC Bank', 'Alpha Bank', 'OTP Bank', 'Revolut', 'N26', 'Wise', 'PayPal fees', 'Stripe fees', 'Investiții', 'Comision broker', 'Trading fees', 'XTB', 'eToro', 'Trading 212', 'IBKR', 'Crypto fees', 'Binance', 'Coinbase', 'Exchange fees'] },
        
        // ✈️ CĂLĂTORII & VACANȚE
        { id: 'travel', name: 'Călătorii & Vacanțe', icon: '✈️', color: '#0891b2',
          keywords: ['calatorie', 'travel', 'vacanta', 'vacation', 'hotel', 'avion', 'flight', 'booking'],
          subs: ['Bilet avion', 'Wizz Air', 'Ryanair', 'Blue Air', 'Tarom', 'Lufthansa', 'Turkish Airlines', 'Hotel', 'Booking.com', 'Airbnb', 'Hotels.com', 'Expedia', 'Hostel', 'Pensiune', 'Resort', 'All inclusive', 'Cazare', 'Cazare munte', 'Cazare mare', 'City break', 'Weekend getaway', 'Croazieră', 'Pachet vacanță', 'Agenție turism', 'Paralela 45', 'TUI', 'Karpaten', 'Rent car vacanță', 'Transfer aeroport', 'Taxi aeroport', 'Excursie', 'Tur ghidat', 'Atracții turistice', 'Muzeu vacanță', 'Parc tematic', 'Disneyland', 'Plajă', 'Pârtie schi', 'Skipass', 'Echipament schi închiriat', 'Souvenir', 'Cadouri vacanță', 'Asigurare călătorie', 'Viză', 'Bagaj', 'Excess bagaj'] },
        
        // ❤️ DONAȚII & CARITATE
        { id: 'charity', name: 'Donații & Caritate', icon: '❤️', color: '#f43f5e',
          keywords: ['donatie', 'donation', 'caritate', 'charity', 'ajutor', 'ong'],
          subs: ['Donație ONG', 'Crucea Roșie', 'UNICEF', 'Salvați Copiii', 'Habitat for Humanity', 'Donație biserică', 'Lumânări', 'Slujbe', 'Parastas', 'Donație spital', 'Donație școală', 'Donație animal', 'Crowdfunding', 'GoFundMe', 'Sponsorizare', 'Ajutor familie', 'Ajutor prieteni', 'Bacșiș', 'Tips', 'Cause sociale', 'Mediu', 'Reciclare'] },
        
        // 🎁 CADOURI & EVENIMENTE
        { id: 'gifts', name: 'Cadouri & Evenimente', icon: '🎁', color: '#d946ef',
          keywords: ['cadou', 'gift', 'aniversare', 'nunta', 'botez', 'craciun', 'paste', 'birthday'],
          subs: ['Cadou ziua de naștere', 'Cadou aniversare', 'Cadou Crăciun', 'Cadou Paște', 'Cadou Valentine\'s Day', 'Cadou Dragobete', 'Cadou 8 Martie', 'Cadou 1 Iunie', 'Cadou absolvire', 'Cadou nuntă', 'Dar nuntă', 'Cadou botez', 'Cadou cumetrie', 'Flori', 'Buchet', 'Aranjament floral', 'Tort', 'Prăjituri', 'Ciocolată', 'Vin cadou', 'Șampanie', 'Parfum cadou', 'Bijuterii cadou', 'Ceas cadou', 'Voucher cadou', 'Gift card', 'Experiență cadou', 'Petrecere', 'Organizare eveniment', 'Decorațiuni petrecere', 'Baloane', 'Catering', 'DJ', 'Fotograf', 'Videograf'] },
        
        // 💼 BUSINESS & PROFESIONAL
        { id: 'business', name: 'Business & Profesional', icon: '💼', color: '#eab308',
          keywords: ['business', 'profesional', 'birou', 'office', 'firma', 'pfa', 'srl'],
          subs: ['Echipamente birou', 'Laptop', 'Monitor', 'Tastatură', 'Mouse', 'Birou', 'Scaun ergonomic', 'Imprimantă', 'Scanner', 'Papetărie', 'Software', 'Licență Windows', 'Licență Office', 'Hosting', 'Domeniu web', 'Cloud services', 'AWS', 'Google Cloud', 'Marketing', 'Google Ads', 'Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'SEO', 'Publicitate', 'Branding', 'Logo', 'Website', 'Contabilitate', 'Contabil', 'Consultant fiscal', 'Juridic', 'Avocat', 'Consultant', 'Coworking', 'Chirie birou', 'Spații comerciale', 'Deplasări business', 'Conferințe', 'Networking', 'Membership', 'Asociații profesionale', 'Cursuri business', 'Training angajați', 'Team building'] },
        
        // 📦 ALTELE
        { id: 'other', name: 'Altele', icon: '📦', color: '#78716c',
          keywords: ['altele', 'other', 'diverse', 'misc'],
          subs: ['Diverse', 'Neprevăzute', 'Urgențe', 'Pierderi', 'Furturi', 'Daune', 'Reparații diverse', 'Servicii diverse', 'Comisioane diverse', 'ATM fees', 'Livrare colete', 'Curier', 'FAN Courier', 'Cargus', 'DPD', 'Poștă', 'Timbru', 'Fotocopii', 'Printare', 'Laminare', 'Xerox', 'Chei', 'Încuietori', 'Curățătorie haine', 'Spălătorie', 'Croitorie', 'Reparații încălțăminte', 'Ascuțit cuțite', 'Gravură', 'Personalizare'] }
    ],
    
    income: [
        // 💼 SALARIU & ANGAJARE
        { id: 'salary', name: 'Salariu & Angajare', icon: '💼', color: '#10b981',
          keywords: ['salariu', 'salary', 'leafă', 'plata', 'angajat', 'job', 'bonus'],
          subs: ['Salariu net', 'Salariu brut', 'Avans salariu', 'Lichidare', 'Bonus performanță', 'Bonus anual', 'Al 13-lea salariu', 'Prime', 'Prima Paște', 'Prima Crăciun', 'Prima vacanță', 'Ore suplimentare', 'Overtime', 'Concediu plătit', 'Concediu medical plătit', 'Indemnizație deplasare', 'Diurnă', 'Decontări', 'Tichete masă', 'Tichete cadou', 'Tichete vacanță', 'Tichete creșă', 'Asigurare plătită de angajator', 'Abonament fitness plătit', 'Mașină de serviciu', 'Telefon de serviciu', 'Acțiuni companie', 'Stock options', 'RSU', 'ESPP', 'Profit sharing'] },
        
        // 💻 FREELANCE & CONSULTANȚĂ
        { id: 'freelance', name: 'Freelance & Consultanță', icon: '💻', color: '#06b6d4',
          keywords: ['freelance', 'consultant', 'proiect', 'project', 'client', 'pfa'],
          subs: ['Proiecte freelance', 'Consultanță', 'Consultanță IT', 'Consultanță financiară', 'Consultanță marketing', 'Consultanță HR', 'Colaborări', 'Contract servicii', 'Retainer', 'Onorariu', 'Factură PFA', 'Factură SRL', 'Upwork', 'Fiverr', 'Toptal', 'Freelancer.com', 'Design freelance', 'Programare freelance', 'Scriere freelance', 'Traduceri', 'Copywriting', 'Content creation', 'Video editing', 'Grafică', 'Web design', 'Social media management', 'SEO services', 'Marketing freelance', 'Fotografie', 'Videografie', 'Muzică', 'Voiceover', 'Tutoring', 'Meditații', 'Training', 'Workshop-uri', 'Speaking fees', 'Podcast sponsorship'] },
        
        // 🏪 AFACERI & ANTREPRENORIAT
        { id: 'business_income', name: 'Afaceri', icon: '🏪', color: '#8b5cf6',
          keywords: ['afacere', 'business', 'vanzari', 'sales', 'profit', 'srl', 'firma'],
          subs: ['Vânzări produse', 'Vânzări servicii', 'Profit business', 'Dividende SRL', 'PFA încasări', 'SRL încasări', 'E-commerce', 'Shopify', 'WooCommerce', 'eMag Marketplace', 'Amazon FBA', 'Dropshipping', 'Print on demand', 'Affiliate marketing', 'Comisioane afiliere', 'Google AdSense', 'YouTube monetizare', 'Sponsorizări YouTube', 'TikTok Creator Fund', 'Instagram sponsorship', 'Blog income', 'Newsletter sponsorship', 'Substack', 'Patreon income', 'OnlyFans income', 'Course sales', 'Vânzări cursuri', 'eBook sales', 'Software sales', 'SaaS revenue', 'App revenue', 'License fees', 'Franchise fees', 'Consulting business'] },
        
        // 📈 INVESTIȚII & PASIVE
        { id: 'investments', name: 'Investiții & Pasive', icon: '📈', color: '#22c55e',
          keywords: ['investitie', 'investment', 'dividend', 'dobanda', 'profit', 'actiuni', 'etf'],
          subs: ['Dividende acțiuni', 'Dividende ETF', 'Dividende fonduri', 'Dobândă depozit', 'Dobândă cont economii', 'Dobândă obligațiuni', 'Cupon obligațiuni', 'Profit trading', 'Capital gains', 'Vânzare acțiuni', 'Vânzare ETF', 'Vânzare obligațiuni', 'Randament fonduri', 'Fonduri mutuale', 'Fonduri investiții', 'BT Asset Management', 'NN', 'Franklin Templeton', 'BRD Asset', 'Erste Asset', 'Pilonul 2', 'Pilonul 3', 'Pensie privată', 'ROI investiții', 'Real estate income', 'REITs', 'Crowdfunding returns', 'P2P lending returns', 'Mintos', 'Bondora', 'Robor', 'Euribor'] },
        
        // ₿ CRYPTO
        { id: 'crypto', name: 'Crypto', icon: '₿', color: '#f7931a',
          keywords: ['crypto', 'bitcoin', 'ethereum', 'btc', 'eth', 'binance', 'coinbase'],
          subs: ['Profit crypto', 'Vânzare Bitcoin', 'Vânzare Ethereum', 'Vânzare altcoins', 'Staking rewards', 'Staking ETH', 'Staking SOL', 'Staking ADA', 'Mining', 'Mining Bitcoin', 'Mining Ethereum', 'Airdrops', 'DeFi yields', 'Yield farming', 'Liquidity mining', 'NFT sales', 'Vânzare NFT', 'Royalties NFT', 'Referral crypto', 'Binance referral', 'Coinbase referral', 'Cashback crypto', 'Crypto.com rewards', 'Binance cashback', 'Play to earn', 'Axie Infinity', 'GameFi', 'Learn to earn', 'Coinbase Earn'] },
        
        // 🏢 CHIRII & IMOBILIARE
        { id: 'rental', name: 'Chirii & Imobiliare', icon: '🏢', color: '#0ea5e9',
          keywords: ['chirie', 'rent', 'airbnb', 'imobiliar', 'apartament', 'casa'],
          subs: ['Chirie apartament', 'Chirie garsonieră', 'Chirie cameră', 'Chirie casă', 'Chirie vilă', 'Airbnb', 'Booking.com host', 'Short term rental', 'Long term rental', 'Chirie spațiu comercial', 'Chirie birou', 'Chirie magazin', 'Chirie depozit', 'Chirie teren', 'Chirie parcare', 'Chirie garaj', 'Vânzare apartament', 'Vânzare casă', 'Vânzare teren', 'Profit imobiliar', 'Capital gains imobiliar', 'Comision imobiliar', 'Property management fees'] },
        
        // 👴 PENSIE & SOCIAL
        { id: 'pension', name: 'Pensie & Social', icon: '👴', color: '#64748b',
          keywords: ['pensie', 'pension', 'ajutor', 'social', 'alocatie', 'somaj', 'stat'],
          subs: ['Pensie stat', 'Pensie limită vârstă', 'Pensie anticipată', 'Pensie invaliditate', 'Pensie urmaș', 'Pensie specială', 'Pensie militară', 'Pensie privată', 'Pilon 2 încasări', 'Pilon 3 încasări', 'Alocație copii', 'Alocație stat', 'Indemnizație creștere copil', 'Concediu maternitate', 'Concediu paternitate', 'Șomaj', 'Indemnizație șomaj', 'Ajutor social', 'VMG', 'Ajutor încălzire', 'Bursă școlară', 'Bursă studii', 'Bursă merit', 'Bursă socială', 'Grant', 'Subvenții', 'Subvenție agricolă', 'Fonduri europene', 'Start-Up Nation'] },
        
        // 🎁 CADOURI & MOȘTENIRI
        { id: 'gifts_income', name: 'Cadouri Primite', icon: '🎁', color: '#ec4899',
          keywords: ['cadou primit', 'gift', 'mostenire', 'dar', 'bani primiti'],
          subs: ['Bani primiți cadou', 'Cadou ziua de naștere', 'Cadou Crăciun', 'Cadou nuntă', 'Dar nuntă', 'Bani nuntă', 'Cadou botez', 'Bani botez', 'Cadou absolvire', 'Moștenire', 'Moștenire casă', 'Moștenire teren', 'Moștenire bani', 'Donații primite', 'Sponsorizări primite', 'Premii', 'Premiu concurs', 'Premiu loterie', 'Tombola', 'Bani găsiți'] },
        
        // ↩️ RAMBURSĂRI & RETURURI
        { id: 'refunds', name: 'Rambursări & Retururi', icon: '↩️', color: '#3b82f6',
          keywords: ['rambursare', 'refund', 'retur', 'return', 'cashback', 'inapoi'],
          subs: ['Retur produse', 'Rambursare', 'Refund', 'Garanție returnată', 'Depozit returnat', 'Cauțiune returnată', 'Decontări medicale', 'Rambursare CNAS', 'Rambursare asigurare', 'Rambursare taxe', 'Tax refund', 'Cashback', 'Cashback card', 'Revolut cashback', 'ING cashback', 'George cashback', 'Cashback shopping', 'Rebates', 'Discount recuperat', 'Voucher folosit', 'Credit note', 'Compensație', 'Despăgubire'] },
        
        // 🏷️ VÂNZĂRI PERSONALE
        { id: 'sales', name: 'Vânzări Personale', icon: '🏷️', color: '#f97316',
          keywords: ['vanzare', 'sale', 'olx', 'marketplace', 'second hand'],
          subs: ['OLX', 'Facebook Marketplace', 'Lajumate', 'Publi24', 'Vinted', 'Second hand', 'Vânzare haine', 'Vânzare telefon', 'Vânzare laptop', 'Vânzare electronice', 'Vânzare mobilă', 'Vânzare auto', 'Vânzare mașină', 'Vânzare motocicletă', 'Vânzare bicicletă', 'Garage sale', 'Vânzare cărți', 'Vânzare jucării', 'Vânzare echipament sport', 'Vânzare instrumente', 'Antichități', 'Colecții'] },
        
        // 🎰 CÂȘTIGURI & NOROC
        { id: 'winnings', name: 'Câștiguri & Noroc', icon: '🎰', color: '#eab308',
          keywords: ['castig', 'winning', 'loto', 'pariuri', 'noroc', 'premiu'],
          subs: ['Loto', '6/49', 'Joker', 'Loto 5/40', 'Noroc', 'Super Noroc', 'Euromillions', 'Pariuri sportive', 'Betano', 'Superbet', 'Unibet', 'Fortuna', 'Poker', 'Casino online', 'Slot machines', 'Blackjack', 'Ruletă', 'Concursuri', 'Premiu concurs', 'Giveaway', 'Tombola', 'Raffle'] },
        
        // 💰 ALTE VENITURI
        { id: 'other_income', name: 'Alte Venituri', icon: '💰', color: '#84cc16',
          keywords: ['venit', 'income', 'altele', 'other', 'diverse'],
          subs: ['Diverse', 'Venituri ocazionale', 'Side hustle', 'Gig economy', 'Uber driver', 'Bolt driver', 'Glovo curier', 'Tazz curier', 'Livrări', 'Task Rabbit', 'Fiver gigs', 'Babysitting', 'Pet sitting', 'House sitting', 'Mystery shopping', 'Sondaje plătite', 'User testing', 'Beta testing', 'Focus groups', 'Închiriere echipamente', 'Închiriere unelte', 'Închiriere costum', 'Împrumuturi returnate', 'Bani înapoi', 'Datorii recuperate', 'Depozite recuperate'] }
    ]
};

// Custom categories (loaded from user data)
let customCategories = { expense: [], income: [] };

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

    // ⚠️ ANOMALY DETECTION - Find unusual spending
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

    // 💰 WHAT-IF SIMULATOR
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

    // ⏰ TIME ANALYSIS - When do you spend?
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

    // 🎯 SMART GOALS - AI suggests achievable goals
    suggestSmartGoals: function() {
        const predictions = this.predictSpending();
        if (!predictions) return [];
        
        const monthlySavings = predictions.nextMonth.savings;
        const goals = [];
        
        // Emergency Fund
        const emergencyTarget = predictions.avgExpense * 6;
        const currentEmergency = (state.goals || []).find(g => g.name?.toLowerCase().includes('urgență'))?.current || 0;
        if (currentEmergency < emergencyTarget) {
            goals.push({
                icon: '🛡️',
                name: 'Fond de Urgență',
                target: emergencyTarget,
                current: currentEmergency,
                monthly: Math.round(emergencyTarget / 12),
                months: Math.ceil((emergencyTarget - currentEmergency) / Math.max(monthlySavings * 0.5, 100)),
                priority: 'high',
                reason: '6 luni de cheltuieli pentru siguranță financiară'
            });
        }
        
        // Vacation fund
        const vacationTarget = predictions.avgExpense * 2;
        goals.push({
            icon: '✈️',
            name: 'Vacanță',
            target: vacationTarget,
            current: 0,
            monthly: Math.round(vacationTarget / 6),
            months: Math.ceil(vacationTarget / Math.max(monthlySavings * 0.3, 100)),
            priority: 'medium',
            reason: 'O vacanță de 2 săptămâni'
        });
        
        // Investment start
        if (monthlySavings > 500) {
            goals.push({
                icon: '📈',
                name: 'Start Investiții',
                target: 5000,
                current: 0,
                monthly: Math.round(5000 / 10),
                months: Math.ceil(5000 / Math.max(monthlySavings * 0.4, 100)),
                priority: 'medium',
                reason: 'Capital inițial pentru investiții în ETF-uri'
            });
        }
        
        // New phone/laptop
        goals.push({
            icon: '📱',
            name: 'Telefon/Laptop nou',
            target: 4000,
            current: 0,
            monthly: Math.round(4000 / 8),
            months: Math.ceil(4000 / Math.max(monthlySavings * 0.25, 100)),
            priority: 'low',
            reason: 'Upgrade tehnologie'
        });
        
        // Sort by achievability
        return goals.sort((a, b) => a.months - b.months);
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

    // 📊 SPENDING VELOCITY - How fast are you spending?
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

    // 🎯 PERSONALIZED RECOMMENDATIONS - AI-powered suggestions
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

    // 📈 INVESTMENT READINESS - Are you ready to invest?
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
    { id: '52week', name: '52 Săptămâni', icon: '📅', desc: 'Economisește crescător fiecare săptămână', duration: 52, weeklyIncrease: 10 },
    { id: 'noSpend', name: 'Weekend Zero', icon: '🚫', desc: 'Un weekend fără cheltuieli', duration: 2, target: 0 },
    { id: 'roundUp', name: 'Rotunjește', icon: '🔄', desc: 'Rotunjește cheltuielile, economisește diferența', duration: 30, target: 500 },
    { id: '1percent', name: '1% pe zi', icon: '📈', desc: 'Economisește 1% din venit zilnic', duration: 30 }
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
    
    if ($('welcomeText')) $('welcomeText').textContent = `${greet}, ${name}! 👋`;
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
        customcats: 'Categorii Custom',
        // GENIUS views
        anomalies: '⚠️ Anomalii',
        predictions: '🔮 Predicții',
        timeAnalysis: '⏰ Analiză Timp',
        merchants: '🏪 Magazine',
        smartBudgets: '📝 Bugete AI',
        smartGoals: '🎯 Obiective AI',
        healthScore: '💪 Scor Sănătate',
        investment: '📈 Investiții',
        recommendations: '🎯 Recomandări'
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
    if (view === 'customcats') renderCustomCategories();
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
    const cat = getAllCategories(type).find(c => c.id === catId);
    sel.innerHTML = '<option value="">-- Selectează --</option>' + (cat?.subs || []).map(s => `<option value="${s}">${s}</option>`).join('');
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
    if (ach) toast(`🏆 ${ach.name}!`, 'success');
    
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
                <div class="tip-action">💡 ${tip.action}</div>
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
        <div class="anomaly-header">⚠️ Alerte (${anomalies.length})</div>
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
            <div class="anomaly-card-tip">💡 ${a.suggestion}</div>
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
        
        <h3 class="section-title">📊 Pe categorii</h3>
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
        
        <h3 class="section-title">🏆 Top 10</h3>
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
            <h3 class="section-title">💡 Economii potențiale</h3>
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
        
        <h3 class="section-title">📊 Factori de evaluare</h3>
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
            💡 Îmbunătățește factorii cu scor mic pentru a crește scorul general!
        </div>
    `;
}

// 📈 INVESTMENT READINESS VIEW
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
            ⚠️ Aceasta nu este consiliere financiară. Consultă un specialist înainte de a investi.
        </div>
    `;
}

// 🎯 RECOMMENDATIONS VIEW
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

// 📊 VELOCITY WIDGET (for home)
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
                🔥 Ajungi la FIRE cu <strong>${result.fireImpact.yearsSaved.toFixed(1)} ani</strong> mai devreme!
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

📊 COMPARAȚIE CU LUNA TRECUTĂ:
• Cheltuieli luna trecută: ${safeFmt(lastMonthExpense)} ${currency}
• Venituri luna trecută: ${safeFmt(lastMonthIncome)} ${currency}

🏆 TOP CATEGORII CHELTUIELI:
${topCategories.length > 0 ? topCategories.join('\n') : '• Nicio cheltuială înregistrată'}

📈 TENDINȚE 6 LUNI:
${monthlyTrends.map(m => `• ${m.month}: V:${safeFmt(m.income)}, C:${safeFmt(m.expense)}, E:${safeFmt(m.savings)}`).join('\n')}

📅 PATTERN ZILNIC:
• Ziua cu cele mai mari cheltuieli: ${dayNames[parseInt(maxSpendingDay[0])] || 'N/A'} (${safeFmt(maxSpendingDay[1])} ${currency})

🎯 OBIECTIVE (${goalsStatus.length}):
${goalsStatus.length > 0 ? goalsStatus.map(g => `• ${g.name}: ${safeFmt(g.current)}/${safeFmt(g.target)} ${currency} (${g.progress}%)`).join('\n') : '• Niciun obiectiv setat'}

💰 BUGETE (${budgetStatus.length}):
${budgetStatus.length > 0 ? budgetStatus.map(b => `• ${b.category}: ${safeFmt(b.spent)}/${safeFmt(b.limit)} ${currency} (${b.percentUsed}%)`).join('\n') : '• Niciun buget setat'}

🏦 CONTURI: ${safeFmt(totalAccounts)} ${currency} total
${accountsStatus.length > 0 ? accountsStatus.map(a => `• ${a.name}: ${safeFmt(a.balance)} ${currency}`).join('\n') : '• Niciun cont'}

💳 DATORII: ${safeFmt(totalDebt)} ${currency} de plătit, ${safeFmt(totalOwedToMe)} ${currency} de recuperat

📱 ABONAMENTE: ~${safeFmt(subscriptionsTotal)} ${currency}/lună

🔥 FIRE:
• Patrimoniu: ${safeFmt(netWorth)} ${currency}
• Număr FIRE necesar: ${safeFmt(fireNumber)} ${currency}
• Progres: ${fireProgress}%

💪 HEALTH SCORE: ${healthScore}/100
• Streak: ${safeNum(state.streak)} zile
• Total tranzacții: ${allTx.length}
`;
}


async function sendAI() {
    const input = $('aiInput');
    const chat = $('aiChat');
    const msg = input?.value?.trim();
    if (!msg || !chat) return;
    
    // Add user message
    chat.innerHTML += `<div class="ai-msg user"><div class="ai-pic">👤</div><div class="ai-bubble">${msg}</div></div>`;
    input.value = '';
    chat.scrollTop = chat.scrollHeight;
    
    // Add typing indicator
    chat.innerHTML += `<div class="ai-msg" id="aiTyping"><div class="ai-pic">🧠</div><div class="ai-bubble typing">
        <span class="dot"></span><span class="dot"></span><span class="dot"></span>
        Analizez și gândesc...
    </div></div>`;
    chat.scrollTop = chat.scrollHeight;
    
    checkAchievement('ai_user');
    
    try {
        // Build financial context
        const context = buildFullFinancialContext();
        
        // System prompt for Gemini
        const systemPrompt = `Ești un CONSILIER FINANCIAR PERSONAL expert, prietenos și empatic. Numele tău e "Finley".

CONTEXT FINANCIAR AL UTILIZATORULUI:
${context}

INSTRUCȚIUNI PENTRU RĂSPUNS:
1. Răspunde NATURAL, ca într-o conversație reală - nu robotic
2. Folosește DATELE CONCRETE de mai sus când sunt relevante
3. Răspunde în ROMÂNĂ
4. Fii detaliat dar nu plictisitor - adaptează lungimea la întrebare
5. Folosește emoji-uri moderat 
6. Dacă e o întrebare simplă (salut, ce faci, etc), răspunde simplu și prietenos
7. Dacă e o întrebare despre finanțe, folosește datele de mai sus
8. Dacă nu ai date suficiente, spune sincer și sugerează ce ar trebui să adauge
9. Poți discuta ORICE temă, nu doar finanțe - ești un asistent complet
10. Fii autentic, cu personalitate, nu generic

EXEMPLE DE TON:
- "Hei! Văd că luna asta ai economisit 2,300 RON - super! 🎉"
- "Hmm, observ că ai depășit bugetul la mâncare cu 15%. Hai să vedem ce putem face..."
- "Bună întrebare! Din datele tale, aș zice că..."

Acum răspunde la întrebarea utilizatorului:`;

        console.log('Sending to Gemini API...');
        console.log('User message:', msg);
        
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: msg,
                systemPrompt: systemPrompt,
                maxTokens: 4096
            })
        });
        
        const data = await response.json();
        console.log('Gemini response:', data);
        
        // Remove typing indicator
        $('aiTyping')?.remove();
        
        if (data.success && data.response) {
            // Got real AI response
            const reply = formatAIResponse(data.response);
            chat.innerHTML += `<div class="ai-msg"><div class="ai-pic">🧠</div><div class="ai-bubble">${reply}</div></div>`;
        } else if (data.error) {
            // API returned error
            console.error('Gemini API error:', data.error);
            chat.innerHTML += `<div class="ai-msg"><div class="ai-pic">⚠️</div><div class="ai-bubble">
                <strong>Eroare API:</strong> ${data.error}<br><br>
                <em>Verifică dacă GEMINI_API_KEY e setat în Vercel.</em>
            </div></div>`;
        } else {
            // Unknown response format
            console.error('Unknown response:', data);
            chat.innerHTML += `<div class="ai-msg"><div class="ai-pic">⚠️</div><div class="ai-bubble">
                Nu am primit răspuns de la AI. Încearcă din nou.
            </div></div>`;
        }
    } catch (err) {
        console.error('AI Error:', err);
        $('aiTyping')?.remove();
        
        // Show real error, not fake response
        chat.innerHTML += `<div class="ai-msg"><div class="ai-pic">⚠️</div><div class="ai-bubble">
            <strong>Eroare de conexiune</strong><br><br>
            Nu m-am putut conecta la serverul AI.<br>
            Verifică conexiunea la internet și încearcă din nou.<br><br>
            <em>Detalii: ${err.message}</em>
        </div></div>`;
    }
    
    chat.scrollTop = chat.scrollHeight;
}

function formatAIResponse(text) {
    if (!text) return '';
    
    // Convert markdown-like formatting to HTML
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
    setRecurType('expense');
    $('recurStart').value = new Date().toISOString().split('T')[0];
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
    const cats = categories[type] || [];
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
        const doc = await db.collection('users').doc(state.user.uid).collection('recurring').add(data);
        state.recurring.push({ id: doc.id, ...data });
        closeModal('recurringModal');
        renderRecurring();
        toast('Salvat!', 'success');
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
    $('challengeTemplates').innerHTML = challengeTemplates.map(t => `
        <div class="challenge-card" onclick="startChallenge('${t.id}')">
            <div class="challenge-icon">${t.icon}</div>
            <div class="challenge-name">${t.name}</div>
            <div class="challenge-desc">${t.desc}</div>
        </div>
    `).join('');
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
// AI & Custom Categories exports
window.openSmartAdd = openSmartAdd;
window.processSmartInput = processSmartInput;
window.saveSmartTx = saveSmartTx;
window.openCustomCatModal = openCustomCatModal;
window.editCustomCat = editCustomCat;
window.saveCustomCat = saveCustomCat;
window.deleteCustomCat = deleteCustomCat;
window.getAllCategories = getAllCategories;
// GENIUS AI exports
window.openWhatIfSimulator = openWhatIfSimulator;
window.updateWhatIfSimulation = updateWhatIfSimulation;
window.applySmartBudget = applySmartBudget;
window.applyAllSmartBudgets = applyAllSmartBudgets;
window.addSmartGoal = addSmartGoal;
window.renderGeniusDashboard = renderGeniusDashboard;
