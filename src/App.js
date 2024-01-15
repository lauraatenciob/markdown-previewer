import "./App.css";
import Markdown from "react-markdown";
import { useState } from "react";
import remarkGfm from "remark-gfm";
import Toolbar from "./Toolbar";
import { initialText } from "./constans";

function App() {
  
  const [editorText, setEditorText] = useState(initialText);

  function handleChange(event) {
    setEditorText(event.target.value);
  }

  function handleEdit(text) {
    setEditorText(editorText.concat(" ", text))
  }

  return (
    <div id="App">
      <Toolbar onEdit={handleEdit}/>
      <div id="container">
        <div id="markdown">
          <textarea
            id="editor"
            value={editorText}
            type="text"
            onChange={handleChange}
          ></textarea>
        </div>

        <div id="previewer">
          <div id="preview">
            <Markdown remarkPlugins={[remarkGfm]}>{editorText}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
