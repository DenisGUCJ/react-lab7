import React from 'react'

class AddEmployee extends React.Component{

    constructor(props){
        super(props);
        this.state={
            age:0
        };
        this.ageChangedEvent=this.ageChangedEvent.bind(this);
    }
    ageChangedEvent(event){
        this.setState({
            age : event.target.value
        })
    }

    render(){
        return <div>
            <form style={{border:'1px solid', padding : '10px',
            width: 400,backgroundColor:"#ffe6e6"}} onSubmit={this.props.submit}>
                <p> Age:<br/>
                    <input name="age" type="number" onChange={this.ageChangedEvent} min="0"/>
                </p>
                {this.state.age>=18 ? <div><p> Name:<br/>
                        <input name="name"/>
                    </p>
                    <p> Email:<br/>
                        <input name="email"/>
                    </p>
                </div>
                : 
                <div><p> Parent Name:<br/>
                        <input name="name"/>
                    </p>
                    <p>Parent Phone No:<br/>
                        <input name="phone"/>
                    </p>
                </div>
                }
                <p><input style={{width:100}} type="submit"/></p>
                <p><input style={{width:100}} type="reset"/></p>
                <p><button onClick={this.props.cancel} style={{width:100, textAlign:'center'}}>Cancel</button></p>
            </form>
        </div>
    }
}


export default AddEmployee