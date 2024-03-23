import Banner from "../../components/Banner/Banner";
import JobCategoryList from "../../components/JobCategoryList/JobCategoryList";
import FeaturedJobs from './../../components/FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <JobCategoryList/>
            <FeaturedJobs/>
        </div>
    );
};

export default Home;