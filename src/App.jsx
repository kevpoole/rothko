import { useState } from "react";
import "./App.css";

function getRndInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

const arrs = [
  ["one", "two", "blank", "blank"],
  ["one", "two", "three", "blank"],
];

const masks = [
  "/images/rothkomask1.webp",
  "/images/rothkomask3.webp",
  "/images/rothkomask4.webp",
  "/images/rothkomask8.webp",
  "/images/rothkomask7.webp",
  "/images/rothkomask11.webp"
]

  const masks2 =[
  "/images/rothkomask15.webp",
  "/images/rothkomask14.webp",
  "/images/rothkomask10.webp",
  "/images/rothkomask5.webp",
  "/images/rothkomask12.webp",
];

const stripes = [
  "/images/rothkostripe.webp",
  "/images/rothkostripe2.webp",
  "/images/rothkostripe3.webp",
  "/images/rothkostripe4.webp",
  "/images/rothkostripe5.webp",
  "/images/rothkostripe6.webp",
];

const stripeClassName = ["stripe", "blank"];

const flex = ["column", "column-reverse"];

function App() {
  const [color, setColor] = useState();
  const [fields, setFields] = useState(arrs[1]);
  const [height, setHeight] = useState({ one: 100, two: 100 });
  const [width, setWidth] = useState({ one: 100, two: 100 });
  const [column, setColumn] = useState(flex[0]);
  const [mask, setMask] = useState({ one: masks[2], two: masks[0], three: masks[1] });
  const [stripe, setStripe] = useState();
  const [stripeClass, setStripeClass] = useState();

  // const randColor = () => Math.random().toString(16).substring(2, 8);

  function handleRothko() {
    setFields(arrs[getRndInteger(0, arrs.length - 1)]);
    setMask({
      one: masks[getRndInteger(0, masks.length - 1)],
      two: masks[getRndInteger(0, masks.length - 1)],
      three: masks2[getRndInteger(0, masks2.length - 1)],
    });
    setColor(
      `rgb(${getRndInteger(0, 255)}, 
           ${getRndInteger(0, 100)}, 
           ${getRndInteger(0, 255)})`
    );
    setHeight({ one: getRndInteger(5, 70), two: getRndInteger(50, 80) });
    setWidth({ one: getRndInteger(75, 90), two: getRndInteger(80, 100) });
    setColumn(flex[getRndInteger(0, 1)]);
    setStripe(stripes[getRndInteger(0, stripes.length - 1)]);
    setStripeClass(stripeClassName[getRndInteger(0, 1)]);
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
        <div className={fields[0]}>
          <img src={mask.two} alt="" />
        </div>
        <div className={stripeClass}>
          <img src={stripe} alt="" />
        </div>
        <div
          className={fields[1]}
          style={{
            height: `${height.one}%`,
            width: `${width.one}%`,
          }}
        >
          <img src={mask.one} alt="" />
        </div>
        
        <div
          className={fields[2]}
          style={{
            height: `${height.two}%`,
            width: `${width.two}%`,
          }}
        >
          <img src={mask.three} alt="" />
        </div>
      </div>
      <button onClick={handleRothko}>rothko me</button>
    </>
  );
}

export default App;
