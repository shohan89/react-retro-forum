import { LuEye } from "react-icons/lu";

const Bookmark = ({ bookmark }) => {
    const { title, view_count } = bookmark;
    return (
        <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md mb-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="flex justify-between items-center text-sm text-gray-600"><LuEye /> {view_count}</p>
        </div>
    );
};

export default Bookmark;