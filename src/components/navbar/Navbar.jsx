import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem } from "@chakra-ui/layout";
import { useDispatch } from "react-redux";
import { changeUserDashboard } from "../actions/userActions";
import { searchEvents } from "../actions/eventsAction";
import { displaySuccess } from "../../services/alertServices";
import { useNavigate } from "react-router";

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const renderSearchItems = (e) => {
    const searchInput = e.target.value
    dispatch(searchEvents(searchInput))
  }

  const logout = () => {
    localStorage.removeItem("@user")
    displaySuccess("Logout success!")
    navigate("/signup")
  }

  return (
    <nav className="navbar">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand" href="/user" id="navbar-logo">
          <img src="/images/logo.png" alt="big-at-heart" />
        </a>
        <div id="search-bar-div" className="input-group">
          <span id="search-icon" className="input-group-text">
            <SearchIcon />
          </span>
          <input
            id="search-input"
            type="text"
            className="form-control"
            placeholder="Type search here"
            onChange={renderSearchItems}
          />
        </div>
        <Box display="flex">
        <div id="profile-icon">
            <a href="/admin">Admin</a>
          </div>
        <div id="profile-icon">
            <a href="/analysis">Analysis</a>
          </div>
          <div id="profile-icon">
            <a onClick={() => dispatch(changeUserDashboard("USER_PROFILE"))}>My Profile</a>
          </div>
          <div id="logout" >
            <img onClick={() => logout()} src="/images/logout.png" alt="logout" id="logout-icon" />
          </div>
        </Box>
      </div>
    </nav>
  );
}
