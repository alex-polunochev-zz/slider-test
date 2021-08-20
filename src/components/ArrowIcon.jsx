import styled from 'styled-components';
import PropTypes from 'prop-types';

const Arrow = styled.div`
  border: solid #aaa;
  border-width: 0 10px 10px 0;
  padding: 10px;
  transition: all 200ms ease-in-out;
  ${(props) => props.direction === 'left' && `transform: rotate(135deg); margin-left: 7px;`}
  ${(props) => props.direction === 'right' && `transform: rotate(-45deg); margin-right: 7px;`}
`;

const Wrapper = styled.div`
  transition: all 300ms ease-in-out;
  height: 60px;
  margin: 10px;
  cursor: pointer;
  padding: 10px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  background-color: #ffffff;
  :hover {
    ${Arrow} {
      border-color: #333;
    }
  }
`;

export const ArrowIcon = (props) => {
  const { direction, className, onClick } = props;
  return (
    <Wrapper className={className} onClick={onClick}>
      <Arrow direction={direction} />
    </Wrapper>
  );
};

ArrowIcon.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

ArrowIcon.defaultProps = {
  direction: 'left',
  className: ''
};
