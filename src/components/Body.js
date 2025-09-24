import React from "react";
import userContext from "../utils/userContext";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { id, title, completed } = this.props.todo;
    const { count } = this.state;
    return (
      <>
     
        <p>Count is ; {count}</p>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment Count
        </button>
         <userContext.Consumer>
        {(data)=><h4>LoggedIn user is:{data.loginInfo}</h4>}
      </userContext.Consumer>
        <div className="todos">
          Todo {id}:<div>Title: {title}</div>
          <div>Status: {completed ? "true" : "false"}</div>
        </div>
      </>
    );
  }
}
export default Body;
