// without using hooks
// import { connect } from "react-redux";

// function formatCurrency(value) {
//     return new Intl.NumberFormat("en", {
//         style: "currency",
//         currency: "USD",
//     }).format(value);
// }

// function BalanceDisplay({ balance }) {
//     return <div className="balance">{formatCurrency(balance)}</div>
// }

// function mapStateTopProps(state) {
//     return { balance: state.account.balance };
// }

// export default connect(mapStateTopProps)(BalanceDisplay)

// In this modern version:

import { useSelector } from "react-redux";
function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const balance = useSelector((state) => state.account.balance);
  return <div className="balance">{formatCurrency(balance)}</div>;
}
export default BalanceDisplay;

// The useSelector hook is used to access the balance from the Redux store.
// The component is defined as a function component.
// There is no need for mapStateToProps or the connect function from React-Redux.
