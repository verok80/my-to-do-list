import  {Component} from 'react';
import check from './check.jpg';

export class MyToDoList extends Component {
    state = {
      userInput: '',
      toDoList: []
    }

    onChangeEvent(e){
       this.setState({userInput: e});
    }

    addItem(input){
        if (input === ''){
            alert ("Please write ssomething!")
        }
        else{
        let listArray = this.state.toDoList;
        listArray.push(input);
        this.setState({toDoList: listArray, userInput: ''})
        }
    }
    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({ toDoList: listArray})
    }
    crossedWord(e) {
        const print = e.target;
        print.classList.toggle('crossed')
    }
    onFormSubmit(e){
        e.preventDefault()
    }

    render(){
        return(
            <form onSubmit = {this.onFormSubmit}>
            <div>
                <div  className='container'>
                <input  type="text" placeholder="What I want to do?" 
                onChange = {(e) =>{this.onChangeEvent(e.target.value)}} value = {this.state.userInput}/>
                </div>
                <div  className='container'>
                    <button  onClick = {() => this.addItem(this.state.userInput)}  className='btn add'>Add</button>
                </div>
                <ul>
                    {this.state.toDoList.map((item, id) =>(<li onClick =  {this.crossedWord}    key = { id }>
                      <img src= { check } alt=" check mark" width="20px"/>  
                        { item }</li>))}
                </ul>
                <div  className='container'>
                <button onClick = {() => this.deleteItem()}  className='btn delete'>Delete</button>
                </div>
                </div>
                </form>
        )
    }
}
    