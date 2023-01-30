import { useState } from 'react'
import './App.css'

const arrs = [
  ['one', 'two'], ['one', 'two', 'three']
]
const flex = ['column', 'column-reverse']

function App() {
  const [fields, setFields] = useState(arrs[1])
  const [color, setColor] = useState()
  const [color2, setColor2] = useState()
  const [color3, setColor3] = useState()
  const [opacity, setOpacity] = useState()
  const [height, setHeight] = useState('auto')
  const [column, setColumn] = useState(flex[0])
  const [gap, setGap] = useState()


  function getRndInteger(min, max) {
    return Math.round((Math.random() * (max - min) + min));
  }
  const randColor = () => Math.random().toString(16).substring(2, 8);

  const randOpacity = () => (Math.random() * 5000).toString(16).substring(6, 8)

  function handleRothko () {
    setFields(arrs[getRndInteger(0,1)])
    setColor(randColor)
    setColor2(randColor)
    setColor3(randColor)
    setOpacity(randOpacity)
    setHeight(getRndInteger(5,200))
    setColumn(flex[getRndInteger(0,1)])
    setGap(getRndInteger(.5, 2.5))

  }
 


  return (
    <>
    <div className='canvas' style={{gap: `${gap}rem`,flexDirection: `${column}`, backgroundColor: `#${color}${opacity}`}} >
      <div className={fields[0]} style={{height: `${height}%`,backgroundColor: `#${color}`}}></div>
      <div className={fields[1]} style={{backgroundColor: `#${color2}`}}></div>
      <div className={fields[2]} style={{backgroundColor: `#${color3}`}}></div>
    </div>
    <button onClick={handleRothko}>bam</button>
    </>)
  
}

export default App
