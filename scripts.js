"use strict";


function randomColor() {

    var nodelist = document.getElementsByClassName("differentColors").length;
    //console.log(nodelist);
    for (var i = 1; i <= nodelist; i++) {
        var k = "wrap" + i;
        var node = document.getElementById(k);
			//	console.log(k);
        var colorAuto = "#";

        for (var f = 0; f < 6; f++) {
            var rand = Math.floor(Math.random() * 10);
            if (rand > 5 && f == 0) {
                rand = "B";
            } else if (rand > 2 && f == 3) {
                rand = "E";
            } else if (rand > 7 && f < 2) {
                rand = "A";
            } else if (rand > 8 && f < 5) {
                rand = "C";
            } else if (rand > 3 && f < 1) {
                rand = "D";
            } else if (rand == 4 && f < 7) {
                rand = "F";
            }
            colorAuto += rand;
        }
      //  console.log(colorAuto);
//console.log(node);
        node.style.backgroundColor = colorAuto;

       console.log(node.style.backgroundColor);

      //  node.style.boxShadow = '2px 2px 5px 1px ' + colorAuto + ',  4px 4px 2px 0px black';

    }
}
