import React, { Component } from 'react';
import IMG1 from '../assets/IMG_0045.jpeg';
import './portfolio.css'

class Portfolio extends Component {
  render() {
    return (
      <>
        <section>
            <div className="container-fluid">
                <h5>My recent works</h5>
                <h2>Projects</h2>
                <div className="portfolio-container">
                <article>
                    <img className='portfolio-image' src={IMG1} alt="" />
                    <h3>Title Of portfolio</h3>

                    
                        <a href=""><button className='btn btn-md portfolio-button '>Preview</button></a>


                </article>
                
                <article>
                    <img className='portfolio-image' src={IMG1} alt="" />
                    <h3>Title Of portfolio</h3>

                    
                        <a href=""><button className='btn btn-md portfolio-button '>Preview</button></a>


                </article>

                <article>
                    <img className='portfolio-image' src={IMG1} alt="" />
                    <h3>Title Of portfolio</h3>

                    
                        <a href=""><button className='btn btn-md portfolio-button '>Preview</button></a>


                </article>
                </div>
                

               
            </div>
        </section>
      </>
    )
  }
}

export default Portfolio
