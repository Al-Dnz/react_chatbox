import React from 'react'

class Message extends React.Component {

  // state = {
  //   posts: this.props.posts,
  //   postList: [this.props.posts].map((post) => <div key={post.toString()}>
  //     {post.pseudo}
  //     : {post.message}
  //   </div>)
  //}

  render() {

    // const prop = this.props.posts;
    // console.log("*** => ");
    // console.log(this.props.posts);
    // console.log(Object.keys(prop));
    // const keys = Object.keys(prop);
    // const listMessages = []
    // for (var i = 0; i < keys.length; i++) {
    //   var clef = (prop[keys[i]]);
    //   // console.log(clef.toString());
    //   // var div = React.createElement('div' ,{key: `${clef}`},{className:'user_message'}, `${prop[clef].pseudo} : ${prop[clef].message}` );
    //   // listMessages.push(div)
    //   clef["id"] = keys[i]
    //   listMessages.push(clef)
    // }
    // console.log(listMessages);

    return (

    // <div>
    //   {
    //     listMessages.map(post => <div className="user-message" key={post.id}>
    //       {post.pseudo}
    //       : {post.message}</div>)
    //   }
    // </div>)


    <p className="user-message">
      {this.props.content.pseudo} : {this.props.content.message}
    </p>)

  }
}

export default Message
