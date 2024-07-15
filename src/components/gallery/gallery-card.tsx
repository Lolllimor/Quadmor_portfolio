import { Flex, Modal, Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const GalleryCard = ({
  name,
  hover,
  month,
  year,
  ImageSrc,
  classname,
}: {
  ImageSrc: string;
  hover: string;
  classname?: string;
  name: string;
  month: string;
  year: string;
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div
        onClick={open}
        className={` w-[443px] h-[624px] max-[800px]:w-[352px] max-[800px]:h-[496px] brightness-50 relative hover:brightness-100 flex  contain rounded-[24px] overflow-hidden transition-transform transform hover:z-20 hover:border-white hover:border-[2px] ${classname}`}
      >
        <img
          src={ImageSrc}
          className="rounded-[24px] object-cover w-full  max-[800px]:w-[352px] max-[800px]:h-[496px]"
        />
        <Flex className="flex-col absolute bottom-[30px] left-[30px]">
          <p className="text-[16px] font-[500 ]">{name}</p>
          <p className="text-[12px] font-[700]">
            {month}, {year}
          </p>
        </Flex>
      </div>
      {opened && (
        <Modal
          opened={opened}
          onClose={close}
          withCloseButton={false}
          centered
          styles={{
            body: {
              padding: 0,
            },
          }}
        >
          <div className="  no-scrollbar overflow-hidden">
            <img src={hover} />
          </div>
        </Modal>
      )}
    </>
  );
};
