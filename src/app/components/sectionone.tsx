import Image from "next/image";
import pic from "@/app/images/pic.png";

export default function SectionOne() {
  return (
    <div className="flex">
      <div className="ml-16 w-[700px] h-[600px] ">
        <h1 className="text-4xl font-bold mt-24">
          I<span className="text-teal-500	">'</span>M{" "}
          <span className="underline underline-offset-8 decoration-teal-500">
            FARAH
          </span>{" "}
          SHABIR
        </h1>
        <p className="text-lg w-[400px] mt-6 ri">
          "A web developer driven by a love for coding, problem-solving, and
          delivering quality digital projects."
        </p>
      </div>
      <div className="w-[450px] ml-24 animate-pulse">
        <Image className="" src={pic} alt="" />
      </div>
    </div>
  );
}
