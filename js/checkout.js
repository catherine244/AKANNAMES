function checkout() {
  var gender = document.getElementsByName("gender");
  for (i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      return (gender[i].value);
    }
  }
}
