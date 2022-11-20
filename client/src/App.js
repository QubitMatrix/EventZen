import './App.css';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Link as StyledLink} from 'react-router-dom'
import Codewars from './pages/codewars';
import Hardwired from './pages/hardwired';
import Consolejam from './pages/consolejam';
import Calender from './pages/calender';
import Gallery from './pages/gallery';
import Reviews from './pages/review';
import Search from './pages/search';
import Contact from './pages/contacts';
import Info from './pages/about';
function App() {
var arr=['about','search','calender','gallery','contacts','review','http://localhost:3001/register']
var nam=["About","Search","Calendar","Gallery","Contacts","Review","Register"]
var events=[["code-event","/codewars","codeimg","code.webp","CodeWars poster","Codewars"],["vlsi-event","/hardwired","vlsiimg","vlsi.jpg","Hardwired poster","Hardwired"],["gaming-event","/Consolejam","gamingimg","game.jpg","Console Jam poster","Console Jame"]]
class Button extends React.Component{
    render(){
        var button_set=[]
        for(let i=0;i<arr.length-1;i++)
        button_set.push(<StyledLink className={'button'} to={this.props.links[i]}><span>{this.props.names[i]}</span></StyledLink>)
        button_set.push(<button className={'button'} onClick={()=>document.location="http://localhost:3001/register"}>Register</button>)
        return(<div id="button-div">{button_set}</div>)
    }
}
class Logo extends React.Component{
    render(){
        return <StyledLink to="/"><img id="logo" src="home.jpg" width="100" height="70"/></StyledLink>
    }
}
class Header extends React.Component{
    render(){
        return(
            <header id="header"><Logo {...this.props}/><Button {...this.props}/></header>
        )
    }
}
class Event extends React.Component{
    render(){
        var event_set=[]
        for(let i=0;i<events.length;i++)
        event_set.push(<div id={this.props.events[i][0]}><StyledLink to={this.props.events[i][1]}><img id={this.props.events[i][2]} src={this.props.events[i][3]} alt={this.props.events[i][4]} height="200" width="200"/></StyledLink><br/><span>{this.props.events[i][5]}</span></div> )
        return(<div id="events">{event_set}</div>)
    }
}
class Mid extends React.Component{
    render()
    {
        return(<div id="home-mid"><Event {...this.props}/></div>)
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
class Home extends React.Component{
    render(){
    return(<div>
    <Mid {...this.props}/>
    </div>)
    }
}
    
return(<div>
        <Router>
            <Header links={arr} names={nam} events={events}/>
            <Footer/>
            <Routes>
                <Route exact path="/" element={<Home links={arr} names={nam} events={events}/>}/>
                <Route path='/about' element={<Info/>}/>
                <Route path='/codewars' element={<Codewars/>}/>
                <Route path='/hardwired' element={<Hardwired/>}/>
                <Route path='/consolejam' element={<Consolejam/>}/>
                <Route path='/calender' element={<Calender/>}/>     
                <Route path="/contacts" element={<Contact/>}/>       
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/review' element={<Reviews/>}/>
            </Routes>
        </Router>
    </div>)
}
export default App;
