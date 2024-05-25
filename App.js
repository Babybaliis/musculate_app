import React from 'react';
import Navigates from "./src/navigates/Navigates";
import {Provider} from "react-redux";
import {store} from "./src/store/store";


const App = () => {
    return (
        <Provider store={store}>
            <Navigates/>
        </Provider>

    );
};

export default App;
