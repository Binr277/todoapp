import React from "react"
import './FormInput.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class FormInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.getValue(event.target.value);
    }
    render() {
        return (
            <div class="row">
                <label>{this.props.description}</label>
                <input type="text" placeholder={this.props.placeholder} onChange={this.handleChange} />
            </div>
        );
    }
}
