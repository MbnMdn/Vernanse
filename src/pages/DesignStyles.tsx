import AddNewStyleSection from '../components/Design Styles/Admin/AddNewStyleSection';
import StyleCard from '../components/Home/Customer/StyleCard';
import ScrollableCards from '../components/ScrollableCards';

export default function DesignStyles() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-medium text-darkGreen ">Styles</h3>
        <ScrollableCards>
          <StyleCard />
        </ScrollableCards>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-medium text-darkGreen">Add New Style</h3>
        <AddNewStyleSection />
      </div>
    </div>
  );
}
