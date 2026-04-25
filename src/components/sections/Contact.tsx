import TextField from "../ui/TextField";
import TextArea from "../ui/TextArea";
import { useContactForm } from "../../hooks/useContactForm";
import "./Contact.css";

export function Contact() {
  const { values, submitted, submitting, handleInputChange, handleTextAreaChange, handleSubmit, reset } =
    useContactForm();

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__header">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-heading">Commission a Piece</h2>
          <p className="contact__description">
            Interested in a custom sculpture or one of Clare&rsquo;s available works? Reach out and she&rsquo;ll be in
            touch within a few days.
          </p>
        </div>

        {submitted ? (
          <div className="contact__success">
            <p>Thank you for reaching out. Clare will be in touch soon.</p>
            <button className="btn btn--outline" onClick={reset}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__fields">
              <TextField
                label="Name"
                id="contact-name"
                value={values.name}
                onChange={handleInputChange("name")}
                required
                fullWidth
              />
              <TextField
                label="Email"
                id="contact-email"
                type="email"
                value={values.email}
                onChange={handleInputChange("email")}
                required
                fullWidth
                autoComplete="email"
              />
            </div>

            <TextArea
              label="Message"
              id="contact-message"
              value={values.message}
              onChange={handleTextAreaChange("message")}
              required
              fullWidth
              minHeight={120}
            />

            <button type="submit" className="btn btn--primary contact__submit" disabled={submitting}>
              {submitting ? "Sending\u2026" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
