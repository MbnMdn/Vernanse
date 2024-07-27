import NavLinks from './NavLinks';

export default function NavBar() {
  return (
    <div>
      <div className="flex flex-col justify-between px-3 py-4 md:h-screen md:px-4 md:pb-11 ">
        <div className="flex flex-col justify-between md:h-screen">
          <div className="fixed bottom-0 left-0 right-0 flex grow flex-row  space-x-2 rounded-md md:static md:ml-3 md:flex-col  md:space-x-0 md:space-y-1  lg:static">
            <NavLinks />
          </div>
        </div>
      </div>
    </div>
  );
}
