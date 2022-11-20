import React from 'react'
var det=['About Console Jam','Hey ethletes out there!',"This even is exclusively for y'all. Show off your gaming skills in this event.","vlsi-reg",'http://localhost:3001/register','Prize Details:',"First prize: Rs.3000/-","Second Prize: Rs.2000/-","Third Prize: Rs.1000/-","Participation certificates and exciting goodies for all participants.","Eligibility","Any B.Tech pursuing student can participate in the event(Any year or branch).","Requirements","There is no requirements for this event."," Just come and have fun!!!"]
class Mid extends React.Component{
    redirect=(i)=>{
        document.location=this.props.det[i]
    }
    render(){
        return(<div id="gam-mid"><h1>{this.props.det[0]}</h1><p>{this.props.det[1]}<br/>{this.props.det[2]}</p><button id={this.props.det[3]} onClick={()=>this.redirect(4)}>REGISTER NOW</button><br/><h2>{this.props.det[5]}</h2><ul><li>{this.props.det[6]}</li><li>{this.props.det[7]}</li><li>{this.props.det[8]}</li></ul><p>{this.props.det[9]}</p><br/><h2>{this.props.det[10]}</h2><p>{this.props.det[11]}</p><br/><h2>{this.props.det[12]}</h2><p>{this.props.det[13]}<br/>{this.props.det[14]}</p></div>)
    }
}
class Consolejam extends React.Component{
    render(){
    return(<div>
    <Mid det={det}/>
    </div>)
    }
}
export default Consolejam;
