const masks = {
  phone(value) {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
      .replace(/(\d{4})\d+?$/, '$1');
  },
};

const validations = {
  name(value) {
    if (value === '') {
      return 'Digite um nome';
    }
    return false;
  },
  email(value) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (value === '' || !regex.test(value)) {
      return 'Digite um e-mail válido';
    }
    return false;
  },
  phone(value) {
    if (value.length < 11) {
      return 'Digite um número válido';
    }
    return false;
  },
  message(value) {
    if (value === '') {
      return 'Digite uma mensagem';
    }
    return false;
  },
};

document.querySelectorAll('form.modal__form input').forEach(($input) => {
  const field = $input.dataset.js;

  if (field) {
    $input.addEventListener(
      'input',
      (event) => {
        event.target.value = masks[field](event.target.value);
      },
      false
    );
  }
});

document.getElementById('modal__submit').addEventListener(
  'click',
  (event) => {
    const errorMessages = [];
    event.preventDefault();
    document
      .querySelectorAll('form.modal__form input, form.modal__form textarea')
      .forEach(($input) => {
        const { name, value } = $input;
        const errorMessage = validations[name](value);

        if (errorMessage) {
          errorMessages.push(errorMessage);
        }
      });

    errorMessages.forEach((error) => {
      if (error) {
        alert(error);
      }
    });

    // API REQUEST
  },
  false
);
