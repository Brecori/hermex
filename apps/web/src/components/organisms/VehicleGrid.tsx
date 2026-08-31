"use client";

import { CategorySelect } from "@/components/molecules/CategorySelect";
import { VehicleCard } from "@/components/molecules/VehicleCard";

export type VehicleGridVehicle = {
  categoryId?: string;
  dailyPrice: number | string;
  description: string;
  id: string;
  imageAlt: string;
  imageSrc: string;
  vehicleName: string;
};

export type VehicleGridCategory = {
  id: string;
  name: string;
};

type VehicleGridProps = {
  categories: VehicleGridCategory[];
  isLoading?: boolean;
  onCategoryChange?: (categoryId: string | null) => void;
  onDetailsClick?: (vehicleId: string) => void;
  selectedCategoryId?: string | null;
  vehicles: VehicleGridVehicle[];
};

export function VehicleGrid({
  categories,
  isLoading = false,
  onCategoryChange,
  onDetailsClick,
  selectedCategoryId = null,
  vehicles,
}: VehicleGridProps) {
  return (
    <section className="w-full bg-[var(--background)] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <CategorySelect
            emptyOptionLabel="Todas as categorias"
            onChange={(event) => onCategoryChange?.(event.target.value || null)}
            options={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}
            value={selectedCategoryId ?? ""}
          />
          {isLoading ? (
            <p className="text-sm text-[var(--muted)]" role="status">
              Carregando veículos...
            </p>
          ) : null}
        </div>
        {vehicles.length > 0 ? (
          <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                {...vehicle}
                onDetailsClick={() => onDetailsClick?.(vehicle.id)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded bg-white p-8 text-center text-[var(--neutral-text)] shadow-[0_0_10px_rgba(132,132,132,0.12)]">
            Nenhum veículo encontrado
          </div>
        )}
      </div>
    </section>
  );
}
