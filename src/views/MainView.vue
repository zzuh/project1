<template>
    <v-app>
        <div class="img_logo" style="margin-left:15px;">
            <img src="../../image/logo.png" style="width: 100px; height: 65px;">
        </div>
        <div id="container">
            <nav>
                <ul>
                    <li><router-link to="/" style="text-decoration:none;"> <a> 메인</a> </router-link>
                    </li>
                    <li><a class="spring1">춘분</a>
                        <!--First Tier Drop Down-->
                        <ul>
                            <li><a class="spring1">과일</a>
                            <!--Second Tier Drop Down-->
                            <ul>
                                <li><a class="spring1">흥부와 놀부</a></li>
                            </ul>
                            </li>
                            <li><a class="spring1">꽃</a>
                            <!--Second Tier Drop Down-->
                            <ul>
                                <li><a class="spring1">춘향전</a></li>
                                <li><a class="spring1">장화홍련</a></li>
                            </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a class="sum1">하지</a>
                        <!--First Tier Drop Down-->
                        <ul>
                            <li><a class="sum1">과일</a>
                            <!--Second Tier Drop Down-->
                            <ul>
                                <li><a class="sum1">견우와 직녀</a></li>
                            </ul>
                            </li>
                            <li><a class="sum1">혼합</a>
                            <!--Second Tier Drop Down-->
                            <ul>
                                <li><a class="sum1">심청이</a></li>
                            </ul>
                            </li>
                            <li><a class="sum1">자연</a>
                            <!--Second Tier Drop Down-->
                            <ul>
                                <li><a class="sum1">소금이 나오는 맷돌</a></li>
                            </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a class="autumn1">추분</a>
                        <!--First Tier Drop Down-->
                        <ul>
                            <li><a class="autumn1">과일</a>
                            <!--Second Tier Drop Down-->
                            <ul>
                                <li><a class="autumn1">마음 착한 형제</a></li>
                            </ul>
                            </li>
                            <li><a class="autumn1">자연</a>
                            <!--Second Tier Drop Down-->
                            <ul>
                                <li><a class="autumn1">해와 달이 된 오누이</a></li>
                                <li><a class="autumn1">선녀와 나무꾼</a></li>
                            </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a class="winter1">동지</a>
                        <!--First Tier Drop Down-->
                        <ul>
                            <li><a class="winter1">꽃</a>
                            <!--Second Tier Drop Down-->
                            <ul>
                                <li><a class="winter1">콩쥐팥쥐</a></li>
                            </ul>
                            </li>
                            <li><a class="winter1">혼합</a>
                            <!--Second Tier Drop Down-->
                            <ul>
                                <li><a class="winter1">온달과 평강공주</a></li>
                                <li><a class="winter1">홍길동전_옴므</a></li>
                            </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div><!--End HTML Code-->
    </v-app>
</template>

<script>

</script>

<style scoped>
nav{
    background-color: #5e5e5e;
}
nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    position: relative;
}
nav ul li{
    display: inline-block;
    background-color: #5e5e5e;
}
nav a{
    display: block;
    padding: 0 15px;
    color: #fff;
    line-height: 60px;
    font-size: 20px;
    text-decoration: none;
}
nav .spring1:hover{
    background-color: #f6abab;
    color: #000000;
}
nav .sum1:hover{
    background-color: #8df0ea;
    color: #000000;
}
nav .autumn1:hover{
    background-color: #f0d369;
    color: #000000;
}
nav .winter1:hover{
    background-color: #d2dcf6;
    color: #000000;
}

/* Hide Dropdown by Default*/
nav ul ul {
    display: none;
    position: absolute;
    top: 60px;
}
/* hover */

/* Display Dropdown on Hover */
nav ul li:hover > ul {
    display: inherit;
}
/* Fisrt Tier Dropdown */
nav ul ul li{
    width: 220px;
    float: none;
    display: list-item;
    position: relative;

}

/* ============ Second, Third and More Tiers ===========*/
nav ul ul ul li {
    position: relative;
    top: -60px;
    left: 220px;
}

/* Change this in order to change the Dropdown symbol */
li > a::after { content: ' +';}
li > a:only-child::after {
    content: '';
}

@font-face {
    font-family: 'ChosunCentennial';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/ChosunCentennial.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
.title1{
   width:100%;
   height : 100px;

   color : rgb(0, 0, 0);
   text-align: left;
   padding-top : 20px;
   padding-left: 60px;
}
.img_logo{
    padding-top:10px;
}
.spring1{
    font-family:ChosunCentennial;
}
.sum1{
    font-family:ChosunCentennial;
}
.autumn1{
    font-family:ChosunCentennial;
}
.winter1{
    font-family:ChosunCentennial;
}
</style>