import { Component } from "react";
import Chekin from './chekin.png';



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

deleteItem (){
    let listArray=this.state.toDoList;
    listArray = [];
    this.setState({toDoList: listArray})
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
        <div className="bigBox">
            <input type="text" placeholder="What do you want to do?"
            onChange = {(e) => {this.onChangeEvent(e.target.value)}}
            value ={this.state.userInput}/>
        </div>
        
        <div>
        <button className="add btn" onClick = {() => this.addItem(this.state.userInput)}>Add</button>
        </div>

        <div className="bottom">
            <ul className="spisok">
                {this.state.toDoList.map((item, index) => (
                <li className="spisok" onClick={this.crossedWord} key = {index}>
                    <img src={Chekin} alt="chekin" width="10px"/>
                    {item}</li>
                ))}
            </ul>
        </div>

        <div>
            <button className=" delete btn" onClick = {() => this.deleteItem()}>Delete</button>
        </div>
        </form>
    </div>
        )
    }
}