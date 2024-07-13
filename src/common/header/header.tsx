import { ThemeToggle } from "../theme-toggle";

const Header = () => {
  return (
    <header className="mb-2 shadow dark:shadow-gray-700">
      <div className="relative flex max-w-screen-xl justify-between flex-col overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row">
        <span className="text-2xl font-extrabold">PokeX</span>

        <ul className="mt-4 flex sm:mt-0 items-center gap-2">
          <li className="ml-6 flex size-10 cursor-pointer items-center justify-center rounded-xl border text-gray-600 dark:text-gray-300  hover:text-black dark:hover:text-white hover:shadow transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </li>
          <li className="">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
