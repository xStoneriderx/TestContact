let closeButtons = document.querySelectorAll('[data-dismiss]');
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener('click', closeModals, false);
}

function closeModals (){
    document.getElementsByClassName('modal-backdrop')[0].remove();
    let modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        modals[i].classList.remove('in');
        modals[i].style.display = 'none';
    }
}
export default {
    /**
     * Show contact info in modal
     * @param contact
     */
    showContact : function(contact) {
        let modalBack = document.createElement('div');
        modalBack.className = 'modal-backdrop fade in';
        document.body.appendChild(modalBack);

        let modal = document.getElementById("showContact");
        modal.classList.add('in');
        modal.style.display = 'block';

        let modalBody = document.getElementById("contactBody");
        let spans = modalBody.getElementsByTagName('span');
        for (let i = 0; i < spans.length; i++) {
            let span = spans[i];
            span.innerHTML = contact[span.dataset.name];
        }

        document.getElementById("deleteContact").dataset.id = contact.id;
        document.getElementById("changeContact").dataset.id = contact.id;

    },
    /**
     * Show contact edit/create modal
     * @param {object} contact
     */
    editContact : function (contact) {
        let edit = true;
        if (typeof contact === 'undefined') {
            edit = false;
            let modalBack = document.createElement('div');
            modalBack.className = 'modal-backdrop fade in';
            document.body.appendChild(modalBack);
        }

        let modal = document.getElementById('editContact');
        modal.classList.add('in');
        modal.style.display = 'block';

        let form = modal.querySelectorAll('form')[0];

        let modalHeader = modal.getElementsByClassName('modal-title')[0];
        modalHeader.innerHTML = edit ? "Изменение контакта" : 'Создание контакта';

        let modalButton = form.querySelector('button[type="submit"]');
        modalButton.innerHTML = edit ? "Измененить контакт" : 'Создать контакт';

        let inputs = form.querySelectorAll('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = edit ? contact[inputs[i].name] : '';
        }
    },
    /**
     * Hide all modals
     */
    hideAll : function(){
        closeModals();
    }
}