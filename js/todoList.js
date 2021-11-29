


    var todos = [
      { todoText: 'Item 1', completed: false },
      { todoText: 'Item 2', completed: false },
      { todoText: 'Item 3', completed: false }
    ];

    displayTodos();

    function add() {
      var initialTodoText = addInput.value;
      todos.push({ todoText: initialTodoText, completed: false });

      displayTodos();
    }

    function edit(event) {
      var id = event.target.getAttribute('id');
      var position = id.charAt(id.length - 1);
      var editedTodoText = prompt('Enter New Text!', todos[position].todoText);
      if (editedTodoText !== '' && editedTodoText !== null) {
        todos[position].todoText = editedTodoText;
      }
      displayTodos();
    }

    function remove(event) {
      var id = event.target.getAttribute('id');
      var position = id.charAt(id.length - 1);

      todos.splice(position, 1);
      displayTodos();
    }

    function toggle(event) {
      var id = event.target.getAttribute('id');
      var position = id.charAt(id.length - 1);

      if (todos[position].completed === false) {
        todos[position].completed = true;
      } else {
        todos[position].completed = false;
      }
      displayTodos();

    }
    function displayTodos() {
      var todoListUl = document.getElementById('todo-list-ul');

      while (todoListUl.firstChild) {
        todoListUl.removeChild(todoListUl.firstChild);
      }

      for (i = 0; i < todos.length; i++) {
        var todosLi = document.createElement('li');

        if (todos[i].completed === true) {
          todosLi.innerText = '[X]' + todos[i].todoText;
        } else {
          todosLi.innerText = '[ ]' + todos[i].todoText;
        }
        var removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.addEventListener('click', remove);
        removeButton.id = 'remove-' + i;
        var toggleButton = document.createElement('button');
        toggleButton.innerText = 'Toggle';
        toggleButton.addEventListener('click', toggle);
        toggleButton.id = 'toggle-' + i;
        var editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.addEventListener('click', edit);
        editButton.id = 'edit-' + i;

        todosLi.appendChild(removeButton);
        todosLi.appendChild(editButton);
        todosLi.appendChild(toggleButton);
        todoListUl.appendChild(todosLi);

      }
    }

    function toggleAll() {
      var completedTodos = 0;

      for (var i = 0; i < todos.length; i++) {
        if (todos[i].completed === true) {
          completedTodos++;
        }
      }
      if (completedTodos === todos.length) {
        for (i = 0; i < todos.length; i++) {
          todos[i].completed = false;
        }
      } else {
        for (i = 0; i < todos.length; i++) {
          todos[i].completed = true;
        }
      }
      displayTodos();
    }

    var toggleAllButton = document.getElementById('toggle-all-button');
    toggleAllButton.addEventListener('click', toggleAll);
    var addButton = document.getElementById('add-button');
    addButton.addEventListener('click', add);
    var addInput = document.getElementById('add-input');

