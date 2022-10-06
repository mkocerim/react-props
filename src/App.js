import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <h1> HELLO KITTY</h1>
      <Button
        type="primary"
        buttonText="Button 1"
        smth="birseyler"
        tikla={() => alert("Ben birinci Buttonum")}
      />{" "}
      <br />
      <Button
        type="secondary"
        buttonText="Button 2"
        tikla={() => alert("Ben ikinci Buttonum")}
      />{" "}
      <br />
      <Button
        type="danger"
        buttonText="Button 3 "
        tikla={() => alert("Ben ücüncü Buttonum")}
      />{" "}
      <br />
      <Button
        type="info"
        buttonText="Button 4"
        tikla={() => alert("Ben dördüncü Buttonum")}
      />{" "}
      <br />
      <Button
        type="warn"
        buttonText="Button 5"
        tikla={() => alert("Ben besinci Buttonum")}
      />
    </div>
  );
}

export default App;

// JSX
// const div= document.createElement("div");
// div.classList.add("container");
// const h1=document.createElement("h1");
// h1.innerText="Hello";
// div.appendChild(h1);
// ShadowRoot.appendChild(div);
