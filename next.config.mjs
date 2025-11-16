// // /** @type {import('next').NextConfig} */
// // const nextConfig = {};

// // export default nextConfig;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["images.unsplash.com"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "res.cloudinary.com",
//         pathname: "**",
//       },
//       {
//         protocol: "https",
//         hostname: "raw.githubusercontent.com",
//         pathname: "**",
//       },
//     ],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // ✅ equivalent to old 'domains' entry
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
