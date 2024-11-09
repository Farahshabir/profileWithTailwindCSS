import Link from "next/link";
import Image from "next/image";
import logo2 from "@/app/images/logo2.png"
export default function Header(){
    return(
        <div className="flex justify-center w-[auto] h-[90px]" >
                <Image className="w-[200px] h-[200px]" src={logo2} alt=""/>
            <div className="flex float-right w-[1120px]">
                <ul className="flex justify-center w-[1120px] gap-14 mt-12 text-xl font-thin font-serif	text-teal-500	">
                         <li><Link href={"/"} className="">Home</Link></li>
                         <li><Link href={"/about"} className="">About</Link></li>
                         <li><Link href={"/contact"} className="">Contact Us</Link></li>
              </ul>
            </div>
        </div>
        
    )
}