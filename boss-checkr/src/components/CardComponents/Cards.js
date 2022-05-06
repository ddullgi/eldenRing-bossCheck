function Cards(props) {
  return (
    <div
      className={`card m-1 ${props.cardColor}`}
      id={props.data.id}
      onClick={() => {
        if (props.data.clearInfo === true) {
          props.onClear(props.data.id, false);
        } else {
          props.onClear(props.data.id, true);
        }
      }}
      onMouseOver={() => {}}
    >
      <div className="card-body">
        {props.data.requierd === true ? (
          <h5 className="card-title text-warning">{props.data.title}</h5>
        ) : (
          <h5 className="card-title">{props.data.title}</h5>
        )}
        <p className="card-text">{props.data.body}</p>
      </div>
    </div>
  );
}

export default Cards;
