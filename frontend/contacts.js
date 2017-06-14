import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();
import 'bootstrap/dist/css/bootstrap.css'
import './style.css';
import store from './store.js';
import modal from './modal.js';

document.addEventListener("DOMContentLoaded", function() {
    let contactsContainer = document.getElementById("contactsContainer");
    renderAll();

    /**
     * Render contacts
     * @param {object} allContacts
     */
    function renderAll (allContacts){
        if (typeof allContacts === 'undefined') allContacts = store.getAll();
        contactsContainer.innerHTML = null;
        Object.keys(allContacts).map(function(objectKey) {
            let contact = allContacts[objectKey];

            let div = document.createElement('div');
            div.className = 'col-md-3 col-md-offset-1 contact';
            div.dataset.id = contact.id;
            let name = document.createElement('div');
            name.className = 'contact__name';
            name.innerHTML = contact.name;
            let tel = document.createElement('div');
            tel.className = 'contact__tel';
            tel.innerHTML = contact.tel;

            div.appendChild(name);
            div.appendChild(tel);
            contactsContainer.appendChild(div);
        });
    }

    contactsContainer.onclick = function(event) {
        let target = event.target;
        let contact = target.closest('.contact');
        if (!contact) return;
        if (!contactsContainer.contains(contact)) return;
        openContact(contact);
    };

    /**
     * Open contact modal
     * @param {HTMLElement} e
     */
    function openContact (e){
        let id = e.dataset.id;
        let contact = store.get(id);
        modal.showContact(contact);
    }
    document.getElementById("addContact").addEventListener("click", function() {
        modal.editContact();
    });
    document.getElementById("addTestContact").addEventListener("click", function() {
        let contact = {
            name: 'test',
            tel: '+380444444444',
            email: 'test@test.com',
            skype: 'test',
            facebook: 'test',
            address: 'test'
        };
        store.create(contact);
        renderAll();
    });
    document.getElementById("deleteContact").addEventListener("click", function(e) {
        let id = e.target.dataset.id;
        store.delete(id);
        modal.hideAll();
        renderAll();
    });
    document.getElementById("changeContact").addEventListener("click", function(e) {
        let id = e.target.dataset.id;
        let contact = store.get(id);
        modal.editContact(contact);
    });
    document.getElementById("deleteAll").addEventListener("click", function() {
        store.deleteAll();
        renderAll();
    });
    document.getElementById("filter").addEventListener("keyup", function() {
        let contacts = store.filter(this.value);
        renderAll(contacts);
    });
    document.getElementById("contactEdit").addEventListener("submit", function(e) {
        e.preventDefault();
        let contact ={};
        let form = e.target;
        let inputs = form.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            contact[inputs[i].name] = inputs[i].value;
        }
        if (contact.id !== '') store.update(contact.id, contact);
        else store.create(contact);
        renderAll();
        modal.hideAll();
    });
});