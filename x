if (typeof plugCubed !== 'undefined') plugCubed.close();
String.prototype.equalsIgnoreCase = function(a) { return typeof a !== 'string' ? false : this.toLowerCase() === a.toLowerCase(); };
String.prototype.startsWith = function(a) { return typeof a !== 'string' || a.length > this.length ? false : this.indexOf(a) === 0; };
String.prototype.endsWith = function(a) { return typeof a !== 'string' || a.length > this.length ? false : this.indexOf(a) === this.length-a.length; };
String.prototype.startsWithIgnoreCase = function(a) { return typeof a !== 'string' || a.length > this.length ? false : this.toLowerCase().startsWith(a.toLowerCase()); };
String.prototype.endsWithIgnoreCase = function(a) { return typeof a !== 'string' || a.length > this.length ? false : this.toLowerCase().endsWith(a.toLowerCase()); };
String.prototype.isNumber = function() { return !isNaN(parseInt(this,10)) && isFinite(this); };
String.prototype.isHEX = function() { return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.substr(0,1) === '#' ? this : '#' + this); };
Math.randomRange = function(a,b) { return a + Math.floor(Math.random()*(b-a+1)); };
var _PCL, plugCubed, plugCubedUserData,
disconnected = false;
console.info = function(data) {
    console.log(data);
    if (_PCL !== undefined) {
        var a = $('#chat-messages'),b = a.scrollTop() > a[0].scrollHeight - a.height() - 20;
        a.append('<div class="chat-update"><span class="chat-text" style="color:#FF0000">' + plugCubed.i18n('disconnected',plugCubed.getTimestamp()) + ' ' + plugCubed.i18n('reloading') + '</span></div>');
        b && a.scrollTop(a[0].scrollHeight);
        return setTimeout(function() { location.reload(true); },3E3);
    }
    if (!disconnected) {
        disconnected = true;
        var a = $('#chat-messages'),b = a.scrollTop() > a[0].scrollHeight - a.height() - 20;
        a.append('<div class="chat-update"><span class="chat-text" style="color:#FF0000">' + plugCubed.i18n('disconnected',plugCubed.getTimestamp()) + '</span></div>');
        b && a.scrollTop(a[0].scrollHeight);
    }
};
