import { Image } from 'antd';
import React from 'react';

import pic1 from '../assets/bath.jpg';
export default function Picture() {
  return (
    <div className="group relative w-80 flex-none rounded-lg">
      <Image alt="Classic" src={pic1} className="rounded-md" />
      {/*<img src={pic1} alt="Classic" className=" rounded-md" />*/}
    </div>
  );
}
