my-app/
│
├── app/                            # Screens and layout for routing (especially for Expo Router)
│   ├── (tabs)/                     # Tab-based navigation structure
│   │   ├── _layout.tsx
│   │   ├── home.tsx
│   │   ├── explore.tsx
│   │   ├── profile.tsx
│   │   ├── progress.tsx
│   │
│   ├── movies/                     # Dynamic or nested routes
│   │   ├── [id].tsx
│   │   └── _layout.tsx
│   │
│   ├── auth/                       # Authentication pages
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   └── ForgetPassword.jsx
│   │   └── _layout.tsx
│
│   └── index.tsx                   # Entry point (Landing or Home)
│
├── assets/                         # Static assets
│   ├── fonts/
│   ├── icons/
│   └── images/
│
├── components/                     # Reusable UI components
│   ├── MoviesCart.tsx
│   ├── SearchBar.tsx
│   └── Shared/                     # Subcomponents (buttons, inputs, modals, etc.)
│
├── constants/                      # Static configuration or constants
│   ├── icons.ts
│   ├── images.ts
│   ├── colors.ts
│   └── options.tsx
│
├── config/                         # App configuration files
│   └── FirebaseConfig.tsx
│
├── context/                        # Global context providers
│   └── UserDetailContext.jsx
│
├── interfaces/                     # TypeScript interfaces
│   └── interfaces.d.ts
│
├── services/                       # API service functions
│   ├── api.ts
│   ├── appwrite.ts
│   └── useFetch.ts
│
├── types/                          # Custom types
│   └── images.d.ts
│
├── animations/                     # Reusable animations (Framer Motion / GSAP)
│   ├── fadeIn.ts
│   └── slideIn.ts
│
├── hooks/                          # Custom hooks
│   └── useUser.ts
│
├── store/                          # Global state (Redux/Zustand)
│   └── index.ts
│
├── global.css                      # Tailwind / global styles
├── tailwind.config.js              # Tailwind CSS config
├── tsconfig.json                   # TypeScript config
├── app.json                        # Expo or app metadata
├── .env                            # Environment variables
├── .gitignore
├── package.json
├── babel.config.js
├── eslint.config.js
├── README.md
