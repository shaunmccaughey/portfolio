import { Link } from "react-router-dom";
function NavItem(props) {
  return (
    <div id={props.item} className="navitem">
      <Link
        className="navitem-icon"
        to={props.tolink}
        onClick={() => {
          props.handleNavItemOnClick(props.item);
        }}
      >
        <div className="tooltip">
          <span className="tooltiptext">{props.item}</span>
          {props.icon}
        </div>
      </Link>
    </div>
  );
}
export default NavItem;
