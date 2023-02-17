import { HeroFilter } from './HeroFilter/HeroFilter';
import { HeroBackground } from './HeroBackground/HeroBackground';

export const Hero = () => (
  <div className="w-full md:mb-[50px] relative">
    <HeroBackground />
    <HeroFilter />
  </div>
);