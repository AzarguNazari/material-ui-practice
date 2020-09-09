import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import SimpleList from "./components/list/SimpleList";
import NestedList from "./components/list/NestedList";
import FolderList from "./components/list/FolderList";
import InteractiveList from "./components/list/InteractiveList";
import SelectedItemList from "./components/list/SelectedItemList";
import AlignItemsList from "./components/list/AlignItemsList";
import SimpleModal from "./components/modal/SimpleModal";
import TransitionsModal from "./components/modal/TransitionsModal";
import SpringModal from "./components/modal/SpringModal";
import ContainedButtons from "./components/button/ContainedButtons";
import GroupButton from "./components/button/GrouptButton";
import Checkboxes from "./components/form/Checkboxes";
import DatePicker from "./components/date/DatePicker";
import RadioButtonsGroup from "./components/form/RadioButtonsGroup";

function App() {
  return (
    <div className="App">
        <Container maxWidth="sm">
            {/*<SimpleList />*/}
            {/*<NestedList />*/}
            {/*<FolderList />*/}
            {/*<InteractiveList />*/}
            {/*<SelectedItemList />*/}
            {/*<AlignItemsList />*/}
            {/*<SimpleModal />*/}
            {/*<TransitionsModal />*/}
            {/*<SpringModal />*/}
            {/*<ContainedButtons />*/}
            {/*<GroupButton />*/}
            {/*<Checkboxes />*/}
            {/*<DatePicker />*/}
            <RadioButtonsGroup />
        </Container>
    </div>
  );
}

export default App;
