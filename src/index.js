import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState} from 'draft-js';

class MonospaceEditor extends React.Component {
 constructor(props) {
   super(props);
   this.state = {editorState: EditorState.createEmpty()};

   this.focus = () => this.refs.editor.focus();
   this.onChange = (editorState) => this.setState({editorState});
   this.logState = () => console.log(this.state.editorState.toJS());

   this.handleKeyCommand = (command) => this._handleKeyCommand(command);
 }

 _handleKeyCommand(command) {
   console.log(command);
 }

 render() {
   return (
     <div style={styles.root}>
       <div style={styles.editor} onClick={this.focus}>
         <Editor
           editorState={this.state.editorState}
           onChange={this.onChange}
           placeholder="Code..."
           ref="editor"
         />
       </div>
     </div>
   );
 }
}

const styles = {
  root: {
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    padding: 20,
    width: 600,
  },
  editor: {
    border: '1px solid #ccc',
    cursor: 'text',
    minHeight: 80,
    padding: 10,
  },
  button: {
    marginTop: 10,
    textAlign: 'center',
  },
};

ReactDOM.render(
 <div className='big-cell'>
  <div className='cell-input'>
    <MonospaceEditor />
  </div>
  <p className='cell-output'>The Output Area</p>
 </div>,
 document.getElementById('target')
);
