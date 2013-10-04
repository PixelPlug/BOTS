function initUIListeners()
{
    /*
     * Toggle userlist.
     */
    $('#plugbot-btn-userlist').on("click", function()
    {
        userList = !userList;
        $(this).css('color', userList ? '#3FFF00' : '#ED1C24');
        $('#plugbot-userlist').css('visibility', userList ? 'visible' : 'hidden');

        if (!userList)
        {
            $('#plugbot-userlist').empty();
        }
        else
        {
            populateUserlist();
        }
        jaaulde.utils.cookies.set(COOKIE_USERLIST, userList);
    });

    /*
     * Toggle auto-woot.
     */
    $('#plugbot-btn-woot').on('click', function()
    {
        autowoot = !autowoot;
        $(this).css('color', autowoot ? '#3FFF00' : '#ED1C24');

        if (autowoot)
        {
            $('#button-vote-positive').click();
        }

        jaaulde.utils.cookies.set(COOKIE_WOOT, autowoot);
    });

    /*
     * Toggle hide video.
     */
    $('#plugbot-btn-hidevideo').on('click', function()
    {
        hideVideo = !hideVideo;
        $(this).css('color', hideVideo ? '#3FFF00' : '#ED1C24');
        $(this).text(hideVideo ? 'hiding video' : 'hide video');
        $('#yt-frame').animate(
            {
                'height': (hideVideo ? '0px' : '271px')
            },
            {
                duration: 'fast'
            });
        $('#playback .frame-background').animate(
            {
                'opacity': (hideVideo ? '0' : '0.91')
            },
            {
                duration: 'medium'
            });
        jaaulde.utils.cookies.set(COOKIE_HIDE_VIDEO, hideVideo);
    });

    /*
     * Skip the current video.
     */
    $('#plugbot-btn-skipvideo').on('click', function()
    {
        skippingVideo = !skippingVideo;
        $(this).css('color', skippingVideo ? '#3FFF00' : '#ED1C24');
        $(this).text(skippingVideo ? 'skipping video' : 'skip video');
        if (hideVideo == skippingVideo)
        {
            $('#button-sound').click();
        }
        else
        {
            $('#plugbot-btn-hidevideo').click();
            $('#button-sound').click();
        }
    });

    /*
     * Toggle auto-queue/auto-DJ.
     */
    $('#plugbot-btn-queue').on('click', function()
    {
        autoqueue = !autoqueue;
        $(this).css('color', autoqueue ? '#3FFF00' : '#ED1C24');

        if (autoqueue && !isInQueue())
        {
            joinQueue();
        }
        jaaulde.utils.cookies.set(COOKIE_QUEUE, autoqueue);
    });
}
