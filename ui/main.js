//counter code

var button = document.getElementById('counter');

button.onclick = function(){
  //Create the request object
  var request = new XMLHttpRequest();
  //Capture the response and store it in a variable
  request.onreadystatechange = function (){
    if (request.readyState === XMLHttpRequest.DONE){
        //Take some action
        if(request.status === 200){
       //Capture a list of names and render it as a list
  
  var list = '';
  for (var i=0;i<names.length;i++)
  {
      list += '<li>' + names[i];
  }
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
        }
    }  
  };
  //Make the request
  var names = request.responseText;
  names = JSON.parse(names);
  request.open('GET','http://amvinoth143.imad.hasura-app.io/submit-name?name =' + name,true);
  request.send(null);
};


