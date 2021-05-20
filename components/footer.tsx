import Link from "next/link";
import React from "react";
import { SVG } from "../svg";

interface FooterProps {
  home?: string;
  footerNavItems: {
    title: string;
    links: string[];
  }[];
  socials: {
    name: string;
    link: string;
  }[];
  blockcontent: string;
}

export const Footer = ({
  home = "Cena Law",
  footerNavItems = [
    {
      title: "Company Info",
      links: ["About Us", "Career", "We are Hiring", "Blog"],
    },
    { title: "Legal", links: ["About Us", "Career", "We are Hiring", "Blog"] },
    {
      title: "Features",
      links: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    { title: "Resources", links: ["Learn about us", "Customers"] },
  ],
  socials = [
    { name: "Facebook", link: "/facebook" },
    { name: "Instagram", link: "/instagram" },
    { name: "Twitter", link: "/twitter" },
    { name: "Youtube", link: "/youtube" },
  ],
  blockcontent = "© 2021 Cena Law.",
}: FooterProps) => (
  <>
    <footer className="bg-brand-dark text-white">
      <div className="mx-11 lg:mx-48 divide-y-2 divide-brand-Stroke">
        <div className="flex flex-col  lg:flex-row lg:justify-between py-14 lg:items-center ">
          <h3 className="font-GTSuper font-bold text-2xl">{home}</h3>
          <div className="flex mt-11 lg:mt-0 lg:justify-center space-x-3">
            {" "}
            {socials &&
              socials.map(({ name, link }, index) => (
                <Link href={link} key={index}>
                  <a>
                    <span className="sr-only">{name}</span>
                    {SVG[name.toLowerCase()].gold}
                  </a>
                </Link>
              ))}
          </div>
        </div>
        <nav
          className="flex flex-col justify-evenly lg:flex-row lg:justify-between py-16"
          aria-label="Footer"
        >
          {footerNavItems &&
            footerNavItems.map(({ title, links }, index) => (
              <div className="text-left tracking-tight mt-6 lg:mt-0" key={index}>
                <h5 className="font-bold font-GTSuper text-base">{title}</h5>
                <ul className="mt-4">
                  {links &&
                    links.map((link, index) => (
                      <li key={index}>
                        <Link href={`/${link}`}>
                          <a className="font-semibold font-BasierCircle text-sm text-brand-muted">
                            {link}
                          </a>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          <div className="text-left tracking-tight mt-6 lg:mt-0">
            <h5 className="font-bold font-GTSuper text-base">Get In Touch</h5>
            <div className="mt-4 rounded-md box-border border-2 border-white lg:w-full">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="font-normal text-sm py-4 px-1 w-4/6 lg:px-5"
              />
              <input
                type="submit"
                value="Subscribe"
                className="font-normal text-sm px-1 text-center w-2/6 lg:px-5 py-4 bg-brand-primary"
              />
            </div>
            <p className="font-normal text-xs text-brand-muted">
              Get informed on immigration weekly
            </p>
          </div>
        </nav>
      </div>
      <div className="bg-black py-6">
        <p className="text-center text-sm font-BasierCircle font-bold">
          {blockcontent}
        </p>
      </div>
    </footer>
  </>
);
