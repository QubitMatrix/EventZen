import React, { useState } from "react";
import { Link } from "react-router-dom";
//var MongoClient=require('mongodb').MongoClient
var url_db="mongodb://localhost:27017"


   var arr=['about.html','search.html','calender.html','gallery.html','contacts.html','review.html']
        var nam=["About","Search","Calender","Gallery","Contacts","Review"]
        var det=["EventZen","You can register for multiple events as long as they don't overlap.","Each event has different pricing and eligibility, check the event details before registering for an event.","Registration form:"]
        var form=[["text","fname","fname","First Name","","",'inputs.fname || ""'],["text","lname","lname","Last Name","","",'inputs.lname || ""'],["text","srn","srn","SRN","PES+[1 2]+UG[1 2]+[8 9 0 1 2]+[CS EC EE BT ME]+[0-9]{3}","",'inputs.srn || ""'],["email","email","email","Email","[0-9 A-Z a-z _ . @]+[.edu .org .com]","",'inputs.email || ""'],["tel","number","number","Mobile Number","[0-9]{10}","",'inputs.tel || ""'],["date","dob","dob","","Date of birth:",'inputs.dob || ""']]
        var checkbox=[["checkbox","events","events","codewars","CodeWars"],["checkbox","events","events","hardwired","Hardwired"],["checkbox","events","events","consolejam","ConsoleJam"]]
        var form_submit=[["submit","submit","submit","Submit"],["reset","reset","reset","Reset"]]
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
        function Form_fun(props){

            const [inputs,setInputs]=useState({})
            const handleChange=(e)=>{
                const name=e.target.name;
                const value=e.target.value;
                setInputs(values=>({...values,[name]:value}))
            }
            const handleSubmit=(e)=>{
                document.write(inputs)
                alert("Form submitted")
                e.preventDefault();
                console.log(inputs,typeof(inputs),inputs.fname,typeof(inputs.fname));
                return fetch('localhost:3001/formm',{
                    method:'GET',
                    body:JSON.stringify(inputs),
                    headers:{
                        'Content-Type':'application/json'
                    },
                })
                .then(res=>res.json())
                .then(data=>console.log(data));
            }
                var reg_arr=[]
                for(let i=0;i<form.length;i++)
                {
                    if(props.form[i][4]=="")
                reg_arr.push(<><input onChange={handleChange} type={props.form[i][0]} name={props.form[i][1]} id={props.form[i][2]}  placeholder={props.form[i][3]} required/><br/><br/></>)
                else
                reg_arr.push(<><input onChange={handleChange}  type={props.form[i][0]} name={props.form[i][1]} id={props.form[i][2]}  placeholder={props.form[i][3]} pattern={props.form[i][4]} required/><br/><br/></>)
                }
                for(let i=0;i<checkbox.length;i++)
                reg_arr.push(<><input  onChange={handleChange} type={props.checkbox[i][0]} name={props.checkbox[i][1]} id={props.checkbox[i][2]} value={props.checkbox[i][3]} />{props.checkbox[i][4]}<br/> </>)
                
                for(let i=0;i<form_submit.length;i++)
                reg_arr.push(<><input  onChange={handleChange} type={props.form_sub[i][0]} name={props.form_sub[i][1]} id={props.form_sub[i][2]} value={props.form_sub[i][3]}/></>)
                return(<div><form onSubmit={handleSubmit}>{reg_arr}</form></div>
                )
        }
        class Mid extends React.Component{
            render(){
                return(<div id="reg-mid"><h1>{this.props.det[0]}</h1><p>{this.props.det[1]}<br/>{this.props.det[2]}</p><h1>{this.props.det[3]}</h1><fieldset><Form_fun {...this.props}/></fieldset></div>)
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
                        <h3>&copy PES University</h3>
                        </div>
                        </footer>
                )
            }
        }
        class Register extends React.Component{
            render(){
            return(<div>
            <Mid det={det} form={form} form_sub={form_submit} checkbox={checkbox}/>
            </div>)
            }
        }
        //return(<Consolejam links={arr} names={nam} det={det} form={form} form_sub={form_submit} checkbox={checkbox}/>)
        
        

export default Register;