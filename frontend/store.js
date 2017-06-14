let allContacts = JSON.parse(localStorage.getItem('contacts'));
let counter = JSON.parse(localStorage.getItem('counter'));
if (allContacts === null) allContacts = {};
if (counter === null) counter = 0;
export default {
    /**
     * Get all contacts from localStorage
     * @returns {object} All contacts
     */
    getAll : function() {
        return (allContacts);
    },
    /**
     * Filter contacts by name
     * @param {string} reg
     * @returns {object} Filtered contacts
     */
    filter : function(reg){
        let filterContacts = {};
        let rex = new RegExp('.*(' + reg +')+.*', 'i');
        for (let i in allContacts) {
            let contact = allContacts[i];
            if (rex.test(contact.name))  filterContacts[contact.id] = contact;
        }
        return (filterContacts);
    },
    /**
     * Get one contact by id
     * @param {number} id
     * @returns {object} Contact
     */
    get : function(id) {
        return (allContacts[id]);
    },
    /**
     * Create new contact
     * @param {object} contact
     */
    create : function(contact) {
        contact.id = counter;
        allContacts[counter] = contact;
        let sAllContacts = JSON.stringify(allContacts);
        localStorage.setItem('contacts', sAllContacts);
        localStorage.setItem('counter', ++counter);
    },
    /**
     * Update contact
     * @param {number} id Id of contact
     * @param {object} contact Contact info
     */
    update: function(id, contact) {
        allContacts[id] = contact;
        let sAllContacts = JSON.stringify(allContacts);
        localStorage.setItem('contacts', sAllContacts);
    },
    /**
     * Delete contact
     * @param {number} id Id of contact
     */
    delete: function(id) {
        delete allContacts[id];
        let sAllContacts = JSON.stringify(allContacts);
        localStorage.setItem('contacts', sAllContacts);
    },
    /**
     * Delete all contacts
     */
    deleteAll: function() {
        allContacts = {};
        let sAllContacts = JSON.stringify(allContacts);
        localStorage.setItem('contacts', sAllContacts);
        localStorage.setItem('counter', 0);
    }
}