import { StarFilter } from './StarFilter/StarFilter';
import { FilterByChildren } from './FilterByChildren/FilterByChildren';
import { FilterByAdults } from './FilterByAdults/FilterByAdults';

export const FormFilter = () => {
  const formFilterContentClassNames =
    'flex bg-stone-300 border-2 border-[#00c3ff] border-solid rounded-xl p-2.5 flex-col md:flex-row items-center';

  return (
    <div className="w-full flex justify-center -translate-y-1/2">
      <div className={formFilterContentClassNames}>
        <StarFilter starsDataTestId="stars-hero-filter-test-id" />
        <FilterByChildren />
        <FilterByAdults />
      </div>
    </div>
  );
};
