# EmailJS Setup Guide

EmailJS allows you to send emails directly from your frontend without needing a backend server. It's perfect for static hosting!

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (it's free!)
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended):
   - **Gmail**: Click on Gmail
   - **Personal Email**: Use your `caseacoperisuri68@gmail.com`
   - Click **Connect Account** and authorize
4. Copy the **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Templates

#### Template 1: Contact Form
1. Go to **Email Templates**
2. Click **Create New Template**
3. Template Name: `Contact Form - Acoperișuri`
4. **Email Template**:
```
Subject: Mesaj nou de contact de la {{from_name}}

Salut,

Ai primit un mesaj nou prin formularul de contact:

Nume: {{from_name}}
Email: {{from_email}}
Telefon: {{from_phone}}
Subiect: {{subject}}

Mesaj:
{{message}}

---
Trimis prin caseacoperisuriro.com
```

5. **Settings**:
   - From Name: `{{from_name}}`
   - From Email: Use your service email
   - To Email: `caseacoperisuri68@gmail.com`
   - Reply To: `{{from_email}}`

6. Click **Save**
7. Copy the **Template ID** (e.g., `template_xyz789`)

#### Template 2: Estimate Request
1. Click **Create New Template** again
2. Template Name: `Estimate Request - Acoperișuri`
3. **Email Template**:
```
Subject: Cerere estimare de la {{from_name}}

Salut,

Ai primit o cerere nouă de estimare:

=== Informații Client ===
Nume: {{from_name}}
Email: {{from_email}}
Telefon: {{from_phone}}
Locație: {{location}}

=== Detalii Proiect ===
Tip serviciu: {{service_type}}
Tip acoperiș: {{roof_type}}
Suprafață: {{roof_area}} m²
Urgență: {{urgency}}
Preferință contact: {{preferred_contact}}

Descriere:
{{description}}

---
Trimis prin caseacoperisuriro.com
```

4. **Settings**:
   - From Name: `{{from_name}}`
   - From Email: Use your service email
   - To Email: `caseacoperisuri68@gmail.com`
   - Reply To: `{{from_email}}`

5. Click **Save**
6. Copy the **Template ID**

### Step 4: Get Your Public Key
1. Go to **Account** > **API Keys**
2. Copy your **Public Key** (e.g., `abcDEF123xyz`)

### Step 5: Update Configuration
Open `frontend/src/app/shared/email.service.ts` and update:

```typescript
private readonly PUBLIC_KEY = 'YOUR_PUBLIC_KEY_HERE'; // From Step 4
private readonly CONTACT_SERVICE_ID = 'YOUR_SERVICE_ID_HERE'; // From Step 2
private readonly CONTACT_TEMPLATE_ID = 'YOUR_CONTACT_TEMPLATE_ID_HERE'; // From Step 3 (Template 1)
private readonly ESTIMATE_TEMPLATE_ID = 'YOUR_ESTIMATE_TEMPLATE_ID_HERE'; // From Step 3 (Template 2)
```

**Example:**
```typescript
private readonly PUBLIC_KEY = 'abcDEF123xyz';
private readonly CONTACT_SERVICE_ID = 'service_abc123';
private readonly CONTACT_TEMPLATE_ID = 'template_contact789';
private readonly ESTIMATE_TEMPLATE_ID = 'template_estimate456';
```

### Step 6: Test It!
1. Run your development server: `npm start`
2. Go to the Contact page
3. Fill out the form and submit
4. Check your email: `caseacoperisuri68@gmail.com`

---

## 📊 Free Tier Limits

EmailJS Free Plan includes:
- ✅ **200 emails per month**
- ✅ Unlimited templates
- ✅ Email delivery tracking
- ✅ Auto-reply feature
- ✅ reCAPTCHA support

For more emails, upgrade to a paid plan (starts at $15/month for 1000 emails).

---

## 🔒 Security Notes

### Is it safe to expose the Public Key?
**Yes!** The public key is designed to be used in frontend code. It's safe to commit to your repository.

### Best Practices:
1. **Enable reCAPTCHA** (optional but recommended):
   - Go to your service settings
   - Enable reCAPTCHA v3
   - This prevents spam and abuse

2. **Enable Email Limits**:
   - EmailJS automatically limits requests from the same IP
   - Default: 50 requests per day per IP

3. **Set Up Auto-Reply** (optional):
   - Go to Template Settings
   - Enable "Auto Reply"
   - Create a nice confirmation email for users

---

## 🎨 Auto-Reply Template (Optional)

You can send a confirmation email to users:

**Subject:** `Confirmăm primirea mesajului tău`

**Body:**
```
Bună {{from_name}},

Mulțumim că ne-ai contactat!

Am primit mesajul tău și te vom contacta în cel mai scurt timp posibil, 
de obicei în termen de 24 de ore.

Detaliile tale:
- Email: {{from_email}}
- Telefon: {{from_phone}}

Dacă ai o urgență, nu ezita să ne suni la: +40 759 578 727

Cu respect,
Echipa Acoperișuri Profesionale
https://caseacoperisuriro.com
```

---

## 🐛 Troubleshooting

### Emails not arriving?
1. Check spam folder
2. Verify Template IDs are correct
3. Check EmailJS dashboard > History for error logs
4. Ensure "To Email" is set in template settings

### "User not found" error?
- Your Public Key is incorrect
- Check Account > API Keys

### "Service not found" error?
- Your Service ID is incorrect
- Check Email Services section

### Form submits but no email?
- Check browser console for errors
- Verify all template variables match (e.g., `{{from_name}}`)
- Test template in EmailJS dashboard

---

## 📈 Monitor Usage

1. Go to **History** in EmailJS dashboard
2. See all sent emails
3. Check success/failure status
4. View monthly usage

---

## 🔄 Alternative: Web3Forms (Backup Option)

If you want a backup or simpler solution:

1. Go to [https://web3forms.com/](https://web3forms.com/)
2. Enter your email: `caseacoperisuri68@gmail.com`
3. Get your Access Key
4. Use their simple API (no templates needed)

Web3Forms is even simpler but less customizable than EmailJS.

---

## ✅ You're Done!

Your contact forms now work without any backend! 🎉

Users can contact you directly from your website, and you'll receive all messages at `caseacoperisuri68@gmail.com`.

**Next Steps:**
1. Set up EmailJS account (5 min)
2. Create templates (5 min)
3. Update email.service.ts with your credentials (1 min)
4. Test the forms (2 min)
5. Deploy your website! 🚀
