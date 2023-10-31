import React, { useState } from 'react'; //importing React library.

function Contact() { //functional component titled Contact.
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false); 
  //default false = incorrect password.
  //true = user entered correct password "swordfish"

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  } //nested function closure.

  //ONLY MODIFIED CODE BELOW THIS LINE:
  //login form is displayed until user submits correct password.
  //note how form is calling handleSubmit w/o () bc call is wanted ONLY onSubmit event.
  let login = (
    <form action = "#" onSubmit = {handleSubmit}> 
    <input
    type = "password"
    placeholder = "Password" 
    />
    <input
    type = "submit" 
    />
    </form>
  );

  //contact info is hidden on default and displayed if user gets password correct.
  let contactInfo = (
     <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
      </ul>
  );

  //logic below has 2 ternary statements.
  return (
      <div id="authorization">
        <h1>{authorized ? "Contact" : "Enter the Password"}</h1>
        {authorized ? contactInfo : login}
      </div>
  ); //return statement closure for component.
} //function component closure.

export default Contact;
