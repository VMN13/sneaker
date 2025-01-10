function ViewSwitcherButton ({ name, currentViewName, setViewName }) {
  return (
    <button onClick={() => setViewName(name)>{name}}>
    </button>
  );
};

export default ViewSwitcherButton;