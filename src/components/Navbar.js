import CartWidget from "./CartWidget"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Características
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Precio
                </a>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link disabled">Carrito</a> */}
                {/* <div className="aling-derecha"> */}
                <CartWidget/>
                {/* </div> */}
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
