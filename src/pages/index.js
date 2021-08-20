import React from 'react'
import Helmet from 'react-helmet'
import ReactPlayer from "react-player";

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Sarabjeet Singh, Software Engineer';
  const siteDescription = 'Portfolio';

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              I am building impactful software.
              {/*<br />
              React 🔛 Javascript, Consultant, Organiser of React Chandigarh & Devtalks India*/}
            </h2>
          </header>
          <p>Living in the Chandigarh, India.
            I've built websites, mobile apps, animations, graphic, games.
            <br />
            If you'd like to discuss your idea, get help, or just want to have a chat, drop me an email.
            <h6 className="icon fa-envelope-o">
              <a href="mailto:sarabsingh21@gmail.com"> sarabsingh21@gmail.com</a>
            </h6>
            </p>
            
         {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>*/}
        </section>

        {/*<section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>*/}
        <section id="three">
          <h2>Talks</h2>
          <p>
            I love to talk about technology, UI/UX, and solving real life problems
            and an active participant and organizer of <a href="https://www.meetup.com/Chandigarh-React-Developers/" target="_blank">React Chandigarh</a> and <a href="https://www.meetup.com/devtalks-india" target="_blank">DevTalks India</a>.
          </p>
        </section>
        <br />
        <a href="/sarabjeet_singh_cv.pdf">Download CV</a>
        {/*<section id="four">*/}
        {/*  <h2>Blogs</h2>*/}
        {/*  <p>I write about tech, fitness, sports</p>*/}
        {/*</section>*/}

        {/*<section id="three">
          <h2>Get In Touch</h2>
          <p>
            Accumsan pellentesque commodo blandit enim arcu non at amet id arcu
            magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem
            vulputate lorem neque lorem ipsum dolor.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  1234 Somewhere Rd.
                  <br />
                  Nashville, TN 00000
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  000-000-0000
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="#">hello@untitled.tld</a>
                </li>
              </ul>
            </div>
          </div>
        </section>*/}
      </div>
    </Layout>
  )
}

export default HomeIndex
