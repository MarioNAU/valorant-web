@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

@font-face {
    font-family: myFirstFont;
    src: url(./assets/ValorantFont.ttf);
  }

.Valorant-font{
    font-family: myFirstFont;
    color: blue;
}


* {
  margin: 0%;
  padding: 0%;
}

.main{
  z-index: -1;
  width:100%;
  height: 100%;
  margin: 0%;
  padding: 0%;
}

video{
  z-index: -1;
  position: absolute;
  width: 100%;
  height:100%;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}


.content{
  z-index: 10;
  position: absolute;
  left: 3%;
}

body{
  background-color: black;
  overflow: hidden;
}

ul{
  margin: 0px;
  padding: 0px;
  font-size: 5em;
}

li{ 
  font-family: "Bebas Neue", sans-serif;
  font-weight: bold;
  font-style: normal;
  list-style: none;
  margin: 10px;
  color:white;
  text-align: left;
  cursor: pointer;
}
  li::before{
  content: '';
  display: inline-block;
  height: 0.2em;
  width: 0.2em;
  margin-top: 38px;
  padding-left: 25px;
  background-image: url(./assets/rombo.png);
  background-size: contain;
  background-repeat: no-repeat;
  float: left;
  
}

li:first-child{
  color: #ef2f56;
  font-size: 8rem;
  margin-top: 100px;
}
li:first-child::before{
  color: #ef2f56;
  font-size: 8rem;
  margin-top: 60px;
}


ul:hover li{
  color: white;
  font-size: 5rem;
}

ul li:hover{
  color: #ef2f56;
  font-size: 8rem;
}
li:hover::before{
  margin-top: 60px;
  color:#ef2f56;
  font-size: 8rem;
}


.play-main{
  position:absolute;
  left: 0;
  top: 0;
  background-color: aliceblue;
  width: 100%;
  height: 100%;
  background-image: url(./assets/lobby.jpg_large);
  background-size: cover;
  
}

.icons{
  width: 2%;
  height: 2%;
}
