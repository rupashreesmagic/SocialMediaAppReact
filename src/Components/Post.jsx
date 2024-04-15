import { AiFillDelete } from "react-icons/ai";
import { PostList } from "../Store/post-list-store";
import { useContext } from "react";
const Post = ({post}) => {
    const {deletePost} = useContext(PostList);
  
   return <div>
   <div class="card post-card" style={{width: "30rem"}}>
   <div class="card-body">
     <h5 class="card-title">{post.title}
     <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
     onClick={()=> deletePost(post.id)}>
     <AiFillDelete />
    
  </span></h5>
     <p class="card-text">{post.body}
      {post.tags.map(tag => <span class="badge text-bg-primary hashtag">{tag}</span>)}
      <div class="alert alert-success reactions" role="alert">
        This post has been reacted by {post.reactions} people.
      </div> 
      </p>
   </div>
 </div>
 </div>
}

export default Post;