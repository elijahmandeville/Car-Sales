import React, { useReducer } from "react";
import { carReducer, initialState } from "./reducers/reducer";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";

const App = () => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
};

export default connect(mapStateToProps)(App);
