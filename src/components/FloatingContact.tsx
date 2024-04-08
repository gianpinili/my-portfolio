import { Link } from "react-router-dom";
import { MessageSquareMore } from "lucide-react";

function FloatingContact() {
  return (
    <div className="fixed bottom-10 right-10">
      <div className="flex justify-center items-center bg-[#c2c2c1] p-[1rem] rounded-full w-[3.5rem] h-[3.5rem]">
        <Link to={"/contacts"}>
          <MessageSquareMore className="w-[2rem] h-[2rem] text-active hover:text-[#494545] duration-200 cursor-pointer hover:animate-pulse hover:w-[2.25rem] hover:h-[2.25rem]" />
        </Link>
      </div>
    </div>
  );
}

export default FloatingContact;
