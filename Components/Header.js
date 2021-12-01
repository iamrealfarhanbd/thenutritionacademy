const Header = () => {
    return (
        <>
        <div id="loader" className="loader orange-color">
          <div className="loader-container">
            <div className="loader-icon">
              <img src="assets/images/pre-logo1.png" alt="" />
            </div>
          </div>
        </div>
        <div className="full-width-header home8-style4">
          <header id="rs-header" className="rs-header">
            <div className="topbar-area home8-topbar">
              <div className="container">
                <div className="row y-middle">
                  <div className="col-md-6">
                    <ul className="topbar-contact">
                      <li>
                        <i className="flaticon-email" />
                        <a href="mailto:support@rstheme.com">support@rstheme.com</a>
                      </li>
                      <li>
                        <i className="flaticon-location" />
                        374 William S Canning Blvd, MA 2721, USA
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6 text-right">
                    <ul className="topbar-right">
                      <li className="login-register">
                        <i className="fa fa-sign-in" />
                        <a href="login.html">Login</a>/<a href="register.html">Register</a>
                      </li>
                      <li className="btn-part">
                        <a className="apply-btn" href="#">Apply Now</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-area menu-sticky">
              <div className="container">
                <div className="row y-middle">
                  <div className="col-lg-2">
                    <div className="logo-cat-wrap">
                      <div className="logo-part">
                        <a href="index.html">
                          <img src="assets/images/dark-logo.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8 text-right">
                    <div className="rs-menu-area">
                      <div className="main-menu">
                        <div className="mobile-menu">
                          <a className="rs-menu-toggle">
                            <i className="fa fa-bars" />
                          </a>
                        </div>
                        <nav className="rs-menu">
                          <ul className="nav-menu">
                            <li className="rs-mega-menu mega-rs menu-item-has-children current-menu-item"> <a href="index.html">Home</a>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">All Courses</a>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">Special Deal</a>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">Blog</a>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">Free Resources</a>
                            </li>
                            <li className="menu-item-has-children">
                              <a href="#">Login</a>
                            </li>
                          </ul>
                        </nav>                                         
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 text-right">
                    <div className="expand-btn-inner">
                      <ul>
                        <li>
                          <a className="hidden-xs rs-search" data-target=".search-modal" data-toggle="modal" href="#">
                            <i className="flaticon-search" />
                          </a>
                        </li>
                      </ul>
                      <a id="nav-expander" className="nav-expander style2">
                        <span className="dot1" />
                        <span className="dot2" />
                        <span className="dot3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="right_menu_togle hidden-md">
              <div className="close-btn">
                <div id="nav-close">
                  <div className="line">
                    <span className="line1" /><span className="line2" />
                  </div>
                </div>
              </div>
              <div className="canvas-logo">
                <a href="index.html"><img src="assets/images/dark-logo.png" alt="logo" /></a>
              </div>
              <div className="offcanvas-text">
                <p>We denounce with righteous indige nationality and dislike men who are so beguiled and demo  by the charms of pleasure of the moment data com so blinded by desire.</p>
              </div>
              <div className="offcanvas-gallery">
                <div className="gallery-img">
                  <a className="image-popup" href="assets/images/gallery/1.jpg"><img src="assets/images/gallery/1.jpg" alt="" /></a>
                </div>
                <div className="gallery-img">
                  <a className="image-popup" href="assets/images/gallery/2.jpg"><img src="assets/images/gallery/2.jpg" alt="" /></a>
                </div>
                <div className="gallery-img">
                  <a className="image-popup" href="assets/images/gallery/3.jpg"><img src="assets/images/gallery/3.jpg" alt="" /></a>
                </div>
                <div className="gallery-img">
                  <a className="image-popup" href="assets/images/gallery/4.jpg"><img src="assets/images/gallery/4.jpg" alt="" /></a>
                </div>
                <div className="gallery-img">
                  <a className="image-popup" href="assets/images/gallery/5.jpg"><img src="assets/images/gallery/5.jpg" alt="" /></a>
                </div>
                <div className="gallery-img">
                  <a className="image-popup" href="assets/images/gallery/6.jpg"><img src="assets/images/gallery/6.jpg" alt="" /></a>
                </div>
              </div>
              <div className="map-img">
                <img src="assets/images/map.jpg" alt="" />
              </div>
              <div className="canvas-contact">
                <ul className="social">
                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
                  <li><a href="#"><i className="fa fa-pinterest-p" /></a></li>
                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                </ul>
              </div>
            </nav>
          </header>
        </div>
        </>
    )
}

export default Header;