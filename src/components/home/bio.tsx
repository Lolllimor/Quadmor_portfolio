import { Text } from "@mantine/core";

export const Bio = () => {
  return (
    <div className="h-fit max-[800px]:flex-col-reverse   flex  w-[100%] gap-[10%] max-[800px]:py-[40px] py-[80px] border-b-[1px] border-white  ">
      <p className=" text-[24px] font-[300] max-[800px]:text-[12px] leading-[39px] w-[90%]">
        Passionate designer and artist specializing in [mention your specific
        design focus, e.g., graphic design, UI/UX]. I blend artistry with design
        excellence, creating visually stunning and purposeful experiences. A
        color alchemist and digital dreamweaver, I bring concepts to life with a
        meticulous eye for detail. Let's collaborate to turn visions into
        captivating visuals for the digital realm.
      </p>
      <p className="text-[64px] max-[800px]:text-[18px] font-[500] w-[100%]">
        DESIGNER X ARTIST
      </p>
    </div>
  );
};
