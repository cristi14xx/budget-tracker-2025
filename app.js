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
    if ($('hdrAvatar')) $('hdrAvatar').textContent = initial;
    if ($('profilePic')) $('profilePic').textContent = initial;
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
        customcats: 'Categorii Custom'
    };
    if ($('hdrTitle')) $('hdrTitle').textContent = titles[view] || 'Budget Pro';
    
    // Render content
    if (view === 'home') updateHome();
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
    // === TRANZACȚII LUNA CURENTĂ ===
    const monthTx = getMonthTx();
    const monthIncome = monthTx.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const monthExpense = monthTx.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const monthBalance = monthIncome - monthExpense;
    
    // === TRANZACȚII LUNA TRECUTĂ ===
    const lastMonth = state.month === 0 ? 11 : state.month - 1;
    const lastYear = state.month === 0 ? state.year - 1 : state.year;
    const lastMonthTx = state.transactions.filter(t => {
        const d = new Date(t.date);
        return d.getMonth() === lastMonth && d.getFullYear() === lastYear;
    });
    const lastMonthExpense = lastMonthTx.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const lastMonthIncome = lastMonthTx.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    
    // === ANALIZĂ PE CATEGORII ===
    const categoryBreakdown = {};
    monthTx.filter(t => t.type === 'expense').forEach(t => {
        const cat = findCat('expense', t.category);
        const catName = cat?.name || t.category;
        if (!categoryBreakdown[catName]) categoryBreakdown[catName] = { total: 0, count: 0, items: [] };
        categoryBreakdown[catName].total += t.amount;
        categoryBreakdown[catName].count++;
        categoryBreakdown[catName].items.push({ amount: t.amount, sub: t.subcategory, date: t.date });
    });
    
    // Top categorii
    const topCategories = Object.entries(categoryBreakdown)
        .sort((a, b) => b[1].total - a[1].total)
        .slice(0, 5)
        .map(([name, data]) => `${name}: ${data.total} ${state.currency} (${data.count} tranzacții)`);
    
    // === TENDINȚE PE 6 LUNI ===
    const monthlyTrends = [];
    for (let i = 5; i >= 0; i--) {
        const m = new Date();
        m.setMonth(m.getMonth() - i);
        const mTx = state.transactions.filter(t => {
            const d = new Date(t.date);
            return d.getMonth() === m.getMonth() && d.getFullYear() === m.getFullYear();
        });
        const mInc = mTx.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
        const mExp = mTx.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
        monthlyTrends.push({
            month: months[m.getMonth()],
            income: mInc,
            expense: mExp,
            savings: mInc - mExp,
            savingsRate: mInc > 0 ? ((mInc - mExp) / mInc * 100).toFixed(1) : 0
        });
    }
    
    // === ZIUA DIN SĂPTĂMÂNĂ ===
    const daySpending = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    state.transactions.filter(t => t.type === 'expense').forEach(t => {
        const day = new Date(t.date).getDay();
        daySpending[day] += t.amount;
    });
    const dayNames = ['Duminică', 'Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă'];
    const maxSpendingDay = Object.entries(daySpending).sort((a, b) => b[1] - a[1])[0];
    
    // === OBIECTIVE ===
    const goalsStatus = state.goals.map(g => ({
        name: g.name,
        target: g.target,
        current: g.current,
        progress: ((g.current / g.target) * 100).toFixed(1),
        remaining: g.target - g.current
    }));
    
    // === BUGETE ===
    const budgetStatus = state.budgets.map(b => {
        const spent = monthTx.filter(t => t.type === 'expense' && t.category === b.category)
            .reduce((s, t) => s + t.amount, 0);
        return {
            category: findCat('expense', b.category)?.name || b.category,
            limit: b.limit,
            spent: spent,
            remaining: b.limit - spent,
            percentUsed: ((spent / b.limit) * 100).toFixed(1)
        };
    });
    
    // === DATORII ===
    const debtsStatus = state.debts.map(d => ({
        name: d.name,
        total: d.amount,
        remaining: d.remaining || d.amount,
        type: d.type
    }));
    const totalDebt = debtsStatus.filter(d => d.type === 'owed').reduce((s, d) => s + d.remaining, 0);
    const totalOwedToMe = debtsStatus.filter(d => d.type === 'lent').reduce((s, d) => s + d.remaining, 0);
    
    // === CONTURI ===
    const accountsStatus = state.accounts.map(a => ({
        name: a.name,
        balance: a.balance,
        type: a.type
    }));
    const totalAccounts = accountsStatus.reduce((s, a) => s + a.balance, 0);
    
    // === ABONAMENTE ===
    const subscriptionsTotal = state.subscriptions.reduce((s, sub) => s + sub.monthlyAvg, 0);
    
    // === PROVOCĂRI ACTIVE ===
    const activeChallenges = state.challenges.map(c => {
        const tpl = challengeTemplates.find(t => t.id === c.templateId);
        return {
            name: tpl?.name || c.name,
            target: c.target,
            saved: c.saved,
            progress: ((c.saved / c.target) * 100).toFixed(1)
        };
    });
    
    // === PREDICȚII ===
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const currentDay = new Date().getDate();
    const avgDailyExpense = monthExpense / currentDay;
    const predictedMonthExpense = avgDailyExpense * daysInMonth;
    const avgDailyIncome = monthIncome / currentDay;
    const predictedMonthIncome = avgDailyIncome * daysInMonth;
    
    // === FIRE METRICS ===
    const annualExpense = monthExpense * 12;
    const fireNumber = annualExpense * 25;
    const fireProgress = state.netWorth > 0 ? ((state.netWorth / fireNumber) * 100).toFixed(1) : 0;
    const yearsToFire = state.savingsRate > 0 ? Math.log(1 + (fireNumber - state.netWorth) / (monthIncome * state.savingsRate / 100 * 12)) / Math.log(1.07) : 999;
    
    // === HEALTH SCORE ===
    let healthScore = 50;
    if (state.savingsRate >= 20) healthScore += 20;
    else if (state.savingsRate >= 10) healthScore += 10;
    if (monthBalance >= 0) healthScore += 10;
    if (state.streak >= 7) healthScore += 10;
    if (budgetStatus.every(b => parseFloat(b.percentUsed) <= 100)) healthScore += 10;
    healthScore = Math.min(100, healthScore);
    
    // === BUILD CONTEXT STRING ===
    return `
═══════════════════════════════════════════════════════════
PROFILUL FINANCIAR COMPLET AL UTILIZATORULUI
═══════════════════════════════════════════════════════════

📅 LUNA CURENTĂ (${months[state.month]} ${state.year}):
• Venituri: ${monthIncome.toLocaleString()} ${state.currency}
• Cheltuieli: ${monthExpense.toLocaleString()} ${state.currency}
• Balanță: ${monthBalance >= 0 ? '+' : ''}${monthBalance.toLocaleString()} ${state.currency}
• Rată economisire: ${monthIncome > 0 ? ((monthBalance / monthIncome) * 100).toFixed(1) : 0}%
• Ziua curentă: ${currentDay}/${daysInMonth}

📊 COMPARAȚIE CU LUNA TRECUTĂ:
• Cheltuieli luna trecută: ${lastMonthExpense.toLocaleString()} ${state.currency}
• Venituri luna trecută: ${lastMonthIncome.toLocaleString()} ${state.currency}
• Diferență cheltuieli: ${monthExpense > lastMonthExpense ? '+' : ''}${((monthExpense - lastMonthExpense) / (lastMonthExpense || 1) * 100).toFixed(1)}%

🏆 TOP 5 CATEGORII CHELTUIELI LUNA ASTA:
${topCategories.length > 0 ? topCategories.map((c, i) => `${i + 1}. ${c}`).join('\n') : '• Nicio cheltuială înregistrată'}

📈 TENDINȚE ULTIMELE 6 LUNI:
${monthlyTrends.map(m => `• ${m.month}: Venituri ${m.income.toLocaleString()}, Cheltuieli ${m.expense.toLocaleString()}, Economii ${m.savings.toLocaleString()} (${m.savingsRate}%)`).join('\n')}

📅 PATTERN ZILNIC:
• Ziua cu cele mai mari cheltuieli: ${dayNames[maxSpendingDay[0]]} (${maxSpendingDay[1].toLocaleString()} ${state.currency} total)

🎯 OBIECTIVE FINANCIARE (${goalsStatus.length}):
${goalsStatus.length > 0 ? goalsStatus.map(g => `• ${g.name}: ${g.current.toLocaleString()}/${g.target.toLocaleString()} ${state.currency} (${g.progress}%) - Mai ai nevoie de ${g.remaining.toLocaleString()} ${state.currency}`).join('\n') : '• Niciun obiectiv setat'}

💰 BUGETE (${budgetStatus.length}):
${budgetStatus.length > 0 ? budgetStatus.map(b => `• ${b.category}: ${b.spent.toLocaleString()}/${b.limit.toLocaleString()} ${state.currency} (${b.percentUsed}% folosit) - ${parseFloat(b.percentUsed) > 100 ? '⚠️ DEPĂȘIT!' : `Mai poți cheltui ${b.remaining.toLocaleString()} ${state.currency}`}`).join('\n') : '• Niciun buget setat'}

🏦 CONTURI (${accountsStatus.length}):
${accountsStatus.length > 0 ? accountsStatus.map(a => `• ${a.name}: ${a.balance.toLocaleString()} ${state.currency}`).join('\n') : '• Niciun cont înregistrat'}
• TOTAL ÎN CONTURI: ${totalAccounts.toLocaleString()} ${state.currency}

💳 DATORII:
• Total de plătit: ${totalDebt.toLocaleString()} ${state.currency}
• Total de recuperat: ${totalOwedToMe.toLocaleString()} ${state.currency}
${debtsStatus.length > 0 ? debtsStatus.map(d => `• ${d.name}: ${d.remaining.toLocaleString()} ${state.currency} (${d.type === 'owed' ? 'de plătit' : 'de recuperat'})`).join('\n') : ''}

📱 ABONAMENTE LUNARE: ${subscriptionsTotal.toLocaleString()} ${state.currency}/lună
${state.subscriptions.map(s => `• ${s.name}: ~${s.monthlyAvg.toLocaleString()} ${state.currency}`).join('\n') || '• Niciun abonament detectat'}

🏆 PROVOCĂRI ACTIVE:
${activeChallenges.length > 0 ? activeChallenges.map(c => `• ${c.name}: ${c.saved.toLocaleString()}/${c.target.toLocaleString()} ${state.currency} (${c.progress}%)`).join('\n') : '• Nicio provocare activă'}

🔮 PREDICȚII LUNA ASTA:
• Cheltuieli estimate până la final: ~${predictedMonthExpense.toLocaleString()} ${state.currency}
• Venituri estimate până la final: ~${predictedMonthIncome.toLocaleString()} ${state.currency}
• Economii estimate: ~${(predictedMonthIncome - predictedMonthExpense).toLocaleString()} ${state.currency}
• Media zilnică cheltuieli: ${avgDailyExpense.toLocaleString()} ${state.currency}

🔥 FIRE (Financial Independence):
• Patrimoniu actual: ${state.netWorth.toLocaleString()} ${state.currency}
• Număr FIRE necesar: ${fireNumber.toLocaleString()} ${state.currency}
• Progres FIRE: ${fireProgress}%
• Ani estimați până la FIRE: ${yearsToFire < 100 ? yearsToFire.toFixed(1) : 'N/A'}

💪 HEALTH SCORE: ${healthScore}/100
• Streak actual: ${state.streak} zile consecutive

📊 STATISTICI GENERALE:
• Total tranzacții: ${state.transactions.length}
• Total categorii custom: ${customCategories.expense.length + customCategories.income.length}
• Monedă: ${state.currency}
═══════════════════════════════════════════════════════════`;
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
        Analizez datele tale financiare...
    </div></div>`;
    chat.scrollTop = chat.scrollHeight;
    
    checkAchievement('ai_user');
    
    try {
        const context = buildFullFinancialContext();
        
        const systemPrompt = `Ești un CONSILIER FINANCIAR PERSONAL de elită, expert în finanțe personale, investiții, FIRE (Financial Independence Retire Early), și psihologia banilor. 

PERSONALITATEA TA:
• Ești prietenos, empatic și încurajator, dar și direct și onest
• Folosești exemple concrete și numere specifice din datele utilizatorului
• Ești pasionat de educație financiară și vrei să ajuți cu adevărat
• Ai simțul umorului și faci conversația plăcută
• Folosești emoji-uri moderat pentru a face răspunsurile mai engaging

STILUL TĂU DE RĂSPUNS:
• Răspunsuri DETALIATE și COMPREHENSIVE - nu te limita la câteva propoziții
• Structurezi răspunsurile clar cu bullet points și secțiuni când e cazul
• Oferi SFATURI ACȚIONABILE și CONCRETE, nu generic
• Când analizezi, folosești NUMERELE EXACTE din context
• Faci comparații relevante (luna trecută, media, benchmarks)
• Explici DE CE recomanzi ceva, nu doar CE recomanzi
• Incluzi atât aspectele pozitive cât și cele de îmbunătățit
• Termini cu 1-2 întrebări de follow-up pentru a continua conversația

EXPERTIZA TA INCLUDE:
• Bugetare și tracking cheltuieli
• Economisire și fondul de urgență
• Investiții (acțiuni, ETF-uri, obligațiuni, crypto)
• FIRE și independența financiară
• Gestionarea datoriilor
• Psihologia banilor și obiceiuri financiare
• Optimizare fiscală (în limite legale)
• Real estate și chirii
• Side hustles și venituri pasive

REGULI IMPORTANTE:
• Răspunde ÎNTOTDEAUNA în română
• Folosește datele REALE ale utilizatorului din context
• Nu inventa numere - folosește doar ce există în context
• Dacă nu ai suficiente date, spune ce informații ar mai fi utile
• Personalizează sfaturile pentru situația specifică a utilizatorului
• Fii încurajator dar realist

${context}`;

        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: msg,
                systemPrompt: systemPrompt,
                maxTokens: 2048
            })
        });
        
        const data = await response.json();
        let reply = data.response || generateGeniusLocalResponse(msg);
        
        // Format response with markdown-like styling
        reply = formatAIResponse(reply);
        
        // Remove typing, add response
        $('aiTyping')?.remove();
        chat.innerHTML += `<div class="ai-msg"><div class="ai-pic">🧠</div><div class="ai-bubble">${reply}</div></div>`;
    } catch (err) {
        console.error('AI Error:', err);
        $('aiTyping')?.remove();
        const fallback = generateGeniusLocalResponse(msg);
        chat.innerHTML += `<div class="ai-msg"><div class="ai-pic">🧠</div><div class="ai-bubble">${fallback}</div></div>`;
    }
    
    chat.scrollTop = chat.scrollHeight;
}

function formatAIResponse(text) {
    // Convert markdown-like formatting to HTML
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^### (.*$)/gm, '<h4>$1</h4>')
        .replace(/^## (.*$)/gm, '<h3>$1</h3>')
        .replace(/^# (.*$)/gm, '<h2>$1</h2>')
        .replace(/^• /gm, '• ')
        .replace(/^- /gm, '• ')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
}

function generateGeniusLocalResponse(q) {
    const monthTx = getMonthTx();
    const income = monthTx.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const expense = monthTx.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const balance = income - expense;
    const savingsRate = income > 0 ? (balance / income * 100) : 0;
    
    // Category breakdown
    const catBreakdown = {};
    monthTx.filter(t => t.type === 'expense').forEach(t => {
        const cat = findCat('expense', t.category)?.name || t.category;
        catBreakdown[cat] = (catBreakdown[cat] || 0) + t.amount;
    });
    const topCats = Object.entries(catBreakdown).sort((a, b) => b[1] - a[1]).slice(0, 3);
    
    // Predictions
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const currentDay = new Date().getDate();
    const avgDaily = expense / currentDay;
    const predicted = avgDaily * daysInMonth;
    
    q = q.toLowerCase();
    
    // COMPREHENSIVE RESPONSES
    if (q.includes('anali') || q.includes('situati') || q.includes('cum stau') || q.includes('overview')) {
        let response = `🎯 **ANALIZĂ FINANCIARĂ COMPLETĂ - ${months[state.month]} ${state.year}**\n\n`;
        response += `📊 **Situația curentă:**\n`;
        response += `• Venituri: ${fmt(income)}\n`;
        response += `• Cheltuieli: ${fmt(expense)}\n`;
        response += `• Balanță: ${balance >= 0 ? '+' : ''}${fmt(balance)} ${balance >= 0 ? '✅' : '⚠️'}\n`;
        response += `• Rată economisire: ${savingsRate.toFixed(1)}%\n\n`;
        
        if (topCats.length > 0) {
            response += `💸 **Top cheltuieli:**\n`;
            topCats.forEach(([cat, amount], i) => {
                const percent = (amount / expense * 100).toFixed(1);
                response += `${i + 1}. ${cat}: ${fmt(amount)} (${percent}%)\n`;
            });
            response += '\n';
        }
        
        response += `🔮 **Predicție până la final de lună:**\n`;
        response += `• Cheltuieli estimate: ~${fmt(predicted)}\n`;
        response += `• Media zilnică: ${fmt(avgDaily)}\n\n`;
        
        if (savingsRate >= 20) {
            response += `💪 **Verdict:** Excelent! Economisești peste 20% - ești pe drumul cel bun spre independența financiară!`;
        } else if (savingsRate >= 10) {
            response += `👍 **Verdict:** Bine! Economisești ${savingsRate.toFixed(0)}%. Pentru FIRE, țintește 20-30%.`;
        } else if (savingsRate > 0) {
            response += `⚠️ **Verdict:** Economisești doar ${savingsRate.toFixed(0)}%. Analizează top categoriile și vezi unde poți reduce.`;
        } else {
            response += `🚨 **Verdict:** Ești pe minus! Prioritatea #1: reduce cheltuielile sau crește veniturile.`;
        }
        
        return response;
    }
    
    if (q.includes('sfat') || q.includes('recomand') || q.includes('ajut') || q.includes('ce sa fac')) {
        let response = `💡 **SFATURI PERSONALIZATE PENTRU TINE**\n\n`;
        
        // Based on savings rate
        if (savingsRate < 10) {
            response += `🎯 **Prioritate #1: Crește rata de economisire**\n`;
            response += `Acum economisești doar ${savingsRate.toFixed(1)}%. Iată ce poți face:\n\n`;
            
            if (topCats.length > 0) {
                response += `📉 **Analizează categoria "${topCats[0][0]}"**\n`;
                response += `Aici cheltuiești cel mai mult (${fmt(topCats[0][1])}). Întreabă-te:\n`;
                response += `• Sunt toate aceste cheltuieli necesare?\n`;
                response += `• Pot găsi alternative mai ieftine?\n`;
                response += `• Pot reduce frecvența?\n\n`;
            }
            
            response += `💰 **Regula 50/30/20:**\n`;
            response += `• 50% necesități (${fmt(income * 0.5)})\n`;
            response += `• 30% dorințe (${fmt(income * 0.3)})\n`;
            response += `• 20% economii (${fmt(income * 0.2)})\n\n`;
        } else {
            response += `✅ **Economisești bine (${savingsRate.toFixed(1)}%)!** Iată next steps:\n\n`;
            response += `📈 **Investește surplusul:**\n`;
            response += `• ETF-uri globale (ex: VWCE) pentru diversificare\n`;
            response += `• Pilon 3 pensie pentru avantaje fiscale\n`;
            response += `• Fond de urgență (3-6 luni cheltuieli = ${fmt(expense * 3)} - ${fmt(expense * 6)})\n\n`;
        }
        
        response += `🎯 **Acțiuni concrete pentru săptămâna asta:**\n`;
        response += `1. Setează bugete pentru top 3 categorii\n`;
        response += `2. Înregistrează TOATE cheltuielile zilnic\n`;
        response += `3. Revizuiește abonamentele - ai nevoie de toate?\n`;
        
        return response;
    }
    
    if (q.includes('fire') || q.includes('independ') || q.includes('retrag')) {
        const annualExpense = expense * 12;
        const fireNumber = annualExpense * 25;
        const progress = state.netWorth > 0 ? (state.netWorth / fireNumber * 100) : 0;
        
        let response = `🔥 **FIRE - INDEPENDENȚA FINANCIARĂ**\n\n`;
        response += `📊 **Situația ta actuală:**\n`;
        response += `• Cheltuieli lunare: ${fmt(expense)}\n`;
        response += `• Cheltuieli anuale estimate: ${fmt(annualExpense)}\n`;
        response += `• Patrimoniu actual: ${fmt(state.netWorth)}\n\n`;
        
        response += `🎯 **Numărul tău FIRE (regula 4%):**\n`;
        response += `• Ai nevoie de: ${fmt(fireNumber)}\n`;
        response += `• Progres actual: ${progress.toFixed(1)}%\n`;
        response += `• Mai ai nevoie de: ${fmt(fireNumber - state.netWorth)}\n\n`;
        
        if (savingsRate > 0) {
            const monthlySavings = income * savingsRate / 100;
            const yearsToFire = Math.log((fireNumber / monthlySavings + 1) * 0.07 + 1) / Math.log(1.07);
            response += `⏱️ **Timp estimat până la FIRE:**\n`;
            response += `Cu economii de ${fmt(monthlySavings)}/lună și randament 7%/an:\n`;
            response += `~${Math.ceil(yearsToFire)} ani\n\n`;
        }
        
        response += `💡 **Cum să ajungi mai repede:**\n`;
        response += `• Crește rata de economisire (fiecare 5% contează enorm!)\n`;
        response += `• Investește în ETF-uri cu costuri mici\n`;
        response += `• Caută surse de venit pasiv\n`;
        response += `• Reduce cheltuielile fixe (chirie, abonamente)`;
        
        return response;
    }
    
    if (q.includes('investi') || q.includes('actiuni') || q.includes('etf') || q.includes('crypto')) {
        let response = `📈 **GHID DE INVESTIȚII PENTRU ÎNCEPĂTORI**\n\n`;
        response += `💰 **Ai de investit:** ${fmt(balance > 0 ? balance : 0)}/lună\n\n`;
        
        response += `🎯 **Prioritatea investițiilor (în ordine):**\n\n`;
        response += `**1. Fond de urgență** (primul pas!)\n`;
        response += `• Target: 3-6 luni cheltuieli = ${fmt(expense * 3)} - ${fmt(expense * 6)}\n`;
        response += `• Unde: cont de economii cu dobândă (ING, Revolut)\n\n`;
        
        response += `**2. Pilon 3 Pensie** (avantaje fiscale)\n`;
        response += `• Deductibil până la 400€/an\n`;
        response += `• Fonduri: NN, BRD, Generali\n\n`;
        
        response += `**3. ETF-uri globale** (pentru termen lung)\n`;
        response += `• VWCE (Vanguard All-World) - diversificare maximă\n`;
        response += `• Brokeri: XTB, Interactive Brokers, Trading 212\n\n`;
        
        response += `**4. Crypto** (opțional, max 5-10% din portofoliu)\n`;
        response += `• Bitcoin, Ethereum pentru începători\n`;
        response += `• DCA (Dollar Cost Averaging) - investește regulat\n\n`;
        
        response += `⚠️ **Reguli de aur:**\n`;
        response += `• Nu investi bani de care ai nevoie în <5 ani\n`;
        response += `• Diversifică - nu pune toate ouăle într-un coș\n`;
        response += `• Investește regulat, nu încerca să "timing the market"`;
        
        return response;
    }
    
    if (q.includes('buget') || q.includes('cheltu') || q.includes('reduce') || q.includes('econom')) {
        let response = `💰 **STRATEGIE DE BUGETARE**\n\n`;
        
        response += `📊 **Situația actuală:**\n`;
        response += `• Cheltuieli luna asta: ${fmt(expense)}\n`;
        response += `• Media zilnică: ${fmt(avgDaily)}\n\n`;
        
        if (topCats.length > 0) {
            response += `🔍 **Analiza pe categorii:**\n`;
            topCats.forEach(([cat, amount]) => {
                const percent = (amount / expense * 100).toFixed(1);
                const perDay = (amount / currentDay).toFixed(0);
                response += `\n**${cat}** - ${fmt(amount)} (${percent}%)\n`;
                response += `• ${perDay} ${state.currency}/zi în medie\n`;
                
                // Category-specific tips
                if (cat.toLowerCase().includes('mâncare') || cat.toLowerCase().includes('food')) {
                    response += `• 💡 Tip: Meal prep, liste de cumpărături, mai puține livrări\n`;
                } else if (cat.toLowerCase().includes('transport')) {
                    response += `• 💡 Tip: Carpooling, transport public, bicicletă\n`;
                } else if (cat.toLowerCase().includes('abonament') || cat.toLowerCase().includes('subscription')) {
                    response += `• 💡 Tip: Audit lunar, share family plans, anulează ce nu folosești\n`;
                } else if (cat.toLowerCase().includes('divertisment') || cat.toLowerCase().includes('entertainment')) {
                    response += `• 💡 Tip: Alternative gratuite, reduceri, early bird\n`;
                }
            });
        }
        
        response += `\n\n🎯 **Bugete recomandate (bazate pe veniturile tale):**\n`;
        response += `• Locuință: max ${fmt(income * 0.3)} (30%)\n`;
        response += `• Mâncare: max ${fmt(income * 0.15)} (15%)\n`;
        response += `• Transport: max ${fmt(income * 0.1)} (10%)\n`;
        response += `• Utilități: max ${fmt(income * 0.1)} (10%)\n`;
        response += `• Economii: min ${fmt(income * 0.2)} (20%)`;
        
        return response;
    }
    
    // Default comprehensive response
    let response = `👋 **Salut! Sunt aici să te ajut cu finanțele!**\n\n`;
    response += `📊 **Quick stats luna asta:**\n`;
    response += `• Balanță: ${balance >= 0 ? '+' : ''}${fmt(balance)}\n`;
    response += `• Economii: ${savingsRate.toFixed(1)}%\n`;
    response += `• Streak: ${state.streak} zile 🔥\n\n`;
    
    response += `❓ **Întreabă-mă despre:**\n`;
    response += `• "Analizează-mi situația financiară"\n`;
    response += `• "Dă-mi sfaturi de economisire"\n`;
    response += `• "Cum ajung la FIRE?"\n`;
    response += `• "Cum să investesc?"\n`;
    response += `• "Ajută-mă cu bugetul"\n`;
    response += `• Sau orice altceva legat de bani! 💰`;
    
    return response;
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
