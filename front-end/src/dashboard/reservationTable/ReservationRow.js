import React from "react";

export default function ReservationRow({ reservation, cancelRes }) {
  return (
    <tr>
      <td>{reservation.reservation_id}</td>
      <td>{reservation.first_name}</td>
      <td>{reservation.last_name}</td>
      <td>{reservation.mobile_number}</td>
      <td>{reservation.people}</td>
      <td>{reservation.reservation_time}</td>
      <td>{reservation.status}</td>
      <td>
        <button>Seat</button>
      </td>
      <td>
        <button>Edit</button>
      </td>
      <td>
        <button onClick={() => cancelRes(reservation)}>Cancel</button>
      </td>
    </tr>
  );
}
