import React, { useState } from 'react';
import './App.css';

// interface TProduct{
//   input1: number,
//   input2: number,
//   input3: number
// }

type TInput = {
  input1: any,
  input2: any,
  input3: any
};

type TCheck = {
  check1: any,
  check2: any,
  check3: any
};

function App() {
  // const [input1, setInput1] = useState(0);
  // const [input2, setInput2] = useState(0);
  // const [input3, setInput3] = useState(0);
  const [result, setResult] = useState(0);
  const [error, setError] = useState("");
  const [numbers, setNumbers] = React.useState<TInput>({input1: 0, input2: 0, input3: 0 });
  const [checkbox, setCheck] = React.useState<TCheck>({check1: false, check2: false, check3: false });

  const calculating = (type: string) => {
    const valCheck = Object.values(checkbox)
    const valNumber = Object.values(numbers)
    let temp:string[] = []
    valCheck.forEach((val,idx) => {
      if (val) {
        temp.push(valNumber[idx])
      }
    })
    if(temp.length > 1){
      console.log('temp', temp)
      const operand = () => {
        if(type === 'addition') {
          return temp.reduce((product, n) => product + n)
        } else if(type === 'subtraction') {
          let dev = Number(temp[0]) - Number(temp[1])
          temp.forEach((t, i) => {
            if(i > 1){ 
              console.log(dev, t)
              dev = dev - Number(t)
            }
          })
          return dev
        } else if(type === 'multiplication') {
          return temp.reduce((product, n) => product * Number(n), 1)
        } else {
          let dev = Number(temp[0]) / Number(temp[1])
          temp.forEach((t, i) => {
            if(i > 1){ 
              console.log(dev, t)
              dev = dev / Number(t)
            }
          })
          return dev
        }
      }
      const oper = operand()
      setResult(Number(oper))
      console.log('operand()', operand())
      return operand()
    } else {
     setError('error')
     return 0
    }
  }
    
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e.target.value', e.target.value)
    const newValue = e.target.validity.valid ? e.target.value : numbers.input1;
    setNumbers({...numbers, [e.target.name]: Number(newValue)})
  }

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e.target.checked', e.target.checked)
    setCheck({...checkbox, [e.target.name]: e.target.checked})
  }
  
  return (
    <div className="App">
      <div className="row">
        <input pattern="[0-9]*" name="input1" onChange={onChange} value={numbers.input1}/>
        <input type="checkbox" name="check1" onChange={onChangeCheckbox} checked={checkbox.check1} />
      </div>
      <div className="row">
        <input pattern="[0-9]*" name="input2" onChange={onChange} value={numbers.input2}/>
        <input type="checkbox" name="check2" onChange={onChangeCheckbox} checked={checkbox.check2} />
      </div>
      <div className="row">
        <input pattern="[0-9]*" name="input3" onChange={onChange} value={numbers.input3}/>
        <input type="checkbox" name="check3" onChange={onChangeCheckbox} checked={checkbox.check3}/>
      </div>
      <div className="row">
        <button onClick={() => calculating('addition')}>+</button>
        <button onClick={() => calculating('subtraction')}>-</button>
        <button onClick={() => calculating('multiplication')}>x</button>
        <button onClick={() => calculating('division')}>/</button>
      </div>
      {error}
      <div className="row">Hasil: {result}</div>
    </div>
  );
}

export default App;
