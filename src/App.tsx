import DraggableList from "./components/draggable_list/index";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DataGrid from "./components/DataGrid/index";

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        {/* <DraggableList /> */}
        <DataGrid />
      </DndProvider>
    </>
  );
}

export default App;
