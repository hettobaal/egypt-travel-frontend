import React, { useState } from 'react'
import MaxWidthWrapper from '../reuseable/MaxWidthWrapper'
import HeadingThree from '../reuseable/HeadingThree'
import Para from '../reuseable/Para'
import { TbClockCancel } from 'react-icons/tb'
import { IoPersonOutline } from 'react-icons/io5'
import { Calendar, Loader2 } from 'lucide-react'
import { MdPayment } from 'react-icons/md'
import { Button } from '../ui/button'
import { booking } from '@/lib/siteApis'
import toast from 'react-hot-toast'
import { format, parse } from 'date-fns';
import ThankYouModal from './ThankYouModal'

function BookingDetail({ data, formData }) {


    // Sample pricing for Adult, Child, and SmallChild
    const adultPrice = data?.adultPriceAfterDiscount > 0 ? data?.adultPriceAfterDiscount : data?.priceAdult;
    const childPrice = data?.childPriceAfterDiscount > 0 ? data?.childPriceAfterDiscount : data?.priceChild;

    const InfantPrice = data?.priceInfant

    // Extracting the numbers from formData.person
    const personData = formData?.person;
    const adultCount = parseInt(personData?.match(/Adult\s*x\s*(\d+)/)?.[1]) || 0;
    const childCount = parseInt(personData?.match(/Child\s*x\s*(\d+)/)?.[1]) || 0;
    const InfantCount = parseInt(personData?.match(/infant\s*x\s*(\d+)/)?.[1]) || 0;

    // Calculating total price
    const totalAdultPrice = adultCount * adultPrice;
    const totalChildPrice = childCount * childPrice;
    const totalInfantPrice = InfantCount * InfantPrice;

    // Final total price
    const totalPrice = totalAdultPrice + totalChildPrice + totalInfantPrice

    const OldAdult = adultCount * data?.priceAdult
    const OldChildPrice = childCount > 0 ? childCount * data?.priceChild : 0
    const strickPrice = OldAdult + OldChildPrice + totalInfantPrice



    // booking Data
    const dateString = formData?.date;
    let formattedDate;

    const cleanDateString = dateString?.replace(/(\d+)(st|nd|rd|th)/, '$1');
    const parsedDate = parse(cleanDateString, 'MMMM d, yyyy', new Date());
    formattedDate = format(parsedDate, 'yyyy-MM-dd');


    const bookingData = {
        tourId: data?._id,
        name: formData?.name,
        email: formData?.email,
        phoneNumber: formData?.phone,
        language: formData?.language,
        participants: {
            adults: adultCount,
            children: childCount,
            infant: InfantCount,
        },
        date: formattedDate,
    }
    const [loader, setLoader] = useState(false);
    const [isThankYouOpen, setIsThankYouOpen] = useState(false);

    const onSubmit = async (data) => {

        setLoader(true)
        const res = await booking(data)
        setLoader(false)
        if (res?.status == "Success") {
            setIsThankYouOpen(true)
            setLoader(false)
        } else {
            setLoader(false)
            toast?.error(res?.message)
        }

    };


    return (
        <MaxWidthWrapper className='sm:mt-8 mt-8  lg:px-10 md:px-8 sm:px-6 px-2'>
            <div className='lg:w-[65%] w-full flex flex-col gap-y-4 border-navy rounded-[18px] border-2  pt-4'>
                <div className='md:px-6 px-3'>
                    <HeadingThree className='text-[#131313] sm:text-[22px] font-semibold'>
                        {data?.title}
                    </HeadingThree>
                    <Para className='mt-1 lg:w-[85%] w-full'>
                        {data?.description}
                    </Para>
                </div>
                <div className=' md:px-6 px-3'>
                    <div className='lg:w-[60%] w-full  flex justify-between items-center'>
                        <span className='flex gap-x-2'>
                            <TbClockCancel size={25} />
                            <Para className='font-semibold text-ocean'>
                                {data?.duration} hours
                            </Para>
                        </span>
                        <span className='flex gap-x-2'>
                            <IoPersonOutline size={25} />
                            <Para className='font-semibold text-ocean'>
                                Guide: {formData?.language}
                            </Para>
                        </span>
                    </div>
                    {/* <div className='border-t-2 border-b-2 border-[#e0e0e0] mt-6 py-2'>
                        <Para className='font-semibold text-ocean'>
                            Starting Time
                        </Para>
                        <Para className='font-semibold text-ocean'>
                            8.30 AM
                        </Para>
                    </div> */}
                    <div className='border-t-2 border-b-2 border-[#e0e0e0] pt-6 flex lg:flex-row flex-col gap-y-6 justify-between lg:items-center items-start mt-6'>
                        <div className='flex lg:flex-row flex-col  gap-x-6  items-start'>
                            <div className='lg:w-[60%] w-full  flex-col gap-y-6'>
                                <span className='flex gap-x-2'>
                                    <Calendar size={28} strokeWidth={1.25} />
                                    <Para className='text-ocean font-semibold'>
                                        Cancel before 24 hours for a full refund
                                    </Para>
                                </span>
                                <span className='lg:flex hidden gap-x-2 mt-2'>
                                    <MdPayment size={28} />
                                    <Para className='text-ocean font-semibold'>
                                        You can{' '}
                                        <span className='text-amber underline-offset-1'>
                                            reserve now & pay later
                                        </span>{' '}
                                        with this activity option
                                    </Para>
                                </span>
                            </div>
                            <div className='flex justify-between items-center lg:mt-0 mt-4'>
                                <span className='flex flex-col gap-y-2'>
                                    <Para className='text-ocean font-semibold whitespace-nowrap'>
                                        Price breakdown
                                    </Para>
                                    <Para>
                                        Adult {adultCount} x ${adultPrice}  = ${totalAdultPrice}
                                    </Para>
                                    {
                                        childCount > 0 &&
                                        < Para >
                                            Child {childCount} x ${childPrice} = ${totalChildPrice}
                                        </Para>
                                    }
                                    {
                                        InfantCount > 0 &&
                                        < Para >
                                            Infant {InfantCount} x ${InfantPrice} = ${totalInfantPrice}
                                        </Para>
                                    }
                                </span>
                            </div>
                        </div>
                        <span className='flex lg:hidden gap-x-2'>
                            <MdPayment size={28} />
                            <Para className='text-ocean font-semibold'>
                                You can{' '}
                                <span className='text-amber underline-offset-1'>
                                    reserve now & pay later
                                </span>{' '}
                                with this activity option
                            </Para>
                        </span>
                    </div>
                </div>
                <div className='bg-[#e6ebef] flex justify-between items-center gap-x-2 py-4 lg:px-6 px-3 rounded-b-[18px]'>
                    <span>
                        <Para>Total price</Para>
                        <h6 className='text-amber font-semibold lg:text-2xl text-lg'>
                            ${totalPrice}
                        </h6>
                        {
                            data?.discountAmount > 0 && (<Para>
                                $ {strickPrice}{' '}
                                <span className='text-amber'> {Math?.round(((strickPrice - totalPrice) / strickPrice) * 100)}%</span>
                            </Para>)
                        }
                        <Para>Unsere Preise einschließlich sämtlicher Steuern und Gebühren</Para>
                    </span>
                    <span>
                        <Button
                            onClick={() => onSubmit(bookingData)}
                            className='mt-4 px-10 rounded-full bg-navy hover:bg-navy h-11'>
                            {loader ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : '  BOOK NOW'}
                        </Button>
                    </span>
                    {isThankYouOpen && <ThankYouModal
                        isOpen={isThankYouOpen}
                        onClose={() => setIsThankYouOpen(false)}
                    />}
                </div>
            </div>
        </MaxWidthWrapper >
    )
}

export default BookingDetail
