import React from "react";

var srcs=["gal1.jpg","gal2.jpg","gal3.jpg","gal4.jpg","gal5.jpg","gal6.jpg","gal7.jpeg","gal8.jpeg"]
class Mid extends React.Component{
    render(){
        var img_set=[]
        for(let i=0;i<srcs.length;i++)
        img_set.push(<img src={this.props.det[i]} width="300" height="300"/>)
        return(<div id="gallery-imgs"><h1>Gallery</h1>{img_set}</div>)
    }
}
class Gallery extends React.Component{
    render(){
        return(<div>
            <p>abc</p>
        <Mid det={srcs}/>
        </div>
        )
    }
}
export default Gallery;