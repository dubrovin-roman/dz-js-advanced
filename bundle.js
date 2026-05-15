(function () {
    'use strict';

    class Task {
        #message;

        constructor(message) {
            this.#message = message;
        }

        run() {
            console.log(this.#message);
        }
    }

    class User {
      #task;

      constructor(task) {
        this.#task = task;
      }

      do() {
        this.#task.run();
      }
    }

    const newTask = new Task('New task');
    const user = new User(newTask);
    user.do();

})();
