import MaxWidthWrapper from '@/components/reuseable/MaxWidthWrapper'
import AddReview from '@/components/reviews/AddReview'
import { getTours } from '@/lib/siteApis'


export const metadata = {
    title: 'Aegypten mal anders',
    description: 'Aegypten mal anders',
    // openGraph: {
    //   title: 'Website Design, Custom Development & SEO Services',
    //   description: 'Infusion is a reliable website design, development, and SEO services company. We offer custom solutions to grow your business in digital marketing competition.',
    //   url: 'https://infusiontechnologies.co/',
    //   images: [
    //     {
    //       url: 'https://infusiontechnologies.co/ogImages/homepageOg.webp',
    //       secureUrl: 'https://infusiontechnologies.co/ogImages/homepageOg.webp',
    //       width: 1200,
    //       height: 630,
    //       alt: 'Preview image for Infusion Tech',
    //     }
    //   ],
    //   site_name: 'Infusion Technologies',
    // },
    // alternates: {
    //   canonical: 'https://infusiontechnologies.co/',
    // },
  
  };

async function page() {

const tours = await getTours()

    return (
        <>
            <MaxWidthWrapper className='md:mt-[120px] mt-[100px] mx-auto flex justify-center items-center pb-12'>
                <AddReview toursData={tours?.data} />
            </MaxWidthWrapper>
        </>
    )
}

export default page
