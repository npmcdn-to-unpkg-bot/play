import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from 'draft-js';

const MyEditor = React.createClass({
  onChange(editorState) {
    this.setState({editorState});
  },
  render() {
    const {editorState} = this.state;
    return <Editor editorState={editorState} onChange={this.onChange} />;
  }
});

ReactDOM.render(
  <MyEditor />,
  document.getElementById('container')
);
