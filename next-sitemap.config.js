/** @type {import('next-sitemap').IConfig} */

// const fetchCollections = async () => {

//   const collections = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/collection`).then(res => res.json());
  
//   const paths = [];

//   collections?.data.forEach((collection) => {
//     collection.variety.forEach((varieties) => {
//       paths.push({
//         loc: `/quartz-collection/${collection.slug}/${varieties.slug}`,
//         changefreq: 'weekly',
//         priority: 0.8,
//       });
//     });
//   })
//   return paths
  
//   ;}

module.exports = {
    siteUrl: "https://aegyptenmalanders.de",
    // exclude: ["/dashboard/*","/dashboard"],
    exclude: [
      "/add-user",
      "/blog/*",
      "/create-*",
      "/view-*",
      
    ],
    // include: ['/quartz-collection/**'], 
    generateRobotsTxt: true, 
    generateIndexSitemap: true,
    // additionalPaths: async (config) => {
    //   // Add quartz-collection dynamic paths
    //   const quartzPaths = await fetchCollections();
  
    //   return [...quartzPaths];
    // },
    
    
    // transform: async (config, path) => {
    //   // let priority = 0.5;
    //   if (path.match(/\/blog\/[^\/]+\/?$/)) {
    //     return null; // Exclude this URL
    //   }
    //   return {
    //     loc: path,
    //     priority: 0.7,
    //     changefreq, 
    //     lastmod: new Date().toISOString(),
    //   };
    // },
    
  


    robotsTxtOptions: {
      additionalSitemaps: [
        'https://aegyptenmalanders.de/dynamic-urls.xml', // <==== Add here
      ],
      policies: [
        { userAgent: '*', allow: '/' },
        { userAgent: '*', disallow: '/view-*' },
        { userAgent: '*', disallow: '/create-*' },
        { userAgent: '*', disallow: '/add-user' },
        { userAgent: '*', disallow: '/blog/*' },
        // { userAgent: '*', disallow: '/product/*' },
        // { userAgent: '*', disallow: '/shop2/*' },
        // { userAgent: '*', disallow: '/visualizer/*' },

        // { userAgent: '*', disallow: '/*.js' }, 

        // { userAgent: '*', disallow: '/_next/static/*.js' }, 
        // { userAgent: '*', allow: '/_next/static/media/' }, 
        // { userAgent: '*', disallow: '/sign-in' }, 
        // { userAgent: '*', disallow: '/dashboard' }, 
      ],  
    },  
  }