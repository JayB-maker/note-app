import { ReactNode, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categoriesDetails} from "../../../data/Data";
import { getUser } from "../../../storage";
import NoteList from "../../dashboard/noteList";
import "./Layout.scss";

const Layout = (props: { children: ReactNode }) => {
  const { children } = props;
  const path = window.location.pathname;

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">
      <div className={`sidebar`}>
        <div className="sidebar-content">
          <div className="logo-container">
            <Link to="/" style={{ color: "white" }}>
              <h4>noteAPP</h4>
            </Link>
          </div>
          <div className="add-new-note">
            <button>
              <img src="assets/add.png" alt="add" />
              <p className="type4">New Note</p>
            </button>
          </div>

          <div className="categories">
            <p className="type3 heading">Categories</p>
            {categoriesDetails.map((category, index) => (
              <div className="category" key={index}>
                <img src={category.icon} />
                <p className="type3">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={`main-section`}>
        <div className="note-list-container">
          <NoteList />
        </div>
        <div className="main-contents">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
