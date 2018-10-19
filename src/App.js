import React, { Component } from 'react';
import logo from './logo.svg';
import './markdown.scss';

const marked = require("marked");

marked.setOptions({
  breaks: true,
});

class MarkdownViewer extends Component {
constructor(props) {
  super(props);
  this.state = {
    markdown: placeholder
  }
  this.handleChange = this.handleChange.bind(this);
}

handleChange(event) {
  this.setState({
    markdown: event.target.value
  })
}
 
  render() {
    return (
      <div className="MarkdownPreviewer">
        <header className="Header">Editor</header>
          <div className="Editor-div">
            <textarea id="editor" value={this.state.markdown} onChange={this.handleChange}>
              I am a text editor!
            </textarea>
          </div>
        <header className="Header">Preview</header>
          <div className="Preview-div">
            <div id="preview" dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}} />
          </div>
      </div>
    );
  }
}

const placeholder = 
`# This is a header.
## This is a sub-header.
This is some __bold__ text.
[This is a link to an awesome site.](https://stefanhk31.github.io/)
This is some code: \`function()\`
This is a code block: 
\`\`\`python
str = "Hi, I'm Python!"
print str
\`\`\`
1. Here is a list.
2. It has multiple items.
> This is a block quote,
it continues on to the next line.
I made this with React. ![React Logo w/ Text](https://goo.gl/Umyytc)

` 

export default MarkdownViewer;
