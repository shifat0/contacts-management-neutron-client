import React from "react";
import AddContactForm from "../components/AddContacts/AddContactForm";

const AddContacts = () => {
  return (
    <section className="bg-pattern h-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold underline underline-offset-4 text-[#4F6F52] mt-4">
        Add Contacts
      </h1>
      <AddContactForm />
    </section>
  );
};

export default AddContacts;
