import { StartTwoTone } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { data } from "./Territories";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import Menu from "./tree";

function Dashboard() {
  // handle click event of logout button
  let history = useHistory();
  const handleLogout = () => {
    Cookies.remove("user");
    history.push("/login");
  };

  const recur = (items, id = null, link = "parent") =>
    items
      .filter((item) => item[link] === id)
      .map((item) => ({ ...item, children: recur(items, item.id) }));

  const check = recur(data);

  return (
    <div>
      <h1>Territories</h1>
      <p>Hello! Here are the list of territories.</p>
      <Menu items={check} />
      <br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}

export default Dashboard;
