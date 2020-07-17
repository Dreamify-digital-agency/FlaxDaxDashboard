import React, { useState } from "react";
import Kindergarden from '../kindergarden/'
import Users from '../users'
import Rules from '../rules'
import Birds from '../birds'
import Theme from '../theme'
import "./index.css";

const Dashboard = (props) => {
  const [displayKindergarden, setDisplayKindergarden] = useState(false);
  const [displayUsers, setDisplayUsers] = useState(false);
  const [displayRules, setDisplayRules] = useState(false);
  const [displayBirds, setDisplayBirds] = useState(false);
  const [displayTheme, setDisplayTheme] = useState(false);

  const displayItem = (itemName) => {
    switch (itemName) {
      case "kindergarden":
        setDisplayUsers(false);
        setDisplayRules(false);
        setDisplayBirds(false);
        setDisplayTheme(false);
        setDisplayKindergarden(true);
        break;

      case "users":
        setDisplayRules(false);
        setDisplayBirds(false);
        setDisplayTheme(false);
        setDisplayKindergarden(false);
        setDisplayUsers(true);

        break;
      case "rules":
        setDisplayBirds(false);
        setDisplayTheme(false);
        setDisplayKindergarden(false);
        setDisplayUsers(false);
        setDisplayRules(true);

        break;
      case "birds":
        setDisplayTheme(false);
        setDisplayKindergarden(false);
        setDisplayUsers(false);
        setDisplayRules(false);
        setDisplayBirds(true);

        break;
      case "theme":
        setDisplayKindergarden(false);
        setDisplayUsers(false);
        setDisplayRules(false);
        setDisplayBirds(false);
        setDisplayTheme(true);

        break;
      default:
        break;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="dashboard-title">Menu</div>

        <div
          className={displayKindergarden ? "dashboard-item-focus" : "dashboard-item"}
          onClick={() => displayItem("kindergarden")}
        >
          Kindergarden
        </div>
        <div className={displayUsers ? "dashboard-item-focus" : "dashboard-item"} onClick={() => displayItem("users")}>
          Users
        </div>
        <div className={displayRules ? "dashboard-item-focus" : "dashboard-item"} onClick={() => displayItem("rules")}>
          Rules
        </div>
        <div className={displayBirds ? "dashboard-item-focus" : "dashboard-item"} onClick={() => displayItem("birds")}>
          Birds
        </div>
        <div className={displayTheme ? "dashboard-item-focus" : "dashboard-item"} onClick={() => displayItem("theme")}>
          Theme
        </div>
      </div>
      <div className="selected-container">
        {displayKindergarden && <Kindergarden/>}
        {displayUsers && <Users/>}
        {displayRules && <Rules/>}
        {displayBirds && <Birds/>}
        {displayTheme && <Theme/>}
      </div>
    </div>
  );
};

export default Dashboard;
