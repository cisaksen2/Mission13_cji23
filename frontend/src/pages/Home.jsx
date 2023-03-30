import React from 'react';
import styles from '../home.module.css';

function Home() {
  return (
    <>
      <div className="container text-center">
        <div>
          <h1 className={styles.h1}>Joel Hilton Film Collection</h1>
          <img
            src="./JoelHiltonHeadshot.jpg"
            className="mx-auto d-block"
            alt="joel"
          />
          <h4>
            This is a database full of Joel Hilton's favorite movies and their
            associated information.
          </h4>
        </div>
      </div>
    </>
  );
}

export default Home;
