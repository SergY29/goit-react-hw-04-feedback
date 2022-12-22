// import PropTypes from 'prop-types';
// import { Section } from './Statistics.styled';

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

// FriendListItem.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       id: PropTypes.number.isRequired,
//     })
//   ),
// };
