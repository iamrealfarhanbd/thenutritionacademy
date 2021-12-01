import SingleCoursePage from '../Components/Course/Single-Course'


const fetchData = async () => 
    await axios.get('')
    .then(res => ({
        error: false,
        course: res.data,
    }))
    .catch(() => ({
      error: true,
      course: null,
    }),
);

export default function SingleCoursePages({course}) {
    return (
        <>
            <SingleCoursePage course={course} />
        </>
    )
}

export const getStaticProps = async () => {
    const course = await fetchData();
    return {
        props: { course },
    };
};
