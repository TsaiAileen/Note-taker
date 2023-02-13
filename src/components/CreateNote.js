import LinearProgress from "@mui/material/LinearProgress";

function CreateNote({ textHandler, inputText, saveHandler }) {
  const charlimit = 100;
  const charLeft = charlimit - inputText.length;

  return (
    <div className="note">
      <textarea
        cols="10"
        rows="5"
        value={inputText}
        placeholder="Type..."
        maxLength="100"
        onChange={textHandler}
      />
      <div className="note__footer">
        <span className="label">{charLeft} left</span>
        <button className="note__save" onClick={saveHandler}>
          Save
        </button>
      </div>
      <LinearProgress
        className="char__progress"
        variant="determinate"
        value={charLeft}
      />
    </div>
  );
}

export default CreateNote;
