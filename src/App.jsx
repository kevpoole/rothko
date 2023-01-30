import { useState } from "react";
import "./App.css";

const arrs = [
  ["one", "two", "blank"],
  ["one", "two", "three"],
];

const masks = [
  "/images/rothkomask1.png",
  "/images/rothkomask3.png",
  "/images/rothkomask2.png",
];

const blendMode = ["difference", "darken", "lighten", "luminosity", "multiply"];

const flex = ["column", "column-reverse"];

function App() {
  const [fields, setFields] = useState(arrs[1]);
  const [color, setColor] = useState();
  const [color2, setColor2] = useState();
  const [color3, setColor3] = useState();
  const [opacity, setOpacity] = useState();
  const [height, setHeight] = useState("auto");
  const [height2, setHeight2] = useState("auto");
  const [height3, setHeight3] = useState("auto");
  const [width, setWidth] = useState();
  const [width2, setWidth2] = useState();
  const [column, setColumn] = useState(flex[0]);
  const [gap, setGap] = useState();
  const [blend, setBlend] = useState("difference");
  const [blend2, setBlend2] = useState("difference");
  const [mask, setMask] = useState(masks[0]);
  const [mask2, setMask2] = useState(masks[0]);

  function getRndInteger(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  const randColor = () => Math.random().toString(16).substring(2, 8);

  const randOpacity = () => (Math.random() * 5000).toString(16).substring(6, 8);

  function handleRothko() {
    setFields(arrs[getRndInteger(0, 1)]);
    setColor(randColor);
    setColor2(randColor);
    setOpacity(randOpacity);
    setHeight(getRndInteger(5, 70));
    setHeight2(getRndInteger(5, 100));
    setHeight3(getRndInteger(50, 80));
    setColumn(flex[getRndInteger(0, 1)]);
    setGap(getRndInteger(0, 1));
    setBlend(blendMode[getRndInteger(0, 4)]);
    setBlend2(blendMode[getRndInteger(0, 4)]);
    setMask(masks[getRndInteger(0, 2)]);
    setMask2(masks[getRndInteger(0, 1)]);
    setWidth(getRndInteger(85, 98));
    setWidth2(getRndInteger(80, 100));
  }

  return (
    <>
      <div
        className="canvas"
        style={{
          gap: `${gap}rem`,
          flexDirection: `${column}`,
          backgroundColor: `#${color}`,
        }}
      >
        <div
          className={fields[0]}
          style={{
            mixBlendMode: `${blend}`,
          }}
        >
          <img src={mask2} alt="" />
        </div>
        <div
          className={fields[1]}
          style={{
            height: `${height}%`,
            mixBlendMode: `${blend2}`,
            width: `${width}%`,
          }}
        >
          <img src={mask} alt="" />
        </div>
        <div
          className={fields[2]}
          style={{
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
