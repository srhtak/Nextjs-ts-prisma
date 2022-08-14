<div align="center" margin-bottom="10px">
  <a href="https://nextjs.org/" title="Next.js"><img src="https://github.com/get-icon/geticon/raw/master/icons/nextjs-icon.svg" alt="Next.js" width="96px"></a>
  <a href="https://www.typescriptlang.org/" title="Typescript"><img src="https://github.com/get-icon/geticon/raw/master/icons/typescript-icon.svg" alt="Typescript" width="96px"></a>
  <a href="https://www.prisma.io/" title="Prisma"><img src="https://seeklogo.com/images/P/prisma-logo-3805665B69-seeklogo.com.png" alt="Prisma" height="96px"></a>
  <a href="https://planetscale.com/" title="PlanetScale"><img src="https://seeklogo.com/images/P/planetscale-logo-0EEA8CAEB4-seeklogo.com.png" alt="PlanetScale" width="96px" height="96px"></a>
  <a href="https://tailwindcss.com/" title="Tailwind CSS"><img src="https://github.com/get-icon/geticon/raw/master/icons/tailwindcss-icon.svg" alt="Tailwind CSS" width="96px" height="96px"></a>
  </div>



🎉 Boilerplate for Next.js, Prisma, PlanetScale, Tailwind CSS and TypeScript. 🔥 Made with developer experience first: Next.js, TypeScript, ESLint, Prettier, VSCode, PostCSS, Tailwind CSS.

Clone this project and use it to create your own [Next.js](https://nextjs.org) project. 

### Features

- [x] Installed Next.js  with typescript
- [x] Prisma installed and schema added
- [x] API has been written for sign up and sign in.
- [x] Cookie session added for token.
- [ ] API reorganized with trpc

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy

- Minimal code
- SEO-friendly
- 🚀 Production-ready

### Requirements

- Node.js 14+ and npm
- ### Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/srhtak/next-js-boilerplate.git
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev
```
Open a terminal in your project directory and run the following command to generate a Prisma folder as well as a .env file:
```shell 
npx prisma init
```
### Go into your .env file and update your DATABASE_URL variable with the following:

DATABASE_URL="mysql://root@127.0.0.1:3309/YOUR-DB-NAME-HERE"

Once you’ve defined your data model, open a new terminal in your project directory and run this command: 
```shell
pscale connect YOUR-DB-NAME-HERE main --port 3309
```

In a new terminal, run this command to sync your prisma.schema with your PlanetScale schema: 
```shell
npx prisma db push
```
<img src="https://cdn.sanity.io/images/f1avhira/production/089944268d89883c50f19def997651cfe55d845d-1145x371.png" width="700px"/>

To verify that your database is in sync with your schema, as well as run any SQL commands, run: 
```shell
pscale shell YOUR-DB-NAME-HERE main
```
Run this line and replace Inquiry with an entity you defined in your schema.:

describe User; //Don't forget the semicolon here.

<img src="https://i.ibb.co/P9g7qd2/Screen-Shot-2022-08-13-at-22-35-46.png" width="700px"/>



