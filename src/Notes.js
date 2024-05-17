import { Component } from "react";



export class Notes extends Component {
    state = {
            firstInput: "",
            notesList: []
    }

    changeInput (e) {
        this.setState({firstInput: e})
    }
    
    addNotes (input) {
        if (input === '') { alert ('Please enter the item')}
        else {
         let noteArray = this.state.notesList;
         noteArray.push(input);
         this.setState({notesList: noteArray, firstInput:''})       
    }}

    crossedNote = (e) => {
        const li = e.target;
        li.classList.toggle('crossed')
    }
    deleteNotes (){
        let noteArray = this.state.notesList;
        noteArray.length = 0;
        this.setState({notesList: noteArray})
    }
    onNoteSubmit (e){
        e.preventDefault();
    }

    render () {
        return (
            <form onSubmit = {this.onNoteSubmit}>
                <div >
            <input className="noteList" type="text" onChange={(e) => {this.changeInput(e.target.value)}}
            value = {this.state.firstInput}/>
           
            <button className="plus btn" onClick={ () => this.addNotes(this.state.firstInput)}>+</button>
            
            <ul className="notes" >
                {this.state.notesList.map((item, index) => (
                <li onClick={this.crossedNote} key={index}>{item}</li>         
            ))}
            </ul>
                </div>
                    <div className="delNot">
                    <button className="clear btn" onClick = {() => this.deleteNotes()}>Clear</button>
                    </div>
            </form>
        )
    }
}