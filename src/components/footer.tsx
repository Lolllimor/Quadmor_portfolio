import { selectedRouteAtom } from '@/pages/api/query_store';
import { usePortal } from '@ibnlanre/portal';
import { useRouter } from 'next/router';

export const Footer = () => {
  const { push } = useRouter();

  const [route, setRoute] = usePortal.atom(selectedRouteAtom);
  return (
    <div className="p-[24px] max-[800px]:p-0 flex flex-col w-full h-full max-[800px]:mb-[20px]">
      <div className="flex  max-[800px]:flex-col justify-between h-[300px] max-[800px]:h-full max-[800px]:gap-[24px] max-[800px]:pb-[40px] border-b-[1px] border-white">
        <div className="flex gap-[160px] max-[800px]:gap-6 max-[800px]:flex-col max-[800px]:h-fit h-[300px] max-[1024px]:gap-[100px] ">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[20px] font-[700] max-[800px]:text-[16px] ">
              Quadri Morin
            </p>
            <p className="text-[16px] font-[500] max-[800px]:text-[12px]">
              Designer x Artist
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p
              className={`text-[16px] font-[500] cursor-pointer active:font-[700]  ${
                route === 'home' && 'font-[700]'
              }`}
              onClick={() => {
                setRoute('home');
                push('/');
              }}
            >
              Home
            </p>
            <p
              className={`text-[16px] font-[500] cursor-pointer active:font-[700] max-[800px]:text-[12px]  ${
                route === 'works' && 'font-[700]'
              }`}
              onClick={() => {
                setRoute('works');
                push('/');
              }}
            >
              Works
            </p>
            <p
              className={`text-[16px] max-[800px]:text-[12px] font-[500] cursor-pointer active:font-[700] ${
                route === 'gallery' && 'font-[700]'
              }`}
              onClick={() => {
                setRoute('gallery');
                push('/');
              }}
            >
              Gallery
            </p>
            <p
              className={`text-[16px] max-[800px]:text-[12px] cursor-pointer active:font-[700] ${
                route === 'profile' && 'font-[700]'
              }`}
              onClick={() => {
                setRoute('profile');
                push('/');
              }}
            >
              Profile
            </p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[20px] font-[700] max-[800px]:text-[16px]">
              Connect
            </p>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="              https://drive.usercontent.google.com/u/0/uc?id=18m4AO-PBBSi0Cyc0e7h_ZHEhpF_Z-2X5&export=download"
              className="text-[16px] max-[800px]:text-[12px] font-[700]  "
            >
              Download Resume
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href=" https://www.behance.net/quadrimorin"
              className="text-[16px] max-[800px]:text-[12px] font-[700]  "
            >
              Behance
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href=" https://dribbble.com/Quadmor"
              className="text-[16px] max-[800px]:text-[12px] font-[700]  "
            >
              Dribble
            </a>
          </div>
        </div>
        <div className="gap-[24px] flex max-sm:gap-[10px]">
          <a
            href="https://www.instagram.com/quadmor/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <img
              height={32}
              width={32}
              className="max-h-[32px] max-sm:h-[16px] max-sm:w-[16px]"
              src="/images/insta.png"
            />
          </a>
          <a
            href="https://x.com/Quadmor_"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            <img
              height={32}
              width={32}
              className="max-h-[32px] max-sm:h-[16px] max-sm:w-[16px]"
              src="/images/twit.png"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/quadmor/"
            className="cursor-pointer"
          >
            <img
              height={32}
              width={32}
              className="max-h-[32px] max-sm:h-[16px] max-sm:w-[16px]"
              src="/images/link.png"
            />
          </a>
        </div>
      </div>
      <div className="flex gap-[8px] pt-[36px] max-[800px]:hidden ">
        <img
          src="/images/copywright.png"
          className="max-h-[16px]"
          height={16}
          width={16}
        />
        <p className="text-[12px] font-[500]">2024</p>
        <p className="text-[12px] font-[500]">Quadri Morin.</p>
        <p className="text-[12px] font-[500]">All right reserved.</p>
      </div>
    </div>
  );
};
