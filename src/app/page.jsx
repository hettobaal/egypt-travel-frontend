import React from 'react';
import dynamic from 'next/dynamic';
import { categories } from '@/asset/HomeCategoryData';
import './globals.css'
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

  return (
    <>
      <WebHeader />
      <Hero />
      <Search />
      <PopularTour />
      <HomeCategoryOne data={categories} />
      <HomeCategoryTwo data={categories} />
      <HomeCategoryThree data={categories} />
      <HomeCategoryFour data={categories} />
      <HomeCategoryFive data={categories} />
      <DiscountedTour />
      <HomeSellingTour />
      <WhyChooseUs />
      <Reviews />
      <Journey />
      <InstagramFeed />
      <WebFooter />
    </>
  )
}


export default page;
