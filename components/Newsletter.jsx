import { useState } from "react";
import axios from "axios";

import { NewsletterSpheres } from "../svg/NewsletterSpheres";

// Built with Vivid (https://vivid.lol) ⚡️

const Background = () => (
  <div
    className="absolute bottom-0 right-0 hidden pointer-events-none md:block"
    aria-hidden="true"
  >
    <NewsletterSpheres />
  </div>
);

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
    const res = await axios.post("/api/waitlist", { email });
    setEmail("");
    window.alert(`Email "${res.data.email}" submitted!`);
  };
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="relative z-20 flex flex-col px-4 py-24 mx-auto max-w-7xl dark sm:px-12">
        <div className="relative flex-1 w-full px-4 py-16 overflow-hidden border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-50 dark:bg-gray-900 sm:px-16">
          <Background />
          <div className="flex flex-col gap-6 text-center md:text-left md:w-1/2 ">
            <h2 className="text-3xl font-bold text-gray-100">
              Save your spot today
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              By joining our waitlist, you&apos;ll be the first to see our
              product. We&apos;d love to learn from you along the way!
            </p>
            <div
              className="flex flex-col"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <form
                className="relative flex flex-row gap-2 md:gap-4"
                onSubmit={handleSubmit}
              >
                <input
                  type="email"
                  placeholder="richard.hendricks@piedpiper.com"
                  aria-label="Your email"
                  name="email"
                  id="newsletter-waitlist"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  required
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-gray-100 border rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 first-line:border-gray-200 dark:border-gray-600 dark:text-gray-100"
                />
                <label
                  htmlFor="newsletter-waitlist"
                  className="absolute z-10 text-xs text-gray-600 -top-2 left-4 dark:text-gray-400"
                >
                  Your Email
                </label>
                {/* Line beneath label to hide outline */}
                <div className="absolute top-0 w-[4.3rem] h-[2px] bg-gray-100 dark:bg-gray-800 left-3" />
                <button
                  type="submit"
                  className="px-4 py-2 font-bold rounded-lg text-gray-50 bg-primary-600 hover:bg-primary-700 w-fit"
                >
                  Waitlist
                </button>
              </form>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                {emailSubmitted
                  ? "We'll keep you posted!"
                  : "Be the first to experience Vivid."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
