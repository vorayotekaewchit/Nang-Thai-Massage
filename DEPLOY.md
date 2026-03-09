# Deploy Nang Thai Massage — GitHub Pages & nangthaimassage.ie

This guide gets the **React app** (Vite build) live on GitHub Pages and ready for your custom domain **nangthaimassage.ie** (e.g. bought on [SmartHost](https://www.smarthost.ie/)).

---

## 1. Before you deploy

- **Phone number:** Set your real number in **`src/app/constants.ts`** (`PHONE_NUMBER`). Update the same value in **`index.html`** in the JSON-LD `telephone` field so SEO stays correct.
- **Build:** Run `npm run build` locally to confirm the `dist/` output is correct.

---

## 2. Enable GitHub Pages (first time)

1. Push this repo to GitHub (e.g. `yourusername/Nang-Thai-Massage`).
2. In the repo: **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source:** choose **GitHub Actions** (not “Deploy from a branch”).
4. Save. You don’t need to create the `gh-pages` branch; the workflow will publish the site.

---

## 3. Deploy on every push

The workflow **`.github/workflows/deploy-pages.yml`** is already set up. It:

- Runs on every push to **`main`** (and can be run manually via **Actions → Deploy to GitHub Pages → Run workflow**).
- Installs dependencies, runs `npm run build`, and deploys the **`dist/`** folder to GitHub Pages.
- Puts **`CNAME`** (with `nangthaimassage.ie`) in the deployed root so GitHub knows your custom domain.

After the first successful run, the site will be at:

- **`https://<yourusername>.github.io/Nang-Thai-Massage/`**  
  until you add the custom domain (see below).

---

## 4. Custom domain: nangthaimassage.ie (e.g. on SmartHost)

### A. Tell GitHub the domain

1. Repo **Settings → Pages**.
2. Under **Custom domain**, enter: **`nangthaimassage.ie`** (or **`www.nangthaimassage.ie`** if you prefer www).
3. Click **Save**. GitHub may show “DNS check is still in progress” until DNS is set (next step).

### B. Point the domain at GitHub (SmartHost)

In your **SmartHost** control panel for **nangthaimassage.ie**:

**Option 1 — Use www (simplest)**  
- Add a **CNAME** record:
  - **Name/host:** `www`
  - **Target/value:** `yourusername.github.io`  
    (replace with your GitHub username, e.g. `vorayotekaewchit.github.io`)
- In GitHub Pages **Custom domain**, use **`www.nangthaimassage.ie`**.
- (Optional) In SmartHost, add a redirect so **nangthaimassage.ie** → **www.nangthaimassage.ie**.

**Option 2 — Apex (nangthaimassage.ie without www)**  
- If SmartHost supports **ALIAS / ANAME / flattened CNAME** for the apex:
  - **Name:** `@` or leave blank (apex).
  - **Target:** `yourusername.github.io`.
- Otherwise use the **A** records GitHub shows under **Settings → Pages → Custom domain** (GitHub’s current IPs), e.g.:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`  
  (Check GitHub’s docs for the latest list.)

After DNS propagates (from a few minutes to 48 hours), GitHub will show the domain as verified.

### C. Enforce HTTPS

- In **Settings → Pages**, enable **Enforce HTTPS** once the domain is verified.

---

## 5. Summary checklist

- [ ] Repo on GitHub; **Pages → Source** set to **GitHub Actions**.
- [ ] `src/app/constants.ts` and `index.html` (JSON-LD) use your real phone number.
- [ ] Push to `main` (or run the workflow manually) so the first deploy completes.
- [ ] In **Settings → Pages**, set **Custom domain** to **nangthaimassage.ie** or **www.nangthaimassage.ie**.
- [ ] In SmartHost: CNAME `www` → `yourusername.github.io`, or ALIAS/A records for apex.
- [ ] After DNS is verified, turn on **Enforce HTTPS**.

The site will then be live at **https://nangthaimassage.ie** (or **https://www.nangthaimassage.ie**).

---

## 6. If you use the default project URL first

The app is built with **base: `/`** for the custom domain. Before the domain is connected, the site is available at:

**`https://<yourusername>.github.io/Nang-Thai-Massage/`**

If assets or routing look wrong there, you can temporarily build for that path by setting in **`vite.config.ts`**:

```ts
base: '/Nang-Thai-Massage/',
```

Then change it back to **`base: '/'`** and redeploy when you switch to **nangthaimassage.ie**.
