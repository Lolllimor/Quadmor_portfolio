import { Text } from "@mantine/core";
import { ToolsCard } from "../tools/tools-card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export const Tools = () => {
  const toolsData = [
    {
      name: "Adobe Indesign",
      image: "/images/adobe.png",
      colImage: "/images/id.png",
      noOfYears: "3",
      stars: 4,
    },
    {
      name: "Adobe Photoshop",
      image: "/images/photoshop.png",
      colImage: "/images/ps.png",
      noOfYears: "4",
      stars: 4,
    },
    {
      name: "Adobe Illustrator",
      image: "/images/illustrator.png",
      colImage: "/images/ai.png",
      noOfYears: "4",
      stars: 4,
    },
    {
      name: "Figma",
      image: "/images/figma.png",
      colImage: "/images/figmacol.png",
      noOfYears: "4",
      stars: 4,
    },
    {
      name: "Adobe After Effects",
      image: "/images/after.png",
      colImage: "/images/aftercol.png",
      noOfYears: "2",
      stars: 3,
    },
    {
      name: "Procreate",
      image: "/images/procreate.png",
      colImage: "/images/procreate.png",
      noOfYears: "1",
      stars: 4,
    },
    {
      name: "Blendr",
      image: "/images/blendr.png",
      colImage: "/images/blendrcol.png",
      noOfYears: "1",
      stars: 3,
    },
  ];
  const star = "/images/star.png";
  return (
    <div className="border-t-[1px] mt-[32px] max-[800px]:mt-[8px] max-[800px]:pt-[40px] pt-[80px] max-[1024px]:mt-[24px] max-[1024px]:pt-[60px] ">
      <div className="pb-[40px] max-[800px]:pb-[20px] max-[800px]: flex max-[800px] items-center">
        <p className="text-white text-[24px] font-[500] max-[800px]:justify-between w-full max-[800px]:text-[12px]">
          TOOLS
        </p>
        <div className="flex">
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>
      </div>
      <div className="flex gap-[89px] max-[800px]:gap-[16px] overflow-x-auto w-full no-scrollbar">
        {toolsData.map((tool, index) => (
          <ToolsCard
            starImg={star}
            key={index}
            noOfYears={tool.noOfYears}
            colImage={tool.colImage}
            imageSrc={tool.image}
            toolName={tool.name}
            stars={tool.stars}
          />
        ))}
      </div>
    </div>
  );
};
