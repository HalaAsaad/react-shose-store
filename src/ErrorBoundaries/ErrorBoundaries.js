import React from 'react';

class ErrorBoundary extends React.Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
        console.log(error)
        console.log(errorInfo)
        this.setState({
            hasError: true
        })
    }
  
    render() {
        if (this.state.hasError) {
        return <h1>Something went wrong.</h1>;
        } else {
            return this.props.children
        }
    }
  }
export default ErrorBoundary;  
