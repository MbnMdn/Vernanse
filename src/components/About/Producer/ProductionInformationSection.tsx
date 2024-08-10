import ProductionInformationForm from './ProductionInformationForm';

export default function ProductionInformationSection() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-medium text-darkGreen">Production Information</h2>
        {/*<ScrollableCards>*/}
        {/*  <StyleCard />*/}
        {/*</ScrollableCards>*/}
      </div>
      <ProductionInformationForm />
    </div>
  );
}
