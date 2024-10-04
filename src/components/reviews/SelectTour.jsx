'use client'

import { getTours } from '@/lib/siteApis'
import React, { useState, useEffect } from 'react'


export default function SelectTour({toursData, setTourName, tourName, setTourId}) {

  const [openDropdown, setOpenDropdown] = useState(false)
  

  return (
    <>
    <div className=' w-full'>
  <label id="listbox-label" className="block text-lg font-semibold leading-6 text-gray-900">Select Tour For Review</label>
  <div className="relative  mt-2" onClick={()=>{setOpenDropdown(!openDropdown)}}>
    <button type="button" className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-1 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
      <span className="flex items-center">
        <span className="ml-3 text-lg block truncate"> {tourName}</span>
      </span>
      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
        <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
          <path fillRule="evenodd" d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" clipRule="evenodd" />
        </svg>
      </span>
    </button>

    { openDropdown && 
    <ul className="  absolute z-10 mt-1  max-h-64 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
      
      {toursData?.map((tour, i)=>{
        return (<>
      <li onClick={()=>{setTourName(tour.title), setTourId(tour._id)}}  className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"  role="option">
        <div className="flex items-center">
          <span   className="ml-3 block truncate font-normal" > {tour.title}</span>
        </div>


        {tourName === tour.title && (


        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
        </span>
        )}
      </li>  
        
        </>)
      })}
      
      
      
      {/* <li className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900" id="listbox-option-0" role="option">
        <div className="flex items-center">
          <span onClick={(e)=>{setSelectedTour(e.target.value)}} value="Wade Cooper 2" className="ml-3 block truncate font-normal">Wade Cooper2</span>
        </div>

        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
        </span>
      </li>
      <li               onClick={() => setSelectedTour("Wade Cooper 3")}
 className="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900" id="listbox-option-0" role="option">
        <div className="flex items-center">
          <span  classNameName="ml-3 block truncate font-normal">Wade Cooper 3</span>
        </div>

        <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600">
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
        </span>
      </li> */}

    </ul>}
  </div>
</div>

</>
  )
}
