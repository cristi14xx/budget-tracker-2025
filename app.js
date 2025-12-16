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

// Categories
const categories = {
    expense: [
        { id: 'food', name: 'Mâncare', icon: '🍔', color: '#ef4444', subs: ['Supermarket', 'Restaurant', 'Livrare', 'Cafea', 'Fast-food'] },
        { id: 'transport', name: 'Transport', icon: '🚗', color: '#f59e0b', subs: ['Benzină', 'Uber/Bolt', 'Transport public', 'Parcare', 'Service'] },
        { id: 'housing', name: 'Locuință', icon: '🏠', color: '#8b5cf6', subs: ['Chirie', 'Întreținere', 'Reparații', 'Mobilă'] },
        { id: 'utilities', name: 'Utilități', icon: '💡', color: '#3b82f6', subs: ['Electricitate', 'Gaz', 'Apă', 'Internet', 'Telefon'] },
        { id: 'health', name: 'Sănătate', icon: '💊', color: '#10b981', subs: ['Medicamente', 'Doctor', 'Analize', 'Dentist'] },
        { id: 'shopping', name: 'Cumpărături', icon: '🛍️', color: '#ec4899', subs: ['Haine', 'Electronice', 'Cosmetice', 'Cadouri'] },
        { id: 'entertainment', name: 'Divertisment', icon: '🎬', color: '#06b6d4', subs: ['Cinema', 'Concerte', 'Jocuri', 'Sport'] },
        { id: 'subscriptions', name: 'Abonamente', icon: '📱', color: '#a855f7', subs: ['Netflix', 'Spotify', 'YouTube', 'Software'] },
        { id: 'education', name: 'Educație', icon: '📚', color: '#84cc16', subs: ['Cărți', 'Cursuri', 'Școală'] },
        { id: 'other', name: 'Altele', icon: '📦', color: '#78716c', subs: ['Diverse', 'Neprevăzute'] }
    ],
    income: [
        { id: 'salary', name: 'Salariu', icon: '💼', color: '#10b981', subs: ['Salariu net', 'Bonusuri', 'Prime'] },
        { id: 'freelance', name: 'Freelance', icon: '💻', color: '#06b6d4', subs: ['Proiecte', 'Consultanță'] },
        { id: 'investments', name: 'Investiții', icon: '📈', color: '#22c55e', subs: ['Dividende', 'Dobânzi', 'Profit'] },
        { id: 'rental', name: 'Chirii', icon: '🏢', color: '#0ea5e9', subs: ['Chirie apartament', 'Airbnb'] },
        { id: 'gifts', name: 'Cadouri', icon: '🎁', color: '#ec4899', subs: ['Bani primiți', 'Moștenire'] },
        { id: 'refunds', name: 'Rambursări', icon: '↩️', color: '#3b82f6', subs: ['Retururi', 'Cashback'] },
        { id: 'other', name: 'Alte venituri', icon: '💰', color: '#84cc16', subs: ['Diverse'] }
    ]
};

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
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    currency: 'RON',
    netWorth: 0,
    streak: 0,
    savingsRate: 0,
    editingId: null,
    trendChart: null,
    filter: 'all',
    search: ''
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
        const [txSnap, goalsSnap, debtsSnap, accSnap, budSnap, remSnap, utilSnap, userDoc] = await Promise.all([
            db.collection('users').doc(uid).collection('transactions').orderBy('date', 'desc').get(),
            db.collection('users').doc(uid).collection('goals').get(),
            db.collection('users').doc(uid).collection('debts').get(),
            db.collection('users').doc(uid).collection('accounts').get(),
            db.collection('users').doc(uid).collection('budgets').get(),
            db.collection('users').doc(uid).collection('reminders').get(),
            db.collection('users').doc(uid).collection('utilities').get(),
            db.collection('users').doc(uid).get()
        ]);
        
        state.transactions = txSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.goals = goalsSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.debts = debtsSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.accounts = accSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.budgets = budSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.reminders = remSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        state.utilities = utilSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        
        if (userDoc.exists) {
            const data = userDoc.data();
            state.achievements = data.achievements || [];
            state.shownAchievements = data.shownAchievements || [...state.achievements];
            state.netWorth = data.netWorth || 0;
            state.currency = data.currency || 'RON';
        }
        
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
    
    const titles = { home: 'Budget Pro', transactions: 'Tranzacții', analytics: 'Analiză', budgets: 'Bugete', menu: 'Cont' };
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
    const cats = categories[type] || [];
    sel.innerHTML = cats.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
    loadSubcats();
}

function loadSubcats() {
    const type = $('txType')?.value;
    const catId = $('txCat')?.value;
    const sel = $('txSubcat');
    if (!sel) return;
    const cat = categories[type]?.find(c => c.id === catId);
    sel.innerHTML = '<option value="">-- Selectează --</option>' + (cat?.subs || []).map(s => `<option value="${s}">${s}</option>`).join('');
}

async function saveTx(e) {
    e.preventDefault();
    const data = {
        type: $('txType').value,
        amount: parseFloat($('txAmount').value),
        category: $('txCat').value,
        subcategory: $('txSubcat')?.value || '',
        date: $('txDate').value,
        note: $('txNote')?.value || '',
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
    chat.innerHTML += `<div class="ai-msg" id="aiTyping"><div class="ai-pic">🤖</div><div class="ai-bubble">Se gândește...</div></div>`;
    chat.scrollTop = chat.scrollHeight;
    
    checkAchievement('ai_user');
    
    try {
        // Build context
        const trans = getMonthTx();
        const income = trans.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
        const expense = trans.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
        
        const context = `Date financiare: Venituri luna curentă: ${income} ${state.currency}, Cheltuieli: ${expense} ${state.currency}, Balanță: ${income - expense} ${state.currency}, Rată economisire: ${state.savingsRate.toFixed(1)}%, Streak: ${state.streak} zile.`;
        
        const response = await fetch('/api/gemini', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                prompt: `Context: ${context}\n\nÎntrebare: ${msg}\n\nRăspunde scurt și util în română, maxim 3 propoziții.`
            })
        });
        
        const data = await response.json();
        const reply = data.response || 'Nu am putut genera un răspuns.';
        
        // Remove typing, add response
        $('aiTyping')?.remove();
        chat.innerHTML += `<div class="ai-msg"><div class="ai-pic">🤖</div><div class="ai-bubble">${reply}</div></div>`;
    } catch (err) {
        $('aiTyping')?.remove();
        // Fallback response
        const fallback = generateLocalResponse(msg);
        chat.innerHTML += `<div class="ai-msg"><div class="ai-pic">🤖</div><div class="ai-bubble">${fallback}</div></div>`;
    }
    
    chat.scrollTop = chat.scrollHeight;
}

function generateLocalResponse(q) {
    const trans = getMonthTx();
    const income = trans.filter(t => t.type === 'income').reduce((s, t) => s + t.amount, 0);
    const expense = trans.filter(t => t.type === 'expense').reduce((s, t) => s + t.amount, 0);
    const balance = income - expense;
    
    if (q.toLowerCase().includes('anali')) {
        return `Luna asta ai cheltuit ${fmt(expense)} din ${fmt(income)} venituri. ${balance >= 0 ? 'Ești pe plus! 👍' : 'Atenție, ești pe minus!'}`;
    }
    if (q.toLowerCase().includes('economi') || q.toLowerCase().includes('sfat')) {
        if (state.savingsRate < 10) return 'Încearcă să reduci cheltuielile cu mâncare și divertisment. Setează un buget pentru fiecare categorie!';
        return 'Economisești bine! Continuă așa și gândește-te la investiții pe termen lung.';
    }
    if (q.toLowerCase().includes('predic')) {
        const avgDaily = expense / new Date().getDate();
        const predicted = avgDaily * new Date(state.year, state.month + 1, 0).getDate();
        return `La ritmul actual, vei cheltui ~${fmt(predicted)} luna asta.`;
    }
    return `Ai venituri de ${fmt(income)} și cheltuieli de ${fmt(expense)}. Balanța: ${fmt(balance)}.`;
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
    return categories[type]?.find(c => c.id === id);
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
