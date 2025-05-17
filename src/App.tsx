import DraggableList from "./components/draggable_list/index";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <DraggableList />
      </DndProvider>
    </>
  );
}

export default App;
