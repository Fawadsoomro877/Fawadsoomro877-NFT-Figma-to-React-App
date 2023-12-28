import discord from "../assets/DiscordLogo.svg";
import twitter from "../assets/TwitterLogo.svg";
import instagram from "../assets/InstagramLogo.svg";
import youtube from "../assets/YoutubeLogo.svg";
import Icon from "./Icon";

export const Footer = () => {
  return (
    <footer className="bg-[#3B3B3B] font-fonts ">
      <div className="grid grid-cols-3 gap-[5.25rem] pt-[2.5rem] pb-[1. 88rem] px-[9.143125rem] mb-[1.875rem] max-lg:grid-cols-1        max-lg:px-[4.5rem] max-lg:pt-10 max-lg:pb-[3rem] max-md:pb-[1.875rem] max-md:px-[2rem]">
        <div>
          <div className="flex items-center gap-3 ">
            <Icon />
          </div>
          <p className="text-[#CCCCCC] mt-[1.875rem]">
            NFT marketplace UI created with Anima for Figma.
          </p>
          <p className="text-[#CCCCCC] mt-5">Join our community</p>
          <div className="flex mt-[0.9375rem] gap-[0.625rem]">
            <img src={discord} alt="" />
            <img src={youtube} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
        <div>
          <h1 className="font-bold text-[1.375rem] text-white leading-[160%] capitalize">
            Explore
          </h1>
          <ul className="text-[#ccc] flex flex-col gap-[1.25rem] mt-[1.875rem]">
            <li>
              <a href="" className="text-base font-normal leading-[140%]">
                Marketplace
              </a>
            </li>
            <li>
              <a href="" className="text-base font-normal leading-[140%]">
                Rankings
              </a>
            </li>
            <li>
              <a href="" className="text-base font-normal leading-[140%]">
                Connect a wallet
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-[1.375rem] text-white leading-[160%] capitalize">
            Join our weekly digest
          </h1>
          <p className="text-base font-normal leading-[140%] text-[#ccc] mt-[1.56rem]">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="mt-[1.25rem] flex items-center  ">
            <input
              type="text"
              placeholder="Enter your email here"
              name=""
              id=""
              className="rounded-[1.25rem] py-[1rem] pl-[1.25rem] 
              placeholder:text-[#2B2B2B] placeholder:text-sm placeholder:leading-[140%] placeholder:font-normal outline-none  "
            />
            <a
              href=""
              className="bg-[#A259FF] ml-[-2.5rem] rounded-[1.25rem] px-[3.125rem] py-[1.1rem] text-white text-base font-semibold leading-[140%]"
            >
              Subscribe
            </a>
          </div>
        </div>
      </div>
      <div className="px-[7.205625rem] pb-[2.5rem] max-lg:px-[4.5rem] max-lg:pb-10 max-md:px-[1.875rem] ">
        <hr className="bg-[#858584]" />
        <caption className="mt-5 flex text-[#CCC] text-[0.75rem] leading-[110%]">
          @ NFT Market Use this template freely
        </caption>
      </div>
    </footer>
  );
};
