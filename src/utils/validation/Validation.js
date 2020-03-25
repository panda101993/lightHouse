/* To handle first name validation*/
export function validateName(name) {
  var nameRegex = /^[a-zA-Z ]+$/;
  var name = name.trim();
  if (name == "" || name == undefined || name == null) {
    return { status: false, error: "*Please enter your name." };
  } else if (!nameRegex.test(name)) {
    return { status: false, error: "*Please enter atleast 2 characters." };
  } else if (name.length < 2) {
    return { status: false, error: "*Please enter atleast 2 characters." };
  } else {
    return { status: true, error: "" };
  }
}
/* To handle last name validation*/
export function validateLastName(name) {
  var lastnameRegex = /^[a-zA-Z ]+$/;
  var lastname = lastname.trim();
  if (lastname == "" || lastname == undefined || lastname == null) {
    return { status: false, error: "*Please enter your lastname." };
  } else if (!lastnameRegex.test(lastname)) {
    return { status: false, error: "*Please enter atleast 2 characters." };
  } else if (lastname.length < 2) {
    return { status: false, error: "*Please enter atleast 2 characters." };
  } else {
    return { status: true, error: "" };
  }
}

/* To handle email validation */
export function validateEmail(email) {
  var emailRegex = /^[A-Z0-9_-]+([\.][A-Z0-9_]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,3})+$/i;
  email = email.trim();
  if (email == "" || email == undefined || email == null) {
    return { status: false, error: "*Please enter the email." };
  } else if (!emailRegex.test(email)) {
    return { status: false, error: "*Please enter valid Email Address." };
  } else {
    return { status: true, error: "" };
  }
}
/* To validate password */

export function validatePassword(password) {
  // var passwordRegex = /^ (?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
  var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
  password = password.trim();

  if (password == "" || password == undefined || password == null) {
    return { status: false, error: "*Please enter the password." };
  } else if (!passwordRegex.test(password)) {
    return { status: false, error: "*Please enter valid password" };
  }
  // else if (password.length < 8) {
  //     return { status: false, error: "Password must contain atleast 8 character."}
  // }
  else {
    return { status: true, error: "" };
  }
}

/* To validate Mobile No. */

export function validateMobileNo(mobileNo) {
  var numberRegex = /^[1-9][0-9]{9,12}$/;
  mobileNo = mobileNo.trim();
  if (mobileNo == "" || mobileNo == undefined || mobileNo == null) {
    return { status: false, error: "*Please enter Mobile Number." };
  } else if (!numberRegex.test(mobileNo)) {
    return { status: false, error: "*Please enter a valid mobile number." };
  } else {
    return { status: true, error: "" };
  }
}

export function validateWeight(weight) {
  var numberRegex = /^((?!(0))[0-9]{2,3})$/g;
  weight = weight.trim();
  if (weight == "" || weight == undefined || weight == null) {
    return { status: false, error: "Please enter weight." };
  } else if (!numberRegex.test(weight)) {
    return { status: false, error: "Please enter valid weight." };
  } else {
    return { status: true, error: "" };
  }
}

export function validateGoals(goals) {
  var numberRegex = /^((?!(0))[0-9]{2,3})$/g;
  goals = goals.trim();
  if (goals == "" || goals == undefined || goals == null) {
    return { status: false, error: "Please enter your daily goal limit" };
  } else if (!numberRegex.test(goals)) {
    return { status: false, error: "Please enter valid goal limit" };
  } else {
    return { status: true, error: "" };
  }
}
/* To handle email mobile validation */
export function validateEmailMobile(email) {
  var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var numberRegex = /^[1-9][0-9]{9,12}$/;
  console.log("Email==>>", emailRegex.test(email));
  console.log("MObile==>>", numberRegex.test(email));
  email = email.trim();
  if (email == "" || email == undefined || email == null) {
    return { status: false, error: "Please enter Email ID." };
  } else if (emailRegex.test(email) || numberRegex.test(email)) {
    //    return { status: false, error: "Please enter valid Email Address." };
    return { status: true, error: "" };
  } else {
    //    return { status: true, error: '' };
    return { status: false, error: "Please enter valid Email Address." };
  }
}
/* To Handle email mobile validation on Login */

export function requireEmailMobile(email) {
  if (email == "" || email == undefined || email == null) {
    return { status: false, error: "Email required." };
  }
}

/* To Handle Password validation on Login */

export function requirePassword(password) {
  if (password == "" || password == undefined || password == null) {
    return { status: false, error: "Password required." };
  }
}
