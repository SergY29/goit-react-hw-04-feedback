import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <>
      {options.map(option => (
        <button
          name={option}
          onClick={onLeaveFeedback}
          type="button"
          key={option}
        >
          {capitalize(option)}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
