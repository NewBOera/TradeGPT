// ? Delete event default for all forms
const forms = document.querySelectorAll("form");
forms.forEach(function (form) {
   form.addEventListener("submit", function (event) {
      event.preventDefault();
   });
});

// ? You can add diferent validations for each form
function validateForm(formulario) {
   let inputs = formulario.querySelectorAll("input, textarea, checkbox");
   let isValid = true;

   inputs.forEach(function (input) {
      input.classList.remove("error");
      if (input.name === "email" && !isValidEmail(input.value)) {
         isValid = false;
         input.classList.add("error");
         notify.warning("Introduce un email válido", 3000);
      } else if (input.name === "name" && !isValidName(input.value)) {
         isValid = false;
         input.classList.add("error");
         notify.warning("Introduce un nombre válido", 3000);
      } else if (input.name === "lastname" && !isValidName(input.value)) {
         isValid = false;
         input.classList.add("error");
         notify.warning("Introduce apellido paterno válido", 3000);
      } else if (input.name === "lastname2" && !isValidName(input.value)) {
         isValid = false;
         input.classList.add("error");
         notify.warning("Introduce apellido materno válido", 3000);
      } else if (input.type === "checkbox" && !input.checked) {
         isValid = false;
         notify.warning("Debes aceptar los términos y condiciones", 3000);
      } else if (input.name === "phone" && !isValidPhoneNumber(input.value)) {
         isValid = false;
         input.classList.add("error");
         notify.warning("Introduce número telefónico válido", 3000);
      }
   });
   return isValid;
}

function isValidEmail(email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidName(name) {
   return /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(name);
}

function isValidPhoneNumber(phone) {
   return /^\+52\d{10}$/.test(phone);
}
