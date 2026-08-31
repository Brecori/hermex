"use client";

import {
  Footer,
  Header,
  HeroBanner,
  SearchBar,
  type SearchBarValues,
  VehicleGrid,
  type VehicleGridCategory,
  type VehicleGridVehicle,
} from "@/components/organisms";

type HomeTemplateProps = {
  categories: VehicleGridCategory[];
  onCategoryChange?: (categoryId: string | null) => void;
  onDetailsClick?: (vehicleId: string) => void;
  onSearch?: (values: SearchBarValues) => void;
  searchErrorMessage?: string;
  selectedCategoryId?: string | null;
  showClearSearchButton?: boolean;
  vehicles: VehicleGridVehicle[];
};

export function HomeTemplate({
  categories,
  onCategoryChange,
  onDetailsClick,
  onSearch,
  searchErrorMessage,
  selectedCategoryId = null,
  showClearSearchButton = false,
  vehicles,
}: HomeTemplateProps) {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <HeroBanner />
      <div className="relative z-20 mx-auto -mt-16 max-w-6xl px-4 sm:px-6">
        <SearchBar
          errorMessage={searchErrorMessage}
          onSearch={onSearch}
          showClearButton={showClearSearchButton}
        />
      </div>
      <VehicleGrid
        categories={categories}
        onCategoryChange={onCategoryChange}
        onDetailsClick={onDetailsClick}
        selectedCategoryId={selectedCategoryId}
        vehicles={vehicles}
      />
      <Footer
        instagramHref="https://www.instagram.com/"
        tiktokHref="https://www.tiktok.com/"
        whatsappHref="https://www.whatsapp.com/"
      />
    </main>
  );
}
