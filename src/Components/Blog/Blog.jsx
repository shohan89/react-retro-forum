import { FaEnvelopeOpen } from "react-icons/fa";
import { LuEye } from "react-icons/lu";
import { TbMessage2 } from "react-icons/tb";
import { WiTime9 } from "react-icons/wi";

const Blog = ({ blog }) => {
    // This component is intended to display individual blog details.
    const { id, category, image, isActive, title, author, description, comment_count, view_count, posted_time } = blog;
    return (
        <div className=" md:flex mb-4 gap-4 p-4 bg-[#F3F3F5] hover:bg-purple-200 hover:border-2 hover:border-purple-600 border-2 border-[#F3F3F5] rounded-lg shadow-md md:w-full transition-all duration-300 ease-in-out">
            <div className="relative">
                <img className="w-[72px] h-[72px] rounded-2xl" src={image} alt={title} />
                {/* if isActive then active image will show on author image */}
                <img className="absolute w-4" src={ isActive ? '../../assets/Status-Active.png' : '../../assets/Status-Inactive.png' } alt="" />
            </div>
            <div>
                <div className="sm:flex-row md:flex space-x-4 items-center text-[#12132D] font-medium">
                    <p>#{category}</p>
                    <p>Author: {author.name}</p>
                </div>
                <div>
                    <h2 className="text-[20px] font-bold text-[#12132D]">{title}</h2>
                    <p className="text-base text-[#12132da1]">{description}</p>
                </div>
                <hr className="w-full border-t-1 border-dashed border-[#12132D9F] mb-3 mt-4" />
                <div className="flex justify-between items-center">
                    <div className="flex gap-4 text-[#12132D9F]">
                        <p className="flex items-center"><TbMessage2 className="mr-4" />{comment_count}</p>
                        <p className="flex items-center"><LuEye className="mr-4" />{view_count}</p>
                        <p className="flex items-center"><WiTime9 className="mr-4" />{posted_time}</p>
                    </div>
                    <button className="p-4 bg-green-600 rounded-full cursor-pointer text-white"><FaEnvelopeOpen /></button>
                </div>
            </div>
        </div>
    );
};

export default Blog;