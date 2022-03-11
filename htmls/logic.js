document.getElementById("btn_led").addEventListener('change', ()=>{
    console.log("clicked");
    let status = document.getElementById('btn_led').checked;
    if(status){
	document.getElementById('title').innerText = "Encendido";
	changeForeground('green');
	eel.turnOnLed();
    }else{
	document.getElementById('title').innerText = "Apagado";
	changeForeground('red');
	eel.turnOffLed();
    }
});


function changeForeground(color){
    document.getElementById('title').style.color = color;
}

changeForeground('red');

