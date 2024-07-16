import { selectedRouteAtom } from "@/pages/api/query_store";
import { usePortal } from "@ibnlanre/portal";
import { Button, Menu, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const { push } = useRouter();

  const [route, setRoute] = usePortal.atom(selectedRouteAtom);
  return (
    <div className="flex justify-between items-center pb-[32px] border-b-[1px] border-white w-[100%] ">
      <div className="flex w-full justify-between items-center">
        <img
          className="max-[800px]:h-[21px] max-[1024px]:h-[41px]"
          src="/images/sig.png"
          onClick={() => {
            setRoute("home");
            push("/");
          }}
        />
        <div className="flex w-[460px] justify-between max-[1000px]:hidden max-[1024px]:w-[350px]">
          <span
            className={`text-[16px] font-[500] cursor-pointer active:font-[700]  max-[1024px]:text-[14px]  ${
              route === "case" && "font-[700]"
            }`}
            onClick={() => {
              setRoute("case");
              push("/");
            }}
          >
            Case Studies
          </span>
          <span
            className={`text-[16px] font-[500] cursor-pointer active:font-[700] max-[1024px]:text-[14px] ${
              route === "profile" && "font-[700]"
            }`}
            onClick={() => {
              setRoute("profile");
              push("/");
            }}
          >
            Profile
          </span>
          <span
            className={`text-[16px] font-[500] cursor-pointer active:font-[700] max-[1024px]:text-[14px] ${
              route === "gallery" && "font-[700]"
            }`}
            onClick={() => {
              setRoute("gallery");
              push("/");
            }}
          >
            Gallery
          </span>
          <span
            className={`text-[16px] font-[500] cursor-pointer active:font-[700] max-[1024px]:text-[14px] ${
              route === "works" && "font-[700]"
            }`}
            onClick={() => {
              setRoute("works");
              push("/");
            }}
          >
            Works
          </span>
        </div>
        <Button className="bg-[#fff] text-[#000] rounded-[37px] h-[52px] px-[24px] max-[1000px]:hidden">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/18m4AO-PBBSi0Cyc0e7h_ZHEhpF_Z-2X5/view?usp=sharing"
            className="text-[16px] font-[700] max-sm:text-[5px] "
          >
            View Resume
          </a>
        </Button>
      </div>

      <div className="min-[1000px]:hidden">
        <Menu
          classNames={{
            dropdown: "border border-white p-0  ",
            item: "hover:bg-[#f0f0f0]",
          }}
        >
          <Menu.Target>
            <span>
              <IoMenu size={30} />
            </span>
          </Menu.Target>
          <Menu.Dropdown>
            <div className="flex flex-col gap-[8px] bg-[#2B2C2E] py-[14px] px-[12px] w-fit ">
              <span
                className={`text-[12px] font-[500] cursor-pointer active:font-[700] pb-2 border-b borber-b-[#fff] ${
                  route === "case" && "font-[700]"
                }`}
                onClick={() => {
                  setRoute("case");
                  push("/");
                }}
              >
                Case Studies
              </span>
              <span
                className={`text-[12px] font-[500] cursor-pointer active:font-[700]  pb-2 border-b borber-b-[#fff]  ${
                  route === "profile" && "font-[700]"
                }`}
                onClick={() => {
                  setRoute("profile");
                  push("/");
                }}
              >
                Profile
              </span>
              <span
                className={`text-[12px] font-[500] cursor-pointer active:font-[700]  pb-2 border-b borber-b-[#fff] ${
                  route === "gallery" && "font-[700]"
                }`}
                onClick={() => {
                  setRoute("gallery");
                  push("/");
                }}
              >
                Gallery
              </span>
              <span
                className={`text-[12px] font-[500] cursor-pointer active:font-[700] ${
                  route === "works" && "font-[700]"
                }`}
                onClick={() => {
                  setRoute("works");
                  push("/");
                }}
              >
                Works
              </span>
            </div>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};
