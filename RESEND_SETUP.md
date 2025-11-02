# Setup Resend pentru Email

## De ce Resend?

Render Free plan blochează conexiunile SMTP outbound, deci Gmail SMTP nu funcționează pe Render. Resend folosește API-uri HTTP, care funcționează perfect pe Render.

## Avantaje Resend:

- ✅ **100 emails/zi gratuit** (perfect pentru contact forms)
- ✅ **Funcționează pe Render Free** (nu necesită SMTP)
- ✅ **Setup rapid** (5 minute)
- ✅ **API simplu**
- ✅ **Delivery tracking**

---

## Pași de setup:

### 1. Creează cont pe Resend:

1. Mergi la https://resend.com
2. Click "Sign Up" (cu GitHub sau email)
3. Confirmă email-ul

### 2. Obține API Key:

1. După login, mergi la **"API Keys"** în dashboard
2. Click **"Create API Key"**
3. Alege un nume (ex: "AutoAI Contact Form")
4. Selectează permisii: **"Sending access"** (doar trimitere)
5. Click **"Add"**
6. **Copiază API key-ul imediat** (se afișează doar o dată!)

### 3. Configurează Domain (pentru production):

Pentru a trimite de la un email custom (ex: `noreply@autoai.com`):
1. Mergi la **"Domains"** în Resend dashboard
2. Click **"Add Domain"**
3. Adaugă domeniul tău
4. Adaugă record-urile DNS (Resend îți dă instrucțiuni)

**Pentru început (test):**
Poți folosi email-ul de test: `onboarding@resend.dev` (văzut ca spam, dar funcționează)

**Recomandat pentru production:**
Configurează un domeniu propriu pentru email-uri profesionale.

### 4. Adaugă API Key în Render:

1. Render Dashboard → serviciul "AutoAi" → **"Environment"** (sau **"Settings"** → **"Environment Variables"**)
2. Click **"Add Environment Variable"**
3. Adaugă:
   - **Key:** `RESEND_API_KEY`
   - **Value:** `<API-key-ul-tău-copiat>` (ex: `re_abc123...`)
4. Click **"Save Changes"**

### 5. Configurează Email "From" (opțional):

1. Adaugă variabilă în Render:
   - **Key:** `RESEND_FROM_EMAIL`
   - **Value:** `autoai831@gmail.com` (sau email-ul tău configurat pe Resend)

**Notă:** Dacă nu setezi `RESEND_FROM_EMAIL`, se va folosi `onboarding@resend.dev` (poate fi marcat spam).

---

## Testare:

După ce adaugi `RESEND_API_KEY` în Render:
1. **Redeploy** aplicația (sau așteaptă auto-deploy după commit)
2. Completează formularul de contact
3. Verifică inbox-ul la `autoai831@gmail.com`

---

## Verificare în Logs:

După trimitere, în Render Logs ar trebui să vezi:
- "Sending email via Resend..."
- "Email sent successfully via Resend! ID: xxx, Took XXXms"

---

## Troubleshooting:

**Eroare: "RESEND_API_KEY is not set"**
- Verifică că ai adăugat variabila în Render Environment Variables
- Verifică că ai salvat modificările
- Redeploy aplicația

**Email-urile merg în spam:**
- Configurează un domeniu propriu în Resend
- Folosește `RESEND_FROM_EMAIL` cu un email validat

**Eroare: "Resend error: ..."**
- Verifică că API key-ul este corect
- Verifică că nu ai depășit limita de 100 emails/zi (free plan)

