import React from 'react';
import style from "./Navbar.module.css";

const DownloadButton = () => {
  const handleDownload = () => {
    fetch('https://docs.google.com/document/d/1M55TABWoVgQft8v0Q1Zt8TZy4lOmN1i4/edit?usp=sharing&ouid=113194324438980732698&rtpof=true&sd=true')
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'CV Edgardo Funes.pdf'; 
        link.click();
      });
  };

  return (
    <button className={style.download} onClick={handleDownload}>DESCARGAR CV</button>
  );
};

export default DownloadButton;