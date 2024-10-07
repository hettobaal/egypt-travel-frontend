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

  const categories = data?.data || []; 
  const firstCategory = categories?.length > 0 ? categories[0] : null;
  const secondCategory = categories?.length > 1 ? categories[1] : null;
  const thirdCategory = categories?.length > 2 ? categories[2] : null;
  const fourCategory = categories?.length > 3 ? categories[3] : null;
  const fiveCategory = categories?.length > 4 ? categories[4] : null;

  const popularToursData = await getPopularTours()
  const DiscountedTours = await getDiscountTours()
  const SellingTours = await getSellingTours()
  const popularTours = popularToursData?.data?.[0]?.tourId || [];
  const discountedTours = DiscountedTours?.data?.[0]?.tourId || [];
  const sellingTours = SellingTours?.data?.[0]?.tourId || [];

  
  return (
    <>
      <WebHeader />
      <Hero />
      <Search />
      <PopularTour popularToursData={popularTours} />
      {firstCategory && <HomeCategoryOne data={firstCategory} />}
      {secondCategory && <HomeCategoryTwo data={secondCategory} />}
      {thirdCategory && <HomeCategoryThree data={thirdCategory} />}
      {fourCategory && <HomeCategoryFour data={fourCategory} />}
      {fiveCategory && <HomeCategoryFive data={fiveCategory} />}
      <DiscountedTour DiscountedTours={discountedTours} />
      <HomeSellingTour SellingTours={sellingTours} />
      <WhyChooseUs />
      <Reviews />
      <Journey />
      <InstagramFeed />
      <WebFooter />
    </>
  )
}


export default page;
