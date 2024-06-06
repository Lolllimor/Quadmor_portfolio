import { Text } from "@mantine/core";

export const NameLoca = () => {
  return (
    <div className="h-[618px] max-[800px]:h-[312px] flex gap-[10%] justify-between items-end max-[800px]:pb-[40px]  pb-[88px] border-b-[1px] border-white ">
      <div className="flex gap-[32px] flex-col">
        <p className="text-[128px] font-[500] leading-none  max-[800px]:text-[61px] p-0">
          QUADRI
        </p>
        <p className="text-[149px] font-[500] leading-none  max-[800px]:text-[71px] p-0">
          MORIN
        </p>
      </div>
      <div className="justify-left w-full flex ">
        <p className="text-[24px] font-[500] p-0 max-[800px]:text-[11px]">
          Lagos, Nigeria.
        </p>
      </div>
    </div>
  );
};
