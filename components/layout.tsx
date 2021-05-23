import { Header, HeaderProps } from "./header";
import { Footer, FooterProps } from "./footer";

export interface LayoutProps extends HeaderProps, FooterProps {
  children?: React.ReactNode;
}

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
    </div>
  );
};

export default Layout;
