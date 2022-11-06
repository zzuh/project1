<template>
    <v-app>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <div class="hero" style="z-index: 1;">
        <nav>
          <ul>
            <div class="logo_box"><b><p class="logo">굄성</p></b></div>
            <li><span class="spring1">춘분</span>
                <!--First Tier Drop Down-->
                <ul>
                    <li><span class="spring1">과일</span>
                    <!--Second Tier Drop Down-->
                    <ul>
                        <li><span class="spring1">흥부와 놀부</span></li>
                    </ul>
                    </li>
                    <li><span class="spring1">꽃</span>
                    <!--Second Tier Drop Down-->
                    <ul>
                        <li><span class="spring1">춘향전</span></li>
                        <li><span class="spring1">장화홍련</span></li>
                    </ul>
                    </li>
                </ul>
            </li>
            <li><span class="sum1">하지</span>
                <!--First Tier Drop Down-->
                <ul>
                    <li><span class="sum1">과일</span>
                    <!--Second Tier Drop Down-->
                    <ul>
                        <li><span class="sum1">견우와 직녀</span></li>
                    </ul>
                    </li>
                    <li><span class="sum1">혼합</span>
                    <!--Second Tier Drop Down-->
                    <ul>
                        <li><span class="sum1">심청이</span></li>
                    </ul>
                    </li>
                    <li><span class="sum1">자연</span>
                    <!--Second Tier Drop Down-->
                    <ul>
                        <li><span class="sum1">소금이 나오는 맷돌</span></li>
                    </ul>
                    </li>
                </ul>
            </li>
            <li><span class="autumn1">추분</span>
                <!--First Tier Drop Down-->
                <ul>
                    <li><span class="autumn1">과일</span>
                    <!--Second Tier Drop Down-->
                    <ul>
                        <li><span class="autumn1">마음 착한 형제</span></li>
                    </ul>
                    </li>
                    <li><span class="autumn1">자연</span>
                    <!--Second Tier Drop Down-->
                    <ul>
                        <li><span class="autumn1">해와 달이 된 오누이</span></li>
                        <li><span class="autumn1">선녀와 나무꾼</span></li>
                    </ul>
                    </li>
                </ul>
            </li>
            <li><span class="winter1">동지</span>
                <!--First Tier Drop Down-->
                <ul>
                    <li><span class="winter1">꽃</span>
                    <!--Second Tier Drop Down-->
                    <ul>
                        <li><span class="winter1">콩쥐팥쥐</span></li>
                    </ul>
                    </li>
                    <li><span class="winter1">혼합</span>
                    <!--Second Tier Drop Down-->
                    <ul>
                        <li><span class="winter1">온달과 평강공주</span></li>
                        <li><span class="winter1">홍길동전_옴므</span></li>
                    </ul>
                    </li>
                </ul>
            </li>
        </ul>
        
        </nav>
        <div class="selects">
          <span class="logout">로그아웃</span> /  
          <span class="mypage">마이페이지</span>  /  
          <span class="keep">장바구니</span>
        </div>
      </div>

      <!-- slide start -->
      <div class="fix2">
          <div id="app">
              <v-app id="inspire">
                  <v-carousel hide-delimiters>
                  <v-carousel-item
                      v-for="(item,i) in items"
                      :key="i"
                      :src="item.src"
                  ></v-carousel-item>
                  </v-carousel>
              </v-app>
          </div>
          </div>
          <!-- slide end  -->
          
      </v-app>
</template>
<style>
  @font-face {
      font-family: 'ChosunCentennial';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/ChosunCentennial.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }
  @font-face {
      font-family: 'ChosunCentennial2';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/ChosunCentennial.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
  }
  nav{
    display: inline-block;
  }

  .logo_box{
    display: inline-block;
    text-align: center;

    padding-top: 10px;
  }
  .logo{
    color:black;
    font-size: 34px;
    font-family: ChosunCentennial2;
    margin-right : 50px;
  }
nav ul {
    list-style: none;
    position: relative;
    display: inline-block;
}
nav ul li{
    display: inline-block;
}
nav span{
    display: block;
    padding: 0 15px;
    color: rgb(0, 0, 0);
    line-height: 60px;
    font-size: 20px;
    font-family: 'ChosunCentennial';
}
nav .spring1:hover{
    background-color: #ffcccc;
    color: #000000;
}
nav .sum1:hover{
    background-color: #7effee;
    color: #000000;
}
nav .autumn1:hover{
    background-color: #efce56;
    color: #000000;
}
nav .winter1:hover{
    background-color: #567fef;
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
    left : -24px;

}

/* ============ Second, Third and More Tiers ===========*/
nav ul ul ul li {
    position: relative;
    top: -60px;
    left: 89%;
}

/* Change this in order to change the Dropdown symbol */
li > span::after { content: ' +';}
li > span:only-child::after {
    content: '';
}

.selects{
  width: 58%;
  text-align: right;
  color: black;
  text-decoration: none;
  font-family: ChosunCentennial;
  display: inline-block;
}
.logout:hover{
  font-weight: bold;
}
.mypage:hover{
  font-weight: bold;
}
.keep:hover{
  font-weight: bold;
}




  
  
</style>
  <script src="https://unpkg.com/vue"></script>
  <script src="https://unpkg.com/vueperslides"></script>
<script>
  import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import springmain from "../../image/흥부와 놀부.png"
import wintermain from "../../image/흥부와 놀부.png"
import autumnmain from "../../image/흥부와 놀부.png"
import summermain from "../../image/흥부와 놀부.png"

  export default {
    components: { VueperSlides, VueperSlide },
      data () {
      return {
        items: [
          {
            src: springmain,
          },
          {
            src: summermain,
          },
          {
            src: autumnmain,
          },
          {
            src: wintermain,
          },
        ],
        }
      }
    }
  </script>