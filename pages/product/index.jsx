import React from 'react'
import Image from 'next/image'
import Title from '@/components/uı/Title'

const index = () => {
  return (
    <div className='flex  md:items-center justify-center h-screen gap-20 py-20 flex-wrap '>
      <div className='relative md:flex-1 w-[80%] h-[80%] mx-20"'>
        <Image 
        src="/images/f1.png"
        alt=""
        layout='fill'
        objectFit='contain'/>
      </div>
      <div className='md:flex-1 md:text-start text-center'>
        <Title>Good Pizza</Title>
        <span className='text-primary text-2xl font-bold underline underline-offset-1 my-4 inline-block'>$10</span>
        <p className='text-sm my-4 md:pr-24'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus magnam saepe eos provident, 
            asperiores minus quod praesentium dignissimos mollitia omnis error eligendi perspiciatis unde 
            impedit repellendus fugit? Iusto, qui consequuntur?
        </p>
        <div className='py-8'>
            <h4 className='py-3 text-xl font-bold'>Choose the size</h4>
            <div className='flex items-center gap-x-20 md:justify-start justify-center'>
                <div className='relative w-8 h-8'>
                    <Image 
                    src="/images/size.png"
                    alt=""
                    layout='fill'/>
                    <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Small</span>
                </div>
                <div className='relative w-12 h-12'>
                    <Image 
                    src="/images/size.png"
                    alt=""
                    layout='fill'/>
                    <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Medium</span>
                </div>
                <div className='relative w-16 h-16'>
                    <Image 
                    src="/images/size.png"
                    alt=""
                    layout='fill'/>
                    <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Large</span>
                </div>
            </div>
            <div className='flex gap-x-4 mt-4 md:justify-start justify-center'>
                <label className='flex items-center gap-x-1'>
                    <input
                    type="checkbox"
                    className='w-5 h-5 accent-primary'/>
                    {/* accent-primary checkbox un tıklandığındaki rengini değiştirmeye yarıyor */}
                    <span className='text-sm font-semibold '>Ketçap</span>
                </label>
                <label className='flex items-center gap-x-1'>
                    <input
                    type="checkbox"
                    className='w-5 h-5 accent-primary'/>
                    {/* accent-primary checkbox un tıklandığındaki rengini değiştirmeye yarıyor */}
                    <span className='text-sm font-semibold '>Mayonez</span>
                </label>
                <label className='flex items-center gap-x-1'>
                    <input
                    type="checkbox"
                    className='w-5 h-5 accent-primary'/>
                    {/* accent-primary checkbox un tıklandığındaki rengini değiştirmeye yarıyor */}
                    <span className='text-sm font-semibold '>Acı Sos</span>
                </label>
            </div>
            <button className='btn-primary mt-6'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default index
