# Future Goals
 - Blog posts?
 - Non-technical owners can customzie site
 - Improve UX/liveliness
 - UI Responsiveness (varying screens)
 - SIDE PROJECT:
    - Sam.gov searching, email notifications of new contracting opportunities (https://nvembar.github.io/sam_api/sam/search.html)
    - potential params: Advanced search, Simple search, All Words, NAICS Code (541310 Architectural Services, 541330 Engineering Services), Set Aside (Total Small Business Set-Aside FAR 19.5, Parital Small Business Set-Aside FAR 19.5, 8a Sole Source FAR 19.8, 8a Set-Aside FAR 19.8)

# Deployment Reqs
 - Optimize metadata for SEO
 - setup domain for vercel hosting
 - Prepare google sheets (and back-up incase pull fails)
 - Styling finishing touches

## Google Sheets
> Reference: https://developers.google.com/workspace/sheets/api/reference/rest
- Setup
    - https://developers.google.com/workspace/sheets/api/quickstart/js?authuser=3
    - install package: googleapis
- Workflow
    - Data for the website is entered on the [Google Sheet](https://docs.google.com/spreadsheets/d/1yK0If4O-WIAT0RYavN49HfmIGnnbBeNeuYgEIqLQ3aA/edit?gid=0#gid=0) and the images are stored publicly accessible on [Google Drive](https://drive.google.com/drive/u/3/folders/1bG5HYrvr4dgAOdtSlNVMtEzLWnnx4IlW)
    - To prepare an image url
        - 

# Development
 - Running the site (dev)
 ```
 npm run dev
 ```
 - Checking production build
 ```
 npm run build
 ```


# Next.js


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
