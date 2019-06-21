import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'hello',
      list: [],
    };
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button
            onClick={this.handleBtnClick.bind(this)}
          >提交
          </button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <TodoItem
                content={item}
                index={index}
                deleteItem={this.handleItemDelete.bind(this)}
              />;
              // return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    });
  }

  handleItemDelete(index) {
    const list = [...this.state.list];
    list.splice(index, 1);

    this.setState({
      list: list,
    });
  }
}

export default Todolist;