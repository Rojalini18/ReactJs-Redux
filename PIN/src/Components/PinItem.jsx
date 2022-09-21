import React, { forwardRef } from "react";

const PinItem = forwardRef(({ changeHandler, onBackSpaceHandler }, ref) => {
  const handleKeyUp = (e) => {
    //console.log(e.keyCode)
    if (e.keyCode === 8) {
      onBackSpaceHandler(e);
    } else {
      changeHandler(e);
    }
  };
  return (
    <div>
      <input maxLength={1} ref={ref} onKeyUp={handleKeyUp} />
    </div>
  );
});

export default PinItem;