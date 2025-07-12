function EmojiCard(props) {
  return (
    <div>
      <h4>{props.id}</h4>
      <h1>{props.symbol}</h1>
      <h3>{props.name}</h3>
      <p>{props.meaning}</p>
    </div>
  );
}
export default EmojiCard;
