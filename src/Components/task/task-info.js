import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import StatusAlert, { StatusAlertService } from 'react-status-alert'
import 'react-status-alert/dist/status-alert.css'

const TaskInfo = (props) => {
  let user = localStorage.getItem("itemData");
  user = JSON.parse(user);
  let {
    id,
    name,
    reporter,
    priority,
    date,
    status,
    comment,
    koment,
  } = props.location.state.from;

  const [state, setState] = useState({
    id: id,
    name: name,
    reporter: reporter,
    priority: priority,
    status: status,
    showCart: false,
    comment: comment,
  });

  const [commentStyle, setCommentStyle] = useState(false);

  const [com, setCom] = useState([]);

  let changeStatus = () => {
    if (state.status === "Approved") {
      return;
    }
    setState({ status: "Approved" });
    props.change(state);
    StatusAlertService.showSuccess("Mark this task as complete");
  };

  const [val, setVal] = useState("");


  let addComment = () => {
    if (val) {
      props.comment(state.id, val);
      setCom([koment]);
    } else {
      StatusAlertService.showWarning("Please enter a valid comment");
     setState({ showCart: true}) 
    }
    setVal("");
  };


  let check = (e) => {
    let parentElement = e.target.parentNode;
    setCommentStyle(!commentStyle);

      if (parentElement.className === "comment-wrap") {

          if (commentStyle) {
            parentElement.childNodes[1].style.display = "block";
            parentElement.childNodes[2].style.display = "block";
          }
            else {
              parentElement.childNodes[1].style.display = "none";
              parentElement.childNodes[2].style.display = "none";
            }
          } return
  }




  return (
    <div className="task-info">
        <StatusAlert/>
      <div className="task-info-left-menu">
        <div
          className="task-info-back-button g-left font-normal-font"
          onClick={() => props.history.push("/home")}>
          Back
      </div>
        <div className="font-normal-big g-left task-info-title-name">{" "}{name}</div>
        <div className="task-info-body-grid">
          <div>
            <div className="font-normal-font g-left task-info-body-grid-title ">
              Reporter:{" "}
              <div className="task-info-body-grid-descripsion">
                {reporter}
              </div>
            </div>
            <div className="font-normal-font g-left task-info-body-grid-title ">
              Priority:{" "}
              <div className="task-info-body-grid-descripsion">
                {priority}
              </div>
            </div>
          </div>
          <div>
            <div className="font-normal-font g-left task-info-body-grid-title ">
              Date:{" "}
              <div className="task-info-body-grid-descripsion">
                {date}
              </div>
            </div>
            <div className=" g-left">
              <div
                className="font-normal-font task-info-body-grid-title-status"
                onClick={changeStatus}
              >
                <div >
                  Status:{" "}

                </div>
                <div className="task-info-body-grid-descripsion"
                  style={{ marginLeft: "5px" }}
                  style={
                    status === "Submitted"
                      ? { color: "rgb(255, 199, 44)" }
                      : { color: "rgb(3, 192, 60)" }
                  }
                >
                  {status}
                </div>
                <div className="task-info-body-grid-title-status-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="font-normal-font g-left task-info-body-grid-title ">
              Description:{" "}
              <div className="task-info-body-grid-descripsion">
                {comment}
              </div>
            </div>
            <div className="font-normal-font g-left task-info-body-grid-title ">
              Id:{" "}
              <div className="task-info-body-grid-descripsion ">
                {id}
              </div>
            </div>
          </div>
        </div>
        <hr className="task-info-hr" />
        <div className="font-normal-big g-left task-info-title-comment ">
          Comment
          </div>
        <div className="g-left task-info-comment">
          <textarea
            disabled={state.status === "Approved" || state.showCart === true  && true}
            className="task-info-comment-style"
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        </div>
        <div className="g-right task-info-button-postion">
          <div
            className="g-btn-comment font-normal-font g-center"
            onClick={addComment}
            disabled={state.status === "Approved"  && true}>
            Add comment
          </div>
        </div>
      </div>
      <div className="task-info-right-menu">
        <div className="g-left font-normal-font  task-info-comment-text">
          <div className="white-light"
          >Comment's ({koment.length})</div>
          {koment.map((k) => {
            return (
              <li className="comment-wrap" key={(id += 1)} id={id - 1}>
                  <p className="username" onClick={check}>{k.nm} <span>added a comment</span></p>
                  <span className="date">{k.dt}</span>
                  <p>{k.c}</p>
              </li>
            );})}</div>
      </div>
    </div>
  );
};
export default TaskInfo;
