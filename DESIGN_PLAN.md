# Kick That Ball! — Design Plan

## Proposed screens
Main Menu, Play setup, Practice (Free Kick and Game Situation), Multiplayer Trick-Shot Challenge, Match HUD, Skill Inventory, Shooting Selection, Goalkeeper HUD, Team Customization, Coach/Timeout, Rank & Progression, and Settings.

## Navigation flow
The Main Menu is the hub. Every screen retains a consistent status bar with Back and Home. Play setup can launch the Match HUD or Goalkeeper HUD; Match HUD opens Coach/Timeout; Practice switches between two configuration tabs. Locker links to Shooting Selection.

## Reusable UI components
`TopBar`, `Button`, `Card`, `Select`, `Slider`, `Tabs`, `Progress`, `Badge`, `Modal`, `FieldPreview`, and `ControlButton`. Screen content and mock data are separated so future iteration can happen independently.

## Assumptions
- The prototype targets a landscape tablet first and remains usable on desktop and narrow mobile screens.
- Quarters are an optional game format, reflected by the coach-break system.
- All gameplay feedback is simulated locally; no networking, persistence, physics, or purchases are included.
- Fictional clubs and leagues avoid trademark issues.

## Questions / unresolved decisions
- Should matches use halves, quarters, or offer both as formats?
- Is the primary match camera broadcast, behind-player, or user-selectable?
- Should shooting placement use four zones, a free reticle, or both?
- How much information should remain visible during live play on smaller phones?
- Are skill rarity and unlocking tied to rank, currency, challenges, or a mix?
