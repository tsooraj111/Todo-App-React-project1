import React, { Component } from 'react'
import "./TodoApp.css"
export default class TodoApp extends Component {
state={
    input:" ",
    items: [],
    id:undefined
}

handleChange=(event)=>{
    this.setState({
        input:event.target.value
    })
    // console.log(event.target.value);
}

storeItems=(event)=>{
    event.preventDefault();
    const {input}=this.state;
    // const allItems = this.state.items;
    // allItems.push(input);
    const a=this.state.id;
    // const b=this.state.items.length;
    if(input!==" ")
    {
        this.setState({
            items: [...this.state.items, input],
            input:" "
        })
    }
    if(a!==undefined){
        const items1=this.state.items.slice(0,a);
        items1.push(this.state.input);
        const items2=this.state.items.slice(a+1)
         const allItems = items1.concat(items2)
        // console.log(items1);
        // console.log(items2);
        // console.log("===>",allItems);
        this.setState({
            items:allItems
        })
    }
}

deleteItem=index=>{
    const allItems = this.state.items;
    allItems.splice(index,1);
    this.setState({
        items:allItems
    //  items:this.state.items.filter((data,key)=>key !== index)
    })
}
editItem=(index)=>{
    const editTodo=this.state.items.find((data,key)=>key === index)
    // console.log(this.state.items.indexOf(editTodo));
    this.setState({
        input:editTodo,
        id:this.state.items.indexOf(editTodo)
    })
}

  render() {
    const {input,items}=this.state;//this is called destructing, when u no need to give every time this.state.input
    // console.log(items);
    return (
      <div className="todo-container">
        
        <form className='input-section' onSubmit={this.storeItems}>
        <h1>ToDo App</h1>
            <input type="text" name='input' value={input} onChange={this.handleChange} placeholder='Enter item'/>
        </form>
        <ul>
            {items.map((data,index)=>(
                <li key={index}>
                    {data}
                    <div className='icon'>
                    <i className="fa-solid fa-pen" title='Edit' onClick={()=>this.editItem(index)}></i>
                    <i className="fa-solid fa-trash" title='Delete' onClick={()=>this.deleteItem(index)}></i>
                    </div>
                </li>
            ))}
        </ul>
      </div>
    )
  }
}
