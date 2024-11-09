import BlogContent from '@/components/blogs/BlogContent';
import BlogDetailHero from '@/components/blogs/BlogDetailHero';
import RelatedBlogs from '@/components/blogs/RelatedBlogs';
import Journey from '@/components/reuseable/Journey';
import { getBlogs, getSingleBlog, getSingleMetaData } from '@/lib/siteApis';
import React from 'react'


export async function generateStaticParams() {
    const blogsData = await getBlogs()
    const blogs = blogsData?.data || {}
    const array = [blogs]?.map((blog) => ({
        blogSlug: blog?.slug,
    }));
    return array;
}



export async function generateMetadata({ params }) {
    const id = params?.tourSlug;
    const decodedId = decodeURIComponent(id);
    const data = await getSingleBlog(decodedId)
    const tourId = data?.data?._id
    const tourMetaData = await getSingleMetaData(tourId)
    const metaData = tourMetaData?.data
    const title = metaData?.title || 'Agypten';
    const description = metaData?.description || 'Agypten';
    const canonical = metaData?.canonical || 'https://aegyptenmalanders.de';
    const ogSitename = metaData?.ogSitename || 'Agypten';
    const ogTitle = metaData?.ogTitle || title;
    const ogDescription = metaData?.ogDescription || description;
    const ogURL = metaData?.ogURL || `https://aegyptenmalanders.de/imageslocal/metadata/${decodedId}`;
    const ogImageAlt = metaData?.ogImageAlt || 'Image Description';
    const ogImage = metaData?.ogImage || '';

    return {
        title,
        description,
        canonical: canonical,
        openGraph: {
            siteName: ogSitename,
            title: ogTitle,
            description: ogDescription,
            url: ogURL,
            images: [
                {
                    url: ogImage,
                    secureUrl: `https://aegyptenmalanders.de/imageslocal/metadata/${metaData?.ogImage}`,
                    width: 1200,
                    height: 627,
                    alt: `${ogImageAlt}`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: ogTitle,
            description: ogDescription,
            images: [
                {
                    url: ogImage,
                    secureUrl: `https://aegyptenmalanders.de/imageslocal/metadata/${metaData?.ogImage}`,
                    width: 1200,
                    height: 627,
                    alt: `${ogImageAlt}`,
                },
            ],
        },
    };

}








async function page({ params }) {
    const slug = params?.blogSlug;
    const blog = await getSingleBlog(slug)
    console.log("blog detail", blog);

    return (
        <>
            <BlogDetailHero />
            <BlogContent blog={blog.data} />
            <RelatedBlogs />
            <Journey />
        </>
    )
}

export default page;
