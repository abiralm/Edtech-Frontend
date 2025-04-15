import { CtaSection } from "./component/home-sections/ctaSection";
import { Features } from "./component/home-sections/features";
import { Hero } from "./component/home-sections/hero";
import { Popular } from "./component/home-sections/popular";
import { Pricing } from "./component/home-sections/pricing";
import { Testimonials } from "./component/home-sections/testimonials";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Popular/>
      <Testimonials/>
      {/* <Pricing/> */}
      <CtaSection/>
    </div>
  );
}
