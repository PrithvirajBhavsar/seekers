import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Divider } from "primereact/divider";
import { Accordion, AccordionTab } from "primereact/accordion";

const Applied = () => {
  return (
    <div className="h-fullscreen">
      <Navbar />
      <div className="container is-max-widescreen my-5 p-3">
        <Accordion
          className="is-flex is-flex-direction-column is-gap-1"
          multiple
          activeIndex={[0, 1, 2, 3, 4, 5, 6, 7]}
        >
          <AccordionTab header="Applied">
            <p>Hello</p>
          </AccordionTab>

          <AccordionTab header="Saved">
            <p>Hello</p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

export default Applied;
