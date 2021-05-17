import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/Header";
import Menu from "../components/menu/Menu";
import styles from "../styles/Home.module.css";

import gsap from "gsap";

const Home = () => {
  // let menu = useRef(null)
  const [state, setState] = useState({
    active: false,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Black Orchid Research</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu state={state} setState={setState} />

      <Header state={state} setState={setState} />
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h2 className={styles.topText}>Know Your Data</h2>
          <h2>Know Your Story</h2>
        </div>
      </div>
      <main className={styles.main}>
        <section className={styles.serviceCont}>
          <div className={styles.serviceHead}>
            <h2>Our Services</h2>
          </div>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <Image src="/data-driven.svg" width={100} height={100} />
              <h3>Data Analysis</h3>
              <p>Transform and model data for better business intelligence</p>
            </div>
            <div className={styles.serviceCard2}>
              <Image src="/monitor.svg" width={100} height={100} />
              <h3>Geospatial Analysis</h3>
              <p>Understand the geographic factors that impact your story</p>
            </div>
            <div className={styles.serviceCard}>
              <Image src="/chat.svg" width={100} height={100} />
              <h3>Network Data</h3>
              <p>
                Use networks and graph theory to understand social structures
              </p>
            </div>
          </div>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard2}>
              <Image src="/statistics.svg" width={100} height={100} />
              <h3>Text Analysis</h3>
              <p>Sort unstructured text for valuable insight</p>
            </div>
            <div className={styles.serviceCard}>
              <Image src="/benefits.svg" width={100} height={100} />
              <h3>Econometrics</h3>
              <p>Apply statistical methods to economic data</p>
            </div>
            <div className={styles.serviceCard2}>
              <Image src="/research.svg" width={100} height={100} />
              <h3>Data Visualization</h3>
              <p>Better charts, graphs and maps to tell your storye</p>
            </div>
          </div>
        </section>
        <section className={styles.workCont}>
          <div className={styles.workHead}>
            <h2>Our Work Process</h2>
          </div>
          <div className={styles.workGrid}>
            <div className={styles.workCol1}>
              <div className={styles.workText}>
                <h3 className={styles.workHeading}>Data Records</h3>
                <p>
                  Once we understand your business needs, we pull data from
                  everywhere to turn your problem into a solution.{" "}
                </p>
              </div>
              <div className={styles.workText}>
                <h3 className={styles.workHeading}>
                  Exploratory Data Anaylsis
                </h3>
                <p>
                  We look for patterns through the application of statistical
                  and technical knowledge and leverage every data science tool
                  at our disposal.{" "}
                </p>
              </div>
              <div className={styles.workText}>
                <h3 className={styles.workHeading}>Models and Story Telling</h3>
                <p>
                  Communication and visualizations help to make these insights
                  actionable.{" "}
                </p>
              </div>
            </div>
            <div>
              <div>
                <Image src="/illustrations.svg" width={600} height={500} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div>
          <p>2021 © Black Orchid Research. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
