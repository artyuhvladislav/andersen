import React from 'react'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }  

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    
    render() {
        return (
            <>
                <input ref={this.inputRef} type="text" onChange={(e) => this.props.inputHandler(e.target.value)} />
                <button disabled={this.props.isDisabled}>submit</button>
                <button onClick={() => this.inputRef.current.focus()}>focus</button>
            </>
        )
    }
    
}

export default Input
