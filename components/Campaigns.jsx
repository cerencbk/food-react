import Image from "next/image";
import Title from "./uı/Title";
import { FaCartShopping } from "react-icons/fa6";


const CampaignItem = () => {
    return ( 
        <div className="bg-secondary flex-1 rounded-lg py-[15px] px-[15px] flex items-center">
            <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-[''] border-[5px]
             border-primary rounded-full overflow-hidden gap-4">
                <Image 
                    className="hover:scale-105 transition-all"
                    src="/images/o1.jpg" 
                    alt="" 
                    layout="fill" 
                    objectFit="cover" 
                />
            </div>
            <div className="mx-2">
                <div className="text-white">
                    <span className="text-2xl font-dancing">Tasty Thursdays</span>
                    <div className="font-dancing my-1">
                        <span className="text-[50px]">20%</span>
                        <span className="text-sm inline-block ml-1">Off</span>
                    </div>
                </div>
                <button className="btn-primary flex items-center gap-x-2">
                    Order Now <FaCartShopping size={20} />
                </button>
            </div>
        </div>
    );
};


const Campaigns = () => {
  return (
    <div className='flex container mx-auto py-20 gap-6 flex-wrap '>
        <CampaignItem/>
        <CampaignItem/>
    </div>
  )
}

export default Campaigns
