import React, { Component } from 'react';
//import EmailObfuscate from 'email-obfuscate';
import './EmailButton.css';
import Button from './Button';

class EmailButton extends Component {
  componentDidMount() {
    // var el = document.getElementById('email');
    //
    // EmailObfuscate(el, {
    //   name: 'zach',
    //   domain: 'zachmayberry',
    //   tld: 'com',
    //   altText: 'Email'
    // });
    //
    // el.setAttribute('class', 'button');
  }

  render() {
    return (
      <div>
        <Button href="#email" id="email" text="Get In Touch" />
      </div>
    );
  }
}

export default EmailButton;
