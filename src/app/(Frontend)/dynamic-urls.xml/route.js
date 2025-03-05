import { getServerSideSitemap } from 'next-sitemap';

export async function GET() {
    const url = 'https://aegyptenmalanders.de/api/public/get-blogs'

  const blogs = await fetch(url,{cache:"no-store"}).then((res) => res.json());
//   const products = await fetch('https://your-api.com/products').then((res) => res.json());

  // Map the data to sitemap entries
  const blogUrls = blogs?.data.map((blog) => ({
    loc: `https://aegyptenmalanders.de/blog-detail/${blog.slug}`,
    lastmod: new Date(blog.updatedAt).toISOString(),
    changefreq: 'daily',
    priority: 0.7,
  }));

//   const productUrls = products.map((product) => ({
//     loc: `https://yourwebsite.com/product/${product.slug}`,
//     lastmod: new Date(product.updatedAt).toISOString(),
//     changefreq: 'weekly',
//     priority: 0.9,
//   }));


  const fields = [
    {
      loc: 'https://aegyptenmalanders.de/blogs',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    },
    ...blogUrls,
  ];

  // Generate the sitemap
  return getServerSideSitemap(fields);
}