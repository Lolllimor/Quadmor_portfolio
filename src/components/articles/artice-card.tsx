import { Text } from "@mantine/core";
import Link from "next/link";
import { CiShare1 } from "react-icons/ci";

export const ArticleCard = ({
  name,
  topic,
  paragraph,
}: {
  name: string;
  topic: string;
  paragraph: string;
}) => {
  return (
    <Link
      href={`article/${topic.toLocaleLowerCase()}`}
      className="max-[800px]:w-[208px] max-[800px]:min-w-[208px] max-[800px]:h-[194px] w-[418px] h-[391px] p-[32px] max-[800px]:p-[14px] border border-white max-[800px]:rounded-[11px] rounded-[24px] flex flex-col"
    >
      <p className="text-base font-[500] max-[800px]:text-[8px]">{name}</p>
      <div className="pt-[40px] gap-[16px] flex flex-col mb-auto  max-[800px]:pt-[5px]">
        <p className="text-2xl font-[500] max-[800px]:text-[20px] max-[800px]:leading-[24px]">{topic}</p>
        <p className="text-base font-[500] max-[800px]:hidden">{paragraph}</p>
      </div>
      <div className="w-full flex justify-end ">
        <div className="flex items-center gap-[7px] ">
          <CiShare1 color="#fff" size={24} className="max-[800px]:w-[12px]"/>
          <div className="group-hover:block hidden">
            <p className="font-[500] text-[20px] ">Read this article</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
