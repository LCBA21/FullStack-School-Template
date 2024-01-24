import React,{ useState,useEffect } from "react";
import '../styles/gallery.css';
import image1 from '../assets/IMG5.JPG'

function Gallery() {
 function directPage(){
  window.location.href ='src/components/GalleryPage.js' 
 }

  return (
    <div className="gallery-section">
      <div className="container">
            <div className="section-title">
              <span className="subtitle">gallery</span>
              <h1>School gallery</h1>
            </div>
            <div className="page-row">
                  <div className="gallery_row gallery_row_one">
                    <img src={image1} alt=""/>
                    <img src={image1} alt=""/>
                  </div>
                <div className="gallery_row gallery_row_two">
                    <img src={image1} alt=""/>
                    <img src={image1} alt=""/>
                </div>
                <div className="gallery_row gallery_row_three">
                    <img src={image1} alt=""/>
                    <img src={image1} alt=""/>
                </div>
            </div>
            <div id="gallery_btn" onClick={directPage}> more images... </div>
          </div>
      </div>
  );
    
}

export default Gallery