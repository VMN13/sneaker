function View ({children, name, currentViewName}) {
  if (name === currentViewName) {
    return <>{children}</>;
  } else {
    return null;
  }
}

export default View;
