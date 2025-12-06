// Budget Pro Ultra - Complete Application
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

// Gemini API Key (encoded)
const _gk = ['QUl6', 'YVN5', 'QnEt', 'MWFp', 'M1pD', 'ZUs1', 'aG11', 'VlZa', 'YnE3', 'ZUNX', 'VGVG', 'eHFv', 'cG5R'];
const getGK = () => atob(_gk.join(''));

// Categories with subcategories
const categories = {
    expense: [
        { id: 'food', name: 'Mâncare', icon: '🍔', subs: ['Supermarket', 'Restaurant', 'Livrare', 'Cafea', 'Fast-food', 'Piață', 'Patiserie'] },
        { id: 'transport', name: 'Transport', icon: '🚗', subs: ['Benzină', 'Motorină', 'Uber/Bolt', 'Transport public', 'Parcare', 'Service auto', 'Asigurare auto', 'Rovignetă', 'ITP'] },
        { id: 'housing', name: 'Locuință', icon: '🏠', subs: ['Chirie', 'Rată credit', 'Întreținere', 'Reparații', 'Mobilă', 'Curățenie', 'Decorațiuni', 'Grădinărit'] },
        { id: 'utilities', name: 'Utilități', icon: '💡', subs: ['Electricitate', 'Gaz', 'Apă', 'Internet', 'Telefon', 'TV/Streaming', 'Gunoi'] },
        { id: 'health', name: 'Sănătate', icon: '💊', subs: ['Medicamente', 'Doctor', 'Analize', 'Dentist', 'Ochelari/Lentile', 'Sală fitness', 'Suplimente', 'Tratamente'] },
        { id: 'shopping', name: 'Cumpărături', icon: '🛍️', subs: ['Haine', 'Încălțăminte', 'Cosmetice', 'Electronice', 'Articole casă', 'Cadouri', 'Accesorii', 'Bijuterii'] },
        { id: 'entertainment', name: 'Divertisment', icon: '🎬', subs: ['Cinema', 'Concerte', 'Jocuri', 'Hobby', 'Sport', 'Vacanțe', 'Excursii', 'Festivaluri', 'Bilete'] },
        { id: 'education', name: 'Educație', icon: '📚', subs: ['Cărți', 'Cursuri', 'Școală/Facultate', 'Meditații', 'Certificări', 'Conferințe'] },
        { id: 'subscriptions', name: 'Abonamente', icon: '📱', subs: ['Netflix', 'Spotify', 'YouTube', 'HBO', 'Disney+', 'Software', 'Reviste', 'Aplicații', 'Gaming'] },
        { id: 'family', name: 'Familie', icon: '👨‍👩‍👧', subs: ['Copii', 'Animale', 'Cadouri familie', 'Activități'] },
        { id: 'personal', name: 'Personal', icon: '💆', subs: ['Frizerie', 'Salon', 'Spa', 'Masaj', 'Îngrijire personală'] },
        { id: 'taxes', name: 'Taxe & Impozite', icon: '🏛️', subs: ['Impozit', 'CAS/CASS', 'Taxe locale', 'Amenzi', 'Notariat'] },
        { id: 'insurance', name: 'Asigurări', icon: '🛡️', subs: ['Viață', 'Sănătate', 'Locuință', 'Călătorie'] },
        { id: 'donations', name: 'Donații', icon: '❤️', subs: ['Caritate', 'Biserică', 'Crowdfunding'] },
        { id: 'other_expense', name: 'Altele', icon: '📦', subs: ['Diverse', 'Neprevăzute', 'Comisioane'] }
    ],
    income: [
        { id: 'salary', name: 'Salariu', icon: '💼', subs: ['Salariu net', 'Bonusuri', 'Prime', 'Ore suplimentare', 'Concediu plătit'] },
        { id: 'freelance', name: 'Freelance', icon: '💻', subs: ['Proiecte', 'Consultanță', 'Colaborări'] },
        { id: 'investments', name: 'Investiții', icon: '📈', subs: ['Dividende', 'Dobânzi', 'Crypto', 'Acțiuni', 'Fonduri'] },
        { id: 'rental', name: 'Chirii', icon: '🏢', subs: ['Apartament', 'Cameră', 'Spațiu comercial', 'Airbnb'] },
        { id: 'sales', name: 'Vânzări', icon: '🏷️', subs: ['Online', 'Fizic', 'Second-hand'] },
        { id: 'gifts_income', name: 'Cadouri', icon: '🎁', subs: ['Bani primiți', 'Moștenire'] },
        { id: 'refunds', name: 'Rambursări', icon: '↩️', subs: ['Retururi', 'Decontări', 'Restituiri'] },
        { id: 'pension', name: 'Pensie', icon: '👴', subs: ['Pensie stat', 'Pensie privată'] },
        { id: 'other_income', name: 'Alte venituri', icon: '💰', subs: ['Diverse', 'Câștiguri', 'Premii'] }
    ],
    correction: [
        { id: 'correction', name: 'Corecție sold', icon: '⚖️', subs: ['Ajustare numerar', 'Diferență bancă', 'Corecție eroare', 'Sincronizare sold'] }
    ]
};

// State
let state = {
    user: null,
    transactions: [],
    goals: [],
    reminders: [],
    debts: [],
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    currency: localStorage.getItem('currency') || 'RON',
    filter: 'all',
    period: 30,
    editingId: null,
    chart: null,
    trendChart: null
};

// Month names
const months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];

// DOM Elements
const $ = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initAuth();
    initEventListeners();
    setTimeout(() => $('splash').classList.add('hidden'), 1500);
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
    $('authScreen').classList.remove('hidden');
    $('appScreen').classList.add('hidden');
}

function showApp() {
    $('authScreen').classList.add('hidden');
    $('appScreen').classList.remove('hidden');
    updateProfile();
}

// Event Listeners
function initEventListeners() {
    // Auth tabs
    $$('.auth-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.auth-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const tabName = tab.dataset.tab;
            $$('.auth-form').forEach(f => f.classList.remove('active'));
            $(tabName + 'Form').classList.add('active');
        });
    });

    // Login form
    $('loginForm').addEventListener('submit', async e => {
        e.preventDefault();
        const email = $('loginEmail').value;
        const pass = $('loginPassword').value;
        try {
            await auth.signInWithEmailAndPassword(email, pass);
            toast('Autentificare reușită!', 'success');
        } catch (err) {
            toast(getAuthError(err.code), 'error');
        }
    });

    // Register form
    $('registerForm').addEventListener('submit', async e => {
        e.preventDefault();
        const name = $('registerName').value;
        const email = $('registerEmail').value;
        const pass = $('registerPassword').value;
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

    // Google auth
    $('googleAuth').addEventListener('click', async () => {
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
            switchView(view);
            $$('.nav-item').forEach(n => n.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Month navigation
    $('prevMonth').addEventListener('click', () => changeMonth(-1));
    $('nextMonth').addEventListener('click', () => changeMonth(1));

    // Search
    $('searchToggle').addEventListener('click', () => {
        $('searchBar').classList.toggle('hidden');
        if (!$('searchBar').classList.contains('hidden')) {
            $('searchInput').focus();
        }
    });
    $('searchClose').addEventListener('click', () => {
        $('searchBar').classList.add('hidden');
        $('searchInput').value = '';
        $('searchResults').classList.add('hidden');
    });
    $('searchInput').addEventListener('input', debounce(handleSearch, 300));

    // AI button
    $('aiBtn').addEventListener('click', () => openModal('aiModal'));
    $('aiSend').addEventListener('click', sendAiMessage);
    $('aiInput').addEventListener('keypress', e => {
        if (e.key === 'Enter') sendAiMessage();
    });

    // Transaction form
    $('transForm').addEventListener('submit', handleTransactionSubmit);
    $$('.type-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.type-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            $('transType').value = tab.dataset.type;
            populateCategories(tab.dataset.type);
        });
    });
    $('transCategory').addEventListener('change', populateSubcategories);
    $('transRecurring').addEventListener('change', e => {
        $('recurringOptions').classList.toggle('hidden', !e.target.checked);
    });

    // Goal form
    $('goalForm').addEventListener('submit', handleGoalSubmit);
    $$('.icon-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.icon-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            $('goalIcon').value = btn.dataset.icon;
        });
    });

    // Debt form
    $('debtForm').addEventListener('submit', handleDebtSubmit);
    $$('.debt-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.debt-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            $('debtType').value = tab.dataset.type;
            $('personLabel').textContent = tab.dataset.type === 'owe' ? 'Cui datorezi?' : 'Cine îți datorează?';
        });
    });

    // Reminder form
    $('reminderForm').addEventListener('submit', handleReminderSubmit);

    // Filters
    $$('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filter = btn.dataset.filter;
            renderAllTransactions();
        });
    });

    // Period selector
    $$('.period-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            $$('.period-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.period = parseInt(btn.dataset.period);
            updateAnalytics();
        });
    });

    // AI Analysis
    $('runAiAnalysis').addEventListener('click', runFullAiAnalysis);

    // Refresh insights
    $('refreshInsights').addEventListener('click', generateInsights);

    // Settings
    $('currencySelect').addEventListener('change', e => {
        state.currency = e.target.value;
        localStorage.setItem('currency', state.currency);
        renderAll();
    });
    $('currencySelect').value = state.currency;

    // Reminder category
    populateReminderCategories();
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

        renderAll();
        checkReminders();
    } catch (err) {
        console.error('Error loading data:', err);
    }
}

// Render all
function renderAll() {
    updateStats();
    renderRecentTransactions();
    renderGoalsPreview();
    renderDebtsPreview();
    renderRemindersPreview();
    updateChart();
    generateInsights();
}

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
    
    $('totalIncome').textContent = fmt(income);
    $('totalExpense').textContent = fmt(expense);
    $('totalBalance').textContent = fmt(balance);
    
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
    changeEl.textContent = (change >= 0 ? '+' : '') + change + '%';
    changeEl.className = 'balance-change ' + (change >= 0 ? 'positive' : 'negative');
    
    // Progress bar
    const spentPercent = income > 0 ? Math.min((expense / income) * 100, 100) : 0;
    $('spentProgress').style.width = spentPercent + '%';
    $('spentPercent').textContent = spentPercent.toFixed(0) + '% din venituri cheltuit';
    
    // Quick stats
    const today = new Date();
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const daysPassed = state.month === today.getMonth() && state.year === today.getFullYear() 
        ? today.getDate() : daysInMonth;
    const daysLeft = daysInMonth - daysPassed;
    
    const dailyAvg = daysPassed > 0 ? expense / daysPassed : 0;
    const prediction = dailyAvg * daysInMonth;
    const savingsRate = income > 0 ? ((income - expense) / income * 100) : 0;
    
    $('dailyAvg').textContent = fmt(dailyAvg);
    $('prediction').textContent = fmt(prediction);
    $('savingsRate').textContent = savingsRate.toFixed(0) + '%';
    $('daysLeft').textContent = daysLeft;
    
    // Update month display
    $('currentMonth').textContent = months[state.month] + ' ' + state.year;
    $('transMonth').textContent = months[state.month] + ' ' + state.year;
}

// Render recent transactions
function renderRecentTransactions() {
    const trans = getMonthTransactions().slice(0, 5);
    const container = $('recentTrans');
    
    if (trans.length === 0) {
        container.innerHTML = `<div class="empty-state"><span class="empty-icon">📝</span><p>Nicio tranzacție încă</p></div>`;
        return;
    }
    
    container.innerHTML = trans.map(t => transactionHTML(t)).join('');
}

// Render all transactions
function renderAllTransactions() {
    let trans = getMonthTransactions();
    
    if (state.filter !== 'all') {
        trans = trans.filter(t => t.type === state.filter);
    }
    
    const container = $('allTransactions');
    
    if (trans.length === 0) {
        container.innerHTML = `<div class="empty-state"><span class="empty-icon">📝</span><p>Nicio tranzacție în această lună</p></div>`;
        return;
    }
    
    container.innerHTML = trans.map(t => transactionHTML(t, true)).join('');
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
    
    return `
        <div class="trans-item" data-id="${t.id}">
            <div class="trans-icon">${icon}</div>
            <div class="trans-info">
                <div class="trans-category">${esc(catName)}</div>
                <div class="trans-details">${t.subcategory ? esc(t.subcategory) : ''}${t.description ? ' • ' + esc(t.description) : ''}</div>
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
    
    $('chartCenter').querySelector('.chart-total').textContent = fmt(total);
    
    // Legend
    $('chartLegend').innerHTML = labels.map((l, i) => `
        <div class="legend-item">
            <span class="legend-color" style="background:${colors[i]}"></span>
            <span>${l}</span>
        </div>
    `).join('');
    
    const ctx = $('expenseChart').getContext('2d');
    
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
    
    // Saving rate
    const savingRate = income > 0 ? ((income - expense) / income * 100) : 0;
    if (savingRate < 10) {
        insights.push({ icon: '⚠️', text: `Economisești doar ${savingRate.toFixed(0)}% din venituri. Țintește minim 20%!` });
    } else if (savingRate >= 20) {
        insights.push({ icon: '🎉', text: `Excelent! Economisești ${savingRate.toFixed(0)}% din venituri. Continuă așa!` });
    } else {
        insights.push({ icon: '💰', text: `Economisești ${savingRate.toFixed(0)}% din venituri. Mai ai puțin până la 20%!` });
    }
    
    // Top category
    const sorted = Object.entries(byCategory).sort((a, b) => b[1] - a[1]);
    if (sorted.length > 0) {
        const [topCat, topAmount] = sorted[0];
        const percent = expense > 0 ? (topAmount / expense * 100).toFixed(0) : 0;
        insights.push({ icon: '📊', text: `${topCat} reprezintă ${percent}% din cheltuieli (${fmt(topAmount)})` });
    }
    
    // Daily average
    const today = new Date();
    const daysPassed = state.month === today.getMonth() ? today.getDate() : 30;
    const dailyAvg = expense / daysPassed;
    insights.push({ icon: '📅', text: `Media zilnică de cheltuieli: ${fmt(dailyAvg)}` });
    
    // Prediction
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const predicted = dailyAvg * daysInMonth;
    if (predicted > income && income > 0) {
        insights.push({ icon: '🚨', text: `La acest ritm vei cheltui ${fmt(predicted)}, mai mult decât venitul de ${fmt(income)}!` });
    }
    
    container.innerHTML = insights.map(i => `
        <div class="insight-card">
            <span class="insight-icon">${i.icon}</span>
            <p>${i.text}</p>
        </div>
    `).join('');
}

// Goals preview
function renderGoalsPreview() {
    const active = state.goals.filter(g => g.saved < g.target).slice(0, 2);
    const container = $('goalsPreview');
    
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
    
    $('totalOwe').textContent = fmt(totalOwe);
    $('totalOwed').textContent = fmt(totalOwed);
}

// Reminders preview
function renderRemindersPreview() {
    const today = new Date();
    const upcoming = state.reminders
        .filter(r => new Date(r.date) >= today)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 2);
    
    const container = $('remindersPreview');
    
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
    $(view + 'View').classList.add('active');
    
    if (view === 'transactions') renderAllTransactions();
    if (view === 'analytics') updateAnalytics();
    if (view === 'goals') renderGoals();
    if (view === 'debts') renderDebts();
    if (view === 'reminders') renderReminders();
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
    $('transId').value = '';
    $('transForm').reset();
    $('transModalTitle').textContent = 'Adaugă tranzacție';
    $('transDate').value = new Date().toISOString().split('T')[0];
    $('recurringOptions').classList.add('hidden');
    
    $$('.type-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.type === type);
    });
    $('transType').value = type;
    populateCategories(type);
    
    openModal('transModal');
}

function openGoalModal() {
    state.editingId = null;
    $('goalId').value = '';
    $('goalForm').reset();
    $('goalModalTitle').textContent = 'Obiectiv nou';
    $$('.icon-btn').forEach(b => b.classList.toggle('active', b.dataset.icon === '🎯'));
    $('goalIcon').value = '🎯';
    openModal('goalModal');
}

function openDebtModal() {
    state.editingId = null;
    $('debtId').value = '';
    $('debtForm').reset();
    $('debtModalTitle').textContent = 'Adaugă datorie';
    $$('.debt-tab').forEach(t => t.classList.toggle('active', t.dataset.type === 'owe'));
    $('debtType').value = 'owe';
    $('personLabel').textContent = 'Cui datorezi?';
    openModal('debtModal');
}

function openReminderModal() {
    state.editingId = null;
    $('reminderId').value = '';
    $('reminderForm').reset();
    $('reminderModalTitle').textContent = 'Reminder nou';
    $('reminderDate').value = new Date().toISOString().split('T')[0];
    openModal('reminderModal');
}

function openModal(id) {
    $(id).classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(id) {
    $(id).classList.remove('active');
    document.body.style.overflow = '';
}

// Populate categories
function populateCategories(type) {
    const select = $('transCategory');
    const cats = categories[type] || [];
    select.innerHTML = cats.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
    populateSubcategories();
}

function populateSubcategories() {
    const type = $('transType').value;
    const catId = $('transCategory').value;
    const cat = categories[type]?.find(c => c.id === catId);
    const select = $('transSubcategory');
    
    if (cat && cat.subs) {
        select.innerHTML = '<option value="">Alege subcategorie...</option>' + 
            cat.subs.map(s => `<option value="${s}">${s}</option>`).join('');
    } else {
        select.innerHTML = '<option value="">-</option>';
    }
}

function populateReminderCategories() {
    const select = $('reminderCategory');
    const allCats = [...categories.expense, ...categories.income];
    select.innerHTML = '<option value="">Alege...</option>' + 
        allCats.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('');
}

// Handle transaction submit
async function handleTransactionSubmit(e) {
    e.preventDefault();
    
    const data = {
        type: $('transType').value,
        amount: parseFloat($('transAmount').value),
        category: $('transCategory').value,
        subcategory: $('transSubcategory').value,
        description: $('transDescription').value,
        date: $('transDate').value,
        recurring: $('transRecurring').checked,
        recurringFreq: $('transRecurring').checked ? $('recurringFreq').value : null,
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
    $('transId').value = id;
    $('transModalTitle').textContent = 'Editează tranzacție';
    
    $$('.type-tab').forEach(tab => {
        tab.classList.toggle('active', tab.dataset.type === t.type);
    });
    $('transType').value = t.type;
    populateCategories(t.type);
    
    $('transCategory').value = t.category;
    populateSubcategories();
    $('transSubcategory').value = t.subcategory || '';
    $('transAmount').value = Math.abs(t.amount);
    $('transDescription').value = t.description || '';
    $('transDate').value = t.date;
    $('transRecurring').checked = t.recurring || false;
    $('recurringOptions').classList.toggle('hidden', !t.recurring);
    if (t.recurring) $('recurringFreq').value = t.recurringFreq;
    
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
        saved: parseFloat($('goalSaved').value) || 0,
        deadline: $('goalDeadline').value || null,
        icon: $('goalIcon').value,
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
    
    $('activeGoals').textContent = active.length;
    $('completedGoals').textContent = completed.length;
    $('totalSaved').textContent = fmt(state.goals.reduce((a, g) => a + g.saved, 0));
    
    $('activeGoalsList').innerHTML = active.length ? active.map(g => goalFullHTML(g)).join('') : 
        '<div class="empty-state small"><p>Niciun obiectiv activ</p></div>';
    
    $('completedGoalsList').innerHTML = completed.length ? completed.map(g => goalFullHTML(g, true)).join('') : 
        '<div class="empty-state small"><p>Niciun obiectiv completat</p></div>';
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
    $('goalId').value = id;
    $('goalModalTitle').textContent = 'Editează obiectiv';
    $('goalName').value = g.name;
    $('goalTarget').value = g.target;
    $('goalSaved').value = g.saved;
    $('goalDeadline').value = g.deadline || '';
    $('goalIcon').value = g.icon || '🎯';
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
        reason: $('debtReason').value,
        deadline: $('debtDeadline').value || null,
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
        renderDebtsPreview();
        renderDebts();
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
    
    $('totalToPayDebts').textContent = fmt(totalOwe);
    $('totalToReceiveDebts').textContent = fmt(totalOwed);
    
    $('debtsOweList').innerHTML = owe.length ? owe.map(d => debtHTML(d)).join('') : 
        '<div class="empty-state small"><p>Nicio datorie de plătit</p></div>';
    
    $('debtsOwedList').innerHTML = owed.length ? owed.map(d => debtHTML(d)).join('') : 
        '<div class="empty-state small"><p>Nimeni nu-ți datorează</p></div>';
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
        renderDebtsPreview();
        renderDebts();
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// Edit debt
function editDebt(id) {
    const d = state.debts.find(debt => debt.id === id);
    if (!d) return;
    
    state.editingId = id;
    $('debtId').value = id;
    $('debtModalTitle').textContent = 'Editează datorie';
    
    $$('.debt-tab').forEach(t => t.classList.toggle('active', t.dataset.type === d.type));
    $('debtType').value = d.type;
    $('personLabel').textContent = d.type === 'owe' ? 'Cui datorezi?' : 'Cine îți datorează?';
    $('debtPerson').value = d.person;
    $('debtAmount').value = d.amount;
    $('debtReason').value = d.reason || '';
    $('debtDeadline').value = d.deadline || '';
    
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
    } catch (err) {
        toast('Eroare', 'error');
    }
}

// Handle reminder submit
async function handleReminderSubmit(e) {
    e.preventDefault();
    
    const data = {
        title: $('reminderTitle').value,
        amount: parseFloat($('reminderAmount').value) || null,
        date: $('reminderDate').value,
        repeat: $('reminderRepeat').value,
        category: $('reminderCategory').value || null,
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
    
    $('upcomingReminders').innerHTML = upcoming.length ? upcoming.map(r => reminderHTML(r)).join('') : 
        '<div class="empty-state small"><p>Niciun reminder viitor</p></div>';
    
    $('allReminders').innerHTML = state.reminders.length ? state.reminders.map(r => reminderHTML(r)).join('') : 
        '<div class="empty-state small"><p>Niciun reminder</p></div>';
}

// Edit reminder
function editReminder(id) {
    const r = state.reminders.find(rem => rem.id === id);
    if (!r) return;
    
    state.editingId = id;
    $('reminderId').value = id;
    $('reminderModalTitle').textContent = 'Editează reminder';
    $('reminderTitle').value = r.title;
    $('reminderAmount').value = r.amount || '';
    $('reminderDate').value = r.date;
    $('reminderRepeat').value = r.repeat;
    $('reminderCategory').value = r.category || '';
    
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
    if (due.length > 0) {
        badge.textContent = due.length;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
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
    
    $('analyticsIncome').textContent = fmt(income);
    $('analyticsExpense').textContent = fmt(expense);
    $('analyticsSavings').textContent = fmt(income - expense);
    
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
    const dates = Object.keys(byDate).sort();
    const incomeData = dates.map(d => byDate[d].income);
    const expenseData = dates.map(d => byDate[d].expense);
    
    const ctx = $('trendChart').getContext('2d');
    
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
        patterns.push({ icon: '📅', text: `${weekendPercent.toFixed(0)}% din cheltuieli sunt în weekend. Ai grijă la cheltuielile impulsive!` });
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
        patterns.push({ icon: '📊', text: `"${topCat}" este categoria ta principală de cheltuieli (${percent}%)` });
    }
    
    // Recurring patterns
    const recurring = {};
    trans.forEach(t => {
        const key = t.category + '-' + t.amount;
        recurring[key] = (recurring[key] || 0) + 1;
    });
    
    Object.entries(recurring).forEach(([key, count]) => {
        if (count >= 3) {
            const [catId, amount] = key.split('-');
            const cat = findCategory('expense', catId) || findCategory('income', catId);
            const name = cat ? cat.name : catId;
            patterns.push({ icon: '🔄', text: `Tranzacție recurentă detectată: ${name} - ${fmt(parseFloat(amount))} (de ${count} ori)` });
        }
    });
    
    container.innerHTML = patterns.length ? patterns.map(p => `
        <div class="pattern-item">
            <span class="pattern-icon">${p.icon}</span>
            <span class="pattern-text">${p.text}</span>
        </div>
    `).join('') : '<div class="empty-state small"><p>Niciun pattern detectat</p></div>';
}

function detectAnomalies(trans) {
    const container = $('anomalies');
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
                text: `Cheltuială neobișnuit de mare: ${name} - ${fmt(t.amount)} (${formatDate(t.date)})` 
            });
        }
    });
    
    // Spending increase
    const thisMonth = expenses.filter(t => {
        const d = new Date(t.date);
        return d.getMonth() === new Date().getMonth();
    }).reduce((a, t) => a + t.amount, 0);
    
    const lastMonth = expenses.filter(t => {
        const d = new Date(t.date);
        const now = new Date();
        return d.getMonth() === (now.getMonth() - 1 + 12) % 12;
    }).reduce((a, t) => a + t.amount, 0);
    
    if (lastMonth > 0 && thisMonth > lastMonth * 1.5) {
        const increase = ((thisMonth - lastMonth) / lastMonth * 100).toFixed(0);
        anomalies.push({ icon: '📈', text: `Cheltuielile au crescut cu ${increase}% față de luna trecută!` });
    }
    
    container.innerHTML = anomalies.length ? anomalies.map(a => `
        <div class="anomaly-item">
            <span class="anomaly-icon">${a.icon}</span>
            <span class="anomaly-text">${a.text}</span>
        </div>
    `).join('') : '<div class="empty-state small"><p>Nicio abatere detectată - bravo!</p></div>';
}

function renderCategoryBreakdown(byCategory, total) {
    const container = $('categoryBreakdown');
    const sorted = Object.entries(byCategory).sort((a, b) => b[1] - a[1]);
    
    if (sorted.length === 0) {
        container.innerHTML = '<div class="empty-state small"><p>Nicio categorie de afișat</p></div>';
        return;
    }
    
    container.innerHTML = sorted.map(([name, amount]) => {
        const percent = total > 0 ? (amount / total * 100) : 0;
        const cat = categories.expense.find(c => c.name === name);
        const icon = cat ? cat.icon : '📦';
        
        return `
            <div class="cat-item">
                <div class="cat-header">
                    <span class="cat-name">${icon} ${name}</span>
                    <span class="cat-amount">${fmt(amount)}</span>
                </div>
                <div class="cat-bar"><div class="cat-fill" style="width:${percent}%"></div></div>
                <div class="cat-percent">${percent.toFixed(1)}%</div>
            </div>
        `;
    }).join('');
}

// AI Functions
async function sendAiMessage() {
    const input = $('aiInput');
    const message = input.value.trim();
    if (!message) return;
    
    input.value = '';
    addAiMessage(message, 'user');
    addAiTyping();
    
    try {
        const response = await callGemini(message);
        removeAiTyping();
        addAiMessage(response, 'assistant');
    } catch (err) {
        removeAiTyping();
        addAiMessage('Scuze, am întâmpinat o eroare. Încearcă din nou.', 'assistant');
    }
}

function askAI(question) {
    $('aiInput').value = question;
    sendAiMessage();
}

function addAiMessage(text, role) {
    const container = $('aiMessages');
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

async function callGemini(message) {
    const context = buildFinancialContext();
    const prompt = `Ești un asistent financiar personal expert. Analizează datele financiare ale utilizatorului și răspunde la întrebări într-un mod prietenos și util.

CONTEXT FINANCIAR AL UTILIZATORULUI:
${context}

ÎNTREBAREA UTILIZATORULUI: ${message}

Răspunde în română, concis dar complet. Folosește emoji-uri pentru claritate. Dacă dai sfaturi, fii specific și actionabil. Poți folosi <strong> pentru text important.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${getGK()}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.7, maxOutputTokens: 1000 }
        })
    });

    const data = await response.json();
    if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
        return data.candidates[0].content.parts[0].text.replace(/\n/g, '<br>');
    }
    throw new Error('Invalid response');
}

function buildFinancialContext() {
    const monthTrans = getMonthTransactions();
    let income = 0, expense = 0;
    const byCategory = {};
    
    monthTrans.forEach(t => {
        if (t.type === 'income') income += t.amount;
        else if (t.type === 'expense') {
            expense += t.amount;
            const cat = findCategory('expense', t.category);
            const name = cat ? cat.name : t.category;
            byCategory[name] = (byCategory[name] || 0) + t.amount;
        }
    });
    
    const sortedCats = Object.entries(byCategory).sort((a, b) => b[1] - a[1]).slice(0, 5);
    const today = new Date();
    const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
    const daysPassed = state.month === today.getMonth() ? today.getDate() : daysInMonth;
    
    let context = `Luna curentă: ${months[state.month]} ${state.year}
Venituri totale: ${income} ${state.currency}
Cheltuieli totale: ${expense} ${state.currency}
Balanță: ${income - expense} ${state.currency}
Rata de economisire: ${income > 0 ? ((income - expense) / income * 100).toFixed(1) : 0}%
Media zilnică cheltuieli: ${(expense / daysPassed).toFixed(0)} ${state.currency}
Predicție sfârșit de lună: ${(expense / daysPassed * daysInMonth).toFixed(0)} ${state.currency}

Top 5 categorii de cheltuieli:
${sortedCats.map(([name, amount]) => `- ${name}: ${amount} ${state.currency}`).join('\n')}

Număr total tranzacții luna aceasta: ${monthTrans.length}`;

    if (state.goals.length > 0) {
        context += `\n\nObiective financiare:
${state.goals.map(g => `- ${g.name}: ${g.saved}/${g.target} ${state.currency} (${(g.saved/g.target*100).toFixed(0)}%)`).join('\n')}`;
    }
    
    if (state.debts.length > 0) {
        const owe = state.debts.filter(d => d.type === 'owe').reduce((a, d) => a + d.amount, 0);
        const owed = state.debts.filter(d => d.type === 'owed').reduce((a, d) => a + d.amount, 0);
        context += `\n\nDatorii:
- De plătit: ${owe} ${state.currency}
- De recuperat: ${owed} ${state.currency}`;
    }
    
    return context;
}

async function runFullAiAnalysis() {
    const container = $('aiAnalysis');
    container.innerHTML = '<p class="ai-placeholder">Se analizează datele...</p>';
    
    try {
        const context = buildFinancialContext();
        const prompt = `Ești un analist financiar expert. Analizează datele financiare de mai jos și oferă:
1. O evaluare generală a sănătății financiare (scor 1-10)
2. 3 puncte forte
3. 3 arii de îmbunătățit
4. 3 sfaturi concrete și acționabile
5. Predicții pentru luna viitoare

CONTEXT:
${context}

Răspunde în română, structurat și concis. Folosește emoji-uri pentru claritate.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${getGK()}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { temperature: 0.7, maxOutputTokens: 1500 }
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
            container.innerHTML = `<div class="ai-analysis-content">${data.candidates[0].content.parts[0].text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</div>`;
        } else {
            throw new Error('Invalid response');
        }
    } catch (err) {
        container.innerHTML = '<p class="ai-placeholder">Eroare la analiză. Încearcă din nou.</p>';
    }
}

// Search
function handleSearch() {
    const query = $('searchInput').value.toLowerCase().trim();
    const resultsContainer = $('searchResults');
    
    if (!query) {
        resultsContainer.classList.add('hidden');
        return;
    }
    
    const results = state.transactions.filter(t => {
        const cat = findCategory(t.type, t.category);
        const catName = cat ? cat.name.toLowerCase() : t.category.toLowerCase();
        return catName.includes(query) || 
               (t.subcategory && t.subcategory.toLowerCase().includes(query)) ||
               (t.description && t.description.toLowerCase().includes(query));
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
    $('searchBar').classList.add('hidden');
    $('searchInput').value = '';
    $('searchResults').classList.add('hidden');
    
    switchView('transactions');
    $$('.nav-item').forEach(n => n.classList.remove('active'));
    document.querySelector('.nav-item[data-view="transactions"]').classList.add('active');
    
    // Find and highlight the transaction
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
    const email = state.user.email;
    const initial = name.charAt(0).toUpperCase();
    
    $('profileAvatar').textContent = initial;
    $('profileName').textContent = name;
    $('profileEmail').textContent = email;
    
    $('totalTransCount').textContent = state.transactions.length;
    
    const createdAt = state.user.metadata?.creationTime;
    if (createdAt) {
        const date = new Date(createdAt);
        $('memberSince').textContent = months[date.getMonth()].slice(0, 3) + ' ' + date.getFullYear();
    }
    
    // Calculate streak (simplified)
    $('streakDays').textContent = calculateStreak();
}

function calculateStreak() {
    if (state.transactions.length === 0) return 0;
    
    const dates = [...new Set(state.transactions.map(t => t.date))].sort().reverse();
    let streak = 0;
    let currentDate = new Date();
    
    for (const dateStr of dates) {
        const date = new Date(dateStr);
        const diffDays = Math.floor((currentDate - date) / (1000 * 60 * 60 * 24));
        
        if (diffDays <= 1) {
            streak++;
            currentDate = date;
        } else {
            break;
        }
    }
    
    return streak;
}

// Export functions
function exportJSON() {
    const data = {
        transactions: state.transactions,
        goals: state.goals,
        reminders: state.reminders,
        debts: state.debts,
        exportedAt: new Date().toISOString()
    };
    
    downloadFile(JSON.stringify(data, null, 2), 'budget-pro-export.json', 'application/json');
    toast('Export JSON generat!', 'success');
}

function exportCSV() {
    const headers = ['Data', 'Tip', 'Categorie', 'Subcategorie', 'Sumă', 'Descriere'];
    const rows = state.transactions.map(t => {
        const cat = findCategory(t.type, t.category);
        return [
            t.date,
            t.type,
            cat ? cat.name : t.category,
            t.subcategory || '',
            t.amount,
            t.description || ''
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

// Clear all data
async function clearAllData() {
    if (!confirm('Ești sigur că vrei să ștergi TOATE datele? Această acțiune este ireversibilă!')) return;
    if (!confirm('Confirmă din nou: ȘTERGE toate datele?')) return;
    
    try {
        const uid = state.user.uid;
        const batch = db.batch();
        
        const collections = ['transactions', 'goals', 'reminders', 'debts'];
        for (const col of collections) {
            const snap = await db.collection('users').doc(uid).collection(col).get();
            snap.docs.forEach(doc => batch.delete(doc.ref));
        }
        
        await batch.commit();
        
        state.transactions = [];
        state.goals = [];
        state.reminders = [];
        state.debts = [];
        
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

// Make functions global
window.openTransModal = openTransModal;
window.openGoalModal = openGoalModal;
window.openDebtModal = openDebtModal;
window.openReminderModal = openReminderModal;
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
window.askAI = askAI;
window.exportJSON = exportJSON;
window.exportCSV = exportCSV;
window.clearAllData = clearAllData;
window.logout = logout;
window.goToTransaction = goToTransaction;
