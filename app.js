// Budget Pro Ultra - Enhanced Edition
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

// API Configuration - Change this to your Vercel URL after deploy
const API_BASE = window.location.hostname === 'localhost' 
    ? 'http://localhost:3000' 
    : '';  // Same domain when deployed to Vercel

// Gemini API Key - Only used as fallback, prefer Vercel Environment Variables
const GEMINI_KEY = '';

// Categories with subcategories - EXTENDED VERSION
const categories = {
    expense: [
        // Esențiale
        { id: 'food', name: 'Mâncare', icon: '🍔', color: '#ef4444', subs: ['Supermarket', 'Restaurant', 'Livrare', 'Cafea', 'Fast-food', 'Piață', 'Patiserie', 'Băuturi', 'Gustări', 'Cantine', 'Food court'] },
        { id: 'transport', name: 'Transport', icon: '🚗', color: '#f59e0b', subs: ['Benzină', 'Motorină', 'GPL', 'Electric charging', 'Uber/Bolt', 'Transport public', 'Taxi', 'Parcare', 'Service auto', 'Asigurare auto', 'Rovignetă', 'ITP', 'Spălătorie auto', 'Piese auto', 'Anvelopele', 'Închiriere auto', 'Leasing auto'] },
        { id: 'housing', name: 'Locuință', icon: '🏠', color: '#8b5cf6', subs: ['Chirie', 'Rată credit ipotecar', 'Întreținere', 'Reparații', 'Mobilă', 'Curățenie', 'Decorațiuni', 'Grădinărit', 'Pază/Securitate', 'Administrare bloc', 'Renovare', 'Instalații sanitare', 'Instalații electrice'] },
        { id: 'utilities', name: 'Utilități', icon: '💡', color: '#3b82f6', subs: ['Electricitate', 'Gaz', 'Apă', 'Canalizare', 'Internet', 'Telefon fix', 'Telefon mobil', 'TV cablu', 'Streaming', 'Gunoi', 'Încălzire centrală', 'Lemne/Peleți'] },
        { id: 'health', name: 'Sănătate', icon: '💊', color: '#10b981', subs: ['Medicamente', 'Doctor', 'Analize', 'Dentist', 'Ochelari', 'Lentile', 'Sală fitness', 'Suplimente', 'Psiholog', 'Fizioterapeut', 'Spital', 'Urgențe', 'Vaccin', 'Stomatologie estetică'] },
        
        // Shopping & Lifestyle
        { id: 'shopping', name: 'Cumpărături', icon: '🛍️', color: '#ec4899', subs: ['Haine', 'Încălțăminte', 'Cosmetice', 'Parfumuri', 'Electronice', 'Electrocasnice', 'Gadgeturi', 'Casă & Grădină', 'Cadouri', 'Accesorii', 'Bijuterii', 'Ceasuri', 'Genți'] },
        { id: 'entertainment', name: 'Divertisment', icon: '🎬', color: '#06b6d4', subs: ['Cinema', 'Teatru', 'Concerte', 'Muzeu', 'Jocuri video', 'Jocuri societate', 'Hobby', 'Sport', 'Vacanțe', 'Excursii', 'City break', 'Festival', 'Parc distracții', 'Escape room', 'Bowling'] },
        { id: 'subscriptions', name: 'Abonamente', icon: '📱', color: '#a855f7', subs: ['Netflix', 'Spotify', 'YouTube Premium', 'HBO Max', 'Disney+', 'Amazon Prime', 'Apple TV', 'Deezer', 'ChatGPT Plus', 'Cloud storage', 'Software', 'Gaming', 'VPN', 'Patreon', 'OnlyFans', 'Presă online'] },
        { id: 'personal', name: 'Personal', icon: '💆', color: '#14b8a6', subs: ['Frizerie', 'Salon', 'Spa', 'Masaj', 'Manichiură', 'Pedichiură', 'Epilare', 'Cosmetician', 'Wellness', 'Saună'] },
        
        // Educație & Dezvoltare
        { id: 'education', name: 'Educație', icon: '📚', color: '#84cc16', subs: ['Cărți', 'Audiobooks', 'Cursuri online', 'Universitate', 'Masterat', 'MBA', 'Școală privată', 'Grădiniță', 'Meditații', 'Certificări IT', 'Limbi străine', 'Conferințe', 'Workshop', 'Materiale școlare'] },
        
        // Familie & Copii
        { id: 'family', name: 'Familie', icon: '👨‍👩‍👧', color: '#f97316', subs: ['Copii - haine', 'Copii - jucării', 'Copii - școală', 'Copii - activități', 'Copii - sănătate', 'Animale - mâncare', 'Animale - veterinar', 'Animale - accesorii', 'Babysitter', 'Bonă', 'Cadouri familie', 'Activități familie'] },
        
        // Financiar
        { id: 'taxes', name: 'Taxe & Impozite', icon: '🏛️', color: '#64748b', subs: ['Impozit pe venit', 'CAS', 'CASS', 'Impozit proprietate', 'Taxă auto', 'Taxe locale', 'Amenzi', 'Taxe notariale', 'Taxe consulat'] },
        { id: 'insurance', name: 'Asigurări', icon: '🛡️', color: '#0ea5e9', subs: ['Asigurare viață', 'Asigurare sănătate privată', 'Asigurare locuință', 'Asigurare călătorie', 'CASCO', 'RCA', 'Asigurare credit'] },
        { id: 'banking', name: 'Bancar', icon: '🏦', color: '#6366f1', subs: ['Comisioane bancare', 'Comision card', 'Comision transfer', 'Comision retragere', 'Comision schimb valutar', 'Dobânzi credit', 'Rate credit consum', 'Rate credit auto', 'Overdraft'] },
        
        // Investiții (Cheltuieli)
        { id: 'invest_expense', name: 'Investiții', icon: '📈', color: '#10b981', subs: ['Cumpărare acțiuni', 'Cumpărare ETF', 'Cumpărare obligațiuni', 'Cumpărare crypto', 'Depozit bancar', 'Fonduri mutuale', 'Trading fees', 'Comisioane broker', 'Aur/Argint', 'NFT', 'Startup investment'] },
        { id: 'real_estate', name: 'Imobiliare', icon: '🏢', color: '#8b5cf6', subs: ['Avans proprietate', 'Rată ipotecară investiție', 'Renovare pt închiriere', 'Notariat', 'Evaluare', 'Comision agenție', 'Taxe imobiliare'] },
        
        // Business
        { id: 'business', name: 'Business', icon: '💼', color: '#eab308', subs: ['Echipamente', 'Software', 'Marketing', 'Publicitate', 'Website', 'Hosting', 'Domeniu', 'Contabilitate', 'Juridic', 'Consultanță', 'Birou', 'Coworking', 'Deplasări business'] },
        
        // Altele
        { id: 'charity', name: 'Donații', icon: '❤️', color: '#f43f5e', subs: ['Caritate', 'ONG', 'Biserica', 'Crowdfunding', 'Cauze sociale', 'Ajutor familie'] },
        { id: 'gifts', name: 'Cadouri', icon: '🎁', color: '#d946ef', subs: ['Ziua de naștere', 'Crăciun', 'Paște', 'Nuntă', 'Botez', 'Absolvire', 'Valentines', 'Aniversări'] },
        { id: 'vice', name: 'Vicii', icon: '🎰', color: '#991b1b', subs: ['Țigări', 'Alcool', 'Pariuri', 'Cazino', 'Loto'] },
        { id: 'other_expense', name: 'Altele', icon: '📦', color: '#78716c', subs: ['Diverse', 'Neprevăzute', 'ATM fees', 'Bacșiș', 'Livrare colete', 'Poștă', 'Fotocopii', 'Curățătorie haine'] }
    ],
    income: [
        // Venituri active
        { id: 'salary', name: 'Salariu', icon: '💼', color: '#10b981', subs: ['Salariu net', 'Bonusuri', 'Prime', 'Ore suplimentare', 'Al 13-lea salariu', 'Tichete de masă', 'Tichete cadou', 'Decontări', 'Concediu plătit'] },
        { id: 'freelance', name: 'Freelance', icon: '💻', color: '#06b6d4', subs: ['Proiecte', 'Consultanță', 'Colaborări', 'Comisioane', 'Royalties', 'Drepturi autor'] },
        { id: 'business_income', name: 'Afaceri', icon: '🏪', color: '#8b5cf6', subs: ['Vânzări produse', 'Vânzări servicii', 'Profit business', 'PFA/SRL încasări', 'Dropshipping', 'E-commerce'] },
        { id: 'sidehustle', name: 'Side Hustle', icon: '🚀', color: '#f59e0b', subs: ['Uber/Bolt driver', 'Livrări', 'Tutoring', 'Traduceri', 'Design', 'Programare', 'Content creation', 'Social media'] },
        
        // Venituri pasive
        { id: 'investments_income', name: 'Investiții', icon: '📈', color: '#22c55e', subs: ['Dividende acțiuni', 'Dividende ETF', 'Dobânzi depozit', 'Dobânzi obligațiuni', 'Cupon obligațiuni', 'Profit trading', 'Randament fonduri'] },
        { id: 'crypto_income', name: 'Crypto', icon: '₿', color: '#f7931a', subs: ['Profit crypto', 'Staking rewards', 'Mining', 'Airdrops', 'DeFi yields', 'NFT sales', 'Referral crypto'] },
        { id: 'rental_income', name: 'Chirii', icon: '🏢', color: '#0ea5e9', subs: ['Chirie apartament', 'Chirie cameră', 'Airbnb', 'Booking', 'Chirie comercial', 'Chirie teren', 'Chirie parcare'] },
        { id: 'real_estate_income', name: 'Imobiliare', icon: '🏠', color: '#7c3aed', subs: ['Vânzare proprietate', 'Profit imobiliar', 'Comision imobiliar'] },
        
        // Alte venituri
        { id: 'pension', name: 'Pensie', icon: '👴', color: '#64748b', subs: ['Pensie stat', 'Pensie privată', 'Pensie specială'] },
        { id: 'social', name: 'Ajutoare sociale', icon: '🏛️', color: '#14b8a6', subs: ['Alocație copii', 'Indemnizație creștere copil', 'Șomaj', 'Ajutor social', 'Bursă', 'Subvenții'] },
        { id: 'gifts_income', name: 'Cadouri primite', icon: '🎁', color: '#ec4899', subs: ['Bani primiți', 'Cadou nuntă', 'Cadou botez', 'Moștenire', 'Donații primite'] },
        { id: 'refunds', name: 'Rambursări', icon: '↩️', color: '#3b82f6', subs: ['Retururi produse', 'Decontări medicale', 'Rambursare taxe', 'Cashback', 'Garanție returnată', 'Asigurare încasată'] },
        { id: 'sales', name: 'Vânzări', icon: '🏷️', color: '#f97316', subs: ['OLX/Marketplace', 'Vânzare auto', 'Second-hand', 'Garage sale', 'Vânzare electronice'] },
        { id: 'winnings', name: 'Câștiguri', icon: '🎰', color: '#eab308', subs: ['Loto', 'Pariuri', 'Concursuri', 'Premii', 'Tombole'] },
        { id: 'other_income', name: 'Alte venituri', icon: '💰', color: '#84cc16', subs: ['Diverse', 'Bacșiș primit', 'Găsit', 'Împrumuturi returnate'] }
    ],
    correction: [
        { id: 'correction', name: 'Corecție sold', icon: '⚖️', color: '#6366f1', subs: ['Ajustare numerar', 'Diferență bancă', 'Corecție eroare', 'Reconciliere conturi', 'Sold inițial'] }
    ]
};

// Utility types for home tracking
const utilityTypes = [
    { id: 'electricity', name: 'Electricitate', icon: '⚡', unit: 'kWh', color: '#eab308' },
    { id: 'gas', name: 'Gaz', icon: '🔥', unit: 'm³', color: '#f97316' },
    { id: 'water', name: 'Apă', icon: '💧', unit: 'm³', color: '#3b82f6' },
    { id: 'heating', name: 'Încălzire', icon: '🌡️', unit: 'Gcal', color: '#ef4444' },
    { id: 'internet', name: 'Internet', icon: '📶', unit: 'Mbps', color: '#8b5cf6' },
    { id: 'phone', name: 'Telefon', icon: '📱', unit: 'min', color: '#10b981' },
    { id: 'tv', name: 'TV/Streaming', icon: '📺', unit: '', color: '#06b6d4' },
    { id: 'trash', name: 'Gunoi', icon: '🗑️', unit: '', color: '#64748b' },
    { id: 'maintenance', name: 'Întreținere', icon: '🏢', unit: '', color: '#a855f7' }
];

// Achievements definitions - EXTENDED
const achievementsDef = [
    // Tranzacții
    { id: 'first_trans', name: 'Prima tranzacție', icon: '🎯', desc: 'Ai adăugat prima tranzacție', condition: (s) => s.transactions.length >= 1 },
    { id: 'trans_10', name: 'Starter', icon: '📝', desc: '10 tranzacții înregistrate', condition: (s) => s.transactions.length >= 10 },
    { id: 'trans_50', name: 'Consistent', icon: '📊', desc: '50 tranzacții înregistrate', condition: (s) => s.transactions.length >= 50 },
    { id: 'trans_100', name: 'Pro Tracker', icon: '🏆', desc: '100 tranzacții înregistrate', condition: (s) => s.transactions.length >= 100 },
    { id: 'trans_500', name: 'Legendă', icon: '👑', desc: '500 tranzacții înregistrate', condition: (s) => s.transactions.length >= 500 },
    { id: 'trans_1000', name: 'Master Tracker', icon: '💎', desc: '1000 tranzacții înregistrate', condition: (s) => s.transactions.length >= 1000 },
    
    // Streak
    { id: 'streak_7', name: 'Săptămână perfectă', icon: '🔥', desc: '7 zile consecutive de tracking', condition: (s) => s.streak >= 7 },
    { id: 'streak_30', name: 'Lună de foc', icon: '💪', desc: '30 zile consecutive', condition: (s) => s.streak >= 30 },
    { id: 'streak_100', name: 'Centenar', icon: '💯', desc: '100 zile consecutive', condition: (s) => s.streak >= 100 },
    { id: 'streak_365', name: 'Un an întreg!', icon: '🎊', desc: '365 zile consecutive', condition: (s) => s.streak >= 365 },
    
    // Economii
    { id: 'saver_20', name: 'Economist', icon: '💰', desc: 'Ai economisit 20% din venituri', condition: (s) => s.savingsRate >= 20 },
    { id: 'saver_50', name: 'Super Saver', icon: '🌟', desc: 'Ai economisit 50% din venituri', condition: (s) => s.savingsRate >= 50 },
    { id: 'saver_70', name: 'FIRE Aspirant', icon: '🔥', desc: 'Ai economisit 70% din venituri', condition: (s) => s.savingsRate >= 70 },
    
    // Obiective & Datorii
    { id: 'goal_complete', name: 'Goal Getter', icon: '🎯', desc: 'Ai completat un obiectiv', condition: (s) => s.goals.some(g => g.saved >= g.target) },
    { id: 'goals_3', name: 'Ambițios', icon: '🚀', desc: 'Ai 3+ obiective active', condition: (s) => s.goals.length >= 3 },
    { id: 'budget_master', name: 'Budget Master', icon: '👑', desc: 'Ai rămas în buget o lună întreagă', condition: (s) => s.budgetKept },
    { id: 'debt_free', name: 'Debt Free', icon: '🆓', desc: 'Zero datorii de plătit', condition: (s) => s.debts.filter(d => d.type === 'owe').length === 0 },
    
    // Investiții & Net Worth
    { id: 'investor', name: 'Investitor', icon: '📈', desc: 'Prima investiție înregistrată', condition: (s) => s.transactions.some(t => t.category === 'invest_expense' || t.category === 'investments_income') },
    { id: 'crypto_holder', name: 'Crypto Holder', icon: '₿', desc: 'Ai tranzacții crypto', condition: (s) => s.transactions.some(t => t.category === 'crypto_income' || (t.subcategory && t.subcategory.toLowerCase().includes('crypto'))) },
    { id: 'net_worth_10k', name: '10K Club', icon: '💵', desc: 'Patrimoniu net de 10,000+', condition: (s) => s.netWorth >= 10000 },
    { id: 'net_worth_50k', name: '50K Club', icon: '💎', desc: 'Patrimoniu net de 50,000+', condition: (s) => s.netWorth >= 50000 },
    { id: 'net_worth_100k', name: '100K Club', icon: '🏆', desc: 'Patrimoniu net de 100,000+', condition: (s) => s.netWorth >= 100000 },
    
    // Conturi & Organizare
    { id: 'multi_account', name: 'Organizat', icon: '🏦', desc: 'Ai 3+ conturi configurate', condition: (s) => s.accounts.length >= 3 },
    { id: 'budgets_set', name: 'Planificator', icon: '📋', desc: 'Ai 5+ bugete setate', condition: (s) => s.budgets.length >= 5 },
    
    // Special
    { id: 'ai_user', name: 'AI Explorer', icon: '🤖', desc: 'Ai folosit asistentul AI', condition: (s) => s.aiUsed },
    { id: 'utilities_tracker', name: 'Home Manager', icon: '🏠', desc: 'Ai înregistrat utilități', condition: (s) => s.utilities && s.utilities.length >= 1 },
    { id: 'early_bird', name: 'Early Bird', icon: '🌅', desc: 'Tranzacție adăugată înainte de 7 AM', condition: (s) => s.earlyBird },
    { id: 'night_owl', name: 'Night Owl', icon: '🦉', desc: 'Tranzacție adăugată după 11 PM', condition: (s) => s.nightOwl },
    { id: 'weekend_warrior', name: 'Weekend Warrior', icon: '🎉', desc: 'Tracking în weekend', condition: (s) => s.weekendWarrior }
];

// State
let state = {
    user: null,
    transactions: [],
    goals: [],
    reminders: [],
    debts: [],
    accounts: [],
    budgets: [],
    achievements: [],
    shownAchievements: [],
    challenges: [],
    splits: [],
    utilities: [],
    investments: [], // Portfolio tracker
    netWorthHistory: [], // Historical net worth
    tags: [], // Custom tags
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    currency: localStorage.getItem('currency') || 'RON',
    filter: 'all',
    period: 30,
    editingId: null,
    chart: null,
    trendChart: null,
    utilitiesChart: null,
    netWorthChart: null,
    streak: 0,
    savingsRate: 0,
    budgetKept: false,
    aiUsed: false,
    netWorth: 0,
    healthScore: 0,
    weeklyReport: null,
    // Special achievement triggers
    earlyBird: false,
    nightOwl: false,
    weekendWarrior: false,
    theme: localStorage.getItem('theme') || 'dark'
};

// Savings Challenges
const challengeTemplates = [
    { id: '52week', name: 'Provocarea 52 săptămâni', icon: '📅', desc: 'Economisește crescător fiecare săptămână', duration: 52, type: 'weekly', calculateAmount: (week) => week * 10 },
    { id: 'noSpend', name: 'Weekend fără cheltuieli', icon: '🚫', desc: 'Un weekend fără cheltuieli', duration: 2, type: 'days', target: 0 },
    { id: 'coffee', name: 'Fără cafea de afară', icon: '☕', desc: '30 zile fără cafea cumpărată', duration: 30, type: 'days', category: 'food' },
    { id: 'lunch', name: 'Prânz de acasă', icon: '🍱', desc: 'O lună cu prânz pregătit acasă', duration: 30, type: 'days', category: 'food' },
    { id: 'round', name: 'Rotunjește și economisește', icon: '🔄', desc: 'Rotunjește cheltuielile și pune diferența deoparte', duration: 30, type: 'days', target: 500 },
    { id: '1percent', name: 'Regula 1%', icon: '📈', desc: 'Economisește 1% din venit zilnic', duration: 30, type: 'daily' },
    { id: 'impulse', name: 'Zero cumpărături impulsive', icon: '🛑', desc: '14 zile fără cumpărături neplanificate', duration: 14, type: 'days' },
    { id: 'envelope', name: 'Metoda plicurilor', icon: '✉️', desc: 'Buget fix pe categorii', duration: 30, type: 'monthly' }
];

// Month names
const months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

// DOM Elements
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    try {
        initAuth();
        initEventListeners();
    } catch (err) {
        console.error('Init error:', err);
    }
    // Always hide splash after 2 seconds
    setTimeout(() => {
        const splash = document.getElementById('splash');
        if (splash) splash.style.display = 'none';
    }, 2000);
});

// Auth
function initAuth() {
    auth.onAuthStateChanged(user => {
        if (user) {
            state.user = user;
            showApp();
            loadAllData();
        } else {
            state.user = null;
            showAuth();
        }
    });
}

function showAuth() {
    $('authScreen')?.classList.remove('hidden');
    $('app')?.classList.add('hidden');
    $('splash')?.classList.add('hidden');
}

function showApp() {
    $('authScreen')?.classList.add('hidden');
    $('app')?.classList.remove('hidden');
    $('splash')?.classList.add('hidden');
    updateProfile();
}

// Event Listeners
function initEventListeners() {
    try {
    // Auth tabs
    $$('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const tabName = tab.dataset.tab;
            if (tabName === 'login') {
                $('loginForm')?.classList.remove('hidden');
                $('registerForm')?.classList.add('hidden');
            } else {
                $('loginForm')?.classList.add('hidden');
                $('registerForm')?.classList.remove('hidden');
            }
        });
    });

    // Login form
    $('loginForm')?.addEventListener('submit', async e => {
        e.preventDefault();
        const email = $('loginEmail')?.value;
        const pass = $('loginPassword')?.value;
        if (!email || !pass) return;
        try {
            await auth.signInWithEmailAndPassword(email, pass);
            toast('Autentificare reușită!', 'success');
        } catch (err) {
            toast(getAuthError(err.code), 'error');
        }
    });

    // Register form
    $('registerForm')?.addEventListener('submit', async e => {
        e.preventDefault();
        const name = $('regName')?.value;
        const email = $('regEmail')?.value;
        const pass = $('regPassword')?.value;
        if (!name || !email || !pass) return;
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, pass);
            await user.updateProfile({ displayName: name });
            await db.collection('users').doc(user.uid).set({
                name, email, createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            toast('Cont creat cu succes!', 'success');
        } catch (err) {
            toast(getAuthError(err.code), 'error');
        }
    });

    // Google auth (optional)
    $('googleAuth')?.addEventListener('click', async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await auth.signInWithPopup(provider);
            toast('Autentificare reușită!', 'success');
        } catch (err) {
            toast('Eroare la autentificare', 'error');
        }
    });

    // Navigation
    $$('.nav-item[data-view]').forEach(item => {
        item.addEventListener('click', () => {
            const view = item.dataset.view;
            if (view) switchView(view);
        });
    });

    // Transaction form
    $('transForm')?.addEventListener('submit', handleTransactionSubmit);
    
    // Type tabs in transaction modal
    $$('#transModal .type-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('#transModal .type-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const typeInput = $('transType');
            if (typeInput) typeInput.value = tab.dataset.type;
            populateCategories(tab.dataset.type);
        });
    });
    
    $('transCategory')?.addEventListener('change', populateSubcategories);

    // Goal form
    $('goalForm')?.addEventListener('submit', handleGoalSubmit);

    // Debt form  
    $('debtForm')?.addEventListener('submit', handleDebtSubmit);
    
    // Debt type tabs
    $$('#debtModal .type-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('#debtModal .type-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const typeInput = $('debtType');
            if (typeInput) typeInput.value = tab.dataset.type;
        });
    });

    // Reminder form
    $('reminderForm')?.addEventListener('submit', handleReminderSubmit);

    // Account form
    $('accountForm')?.addEventListener('submit', handleAccountSubmit);

    // Budget form
    $('budgetForm')?.addEventListener('submit', handleBudgetSubmit);

    // Utility form
    $('utilityForm')?.addEventListener('submit', saveUtility);
    
    // Filter buttons
    $$('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterTransactions(btn.dataset.filter);
        });
    });
    
    // PDF import
    const pdfDropzone = $('pdfDropzone');
    const pdfInput = $('pdfFileInput');
    
    if (pdfDropzone && pdfInput) {
        pdfDropzone.addEventListener('click', () => pdfInput.click());
        pdfDropzone.addEventListener('dragover', e => { e.preventDefault(); pdfDropzone.style.borderColor = 'var(--primary)'; });
        pdfDropzone.addEventListener('dragleave', () => { pdfDropzone.style.borderColor = 'var(--border)'; });
        pdfDropzone.addEventListener('drop', e => {
            e.preventDefault();
            pdfDropzone.style.borderColor = 'var(--border)';
            const file = e.dataTransfer?.files[0];
            if (file && file.type === 'application/pdf') handlePdfUpload(file);
        });
        pdfInput.addEventListener('change', e => {
            const file = e.target.files?.[0];
            if (file) handlePdfUpload(file);
        });
    }
    
    // Currency select
    $('currencySelect')?.addEventListener('change', e => {
        state.currency = e.target.value;
        if (state.user) {
            db.collection('users').doc(state.user.uid).update({ currency: state.currency });
        }
        renderAll();
    });
    
    } catch (err) {
        console.error('Event listeners error:', err);
    }
}

// Auth error messages
function getAuthError(code) {
    const errors = {
        'auth/email-already-in-use': 'Email-ul este deja folosit',
        'auth/invalid-email': 'Email invalid',
        'auth/weak-password': 'Parola trebuie să aibă minim 6 caractere',
        'auth/user-not-found': 'Utilizator inexistent',
        'auth/wrong-password': 'Parolă incorectă'
    };
    return errors[code] || 'Eroare de autentificare';
}

// Load all data
async function loadAllData() {
    if (!state.user) return;
    const uid = state.user.uid;
    
    try {
        // Transactions
        const transSnap = await db.collection('users').doc(uid).collection('transactions')
            .orderBy('date', 'desc').get();
        state.transactions = transSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        // Goals
        const goalsSnap = await db.collection('users').doc(uid).collection('goals').get();
        state.goals = goalsSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        // Reminders
        const remindSnap = await db.collection('users').doc(uid).collection('reminders').get();
        state.reminders = remindSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        // Debts
        const debtsSnap = await db.collection('users').doc(uid).collection('debts').get();
        state.debts = debtsSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        // Accounts
        const accSnap = await db.collection('users').doc(uid).collection('accounts').get();
        state.accounts = accSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        // Budgets
        const budSnap = await db.collection('users').doc(uid).collection('budgets').get();
        state.budgets = budSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        // Utilities
        const utilSnap = await db.collection('users').doc(uid).collection('utilities').get();
        state.utilities = utilSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        // Load user document for achievements and settings
        const userDoc = await db.collection('users').doc(uid).get();
        if (userDoc.exists) {
            const userData = userDoc.data();
            state.achievements = userData.achievements || [];
            state.shownAchievements = userData.shownAchievements || [];
            state.netWorth = userData.netWorth || 0;
        }

        // Calculate streak
        calculateStreak();
        
        // Check achievements
        checkAchievements();

        renderAll();
        checkReminders();
    } catch (err) {
        console.error('Error loading data:', err);
    }
}

// Calculate streak
function calculateStreak() {
    if (state.transactions.length === 0) {
        state.streak = 0;
        return;
    }
    
    const dates = [...new Set(state.transactions.map(t => t.date))].sort().reverse();
    let streak = 0;
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    
    for (const dateStr of dates) {
        const date = new Date(dateStr);
        date.setHours(0, 0, 0, 0);
        const diffDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));
        
        if (diffDays <= 1) {
            streak++;
            currentDate = date;
        } else {
            break;
        }
    }
    
    state.streak = streak;
}

// Check achievements
function checkAchievements() {
    const newAchievements = [];
    
    achievementsDef.forEach(ach => {
        // Check if achievement is earned but not yet in state
        if (!state.achievements.includes(ach.id) && ach.condition(state)) {
            state.achievements.push(ach.id);
            // Only show toast if this achievement hasn't been shown before
            if (!state.shownAchievements.includes(ach.id)) {
                newAchievements.push(ach);
                state.shownAchievements.push(ach.id);
            }
        }
    });
    
    if (newAchievements.length > 0 || state.achievements.length > 0) {
        // Save achievements and shown achievements
        if (state.user) {
            db.collection('users').doc(state.user.uid).update({
                achievements: state.achievements,
                shownAchievements: state.shownAchievements
            }).catch(() => {});
        }
        
        // Show toast only for truly new achievements
        newAchievements.forEach((ach, idx) => {
            setTimeout(() => {
                toast(`🏆 Achievement deblocat: ${ach.name}!`, 'success');
            }, 500 + idx * 1000);
        });
    }
}

// Render all
function renderAll() {
    updateStats();
    updateHeaderGreeting();
    renderRecentTransactions();
    updateChart();
    updateMenuBadges();
}

// Update header greeting
function updateHeaderGreeting() {
    const greeting = $('headerGreeting');
    if (!greeting || !state.user) return;
    
    const hour = new Date().getHours();
    const name = state.user.displayName?.split(' ')[0] || 'Utilizator';
    
    let greet = 'Bună';
    if (hour < 12) greet = 'Bună dimineața';
    else if (hour < 18) greet = 'Bună ziua';
    else greet = 'Bună seara';
    
    greeting.textContent = `${greet}, ${name}! 👋`;
}

// Update menu badges
function updateMenuBadges() {
    if ($('goalsCount')) $('goalsCount').textContent = state.goals.length || '';
    if ($('debtsCount')) $('debtsCount').textContent = state.debts.length || '';
    if ($('accountsCount')) $('accountsCount').textContent = state.accounts.length || '';
    if ($('budgetsCount')) $('budgetsCount').textContent = state.budgets.length || '';
}

// Update FIRE progress display
function updateFIREProgress() {
    // Called from stats view
    updateFIREDisplay();
}

// Show Savings Calculator modal
function showSavingsCalculator() {
    const target = prompt('Pentru ce sumă vrei să economisești?', '10000');
    if (!target) return;
    
    const amount = parseFloat(target);
    if (isNaN(amount) || amount <= 0) {
        toast('Te rog introdu o sumă validă', 'error');
        return;
    }
    
    const result = calculateSavingsTime(amount);
    
    if (result.months === Infinity) {
        toast('❌ ' + result.message, 'warning');
    } else {
        toast(`💰 Pentru ${amount.toLocaleString()} ${state.currency} ai nevoie de ${result.message} (economisești ~${result.monthlySavings.toLocaleString()} ${state.currency}/lună)`, 'success');
    }
}

// Show FIRE Calculator details
function showFIRECalculator() {
    const fire = calculateFIRE();
    
    const message = `
🔥 Calculator FIRE (Financial Independence)

📊 Cheltuieli anuale: ${fire.annualExpense.toLocaleString()} ${state.currency}
🎯 Obiectiv FIRE (25x): ${fire.fireNumber.toLocaleString()} ${state.currency}
💰 Patrimoniu actual: ${fire.currentNetWorth.toLocaleString()} ${state.currency}
📈 Progres: ${fire.progress.toFixed(1)}%
💵 Economii lunare: ${fire.monthlySavings.toLocaleString()} ${state.currency}
⏱️ Ani până la FIRE: ${fire.yearsToFire === Infinity ? '∞' : fire.yearsToFire.toFixed(1)}

Regula 4%: Poți retrage 4% pe an din investiții fără a rămâne fără bani.
    `.trim();
    
    alert(message);
}

// Make calculator functions global
window.showSavingsCalculator = showSavingsCalculator;
window.showFIRECalculator = showFIRECalculator;
window.updateFIREProgress = updateFIREProgress;

// Toggle floating action button
function toggleFab() {
    const container = $('fabContainer');
    if (container) {
        container.classList.toggle('open');
    }
}

// Close FAB when clicking outside
document.addEventListener('click', (e) => {
    const fab = $('fabContainer');
    if (fab && !fab.contains(e.target)) {
        fab.classList.remove('open');
    }
});

window.toggleFab = toggleFab;

// Get month transactions
function getMonthTransactions() {
    return state.transactions.filter(t => {
        const d = new Date(t.date);
        return d.getMonth() === state.month && d.getFullYear() === state.year;
    });
}

// Update stats
function updateStats() {
    const trans = getMonthTransactions();
    let income = 0, expense = 0;
    
    trans.forEach(t => {
        if (t.type === 'income') income += t.amount;
        else if (t.type === 'expense') expense += t.amount;
        else if (t.type === 'correction') {
            if (t.amount > 0) income += t.amount;
            else expense += Math.abs(t.amount);
        }
    });

    const balance = income - expense;
    state.savingsRate = income > 0 ? ((income - expense) / income * 100) : 0;
    
    if ($('totalIncome')) $('totalIncome').textContent = fmt(income);
    if ($('totalExpense')) $('totalExpense').textContent = fmt(expense);
    if ($('totalBalance')) $('totalBalance').textContent = fmt(balance);
    
    // Calculate change from last month
    const lastMonthTrans = state.transactions.filter(t => {
        const d = new Date(t.date);
        const lm = state.month === 0 ? 11 : state.month - 1;
        const ly = state.month === 0 ? state.year - 1 : state.year;
        return d.getMonth() === lm && d.getFullYear() === ly;
    });
    
    let lastBalance = 0;
    lastMonthTrans.forEach(t => {
        if (t.type === 'income') lastBalance += t.amount;
        else if (t.type === 'expense') lastBalance -= t.amount;
    });
    
    const change = lastBalance !== 0 ? ((balance - lastBalance) / Math.abs(lastBalance) * 100).toFixed(0) : 0;
    const changeEl = $('balanceChange');
    if (changeEl) {
        changeEl.textContent = (change >= 0 ? '+' : '') + change + '%';
        changeEl.className = 'balance-change ' + (change >= 0 ? 'positive' : 'negative');
    }
    
    // Progress bar
    const spentPercent = income > 0 ? Math.min((expense / income) * 100, 100) : 0;
    if ($('spentProgress')) $('spentProgress').style.width = spentPercent + '%';
    if ($('spentPercent')) $('spentPercent').textContent = spentPercent.toFixed(0) + '% din venituri cheltuit';
    
    // Quick stats
    const today = new Date();
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const daysPassed = state.month === today.getMonth() && state.year === today.getFullYear() 
        ? today.getDate() : daysInMonth;
    const daysLeft = daysInMonth - daysPassed;
    
    const dailyAvg = daysPassed > 0 ? expense / daysPassed : 0;
    const prediction = dailyAvg * daysInMonth;
    
    if ($('dailyAvg')) $('dailyAvg').textContent = fmt(dailyAvg);
    if ($('prediction')) $('prediction').textContent = fmt(prediction);
    if ($('savingsRate')) $('savingsRate').textContent = state.savingsRate.toFixed(0) + '%';
    if ($('savingsRateHome')) $('savingsRateHome').textContent = state.savingsRate.toFixed(0) + '%';
    if ($('daysLeft')) $('daysLeft').textContent = daysLeft;
    if ($('streakCount')) $('streakCount').textContent = state.streak + '🔥';
    
    // Update month display
    if ($('currentMonth')) $('currentMonth').textContent = months[state.month] + ' ' + state.year;
    if ($('transMonth')) $('transMonth').textContent = months[state.month] + ' ' + state.year;

    // Check budgets
    checkBudgetAlerts();
}

// Update Net Worth
function updateNetWorth() {
    let netWorth = 0;
    
    // Add account balances
    state.accounts.forEach(acc => {
        netWorth += acc.balance || 0;
    });
    
    // Subtract debts owed
    state.debts.forEach(d => {
        if (d.type === 'owe') netWorth -= d.amount;
        else netWorth += d.amount;
    });
    
    state.netWorth = netWorth;
    if ($('netWorth')) $('netWorth').textContent = fmt(netWorth);
}

// Render accounts preview
function renderAccountsPreview() {
    const container = $('accountsPreview');
    if (!container) return;
    
    if (state.accounts.length === 0) {
        container.innerHTML = `<div class="empty-state small"><span class="empty-icon">💳</span><p>Niciun cont adăugat</p></div>`;
        return;
    }
    
    container.innerHTML = state.accounts.slice(0, 3).map(acc => `
        <div class="account-card" style="border-left: 3px solid ${acc.color || '#8b5cf6'}">
            <div class="account-icon">${acc.icon || '💳'}</div>
            <div class="account-info">
                <div class="account-name">${esc(acc.name)}</div>
                <div class="account-type">${acc.type || 'Cont'}</div>
            </div>
            <div class="account-balance">${fmt(acc.balance || 0)}</div>
        </div>
    `).join('');
}

// Render budgets preview
function renderBudgetsPreview() {
    const container = $('budgetsPreview');
    if (!container) return;
    
    if (state.budgets.length === 0) {
        container.innerHTML = `<div class="empty-state small"><span class="empty-icon">📊</span><p>Niciun buget setat</p></div>`;
        return;
    }
    
    const monthTrans = getMonthTransactions();
    
    container.innerHTML = state.budgets.slice(0, 3).map(budget => {
        const spent = monthTrans
            .filter(t => t.type === 'expense' && t.category === budget.category)
            .reduce((sum, t) => sum + t.amount, 0);
        const percent = budget.limit > 0 ? Math.min((spent / budget.limit) * 100, 100) : 0;
        const isOver = spent > budget.limit;
        const cat = findCategory('expense', budget.category);
        
        return `
            <div class="budget-card ${isOver ? 'over' : ''}">
                <div class="budget-header">
                    <span class="budget-cat">${cat?.icon || '📦'} ${cat?.name || budget.category}</span>
                    <span class="budget-amounts">${fmt(spent)} / ${fmt(budget.limit)}</span>
                </div>
                <div class="budget-bar">
                    <div class="budget-fill ${isOver ? 'over' : ''}" style="width: ${percent}%"></div>
                </div>
                <div class="budget-status">${isOver ? '⚠️ Depășit!' : `${(100 - percent).toFixed(0)}% rămas`}</div>
            </div>
        `;
    }).join('');
}

// Check budget alerts
function checkBudgetAlerts() {
    const monthTrans = getMonthTransactions();
    
    state.budgets.forEach(budget => {
        const spent = monthTrans
            .filter(t => t.type === 'expense' && t.category === budget.category)
            .reduce((sum, t) => sum + t.amount, 0);
        
        const percent = budget.limit > 0 ? (spent / budget.limit) * 100 : 0;
        const cat = findCategory('expense', budget.category);
        
        if (percent >= 100 && !budget.alertedOver) {
            toast(`⚠️ Ai depășit bugetul pentru ${cat?.name || budget.category}!`, 'warning');
            budget.alertedOver = true;
        } else if (percent >= 80 && percent < 100 && !budget.alerted80) {
            toast(`📊 Ai folosit 80% din bugetul pentru ${cat?.name || budget.category}`, 'info');
            budget.alerted80 = true;
        }
    });
}

// Render recent transactions
function renderRecentTransactions() {
    const trans = getMonthTransactions().slice(0, 5);
    const container = $('recentTransactions');
    if (!container) return;
    
    if (trans.length === 0) {
        container.innerHTML = `<div class="empty-state"><span class="empty-icon">📝</span><p>Nicio tranzacție încă</p></div>`;
        return;
    }
    
    container.innerHTML = trans.map(t => {
        const cat = findCategory(t.type, t.category);
        return `
            <div class="trans-item" onclick="editTransaction('${t.id}')">
                <div class="trans-icon" style="background: ${cat?.color || '#666'}20">${cat?.icon || '📦'}</div>
                <div class="trans-info">
                    <div class="trans-category">${cat?.name || t.category}</div>
                    <div class="trans-meta">${t.subcategory || ''} · ${formatDate(t.date)}</div>
                </div>
                <div class="trans-amount ${t.type}">${t.type === 'expense' ? '-' : '+'}${t.amount.toLocaleString()} ${state.currency}</div>
            </div>
        `;
    }).join('');
}

// Render all transactions
function renderAllTransactions() {
    // Reset search when switching to transactions view
    const searchInput = $('searchInput');
    if (searchInput && !searchQuery) searchInput.value = '';
    
    // Update month display
    const transMonth = $('transMonth');
    if (transMonth) transMonth.textContent = `${months[state.month]} ${state.year}`;
    
    renderFilteredTransactions();
}

// Transaction HTML
function transactionHTML(t, showActions = false) {
    const cat = findCategory(t.type, t.category);
    const icon = cat ? cat.icon : '📝';
    const catName = cat ? cat.name : t.category;
    const isIncome = t.type === 'income';
    const isCorrection = t.type === 'correction';
    const amountClass = isCorrection ? 'correction' : (isIncome ? 'income' : 'expense');
    const amountPrefix = isIncome || (isCorrection && t.amount > 0) ? '+' : '-';
    const amount = Math.abs(t.amount);
    const tags = t.tags ? t.tags.map(tag => `<span class="trans-tag">${tag}</span>`).join('') : '';
    
    return `
        <div class="trans-item" data-id="${t.id}">
            <div class="trans-icon" style="background: ${cat?.color || '#8b5cf6'}20">${icon}</div>
            <div class="trans-info">
                <div class="trans-category">${esc(catName)}</div>
                <div class="trans-details">${t.subcategory ? esc(t.subcategory) : ''}${t.description ? ' • ' + esc(t.description) : ''}</div>
                ${tags ? `<div class="trans-tags">${tags}</div>` : ''}
            </div>
            <div class="trans-right">
                <div class="trans-amount ${amountClass}">${amountPrefix}${fmt(amount)}</div>
                <div class="trans-date">${formatDate(t.date)}</div>
            </div>
            ${showActions ? `
                <div class="trans-actions">
                    <button class="trans-action" onclick="editTransaction('${t.id}')">✏️</button>
                    <button class="trans-action delete" onclick="deleteTransaction('${t.id}')">🗑️</button>
                </div>
            ` : ''}
        </div>
    `;
}

// Find category
function findCategory(type, catId) {
    const cats = categories[type] || [];
    return cats.find(c => c.id === catId || c.name === catId);
}

// Update chart
function updateChart() {
    const trans = getMonthTransactions().filter(t => t.type === 'expense');
    const byCategory = {};
    
    trans.forEach(t => {
        const cat = findCategory('expense', t.category);
        const name = cat ? cat.name : t.category;
        byCategory[name] = (byCategory[name] || 0) + t.amount;
    });
    
    const sorted = Object.entries(byCategory).sort((a, b) => b[1] - a[1]).slice(0, 6);
    const labels = sorted.map(s => s[0]);
    const data = sorted.map(s => s[1]);
    const total = data.reduce((a, b) => a + b, 0);
    
    const colors = ['#8b5cf6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899'];
    
    const chartCenter = $('chartCenter');
    if (chartCenter) chartCenter.querySelector('.chart-total').textContent = fmt(total);
    
    // Legend
    const legend = $('chartLegend');
    if (legend) {
        legend.innerHTML = labels.map((l, i) => `
            <div class="legend-item">
                <span class="legend-color" style="background:${colors[i]}"></span>
                <span>${l}</span>
            </div>
        `).join('');
    }
    
    const canvas = $('expenseChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    if (state.chart) state.chart.destroy();
    
    state.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels,
            datasets: [{
                data,
                backgroundColor: colors,
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%',
            plugins: { legend: { display: false } },
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Generate AI insights
async function generateInsights() {
    const trans = getMonthTransactions();
    const container = $('aiInsights');
    if (!container) return;
    
    if (trans.length < 3) {
        container.innerHTML = `<div class="insight-card"><span class="insight-icon">💡</span><p>Adaugă cel puțin 3 tranzacții pentru a primi insights personalizate.</p></div>`;
        return;
    }
    
    let income = 0, expense = 0;
    const byCategory = {};
    
    trans.forEach(t => {
        if (t.type === 'income') income += t.amount;
        else if (t.type === 'expense') {
            expense += t.amount;
            const cat = findCategory('expense', t.category);
            const name = cat ? cat.name : t.category;
            byCategory[name] = (byCategory[name] || 0) + t.amount;
        }
    });
    
    const insights = [];
    
    // Saving rate insight
    const savingRate = income > 0 ? ((income - expense) / income * 100) : 0;
    if (savingRate < 10) {
        insights.push({ icon: '⚠️', text: `Economisești doar ${savingRate.toFixed(0)}% din venituri. Țintește minim 20%!`, type: 'warning' });
    } else if (savingRate >= 20) {
        insights.push({ icon: '🎉', text: `Excelent! Economisești ${savingRate.toFixed(0)}% din venituri. Continuă așa!`, type: 'success' });
    } else {
        insights.push({ icon: '💰', text: `Economisești ${savingRate.toFixed(0)}% din venituri. Mai ai puțin până la 20%!`, type: 'info' });
    }
    
    // Top category insight
    const sorted = Object.entries(byCategory).sort((a, b) => b[1] - a[1]);
    if (sorted.length > 0) {
        const [topCat, topAmount] = sorted[0];
        const percent = expense > 0 ? (topAmount / expense * 100).toFixed(0) : 0;
        insights.push({ icon: '📊', text: `${topCat} reprezintă ${percent}% din cheltuieli (${fmt(topAmount)})`, type: 'info' });
    }
    
    // Streak insight
    if (state.streak >= 7) {
        insights.push({ icon: '🔥', text: `Streak de ${state.streak} zile! Ești pe drumul cel bun!`, type: 'success' });
    }
    
    // Net worth insight
    if (state.netWorth > 0) {
        insights.push({ icon: '💎', text: `Patrimoniul tău net: ${fmt(state.netWorth)}`, type: 'info' });
    }
    
    // Daily average
    const today = new Date();
    const daysPassed = state.month === today.getMonth() ? today.getDate() : 30;
    const dailyAvg = expense / daysPassed;
    insights.push({ icon: '📅', text: `Media zilnică de cheltuieli: ${fmt(dailyAvg)}`, type: 'info' });
    
    // Prediction warning
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const predicted = dailyAvg * daysInMonth;
    if (predicted > income && income > 0) {
        insights.push({ icon: '🚨', text: `La acest ritm vei cheltui ${fmt(predicted)}, mai mult decât venitul!`, type: 'warning' });
    }
    
    container.innerHTML = insights.map(i => `
        <div class="insight-card ${i.type}">
            <span class="insight-icon">${i.icon}</span>
            <p>${i.text}</p>
        </div>
    `).join('');
}

// Goals preview
function renderGoalsPreview() {
    const active = state.goals.filter(g => g.saved < g.target).slice(0, 2);
    const container = $('goalsPreview');
    if (!container) return;
    
    if (active.length === 0) {
        container.innerHTML = `<div class="empty-state small"><span class="empty-icon">🎯</span><p>Niciun obiectiv activ</p></div>`;
        return;
    }
    
    container.innerHTML = active.map(g => goalPreviewHTML(g)).join('');
}

function goalPreviewHTML(g) {
    const percent = Math.min((g.saved / g.target) * 100, 100);
    return `
        <div class="goal-item">
            <div class="goal-header">
                <div class="goal-icon">${g.icon || '🎯'}</div>
                <div class="goal-info">
                    <div class="goal-name">${esc(g.name)}</div>
                    <div class="goal-amounts">
                        <span class="goal-saved">${fmt(g.saved)}</span>
                        <span class="goal-target">/ ${fmt(g.target)}</span>
                    </div>
                </div>
            </div>
            <div class="goal-progress">
                <div class="goal-bar"><div class="goal-fill" style="width:${percent}%"></div></div>
                <div class="goal-percent">${percent.toFixed(0)}%</div>
            </div>
        </div>
    `;
}

// Debts preview
function renderDebtsPreview() {
    let totalOwe = 0, totalOwed = 0;
    state.debts.forEach(d => {
        if (d.type === 'owe') totalOwe += d.amount;
        else totalOwed += d.amount;
    });
    
    if ($('totalOwe')) $('totalOwe').textContent = fmt(totalOwe);
    if ($('totalOwed')) $('totalOwed').textContent = fmt(totalOwed);
}

// Reminders preview
function renderRemindersPreview() {
    const today = new Date();
    const upcoming = state.reminders
        .filter(r => new Date(r.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 2);
    
    const container = $('remindersPreview');
    if (!container) return;
    
    if (upcoming.length === 0) {
        container.innerHTML = `<div class="empty-state small"><span class="empty-icon">⏰</span><p>Niciun reminder</p></div>`;
        return;
    }
    
    container.innerHTML = upcoming.map(r => reminderHTML(r, false)).join('');
}

function reminderHTML(r, showActions = true) {
    const today = new Date();
    const rDate = new Date(r.date);
    const isDue = rDate <= today;
    
    return `
        <div class="reminder-item ${isDue ? 'due' : ''}" data-id="${r.id}">
            <div class="reminder-icon">⏰</div>
            <div class="reminder-info">
                <div class="reminder-title">${esc(r.title)}</div>
                <div class="reminder-date">${formatDate(r.date)}</div>
                ${r.repeat !== 'once' ? `<span class="reminder-repeat">${getRepeatText(r.repeat)}</span>` : ''}
            </div>
            <div class="reminder-right">
                ${r.amount ? `<div class="reminder-amount">${fmt(r.amount)}</div>` : ''}
                ${showActions ? `
                    <div class="reminder-actions">
                        <button class="reminder-action" onclick="editReminder('${r.id}')">✏️</button>
                        <button class="reminder-action" onclick="deleteReminder('${r.id}')">🗑️</button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function getRepeatText(repeat) {
    const texts = { weekly: 'Săptămânal', monthly: 'Lunar', yearly: 'Anual' };
    return texts[repeat] || repeat;
}

// Switch view
function switchView(view) {
    $$('.view').forEach(v => v.classList.remove('active'));
    const viewEl = $(view + 'View');
    if (viewEl) viewEl.classList.add('active');
    
    // Update bottom nav
    $$('.nav-item').forEach(n => {
        n.classList.toggle('active', n.dataset.view === view);
    });
    
    // Update menu items
    $$('.menu-item').forEach(m => {
        m.classList.toggle('active', m.dataset.view === view);
    });
    
    // Update header title
    const titles = {
        home: 'Budget Pro',
        transactions: 'Tranzacții',
        analytics: 'Analiză',
        accounts: 'Conturi',
        budgets: 'Bugete',
        goals: 'Obiective',
        debts: 'Datorii',
        utilities: 'Utilități',
        reminders: 'Remindere',
        achievements: 'Achievements',
        settings: 'Setări'
    };
    const headerTitle = $('headerTitle');
    if (headerTitle) headerTitle.textContent = titles[view] || 'Budget Pro';
    
    // Render view-specific content
    if (view === 'transactions') renderAllTransactions();
    if (view === 'analytics') updateAnalytics();
    if (view === 'goals') renderGoals();
    if (view === 'debts') renderDebts();
    if (view === 'accounts') renderAccounts();
    if (view === 'budgets') renderBudgetsView();
    if (view === 'utilities') renderUtilitiesView();
    if (view === 'reminders') renderReminders();
    if (view === 'achievements') renderAchievementsView();
    if (view === 'settings') renderSettingsView();
}

// Navigate and close menu
function navigateTo(view) {
    switchView(view);
    closeMenu();
}

// Toggle side menu
function toggleMenu() {
    const menu = $('sideMenu');
    if (menu) menu.classList.toggle('open');
}

// Close menu
function closeMenu() {
    const menu = $('sideMenu');
    if (menu) menu.classList.remove('open');
}

// Render achievements view
function renderAchievementsView() {
    const container = $('achievementsList');
    const countEl = $('achievementsCount');
    if (!container) return;
    
    const unlocked = achievementsDef.filter(a => state.achievements.includes(a.id));
    if (countEl) countEl.textContent = `${unlocked.length}/${achievementsDef.length}`;
    
    container.innerHTML = achievementsDef.map(a => {
        const isUnlocked = state.achievements.includes(a.id);
        return `
            <div class="achievement-badge ${isUnlocked ? 'unlocked' : ''}" title="${a.desc}">
                <span class="badge-icon">${a.icon}</span>
                <span class="badge-name">${a.name}</span>
            </div>
        `;
    }).join('');
}

// Render settings view
function renderSettingsView() {
    const nameEl = $('settingsName');
    const emailEl = $('settingsEmail');
    const avatarEl = $('settingsAvatar');
    const netWorthInput = $('netWorthInput');
    const menuNameEl = $('menuUserName');
    const menuEmailEl = $('menuUserEmail');
    const menuAvatarEl = $('menuAvatar');
    
    if (state.user) {
        const name = state.user.displayName || 'Utilizator';
        const email = state.user.email || '';
        const initial = name.charAt(0).toUpperCase();
        
        if (nameEl) nameEl.textContent = name;
        if (emailEl) emailEl.textContent = email;
        if (avatarEl) avatarEl.textContent = initial;
        if (menuNameEl) menuNameEl.textContent = name;
        if (menuEmailEl) menuEmailEl.textContent = email;
        if (menuAvatarEl) menuAvatarEl.textContent = initial;
    }
    
    if (netWorthInput) netWorthInput.value = state.netWorth || '';
}

// Save net worth from settings
async function saveNetWorth() {
    const input = $('netWorthInput');
    if (!input || !state.user) return;
    
    const value = parseFloat(input.value) || 0;
    state.netWorth = value;
    
    try {
        await db.collection('users').doc(state.user.uid).set({ netWorth: value }, { merge: true });
        toast('Patrimoniu salvat!', 'success');
        updateNetWorth();
    } catch (err) {
        toast('Eroare la salvare', 'error');
    }
}

// Render budgets view
function renderBudgetsView() {
    const container = $('budgetsList');
    if (!container) return;
    
    if (state.budgets.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">📋</span>
                <p>Niciun buget setat</p>
                <button onclick="openBudgetModal()" class="empty-btn">+ Setează buget</button>
            </div>
        `;
        return;
    }
    
    const monthTrans = getMonthTransactions();
    
    container.innerHTML = state.budgets.map(b => {
        const cat = findCategory('expense', b.category);
        const spent = monthTrans.filter(t => t.type === 'expense' && t.category === b.category)
            .reduce((sum, t) => sum + t.amount, 0);
        const percent = Math.min((spent / b.limit) * 100, 100);
        const remaining = b.limit - spent;
        const status = spent > b.limit ? 'over' : spent > b.limit * 0.8 ? 'warning' : 'ok';
        
        return `
            <div class="budget-item">
                <div class="cat-header">
                    <span class="cat-name">${cat?.icon || '📦'} ${cat?.name || b.category}</span>
                    <span class="cat-amount">${spent.toLocaleString()} / ${b.limit.toLocaleString()} ${state.currency}</span>
                </div>
                <div class="cat-bar">
                    <div class="cat-fill" style="width: ${percent}%; background: ${status === 'over' ? 'var(--danger)' : status === 'warning' ? 'var(--warning)' : 'var(--success)'}"></div>
                </div>
            </div>
        `;
    }).join('');
}

// Make new functions global
window.navigateTo = navigateTo;
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;
window.saveNetWorth = saveNetWorth;

// Update stats view
function updateStatsView() {
    updateAnalytics();
    updateFIREDisplay();
    renderCategoriesBreakdown();
}

// Update FIRE display in stats
function updateFIREDisplay() {
    const fire = calculateFIRE();
    
    const progressEl = $('fireProgressValue');
    const targetEl = $('fireTarget');
    const yearsEl = $('fireYears');
    
    if (progressEl) progressEl.textContent = `${Math.min(fire.progress, 100).toFixed(1)}%`;
    if (targetEl) targetEl.textContent = `${fire.fireNumber.toLocaleString()} ${state.currency}`;
    if (yearsEl) {
        yearsEl.textContent = fire.yearsToFire === Infinity || fire.yearsToFire > 100 
            ? '∞' 
            : `${fire.yearsToFire.toFixed(1)} ani`;
    }
}

// Render categories breakdown
function renderCategoriesBreakdown() {
    const container = $('categoriesBreakdown');
    if (!container) return;
    
    const monthTrans = getMonthTransactions();
    const byCategory = {};
    let totalExpense = 0;
    
    monthTrans.filter(t => t.type === 'expense').forEach(t => {
        const cat = findCategory('expense', t.category);
        const name = cat ? cat.name : t.category;
        byCategory[name] = byCategory[name] || { amount: 0, icon: cat?.icon || '📦', color: cat?.color || '#64748b' };
        byCategory[name].amount += t.amount;
        totalExpense += t.amount;
    });
    
    const sorted = Object.entries(byCategory).sort((a, b) => b[1].amount - a[1].amount).slice(0, 8);
    
    if (sorted.length === 0) {
        container.innerHTML = '<p style="text-align:center;color:var(--text3);padding:1rem;">Nicio cheltuială</p>';
        return;
    }
    
    container.innerHTML = sorted.map(([name, data]) => {
        const percent = totalExpense > 0 ? (data.amount / totalExpense * 100) : 0;
        return `
            <div class="category-row">
                <div class="category-icon" style="background: ${data.color}">${data.icon}</div>
                <div class="category-info">
                    <span class="category-name">${name}</span>
                    <div class="category-bar">
                        <div class="category-fill" style="width: ${percent}%; background: ${data.color}"></div>
                    </div>
                </div>
                <span class="category-amount">${data.amount.toLocaleString()} ${state.currency}</span>
            </div>
        `;
    }).join('');
}

// Update menu view
function updateMenuView() {
    // Update user card
    const avatar = $('menuAvatar');
    const name = $('menuName');
    const email = $('menuEmail');
    
    if (avatar && state.user) {
        avatar.textContent = (state.user.displayName || 'U').charAt(0).toUpperCase();
    }
    if (name) name.textContent = state.user?.displayName || 'Utilizator';
    if (email) email.textContent = state.user?.email || '';
    
    // Update badges
    if ($('goalsCount')) $('goalsCount').textContent = state.goals.length || '';
    if ($('debtsCount')) $('debtsCount').textContent = state.debts.length || '';
    if ($('accountsCount')) $('accountsCount').textContent = state.accounts.length || '';
    if ($('budgetsCount')) $('budgetsCount').textContent = state.budgets.length || '';
    
    // Update net worth
    if ($('netWorthValue')) {
        $('netWorthValue').textContent = `${state.netWorth.toLocaleString()} ${state.currency}`;
    }
}

// Render achievements
function renderAchievements() {
    const container = $('achievementsGrid');
    const unlockedEl = $('achievementsUnlocked');
    const totalEl = $('achievementsTotal');
    
    if (!container) return;
    
    const unlocked = achievementsDef.filter(a => a.condition(state));
    
    if (unlockedEl) unlockedEl.textContent = unlocked.length;
    if (totalEl) totalEl.textContent = achievementsDef.length;
    
    container.innerHTML = achievementsDef.map(a => {
        const isUnlocked = a.condition(state);
        return `
            <div class="achievement ${isUnlocked ? 'unlocked' : ''}">
                <span class="achievement-icon">${a.icon}</span>
                <span class="achievement-name">${a.name}</span>
            </div>
        `;
    }).join('');
}

// Render profile
function renderProfile() {
    const avatar = $('profileAvatar');
    const name = $('profileName');
    const email = $('profileEmail');
    const transCount = $('profileTransCount');
    const days = $('profileDays');
    const streak = $('profileStreak');
    
    if (avatar && state.user) {
        avatar.textContent = (state.user.displayName || 'U').charAt(0).toUpperCase();
    }
    if (name) name.textContent = state.user?.displayName || 'Utilizator';
    if (email) email.textContent = state.user?.email || '';
    if (transCount) transCount.textContent = state.transactions.length;
    if (streak) streak.textContent = state.streak;
    
    // Calculate days since first transaction
    if (days && state.transactions.length > 0) {
        const sorted = [...state.transactions].sort((a, b) => new Date(a.date) - new Date(b.date));
        const firstDate = new Date(sorted[0].date);
        const daysSince = Math.floor((new Date() - firstDate) / (1000 * 60 * 60 * 24));
        days.textContent = daysSince;
    }
}

// Init settings
function initSettings() {
    const currencySelect = $('currencySelect');
    if (currencySelect) currencySelect.value = state.currency;
    
    const themeToggle = $('themeToggle');
    if (themeToggle) {
        themeToggle.classList.toggle('active', state.theme === 'dark');
    }
}

// Change month
function changeMonth(delta) {
    state.month += delta;
    if (state.month > 11) { state.month = 0; state.year++; }
    if (state.month < 0) { state.month = 11; state.year--; }
    renderAll();
    renderAllTransactions();
}

// Open modals
function openTransModal(type = 'expense') {
    state.editingId = null;
    if ($('transId')) $('transId').value = '';
    if ($('transForm')) $('transForm').reset();
    if ($('transModalTitle')) $('transModalTitle').textContent = 'Adaugă tranzacție';
    if ($('transDate')) $('transDate').value = new Date().toISOString().split('T')[0];
    if ($('recurringOptions')) $('recurringOptions').classList.add('hidden');
    
    $$('.type-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.type === type);
    });
    if ($('transType')) $('transType').value = type;
    populateCategories(type);
    
    openModal('transModal');
}

function openGoalModal() {
    state.editingId = null;
    if ($('goalId')) $('goalId').value = '';
    if ($('goalForm')) $('goalForm').reset();
    if ($('goalModalTitle')) $('goalModalTitle').textContent = 'Obiectiv nou';
    $$('.icon-btn').forEach(b => b.classList.toggle('active', b.dataset.icon === '🎯'));
    if ($('goalIcon')) $('goalIcon').value = '🎯';
    openModal('goalModal');
}

function openDebtModal() {
    state.editingId = null;
    if ($('debtId')) $('debtId').value = '';
    if ($('debtForm')) $('debtForm').reset();
    if ($('debtModalTitle')) $('debtModalTitle').textContent = 'Adaugă datorie';
    $$('.debt-tab').forEach(t => t.classList.toggle('active', t.dataset.type === 'owe'));
    if ($('debtType')) $('debtType').value = 'owe';
    if ($('personLabel')) $('personLabel').textContent = 'Cui datorezi?';
    openModal('debtModal');
}

function openReminderModal() {
    state.editingId = null;
    if ($('reminderId')) $('reminderId').value = '';
    if ($('reminderForm')) $('reminderForm').reset();
    if ($('reminderModalTitle')) $('reminderModalTitle').textContent = 'Reminder nou';
    if ($('reminderDate')) $('reminderDate').value = new Date().toISOString().split('T')[0];
    openModal('reminderModal');
}

function openAccountModal() {
    state.editingId = null;
    if ($('accountId')) $('accountId').value = '';
    if ($('accountForm')) $('accountForm').reset();
    if ($('accountModalTitle')) $('accountModalTitle').textContent = 'Cont nou';
    openModal('accountModal');
}

function openBudgetModal() {
    state.editingId = null;
    if ($('budgetId')) $('budgetId').value = '';
    if ($('budgetForm')) $('budgetForm').reset();
    if ($('budgetModalTitle')) $('budgetModalTitle').textContent = 'Buget nou';
    populateBudgetCategories();
    openModal('budgetModal');
}

function openModal(id) {
    const modal = $(id);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(id) {
    const modal = $(id);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Populate categories
function populateCategories(type) {
    const select = $('transCategory');
    if (!select) return;
    const cats = categories[type] || [];
    select.innerHTML = cats.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
    populateSubcategories();
}

function populateSubcategories() {
    const type = $('transType')?.value;
    const catId = $('transCategory')?.value;
    const cat = categories[type]?.find(c => c.id === catId);
    const select = $('transSubcategory');
    if (!select) return;
    
    if (cat && cat.subs) {
        select.innerHTML = '<option value="">Alege subcategorie...</option>' + 
            cat.subs.map(s => `<option value="${s}">${s}</option>`).join('');
    } else {
        select.innerHTML = '<option value="">-</option>';
    }
}

function populateReminderCategories() {
    const select = $('reminderCategory');
    if (!select) return;
    const allCats = [...categories.expense, ...categories.income];
    select.innerHTML = '<option value="">Alege...</option>' + 
        allCats.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
}

function populateBudgetCategories() {
    const select = $('budgetCategory');
    if (!select) return;
    select.innerHTML = '<option value="">Alege categorie...</option>' + 
        categories.expense.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
}

// Handle transaction submit
async function handleTransactionSubmit(e) {
    e.preventDefault();
    
    const tagsInput = $('transTags')?.value || '';
    const tags = tagsInput.split(',').map(t => t.trim()).filter(t => t);
    
    const data = {
        type: $('transType').value,
        amount: parseFloat($('transAmount').value),
        category: $('transCategory').value,
        subcategory: $('transSubcategory')?.value || '',
        description: $('transDescription')?.value || '',
        date: $('transDate').value,
        tags: tags,
        account: $('transAccount')?.value || '',
        recurring: $('transRecurring')?.checked || false,
        recurringFreq: $('transRecurring')?.checked ? $('recurringFreq')?.value : null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('transactions');
        
        if (state.editingId) {
            await ref.doc(state.editingId).update(data);
            const idx = state.transactions.findIndex(t => t.id === state.editingId);
            if (idx >= 0) state.transactions[idx] = { ...state.transactions[idx], ...data };
            toast('Tranzacție actualizată!', 'success');
        } else {
            const doc = await ref.add(data);
            state.transactions.unshift({ id: doc.id, ...data });
            toast('Tranzacție adăugată!', 'success');
        }
        
        closeModal('transModal');
        calculateStreak();
        checkAchievements();
        renderAll();
        renderAllTransactions();
    } catch (err) {
        toast('Eroare la salvare', 'error');
    }
}

// Edit transaction
function editTransaction(id) {
    const t = state.transactions.find(tr => tr.id === id);
    if (!t) return;
    
    state.editingId = id;
    if ($('transId')) $('transId').value = id;
    if ($('transModalTitle')) $('transModalTitle').textContent = 'Editează tranzacție';
    
    $$('.type-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.type === t.type);
    });
    if ($('transType')) $('transType').value = t.type;
    populateCategories(t.type);
    
    if ($('transCategory')) $('transCategory').value = t.category;
    populateSubcategories();
    if ($('transSubcategory')) $('transSubcategory').value = t.subcategory || '';
    if ($('transAmount')) $('transAmount').value = Math.abs(t.amount);
    if ($('transDescription')) $('transDescription').value = t.description || '';
    if ($('transDate')) $('transDate').value = t.date;
    if ($('transTags')) $('transTags').value = (t.tags || []).join(', ');
    if ($('transRecurring')) $('transRecurring').checked = t.recurring || false;
    if ($('recurringOptions')) $('recurringOptions').classList.toggle('hidden', !t.recurring);
    if (t.recurring && $('recurringFreq')) $('recurringFreq').value = t.recurringFreq;
    
    openModal('transModal');
}

// Delete transaction
async function deleteTransaction(id) {
    if (!confirm('Ștergi această tranzacție?')) return;
    
    try {
        await db.collection('users').doc(state.user.uid).collection('transactions').doc(id).delete();
        state.transactions = state.transactions.filter(t => t.id !== id);
        toast('Tranzacție ștearsă!', 'success');
        renderAll();
        renderAllTransactions();
    } catch (err) {
        toast('Eroare la ștergere', 'error');
    }
}

// Handle goal submit
async function handleGoalSubmit(e) {
    e.preventDefault();
    
    const data = {
        name: $('goalName').value,
        target: parseFloat($('goalTarget').value),
        saved: parseFloat($('goalSaved')?.value) || 0,
        deadline: $('goalDeadline')?.value || null,
        icon: $('goalIcon')?.value || '🎯',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('goals');
        
        if (state.editingId) {
            await ref.doc(state.editingId).update(data);
            const idx = state.goals.findIndex(g => g.id === state.editingId);
            if (idx >= 0) state.goals[idx] = { ...state.goals[idx], ...data };
            toast('Obiectiv actualizat!', 'success');
        } else {
            const doc = await ref.add(data);
            state.goals.push({ id: doc.id, ...data });
            toast('Obiectiv adăugat!', 'success');
        }
        
        closeModal('goalModal');
        checkAchievements();
        renderGoalsPreview();
        renderGoals();
    } catch (err) {
        toast('Eroare la salvare', 'error');
    }
}

// Render goals
function renderGoals() {
    const active = state.goals.filter(g => g.saved < g.target);
    const completed = state.goals.filter(g => g.saved >= g.target);
    
    if ($('activeGoals')) $('activeGoals').textContent = active.length;
    if ($('completedGoals')) $('completedGoals').textContent = completed.length;
    if ($('totalSaved')) $('totalSaved').textContent = fmt(state.goals.reduce((a, g) => a + g.saved, 0));
    
    const activeList = $('activeGoalsList');
    if (activeList) {
        activeList.innerHTML = active.length ? active.map(g => goalFullHTML(g)).join('') : 
            '<div class="empty-state small"><p>Niciun obiectiv activ</p></div>';
    }
    
    const completedList = $('completedGoalsList');
    if (completedList) {
        completedList.innerHTML = completed.length ? completed.map(g => goalFullHTML(g, true)).join('') : 
            '<div class="empty-state small"><p>Niciun obiectiv completat</p></div>';
    }
}

function goalFullHTML(g, completed = false) {
    const percent = Math.min((g.saved / g.target) * 100, 100);
    return `
        <div class="goal-item ${completed ? 'completed' : ''}" data-id="${g.id}">
            <div class="goal-header">
                <div class="goal-icon">${g.icon || '🎯'}</div>
                <div class="goal-info">
                    <div class="goal-name">${esc(g.name)}</div>
                    ${g.deadline ? `<div class="goal-deadline">Termen: ${formatDate(g.deadline)}</div>` : ''}
                </div>
            </div>
            <div class="goal-amounts">
                <span class="goal-saved">${fmt(g.saved)}</span>
                <span class="goal-target">/ ${fmt(g.target)}</span>
            </div>
            <div class="goal-progress">
                <div class="goal-bar"><div class="goal-fill" style="width:${percent}%"></div></div>
                <div class="goal-percent">${percent.toFixed(0)}%</div>
            </div>
            <div class="goal-actions">
                ${!completed ? `<button class="goal-action primary" onclick="addToGoal('${g.id}')">+ Adaugă</button>` : ''}
                <button class="goal-action" onclick="editGoal('${g.id}')">✏️ Editează</button>
                <button class="goal-action" onclick="deleteGoal('${g.id}')">🗑️</button>
            </div>
        </div>
    `;
}

// Add to goal
async function addToGoal(id) {
    const amount = prompt('Suma de adăugat:');
    if (!amount || isNaN(amount)) return;
    
    const g = state.goals.find(goal => goal.id === id);
    if (!g) return;
    
    const newSaved = g.saved + parseFloat(amount);
    
    try {
        await db.collection('users').doc(state.user.uid).collection('goals').doc(id).update({ saved: newSaved });
        g.saved = newSaved;
        toast('Sumă adăugată!', 'success');
        checkAchievements();
        renderGoalsPreview();
        renderGoals();
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// Edit goal
function editGoal(id) {
    const g = state.goals.find(goal => goal.id === id);
    if (!g) return;
    
    state.editingId = id;
    if ($('goalId')) $('goalId').value = id;
    if ($('goalModalTitle')) $('goalModalTitle').textContent = 'Editează obiectiv';
    if ($('goalName')) $('goalName').value = g.name;
    if ($('goalTarget')) $('goalTarget').value = g.target;
    if ($('goalSaved')) $('goalSaved').value = g.saved;
    if ($('goalDeadline')) $('goalDeadline').value = g.deadline || '';
    if ($('goalIcon')) $('goalIcon').value = g.icon || '🎯';
    $$('.icon-btn').forEach(b => b.classList.toggle('active', b.dataset.icon === (g.icon || '🎯')));
    
    openModal('goalModal');
}

// Delete goal
async function deleteGoal(id) {
    if (!confirm('Ștergi acest obiectiv?')) return;
    
    try {
        await db.collection('users').doc(state.user.uid).collection('goals').doc(id).delete();
        state.goals = state.goals.filter(g => g.id !== id);
        toast('Obiectiv șters!', 'success');
        renderGoalsPreview();
        renderGoals();
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// Handle debt submit
async function handleDebtSubmit(e) {
    e.preventDefault();
    
    const data = {
        type: $('debtType').value,
        person: $('debtPerson').value,
        amount: parseFloat($('debtAmount').value),
        reason: $('debtReason')?.value || '',
        deadline: $('debtDeadline')?.value || null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('debts');
        
        if (state.editingId) {
            await ref.doc(state.editingId).update(data);
            const idx = state.debts.findIndex(d => d.id === state.editingId);
            if (idx >= 0) state.debts[idx] = { ...state.debts[idx], ...data };
            toast('Datorie actualizată!', 'success');
        } else {
            const doc = await ref.add(data);
            state.debts.push({ id: doc.id, ...data });
            toast('Datorie adăugată!', 'success');
        }
        
        closeModal('debtModal');
        checkAchievements();
        renderDebtsPreview();
        renderDebts();
        updateNetWorth();
    } catch (err) {
        toast('Eroare la salvare', 'error');
    }
}

// Render debts
function renderDebts() {
    const owe = state.debts.filter(d => d.type === 'owe');
    const owed = state.debts.filter(d => d.type === 'owed');
    
    const totalOwe = owe.reduce((a, d) => a + d.amount, 0);
    const totalOwed = owed.reduce((a, d) => a + d.amount, 0);
    
    if ($('totalToPayDebts')) $('totalToPayDebts').textContent = fmt(totalOwe);
    if ($('totalToReceiveDebts')) $('totalToReceiveDebts').textContent = fmt(totalOwed);
    
    const oweList = $('debtsOweList');
    if (oweList) {
        oweList.innerHTML = owe.length ? owe.map(d => debtHTML(d)).join('') : 
            '<div class="empty-state small"><p>Nicio datorie de plătit</p></div>';
    }
    
    const owedList = $('debtsOwedList');
    if (owedList) {
        owedList.innerHTML = owed.length ? owed.map(d => debtHTML(d)).join('') : 
            '<div class="empty-state small"><p>Nimeni nu-ți datorează</p></div>';
    }
}

function debtHTML(d) {
    const initial = d.person.charAt(0).toUpperCase();
    return `
        <div class="debt-item ${d.type}" data-id="${d.id}">
            <div class="debt-avatar">${initial}</div>
            <div class="debt-info">
                <div class="debt-person">${esc(d.person)}</div>
                ${d.reason ? `<div class="debt-reason">${esc(d.reason)}</div>` : ''}
                ${d.deadline ? `<div class="debt-deadline-text">Termen: ${formatDate(d.deadline)}</div>` : ''}
            </div>
            <div class="debt-right">
                <div class="debt-item-amount">${fmt(d.amount)}</div>
                <div class="debt-item-actions">
                    <button class="debt-action primary" onclick="markDebtPaid('${d.id}')">✓ Achitat</button>
                    <button class="debt-action" onclick="editDebt('${d.id}')">✏️</button>
                    <button class="debt-action danger" onclick="deleteDebt('${d.id}')">🗑️</button>
                </div>
            </div>
        </div>
    `;
}

// Mark debt as paid
async function markDebtPaid(id) {
    if (!confirm('Marchezi ca achitat?')) return;
    
    try {
        await db.collection('users').doc(state.user.uid).collection('debts').doc(id).delete();
        state.debts = state.debts.filter(d => d.id !== id);
        toast('Datorie achitată!', 'success');
        checkAchievements();
        renderDebtsPreview();
        renderDebts();
        updateNetWorth();
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// Edit debt
function editDebt(id) {
    const d = state.debts.find(debt => debt.id === id);
    if (!d) return;
    
    state.editingId = id;
    if ($('debtId')) $('debtId').value = id;
    if ($('debtModalTitle')) $('debtModalTitle').textContent = 'Editează datorie';
    
    $$('.debt-tab').forEach(t => t.classList.toggle('active', t.dataset.type === d.type));
    if ($('debtType')) $('debtType').value = d.type;
    if ($('personLabel')) $('personLabel').textContent = d.type === 'owe' ? 'Cui datorezi?' : 'Cine îți datorează?';
    if ($('debtPerson')) $('debtPerson').value = d.person;
    if ($('debtAmount')) $('debtAmount').value = d.amount;
    if ($('debtReason')) $('debtReason').value = d.reason || '';
    if ($('debtDeadline')) $('debtDeadline').value = d.deadline || '';
    
    openModal('debtModal');
}

// Delete debt
async function deleteDebt(id) {
    if (!confirm('Ștergi această datorie?')) return;
    
    try {
        await db.collection('users').doc(state.user.uid).collection('debts').doc(id).delete();
        state.debts = state.debts.filter(d => d.id !== id);
        toast('Datorie ștearsă!', 'success');
        renderDebtsPreview();
        renderDebts();
        updateNetWorth();
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// Handle reminder submit
async function handleReminderSubmit(e) {
    e.preventDefault();
    
    const data = {
        title: $('reminderTitle').value,
        amount: parseFloat($('reminderAmount')?.value) || null,
        date: $('reminderDate').value,
        repeat: $('reminderRepeat')?.value || 'once',
        category: $('reminderCategory')?.value || null,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('reminders');
        
        if (state.editingId) {
            await ref.doc(state.editingId).update(data);
            const idx = state.reminders.findIndex(r => r.id === state.editingId);
            if (idx >= 0) state.reminders[idx] = { ...state.reminders[idx], ...data };
            toast('Reminder actualizat!', 'success');
        } else {
            const doc = await ref.add(data);
            state.reminders.push({ id: doc.id, ...data });
            toast('Reminder adăugat!', 'success');
        }
        
        closeModal('reminderModal');
        renderRemindersPreview();
        renderReminders();
        checkReminders();
    } catch (err) {
        toast('Eroare la salvare', 'error');
    }
}

// Render reminders
function renderReminders() {
    const today = new Date();
    const upcoming = state.reminders
        .filter(r => new Date(r.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    
    const upcomingList = $('upcomingReminders');
    if (upcomingList) {
        upcomingList.innerHTML = upcoming.length ? upcoming.map(r => reminderHTML(r)).join('') : 
            '<div class="empty-state small"><p>Niciun reminder viitor</p></div>';
    }
    
    const allList = $('allReminders');
    if (allList) {
        allList.innerHTML = state.reminders.length ? state.reminders.map(r => reminderHTML(r)).join('') : 
            '<div class="empty-state small"><p>Niciun reminder</p></div>';
    }
}

// Edit reminder
function editReminder(id) {
    const r = state.reminders.find(rem => rem.id === id);
    if (!r) return;
    
    state.editingId = id;
    if ($('reminderId')) $('reminderId').value = id;
    if ($('reminderModalTitle')) $('reminderModalTitle').textContent = 'Editează reminder';
    if ($('reminderTitle')) $('reminderTitle').value = r.title;
    if ($('reminderAmount')) $('reminderAmount').value = r.amount || '';
    if ($('reminderDate')) $('reminderDate').value = r.date;
    if ($('reminderRepeat')) $('reminderRepeat').value = r.repeat;
    if ($('reminderCategory')) $('reminderCategory').value = r.category || '';
    
    openModal('reminderModal');
}

// Delete reminder
async function deleteReminder(id) {
    if (!confirm('Ștergi acest reminder?')) return;
    
    try {
        await db.collection('users').doc(state.user.uid).collection('reminders').doc(id).delete();
        state.reminders = state.reminders.filter(r => r.id !== id);
        toast('Reminder șters!', 'success');
        renderRemindersPreview();
        renderReminders();
        checkReminders();
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// Check reminders
function checkReminders() {
    const today = new Date().toISOString().split('T')[0];
    const due = state.reminders.filter(r => r.date <= today);
    
    const badge = document.querySelector('.notif-badge');
    if (badge) {
        if (due.length > 0) {
            badge.textContent = due.length;
            badge.classList.remove('hidden');
        } else {
            badge.classList.add('hidden');
        }
    }
}

// Handle account submit
async function handleAccountSubmit(e) {
    e.preventDefault();
    
    const data = {
        name: $('accountName').value,
        type: $('accountType')?.value || 'checking',
        balance: parseFloat($('accountBalance')?.value) || 0,
        icon: $('accountIcon')?.value || '💳',
        color: $('accountColor')?.value || '#8b5cf6',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('accounts');
        
        if (state.editingId) {
            await ref.doc(state.editingId).update(data);
            const idx = state.accounts.findIndex(a => a.id === state.editingId);
            if (idx >= 0) state.accounts[idx] = { ...state.accounts[idx], ...data };
            toast('Cont actualizat!', 'success');
        } else {
            const doc = await ref.add(data);
            state.accounts.push({ id: doc.id, ...data });
            toast('Cont adăugat!', 'success');
        }
        
        closeModal('accountModal');
        renderAccountsPreview();
        renderAccounts();
        updateNetWorth();
    } catch (err) {
        toast('Eroare la salvare', 'error');
    }
}

// Render accounts
function renderAccounts() {
    const container = $('accountsList');
    if (!container) return;
    
    if (state.accounts.length === 0) {
        container.innerHTML = `<div class="empty-state"><span class="empty-icon">💳</span><p>Niciun cont adăugat</p></div>`;
        return;
    }
    
    container.innerHTML = state.accounts.map(acc => `
        <div class="account-card-full" style="border-left: 4px solid ${acc.color || '#8b5cf6'}">
            <div class="account-icon-big">${acc.icon || '💳'}</div>
            <div class="account-info-full">
                <div class="account-name-full">${esc(acc.name)}</div>
                <div class="account-type-full">${getAccountTypeName(acc.type)}</div>
            </div>
            <div class="account-balance-full">${fmt(acc.balance || 0)}</div>
            <div class="account-actions">
                <button class="acc-action" onclick="editAccount('${acc.id}')">✏️</button>
                <button class="acc-action" onclick="deleteAccount('${acc.id}')">🗑️</button>
            </div>
        </div>
    `).join('');
}

function getAccountTypeName(type) {
    const types = {
        checking: 'Cont curent',
        savings: 'Cont economii',
        cash: 'Numerar',
        credit: 'Card credit',
        investment: 'Investiții'
    };
    return types[type] || type;
}

// Edit account
function editAccount(id) {
    const acc = state.accounts.find(a => a.id === id);
    if (!acc) return;
    
    state.editingId = id;
    if ($('accountId')) $('accountId').value = id;
    if ($('accountModalTitle')) $('accountModalTitle').textContent = 'Editează cont';
    if ($('accountName')) $('accountName').value = acc.name;
    if ($('accountType')) $('accountType').value = acc.type || 'checking';
    if ($('accountBalance')) $('accountBalance').value = acc.balance || 0;
    if ($('accountIcon')) $('accountIcon').value = acc.icon || '💳';
    if ($('accountColor')) $('accountColor').value = acc.color || '#8b5cf6';
    
    openModal('accountModal');
}

// Delete account
async function deleteAccount(id) {
    if (!confirm('Ștergi acest cont?')) return;
    
    try {
        await db.collection('users').doc(state.user.uid).collection('accounts').doc(id).delete();
        state.accounts = state.accounts.filter(a => a.id !== id);
        toast('Cont șters!', 'success');
        renderAccountsPreview();
        renderAccounts();
        updateNetWorth();
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// Handle budget submit
async function handleBudgetSubmit(e) {
    e.preventDefault();
    
    const data = {
        category: $('budgetCategory').value,
        limit: parseFloat($('budgetLimit').value),
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('budgets');
        
        // Check if budget for this category exists
        const existing = state.budgets.find(b => b.category === data.category);
        if (existing && !state.editingId) {
            toast('Există deja un buget pentru această categorie!', 'warning');
            return;
        }
        
        if (state.editingId) {
            await ref.doc(state.editingId).update(data);
            const idx = state.budgets.findIndex(b => b.id === state.editingId);
            if (idx >= 0) state.budgets[idx] = { ...state.budgets[idx], ...data };
            toast('Buget actualizat!', 'success');
        } else {
            const doc = await ref.add(data);
            state.budgets.push({ id: doc.id, ...data });
            toast('Buget setat!', 'success');
        }
        
        closeModal('budgetModal');
        renderBudgetsPreview();
    } catch (err) {
        toast('Eroare la salvare', 'error');
    }
}

// Analytics
function updateAnalytics() {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - state.period);
    
    const trans = state.transactions.filter(t => {
        const d = new Date(t.date);
        return d >= startDate && d <= endDate;
    });
    
    let income = 0, expense = 0;
    const byCategory = {};
    const byDate = {};
    
    trans.forEach(t => {
        if (t.type === 'income') income += t.amount;
        else if (t.type === 'expense') {
            expense += t.amount;
            const cat = findCategory('expense', t.category);
            const name = cat ? cat.name : t.category;
            byCategory[name] = (byCategory[name] || 0) + t.amount;
        }
        
        // By date for chart
        const dateKey = t.date;
        if (!byDate[dateKey]) byDate[dateKey] = { income: 0, expense: 0 };
        if (t.type === 'income') byDate[dateKey].income += t.amount;
        else if (t.type === 'expense') byDate[dateKey].expense += t.amount;
    });
    
    if ($('analyticsIncome')) $('analyticsIncome').textContent = fmt(income);
    if ($('analyticsExpense')) $('analyticsExpense').textContent = fmt(expense);
    if ($('analyticsSavings')) $('analyticsSavings').textContent = fmt(income - expense);
    
    // Trend chart
    updateTrendChart(byDate);
    
    // Patterns
    detectPatterns(trans);
    
    // Anomalies
    detectAnomalies(trans);
    
    // Category breakdown
    renderCategoryBreakdown(byCategory, expense);
}

function updateTrendChart(byDate) {
    const canvas = $('trendChart');
    if (!canvas) return;
    
    const dates = Object.keys(byDate).sort();
    const incomeData = dates.map(d => byDate[d].income);
    const expenseData = dates.map(d => byDate[d].expense);
    
    const ctx = canvas.getContext('2d');
    
    if (state.trendChart) state.trendChart.destroy();
    
    state.trendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates.map(d => formatDate(d)),
            datasets: [
                {
                    label: 'Venituri',
                    data: incomeData,
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Cheltuieli',
                    data: expenseData,
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: { color: '#a0a0a0' }
                }
            },
            scales: {
                x: {
                    ticks: { color: '#666' },
                    grid: { color: '#222' }
                },
                y: {
                    ticks: { color: '#666' },
                    grid: { color: '#222' }
                }
            }
        }
    });
}

function detectPatterns(trans) {
    const container = $('patterns');
    if (!container) return;
    
    const patterns = [];
    
    if (trans.length < 5) {
        container.innerHTML = '<div class="empty-state small"><p>Adaugă mai multe tranzacții pentru detectarea pattern-urilor</p></div>';
        return;
    }
    
    // Weekend spending
    const weekendTrans = trans.filter(t => {
        const d = new Date(t.date);
        return (d.getDay() === 0 || d.getDay() === 6) && t.type === 'expense';
    });
    const weekendTotal = weekendTrans.reduce((a, t) => a + t.amount, 0);
    const totalExpense = trans.filter(t => t.type === 'expense').reduce((a, t) => a + t.amount, 0);
    const weekendPercent = totalExpense > 0 ? (weekendTotal / totalExpense * 100) : 0;
    
    if (weekendPercent > 40) {
        patterns.push({ icon: '📅', text: `${weekendPercent.toFixed(0)}% din cheltuieli sunt în weekend.` });
    }
    
    // Top category
    const byCategory = {};
    trans.filter(t => t.type === 'expense').forEach(t => {
        const cat = findCategory('expense', t.category);
        const name = cat ? cat.name : t.category;
        byCategory[name] = (byCategory[name] || 0) + t.amount;
    });
    
    const sorted = Object.entries(byCategory).sort((a, b) => b[1] - a[1]);
    if (sorted.length > 0) {
        const [topCat, topAmount] = sorted[0];
        const percent = (topAmount / totalExpense * 100).toFixed(0);
        patterns.push({ icon: '📊', text: `"${topCat}" este categoria principală (${percent}%)` });
    }
    
    container.innerHTML = patterns.length ? patterns.map(p => `
        <div class="pattern-item">
            <span class="pattern-icon">${p.icon}</span>
            <span class="pattern-text">${p.text}</span>
        </div>
    `).join('') : '<div class="empty-state small"><p>Niciun pattern detectat</p></div>';
}

function detectAnomalies(trans) {
    const container = $('anomalies');
    if (!container) return;
    
    const anomalies = [];
    
    const expenses = trans.filter(t => t.type === 'expense');
    if (expenses.length < 5) {
        container.innerHTML = '<div class="empty-state small"><p>Nicio abatere detectată</p></div>';
        return;
    }
    
    const amounts = expenses.map(t => t.amount);
    const avg = amounts.reduce((a, b) => a + b, 0) / amounts.length;
    const threshold = avg * 3;
    
    expenses.forEach(t => {
        if (t.amount > threshold) {
            const cat = findCategory('expense', t.category);
            const name = cat ? cat.name : t.category;
            anomalies.push({ 
                icon: '⚠️', 
                text: `Cheltuială mare: ${name} - ${fmt(t.amount)} (${formatDate(t.date)})` 
            });
        }
    });
    
    container.innerHTML = anomalies.length ? anomalies.map(a => `
        <div class="anomaly-item">
            <span class="anomaly-icon">${a.icon}</span>
            <span class="anomaly-text">${a.text}</span>
        </div>
    `).join('') : '<div class="empty-state small"><p>Nicio abatere detectată - bravo!</p></div>';
}

function renderCategoryBreakdown(byCategory, total) {
    const container = $('categoryBreakdown');
    if (!container) return;
    
    const sorted = Object.entries(byCategory).sort((a, b) => b[1] - a[1]);
    
    if (sorted.length === 0) {
        container.innerHTML = '<div class="empty-state small"><p>Nicio categorie de afișat</p></div>';
        return;
    }
    
    container.innerHTML = sorted.map(([name, amount]) => {
        const percent = total > 0 ? (amount / total * 100) : 0;
        const cat = categories.expense.find(c => c.name === name);
        const icon = cat ? cat.icon : '📦';
        const color = cat ? cat.color : '#8b5cf6';
        
        return `
            <div class="cat-item">
                <div class="cat-header">
                    <span class="cat-name">${icon} ${name}</span>
                    <span class="cat-amount">${fmt(amount)}</span>
                </div>
                <div class="cat-bar"><div class="cat-fill" style="width:${percent}%;background:${color}"></div></div>
                <div class="cat-percent">${percent.toFixed(1)}%</div>
            </div>
        `;
    }).join('');
}

// AI Functions
async function sendAiMessage() {
    const input = $('aiInput');
    if (!input) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    input.value = '';
    addAiMessage(message, 'user');
    addAiTyping();
    
    state.aiUsed = true;
    checkAchievements();
    
    console.log('🤖 Sending AI message:', message);
    console.log('📊 Current state - Transactions:', state.transactions.length, 'Goals:', state.goals.length, 'Debts:', state.debts.length);
    
    try {
        const response = await callGeminiAPI(message);
        removeAiTyping();
        addAiMessage(response, 'assistant');
    } catch (err) {
        console.error('❌ AI Error:', err);
        removeAiTyping();
        
        let errorMsg = 'Scuze, am întâmpinat o eroare. ';
        if (err.message.includes('API key')) {
            errorMsg += 'Problema cu cheia API. Verifică configurarea.';
        } else if (err.message.includes('quota')) {
            errorMsg += 'Limita API depășită. Încearcă mai târziu.';
        } else if (err.message.includes('network') || err.message.includes('fetch')) {
            errorMsg += 'Problemă de conexiune. Verifică internetul.';
        } else {
            errorMsg += 'Încearcă din nou sau verifică consola (F12) pentru detalii.';
        }
        
        addAiMessage(errorMsg, 'assistant');
    }
}

function askAI(question) {
    if ($('aiInput')) $('aiInput').value = question;
    sendAiMessage();
}

function addAiMessage(text, role) {
    const container = $('aiMessages');
    if (!container) return;
    
    const div = document.createElement('div');
    div.className = `ai-message ${role}`;
    div.innerHTML = `
        <div class="ai-avatar">${role === 'user' ? '👤' : '🤖'}</div>
        <div class="ai-bubble"><p>${text}</p></div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function addAiTyping() {
    const container = $('aiMessages');
    if (!container) return;
    
    const div = document.createElement('div');
    div.className = 'ai-message assistant';
    div.id = 'aiTyping';
    div.innerHTML = `
        <div class="ai-avatar">🤖</div>
        <div class="ai-bubble"><div class="ai-typing"><span></span><span></span><span></span></div></div>
    `;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
}

function removeAiTyping() {
    const typing = $('aiTyping');
    if (typing) typing.remove();
}

// Call Gemini API - tries Vercel first, falls back to direct
async function callGeminiAPI(message) {
    const context = buildFinancialContext();
    const userName = state.user?.displayName || 'prietene';
    const firstName = userName.split(' ')[0];
    
    console.log('📊 Financial context built for:', userName);
    
    const prompt = `Ești un consultant financiar personal de elită, prietenos și empatic. Te numești "Fin" și ești asistentul financiar AI al lui ${userName}.

PERSONALITATEA TA:
- Ești cald, prietenos și înțelegător
- Folosești numele "${firstName}" când te adresezi utilizatorului
- Dai sfaturi concrete, practice și personalizate
- Folosești emoji-uri moderat pentru a face conversația plăcută
- Ești direct și clar, nu vorbești în general
- Când observi probleme, le menționezi cu tact dar ferm
- Celebrezi succesele și încurajezi în momentele dificile
- Răspunzi ÎNTOTDEAUNA în limba română

REGULI STRICTE:
1. NICIODATĂ nu spune că "nu ai date" sau "nu pot accesa" - ai TOATE datele mai jos
2. Folosește cifrele EXACTE din context, nu aproximări
3. Personalizează FIECARE răspuns cu situația specifică a lui ${firstName}
4. Dacă ${firstName} întreabă ceva specific, răspunde CONCRET cu date reale
5. Fii PROACTIV - oferă insight-uri pe care ${firstName} nu le-a cerut dar sunt utile
6. Compară cu luna anterioară când e relevant
7. Oferă ACȚIUNI concrete, nu sfaturi vagi

CONTEXT FINANCIAR COMPLET AL LUI ${userName.toUpperCase()}:
${context}

ÎNTREBAREA LUI ${firstName.toUpperCase()}: ${message}

INSTRUCȚIUNI PENTRU RĂSPUNS:
- Răspunde direct la întrebare folosind datele de mai sus
- Fii specific și folosește cifrele exacte
- Dacă e relevant, menționează pattern-uri sau tendințe
- Oferă 1-2 sfaturi acționabile la final
- Păstrează răspunsul concis dar complet (max 300 cuvinte)
- Formatează frumos cu paragrafe scurte`;

    let vercelError = null;

    // Try Vercel API first (secure, key hidden on server)
    try {
        const apiUrl = `${API_BASE}/api/gemini`;
        console.log('🔐 Trying Vercel API at:', apiUrl);
        
        const vercelResponse = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt, maxTokens: 4000 })
        });
        
        const data = await vercelResponse.json();
        console.log('Vercel API response:', data);
        
        if (data.success && data.response) {
            console.log('✅ Vercel API success!');
            return data.response.replace(/\n/g, '<br>');
        } else if (data.error) {
            vercelError = data.error;
            console.log('⚠️ Vercel API error:', data.error);
        }
    } catch (e) {
        vercelError = e.message;
        console.log('⚠️ Vercel API not available:', e.message);
    }
    
    // If no fallback key, show helpful error
    if (!GEMINI_KEY) {
        const errorMsg = vercelError 
            ? `Eroare Vercel API: ${vercelError}` 
            : 'Vercel API nu este disponibil';
        throw new Error(`${errorMsg}. Verifică că ai setat GEMINI_API_KEY în Vercel Environment Variables și ai făcut Redeploy.`);
    }
    
    // Fallback to direct Gemini API (for GitHub Pages or if Vercel fails)
    console.log('🔄 Falling back to direct Gemini API with model gemini-2.5-flash...');
    
    // Official Gemini API endpoint according to docs
    const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_KEY}`;
    
    // Request body according to official Google AI documentation
    const requestBody = {
        contents: [{
            parts: [{ text: prompt }]
        }],
        generationConfig: {
            temperature: 0.8,
            maxOutputTokens: 4000,
            topP: 0.9,
            topK: 40
        }
    };
    
    try {
        console.log('📤 Sending request to Gemini...');
        const response = await fetch(GEMINI_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        console.log('📥 Gemini response status:', response.status);
        
        // Check for API errors
        if (data.error) {
            console.error('❌ Gemini API error:', data.error);
            throw new Error(data.error.message || 'Gemini API error');
        }
        
        // Extract text from response according to official schema
        if (data.candidates && 
            data.candidates[0] && 
            data.candidates[0].content && 
            data.candidates[0].content.parts && 
            data.candidates[0].content.parts[0] &&
            data.candidates[0].content.parts[0].text) {
            
            const text = data.candidates[0].content.parts[0].text;
            console.log('✅ Direct Gemini API success! Response length:', text.length);
            return text.replace(/\n/g, '<br>');
        }
        
        console.error('❌ Invalid response structure:', JSON.stringify(data).substring(0, 300));
        throw new Error('Invalid response from Gemini API');
        
    } catch (error) {
        console.error('❌ Direct API failed:', error);
        throw error;
    }
}

function buildFinancialContext() {
    // Numele utilizatorului
    const userName = state.user?.displayName || 'Utilizator';
    const userEmail = state.user?.email || '';
    
    // TOATE tranzacțiile
    const allTransactions = [...state.transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
    const totalTransCount = allTransactions.length;
    
    // Tranzacții luna curentă
    const monthTrans = getMonthTransactions();
    let income = 0, expense = 0;
    const byCategory = {};
    const byCategoryIncome = {};
    
    monthTrans.forEach(t => {
        if (t.type === 'income') {
            income += t.amount;
            const cat = findCategory('income', t.category);
            const name = cat ? cat.name : t.category;
            byCategoryIncome[name] = (byCategoryIncome[name] || 0) + t.amount;
        } else if (t.type === 'expense') {
            expense += t.amount;
            const cat = findCategory('expense', t.category);
            const name = cat ? cat.name : t.category;
            byCategory[name] = (byCategory[name] || 0) + t.amount;
        }
    });
    
    // Calculări avansate
    const sortedCats = Object.entries(byCategory).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const sortedIncome = Object.entries(byCategoryIncome).sort((a, b) => b[1] - a[1]);
    const today = new Date();
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const daysPassed = state.month === today.getMonth() && state.year === today.getFullYear() ? today.getDate() : daysInMonth;
    const daysLeft = daysInMonth - daysPassed;
    const dailyAvg = daysPassed > 0 ? expense / daysPassed : 0;
    const predictedTotal = dailyAvg * daysInMonth;
    const savingsRate = income > 0 ? ((income - expense) / income * 100) : 0;
    
    // ═══════════════════════════════════════
    // ISTORIC COMPLET - Ultimele 12 luni
    // ═══════════════════════════════════════
    const monthlyHistory = [];
    for (let i = 0; i < 12; i++) {
        const targetMonth = new Date(today.getFullYear(), today.getMonth() - i, 1);
        const m = targetMonth.getMonth();
        const y = targetMonth.getFullYear();
        
        const monthData = allTransactions.filter(t => {
            const d = new Date(t.date);
            return d.getMonth() === m && d.getFullYear() === y;
        });
        
        let mIncome = 0, mExpense = 0;
        monthData.forEach(t => {
            if (t.type === 'income') mIncome += t.amount;
            else if (t.type === 'expense') mExpense += t.amount;
        });
        
        if (mIncome > 0 || mExpense > 0 || monthData.length > 0) {
            monthlyHistory.push({
                month: months[m],
                year: y,
                income: mIncome,
                expense: mExpense,
                balance: mIncome - mExpense,
                transactions: monthData.length,
                savingsRate: mIncome > 0 ? ((mIncome - mExpense) / mIncome * 100) : 0
            });
        }
    }
    
    // Statistici pe tot istoricul
    let totalHistoryIncome = 0, totalHistoryExpense = 0;
    const allTimeByCategory = {};
    
    allTransactions.forEach(t => {
        if (t.type === 'income') totalHistoryIncome += t.amount;
        else if (t.type === 'expense') {
            totalHistoryExpense += t.amount;
            const cat = findCategory('expense', t.category);
            const name = cat ? cat.name : t.category;
            allTimeByCategory[name] = (allTimeByCategory[name] || 0) + t.amount;
        }
    });
    
    const avgMonthlyIncome = monthlyHistory.length > 0 
        ? monthlyHistory.reduce((s, m) => s + m.income, 0) / monthlyHistory.length 
        : 0;
    const avgMonthlyExpense = monthlyHistory.length > 0 
        ? monthlyHistory.reduce((s, m) => s + m.expense, 0) / monthlyHistory.length 
        : 0;
    
    // Tendințe - compară ultimele 3 luni cu 3 luni anterioare
    const last3Months = monthlyHistory.slice(0, 3);
    const prev3Months = monthlyHistory.slice(3, 6);
    
    let trendExpense = 'stabil';
    if (last3Months.length >= 2 && prev3Months.length >= 2) {
        const avgLast3 = last3Months.reduce((s, m) => s + m.expense, 0) / last3Months.length;
        const avgPrev3 = prev3Months.reduce((s, m) => s + m.expense, 0) / prev3Months.length;
        if (avgLast3 > avgPrev3 * 1.1) trendExpense = 'CRESCĂTOR ⬆️';
        else if (avgLast3 < avgPrev3 * 0.9) trendExpense = 'DESCRESCĂTOR ⬇️';
    }
    
    // Pattern-uri - cheltuieli în weekend vs săptămână
    let weekendExpense = 0, weekdayExpense = 0;
    monthTrans.forEach(t => {
        if (t.type === 'expense') {
            const day = new Date(t.date).getDay();
            if (day === 0 || day === 6) weekendExpense += t.amount;
            else weekdayExpense += t.amount;
        }
    });
    
    // Tranzacția cea mai mare din tot istoricul
    const biggestExpenseEver = allTransactions
        .filter(t => t.type === 'expense')
        .sort((a, b) => b.amount - a.amount)[0];
    
    // Tranzacția cea mai mare luna asta
    const biggestExpense = monthTrans
        .filter(t => t.type === 'expense')
        .sort((a, b) => b.amount - a.amount)[0];
    
    const biggestIncome = monthTrans
        .filter(t => t.type === 'income')
        .sort((a, b) => b.amount - a.amount)[0];
    
    // Conturi
    const totalAccounts = state.accounts.reduce((sum, a) => sum + (a.balance || 0), 0);
    
    // Prima și ultima tranzacție (cât timp folosește app-ul)
    const firstTransaction = allTransactions[allTransactions.length - 1];
    const daysSinceStart = firstTransaction 
        ? Math.floor((today - new Date(firstTransaction.date)) / (1000 * 60 * 60 * 24))
        : 0;
    
    // Top 5 categorii ALL TIME
    const topCategoriesAllTime = Object.entries(allTimeByCategory)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    // ═══════════════════════════════════════
    // CONSTRUIEȘTE CONTEXTUL
    // ═══════════════════════════════════════
    
    let context = `═══════════════════════════════════════
👤 PROFIL UTILIZATOR
═══════════════════════════════════════
Nume: ${userName}
Email: ${userEmail}
Monedă preferată: ${state.currency}
Streak curent: ${state.streak} zile consecutive
Folosește aplicația de: ${daysSinceStart} zile
Total tranzacții înregistrate: ${totalTransCount}
Patrimoniu net declarat: ${state.netWorth.toLocaleString()} ${state.currency}

═══════════════════════════════════════
📊 SUMAR LUNA CURENTĂ - ${months[state.month]} ${state.year}
═══════════════════════════════════════
💵 Venituri: ${income.toLocaleString()} ${state.currency}
💸 Cheltuieli: ${expense.toLocaleString()} ${state.currency}
📈 Balanță: ${(income - expense).toLocaleString()} ${state.currency}
💰 Rată economisire: ${savingsRate.toFixed(1)}%

📅 Zile trecute: ${daysPassed}/${daysInMonth} | Zile rămase: ${daysLeft}
📊 Media zilnică cheltuieli: ${dailyAvg.toFixed(0)} ${state.currency}
🔮 Predicție cheltuieli luna asta: ${predictedTotal.toFixed(0)} ${state.currency}

═══════════════════════════════════════
📈 STATISTICI ISTORICE (TOT TIMPUL)
═══════════════════════════════════════
💵 Total venituri all-time: ${totalHistoryIncome.toLocaleString()} ${state.currency}
💸 Total cheltuieli all-time: ${totalHistoryExpense.toLocaleString()} ${state.currency}
📊 Medie lunară venituri: ${avgMonthlyIncome.toFixed(0)} ${state.currency}
📊 Medie lunară cheltuieli: ${avgMonthlyExpense.toFixed(0)} ${state.currency}
📉 Trend cheltuieli: ${trendExpense}`;

    // Istoric lunar
    if (monthlyHistory.length > 1) {
        context += `

═══════════════════════════════════════
📅 ISTORIC LUNAR (ultimele ${monthlyHistory.length} luni)
═══════════════════════════════════════`;
        monthlyHistory.forEach(m => {
            const sign = m.balance >= 0 ? '+' : '';
            context += `\n${m.month} ${m.year}: Venit ${m.income.toLocaleString()} | Chelt. ${m.expense.toLocaleString()} | Balanță: ${sign}${m.balance.toLocaleString()} | Econ: ${m.savingsRate.toFixed(0)}%`;
        });
    }

    // Categorii cheltuieli luna asta
    if (sortedCats.length > 0) {
        context += `

═══════════════════════════════════════
🏷️ TOP CATEGORII LUNA ASTA
═══════════════════════════════════════`;
        sortedCats.forEach(([name, amount], i) => {
            const percent = expense > 0 ? (amount / expense * 100).toFixed(1) : 0;
            context += `\n${i + 1}. ${name}: ${amount.toLocaleString()} ${state.currency} (${percent}%)`;
        });
    }
    
    // Top categorii ALL TIME
    if (topCategoriesAllTime.length > 0) {
        context += `

═══════════════════════════════════════
🏷️ TOP CATEGORII ALL-TIME
═══════════════════════════════════════`;
        topCategoriesAllTime.forEach(([name, amount], i) => {
            const percent = totalHistoryExpense > 0 ? (amount / totalHistoryExpense * 100).toFixed(1) : 0;
            context += `\n${i + 1}. ${name}: ${amount.toLocaleString()} ${state.currency} (${percent}% din total)`;
        });
    }
    
    // Surse venituri
    if (sortedIncome.length > 0) {
        context += `

═══════════════════════════════════════
💵 SURSE DE VENIT LUNA ASTA
═══════════════════════════════════════`;
        sortedIncome.forEach(([name, amount]) => {
            context += `\n- ${name}: ${amount.toLocaleString()} ${state.currency}`;
        });
    }
    
    // Pattern-uri
    context += `

═══════════════════════════════════════
📊 PATTERN-URI COMPORTAMENT
═══════════════════════════════════════
Cheltuieli în weekend: ${weekendExpense.toLocaleString()} ${state.currency}
Cheltuieli în timpul săptămânii: ${weekdayExpense.toLocaleString()} ${state.currency}
Tranzacții luna aceasta: ${monthTrans.length}`;

    if (biggestExpense) {
        const cat = findCategory('expense', biggestExpense.category);
        context += `\n\n💥 Cea mai mare cheltuială LUNA ASTA: ${biggestExpense.amount.toLocaleString()} ${state.currency} - ${cat?.name || biggestExpense.category}${biggestExpense.note ? ` (${biggestExpense.note})` : ''} - ${biggestExpense.date}`;
    }
    
    if (biggestExpenseEver && biggestExpenseEver !== biggestExpense) {
        const cat = findCategory('expense', biggestExpenseEver.category);
        context += `\n💥 Cea mai mare cheltuială VREODATĂ: ${biggestExpenseEver.amount.toLocaleString()} ${state.currency} - ${cat?.name || biggestExpenseEver.category}${biggestExpenseEver.note ? ` (${biggestExpenseEver.note})` : ''} - ${biggestExpenseEver.date}`;
    }
    
    if (biggestIncome) {
        const cat = findCategory('income', biggestIncome.category);
        context += `\n💎 Cel mai mare venit luna asta: ${biggestIncome.amount.toLocaleString()} ${state.currency} - ${cat?.name || biggestIncome.category}`;
    }

    // Ultimele 15 tranzacții pentru context detaliat
    if (allTransactions.length > 0) {
        context += `

═══════════════════════════════════════
🕐 ULTIMELE 15 TRANZACȚII
═══════════════════════════════════════`;
        allTransactions.slice(0, 15).forEach(t => {
            const cat = findCategory(t.type, t.category);
            const icon = t.type === 'income' ? '💵' : '💸';
            context += `\n${icon} ${t.date}: ${t.amount.toLocaleString()} ${state.currency} - ${cat?.name || t.category}${t.note ? ` (${t.note})` : ''}`;
        });
    }

    // Conturi
    if (state.accounts.length > 0) {
        context += `

═══════════════════════════════════════
🏦 CONTURI BANCARE
═══════════════════════════════════════`;
        state.accounts.forEach(a => {
            context += `\n- ${a.name} (${a.type || 'cont'}): ${(a.balance || 0).toLocaleString()} ${state.currency}`;
        });
        context += `\n💰 TOTAL ÎN CONTURI: ${totalAccounts.toLocaleString()} ${state.currency}`;
    }

    // Obiective
    if (state.goals.length > 0) {
        context += `

═══════════════════════════════════════
🎯 OBIECTIVE FINANCIARE
═══════════════════════════════════════`;
        state.goals.forEach(g => {
            const percent = (g.saved / g.target * 100).toFixed(0);
            const remaining = g.target - g.saved;
            const status = percent >= 100 ? '✅ COMPLET' : percent >= 75 ? '🟢 Aproape' : percent >= 50 ? '🟡 La jumătate' : '🔴 La început';
            context += `\n${status} ${g.name}: ${g.saved.toLocaleString()}/${g.target.toLocaleString()} ${state.currency} (${percent}%)`;
            if (remaining > 0) context += ` - Mai ai nevoie: ${remaining.toLocaleString()} ${state.currency}`;
            if (g.deadline) context += ` | Deadline: ${g.deadline}`;
        });
    }
    
    // Datorii
    if (state.debts.length > 0) {
        const oweDebts = state.debts.filter(d => d.type === 'owe');
        const owedDebts = state.debts.filter(d => d.type === 'owed');
        const totalOwe = oweDebts.reduce((a, d) => a + d.amount, 0);
        const totalOwed = owedDebts.reduce((a, d) => a + d.amount, 0);
        
        context += `

═══════════════════════════════════════
💳 DATORII
═══════════════════════════════════════
🔴 Total DE PLĂTIT: ${totalOwe.toLocaleString()} ${state.currency}
🟢 Total DE RECUPERAT: ${totalOwed.toLocaleString()} ${state.currency}
📊 Balanță datorii: ${(totalOwed - totalOwe).toLocaleString()} ${state.currency}`;
        
        if (oweDebts.length > 0) {
            context += `\n\nDatorii de plătit:`;
            oweDebts.forEach(d => {
                context += `\n  🔴 ${d.person}: ${d.amount.toLocaleString()} ${state.currency}${d.note ? ` - ${d.note}` : ''}${d.dueDate ? ` (scadent: ${d.dueDate})` : ''}`;
            });
        }
        if (owedDebts.length > 0) {
            context += `\n\nBani de recuperat:`;
            owedDebts.forEach(d => {
                context += `\n  🟢 ${d.person}: ${d.amount.toLocaleString()} ${state.currency}${d.note ? ` - ${d.note}` : ''}`;
            });
        }
    }

    // Bugete
    if (state.budgets.length > 0) {
        context += `

═══════════════════════════════════════
📋 BUGETE SETATE
═══════════════════════════════════════`;
        state.budgets.forEach(b => {
            const cat = findCategory('expense', b.category);
            const spent = monthTrans.filter(t => t.type === 'expense' && t.category === b.category).reduce((s, t) => s + t.amount, 0);
            const percent = (spent / b.limit * 100).toFixed(0);
            const remaining = b.limit - spent;
            const status = spent > b.limit ? '🔴 DEPĂȘIT' : spent > b.limit * 0.8 ? '🟡 Atenție' : '🟢 OK';
            context += `\n${status} ${cat?.name || b.category}: ${spent.toLocaleString()}/${b.limit.toLocaleString()} ${state.currency} (${percent}%)`;
            if (remaining > 0) context += ` | Mai poți cheltui: ${remaining.toLocaleString()} ${state.currency}`;
            else context += ` | Depășit cu: ${Math.abs(remaining).toLocaleString()} ${state.currency}`;
        });
    }

    // Remindere active
    const activeReminders = state.reminders.filter(r => r.active);
    if (activeReminders.length > 0) {
        context += `

═══════════════════════════════════════
⏰ PLĂȚI RECURENTE / REMINDERE
═══════════════════════════════════════`;
        activeReminders.forEach(r => {
            context += `\n- ${r.name}: ${r.amount.toLocaleString()} ${state.currency} (${r.frequency})`;
        });
        const monthlyRecurring = activeReminders
            .filter(r => r.frequency === 'monthly')
            .reduce((s, r) => s + r.amount, 0);
        if (monthlyRecurring > 0) {
            context += `\n💳 Total plăți recurente lunare: ${monthlyRecurring.toLocaleString()} ${state.currency}`;
        }
    }

    // Utilities
    if (state.utilities && state.utilities.length > 0) {
        const currentUtilMonth = `${state.year}-${String(state.month + 1).padStart(2, '0')}`;
        const monthUtils = state.utilities.filter(u => u.month === currentUtilMonth);
        const totalUtils = monthUtils.reduce((sum, u) => sum + u.amount, 0);
        
        context += `

═══════════════════════════════════════
🏠 UTILITĂȚI CASĂ
═══════════════════════════════════════
Total utilități luna asta: ${totalUtils.toLocaleString()} ${state.currency}`;
        
        const byType = {};
        monthUtils.forEach(u => {
            const ut = utilityTypes.find(t => t.id === u.type);
            const name = ut ? ut.name : u.type;
            byType[name] = (byType[name] || 0) + u.amount;
        });
        
        Object.entries(byType).forEach(([name, amount]) => {
            context += `\n- ${name}: ${amount.toLocaleString()} ${state.currency}`;
        });
    }

    // Achievements
    const unlockedAchievements = achievementsDef.filter(a => a.condition(state));
    if (unlockedAchievements.length > 0) {
        context += `

═══════════════════════════════════════
🏆 ACHIEVEMENTS DEBLOCATE
═══════════════════════════════════════`;
        unlockedAchievements.forEach(a => {
            context += `\n${a.icon} ${a.name}: ${a.desc}`;
        });
    }

    context += `

═══════════════════════════════════════
📅 DATA CURENTĂ: ${today.toLocaleDateString('ro-RO', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
═══════════════════════════════════════`;
    
    return context;
}

async function runFullAiAnalysis() {
    const container = $('aiAnalysis');
    if (!container) return;
    
    const userName = state.user?.displayName || 'Utilizator';
    const firstName = userName.split(' ')[0];
    
    container.innerHTML = '<p class="ai-placeholder">🔍 Analizez datele tale financiare, ${firstName}...</p>';
    
    try {
        const context = buildFinancialContext();
        const analysisPrompt = `Realizează o ANALIZĂ FINANCIARĂ COMPLETĂ pentru ${userName}.

Structurează răspunsul EXACT așa:

📊 SCOR SĂNĂTATE FINANCIARĂ: [X/10]
[Explică pe scurt de ce acest scor]

💪 PUNCTE FORTE:
1. [Punct concret cu cifre]
2. [Punct concret cu cifre]
3. [Punct concret cu cifre]

⚠️ ARII DE ÎMBUNĂTĂȚIT:
1. [Problemă specifică cu cifre și soluție]
2. [Problemă specifică cu cifre și soluție]
3. [Problemă specifică cu cifre și soluție]

🎯 PLAN DE ACȚIUNE PENTRU LUNA VIITOARE:
1. [Acțiune concretă cu target numeric]
2. [Acțiune concretă cu target numeric]
3. [Acțiune concretă cu target numeric]

🔮 PREDICȚIE:
[Predicție bazată pe pattern-urile observate]

CONTEXT COMPLET:
${context}

IMPORTANT: Folosește CIFRELE EXACTE din context. Fii SPECIFIC, nu general.`;

        const response = await callGeminiAPI(analysisPrompt);
        container.innerHTML = `<div class="ai-analysis-content">${response}</div>`;
    } catch (err) {
        container.innerHTML = `<p class="ai-placeholder">❌ Eroare la analiză: ${err.message}. Încearcă din nou.</p>`;
    }
}

// Search
function handleSearch() {
    const query = $('searchInput')?.value.toLowerCase().trim();
    const resultsContainer = $('searchResults');
    if (!resultsContainer) return;
    
    if (!query) {
        resultsContainer.classList.add('hidden');
        return;
    }
    
    const results = state.transactions.filter(t => {
        const cat = findCategory(t.type, t.category);
        const catName = cat ? cat.name.toLowerCase() : t.category.toLowerCase();
        return catName.includes(query) || 
               (t.subcategory && t.subcategory.toLowerCase().includes(query)) ||
               (t.description && t.description.toLowerCase().includes(query)) ||
               (t.tags && t.tags.some(tag => tag.toLowerCase().includes(query)));
    }).slice(0, 10);
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="empty-state small"><p>Niciun rezultat</p></div>';
    } else {
        resultsContainer.innerHTML = results.map(t => {
            const cat = findCategory(t.type, t.category);
            const icon = cat ? cat.icon : '📝';
            const name = cat ? cat.name : t.category;
            return `
                <div class="search-result-item" onclick="goToTransaction('${t.id}')">
                    <span style="margin-right:0.75rem">${icon}</span>
                    <div style="flex:1">
                        <div style="font-weight:500">${esc(name)}</div>
                        <div style="font-size:0.8rem;color:var(--text3)">${formatDate(t.date)}</div>
                    </div>
                    <span class="trans-amount ${t.type}">${t.type === 'income' ? '+' : '-'}${fmt(t.amount)}</span>
                </div>
            `;
        }).join('');
    }
    
    resultsContainer.classList.remove('hidden');
}

function goToTransaction(id) {
    if ($('searchBar')) $('searchBar').classList.add('hidden');
    if ($('searchInput')) $('searchInput').value = '';
    if ($('searchResults')) $('searchResults').classList.add('hidden');
    
    switchView('transactions');
    $$('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector('.nav-item[data-view="transactions"]')?.classList.add('active');
    
    const t = state.transactions.find(tr => tr.id === id);
    if (t) {
        state.month = new Date(t.date).getMonth();
        state.year = new Date(t.date).getFullYear();
        state.filter = 'all';
        $$('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === 'all'));
        renderAllTransactions();
        updateStats();
    }
}

// Profile
function updateProfile() {
    if (!state.user) return;
    
    const name = state.user.displayName || 'Utilizator';
    const email = state.user.email || '';
    const initial = name.charAt(0).toUpperCase();
    
    // Update menu
    if ($('menuAvatar')) $('menuAvatar').textContent = initial;
    if ($('menuUserName')) $('menuUserName').textContent = name;
    if ($('menuUserEmail')) $('menuUserEmail').textContent = email;
    
    // Update settings
    if ($('settingsName')) $('settingsName').textContent = name;
    if ($('settingsEmail')) $('settingsEmail').textContent = email;
    
    // Legacy elements (in case they exist)
    if ($('profileAvatar')) $('profileAvatar').textContent = initial;
    if ($('profileName')) $('profileName').textContent = name;
    if ($('profileEmail')) $('profileEmail').textContent = email;
    if ($('totalTransCount')) $('totalTransCount').textContent = state.transactions.length;
    if ($('streakDays')) $('streakDays').textContent = state.streak;
}

// Export functions
function exportJSON() {
    const data = {
        transactions: state.transactions,
        goals: state.goals,
        reminders: state.reminders,
        debts: state.debts,
        accounts: state.accounts,
        budgets: state.budgets,
        exportedAt: new Date().toISOString()
    };
    
    downloadFile(JSON.stringify(data, null, 2), 'budget-pro-export.json', 'application/json');
    toast('Export JSON generat!', 'success');
}

function exportCSV() {
    const headers = ['Data', 'Tip', 'Categorie', 'Subcategorie', 'Sumă', 'Descriere', 'Tags'];
    const rows = state.transactions.map(t => {
        const cat = findCategory(t.type, t.category);
        return [
            t.date,
            t.type,
            cat ? cat.name : t.category,
            t.subcategory || '',
            t.amount,
            t.description || '',
            (t.tags || []).join('; ')
        ].map(v => `"${v}"`).join(',');
    });
    
    const csv = [headers.join(','), ...rows].join('\n');
    downloadFile(csv, 'budget-pro-tranzactii.csv', 'text/csv');
    toast('Export CSV generat!', 'success');
}

function downloadFile(content, filename, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}

// ========================================
// UTILITIES FUNCTIONS
// ========================================

function openUtilityModal(type = '') {
    const modal = $('utilityModal');
    const form = $('utilityForm');
    const typeSelect = $('utilityType');
    const monthInput = $('utilityMonth');
    
    form.reset();
    $('utilityId').value = '';
    
    // Set current month as default
    const now = new Date();
    monthInput.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    
    if (type) {
        typeSelect.value = type;
        updateUtilityUnit();
    }
    
    $('utilityModalTitle').textContent = '➕ Adaugă factură utilități';
    openModal('utilityModal');
}

function updateUtilityUnit() {
    const type = $('utilityType').value;
    const unitSpan = $('utilityUnit');
    
    const units = {
        'electricity': 'kWh',
        'gas': 'm³',
        'water': 'm³',
        'heating': 'Gcal',
        'internet': 'Mbps',
        'phone': 'min',
        'tv': '',
        'trash': '',
        'maintenance': ''
    };
    
    unitSpan.textContent = units[type] || '';
}

// Add event listener for utility type change
document.addEventListener('DOMContentLoaded', () => {
    const utilityType = $('utilityType');
    if (utilityType) {
        utilityType.addEventListener('change', updateUtilityUnit);
    }
    
    // PDF dropzone handlers
    const dropzone = $('pdfDropzone');
    const fileInput = $('pdfFileInput');
    
    if (dropzone && fileInput) {
        dropzone.addEventListener('click', () => fileInput.click());
        
        dropzone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropzone.classList.add('dragover');
        });
        
        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('dragover');
        });
        
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.classList.remove('dragover');
            const file = e.dataTransfer.files[0];
            if (file && file.type === 'application/pdf') {
                processPdfFile(file);
            } else {
                toast('Te rog selectează un fișier PDF', 'error');
            }
        });
        
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) processPdfFile(file);
        });
    }
});

async function saveUtility(e) {
    e.preventDefault();
    if (!state.user) return;
    
    const type = $('utilityType').value;
    const month = $('utilityMonth').value;
    const amount = parseFloat($('utilityAmount').value);
    const consumption = parseFloat($('utilityConsumption').value) || null;
    const provider = $('utilityProvider').value.trim();
    const note = $('utilityNote').value.trim();
    const id = $('utilityId').value;
    
    const utilityData = {
        type,
        month,
        amount,
        consumption,
        provider,
        note,
        createdAt: new Date().toISOString()
    };
    
    try {
        const ref = db.collection('users').doc(state.user.uid).collection('utilities');
        
        if (id) {
            await ref.doc(id).update(utilityData);
            const idx = state.utilities.findIndex(u => u.id === id);
            if (idx > -1) state.utilities[idx] = { id, ...utilityData };
            toast('Factură actualizată!', 'success');
        } else {
            const doc = await ref.add(utilityData);
            state.utilities.push({ id: doc.id, ...utilityData });
            toast('Factură adăugată!', 'success');
            
            // Also add as transaction
            await addUtilityAsTransaction(utilityData);
        }
        
        closeModal('utilityModal');
        renderUtilitiesPreview();
        if ($('utilitiesView')?.classList.contains('active')) {
            renderUtilitiesView();
        }
    } catch (err) {
        toast('Eroare la salvare', 'error');
        console.error(err);
    }
}

async function addUtilityAsTransaction(utility) {
    const utilType = utilityTypes.find(u => u.id === utility.type);
    const monthDate = new Date(utility.month + '-15');
    
    const transData = {
        type: 'expense',
        category: 'utilities',
        subcategory: utilType?.name || utility.type,
        amount: utility.amount,
        date: utility.month + '-15',
        note: utility.provider ? `Factură ${utilType?.name} - ${utility.provider}` : `Factură ${utilType?.name}`,
        createdAt: new Date().toISOString()
    };
    
    try {
        const doc = await db.collection('users').doc(state.user.uid).collection('transactions').add(transData);
        state.transactions.push({ id: doc.id, ...transData });
        state.transactions.sort((a, b) => new Date(b.date) - new Date(a.date));
    } catch (err) {
        console.error('Error adding utility transaction:', err);
    }
}

function renderUtilitiesPreview() {
    const currentMonth = `${state.year}-${String(state.month + 1).padStart(2, '0')}`;
    
    const monthUtilities = state.utilities.filter(u => u.month === currentMonth);
    
    const byType = {};
    monthUtilities.forEach(u => {
        if (!byType[u.type]) byType[u.type] = 0;
        byType[u.type] += u.amount;
    });
    
    // Update preview cards
    const updatePreview = (id, type) => {
        const el = $(id);
        if (el) {
            el.textContent = byType[type] ? `${byType[type].toLocaleString()} ${state.currency}` : '-- RON';
        }
    };
    
    updatePreview('utilElectricity', 'electricity');
    updatePreview('utilGas', 'gas');
    updatePreview('utilWater', 'water');
    updatePreview('utilInternet', 'internet');
}

function renderUtilitiesView() {
    const currentMonth = `${state.year}-${String(state.month + 1).padStart(2, '0')}`;
    const prevMonth = state.month === 0 
        ? `${state.year - 1}-12` 
        : `${state.year}-${String(state.month).padStart(2, '0')}`;
    
    // Current month utilities
    const monthUtilities = state.utilities.filter(u => u.month === currentMonth);
    const prevMonthUtilities = state.utilities.filter(u => u.month === prevMonth);
    
    const total = monthUtilities.reduce((sum, u) => sum + u.amount, 0);
    const prevTotal = prevMonthUtilities.reduce((sum, u) => sum + u.amount, 0);
    
    // Update total
    const totalEl = $('utilitiesTotalAmount');
    if (totalEl) totalEl.textContent = `${total.toLocaleString()} ${state.currency}`;
    
    const monthLabel = $('utilitiesMonthLabel');
    if (monthLabel) monthLabel.textContent = `${months[state.month]} ${state.year}`;
    
    // Comparison
    const compEl = $('utilitiesComparison');
    if (compEl && prevTotal > 0) {
        const diff = ((total - prevTotal) / prevTotal * 100).toFixed(1);
        const sign = diff >= 0 ? '+' : '';
        compEl.textContent = `vs. luna trecută: ${sign}${diff}%`;
        compEl.className = diff < 0 ? 'utilities-comparison down' : 'utilities-comparison up';
    }
    
    // Update each utility card
    const byType = {};
    const byTypePrev = {};
    monthUtilities.forEach(u => {
        if (!byType[u.type]) byType[u.type] = { amount: 0, consumption: 0 };
        byType[u.type].amount += u.amount;
        if (u.consumption) byType[u.type].consumption += u.consumption;
    });
    prevMonthUtilities.forEach(u => {
        if (!byTypePrev[u.type]) byTypePrev[u.type] = 0;
        byTypePrev[u.type] += u.amount;
    });
    
    utilityTypes.forEach(ut => {
        const data = byType[ut.id] || { amount: 0, consumption: 0 };
        const prev = byTypePrev[ut.id] || 0;
        
        const valueEl = $(`util${ut.id.charAt(0).toUpperCase() + ut.id.slice(1)}Detail`);
        const unitEl = $(`util${ut.id.charAt(0).toUpperCase() + ut.id.slice(1)}Unit`);
        const trendEl = $(`util${ut.id.charAt(0).toUpperCase() + ut.id.slice(1)}Trend`);
        
        if (valueEl) valueEl.textContent = data.amount ? `${data.amount.toLocaleString()} ${state.currency}` : '-- RON';
        if (unitEl && ut.unit) unitEl.textContent = data.consumption ? `${data.consumption} ${ut.unit}` : `-- ${ut.unit}`;
        if (trendEl && prev > 0) {
            const diff = ((data.amount - prev) / prev * 100).toFixed(0);
            const sign = diff >= 0 ? '+' : '';
            trendEl.innerHTML = `<span class="${diff < 0 ? 'down' : 'up'}">${sign}${diff}% vs. luna trecută</span>`;
        }
    });
    
    // Render history
    renderUtilitiesHistory();
    
    // Render chart
    renderUtilitiesChart();
}

function renderUtilitiesHistory() {
    const container = $('utilitiesHistory');
    if (!container) return;
    
    const sorted = [...state.utilities].sort((a, b) => b.month.localeCompare(a.month));
    
    if (sorted.length === 0) {
        container.innerHTML = `<div class="empty-state small"><span class="empty-icon">📄</span><p>Nicio factură înregistrată</p></div>`;
        return;
    }
    
    container.innerHTML = sorted.slice(0, 20).map(u => {
        const ut = utilityTypes.find(t => t.id === u.type) || { icon: '📄', name: u.type, color: '#64748b' };
        const monthParts = u.month.split('-');
        const monthName = months[parseInt(monthParts[1]) - 1];
        
        return `
            <div class="utility-history-item" onclick="editUtility('${u.id}')">
                <div class="utility-history-icon" style="background: ${ut.color}">${ut.icon}</div>
                <div class="utility-history-info">
                    <span class="utility-history-type">${ut.name}</span>
                    <span class="utility-history-date">${monthName} ${monthParts[0]}${u.provider ? ` • ${u.provider}` : ''}</span>
                </div>
                <div>
                    <div class="utility-history-amount">${u.amount.toLocaleString()} ${state.currency}</div>
                    ${u.consumption ? `<div class="utility-history-consumption">${u.consumption} ${ut.unit}</div>` : ''}
                </div>
            </div>
        `;
    }).join('');
}

function editUtility(id) {
    const utility = state.utilities.find(u => u.id === id);
    if (!utility) return;
    
    $('utilityId').value = id;
    $('utilityType').value = utility.type;
    $('utilityMonth').value = utility.month;
    $('utilityAmount').value = utility.amount;
    $('utilityConsumption').value = utility.consumption || '';
    $('utilityProvider').value = utility.provider || '';
    $('utilityNote').value = utility.note || '';
    
    updateUtilityUnit();
    $('utilityModalTitle').textContent = '✏️ Editează factură';
    openModal('utilityModal');
}

function renderUtilitiesChart() {
    const ctx = document.getElementById('utilitiesChart');
    if (!ctx) return;
    
    // Destroy existing chart
    if (state.utilitiesChart) {
        state.utilitiesChart.destroy();
    }
    
    // Get last 12 months data
    const monthsData = [];
    const now = new Date();
    
    for (let i = 11; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const monthKey = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
        const monthUtils = state.utilities.filter(u => u.month === monthKey);
        const total = monthUtils.reduce((sum, u) => sum + u.amount, 0);
        
        monthsData.push({
            label: months[d.getMonth()].substring(0, 3),
            value: total
        });
    }
    
    state.utilitiesChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: monthsData.map(m => m.label),
            datasets: [{
                label: 'Total utilități',
                data: monthsData.map(m => m.value),
                backgroundColor: 'rgba(139, 92, 246, 0.6)',
                borderColor: '#8b5cf6',
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255,255,255,0.1)' },
                    ticks: { color: '#9ca3af' }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#9ca3af' }
                }
            }
        }
    });
}

// ========================================
// IMPORT PDF FUNCTIONS
// ========================================

let pendingImportTransactions = [];

async function processPdfFile(file) {
    const progress = $('importProgress');
    const progressFill = $('importProgressFill');
    const status = $('importStatus');
    const preview = $('importPreview');
    
    progress.classList.remove('hidden');
    preview.classList.add('hidden');
    progressFill.style.width = '10%';
    status.textContent = 'Se încarcă PDF-ul...';
    
    try {
        // Read file as base64
        const base64 = await readFileAsBase64(file);
        progressFill.style.width = '30%';
        status.textContent = 'Se extrage textul...';
        
        // Extract text from PDF using pdf.js or send to AI directly
        const text = await extractTextFromPdf(base64);
        progressFill.style.width = '50%';
        status.textContent = 'AI analizează tranzacțiile...';
        
        // Send to AI for categorization
        const transactions = await categorizeWithAI(text);
        progressFill.style.width = '100%';
        status.textContent = `${transactions.length} tranzacții găsite!`;
        
        // Show preview
        pendingImportTransactions = transactions;
        renderImportPreview(transactions);
        
        setTimeout(() => {
            progress.classList.add('hidden');
            preview.classList.remove('hidden');
        }, 500);
        
    } catch (err) {
        console.error('PDF processing error:', err);
        status.textContent = 'Eroare: ' + err.message;
        progressFill.style.width = '0%';
        toast('Eroare la procesarea PDF-ului', 'error');
    }
}

function readFileAsBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

async function extractTextFromPdf(base64) {
    // For simplicity, we'll use the raw base64 and let AI handle it
    // In production, you'd use pdf.js to extract text first
    return base64;
}

async function categorizeWithAI(pdfContent) {
    const categoriesList = categories.expense.map(c => `${c.id}: ${c.name} (${c.subs.join(', ')})`).join('\n');
    const incomeList = categories.income.map(c => `${c.id}: ${c.name} (${c.subs.join(', ')})`).join('\n');
    
    const prompt = `Analizează acest extras de cont PDF și extrage toate tranzacțiile.

Pentru fiecare tranzacție, returnează un JSON array cu obiecte care au:
- date: data în format YYYY-MM-DD
- amount: suma (număr pozitiv)
- type: "expense" sau "income"
- category: id-ul categoriei din lista de mai jos
- subcategory: subcategoria potrivită
- description: descrierea originală din extras

CATEGORII CHELTUIELI:
${categoriesList}

CATEGORII VENITURI:
${incomeList}

Returnează DOAR un JSON array valid, fără alte explicații. Exemplu:
[{"date":"2024-12-01","amount":150.50,"type":"expense","category":"food","subcategory":"Supermarket","description":"KAUFLAND RO"}]

Dacă nu poți extrage tranzacții, returnează: []

CONȚINUT PDF (base64):
${pdfContent.substring(0, 10000)}...`;

    try {
        const response = await callGeminiAPI(prompt);
        
        // Try to parse JSON from response
        const jsonMatch = response.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
            return JSON.parse(jsonMatch[0]);
        }
        return [];
    } catch (err) {
        console.error('AI categorization error:', err);
        return [];
    }
}

function renderImportPreview(transactions) {
    const countEl = $('importCount');
    const listEl = $('importTransList');
    
    if (countEl) countEl.textContent = `${transactions.length} tranzacții găsite`;
    
    if (listEl) {
        listEl.innerHTML = transactions.map((t, idx) => {
            const cat = findCategory(t.type, t.category);
            return `
                <div class="import-trans-item">
                    <div class="import-trans-icon" style="background: ${cat?.color || '#64748b'}">${cat?.icon || '📦'}</div>
                    <div class="import-trans-info">
                        <div class="import-trans-desc">${t.description || 'Tranzacție'}</div>
                        <div class="import-trans-cat">${cat?.name || t.category} • ${t.date}</div>
                    </div>
                    <div class="import-trans-amount ${t.type}">${t.type === 'expense' ? '-' : '+'}${t.amount.toLocaleString()} ${state.currency}</div>
                </div>
            `;
        }).join('');
    }
}

function clearImportPreview() {
    pendingImportTransactions = [];
    $('importPreview').classList.add('hidden');
    $('pdfFileInput').value = '';
}

async function confirmImport() {
    if (pendingImportTransactions.length === 0) {
        toast('Nu există tranzacții de importat', 'error');
        return;
    }
    
    try {
        const batch = db.batch();
        const ref = db.collection('users').doc(state.user.uid).collection('transactions');
        
        pendingImportTransactions.forEach(t => {
            const docRef = ref.doc();
            batch.set(docRef, {
                type: t.type,
                category: t.category,
                subcategory: t.subcategory || '',
                amount: t.amount,
                date: t.date,
                note: t.description || '',
                imported: true,
                createdAt: new Date().toISOString()
            });
        });
        
        await batch.commit();
        
        // Reload transactions
        await loadAllData();
        
        toast(`${pendingImportTransactions.length} tranzacții importate!`, 'success');
        pendingImportTransactions = [];
        closeModal('importPdfModal');
        clearImportPreview();
        
    } catch (err) {
        console.error('Import error:', err);
        toast('Eroare la import', 'error');
    }
}

// Clear all data
async function clearAllData() {
    if (!confirm('Ești sigur că vrei să ștergi TOATE datele? Această acțiune este ireversibilă!')) return;
    if (!confirm('Confirmă din nou: ȘTERGE toate datele?')) return;
    
    try {
        const uid = state.user.uid;
        const batch = db.batch();
        
        const collections = ['transactions', 'goals', 'reminders', 'debts', 'accounts', 'budgets', 'utilities'];
        for (const col of collections) {
            const snap = await db.collection('users').doc(uid).collection(col).get();
            snap.docs.forEach(doc => batch.delete(doc.ref));
        }
        
        await batch.commit();
        
        state.transactions = [];
        state.goals = [];
        state.reminders = [];
        state.debts = [];
        state.accounts = [];
        state.budgets = [];
        
        renderAll();
        toast('Toate datele au fost șterse!', 'success');
    } catch (err) {
        toast('Eroare la ștergere', 'error');
    }
}

// Logout
function logout() {
    auth.signOut();
    toast('Deconectat cu succes!', 'success');
}

// Utility functions
function fmt(n) {
    return new Intl.NumberFormat('ro-RO', { 
        style: 'decimal', 
        minimumFractionDigits: 0,
        maximumFractionDigits: 0 
    }).format(n) + ' ' + state.currency;
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('ro-RO', { day: 'numeric', month: 'short' });
}

function esc(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function toast(message, type = 'info') {
    const container = $('toastContainer');
    if (!container) return;
    
    const div = document.createElement('div');
    div.className = `toast ${type}`;
    
    const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
    div.innerHTML = `<span>${icons[type]}</span><span>${message}</span>`;
    
    container.appendChild(div);
    setTimeout(() => div.remove(), 3000);
}

function debounce(fn, delay) {
    let timeout;
    return (...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), delay);
    };
}

// ==========================================
// PREMIUM FEATURES
// ==========================================

// Financial Health Score (0-100)
function calculateHealthScore() {
    let score = 50; // Start neutral
    
    const monthTrans = getMonthTransactions();
    let income = 0, expense = 0;
    monthTrans.forEach(t => {
        if (t.type === 'income') income += t.amount;
        else if (t.type === 'expense') expense += t.amount;
    });
    
    // Savings Rate (max +25 points)
    const savingsRate = income > 0 ? ((income - expense) / income * 100) : 0;
    if (savingsRate >= 30) score += 25;
    else if (savingsRate >= 20) score += 20;
    else if (savingsRate >= 10) score += 10;
    else if (savingsRate < 0) score -= 15;
    
    // Streak (max +10 points)
    if (state.streak >= 30) score += 10;
    else if (state.streak >= 14) score += 7;
    else if (state.streak >= 7) score += 5;
    
    // Budget adherence (max +15 points)
    const budgetsOk = state.budgets.every(b => {
        const spent = monthTrans.filter(t => t.type === 'expense' && t.category === b.category).reduce((s, t) => s + t.amount, 0);
        return spent <= b.limit;
    });
    if (state.budgets.length > 0 && budgetsOk) score += 15;
    else if (state.budgets.length === 0) score += 5;
    
    // Goals progress (max +10 points)
    if (state.goals.length > 0) {
        const avgProgress = state.goals.reduce((a, g) => a + (g.saved / g.target), 0) / state.goals.length;
        score += Math.round(avgProgress * 10);
    }
    
    // Debt management (max +10 points)
    const debtsOwe = state.debts.filter(d => d.type === 'owe').reduce((a, d) => a + d.amount, 0);
    if (debtsOwe === 0) score += 10;
    else if (debtsOwe < income * 0.2) score += 5;
    
    // Emergency fund - accounts balance (max +10 points)
    const totalAccounts = state.accounts.reduce((a, acc) => a + (acc.balance || 0), 0);
    if (totalAccounts >= expense * 6) score += 10; // 6 months emergency
    else if (totalAccounts >= expense * 3) score += 7;
    else if (totalAccounts >= expense) score += 3;
    
    // Diversification - multiple accounts (max +5 points)
    if (state.accounts.length >= 3) score += 5;
    else if (state.accounts.length >= 2) score += 3;
    
    state.healthScore = Math.max(0, Math.min(100, score));
    
    if ($('healthScore')) {
        $('healthScore').textContent = state.healthScore;
        $('healthScore').className = 'health-score ' + getHealthScoreClass(state.healthScore);
    }
    
    return state.healthScore;
}

function getHealthScoreClass(score) {
    if (score >= 80) return 'excellent';
    if (score >= 60) return 'good';
    if (score >= 40) return 'fair';
    return 'poor';
}

function getHealthScoreLabel(score) {
    if (score >= 80) return 'Excelent 🌟';
    if (score >= 60) return 'Bun 👍';
    if (score >= 40) return 'Mediu 😐';
    return 'Necesită atenție ⚠️';
}

// Month vs Month Comparison
function getMonthComparison() {
    const currentMonth = getMonthTransactions();
    
    const lastMonth = state.month === 0 ? 11 : state.month - 1;
    const lastYear = state.month === 0 ? state.year - 1 : state.year;
    
    const prevMonthTrans = state.transactions.filter(t => {
        const d = new Date(t.date);
        return d.getMonth() === lastMonth && d.getFullYear() === lastYear;
    });
    
    const current = { income: 0, expense: 0 };
    const prev = { income: 0, expense: 0 };
    
    currentMonth.forEach(t => {
        if (t.type === 'income') current.income += t.amount;
        else if (t.type === 'expense') current.expense += t.amount;
    });
    
    prevMonthTrans.forEach(t => {
        if (t.type === 'income') prev.income += t.amount;
        else if (t.type === 'expense') prev.expense += t.amount;
    });
    
    return {
        income: {
            current: current.income,
            prev: prev.income,
            change: prev.income > 0 ? ((current.income - prev.income) / prev.income * 100) : 0
        },
        expense: {
            current: current.expense,
            prev: prev.expense,
            change: prev.expense > 0 ? ((current.expense - prev.expense) / prev.expense * 100) : 0
        },
        balance: {
            current: current.income - current.expense,
            prev: prev.income - prev.expense
        }
    };
}

// Voice Input for Transactions
function initVoiceInput() {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
        console.log('Voice recognition not supported');
        return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'ro-RO';
    
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        console.log('🎤 Voice input:', transcript);
        parseVoiceCommand(transcript);
    };
    
    recognition.onerror = (event) => {
        console.error('Voice error:', event.error);
        toast('Nu am înțeles. Încearcă din nou.', 'error');
    };
    
    window.startVoiceInput = () => {
        recognition.start();
        toast('🎤 Te ascult...', 'info');
    };
}

function parseVoiceCommand(text) {
    // Patterns: "cheltuială 50 lei mâncare" or "am cheltuit 100 pe transport"
    const expensePatterns = [
        /(?:cheltuial[aă]|am cheltuit|minus)\s*(\d+)\s*(?:lei|ron)?\s*(?:pe|la|pentru)?\s*(.+)?/i,
        /(\d+)\s*(?:lei|ron)?\s*(?:pe|la|pentru)\s*(.+)/i
    ];
    
    const incomePatterns = [
        /(?:venit|am primit|plus|salariu)\s*(\d+)\s*(?:lei|ron)?/i
    ];
    
    for (const pattern of expensePatterns) {
        const match = text.match(pattern);
        if (match) {
            const amount = parseFloat(match[1]);
            const category = match[2] ? guessCategory(match[2]) : 'other_expense';
            
            openTransModal('expense');
            if ($('transAmount')) $('transAmount').value = amount;
            if ($('transCategory')) $('transCategory').value = category;
            populateSubcategories();
            
            toast(`💸 Cheltuială: ${amount} RON`, 'success');
            return;
        }
    }
    
    for (const pattern of incomePatterns) {
        const match = text.match(pattern);
        if (match) {
            const amount = parseFloat(match[1]);
            
            openTransModal('income');
            if ($('transAmount')) $('transAmount').value = amount;
            
            toast(`💵 Venit: ${amount} RON`, 'success');
            return;
        }
    }
    
    toast('Nu am înțeles comanda. Spune "cheltuială 50 lei mâncare"', 'warning');
}

function guessCategory(text) {
    const categoryMap = {
        'mâncare|mancare|restaurant|supermarket|magazin': 'food',
        'transport|benzină|benzina|uber|taxi|autobuz': 'transport',
        'chirie|întreținere|intretinere|casă|casa': 'housing',
        'electricitate|gaz|apă|apa|internet|telefon': 'utilities',
        'doctor|medicament|farmacie|sănătate': 'health',
        'haine|cumpărături|cumparaturi|shopping': 'shopping',
        'cinema|film|joc|divertisment|distracție': 'entertainment',
        'curs|carte|educație|educatie|școală': 'education'
    };
    
    for (const [keywords, category] of Object.entries(categoryMap)) {
        const regex = new RegExp(keywords, 'i');
        if (regex.test(text)) return category;
    }
    
    return 'other_expense';
}

// Split Bills
function openSplitModal(transactionId = null) {
    if ($('splitForm')) $('splitForm').reset();
    if ($('splitId')) $('splitId').value = transactionId || '';
    
    if (transactionId) {
        const trans = state.transactions.find(t => t.id === transactionId);
        if (trans) {
            if ($('splitAmount')) $('splitAmount').value = trans.amount;
            if ($('splitDescription')) $('splitDescription').value = trans.description || '';
        }
    }
    
    openModal('splitModal');
}

async function handleSplitSubmit(e) {
    e.preventDefault();
    
    const total = parseFloat($('splitAmount').value);
    const people = $('splitPeople').value.split(',').map(p => p.trim()).filter(p => p);
    const description = $('splitDescription')?.value || '';
    
    if (people.length === 0) {
        toast('Adaugă cel puțin o persoană!', 'error');
        return;
    }
    
    const perPerson = total / (people.length + 1); // +1 for yourself
    
    // Create debts for each person
    for (const person of people) {
        const debtData = {
            type: 'owed',
            person: person,
            amount: perPerson,
            reason: description || `Split: ${fmt(total)}`,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };
        
        try {
            const doc = await db.collection('users').doc(state.user.uid).collection('debts').add(debtData);
            state.debts.push({ id: doc.id, ...debtData });
        } catch (err) {
            console.error('Error creating split debt:', err);
        }
    }
    
    closeModal('splitModal');
    toast(`Împărțit ${fmt(total)} cu ${people.length} persoane (${fmt(perPerson)}/persoană)`, 'success');
    renderDebtsPreview();
    renderDebts();
}

// Weekly Report Generator
function generateWeeklyReport() {
    const today = new Date();
    const weekAgo = new Date(today);
    weekAgo.setDate(weekAgo.getDate() - 7);
    
    const weekTrans = state.transactions.filter(t => {
        const d = new Date(t.date);
        return d >= weekAgo && d <= today;
    });
    
    let income = 0, expense = 0;
    const byCategory = {};
    const byDay = {};
    
    weekTrans.forEach(t => {
        if (t.type === 'income') income += t.amount;
        else if (t.type === 'expense') {
            expense += t.amount;
            const cat = findCategory('expense', t.category);
            const name = cat ? cat.name : t.category;
            byCategory[name] = (byCategory[name] || 0) + t.amount;
        }
        
        const day = new Date(t.date).toLocaleDateString('ro-RO', { weekday: 'short' });
        if (!byDay[day]) byDay[day] = { income: 0, expense: 0 };
        if (t.type === 'income') byDay[day].income += t.amount;
        else if (t.type === 'expense') byDay[day].expense += t.amount;
    });
    
    const topCategories = Object.entries(byCategory).sort((a, b) => b[1] - a[1]).slice(0, 3);
    const dailyAvg = expense / 7;
    const comparison = getMonthComparison();
    
    state.weeklyReport = {
        period: `${weekAgo.toLocaleDateString('ro-RO')} - ${today.toLocaleDateString('ro-RO')}`,
        income,
        expense,
        balance: income - expense,
        dailyAvg,
        topCategories,
        byDay,
        transactionCount: weekTrans.length,
        healthScore: state.healthScore
    };
    
    return state.weeklyReport;
}

function showWeeklyReport() {
    const report = generateWeeklyReport();
    
    const message = `📊 RAPORT SĂPTĂMÂNAL\n${report.period}\n\n` +
        `💵 Venituri: ${fmt(report.income)}\n` +
        `💸 Cheltuieli: ${fmt(report.expense)}\n` +
        `💰 Balanță: ${fmt(report.balance)}\n` +
        `📅 Media zilnică: ${fmt(report.dailyAvg)}\n` +
        `📝 Tranzacții: ${report.transactionCount}\n\n` +
        `🏆 Top categorii:\n${report.topCategories.map(([cat, amount]) => `  • ${cat}: ${fmt(amount)}`).join('\n')}\n\n` +
        `❤️ Scor sănătate: ${report.healthScore}/100`;
    
    // Use AI to analyze
    askAI(`Analizează acest raport săptămânal și dă-mi 3 sfaturi concrete:\n${message}`);
}

// Smart Notifications
function checkSmartAlerts() {
    const today = new Date();
    const alerts = [];
    
    // Spending velocity alert
    const monthTrans = getMonthTransactions();
    const expense = monthTrans.filter(t => t.type === 'expense').reduce((a, t) => a + t.amount, 0);
    const dayOfMonth = today.getDate();
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const expectedExpense = (expense / dayOfMonth) * daysInMonth;
    const income = monthTrans.filter(t => t.type === 'income').reduce((a, t) => a + t.amount, 0);
    
    if (expectedExpense > income && income > 0) {
        alerts.push({
            type: 'warning',
            icon: '📈',
            title: 'Ritmul cheltuielilor',
            message: `La acest ritm vei cheltui ${fmt(expectedExpense)}, mai mult decât venitul de ${fmt(income)}!`
        });
    }
    
    // Weekend spending pattern
    const todayDay = today.getDay();
    if (todayDay === 5) { // Friday
        const lastWeekendSpending = monthTrans.filter(t => {
            const d = new Date(t.date);
            return (d.getDay() === 0 || d.getDay() === 6) && t.type === 'expense';
        }).reduce((a, t) => a + t.amount, 0);
        
        if (lastWeekendSpending > expense * 0.4) {
            alerts.push({
                type: 'info',
                icon: '📅',
                title: 'Weekend spending',
                message: `Ai cheltuit ${Math.round(lastWeekendSpending / expense * 100)}% din cheltuieli în weekend-uri. Încearcă să reduci!`
            });
        }
    }
    
    // Upcoming reminders
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const upcomingReminders = state.reminders.filter(r => {
        const d = new Date(r.date);
        return d >= today && d <= tomorrow;
    });
    
    upcomingReminders.forEach(r => {
        alerts.push({
            type: 'reminder',
            icon: '⏰',
            title: 'Reminder',
            message: `${r.title}${r.amount ? ` - ${fmt(r.amount)}` : ''}`
        });
    });
    
    // Goal milestone
    state.goals.forEach(g => {
        const progress = g.saved / g.target * 100;
        if (progress >= 75 && progress < 100) {
            alerts.push({
                type: 'success',
                icon: '🎯',
                title: 'Aproape de obiectiv!',
                message: `${g.name}: ${Math.round(progress)}% completat! Mai ai ${fmt(g.target - g.saved)}`
            });
        }
    });
    
    return alerts;
}

// PWA Shortcuts handling
function handlePWAShortcuts() {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action');
    
    if (action === 'expense') {
        setTimeout(() => openTransModal('expense'), 1000);
    } else if (action === 'income') {
        setTimeout(() => openTransModal('income'), 1000);
    } else if (action === 'ai') {
        setTimeout(() => openModal('aiModal'), 1000);
    }
}

// Recurring Transactions Auto-Add
async function processRecurringTransactions() {
    const today = new Date().toISOString().split('T')[0];
    
    const recurring = state.transactions.filter(t => t.recurring && t.recurringFreq);
    
    for (const t of recurring) {
        const lastDate = new Date(t.date);
        let nextDate = new Date(lastDate);
        
        switch (t.recurringFreq) {
            case 'daily':
                nextDate.setDate(nextDate.getDate() + 1);
                break;
            case 'weekly':
                nextDate.setDate(nextDate.getDate() + 7);
                break;
            case 'monthly':
                nextDate.setMonth(nextDate.getMonth() + 1);
                break;
            case 'yearly':
                nextDate.setFullYear(nextDate.getFullYear() + 1);
                break;
        }
        
        if (nextDate.toISOString().split('T')[0] === today) {
            // Create new transaction
            const newTrans = {
                ...t,
                date: today,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };
            delete newTrans.id;
            
            try {
                const doc = await db.collection('users').doc(state.user.uid).collection('transactions').add(newTrans);
                state.transactions.unshift({ id: doc.id, ...newTrans, date: today });
                toast(`🔄 Tranzacție recurentă adăugată: ${findCategory(t.type, t.category)?.name || t.category}`, 'info');
            } catch (err) {
                console.error('Error adding recurring transaction:', err);
            }
        }
    }
}

// Initialize premium features
function initPremiumFeatures() {
    initVoiceInput();
    handlePWAShortcuts();
    processRecurringTransactions();
    calculateHealthScore();
    
    // Show smart alerts
    const alerts = checkSmartAlerts();
    if (alerts.length > 0) {
        setTimeout(() => {
            alerts.slice(0, 2).forEach(alert => {
                toast(`${alert.icon} ${alert.message}`, alert.type === 'warning' ? 'warning' : 'info');
            });
        }, 3000);
    }
    
    console.log('✨ Premium features initialized');
}

// Call after data loads
const originalLoadAllData = loadAllData;
loadAllData = async function() {
    await originalLoadAllData.call(this);
    initPremiumFeatures();
};

// Make functions global
window.openTransModal = openTransModal;
window.openGoalModal = openGoalModal;
window.openDebtModal = openDebtModal;
window.openReminderModal = openReminderModal;
window.openAccountModal = openAccountModal;
window.openBudgetModal = openBudgetModal;
window.closeModal = closeModal;
window.switchView = switchView;
window.changeMonth = changeMonth;
window.editTransaction = editTransaction;
window.deleteTransaction = deleteTransaction;
window.addToGoal = addToGoal;
window.editGoal = editGoal;
window.deleteGoal = deleteGoal;
window.markDebtPaid = markDebtPaid;
window.editDebt = editDebt;
window.deleteDebt = deleteDebt;
window.editReminder = editReminder;
window.deleteReminder = deleteReminder;
window.editAccount = editAccount;
window.deleteAccount = deleteAccount;
window.askAI = askAI;
window.exportJSON = exportJSON;
window.exportCSV = exportCSV;
window.clearAllData = clearAllData;
window.logout = logout;
window.goToTransaction = goToTransaction;
window.startVoiceInput = startVoiceInput;
window.openSplitModal = openSplitModal;
window.showWeeklyReport = showWeeklyReport;
window.calculateHealthScore = calculateHealthScore;

// ========================================
// NEW PREMIUM FEATURES
// ========================================

// Savings Calculator - Cât durează să economisești pentru ceva
function calculateSavingsTime(targetAmount) {
    const monthlyTrans = getMonthTransactions();
    let monthlyIncome = 0, monthlyExpense = 0;
    
    monthlyTrans.forEach(t => {
        if (t.type === 'income') monthlyIncome += t.amount;
        else if (t.type === 'expense') monthlyExpense += t.amount;
    });
    
    const monthlySavings = monthlyIncome - monthlyExpense;
    
    if (monthlySavings <= 0) {
        return { months: Infinity, message: 'Nu economisești suficient în prezent' };
    }
    
    const months = Math.ceil(targetAmount / monthlySavings);
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    let message = '';
    if (years > 0) {
        message = `${years} an${years > 1 ? 'i' : ''} și ${remainingMonths} lun${remainingMonths !== 1 ? 'i' : 'ă'}`;
    } else {
        message = `${months} lun${months !== 1 ? 'i' : 'ă'}`;
    }
    
    return { months, years, remainingMonths, message, monthlySavings };
}

// Track net worth history monthly
async function updateNetWorthHistory() {
    if (!state.user) return;
    
    const currentMonth = `${state.year}-${String(state.month + 1).padStart(2, '0')}`;
    const existing = state.netWorthHistory.find(h => h.month === currentMonth);
    
    const historyEntry = {
        month: currentMonth,
        netWorth: state.netWorth,
        date: new Date().toISOString()
    };
    
    try {
        if (existing) {
            await db.collection('users').doc(state.user.uid)
                .collection('netWorthHistory').doc(existing.id).update(historyEntry);
        } else {
            const doc = await db.collection('users').doc(state.user.uid)
                .collection('netWorthHistory').add(historyEntry);
            state.netWorthHistory.push({ id: doc.id, ...historyEntry });
        }
    } catch (err) {
        console.error('Error saving net worth history:', err);
    }
}

// Year vs Year comparison
function getYearComparison() {
    const currentYear = state.year;
    const lastYear = currentYear - 1;
    
    const thisYearTrans = state.transactions.filter(t => new Date(t.date).getFullYear() === currentYear);
    const lastYearTrans = state.transactions.filter(t => new Date(t.date).getFullYear() === lastYear);
    
    const calcYearStats = (trans) => {
        let income = 0, expense = 0;
        trans.forEach(t => {
            if (t.type === 'income') income += t.amount;
            else if (t.type === 'expense') expense += t.amount;
        });
        return { income, expense, savings: income - expense, count: trans.length };
    };
    
    const thisYear = calcYearStats(thisYearTrans);
    const lastYearStats = calcYearStats(lastYearTrans);
    
    return {
        thisYear,
        lastYear: lastYearStats,
        incomeChange: lastYearStats.income > 0 ? ((thisYear.income - lastYearStats.income) / lastYearStats.income * 100) : 0,
        expenseChange: lastYearStats.expense > 0 ? ((thisYear.expense - lastYearStats.expense) / lastYearStats.expense * 100) : 0,
        savingsChange: lastYearStats.savings !== 0 ? ((thisYear.savings - lastYearStats.savings) / Math.abs(lastYearStats.savings) * 100) : 0
    };
}

// Smart Tips based on spending patterns
function generateSmartTips() {
    const tips = [];
    const monthTrans = getMonthTransactions();
    
    let income = 0, expense = 0;
    const byCategory = {};
    
    monthTrans.forEach(t => {
        if (t.type === 'income') income += t.amount;
        else if (t.type === 'expense') {
            expense += t.amount;
            byCategory[t.category] = (byCategory[t.category] || 0) + t.amount;
        }
    });
    
    // Tip 1: Spending too much on food
    if (byCategory['food'] && income > 0 && byCategory['food'] / income > 0.25) {
        tips.push({
            icon: '🍔',
            title: 'Cheltuieli mari pe mâncare',
            message: `Cheltuiești ${(byCategory['food'] / income * 100).toFixed(0)}% din venit pe mâncare. Încearcă să gătești mai mult acasă!`,
            category: 'food'
        });
    }
    
    // Tip 2: Subscriptions check
    if (byCategory['subscriptions'] && byCategory['subscriptions'] > 200) {
        tips.push({
            icon: '📱',
            title: 'Verifică abonamentele',
            message: `Ai ${byCategory['subscriptions'].toLocaleString()} ${state.currency} pe abonamente. Chiar le folosești pe toate?`,
            category: 'subscriptions'
        });
    }
    
    // Tip 3: No emergency fund
    const totalInAccounts = state.accounts.reduce((sum, a) => sum + (a.balance || 0), 0);
    const monthlyExpense = expense || 1;
    const emergencyMonths = totalInAccounts / monthlyExpense;
    
    if (emergencyMonths < 3) {
        tips.push({
            icon: '🚨',
            title: 'Fond de urgență',
            message: `Ai doar ${emergencyMonths.toFixed(1)} luni de cheltuieli în conturi. Ideal sunt 3-6 luni.`,
            category: 'savings'
        });
    }
    
    // Tip 4: Good savings rate
    const savingsRate = income > 0 ? (income - expense) / income * 100 : 0;
    if (savingsRate >= 30) {
        tips.push({
            icon: '🌟',
            title: 'Excelent!',
            message: `Economisești ${savingsRate.toFixed(0)}% din venit! Continuă așa!`,
            category: 'positive'
        });
    }
    
    // Tip 5: Weekend spending
    let weekendSpend = 0, weekdaySpend = 0;
    monthTrans.forEach(t => {
        if (t.type === 'expense') {
            const day = new Date(t.date).getDay();
            if (day === 0 || day === 6) weekendSpend += t.amount;
            else weekdaySpend += t.amount;
        }
    });
    
    if (weekendSpend > weekdaySpend * 0.5 && weekendSpend > 500) {
        tips.push({
            icon: '🎉',
            title: 'Cheltuieli de weekend',
            message: `Cheltuiești ${weekendSpend.toLocaleString()} ${state.currency} în weekend-uri. Poate o activitate gratuită?`,
            category: 'entertainment'
        });
    }
    
    // Tip 6: No investments
    const hasInvestments = state.transactions.some(t => 
        t.category === 'invest_expense' || t.category === 'investments_income' || t.category === 'crypto_income'
    );
    
    if (!hasInvestments && income > 5000) {
        tips.push({
            icon: '📈',
            title: 'Gândește-te la investiții',
            message: 'Cu veniturile tale, ai putea începe să investești pentru viitor.',
            category: 'investments'
        });
    }
    
    // Tip 7: High transport costs
    if (byCategory['transport'] && income > 0 && byCategory['transport'] / income > 0.15) {
        tips.push({
            icon: '🚗',
            title: 'Costuri transport ridicate',
            message: `${(byCategory['transport'] / income * 100).toFixed(0)}% din venit merge pe transport. Carpooling sau transport public?`,
            category: 'transport'
        });
    }
    
    return tips;
}

// Render smart tips
function renderSmartTips() {
    const container = $('smartTips');
    if (!container) return;
    
    const tips = generateSmartTips();
    
    if (tips.length === 0) {
        container.innerHTML = '<p class="no-tips">🎉 Felicitări! Finanțele tale arată bine!</p>';
        return;
    }
    
    container.innerHTML = tips.slice(0, 4).map(tip => `
        <div class="smart-tip" data-category="${tip.category}">
            <span class="tip-icon">${tip.icon}</span>
            <div class="tip-content">
                <span class="tip-title">${tip.title}</span>
                <span class="tip-message">${tip.message}</span>
            </div>
        </div>
    `).join('');
}

// Bills Calendar - Upcoming payments
function getUpcomingBills() {
    const bills = [];
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
    
    // From reminders
    state.reminders.filter(r => r.active).forEach(r => {
        bills.push({
            name: r.name,
            amount: r.amount,
            date: r.nextDate || null,
            type: 'reminder',
            icon: '⏰'
        });
    });
    
    // From recurring patterns in transactions
    const patterns = detectRecurringTransactions();
    patterns.forEach(p => {
        bills.push({
            name: p.description,
            amount: p.amount,
            date: p.nextExpected,
            type: 'predicted',
            icon: '🔄'
        });
    });
    
    return bills.sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, 10);
}

// Detect recurring transactions
function detectRecurringTransactions() {
    const patterns = [];
    const grouped = {};
    
    // Group by similar description and amount
    state.transactions.filter(t => t.type === 'expense').forEach(t => {
        const key = `${t.category}-${Math.round(t.amount / 10) * 10}`;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(t);
    });
    
    Object.entries(grouped).forEach(([key, trans]) => {
        if (trans.length >= 2) {
            // Check if monthly pattern (roughly 28-31 days apart)
            const dates = trans.map(t => new Date(t.date)).sort((a, b) => b - a);
            
            if (dates.length >= 2) {
                const diff = (dates[0] - dates[1]) / (1000 * 60 * 60 * 24);
                
                if (diff >= 25 && diff <= 35) {
                    const avgAmount = trans.reduce((s, t) => s + t.amount, 0) / trans.length;
                    const nextExpected = new Date(dates[0]);
                    nextExpected.setMonth(nextExpected.getMonth() + 1);
                    
                    const cat = findCategory('expense', trans[0].category);
                    
                    patterns.push({
                        category: trans[0].category,
                        description: cat?.name || trans[0].category,
                        amount: avgAmount,
                        frequency: 'monthly',
                        nextExpected: nextExpected.toISOString().split('T')[0],
                        occurrences: trans.length
                    });
                }
            }
        }
    });
    
    return patterns;
}

// Theme toggle
function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', state.theme);
    document.documentElement.setAttribute('data-theme', state.theme);
    toast(`Temă schimbată: ${state.theme === 'dark' ? 'Întunecată' : 'Luminoasă'}`, 'success');
}

// Check time-based achievements
function checkTimeAchievements() {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    
    if (hour < 7) {
        state.earlyBird = true;
    }
    if (hour >= 23) {
        state.nightOwl = true;
    }
    if (day === 0 || day === 6) {
        state.weekendWarrior = true;
    }
}

// Quick add transaction
function quickAddTransaction(type, category, amount, description = '') {
    const transData = {
        type,
        category,
        subcategory: '',
        amount: parseFloat(amount),
        date: new Date().toISOString().split('T')[0],
        note: description,
        createdAt: new Date().toISOString()
    };
    
    // Check time achievements
    checkTimeAchievements();
    
    return saveTransaction(transData);
}

// Investment Portfolio Tracker
function renderPortfolioSummary() {
    const investmentTrans = state.transactions.filter(t => 
        t.category === 'invest_expense' || 
        t.category === 'investments_income' ||
        t.category === 'crypto_income'
    );
    
    let totalInvested = 0;
    let totalReturns = 0;
    
    investmentTrans.forEach(t => {
        if (t.type === 'expense') totalInvested += t.amount;
        else totalReturns += t.amount;
    });
    
    return {
        totalInvested,
        totalReturns,
        netGain: totalReturns - 0, // Simplified - returns only
        investmentCount: investmentTrans.length
    };
}

// Spending heatmap data (for future visualization)
function getSpendingHeatmap() {
    const heatmap = {};
    
    state.transactions.filter(t => t.type === 'expense').forEach(t => {
        const date = t.date;
        if (!heatmap[date]) heatmap[date] = 0;
        heatmap[date] += t.amount;
    });
    
    return heatmap;
}

// Financial freedom calculator (FIRE)
function calculateFIRE() {
    const monthTrans = getMonthTransactions();
    let monthlyIncome = 0, monthlyExpense = 0;
    
    monthTrans.forEach(t => {
        if (t.type === 'income') monthlyIncome += t.amount;
        else if (t.type === 'expense') monthlyExpense += t.amount;
    });
    
    const annualExpense = monthlyExpense * 12;
    const fireNumber = annualExpense * 25; // 4% rule
    const currentNetWorth = state.netWorth;
    const monthlySavings = monthlyIncome - monthlyExpense;
    
    let yearsToFire = Infinity;
    if (monthlySavings > 0) {
        // Simplified calculation (doesn't account for compound growth)
        yearsToFire = (fireNumber - currentNetWorth) / (monthlySavings * 12);
    }
    
    return {
        fireNumber,
        currentNetWorth,
        progress: currentNetWorth / fireNumber * 100,
        yearsToFire: yearsToFire > 0 ? yearsToFire : 0,
        monthlySavings,
        annualExpense
    };
}

// Category spending breakdown for AI context
function getCategoryBreakdown(months = 6) {
    const now = new Date();
    const breakdown = {};
    
    for (let i = 0; i < months; i++) {
        const targetDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const monthKey = `${targetDate.getFullYear()}-${String(targetDate.getMonth() + 1).padStart(2, '0')}`;
        
        const monthTrans = state.transactions.filter(t => {
            const d = new Date(t.date);
            return d.getMonth() === targetDate.getMonth() && d.getFullYear() === targetDate.getFullYear();
        });
        
        breakdown[monthKey] = {};
        monthTrans.filter(t => t.type === 'expense').forEach(t => {
            const cat = findCategory('expense', t.category);
            const name = cat?.name || t.category;
            breakdown[monthKey][name] = (breakdown[monthKey][name] || 0) + t.amount;
        });
    }
    
    return breakdown;
}

// Export more detailed reports
function exportDetailedReport() {
    const report = {
        generatedAt: new Date().toISOString(),
        user: state.user?.displayName || 'User',
        summary: {
            totalTransactions: state.transactions.length,
            totalGoals: state.goals.length,
            totalAccounts: state.accounts.length,
            netWorth: state.netWorth,
            healthScore: state.healthScore,
            streak: state.streak
        },
        monthlyStats: [],
        categoryBreakdown: getCategoryBreakdown(12),
        yearComparison: getYearComparison(),
        fire: calculateFIRE(),
        tips: generateSmartTips()
    };
    
    // Add monthly stats for last 12 months
    const now = new Date();
    for (let i = 0; i < 12; i++) {
        const targetDate = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const monthTrans = state.transactions.filter(t => {
            const d = new Date(t.date);
            return d.getMonth() === targetDate.getMonth() && d.getFullYear() === targetDate.getFullYear();
        });
        
        let income = 0, expense = 0;
        monthTrans.forEach(t => {
            if (t.type === 'income') income += t.amount;
            else if (t.type === 'expense') expense += t.amount;
        });
        
        report.monthlyStats.push({
            month: months[targetDate.getMonth()],
            year: targetDate.getFullYear(),
            income,
            expense,
            savings: income - expense,
            savingsRate: income > 0 ? ((income - expense) / income * 100).toFixed(1) : 0
        });
    }
    
    const json = JSON.stringify(report, null, 2);
    downloadFile(json, `budget-pro-report-${new Date().toISOString().split('T')[0]}.json`, 'application/json');
    toast('Raport detaliat exportat!', 'success');
}

// Make new functions global
window.calculateSavingsTime = calculateSavingsTime;
window.getYearComparison = getYearComparison;
window.generateSmartTips = generateSmartTips;
window.renderSmartTips = renderSmartTips;
window.toggleTheme = toggleTheme;
window.quickAddTransaction = quickAddTransaction;
window.calculateFIRE = calculateFIRE;
window.exportDetailedReport = exportDetailedReport;
window.openUtilityModal = openUtilityModal;
window.saveUtility = saveUtility;
window.editUtility = editUtility;
window.confirmImport = confirmImport;
window.clearImportPreview = clearImportPreview;

// ========================================
// SEARCH & FILTER FUNCTIONS
// ========================================

let currentFilter = 'all';
let searchQuery = '';

// Search transactions
function searchTransactions() {
    const input = $('searchInput');
    searchQuery = input ? input.value.toLowerCase().trim() : '';
    renderFilteredTransactions();
}

// Filter transactions by type
function filterTransactions(type) {
    currentFilter = type;
    
    // Update filter buttons
    $$('.filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === type);
    });
    
    renderFilteredTransactions();
}

// Render filtered transactions
function renderFilteredTransactions() {
    const container = $('allTransactions');
    if (!container) return;
    
    let trans = getMonthTransactions();
    
    // Apply type filter
    if (currentFilter !== 'all') {
        trans = trans.filter(t => t.type === currentFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
        trans = trans.filter(t => {
            const cat = findCategory(t.type, t.category);
            const catName = cat?.name?.toLowerCase() || '';
            const subName = t.subcategory?.toLowerCase() || '';
            const noteName = t.note?.toLowerCase() || '';
            
            return catName.includes(searchQuery) || 
                   subName.includes(searchQuery) || 
                   noteName.includes(searchQuery) ||
                   t.amount.toString().includes(searchQuery);
        });
    }
    
    // Sort by date
    trans.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (trans.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">🔍</span>
                <p>${searchQuery ? 'Nicio tranzacție găsită' : 'Nicio tranzacție în această lună'}</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = trans.map(t => {
        const cat = findCategory(t.type, t.category);
        return `
            <div class="trans-item" onclick="editTransaction('${t.id}')">
                <div class="trans-icon" style="background: ${cat?.color || '#666'}20">
                    ${cat?.icon || '📦'}
                </div>
                <div class="trans-info">
                    <div class="trans-category">${cat?.name || t.category}</div>
                    <div class="trans-meta">${t.subcategory || ''} · ${formatDate(t.date)}</div>
                </div>
                <div class="trans-amount ${t.type}">
                    ${t.type === 'expense' ? '-' : '+'}${t.amount.toLocaleString()} ${state.currency}
                </div>
            </div>
        `;
    }).join('');
}

// Set transaction type in modal
function setTransType(type) {
    const typeInput = $('transType');
    if (typeInput) typeInput.value = type;
    
    // Update tabs
    $$('.type-tab[data-type]').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.type === type);
    });
    
    // Update categories
    populateCategories(type);
}

// Set debt type in modal
function setDebtType(type) {
    const typeInput = $('debtType');
    if (typeInput) typeInput.value = type;
    
    // Update tabs in debt modal
    $$('#debtModal .type-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.type === type);
    });
}

// Update analytics view
function updateAnalytics() {
    // Health score
    const health = calculateHealthScore();
    const healthEl = $('healthScore');
    const healthFill = $('healthFill');
    if (healthEl) healthEl.textContent = health + '/100';
    if (healthFill) healthFill.style.width = health + '%';
    
    // FIRE
    const fire = calculateFIRE();
    const fireProgressEl = $('fireProgress');
    const fireFill = $('fireFill');
    const fireTarget = $('fireTarget');
    const fireYears = $('fireYears');
    
    if (fireProgressEl) fireProgressEl.textContent = fire.progress.toFixed(1) + '%';
    if (fireFill) fireFill.style.width = Math.min(fire.progress, 100) + '%';
    if (fireTarget) fireTarget.textContent = fire.fireNumber.toLocaleString() + ' ' + state.currency;
    if (fireYears) {
        fireYears.textContent = fire.yearsToFire === Infinity || fire.yearsToFire > 100 
            ? '∞ ani' 
            : fire.yearsToFire.toFixed(1) + ' ani';
    }
    
    // Smart tips
    renderSmartTips();
    
    // Trend chart
    renderTrendChart();
}

// Render trend chart
function renderTrendChart() {
    const ctx = $('trendChart');
    if (!ctx) return;
    
    if (state.trendChart) {
        state.trendChart.destroy();
    }
    
    const monthsData = [];
    const now = new Date();
    
    for (let i = 5; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const trans = state.transactions.filter(t => {
            const td = new Date(t.date);
            return td.getMonth() === d.getMonth() && td.getFullYear() === d.getFullYear();
        });
        
        let income = 0, expense = 0;
        trans.forEach(t => {
            if (t.type === 'income') income += t.amount;
            else if (t.type === 'expense') expense += t.amount;
        });
        
        monthsData.push({
            month: months[d.getMonth()].substring(0, 3),
            income,
            expense
        });
    }
    
    state.trendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: monthsData.map(m => m.month),
            datasets: [{
                label: 'Venituri',
                data: monthsData.map(m => m.income),
                borderColor: '#34c759',
                backgroundColor: 'rgba(52, 199, 89, 0.1)',
                fill: true,
                tension: 0.4
            }, {
                label: 'Cheltuieli',
                data: monthsData.map(m => m.expense),
                borderColor: '#ff3b30',
                backgroundColor: 'rgba(255, 59, 48, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#636366' } },
                y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#636366' } }
            }
        }
    });
}

// Render smart tips
function renderSmartTips() {
    const container = $('smartTips');
    if (!container) return;
    
    const tips = generateSmartTips();
    
    if (tips.length === 0) {
        container.innerHTML = '<div class="tip-item"><span class="tip-icon">🎉</span><div class="tip-content"><span class="tip-title">Excelent!</span><span class="tip-text">Finanțele tale arată bine!</span></div></div>';
        return;
    }
    
    container.innerHTML = tips.slice(0, 4).map(tip => `
        <div class="tip-item">
            <span class="tip-icon">${tip.icon}</span>
            <div class="tip-content">
                <span class="tip-title">${tip.title}</span>
                <span class="tip-text">${tip.message}</span>
            </div>
        </div>
    `).join('');
}

// Run full AI analysis
async function runFullAiAnalysis() {
    openModal('aiModal');
    await askAI('Analizează în detaliu toate cheltuielile mele și dă-mi sfaturi personalizate pentru a economisi mai mult.');
}

// Make new functions global
window.searchTransactions = searchTransactions;
window.filterTransactions = filterTransactions;
window.setTransType = setTransType;
window.setDebtType = setDebtType;
window.updateAnalytics = updateAnalytics;
window.runFullAiAnalysis = runFullAiAnalysis;

// Alias for HTML onsubmit handlers
window.saveTransaction = handleTransactionSubmit;
window.saveGoal = handleGoalSubmit;
window.saveDebt = handleDebtSubmit;
window.saveReminder = handleReminderSubmit;
window.saveAccount = handleAccountSubmit;
window.saveBudget = handleBudgetSubmit;
window.saveUtility = saveUtility;
window.saveSplit = handleSplitSubmit;

// Navigation functions
window.navigateTo = navigateTo;
window.toggleMenu = toggleMenu;
window.closeMenu = closeMenu;
window.changeMonth = changeMonth;

// Modal functions
window.openModal = openModal;
window.closeModal = closeModal;
window.openTransModal = openTransModal;
window.openGoalModal = openGoalModal;
window.openDebtModal = openDebtModal;
window.openReminderModal = openReminderModal;
window.openAccountModal = openAccountModal;
window.openBudgetModal = openBudgetModal;
window.openUtilityModal = openUtilityModal;
window.openSplitModal = openSplitModal;

// Action functions
window.editTransaction = editTransaction;
window.deleteTransaction = deleteTransaction;
window.askAI = askAI;
window.logout = logout;
window.exportJSON = exportJSON;
window.exportCSV = exportCSV;
window.clearAllData = clearAllData;
window.saveNetWorth = saveNetWorth;
window.confirmImport = confirmImport;
window.clearImportPreview = clearImportPreview;
