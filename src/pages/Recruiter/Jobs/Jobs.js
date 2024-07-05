import React from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Slider } from "primereact/slider";
import Navbar from "../../../components/Navbar/Navbar";
import DynamicDemo from "../../../components/CheckboxGroup/CheckboxGroup";
import BasicDemo from "../../../components/Lists/Lists";

const locations = [
  { name: "Mumbai", key: "M" },
  { name: "Pune", key: "P" },
  { name: "Surat", key: "S" },
  { name: "Ahemdabad", key: "R" },
  { name: "Bangalore", key: "R" },
  { name: "Hyderabad", key: "R" },
];

const job_type = [
  { name: "Part-Time", key: "M" },
  { name: "Full-Time", key: "P" },
  { name: "Internship", key: "S" },
];

const education = [
  { name: "Post Graduate", key: "M" },
  { name: "Graduate", key: "P" },
  { name: "PHD", key: "S" },
];

const work_mode = [
  { name: "WFH (Work From Home)", key: "M" },
  { name: "On-Site", key: "P" },
  { name: "Hybrid", key: "S" },
];

const positions = [
  { name: "Backend Developer", key: "M" },
  { name: "DevOps Engineer", key: "P" },
  { name: "Fullstack Developer", key: "S" },
  { name: "Frontend Developer", key: "S" },
  { name: "Data Scientist", key: "S" },
];

const date_posted = [
  { name: "24 Hrs", key: "M" },
  { name: "This Week", key: "P" },
  { name: "This Month", key: "S" },
  { name: "This Year", key: "S" },
  { name: "Anytime", key: "S" },
];

const JOBS = () => {
  return (
    <div>
      <Navbar />

      <div className="container is-fluid p-5">
        <div className="columns">
          <div className="column is-three-quaters is-two-thirds-tablet py-0">
            <div className="is-flex is-gap-1 is-align-items-center mb-3">
              <p class="is-size-3 px-3">JOBS</p>
              <Button unstyled className="button is-primary is-outlined">
                <span class="icon is-small mr-3">
                  <i class="pi pi-plus"></i>
                </span>
                Create Job
              </Button>
            </div>

            <div className="is-flex is-gap-1 is-align-items-center">
              <InputText
                placeholder="Search"
                type="search"
                className="input is-rounded is-medium"
                unstyled
              />
              <Button
                icon="pi pi-search"
                className="is-rounded button is-primary is-medium"
                severity="success"
                outlined={false}
                aria-label="Search"
                unstyled
              />
            </div>

            <BasicDemo />
          </div>

          <div className="column is-hidden-mobile py-0">
            <p class="is-size-3 mb-2">Filters</p>

            <Accordion
              className="is-flex is-flex-direction-column is-gap-1"
              multiple
              activeIndex={[0, 1, 2, 3, 4, 5, 6, 7]}
            >
              <AccordionTab header="Salary">
                <Slider defaultValue={0} />
              </AccordionTab>
              <AccordionTab header="Location">
                <DynamicDemo categories={locations} />
              </AccordionTab>
              <AccordionTab header="Job Type">
                <DynamicDemo categories={job_type} />
              </AccordionTab>
              <AccordionTab header="Highest Education">
                <DynamicDemo categories={education} />
              </AccordionTab>
              <AccordionTab header="Work Mode">
                <DynamicDemo categories={work_mode} />
              </AccordionTab>
              <AccordionTab header="Position">
                <DynamicDemo categories={positions} />
              </AccordionTab>
              <AccordionTab header="Date Posted">
                <DynamicDemo categories={date_posted} />
              </AccordionTab>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JOBS;
