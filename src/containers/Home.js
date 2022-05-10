import React from "react";
import AddTodo from "../components/AddTodo";
import './Login.scss'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listTodos: [
                { id: 1, content: 'Todo 1' },
                { id: 2, content: 'Todo 2' }
            ],
            editTodo: {}
        };

    }

    addNewTodo = (todo) => {
        console.log(this.state.listTodos);
        if (todo) {
            let list = [...this.state.listTodos];
            let newTodo = {
                id: list.length + 1,
                content: todo
            };
            list.push(newTodo);
            this.setState({ listTodos: list });
            toast.success('🥳 Thêm thành công!');
        }
        else {
            toast.error('Chưa nhập ghi chú!');
        }
    }

    handleEditTodo = (todo) => {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].content = editTodo.content;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success('🥳 Cập nhật thành công!');
            return;
        }

        //edit
        this.setState({ editTodo: todo });

    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.content = event.target.value;
        this.setState({ editTodo: editTodoCopy });
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({ listTodos: currentTodos });
        toast.success('🥳 Xóa thành công!');
    }

    render() {
        let isEmptyObj = Object.keys(this.state.editTodo).length === 0;
        return (
            <React.Fragment>
                <h3 className="mt-4 ml-5 heading pull-left">TODOnow</h3>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="d-flex flex-column col-lg-4 col-md-5 col-7">
                            <div className="mt-5">
                                <AddTodo className="form-control text-muted" addTodo={this.addNewTodo} />
                                <div className="bottom text-center mb-5">
                                    {this.state.listTodos && this.state.listTodos.length > 0 && this.state.listTodos.map((item, index) => {
                                        return (
                                            <div className="todo-child" key={item.id}>

                                                {this.state.editTodo.id === item.id && !isEmptyObj ?
                                                    <span>
                                                        {index + 1} - <input value={this.state.editTodo.content} onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.content}
                                                    </span>
                                                }

                                                <button type="submit" className="btn-block btn-color" onClick={() => this.handleEditTodo(item)}>
                                                    {this.state.editTodo.id === item.id && !isEmptyObj ?
                                                        'Save'
                                                        :
                                                        'Edit'
                                                    }
                                                </button>
                                                <button type="submit" className="btn-block btn-color" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                            </div>
                                        );
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}