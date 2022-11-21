import Image from "next/image";

import MacBarSrc from "../public/images/mac-bar.png";

// Built with Vivid (https://vivid.lol) ⚡️

export const Features = () => {
  return (
    <>
      {/* Feature 1 */}
      <section className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="relative z-20 items-center px-0 py-24 mx-auto flex flex-col max-w-7xl">
          <div className="w-5/6 gap-4 mx-auto mb-8 text-center flex flex-col md:w-2/3">
            <h2
              data-aos="zoom-y-out"
              className="font-bold leading-tight tracking-tighter text-4xl md:text-6xl text-gray-800 dark:text-gray-100"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-amber to-neon-red">
                &quot;Just right&quot;
              </span>{" "}
              in seconds.
            </h2>
            <p
              data-aos="zoom-y-out"
              data-aos-delay="150"
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
            >
              Test styling and update code right in your browser.
            </p>
          </div>
          <div className="w-5/6 p-4 md:w-1/2 md:p-12 bg-gradient-to-br rounded-xl from-neon-amber to-neon-red">
            <div
              data-aos="zoom-y-out"
              data-aos-delay="300"
              className="relative justify-center w-full max-w-2xl overflow-hidden shadow-lg flex flex-col rounded-lg md:rounded-xl"
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
                aria-label="A video showing Vivid's command palette functionality. The user iterates through previewed styles and applies one."
                tabIndex={-1}
              >
                {/* Need both for Safari compatibility */}
                <source src="/videos/palette.webm" type="video/webm" />
                <source src="/videos/palette.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* Feature 2 */}
      <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
        <div className="relative z-20 items-center px-0 py-24 mx-auto flex flex-col max-w-7xl md:flex-row-reverse">
          <div className="w-5/6 gap-4 mx-auto mb-8 text-center flex flex-col md:w-2/5 md:text-left md:my-auto">
            <h2
              data-aos="zoom-y-out"
              className="font-bold leading-tight tracking-tighter text-4xl md:text-6xl text-gray-800 dark:text-gray-100"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">
                Resize
              </span>
              <br /> with a click.
            </h2>
            <p
              data-aos="zoom-y-out"
              data-aos-delay="150"
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
            >
              Just drag to resize and realign components.
            </p>
          </div>
          <div className="w-5/6 p-4 md:w-1/2 md:p-12 bg-gradient-to-br rounded-xl from-neon-pink to-neon-blue md:-translate-x-14">
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className="relative justify-center w-full max-w-2xl overflow-hidden shadow-lg flex flex-col rounded-lg md:rounded-xl"
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
                aria-label="A video showing Vivid's mouse resizing functionality. By dragging with a mouse, the user resizes a component."
                tabIndex={-1}
              >
                {/* Need both for Safari compatibility */}
                <source src="/videos/resize.webm" type="video/webm" />
                <source src="/videos/resize.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
      {/* Feature 3 */}
      <section className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        <div className="relative z-20 items-center px-0 py-24 mx-auto flex flex-col max-w-7xl md:flex-row">
          <div className="w-5/6 gap-4 mx-auto mb-8 text-center flex flex-col md:w-2/5 md:text-left md:my-auto">
            <h2
              data-aos="zoom-y-out"
              className="font-bold leading-tight tracking-tighter text-4xl md:text-6xl text-gray-800 dark:text-gray-100"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-neon-sky">
                Smart commands
              </span>
              <br /> cut the guesswork.
            </h2>
            <p
              data-aos="zoom-y-out"
              data-aos-delay="150"
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
            >
              Vivid smart commands apply the right styles every time.
            </p>
          </div>
          <div className="w-5/6 p-4 md:w-1/2 md:p-12 bg-gradient-to-br rounded-xl from-neon-green to-neon-sky md:translate-x-14">
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              className="relative justify-center w-full max-w-2xl overflow-hidden shadow-lg flex flex-col rounded-lg md:rounded-xl"
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
                aria-label="A video showing Vivid's smart command functionality. By typing smart-center, the user centers all content on screen."
                tabIndex={-1}
              >
                {/* Need both for Safari compatibility */}
                <source src="/videos/center.webm" type="video/webm" />
                <source src="/videos/center.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
