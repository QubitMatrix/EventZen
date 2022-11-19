import React from "react";
import {Link as StyledLink} from "react-router-dom"
var con=[["con1","/codewars","con-img1","con1.jpeg","CodeWars event head","Phone:99789 98567","CodeWars","Email:preethi@gmail.com"],["con2","/hardwired","con-img2","con1.jpeg","Hardwired event head","Phone:96789 98879","Hardwired","Email:pooja@gmail.com"],["con3","/consolejam","con-img3","con1.jpeg","Console Jam event head","Phone:94589 67867","Console Jam","Email:pratham@gmail.com"]]
class Mid extends React.Component{
    render(){
        var contact=[]
        for(let i=0;i<con.length;i++)
        contact.push(<div id={this.props.events[i][0]}><h2>{this.props.events[i][6]}</h2><StyledLink to={this.props.events[i][1]}><img id={this.props.events[i][2]} src={this.props.events[i][3]} alt={this.props.events[i][4]} height="200" width="200"/></StyledLink><br/><span>{this.props.events[i][5]}</span><br/><span>{this.props.events[i][7]}</span></div> )
        return(<div id="con-mid">{contact}</div>)
    }
}
class Contact extends React.Component{
    render(){
        return(<div>
            <Mid events={con}/>
        </div>
        )
    }
}
export default  Contact;