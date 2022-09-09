function tax(n) {
    if ((n <= 225000)) {
      return "no tax";
    } else if ((n > 225000 && n <= 500000)) {
      var tax = n - (n * 10) / 100;
      {
        return tax;
      }
    } else if ((n > 500000 && n <= 1000000)) {
      var tax = n - (n * 30) / 100;
      {
        return tax;
      }
    } else if ((n > 1000000)) {
      var tax = n - (n * 10) / 100;
      {
        return tax;
      }
    } else {
      return "enter number";
    }
  }
  
  module.export = tax;
  