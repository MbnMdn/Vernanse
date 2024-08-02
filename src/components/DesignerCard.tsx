import bath from '../assets/bath.jpg';
import profilePic from '../assets/profilePic.jpeg';

export default function DesignerCard() {
  return (
    <main className="mx-2 p-3">
      <div
        className=" relative w-full overflow-hidden rounded-xl shadow-sm shadow-tertiary hover:shadow-md
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

        <div className="m-8 mt-12 flex flex-col gap-2">
          <div className="leading-8">
            <div className=" text-xl font-bold ">Jordan Lin</div>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, nulla totam
            laboriosam earum veritatis
          </p>
        </div>
      </div>
    </main>
  );
}
