import React from "react";
import "../styles/footer.css";
import { AiFillHeart, AiFillInstagram } from "react-icons/ai";
import { IoMailOutline } from "react-icons/io5";
import { IoMdSend } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaTelegramPlane,
  FaDiscord,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../assets/images/Logo_quamble.png"

const Footer = () => {
  const solutions = [
    {
      name: "brand",
      link: "#",
    },
  ];

  const products = [
    {
      name: "technology platform",
      link: "#",
    },
  ];

  const participate = [
    {
      name: "competitions & challenges",
      link: "#",
    },
  ];

  const apply = [
    {
      name: "internships",
      link: "#",
    },
  ];

  const learn = [
    {
      name: "courses",
      link: "#",
    },
  ];

  const practice = [
    {
      name: "MCQ mock tests",
      link: "#",
    },
  ];


  return (
    <footer>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-logo">
              <img
                src ={logo}
                alt="logo"
                style={{ width: '200px', height: '200px' }}
              />
            </div>
            <p className="dash">
              Built with{" "}
              <span className="heart-icon">
                <AiFillHeart />
              </span>{" "}
              in India for the world
            </p>
            <h3>Stay Connected</h3>
            <div className="footer-contact-links">
              <a
                href="mailto:"
                className="mail"
                target="_blank"
                rel="noreferrer"
              >
                <IoMailOutline />
                
              </a>
              <a
                // href="tel:9311777388"
                className="mail"
              >
                <MdLocalPhone />
                +91-9999999999
              </a>
            </div>
            <div className="footer-social-links dash">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
            {/* <h3>Stay Updated</h3>
            <p className="updated">
              We'll send you updates on the latest opportunities to showcase
              your talent and get hired and rewarded regularly.
            </p>
            <div className="newsletter">
              <a
                href="https://unstop.com/about/newsletter"
                target="_blank"
                rel="noreferrer"
              >
                Sign up for our newsletter
                <IoMdSend />
              </a>
            </div>
            <div className="footer-left-btns dash">
              <a
                href="https://unstop.com/blog/share-your-story-and-get-featured"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Share Your Story Now
              </a>
              <a
                href="https://unstop.com/manage/opportunity/all/create"
                className="btn"
              >
                <HiOutlineSpeakerphone />
                Publish Opportunity
              </a>
            </div>
            <h3>Download Unstop App</h3>
            <div className="footer-download dash">
              <a
                href="https://play.google.com/store/apps/details?id=com.dare2compete.app"
                className="google-play"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/google-play.svg"
                  alt="google play"
                />
              </a>
              <a
                href="https://apps.apple.com/in/app/dare2compete/id1601170365"
                className="app-store"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/app-store.svg"
                  alt="app store"
                />
              </a>
            </div>
            <p className="dash best-viewed">
              Best Viewed in Latest Versions of Edge, Mozilla, Chrome, Opera &
              Safari. V: 2.20.2023.18.53
            </p> */}
            <p className="copyright">
              Copyright © 2024 Quamble - A Quiz Plateform - All rights reserved.
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-right-top">
              <div className="footer-solution-product">
                <div className="footer-solutions">
                  <h4>Our solutions</h4>
                  <div className="footer-solutions-links links-cont">
                    {solutions.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="footer-products">
                  <h4>Our products</h4>
                  <div className="footer-products-links links-cont">
                    {products.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-participate-apply">
                <div className="footer-participate">
                  <h4>participate</h4>
                  <div className="footer-participate-links links-cont">
                    {participate.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="footer-apply">
                  <h4>apply</h4>
                  <div className="footer-apply-links links-cont">
                    {apply.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="footer-learn-practice">
                <div className="footer-learn">
                  <h4>learn</h4>
                  <div className="footer-learn-links links-cont">
                    {learn.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
                <div className="footer-practice">
                  <h4>practice</h4>
                  <div className="footer-practice-links links-cont">
                    {practice.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-right-bottom">
              {/* <div className="footer-properties">
                <div className="footer-products">
                  <h4>our properties</h4>
                  <div className="footer-products-links links-cont">
                    {properties.map((ele) => {
                      return (
                        <a
                          href={ele.link}
                          target="_blank"
                          rel="noreferrer"
                          key={ele.name}
                        >
                          {ele.name}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div> */}
              {/* <div className="footer-other-links">
                <div className="same-row-links">
                  <a
                    href="https://unstop.com/about"
                    className="divider"
                  >
                    About Us
                  </a>
                  <a
                    href="https://unstop.com/about/contact-us"
                    className="divider"
                  >
                    Contact Us
                  </a>
                  <a
                    href="https://unstop.com/about/unstop-careers"
                    className="footer-careers"
                  >
                    Careers
                    <span className="hiring">We're hiring</span>
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href="https://unstop.com/about/clients"
                    className="divider"
                  >
                    Clientele
                  </a>
                  <a href="https://unstop.com/our-partners/become-a-partner">
                    Partner With Us
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href="https://unstop.com/our-partners"
                    className="divider"
                  >
                    Partners
                  </a>
                  <a
                    href="https://unstop.com/faq"
                    className="divider"
                  >
                    FAQs
                  </a>
                  <a href="https://unstop.com/our-partners/branding-guidelines">
                    Branding Guidelines
                  </a>
                </div>
                <div className="same-row-links">
                  <a
                    href="https://unstop.com/about/testimonials"
                    className="divider"
                  >
                    Testimonials
                  </a>
                  <a href="https://unstop.com/p/featured-partners-446568">
                    Featured Partners
                  </a>
                </div>
                <a href="https://unstop.com/unstop-rewards-program">
                  Unstop Rewards Program
                </a>
                <a href="https://unstop.com/unstoppitchsharktank">
                  Unstop on Shark Tank
                </a>
                <div className="same-row-links">
                  <a
                    href="https://unstop.com/legal/terms-of-use"
                    className="divider"
                  >
                    Terms & Conditions
                  </a>
                  <a href="https://unstop.com/legal/privacy-policy">
                    Privacy Policy
                  </a>
                </div>
                <a href="https://unstop.com/directory/competitions/a/1">
                  Sitemap
                </a>
              </div> */}
            </div>
          </div>
        </div>
        {/* <div className="footer-bottom container">
          <div className="footer-bottom-left">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/d2c-payments-icon.svg"
              alt="payments assurance"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-icons/payments-icon.svg"
              alt="payment methods"
            />
          </div>
          <div className="footer-bottom-right">
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/gdpr-logo.png?d=300x300"
              alt="data protection"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2a5bdf94_iso_27001.svg"
              alt="information security"
            />
            <img
              src="https://d8it4huxumps7.cloudfront.net/uploads/images/6231c2c0b51ff_iso_9001.svg"
              alt="iso certified"
            />
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
