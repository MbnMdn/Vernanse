import { Image } from 'antd';
import React from 'react';

import pic1 from '../../../assets/bath.jpg';

export default function StyleCard() {
  return (
    // <Image.PreviewGroup
    //   items={[
    //     'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    //     'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    //     'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
    //   ]}
    // >
    //   <div className="group relative w-64 flex-none  rounded-lg md:w-80">
    //     <Image src={pic1} alt="Classic" className=" rounded-md" />
    //     <div className="absolute inset-0  rounded-md bg-mainGreen opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
    //     <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
    //       <h2 className="text-3xl font-semibold md:text-4xl">Minimalism</h2>
    //     </div>
    //   </div>
    // </Image.PreviewGroup>


    <div className="group relative w-64 flex-none  rounded-lg md:w-80">
      <img src={pic1} alt="Classic" className=" rounded-md" />
      <div className="absolute inset-0  rounded-md bg-mainGreen opacity-40 transition-opacity duration-300 group-hover:opacity-60"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
        <h2 className="text-3xl font-semibold md:text-4xl">Minimalism</h2>
      </div>
    </div>
  );
}
