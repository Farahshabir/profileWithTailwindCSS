import Image from "next/image";
import pic from "@/app/images/pic.png";
import Link from "next/link";
export default function SectionTwo() {
  return (
    <div className="flex -mt-32">
      <div>
        {" "}
        <Image
          className="-rotate-90 w-[320px] h-[300px] animate-pulse"
          src={pic}
          alt=""
        />
      </div>
      <div className="-mt-9">
        <h1 className="flex -mt-6 justify-center text-6xl text-teal-500 font-serif">
          About
        </h1>
        <p className="w-[680px] h-[300px]">
          Welcome! I’m Farah Shabir, a dedicated web developer from Hyderabad,
          Sindh, with a passion for creating user-friendly, visually appealing
          websites and innovative web solutions. My journey in the tech world is
          complemented by my diverse teaching and managerial experience, which
          has enriched my ability to approach challenges with creative and
          effective strategies. With a BS in Information Technology from the
          University of Sindh Jamshoro and a B.Ed from Allama Iqbal Open
          University Islamabad, I’ve cultivated a blend of technical expertise
          and educational insight. Over the years, I’ve taken on roles as a
          Computer Teacher, Academic Coordinator, and Assistant Manager, honing
          my skills in coding, web development, team leadership, and project
          management.
        </p>
        <Link href={"/about"}>
          <button className="rounded-lg w-[120px] h-[40px] bg-teal-500 text-white">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}
