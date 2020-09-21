import * as React from 'react';
import { Input, Icon,Button } from 'antd';
import {Link} from "react-router-dom";
import  './login.scss';
import axios from 'src/config/axios';

interface ISignUpState {
	account: string,
	password: string
}

class Login extends React.Component<any,ISignUpState> {
	constructor(props){
		super(props)
		this.state = {
			account: '',
			password: ''
		}
	}

	onChange = (key: keyof ISignUpState,value:string) => {
		const newState = {}
		newState[key] = value
		this.setState(newState)
	}

	submit = async () => {
		const { account,password} = this.state;
		try{
			await axios.post('sign_in/user',{
				account, // account: account
				password
			})
			this.props.history.push('/')
		}catch(e){
			throw new Error(e)
		}
	}


	public render() {
		const { account,password} = this.state;
		return (
			<div className="Login" id="Login">
				<Input
					placeholder="请输入你的用户名"
					prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
					value={account}
					onChange={(e => {this.onChange('account',e.target.value)})}
				/>
				<Input.Password value={password} placeholder="请输入密码" onChange={(e => {this.onChange('password',e.target.value)})}/>
				<Button type="primary" className="loginButton" onClick={this.submit}>登录</Button>
				<p>如果你没有有账号，请立即 <Link to="/signUp">注册</Link></p>
			</div>
		);
	}
}

export default Login;