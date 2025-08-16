import { FC } from 'react';

interface ContactFormProps {
  onSubmit: (data: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    onSubmit({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    });
  };

  return (
    <form role="form" id="contact-form" className="contact-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-group">
            <input 
              placeholder="Who are you?" 
              id="form-name"
              name="name"
              className="form-control" 
              type="text"
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="form-group">
            <input 
              placeholder="Your e-mail address (so I can reply)" 
              id="form-email"
              name="email"
              className="form-control" 
              type="email"
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <textarea 
          placeholder="Feel free to express all of your ideas..." 
          id="form-message"
          name="message"
          cols={20} 
          rows={6} 
          className="form-control"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  );
};

export default ContactForm;
