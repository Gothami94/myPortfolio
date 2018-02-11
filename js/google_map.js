

function initMap() {
    var pos = {lat: 6.957443, lng:  80.051943};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: pos
    });

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">My Home</h1>'+
        '<div id="bodyContent">'+
        '<p>"Karunawasa" ,</p>'+
        '<p>Ganegoda ,</p>'+
        '<p>Dompe ,</p>'+
        '<p>Sri Lanka ,</p>'+
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });


    var marker = new google.maps.Marker({
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: pos,
        map: map,
        title: 'Dompe',
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
  }
