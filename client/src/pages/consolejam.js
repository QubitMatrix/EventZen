import React from 'react'
import { Link } from 'react-router-dom'


var arr=['about.html','search.html','calender.html','gallery.html','contacts.html','review.html']
        var nam=["About","Search","Calender","Gallery","Contacts","Review"]
        var det=['About Console Jam','Hey ethletes out there!',"This even is exclusively for y'all. Show off your gaming skills in this event.","vlsi-reg",'http://localhost:3001/formm','Prize Details:',"First prize: Rs.3000/-","Second Prize: Rs.2000/-","Third Prize: Rs.1000/-","Participation certificates and exciting goodies for all participants.","Eligibility","Any B.Tech pursuing student can participate in the event(Any year or branch).","Requirements","There is no requirements for this event."," Just come and have fun!!!"]
        class Button extends React.Component{
            redirect=(i)=>{
                document.location=this.props.links[i]
            }
            render(){
                var button_set=[]
                for(let i=0;i<arr.length;i++)
                button_set.push(<button onClick={()=>this.redirect(i)}>{this.props.names[i]}</button>)
                return(<div id="button-div">{button_set}</div>)
            }
        }
        class Logo extends React.Component{
            render(){
                return <Link to="/"><img id="logo" src="home.jpg" width="100" height="70"/></Link>
            }
        }
        class Header extends React.Component{
            render(){
                return(
                    <header id="header"><Logo {...this.props}/><Button {...this.props}/></header>
                )
            }
        }
        class Mid extends React.Component{
            redirect=(i)=>{
                document.location=this.props.det[i]
            }
            render(){
                return(<div id="gam-mid"><h1>{this.props.det[0]}</h1><p>{this.props.det[1]}<br/>{this.props.det[2]}</p><button id={this.props.det[3]} onClick={()=>this.redirect(4)}>REGISTER NOW</button><br/><h2>{this.props.det[5]}</h2><ul><li>{this.props.det[6]}</li><li>{this.props.det[7]}</li><li>{this.props.det[8]}</li></ul><p>{this.props.det[9]}</p><br/><h2>{this.props.det[10]}</h2><p>{this.props.det[11]}</p><br/><h2>{this.props.det[12]}</h2><p>{this.props.det[13]}<br/>{this.props.det[14]}</p></div>)
            }
        }
        class Footer extends React.Component{
            render(){
                return(
                        <footer id="contact"><div>
                        <span>Mail us on: <a href="mailto:abc@gmail.com">abc@gmail.com</a></span>
                        <br/>
                        <span>Mobile No.: 1234567890</span>
                        <br/>
                        <h3>&copy; PES University</h3>
                        </div>
                        </footer>
                )
            }
        }
        class Consolejam extends React.Component{
            render(){
            return(<div>
            <Mid det={det}/>
            </div>)
            }
        }
        //return(<div><Consolejam links={arr} names={nam} det={det}/></div>)
    
    export default Consolejam;
