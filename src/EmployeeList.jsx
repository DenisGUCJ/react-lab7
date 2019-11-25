import React from 'react'

const EmployeeList = (props) =>{
    
    const employeeList = props.employee.map(data => 
        <Employee key={data.id} data={data}></Employee>
        )
        return(
            <div>
                {employeeList}
            </div>
        )

}

const Employee = (props) =>{

    return(
        <div>
            {props.data.isActive ? <div style={{border: '1px solid', padding:'10px',margin:'10px',backgroundColor:'#e6ffe6',fontSize:20,fontWeight:'bold'}}>
                <p>{props.data.name} {props.data.age}</p>                            
            </div>
            :
            <div style={{border: '1px solid', padding:'10px',margin:'10px',backgroundColor:'#ffcccc',fontSize:20,fontWeight:'bold'}}>
                <p>{props.data.name} {props.data.age}</p>                            
            </div>
            }
        </div>        
    )
}
export default EmployeeList 