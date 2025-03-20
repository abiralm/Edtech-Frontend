import { CtaSection } from "./component/sections/ctaSection";
import { Features } from "./component/sections/features";
import { Hero } from "./component/sections/hero";
import { Popular } from "./component/sections/popular";
import { Testimonials } from "./component/sections/testimonials";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <Popular/>
      <Testimonials/>
      <CtaSection/>
    </div>
  );
}
