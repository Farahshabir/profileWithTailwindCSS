import Image from "next/image";
import Header from "@/app/components/header";
import SectionOne from "@/app/components/sectionone";
import SectionTwo from "@/app/components/sectiontwo";
import SectionThree from "@/app/components/sectionthree";
import SectionFour from "@/app/components/sectionfour";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
}
