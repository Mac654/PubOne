import { TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import React, { useContext, useState } from "react";
import { EnvitedContext } from "../context/EnvitedContext";
import { FormInterface } from "../Interface/FormInterface";

interface Props {}

const Create: React.FC<Props> = (props) => {
  const { onFormSubmit } = useContext(EnvitedContext);
  const [dateTwoWithInitialValue, setDateTwoWithNoInitialValue] =
  React.useState<Dayjs | null>(dayjs('2019-01-01T18:54'));
const [dateWithInitialValue, setDateWithInitialValue] =
  React.useState<Dayjs | null>(dayjs('2019-01-01T18:54'));
  const [formData, setFormData] = useState<FormInterface>({
    name: "",
    eventName: "",
    date: "",
    startTime: dateTwoWithInitialValue,
    endTime: dateWithInitialValue,
    address: "",
  });
console.log(dateWithInitialValue)

  return (
    <div className="Create container-fluid">
      <div className="createImgDiv">
        <img src="../bdayImg.jpg" alt="birthdayImg" className="birthdayImg" />
      </div>
      <div className="formDiv">
        <form
          className="myForm container-sm"
          onSubmit={(e) => {
            e.preventDefault();
            onFormSubmit(formData);
          }}
        >
          <input
            type="text"
            value={formData.name}
            placeholder="Enter Host Name"
            className="form-control"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
          style={{marginBottom:'10px'}}
            type="text"
            value={formData.eventName}
            placeholder="Enter Event"
            className="form-control"
            onChange={(e) =>
              setFormData({ ...formData, eventName: e.target.value })
            }
          />
        <DateTimePicker
          disableFuture
          hideTabs
          openTo="hours"
          value={dateWithInitialValue}
          onChange={(newValue) => {
            setDateWithInitialValue(newValue);
          }}
          minDate={dayjs('2018-01-01')}
          minTime={dayjs('2018-01-01T09:00')}
          maxTime={dayjs('2018-01-01T20:00')}
          renderInput={(params) => (
            <TextField {...params} helperText="Start Date and Time" />
          )}
        />

        <DateTimePicker
          disableFuture
          hideTabs
          openTo="hours"
          value={dateWithInitialValue}
          onChange={(newValue) => {
            setDateTwoWithNoInitialValue(newValue);
          }}
          minDate={dayjs('2018-01-01')}
          minTime={dayjs('2018-01-01T09:00')}
          maxTime={dayjs('2018-01-01T20:00')}
          renderInput={(params) => (
            <TextField {...params} helperText="End Date and Time" />
          )}
        />
          <input
            type="text"
            value={formData.address}
            placeholder="Enter Event Address"
            className="form-control"
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />

          <button type="submit" className="btnCreateEventTwo">
            {" "}
            next{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Create;
