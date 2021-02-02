import React from "react";
import PostContent from "./PostContent";

class PostDetail extends React.Component {
    constructor(props) {
      super(props)
      this.history = props.history
    }
    
    render() {
        return (
          <div>
             <PostContent history={this.props.history}/>
          </div>
        );
    }
}
export default PostDetail