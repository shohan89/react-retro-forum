const Header = () => {
    return (
        <div className="flex justify-between items-center container mx-auto p-4">
            <div>
                <h1 className="text-[#12132D] font-black text-4xl">ReTro</h1>
            </div>
            <div className="space-x-4">
                <button>Home</button>
                <button>Settings</button>
                <button>Add User</button>
                <button>Notification</button>
                <button>Sign In</button>
            </div>
        </div>
    );
};

export default Header;