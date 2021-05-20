import React from "react";

export interface ContentContainerProp {
  header: string;
  paragraph: string;
  children: any;
}

const SectionContentContainer = (
  { header, paragraph, children }: ContentContainerProp
) => {
  return (
    <div className="bg-brand-dark py-20">
      <div className="mx-11 lg:mx-48">
        <div className="flex flex-col justify-center text-white text-center mx-7">
          <h2 className="font-GTSuper font-bold text-4xl">{header}</h2>
          <p className="font-BasierCircle text-sm font-normal text-center mt-3">
            {paragraph}
          </p>
        </div>
        <div className="flex flex-col justify-evenly lg:flex-row lg:justify-between">{children}</div>
      </div>
    </div>
  );
};

export default SectionContentContainer;
