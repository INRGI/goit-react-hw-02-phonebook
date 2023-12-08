import PropTypes from 'prop-types';

const Filter = ({value, onFilterChange}) => {
    return (
        <div>
            <label>
                Find contacts by name
                <input type="text" value={value} onChange={onFilterChange}/>
            </label>
        </div>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
}

export default Filter;