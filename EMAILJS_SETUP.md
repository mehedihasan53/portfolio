# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. For Gmail:
   - Service ID: `service_portfolio` (or your preferred name)
   - Connect your Gmail account (mehedihasan.codes3@gmail.com)
   - Follow the authentication process

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Template ID: `template_contact` (or your preferred name)
4. Use this template content:

### Subject:
```
New Contact Form Message: {{subject}}
```

### Body:
```
Hello Mehedi,

You have received a new message from your portfolio contact form:

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply directly to: {{reply_to}}
```

## Step 4: Get Your Credentials
1. Go to "Account" > "General"
2. Copy your Public Key
3. Note your Service ID and Template ID from previous steps

## Step 5: Update Environment Variables
Update your `.env.local` file with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## Step 6: Test the Form
1. Restart your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email (mehedihasan.codes3@gmail.com) for the message

## Template Parameters Used
The contact form sends these parameters to EmailJS:
- `from_name`: Sender's name
- `from_email`: Sender's email
- `subject`: Message subject
- `message`: Message content
- `to_email`: Your email (mehedihasan.codes3@gmail.com)
- `reply_to`: Sender's email for easy replies

## Troubleshooting
- Make sure your service is connected and active
- Check that template variables match exactly
- Verify your public key is correct
- Check browser console for any errors
- Ensure your Gmail account allows less secure apps (if using Gmail)

## Security Notes
- Public key is safe to expose in frontend code
- Service ID and Template ID are also safe to expose
- Never expose your private key in frontend code
- EmailJS handles the secure email sending on their servers