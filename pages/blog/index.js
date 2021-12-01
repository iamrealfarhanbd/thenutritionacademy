import BlogPage from '../../Components/Blog/Blog'
import BlogBreadcrumbs from '../../Components/Blog/Breadcrumbs'

export default function BlogPageSection ({posts}) {
    return (
        <>
            <BlogBreadcrumbs />
            <BlogPage posts={posts} />
        </>
    )
}

export const getStaticProps = async (context) => {
    const response = await fetch(
      `https://trainingexpress.org.uk/wp-json/wp/v2/posts`
    );
    const json = await response.json();
  
    return {
      props: {
        posts: json,
        version: 1,
      },
    };
};