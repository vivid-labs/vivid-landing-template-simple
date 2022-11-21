import Image from "next/image";

import { Quote } from "../svg/Quote";

// Built with Vivid (https://vivid.lol) ⚡️

export const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
      <div className="relative z-20 flex flex-col gap-24 px-12 py-24 mx-auto text-center max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2
            data-aos="zoom-y-out"
            className="text-4xl font-bold leading-tight tracking-tighter text-gray-800 md:text-6xl dark:text-gray-100"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-amber to-neon-red">
              Loved
            </span>{" "}
            by developers
          </h2>
          <p
            data-aos="zoom-y-out"
            data-aos-delay="150"
            className="text-lg text-gray-600 md:text-xl dark:text-gray-400"
          >
            Styling your web app has never been easier.
          </p>
        </div>
        {/* Testimonials */}
        <div className="flex flex-col gap-20 md:gap-6 md:flex-row">
          {/* Testimonial 1 */}
          <div className="relative flex flex-col items-center flex-1 gap-6 p-12 pt-20 text-lg text-gray-700 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-50 dark:bg-gray-900 md:text-xl dark:text-gray-300">
            <div className="absolute mx-auto -top-10">
              <Quote />
              <Image
                className="rounded-full"
                src="/images/will.jpg"
                width="96"
                height="96"
                alt="Will Gao"
              />
            </div>
            <blockquote className="font-medium">
              &quot;When I first clicked on a component and its code popped up —
              magical&quot;
            </blockquote>
            <div className="">
              <cite className="not-italic font-bold">— Will Gao</cite>
              <div className="text-base text-gray-600 dark:text-gray-400">
                <span>Technical PM</span>{" "}
                <a
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                  href="https://www.linkedin.com/in/willgao99/"
                >
                  @Meta
                </a>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="relative flex flex-col items-center flex-1 gap-6 p-12 pt-20 text-lg text-gray-700 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-50 dark:bg-gray-900 md:text-xl dark:text-gray-300">
            <div className="absolute mx-auto -top-10">
              <Quote />
              <Image
                className="rounded-full"
                src="/images/veljko.jpg"
                width="96"
                height="96"
                alt="Veljko Muratovic"
              />
            </div>
            <blockquote className="font-medium">
              &quot;I&apos;m going to have to make the switch to Chrome. Just to
              keep using Vivid.&quot;
            </blockquote>
            <div className="">
              <cite className="not-italic font-bold">— Veljko Muratovic</cite>
              <div className="text-base text-gray-600 dark:text-gray-400">
                <span>Front End Dev</span>{" "}
                <a
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                  href="https://www.linkedin.com/in/veljko-muratovic/"
                >
                  @Freelance
                </a>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="relative flex flex-col items-center flex-1 gap-6 p-12 pt-20 text-lg text-gray-700 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-50 dark:bg-gray-900 md:text-xl dark:text-gray-300">
            <div className="absolute mx-auto -top-10">
              <Quote />
              <Image
                className="rounded-full"
                src="/images/tejal.png"
                width="96"
                height="96"
                alt="Tejal Patwardhan"
              />
            </div>
            <blockquote className="font-medium">
              &quot;Vivid has changed the game! It&apos;s already saved me hours
              of development time&quot;
            </blockquote>
            <div className="">
              <cite className="not-italic font-bold">— Tejal Patwardhan</cite>
              <div className="text-base text-gray-600 dark:text-gray-400">
                <span>Founder</span>{" "}
                <a
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                  href="https://martingalelabs.com/"
                >
                  @Martingale
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
