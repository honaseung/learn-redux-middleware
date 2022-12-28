const Counter = ({ number, increase, decrease }) => {
  return (
    <div>
      <h2>{number}</h2>
      <button onClick={increase}> + 1 </button>
      <button onClick={decrease}> - 1 </button>
    </div>
  );
};

export default Counter;
