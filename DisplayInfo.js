<p> Merci pour votre confiance! <span id='display'></span> <span id='display2'></span></p>
<p><span id='display3'></span></p>
<p><span id='display4'></span></p>
<p><span id='display5'></span></p>
<p><span id='display6'></span></p>
<p><span id='display7'></span> <span id='display8'></span> <span id='display9'></span> <span id='display10'></span> <span id='display11'></span> <span id='display12'></span> <span id='display13'></span></p>
<script  async type="text/javascript">
//affiche Nom
document.getElementById("Nom").addEventListener('input',function(){
document.getElementById('display').innerHTML = document.querySelector('#Nom').value;});
//affiche Prenom
document.getElementById("Prenom-2").addEventListener('input',function(){
document.getElementById('display2').innerHTML = document.querySelector('#Prenom-2').value;});
//affiche Email
document.getElementById("Email").addEventListener('input',function(){
document.getElementById('display3').innerHTML = document.querySelector('#Email').value;});
//affiche Phone
document.getElementById("Telephone").addEventListener('input',function(){
document.getElementById('display4').innerHTML = document.querySelector('#Telephone').value;});
//affiche code Postal
document.getElementById("codePostale").addEventListener('input',function(){
document.getElementById('display5').innerHTML = document.querySelector('#codePostale').value;});
//affiche radioButton Mode chauffage principale maison
document.getElementById("Fioul").addEventListener('click',function(){
document.getElementById('display6').innerHTML = document.querySelector('input[name="Mode-chauffage-principale-maison"]:checked')?.value;});
document.getElementById("Gaz-2").addEventListener('click',function(){
document.getElementById('display6').innerHTML = document.querySelector('input[name="Mode-chauffage-principale-maison"]:checked')?.value;});
document.getElementById("electrique").addEventListener('click',function(){
document.getElementById('display6').innerHTML = document.querySelector('input[name="Mode-chauffage-principale-maison"]:checked')?.value;});
document.getElementById("Autres").addEventListener('click',function(){
document.getElementById('display6').innerHTML = document.querySelector('input[name="Mode-chauffage-principale-maison"]:checked')?.value;});
//affichage Checkbox
document.getElementById("Chauffage").addEventListener('click',function(){
document.getElementById('display7').innerHTML = document.getElementById("Chauffage").name;});
document.getElementById("Ventillation").addEventListener('click',function(){
document.getElementById('display8').innerHTML = document.getElementById("Ventillation").name;});
document.getElementById("Isolation").addEventListener('click',function(){
document.getElementById('display9').innerHTML = document.getElementById("Isolation").name;});
document.getElementById("Climatisation").addEventListener('click',function(){
document.getElementById('display10').innerHTML = document.getElementById("Climatisation").name;});
document.getElementById("Audit").addEventListener('click',function(){
document.getElementById('display11').innerHTML = document.getElementById("Audit").name;});
document.getElementById("Reno-global").addEventListener('click',function(){
document.getElementById('display12').innerHTML = document.getElementById("Reno-global").name;});
document.getElementById("Autre").addEventListener('click',function(){
document.getElementById('display13').innerHTML = document.getElementById("Autre").name;});
</script>
