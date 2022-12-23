import PropTypes from 'prop-types';
import { Sec } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <Sec>
      {title && <h2>{title}</h2>}
      {children}
    </Sec>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
