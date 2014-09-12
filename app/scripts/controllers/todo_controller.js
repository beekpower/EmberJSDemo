Emberjsdemo.TodoController = Ember.ArrayController.extend({
  actions: {
    addTodo: function() {
      var inputItem = this.get('todoInput');
      var todo = this.store.createRecord('todo', {title: inputItem});
      //Clear the todo input box
      this.set('todoInput', '');
      todo.save();
    },

    removeTodo: function(todo) {
      todo.deleteRecord();
      todo.save();
    },

    completedAction: function(title) {
      alert("Congrats on finishing task: " + title);
    }
  }
});
