
import React from 'react';
import FallbackUI from '../FallbackUI/FallbackUI';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorInfo: "Testing the information" };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    return { errorInfo: errorInfo };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <FallbackUI errorMsg={this.errorInfo} />;
    }
    return this.props.children;
  }
}