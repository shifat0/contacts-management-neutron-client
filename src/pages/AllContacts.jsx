import React, { useEffect, useState } from "react";
import Card from "../components/AllContacts/Card";
import axios from "axios";

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);
  // console.log(contacts);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await axios.get("http://localhost:5000/api/v1/contacts");
      // console.log(res.data);
      setContacts(res.data);
    };

    try {
      fetchContacts();
    } catch (err) {
      // console.log(err.message);
      alert(err.message);
    }
  }, [setContacts]);

  return (
    <section className="h-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold underline underline-offset-4 text-[#4F6F52] mt-4">
        All Contacts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact) => (
          <Card key={contact?._id} contact={contact} />
        ))}
      </div>
    </section>
  );
};

export default AllContacts;
