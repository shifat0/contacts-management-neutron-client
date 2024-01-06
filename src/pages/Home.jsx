import React from "react";

const Home = () => {
  return (
    <section className="container mx-auto p-4 text-center">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold m-12">
        Welcome to The Official Page of{" "}
        <span className="font-extrabold text-blue-500">
          Contacts Managemnet Neutron
        </span>
      </h1>
      <span className="text-3xl">
        Explore the site by adding and viewing contacts collection
      </span>
    </section>
  );
};

export default Home;
