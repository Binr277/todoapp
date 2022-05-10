import React from "react"
import FormInput from "../components/FormInput";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss'
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            errorMessage: '',
            isSubmitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getName = (childData) => {
        this.setState({ name: childData })
    }
    getPassword = (childData) => {
        this.setState({ password: childData })
    }
    validate() {
        let name = this.state.name;
        let password = this.state.password;
        const database = [
            {
                name: "user1",
                password: "pass1"
            },
            {
                name: "user2",
                password: "pass2"
            }
        ];
        const userData = database.find((user) => user.name === name);
        if (name === '') {
            this.setState({ errorMessage: 'Vui lòng nhập tên đăng nhập' })
        }
        else if (userData) {
            if (password === '') {
                this.setState({ errorMessage: 'Vui lòng nhập mật khẩu' })
            }
            else if (userData.password !== password) {
                this.setState({ errorMessage: 'Mật khẩu không đúng' })
            }
            else {
                this.setState({ isSubmitted: true });
                alert('Thành công');
            }
        }
        else {
            this.setState({ errorMessage: 'Tài khoản không tồn tại' })
        }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.validate();
    }

    render() {
        return (
            <React.Fragment>
                <h3 class="mt-4 ml-5 heading">TODOnow</h3>
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="d-flex flex-column col-lg-4 col-md-5 col-7">
                            <div class="mt-5">
                                <h3 class="text-center mb-4 heading">ĐĂNG NHẬP</h3>
                                <form onSubmit={this.handleSubmit}>
                                    <FormInput id="name" class="form-control text-muted" description="Tên Đăng Nhập" placeholder="Không chứa ký tự đặc biệt" getValue={this.getName} />
                                    <FormInput id="password" class="form-control text-muted" description="Mật Khẩu" placeholder="Tối thiểu 6 ký tự" getValue={this.getPassword} />
                                    <div class="text-danger my-3">{this.state.errorMessage}</div>
                                    <div class=" row justify-content-center my-3 px-3">
                                        <button id="submitbtn" type="submit" class="btn-block btn-color">Đăng nhập</button>
                                    </div>
                                    <div class="row justify-content-center my-2">
                                        <a href="#"><small class="text-muted">Quên mật khẩu?</small></a>
                                    </div>
                                </form>
                                <div class="bottom text-center mb-5">
                                    <p class="sm-text mx-auto mb-3">Bạn chưa có tài khoản?<a class="btn btn-white ml-2" href="/register">Tham gia TODOnow ngay!</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}