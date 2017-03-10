var trim = function (string) {
	return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

export const on = function (el, event, handler) {
	if (el && event && handler) {
		if (el.addEventListener) {
			el.addEventListener(event, handler, false);
		}
		// IE6到IE8
		else if (el.attachEvent) {
			el.attachEvent('on' + event, handler);
		}
		// IE5
		else {
			el['on' + event] = event;
		}
	}
};

export const off = function (el, event, handler) {
	if (el && event && handler) {
		if (el.removeEventListener) {
			el.removeEventListener(event, handler, false);
		}
		// IE6到IE8
		else if (el.detachEvent) {
			el.detachEvent('on' + event, handler);
		}
		// IE5
		else {
			el['on' + event] = null;
		}
	}
};
export const hasClass = function (el, cls) {
	if (!el || !cls) return false;
	if (cls.indexOf(' ') != -1) throw new Error('className should not contain space.');
	if (el.classList) {
		return el.classList.contains(cls);
	}
	else {
		return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
	}
};
export const addClass = function (el, cls) {
	if (!el) return;
	var curClass = el.className;
	var classes = (cls || '').split(' ');

	for (var i = 0, j = classes.length; i < j; i++) {
		var clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.add(clsName);
		} else {
			if (!hasClass(el, clsName)) {
				curClass += ' ' + clsName;
			}
		}
	}
	if (!el.classList) {
		el.className = curClass;
	}
};
export const removeClass = function (el, cls) {
	if (!el || !cls) return;
	var classes = cls.split(' ');
	var curClass = ' ' + el.className + ' ';

	for (var i = 0, j = classes.length; i < j; i++) {
		var clsName = classes[i];
		if (!clsName) continue;

		if (el.classList) {
			el.classList.remove(clsName);
		} else {
			if (hasClass(el, clsName)) {
				curClass = curClass.replace(' ' + clsName + ' ', ' ');
			}
		}
	}
	if (!el.classList) {
		el.className = trim(curClass);
	}
};

export const isIE = function () {
	var ua = navigator.userAgent.toLowerCase();
	var result = ua.match(/msie ([\d.]+)/) || ua.match(/rv:([\d.]+)\) like gecko/);
	return !!result && result.length > 0;
};

export const getOffsetParent = function (el) {
	var parent = null,
		parents = $(el).parents();

	parents.each(function (i, e) {
		if ($(e).css('position') === 'fixed') {
			parent = e;
			return parent;
		}
	});
	return parent;
}
export const getPos = function (el) {
	var rec = el.getBoundingClientRect();

	return {
		top: rec.top,
		left: rec.left,
		right: rec.right,
		bottom: rec.bottom
	};
	var offset = {
		top: el.offsetTop,
		left: el.offsetLeft
	};
	if (el.offsetParent) {
		var pos = getPos(el.offsetParent);
		offset.top += pos.top;
		offset.left += pos.left;
	}
	return offset;
}
/**
 * 设置选择器的位置，默认在寄宿元素的下方，该位置会自适应页面变化
 * @param {*dom} el 
 */
export const setPos = function (el) {
	// el.style.display = 'block';
	$(el).css({
		right: '',
		bottom: ''
	});
	var parent = $(el).parent()[0],
		offset = getPos(parent),
		winW = $(window).width(),
		winH = $(window).height(),
		right = 0,
		bottom = 0,
		isReset = false,
		style = {};

	bottom = winH - offset.bottom - el.offsetHeight;
	right = winW - offset.right - el.offsetWidth;

	if (bottom < 0) {
		isReset = true;
		style.top = offset.top - el.offsetHeight + 'px';
	}
	if (right < 0) {
		isReset = true;
		style.left = offset.left - el.offsetWidth + 'px';
	}
	isReset && $(el).css(style);
}