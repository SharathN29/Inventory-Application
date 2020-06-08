import React, {Component} from "react";
import EachItem from "./Item/EachItem";
import CreateItemButton from "./Item/CreateItemButton";
import {connect} from "react-redux";
import {getItems} from "../actions/itemActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
    componentDidMount() {
        this.props.getItems();
    }

    render() {
        const {items} = this.props.item;
        return (
            < div
        className = "items" >
            < div
        className = "container" >
            < div
        className = "row" >
            < div
        className = "col-md-12" >
            < h1
        className = "display-4 text-center" > Items < /h1>
            < br / >
            < CreateItemButton / >
            < br / >
            < hr / >
            {
                items.map((item) => (
                    < EachItem key = {item.id} item = {item}
        />
    ))
    }
    <
        /div>
        < /div>
        < /div>
        < /div>
    )
        ;
    }
}

Dashboard.propTypes = {
    item: PropTypes.object.isRequired,
    getItems: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    item: state.item,
});

export default connect(mapStateToProps, {getItems})(Dashboard);
