import "./App.css";
import { React, useState } from "react";
import { data } from "./data";
function App() {
  const [value, setValue] = useState(0);
  const [para, setPara] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    let amount = parseInt(value);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > data.length) {
      amount = data.length;
    }
    setPara(data.slice(0, amount));
  };
  return (
    <div className="App">
      <h2>Tired of Boring Lorem Ipsum?</h2>
      <div>
        <form onSubmit={handleClick}>
          <label htmlFor="paragraph">Paragraphs:</label>
          <input
            type="number"
            id="paragraph"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Generate</button>
        </form>
        {para.map((paragraph) => {
          return <p key={paragraph.id}>{paragraph.desc}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
