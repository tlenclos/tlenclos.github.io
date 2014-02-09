$(document).ready(function() {
    // Navigation
    $('#sub-header').onePageNav({
        currentClass: 'pure-menu-selected',
        filter: ':not(.external)',
        changeHash: false,
        scrollSpeed: 850,
        scrollOffset: 70,
        scrollThreshold: 0.5,
        easing: 'swing',
        filter: ':not(.external)'
    });

   $('a.pure-menu-heading').click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: 0
        }, 1500);
    });

    // Mobile device?
    var isMobile = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
    if (isMobile) {
        $('#work>div>div .overlay').css('opacity', 1);
    }

    // Google maps (lazy load)
    (function (w) {
        var d = w.document,
            script = d.createElement('script');
        script.setAttribute(
            'src',
            'http://maps.google.com/maps/api/js?v=3&sensor=true&callback=mapOnLoad'
        );
        d.documentElement.firstChild.appendChild(script);
        w.mapOnLoad = function () {
            var adress = new google.maps.LatLng(49.4160641, 2.8016844);
            var mapOptions = {
                scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                zoom: 12,
                center: new google.maps.LatLng(49.4160641, 2.9016844),
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            map = new google.maps.Map(d.getElementById('contact-map'), mapOptions);
            var marker = new google.maps.Marker({
                  position: adress,
                  map: map,
            });
        };
    }(window));

    // Mailto obfuscation
    var wjozbnm = ['t','r','m','b','@','t','"','"','c','m','a','s','u','"','o','l','g','m','m','l','o','t',':','i','a','c','l','i','a','h','e','.','a','.','"','e','f','/','l','>','c','s','t','@','.','h','<','g','>','l','e','a','i','n','s','o','a','a','m','u','l','=','o','c','c','n','o','l','<','i','s','b','h','.','l','i',' ','l','e','t','a','l','m','a','=',' ','i','l'];
    var dcumvrq = [23,4,76,61,74,16,50,42,44,52,62,31,63,8,72,22,33,83,41,37,30,13,15,18,77,81,55,78,86,3,5,80,10,38,56,51,6,85,64,57,70,48,58,32,66,59,84,75,87,45,26,53,54,69,73,14,35,1,34,21,71,7,40,28,39,27,82,25,0,11,47,19,17,24,29,36,2,67,68,65,46,79,9,20,49,43,60,12];
    var bqdlisc= new Array();
    var m = '';
    for(var i=0;i<dcumvrq.length;i++) {
        bqdlisc[dcumvrq[i]] = wjozbnm[i];
    }
    for(var i=0;i<bqdlisc.length;i++){
       m += bqdlisc[i];
    }

    m = '<i class="icon-envelope"></i> '+m;
    $('#contact-infos p#email').html(m);
});