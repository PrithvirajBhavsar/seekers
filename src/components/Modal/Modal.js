import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import React from "react";

import React, { useState } from "react";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

const Modal = ({
  closeModal = () => {},
  title = "Modal",
  body = "Body",
  footer = "Footer",
}) => {
  return (
    <div>
      <div className="modal is-active">
        <div onClick={closeModal} className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head p-4 is-shadowless">
            <p className="modal-card-title">{title}</p>
            <Button
              onClick={closeModal}
              unstyled
              className="delete"
              aria-label="close"
            ></Button>
          </header>
          <Divider className="m-0" />
          <section className="modal-card-body">{body}</section>
          <Divider className="m-0" />
          <footer className="modal-card-foot p-4 is-shadowless">
            {footer}
            <div className="buttons is-right">
              <Button unstyled className="button is-primary">
                Save changes
              </Button>
              <Button unstyled className="button">
                Cancel
              </Button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Modal;
