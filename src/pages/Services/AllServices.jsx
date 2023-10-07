import React from 'react';
import { Link } from 'react-router-dom';

const AllServices = ({service}) => {
    const {image, id, price, name, description} = service || {};

    return (
       <div>
             <div className="relative flex w-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
             
             >
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
          <h3 className="mt-2 block text-red-500 text-xl font-bebasneue font-bold leading-normal antialiased p-[2px] mb-2"
        
        >
          {name} </h3>

            <p className="block text-base font-avenir font-bold leading-relaxed text-gray-900 antialiased"
            >
              {price}
            </p>
           
          </div>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base font-semibold leading-relaxed antialiased"
            >
              {
            description.length > 200 ? <p>{description.slice(0, 200)}<Link to={`/service/${id}`} className="text-yellow-800 font-bold">...</Link></p>
            :
            <p>{description}</p>
        }
            </p>
           
          </div>
             <div>
             <Link to={`/service/${id}`}>
             <button className='bg-[red] hover:bg-[green] font-avenir text-[white] rounded px-5 py-2'>Details</button></Link>
             </div>
        </div>
        
      </div>
    </div>
    );
};

export default AllServices;