function resize()
            {
                var heights = window.innerHeight;
                document.getElementById("link").style.height =  heights  + "px";
                document.getElementById("splash").style.height =  heights  + "px";
            }
            resize();
            window.onresize = function() {
                resize();
            };



document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("online", OnLineEvent, false);
document.addEventListener("offline", OnDeviceOffline, false);
    function onDeviceReady() {
        var networkState = navigator.connection.type;
     
        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';
     
      //console.log('Connection type: ' + networkState);
   
}

            




function OnLineEvent() {
    // Handle the online event
        alert("Device is Connected");
        document.getElementById("link").setAttribute('style', 'display:block;');
        document.getElementById("splash").setAttribute('style', 'display:none;');
        

    }


function OnDeviceOffline() {
// Handle the offline event
    alert("Device is Disconnected");
    document.getElementById("link").setAttribute('style', 'display:none;');
    document.getElementById("splash").setAttribute('style', 'display:block;');
    
}