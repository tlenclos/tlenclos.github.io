/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'ThibzFont\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-phone' : '&#xf095;',
			'icon-phone-2' : '&#xe000;',
			'icon-envelope' : '&#xe001;',
			'icon-envelope-alt' : '&#xf0e0;',
			'icon-moto2' : '&#xe002;',
			'icon-map-marker' : '&#xf041;',
			'icon-location' : '&#xe003;',
			'icon-headphones' : '&#xe004;',
			'icon-headphones-2' : '&#xf025;',
			'icon-gamepad' : '&#xf11b;',
			'icon-graduation' : '&#xe005;',
			'icon-coffee' : '&#xe006;',
			'icon-coffee-2' : '&#xf0f4;',
			'icon-puzzle' : '&#xf12e;',
			'icon-github-alt' : '&#xf113;',
			'icon-github' : '&#xf09b;',
			'icon-cross' : '&#xe007;',
			'icon-remove-sign' : '&#xf057;',
			'icon-file-alt' : '&#xf0f6;',
			'icon-file' : '&#xf016;',
			'icon-camera' : '&#xe008;',
			'icon-facetime-video' : '&#xf03d;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};