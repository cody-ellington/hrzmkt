"use client";

import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import { BlurFadeDemo } from "@/components/demos/blur-fade-demo";


const services = [
  {
    icon: "/images/s_6.png",
    title: "E-commerce Website",
    description:
      "Take your business to the next level with our web design and development services",
    subDes1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque pellentesque, sodales quam vitae, consequat lectus. Aliquam vel facilisis dui. Etiam vel ornare neque, eget imperdiet sapien",
    subDes2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque pellentesque, sodales quam vitae, consequat lectus. Aliquam vel facilisis dui. Etiam vel ornare neque, eget imperdiet sapien",
  },
  {
    icon: "/images/s_1.png",
    title: "Branding Website",
    description:
      "Get your website to the top of search engine results with our SEO services",
    subDes1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque pellentesque, sodales quam vitae, consequat lectus. Aliquam vel facilisis dui. Etiam vel ornare neque, eget imperdiet sapien",
    subDes2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque pellentesque, sodales quam vitae, consequat lectus. Aliquam vel facilisis dui. Etiam vel ornare neque, eget imperdiet sapien",
  },
  {
    icon: "/images/s_5.png",
    title: "Content Marketing",
    description:
      "Boost your brand's online presence with our social media marketing services",
    subDes1:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque pellentesque, sodales quam vitae, consequat lectus. Aliquam vel facilisis dui. Etiam vel ornare neque, eget imperdiet sapien",
    subDes2:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non neque pellentesque, sodales quam vitae, consequat lectus. Aliquam vel facilisis dui. Etiam vel ornare neque, eget imperdiet sapien",
  },
  // {
  //   icon: "/images/s_3.png",
  //   title: "Social Media Marketing",
  //   description:
  //     "Interact with your customers and increase sales with our email marketing services",
  // },
  // {
  //   icon: "/images/s_4.png",
  //   title: "Email Marketing",
  //   description:
  //     "With our content creation services, we help businesses drive results",
  // },
  // {
  //   icon: "/images/s_2.png",
  //   title: "Pay-Per-Click Advertising",
  //   description:
  //     "Don't waste money on ineffective advertising. Our PPC services help you reach your target audience",
  // },
];

export default function Home() {
  return (
    <div
      className="overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]"
    >
      <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 
   xl:w-4/5 2xl:w-[68%] backdrop-blur-xl flex items-center 
   justify-between py-3 px-4 md:px-8 mx-6"
      >
        <Link href={"/"}>
          <Image
            src={"/logo/black-long.png"}
            alt="Logo"
            width={1000}
            height={1000}
            className="w-28"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"#showcase"} className="hover:text-blue-600">
              Showcase
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-600"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-600"
            >
              Process
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-600"
            >
              Guarentees
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          {/* <a href="tel:519400200" className="hidden lg:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              (519)-400-200
            </button>
          </a> */}

          <Link
            href={"#contact-us"}
            className="
  py-1 
  px-6
  text-lg 
  hover:bg-[#abcbff]
  rounded-3xl
  border-2
  border-black
  text-white
  bg-[#121212]
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Contact Us
          </Link>
        </div>
      </Element>

      {/* HERO SECTION */}
      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto py-32">
          <AnimatedShinyTextDemo />

          <h1>
            <CoverDemo />
          </h1>
          <p
            className="md:text-center
           text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500"
          >
            Schedule a call with us to discuss your project and get a quote in
            minutes
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-600" />
                Design
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-600" />
                Development
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-600" />
                Marketing
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
                <PiCheckBold className="text-xl text-blue-600" />
                Strategy
              </p>
            </BoxReveal>
          </div>
        </div>
      </main>

      {/* BRAND STORY */}
      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/images/bone_banner.png"}
            width={10000}
            height={10000}
            className="rounded-md"
            alt="image"
          />
        </main>
      </section>

      {/* SERVICES SECTION */}
      <Element name="services">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-32">
          <h1>
            <WordPullUpDemo />
          </h1>
          <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business stand out
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 ">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 cursor-pointer hover:scale-105 transition-transform rounded-md"
              >
                <Image
                  src={service.icon}
                  width={10000}
                  height={10000}
                  className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
                  alt="image"
                />
                <h1 className="text-xl font-medium">{service.title}</h1>
                <p className="text-gray-500">{service.description}</p>
                <p className="text-gray-500">{service.subDes1}</p>
                <p className="text-gray-500">{service.subDes2}</p>

                <div className="md:text-center py-1 md:w-1/3 mx-auto rounded-3xl bg-black text-white">
                  <a className="py-3" href="#contact-us">Contact Us</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>

      {/* SCROLLING SECTION */}
      <section id="showcase" className="py-8 my-16">
        <ScrollBasedVelocityDemo />
      </section>

      {/* SHOWCASE SECTION */}
      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
          <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
            Our{" "}
            <span className="text-blue-600 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Creative
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            All of our services are designed to help your business to get
            noticed.
          </p>

        </main>
      </Element>

      <section className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <BlurFadeDemo />
      </section>



      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section id="contact-us" className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <footer className="bg-[#fafafa] py-10 text-center px-6 md:px-0 md:mx-auto border-t">
        <div className="flex flex-col gap-y-3 items-center xl:w-4/5 2xl:w-[68%] mx-auto">
          <h1 className="text-3xl md:text-5xl font-medium ">
            <Image
              src={"/logo/black-long.png"}
              width={10000}
              height={10000}
              className="w-40"
              alt="image"
            />{" "}
          </h1>
          <p className="text-left text-xl text-gray-500">Lorem ipsum dolor sit amet</p>
          <p className="text-left text-sm text-gray-500">
            contact@horizon.marketing
          </p>
        </div>

        <div className="flex md:justify-center gap-x-4 mt-10">
          © 2025 Horizo. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
