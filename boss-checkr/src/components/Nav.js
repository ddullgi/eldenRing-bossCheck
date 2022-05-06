import AccodionItem from "./CardComponents/AccodionItem";

function Nav(props) {
  return (
    <nav>
      <AccodionItem onClear={props.onClear} data={props.data}></AccodionItem>
    </nav>
  );
}
export default Nav;
