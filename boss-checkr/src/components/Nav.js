import PropTypes from "prop-types";
import Header from "./Header";

const area = [
  "림그레이브",
  "흐느낌의 반도",
  "시프라 강",
  "호수의 리에니에",
  "알터 고원",
  "갤미어 화산",
  "도읍 로데일",
  "깊은 뿌리 밑바닥",
  "케일리드",
];

function Nav(props) {
  const lis = [[], [], [], [], [], [], [], [], []];

  if (props.topics.length !== 0) {
    for (let i = 0; i < props.topics.length; i++) {
      let t = props.topics[i];
      for (let j = 0; j < area.length; j++) {
        if (t.body === area[j]) {
          lis[j].push(
            <article className="col-4" key={i}>
              {t.clearInfo === true ? (
                <div
                  className="card m-1 bg-secondary text-light"
                  id={i}
                  onClick={() => {
                    const _id = i;
                    const bg = document.getElementById(_id);
                    if (t.clearInfo === true) {
                      props.onClear(i, false);
                      return (bg.style = "background-color: white");
                    } else {
                      props.onClear(i, true);
                      return (bg.style = "background-color: gray");
                    }
                  }}
                >
                  <div className="card-body">
                    {t.requierd === true ? (
                      <h5 className="card-title text-warning">{t.title}</h5>
                    ) : (
                      <h5 className="card-title">{t.title}</h5>
                    )}
                    <p className="card-text">{t.body}</p>
                  </div>
                </div>
              ) : (
                <div
                  className="card m-1 bg-white"
                  id={i}
                  onClick={() => {
                    const _id = i;
                    const bg = document.getElementById(_id);
                    if (t.clearInfo === true) {
                      props.onClear(i, false);
                      return (bg.style = "background-color: white");
                    } else {
                      props.onClear(i, true);
                      return (bg.style = "background-color: gray");
                    }
                  }}
                >
                  <div className="card-body">
                    {t.requierd === true ? (
                      <h5 className="card-title text-warning">{t.title}</h5>
                    ) : (
                      <h5 className="card-title">{t.title}</h5>
                    )}
                    <p className="card-text">{t.body}</p>
                  </div>
                </div>
              )}
            </article>
          );
        }
      }
    }
  }

  return (
    <nav>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              림그레이브
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <div className="row">{lis[0]}</div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              흐느낌의 반도
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <div className="row">{lis[1]}</div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              시프라 강
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <div className="row">{lis[2]}</div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              호수의 리에니에
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFour"
          >
            <div className="accordion-body">
              <div className="row">{lis[3]}</div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              알터 고원
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingFive"
          >
            <div className="accordion-body">
              <div className="row">{lis[4]}</div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSix"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSix"
            >
              갤미어 화산
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingSix"
          >
            <div className="accordion-body">
              <div className="row">{lis[5]}</div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseSeven"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseSeven"
            >
              도읍 로데일
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingSeven"
          >
            <div className="accordion-body">
              <div className="row">{lis[6]}</div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseEight"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseEight"
            >
              깊은 뿌리 밑바닥
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingEight"
          >
            <div className="accordion-body">
              <div className="row">{lis[7]}</div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseNine"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseNine"
            >
              케일리드
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingNine"
          >
            <div className="accordion-body">
              <div className="row">{lis[8]}</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Nav;
