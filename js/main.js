$(document).ready(function(){
    
    $("#b_1").click(function(){
         $("#content_box").hide().fadeIn('slow');
         $("#content_box").css("background-image","url('../img/aca.png')");
        $("#content_box").css("background-position", "750% 500%");
       $("#inner_box").css("background-color"," mediumseagreen");
        $("#inner_box").hide().html("<h1>Amazon Conservation Association</h1><p>I developed new web pages and multimedia content to promote an international species naming competiton within ACA's main website. Not only did I create the competition site, I also re-designed ACA's front page and worked on mainting ACA's Wordpress site, E-Newsletter templates, online graphics, and generated social media posts. Click down below to visit ACA's old, and newly re-designed website.</p> <a href='http://www.amazonconservation.org/' target='_blank'><button>Visit ACA</button></a>").fadeIn();
        
    });
    
    $("#b_2").click(function(){
        $("#content_box").hide().fadeIn('slow');
         $("#content_box").css("background-image","url('../img/bleevit.png')");
        $("#content_box").css("background-position", "98% 98%");
       $("#inner_box").css("background-color","lightblue");
       $("#inner_box").html("<h1>Bleevit Interactive</h1><p>I worked with Bleevit Interactive to create digital media content for The Mighty Movers LLC, a moving company located in the Northern Virginia area. I re-designed their social media profile photo, as well as their cover photo to accurately represent their brand. I also designed and implemented one of their slider images on their official website. Click down below to check out their website, and Facebook page.</p><a href='http://www.themightymoversllc.com/' target='_blank'><button>Visit Mighty Movers</button></a>");
        
    });

    $("#b_4").click(function(){
        $("#content_box").hide().fadeIn('slow');
       $("#content_box").css("background-image","url('../img/celer.png')");
        $("#inner_box").css("background-color","lightgreen");
       $("#content_box").css("background-position", "910% 70%");
         $("#inner_box").html("<h1>Celer.js</h1><p>A client side notes application that focuses on JavaScript's Local Storage API (web storage).</p><p>Note: Designed for Mobile Devices.</p><a href='http://josuearce.com/NotesAPP/' target='_blank'><button>Go to Celer</button></a>");
        
    });
    
});