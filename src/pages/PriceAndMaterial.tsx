import PriceAndMaterialSection from '../components/Price And Material/Admin/PriceAndMaterialSection';

export default function PriceAndMaterial({ user_role }: { user_role: string }) {
  return <PriceAndMaterialSection user_role={user_role} />;
}
