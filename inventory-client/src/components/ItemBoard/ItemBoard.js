import React, { Component } from "react";
import { Link } from "react-router-dom";
import Backlog from "./Backlog";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getBacklog } from "../../actions/backlogActions";

class ItemBoard extends Component {
  constructor() {
    super();
    this.state = {
      errors: {},
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getBacklog(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { id } = this.props.match.params;
    const { item_tasks } = this.props.backlog;
    const { errors } = this.state;

    let BoardContent;
    const boardAlgorithm = (errors, item_tasks) => {
      if (item_tasks.length < 1) {
        if (errors.itemNotFound) {
          return (
            <div className="alert alert-danger text-center" role="alert">
              {errors.itemNotFound}
            </div>
          );
        } else {
          return (
            <div class="alert alert-info text-center" role="alert">
              No item tasks on this board
            </div>
          );
        }
      } else {
        return <Backlog item_tasks_prop={item_tasks} />;
      }
    };

    BoardContent = boardAlgorithm(errors, item_tasks);

    return (
      <div className="container">
        <Link to={`/addItemTask/${id}`} className="btn btn-primary mb-3">
          <i className="fas fa-plus-circle"> Create Item Task</i>
        </Link>
        <br />
        <hr />
        {BoardContent}
      </div>
    );
  }
}

ItemBoard.propTypes = {
  backlog: PropTypes.object.isRequired,
  getBacklog: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  backlog: state.backlog,
  errors: state.errors,
});

export default connect(mapStateToProps, { getBacklog })(ItemBoard);
