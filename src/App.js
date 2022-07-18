import {useState} from 'react'


function App() {

    const [calcExpr, setCalcExpr]=useState("");
    const [result, setResult]=useState("");

    const ops=['/','*','+','-','.'];


    const resetCalc=()=>{
      setCalcExpr('')
      setResult('')
    }

    const updateCalcExpr= symb =>{

      if (
          (ops.includes(symb) && calcExpr==="") ||
          (ops.includes(symb) && ops.includes(calcExpr.slice(-1))) 
        ) 
        {
          return; 
        }

      setCalcExpr(calcExpr + symb);

      if (!ops.includes(symb)) {

          setResult(eval(calcExpr + symb).toString());
          
          }

    }

    const calculate=()=>{

      setCalcExpr(eval(calcExpr).toString())
    }

      const delLast=()=>{

        if (calcExpr!=="") {
          setCalcExpr(calcExpr.slice(0,-1));
          
          
        }
      }
   
       


    const createDigits=()=>{

        const digits=[];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button key={i} onClick={()=>updateCalcExpr(i.toString())} >{i}</button>
            )
            
        }
        return digits;

    }



  return (
    <div className="App">

        <div className="calculator">
            <div className="display">
                {result ? <span>({result})</span> : ""} &nbsp;
                {calcExpr || '0'}
            </div>
             <div className="operators">
                <button onClick={()=> resetCalc("")}>C</button>
                <button onClick={()=> updateCalcExpr("/")}>/</button>
                <button onClick={()=>updateCalcExpr("*")}>*</button>
                <button onClick={()=>updateCalcExpr("+")}>+</button>
                <button onClick={()=>updateCalcExpr("-")}>-</button>
                <button onClick={()=>{delLast()}} >DEL</button>

             </div>
             <div className="digits">
                {createDigits()}
                <button onClick={()=>updateCalcExpr("0")}>0</button>
                <button onClick={()=>updateCalcExpr(".")}>.</button>
                <button onClick={()=>calculate()}>=</button>

             </div>
        </div>


    </div>
  )
}
export default App