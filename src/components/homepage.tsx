import React from "react";
import { Bio, NameLoca, Occupations, SelectedWork } from ".";
import { Tools, Gallery, Articles } from "./home";

export const Homepage = () => {
  return (
    <div className="  ">
      <NameLoca />
      <Bio />
      <Occupations />
      <div className="flex flex-col gap-[80px] max-[800px]:gap-[40px]">
        <Tools />
        <SelectedWork />
        <Gallery />
      </div>
      <Articles />
    </div>
  );
};
