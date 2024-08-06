import AddNewProjectForm from './AddNewProjectForm';

export default function AddNewSection() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-medium text-darkGreen">Add New</h2>
      <AddNewProjectForm />
    </div>
  );
}
