# EmailJS Setup Guide for Contact Form (Vite/React)

## Setup Steps:

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account
- Free tier allows 200 emails/month

### 2. Create Email Service
- Go to Email Services in your EmailJS dashboard
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions
- Copy your **Service ID**

### 3. Create Email Template
- Go to Email Templates
- Click "Create New Template"
- Use this template content:

```
Subject: New Contact Form Message from {{from_name}}

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

- Copy your **Template ID**

### 4. Get Public Key
- Go to Account > General
- Copy your **Public Key**

### 5. Create Environment File
Create `.env.local` in your project root:

```bash
# Vite environment variables (must start with VITE_)
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

### 6. Update Contact.tsx (Already Done!)
The Contact component is already configured to use Vite environment variables.

## Alternative Solutions:

### Option 2: Simple mailto (Current Fallback)
- Replace `your-email@example.com` in Contact.tsx with your actual email
- Users' email clients will open with pre-filled message

### Option 3: Formspree (Simple)
- Go to [Formspree.io](https://formspree.io/)
- Create account, get form endpoint
- Replace form action with Formspree endpoint

### Option 4: Web3Forms (Free)
- Go to [Web3Forms.com](https://web3forms.com/)
- Get access key
- Use the Web3Forms utility in `src/utils/emailAlternatives.ts`

## Security Note:
All these solutions are safe as they don't expose your email directly in the code.
