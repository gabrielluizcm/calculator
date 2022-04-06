(function () {
  function Calculator() {
    let calculated = false;
    this.display = document.querySelector('#display');

    const calculate = function () {
      this.display.value = eval(this.display.value)
      calculated = true;
    }

    const setDisplayValue = function (value) {
      if (calculated)
        clearDisplayValue();
      this.display.value += value;
      calculated = false;
    }

    const clearDisplayValue = function () {
      this.display.value = '';
    }

    this.addButtonEvents = function () {
      document.addEventListener('click', e => {
        if (e.target.classList.contains('btn-digit'))
          setDisplayValue(e.target.innerText);
        else if (e.target.classList.contains('btn-clear'))
          clearDisplayValue();
        else if (e.target.classList.contains('btn-eq'))
          calculate();
      })
    }
  }

  const calculator = new Calculator();
  calculator.addButtonEvents();
})();