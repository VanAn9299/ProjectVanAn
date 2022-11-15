import React from 'react'
import { connect } from "react-redux/es/exports";
import City from './City/City';
import './Search.css'
function Search(props) {
  const InputSearch = (event) => {
    if (event.key === 'Enter') {
      props.ActionCallProductSaga(event.target.value)
    }
  }
  return (
    <div className='BoxSearch'>
      <input className="inputSearch" onKeyUp={(event) => { InputSearch(event) }} placeholder="...Search"/>
      <p className='note'>Enter for search</p>
      <City />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    WeatherReducer: state.Reducer,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    ProductFunc: (val) => {
      dispatch({ type: "SetSearchDataPro", payload: val });
    },
    ActionCallProductSaga: (key) => {
      dispatch({ type: "getSearchDataSaga", payload: key })
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);