import Image from "next/image";
import pic from "@/app/images/pic.png";
import Header from "@/app/components/header";
import Link from "next/link";
export default function Contact() {
  return (
    <div>
      <Header />
      <div className="mt-10 flex justify-center">
        {" "}
        <h1 className="text-6xl text-teal-500 font-serif">Contact Us</h1>
      </div>
      <div className="flex float-right mt-4 ">
        <div className="w-[800px]">
          <form action="#">
            <h1 className="mb-8 text-lg font-bold md:text-3xl text-teal-500">
              We will get back to you asap!
            </h1>

            <div className="flex">
              <label className="mt-2 text-teal-700 ml-2 text-lg">
                Full Name{" "}
              </label>
              <input
                className="h-10 w-50 md:text-xl mb-2 mt-1 rounded ml-2 cursor-pointer border border-teal-700 hover:border-teal-600"
                type="text"
                name="name"
                required
              />

              <label className="mt-2 text-teal-700 text-lg ml-2">
                Last Name{" "}
              </label>
              <input
                className="h-10 w-50 md:text-xl mb-2 mt-1 rounded ml-2 cursor-pointer border border-teal-700 hover:border-teal-600"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="flex">
              <label className="mt-2 text-teal-700 ml-3 text-lg">
                Contact{" "}
              </label>
              <input
                className="h-10 w-50 md:text-xl mb-2 mt-1 rounded ml-5 cursor-pointer border border-teal-700 hover:border-teal-600"
                type="text"
                name="name"
                required
              />
              <label className="mt-2 text-teal-700 ml-3 text-lg">Email </label>
              <input
                className="h-10 w-50 md:text-xl mb-2 mt-1 rounded ml-12 cursor-pointer border border-teal-700 hover:border-teal-600"
                type="email"
                name="name"
                required
              />
            </div>
            <div>
              <label className="-mt-4 text-teal-700 ml-0 text-lg">
                Message{" "}
              </label>
              <textarea
                className="h-[90px] w-[626px] md:text-xl mb-2 mt-1 rounded ml-5 cursor-pointer border border-teal-700 hover:border-teal-600"
                typeof="text"
                name="name"
                required
              />
            </div>
            <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 ml-24">
              Submit
            </button>
          </form>
        </div>
        <div>
          {" "}
          <Image className="w-[320px] h-[300px] ml-28" src={pic} alt="" />
        </div>
      </div>
    </div>
  );
}
