import contactImage from "./../images/contact.svg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    notify();
  };

  // https://react-hot-toast.com/
  const notify = () =>
    toast.success(
      " Thank you for your message. I will respond as soon as possible!",
      { duration: 5000 }
    );

  return (
    <div id="contact" className="bg-[#F4F7F9] flex justify-center items-center">
      <div className=" max-w-5xl flex flex-col sm:flex-row justify-center items-center p-10 lg:px-20 w-11/12 mx-auto bg-white my-14 rounded-2xl">
        <div className="w-full">
          <h1 className="text-3xl mb-5 text-gray-800 font-bold">
            Send me a Message
          </h1>
          <img src={contactImage} alt="" />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col p-5 w-full"
        >
          <label className="input-label">Subject</label>
          <input
            type="text"
            className="input-style"
            autoComplete="off"
            name="subject"
          />
          <label className="input-label">Email</label>
          <input type="email" name="email" className="input-style" required />
          <label className="input-label">Message</label>
          <textarea className="input-style h-32" name="message" required />
          <button
            type="submit"
            className="rounded mt-5 px-5 py-2.5 overflow-hidden group bg-gray-800 relative hover:bg-gradient-to-r 
          hover:from-gray-800 hover:to-gray-600 text-white hover:ring-2 hover:ring-offset-2 
          hover:ring-gray-600 transition-all ease-out duration-300"
          >
            <span
              className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 
            bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"
            ></span>
            <span className="relative">Send a message</span>
          </button>
          <Toaster
            toastOptions={{
              className: "text-center",
            }}
          />
        </form>
      </div>
    </div>
  );
}

export default Contact;
