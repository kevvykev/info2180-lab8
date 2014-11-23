window.onload = function() {
    on_load(); 
};

/*function on_load() {
    //<button id="lookup">Lookup</button>
    var button = document.getElementById("lookup") */
    
    // listener
   // button.addEventListener( "click", al_ert);
    
    function on_load() {
    //<button id="lookup">Lookup</button>
    var button = document.getElementById("lookup").addEventListener( "click", al_ert());
    
function load_XMLDoc() {
    var xmlhttp;
    var txt, x, i;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else { 
        // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
        
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            
            xmlDoc = xmlhttp.responseXML;
            txt="";
            x=xmlDoc.getElementsByTagName("Jamaica");
    
            for (i=0;i<x.length;i++) {
                txt=txt + x[i].childNodes[0].nodeValue + "<br>";
                }
                
            document.getElementById("lookup").innerHTML=txt;
        }
         }
  
    xmlhttp.open("GET","country.xml",true);
    xmlhttp.send();
}  
    
/*    if( button.addEventListener() ) {
        
        button.addEventListener( "click", al_ert, true);
    }
    else {
        button.attachEvent( "click", al_ert);
    }     */ 
    /* --------------------------------------------------------------------------- */
   /* document.observe("dom:loaded", function() {
                                    $("lookup").observe("click"), function() {
                                    new Ajax.Request("world.php", 
                                                     {
                                    method: "GET", 
                                        onSucess: function(response) {
                                        alert(response.responseText);
                                        },
                                        onFailure: function(response) {
                                        alert('ehh...Errors, what you gonna do :P');
                                        }
                                    }
                                    }}); */
    
    /* --------------------------------------------------------------------------- */
    /*============================================================================*/ 
   
    /*$(document).ready( function() {
        var response = '';
        $.ajax( { type: "GET",
                 url: "world.php", 
                 async: false, 
                 success : function(text) {
                     response = text;
                    }
                });

            alert(response);
        }); */
    /*============================================================================*/
}

function al_ert() {
     document.observe("dom:loaded", function() {
         $("lookup").observe("click"), function() {
             new Ajax.Request("world.php", 
             {
                  method: "GET", 
                                        onSucess: function(response) {
                                        alert(response.responseText);
                                        },
                                        onFailure: function(response) {
                                        alert('ehh...Errors, what you gonna do :P');
                                        }
                                    }
                                    }});
    );
    
    //alert("alert");
    }
    
/* function look_up(cname) {
    this.cname = "";
    ?lookup=cname;
} */
//window.onload = on_load;
