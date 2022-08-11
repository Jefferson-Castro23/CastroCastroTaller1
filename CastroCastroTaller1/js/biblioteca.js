var libro,dia
var resultados = document.getElementById("resultados");
alert('Bienvenido a la Biblioteca del DB')
alert('Que tipo de usuario eres?')
usu=prompt('Determine su usuario')

switch(usu){
	case 'usu': estudiante=prompt('Que sos?');
	if(estudiante = estudiante )
		alert('Usted es estudiante y por lo tanto no tendras mas dias con libros');

	    else if(profesor = profesor )
	    	alert('Usted es Profesor');
	    else
	    	alert('Usted no es nada <3');
	    break;
	}

alert('Que tipo de categoria desea?')
libro=prompt('Digite el libro a prestar')

switch(libro){
	case 'libros': ciencia=prompt('Digite el libro');
	if(ciencia = ciencia )
		alert('El libro sera prestado por 3 dias');
	    else if(tecnologia = tecnologia )
	    	alert('El libro sera prestado por 3 dias');
	    else
	    	alert('No esta ese libro');
	    break;

  case 'tesis': informatica=prompt('Digite la tesis que busca');
	if(informatica = informatica )
		alert('La tesis sera prestado por 15 dias');
	    else if(parvularia = parvularia )
	    	alert('La tesis sera prestado por 15 dias');
	    else
	    	alert('No esta esa tesis');
	    break;

	     case 'obras': sancho=prompt('Que obra busca?');
	if(sancho = sancho )
		alert('La obra sera prestada por una semana');
	    else if(cipitio = cipitio )
	    	alert('La obra sera prestada por una semana');
	    else
	    	alert('No esta esa obra');
	    break;	   	

	    case 'otros': matematica=prompt('Que otro libro busca');
	if(matematica = matematica )
		alert('Solo se lo prestamos 2 dias');
	    else if(lenguaje = lenguaje )
	    	alert('Solo se lo prestamos 2 dias');
	    else
	    	alert('No esta ese libro');
	    break;	   	
}