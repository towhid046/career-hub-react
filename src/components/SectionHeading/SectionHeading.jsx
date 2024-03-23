import PropTypes from 'prop-types';

const SectionHeading = ({heading = { title: 'Unknown', description: 'Unknown'}}) => {
    const {title, description} = heading;
    return (
        <div className='pt-16 pb-7 text-center'>
            <h2 className='text-3xl font-bold mb-2'>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

SectionHeading.propTypes = {
    heading: PropTypes.object.isRequired,
};

export default SectionHeading;