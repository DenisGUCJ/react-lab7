import React from 'react'

class AddEmployee extends React.Component{

    constructor(props){
        super(props);
        this.state={
            age:0,
            validForm:false
        };
        this.ageChangedEvent=this.ageChangedEvent.bind(this);
        this.phoneChangedEvent=this.phoneChangedEvent.bind(this);
        this.emailChangedEvent=this.emailChangedEvent.bind(this);
    }

    ageChangedEvent(event){
        this.setState({
            age : event.target.value
        })
    }

    phoneChangedEvent(event){

        if(event.target.value.match(/^\d{9}$/)){
            this.setState({
                validForm:true
            })
        }
        else{
            this.setState({
                validForm:false
            })
        }
    }

    emailChangedEvent(event){

        if(event.target.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            this.setState({
                validForm:true
            })
        }
        else{
            this.setState({
                validForm:false
            })
        }
    }

    render(){
        return <div>
            <form style={{border:'1px solid', padding : '10px',
            width: 400,backgroundColor:"#d9e3f0"}}>
                <p> Age:<br/>
                    <input name="age" type="number" onChange={this.ageChangedEvent} min="0" defaultValue="0"/>
                </p>
                {this.state.age>=18 ? 
                <div><p> Name:<br/>
                        <input name="name"/>
                    </p>
                    <div>
                        <p> Email:<br/>
                            <input name="email" onChange={this.emailChangedEvent}/>
                        </p>
                    </div>
                </div>
                : 
                <div>
                    <p> Parent Name:<br/>
                        <input name="name"/>
                    </p>
                    <div>
                        <p>Parent  No:<br/>
                            <input name="phone" type="number" onChange={this.phoneChangedEvent}/>
                        </p>
                    </div>
                </div>
                }
                <p><input style={{width:100}} disabled={this.state.validForm ? "": "disabled"} type="submit"/></p>
                <p><input style={{width:100}} type="reset"/></p>
                <p><button onClick={this.props.cancel} style={{width:100, textAlign:'center'}}>Cancel</button></p>
            </form>
        </div>
    }
}


export default AddEmployee