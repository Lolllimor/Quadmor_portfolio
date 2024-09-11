import { selectedRouteAtom } from '@/pages/api/query_store';
import { usePortal } from '@ibnlanre/portal';
import { Button, Menu, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import { IoMenu } from 'react-icons/io5';

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
            setRoute('home');
            push('/');
          }}
        />
        <div className="flex w-[460px] justify-between max-[1000px]:hidden max-[1024px]:w-[350px]">
          <span
            className={`text-[16px] font-[500] cursor-pointer active:font-[700]  max-[1024px]:text-[14px]  ${
              route === 'case' && 'font-[700]'
            }`}
            onClick={() => {
              setRoute('case');
              push('/');
            }}
          >
            Case Studies
          </span>
          <span
            className={`text-[16px] font-[500] cursor-pointer active:font-[700] max-[1024px]:text-[14px] ${
              route === 'profile' && 'font-[700]'
            }`}
            onClick={() => {
              setRoute('profile');
              push('/');
            }}
          >
            Profile
          </span>
          <span
            className={`text-[16px] font-[500] cursor-pointer active:font-[700] max-[1024px]:text-[14px] ${
              route === 'gallery' && 'font-[700]'
            }`}
            onClick={() => {
              setRoute('gallery');
              push('/');
            }}
          >
            Gallery
          </span>
          <span
            className={`text-[16px] font-[500] cursor-pointer active:font-[700] max-[1024px]:text-[14px] ${
              route === 'works' && 'font-[700]'
            }`}
            onClick={() => {
              setRoute('works');
              push('/');
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
          position="bottom-end"
          classNames={{
            dropdown:
              'border border-white rounded-0 py-[16px] px-[24px] bg-[#2B2C2E] gap-[22px] flex flex-col ',
            item: 'bg-tranparent hover:bg-transparent w-full p-0 pb-[8px] pt-[8px] first:pt-0 ',
          }}
        >
          <Menu.Target>
            <span>
              <IoMenu size={30} />
            </span>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>
              <p
                className={` font-["Montserrat"] text-[12px] text-white font-[500] cursor-pointer active:font-[700]  ${
                  route === 'case' && 'font-[700]'
                }`}
                onClick={() => {
                  setRoute('case');
                  push('/');
                }}
              >
                Case Studies
              </p>
            </Menu.Item>
            <hr />
            <Menu.Item>
              <span
                className={`font-["Montserrat"] text-[12px] font-[500] text-white  cursor-pointer active:font-[700]    ${
                  route === 'profile' && 'font-[700]'
                }`}
                onClick={() => {
                  setRoute('profile');
                  push('/');
                }}
              >
                Profile
              </span>
            </Menu.Item>

            <hr />
            <Menu.Item>
              <span
                className={`font-["Montserrat"] text-[12px] font-[500]  text-white cursor-pointer active:font-[700]  pb-2  ${
                  route === 'gallery' && 'font-[700]'
                }`}
                onClick={() => {
                  setRoute('gallery');
                  push('/');
                }}
              >
                Gallery
              </span>
            </Menu.Item>

            <hr />
            <Menu.Item>
              <span
                className={`font-["Montserrat"] text-[12px] font-[500]  text-white cursor-pointer active:font-[700] ${
                  route === 'works' && 'font-[700]'
                }`}
                onClick={() => {
                  setRoute('works');
                  push('/');
                }}
              >
                Works
              </span>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  );
};
