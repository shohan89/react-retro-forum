import { AiOutlineHome } from "react-icons/ai";
import { FaRegFlag } from "react-icons/fa6";
import { HiOutlineUserAdd } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi2";

const Header = () => {
    return (
        <div className="flex justify-between items-center container mx-auto p-4 mt-4">
            <div>
                <h1 className="text-[#12132D] font-black text-4xl">ReTro</h1>
            </div>
            <div className="space-x-4 text-2xl text-gray-600">
                <button className="border-2 p-4 rounded-full border-slate-200 hover:bg-slate-600 hover:text-white cursor-pointer transition"><AiOutlineHome /></button>
                <button className="border-2 p-4 rounded-full border-slate-200 hover:bg-slate-600 hover:text-white cursor-pointer transition"><HiOutlinePencil /></button>
                <button className="border-2 p-4 rounded-full border-slate-200 hover:bg-slate-600 hover:text-white cursor-pointer transition"><HiOutlineUserAdd /></button>
                <button className="border-2 p-4 rounded-full border-slate-200 hover:bg-slate-600 hover:text-white cursor-pointer transition"><FaRegFlag /></button>
                <button className="text-[20px] font-bold text-white bg-[#797DFC] py-5 px-10 rounded-[50px] cursor-pointer">Sign In</button>
            </div>
        </div>
    );
};

export default Header;