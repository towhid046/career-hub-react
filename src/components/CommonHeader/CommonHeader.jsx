
const CommonHeader = ({title = 'Unknown' }) => {
    return (
        <div className="py-12 bg-[#f9f9ff] md:flex justify-between items-center">
        <img
          className="hidden md:block"
          src="/src/assets/images/banner-images/bg1.png"
          alt=""
        />
        <h2 className="text-3xl font-bold text-center">{title}</h2>
        <img
          className="hidden md:block"
          src="/src/assets/images/banner-images/bg2.png"
          alt=""
        />
      </div>
    );
};

export default CommonHeader;