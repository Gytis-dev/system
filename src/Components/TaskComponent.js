import React from "react";
import "../Components/taskStyle.css"
import { Link, useHistory } from "react-router-dom";


const TaskComponent = (props) => {

let buttonApproved = {
    background:"#22eaaa",
    textAlign:"center",
    borderRadius:"20px",
    padding:'5px'
}

let buttonStyleRegular = {
    background:"#e6c073",
    textAlign:"center",
    borderRadius:"20px",
    padding:'5px'
}

    return (
        <tbody>
            <tr className="task-row" >
                <td>{props.prop.id}</td>
                <td>{props.prop.name}</td>
                <td>{props.prop.reporter}</td>
                <td>{props.prop.priority}</td>
                <td>{props.prop.date}</td>
                <td ><div style={props.prop.status == "Approved" ? buttonApproved : buttonStyleRegular}> {props.prop.status}</div></td>
                <td><Link to={{
                    pathname: `/home/${props.prop.name}`,
                    state: {
                        from: props.prop
                    }
                }}>View Issue</Link> </td>
            </tr>
        </tbody>

    );
}

export default TaskComponent;