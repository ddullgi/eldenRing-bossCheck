import CardList from "./CardList";

function AccodionItem(props) {
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
  const accoList = [];
  for (let i = 0; i < area.length; i++) {
    const areaData = [[], []];
    for (let j = 0; j < props.data.length; j++) {
      if (props.data[j].body === area[i]) {
        if (props.data[j].clearInfo === true) {
          areaData[1].push(props.data[j]);
        } else {
          areaData[0].push(props.data[j]);
        }
      }
    }
    accoList.push(
      <div className="accordion-item" key={`csas${i}`}>
        <h2 className="accordion-header" id={`panelsStayOpen-heading${i}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#panelsStayOpen-collapse${i}`}
            aria-expanded="true"
            aria-controls={`panelsStayOpen-collapse${i}`}
          >
            {area[i]}
          </button>
        </h2>
        <div
          id={`panelsStayOpen-collapse${i}`}
          className="accordion-collapse collapse"
          aria-labelledby={`panelsStayOpen-heading${i}`}
        >
          <div className="accordion-body">
            <CardList
              area={area[i]}
              onClear={props.onClear}
              data={areaData}
            ></CardList>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      {accoList}
    </div>
  );
}

export default AccodionItem;
