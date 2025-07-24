import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    // console.log("Bookmarks:", bookmarks);
    return (
        <div className="w-1/3 bg-[#F3F3F5] p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-4 text-[20px] font-bold">
                        <h2>Title </h2>
                        <h2>Mark as read ({bookmarks.length})</h2>
                    </div>
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark 
                            key={idx}
                            bookmark={bookmark}
                             />)
                    }
                </div>
    );
};

export default Bookmarks;