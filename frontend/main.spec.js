import {ContactsApp} from './contacts.js';

describe('Work with contacts', () => {
  let editForm, testBtn, confirmEditBtn, deleteAllBtn, filter, addContactBtn, deleteBtn, editBtn;
  before(function() {
    localStorage.clear();
    document.body.innerHTML = __html__["index.html"];
    editForm = document.getElementById('contactEdit');
    confirmEditBtn = editForm.querySelector('button[type="submit"]');
    testBtn = document.getElementById('addTestContact');
    deleteAllBtn = document.getElementById('deleteAll');
    filter = document.getElementById('filter');
    addContactBtn = document.getElementById('addContact');
    deleteBtn = document.getElementById('deleteContact');
    editBtn = document.getElementById('changeContact');
    new ContactsApp();
  });
  it('Create test contact', () => {
    testBtn.click();
    let allContacts = document.querySelectorAll('.contact');
    expect(allContacts.length).to.equal(1);
  });
  it('Create new contact', () => {
      let contact = {id: 1, name: 'Luke', tel: '456454545', email: 'skywalker@sw.com', skype: 'skywalker', facebook: 'skywalker'};
      addContactBtn.click();
      let inputs = editForm.querySelectorAll('input');
      for (let i = 0; i < inputs.length; i++) {
          inputs[i].value = contact[inputs[i].name];
      }
      confirmEditBtn.click();
      let allContacts = document.querySelectorAll('.contact');
      expect(allContacts.length).to.equal(2);
  });
  it('Contact should have name "Luke"', () => {
    let contact = document.querySelectorAll('.contact')[1];
    let contactName = contact.querySelector('.contact__name');
    expect(contactName.innerHTML).to.equal('Luke');
  });
  it('Delete All button should delete all contacts', () => {
    deleteAllBtn.click();
    let allContacts = document.querySelectorAll('.contact');
    expect(allContacts.length).to.equal(0);
  });
  it('Create 4 new contacts', () => {
    let contacts = [
      {id: 1, name: 'Peter Griffin', tel: '456454545', email: 'peterG@fg.com', skype: 'peterG', facebook: 'peterG'},
      {id: 2, name: 'Lois Griffin', tel: '456454545', email: 'Lois@fg.com', skype: 'loisgriffin', facebook: 'lGriffin'},
      {id: 3, name: 'Chris Griffin', tel: '456454545', email: 'imchris@fg.com', skype: 'chris', facebook: 'chris'},
      {id: 4, name: 'Stewie Griffin', tel: '456454545', email: 'stewie@fg.com', skype: 'stewie', facebook: 'stewie'},
    ];
    let inputs = editForm.querySelectorAll('input');
    for (let i = 0; i < contacts.length; i++) {
        addContactBtn.click();
        let contact = contacts[i];
        for (let j = 0; j < inputs.length; j++) {
            inputs[j].value = contact[inputs[j].name];
        }
        confirmEditBtn.click();
    }
    let allContacts = document.querySelectorAll('.contact');
    expect(allContacts.length).to.equal(4);
  });
  it('Delete 1 contact', () => {
    let contact = document.querySelectorAll('.contact')[0];
    contact.click();
    deleteBtn.click();
    let allContacts = document.querySelectorAll('.contact');
    expect(allContacts.length).to.equal(3);
  });
  it('Change 1 contact', () => {
    document.querySelectorAll('.contact')[0].click();
    editBtn.click();
    let nameInput = editForm.querySelector('input[name=name]');
    nameInput.value = 'Quagmire';
    confirmEditBtn.click();
    let contact = document.querySelectorAll('.contact')[0];
    let contactName = contact.querySelector('.contact__name');
    expect(contactName.innerHTML).to.equal('Quagmire');
  });
  it('Filter contacts, should be 1 contacts', () => {
    filter.value = 'Chris';
    filter.dispatchEvent(new Event('input'));
    let allContacts = document.querySelectorAll('.contact');
    expect(allContacts.length).to.equal(1);
  });
});
