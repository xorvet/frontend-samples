function Calc() {
  let out = '';
  const btns = "+,-,*,1,2,3,/,4,5,6,(,7,8,9,),0,.".split(",");

  function inn(val) {
    if (val === "AC") {
      out = '';
    } else if (val === "=") {
      try {
        out = eval(out);
      } catch (_e) {
        out = "Error";
      }
    } else {
      out += val
    }
  }


  return (
    <div className="calc">
      <div className="calc-out">
        {out}
      </div>
      <div className="btn-div">
        <button className="btn text-red-400 active:text-red-900" onClick={() => inn("AC")}>AC</button>
        {btns.map((btn) => (
          <button className="btn" onClick={() => inn(btn)}>{btn}</button>
        ))}
        <button className="btn col-span-2" onClick={() => inn("=")}>=</button>
      </div>
    </div>
  )
}

export default Calc;
