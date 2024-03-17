import { SVGProps } from "react";

function PhArrowDownLight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="m204.24 148.24l-72 72a6 6 0 0 1-8.48 0l-72-72a6 6 0 0 1 8.48-8.48L122 201.51V40a6 6 0 0 1 12 0v161.51l61.76-61.75a6 6 0 0 1 8.48 8.48"
      ></path>
    </svg>
  );
}

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 px-24">
      <div className="flex flex-col justify-center items-center gap-y-10">
        <img src="/Maja.png" alt="Logo" className="w-[250px]" />
        <p className="text-center sm:w-[500px] font-Outfit text-white">
          A Discovery Application which make use of Google Nearby Connections
          API to discover users Nearby and allows them connect and Chat
        </p>
        <button className="w-[70px] rounded-3xl border border-black rotate-45 outline-none h-[70px] bg-[#FEC700]">
          <PhArrowDownLight className="-rotate-45 text-4xl flex justify-center items-center w-full" />
        </button>
      </div>
      <div className="md:h-[100vh] w-full flex justify-center items-center md:py-0 py-10">
        <img src="/Home.png" alt="Home" className="w-[270px]" />
      </div>
    </section>
  );
}
