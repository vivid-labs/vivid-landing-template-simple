import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useEffectOnce, useEventListener } from "usehooks-ts";

import { Moon, Sun } from "../svg/DarkModeIcons";

// Built with Vivid (https://vivid.lol) ⚡️

export const Header = ({ isDarkMode, toggleDarkMode }) => {
  const [top, setTop] = useState(true);
  const [nextSection, setNextSection] = useState(false);
  const [reloaded, setReloaded] = useState(false);

  // Handle scrolling logic
  const handleScroll = () => {
    setTop(window.pageYOffset <= 10);
    setNextSection(window.pageYOffset > window.innerHeight);
  };
  useEventListener("scroll", handleScroll);

  // Clean up stale dark mode
  useEffectOnce(() => setReloaded(true));

  const goToEmail = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const Logo = () => (
    <Link href="/">
      <div className="flex flex-row items-center gap-1">
        <Image src="/images/logo.png" alt="Vivid logo" height="40" width="40" />
        <div className="text-3xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-pink to-neon-blue">
            Vivid
          </span>
        </div>
      </div>
    </Link>
  );

  const Navigation = () => (
    <nav>
      <ul className="flex flex-row items-center gap-2">
        {reloaded ? ( // Only show after first reload
          <li>
            <button
              type="button"
              onClick={toggleDarkMode}
              title="Toggle dark mode"
              aria-label="Toggle dark mode"
              className="text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5"
            >
              {isDarkMode ? <Moon /> : <Sun />}
            </button>
          </li>
        ) : null}
        <li>
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg text-sm p-2.5"
          >
            Docs
          </Link>
        </li>
        <li className={`transition ${!nextSection && "hidden"}`}>
          <button
            type="button"
            onClick={goToEmail}
            className="px-4 py-2 font-bold rounded-lg text-gray-50 bg-primary-600 hover:bg-primary-700 w-fit"
          >
            Waitlist
          </button>
        </li>
      </ul>
    </nav>
  );

  return (
    // Colors must be set explicitly since opacity and blur don't work together
    <header
      className={`fixed w-full z-30 transition duration-300 ${
        !top && "bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-lg"
      }`}
    >
      {/* Header Content */}
      <div className="flex flex-row items-center justify-between h-16 px-5 mx-auto md:h-20 max-w-7xl sm:px-6">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};
