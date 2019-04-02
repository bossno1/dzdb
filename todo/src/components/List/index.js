import React from 'react'

class List extends React.Component {

    render() {
        const data = this.props.todos
        return(
            <div>
                <ul>
                    { data.map((item, index) => {
                        return <li key={index} onClick={this.clickHandler.bind(this,item.id)}>{item.text}</li>
                    })}
                </ul>
            </div>
        )
    }
    clickHandler(id){
        this.props.deleteFn(id)
    }
}
export default List