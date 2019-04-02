import React from 'react'

import Input from '../../components/Input'
import List from '../../components/List'

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            todos:[]
        }
    }
    render() {
        return (
            <div>
                Hello I do
                <Input value='input value' submitFn={this.submitFn.bind(this)}/>
                <List todos={this.state.todos} deleteFn={this.deleteFn.bind(this)}/>
            </div>
        )
    }
    submitFn(value){
        const id = Date.parse(new Date());//很短时间录入，这个毫秒数是一样的获取ID  this.state.todos.length;
        console.log('new:', id, value)
        this.setState({
            todos: this.state.todos.concat({
                id: id,
                text: value
            })
        })
        //console.log(this.state.todos)
    }
    
    componentWillMount(){
        //console.log('componentWillMount:', this.state.todos)
    }
    deleteFn(id) {
        let data = this.state.todos;
        // console.log(data)
        this.setState({
            todos: data.filter(item => {
                if (item.id !== id) {
                    console.log('file:', item);
                    return item

                }
                return null
            })
        })
       
        /*
        123
        5
        123
        5

        此时删除第3行123:
        123
        5
        5

        再次添加123
        123
        5
        5
        123

        删除最后一行123（即刚刚加入的123）***出现bug，变成只剩下2行
        123
        5
        */

    }
}

export default Todo