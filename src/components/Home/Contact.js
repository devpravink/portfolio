import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Thank you for contacting! I’ll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="contact-section">
      <Container>
        <Row className="justify-content-center text-center mb-5">
          <Col md={8}>
            <h1 className="contact-title">Let’s Work Together 💬</h1>
            <p className="contact-subtitle">
              Have a project in mind or just want to connect? Drop a message!
            </p>
          </Col>
        </Row>

        <Row className="contact-content">
          <Col md={4} className="contact-info">
            <div className="info-box">
              <FaEnvelope className="info-icon" />
              <h5>Email</h5>
              <p>pravinkhandare2503@gmail.com</p>
            </div>
            <div className="info-box">
              <FaPhoneAlt className="info-icon" />
              <h5>Phone</h5>
              <p>+91 7972545237</p>
            </div>
            <div className="info-box">
              <FaMapMarkerAlt className="info-icon" />
              <h5>Location</h5>
              <p>Jalna, Maharashtra, India</p>
            </div>

            <div className="social-links">
              <a href="linkedin.com/in/pravinkhandare-" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            </div>
          </Col>

          <Col md={8}>
            <Form onSubmit={handleSubmit} className="contact-form">
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Your Message..."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" className="submit-btn">
                  Send Message 🚀
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
