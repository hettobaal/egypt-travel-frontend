import React from 'react';
import dynamic from 'next/dynamic';
import './globals.css'
import { getCategories, getDiscountTours, getPopularTours, getSellingTours } from '@/lib/siteApis';
const Hero = dynamic(() => import('@/components/home/Hero'));
const WebHeader = dynamic(() => import('@/components/WebHeader/WebHeader'));
const Search = dynamic(() => import('@/components/home/Search'));
const PopularTour = dynamic(() => import('@/components/home/PopularTour'));
const HomeCategoryOne = dynamic(() => import('@/components/home/HomeCategoryOne'));
const HomeCategoryTwo = dynamic(() => import('@/components/home/HomeCategoryTwo'));
const HomeCategoryThree = dynamic(() => import('@/components/home/HomeCategoryThree'));
const HomeCategoryFour = dynamic(() => import('@/components/home/HomeCategoryFour'));
const HomeCategoryFive = dynamic(() => import('@/components/home/HomeCategoryFive'));
const DiscountedTour = dynamic(() => import('@/components/home/DiscountedTour'));
const HomeSellingTour = dynamic(() => import('@/components/home/HomeSellingTour'));
const WhyChooseUs = dynamic(() => import('@/components/home/WhyChooseUs'));
const Reviews = dynamic(() => import('@/components/reuseable/Reviews'));
const Journey = dynamic(() => import('@/components/reuseable/Journey'));
const InstagramFeed = dynamic(() => import('@/components/reuseable/InstagramFeed'));
const WebFooter = dynamic(() => import('@/components/WebFooter'));


async function page() {

  const data = await getCategories()
  const firstCategory = data?.data?.[0] || null;
  const secondCategory = data?.data?.[1] || null;
  const thirdCategory = data?.data?.[2] || null;
  const fourCategory = data?.data?.[3] || null;
  const fiveCategory = data?.data?.[4] || null;

  // popular tours
  // const popularToursData = await getPopularTours()

  // DiscountedTours
  // const DiscountedTours = await getDiscountTours()


  // DiscountedTours
  // const SellingTours = await getSellingTours()
  // console.log("SellingTours",SellingTours);
  

  return (
    <>
      <WebHeader />
      <Hero />
      <Search />

      {/* <PopularTour popularToursData={popularToursData?.data} /> */}
      <HomeCategoryOne data={firstCategory} />
      <HomeCategoryTwo data={secondCategory} />
      <HomeCategoryThree data={thirdCategory} />
      <HomeCategoryFour data={fourCategory} />
      <HomeCategoryFive data={fiveCategory} />
      {/* <DiscountedTour DiscountedTours={DiscountedTours} /> */}
      {/* <HomeSellingTour SellingTours={SellingTours?.data}/> */}
      <WhyChooseUs />
      <Reviews />
      <Journey />
      <InstagramFeed />
      <WebFooter />
    </>
  )
}


export default page;
