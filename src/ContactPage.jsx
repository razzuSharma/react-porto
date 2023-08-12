import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xwkjbqee");
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { error, response } = await handleSubmit(event);
      if (error) {
        console.log("Form submission error:", error);
        toast.error("Form submission failed. Please try again.");
      } else if (response && response.ok) {
        console.log("Email Sent");
        toast.success("Form submitted successfully!");
      } else {
        console.log("Unknown form submission response:", response);
        toast.error("Form submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      toast.error(
        "An error occurred during form submission. Please try again later."
      );
    }
  };

  return (
    <div className="min-h-screenflex items-center flex-col justify-center py-12 md:px-6 lg:px-8 ">
      <div className="md:mx-auto md:w-full md:max-w-md">
        <motion.h2
          className="text-center text-3xl font-extrabold dark:text-dark text-gray-900 mt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contact Me
        </motion.h2>
      </div>

      <div className="mt-8 md:mx-auto md:w-full md:max-w-md">
        <div className="bg-white py-8 px-4 shadow md:rounded-lg md:px-10">
          <form
            method="POST"
            action="https://formspree.io/f/xwkjbqee"
            onSubmit={handleFormSubmit}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-md font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ValidationError
                  prefix="name"
                  field="name"
                  errors={state.errors}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="message"
                  id="message"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-teal-500 hover:hover:bg-teal-700 hover:translate-x-0.5 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
