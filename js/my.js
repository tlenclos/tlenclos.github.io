$(document).ready(function() {
    // Navigation
    $('#sub-header').onePageNav({
        currentClass: 'pure-menu-selected',
        filter: ':not(.external)',
        changeHash: false,
        scrollSpeed: 850,
        scrollOffset: 60,
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
});