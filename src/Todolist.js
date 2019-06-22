import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'hello',
      list: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button
            onClick={this.handleBtnClick}
          >提交
          </button>
        </div>
        <ul>
          {this.getItem()}
        </ul>
      </Fragment>
    );
  }

  getItem() {
    return this.state.list.map((item, index) => {
      return <TodoItem
        content={item}
        key = {index}
        index={index}
        deleteItem={this.handleItemDelete}
      />;
    });
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value,
    }));
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: '',
    }));
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list};
    });
  }
}

export default Todolist;