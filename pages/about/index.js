import { useState } from "react";

import Header from "../../components/header/Header";
import styles from "./about.module.scss";
import Menu from "../../components/menu/Menu";

export default function About() {
  const [state, setState] = useState({
    active: false,
  });

  return (
    <>
      <Menu state={state} setState={setState} />

      <Header state={state} setState={setState} />
      <main className={styles.about}>
        <div className={styles.aboutCont}>
          <div className={styles.aboutTextCont}>
            <h2>About Us</h2>
            <p className={styles.aboutText}>
              Black Orchid Research is founded on the idea that data and
              story-telling should complement one another in solving problems.
              These problems may be organizational or more global. Our data
              scientists use data to drive insight for organizations and policy.
              The company combines analytical tools of data science with an
              applied understanding of social sciences.
            </p>
            <p>
              These analytics give insight with historical, political, economic,
              and behavioral contexts. The research and analytics done at Black
              Orchid serve to better understand dynamic multi-scale problems. We
              study the past and present to better understand the future, be it
              for an organization or population. We present findings in
              actionable ways that move the solution past theory to predictive
              and tangible.
            </p>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div>
          <p>2021 © Black Orchid Research. All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
