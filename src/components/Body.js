import React from "react";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        count:0
    }
  }
  render() {
 
    const { id, title, completed } = this.props.todo;
    const{count}=this.state
    return(
    <>
    <p>Count is ; {count}</p>
    <button onClick={()=>{
        this.setState(
            {
            count: this.state.count + 1}
        )
    }}>Increment Count</button>
    <div className="todos">
      
      Todo {id}:<div>Title: {title}</div>
      <div>Status: {completed ? "true" : "false"}</div>
    </div>
    </>
    );
  }
}
export default Body