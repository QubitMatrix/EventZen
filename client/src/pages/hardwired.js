import React from 'react'
class Mid extends React.Component{
    redirect=(i)=>{
        document.location=this.props.det[i]
    }
    render(){
        return(<div id="vlsi-mid"><h1>{this.props.det[0]}</h1><p>{this.props.det[1]}</p><button id={this.props.det[2]} onClick={()=>this.redirect(3)}>REGISTER NOW</button><br/><h2>{this.props.det[4]}</h2><ul><li>{this.props.det[5]}</li><li>{this.props.det[6]}</li><li>{this.props.det[7]}</li></ul><p>{this.props.det[8]}</p><br/><h2>{this.props.det[9]}</h2><p>{this.props.det[10]}<br/>{this.props.det[11]}</p><br/><h2>{this.props.det[12]}</h2><ul><li>{this.props.det[13]}</li><li>{this.props.det[14]}</li></ul></div>)
    }
}
class Hardwired extends React.Component{
    render(){
    return(<div>
    <Mid det={det}/>
    </div>)
    }
}
export default Hardwired;