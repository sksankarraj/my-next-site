import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css'
import { fetchEntries } from '../api/posts';

export default function Posts({ post }) {

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const router = useRouter();
    const slug = router.query.slug;

    return (
        <div>
            <a href='/'><span className={styles.splChar}>&lt; Home</span></a>
            <h1 className='text-xl'>{post.fields.title}</h1>
            {mounted && <p className='text-sm'>{new Date(post.fields.postedDate).toDateString()}</p>}
            {JSON.stringify(post)}
        </div>
    );
}

export async function getStaticProps(context) {
    const post = await fetchEntries(context.params.slug);
    return {
        props: {
            post,
        },
        revalidate: 1,
    }
}


export async function getStaticPaths() {
    let paths = await fetchEntries()
    paths = paths.map(post => ({
        params: { slug: post.fields.slug }
    }));
    return {
        paths: paths,
        fallback: false
    }
}