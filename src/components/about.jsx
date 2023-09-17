import Styles from '../styles/about.module.css';

const About = () => (
  <section className={Styles.text}>
    <h2 className={Styles.title}>About</h2>
    <p>This is the capstone project of the third module in the Microverse program.</p>
    <p>It is a metrics app for countries built with React framework.</p>
    <p>State mangament & network calls are handled by Redux toolkit.</p>
  </section>
);

export default About;
