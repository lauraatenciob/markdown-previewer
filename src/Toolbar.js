export default function Toolbar({ onEdit }) {
  return (
    <div id="toolbar">
      <button className="toolbarButton" onClick={() => onEdit("**bold**")}>
        <i class="fa-solid fa-bold"></i>
      </button>
      <button className="toolbarButton" onClick={() => onEdit("_italic_")}>
        <i class="fa-solid fa-italic"></i>
      </button>
      <button
        className="toolbarButton"
        onClick={() => onEdit("~~strikethrough~~")}
      >
        <i class="fa-solid fa-strikethrough"></i>
      </button>
      <button className="toolbarButton" onClick={() => onEdit("\n> Block Quote")}>
        <i class="fa-solid fa-quote-right"></i>
      </button>
      <button className="toolbarButton" onClick={() => onEdit("\n- list item")}>
        <i class="fa-solid fa-list-ul"></i>
      </button>
      <button className="toolbarButton" onClick={() => onEdit("`<code>`")}>
        <i class="fa-solid fa-code"></i>
      </button>
      <button
        className="toolbarButton"
        onClick={() => onEdit("[link](https://www.link.ex)")}
      >
        <i class="fa-solid fa-link"></i>
      </button>
      <button
        className="toolbarButton"
        onClick={() => onEdit("![image description](https://imagelink.svg)")}
      >
        <i class="fa-solid fa-image"></i>
      </button>
    </div>
  );
}
