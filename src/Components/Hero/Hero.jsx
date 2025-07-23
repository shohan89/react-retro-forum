const Hero = () => {
    return (
        <div className="flex justify-between items-center container mx-auto mt-4 p-24 bg-[#12132D] text-white rounded-[32px] space-y-4">
            <div>
                <h2 className="font-black text-[64px] leading-[86px]">Welcome to the <br /> ReTro Forum</h2>
                <p className="text-[20px] font-medium">Share your favorite opinion and win and wp <br /> forum coffee mug!</p>
            </div>
            <div className="bg-white text-[#12132D] text-2xl font-medium p-12 rounded-[32px] space-y-2">
                <p>Registered Users: 01</p>
                <p>Forum: 01</p>
                <p>Topics: 01</p>
                <p>Replies: 01</p>
            </div>
        </div>
    );
};

export default Hero;