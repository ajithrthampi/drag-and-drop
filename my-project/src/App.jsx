import Documents from "./pages/documents/Documents"
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';




function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Documents />
      </DndProvider>
    </>
  )
}

export default App
