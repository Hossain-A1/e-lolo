import { useRef, useState } from "react";
import emailJs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const fromRef = useRef(null);

  const formHandler = async (e) => {
    e.preventDefault();
    // EmailJS integration
    emailJs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
        fromRef.current,
        process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_ID
      )
      .then(
        () => {
          toast.success("Your message sent!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        },
        () => {
          toast.error("Failed to send message!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      );

    //clear feilds
    setName("");
    setEmail("");
    setAddress("");
    setMessage("");
  };

  return (
    <form
      ref={fromRef}
      onSubmit={formHandler}
      className="wrapper py-10 grid lg:grid-cols-3 grid-cols-1 gap-10"
    >
      <div className="contact flex flex-col gap-5 col-span-2">
        <div className="flex gap-8  items-center">
          <label htmlFor="name" className="text-gray-300 font-semibold">
            Name:{" "}
          </label>

          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            name="name"
            type="text"
            id="name"
            required
            placeholder="Inter your name."
            className="py-4 px-6 lg:w-[60%] w-full bg-violet-900/30 outline-none focus:outline-violet-700 duration-300 rounded "
          />
        </div>
        <div className="flex  gap-9   items-center">
          <label htmlFor="email" className="text-gray-300 font-semibold ">
            Email:{" "}
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            name="email"
            id="email"
            required
            placeholder="Inter your email."
            className="py-4 px-6 lg:w-[60%] w-full bg-violet-900/30 outline-none focus:outline-violet-700 duration-300 rounded"
          />
        </div>
        <div className="flex  gap-4   items-center">
          <label htmlFor="address" className="text-gray-300 font-semibold">
            Address:{" "}
          </label>
          <input
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            name="address"
            type="text"
            id="address"
            required
            placeholder="Inter your address."
            className="py-4 px-6 lg:w-[60%] w-full bg-violet-900/30 outline-none focus:outline-violet-700 duration-300 rounded"
          />
        </div>
        <div className="flex  gap-3  items-center">
          <label htmlFor="message" className="text-gray-300 font-semibold ">
            Message:{" "}
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            name="message"
            type="text"
            id="message"
            required
            placeholder="Message"
            className="h-[8rem] px-6 lg:w-[60%] py-2 w-full bg-violet-900/30 outline-none focus:outline-violet-700 duration-300 rounded resize-none"
          />
        </div>
        <div className="flex justify-start  text-center ">
          <button
            type="submit"
            className="btn btn-outline text-center  max-lg:w-[70%] w-[60%] max-lg:mx-auto lg:ml-20 md:ml-20 max-sm:ml-20 rounded"
          >
            Send message
          </button>
        </div>
        {error ? <p>{setError(error.message)}</p> : null}
      </div>

      <div className="info col-span-1 space-y-2">
        <p className="capitalize text-violet-400">
          <span className="text-violet-200 uppercase font-semibold">
            Address:{" "}
          </span>{" "}
          dammam saudi arabia sico-market-r12 1flr
        </p>
        <p className="capitalize text-violet-400">
          <span className="text-violet-200 uppercase font-semibold">
            Phone:{" "}
          </span>{" "}
          +9660496783245,+998476
        </p>
        <p className="capitalize text-violet-400">
          <span className="text-violet-200 uppercase font-semibold">
            Location:
          </span>{" "}
         
          Lulu Hypermarket
          21 St, Al Adamah, Dammam 32242
        </p>
      
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28583.062015012223!2d50.061553710839824!3d26.427260000000018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fd3333d75a3d%3A0x63e9931eeadcc9be!2sLulu%20Hypermarket!5e0!3m2!1sen!2ssa!4v1689434952810!5m2!1sen!2ssa"
          width="300"
          height="300"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      </div>
    </form>
  );
};

export default Contact;
