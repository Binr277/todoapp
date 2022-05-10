import React from "react"
import FormInput from "../components/FormInput";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.scss'
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            confirm: '',
            errorMessage: '',
            isSubmitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getName = (childData) => {
        this.setState({ name: childData });
    }

    getEmail = (childData) => {
        this.setState({ email: childData });
    }

    getPassword = (childData) => {
        this.setState({ password: childData });
    }

    getConfirm = (childData) => {
        this.setState({ confirm: childData });
    }

    validate() {
        let name = this.state.name;
        let email = this.state.email;
        let password = this.state.password;
        let confirm = this.state.confirm;

        var letters = /^[A-Za-z0-9]+$/;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (name === '') {
            this.setState({ errorMessage: 'Vui lòng nhập tên đăng nhập' });
        }
        else if (!name.match(letters)) {
            this.setState({ errorMessage: 'Tên đăng nhập chứa ký tự không hợp lệ' });
        }
        else if (email === '') {
            this.setState({ errorMessage: 'Vui lòng nhập email' });
        }
        else if (!email.match(validRegex)) {
            this.setState({ errorMessage: 'Email không hợp lệ' });
        }
        else if (password === '') {
            this.setState({ errorMessage: 'Vui lòng nhập mật khẩu' });
        }
        else if (password.length < 6) {
            this.setState({ errorMessage: 'Mật khẩu phải trên 6 ký tự' });
        }
        else if (confirm === '') {
            this.setState({ errorMessage: 'Vui lòng xác nhận mật khẩu' });
        }
        else if (confirm !== password) {
            this.setState({ errorMessage: 'Mật khẩu không trùng khớp' });
        }
        else {
            //this.setState({ isSubmitted: true });
            alert('Thành công');
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
                                <h3 class="text-center mb-4 heading">ĐĂNG KÝ</h3>
                                <form onSubmit={this.handleSubmit}>
                                    <FormInput class="form-control text-muted" description="Tên Đăng Nhập" placeholder="Không chứa ký tự đặc biệt" getValue={this.getName} />
                                    <FormInput class="form-control text-muted" description="Email" placeholder="Nhập email cá nhân" getValue={this.getEmail} />
                                    <FormInput class="form-control text-muted" description="Mật Khẩu" placeholder="Tổi thiểu 6 kí tự" getValue={this.getPassword} />
                                    <FormInput class="form-control text-muted" description="Xác nhận Mật Khẩu" placeholder="Nhập mật khẩu ở trên" getValue={this.getConfirm} />
                                    <div class="text-danger my-3">{this.state.errorMessage}</div>
                                    <div class=" row justify-content-center my-3 px-3">
                                        <button id="submitbtn" type="submit" class="btn-block btn-color" >Đăng kí</button>
                                    </div>
                                </form>
                                <div class="bottom text-center mb-5">
                                    <p href="#" class="sm-text mx-auto mb-3">Bạn đã có tài khoản?<a class="btn btn-white ml-2" href="/">Đăng nhập ngay!</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}