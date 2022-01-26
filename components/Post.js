const Post = ({ date, title, description, slug }) => {

    // const { file, description } = image;

    return (
        <div className="my-3">
            <a href={`/posts/${slug}`}>
                <h3>{title}</h3>
                <p className="text-gray-400">{description}</p>
            </a>
            <p className="text-gray-400 mt-2"><i>{date}</i></p>
        </div>
    );
};

export default Post;
