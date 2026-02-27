# EmailJS setup

Quick steps to make the contact form work using EmailJS (no backend required).

1. Install the client library

```bash
npm install @emailjs/browser
# or
yarn add @emailjs/browser
```

2. Create an account on https://www.emailjs.com/ and add a service

- In EmailJS: Add an Email Service (Gmail, Outlook, SMTP provider). Copy the Service ID.
- Create an Email Template and copy the Template ID.
- In the dashboard copy your Public Key (User ID / Public Key).

3. Template variables

Create a template that uses these variables (the names used by `ContactModal.tsx`):

- `from_name`
- `from_email`
- `message`

Example simple text template (in EmailJS template editor):

```
Subject: New contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Add env variables

Copy `.env.example` to `.env` in the project root and replace the placeholders:

```
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the dev server after adding `.env`.

5. Test

- Run `npm run dev` and open the website.
- Open the Contact modal, fill fields and press `Send Message`.
- If successful you will see a 'Message sent' notice.

6. Troubleshooting

- Open browser console for errors — EmailJS will log errors there.
- If the message isn't delivered, check the EmailJS dashboard (logs) and the template mapping.
- For production usage consider adding server-side verification or using a backend to keep secrets more secure.
