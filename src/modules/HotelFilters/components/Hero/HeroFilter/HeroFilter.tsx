import { FilterByAdults } from '@/modules/HotelFilters/components/Hero/HeroFilter/FilterByAdults/FilterByAdults';
import { FilterByChildren } from '@/modules/HotelFilters/components/Hero/HeroFilter/FilterByChildren/FilterByChildren';
import { StarFilter } from '@/modules/HotelFilters/components/Hero/HeroFilter/StarFilter/StarFilter';

export const HeroFilter = () => {
  const formFilterContentClassNames =
    'flex bg-stone-300 border-2 border-[#00c3ff] border-solid rounded-xl p-2.5 flex-col md:flex-row items-center';

  return (
    <div
      data-testid="stars-hero-filter-test-id"
      className="w-full flex justify-center -translate-y-1/2"
    >
      <div className={formFilterContentClassNames}>
        <StarFilter />
        <FilterByChildren />
        <FilterByAdults />
      </div>
    </div>
  );
};
