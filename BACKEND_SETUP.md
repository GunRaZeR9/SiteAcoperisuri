# Backend Email Setup Instructions

## 📧 Email Configuration

The backend is now configured to send emails automatically when users submit forms. You need to configure your email credentials in the `.env` file.

### Gmail Setup (Recommended)

1. **Open** `backend/.env` file

2. **Update these fields:**
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASSWORD=your-app-specific-password
   EMAIL_FROM=noreply@acoperisuri.ro
   EMAIL_TO=caseacoperisuri68@gmail.com
   ```

3. **Get Gmail App Password:**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Enable 2-Step Verification (if not already enabled)
   - Go to "App passwords" section
   - Create a new app password for "Mail"
   - Copy the 16-character password
   - Paste it in `EMAIL_PASSWORD` field in `.env`

### Alternative Email Providers

#### Hostinger Email
```env
EMAIL_HOST=smtp.hostinger.com
EMAIL_PORT=587
EMAIL_USER=contact@acoperisuri.ro
EMAIL_PASSWORD=your-password
EMAIL_FROM=contact@acoperisuri.ro
EMAIL_TO=caseacoperisuri68@gmail.com
```

#### Other SMTP Providers
- **SendGrid**, **Mailgun**, **Amazon SES** - Update host, port, and credentials accordingly

## 🚀 Running the Backend

### Development Mode
```bash
cd backend
npm run start:dev
```

The backend will run on `http://localhost:3000`

### Production Mode
```bash
cd backend
npm run build
npm run start:prod
```

## 📋 API Endpoints

The backend exposes these endpoints:

- `POST /forms/contact` - Main contact form
- `POST /forms/estimate` - Price estimate form  
- `POST /forms/quick-contact` - Quick contact (home page)

## ✅ Testing Email Setup

1. Start the backend: `npm run start:dev`
2. Start the frontend: `cd ../frontend && npm start`
3. Fill out any contact form on the website
4. Check your email inbox (EMAIL_TO address) for the message

## 🔒 Security Notes

- **Never commit `.env` file** - It's already in `.gitignore`
- Use app-specific passwords, not your actual account password
- For production, use environment variables on your hosting platform

## 🐛 Troubleshooting

**Error: Invalid login credentials**
- Make sure you're using an app-specific password (not your regular password)
- Verify 2FA is enabled on your Google account

**Error: Connection timeout**
- Check firewall settings
- Try port 465 with `secure: true` instead of port 587

**Emails not arriving**
- Check spam folder
- Verify EMAIL_TO address is correct
- Check backend console for error messages
