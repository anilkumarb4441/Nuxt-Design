<template>
    <div>
<div class="menu_bar">
    <ul>
        <li><nuxt-link to="#" class=" active" ><i class="fas fa-question"></i> What is Leadd </nuxt-link></li>
        <li><nuxt-link to="#" class=""><i class="fas fa-certificate"></i> Certification </nuxt-link></li>
        <li><nuxt-link to="#" class=""><i class="fas fa-truck"></i>Solution Delivery </nuxt-link>
          <div class="sub_menu_1">
<ul>
    <li><nuxt-link to="#">
       Our Story </nuxt-link> </li>
       <li class="hover_me"><nuxt-link to="#">
       Our Instructers </nuxt-link><i class="fas fa-angle-right"></i>
       <div class="sub_menu_2">
<ul>
    <li><nuxt-link to="#"> SEO</nuxt-link></li>
    <li><nuxt-link to="#"> Instructer Guide</nuxt-link></li>
    <li><nuxt-link to="#"> About Instructer</nuxt-link></li>
</ul>

       </div>
        </li>
        <li class="hover_me"><nuxt-link to="#">
       Our Instructers </nuxt-link><i class="fas fa-angle-right"></i> </li>
        <li><nuxt-link to="#">
       Our Instructers </nuxt-link> </li>
</ul>
         </div>
        </li>
         <li><nuxt-link to="#" class=""><i class="fas fa-user"></i> About Us </nuxt-link>
         <div class="sub_menu_1">
<ul>
    <li><nuxt-link to="#">
       Our Story </nuxt-link> </li>
        <li><nuxt-link to="#">
       Our Instructers </nuxt-link> </li>
       <li><nuxt-link to="#">
       Our Instructers </nuxt-link> </li>
</ul>
         </div>
         </li>
        <li><nuxt-link to="#" class=""><i class="fas fa-user"></i>Resources</nuxt-link>
          <div class="sub_menu_1">
<ul>
    <li><nuxt-link to="#">
       Our Story </nuxt-link> </li>
        <li><nuxt-link to="#">
       Our Instructers </nuxt-link> </li>
       <li><nuxt-link to="#">
       Our Instructers </nuxt-link> </li>
</ul>
         </div>
        </li>
       
    </ul>
</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.menu_bar{
    background-color: rgb(182, 182, 182);
    text-align: center !important;
}
.menu_bar ul{
    display: inline-flex;
    list-style: none;
    color: rgb(10, 10, 10) !important;
}
.menu_bar ul li{
    margin:15px;
    padding: 15px;
}
.menu_bar ul li a {
    text-decoration: none;
    color: rgb(41, 41, 41);
}
.active, .menu_bar ul li:hover{
    background: black !important;
    color: white !important;
    border-radius: 3px;
}
.sub_menu_1{
    display: none;
}
.menu_bar ul li:hover .sub_menu_1
{
    display: block;
    position: absolute;
    margin-top: 15px;
    margin-left: -15px;
    background: rgb(75, 55, 55);
}
.menu_bar ul li:hover .sub_menu_1 ul {
    display: block;
    margin:1px ;
}
.menu_bar ul li:hover .sub_menu_1 li {
    padding:10px ;
    border-bottom: 2px dotted blue;
    background: transparent;
    border-radius: 0;
    text-align: left !important;
}
.menu_bar ul li:hover .sub_menu_1 ul li:last-child{
   border-bottom: none;
}
.menu_bar ul li:hover .sub_menu_1 ul li a:hover{
color: tomato;
}
.fa-angle-right{
    float: right;
    text-align: right;
}
.sub_menu_2{
    display: none;
}
.hover_me:hover .sub_menu_2{
    position: absolute;
    display: block;
    margin-top: -40px;
    margin-left: 140px;
}
</style>