import bath from '../../assets/bath.jpg';
import profilePic from '../../assets/profilePic.jpeg';

export default function DesignerCard() {
  return (
    <main className="mx-2  p-3">
      <div className=" relative w-full overflow-hidden rounded-xl bg-neutral-300 shadow-md hover:shadow-lg">
        <div className="header relative">
          <img className="w-full scale-125 transform" src={bath} alt="header" />
          <img
            className="object-cover absolute left-1/2  w-16 h-16 -translate-x-1/2 -translate-y-1/3 transform rounded-full border-2 border-secondary"
            src={profilePic}
            alt="profile-pic"
          />
        </div>

        <div className="flex flex-col gap-2 m-8 mt-12">
          <div className="leading-8">
            <div className=" text-xl font-bold ">Jordan Lin</div>
          </div>

          <p >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, nulla totam
            laboriosam earum veritatis
          </p>
        </div>
      </div>
    </main>
  );
}
