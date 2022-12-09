<p><span id='display14'></span></p>
<p><span id='display15'></span>LOOK</p>
<p><span id='display16'> aide à rénover votre maison</span></p>
<script  async type="text/javascript">
//affiche 1 Personne dans le foyer 
document.getElementById("Inferieur15262").addEventListener('click',function(){
document.getElementById('display14').innerHTML = document.querySelector('input[name="1-personnes-vie-dans-le-foyer"]:checked')?.value;});
document.getElementById("Entre15262et19565euros").addEventListener('click',function(){
document.getElementById('display14').innerHTML = document.querySelector('input[name="1-personnes-vie-dans-le-foyer"]:checked')?.value;});
document.getElementById("Entre19565et29148euros").addEventListener('click',function(){
document.getElementById('display14').innerHTML = document.querySelector('input[name="1-personnes-vie-dans-le-foyer"]:checked')?.value;});
document.getElementById("Superieur29148").addEventListener('click',function(){
document.getElementById('display14').innerHTML = document.querySelector('input[name="1-personnes-vie-dans-le-foyer"]:checked')?.value;});
//affiche Catégorie MaPrime Renov Possible
  var prime = document.querySelector('#display14')?.innerHTML;
    function Blue() {
        if((prime == 'Inferieur à 15262€') || (prime != 'Inferieur à 22320€') || (prime != 'Inferieur à 26844€') || (prime != 'Inferieur à 31359€') || (prime != 'Inferieur à 35894€') || (prime != 'Inferieur à 40420€') || (prime != 'Inferieur à 44946€') || (prime != 'Inferieur à 49472€') || (prime != 'Inferieur à 53998€') || (prime != 'Inferieur à 58524€')|| (prime != 'Inferieur à 63050€') || (prime != 'Inferieur à 67576€')) {
           document.getElementById('display15').innerHTML = "Vous etez dans un ménage Blue (très modeste)";
        }else {
            console.log('yarien');
        }
    }
      function Jaune() {
        if((prime != 'Entre 15262€ et 19565€') || (prime != 'Entre 19565€ et 29148€') || (prime != 'Entre 26844€ et 34441€') || (prime != 'Entre 31359€ et 40201€') || (prime != 'Entre 35894€ et 46015€') || (prime != 'Entre 40420€ et 51812€') || (prime != 'Entre 44946€ et 57609€') || (prime != 'Entre 49472€ et 63406€') || (prime != 'Entre 53998€ et 69203€') || (prime != 'Entre 58524€ et 75000€')|| (prime != 'Entre 63050€ et 80797€') || (prime != 'Entre 67576€ et 86594€')) {
           document.getElementById('display15').innerHTML = "Vous etez dans un ménage Jaune(Modeste)";
        }else {
            console.log('yarien');
        }
    }
      function Violet() {
        if((prime != 'Entre 19565€ et 29148€v') || (prime != 'Entre 28614€ et 42848€v') || (prime != 'Entre 34411€ et 51592€v') || (prime != 'Entre 40201€ et 60336€v') || (prime != 'Entre 46015€ et 69081€v') || (prime != 'Entre 51812€ et 77825€v') || (prime != 'Entre 57609€ et 86569€v') || (prime != 'Entre 63406€ et 95313€v') || (prime != 'Entre 69203€ et 104057€v') || (prime != 'Entre 75000€ et 112801€v')|| (prime != 'Entre 80797€ et 121545€v') || (prime != 'Entre 86594€ et 130289€v')) {
           document.getElementById('display15').innerHTML = "Vous etez dans un ménage Violet(Intermédiare)";
        }else {
            console.log('yarien');
        }
    }
      function Rose() {
        if((prime != 'Superieur à 29148€') || (prime != 'Superieur à 42848€') || (prime != 'Superieur à 51592€') || (prime != 'Superieur à 60336€') || (prime != 'Superieur à 69081€') || (prime != 'Superieur à 77825€') || (prime != 'Superieur à 86569€') || (prime != 'Superieur à 95313€') || (prime != 'Superieur à 104057€') || (prime != 'Superieur à 112801€')|| (prime != 'Superieur à 121545€') || (prime != 'Superieur à 130289€')) {
           document.getElementById('display15').innerHTML = "Vous etez dans un ménage Rose(Aisé)";
        }else {
            console.log('yarien');
        }
    }
    //affiche 4 Montant d'aide Possible
    function primeBlue() {
        if(document.getElementById("display14")?.innerHTML == 'Inferieur à 15262€') {
           document.getElementById('display16').innerHTML = "10 500 EUROS";
        } else {
            console.log('pas de prime Bleu');
        }
    }
    //Reaction attendu pour prime Blue
        function primeJaune() {
        if((prime != 'Entre 15262€ et 19565€') || (prime != 'Entre 19565€ et 29148€') || (prime != 'Entre 26844€ et 34441€') || (prime != 'Entre 31359€ et 40201€') || (prime != 'Entre 35894€ et 46015€') || (prime != 'Entre 40420€ et 51812€') || (prime != 'Entre 44946€ et 57609€') || (prime != 'Entre 49472€ et 63406€') || (prime != 'Entre 53998€ et 69203€') || (prime != 'Entre 58524€ et 75000€')|| (prime != 'Entre 63050€ et 80797€') || (prime != 'Entre 67576€ et 86594€')) {
           document.getElementById('display16').innerHTML = "10 500 EUROS";
        }else {
            console.log('n');
        }
    }
            function primeViolet() {
        if((prime != 'Entre 19565€ et 29148€v') || (prime != 'Entre 28614€ et 42848€v') || (prime != 'Entre 34411€ et 51592€v') || (prime != 'Entre 40201€ et 60336€v') || (prime != 'Entre 46015€ et 69081€v') || (prime != 'Entre 51812€ et 77825€v') || (prime != 'Entre 57609€ et 86569€v') || (prime != 'Entre 63406€ et 95313€v') || (prime != 'Entre 69203€ et 104057€v') || (prime != 'Entre 75000€ et 112801€v')|| (prime != 'Entre 80797€ et 121545€v') || (prime != 'Entre 86594€ et 130289€v')) {
           document.getElementById('display16').innerHTML = "7500 EUROS";
        }else {
            console.log('n');
        }
    }
    
        function primeRose() {
        if(document.getElementById("display14")?.innerHTML == 'Superieur à 29148€') {
           document.getElementById('display16').innerHTML = "3500 EUROS";
        }else {
            console.log('pas de prime Rose');
        }
    }  
   setInterval(function(){primeBlue();},50000); 
   setInterval(function(){primeRose();},53000);
</script>
