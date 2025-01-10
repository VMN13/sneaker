import React, { useState, handleClick } from 'react';
import { Link } from "react-router-dom"
import ViewSwitcherButton from './ViewSwitcherButton';
import View from './View';
export default function ViewSwitcher () {
  const [viewName, setViewName] = React.useState("foo");

  return (
    <>
      <ViewSwitcherButton name="foo" currentViewName={viewName} setViewName={setViewName} />
      <ViewSwitcherButton name="bar" currentViewName={viewName} setViewName={setViewName} />
      <ViewSwitcherButton name="baz" currentViewName={viewName} setViewName={setViewName} />

      <View name="foo" currentViewName={viewName}>
       
    <Link to='/sneakers'>Stasik</Link>
      </View>

      <View name="bar" currentViewName={viewName}>
  
      </View>
      <View name="baz" currentViewName={viewName}>
  
      </View>
    </>
  );
}


  