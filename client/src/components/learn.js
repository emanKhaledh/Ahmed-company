import React, { Component } from 'react';



const list = [
  {
  title: 'React',
  url: 'https://facebook.github.io/react/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
    title: 'Reactjs',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan sleep',
    num_comments: 3,
    points: 4,
    objectID: 1,
    },

  ];  
class Learn extends Component {
  constructor(props){
    super(props)
    this.state = {
      list

    }
    // 1:bind in constructor
    this.del=this.del.bind(this);
    
  }
  del(id) {
    const isNotId = item => item.objectID !== id;
    const updatedList = this.state.list.filter(isNotId);
    this.setState({ list: updatedList });
    }
    // 3:bind by use arrow functions
    log=()=>{
      console.log("this info" , this);
      
    }
    clickMe(){
      console.log("hi just cliick ",this);
      
    }
  render(){
    return (
      <div className="App">
      {this.state.list.map(item =>
      <div key={item.objectID}>
      <span>
      <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
      <span><button onClick={()=>this.del(item.objectID)}>del</button></span>
      <span><button onClick={this.log()}>log</button></span>
      {/* 2:bind in render */}
      <span><button onClick={this.clickMe.bind(this)}>click me </button></span>
      </div>
      )}
      </div>
      );

  }
}


export default Learn;