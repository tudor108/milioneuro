# Configurare Email pentru Contact Form

## Obținerea App Password de la Google

### Pas 1: Activează Verificarea în Doi Pași
1. Mergi la [Google Account Security](https://myaccount.google.com/security)
2. Dacă nu este activată, activează **"Verificare în doi pași"**
3. Urmează pașii de configurare

### Pas 2: Generează App Password
1. Mergi direct la [App Passwords](https://myaccount.google.com/apppasswords)
   - Sau: **Contul Google** → **Securitate** → Scroll jos la **"Parole pentru aplicații"** (sub "Verificare în doi pași")
2. Selectează:
   - **Aplicația:** "Mail"
   - **Dispozitivul:** "Altele (nume personalizat)"
   - Introdu un nume descriptiv (ex: "AutoAI Contact Form")
3. Click pe **"Generare"**

### Pas 3: Copiază Parola
- Google va afișa o parolă de **16 caractere** (format: `abcd efgh ijkl mnop`)
- **Copiază această parolă imediat** (se afișează doar o dată!)
- Poți copia cu sau fără spații, funcționează ambele

### Pas 4: Configurează `.env`
1. Deschide fișierul `.env` din root-ul proiectului
2. Înlocuiește valorile:
   ```env
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=abcdefghijklmnop  # App Password generat
   SMTP_FROM=your-email@gmail.com
   ```

## Verificare Configurare

După ce ai completat `.env` cu credențialele tale:
1. Restart serverul (`npm run dev:server`)
2. Completează formularul de contact
3. Verifică dacă primești email la `autoai831@gmail.com`

## Note Importante

- ⚠️ **NU folosi** parola normală Gmail, ci **doar App Password**
- ✅ Verificarea în doi pași **trebuie să fie activată** pentru a genera App Passwords
- 🔐 Poți genera mai multe App Passwords pentru diferite aplicații
- 📧 App Password-ul poate fi revocat oricând din setările Google Account

## Troubleshooting

**Eroare: "Invalid login"**
- Verifică că ai folosit App Password, nu parola normală
- Verifică că nu ai spații extra în `.env`
- Asigură-te că verificarea în doi pași este activată

**Eroare: "Less secure app access"**
- App Passwords înlocuiesc "Less secure app access" (nu mai este necesar)

