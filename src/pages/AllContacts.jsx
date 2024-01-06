import React, { useEffect } from "react";
import Card from "../components/AllContacts/Card";

const AllContacts = () => {
  return (
    <section className="h-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold underline underline-offset-4 text-[#4F6F52] mt-4">
        All Contacts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default AllContacts;
