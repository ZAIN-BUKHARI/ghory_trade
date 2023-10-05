import React from 'react'
import styles from '../styles/document.module.css'
import { Link } from 'react-feather'

const Documents = () => {
  return (
    <>
    <div className={styles.ug}>
        <h1 className={styles.title}>U-G TRADING CERTIFICATES</h1>
    </div>
    <br/>
    <div className={styles.body}>
        <div className={styles.ImgStack} >
            <div className={`${styles.imgOne} ${styles.div_1}`}>
            <a target="_blank" href='https://res.cloudinary.com/dy2hybbx5/image/upload/v1696496527/zydrydzd2r70gh9suisd.jpg'><img  src='./documents/docx-1.jpg'/></a>     
            </div>
            <div className={`${styles.imgOne} ${styles.div_2}`}>
           <a  target="_blank" href='https://res.cloudinary.com/dy2hybbx5/image/upload/v1696496527/ctf532r047txpc5dxu6e.jpg'><img  src='./documents/docx-2.jpg'/></a> 
            </div>
            <div className={`${styles.imgOne} ${styles.div_3}`}>
            <a  target="_blank" href='https://res.cloudinary.com/dy2hybbx5/image/upload/v1696496527/ve7tpmpxrjhfxl2zo7zu.jpg'><img  src='./documents/docx-3.jpg'/></a> 
            </div>
        </div>
        <div className={styles.ImgStacktwo} >
            <div className={`${styles.imgOne} ${styles.div_1}`}>
            <a  target="_blank" href='https://res.cloudinary.com/dy2hybbx5/image/upload/v1696496538/ca4wx2h0zfmrhk7zixyl.jpg'><img  src='./documents/docx-4.jpg'/></a> 
            </div>
            <div className={`${styles.imgOne} ${styles.div_2}`}>
           <a  target="_blank" href='https://res.cloudinary.com/dy2hybbx5/image/upload/v1696496528/qizfekbzepb3r7v6z3zt.jpg'><img  src='./documents/docx-5.jpg'/></a> 
            </div>
            {/* <div className={`${styles.imgOne} ${styles.div_3}`}>
            <img  src='./documents/docx-1.jpg'/>
            </div> */}
        </div>

    </div>
    </>
  )
}

export default Documents