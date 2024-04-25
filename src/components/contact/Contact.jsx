import React, { useRef } from "react";
import "../../assets/css/contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_2k6f7e9", "template_ooyrudc", form.current, {
      publicKey: "yegBshVudgtfaKDzq",
    });
    e.target.reset();
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                philiberaymond@gmail.com
              </span>
              <a
                href="mailto:philiberaymond@gmail.com.com"
                className="contact__button"
              >
                {" "}
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">WhatsApp</h3>
              <span className="contact__card-data">+261344400324</span>
              <a href="https://web.whatsapp.com/" className="contact__button">
                {" "}
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i class="bx bxl-linkedin contact__card-icon"></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">
                MAMINIRINA Philibert Louis Raymond
              </span>
              <a
                href="https://www.linkedin.com/in/maminirina-philibert-louis-raymond-b66756220?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BWi8uU6DsShWSK3Ba%2FYbxqQ%3D%3D"
                className="contact__button"
              >
                {" "}
                Write me{" "}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Write me your Message</h3>
          <form
            action=""
            className="contact__form"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email adress"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button href="#contact" className="button button--flex">
              <span style={{ marginRight: "3px" }}>Send Message</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path>
              </svg>
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Contact;
