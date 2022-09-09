import React, { useState } from 'react'
import {slidedata} from './data'
const Slider = () => {
    const [value, setvalue] = useState(0);
  return (
    <div>
  {slidedata.map((e, index) => {
        return (
          <div key={e.id}>
            {value == index && (
              <>
                <h2 data-testid="qn">{e.question}</h2>
                <h2 data-testid="ans">{e.answer}</h2>
              </>
            )}
          </div>
        );
      })}

      <button
        data-testid="Pbtn"
        onClick={() => {
          if (value > 0) {
            setvalue(value - 1);
          }
        }}
      >
        Prev
      </button>

      <button
        data-testid="Nbtn"
        onClick={() => {
          if (value < slidedata.length - 1) {
            setvalue(value + 1);
          }
        }}
      >
        Next
      </button>

    </div>
  )
}

export default Slider