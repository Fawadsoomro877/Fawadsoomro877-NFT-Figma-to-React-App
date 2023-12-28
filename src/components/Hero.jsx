import img from "../assets/image.png";
import user from "../assets/InpUser.png";
import email from "../assets/email.png";
import password from "../assets/password.png";
import confirmPassword from "../assets/confirmPassword.png";

const inpList = [
  {
    id: 1,
    placeholder: "Username",
    icon: user,
  },
  {
    id: 2,
    placeholder: "Email Address",
    icon: email,
  },
  {
    id: 3,
    placeholder: "Password",
    icon: password,
  },
  {
    id: 4,
    placeholder: "Confirm Password",
    icon: confirmPassword,
  },
];

export const Hero = () => {
  return (
    <section className="bg-[#2B2B2B] text-white font-fonts">
      <div className="flex gap-[3.75rem] items-center max-lg:gap-[2.5rem] max-md:flex-col">
        <div className="max-md:overflow-hidden ">
          <img
            className="h-full  max-md:w-full max-md:h-full max-md:object-cover"
            src={img}
            alt=""
          />
        </div>
        <div className="mb-[6.25rem] max-lg:mb-[5rem] max-md:mt-[1.88rem] max-md:[2.5rem] max-md:px-[3rem] ">
          <h1 className="text-[3.1875rem] font-semibold leading-[110%] capitalize max-md:text-[2.375rem] max-md:leading-[120%]">
            Create Account
          </h1>
          <p className="text-[1.375rem] mt-[1.25rem] font-normal leading-[160%] capitalize mb-[2.5rem] max-md:text-base max-md:leading-[140%] max-md:mb-[1.88rem]">
            Welcome! Enter Your Details And Start Creating, Collecting And
            Selling NFTs
          </p>
          {inpList.map((el, i) => (
            <div className="relative mt-[0.94rem]" key={i}>
              <img
                className="absolute top-[11px] left-2 text-[#BDBDBD]"
                src={el.icon}
                alt=""
              />
              <input
                className="rounded-[1.25rem] placeholder:text-[#2B2B2B] placeholder:px-[0.75rem] placeholder:text-base placeholder:font-normal placeholder:leading-[140%]  px-5 py-2 border border-[#858584] outline-none w-[17rem]"
                type="text"
                name=""
                id=""
                placeholder={el.placeholder}
              />
            </div>
          ))}
          <div className="mt-[1.88rem] ">
            <a
              href="#"
              className=" rounded-[1.25rem] bg-[#A259FF] px-[3.5rem] text-base leading-[140%] py-[.55rem] font-semibold inline-block w-[17rem] text-center"
            >
              Create account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
