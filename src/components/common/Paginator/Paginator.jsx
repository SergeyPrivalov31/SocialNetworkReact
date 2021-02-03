import React from "react";
import styles from './Paginator.module.css'

const Paginator = ({currentPage, onPageChanged, totalCount, pageSize}) => {

    let pagesCount = Math.ceil(totalCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.paginator}>
                {pages.map(p => {
                return <span className={currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 onPageChanged(p);
                             }}>{p}</span>
            })}
        </div>
}

export default Paginator;