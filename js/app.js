// var consoleClick = function(event) {
// 	console.log(event);
// };
// $on( qs('#clear-complited'), 'click', consoleClick);

// var b = document.createElement('button');
// $on( b, 'click', consoleClick);
// b.innerHtml = 'new';

// qs('#listTodo').appendChild(b);

// $delegate( qs('#listTodo'), '.cl', 'click', consoleClick);

// function consoleValue(event) {
// 	console.log( event.target.value);
// }
// var $body = qs('body');
// $delegate( $body, 'input[type=text]', 'focus', consoleValue);
// $delegate( $body, 'input[type=text]', 'blur', consoleValue);


var todos = [];
var $newTodoText = qs('#newTodoText');
var $todosList = qs('#todosList');
//функция keyupHandler
var keyupHandler = function keyupHandler(event) {
	
	//проверки что это ENTER
	if ( event.keyCode === 13 ) {

		//сохранение элемента в массиве
		todos.push({
			complited: false,
			text: event.target.value
		});

		//создание li
		var li = document.createElement('li');
		
		//создание checkbox
		var checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');

		//создание label
		var label = document.createElement('label');
		label.innerHTML = event.target.value;


		li.appendChild( checkbox );
		li.appendChild( label );

		//добавить li в ul
		$todosList.appendChild(li);
	}
};
//событие keyup
$on($newTodoText, 'keyup', keyupHandler);
