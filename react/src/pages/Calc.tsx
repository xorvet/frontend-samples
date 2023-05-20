import { useState } from 'react';

function Calc() {
  const [Out, setOut] = useState('');
  const btns = "+,-,*,1,2,3,/,4,5,6,(,7,8,9,),0,.".split(",");

  function inn(val: string) {
    if (val === "AC") {
      setOut('');
    } else if (val === "=") {
      try {
        setOut(eval(Out));
      } catch (_e) {
        setOut("Error");
      }
    } else {
      setOut(Out + val);
    }
  }


  return (
    <div className="calc">
      <div className="calc-out">
        {Out}
      </div>
      <div className="btn-div">
        <button className="btn text-red-400 active:text-red-900" onClick={() => inn("AC")}>AC</button>
        {btns.map((btn) => (
          <button key={btn} className="btn" onClick={() => inn(btn)}>{btn}</button>
        ))}
        <button className="btn col-span-2" onClick={() => inn("=")}>=</button>
      </div>
    </div>
  )
}

export default Calc;
