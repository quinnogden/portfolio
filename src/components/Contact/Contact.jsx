import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ogdenqstu13@gmail.com">ogdenqstu13@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="www.linkedin.com/in/quinn-ogden-15791a17b">linkedin.com/in/quinn-ogden-15791a17b</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/quinnogden">github.com/quinnogden</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/youtubeIcon.png")} alt="Youtube icon" />
          <a href="https://www.youtube.com/@Ogdog_">youtube.com/@Ogdog_</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/twitchIcon.png")} alt="Twitch icon" />
          <a href="https://www.twitch.tv/ogdog_">twitch.tv/ogdog_</a>
        </li>
      </ul>
    </footer>
  );
};
