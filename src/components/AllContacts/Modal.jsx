import React from "react";
import UpdateContactForm from "./UpdateContactForm";

const Modal = ({ toogleModal, showModal, contact, setContacts }) => {
  //   console.log(contact);
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-1000`}
    >
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-8 rounded-lg z-10 w-1/2">
        <h2 className="text-2xl font-bold mb-4">Update Contact</h2>
        <UpdateContactForm
          contact={contact}
          toogleModal={toogleModal}
          setContacts={setContacts}
        />

        {/* Close Btn */}
        <div className="absolute top-0 right-0 p-2 cursor-pointer">
          <span
            onClick={toogleModal}
            className="inline-flex justify-center bg-blue-500 items-center p-2 rounded-full focus:outline-none focus:ring focus:border-blue-300"
          >
            <svg
              className="h-5 w-5 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                className={`${
                  showModal ? "opacity-100" : "opacity-0"
                } transition`}
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Modal;
