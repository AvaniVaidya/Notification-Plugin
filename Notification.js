(function($) {

    var count = 0;
    //var audio = new Audio('done-for-you-612.mp3');
    $(function(){
        var notificationIcon = document.getElementsByClassName("notificationButton");
        $(notificationIcon).append('<button type = "button" class="openButton" style="border:none; outline:none;"><img src="BellIcon2.png" width="85%" height="85%" style="border-radius:50%"></button>');
    //})
    
    //$.fn.Notification = function(){

        var notificationButton = document.getElementsByClassName("openButton");
        $(notificationButton).append('<span id = "notificationCount"></span>');
        addRemoveCount(count);

        $("<div/>").attr('id','modalbox').appendTo('body');

        var mySidePanel = document.getElementsByClassName("sidePanel");

        $(mySidePanel).append('<div id = "closePane"><button type = "button" class="closeButton btn" onclick="$(this).removeActive()">X</button></div>')
        $(mySidePanel).append('<ul id = "listNotifications"></ul>');

    });

    function newNotification( message, definition) {
                
        var html = '<li>';
        html += '<button class = "removeItem" onclick="$(this).removeListItem()">x</button>'
        html += '<a href = "#"  id="listNotificationMessage" onclick="$(this).notificationDialog(\'' + message + '\',\'' + definition + '\');">';
        html += message;
        html += '</a>';
        html += '</li>';

        $("#listNotifications").append(html);

    }

    function addRemoveCount(count)
    {
        if(count === 0) {
            $("#notificationCount").addClass('hideNotificationCount');
            $("#notificationCount").text(count);
        }
        else {
            $("#notificationCount").removeClass('hideNotificationCount');
            $("#notificationCount").text(count);
        }
    }

    $.fn.notificationDialog = function(message, definition) {
        
        var html =  '<div id="modalWindow" class="modal fade" role="dialog">';
        html += '<div class="modal-dialog modal-dialog-centered">';
        html += '<div class="modal-content">';
        html += '<div class="modal-header">';
        html += '<h4>' + message + '</h4>';
        html += '</div>';
        html += '<div class="modal-body">';
        html += '<p>' + definition + '</p>';
        html += '</div>';
        html += '<div class="modal-footer">';
        html += '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>';
        html += '</div>';  // footer
        html += '</div>';  //content
        html += '</div>';  //dialog
        html += '</div>';  // modalWindow

        $('#modalbox').html(html);

        $("#modalWindow").modal();
    }


    $.fn.removeActive = function() {
        $("#mySidePanel").removeClass('active');
    }

    $.fn.removeListItem = function() {
        $(this).parent().remove();
        count = count-1;
        addRemoveCount(count);
    }

    function toggleActive() {
        $("#mySidePanel").toggleClass('active');
    }

    $(function(){
        $(".openButton").click(toggleActive);
    })

   $(function(){
    var source = new EventSource("https://localhost:44332/notification");

    source.addEventListener('message', function (e) {
        //var data = JSON.parse(e);
        console.log(e);

        for(var i=0; i<data.length; i++)
        {
            newNotification(data[i].summary,data[i].description);
            count = count+1;
            addRemoveCount(count);
        }

        // newNotification(data.summary,data.description);
        // count = count+1;
        // addRemoveCount(count);
        //audio.play();

    }, false)

    source.addEventListener('open', function (e) {
        console.log("Connection Established");
    }, false)

    source.addEventListener('error', function (e) {
        if (e.eventPhase == EventSource.CLOSED)
            source.close()
        if (e.target.readyState == EventSource.CLOSED) {
            console.log("Disconnected");
        }
        else if (e.target.readyState == EventSource.CONNECTING) {
            console.log("Connecting...");
        }
    }, false)

    })

})(jQuery);