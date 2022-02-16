import { StartTwoTone } from "@mui/icons-material";
import React from "react";
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

  const recur = (
    items,
    id = null,
    link = "parent" //sets parameter on recur
  ) =>
    items
      .filter((item) => item[link] === id) //checks if ID and parent have similarity.
      .map((item) => ({ ...item, children: recur(items, item.id) })); //returns all properties of item and children alike.

  const check = recur(data); //passes the components of the data onto recur

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
