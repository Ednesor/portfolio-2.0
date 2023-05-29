import React from 'react';
import style from "./Navbar.module.css";

const DownloadButton = () => {  

  return (
    <a 
    className={style.download} 
    href={"/Edgardo-Funes-CV.pdf"}
    download={"Edgardo-Funes-CV"}
    target='_blank'
    rel='noreferrer'
    >DESCARGAR CV</a>
  );
};

export default DownloadButton;