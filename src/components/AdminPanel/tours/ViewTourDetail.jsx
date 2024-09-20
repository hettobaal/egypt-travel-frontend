import React from 'react'
import UpdateTourItem from './UpdateTourItem';

function ViewTourDetail({ data }) {
    console.log("tour Detail", data);

    return (
        <section className="mt-10 pb-4 pt-4 h-full bg-white dark:bg-darkMode px-4 py-2  rounded-xl shadow-lg flex flex-col gap-y-8 ">
            <div >
                {/* {
                    data?.highlights?.map((item, index) => {
                        return (
                            <span key={index}>
                                <li>{item?.point}</li>
                                <UpdateTourItem
                                    data={item?.point}
                                    id={data?._id} />
                            </span>
                        )
                    })
                } */}


                <span>
                    {data?.title}
                    <UpdateTourItem
                        data={data?.title}
                        id={data?._id} />
                </span>

            </div>
        </section>
    )
}

export default ViewTourDetail;
