import { useState } from "react";
import axios from "axios";
import Image from "next/image";

import { ScatteredSpheres } from "../svg/ScatteredSpheres";
import MacBarSrc from "../public/images/mac-bar.png";

// Built with Vivid (https://vivid.lol) ⚡️

export const Hero = () => {
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
      <div className="absolute inset-0 z-10 backdrop-blur-[200px]" />
      <div className="md:-left-[28rem] -left-40 -top-40 md:-top-[28rem] bg-neon-pink absolute opacity-60 dark:opacity-30 rounded-full w-96 h-96 md:w-[48rem] md:h-[48rem]" />
      <div className="md:-right-[28rem] -right-40 -bottom-40 md:-bottom-[28rem] bg-neon-blue absolute opacity-60 dark:opacity-30 rounded-full w-96 h-96 md:w-[48rem] md:h-[48rem]" />
      <div className="relative z-20 px-12 py-24 mx-auto flex flex-col max-w-7xl items-center justify-center min-h-screen 2xl:min-h-[1000px] h-fit gap-16 md:flex-row">
        <div
          className="absolute inset-0 translate-y-32 pointer-events-none dark:invert dark:brightness-90"
          aria-hidden="true"
        >
          <ScatteredSpheres />
        </div>
        {/* Text */}
        <div className="z-10 flex flex-col gap-4 text-center md:text-left">
          <h1
            data-aos="zoom-y-out"
            className="text-5xl font-bold leading-tight tracking-tighter text-gray-800 md:text-7xl dark:text-gray-100"
          >
            Build{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">
              visually.
            </span>
            <br />
            Code{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-teal">
              faster.
            </span>
          </h1>
          <p
            data-aos="zoom-y-out"
            data-aos-delay="150"
            className="text-lg text-gray-600 md:text-xl dark:text-gray-400"
          >
            Vivid makes front-end development effortless with our in-browser
            visual editor to modify your code.
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
                id="hero-waitlist"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
                className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 bg-gray-100 border rounded-lg dark:placeholder-gray-600 dark:bg-gray-800 first-line:border-gray-200 dark:border-gray-600 dark:text-gray-100"
              />
              <label
                htmlFor="hero-waitlist"
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
        {/* Image */}
        <div
          data-aos="fade-left"
          className="relative flex flex-col justify-center w-full max-w-2xl overflow-hidden rounded-lg shadow-lg md:rounded-xl"
        >
          <Image
            src={MacBarSrc}
            className="rounded-t-lg md:rounded-t-xl"
            alt="Mac window bar"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            aria-label="A video showing Vivid's functionality including command palette, style preview, code pane, and mouse resizing"
            tabIndex={-1}
          >
            {/* Need both for Safari compatibility */}
            <source src="/videos/total.webm" type="video/webm" />
            <source src="/videos/total.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};
