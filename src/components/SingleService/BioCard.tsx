import { Button } from 'antd';
import React from 'react';

import bath from '../../assets/bath.jpg';
import profilePic from '../../assets/profilePic.jpeg';
import OpenCardDetailsModalButton from './OpenCardDetailsModalButton';

export default function BioCard() {
  return (
    <main className="mx-2 min-w-[350px] p-3">
      <div
        className=" relative flex w-full flex-col items-center overflow-hidden rounded-xl  shadow-sm shadow-tertiary hover:shadow-md
       hover:shadow-tertiary"
      >
        <div className="header relative">
          <img className="w-full scale-125 transform" src={bath} alt="header" />
          <img
            className="absolute left-1/2 h-14  w-14 -translate-x-1/2 -translate-y-1/4 transform rounded-full  object-cover"
            src={profilePic}
            alt="profile-pic"
          />
        </div>

        <div className="m-7 mt-12 flex flex-col gap-2">
          <div className="flex justify-between gap-16 leading-8">
            <div className=" text-xl font-bold ">Jordan Lin</div>
            <div className="text-sm">Since 1990</div>
          </div>

          <p className="text-sm text-lightGrey">
            Some quick example text to build on the card title and make up the bulk of the
            card's content. Some quick example text to build on the card title
          </p>
          <div className="w-full self-center">
            <OpenCardDetailsModalButton />
          </div>
        </div>
      </div>
    </main>
  );
}

//import bath from '../assets/bath.jpg';
// import profilePic from '../assets/profilePic.jpeg';
//
// export default function DesignerCard() {
//   return (
//     <main className="mx-2 min-w-[300px] p-3">
//       <div
//         className=" relative w-full overflow-hidden rounded-xl shadow-sm shadow-tertiary hover:shadow-md
//        hover:shadow-tertiary"
//       >
//         <div className="header relative">
//           <img className="w-full scale-125 transform" src={bath} alt="header" />
//           <img
//             className="absolute left-1/2 h-14  w-14 -translate-x-1/2 -translate-y-1/4 transform rounded-full  object-cover"
//             src={profilePic}
//             alt="profile-pic"
//           />
//         </div>
//
//         <div className="m-8 mt-12 flex flex-col gap-2">
//           <div className="leading-8">
//             <div className=" text-xl font-bold ">Jordan Lin</div>
//           </div>
//
//           <p className="text-sm text-neutral-600">
//             Some quick example text to build on the card title and make up the bulk of the
//             card's content. Some quick example text to build on the card title
//           </p>
//         </div>
//       </div>
//     </main>
//   );
// }
