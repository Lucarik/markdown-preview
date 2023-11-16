import './App.css';
import { useState } from 'react';

/**
 * @function Markdown Lets the user enter markdown text into a textarea,
 * displays parsed text in preview area
 * 
 * @param {String} text The initial markdown string
 * @param {String} content Holds the markdown string
 * 
 * @method setContent Sets the value of the markdown string
 */
function Markdown() {
  let text = `
# h1

## h2

[link](#)

\` inline \`

\`\`\`
block
\`\`\`

- li

> blockquote

![image](image.jpg)

**bold**
`;
  const [content, setContent] = useState(text);
 /**
 * @function window.onload On window load send parsed initial markdown 
 * text to preview element
 */
  window.onload = function() {
    
    document.getElementById('preview').innerHTML = marked.parse(text); // eslint-disable-line
  }
  /**
  * @function handleChange On change in text area sends parsed markdown
  * text to preview element
  * 
  * @param {Element} event Current target element
  */
  function handleChange(event) {
    setContent(event.target.value);
    document.getElementById("preview").innerHTML = marked.parse(event.target.value); // eslint-disable-line
  };
  
  return (
    <div id="wrap-box">
      <textarea value={content} onChange={handleChange} id="editor" rows="3" cols="40" ></textarea>
      <div id="preview">
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Markdown />

      </header>
    </div>
  );
}

export default App;
