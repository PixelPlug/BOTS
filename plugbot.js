function displayUI()
{
    /*
     * Be sure to remove any old instance of the UI, in case the user reloads the script without refreshing the page
     * (updating.)
     */
    $('#plugbot-ui').remove();

    /*
     * Generate the HTML code for the UI.
     */
    $('#chat').prepend('<div id="plugbot-ui"></div>');

    var cWoot = autowoot ? '#3FFF00' : '#ED1C24';
    var cQueue = autoqueue ? '#3FFF00' : '#ED1C24';
    var cHideVideo = hideVideo ? '#3FFF00' : '#ED1C24';
    var cUserList = userList ? '#3FFF00' : '#ED1C24';

    $('#plugbot-ui').append('<p id="plugbot-btn-woot" style="color:' + cWoot
        + '">auto-woot</p><p id="plugbot-btn-queue" style="color:' + cQueue
        + '">auto-queue</p><p id="plugbot-btn-hidevideo" style="color:' + cHideVideo
        + '">hide video</p><p id="plugbot-btn-skipvideo" style="color:#ED1C24">skip video</p><p id="plugbot-btn-userlist" style="color:'
        + cUserList + '">userlist</p>');
}
