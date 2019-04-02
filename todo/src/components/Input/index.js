import React from 'react'

class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }
    render(){
        return (
            <div>
                <input 
                    style={{width: '95%', height: '30px', fontSize: '25px'}}
                    value={this.state.value}
                    onChange={this.changeHandler.bind(this)}
                    onKeyUp={this.keyUpHandler.bind(this)}
                />
                
            </div>
        )
    }

    changeHandler(e){
        this.setState({value: e.target.value})
    }

    keyUpHandler(e){
        const value = this.state.value;
        if (e.keyCode === 13 && value.trim()){
            //提交数据并清空数据
            this.props.submitFn(value)
            this.setState({value: ''})
        }
    }
}

export default Input