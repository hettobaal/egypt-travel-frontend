export const dynamicParams = true
export const dynamic = 'force-dynami';


import BlogContent from '@/components/blogs/BlogContent';
import BlogDetailHero from '@/components/blogs/BlogDetailHero';
import RelatedBlogs from '@/components/blogs/RelatedBlogs';
import Journey from '@/components/reuseable/Journey';
import { getBlogMetaData, getBlogs, getSingleBlog, getSingleMetaData } from '@/lib/siteApis';
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
    const id = params?.blogSlug;
    const data = await getSingleBlog(id)
    const tourId = data?.data?._id
    const tourMetaData = await getBlogMetaData()
    const metaData = tourMetaData?.data?.find(item => item?.entityId == tourId);
    const title = metaData?.title || 'Agypten';
    const description = metaData?.description || 'Agypten';
    const canonical = metaData?.canonical || 'https://aegyptenmalanders.de';
    const ogSitename = metaData?.ogSitename || 'Agypten';
    const ogTitle = metaData?.ogTitle || title;
    const ogDescription = metaData?.ogDescription || description;
    const ogURL = metaData?.ogURL || `https://aegyptenmalanders.de/imageslocal/metadata/${id}`;
    const ogImageAlt = metaData?.ogImageAlt || 'Image Description';
    const ogImage = metaData?.ogImage || '';

    return {
        title: title,
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
    console.log("getSingleBlog   ", blog.data[0].title);

    const bannerImage = blog?.data?.blogBannerImage
    const entireBlog = await getBlogs()
    console.log("entireBlog length", entireBlog?.data?.length);

    const relatedBlogsData = entireBlog?.data?.filter((item) => item?.slug !== slug)

    return (
        <>
            <BlogDetailHero bannerImage={bannerImage} />
            <BlogContent blog={blog.data} />
            <RelatedBlogs relatedBlogsData={relatedBlogsData} />
            <Journey />
        </>
    )
}

export default page;
