import React, {Component} from "react";
import {connect} from "react-redux";
import classnames from "classnames";
import {getItemTask, updateItemTask} from "../../../actions/backlogActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class UpdateItemTask extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            itemSequence: "",
            summary: "",
            acceptanceCriteria: "",
            status: "",
            priority: "",
            dueDate: "",
            itemIdentifier: "",
            created_At: "",
            errors: {},
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
        const {
            id,
            itemSequence,
            summary,
            acceptanceCriteria,
            status,
            priority,
            dueDate,
            itemIdentifier,
            created_At,
        } = nextProps.item_task;

        this.setState({
            id,
            itemSequence,
            summary,
            acceptanceCriteria,
            status,
            priority,
            dueDate,
            itemIdentifier,
            created_At,
        });
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const UpdateItemTask = {
            id: this.state.id,
            itemSequence: this.state.itemIdentifier,
            summary: this.state.summary,
            acceptanceCriteria: this.state.acceptanceCriteria,
            status: this.state.status,
            priority: this.state.priority,
            dueDate: this.state.dueDate,
            itemIdentifier: this.state.itemIdentifier,
            created_At: this.state.created_At,
        };
        // console.log(UpdateItemTask);
        this.props.updateItemTask(
            this.state.itemIdentifier,
            this.state.itemSequence,
            UpdateItemTask,
            this.props.history
        );
    }

    componentDidMount() {
        const {backlog_id, it_id} = this.props.match.params;
        this.props.getItemTask(backlog_id, it_id, this.props.history);
    }

    render() {
        const {errors} = this.state;
        return (
            < div
        className = "add-PBI" >
            < div
        className = "container" >
            < div
        className = "row" >
            < div
        className = "col-md-8 m-auto" >
            < Link
        to = {`/itemBoard/${this.state.itemIdentifier}`
    }
        className = "btn btn-light"
            >
            Back
        to
        Item
        Board
        < /Link>
        < h4
        className = "display-4 text-center" > Update
        Item
        Task < /h4>
        < p
        className = "lead text-center" >
            Item
        Name : {
            this.state.itemIdentifier
        }
    |
        Item
        Task
        ID :{
            " "
        }
        {
            this.state.itemSequence
        }
        {
            " "
        }
    <
        /p>
        < form
        onSubmit = {this.onSubmit} >
            < div
        className = "form-group" >
            < input
        type = "text"
        className = {classnames("form-control form-control-lg",
        {
            "is-invalid"
        :
            errors.summary,
        }
    )
    }
        name = "summary"
        placeholder = "Item Task summary"
        value = {this.state.summary}
        onChange = {this.onChange}
        />
        {
            errors.summary && (
            < div
            className = "invalid-feedback" > {errors.summary} < /div>
        )
        }
    <
        /div>
        < div
        className = "form-group" >
            < textarea
        className = {classnames("form-control form-control-lg",
        {
            "is-invalid"
        :
            errors.acceptanceCriteria,
        }
    )
    }
        placeholder = "Acceptance Criteria"
        name = "acceptanceCriteria"
        value = {this.state.acceptanceCriteria}
        onChange = {this.onChange}
            > < /textarea>
        {
            errors.acceptanceCriteria && (
            < div
            className = "invalid-feedback" >
                {errors.acceptanceCriteria}
                < /div>
        )
        }
    <
        /div>
        < h6 > Due
        Date < /h6>
        < div
        className = "form-group" >
            < input
        type = "date"
        className = {classnames("form-control form-control-lg",
        {
            "is-invalid"
        :
            errors.dueDate,
        }
    )
    }
        name = "dueDate"
        value = {this.state.dueDate}
        onChange = {this.onChange}
        />
        {
            errors.dueDate && (
            < div
            className = "invalid-feedback" > {errors.dueDate} < /div>
        )
        }
    <
        /div>
        < div
        className = "form-group" >
            < select
        className = {classnames("form-control form-control-lg",
        {
            "is-invalid"
        :
            errors.priority,
        }
    )
    }
        name = "priority"
        value = {this.state.priority}
        onChange = {this.onChange}
            >
            < option
        value = {0} > Select
        Priority < /option>
        < option
        value = {1} > High < /option>
            < option
        value = {2} > Medium < /option>
            < option
        value = {3} > Low < /option>
            < /select>
        {
            errors.onChange && (
            < div
            className = "invalid-feedback" > {errors.onChange} < /div>
        )
        }
    <
        /div>

        < div
        className = "form-group" >
            < select
        className = {classnames("form-control form-control-lg",
        {
            "is-invalid"
        :
            errors.status,
        }
    )
    }
        name = "status"
        value = {this.state.status}
        onChange = {this.onChange}
            >
            < option
        value = "" > Select
        Status < /option>
        < option
        value = "TO_DO" > TO
        DO < /option>
        < option
        value = "IN_PROGRESS" > IN
        PROGRESS < /option>
        < option
        value = "DONE" > DONE < /option>
            < /select>
        {
            errors.status && (
            < div
            className = "invalid-feedback" > {errors.status} < /div>
        )
        }
    <
        /div>

        < input
        type = "submit"
        className = "btn btn-primary btn-block mt-4"
            / >
            < /form>
            < /div>
            < /div>
            < /div>
            < /div>
    )
        ;
    }
}

UpdateItemTask.propTypes = {
    getItemTask: PropTypes.func.isRequired,
    item_task: PropTypes.object.isRequired,
    updateItemTask: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    item_task: state.backlog.item_task,
    errors: state.errors,
});

export default connect(mapStateToProps, {getItemTask, updateItemTask})(
    UpdateItemTask
);
