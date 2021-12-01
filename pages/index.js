import axios from 'axios';
import HomeSlider from '../Components/Homepage/Slider'
import HomeAbout from '../Components/Homepage/About'
import HomeRecipes from '../Components/Homepage/Recipes'
import HomeCategories from '../Components/Homepage/Categories'
import HomeEvent from '../Components/Homepage/Event'
import HomeVideo from '../Components/Homepage/Video'
import HomeNewsletter from '../Components/Homepage/Newsletter'
import HomeTestimonial from '../Components/Homepage/Testimonial'
import HomeEventImage from '../Components/Homepage/Eventimage'


const fetchData = async () => 
    await axios.get('')
    .then(res => ({
        error: false,
        users: res.data,
    }))
    .catch(() => ({
      error: true,
      users: null,
    }),
);

const fetchBlogData = async () => 
    await axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => ({
        error: false,
        blog: res.data,
    }))
    .catch(() => ({
      error: true,
      blog: null,
    }),
);

export default function HomePage({courses, blogs}) {
  return (
    <>
    <HomeSlider />
    <HomeAbout />
    <HomeRecipes />
    <HomeCategories  courses={courses}/>
    <HomeEvent blogs={blogs}/>
    <HomeVideo />
    <HomeNewsletter />
    <HomeTestimonial />
    <HomeEventImage />
    </>
  )
}

export const getStaticProps = async () => {
  const courses = await fetchData();
  const blogs = await fetchBlogData();
  return {
      props: { courses, blogs },
  };
};

