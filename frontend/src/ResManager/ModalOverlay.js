import styles from "./Modal.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div>
    {props.popup==="true"?<div className={styles.backdrop}> 
    <div className={styles.modal}>
    {props.children}
    </div> </div>:<></>}
    {props.popup==="false"? <div className={styles.modal}>
    {props.children}
    </div> :<></>}
    </div>
    
    
  );
};


export default ModalOverlay;