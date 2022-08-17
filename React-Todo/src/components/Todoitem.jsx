import React from "react";

const Todoitem = ({ data }) => {
  return (
    <>
      <div className="a">
        <h1>{data.title}</h1>
      </div>
    </>
  );
};
export default Todoitem;
