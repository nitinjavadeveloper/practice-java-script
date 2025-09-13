function showVariable() {
  const inputValue = document.getElementById("inputText").value;

  if (inputValue === "" || inputValue.length <= 3) {
    alert("Please enter more than 3 characters.");
    return;
  }

  alert("User entered: " + inputValue);
}
