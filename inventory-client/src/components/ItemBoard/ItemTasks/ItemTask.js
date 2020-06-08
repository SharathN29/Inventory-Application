import React, {Component} from "react";
import {Link} from "react-router-dom";
import {deleteItemTask} from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class ItemTask extends Component {
    onDeleteClick(backlog_id, it_id) {
        this.props.deleteItemTask(backlog_id, it_id);
    }

    render() {
        const {item_task} = this.props;
        let priorityString;
        let priorityClass;

        if (item_task.priority === 1) {
            priorityClass = "bg-danger text-light";
            priorityString = "HIGH";
        }

        if (item_task.priority === 2) {
            priorityClass = "bg-warning text-light";
            priorityString = "MEDIUM";
        }

        if (item_task.priority === 3) {
            priorityClass = "bg-info text-light";
            priorityString = "LOW";
        }

        return (
            < div
        className = "card mb-1 bg-light" >
            < div
        className = {`card-header text-primary ${priorityClass}`
    }>
        ID: {
            item_task.itemSequence
        }
        --Priority
    :
        {
            priorityString
        }
    <
        /div>
        < div
        className = "card-body bg-light" >
            < h5
        className = "card-title" > {item_task.summary} < /h5>
            < p
        className = "card-text text-truncate " >
            {item_task.acceptanceCriteria}
            < /p>
            < Link
        to = {`/updateItemTask/${item_task.itemIdentifier}/${item_task.itemSequence}`
    }
        className = "btn btn-primary"
            >
            View / Update
            < /Link>

            < button
        className = "btn btn-danger ml-4"
        onClick = {
                this.onDeleteClick.bind(
                this,
                item_task.itemIdentifier,
                item_task.itemSequence
                )
            }
            >
            Delete
            < /button>
            < /div>
            < /div>
    )
        ;
    }
}

ItemTask.propTypes = {
    deleteItemTask: PropTypes.func.isRequired,
};

export default connect(null, {deleteItemTask})(ItemTask);
