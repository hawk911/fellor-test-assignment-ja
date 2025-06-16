# Hiring Insights Chart

A responsive React chart component built with Next.js, Recharts, and shadcn/ui that visualizes hiring metrics including application to interview rates, offer acceptance rates, and rejection rates.

## Features

- 📊 Interactive line chart with three data series
- 📱 Fully responsive design optimized for mobile
- 🎨 Clean UI with shadcn/ui components
- 💡 Mobile-friendly legend with popover
- 🔧 Customizable time period selector
- ♿ Accessibility-compliant with ARIA labels

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **Recharts** - Chart library for React
- **shadcn/ui** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **TypeScript** - Type safety

## Chart Features

### Desktop View

- Full legend displayed below the chart
- Detailed Y-axis labels with percentage formatting
- Comprehensive tooltips on hover

### Mobile View

- Hidden Y-axis labels to save space
- Compact legend accessible via info icon popover
- Optimized chart dimensions and spacing
- Simplified tooltips with abbreviated labels

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Recharts Documentation](https://recharts.org/) - learn about chart components
- [shadcn/ui Documentation](https://ui.shadcn.com/) - learn about UI components
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about utility classes

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
