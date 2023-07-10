import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const formHandler = async (e) => {
    e.preventDefault();

    // if(!name || !email || !address || !message){
    //   throw Error("All feilds must be filled.")
    // }

    //clear feilds
    setName("");
    setEmail("");
    setAddress("");
    setMessage("");
  };

  return (
    <form
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
            type="text"
            id="message"
            required
            placeholder="Message"
            className="h-[8rem] px-6 lg:w-[60%] w-full bg-violet-900/30 outline-none focus:outline-violet-700 duration-300 rounded resize-none"
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
         <span className="text-violet-200 uppercase font-semibold">Address: </span> dammam saudi arabia sico-market-r12 1flr
        </p>
        <p className="capitalize text-violet-400">
         <span className="text-violet-200 uppercase font-semibold">Phone: </span> +9660496783245,+998476
        </p>
        <p className="capitalize text-violet-400">
         <span className="text-violet-200 uppercase font-semibold">Location: </span> google map
        </p>
      </div>
    </form>
  );
};

export default Contact;
