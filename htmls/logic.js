document.getElementById("btn_led").addEventListener('change', ()=>{
    let status = document.getElementById('btn_led').checked;
    if(status){
	document.getElementById('title').innerText = "Encendido";
	changeForeground('green');
	eel.process(1);
    }else{
	document.getElementById('title').innerText = "Apagado";
	changeForeground('red');
	eel.process(0);
    }
});


function changeForeground(color){
    document.getElementById('title').style.color = color;
}

changeForeground('red');

