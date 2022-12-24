import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(event, info) {
        this.setState({ hasError:true });
    }

    render() {
        if (this.state.hasError) {
            return <h1 style={{textShadow:'none', fontFamily:'Arial', textShadow:'0 0 10px black'}}>Opps. Somethig is wrong!</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;