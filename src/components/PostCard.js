import PostCardImage from "./PostCardImage";
import PostCardText from "./PostCardText";


function PostCard({imageSrc, text, title, isDarkmode, children}) {
  

    return (
        <div className= {`postcard ${isDarkmode ? 'darkmode' : '' }`} >
            <PostCardImage imageSrc={imageSrc} isDarkMode={isDarkmode}/>
            <PostCardText title={title} text={children} isDarkMode={isDarkmode}/>
            
        </div>
    )
}
export default PostCard;