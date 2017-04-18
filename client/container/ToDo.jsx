import React from 'react';

class ToDo extends React.Component {

    constructor() {
        super();

        this.state = {
            items : []
        }

        this.addItem = this.addItem.bind(this);

    }

    addItem(e) {
        var newData = document.getElementById('textId').value,
            itemArr = this.state.items;
        itemArr.push({key: new Date(), text: newData});
        this.setState({items: itemArr});
        document.getElementById('textId').value = '';
        e.preventDefault();
    }

    render() {
        return (
            <div className="todoListMain">
                <ToDoItem addItem={this.addItem}/>
                <table>
                    <tbody>
                        {this.state.items.map((textObj, i) => <ToDoList key = {i} data = {textObj} />)}
                    </tbody>
                </table>
            </div>
        );
    }
}

class ToDoItem extends React.Component {
    render() {
        return (
            <div className="header">
                <form onSubmit={this.props.addItem}>
                    <input id="textId" placeholder="enter task">
                    </input>
                    <button type="submit">add</button>
                </form>
            </div>
        )
    }
}

class ToDoList extends React.Component {
    render() {
        return (
            <tr>
                <td> {this.props.data.text} </td>
            </tr>
        )
    }
}


export default ToDo;
