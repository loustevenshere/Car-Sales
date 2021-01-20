import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/carActions'

const AdditionalFeature = props => {
  // I return a new featue list in my state how do I get that to update
  // console.log(props.feature.id)
  const handleClick = () => {
    props.addFeature(props.feature.id)
    // console.log(props.feature.id)
    // console.log(props.car.features)
    // console.log(props.car)
  };
  // console.log(props.car);
  // console.log(props.car.features);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};


const mapStateToProps = (state) => {
  return {
    additionalFeatures: state.additionalFeatures,
    car: state.car
  }
}
export default connect(mapStateToProps, {addFeature})(AdditionalFeature);
