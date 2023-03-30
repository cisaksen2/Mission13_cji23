import React from 'react';
import styles from '../home.module.css';

function Baconsale() {
  return (
    <>
      <div className="container text-center">
        <div>
          <h1 className={styles.h1}>Baconsale Podcast</h1>
          <h4>
            <a href="https://baconsale.com">Check us out!</a>
          </h4>
        </div>
      </div>
    </>
  );
}

export default Baconsale;
