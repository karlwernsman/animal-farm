import './Animal.css';
export default function Animal(props) {
  return (
    <div className="animal" style={{ left: props.left, top: props.top }}>
      <img src={`animals/${props.image}.svg`} />
      <h2 className="name">{props.name}</h2>
      <p>{props.says}</p>
    </div>
  );
}
