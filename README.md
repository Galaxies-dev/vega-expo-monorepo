# React Native Monorepo - Vega + Expo

React Native monorepo with a mobile app (Expo), a FireTV app (VegaOS), and a shared UI package.

## Structure

```
mobile/        - Expo app (iOS, Android, Web)
vega/          - VegaOS app (Fire TV)
packages/ui/   - Shared UI component library (@vega/ui)
```

## Prerequisites

- Node.js
- [Yarn](https://yarnpkg.com/) (v4.5.0, declared in `packageManager`)

## Install

```bash
yarn install
```

## Run

### Mobile (Expo)

```bash
yarn run:expo:go        # Start dev server
yarn run:expo:ios       # Run on iOS
yarn run:expo:android   # Run on Android
```

### Vega (Fire TV)

```bash
yarn build:vega                                    # Debug build
yarn workspace @rnmonorepo/vega run build:release  # Release build
yarn workspace @rnmonorepo/vega run start          # Start dev server
```

### Lint & Test (Vega)

```bash
yarn workspace @rnmonorepo/vega run lint
yarn workspace @rnmonorepo/vega run test
```

## Fast Refresh

Set up [Fast Refresh](https://developer.amazon.com/docs/vega/0.21/fast-refresh.html) in your VegaOS app.