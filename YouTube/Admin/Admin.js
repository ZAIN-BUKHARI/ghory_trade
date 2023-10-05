import React from 'react'
import styles from './admin.module.css'
import FullLayout from "../../src/layouts/FullLayout";
import theme from "../../src/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import {Grid,Stack,TextField,Button,} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import Link from 'next/link'
const Admin = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <FullLayout>
    <div className={styles.body}>

    <div class={styles.container}>
    


    <section class={styles.main}>
      <div class={styles.maintop}>
      </div>
      <div class={styles.users}>
        <div class={styles.card}>
          <img className={styles.img1} src="./images/alson.jpg"/>
          <h4 className={styles.h4} >Sam David</h4>
          <p className={styles.p}>Ui designer</p>
          <div class={styles.per}>
            <table className={styles.table}>
              <tr>
                <td><span >85%</span></td>
                <td><span>87%</span></td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </table>
          </div>
          <button>Profile</button>
        </div>
        <div class={styles.card}>
          <img className={styles.img1} src="./images/jeet.jpg"/>
          <h4 className={styles.h4} >Sam David</h4>
          <p className={styles.p}>Ui designer</p>
          <div class={styles.per}>
            <table className={styles.table}>
              <tr>
                <td><span >85%</span></td>
                <td><span>87%</span></td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </table>
          </div>
          <button>Profile</button>
        </div>
        <div class={styles.card}>
          <img className={styles.img1} src="./images/alex.jpg"/>
          <h4 className={styles.h4} >Sam David</h4>
          <p className={styles.p}>Ui designer</p>
          <div class={styles.per}>
            <table className={styles.table}>
              <tr>
                <td><span >85%</span></td>
                <td><span>87%</span></td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </table>
          </div>
          <button>Profile</button>
        </div>
        <div class={styles.card}>
          <img className={styles.img1} src="./youtube.png"/>
          <h4  >Sam David</h4>
          <p >Ui designer</p>
          <div class={styles.per}>
            <table className={styles.table}>
              <tr>
                <td><span >85%</span></td>
                <td><span>87%</span></td>
              </tr>
              <tr>
                <td>Month</td>
                <td>Year</td>
              </tr>
            </table>
          </div>
          <button>Profile</button>
        </div>
      </div>

      <section class="attendance">
        <div class={styles.attendancelist}>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Depart</th>
                <th>Date</th>
                <th>Join Time</th>
                <th>Logout Time</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td>Sam David</td>
                <td>Design</td>
                <td>03-24-22</td>
                <td>8:00AM</td>
                <td>3:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr class="active">
                <td>02</td>
                <td>Balbina Kherr</td>
                <td>Coding</td>
                <td>03-24-22</td>
                <td>9:00AM</td>
                <td>4:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>03</td>
                <td>Badan John</td>
                <td>testing</td>
                <td>03-24-22</td>
                <td>8:00AM</td>
                <td>3:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr>
                <td>04</td>
                <td>Sara David</td>
                <td>Design</td>
                <td>03-24-22</td>
                <td>8:00AM</td>
                <td>3:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr >
                <td>05</td>
                <td>Salina</td>
                <td>Coding</td>
                <td>03-24-22</td>
                <td>9:00AM</td>
                <td>4:00PM</td>
                <td><button>View</button></td>
              </tr>
              <tr >
                <td>06</td>
                <td>Tara Smith</td>
                <td>Testing</td>
                <td>03-24-22</td>
                <td>9:00AM</td>
                <td>4:00PM</td>
                <td><button>View</button></td>
              </tr> 
            </tbody>
          </table>
        </div>
      </section>
    </section>
  </div>
  </div>
  </FullLayout>
  </ThemeProvider>
    </>
  )
}

export default Admin