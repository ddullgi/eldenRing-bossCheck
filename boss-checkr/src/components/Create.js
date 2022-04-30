function Create(props) {
  return (
    <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        생성
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                보스 작성
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form id="myform">
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    보스 이름
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    지역
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="select"
                    defaultValue="림그레이브"
                  >
                    <option value="림그레이브">림그레이브</option>
                    <option value="흐느낌의 반도">흐느낌의 반도</option>
                    <option value="시프라 강">시프라 강</option>
                    <option value="호수의 리에니에">호수의 리에니에</option>
                    <option value="알터 고원">알터 고원</option>
                    <option value="갤미어 화산">갤미어 화산</option>
                    <option value="도읍 로데일">도읍 로데일</option>
                    <option value="깊은 뿌리 밑바닥">깊은 뿌리 밑바닥</option>
                    <option value="케일리드">케일리드</option>
                  </select>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    필수 보스
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={(event) => {
                  event.preventDefault();
                  const title = document.querySelector("#recipient-name").value;
                  const body = document.querySelector("#select").value;
                  const check =
                    document.querySelector("#flexCheckDefault").checked;
                  props.onCreate(title, body, check);
                  document.getElementById("myform").reset();
                }}
              >
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
