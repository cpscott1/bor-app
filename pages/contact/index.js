import { useState } from "react";

import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import styles from "./contact.module.css";

export default function Contact() {
  const [state, setState] = useState({
    active: false,
  });

  return (
    <>
      <Menu state={state} setState={setState} />

      <Header state={state} setState={setState} />
      <main className={styles.contact}>
        <div className={styles.contactCont}>
          <h2>Contact</h2>
          <div className={styles.formCont}>
            <div className={styles.textCont}>
              <div>
                <h3>Thanks For Reaching Out!</h3>
              </div>
              <span></span>
              <div>
                <p>
                  Fill out the form and someone from our team will reach out
                  within 24 to 72 hours.
                </p>
              </div>
            </div>
            <form>
              <div className={styles.nameEmail}>
                <div className={styles.inputCont}>
                  <label>Name</label>
                  <input className={styles.name} type="text" name="name" />
                </div>
                <div className={styles.inputCont}>
                  <label>Email</label>
                  <input type="text" name="email" />
                </div>
              </div>
              <div className={styles.inputCont}>
                <label>Subject</label>
                <input type="text" name="subject" />
              </div>
              <div className={styles.inputCont}>
                <label>Message</label>
                <textarea type="text" name="message" rows="4" cols="50" />
              </div>
              <div className={styles.buttonCont}>
                <button className={styles.button}>SEND</button>
              </div>
            </form>
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
