import AdminProjectsSection from '../components/Projects/Admin/AdminProjectsSection';
import FullServiceSection from '../components/Projects/FullServiceSection';
import SingleServiceSection from '../components/Projects/SingleServiceSection';

export default function Projects({ user_role }: { user_role: string }) {
  return (
    <div className="flex flex-col gap-8  ">
      {user_role === 'admin' ? (
        <AdminProjectsSection user_role={user_role} />
      ) : (
        <>
          <FullServiceSection />
          <SingleServiceSection />
        </>
      )}
    </div>
  );
}
