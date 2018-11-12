import React from 'react';
import Overviews from './components/Overviews.jsx';
import { hydrate } from "react-dom";

const initialState = window.__initialState__;
delete window.__initialState__;

hydrate(<Overviews initialState={initialState} />, document.getElementById('product-overviews-app'));