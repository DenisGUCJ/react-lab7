import React from 'react'

class AddEmployee extends React.Component{

    constructor(props){
        super(props);
        this.state={
            age:0,
            validEmail:true,
            validPhone:true
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
        
        const data = new FormData(event.target);

        if(data.get("phone").match(/^\d{9}$/)){
            this.setState({
                validPhone:true
            })
            event.preventDefault();
        }
        else{
            this.setState({
                validPhone:false
            })
            event.preventDefault();
        }
    }

    emailChangedEvent(event){

        const data = new FormData(event.target);

        if(data.get("email").match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
            this.setState({
                validEmail:true
            })
            event.preventDefault();
        }
        else{
            this.setState({
                validEmail:false
            })
            event.preventDefault();
        }
    }

    render(){
        return <div>
            <form style={{border:'1px solid', padding : '10px',
            width: 400,backgroundColor:"#d9e3f0"}} onSubmit={this.state.age<18 ?
                this.phoneChangedEvent
                :
                this.emailChangedEvent
                }>
                <p> Age:<br/>
                    <input name="age" type="number" onChange={this.ageChangedEvent} min="0"/>
                </p>
                {this.state.age>=18 ? <div><p> Name:<br/>
                        <input name="name"/>
                    </p>
                    {this.state.validEmail?
                    <div>
                        <p> Email:<br/>
                            <input name="email"/>
                        </p>
                    </div>
                    :
                    <div>
                        <p> Email:<br/>
                            <input style={{ border:'3px solid',borderColor:"#df6066"}} name="email"/>
                        </p>
                        <p>ERROR: the email is invalid</p>
                    </div>
                    }
                    <p><input style={{width:100}} type="submit"/></p>
                </div>
                : 
                <div><p> Parent Name:<br/>
                        <input name="name"/>
                    </p>
                    {this.state.validPhone ?
                    <div>
                        <p>Parent  No:<br/>
                            <input name="phone" type="number"/>
                        </p>
                    </div>
                    :
                    <div>
                        <p>Parent No:<br/>
                            <input style={{ border:'3px solid',borderColor:"#df6066"}} name="phone"/>
                        </p>
                        <p>ERROR: the phone is invalid</p>
                    </div>
                    }
                    <p><input style={{width:100}} type="submit"/></p>
                </div>
                }
                <p><input style={{width:100}} type="reset"/></p>
                <p><button onClick={this.props.cancel} style={{width:100, textAlign:'center'}}>Cancel</button></p>
            </form>
        </div>
    }
}


export default AddEmployee