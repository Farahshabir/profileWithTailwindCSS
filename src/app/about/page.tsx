import Image from "next/image";
import pic from "@/app/images/pic.png";
import Header from "@/app/components/header";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaAdversal } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import Link from "next/link";
export default function About() {
  return (
    <div>
      <Header />
      <div className="mt-10 flex justify-center">
        {" "}
        <h1 className="text-6xl text-teal-500 font-serif">About</h1>
      </div>
      <div className="flex float-right mt-4 ">
        <p className="w-[680px] h-[300px] -mt-4">
          Hello! I’m Farah Shabir, a passionate web developer based in
          Hyderabad, Sindh. With a solid background in both education and
          technology, I blend my technical expertise and teaching experience to
          create user-friendly and visually captivating websites. I hold a BS in
          Information Technology from the University of Sindh Jamshoro and a
          B.Ed from Allama Iqbal Open University Islamabad. I’ve worked in
          diverse roles, including Computer Teacher at The STEM School Qasimabad
          and Public School Hyderabad, Assistant Manager and Academic
          Coordinator at Aptech Computer Education, and as an Invigilator for
          the British Council. These roles have honed my skills in management,
          problem-solving, teamwork, and effective communication. I'm proficient
          in front-end and back-end development, coding, and troubleshooting,
          with certifications in Web Development with PHP and strong proficiency
          in Microsoft Excel, Word, and Google Sheets. I also have a strong
          background in coding, web development, and problem-solving. My passion
          lies in building creative and efficient web solutions that make a
          difference. Outside of work, I enjoy expanding my knowledge in tech
          trends, collaborating with like-minded professionals, and finding
          innovative solutions to complex problems.
        </p>
        <div>
          {" "}
          <Image className="w-[320px] h-[300px] ml-28" src={pic} alt="" />
        </div>
      </div>

      <div className="">
        <div className="">
          {" "}
          <h1 className="mt-96 text-6xl text-teal-500 font-serif flex justify-center">
            Experience
          </h1>
        </div>
        <div className="flex">
          <div className="flex -ml-28">
            {" "}
            <Image
              className="w-[320px] h-[300px] ml-28 -rotate-90"
              src={pic}
              alt=""
            />
          </div>
          <p className="w-[700px] h-[300px]">
            I have a diverse professional background that spans teaching,
            management, and web development. My journey includes: Computer
            Teacher at The STEM School Qasimabad and Public School Hyderabad: In
            these roles, I was responsible for teaching computer science and IT,
            fostering a love for technology in students, and simplifying complex
            concepts into engaging lessons. Invigilator for the British Council:
            Ensured the integrity of exam administration and maintained a secure
            and conducive testing environment. Assistant Manager and Academic
            Coordinator at Aptech Computer Education: Managed educational
            programs, coordinated with staff, and contributed to curriculum
            planning. I developed leadership and organizational skills through
            mentoring teams and overseeing educational operations. Web
            Development and Technical Troubleshooting: As a web developer, I
            focused on creating user-friendly websites with a balance of
            functionality and aesthetics. I am skilled in front-end/back-end
            development, proficient in PHP, and familiar with various
            programming tools and frameworks.Throughout these roles, I've gained
            valuable experience in problem-solving, teamwork, communication, and
            leadership—skills that are critical in both teaching and development
            environments. My work has always been driven by a commitment to
            delivering quality results and a passion for continuous learning.
          </p>
        </div>
      </div>

      <div className="h-[300px] bg-teal-500 mt-40">
        <div className="flex justify-around items-center ">
          {/* <p className="text-white text-lg -ml-20">Created by Farah Shabir</p> */}
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
    </div>
  );
}
