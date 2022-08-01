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
            I love to talk about technology, UI/UX, and solving real life problems.
            <h3 className='head-2'>Recent Talks</h3>
            <ul>
                    <li>
                        <div class="text-xs">
                            <b>Reactivity in Javascript,</b> at Hack the mountain meetup Chandigarh,
                            <span class="text-xxs text-yellow-800 uppercase font-bold" > July 2022</span>
                        </div>
                    </li>
                    <li>
                        <div class="text-xs">
                          <b>Fundamentals of Google Firebase,</b> at Google developers group (GDG) chandigarh,
                            <span class="text-xxs text-yellow-800 uppercase font-bold" > June 2022</span>
                        </div>
                    </li>
                    <li class="justify-between mb-1">
                        <div class="text-xs">
                          <b>CSS in JS,</b> at React Delhi NCR Meetup, New Delhi,
                            <span class="text-xxs text-yellow-800 uppercase text-right font-bold" > February 2020</span>
                        </div>
                    </li>
                    <li class="justify-between mb-1">
                        <div class="text-xs">
                        <div>
                          <b>Open-source community,</b> at Hactober Fest, Microsoft User Group, Chandigarh,
                            <span class="text-xxs text-yellow-800 uppercase text-right font-bold" > October 2019</span>
                        </div>
                    </div>
                    </li>
                    <li class="justify-between mb-1">
                        <div class="text-xs">
                        <div>
                          <b>Test Driven Development,</b> at Devtalks India, Chandigarh,
                            <span class="text-xxs text-yellow-800 uppercase text-right font-bold" > September 2019</span>
                        </div>
                    </div>
                    </li>
            </ul>
            and an active participant and organizer of React Chandigarh and <a href="https://devtalks.in/" target="_blank">DevTalks India</a>.
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
