# Google Ads Conversion Tracking Setup Guide

## Overview
Your website now has Google Ads conversion tracking configured for:
1. **Phone call tracking** - Automatically tracks when users click the phone call link
2. **Form submissions** - Tracks both estimate and contact form submissions

## What's Been Implemented

### 1. Google Ads Service (`shared/google-ads.service.ts`)
A service that handles all conversion tracking with these methods:
- `trackConversion()` - Generic conversion tracking
- `trackPhoneCall()` - Phone call conversions
- `trackFormSubmission()` - Form submission tracking
- `trackPhoneClick()` - Individual phone link clicks

### 2. Estimate Form Integration
The estimate form automatically tracks submissions with:
- Form type: "estimate"
- Service type being estimated
- Location of the project
- Roof area

### 3. Contact Component Integration
Phone links now automatically track clicks with conversion ID

### 4. Google Tag Manager Code (`index.html`)
Added gtag script for Google Ads conversion tracking

---

## Setup Instructions

### Step 1: Get Your Google Ads IDs

1. **Go to Google Ads Account:**
   - Log in to your Google Ads account
   - Navigate to **Tools & Settings** → **Conversions**

2. **Create/Get Conversion IDs:**

   **For Phone Calls:**
   - Create a conversion action of type "Call"
   - Configure:
     - ✅ Call extension enabled
     - ✅ Call reporting ON
     - ✅ Call duration: 30-60 seconds = conversion
   - Get your **Conversion ID**: Looks like `AW-123456789/xyz-123`

   **For Form Submissions:**
   - Create a conversion action of type "Website"
   - Event type: "Lead" or custom
   - Get your **Conversion ID**: Looks like `AW-123456789/abc-456`

3. **Get Your Customer ID:**
   - Also needed in gtag configuration
   - Format: `AW-123456789`

### Step 2: Update Your Code

Replace all instances of `AW-XXXXXXXXX` and `AW-XXXXXXXXX/XXXXXXXXX` with your actual IDs:

#### In `src/index.html` (lines 49-57):
```html
<!-- Replace these with your actual IDs -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-123456789"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-123456789', {
    'phone_conversion_number': '+40759578727',
    'call_conversion_action': 'AW-123456789/phone-call-id'
  });
</script>
```

#### In `src/app/pages/estimate/estimate.component.ts` (line 31):
```typescript
private estimateConversionId = 'AW-123456789/form-submission-id';
```

#### In `src/app/pages/contact/contact.component.ts` (line 14):
```typescript
private phoneCallConversionId = 'AW-123456789/phone-call-id';
```

### Step 3: Deploy to Hostinger

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the contents of `frontend/dist/frontend/` to your Hostinger public_html

3. Ensure `.htaccess` file is in the root (required for Angular routing)

4. Clear your browser cache (Ctrl+Shift+R)

### Step 4: Test the Conversion Tracking

#### Testing Phone Calls:
1. Go to your website
2. Click the phone call link: **+40 759 578 727**
3. In Google Ads:
   - Go to **Tools & Settings** → **Conversions**
   - Look for your phone call conversion action
   - You should see a new conversion within 24-48 hours

#### Testing Form Submissions:
1. Go to the estimate page
2. Fill out and submit the form
3. Check Google Ads for conversion tracking

### Step 5: Verify Tracking in Google Ads

1. Go to **Tools & Settings** → **Conversions**
2. Select your conversion action
3. View the "Conversion details" report
4. You should see:
   - Click count
   - Conversion value
   - Conversion time
   - Source (phone call vs form submission)

---

## Conversion Tracking Details

### Phone Call Conversions
- **How it works**: When user clicks the phone link, gtag tracks it
- **Qualification**: Call duration 30-60 seconds = conversion (configured in Google Ads)
- **Automatic tracking**: Happens automatically when user clicks tel: link
- **Data tracked**: Phone number, timestamp, device type

### Form Submission Conversions
- **How it works**: When estimate form is submitted, conversion is tracked
- **Form data captured**: Service type, location, roof area
- **Automatic tracking**: Happens after form is successfully sent to email
- **Data tracked**: Form type, service details, timestamp

---

## Important Notes

1. **Conversion IDs Required**: The tracking won't work until you add your actual Google Ads conversion IDs
2. **24-48 Hour Delay**: Google Ads may take 24-48 hours to display your first conversions
3. **Testing Mode**: Google Ads has a "Test conversion" feature in the conversion settings to test immediately
4. **Phone Number**: The phone number `+40 759 578 727` is configured in:
   - Contact page
   - index.html gtag config
   - Both must match for proper tracking

5. **Call Extension Settings** (in Google Ads):
   - Must have "Call extension enabled"
   - Must have "Call reporting" turned ON
   - Set minimum call duration to 30-60 seconds for qualification

---

## Troubleshooting

### Conversions Not Showing
- ✓ Verify conversion IDs are correct (copy/paste exactly)
- ✓ Check that Google Ads "Call reporting" is enabled
- ✓ Wait 24-48 hours for initial tracking
- ✓ Use Google Ads "Test conversion" feature to verify setup

### Phone Call Link Not Tracking
- ✓ Verify phone number matches in all places
- ✓ Check browser console for any JavaScript errors
- ✓ Verify gtag is loaded: Open DevTools → Console → type `window.dataLayer`

### Form Not Tracking
- ✓ Verify form is actually submitting to your email
- ✓ Check browser console for any JavaScript errors
- ✓ Verify conversion ID in estimate.component.ts is correct

---

## Files Modified

1. **Created**: `src/app/shared/google-ads.service.ts` - Main tracking service
2. **Modified**: `src/index.html` - Added gtag initialization script
3. **Modified**: `src/app/pages/estimate/estimate.component.ts` - Form submission tracking
4. **Modified**: `src/app/pages/estimate/estimate.component.html` - (No changes needed)
5. **Modified**: `src/app/pages/contact/contact.component.ts` - Phone tracking
6. **Modified**: `src/app/pages/contact/contact.component.html` - Added tracking on phone click

---

## Next Steps

After setup:
1. Monitor conversions in Google Ads dashboard
2. Set up conversion value if applicable
3. Use conversion data in remarketing campaigns
4. Analyze conversion sources to optimize marketing

Need help? Check the Google Ads Help Center: https://support.google.com/google-ads/answer/7365263
