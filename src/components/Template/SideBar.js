import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Mahmoud Fathy</h2>
        <p><a href="mailto:mahmoudf.elsayed@gmail.com">mahmoudf.elsayed@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello there! I&apos;m Mahmoud, I enjoy learning new things every day.
        I've graduated from <a href="https://eng.asu.edu.eg/">Ain Shams University</a>. I am a Cybersecurity engineer, Software Engineer, Technical Writer, Research & Development Engineer, and
        a Web Developer
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Mahmoud Fathy <Link to="/">ZeroInverted.github.io</Link>.</p>
    </section>
  </section>
);

export default SideBar;
