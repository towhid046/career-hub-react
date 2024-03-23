import PropTypes from 'prop-types';

const JobCategory = ({category}) => {
    // console.log(category);
    const {logo, availability, category_name } = category;
    return (
        <div className='bg-[#f9f9ff] p-5 rounded-lg'>
            <img className='w-16' src={logo} alt="" />
            <h3 className='mt-4 mb-2 text-2xl font-bold'>{category_name}</h3>
            <p>{availability}</p>
        </div>
    );
};

JobCategory.propTypes = {
    category: PropTypes.object.isRequired
};

export default JobCategory;