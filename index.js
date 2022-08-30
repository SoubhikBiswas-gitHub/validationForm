const checkAndSubmit = () => {
  let firstNameInput = document.getElementById("fname-input").value;
  let lastNameInput = document.getElementById("lname-input").value;
  let emailInput = document.getElementById("email-input").value;
  let mobNumberInput = document.getElementById("mob-input").value;
  let batchInput = document.getElementById("batch-input").value;
  let moduleInput = document.getElementById("module-input").value;
  let tnCInput = document.getElementById("tNc-input").checked;
  let checkall = 0;

  // ******************************fastname
  if (
    firstNameInput &&
    firstNameInput.length >= 3 &&
    firstNameInput.charAt(0) !== " "
  ) {
    if (
      firstNameInput.includes("/") ||
      firstNameInput.includes("\\") ||
      firstNameInput.includes("*") ||
      firstNameInput.includes("@") ||
      firstNameInput.includes("#") ||
      firstNameInput.includes("$") ||
      firstNameInput.includes("%") ||
      firstNameInput.includes("^") ||
      firstNameInput.includes("&") ||
      firstNameInput.includes("(") ||
      firstNameInput.includes(")") ||
      firstNameInput.includes("-") ||
      firstNameInput.includes("_") ||
      firstNameInput.includes("+") ||
      firstNameInput.includes("+") ||
      firstNameInput.includes("<") ||
      firstNameInput.includes(">") ||
      firstNameInput.includes("?") ||
      firstNameInput.includes("!")
    ) {
      document.getElementById("fname-invalid").innerText =
        "First name cannot contain any special charecter !";
      document.getElementById("fname-valid").style.display = "none";
      document.getElementById("fname-invalid").style.display = "block";
      checkall--;
    } else {
      document.getElementById("fname-valid").style.display = "block";
      document.getElementById("fname-invalid").style.display = "none";
      checkall++;
    }
  } else {
    document.getElementById("fname-valid").style.display = "none";
    document.getElementById("fname-invalid").style.display = "block";
    checkall--;
  }
  // ******************************lastname
  if (
    lastNameInput &&
    lastNameInput.length >= 3 &&
    lastNameInput.charAt(0) !== " "
  ) {
    if (
      lastNameInput.includes("/") ||
      lastNameInput.includes("\\") ||
      lastNameInput.includes("*") ||
      lastNameInput.includes("@") ||
      lastNameInput.includes("#") ||
      lastNameInput.includes("$") ||
      lastNameInput.includes("%") ||
      lastNameInput.includes("^") ||
      lastNameInput.includes("&") ||
      lastNameInput.includes("(") ||
      lastNameInput.includes(")") ||
      lastNameInput.includes("-") ||
      lastNameInput.includes("_") ||
      lastNameInput.includes("+") ||
      lastNameInput.includes("+") ||
      lastNameInput.includes("<") ||
      lastNameInput.includes(">") ||
      lastNameInput.includes("?") ||
      firstNameInput.includes("!")
    ) {
      document.getElementById("lname-invalid").textContent =
        "Last name cannot contain any special charecter !";
      document.getElementById("lname-valid").style.display = "none";
      document.getElementById("lname-invalid").style.display = "block";
      checkall--;
    } else {
      document.getElementById("lname-valid").style.display = "block";
      document.getElementById("lname-invalid").style.display = "none";
      checkall++;
    }
  } else {
    document.getElementById("lname-valid").style.display = "none";
    document.getElementById("lname-invalid").style.display = "block";
    checkall--;
  }

  // ******************************email

  if (
    emailInput &&
    emailInput.length >= 5 &&
    emailInput.charAt(0) !== " " &&
    emailInput.charAt(0) !== "@" &&
    emailInput.charAt(0) !== "-" &&
    emailInput.includes("@") &&
    emailInput.includes(".") &&
    emailInput.indexOf("@") > 1 &&
    emailInput.indexOf(".") >= emailInput.indexOf("@") + 2 &&
    emailInput.indexOf(".") < emailInput.length - 2
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
    checkall++;
  } else {
    document.getElementById("email-valid").style.display = "none";
    document.getElementById("email-invalid").style.display = "block";
    checkall--;
  }

  // ******************************mob

  if (
    mobNumberInput &&
    mobNumberInput.length === 10 &&
    mobNumberInput.charAt(0) != " "&&mobNumberInput.charAt(0) != "+"&&mobNumberInput.charAt(0) !="0"
  ) {
    if (mobNumberInput.includes("+") || mobNumberInput.includes("-")) {
      document.getElementById("mob-invalid").innerText =
        "Mobile number cannot contain any special charecter !";
      document.getElementById("mob-valid").style.display = "none";
      document.getElementById("mob-invalid").style.display = "block";
      checkall--;
    } else {
      document.getElementById("mob-valid").style.display = "block";
      document.getElementById("mob-invalid").style.display = "none";
      checkall++;
    }
  } else {
    document.getElementById("mob-valid").style.display = "none";
    document.getElementById("mob-invalid").style.display = "block";
    checkall--;
  }

  // ******************************batch
  if (batchInput) {
    document.getElementById("batch-valid").style.display = "block";
    document.getElementById("batch-invalid").style.display = "none";
    checkall++;
  } else {
    document.getElementById("batch-valid").style.display = "none";
    document.getElementById("batch-invalid").style.display = "block";
    checkall--;
  }

  // ******************************module
  if (moduleInput) {
    document.getElementById("module-valid").style.display = "block";
    document.getElementById("module-invalid").style.display = "none";
    checkall++;
  } else {
    document.getElementById("module-valid").style.display = "none";
    document.getElementById("module-invalid").style.display = "block";
    checkall--;
  }

  // ******************************tnc
  if (tnCInput) {
    document.getElementById("tNc-valid").style.display = "block";
    document.getElementById("tNc-invalid").style.display = "none";
    checkall++;
  } else {
    document.getElementById("tNc-valid").style.display = "none";
    document.getElementById("tNc-invalid").style.display = "block";
    checkall--;
  }

  if (checkall === 7) {
    alert("Your details have been saved successfully !");

    document.getElementById("fname-input").value = "";
    document.getElementById("lname-input").value = "";
    document.getElementById("email-input").value = "";
    document.getElementById("mob-input").value = "";
    document.getElementById("batch-input").value = "";
    document.getElementById("module-input").value = "";
    document.getElementById("tNc-input").checked = false;
    document.getElementById("fname-valid").style.display = "none";
    document.getElementById("lname-valid").style.display = "none";
    document.getElementById("email-valid").style.display = "none";
    document.getElementById("mob-valid").style.display = "none";
    document.getElementById("batch-valid").style.display = "none";
    document.getElementById("module-valid").style.display = "none";
    document.getElementById("tNc-valid").style.display = "none";
  }
};
