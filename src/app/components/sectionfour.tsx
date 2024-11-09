import Image from "next/image";
import blog from "@/app/images/blog.png";
import figmaProject1 from "@/app/images/figmaProject1.png";
import assignment3 from "@/app/images/assignment3.png";
import pana from "@/app/images/pana.png";
export default function SectionFour() {
  return (
    <div>
      <div className="mt-8">
        <h1 className="flex justify-center text-6xl text-teal-500 font-serif ">
          Projects
        </h1>
      </div>
      <div className="flex gap-2 mt-4">
        <div className="w-[350px] h-[300px]">
          <Image
            className="h-[250px] opacity-75 hover:opacity-100"
            src={blog}
            alt=""
          />
        </div>
        <div className="w-[350px] h-[300px]">
          <Image
            className="h-[250px] opacity-75 hover:opacity-100"
            src={figmaProject1}
            alt=""
          />
        </div>
        <div className="w-[350px] h-[300px]">
          <Image
            className="h-[250px] opacity-75 hover:opacity-100"
            src={assignment3}
            alt=""
          />
        </div>
        <div className="w-[350px] h-[300px]">
          <Image
            className="h-[250px] opacity-75 hover:opacity-100"
            src={pana}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
