import Image from "next/image";
import Link from "next/link";
import pic from "@/app/images/pic.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaAdversal } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="h-[300px] bg-teal-500">
      <div className="flex justify-around items-center ">
        <div className="flex gap-4 mt-20">
          <i className=" text-white text-4xl">
            <FaLinkedin />
          </i>
          <i className=" text-white text-4xl">
            <FaFacebookSquare />
          </i>
          <i className=" text-white text-4xl">
            <FaSquareGithub />
          </i>
          <i className=" text-white text-4xl">
            <FaAdversal />
          </i>
          <i className=" text-white text-4xl">
            <FaSquareUpwork />
          </i>
          <i className=" text-white text-4xl">
            <FaSquareTwitter />
          </i>
        </div>
      </div>
      <div className="flex justify-around items-center mt-6">
        <p className="font-sans-serif text-2xl text-white ">
          Passionate Web Developer
        </p>
      </div>
      <div className="mt-10">
        <p className="text-white text-sm">
          2024 Personal Profile. All rights reserved.
        </p>
        <p className="text-white text-sm">
          Website by{" "}
          <a
            href="https://www.linkedin.com/in/farah-shabir-9064b7196/"
            className="underline underline-offset-8 decoration-teal-500"
          >
            Farah Shabir
          </a>
        </p>
      </div>
    </div>
  );
}
