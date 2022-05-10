import React from "react"
import './FormInput.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',

        }

    }


    handleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.title);
    }

    render() {
        return (
            // <div className="row " >
            //     <input type="text" placeholder="Nhập ghi chú tại đây" onChange={this.handleChange.bind(this)} />
            //     <button type="submit" className="btn-block btn-color" onClick={this.handleAddTodo}>Add</button>
            // </div>
            <div class="info d-flex flex-column wm-100">
                <form class="ip rounded">
                    <div class="form-group">
                        <label for="content">Nội dung</label>
                        <input type="text" class="form-control text-muted" placeholder="Nhập ghi chú tại đây" onChange={this.handleChange.bind(this)} />
                    </div>
                    <div class="form-group">
                        <label for="time">Thời gian</label>
                        <input type="datetime-local" class="form-control text-muted" placeholder="thời gian" />
                    </div>
                </form>
                <div class="bt">
                    <button id="submitbtn" type="submit" class="form-control btn-color" onClick={this.handleAddTodo}>Thêm</button>
                </div>
            </div>
        );
    }
}