import Post from '../components/Post';
import { fetchEntries } from './api/posts';

export default function Home({ posts }) {

  return (
    <>
      <div className='blogs-container'>
        <h2 className='text-xl font-bold'>My Writings</h2>
      </div>
      <div className='blog-posts'>
        {posts.map(p => {
          return <Post key={p.fields.postedDate} slug={p.fields.slug} date={new Date(p.fields.postedDate).toDateString()}
            title={p.fields.title} description={p.fields.description} />
        })}
      </div>
    </>
  )
}


export async function getStaticProps() {
  const posts = await fetchEntries();
  return {
    props: {
      posts,
    },
    revalidate: 1,
  }
}
