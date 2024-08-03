import AuthTabs from '../components/Auth/AuthTabs';
import Slider from '../components/Auth/Slider';

export default function Auth() {
  return (
    <div className="flex bg-tertiaryLight ">
      <div className="hidden h-screen w-7/12 rounded-full p-3 pr-0 md:block">
        <Slider />
      </div>
      <div className="h-screen w-full rounded-full p-3 md:w-5/12">
        <AuthTabs />
      </div>
    </div>
  );
}
