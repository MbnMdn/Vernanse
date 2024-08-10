import OfferForm from '../components/Offers/Admin/OfferForm';

export default function Offers() {
  return (
    <div className="flex flex-col  gap-24  lg:flex-row">
      <div className="flex flex-col gap-3 lg:w-2/5">
        <h3>Banner 1</h3>
        <OfferForm />
      </div>
      <div className="flex flex-col gap-3 lg:w-2/5">
        <h3>Banner 2</h3>
        <OfferForm />
      </div>
    </div>
  );
}
