
# Pokedex App with Twin, Next.js, Styled Components, TypeScript, Tailwind, JSON Web Token, React Hook Form, React Toastify

## Overview

This is a Pokedex application built with a modern tech stack including Twin, Next.js, Styled Components, TypeScript, Tailwind CSS, JSON Web Token (JWT), React Hook Form, React Toastify for toast notifications, Husky, lint-staged, and Cypress for automated testing. The app provides a user-friendly interface to explore Pokemon data, with features such as pagination, user authentication, and enhanced form handling.

## Features

- View a list of Pokemon with 10 items per page.
- Login with JWT authentication.
- Responsive design using Twin for Tailwind CSS.
- Styled Components for efficient styling.
- Use of TypeScript for type safety.
- Enhanced form handling with React Hook Form.
- Toast notifications for user feedback using React Toastify.
- Pre-commit and pre-push hooks with Husky and lint-staged for automated testing.
- End-to-End (E2E) testing with Cypress.

## Prerequisites

- Node.js and npm installed.
- Basic understanding of JavaScript, React, and web development.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/3FE3LE/monoma-dex.git
cd monoma-dex
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:

```env
MONGODB_URI=mongodb+srv://MONOMA:Zfb1Yz51306o3WvV@cluster0.rmhcyvf.mongodb.net/?retryWrites=true&w=majority
MONGODB_NAME=pkmdex
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=monomadex
NEXT_PUBLIC_API_URL=https://pokeapi.co/api/v2/pokemon/
```

4. Start the development server:

```bash
npm run dev
```

## Tech Stack

- [Twin](https://github.com/ben-rogerson/twin.macro) - A utility for writing Tailwind CSS with styled-components syntax.
- [Next.js](https://nextjs.org/) - A React framework for building server-rendered applications.
- [Styled Components](https://styled-components.com/) - CSS-in-JS library for styling React components.
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript that adds static types.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [JSON Web Token (JWT)](https://jwt.io/) - A compact, URL-safe means of representing claims to be transferred between two parties.
- [React Hook Form](https://react-hook-form.com/) - A library for managing form state and validation in React.
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) - A popular library for adding toast notifications to your React application.
- [Husky](https://typicode.github.io/husky/) - Git hooks made easy.
- [lint-staged](https://github.com/okonet/lint-staged) - Run linters on git staged files.
- [Cypress](https://www.cypress.io/) - JavaScript End to End Testing Framework.

## Folder Structure

```
|-- src
|   |-- components
|   |   |-- LoginForm.tsx
|   |   |-- Pagination.tsx
|   |   |-- PokemonCard.tsx
|   |-- pages
|   |   |-- api
|   |   |   |-- login.ts
|   |   |-- index.tsx
|   |-- styles
|   |   |-- GlobalStyles.ts
|   |-- types
|   |   |-- pokemon.ts
|   |-- utils
|   |   |-- auth.ts
|   |   |-- fetcher.ts
|   |-- App.tsx
|   |-- ...
|-- ...
|-- .env.local.example
|-- README.md
|-- ...
```

## Contributing

Pull requests and feedback are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [OpenAI](https://openai.com) - For providing the amazing GPT-3.5 model that generated this README.
- The open-source community for the fantastic libraries and tools used in this project.