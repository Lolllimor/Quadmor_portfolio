import { selectedRouteAtom } from "@/pages/api/query_store";
import { usePortal } from "@ibnlanre/portal";
import { Button, Menu, Text } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const { push } = useRouter();

  const [route, setRoute] = usePortal.atom(selectedRouteAtom);
  return (
    <div className="flex justify-between items-center pb-[32px] border-b-[1px] border-white w-[100%] ">
      <img
        src="/images/sig.png"
        onClick={() => {
          setRoute("home");
          push("/");
        }}
      />
      <div className="flex w-[460px] justify-between max-[1100px]:hidden">
        <span
          className={`text-[16px] font-[500] cursor-pointer active:font-[700] ${
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
          className={`text-[16px] font-[500] cursor-pointer active:font-[700] ${
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
          className={`text-[16px] font-[500] cursor-pointer active:font-[700] ${
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
          className={`text-[16px] font-[500] cursor-pointer active:font-[700] ${
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
      <Button className="bg-[#fff] text-[#000] rounded-[37px] h-[52px] px-[24px] max-[1100px]:hidden">
        <p className="text-[16px] font-[700] "> View Resume</p>
      </Button>
      <div className="min-[1100px]:hidden">
        <Menu classNames={{ dropdown: "border-0 border-none" }}>
          <Menu.Target>
            <span>
              <IoMenu size={40} />
            </span>
          </Menu.Target>
          <Menu.Dropdown>
            <div className="flex flex-col gap-[15px] bg-[#2B2C2E] border border-[#fff]  py-4 px-6 w-[163px]">
              <span
                className={`text-[16px] font-[500] cursor-pointer active:font-[700] pb-2 border-b borber-b-[#fff] ${
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
                className={`text-[16px] font-[500] cursor-pointer active:font-[700]  pb-2 border-b borber-b-[#fff]  ${
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
                className={`text-[16px] font-[500] cursor-pointer active:font-[700]  pb-2 border-b borber-b-[#fff] ${
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
                className={`text-[16px] font-[500] cursor-pointer active:font-[700] ${
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
