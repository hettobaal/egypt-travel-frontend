import { getBlogs } from '@/lib/siteApis';
import React from 'react'

async function page() {

    const data = await getBlogs()
    console.log("data", data?.data);


    return (
        <div className='mt-[120px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi cum repellendus deleniti minima accusantium alias, nemo sunt autem tenetur debitis. Amet id eius eaque porro repellat. Quo voluptate, quas neque accusantium qui ex aliquam iste corporis iure a eligendi cumque libero magnam quidem ut, consectetur aspernatur fugiat consequuntur nihil id ipsam porro optio modi nam? Qui sit, nesciunt harum sequi deleniti id dolore asperiores tempore doloremque, adipisci magnam nihil corrupti facere rerum laudantium consequuntur, autem possimus! Mollitia numquam dolore facere porro laborum debitis. Suscipit magni facere soluta cumque iusto, doloremque sunt, maxime mollitia nemo similique fuga nostrum officia impedit vero aliquam. Aperiam non dolorem delectus animi unde fuga nesciunt aut deserunt voluptate atque facere quod magni nulla, quis sapiente at, vero reiciendis laborum, itaque id repellendus. Voluptatibus nostrum blanditiis atque ad id perferendis fugit sapiente et! Nam dolore repellendus enim tempore aspernatur est laborum nobis sapiente eius cumque, modi tempora ut vel ducimus, aut amet neque quod quas debitis accusantium velit! Modi placeat, adipisci aut enim excepturi nesciunt vel rem magnam laboriosam, aliquid harum ea minus odio molestiae accusamus tempora est, expedita illo sint quibusdam corporis soluta nam possimus voluptatem? Itaque voluptatem quisquam exercitationem odit nobis delectus quam rerum.
            <div className='mt-[50px]'>
                hello world
            </div>
        </div>
    )
}

export default page;
