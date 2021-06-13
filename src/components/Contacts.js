import { Component } from "react";
import { v4 as uuid } from "uuid";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactsList from "./ContactList/ContactList";
import styles from "./Contacts.module.css";


class Todos extends Component {
  state = {
    items: [],
    filter: "",
  };
  handleDelete = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (term) => {
    if (!term) {
      alert("Поле не может быть пустым!");
      return;
    }

    const isDuplicate = this.state.items.some(
      (item) => item.name === term.name
    );
    if (isDuplicate) {
      alert("Контакт: " + term.name + " уже существует ");
      return;
    }

    const newTodo = {
      id: uuid(),
      name: term.name,
      number: term.number,
    };

    this.setState((prevState) => {
      const newItems = [newTodo, ...prevState.items];
      return { items: newItems };
    });
  };

  render() {
    const { items, filter } = this.state;
    const formattedFilter = filter.toLowerCase().trim();
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(formattedFilter)
    );

    return (
      <div className="container">
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />
        <h2 className={styles.titleContact}>Contacts</h2>
        <div className={styles.block}>
          <Filter filter={filter} handleChange={this.handleChange} />
          <ContactsList
            items={filteredItems}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default Todos;
