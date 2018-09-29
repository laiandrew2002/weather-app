import React from 'react';
//import logo from './logo.ico';



const Footer = (props) =>{
  return (
    <footer className="pv4 ph3 ph5-m ph6-l white">
      <small className="f6 db tc">© 2018 <b className="ttu">DrewELOPER INC</b>., All Rights Reserved</small>
      <div className="tc mt3">
        <a href="/" title="Help" className="f6 dib ph2 link white dim">Language</a>
        <a href="/"    title="Terms" className="f6 dib ph2 link white dim">Terms of Use</a>
        <a href="/"  title="Privacy" className="f6 dib ph2 link white dim">Privacy</a>
      </div>
    </footer>
  )
}
export default Footer;