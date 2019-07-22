/* 
const addTodo = function()  {
    const ul = document.getElementsByTagName('ul')[0];
    const input = document.getElementById('todoInput').value;
  
    if (input.length > 0) {
      const li = document.createElement('li');
  
      li.classList.add('fadeIn');
      li.appendChild(document.createTextNode(input));
  
      ul.appendChild(li);
  
      document.getElementById('todoInput').value = '';
    }
  };
 */

 

  const addTodo = function() 
  {
    const ul = document.getElementsByTagName('ul')[0];
    const input = document.getElementById('todoInput').value;
  
    if (input.length > 0) {
        // cria um elemento li
      const li = document.createElement('li');
  
      const animations = [
        'animated',
        'fadeIn'
      ];
      
      // classList - permite adicionar, remover ou alternar classes num elemento
      // https://www.w3schools.com/jsref/prop_element_classlist.asp
      // Adiciona uma classe ao elemento: document.getElementById("myDIV").classList.add("mystyle");
      // nesta caso várias classses
      //li.classList.add(...animations);
      li.classList.add( 'animated','fadeIn');

      // https://www.w3schools.com/jsref/met_document_createtextnode.asp
      li.appendChild(document.createTextNode(input));
  
      ul.appendChild(li);
  
      // limpa o conteúdo da text
      document.getElementById('todoInput').value = '';
    }
  }

  document.getElementById("btn").addEventListener("click", addTodo);