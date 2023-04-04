import { Link } from 'react-router-dom';

function Navbar() {
  return (
    // <nav class="navbar navbar-expand-lg navbar-light bg-light">
    //   <ul>
    //     <li>
    //       <Link to="/">Home</Link>
    //     </li>
    //     <li>
    //       <Link to="/baconsale">My Podcasts</Link>
    //     </li>
    //     <li>
    //       <Link to="/movielist">Movie List</Link>
    //     </li>
    //   </ul>
    // </nav>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to="/" class="nav-link">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/baconsale" class="nav-link">
              My Podcasts
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/movielist" class="nav-link">
              Movie List (Mission #13)
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/movielistv2" class="nav-link">
              Movie List (Mission #14)
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
