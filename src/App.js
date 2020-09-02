import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import SimpleList from "./components/list/SimpleList";
import NestedList from "./components/list/NestedList";
import FolderList from "./components/list/FolderList";
import InteractiveList from "./components/list/InteractiveList";
import SelectedItemList from "./components/list/SelectedItemList";
import AlignItemsList from "./components/list/AlignItemsList";

function App() {
  return (
    <div className="App">
        <Container maxWidth="sm">
            <SimpleList />
            <NestedList />
            <FolderList />
            <InteractiveList />
            <SelectedItemList />
            <AlignItemsList />
        </Container>
    </div>
  );
}

export default App;
