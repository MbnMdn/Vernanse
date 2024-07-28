import OfferCard from './OfferCard';

export default function SpecialOffersSection() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl font-medium text-darkGreen">Special Offers</h2>
      <OfferCard />
    </div>
  );
}
