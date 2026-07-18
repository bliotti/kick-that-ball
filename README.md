# Kick That Ball! UI Prototype

A responsive, clickable browser prototype for validating the interface and navigation of a future Roblox soccer game. It uses React, TypeScript, Vite, plain CSS, fictional mock data, and no backend.


## Run locally

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Production build

```powershell
npm run build
npm run preview
```


## Deploy on updates

This repo is ready to deploy through GitHub Pages every time changes are merged to `main`.

1. Push this repository to GitHub.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Merge changes into `main`, or run the **Deploy site** workflow manually from the **Actions** tab.

The deployment workflow installs dependencies with `npm ci`, runs `npm run build`, and publishes `dist/client` as the static site artifact. Pull requests run the same build as a CI check before merge.

## Prototype scope

Includes all core menus, practice configuration, trick-shot rounds, simulated match and goalkeeper HUDs, skills, shots, team customization, tactics, progression, and settings. Controls update only local mock state and reset on refresh.

## Roblox Implementation Notes

- The overall app shell and each screen map naturally to separate `ScreenGui` containers with reusable `Frames` for cards, panels, status bars, and modal overlays.
- React buttons and selectors become `TextButtons` or `ImageButtons`; icons and decorated controls can use image assets plus Roblox UI strokes, gradients, corners, and constraints.
- Field, player, kit, ball, and skill previews can use `ViewportFrames` with lightweight models and animation previews.
- Mobile input should be coordinated through `ContextActionService`; camera, gestures, and device-specific input can use `UserInputService`.
- Shared configuration, skill metadata, ranks, teams, and UI tokens belong in `ModuleScripts`. Screen interaction and input feedback belong in `LocalScripts`.
- Authoritative match state, progression, loadouts, validation, and matchmaking eventually belong in `ServerScripts`. Client/server requests should use carefully validated `RemoteEvents` and `RemoteFunctions`.
- HUD feedback such as shot charge, teammate selection, keeper reaction, and timeout panels should respond immediately on the client while the server remains authoritative about outcomes.
- This prototype deliberately does not implement Roblox services, networking, persistence, purchases, or physics.
