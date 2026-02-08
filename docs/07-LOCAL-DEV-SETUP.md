# Local Development Setup
# Local Dev Setup (Windows 11 + VS Code)

## Prereqs
- Node.js LTS installed
- Git installed
- VS Code installed

## Create project (Next.js + TS + Tailwind)
PowerShell:
npx create-next-app@latest reliablewebstudio --ts --tailwind --eslint --app --src-dir --import-alias "@/*"

cd reliablewebstudio
code .

## Run
npm run dev
Open http://localhost:3000

## Deploy (Vercel)
- Push to GitHub
- Import repo into Vercel
- Add domain in Project Settings → Domains
- Follow Vercel DNS instructions (A record for apex, CNAME for www) :contentReference[oaicite:5]{index=
