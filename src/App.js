import React, { Component } from "react";
import { connect } from "react-redux";
import ContactsForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import styles from "./App.module.css";
import operation from "./redux/contacts/contacts-operations";

class App extends Component {
  componentDidMount = () => {
    this.props.getContacts();
  };
  render() {
    return (
      <section>
        <h2 className={styles.title}>Phonebook</h2>
        <div className={styles.box}>
          <ContactsForm />

          <div className={styles.contactsBox}>
            <h3>Contacts</h3>
            <Filter />
            <ContactList />
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getContacts: () => dispatch(operation.getContacts()),
});

export default connect(null, mapDispatchToProps)(App);
