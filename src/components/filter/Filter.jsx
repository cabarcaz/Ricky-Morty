import React, { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// import { Div, DivFilter, H2, H3 } from "../styled/StyleFilter";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = ({
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(false);
  };

  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <Fragment>
      <Accordion
        open={open === 1}
        animate={customAnimation}
        className="my-4 flex flex-col justify-center items-center"
      >
        <AccordionHeader
          className="bg-blue-500 rounded-full px-6 py-2 text-xl hover:bg-gray-500 "
          onClick={() => handleOpen(1)}
        >
          <div className="font text-lg text-black">Filter </div>
        </AccordionHeader>
        <AccordionBody>
          <div className="mx-2 my-2">
            <div className="grid grid-cols-3 my-3">
              <Status
                updatePageNumber={updatePageNumber}
                updateStatus={updateStatus}
              />
              <Species
                updatePageNumber={updatePageNumber}
                updateSpecies={updateSpecies}
              />
              <Gender
                updatePageNumber={updatePageNumber}
                updateGender={updateGender}
              />
            </div>
            <div className="flex flex-col justify-center items-end">
              <h3
                style={{ cursor: "pointer" }}
                onClick={clear}
                className="border px-4 py-2 rounded-xl hover:bg-slate-500"
              >
                Clear Filter
              </h3>
            </div>
          </div>
        </AccordionBody>
      </Accordion>
    </Fragment>
    // <Div>
    //   <div style={{ display: "inline-flex" }}>
    //     <H2>Filter</H2>
    //     <H3 onClick={clear} style={{ cursor: "pointer" }}>
    //       Clear Filter
    //     </H3>
    //   </div>
    //   <DivFilter>
    //     <Status
    //       updatePageNumber={props.updatePageNumber}
    //       updateStatus={props.updateStatus}
    //     />
    //     <Species
    //       updatePageNumber={props.updatePageNumber}
    //       updateSpecies={props.updateSpecies}
    //     />
    //     <Gender
    //       updatePageNumber={props.updatePageNumber}
    //       updateGender={props.updateGender}
    //     />
    //   </DivFilter>
    // </Div>
  );
};

export default Filter;
