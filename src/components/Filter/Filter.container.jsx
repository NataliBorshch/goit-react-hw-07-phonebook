import { connect } from "react-redux";
import Filter from "./Filter";
import { contactsActions, contactsSelectors } from "../../redux/contacts";

const mapStateToProps = (state) => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  getFilter: (e) => dispatch(contactsActions.filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
