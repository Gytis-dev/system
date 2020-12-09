import React from "react";
import { Link } from "react-router-dom";
import "../task/task-style.scss";
import "../../global-style/postion.scss";
import "../../global-style/buttons.scss";

import "../../global-style/font.scss";
import {
  faLongArrowAltUp,
  faLongArrowAltDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TaskComponent = (props) => {
  let buttonApproved = {
    background: "transparent",
    border: "2px solid #03c03c",
    textAlign: "center",
    borderRadius: "20px",
    padding: "5px",
    color: "white",
  };

  let buttonStyleRegular = {
    background: "transparent",
    border: "2px solid #FFC72C",
    textAlign: "center",
    borderRadius: "20px",
    padding: "5px",
    color: "white",
  };

  let arrowUp = {
    marginLeft: "5px",
    fontWeight:"bold",
    color:"#03c03c",
    fontSize:"23px",
  }
  let arrowDown = {
    marginLeft: "5px",
    fontWeight:"bold",
    color:"red",
    fontSize:"23px",
  }

  return (
    <Link
      to={{
        pathname: `/home/myreports/${props.prop.name}`,
        state: {
          from: props.prop,
        },
      }}
    >
      <div className="table-main-body-items font-small  g-left">
        <div className=" g-center">{props.prop.id}</div>
        <div>{props.prop.name}</div>
        <div>{props.prop.reporter}</div>

        <div  className="tooltip" >{props.prop.priority}
        <FontAwesomeIcon 
        icon = {props.prop.priority === "Low" || props.prop.priority === "Middle" ? faLongArrowAltUp : faLongArrowAltDown}
        style = {props.prop.priority === "Low" || props.prop.priority === "Middle" ? arrowUp : arrowDown}
        />
          <span className="tooltiptext"> {props.prop.priority === "Low" || props.prop.priority === "Middle" ? 'Need to do' : 'Important need to do '}</span>

        </div>

        <div>{props.prop.date}</div>
        <div>
          <div
            className="table-main-body-items-btn"
            style={
              props.prop.status === "Approved"
                ? buttonApproved
                : buttonStyleRegular
            }>
            {" "}
            {props.prop.status}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TaskComponent;
