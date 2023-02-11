import { FormFilter } from './HeroFilter/HeroFilter';
import { HeroBackground } from './HeroBackground/HeroBackground';

export const Hero = () => {
  return (
    <div className="w-full md:mb-[50px] relative">
      <HeroBackground />
      <FormFilter />
    </div>
  );
};
