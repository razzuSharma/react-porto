import React from "react";

const Services = () => {
  const servicesData = [
    {
      title: "Responsive Web Design",
      description:
        "Create visually appealing and user-friendly websites that work seamlessly on all devices.",
    },
    {
      title: "Frontend Development",
      description:
        "Build interactive and dynamic user interfaces using modern frontend technologies.",
    },
    {
      title: "Backend Development",
      description:
        "Develop robust server-side applications to handle data processing and business logic.",
    },
    {
      title: "Web Application Development",
      description:
        "Design and build custom web applications tailored to your specific needs.",
    },
  ];

  return (
    <section className="mt-20 p-4">
      <h2 className="text-3xl font-semibold mb-8">Services I Offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
