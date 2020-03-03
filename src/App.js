import React from "react";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";
import { connect } from "react-redux";
import { updateTitle, addItem } from "./actions/carActions";

const App = props => {
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} updateTitle={props.updateTitle} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={props.additionalFeatures}
          buyItem={props.addItem}
        />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

const mapDispatchToProps = {
  updateTitle,
  addItem
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
