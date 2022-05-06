import PropTypes from "prop-types";

function Header(props) {
  const gage = (props.clearBossN / props.maxN) * 100;
  console.log(gage);
  return (
    <header>
      <h1>
        <p>{props.title}</p>
        <div className="progress col-3" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${gage}%` }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
