import React from "react";
import SectionTitle from "./SectionTitle";
import features from "../data/features";
import ServicesItem from "./ServicesItem";

const Services = () => {
    console.log(features);
    return (
      <div className="py-12 text:white dark:text-white">
        <SectionTitle>Our services</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature) => (
            <ServicesItem
              key={feature.title}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
            ></ServicesItem>
          ))}
        </div>
      </div>
    );
}

export default Services;
