import { Text } from "@mantine/core";
import { ToolsCard } from "../tools/tools-card";
export const Tools = () => {
  const toolsData = [
    {
      name: "Adobe Indesign",
      image: "./images/adobe.png",
      colImage: "./images/id.png",
      noOfYears: '3',
      stars: 4
    },
    {
      name: "Adobe Photoshop",
      image: "./images/photoshop.png",
      colImage: "./images/ps.png",
      noOfYears: '4',
      stars: 4
    },
    {
      name: "Adobe Illustrator",
      image: "./images/illustrator.png",
      colImage: "./images/ai.png",
      noOfYears: '4',
      stars: 4
    },
    {
      name: "Figma",
      image: "./images/figma.png",
      colImage: "./images/figmacol.png",
      noOfYears: '4',
      stars: 4
    },
    {
      name: "Adobe After Effects",
      image: "./images/after.png",
      colImage: "./images/aftercol.png",
      noOfYears: '2',
      stars: 3
    },
    {
      name: "Procreate",
      image: "./images/procreate.png",
      colImage: "./images/procreate.png",
      noOfYears: '1',
      stars: 4
    },
    {
      name: "Blendr",
      image: "./images/blendr.png",
      colImage: "./images/blendrcol.png",
      noOfYears: '1',
      stars: 3
    },
  ];
  const star = './images/star.png'
  return (
    <div className="border-t-[1px] mt-[32px] pt-[80px]">
      <div className="pb-[40px]">
        <Text className="text-white text-[24px] font-[500]"> TOOLS</Text>
      </div>
      <div className="flex gap-[89px] overflow-x-auto w-full">
        {toolsData.map((tool, index) => (
          <ToolsCard starImg={star} key={index} noOfYears={tool.noOfYears} colImage={tool.colImage} imageSrc={tool.image} toolName={tool.name} stars={tool.stars} />
        ))}
      </div>
    </div>
  );
};
