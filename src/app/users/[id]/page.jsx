import React from "react";

const getUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
};

// params detecta por si solo el /algo que le pases en la url
const UserPage = async ({ params }) => {
  const user = await getUser(params.id);
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={user.avatar} alt={user.first_name} />
          </div>
          <div className="card-body text-center">
            <h3>
              {user.id} {user.first_name} {user.last_name}
            </h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
