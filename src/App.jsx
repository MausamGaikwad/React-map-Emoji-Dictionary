import EmojiCard from "./EmojiCard";
import emojis from "./emojis";

function App() {
  return (
    <div>
      <h2>Emoji Dictionary</h2>
      {emojis.map((emojis, index) => (
        <EmojiCard
          key={emojis.id}
          id={index + 1}
          symbol={emojis.symbol}
          name={emojis.name}
          meaning={emojis.meaning}
        />
      ))}
    </div>
  );
}
export default App;
