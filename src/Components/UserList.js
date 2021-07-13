import React from "react";
import { Card } from "antd";

const UserList = ({ user }) => {
  return (
    <div className="card">
      <Card title={`User N° ${user.id}`} style={{ width: 500 }}>
        <h3>Fullname : {user.name}</h3>
        <h3>Username : {user.username}</h3>
        <h3>Email : {user.email}</h3>
        <h3>
          Address :{user.address.street}, {user.address.suite},{" "}
          {user.address.city}{" "}
        </h3>
      </Card>
    </div>
  );
};

export default UserList;
