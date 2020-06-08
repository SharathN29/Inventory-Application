import React, {Component} from "react";
import {getItem, createItem} from "../../actions/itemActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";

class UpdateItems extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            itemName: "",
            itemIdentifier: "",
            description: "",
            quantity: "",
            order_date: "",
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
            itemName,
            itemIdentifier,
            description,
            quantity,
            order_date,
        } = nextProps.item;

        this.setState({
            id,
            itemName,
            itemIdentifier,
            description,
            quantity,
            order_date,
        });
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.getItem(id, this.props.history);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        const updateItems = {
            id: this.state.id,
            itemName: this.state.itemName,
            itemIdentifier: this.state.itemIdentifier,
            description: this.state.description,
            quantity: this.state.quantity,
            order_date: this.state.order_date,
        };

        this.props.createItem(updateItems, this.props.history);
    }

    render() {
        const {errors} = this.state;
        return (
            < div
        className = "project" >
            < div
        className = "container" >
            < div
        className = "row" >
            < div
        className = "col-md-8 m-auto" >
            < h5
        className = "display-4 text-center" > Update
        Order
        form < /h5>
        < hr / >
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
            errors.itemName,
        }
    )
    }
        placeholder = "Item Name"
        name = "itemName"
        value = {this.state.itemName}
        onChange = {this.onChange}
        />
        {
            errors.itemName && (
            < div
            className = "invalid-feedback" > {errors.itemName} < /div>
        )
        }
    <
        /div>
        < div
        className = "form-group" >
            < input
        type = "text"
        className = {classnames("form-control form-control-lg",
        {
            "is-invalid"
        :
            errors.itemIdentifier,
        }
    )
    }
        placeholder = "Unique Item ID"
        name = "itemIdentifier"
        value = {this.state.itemIdentifier}
        onChange = {this.onChange}
        disabled
        / >
        {
            errors.itemName && (
                < div className = "invalid-feedback" >
            {errors.itemIdentifier}
            < /div>
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
            errors.description,
        }
    )
    }
        placeholder = "Item Description"
        name = "description"
        value = {this.state.description}
        onChange = {this.onChange}
            > < /textarea>
        {
            errors.itemName && (
            < div
            className = "invalid-feedback" > {errors.description} < /div>
        )
        }
    <
        /div>
        < div
        className = "form-group" >
            < input
        type = "text"
        className = {classnames("form-control form-control-lg",
        {
            "is-invalid"
        :
            errors.quantity,
        }
    )
    }
        placeholder = "Item Quantity"
        name = "quantity"
        value = {this.state.quantity}
        onChange = {this.onChange}
        />
        {
            errors.itemName && (
            < div
            className = "invalid-feedback" > {errors.quantity} < /div>
        )
        }
    <
        /div>
        < h6 > Order
        Date < /h6>
        < div
        className = "form-group" >
            < input
        type = "date"
        className = {classnames("form-control form-control-lg",
        {
            "is-invalid"
        :
            errors.order_date,
        }
    )
    }
        name = "order_date"
        value = {this.state.order_date}
        onChange = {this.onChange}
        />
        {
            errors.itemName && (
            < div
            className = "invalid-feedback" > {errors.order_date} < /div>
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

UpdateItems.propTypes = {
    getItems: PropTypes.func.isRequired,
    createItem: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    item: state.item.item,
    errors: state.errors,
});

export default connect(mapStateToProps, {getItem, createItem})(UpdateItems);
