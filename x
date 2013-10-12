function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function main() 
{
  $("body").append ('<div id="idLargePicturePopupWindow"><img></div>');

$('#idLargePicturePopupWindow').bind 
(
    "mouseenter mouseleave",
    {bInPopup: true},
    myImageHover
);

$('#profPhotos .profPhotoLink > img').bind 
(
    "mouseenter mouseleave",
    {bInPopup: false},
    myImageHover
);

function myImageHover (zEvent) 
{
    if (zEvent.type == 'mouseenter') 
    {

        if ( ! zEvent.data.bInPopup) 
        {

            var imgurl = this.src.toString();
            var bigimg = imgurl.replace(/\/thumbs\/[0-9x]+\//i, "/photos/");

            $("#idLargePicturePopupWindow img").attr ('src', bigimg);
        }

        $("#idLargePicturePopupWindow").show();
    }
    else 
    {
        $("#idLargePicturePopupWindow").hide();
    }
}

GM_addStyle ( (<><![CDATA[
    #idLargePicturePopupWindow 
    {
        position:               absolute;
        background:             white;
        border:                 none;
        margin:                 1ex;
        opacity:                1.0;
        z-index:                1222;
        min-height:             100px;
        min-width:              200px;
        padding:                0;
        display:                none;
        top:                    2em;
        left:                   50em;
    }
    #idLargePicturePopupWindow img 
    {
        margin:                 0;
        margin-bottom:          -4px;
        padding:                0;
    }
]]></>).toString () );
}

addJQuery(main);
