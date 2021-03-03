import postit from "../img/postit.png";

export default function WideCard(props) {
  return (
    <div className="widecard">
      <h2>{props.title}</h2>
      <h4>{props.description}</h4>
      <h3>
        {props.from} - {props.to}
      </h3>
    </div>
  );
}
