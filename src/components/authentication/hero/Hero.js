
import React, { Component } from 'react'
//import { setupScrollReveal } from '../../assets/js/main.js';
import landingImage from '../../../assets/landingImage.svg'
import logo from '../../../assets/logo.svg'
import NewsletterForm from '../forms/NewsletterForm';



class Hero extends Component {
  /*componentDidMount() {
    setupScrollReveal();
  }*/

  render() {
    const { title, content } = this.props;
    const Illustration = this.props.illustration;

    return (
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="container-sm">
              <img src={logo} />
                <h1 className="hero-title h2-mobile mt-0">{title}</h1>
                <p className="hero-paragraph">{content}</p>
              </div>

              <NewsletterForm className="hero-form" submit="Get early access" />
            </div>

            <div className="hero-illustration">
              <img style={{height: "100%", width: "100%"}} src={landingImage} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
