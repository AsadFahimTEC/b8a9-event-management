
import boy3 from '../../assets/boy3.png'
import boy4 from '../../assets/boy4.png'
import girl1 from '../../assets/girl1.jpg'
import girl2 from '../../assets/girl2.jpg'

const Home = () => {
  return (
   <div>
     <section className="mt-6 font-montserrat dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">One Ummah Festival</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">One Ummah Festival is a vibrant celebration of unity, diversity, and the rich cultural heritage of the Muslim community. Join us for a day of festivities that showcase the traditions, art, cuisine, and shared values that bring us together as one global Ummah.</p>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img src="./banner.png"/>
        </div>                
    </div>
</section>

<div>
    
<div className="w-full mx-auto max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Festival Donation Customers</h5>
   </div>
   <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-14 h-14 rounded-full" src={boy3}alt="boy1"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Yousuf Ali
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            yousuf@alistar.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $320
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-14 h-14 rounded-full" src={girl1} alt="girl1"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Maria Sana
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            maria@sana.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $346
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-14 h-14 rounded-full" src={girl2} alt="girl2 image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Sara Khan
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            sara@khan.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $67
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-14 h-14 rounded-full" src={boy4} alt="boy2"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            Lana Byrd
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            email@windster.com
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        $367
                    </div>
                </div>
            </li>
           
        </ul>
   </div>
</div>

</div>
   </div>
  );
};

export default Home;
