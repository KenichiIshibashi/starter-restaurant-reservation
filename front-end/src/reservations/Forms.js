import React from "react";
import { useHistory } from "react-router";

export default function Form({
  initialformData,
  handleFormChange,
  handleSubmit,
}) {
  const history = useHistory();

  const handleCancel = () => {
    history.goBack();
  };

  return (
    initialformData && (
      <form onSubmit={handleSubmit} className="form-group">
        <fieldset>
          <legend className="d-flex justify-content-center">
            Guest Information
          </legend>

          <div className="pb-1">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              className="form-control"
              id="first_name"
              placeholder={initialformData?.first_name || "First name"}
              value={initialformData?.first_name}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="pb-1">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              className="form-control"
              id="last_name"
              placeholder={initialformData?.last_name || "Last name"}
              value={initialformData?.last_name}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="pb-1">
            <label htmlFor="mobile_number">Mobile Number</label>
            <input
              type="text"
              name="mobile_number"
              className="form-control"
              id="mobile_number"
              placeholder={initialformData?.mobile_number || "Mobile number"}
              value={initialformData?.mobile_number}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="pb-1">
            <label htmlFor="people">Number of Guests</label>
            <input
              type="number"
              name="people"
              className="form-control"
              id="people"
              placeholder={initialformData?.people || "Number of guests"}
              value={initialformData?.people}
              onChange={handleFormChange}
              required
              min="1"
            />
          </div>

          <div className="pb-1">
            <label htmlFor="reservation_date">Reservation Date</label>
            <input
              type="date"
              name="reservation_date"
              className="form-control mb-1"
              id="reservation_date"
              placeholder={initialformData?.reservation_date || "YYY-MM-DD"}
              value={initialformData?.reservation_date}
              onChange={handleFormChange}
              required
            />
          </div>

          <div className="pb-1">
            <label htmlFor="reservation_time">Reservation Time</label>
            <input
              type="time"
              name="reservation_time"
              className="form-control"
              id="reservation_time"
              placeholder={initialformData?.reservation_time || "HH:MM"}
              value={initialformData?.reservation_time}
              onChange={handleFormChange}
              required
            />
          </div>
        </fieldset>
        <div className="d-flex justify-content-center pt-2">
          <button type="submit" className="btn btn-dark mr-1">
            Submit
          </button>
          <button type="button" className="btn btn-dark" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    )
  );
}
