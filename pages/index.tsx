import Layout, { LayoutProps } from "../components/layout";
import AbuotUs, { AboutUsProp } from "../components/sections/abuot-us";
import ContactUs from "../components/sections/contact-us";
import EmbededVideo from "../components/sections/embeded-video";
import FeedBack from "../components/sections/feed-back";
import { HeroImage, HeroImageProps } from "../components/sections/hero-bg-image";
import Services from "../components/sections/services";
import Team from "../components/sections/team";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroImage />
        <AbuotUs />
        <EmbededVideo />
        <Services />
        <FeedBack />
        <Team />
        <ContactUs />
      </Layout>
    </>
  );
}
