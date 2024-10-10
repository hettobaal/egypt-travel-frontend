import MaxWidthWrapper from '@/components/reuseable/MaxWidthWrapper'
import AddReview from '@/components/reviews/AddReview'
import { getTours } from '@/lib/siteApis'

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
