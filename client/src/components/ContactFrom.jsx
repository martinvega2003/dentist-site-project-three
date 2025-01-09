const ContactForm = () => {
    return (
      <form className="bg-white shadow-md p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          ></textarea>
        </div>
        <Button label="Send Message" type="submit" variant="primary" />
      </form>
    );
  };
  
  export default ContactForm;
  