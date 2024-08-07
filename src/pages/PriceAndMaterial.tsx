import PriceAndMaterialSection from '../components/Admin Panel/Price And Material/PriceAndMaterialSection';

export default function PriceAndMaterial({ user_role }: { user_role: string }) {
  return <PriceAndMaterialSection user_role={user_role} />;
}
