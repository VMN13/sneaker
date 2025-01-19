import React, { useState, handleClick } from 'react';
import { Link } from "react-router-dom"
import ViewSwitcherButton from './ViewSwitcherButton';
import View from './View';
import App from '../App.css';

export default function ViewSwitcher () {
  const [viewName, setViewName] = React.useState("foo");

  return (
    <>
      <ViewSwitcherButton id="ViewSwitcherButton"
        className="ViewSwitcherButton"
        name="foo" 
        currentViewName={viewName} 
        setViewName={setViewName}
        
        />
      <ViewSwitcherButton 
        className="ViewSwitcherButton"
        name="bar" 
        currentViewName={viewName} 
        setViewName={setViewName}
        style={{
          display: viewName === "bar" ? "block" : "none", "background-color": "white",
        
        }}
        />
      <ViewSwitcherButton 
        className="ViewSwitcherButton"
        name="baz" 
        currentViewName={viewName} 
        setViewName={setViewName}
        style={{
          display: viewName === "baz" ? "block" : "none", "background-color": "white",
        
        }}
        />
      <View 
        className="View"
        name="foo" 
        currentViewName={viewName}
        style={{
          display: viewName === "foo" ? "block" : "none",}}
        > 
      <Link to='/sneakers'>
        Stasik
      </Link>
      </View>
      <View 
        name="bar" 
        currentViewName={viewName}>
      </View>
      <View 
        name="baz" 
        currentViewName={viewName}>
      </View>
    </>
  );
};
