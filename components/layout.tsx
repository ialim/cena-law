import { Header, HeaderProps } from "./header";
import { Footer, FooterProps } from "./footer";
import Link from "next/link";
import { SVG } from "../svg";

export interface LayoutProps extends HeaderProps, FooterProps {
  children?: React.ReactNode;
}

const { whatsapp } = SVG;

const Layout = ({
  navItems,
  title,
  home,
  socials,
  blockcontent,
  footerNavItems,
  children,
}: LayoutProps) => {
  return (
    <div>
      <Header navItems={navItems} title={title} />
      {children}
      <Footer
        home={home}
        socials={socials}
        blockcontent={blockcontent}
        footerNavItems={footerNavItems}
      />
      <div className="fixed bottom-0 left-0 w-32 px-20 py-28 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" >
        <Link href="https://api.whatsapp.com/send?phone=2349011151234">
          {whatsapp}
        </Link>
        <div className="inline ">
          
        </div>
      </div>
    </div>
  );
};

export default Layout;
