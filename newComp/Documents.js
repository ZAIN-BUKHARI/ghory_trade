import React from 'react'
import styles from '../styles/document.module.css'
import { Link } from 'react-feather'

const Documents = () => {
  const doc_1 = () =>{
    // Define the path to the PDF file in the public directory
    const open = 'https://res.cloudinary.com/dy2hybbx5/image/upload/v1696496527/zydrydzd2r70gh9suisd.jpg';
    const download = './documents/docx-1.jpg';

    // Create an anchor element
    const opendoc = document.createElement('a');
    opendoc.href = open;
    opendoc.target = '_blank'; // Open the link in a new tab/window
    opendoc.download = open; // Name for the downloaded file
    opendoc.click();

    const downloadDoc = document.createElement('a');
    downloadDoc.href = download;
    downloadDoc.target = '_blank'; // Open the link in a new tab/window
    downloadDoc.download = download; // Name for the downloaded file
    downloadDoc.click();
 }
  const doc_2 = () =>{
    // Define the path to the PDF file in the public directory
    const open = 'https://res.cloudinary.com/dy2hybbx5/image/upload/v1696496528/qizfekbzepb3r7v6z3zt.jpg';
    const download = './documents/docx-2.jpg';

    // Create an anchor element
    const opendoc = document.createElement('a');
    opendoc.href = open;
    opendoc.target = '_blank'; // Open the link in a new tab/window
    opendoc.download = open; // Name for the downloaded file
    opendoc.click();

    const downloadDoc = document.createElement('a');
    downloadDoc.href = download;
    downloadDoc.target = '_blank'; // Open the link in a new tab/window
    downloadDoc.download = download; // Name for the downloaded file
    downloadDoc.click();
 }
 
  return (
    <>
    <div className={styles.ug}>
        <h1 className={styles.title}>U-G TRADING CERTIFICATES</h1>
    </div>
    <br/>
    <div className={styles.body}>
        <div className={styles.ImgStack} >
            <div className={`${styles.imgOne} ${styles.div_1}`}>
            <img  src='./documents/docx-1.jpg' onClick={doc_1}  />     
            </div>
            <div className={`${styles.imgOne} ${styles.div_2}`}>
            <img  src='./documents/docx-5.jpg' onClick={doc_2} /> 
            </div>
        </div>
        

    </div>
    </>
  )
}

export default Documents