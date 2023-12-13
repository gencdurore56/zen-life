/* 
Filename: complexCode.js
Content: This code is a complex implementation of a contact management system 
with functionalities like adding, editing, and searching contacts.
*/

// Contact class
class Contact {
  constructor(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

// Contact Management System class
class ContactManagementSystem {
  constructor() {
    this.contacts = [];
  }

  // Add contact
  addContact(name, email, phone) {
    const contact = new Contact(name, email, phone);
    this.contacts.push(contact);
  }

  // Edit contact by name
  editContact(name, newEmail, newPhone) {
    const contactIndex = this.contacts.findIndex((c) => c.name === name);
    if (contactIndex !== -1) {
      this.contacts[contactIndex].email = newEmail;
      this.contacts[contactIndex].phone = newPhone;
      console.log("Contact updated successfully!");
    } else {
      console.log("Contact not found!");
    }
  }

  // Search contact by name
  searchContact(name) {
    const contact = this.contacts.find((c) => c.name === name);
    if (contact) {
      console.log("Contact found:");
      console.log(contact);
    } else {
      console.log("Contact not found!");
    }
  }
}

// Create an instance of ContactManagementSystem
const cms = new ContactManagementSystem();

// Add contacts
cms.addContact("John Doe", "johndoe@example.com", "1234567890");
cms.addContact("Jane Smith", "janesmith@example.com", "9876543210");

// Edit contact
cms.editContact("John Doe", "newemail@example.com", "5555555555");

// Search contact
cms.searchContact("Jane Smith");