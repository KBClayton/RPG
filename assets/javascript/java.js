$(document).ready(function() {
    var pcharc1=$("#char1");
    var pcharc2=$("#char2");
    var pcharc3=$("#char3");
    var pcharc4=$("#char4");
    var encharc1=$("#echar1");
    var encharc2=$("#echar2");
    var encharc3=$("#echar3");
    var encharc4=$("#echar4");
    var ctext=$("#character");
    var etext=$("#echaracter");

    


    var pchar = {
        notchosen: true,
        hitp: 0,
        attk: 0,
        battk: 0

    };

    var echar = {
        notchosen: true,
        hitp: 0,
        attk: 0,
        defeated: []
    };

    var game = {
        fdisplay: function(){
            console.log(echar.defeated);
            console.log(echar.hitp);
            console.log("echar defeated: "+echar.defeated.length);
            switch(echar.defeated[0]){
                case "1":    $("#htext1").text(pchar.hitp);
                                break;
                case "2":   $("#htext2").text(pchar.hitp);
                                break;
               case "3":   $("#htext3").text(pchar.hitp);
                                break;
                case "4":    $("#htext4").text(pchar.hitp);
                        break;
                default: break;
                };
            switch(echar.defeated[(echar.defeated.length-1)]){
                case "1":   $("#ehtext1").text(echar.hitp);
                                break;
                case "2":   $("#ehtext2").text(echar.hitp);
                                break;
               case "3":   $("#ehtext3").text(echar.hitp);
                                break;
                case "4":   $("#ehtext4").text(echar.hitp);
                            break;
                default: break;
                };


        },
        ehide: function(){
            document.getElementById("echar1").style.display = 'none';
            document.getElementById("echar2").style.display = 'none';
            document.getElementById("echar3").style.display = 'none';
            document.getElementById("echar4").style.display = 'none';
            document.getElementById("atkbtn").style.display = 'none';

        },

        vdisplay: function(){
            pchar.notchosen=true;
            etext.text("Choose an enemy");
            if(!(echar.defeated.indexOf("1")>-1)){
                document.getElementById("echar1").style.display = 'inline';
                
            }
            if(!(echar.defeated.indexOf("2")>-1)){
                document.getElementById("echar2").style.display = 'inline';
           
            }
            if(!(echar.defeated.indexOf("3")>-1)){
                document.getElementById("echar3").style.display = 'inline';
       
            }
            if(!(echar.defeated.indexOf("4")>-1)){
                document.getElementById("echar4").style.display = 'inline';
         
            }
        },

        pchoosechar: function(wclass){
            if (pchar.notchosen){
                switch(wclass){
                    case "1":  
                                document.getElementById("char2").style.display = 'none';
                                document.getElementById("char3").style.display = 'none';
                                document.getElementById("char4").style.display = 'none';
                                pchar.hitp=100;
                                pchar.battk=10;
                                pchar.attk=10;
                                echar.defeated.push("1");
                                break;
                    case "2":   document.getElementById("char1").style.display = 'none';
                                document.getElementById("char3").style.display = 'none';
                                document.getElementById("char4").style.display = 'none';
                                pchar.hitp=120;
                                pchar.battk=9;
                                pchar.attk=9;
                                echar.defeated.push("2");
                                break;
                    case "3":   document.getElementById("char2").style.display = 'none';
                                document.getElementById("char1").style.display = 'none';
                                document.getElementById("char4").style.display = 'none';
                                pchar.hitp=150;
                                pchar.battk=8;
                                pchar.attk=8;
                                echar.defeated.push("3");
                                break;
                    case "4":   document.getElementById("char2").style.display = 'none';
                                document.getElementById("char3").style.display = 'none';
                                document.getElementById("char1").style.display = 'none';
                                pchar.hitp=180;
                                pchar.battk=7;
                                pchar.attk=7;
                                echar.defeated.push("4");
                                break;
                    default: break;
                };
                console.log(wclass)
                pchar.notchosen=false;
                ctext.text("Your mech");
                etext.text("Choose an enemy");
            }
            else{
                return;
            }
        },

        echoosechar: function(eclass){
            console.log("in echoosechar")
            if(echar.notchosen){
                switch(eclass){
                    case "1":   document.getElementById("echar2").style.display = 'none';
                                document.getElementById("echar3").style.display = 'none';
                                document.getElementById("echar4").style.display = 'none';
                                echar.hitp=100;
                                echar.attk=10;
                               // pchar.attk=pchar.battk;
                                echar.defeated.push("1");
                                break;
                    case "2":   document.getElementById("echar1").style.display = 'none';
                                document.getElementById("echar3").style.display = 'none';
                                document.getElementById("echar4").style.display = 'none';
                                echar.hitp=120;
                                echar.attk=15;
                             //   pchar.attk=pchar.battk;
                                echar.defeated.push("2");
                                break;
                    case "3":   document.getElementById("echar2").style.display = 'none';
                                document.getElementById("echar1").style.display = 'none';
                                document.getElementById("echar4").style.display = 'none';
                                echar.hitp=150;
                                echar.attk=20;
                               // pchar.attk=pchar.battk;
                                echar.defeated.push("3");
                                break;
                    case "4":   document.getElementById("echar2").style.display = 'none';
                                document.getElementById("echar3").style.display = 'none';
                                document.getElementById("echar1").style.display = 'none';
                                echar.hitp=180;
                                echar.attk=25;
                              //  pchar.attk=pchar.battk;
                                echar.defeated.push("4");
                                break;
                    default: break;
                };
                echar.notchosen=false;
                document.getElementById("atkbtn").style.display = 'inline';
                etext.text("Your enemy");
                return;
            }
            else{
                return;
            }
        },
        fight: function(){
            if(echar.notchosen==false && echar.hitp>0 && pchar.hitp>0){
                echar.hitp=echar.hitp-pchar.attk;
                pchar.hitp=pchar.hitp-echar.attk;
                pchar.attk+=pchar.battk;
                console.log(pchar.hitp+"   "+echar.hitp)
                this.fdisplay();
            }
            this.winloss();
        },
        winloss: function(){
            if (echar.hitp<=0){
                if(echar.defeated.length==4){
                    alert("You win");
                    this.reset();
                    return;
                }
                else{
                    echar.notchosen=true;
                    this.ehide();
                    this.vdisplay();
                    return;
                }
            }
            else if(pchar.hitp<=0){
                alert("You lose");
                this.reset();
                return;

            }
            else{
                return;
            }

        },
        reset: function(){
            echar.notchosen=true;
            echar.hitp=0;
            echar.attk=0;
            echar.defeated=[];
            pchar.notchosen=true;
            pchar.attk=0;
            pchar.hitp=0;
            ctext.text("Choose a mech");
            etext.text(" ");
            document.getElementById("char1").style.display = 'inline';
            document.getElementById("char2").style.display = 'inline';
            document.getElementById("char3").style.display = 'inline';
            document.getElementById("char4").style.display = 'inline';
            this.ehide();
            $("#htext1").text("100"); 
            $("#htext2").text("120"); 
            $("#htext3").text("150"); 
            $("#htext4").text("180"); 
            $("#ehtext1").text("100");
            $("#ehtext2").text("120");
            $("#ehtext3").text("150"); 
            $("#ehtext4").text("180");         
        }
    };



    game.reset();
  
    $("#char1").on("click", function() {
        game.pchoosechar("1");
        game.vdisplay();
    });
    $("#char2").on("click", function() {
        game.pchoosechar("2");
        game.vdisplay();
    });
    $("#char3").on("click", function() {
        game.pchoosechar("3");
        game.vdisplay();
    });
    $("#char4").on("click", function() {
        game.pchoosechar("4");
        game.vdisplay();
    });

    $("#echar1").on("click", function() {
        game.echoosechar("1");
    });
    $("#echar2").on("click", function() {
        game.echoosechar("2");
    });
    $("#echar3").on("click", function() {
        game.echoosechar("3");
    });
    $("#echar4").on("click", function() {
        game.echoosechar("4");
    });

    $("#rbtn").on("click", function() {
        game.reset();
    });
    $("#atkbtn").on("click", function() {
        game.fight();
    });

});