# Front-end Test - Search Box

## Overview

A search box component for DC Asia to find programming tools, built with Preact, TypeScript, and Tailwind CSS. It fetches data from the API, handles four states (success with/without results, pending, error), and includes bonus features like keyboard controls and animations.

## Thinking Process

- **Tech**: Preact (lightweight), TypeScript (type safety), Tailwind CSS (styling), `@tanstack/react-query` (API fetching).
- **Components**: `SearchBar`, `SearchTagItem`, `SearchItem`, `SearchFooter`.
- **State**: `useState` for local state, `@tanstack/react-query` with `placeholderData`, debouncing for search.
- **UI/UX**: Matches Figma, added hover/focus animations, keyboard navigation.

## Features

- Search with debouncing.
- Tag filtering (e.g., "Languages").
- States: Success (with/without results), pending, error.
- Responsive, Figma-matched UI.

## Completed Bonus Features

- TypeScript.
- Pixel-perfect UI.
- Tools: Preact, `@tanstack/react-query`, Tailwind.
- Animations: Hover/focus on tags, items, input.
- Keyboard: Tab navigation with focus looping.
- UX: Debouncing, no flickering.

## Installation

Since this project is provided as a zip file, follow these steps to run it using Yarn:

1. **Install Dependencies**:
   Ensure you have Yarn installed.

   ```bash
    yarn
   ```

2. **Run the Development Server**:

   ```bash
    yarn dev
   ```

   The app will be available at http://localhost:5173 (or another port if specified).

## Challenges

- Focus: Used `tabIndex` and focus trapping.

## Suggestions

- Add ARIA labels.
- Lazy load images.
- Unit tests.

---

```
Contact: [tantaivo74@gmail.com]

```
