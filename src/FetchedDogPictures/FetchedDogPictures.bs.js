'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function FetchedDogPictures(Props) {
  var match = React.useState((function () {
          return /* LoadingDogs */0;
        }));
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          fetch("https://dog.ceo/api/breeds/image/random/9").then((function (response) {
                      return response.json();
                    })).then((function (jsonResponse) {
                    Curry._1(setState, (function (_previousState) {
                            return /* LoadedDogs */[jsonResponse.message];
                          }));
                    return Promise.resolve(undefined);
                  })).catch((function (_err) {
                  Curry._1(setState, (function (_previousState) {
                          return /* ErrorFetchingDogs */1;
                        }));
                  return Promise.resolve(undefined);
                }));
          
        }), ([]));
  var tmp;
  var tmp2;
  var tmp3;
  if (typeof state === "number") {
    tmp = state !== 0 ? "An error occurred!" : "Loading...";
  } else {
    var dogs = state[0];
    
  tmp = Belt_Array.mapWithIndex(dogs, (function (i, dog) {
    function generateRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
            let imageStyle = {
              //backgroundImage: "url(" + (String(dog) + ")"),
              backgroundColor:generateRandomColor(),
              backgroundPosition: "center",
              height: "120px",
              width:'120px',
              marginRight: i === (dogs.length | 0) ? "0" : "8px",
              backgroundSize: "cover",
              borderRadius: "2px",
              boxShadow: "0px 4px 16px rgb(200, 200, 200)",
              width:"30%",
              paddingBottom:"10%",
              float:"left",
              position : "relative",
              margin:"1.66%",
              overflow:"hidden",
            }
            
              return React.createElement('div',{
                key:dogs,
                style:imageStyle,
                
              })
            // return React.createElement('div',{
            //   key:dogs,
            //   style: imageStyle

            // })
          }))
        
  }
  return React.createElement('div',{
    position:"absolute",
    height:"80%",
    width:"90%",
    padding: "10% 5%"
    
},tmp)
  
}


  


   
  
  
var make = FetchedDogPictures;

exports.make = make;
/* react Not a pure module */
