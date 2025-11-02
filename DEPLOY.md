# Deploy Instructions

## Render (Recomandat - Plan gratuit complet)

### Pași:

1. **Creează cont pe Render:**
   - Mergi la https://render.com
   - Sign up cu GitHub

2. **Deploy:**
   - Click "New +" → "Web Service"
   - Connect repository-ul tău GitHub
   - Selectează branch-ul (de obicei `main`)

3. **Configurare:**
   - **Name**: `autoai-app` (sau orice nume vrei)
   - **Environment**: `Node`
   - **Region**: Alege cel mai apropiat (ex: `Frankfurt` pentru România)
   - **Branch**: `main` (sau branch-ul tău)
   - **Root Directory**: `.` (lasă gol pentru root)
   - **Build Command**: `npm install && npm run build && npm run build:server`
   - **Start Command**: `npm run start:server`

4. **Variabile de mediu:**
   - În secțiunea "Environment Variables" (în același ecran de configurare), click "Add Environment Variable"
   - Adaugă următoarele variabile:
     ```
     NODE_ENV = production
     PORT = 10000
     SMTP_HOST = smtp.gmail.com
     SMTP_PORT = 587
     SMTP_SECURE = false
     SMTP_USER = autoai831@gmail.com
     SMTP_PASS = your-app-password (App Password de la Google)
     SMTP_FROM = autoai831@gmail.com
     ```
   - **Important:** `SMTP_PASS` trebuie să fie App Password (vezi `SETUP_EMAIL.md`)

5. **Plan:**
   - Selectează **Free** plan (gratuit, cu cold starts)

6. **Deploy:**
   - Click "Create Web Service"
   - Render va face build și deploy automat
   - După deploy, vei primi un URL (ex: `autoai-app.onrender.com`)

### Notă despre Free Plan:
- Aplicația se oprește după 15 minute de inactivitate
- Se pornește automat când primește un request
- Cold start poate dura 30-60 secunde (prima cerere după oprire)

### Configurare automată:
Am creat `render.yaml` în root-ul proiectului pentru configurare automată. Render va detecta acest fișier și va folosi configurațiile.

---

## Railway (Alternativă)

### Pași:

1. **Creează cont pe Railway:**
   - Mergi la https://railway.app
   - Sign up cu GitHub

2. **Deploy:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Alege repository-ul tău

3. **Configurare:**
   - Railway va detecta automat Node.js
   - Setează **Start Command**: `npm run start:server`
   - Setează **Root Directory**: `.` (root-ul proiectului)

4. **Variabile de mediu:**
   - În Railway, mergi la tab-ul "Variables"
   - Adaugă variabilele din `.env`:
     ```
     NODE_ENV=production
     PORT=5000 (sau lasă-l gol, Railway setează automat)
     SMTP_HOST=smtp.gmail.com
     SMTP_PORT=587
     SMTP_SECURE=false
     SMTP_USER=autoai831@gmail.com
     SMTP_PASS=your-app-password
     SMTP_FROM=autoai831@gmail.com
     ```

5. **Deploy:**
   - Railway va face build și deploy automat
   - După deploy, vei primi un URL (ex: `your-app.railway.app`)

### Build Scripts:
Railway va rula automat:
- `npm install`
- `npm run build` (pentru client)
- `npm run build:server` (pentru server)
- `npm run start:server` (pentru a porni aplicația)

---

## Render (Alternativă similară cu Railway)

### Pași:

1. **Creează cont pe Render:**
   - Mergi la https://render.com
   - Sign up cu GitHub

2. **Deploy:**
   - Click "New +" → "Web Service"
   - Connect repository-ul tău

3. **Configurare:**
   - **Build Command**: `npm install && npm run build && npm run build:server`
   - **Start Command**: `npm run start:server`
   - **Environment**: `Node`

4. **Variabile de mediu:**
   - În "Environment" tab, adaugă aceleași variabile ca la Railway

5. **Deploy:**
   - Click "Create Web Service"
   - Render va face build și deploy automat

---

## Vercel (Dacă vrei optimizare maximă)

**Notă:** Vercel e optimizat pentru frontend + serverless functions. Pentru a folosi Vercel cu acest proiect, ar trebui să refactorizezi API-ul în serverless functions.

### Opțiunea 1: Frontend pe Vercel + API pe Railway/Render
- Deploy frontend-ul (build-ul static) pe Vercel
- Deploy API-ul pe Railway/Render
- Actualizează API URL în frontend

### Opțiunea 2: Full-stack pe Vercel (necesită refactoring)
- Refactorizează `/api/contact` într-o serverless function
- Deploy totul pe Vercel

**Recomandare:** Folosește Railway sau Render pentru setup cel mai simplu fără modificări de cod.

---

## Checklist pentru deployment:

- [ ] Variabile de mediu configurate (SMTP credentials)
- [ ] `SMTP_PASS` este App Password valid (nu parola normală)
- [ ] Build-urile rulează fără erori
- [ ] Testat formularul de contact după deploy
- [ ] Verificat că email-urile ajung la `autoai831@gmail.com`

---

## Troubleshooting:

**Problema:** Email-ul nu se trimite după deploy
- Verifică că variabilele de mediu sunt setate corect în platform
- Verifică că `SMTP_PASS` este App Password, nu parola normală
- Verifică logs-urile platform-ului pentru erori

**Problema:** Build eșuează
- Verifică că toate dependențele sunt în `package.json`
- Verifică că scripts-urile de build sunt corecte

