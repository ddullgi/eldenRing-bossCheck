import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <h1>
        {props.title} {props.clearBossN}/{props.maxN}
      </h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
