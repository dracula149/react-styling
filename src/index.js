import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <img
      className="food"
      src="https://3.bp.blogspot.com/-cAR76Ztbzho/Tsr3BoGFeII/AAAAAAAAIoI/XTk2Drkr6Yo/s1600/DSC_0075.JPG"
    />
    <img
      className="food"
      src="https://www.jocooks.com/wp-content/uploads/2014/09/beer-can-chicken-1-7.jpg"
    />
    <img
      className="food"
      src="https://c.ndtvimg.com/r1m5m4n8_litti-chokha_625x300_24_August_18.jpg"
    />
    <img src={img} />
  </div>,
  document.getElementById("root")
);
