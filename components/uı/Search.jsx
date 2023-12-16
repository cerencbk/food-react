import React from 'react';
import Title from './Title';
import OutsideClickHandler from 'react-outside-click-handler';
import Image from 'next/image';
import { MdOutlineCancel } from "react-icons/md";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50
    after:content-[''] after:w-screen after:h-screen after:absolute after:bg-white
    after:top-0 after:left-0 first-of-type:h-screen grid after:opacity-60 place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-50 md:w[600px] w-[370] bg-white border-2 p-10 rounded-3xl">
            <Title addClass="text-center">Search</Title>
            <input
              type="text"
              placeholder="Search"
              className="border w-full my-10"
            />
            <button className='absolute top-4 right-4' onClick={()=> setIsSearchModal(false)}>
                <MdOutlineCancel size={30} />
            </button>
            <ul className=''>
                <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
                  <div className="relative flex">
                    <Image
                      src="/images/f1.png"
                      width={48}
                      height={48}
                      alt=""
                    />
                  </div>
                  <span className='font-bold'>Good Pizza</span>
                  <span className='font-bold'>$10</span>
                </li>
            </ul>
            <ul className=''>
                <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
                  <div className="relative flex">
                    <Image
                      src="/images/f1.png"
                      width={48}
                      height={48}
                      alt=""
                    />
                  </div>
                  <span className='font-bold'>Good Pizza</span>
                  <span className='font-bold'>$10</span>
                </li>
            </ul>
            <ul className=''>
                <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
                  <div className="relative flex">
                    <Image
                      src="/images/f1.png"
                      width={48}
                      height={48}
                      alt=""
                    />
                  </div>
                  <span className='font-bold'>Good Pizza</span>
                  <span className='font-bold'>$10</span>
                </li>
            </ul>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
