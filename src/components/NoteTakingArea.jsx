import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

function NoteTakingArea({ onAdd }) {
  const [expanded, setexpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleExpanded = () => {
    setexpanded(true);
  };

  const submitButton = (e) => {
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form>
        {expanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            name="content"
            onClick={handleExpanded}
            placeholder="Take a note..."
            onChange={handleChange}
            rows={expanded ? 3 : 1}
          ></textarea>
        </p>
        <button onClick={submitButton}>
          <IoIosAdd size={35} />
        </button>
      </form>
    </div>
  );
}

export default NoteTakingArea;
