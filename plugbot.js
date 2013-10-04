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
