document.addEventListener('DOMContentLoaded', () => {
    // Get the form element
    const form = document.querySelector('form');
    
    // Add event listener to the form submission
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting immediately
  
      // Get input values
      const name = document.querySelector('#name').value;
      const age = document.querySelector('#age').value;
      const gender = document.querySelector('#gender').value;
      const experience = document.querySelector('#experience').value;
      const weight = document.querySelector('#weight').value;
      const height = document.querySelector('#height').value;
      const goal = document.querySelector('#goal').value;
  
      // Store the values in variables
      let userData = {
        name: name,
        age: age,
        gender: gender,
        experience: experience,
        weight: weight,
        height: height,
        goal: goal
      };
  
      // You can now use the userData object to process the form or send it to a server
      console.log(userData);
  
      // Optionally, show a confirmation message to the user
      alert('Your workout details have been captured successfully!');
  
      // Reset form after submission
      form.reset();
    });
  });
  