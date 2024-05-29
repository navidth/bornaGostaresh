import React from "react";

function ParagraphDisplay({ item }) {
  const styleParagraph = {
    width: "400px",
    height: "300px",
    minHeght: "250px",  
};
  return (
    <div
      className="mx-2 mt-4"
      style={styleParagraph}
    >
      <p className="mb-0">{item.value}</p>
    </div>
  );
}

export default ParagraphDisplay;
