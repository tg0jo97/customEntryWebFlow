<p><span id='display16'></span></p>

<script  async type="text/javascript">
    //affiche 4 Montant d'aide Possible euros
    function primeBlue() {
        if((document.getElementById("display14")?.innerHTML == 'Inferieur à 15262€') || (document.getElementById("display14")?.innerHTML == 'Inferieur à 22320€') || (document.getElementById("display14")?.innerHTML == 'Inferieur à 26844€') || (document.getElementById("display14")?.innerHTML == 'Inferieur à 31359€') || (document.getElementById("display14")?.innerHTML == 'Inferieur à 35894€') || (document.getElementById("display14")?.innerHTML == 'Inferieur à 40420€') || (document.getElementById("display14")?.innerHTML == 'Inferieur à 44946€') || (document.getElementById("display14")?.innerHTML == 'Inferieur à 49472€') || (document.getElementById("display14")?.innerHTML == 'Inferieur à 53998€') || (document.getElementById("display14")?.innerHTML == 'Inferieur à 58524€')|| (document.getElementById("display14")?.innerHTML == 'Inferieur à 63050€') || (document.getElementById("display14")?.innerHTML == 'Inferieur à 67576€')) {
           document.getElementById('display16').innerHTML = "15 000 EUROS";
        } else {
            console.log('pas de prime Bleu');
        }
    }
    //Reaction attendu pour prime Blue
        function primeJaune() {
        if((document.getElementById("display14")?.innerHTML == 'Entre 15262€ et 19565€') || (document.getElementById("display14")?.innerHTML == 'Entre 22320€ et 28614€') || (document.getElementById("display14")?.innerHTML == 'Entre 26844€ et 34441€') || (document.getElementById("display14")?.innerHTML == 'Entre 31359€ et 40201€') || (document.getElementById("display14")?.innerHTML == 'Entre 35894€ et 46015€') || (document.getElementById("display14")?.innerHTML == 'Entre 40420€ et 51812€') || (document.getElementById("display14")?.innerHTML == 'Entre 44946€ et 57609€') || (document.getElementById("display14")?.innerHTML == 'Entre 49472€ et 63406€') || (document.getElementById("display14")?.innerHTML == 'Entre 53998€ et 69203€') || (document.getElementById("display14")?.innerHTML == 'Entre 58524€ et 75000€')|| (document.getElementById("display14")?.innerHTML == 'Entre 63050€ et 80797€') || (document.getElementById("display14")?.innerHTML == 'Entre 67576€ et 86594€')) {
           document.getElementById('display16').innerHTML = "10 500 EUROS";
        }else {
            console.log('pas de prime Jaune');
        }
    }
            function primeViolet() {
        if(( document.getElementById("display14")?.innerHTML == 'Entre 19565€ et 29148€') || (document.getElementById("display14")?.innerHTML == 'Entre 28614€ et 42848€') || (document.getElementById("display14")?.innerHTML == 'Entre 34411€ et 51592€') || (document.getElementById("display14")?.innerHTML == 'Entre 40201€ et 60336€') || (document.getElementById("display14")?.innerHTML == 'Entre 46015€ et 69081€') || (document.getElementById("display14")?.innerHTML == 'Entre 51812€ et 77825€') || (document.getElementById("display14")?.innerHTML == 'Entre 57609€ et 86569€') || (document.getElementById("display14")?.innerHTML == 'Entre 63406€ et 95313€') || (document.getElementById("display14")?.innerHTML == 'Entre 69203€ et 104057€') || (document.getElementById("display14")?.innerHTML == 'Entre 75000€ et 112801€')|| (document.getElementById("display14")?.innerHTML == 'Entre 80797€ et 121545€') || (document.getElementById("display14")?.innerHTML == 'Entre 86594€ et 130289€')) {
           document.getElementById('display16').innerHTML = "7 500 EUROS";
        }else {
            console.log('Pas de prime Violet');
        }
    }
    
        function primeRose() {
        if((document.getElementById("display14")?.innerHTML == 'Superieur à 29148€') || (document.getElementById("display14")?.innerHTML == 'Superieur à 42848€') || (document.getElementById("display14")?.innerHTML == 'Superieur à 51592€') || (document.getElementById("display14")?.innerHTML == 'Superieur à 60336€') || (document.getElementById("display14")?.innerHTML == 'Superieur à 69081€') || (document.getElementById("display14")?.innerHTML == 'Superieur à 77825€') || (document.getElementById("display14")?.innerHTML == 'Superieur à 86569€') || (document.getElementById("display14")?.innerHTML == 'Superieur à 95313€') || (document.getElementById("display14")?.innerHTML == 'Superieur à 104057€') || (document.getElementById("display14")?.innerHTML == 'Superieur à 112801€')|| (document.getElementById("display14")?.innerHTML == 'Superieur à 121545€') || (document.getElementById("display14")?.innerHTML == 'Superieur à 130289€')) {
           document.getElementById('display16').innerHTML = "3 500 EUROS";
        }else {
            console.log('pas de prime Rose');
        }
    }  
   setInterval(function(){primeBlue();},33500); 
   setInterval(function(){primeJaune();},33800); 
   setInterval(function(){primeViolet();},34300); 
   setInterval(function(){primeRose();},36950);
    </script>
