import React from 'react';
import ReactDOM from 'react-dom';
import "../styles/Articles.css";
import Iframe from 'react-iframe'

export const Article = (props) =>{

  const articleStyle = {
        fontFamily: "Bree Serif",
        fontWeight: "normal",
        textAlign: "center",
        padding: "2% 10% 10% 10%",
    }
    //I made this component just to see if it would work. It does, but it's all yours to make good. -anacan
    function isAuthor(props) {
      return <h3>by {props.a.author}</h3>;
    }

    function noAuthor(props) {
      return <h3> </h3>;
    }

    function authorCheck(props) {
      if (props.a.author === null) {
        return noAuthor(props);
      }
      else if (props.a.author === "") {
        return noAuthor(props);
      }
      return isAuthor(props);
    }

  //   constructor(props.a.url);{
  //     super()
  //     this.state = {
  //       showMe: false,
  //   }
  // }

  // operation();{
  //   this.setState({
  //     showMe: true
  //   })
  // }
// function toShow() {
//   var iframe = document.getElementById('myId');
//   iframe.style.display = 'block';
// }

    return(
        <div className="iFrame">
        	<div className="innerFrame">
            <h2 style={{color: 'black'}}> {props.a.title}</h2>
            <h3 style={{color: 'darkgray'}}> by {props.a.author}</h3>
            <p style={{color: 'gray'}}> {props.a.description}</p>
            <div className="url">
            <Iframe url = {props.a.url} width="450px" height="450px" id="myId" className="myClassname" display="initial" position="center" />
            // <button onClick={()=>this.toShow()}> {props.a.title} </button>
            </div>
            </div>
        </div>
    );



}
