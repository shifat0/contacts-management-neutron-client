import React, { useEffect, useState } from "react";
import Card from "../components/AllContacts/Card";
import axios from "axios";

const AllContacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Make a Get request to the server
    const fetchContacts = async () => {
      const res = await axios.get(
        "https://contacts-management-neutron-server.vercel.app/api/v1/contacts"
      );
      setContacts(res.data);
    };

    try {
      fetchContacts();
    } catch (err) {
      alert(err.message);
    }
  }, [setContacts]);

  const handleDelete = async (id) => {
    try {
      // Make a DELETE request to the server
      await axios.delete(
        `https://contacts-management-neutron-server.vercel.app/api/v1/contacts/${id}`
      );
      alert(`Contact Deleted Successfully`);

      // Updating contacts after deleting
      setContacts((prev) => prev.filter((contact) => contact._id !== id));
    } catch (err) {
      console.log(err.message);
      alert("Error deleting contact:", err.message);
    }
  };

  return (
    <section className="container mx-auto p-4 h-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold underline underline-offset-4 text-[#4F6F52] mt-4">
        All Contacts
      </h1>
      {contacts.length === 0 ? (
        <span>Loading...</span>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts.map((contact) => (
            <Card
              key={contact?._id}
              contact={contact}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default AllContacts;
