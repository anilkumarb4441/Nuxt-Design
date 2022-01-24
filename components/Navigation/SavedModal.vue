<template>
    <div>
<div class="search-container">
  <form action="/search" method="get">
    <input class="search expandright" id="searchright" type="search" name="q" placeholder="Search" >
    <label class="button searchbutton" for="searchright"><span class="mglass">&#9906;</span></label>
  </form>
</div>
    </div>
</template>

<style scoped>
/* body {
	background-color: #111;
} */

.button {
	display: inline-block;
	margin: 4px 2px;
	background-color: rgb(255, 255, 255);
	font-size: 18px;
	padding-left: 32px;
	padding-right: 32px;
	height: 50px;
	line-height: 50px;
	text-align: center;
	color: rgb(65, 65, 65);
	text-decoration: none;
	cursor: pointer;
	-moz-user-select: none;
	-khtml-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.button:hover {
	transition-duration: 0.4s;
	-moz-transition-duration: 0.4s;
	-webkit-transition-duration: 0.4s;
	-o-transition-duration: 0.4s;
	background-color: white;
	color: black;
}

.search-container {
	position: relative;
	display: inline-block;
	margin: 4px 2px;
	height: 40px;
	width: 40px;
	vertical-align: bottom;
}

.mglass {
	display: inline-block;
	pointer-events: none;
  font-size: 30px;
	-webkit-transform: rotate(-45deg);
}

.searchbutton {
	position: absolute;
	font-size: 22px;
	width: 100%;
	margin: 0;
	padding: 0;
	
}

.search:focus + .searchbutton {
	transition-duration: 0.4s;
	-moz-transition-duration: 0.4s;
	-webkit-transition-duration: 0.4s;
	-o-transition-duration: 0.4s;
	background-color: white;
	color: black;
	
}

.search {
	position: absolute;
	left: 49px; /* Button width-1px (Not 50px/100% because that will sometimes show a 1px line between the search box and button) */
	background-color: rgb(255, 255, 255);
	outline: none;
	border: none;
	padding: 0;
  margin-top: 5px;
	width: 0;
	height: 100%;
	z-index: 10;
	transition-duration: 0.4s;
	-moz-transition-duration: 0.4s;
	-webkit-transition-duration: 0.4s;
	-o-transition-duration: 0.4s;
	
}

.search:focus {
	width: 950px; /* Bar width+1px */
	padding: 0 16px 0 0;
  border: 1px solid black;
  border-radius: 5px;
 
}

.expandright {
	left: auto;
	right: 49px; /* Button width-1px */
}

.expandright:focus {
	padding: 0 0 0 50px;
}

</style>