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
      className='min-w-[418px] w-[418px] h-[391px] p-[32px] border border-white rounded-[24px] group flex flex-col '
    >
      <p className='text-base font-[500]'>{name}</p>
      <div className='pt-[40px] gap-[16px] flex flex-col mb-auto '>
        <p className='text-2xl font-[500]'>{topic}</p>
        <p className='text-base font-[500]'>{paragraph}</p>
      </div>
      <div className='w-full flex justify-end '>
        <div className='flex items-center gap-[7px] '>
          <CiShare1 color='#fff' size={24} />
          <div className='group-hover:block hidden'>
            <p className='font-[500] text-[20px] '>Read this article</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
