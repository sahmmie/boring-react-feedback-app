import propTypes from 'prop-types';

function Header({ text, bgColor, textColor }) {
  const headerStyle = {
    color: textColor,
    backgroundColor: bgColor,
    textAlign: 'center',
  };

  return (
    <header style={headerStyle}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.prototype = {
  text: propTypes.string,
  bgColor: propTypes.string,
  textColor: propTypes.string,
};

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0, 0, 0, 0.4)',
  textColor: '#ff6a95',
};

export default Header;
