import AboutVideo from '../Components/About/Aboutvideo'
import AboutBreadcumbs from '../Components/About/Breadcrumbs'
import AboutCounter from '../Components/About/counter'
import AboutEventAndBlog from '../Components/About/event-blog'
import AboutStudentReviews from '../Components/About/Studentreviews'
import AboutTeam from '../Components/About/Team'


export default function Breadcrumbs() {
    return (
        <>
         <AboutBreadcumbs />
         <AboutCounter />
         <AboutVideo />
         <AboutTeam />
         <AboutStudentReviews />
         <AboutEventAndBlog />
        </>
    )
}