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

  const firstCategory = data?.data?.[0] ;
  const secondCategory = data?.data?.[1] ;
  const thirdCategory = data?.data?.[2] ;
  const fourCategory = data?.data?.[3] ;
  const fiveCategory = data?.data?.[4] ;

  // popular tours
  // const popularToursData = await getPopularTours()
  // console.log("popularToursData", popularToursData);

  // DiscountedTours
  const DiscountedTours = await getDiscountTours()
  // console.log(firstCategory);
  // console.log(secondCategory);
  // console.log(thirdCategory);
  // console.log(fourCategory);
  // console.log(fiveCategory);
  
  return (
    <>
      <WebHeader />
      <Hero />
      <Search />
      {/* <PopularTour popularToursData={popularToursData?.data || []} /> */}
      {data?.data?.[0] && <HomeCategoryOne data={firstCategory} />}
      {data?.data?.[1] && <HomeCategoryTwo data={secondCategory} />}
      {data?.data?.[2] && <HomeCategoryThree data={thirdCategory} />}
      {data?.data?.[3] && <HomeCategoryFour data={fourCategory} />}
      {data?.data?.[4] && <HomeCategoryFive data={fiveCategory} />}
      {/* {DiscountedTours?.data[0]?.tourId?.length >= 1 &&  <DiscountedTour DiscountedTours={DiscountedTours?.data[0]?.tourId?.length >= 1 ? DiscountedTours?.data[0]?.tourId : []} />} */}
      {/* <HomeSellingTour SellingTours={SellingTours?.data || []} /> */}
      <WhyChooseUs />
      <Reviews />
      <Journey />
      <InstagramFeed />
      <WebFooter />
    </>
  )
}


export default page;
