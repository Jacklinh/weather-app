import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import styles from '../CurrentSkeleton/CurrentSkeleton.module.css';

const ForecastSkeleton = () => {
  return (
    <>
        <SkeletonTheme baseColor="#946d6d" highlightColor="#d72222" duration={3}>
            <article className={styles.article_skeleton}>
                <h2><Skeleton height={40} /></h2>
                <p><Skeleton height={220} /></p>
                <p><Skeleton height={60} /></p>
                <p><Skeleton height={60} /></p>
                <p><Skeleton height={60} /></p>
                <p><Skeleton height={60} /></p>
            </article>
        </SkeletonTheme>
    </>
  )
}

export default ForecastSkeleton