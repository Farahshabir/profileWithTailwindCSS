import Image from "next/image";
import pic from "@/app/images/pic.png";
export default function SectionThree() {
  return (
    <div>
      <div className="mt-8">
        <h1 className="flex justify-center text-6xl text-teal-500 font-serif">
          Skills
        </h1>{" "}
      </div>
      <div className="flex">
        <div>
          <h2 className="text-teal-500 text-3xl ">Technical Skills</h2>
          <div className="ml-28 w-[800px] border-s-4 pl-2 border-teal-500 border-double">
            <ul>
              <li>
                <span className="text-teal-500">Web Development: </span>{" "}
                Proficient in front-end and back-end development, coding, and
                building dynamic, user-friendly websites.
              </li>
              <li>
                <span className="text-teal-500">Programming/Coding: </span>{" "}
                Strong grasp of HTML, CSS, TypeScript, Tailwind CSS, NextJs,
                ReactJs, JavaScript, PHP, and other relevant programming
                languages.
              </li>
              <li>
                <span className="text-teal-500">
                  Troubleshooting & Problem Solving:{" "}
                </span>
                Adept at diagnosing and resolving technical issues efficiently.
              </li>
              <li>
                <span className="text-teal-500">Data Entry & Analysis:</span>{" "}
                Experienced in managing data with precision using Microsoft
                Excel and Google Sheets.
              </li>
              <li>
                <span className="text-teal-500">Software Proficiency:</span>{" "}
                Expert user of Microsoft Word, Excel
              </li>
            </ul>
          </div>
        </div>

        <div className="ml-24">
          <Image
            className="w-[370px] h-[310px] animate-pulse"
            src={pic}
            alt=""
          />
        </div>
      </div>
      <div>
        <h2 className="text-teal-500 text-3xl ">
          Personal & Professional Skills
        </h2>
        <div className="ml-28 w-[800px] border-s-4 pl-2 border-teal-500 border-double">
          <ul>
            <li>
              <span className="text-teal-500">Attention to Detail: </span>{" "}
              Ensures accuracy in all projects, maintaining high standards of
              quality.
            </li>
            <li>
              <span className="text-teal-500">Creativity: </span> Brings
              innovative solutions and fresh ideas to web development projects.
            </li>
            <li>
              <span className="text-teal-500">Leadership & Management: </span>
              Skilled in supervising teams, managing projects, and guiding
              colleagues toward achieving their goals.
            </li>
            <li>
              <span className="text-teal-500">
                Communication & Interpersonal Skills:
              </span>{" "}
              Strong verbal and written communication, fostering clear
              interactions and collaboration.
            </li>
            <li>
              <span className="text-teal-500">Teamwork & Delegation:</span>{" "}
              Effective in working collaboratively and delegating tasks for
              optimal workflow.
            </li>
            <li>
              <span className="text-teal-500">Critical Thinking:</span>
              Approaches problems with strategic thinking and thoughtful
              analysis.
            </li>
            <li>
              <span className="text-teal-500">Organization & Budgeting:</span>
              Capable of organizing tasks and managing resources to meet project
              deadlines and financial goals.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
