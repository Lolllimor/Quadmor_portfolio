import { Text } from "@mantine/core"
import { IoMdOpen } from "react-icons/io"

export const ArticleCard = ({name, topic, paragraph}: {name: string, topic: string, paragraph: string}) => {
  return (
    <div className="min-w-[418px] w-[418px] h-[391px] p-[32px] border border-white rounded-[24px] ">
    <Text className="text-[16px] font-[500]">{name}</Text>
    <div className="pt-[40px] gap-[16px] flex flex-col ">
      <Text className="text-[24px] font-[500]">{topic}</Text>
      <Text className="text-[16px] font-[500] pb-[64px]">{paragraph}</Text>
    </div>
    <div className="w-full flex justify-end">    <IoMdOpen color="#fff" size={24} /></div>
  </div>
  )
}
