export const resolvers = {
  Query: {
    links: () => {
      return [
        {
          category: "Open Source",
          description: "Fullstack React framework",
          id: 1,
          imageUrl: "https://nextjs.org/static/twitter-cards/home.jpg",
          title: "Next.js",
          url: "https://nextjs.org",
        },
        {
          category: "Open Source",
          description: "Next Generation ORM for TypeScript and JavaScript",
          id: 2,
          imageUrl: "https://www.prisma.io/images/og-image.png",
          title: "Prisma",
          url: "https://www.prisma.io",
        },
        {
          category: "Open Source",
          description: "GraphQL implementation",
          id: 3,
          imageUrl: "https://www.apollographql.com/apollo-home.jpg",
          title: "Apollo GraphQL",
          url: "https://apollographql.com",
        },
      ];
    },
    customers: () => {
      return [
        {
          id: "3958dc9e-712f-4377-85e9-fec4b6a6442a",
          name: "Delba de Oliveira",
          email: "delba@oliveira.com",
          image_url: "/customers/delba-de-oliveira.png",
        },
        {
          id: "3958dc9e-742f-4377-85e9-fec4b6a6442a",
          name: "Lee Robinson",
          email: "lee@robinson.com",
          image_url: "/customers/lee-robinson.png",
        },
      ];
    },
  },
};
