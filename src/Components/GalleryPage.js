// packages imports
import React, { useState, useEffect } from "react";
// styles imports
import '../styles/gallery.css';
// components imports

// images import
import img1 from "../assets/IMG1.JPG";
import img2 from "../assets/IMG2.JPG";
import img3 from "../assets/IMG3.JPG";
import img4 from "../assets/IMG4.JPG";
import img5 from "../assets/IMG5.JPG";
import img6 from "../assets/IMG6.JPG";
import img7 from "../assets/hero-img4.jpg";

function GalleryPage() {
  /* Global variables */

  // array for images
  const Images = [
    img1,
    img2,
    img3,
    img4,
    img7,
    img6,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
  ];

  // buttons state
  const [buttons, setButtons] = useState([]);
  // sliced images state
  const [slicedImages, setSlicedImages] = useState([]);
  // variables to determine image array length
  const imageLength = Images.length;
  // variables to determine number of images to display
  const imageNumber = Math.round(imageLength / 6);
  console.log(imageNumber);
  // variable to hold button index
  let buttonIndex = [1];

  // pagination functions
  function createPaginationBtns() {
    let buttonArray = [];
    for (let index = 1; index < imageNumber + 1; index++) {
      buttonArray.push([index]);
    }
    setButtons(buttonArray);
  }

  // useEffect to call createPaginationBtns function
  useEffect(() => {
    createPaginationBtns();  
    imageFun(1);   
  }, []);

  // function to slice images for for display
  function imageSlicer(first, last) {
    setSlicedImages(Images.slice(first, last));
    console.log(slicedImages);
  }

  // function to determine first and last values for slicer
  function imageFun(index) {
    buttonIndex = index;
    let k = index - 1;
    let m = 6;
    let n = 0;
    const first = n + 6 * k;
    const last = m + 6 * k;
    // call image slicer function
    imageSlicer(first, last);
    console.log(first, last);
  }
  // fucntion to change index for next and prev buttons
  function changeIndex(buttonName) {
    if (buttonName === "prev") {
      buttonIndex <= 1 ? (buttonIndex = +imageNumber) : buttonIndex--;
    }
    if (buttonName === "next") {
      buttonIndex >= imageNumber ? (buttonIndex = +1) : buttonIndex++;
    }
    imageFun(buttonIndex);
  }

  return (
    <>
      {/* images display */}
      <div className="gallery-section">
      <div className="container">
           <div className="section-title">
              <span className="subtitle">gallery</span>
            <h1>School gallery</h1>
            </div>
            <div className="page-row">
                  <div className="gallery_row gallery_row_one">
                    <img src={slicedImages[0]} alt=""/>
                    <img src={slicedImages[1]} alt=""/>
                  </div>
                <div className="gallery_row gallery_row_two">
                    <img src={slicedImages[2]} alt=""/>
                    <img src={slicedImages[3]} alt=""/>
                </div>
                <div className="gallery_row gallery_row_three">
                    <img src={slicedImages[4]} alt=""/>
                    <img src={slicedImages[5]} alt=""/>
                </div>
            </div>
            <div className="pagination">
              <button onClick={() => changeIndex("prev")}>prev</button>
              {buttons.map((button, id) => (
                  <span  key={id} onClick={() => imageFun(button)}>
                  {button}
                  </span>
              ))}
              <button onClick={() => changeIndex("next")}>last</button>
            </div>
            
          </div>
      </div>
    
    </>
  );
}

export default GalleryPage;
