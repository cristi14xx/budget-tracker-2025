# Budget Pro Ultra 💎

Aplicație premium pentru managementul finanțelor personale cu AI Gemini integrat.

## 🚀 Funcționalități

### Core
- ✅ **Dashboard complet** - Balanță, venituri, cheltuieli, predicții
- ✅ **50+ categorii** cu subcategorii detaliate
- ✅ **Tranzacții** - Adaugă, editează, șterge, filtrează
- ✅ **Corecție balanță** - Ajustează diferențe numerar/bancă
- ✅ **Căutare** - Găsește instant orice tranzacție

### Smart Features
- ✅ **AI Gemini** - Chat nelimitat, analiză, predicții, sfaturi
- ✅ **Conturi multiple** - Tracking carduri și conturi bancare
- ✅ **Bugete pe categorii** - Cu alerte când depășești limita
- ✅ **Obiective** - Cu progress, deadline, iconuri
- ✅ **Datorii** - De dat și de recuperat
- ✅ **Remindere** - Plăți recurente
- ✅ **Streak** - Zile consecutive de tracking
- ✅ **Net Worth** - Patrimoniu total
- ✅ **Tags** - Etichetează tranzacțiile
- ✅ **Export** - JSON și CSV

### Analytics
- ✅ **Trenduri** - Chart-uri interactive
- ✅ **Pattern-uri** - Detectare automată
- ✅ **Abateri** - Cheltuieli neobișnuite
- ✅ **Rapoarte AI** - Analiză completă

## 📦 Deploy pe Vercel (Recomandat)

### Pasul 1: Pregătire
1. Creează cont pe [Vercel](https://vercel.com) (gratuit)
2. Instalează Vercel CLI (opțional): `npm i -g vercel`

### Pasul 2: Deploy
**Opțiunea A - GitHub (Recomandat):**
1. Push codul în repository-ul tău GitHub
2. Mergi la [vercel.com/new](https://vercel.com/new)
3. Import repository-ul
4. Click **Deploy**

**Opțiunea B - CLI:**
```bash
cd budget-pro-ultra
vercel
```

### Pasul 3: Configurare API Key
1. În Vercel Dashboard → Project → Settings → Environment Variables
2. Adaugă:
   - **Name:** `GEMINI_API_KEY`
   - **Value:** `AIzaSyBq-1ai3ZCeK5hmuVVZbq7eC_TeFxqopnQ` (sau cheia ta)
3. Click **Save**
4. **Redeploy** proiectul (Settings → Deployments → Redeploy)

### Pasul 4: Testare
1. Deschide URL-ul Vercel (ex: `budget-pro-ultra.vercel.app`)
2. Loghează-te
3. Testează AI-ul - ar trebui să funcționeze!

## 🔑 Obține propria cheie Gemini (Gratis)

1. Mergi la [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
2. Loghează-te cu Google
3. Click **Create API Key**
4. Copiază cheia
5. Adaug-o în Vercel Environment Variables

## 📁 Structura proiectului

```
budget-pro-ultra/
├── api/
│   └── gemini.js      # Serverless function pentru Gemini API
├── index.html         # Aplicația principală
├── styles.css         # Stiluri premium OLED
├── app.js             # Logica aplicației
├── manifest.json      # PWA manifest
├── vercel.json        # Configurare Vercel
└── package.json       # Dependencies
```

## 🛡️ Securitate

- Cheia API Gemini este stocată securizat în Vercel Environment Variables
- Nu este expusă în cod sau în browser
- API calls se fac prin serverless function

## 💡 Fallback

Dacă Vercel API nu funcționează, aplicația va folosi automat direct API-ul Gemini cu cheia din cod. Pentru producție, recomandăm să folosești Vercel.

## 🎨 Design

- **OLED Black** - Pure black (#000000) pentru economie baterie
- **Gradient Accents** - Violet/Cyan premium
- **Glassmorphism** - Efecte moderne
- **Inter Font** - Typography profesională
- **Responsive** - Perfect pe mobil și desktop

## 📱 PWA

Aplicația poate fi instalată pe telefon:
1. Deschide în Safari/Chrome
2. "Add to Home Screen"
3. Folosește ca aplicație nativă

## 🔧 Dezvoltare locală

```bash
# Instalează Vercel CLI
npm i -g vercel

# Rulează local
vercel dev

# Deschide http://localhost:3000
```

## 📄 License

MIT License - Free to use and modify.

---

Made with 💜 by Budget Pro Team
