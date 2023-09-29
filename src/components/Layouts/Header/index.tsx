import React from 'react'
import { FiBatteryCharging,FiBarChart } from "react-icons/fi";
import styles from '../DefaultLayout/DefaultLayout.module.css';
const Header = () => {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(()=>{
    setInterval(()=> {
      setTime(new Date());
    },1000)
  },[]);
  const timeHour = time.toLocaleString("en-US",{ hour12: false }).split(',')[1].split(':');
  const Hours = timeHour[0];
  const Minites = timeHour[1];
  return (
    <>
      <div className={styles.statusBar}>
          <div className={styles.leftSide}>{`${Hours} : ${Minites}`}</div>
          <div className={styles.rightSide}><FiBatteryCharging /><FiBarChart /></div>
      </div>
      
    </>
  )
}

export default Header