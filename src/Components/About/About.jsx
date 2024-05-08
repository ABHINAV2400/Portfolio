import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Front-end Proficiency</h3>
              <p>
              Strong proficiency in front-end technologies including HTML, CSS, and JavaScript, with hands-on experience in frameworks like React.js, Ember.js, Next.js and Angular.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-end Development</h3>
              <p>
              Expertise in back-end development using Node.js and Python, coupled with proficiency in web frameworks such as Express.js, Flask and Django, enabling the creation of robust and scalable server-side solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>APIs and Databases</h3>
              <p>
              Deep understanding of RESTful APIs and database systems, encompassing both SQL and NoSQL databases, ensuring efficient data management and retrieval for applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Platforms</h3>
              <p>
              Proficient in utilizing cloud platforms such as AWS, Azure, and Google Cloud to deploy, manage, and scale applications, ensuring seamless integration and reliability in cloud environments.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>DevOps and Security</h3>
              <p>
              Knowledgeable in DevOps practices, leveraging tools like Docker and Kubernetes to streamline development workflows, with a focus on implementing robust CI/CD pipelines and maintaining data security standards.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Blockchain Technology</h3>
              <p>
              Familiarity with blockchain technology for immutable record-keeping and smart contracts, offering innovative solutions in rights management and data integrity.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Interest in AI</h3>
              <p>
              Passionate about artificial intelligence, particularly in machine learning frameworks like TensorFlow and PyTorch, with a keen interest in exploring AI-driven solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Problem-Solving and Communication</h3>
              <p>
              Exceptional problem-solving capabilities, coupled with strong teamwork orientation and effective communication skills.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;