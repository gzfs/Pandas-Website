import { ReactNode } from "react";

export default function FeatureBox({
  boxIcon,
  boxName,
  boxDesc,
}: {
  boxIcon: ReactNode;
  boxName: string;
  boxDesc: string;
}) {
  return (
    <div className="w-full bg-[#FEC700] rounded-3xl border border-black flex flex-col items-center py-14 px-5">
      {boxIcon}
      <div className="text-center flex-grow flex justify-center flex-col">
        <p className="font-Outfit text-xl">{boxName}</p>
        <p className="text-sm font-Outfit font-light">{boxDesc}</p>
      </div>
    </div>
  );
}
