const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener('submit', (e) => {
    
    e.preventDefault();

    const campoNome = document.querySelector('#name');
    const txtNome = document.querySelector('#txtNome');

    if (campoNome.value.length < 3) {
        txtNome.innerHTML = 'Nome deve ter no mínimo 3 caracteres';
        campoNome.focus();
        return;
    }else{
        txtNome.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    if (!campoEmail.value.match(emailRegex)) {
        txtEmail.innerHTML = 'Email inválido';
        campoEmail.focus();
        return;
    }else{
        txtEmail.innerHTML = '';
    }

    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');
  
    if (campoSubject.value.length < 5) {
        txtSubject.innerHTML = 'Assunto deve ter no mínimo 5 caracteres';
        campoSubject.focus();
        return;
    }else{
        txtSubject.innerHTML = '';
    }

    const campoMessage = document.querySelector('#message');

    window.alert('Formulário enviado com sucesso!');

    campoNome.value = '';
    campoEmail.value = '';
    campoSubject.value = '';
    campoMessage.value = '';
    
    
});