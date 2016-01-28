var DataProvider = {
  getData: function() {
    return [];
  }

}



var Comment = React.createClass({

  render: function() {
    return (
      <li onClick={this.props.clickHandler}>{this.props.text}</li>
    );
  }
});


var CommentList = React.createClass({
  clickHandler() {
    alert();
  },
  render: function() {
    var _this = this;
    var commentsFeed = [{text:'Test 1'}, {text:'Test 2'}];
    var comments = commentsFeed.map(function(i) {
      return (<Comment text={ i.text} clickHandler={_this.clickHandler}/>)
    });
    return (
      <div className=" commentList ">
      <ul>
        {comments}

      </ul>
    </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return (
      <div className=" commentForm ">
      Hello world! I am Comment Form.
    </div>
    );
  }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className=" commentBox ">
      <h1>Comments</h1>
      <CommentList/>
      <CommentForm/>
      </div>
    );
  }
});


ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
