
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import styles from './CurrentSkeleton.module.css';
const CurrentSkeleton = () => {
  return (
    <>
        <SkeletonTheme baseColor="#946d6d" highlightColor="#d72222" duration={3}>
        <article className={styles.article_skeleton_heading}>
            <p><Skeleton count={4} height={40} /></p>
        </article>
        <article className={styles.article_skeleton}>
            <p><Skeleton height={40} /></p>
            <ul className={styles.skeleton_current_item}>
                <li>
                    <div className={styles.skeleton_item}>
                        <p><Skeleton height={112} /></p>
                    </div>
                </li>
                <li>
                    <div className={styles.skeleton_item}>
                        <p><Skeleton height={112} /></p>
                    </div>
                </li>
                <li>
                    <div className={styles.skeleton_item}>
                        <p><Skeleton height={112} /></p>
                    </div>
                </li>
            </ul>
        </article>
        </SkeletonTheme>
    </>
  )
}

export default CurrentSkeleton