import { connect } from "react-redux";
import Counter from "../components/Counter";
import { increase_async, decrease_async } from "../modules/counter";

const CounterContainer = ({ number, increase_async, decrease_async }) => {
  return (
    <Counter
      number={number}
      increase={increase_async}
      decrease={decrease_async}
    />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increase_async,
    decrease_async,
  }
)(CounterContainer);
