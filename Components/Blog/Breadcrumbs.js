const BlogBreadcrumbs = () => {
    return (
        <>
     <div className="rs-breadcrumbs breadcrumbs-overlay">
        <div className="breadcrumbs-img">
          <img src="assets/images/breadcrumbs/2.jpg" alt="Breadcrumbs Image" />
        </div>
        <div className="breadcrumbs-text white-color">
          <h1 className="page-title">Blog</h1>
          <ul>
            <li>
              <a className="active" href="index.html">Home</a>
            </li>
            <li>Blog</li>
          </ul>
        </div>
      </div>
        </>
    )
}

export default BlogBreadcrumbs;