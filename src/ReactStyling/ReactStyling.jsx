import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './ReactStyling.styles';

class ReactStyling extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('ReactStyling will mount');
  }

  componentDidMount = () => {
    console.log('ReactStyling mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ReactStyling will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ReactStyling will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('ReactStyling did update');
  }

  componentWillUnmount = () => {
    console.log('ReactStyling will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ReactStylingWrapper">
        Test content
      </div>
    );
  }
}

ReactStyling.propTypes = {
  // bla: PropTypes.string,
};

ReactStyling.defaultProps = {
  // bla: 'test',
};

export default ReactStyling;
