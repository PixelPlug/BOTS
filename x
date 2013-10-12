    <script type="text/javascript">// <![CDATA[
    var imageCount = 0;
    var currentImage = 0;
    var images = new Array();
     
    images[0] = 'ENDERECO DA IMAGEM';
    images[1] = 'ENDERECO DA IMAGEM';
    images[2] = 'ENDERECO DA IMAGEM';
    images[3] = 'ENDERECO DA IMAGEM';
    images[4] = 'ENDERECO DA IMAGEM';
     
    var preLoadImages = new Array();
    for (var i = 0; i < images.length; i++)
    {
    if (images[i] == "")
    break;
     
    preLoadImages[i] = new Image();
    preLoadImages[i].src = images[i];
    imageCount++;
    }
     
    function startSlideShow()
    {
    if (document.body && imageCount > 0)
    {
    document.body.style.backgroundImage = "url("http://img833.imageshack.us/img833/156/mbum.jpg")";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundRepeat = "repeat";
    document.body.style.backgroundPosition = "left top";
     
    currentImage = currentImage + 1;
    if (currentImage > (imageCount-1))
    {
    currentImage = 0;
    }
    setTimeout('startSlideShow()', 3000);
    }
    }
    startSlideShow();
    // ]]></script>
