import { Button } from "primereact/button";
import React, { useState } from "react";
import { AutoComplete } from "primereact/autocomplete";
import { FloatLabel } from "primereact/floatlabel";
import { Dialog } from "primereact/dialog";
import { SelectButton } from "primereact/selectbutton";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from 'primereact/calendar';

const countries = [
  { name: "United Kingdom", code: "UK" },
  { name: "United States", code: "USA" },
];

const items = [
  { name: "Part-Time", value: 1 },
  { name: "Full-Time", value: 2 },
  { name: "Internship", value: 3 },
];

const job = [
  { name: "WFH (Work From Home)", value: 1 },
  { name: "On-Site", value: 2 },
  { name: "Hybrid", value: 3 },
];

const ExperienceModal = ({ closeModal = () => {} }) => {
  const [jobType, setJobType] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const search = (event) => {
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredCountries;

      if (!event.query.trim().length) {
        _filteredCountries = [...countries];
      } else {
        _filteredCountries = countries.filter((country) => {
          return country.name
            .toLowerCase()
            .startsWith(event.query.toLowerCase());
        });
      }

      setFilteredCountries(_filteredCountries);
    }, 250);
  };

  const footerContent = (
    <div className="buttons is-flex is-justify-content-flex-end">
      <Button onClick={closeModal} unstyled className="button">
        Cancel
      </Button>
      <Button onClick={closeModal} unstyled className="button is-primary">
        Save changes
      </Button>
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Dialog
        header={"Add Experience"}
        visible={true}
        onHide={closeModal}
        footer={footerContent}
        className="container is-max-desktop"
        closeOnEscape
      >
        <div className="is-flex is-flex-direction-column is-gap-4 my-5">
          <div className="p-fluid">
            <FloatLabel>
              <AutoComplete
                inputId="company_name"
                field="name"
                value={selectedCountry}
                suggestions={filteredCountries}
                completeMethod={search}
                onChange={(e) => setSelectedCountry(e.value)}
                required
              />
              <label htmlFor="company_name">Company Name</label>
            </FloatLabel>
          </div>

          <div className="grid mb-0">

            <div className="p-fluid cell">
              <FloatLabel>
                <AutoComplete
                  inputId="job_title"
                  //   value={value}
                  //   suggestions={items}
                  //   completeMethod={search}
                  //   onChange={(e) => setValue(e.value)}
                />
                <label htmlFor="job_title">Job Title</label>
              </FloatLabel>
            </div>

            <div className="p-fluid cell">
              <FloatLabel>
                <AutoComplete
                  inputId="location"
                  field="name"
                  value={selectedCountry}
                  suggestions={filteredCountries}
                  completeMethod={search}
                  onChange={(e) => setSelectedCountry(e.value)}
                />
                <label htmlFor="location">Location</label>
              </FloatLabel>
            </div>
            
          </div>

          <FloatLabel>
            <InputTextarea
              id="description"
              className="w-full p-3"
              //   value={value}
              //   onChange={(e) => setValue(e.target.value)}
              rows={5}
            />
            <label htmlFor="description">Description</label>
          </FloatLabel>

          <div className="p-fluid">
            <FloatLabel>
              <AutoComplete
                inputId="skills"
                field="name"
                value={selectedSkills}
                suggestions={filteredCountries}
                completeMethod={search}
                onChange={(e) => setSelectedSkills(e.value)}
                required
                multiple
              />
              <label htmlFor="skills">Skills</label>
            </FloatLabel>
          </div>

          <div>
            <SelectButton
              value={jobType}
              onChange={(e) => setJobType(e.value)}
              optionLabel="name"
              size="medium"
              options={items}
            />
          </div>

          <div>
            <SelectButton
              value={jobType}
              onChange={(e) => setJobType(e.value)}
              optionLabel="name"
              options={job}
            />
          </div>

          <div className="grid mb-0">
            <div className="p-fluid cell">
              <FloatLabel>
                <Calendar inputId="start_date" value={startDate} onChange={(e) => setStartDate(e.value)} dateFormat="dd/mm/yy" />
                <label htmlFor="start_date">Start Date</label>
              </FloatLabel>
            </div>

            <div className="p-fluid cell">
              <FloatLabel>
                <Calendar inputId="end_date" value={endDate} onChange={(e) => setEndDate(e.value)} dateFormat="dd/mm/yy" />
                <label htmlFor="end_date">End Date</label>
              </FloatLabel>
            </div>
          </div>

        </div>
      </Dialog>
    </div>
  );
};

export default ExperienceModal;
