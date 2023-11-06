function a() {
  for (var i = 0; i < 3; i++) {
    function logVal(val) {
      setTimeout(() => {
        console.log(val);
      }, 1000);
    }
    logVal(i);
  }
}

a();
