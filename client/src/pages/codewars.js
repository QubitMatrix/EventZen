import React from 'react'
import { Link } from 'react-router-dom'
var det=['About CodeWars','This event allows the participants to showcase their coding skills ranging from simple logic and problem solving to advanced algorithms',"cod-reg",'http://localhost:3001/register','Prize Details:',"First prize: Rs.3000/-","Second Prize: Rs.2000/-","Third Prize: Rs.1000/-","Participation certificates and exciting goodies for all participants.","Eligibility","Any B.Tech pursuing student can participate in the event(Any year or branch).","The participant should have a knack for problem solving and should know atleast one of the given programming languages in the requirements given below.","Requirements","Accepted Languages:C,C++,Python,Ruby,Java","The evaluation will be based on the efficiency of the solution and time taken to solve it.","All questions have multiple testcases and the program should run with the given time and memory restrictions"]
 
        class Mid extends React.Component{
            redirect=(i)=>{
                document.location=this.props.det[i]
            }
            render(){
                return(<div id="cod-mid"><h1>{this.props.det[0]}</h1><p>{this.props.det[1]}</p><button id={this.props.det[2]} onClick={()=>this.redirect(3)}>REGISTER NOW</button><br/><h2>{this.props.det[4]}</h2><ul><li>{this.props.det[5]}</li><li>{this.props.det[6]}</li><li>{this.props.det[7]}</li></ul><p>{this.props.det[8]}</p><br/><h2>{this.props.det[9]}</h2><p>{this.props.det[10]}<br/>{this.props.det[11]}</p><br/><h2>{this.props.det[12]}</h2><p>{this.props.det[13]}<br/>{this.props.det[14]}<br/>{this.props.det[15]}</p><br/></div>)
            }
        }
       class Codewars extends React.Component{
            render(){
            return(<div>
            <Mid det={det}/>
            </div>)
            }
        }
    
export default Codewars;