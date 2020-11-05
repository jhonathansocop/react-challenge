import React from "react";
import User from "../User/User";

import "./_user-list.scss";
const data = [
  { name: "Juan", email: "arg@gmail.com", phone: "+543242343", country: "AR" },
  { name: "Leao", email: "salsa@gmail.com", phone: "+336724215", country: "BR" },
  { name: "Elpidio", email: "boliv@gmail.com", phone: "+456754324", country: "BO" },
  { name: "Michelle", email: "cl@gmail.com", phone: "+45467543", country: "CL" },
];

const UserList = () => {
  return (
    <section>
      <h2>User list</h2>
      <div className="header-table">
        <ul>
          <li>Name</li>
          <li>Email</li>
          <li>Phone</li>
          <li>Country</li>
        </ul>
      </div>
      <ul className="user-list">
        {data.map((user, i) => (
          <li key={i}>
            <User
              name={user.name}
              email={user.email}
              phone={user.phone}
              country={user.country}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default UserList;
