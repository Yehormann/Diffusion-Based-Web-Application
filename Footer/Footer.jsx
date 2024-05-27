import React from 'react';
import './footer.css';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="subFooter sectionPadding">
        <div className="subFooterLink">
          <div className="subFooterLinksDiv">
            <h4>About article</h4>
            <a href="/employer">
              <p>Team</p>
            </a>
            <a href="/Health">
              <p>Health</p>
            </a>
            <a href="/Individuals">
              <p>Individuals</p>
            </a>
          </div>
          <div className="subFooterLinksDiv">
            <h4>Resources</h4>
            <a href="/resources">
              <p>resources</p>
            </a>
            <a href="/employer">
              <p>Team</p>
            </a>
            <a href="/employer">
              <p>STV</p>
            </a>
          </div>
          <div className="subFooterLinksDiv">
            <h4>Partners</h4>
            <a href="/resources">
              <p>Swing Tech</p>
            </a>
          </div>
          <div className="subFooterLinksDiv">
            <h4>Company</h4>
            <a href="/resources">
              <p>About</p>
            </a>
            <a href="/resources">
              <p>Player</p>
            </a>
            <a href="/resources">
              <p>Employer</p>
            </a>
          </div>
          <div className="subFooterLinksDiv">
            <h4>Cooming soon</h4>
            <div className="socialMedia">
              <p ><FaFacebook className="icon"/></p>
              <p ><FaLinkedin className="icon"/></p>
              <p ><FaGithub className="icon"/></p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="subFooterBelow">
          <div className="subFooterCopyrigth">
            <p>
              @{new Date().getFullYear()}All rigth reserved.
            </p>
          </div>
          <div className="subFooterBelowLinks">
            <a href="/terms"><div><p>Terms & Conditions</p></div></a>
            <a href="/privacy"><div><p>Privacy</p></div></a>
            <a href="/security"><div><p>Security</p></div></a>
            <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
