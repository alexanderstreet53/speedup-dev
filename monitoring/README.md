# Patter – Monitoring Setup

## What's included

| Tool | Purpose |
|---|---|
| **Vercel Analytics** | Page views, unique visitors, top pages, referrers |
| **Vercel Speed Insights** | Core Web Vitals per page (LCP, FID, CLS) |
| **Grafana Cloud** | Uptime checks, alerting, custom dashboards |
| **`/api/health`** | Health check endpoint polled by Grafana |

---

## 1. Vercel Analytics & Speed Insights

Already wired up. Just enable in your Vercel dashboard:

1. Go to your project → **Analytics** tab → Enable
2. Go to **Speed Insights** tab → Enable

You'll see live traffic data within minutes of deployment.

---

## 2. Grafana Cloud Setup

### 2a. Create a free Grafana Cloud account

→ https://grafana.com/auth/sign-up/create-user (free tier includes synthetic monitoring + alerting)

### 2b. Set up Synthetic Monitoring (uptime checks)

1. In Grafana Cloud, go to **Synthetic Monitoring** → **Checks** → **New Check**
2. Create the following checks:

| Check | URL | Frequency | Alert threshold |
|---|---|---|---|
| Homepage | `https://your-domain.com/` | Every 1 min | 2 consecutive failures |
| Health API | `https://your-domain.com/api/health` | Every 1 min | 1 failure |
| Contact page | `https://your-domain.com/contact` | Every 5 min | 2 failures |

3. For the health check, add a **JSON assertion**: `body.status == "ok"`

### 2c. Import the Grafana dashboard

Use the JSON in `monitoring/grafana-dashboard.json` (see below):

1. Grafana → **Dashboards** → **Import** → paste JSON

### 2d. Set up alerts

1. Go to **Alerting** → **Alert Rules** → **New Rule**
2. Create:
   - **Uptime alert**: fires when any synthetic check fails 2+ times
   - **Response time alert**: fires when p95 latency > 3s

3. Add a **notification channel** (email/Slack/PagerDuty) under **Contact Points**

---

## 3. Environment Variables (Vercel)

Add these in your Vercel project → Settings → Environment Variables:

```
RESEND_API_KEY=re_xxxxxxxxxxxx        # From resend.com (free tier = 3k emails/mo)
CONTACT_EMAIL=sales@patter.dev        # Where form submissions are delivered
PRODUCTION_URL=https://patter.dev     # Used by GitHub Actions smoke tests
```

Also add `PRODUCTION_URL` as a GitHub secret (repo → Settings → Secrets → Actions).

---

## 4. Resend (email) setup

1. Sign up at https://resend.com (free tier: 3,000 emails/month)
2. Add and verify your sending domain
3. Copy your API key → add as `RESEND_API_KEY` in Vercel

---

## 5. GitHub Actions UAT pipeline

The pipeline (`.github/workflows/uat.yml`) runs automatically on every push and PR:

- **Local build tests**: builds the app and runs Playwright across Desktop, Mobile, and Tablet
- **Production smoke tests**: after deploy, re-runs against the live URL

View results in the **Actions** tab of your GitHub repo. Test reports are uploaded as artifacts (14-day retention).
