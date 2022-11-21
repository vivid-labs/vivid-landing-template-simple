import {
  CardsIcon,
  MagicIcon,
  DoorIcon,
  ShuffleIcon,
  SignalIcon,
  TalkingIcon,
} from "../svg/FeatureIcons";

// Built with Vivid (https://vivid.lol) ⚡️

export const FeatureBlocks = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="relative z-20 gap-16 px-12 py-24 mx-auto text-center flex flex-col max-w-7xl">
        {/* Header */}
        <div className="gap-4 flex flex-col">
          <h2
            data-aos="zoom-y-out"
            className="font-bold leading-tight tracking-tighter text-4xl md:text-6xl text-gray-800 dark:text-gray-100"
          >
            Make styling a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-teal">
              breeze
            </span>
          </h2>
          <p
            data-aos="zoom-y-out"
            data-aos-delay="150"
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400"
          >
            Stop wasting your time. Vivid makes CSS easier than recursive
            depth-first search.
          </p>
        </div>
        {/* Blocks */}
        <div className="grid items-start gap-6 lg:grid-cols-3">
          {/* Block 1 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <ShuffleIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              In-browser
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Edit your styling from the most natural place — where it renders
            </p>
          </div>
          {/* Block 2 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <SignalIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Code first
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Use Vivid&apos;s command palette and code pane to edit styling
              using code
            </p>
          </div>
          {/* Block 3 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <TalkingIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Modern frameworks
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Build components using Vivid in React styled with Tailwind CSS
            </p>
          </div>
          {/* Block 4 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <DoorIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Production-ready code
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Modify your styling in-browser and update your IDE with code that
              looks like your own
            </p>
          </div>
          {/* Block 5 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <CardsIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Your workflow
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Keep using your browser and IDE without needing an extra window
            </p>
          </div>
          {/* Block 6 */}
          <div className="relative items-center flex-1 gap-1 p-6 border border-gray-300 rounded-lg shadow-xl dark:border-gray-600 bg-gray-100 dark:bg-gray-800 flex flex-col">
            <MagicIcon />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
              Smarter inspect element
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Understand and modify the components making up your design with
              just one click
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
