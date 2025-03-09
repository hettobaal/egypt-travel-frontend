import React from 'react';
// import dynamic from 'next/dynamic';
// import './globals.css'
// import { getCategories, getDiscountTours, getPopularTours, getSellingTours } from '@/lib/siteApis';
// import Hero from '@/components/home/Hero';
// import WebHeader from '@/components/WebHeader/WebHeader';
// import Search from '@/components/home/Search';
// import PopularTour from '@/components/home/PopularTour';
// import HomeCategoryOne from '@/components/home/HomeCategoryOne';
// import HomeCategoryTwo from '@/components/home/HomeCategoryTwo';
// import HomeCategoryThree from '@/components/home/HomeCategoryThree';
// import HomeCategoryFour from '@/components/home/HomeCategoryFour';
// import HomeCategoryFive from '@/components/home/HomeCategoryFive';
// import DiscountedTour from '@/components/home/DiscountedTour';
// import HomeSellingTour from '@/components/home/HomeSellingTour';
// const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs'));
// const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));
// const Journey = dynamic(() => import('@/components/reuseable/Journey'));
// const InstagramFeed = dynamic(() => import('@/components/reuseable/InstagramFeed'));
// const WebFooter = dynamic(() => import('@/components/WebFooter'));




// export const metadata = {
//   title: 'Agypten',
//   description: 'Agypten',
//   // openGraph: {
//   //   title: 'Website Design, Custom Development & SEO Services',
//   //   description: 'Infusion is a reliable website design, development, and SEO services company. We offer custom solutions to grow your business in digital marketing competition.',
//   //   url: 'https://infusiontechnologies.co/',
//   //   images: [
//   //     {
//   //       url: 'https://infusiontechnologies.co/ogImages/homepageOg.webp',
//   //       secureUrl: 'https://infusiontechnologies.co/ogImages/homepageOg.webp',
//   //       width: 1200,
//   //       height: 630,
//   //       alt: 'Preview image for Infusion Tech',
//   //     }
//   //   ],
//   //   site_name: 'Infusion Technologies',
//   // },
//   // alternates: {
//   //   canonical: 'https://infusiontechnologies.co/',
//   // },

// };


async function page() {

  // const data = await getCategories()
  // const popularToursData = await getPopularTours()
  // const DiscountedTours = await getDiscountTours()
  // const SellingTours = await getSellingTours()

  // const categories = data?.data || [];
  // const firstCategory = categories?.length > 0 ? categories[0] : null;
  // const secondCategory = categories?.length > 1 ? categories[1] : null;
  // const thirdCategory = categories?.length > 2 ? categories[2] : null;
  // const fourCategory = categories?.length > 3 ? categories[3] : null;
  // const fiveCategory = categories?.length > 4 ? categories[4] : null;

  // const popularTours = popularToursData?.data?.[0]?.tourId || [];
  // const discountedTours = DiscountedTours?.data?.[0]?.tourId || [];
  // const sellingTours = SellingTours?.data?.[0]?.tourId || [];

  return (
    <>

      {/* <WebHeader />
      <Hero /> */}
      {/* <Search /> */}
      {/* <PopularTour popularToursData={popularTours} />
      {firstCategory && <HomeCategoryOne data={firstCategory} />}
      {secondCategory && <HomeCategoryTwo data={secondCategory} />}
      {thirdCategory && <HomeCategoryThree data={thirdCategory} />}
      {fourCategory && <HomeCategoryFour data={fourCategory} />}
      {fiveCategory && <HomeCategoryFive data={fiveCategory} />}
      <DiscountedTour DiscountedTours={discountedTours} /> */}
      {/* <HomeSellingTour SellingTours={sellingTours} />
      <WhyChooseUs />
      <Reviews />
      <Journey />
      <InstagramFeed />
      <WebFooter /> */}
    </>
  )
}


export default page;
