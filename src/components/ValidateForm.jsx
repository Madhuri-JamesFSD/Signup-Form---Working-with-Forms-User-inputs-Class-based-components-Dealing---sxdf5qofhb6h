export default function ValidateForm(values) {
    let errors = {};
  

    if (!values.name.trim()) {
      errors.name = "All fields are mandatory";
    } else if (!/^[0-9a-zA-Z ]+$/i.test(values.name)) {
      errors.name = "Name is not alphanumeric";
    }
  
    if (!values.email) {
      errors.email = "All fields are mandatory";
    } else if (!/^\S+@\S+$/i.test(values.email)) {
      errors.email = "Email must contain @";
    }

    if (!values.gender) {
      errors.gender = "All fields are mandatory";
    } 
  
    if (!values.phone) {
      errors.phone = "All fields are mandatory";
    } else if (!/^[0-9]+$/i.test(values.phone)) {
      errors.phone = "Phone Number must contain only numbers";
    }
  
    
    if (!values.password) {
      errors.password = "All fields are mandatory";
    } else if (values.password.length < 6) {
      errors.password = "Password must contain atleast 6 letters";
    }
  
    return errors;
  }