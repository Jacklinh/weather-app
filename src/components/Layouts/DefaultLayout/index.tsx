
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import styles from './DefaultLayout.module.css';

const DefaultLayout = () => {
  return (
    <div className={styles.iphone}>
        <div className={styles.iphone_border}>
            <div className={styles.botones}>
                <div className={styles.switch}></div>
                <div className={`${styles.vol} ${styles.up}`}></div>
                <div className={`${styles.vol} ${styles.down}`}></div>
                <div className={styles.touchID}></div>
            </div>
            <div className={styles.bordeNegro}>
                <div className={styles.notch}>
                    <div className={styles.bocina}></div>
                    <div className={styles.camera}></div>
                </div>
                <div className={styles.mainScreen}>
                    <Header />
                    <div className={styles.appScreen}>
                        <main className='p-[20px]'>
                            <Outlet />
                        </main>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default DefaultLayout