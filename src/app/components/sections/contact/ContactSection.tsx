import { FC, useState } from 'react';

declare global {
  interface Window {
    $: {
      notify: (message: string, options: { position: string; className: string }) => void;
    };
  }
}

interface ContactSectionProps {
  contactData: {
    address: string;
    phone: string;
    mails: string[];
    whentocontact: string[];
    messengerLink: string;
    linkedinMessengerLink: string;
  };
}

const ContactSection: FC<ContactSectionProps> = ({ contactData }) => {
  const [formData, setFormData] = useState({
    subject: '',
    name: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id.replace('form-', '')]: value
    }));
  };

  const handleSendMail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    // validate
    let error = '';
    if (formData.name == null || formData.name == '')
      error = "So you have no name? 😞";

    if (error == '' && (formData.subject == null || formData.subject == ''))
      error = "It seams that you don't have a subject in mind. You cannot send your precious message. 😞";

    if (error == '' && (formData.message == null || formData.message == '' || formData.message.length < 50))
      error = "If you have no idea, then it means we have a problem - we can't communicate! 😭 (you must insert a message at least 50 characters)";

    if (error != '')
      return window.$.notify("Oh, snap! " + error, { position: "bottom-right", className: "error" });

    // open mail
    const mailtoLink = `mailto:${contactData.mails[0]}
      ?subject=${encodeURIComponent(formData.subject)}
      &body=${encodeURIComponent(`${formData.message}\n\nMessage sent with love through the contact form by ${formData.name}`)}`;
    
    window.location.href = mailtoLink;
  };

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
              <li>
                <div className="contact-list">
                  <i className="fa fa-map-marker"></i>
                  <div className="contact-info">
                    <p>{ contactData.address }</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-list">
                  <i className="fa fa-envelope"></i>
                  <div id="contact-mails" className="contact-info">
                    { contactData.mails.map((mail, index) => (
                      <p key={index}>
                        <a href={`mailto: ${ mail }`}>{ mail }</a>
                      </p>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-list">
                  <i className="fa fa-phone"></i>
                  <div className="contact-info">
                    <p>{ contactData.phone }</p>
                    <p><i>(message me, you might get it)</i></p>
                  </div>
                </div>
              </li>
              <li>
                <div className="contact-list">
                  <i className="fa fa-clock-o"></i>
                  <div className="contact-info">
                    { contactData.whentocontact.map((time, index) => (
                      <p key={index}>{ time }</p>
                    ))}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="col-xs-12 col-sm-7 col-md-7 col-lg-8">
            <div className="panel-box contact-me-right">
              <h2>Let&apos;s chat</h2>
              {/* <!-- Attach actions --> */}
              <form role="form" id="contact-form" className="contact-form">
                <div className="row">
                  <div className="col-sm-12 col-sm-12">
                    <div className="form-group">
                      <input 
                        placeholder="What's the subject?" 
                        id="form-subject" 
                        className="form-control" 
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-sm-12">
                    <div className="form-group">
                      <input 
                        placeholder="What's your name?" 
                        id="form-name" 
                        className="form-control" 
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea 
                    placeholder="Feel free to express all of your ideas..." 
                    id="form-message" 
                    cols={20} 
                    rows={6} 
                    className="form-control"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <a 
                  id="send-mail" 
                  className="btn btn-default contact-info-btn" 
                  data-toggle="tooltip" 
                  data-placement="bottom" 
                  title="Your (must-have) e-mail client will pop-up."
                  onClick={handleSendMail}>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  Send mail
                </a>
                <a id="open-linkedin-messenger" href={contactData.linkedinMessengerLink} target="_blank" className="btn btn-default contact-info-btn" data-toggle="tooltip" data-placement="bottom" title="Or better: chat with me on Linkedin">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                  Linkedin
                </a>
                <a id="open-messenger" href={contactData.messengerLink} target="_blank" className="btn btn-default contact-info-btn" data-toggle="tooltip" data-placement="bottom" title="Or alt: chat with me on Messenger.">
                  <i className="fa fa-commenting" aria-hidden="true"></i>
                  Messenger
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
