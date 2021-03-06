/**
 * Created by lebovo on 2017/10/29.
 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>1280){
                docEl.style.fontSize = 100 * (clientWidth / 1903) + 'px';
            }
            else
                docEl.style.fontSize = 73.56805044666316  + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);