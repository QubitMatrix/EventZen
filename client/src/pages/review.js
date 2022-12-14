import React,{ useState, useEffect } from "react";
class Items extends React.Component {
    constructor(props){
      super(props)
      this.createTasks=this.createTasks.bind(this)
    }
    createTasks(item) {
    return <fieldset><li  key={item.key}><b>{item.key} </b><br></br>{item.text}</li></fieldset>
    }
    render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
   
    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
    }
};

class Details extends React.Component{
    constructor(props)
    {
      super(props);
      this.state={
						items:[]
					}
					this.addItem=this.addItem.bind(this)
    }
    addItem(e) {
      if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: this.ele.value
      };
     
      this.setState((prevState) => {
        return{
        items: prevState.items.concat(newItem) 
      }
      });
       
      //this._inputElement.value = "";
      //this.ele.value = "";
      }
      e.preventDefault();
    }
    render(){
      return(
      <div>
        <iframe title="rev" name="content" style={{display:"none"}}></iframe>
    <form action='http://localhost:3001/review' method='POST' target="content">
          <fieldset className="info">
          <legend> NAME:</legend> 
          <input type="text" name="name"  ref={(a) => this.ele = a}></input>
          </fieldset>
          <fieldset className="info">
          <legend>COMMENT:</legend>
          <input type="text" name="comment"  ref={(b) => this._inputElement = b}></input>
          </fieldset>
          <br/><br/>
          <input class="button_rev" type="submit"></input>
          <button class="button_rev" onClick={this.addItem}>View</button>
      </form>
      <div>
      <Items entries={this.state.items}/>
      </div>
      </div>
      )
    }
}
export default function Reviews(){
    const [result, setResult] =useState([]);
    useEffect(() => {
    async function getRecords(){
      const res = await fetch('/review');
      const result= await res.json();
      setResult(result);
    }
    getRecords();
    return;
  },[])
console.log(result)
function seeRec(){
    return result.map((row)=>{
        return(
          <div>
          <fieldset>
            <legend><b>{row.name}</b></legend>
            {row.comment}
          </fieldset>
          <br></br>
          </div>
        )
      })
    }
      return(
      <div id="rev-mid">
          <Details/>
          <div>{seeRec()}</div>
          <br/><br/><br/><br/><br/><br/>
      </div>
  )}
        


