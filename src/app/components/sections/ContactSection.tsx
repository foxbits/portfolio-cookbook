import { FC } from 'react';
import ContactForm from '../shared/ContactForm';

interface ContactSectionProps {
  contactInfo: {
    label: string;
    value: string;
    icon: string;
  }[];
  onContactSubmit: (data: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

const ContactSection: FC<ContactSectionProps> = ({ contactInfo, onContactSubmit }) => {
  return (
    <section className="content backgrounded" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="section-title">
              <h1>Contact Me</h1>
            </div>
          </div>

          <div id="contact-data" className="col-xs-12 col-sm-5 col-md-5 col-lg-4">
            <ul className="panel-box contact-me-left">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <i className={`fa ${info.icon}`}></i>
                  <div className="contact-info">
                    <h5>{info.label}</h5>
                    <p>{info.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8">
            <div className="panel-box contact-me-right">
              <h2>Send me an e-mail</h2>
              <ContactForm onSubmit={onContactSubmit} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
