import { Linkedin, Github, Mail, Paperclip } from "lucide-react";

function FloatingNav() {
  return (
    <>
      <div className="fixed flex-col top-[35%] left-0 hidden lg:block fade-in">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#008ddf] ml-[-100px] hover:ml-[0px] duration-300">
            <a
              href="https://www.linkedin.com/in/ianpinili/"
              target="_blank"
              className="flex justify-between items-center w-full text-white ml-3"
            >
              LinkedIn <Linkedin className="mr-[1.1rem]" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#2d2d2d] ml-[-100px] hover:ml-[0px] duration-300">
            <a
              href="https://github.com/gianpinili"
              target="_blank"
              className="flex justify-between items-center w-full text-white ml-3"
            >
              GitHub <Github className="mr-[1.1rem]" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#69bba8] ml-[-100px] hover:ml-[0px] duration-300">
            <a
              href="mailto:gianpinili@gmail.com"
              target="_blank"
              className="flex justify-between items-center w-full text-white ml-3"
            >
              Email <Mail className="mr-[1.1rem]" />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center bg-[#8f989e] ml-[-100px] hover:ml-[0px] duration-300">
            <a
              href="https://drive.google.com/file/d/1KC5C8n-l9Fpytuu0iELJvo_ZRKZUo8xJ/view?usp=drive_link"
              target="_blank"
              className="flex justify-between items-center w-full text-white ml-3"
            >
              Resume <Paperclip className="mr-[1.1rem]" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default FloatingNav;
