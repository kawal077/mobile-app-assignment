# Mobile UI Assignment (Expo + React Native)

Group assignment: clone a mobile app snapshot and add a working **Alert** button.

## Snapshot

This project recreates the **Instagram welcome / log-in** screen (logo, tagline, photo row, form fields, Log in, Facebook option, sign-up footer).

## Setup

```bash
npm install
npm run reset-project   # optional — restores blank app/index.tsx shell
npm start
```

Scan the QR code with **Expo Go** on Android or iOS.

## Assignment checklist

- [x] Expo TypeScript project
- [x] UI built with `View`, `Text`, `Button`, `TextInput`, `Image`, `StyleSheet`
- [x] **Alert** button at bottom — shows `"Alert Button pressed"`
- [ ] Push to **public** GitHub repo
- [ ] At least **3 commits** with contributions from **all group members**

## GitHub (group)

1. Create a public repository on GitHub.
2. Add every group member as collaborators (Settings → Collaborators).
3. Each member should commit real changes (UI sections, styles, README, etc.).
4. Submit the repo URL on D2L.

```bash
git init
git add .
git commit -m "Initial Expo project with Instagram-style UI"
git remote add origin https://github.com/YOUR_ORG/YOUR_REPO.git
git push -u origin main
```

## Files

| File | Purpose |
|------|---------|
| `app/index.tsx` | Main screen (snapshot clone + Alert button) |
| `app/_layout.tsx` | Expo Router root layout |
