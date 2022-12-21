import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import headerImg from "../assets/header.jpeg";
// import {useParams} from 'react-router-dom'

function Navbar() {
  const { user, isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
    <header>
      <img src={headerImg} alt="headerImg"></img>

      <nav className="navbar customNav navbar-expand-lg sticky-top navbar-light">
        <Link className="navbar-brand" to="/">
          Car Forum
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
           

            {!isLoggedIn && (
              <>
                <li className="nav-item ">
                  <Link className="nav-link" to="/signup">
                    Sign Up
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              </>
            )}

            {isLoggedIn && (
              <>
              

               

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Marketplace
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="nav-item ">
                      <Link className="nav-link" to="/listings">
                        Browse Listings
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link className="nav-link" to="/addlisting">
                        Add Listing
                      </Link>
                    </li>
                  </div>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Do It Yourself
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li className="nav-item ">
                      <Link className="nav-link" to="/diy">
                        Browse DIY's
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link className="nav-link" to="/addpost">
                        Add DIY
                      </Link>
                    </li>
                  </div>
                </li>

                <li className="nav-item ">
                  <Link className="nav-link" to="/forum">
                    Forum
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link className="nav-link" to={`/profile/${user._id}`}>
                    My Profile
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link className="nav-link" to="/messages">
                    Messages
                  </Link>
                </li>

                <li className="nav-item ">
                  <a className="nav-link" onClick={logOutUser} href="/">
                    Logout
                  </a>
                </li>
              </>
            )}
          </ul>
          {isLoggedIn && (
            <>
              <span className="navbar-text">Welcome, {user.username}</span>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
