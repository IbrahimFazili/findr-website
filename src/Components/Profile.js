import React from "react";
import "../App.css"

class Profile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            image: props.image,
            name: props.name,
            position: props.position
        }
    }
    componentWillReceiveProps(props){
        if (this.state.image !== props.image){
            this.state.image = props.image
        }
        if (this.state.name !== props.name){
            this.state.name = props.name
        }
        if (this.state.position !== props.position){
            this.state.position = props.position
        }
    }

    render(){
        return(
            <div>
                {/*image here
                    name here
                    position here */}
            </div>
        )
    }
}

export default Profile;