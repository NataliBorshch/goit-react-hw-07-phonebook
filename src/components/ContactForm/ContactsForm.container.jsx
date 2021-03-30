import { connect } from "react-redux";
import ContactsForm from "./ContactsForm";
import { contactsSelectors, contactsOperations } from "../../redux/contacts";

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (obj) => dispatch(contactsOperations.addContact(obj)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
