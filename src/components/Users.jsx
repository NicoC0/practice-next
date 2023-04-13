"use client";
import React from "react";
import { useRouter } from "next/navigation"

const Users = ({ users }) => {

  const router = useRouter()

  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" style={{ cursor: 'pointer' }} key={user.id} onClick={ ()=>{router.push(`/users/${user.id}`)} }>
          <div>
            <h5>
              {user.first_name} {user.last_name}
            </h5>
            <p>{user.email}</p>
          </div>
          <img src={user.avatar} alt={user.first_name} style={{ borderRadius: "50%" }} />
        </li>
      ))}
    </ul>
  );
};

export default Users;
