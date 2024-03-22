
const Banner = () => {
    return (
        <header className="bg-[#f9f9ff]">
            <div className="flex justify-between gap-10 container mx-auto px-4 mb-10 pt-10 items-center flex-col-reverse lg:flex-row">
            <div className="space-y-4 max-w-lg">
                <h1 className="xl:text-7xl lg:text-5xl text-4xl font-bold">One Step Closer To Your Dream Job</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci dolorum nihil ullam ea amet, repudiandae nostrum velit ut debitis.</p>
                <button className="btn btn-primary">Get Started</button>
            </div>
            <div>
                <img className="md:max-w-lg max-w-sm" src="/src/assets/images/banner-images/user.png" alt="" />
            </div>
        </div>
        </header>
    );
};

export default Banner;