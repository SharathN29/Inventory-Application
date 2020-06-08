import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {deleteItem} from "../../actions/itemActions";

class EachItem extends Component {
    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    };

    render() {
        const {item} = this.props;
        return (
            < div
        className = "container" >
            < div
        className = "card card-body bg-light mb-3" >
            < div
        className = "row" >
            < div
        className = "col-2" >
            < span
        className = "mx-auto" > {item.itemIdentifier} < /span>
            < /div>
            < div
        className = "col-lg-6 col-md-4 col-8" >
            < h3 > {item.itemName} < /h3>
            < p > {item.description} < /p>
            < /div>
            < div
        className = "col-md-4 d-none d-lg-block" >
            < ul
        className = "list-group" >
            < Link
        to = {`/itemBoard/${item.itemIdentifier}`
    }>
    <
        li
        className = "list-group-item board" >
            < i
        className = "fa fa-flag-checkered pr-1" > Item
        Board < /i>
        < /li>
        < /Link>
        < Link
        to = {`/updateItems/${item.itemIdentifier}`
    }>
    <
        li
        className = "list-group-item update" >
            < i
        className = "fa fa-edit pr-1" > Update
        Order
        Info < /i>
        < /li>
        < /Link>

        < li
        className = "list-group-item delete"
        onClick = {this.onDeleteClick.bind(this, item.itemIdentifier)}
            >
            < i
        className = "fa fa-minus-circle pr-1" > Delete
        Order < /i>
        < /li>
        < /ul>
        < /div>
        < /div>
        < /div>
        < /div>
    )
        ;
    }
}

EachItem.propTypes = {
    deleteItem: PropTypes.func.isRequired,
};

export default connect(null, {deleteItem})(EachItem);
