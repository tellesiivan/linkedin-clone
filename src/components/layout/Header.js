import { Fragment } from "react";
import {
  RiLinkedinBoxFill,
  RiHome2Fill,
  RiParentFill,
  RiBriefcase4Fill,
  RiMessage2Fill,
  RiNotification4Fill,
} from "react-icons/ri";
import { getAuth, signOut } from "firebase/auth";
import { selectUser } from "../../store/userSlice";
import { useSelector } from "react-redux";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import HeaderOpt from "../reusable/HeaderOpt";
import Avatar from "../reusable/Avatar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const user = useSelector(selectUser);

  function signOutHandler() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  }

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-50 border-b bg-mainLight border-b-gray-800"
    >
      {({ open }) => (
        <>
          <div className="px-2 mx-auto sm:px-4">
            <div className="relative flex items-center justify-between py-3">
              <div className="flex items-center px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <RiLinkedinBoxFill className="text-gray-100 w-11 h-11" />
                </div>
                <div className="ml-4 lg:block lg:ml-6">
                  <div className="flex-1 w-80">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none group-focus:text-gray-200">
                        <SearchIcon
                          className="w-5 h-5 text-gray-400 group-focus:text-gray-200"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-300 placeholder-gray-400 border border-transparent rounded-md bg-main focus:outline-none focus:bg-main focus:border-main focus:ring-main focus:text-gray-200 sm:text-sm"
                        placeholder="Search"
                        type="search"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-center flex-1 hidden px-2 mr-2 lg:justify-end lg:flex">
                <div className="flex space-x-6">
                  {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                  <HeaderOpt title={"Home"} icon={<RiHome2Fill />} />
                  <HeaderOpt title={"My Network"} icon={<RiParentFill />} />
                  <HeaderOpt title={"Jobs"} icon={<RiBriefcase4Fill />} />
                  <HeaderOpt title={"Messaging"} icon={<RiMessage2Fill />} />
                  <HeaderOpt
                    title={"Notifications"}
                    icon={<RiNotification4Fill />}
                  />
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:block">
                <div className="flex items-center">
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative flex-shrink-0 ml-2">
                    <div>
                      <Menu.Button className="flex text-sm text-white bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-main">
                        <span className="sr-only">Open user menu</span>
                        <Avatar
                          size="8"
                          srcURL={user?.photoURL && user.photoURL}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right rounded-md shadow-lg bg-mainLight ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <p
                              className={classNames(
                                active ? "bg-secondary" : "",
                                "block px-4 py-2 text-sm text-gray-300 cursor-pointer"
                              )}
                            >
                              Your Profile
                            </p>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <p
                              className={classNames(
                                active ? "bg-secondary" : "",
                                "block px-4 py-2 text-sm text-gray-300 cursor-pointer"
                              )}
                            >
                              Settings
                            </p>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <p
                              className={classNames(
                                active ? "bg-secondary" : "",
                                "block px-4 py-2 text-sm text-gray-300 cursor-pointer"
                              )}
                              onClick={() => signOutHandler()}
                            >
                              Sign out
                            </p>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md"
              >
                Dashboard
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                Team
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                Projects
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
              >
                Calendar
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">
                    Tom Cook
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    tom@example.com
                  </div>
                </div>
                <button
                  type="button"
                  className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>
              <div className="px-2 mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
                >
                  Settings
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
