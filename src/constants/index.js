export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 4,
    name: "Reviews",
    href: "#reviews",
  },
  {
    id: 5,
    name: "Work",
    href: "#work",
  },
  {
    id: 6,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Ahmad Mriwed",
    position: "IT Manager at York British Academy",
    img: "/assets/york.jpg",
    review:
      "You have truly excelled and demonstrated your capability in this role. Your performance has been commendable.",
  },
];

export const myProjects = [
  {
    title: "EVEXL - NFC Platform",
    desc: "NFC-powered platform to design, build, and share digital business cards and social media cards, built with React, Redux, ShadCN, and Tailwind CSS. The platform supports role-based access, a customizable dashboard, and seamless integration with Google & Apple Wallets.",
    subdesc:
      "Features include OAuth authentication, analytics, subscription plans via Tap Payments, Firebase push notifications, and full dashboard customization, providing a modern and scalable solution for managing digital identities.",
    href: "https://evexl.davinda.dev",
    video: "/videos/project/evexl.mp4",
    spotlight: "/assets/spotlight-orange.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Redux",
        path: "/assets/redux.svg",
      },
      {
        id: 3,
        name: "Shadcn UI",
        path: "/assets/shadcn.png",
      },
      {
        id: 4,
        name: "Tailwind CSS",
        path: "/assets/tailwindcss.png",
      },
    ],
  },
  {
    title: "Auto Forma - AI Form Builder",
    desc: "A full-stack form builder platform built with Next.js, TypeScript, Drizzle ORM, and Supabase, featuring authentication (email & Google), AI-powered form generation, manual form creation, and an intuitive form editor. Users can manage responses with advanced filtering, gain insights through analytics dashboards, and access premium features via Stripe subscriptions.",
    subdesc:
      "AutoForma combines AI, modern UI, and scalable architecture to deliver a seamless experience for building, managing, and analyzing forms.",
    href: "https://auto-forma.vercel.app",
    repo: "https://github.com/ahmad-a-ebrahim/auto-forma",
    video: "/videos/project/auto-forma.mp4",
    spotlight: "/assets/spotlight-blue.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
      {
        id: 2,
        name: "Typescript",
        path: "/assets/typescript.svg",
      },
      {
        id: 3,
        name: "Shadcn UI",
        path: "/assets/shadcn.png",
      },
      {
        id: 4,
        name: "Supabase",
        path: "/assets/supabase.svg",
      },
    ],
  },
  {
    title: "Luxe Timepices - Online Store",
    desc: "Watches store using react, redux, mui and php laravel supports authentication ,dynamic roles ,cart management ,admin dashboard and more...",
    subdesc:
      "With modern and rebust design with page for browsing products and adding them to the favorites, Also Cart managment functionality with icrease/decrease quantity and remove. And a dashboard to manage products and users.",
    repo: "https://github.com/ahmad-a-ebrahim/luxe-timepieces",
    video: "/videos/project/luxe-timepieces.mp4",
    spotlight: "/assets/spotlight-orange.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Redux.js",
        path: "/assets/redux.svg",
      },
      {
        id: 3,
        name: "MUI",
        path: "/assets/mui.svg",
      },
    ],
  },
  {
    title: "Cryptocurrencies App",
    desc: "Fully responsive and interactive crypto currencies website using react.js, ant design, redux toolkit, chart.js and coinranking, bing news APIs.",
    subdesc:
      "Amazing statistics about crypto world with links and graphs so you can follow up with up to date information and filtering functionality to quickly find any currency.",
    href: "https://ahmad-a-ebrahim.github.io/cryptoapp",
    repo: "https://github.com/ahmad-a-ebrahim/cryptoapp",
    video: "/videos/project/cryptoapp.mp4",
    spotlight: "/assets/spotlight-purple.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "Ant Design",
        path: "assets/ant-design.svg",
      },
      {
        id: 3,
        name: "Redux.js",
        path: "/assets/redux.svg",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringsPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "York British Academy",
    pos: "Frontend Developer",
    duration: "2/2024 - 7/2024",
    title:
      "At York British Academy, I played a key role in the development and enhancement of a major project for the company. Working remotely, I gained valuable experience and significantly improved my key skills in React, Next, and Redux.",
    icon: "/assets/york.jpg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Davinda",
    pos: "Frontend Developer",
    duration: "2/2025 - Present",
    title:
      "At Davinda, collaborated closely with backend, design, and QA teams to deliver scalable and high-quality web applications. Specialized in React.js, Next.js, and modern front-end technologies, creating user-friendly, performant, and maintainable UI solutions.",
    icon: "/assets/davinda.jpg",
    animation: "clapping",
  },
  // {
  //   id: 3,
  //   name: "",
  //   pos: "",
  //   duration: "",
  //   title: "",
  //   icon: "",
  //   animation: "salute",
  // },
];
