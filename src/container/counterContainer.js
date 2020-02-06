import Counter from "../components/counterComponent";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  incrementAction: () => dispatch("INC"),
  decrementAction: () => dispatch("DEC")
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
