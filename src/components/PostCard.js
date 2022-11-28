import PostCardImage from "./PostCardImage";
import PostCardText from "./PostCardText";


function PostCard({imageSrc, text, title}) {
    
    return (
        <div className="postcard">
            <PostCardImage imageSrc={imageSrc} />
            <PostCardText title={title} text={text} />
        </div>
    )
}
export default PostCard;