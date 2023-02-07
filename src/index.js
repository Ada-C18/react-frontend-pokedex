import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css';
import './pokeStyles.sass';
import $ from 'jquery';

$(document).ready(function(){
  console.log("Ready");
  $("#toggleInfo").click(function(){
    $(".biometrics").toggle();
  });

  $("img").click(function(){
    const selectedImgId=$(this).attr('id'); //gets the ID of what was clicked on to select the ID rather than apply the animation to all images.
    $("#"+selectedImgId).animate({height: "80px", width:"80px"});
    $("#"+selectedImgId).animate({height: "42px", width:"42px"});
  });
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

