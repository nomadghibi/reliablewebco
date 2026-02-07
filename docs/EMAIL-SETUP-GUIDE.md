# Cloudflare Email Routing Setup Guide

## Overview
Set up professional email addresses for your domain (e.g., hello@yourdomain.com) that forward to your existing Gmail/Outlook inbox - completely free.

## Prerequisites
- Domain registered (your custom domain)
- Cloudflare account (free)
- Domain DNS managed by Cloudflare

## Step 1: Add Domain to Cloudflare (if not already done)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Click "Add a Site"
3. Enter your domain name
4. Select the Free plan
5. Cloudflare will scan your DNS records
6. Update your domain's nameservers at your registrar to Cloudflare's nameservers
7. Wait for DNS propagation (can take up to 24 hours)

## Step 2: Enable Email Routing

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain
3. Click **Email** in the left sidebar
4. Click **Email Routing**
5. Click **Get started** or **Enable Email Routing**

## Step 3: Add Destination Address

This is where emails will be forwarded TO (your existing email):

1. Click **Destination addresses**
2. Click **Add destination address**
3. Enter your personal email (e.g., yourname@gmail.com)
4. Click **Send verification email**
5. Check your inbox and click the verification link
6. Wait for status to show "Verified"

## Step 4: Create Custom Email Addresses

Create professional addresses that forward to your destination:

1. Click **Routing rules**
2. Click **Create address**
3. Enter custom address (examples below)
4. Select your verified destination address
5. Click **Save**

### Recommended Email Addresses:
- `hello@yourdomain.com` - General inquiries
- `contact@yourdomain.com` - Contact form submissions
- `info@yourdomain.com` - Information requests
- `support@yourdomain.com` - Customer support
- `quotes@yourdomain.com` - Quote requests

## Step 5: Verify DNS Records

Cloudflare automatically configures these records:

1. Go to **DNS** → **Records**
2. Verify these records exist:
   - **MX records** (for receiving email)
   - **TXT records** (for SPF/verification)

You should see something like:
```
Type: MX
Name: @
Content: route1.mx.cloudflare.net
Priority: 1

Type: MX
Name: @
Content: route2.mx.cloudflare.net
Priority: 2

Type: TXT
Name: @
Content: v=spf1 include:_spf.mx.cloudflare.net ~all
```

## Step 6: Test Email Routing

1. Send a test email to one of your custom addresses (e.g., hello@yourdomain.com)
2. Check your destination inbox (Gmail/Outlook)
3. You should receive the forwarded email within a few minutes

## Step 7: Update Website Contact Form

Update your contact form to send emails to your new custom address:

**Current setup:** Form submissions need to be routed to your email.

**Update the contact form API route** (if using Next.js route handler):
- File: `src/app/api/contact/route.ts`
- Update recipient email to: `contact@yourdomain.com` or `hello@yourdomain.com`

**Or use Formspree/Netlify Forms** with your custom email address.

## Important Limitations

### What Email Routing DOES:
✅ Receive emails sent to your custom domain
✅ Forward to your existing inbox
✅ Free forever
✅ Unlimited custom addresses
✅ Spam filtering included

### What Email Routing DOES NOT DO:
❌ Send emails FROM your custom address (sends from your personal email)
❌ Provide mailbox storage (everything forwards)
❌ Support IMAP/POP3 access
❌ Include email client interface

## Sending Emails FROM Your Custom Domain

If you need to send emails FROM your custom domain, you have options:

### Option 1: Gmail "Send mail as" (Free)
1. In Gmail, go to Settings → Accounts
2. Click "Add another email address"
3. Enter your custom email
4. Use SMTP relay or Cloudflare's recommended settings
5. Verify ownership
6. Now you can send from your custom address in Gmail

### Option 2: Use a Full Email Host ($)
- **Google Workspace**: $6/user/month (full Gmail experience)
- **Microsoft 365**: $6/user/month (full Outlook experience)
- **Zoho Mail**: $1/user/month (budget option)

## Troubleshooting

### Emails not arriving?
- Check DNS records are correct
- Verify destination email is verified in Cloudflare
- Check spam folder in destination inbox
- Wait up to 10 minutes for initial setup

### Verification email not received?
- Check spam folder
- Try adding a different destination email
- Make sure you typed the email correctly

### DNS not updating?
- Wait 24 hours for full propagation
- Clear DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

## Next Steps

1. ✅ Set up Email Routing in Cloudflare
2. ✅ Create custom email addresses
3. ✅ Test email forwarding
4. ✅ Update website contact form recipient
5. ✅ (Optional) Configure Gmail "Send mail as" feature

## Support Resources

- [Cloudflare Email Routing Docs](https://developers.cloudflare.com/email-routing/)
- [Cloudflare Community](https://community.cloudflare.com/)
- Your domain registrar support (for nameserver updates)

---

**Questions?** Contact: (321) 953-5199 or your existing email
