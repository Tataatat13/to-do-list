import { Component } from "react";
import IconDelete from "./icons8-delete.svg";

export class ToDoList extends Component {
    state = {
            userInput:'',
            toDoList:[],
            
    }

    onChangeEvent(e)  {
        this.setState({userInput: e})
    }

addItem (input) {
    if (input === '') { alert ('Please enter the item')}
    else {
    let listArray= this.state.toDoList;
    listArray.push(input);
    this.setState({toDoList: listArray, userInput:''})
}}
deleteItemByIndex(index) {
    let listArray = this.state.toDoList;
    listArray.splice(index, 1); 
    this.setState({ toDoList: listArray });
}
crossedWord = (e) => {
    const li = e.target;
    li.classList.toggle('crossed');
}
onFormSubmit (e){
    e.preventDefault();
}

    render(){
        return(
    <div>
    <form onSubmit={this.onFormSubmit}>
        <div className="inpbx">
            <input type="text"
            onChange = {(e) => {this.onChangeEvent(e.target.value)}}
            value ={this.state.userInput}/>

            <button className="add btn" onClick = {() => this.addItem(this.state.userInput)}>Add</button>
        
        </div>
        
        <div className="bottom">
            <ul className="spisok">
                {this.state.toDoList.map((item, index) => (
                <li className="spisok item-background" onClick={this.crossedWord} key = {index}>
                    {item}
                    <button className="delete-item btn"
                            onClick={() => this.deleteItemByIndex(index)}
                            >
                            <img src={IconDelete} alt="icons"/>
                            </button>
                </li>
                ))}
            </ul>
        </div>
        </form>
    </div>
        )
    }
}
