import { useState } from "react";
import "./App.css";

function getRndInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const arrs = [
  ["one", "two", "blank", "blank"],
  ["one", "two", "three", "blank"],
];

// const colors = [
//   // ,
//   "#da9e00",
//   "#c13c1f",
//   "#ddc18a",
//   "#c5aa5c",
//   "#7a0510",
//   "#032e36",
//   "#577e85",
//   "#23166d",
//   "#2c5568",
// ]

const masks = [
  "/images/rothkomask1.png",
  "/images/rothkomask3.png",
  "/images/rothkomask4.png",
  "/images/rothkomask2.png",
];

const stripes = [
  "/images/rothkostripe.png",
  "/images/rothkostripe2.png",
  "",
  "",
  "/images/rothkostripe3.png",
];

const blendMode = [ "multiply"];

const flex = ["column", "column-reverse"];

function App() {
  const [color, setColor] = useState();
  const [fields, setFields] = useState(arrs[1]);
  const [stripe, setStripe] = useState();
  const [height, setHeight] = useState("auto");
  const [height3, setHeight3] = useState("auto");
  const [width, setWidth] = useState();
  const [width2, setWidth2] = useState();
  const [column, setColumn] = useState(flex[0]);
  const [gap, setGap] = useState();
  const [blend, setBlend] = useState("");
  const [blend2, setBlend2] = useState("");
  const [mask, setMask] = useState(masks[0]);
  const [mask2, setMask2] = useState(masks[0]);

  // const randColor = () => Math.random().toString(16).substring(2, 8);

  // const randOpacity = () => (Math.random() * 5000).toString(16).substring(6, 8);

  function handleRothko() {
    setFields(arrs[getRndInteger(0, arrs.length - 1)]);
    setColor(
      `rgb(${getRndInteger(0, 255)}, ${getRndInteger(0, 100)}, ${getRndInteger(
        0,
        255
      )})`
    );
    setHeight(getRndInteger(5, 70));
    setHeight3(getRndInteger(50, 80));
    setColumn(flex[getRndInteger(0, 1)]);
    setGap(getRndInteger(-1, 0));
    setBlend(blendMode[getRndInteger(0, blendMode.length - 1)]);
    setBlend2(blendMode[getRndInteger(0, blendMode.length - 1)]);
    setMask(masks[getRndInteger(0, masks.length - 1)]);
    setMask2(masks[getRndInteger(0, masks.length - 1)]);
    setWidth(getRndInteger(85, 98));
    setWidth2(getRndInteger(80, 100));
    setStripe(stripes[getRndInteger(0, stripes.length - 1)]);
  }

  return (
    <>
      <div
        className="canvas"
        style={{
          flexDirection: `${column}`,
          backgroundColor: color,
        }}
      >
        <div
          className={fields[0]}
          style={{
            mixBlendMode: `${blend2}`,
          }}
        >
          <img src={mask2} alt="" />
        </div>
        <div className="stripe">
          <img src={stripe} alt="" />
        </div>
        <div
          className={fields[1]}
          style={{
            height: `${height}%`,
            width: `${width}%`,
          }}
        >
          <img src={mask} alt="" />
        </div>

        <div
          className={fields[2]}
          style={{
            margin: `${gap}rem`,
            height: `${height3}%`,
            mixBlendMode: `${blend}`,
            width: `${width2}%`,
          }}
        >
          <img src={mask} alt="" />
        </div>
      </div>
      <button onClick={handleRothko}>rothko me</button>
    </>
  );
}

export default App;
