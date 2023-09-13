import { useLocation } from "react-router-dom";

function PostDetail() {
    const { state } = useLocation();
    

    return (
        <div>Post detail here</div>
    )
}

export default PostDetail;