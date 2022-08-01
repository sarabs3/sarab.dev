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
        <section id="three">
          <h2>Talks</h2>
          <p>
            I love to talk about technology, UI/UX, and solving real life problems
            and an active participant and organizer of <a href="https://www.meetup.com/Chandigarh-React-Developers/" target="_blank">React Chandigarh</a> and <a href="https://www.meetup.com/devtalks-india" target="_blank">DevTalks India</a>.
          </p>
        </section>

        <section id="two">
          <h2>Recent Youtube videos</h2>

          <Gallery />

          <ul className="actions">
            <li>
            <a href="/sarabjeet_singh_cv.pdf">Download CV</a>
            {/* <a href="#" className="button">
                Full Portfolio
              </a> */}
            </li>
          </ul>
        </section>
        <br />
        
      </div>
    </Layout>
  )
}

export default HomeIndex
