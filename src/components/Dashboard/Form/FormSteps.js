import React from "react";
import DocumentForm from "./DocumentForm";
import ChildData from "./ChildData/ChildData";
import Applicants from "./Applicants/Applicants";
import Team from "./Team";

import commonData from "../../../docx/fixtures";
import { reasonsList, disabilityList } from "../../../staticData";

const { ipcRenderer } = require("electron");

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  try {
    await sleep(300);
    ipcRenderer.send("print:value", values);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log("Something went wrong: ", error);
  }
};

const FormSteps = () => (
  <React.Fragment>
    <DocumentForm
      initialValues={commonData}
      reasonsList={reasonsList}
      disabilityList={disabilityList}
      onSubmit={onSubmit}
    >
      <DocumentForm.Step>
        <ChildData />
      </DocumentForm.Step>
      <DocumentForm.Step>
        <Applicants />
      </DocumentForm.Step>
      <DocumentForm.Step>
        <Team />
      </DocumentForm.Step>
    </DocumentForm>
  </React.Fragment>
);

export default FormSteps;
