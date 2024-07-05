import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import ExperienceModal from "./Modals/Experience";
import { Chip } from "primereact/chip";

const Profile = () => {
  const [experienceModal, setExperienceModal] = useState(false);

  const openExperienceModal = () => {
    setExperienceModal(true);
  };

  const closeExperienceModal = () => {
    setExperienceModal(false);
  };

  return (
    <div>
      <Navbar />
      {experienceModal && <ExperienceModal closeModal={closeExperienceModal} />}

      <div className="container is-max-widescreen p-3 my-5">
        <div class="card is-shadowless border-1">
          <div class="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-256x256">
                  <img
                    className="is-rounded"
                    src="https://media.licdn.com/dms/image/D4D35AQFzjrHLlhhb7g/profile-framedphoto-shrink_400_400/0/1664889659655?e=1720260000&v=beta&t=xwiCoIr8bsWbCTDdq8wOiPObJHLLRQjOEkUzRwC4zK4"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="is-size-2">Prithviraj Bhavsar</p>
                <p class="subtitle is-6">prithvirajbhavsar@gmail.com</p>
              </div>
            </div>

            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
              <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </div>
        </div>

        <div class="card is-shadowless border-1">
          <header class="card-header is-shadowless">
            <p class="card-header-title">Experience</p>
          </header>
          <Divider className="m-0" />
          <div class="card-content">
            <div class="content">
              <div class="card is-shadowless">
                <div class="card-content">
                  <div className="is-flex is-justify-content-space-between">
                    <p className="is-size-4">Name</p>
                    <p className="is-size-6">1 Jan 2015 - 1 Jan 2016</p>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.{" "}
                    <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br />
                    <time datetime="2016-1-1">1 Jan - 1 Jan 2016</time>
                  </div>
                </div>
              </div>

              <Divider />

              <div class="card is-shadowless">
                <div class="card-content">
                  <div className="is-flex is-justify-content-space-between">
                    <p className="is-size-4">Name</p>
                    <p className="is-size-6">1 Jan 2015 - 1 Jan 2016</p>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.{" "}
                    <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>

              <Divider />
              <Button
                onClick={openExperienceModal}
                className="button is-primary is-fullwidth is-outlined"
                unstyled
              >
                Add Experience
              </Button>
            </div>
          </div>
        </div>

        <div class="card is-shadowless border-1">
          <header class="card-header is-shadowless">
            <p class="card-header-title">Education</p>
          </header>
          <Divider className="m-0" />
          <div class="card-content">
            <div class="content">
              <div class="card is-shadowless">
                <div class="card-content">
                  <div className="is-flex is-justify-content-space-between">
                    <p className="is-size-4">Name</p>
                    <p className="is-size-6">1 Jan 2015 - 1 Jan 2016</p>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.{" "}
                    <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br />
                    <time datetime="2016-1-1">1 Jan - 1 Jan 2016</time>
                  </div>
                </div>
              </div>

              <Divider />

              <div class="card is-shadowless">
                <div class="card-content">
                  <div className="is-flex is-justify-content-space-between">
                    <p className="is-size-4">Name</p>
                    <p className="is-size-6">1 Jan 2015 - 1 Jan 2016</p>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.{" "}
                    <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br />
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>

              <Divider />
              <Button
                onClick={openExperienceModal}
                className="button is-primary is-fullwidth is-outlined"
                unstyled
              >
                Add Education
              </Button>
            </div>
          </div>
        </div>

        <div class="card is-shadowless border-1">
          <header class="card-header is-shadowless">
            <p class="card-header-title">Projects</p>
          </header>
          <Divider className="m-0" />
          <div class="card-content">
            <div class="content">
              <div class="card is-shadowless">
                <div class="card-content">
                  <div className="is-flex is-justify-content-space-between">
                    <p className="is-size-4">Name</p>
                    <p className="is-size-6">1 Jan 2015 - 1 Jan 2016</p>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.{" "}
                    <a href="#">#css</a>
                    <a href="#">#responsive</a>
                    <br />
                    <time datetime="2016-1-1">1 Jan - 1 Jan 2016</time>
                  </div>
                </div>
              </div>

              <Divider />

              <Button
                onClick={openExperienceModal}
                className="button is-primary is-fullwidth is-outlined"
                unstyled
              >
                Add Projects
              </Button>
            </div>
          </div>
        </div>

        <div class="card is-shadowless border-1">
          <header class="card-header is-shadowless">
            <p class="card-header-title">Skills</p>
          </header>
          <Divider className="m-0" />
          <div class="card-content">
            <div class="content">
              <div className="is-flex is-gap-1">
                <Chip label="Action" />
                <Chip label="Comedy" />
                <Chip label="Mystery" />
                <Chip label="Thriller" removable />
              </div>

              <Divider />

              <Button
                onClick={openExperienceModal}
                className="button is-primary is-fullwidth is-outlined"
                unstyled
              >
                Add Skills
              </Button>
            </div>
          </div>
        </div>

        <div class="card is-shadowless border-1">
          <header class="card-header is-shadowless">
            <p class="card-header-title">Languages</p>
          </header>
          <Divider className="m-0" />
          <div class="card-content">
            <div class="content">
              <div className="is-flex is-gap-1">
                <Chip label="Hindi" />
                <Chip label="English" />
                <Chip label="French" />
                <Chip label="Spanish" removable />
              </div>

              <Divider />

              <Button
                onClick={openExperienceModal}
                className="button is-primary is-fullwidth is-outlined"
                unstyled
              >
                Add Languages
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
