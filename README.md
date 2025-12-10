# Budget Pro Ultra 💎

Aplicație premium pentru managementul finanțelor personale cu AI Gemini integrat.

## 🚀 Deploy pe Vercel (5 minute)

### Pasul 1: Pregătire
```bash
# Clonează sau descarcă acest folder
# Sau actualizează repository-ul existent:
cd ~/Downloads/budget-tracker-2025
rm -rf *
unzip ~/Downloads/budget-pro-vercel.zip -d .
git add -A
git commit -m "Budget Pro Ultra with Gemini AI"
git push origin main
```

### Pasul 2: Deploy pe Vercel
1. Mergi la [vercel.com/new](https://vercel.com/new)
2. Conectează-ți contul GitHub
3. Importă repository-ul `budget-tracker-2025`
4. Click **Deploy** și așteaptă ~1 minut

### Pasul 3: Setează API Key (OBLIGATORIU!)
1. În Vercel Dashboard → **Settings** → **Environment Variables**
2. Adaugă variabila:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** `[CHEIA TA NOUĂ DE LA aistudio.google.com/apikey]`
3. Click **Save**
4. Mergi la **Deployments** → Click pe deployment → **⋮** → **Redeploy**

### Pasul 4: Testează
1. Deschide URL-ul Vercel (ex: `budget-tracker-2025.vercel.app`)
2. Loghează-te
3. Apasă butonul AI (✨) și întreabă ceva!

## 🧪 Testare API

Deschide `test-api.html` în browser pentru a testa dacă API-ul funcționează:
1. Testează Direct API - verifică dacă cheia Gemini e validă
2. Testează Vercel API - verifică dacă serverless function merge

## 🔑 Obține propria cheie Gemini (Gratis)

1. Mergi la [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Loghează-te cu Google
3. Click **Create API Key**
4. Copiază cheia
5. Adaug-o în Vercel Environment Variables

## 📁 Structura fișierelor

```
budget-pro-ultra/
├── api/
│   └── gemini.js      # Serverless function (Vercel)
├── index.html         # Aplicația principală
├── styles.css         # Stiluri OLED premium
├── app.js             # Logica (Firebase + Gemini)
├── sw.js              # Service Worker (PWA)
├── manifest.json      # PWA manifest
├── vercel.json        # Configurare Vercel
├── test-api.html      # Pagină de test API
└── README.md          # Acest fișier
```

## 🤖 Cum funcționează AI-ul

1. **Vercel API (prioritar)** - Cheia e securizată pe server
2. **Direct API (fallback)** - Dacă Vercel nu merge, folosește cheia din cod

Fluxul:
```
User → Întrebare → buildFinancialContext() → Gemini API → Răspuns
```

AI-ul primește automat:
- Venituri/cheltuieli/balanța
- Top categorii de cheltuieli
- Obiective financiare
- Datorii
- Bugete setate
- Streak-ul tău

## 💡 Troubleshooting

### AI-ul nu răspunde?
1. Deschide Console (F12) și caută erori
2. Verifică dacă GEMINI_API_KEY e setat în Vercel
3. Testează cu `test-api.html`
4. Verifică că ai făcut **Redeploy** după ce ai adăugat variabila

### Eroare "API key not configured"?
- Nu ai setat GEMINI_API_KEY în Vercel Environment Variables
- Sau nu ai făcut Redeploy

### Eroare "API key not valid"?
- Cheia API a expirat sau e invalidă
- Generează una nouă la [aistudio.google.com/apikey](https://aistudio.google.com/apikey)

## 🎨 Features

- ✅ AI Gemini 2.0 Flash integrat
- ✅ PWA (instalabil pe telefon)
- ✅ 50+ categorii cu subcategorii
- ✅ Obiective financiare
- ✅ Bugete pe categorii cu alerte
- ✅ Datorii (de dat/primit)
- ✅ Conturi multiple
- ✅ Analytics și trenduri
- ✅ Health Score financiar
- ✅ Voice input
- ✅ Split bills
- ✅ Export JSON/CSV
- ✅ Tema OLED premium

---

Made with 💜 using Gemini 2.5 Flash
