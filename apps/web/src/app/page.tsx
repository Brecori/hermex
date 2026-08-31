import { categoryExamples, vehicleExamples } from "@/components/_data/vehicles";
import { HomeTemplate } from "@/components/templates/HomeTemplate";

export default function Home() {
  return <HomeTemplate categories={[...categoryExamples]} vehicles={[...vehicleExamples]} />;
}
