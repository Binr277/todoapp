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
                { id: 2, content: 'Todo 2' },
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
                <div className="wrapper d-md-flex align-items-center justify-content-between wm-100">
                    <AddTodo className="form-control text-muted" addTodo={this.addNewTodo} />
                    <div className="todo d-flex flex-column justify-content-between">
                        <div className="table-responsive">
                            <table className="table">
                                <tr className="title">
                                    <td>STT</td>
                                    <td>Nội dung</td>
                                    <td>Thời gian</td>
                                    <td></td>
                                </tr>
                                {this.state.listTodos && this.state.listTodos.length > 0 && this.state.listTodos.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            {this.state.editTodo.id === item.id && !isEmptyObj ?
                                                <td>
                                                    <input value={this.state.editTodo.content} onChange={(event) => this.handleOnChangeEditTodo(event)} />
                                                </td>
                                                :
                                                <td>
                                                    {item.content}
                                                </td>
                                            }
                                            <td>15/05/2022</td>
                                            <td>
                                                <button className="mr-2 form-control btn-color" onClick={() => this.handleEditTodo(item)}>
                                                    {this.state.editTodo.id === item.id && !isEmptyObj ?
                                                        'Lưu'
                                                        :
                                                        'Sửa'
                                                    }
                                                </button>
                                                <button type="submit" className="mr-2 form-control btn-color" onClick={() => this.handleDeleteTodo(item)}>Xóa</button>
                                            </td>
                                        </tr>
                                    );
                                })
                                }
                            </table>
                        </div>
                    </div>
                </div>

            </React.Fragment >
        );
    }
}