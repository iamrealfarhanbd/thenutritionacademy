import SingleBlog from '../../Components/Blog/Single-Blog'

export default function SingleBlogPage({post}) {
    return (
        <>
            <SingleBlog post={post}/>
        </>
    )
}


export const getServerSideProps = async (context) => {
    const post_id = context.params.id;
    const response = await fetch(
      `https://trainingexpress.org.uk/wp-json/wp/v2/posts/${post_id}`
    );
    const json = await response.json();

    return {
      props: {
        post: json,
      },
    };
  };