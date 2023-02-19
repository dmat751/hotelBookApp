import { HeroBackground } from '@/modules/HotelFilters/components/Hero/HeroBackground/HeroBackground';
import { HeroFilter } from '@/modules/HotelFilters/components/Hero/HeroFilter/HeroFilter';

export const Hero = () => (
  <div className="w-full md:mb-[50px] relative">
    <HeroBackground />
    <HeroFilter />
  </div>
);
