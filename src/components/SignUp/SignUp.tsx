import * as React from 'react';
import { Input, Icon} from 'antd';
import  './signUp.scss';

interface ISignUpState {
	account: string,
	password: string,
	passwordConformation: string
}

class SignUp extends React.Component<any,ISignUpState> {
	constructor(props){
		super(props)
		this.state = {
			account: '',
			password: '',
			passwordConformation: ''
		}
	}

	onChangeAccount = (e) => {
		this.setState({ account: e.target.value });
	}

	public render() {
		const { account } = this.state;
		return (
			<div className="SignUp" id="SignUp">
				<Input
					placeholder="请输入你的用户名"
					prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
					value={account}
					onChange={this.onChangeAccount}
				/>
			</div>
		);
	}
}

export default SignUp;