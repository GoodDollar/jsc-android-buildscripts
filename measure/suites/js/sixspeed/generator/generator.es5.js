module.exports = {
  run: function (assertEqual) {

    function generator() {
      var i = 0;
      return {
        next: function () {
          i++;
          if (i >= 3) {
            return { done: true };
          } else {
            return {
              value: i,
              done: false
            };
          }
        }
      };
    }

    function fn() {
      var iterator = generator();
      iterator.next();
      iterator.next();
      return iterator.next().done;
    }

    assertEqual(fn(), true);

  }
};
