import React from 'react';
import { Link } from 'react-router-dom';

const AllServices = ({service}) => {
    const {image, id, price, name, description} = service || {};

    return (
       <div>
            <Link to={`/services/${id}`}>
             <div className="relative flex w-76 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
             
             >
        <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={image} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <button className="mt-2 block text-sm  font-medium leading-normal antialiased p-[2px] mb-2"
        
          >
            {name}
          </button>
          <div className="mb-2 flex items-center justify-between">
            <p className="block text-base font-semibold leading-relaxed text-blue-gray-900 antialiased"
            >
              {price}
            </p>
           
          </div>

        </div>
        
      </div>
      </Link>
    </div>
    );
};

export default AllServices;