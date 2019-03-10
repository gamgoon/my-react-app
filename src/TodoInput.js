import React, { Component } from 'react';

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({
            inputValue: e.target.value,
        });
    }
    handleClick(e) {
        e.preventDefault(); // preventDefault로 a 태그의 기본 이벤트를 제거합니다.
        const inputValue = this.state.inputValue;
        this.props.addTodo(inputValue);
    }
    render() {
        return (
            <div className="TodoInput">
                <input placeholder="새로운 TODO를 입력해주세요" value={this.state.inputValue}
                 onChange={this.handleChange} />
                <button onClick={this.handleClick}>등록</button>
            </div>
        );
    }
}

export default TodoInput;