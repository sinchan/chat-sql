
# ChatSQL

A chat app that lets users query against a local mysql database called `sample` with the provided ![schema](https://github.com/sinchan/chat-sql/blob/main/dump.sql).

A SQL user needs to be provided as shown in the .env.example file that only has read access to prevent SQL injection and 
modifications to the DB.


SQL is generated using OpenAI's `gpt-3.5-turbo-0613` model to make use of the new function calling capabilities to ensure more reliable 
response schemas. 
I'm providing a single row from each table to enable more accurate responses. For databases that have more variable data,
a random subset of rows or a summarized data overview with types and example can be passed into the prompt.

![ChatSQL](https://github.com/sinchan/chat-sql/assets/924241/28b21f4b-4dbe-4195-bc5f-1732bec28461)


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
