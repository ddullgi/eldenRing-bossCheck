import Cards from "./Cards";

function CardList(props) {
  const lis = [];
  if (props.data) {
    for (let j = 0; j < props.data[0].length; j++) {
      lis.push(
        <article className="col-12 col-sm-6 col-xl-4" key={props.data[0][j].id}>
          <Cards
            data={props.data[0][j]}
            onClear={props.onClear}
            cardColor="bg-white"
          ></Cards>
        </article>
      );
    }
    for (let i = 0; i < props.data[1].length; i++) {
      lis.push(
        <article className="col-12 col-sm-6 col-xl-4" key={props.data[1][i].id}>
          <Cards
            data={props.data[1][i]}
            onClear={props.onClear}
            cardColor="bg-secondary text-light"
          ></Cards>
        </article>
      );
    }

    return <div className="row">{lis}</div>;
  }
}

export default CardList;
