import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'

const SessionIndex = () => {
    const siteTitle = 'Sarabjeet Singh, Reactjs Introduction';
    const siteDescription = 'Portfolio';

    return (
        <div>
            <Helmet>
                <title>{siteTitle}</title>
                <meta name="description" content={siteDescription} />
            </Helmet>

            <div id="main">
                <section id="one">
                    <header className="major">
                        <h2>
                            Introduction to ReactJs 21-Nov-2020
                        </h2>
                    </header>
                    <p>Hey Everyone, this post will contains all the important links used in the session.
                    </p>

                    <h2>Surveys</h2>
                    <div className="row">
                        <article className="6u 12u$(xsmall)">
                            <a
                                className=""
                                target="_blank"
                                href="https://insights.stackoverflow.com/survey/2020"
                            >
                                <h3>Stack overflow</h3>
                            </a>
                        </article>
                        <article className="6u 12u$(xsmall)">
                            <a
                                target="_blank"
                                href="https://stateofjs.com/"
                            >
                                <h3>State of Js</h3>
                            </a>
                        </article>
                    </div>
                    <hr />
                    <h2>Reactjs official website</h2>

                    <div className="row">
                        <article className="6u 12u$(xsmall)">
                            <a
                                className=""
                                target="_blank"
                                href="https://reactjs.org/"
                            >
                                <h3>Website</h3>
                            </a>
                        </article>
                    </div>
                    <hr />
                    <h2>Websites build with React Js</h2>
                    <div className="row">
                        <article className="6u 12u${xsmall}">
                            <a target="_blank" href="https://www.facebook.com/"><h3>Facebook</h3></a>
                        </article>

                        <article className="6u 12u${xsmall}">
                            <a target="_blank" href="https://www.netflix.com/in/"><h3>Netflix</h3></a>
                        </article>

                        <article className="6u 12u${xsmall}">
                            <a target="_blank" href="https://www.tesla.com/"><h3>Tesla</h3></a>
                        </article>

                        <article className="6u 12u${xsmall}">
                            <a target="_blank" href="https://www.airbnb.co.in/"><h3>Airbnb</h3></a>
                        </article>

                        <article className="6u 12u${xsmall}">
                            <a target="_blank" href="https://www.dropbox.com/?_hp=c"><h3>Dropbox</h3></a>
                        </article>
                    </div>
                    <hr />
                    <h2>Websites for software developers</h2>
                    <div className="row">

                        <article className="6u 12u${xsmall}">
                            <a target="_blank" href="https://stackoverflow.com/"><h3>Stack Overflow</h3></a>
                        </article>

                        <article className="6u 12u${xsmall}">
                            <a target="_blank" href="https://github.com/"><h3>Github</h3></a>
                        </article>

                        <article className="6u 12u${xsmall}">
                            <a href="https://www.codesandbox.io/" target="_blank"><h3>Codesandbox</h3></a>
                        </article>

                        <article className="6u 12u${xsmall}">
                            <a target="_blank" href="https://jsfiddle.net/"><h3>JS Fiddle</h3></a>
                        </article>
                        <article className="6u 12u${xsmall}">
                            <a href="https://www.netlify.com/" target="_blank"><h3>Netlify</h3></a>
                        </article>
                    </div>
                    <div>













                    </div>

                    {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul>*/}
                </section>
            </div>
        </div>
    )
}

export default SessionIndex
