
var canvasPreview = document.getElementById('canvasPreview');
var canvasMirror = document.getElementById('canvasMirror');
var ctxPr = canvasPreview.getContext('2d');
var ctxMir = canvasMirror.getContext('2d');
var showControls = true;
var video = document.getElementById('video_post');
var jukebox = document.getElementById('JukeBox_vid');
video.style.transform="rotate(0deg)";
canvasPreview.style.transform="rotate(0deg)";
video.controls = true;
canvasMirror.style.display = 'none';
var robot = "https://upload.wikimedia.org/wikipedia/commons/8/8c/ASIMO_-_Dancing.webm";
var playlist = ["https://upload.wikimedia.org/wikipedia/commons/8/88/In-vivo--Bioluminescence-Imaging-of-Ca-2%2B--Signalling-in-the-Brain-of--Drosophila-pone.0000275.s006.ogv",robot,"https://upload.wikimedia.org/wikipedia/commons/6/63/Demonstratie_van_de_tango_1930.ogv","https://upload.wikimedia.org/wikipedia/commons/8/82/Renaissance_dance_Alta_Regina_%28Caroso-IB%29-Kychot-2010-06-05_q4.ogv","https://upload.wikimedia.org/wikipedia/commons/2/20/2011-07-11-hyeres-22.ogv","https://upload.wikimedia.org/wikipedia/commons/8/8c/ASIMO_-_Dancing.webm"];
var number_vid_jukebox = playlist.length;
var video_playing_in_juke = 0;
var i;

document.getElementById('change_video').addEventListener('click',change_video);
document.getElementById('jump_time').addEventListener('click', change_time_video);
document.getElementById('rotate_button_left').addEventListener('click', function() {rotate_video(-1)});
document.getElementById('rotate_button_right').addEventListener('click', function() {rotate_video(1)});
document.getElementById('reset_rotation').addEventListener('click', function() {document.getElementById('video_post').style.transform = 'rotate(0deg)'});
document.getElementById('toggle_controls').addEventListener('change',toogle_controls);
document.getElementById('toggle_mirror').addEventListener('change',function() {
    if(canvasMirror.style.display=='block') canvasMirror.style.display = 'none';
    else canvasMirror.style.display = 'block';
  });
document.getElementById('init_jukebox').addEventListener('click',initialise_jukebox);

video.addEventListener('play',function() {i=window.setInterval(function() {ctxMir.drawImage(video,0,0)},20);},false);
video.addEventListener('pause',function() {window.clearInterval(i);},false);
video.addEventListener('ended',function() {clearInterval(i);},false);

jukebox.addEventListener('play',function() {if(document.getElementById('jukebox_src').src==robot) document.getElementById('Every_robot_spin').style.display='block'; else document.getElementById('Every_robot_spin').style.display='none';});
jukebox.addEventListener('ended',function() {document.getElementById('jukebox_container').style.animation = 'rotation_animation 5s linear infinite paused';});
var elements_to_rotate = [document.getElementById('dance_robot_button'),document.getElementById('Robot_Container')];
document.getElementById('dance_robot_button').addEventListener('mousedown',start_rotate_inf);
document.getElementById('dance_robot_button').addEventListener('mouseup',stop_rotate_inf);
document.getElementById('dance_robot_button').addEventListener('mouseleave',stop_rotate_inf);

document.getElementById('forms').addEventListener('click',function() {
  hide(document.getElementsByClassName('video'));
  hide(document.getElementsByClassName('map'));
  show(document.getElementsByClassName('form'));
  button_selected(document.getElementById('forms'));
  button_unselected(document.getElementById('show_all'));
  button_unselected(document.getElementById('videos'));
  button_unselected(document.getElementById('map_filter'));
  var button = document.getElementById('forms');
});
document.getElementById('videos').addEventListener('click',function() {
  hide(document.getElementsByClassName('map'));
  hide(document.getElementsByClassName('form'));
  show(document.getElementsByClassName('video'));
  button_selected(document.getElementById('videos'));
  button_unselected(document.getElementById('show_all'));
  button_unselected(document.getElementById('forms'));
  button_unselected(document.getElementById('map_filter'));
});
document.getElementById('map_filter').addEventListener('click',function() {
  hide(document.getElementsByClassName('video'));
  hide(document.getElementsByClassName('form'));
  show(document.getElementsByClassName('map'));
  button_selected(document.getElementById('map_filter'));
  button_unselected(document.getElementById('show_all'));
  button_unselected(document.getElementById('videos'));
  button_unselected(document.getElementById('forms'));
});

document.getElementById('show_all').addEventListener('click',function() {
  show(document.getElementsByClassName('post'));
  button_selected(document.getElementById('show_all'));
  button_unselected(document.getElementById('map_filter'));
  button_unselected(document.getElementById('videos'));
  button_unselected(document.getElementById('forms'));
})
function button_selected(button){
  button.style.color = 'white';
  button.style.background = 'black';
  button.style.textAlign = 'center';
};
function button_unselected(button){
  button.style.color = 'black';
  button.style.background = 'inherit';
  button.style.textAlign = 'left';
};
function hide(list){
  var iter;
  for(iter=0;iter<list.length;iter++)
  {
    list[iter].style.display='none';
  }
}
function show(list){
  var iter;
  for(iter=0;iter<list.length;iter++)
  {
    list[iter].style.display='block';
  }
}

function start_rotate_inf(){
  elements_to_rotate.forEach(function(value,key){value.style.animation = 'rotation_animation 5s linear infinite';});
  if(document.getElementById('jukebox_src').src==robot){ document.getElementById('jukebox_container').style.animation = 'rotation_animation 5s linear infinite'}
}
function stop_rotate_inf(){
  elements_to_rotate.forEach(function(value,key){value.style.animation = 'rotation_animation 5s linear infinite paused';});
  document.getElementById('jukebox_container').style.animation = 'rotation_animation 5s linear infinite paused';
}
function initialise_jukebox() {
  document.getElementById('jukebox_src').src = playlist[0];
  jukebox.load();
  var message_vid_playing =document.getElementById('Number_of_video_playing');
  message_vid_playing.style.display='block';
  message_vid_playing.innerHTML += ' '+1+'/'+number_vid_jukebox;
  jukebox.addEventListener('ended',function() {play_next_video()});
  document.getElementById('init_jukebox').removeEventListener('click',initialise_jukebox);
}

function play_next_video(){
  if(video_playing_in_juke == (number_vid_jukebox-1)){
    video_playing_in_juke = 0;
  }
  else{
    video_playing_in_juke += 1;
  }
  var message_vid_playing =document.getElementById('Number_of_video_playing');
  var message = message_vid_playing.innerHTML.split('/');
  var new_message = message[0].slice(0,(message[0].length-1))+(video_playing_in_juke+1)+'/'+message[1];
  message_vid_playing.innerHTML = new_message;
  document.getElementById('jukebox_src').src = playlist[video_playing_in_juke];
  jukebox.load();
}

function toogle_controls() {
  if (video.controls) {
     //video.removeAttribute("controls")
     video.controls=false;
  } else {
     //video.setAttribute("controls","controls");
     video.controls=true;
  }
}

function rotate_video(direction) {
  var current_deg_vid = document.getElementById('video_post').style.transform;
  var current_deg_canva = document.getElementById('canvasPreview').style.transform;
  current_deg_vid = current_deg_vid.split("(")[1].split("deg")[0];
  current_deg_canva = current_deg_canva.split("(")[1].split("deg")[0];
  var angle_to_rotate = direction*5;
  document.getElementById('video_post').style.transform = 'rotate('+(parseInt(current_deg_vid)+angle_to_rotate)%360+'deg)';
  //document.getElementById('canvasPreview').style.transform = 'rotate('+(parseInt(current_deg_canva)-angle_to_rotate)%360+'deg)';
};
// set canvas size = video size when known
video.addEventListener('loadedmetadata', function() {
  canvasPreview.width = video.videoWidth;
  canvasPreview.height = video.videoHeight;
  canvasMirror.width = video.videoWidth;
  canvasMirror.height = video.videoHeight;
});

document.getElementById('play_review').addEventListener('click', function() {
  ctxPr.drawImage(video, 0, 0);

});


function change_time_video(){
  var new_time = document.getElementById('time_to_jump').value;
  document.getElementById('video_post').currentTime = new_time;
}


function change_video(){
  var new_url = document.getElementById('Video_URL_to_load').value;
  document.getElementById('video_source').src = new_url;
  document.getElementById('video_post').load();
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;
  var infoWindow = new google.maps.InfoWindow({map: map});

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };


      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
      fillForm(geocoder, map, infowindow,pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  document.getElementById('submit').addEventListener('click', function() {
    var street_number = document.getElementById('Street Number').value;
    var street = document.getElementById('Street').value;
    var city = document.getElementById('City').value;
    var post_code =document.getElementById('Zip code').value;
    var country =document.getElementById('Country').value;
    var address = street_number+' '+street+', '+post_code+' '+city+', '+country;
    geocoder.geocode( {'address':address},function(results,status) {
      if (status === 'OK') {
        if (results[0]) {
         var latlng = results[0].geometry.location;
         map.setZoom(11);
         var marker = new google.maps.Marker({
           position: latlng,
            map: map
          });
          infowindow.setContent(address);
          infowindow.open(map, marker);
        }
        else {
          window.alert('No results found');
        }
      }
      else {
        window.alert('Geocoder failed due to: ' + status);
        }
    });
  })
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

function fillForm(geocoder, map, infowindow,pos) {
  var latlng = pos;
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[1]) {

      	var test = results[0].address_components;
        test.forEach(function(value,key){
          if(value.types[0] == 'street_number') document.getElementById('Street Number').value = value.long_name;
          if(value.types[0] == 'route') document.getElementById('Street').value = value.long_name;
          if(value.types[0] == 'locality') document.getElementById('City').value = value.long_name;
          if(value.types[0] == 'postal_code') document.getElementById('Zip code').value = value.long_name;
          if(value.types[0] == 'country') document.getElementById('Country').value = value.long_name;
        })

      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }

  });
}
