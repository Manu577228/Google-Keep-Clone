import { useState } from "react";
import Header from "./components/Header";
import NoteTakingArea from "./components/NoteTakingArea";
import Notes from "./components/Notes";
import CountNotes from "./components/CountNotes";
import Footer from "./components/Footer";

function App(props) {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  };

  const deleteNotes = (id) => {
    setNotes((prev) => {
      return [...prev.filter((note, i) => i !== id)];
    });
  };

  return (
    <div className="App">
      <Header />
      <CountNotes
        count={
          notes.length === 0
            ? "Add your note!"
            : `Showing ${notes.length} note from Database!`
        }
      />
      <NoteTakingArea onAdd={addNote} />
      {notes.map((note, i) => (
        <Notes
          key={i}
          id={i}
          title={note.title}
          content={note.content}
          onDelete={deleteNotes}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
