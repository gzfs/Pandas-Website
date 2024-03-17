import { SVGProps } from "react";
import FeatureBox from "./FeatureBox";

function IconParkCircularConnection(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none" stroke="#000" stroke-width="4">
        <path d="M13.5 39.3706C16.3908 41.6439 20.0371 42.9999 24 42.9999C27.9629 42.9999 31.6092 41.6439 34.5 39.3706"></path>
        <path d="M19 9.74707C12.0513 11.8822 7 18.3511 7 25.9999C7 27.9247 7.31989 29.7748 7.9094 31.4999"></path>
        <path d="M29 9.74707C35.9487 11.8822 41 18.3511 41 25.9999C41 27.9247 40.6801 29.7748 40.0906 31.4999"></path>
        <path
          fill="#2F88FF"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M43 36C43 37.3416 42.4716 38.5597 41.6117 39.4577C40.7015 40.4082 39.4199 41 38 41C35.2386 41 33 38.7614 33 36C33 33.9899 34.1861 32.2569 35.8967 31.4626C36.536 31.1657 37.2487 31 38 31C40.7614 31 43 33.2386 43 36Z"
        ></path>
        <path
          fill="#2F88FF"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 36C15 37.3416 14.4716 38.5597 13.6117 39.4577C12.7015 40.4082 11.4199 41 10 41C7.23858 41 5 38.7614 5 36C5 33.9899 6.18614 32.2569 7.89667 31.4626C8.53604 31.1657 9.24867 31 10 31C12.7614 31 15 33.2386 15 36Z"
        ></path>
        <path
          fill="#2F88FF"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M29 9C29 10.3416 28.4716 11.5597 27.6117 12.4577C26.7015 13.4082 25.4199 14 24 14C21.2386 14 19 11.7614 19 9C19 6.98991 20.1861 5.25686 21.8967 4.4626C22.536 4.16572 23.2487 4 24 4C26.7614 4 29 6.23858 29 9Z"
        ></path>
      </g>
    </svg>
  );
}

function IconParkMessageOne(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <g fill="none" stroke-linecap="round" stroke-width="4">
        <path
          fill="#2F88FF"
          stroke="#000"
          stroke-linejoin="round"
          d="M4 6H44V36H29L24 41L19 36H4V6Z"
        ></path>
        <path stroke="#fff" d="M23 21H25.0025"></path>
        <path stroke="#fff" d="M33.001 21H34.9999"></path>
        <path stroke="#fff" d="M13.001 21H14.9999"></path>
      </g>
    </svg>
  );
}

export default function Feature() {
  return (
    <section className="grid md:grid-cols-4 px-24 sm:h-screen place-content-center gap-8 pb-10 md:pb-0">
      <FeatureBox
        boxIcon={<IconParkCircularConnection className="text-[70px]" />}
        boxDesc="Internet-less Discovery leveraging Android's Nearby Connections API"
        boxName="Nearby Connections"
      />
      <FeatureBox
        boxIcon={<IconParkMessageOne className="text-[70px]" />}
        boxDesc="Connect with People Nearby You and start Messaging"
        boxName="Realtime Messaging"
      />
      <FeatureBox
        boxIcon={<IconParkCircularConnection className="text-[70px]" />}
        boxDesc=" Internet-less Discovery leveraging Android's Nearby Connections API"
        boxName="Nearby Connections"
      />
      <FeatureBox
        boxIcon={<IconParkCircularConnection className="text-[70px]" />}
        boxDesc=" Internet-less Discovery leveraging Android's Nearby Connections API"
        boxName="Nearby Connections"
      />
    </section>
  );
}
