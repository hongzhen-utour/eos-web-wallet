import AddEOSAccountForm from "./AddEOSAccountForm";
import { connect } from "react-redux";
import { addEOSAccount } from "../../thunks/eos-account";

/* eslint-disable camelcase */
const mapDispatchToProps = dispatch => ({
  callAPI(values) {
    return dispatch(
      addEOSAccount(values.account_name, values.owner_key, values.active_key)
    );
  }
});

const ConnectedAddEOSAccountForm = connect(null, mapDispatchToProps)(
  AddEOSAccountForm
);

export default ConnectedAddEOSAccountForm;
