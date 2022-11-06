<template>
    <v-app>
        <div class="back1">
        <div class="test_obj">
            <div class="img1">
                <img src="../../image/logo.png" style="width: 150px; height: 100px;">
            </div>
            <div class="font1">아이디</div>
            <input class="input1" type="text" placeholder="아이디를 입력하세요"/>
            <div class="font2">비밀번호</div>
            <input class="input2" type="password" placeholder="비밀번호를 입력하세요"/>

            <div class="font3">회원가입</div>

            <router-link to="/join" style="text-decoration: none;">
                <div class="btn1">버튼</div>
            </router-link>
            
        </div>
        </div>
    </v-app>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  }
}
</script>

<style>
@keyframes fadeInDown {
    0% {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
}
 
.test_obj {
    position: relative;
    animation: fadeInDown 1s;
    background-image: url('../../image/LogIn.png');
    width: 800px;
    height: 800px;
    background-size: cover;
    margin : auto;
    margin-top : 80px;
    box-shadow: 10px 10px 10px rgb(132, 132, 132);
}

.back1{
    background-image: url('../../image/LogIn_4.JPG');
    width:100%;
    height: 100%;
}

.img1{
    padding-top : 130px;
    padding-left : 330px;
}

.font1{
    font-size: 25px;
    font-family: 'ChosunCentennial';
    margin-left : 200px;
    margin-top : 50px;
    display: inline-block;
}

.input1{
    display: inline-block;
    margin-left: 40px;
    border: 2px solid rgba(118, 118, 118, .5);
    width: 300px;
    padding : 10px;
    border-radius: 10px;
}

.font2{
    font-size: 25px;
    font-family: 'ChosunCentennial';
    margin-left : 200px;
    margin-top : 70px;
    display: inline-block;
}

.input2{
    display: inline-block;
    margin-left: 20px;
    border: 2px solid rgba(118, 118, 118, .5);
    width: 300px;
    padding : 10px;
    border-radius: 10px;
}

.font3{
    font-size: 20px;
    font-family: 'ChosunCentennial';
    margin-left : 360px;
    margin-top : 50px;
    display: inline-block;
    color : darkgray;
}

.font3:hover{
    color : rgb(92, 92, 92);
}

.btn1{
    background-color: rgba(118, 118, 118, .3);
    width: 200px;
    height: 60px;
    margin : auto;
    margin-top : 50px;
    text-align: center;
    padding : 14px;
    font-family: 'ChosunCentennial';
    font-size : 20px;
    border-radius: 20px;
    color : black;
}

.btn1:hover{
    background-color: rgba(125, 125, 125, .6);
    color : rgb(227, 227, 227);
    
}

@font-face {
    font-family: 'ChosunCentennial';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/ChosunCentennial.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

body {
    width : 100% ;
    height : 100% ;
}
</style>