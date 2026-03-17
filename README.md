# 1PLU$1 AG Consulting — Farm Management App v86

## Quick Start (Local Development)

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Deploy to Render

1. Push this repo to GitHub
2. Go to render.com → New → Static Site
3. Connect your GitHub repo
4. Build Command: `npm install && npm run build`
5. Publish Directory: `dist`
6. Click Deploy

## Deploy to Netlify

1. Push this repo to GitHub
2. Go to netlify.com → Add new site → Import from Git
3. Build Command: `npm run build`
4. Publish Directory: `dist`
5. Click Deploy

## Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run build && npm run deploy`

## File Structure

```
├── index.html              # Entry HTML
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite build config
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── .gitignore              # Git ignore rules
├── public/
│   └── favicon.svg         # App icon
└── src/
    ├── main.jsx            # React entry point + storage polyfill
    ├── index.css            # Tailwind imports
    └── App.jsx              # Main application (all components)
```

## Features

- Balance Sheet Management
- Cash Flow Projection (Row Crop, Cow/Calf, Custom Revenue, Custom Feeding, Cattle Feeding, Dairy, Swine, Personal)
- Global Cash Flow Consolidation
- Transaction Tracker with Mapping & Reconciliation
- Marketing Positions & Scenarios
- Crop Insurance (MPCI, SCO, ECO, Margin, Hail, Wind)
- Earned Equity / CDRC Analysis
- Loan Calculator & Debt Service
- Schedule F Tax Report
- Field Satellite Imagery
- PDF Export on every tab
