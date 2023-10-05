import React from 'react'
import styles from './uplan.module.css'
import { useRouter } from 'next/router'
const UPlan = () => {
    const router = useRouter()

    const route1 = () =>{ router.push('/instructions?Uplan=5')}
    const route2 = () =>{router.push('/instructions?Uplan=10')}
    const route3 = () =>{router.push('/instructions?Uplan=15')}
    const route4 = () =>{router.push('/instructions?Uplan=20')}
  return (
    <>
    <div className={styles.body}>
    <div className={styles.wrapper}>
  <div className={styles.pricing_table}>
    <div className={`${styles.pt_item} ${styles.pt_1}`}>
       <div className={styles.title}>
         <p>U-PLAN</p>
         <p>Earn</p>
       </div>
      <div className={styles.price}>
        <p>
          <span classNames={styles.dollar}>₨</span>
          <span className={styles.money}>5k</span>
          <span classNames={styles.month}>/Month</span>
        </p>
      </div>
      <ul>
        <li><div className={styles.features}>
          <p><span>One Time Invest ₨ 5k only</span> </p>
        </div></li>
        {/* <li><div className={styles.features}>
          <p><span>2 GB</span> RAM</p>
        </div></li> */}
        <li><div className={styles.features}>
          <p><span>5 Hours</span> Watch Time</p>
        </div></li>
        <li><div className={styles.features}>
          <p><span>5</span> Subscribers</p>
        </div></li>
        <li><div className={styles.features}>
          <p>Like, Comment and Share</p>
        </div></li>
        <li><div className={styles.features}>
          <p><span>6 months plan</span></p>
        </div></li>
      </ul>
      <button type='button' onClick={route1}  >Get Started</button>
    </div>
    <div className={`${styles.pt_item} ${styles.pt_2}`}>
       <div className={styles.title}>
         <p>U-PLAN</p>
         <p>Earn</p>
       </div>
      <div className={styles.price}>
        <p>
          <span classNames={styles.dollar}>₨</span>
          <span className={styles.money}>10K</span>
          <span classNames={styles.month}>/Month</span>
        </p>
      </div>
      <ul>
        <li><div className={styles.features}>
        <p><span>One Time Invest ₨ 10k only</span> </p>
        </div></li>
        <li><div className={styles.features}>
        <p><span>8 Hours</span> Watch Time</p>
        </div></li>
        <li><div className={styles.features}>
          <p><span>10</span> Subscribers</p>
        </div></li>
        <li><div className={styles.features}>
        <p>Like, Comment and Share</p>
        </div></li>
        <li><div className={styles.features}>
          <p><span>6 months plan</span></p>
        </div></li>
      </ul>
      <button onClick={route2} type='button' >Get Started</button>
    </div>
    <div  className={`${styles.pt_item} ${styles.pt_3} ${styles.active}`}>
       <div className={styles.title}>
         <p>U-PLAN</p>
         <p>Earn</p>
       </div>
      <div className={styles.price}>
        <p>
          <span classNames={styles.dollar}>₨</span>
          <span className={styles.money}>15K</span>
          <span classNames={styles.month}>/Month</span>
        </p>
      </div>
      <ul>
        <li><div className={styles.features}>
        <p><span>One Time Invest ₨ 15k only</span> </p>
        </div></li>
        {/* <li><div className={styles.features}>
          <p><span>2 GB</span> RAM</p>
        </div></li> */}
        <li><div className={styles.features}>
        <p><span>10 Hours</span> Watch Time</p>
        </div></li>
        <li><div className={styles.features}>
          <p><span>15</span> Subscribers</p>
        </div></li>
        <li><div className={styles.features}>
        <p>Like, Comment and Share</p>
        </div></li>
        <li><div className={styles.features}>
          <p><span>6 months plan</span></p>
        </div></li>
      </ul>
      <button type='button' onClick={route3}  >Get Started</button>
    </div>
    <div className={`${styles.pt_item} ${styles.pt_4}`}>
       <div className={styles.title}>
         <p>U-PLAN</p>
         <p>Earn</p>
       </div>
      <div className={styles.price}>
        <p>
          <span classNames={styles.dollar}>₨</span>
          <span className={styles.money}>20k</span>
          <span classNames={styles.month}>/Month</span>
        </p>
      </div>
      <ul>
        <li><div className={styles.features}>
        <p><span>One Time Invest ₨ 20k only</span> </p>
        </div></li>
        {/* <li><div className={styles.features}>
          <p><span>2 GB</span> RAM</p>
        </div></li> */}
        <li><div className={styles.features}>
        <p><span>14 Hours</span> Watch Time</p>
        </div></li>
        <li><div className={styles.features}>
          <p><span>20</span> Subscribers</p>
        </div></li>
        <li><div className={styles.features}>
        <p>Like, Comment and Share</p>
        </div></li>
        <li><div className={styles.features}>
          <p><span>6 months plan</span></p>
        </div></li>
      </ul>
      <button type='button' onClick={route4}  >Get Started</button>
    </div>
    
  </div>
</div>
</div>

    </>
  )
}

export default UPlan