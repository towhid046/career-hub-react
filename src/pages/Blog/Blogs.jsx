import LChart from './../../components/LChart/LChart';
import Form from './../../components/Form/Form';

const Blogs = () => {
    return (
        <div className='flex-col lg:flex-row flex justify-evenly gap-10 container mx-auto px-4 py-12'>
            <LChart/>
            <Form/>
        </div>
    );
};

export default Blogs;