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


        <!-- spring -->
        <div class="detail">
            <table>
                <tr>
                    <th class="explain">
                        <p>춘분(春分)</p>
                        <div class="image">
                            <img :src="image" />
                        </div>
                        
                    </th>
                    <th class="btns">

                        <v-btn class="btn"
                        v-for="(variant, index) in variants"
                        :key="variant.variantId"
                        v-on:click="updateImage(index)"
                        :style="{ backgroundColor: variant.variantColor }"
                        >{{variant.variantValue}}</v-btn><br/>


                    </th>
                </tr>
            </table>
        </div>

        

        <div class="detail2">
            <div class="card">
                <v-hover v-slot="{ hover }">
                    <v-card
                    elevation="24"
                    width="350"
                    height="450"
                    class="mx-auto"
                    >
                        <v-system-bar lights-out></v-system-bar>
                        <v-carousel 
                        cycle
                        hide-delimiters
                        :show-arrows="false"
                        width="350"
                        height="400">
                            <v-carousel-item
                            v-for="(item,i) in items"
                            :key="i"
                            :src="item.src" >
                            <v-expand-transition>
                                <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out grey darken-4 v-card--reveal text-h4 white--text"
                                style="height: 30%;"
                                >
                                $14.99
                                </div>
                            </v-expand-transition>
                            </v-carousel-item>
                        </v-carousel>

                        <v-list>
                            <v-card-text
                            class="pt-6"
                            style="position: relative;">
                                <h3 class="text-h6 font-weight-light orange--text mb-2">
                                    흥부와 놀부
                                </h3>
                                <div class="font-weight-light text-h8 mb-2">
                                    달콤한 과일 냄새<br>
                                    무슨 냄새였는지 까먹음
                                </div>
                            </v-card-text>
                        </v-list>
                    </v-card>
                </v-hover>
            </div>
           
            <div class="card">
                <v-hover v-slot="{ hover }">
                    <v-card
                    elevation="24"
                    width="350"
                    height="450"
                    class="mx-auto"
                    >
                        <v-system-bar lights-out></v-system-bar>
                        <v-carousel 
                        cycle
                        hide-delimiters
                        :show-arrows="false"
                        width="350"
                        height="400">
                            <v-carousel-item
                            v-for="(item,i) in items2"
                            :key="i"
                            :src="item.src" >
                            <v-expand-transition>
                                <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out grey darken-4 v-card--reveal text-h4 white--text"
                                style="height: 30%;"
                                >
                                $14.99
                                </div>
                            </v-expand-transition>
                            </v-carousel-item>
                        </v-carousel>

                        <v-list>
                            <v-card-text
                            class="pt-6"
                            style="position: relative;">
                                <h3 class="text-h6 font-weight-light orange--text mb-2">
                                    흥부와 놀부
                                </h3>
                                <div class="font-weight-light text-h8 mb-2">
                                    달콤한 과일 냄새<br>
                                    무슨 냄새였는지 까먹음
                                </div>
                            </v-card-text>
                        </v-list>
                    </v-card>
                </v-hover>
            </div>

            <div class="card">
                <v-hover v-slot="{ hover }">
                    <v-card
                    elevation="24"
                    width="350"
                    height="450"
                    class="mx-auto"
                    >
                        <v-system-bar lights-out></v-system-bar>
                        <v-carousel 
                        cycle
                        hide-delimiters
                        :show-arrows="false"
                        width="350"
                        height="400">
                            <v-carousel-item
                            v-for="(item,i) in items3"
                            :key="i"
                            :src="item.src" >
                            <v-expand-transition>
                                <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out orange darken-4 v-card--reveal text-h4 white--text"
                                style="height: 30%;"
                                >
                                $14.99
                                </div>
                            </v-expand-transition>
                            </v-carousel-item>
                        </v-carousel>

                        <v-list>
                            <v-card-text
                            class="pt-6"
                            style="position: relative;">
                                <h3 class="text-h6 font-weight-light orange--text mb-2">
                                    흥부와 놀부
                                </h3>
                                <div class="font-weight-light text-h8 mb-2">
                                    달콤한 과일 냄새<br>
                                    무슨 냄새였는지 까먹음
                                </div>
                            </v-card-text>
                        </v-list>
                    </v-card>
                </v-hover>
            </div>
        </div>
    </v-app>
</template>

<script>
import perfume1 from '../../image/흥부와 놀부.png'
import perfume2 from '../../image/춘향전.png'
import perfume3 from '../../image/흥부와 놀부.png'

export default {
    name: "MyProduct",
  
  data() {
    return {
        items: [
        {
          src: perfume1,
        },
        {
          src: perfume2,
        },
        {
          src: perfume3,
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      items2: [
        {
          src: perfume3,
        },
        {
          src: perfume2,
        },
        {
          src: perfume1,
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      items3: [
        {
          src: perfume2,
        },
        {
          src: perfume3,
        },
        {
          src: perfume1,
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],


      selectedVariant: 0,
      variants: [
        {
          variantId: 1,
          variantColor: '#f6abab',
          variantValue: '흥부와 놀부',
          variantImage: require("../../image/흥부와 놀부.png")
        },
    
        {
          variantId: 2,
          variantColor: '#f6abab',
          variantValue: '춘향전',
          variantImage: require("../../image/춘향전.png"),
        },
      
        {
          variantId: 3,
          variantColor: '#f6abab',
          variantValue: '장화홍련',
          variantImage: require("../../image/춘향전.png")
        },  
    ]
         
     
        
      
    };
  },
  methods: {
    updateImage(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    image() {
      return this.variants[this.selectedVariant].variantImage;
    }
  },
}
</script>


<style scoped>
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


.detail{
    margin-top: 20px;
}
.explain{
    width: 70%;
    font-size: 20px;
    vertical-align: top;
    text-align: center;
}
.btns{
    text-align: center;
}
.btn{
    width: 200px;
    margin: 20px;
    border-radius: 30px;
    background-color: #f6abab;
}
.product .variants {
  margin: 0 0 25px;
}

.product .colorBox {
  width: 45px;
  height: 45px;
  display: inline-block;
  border: 5px solid #ccc;
  cursor: pointer;
}
.detail2{
    display: inline-block;
    padding : 20px;
    text-align: center;
}

.card {
    display: inline-block;
    margin : 10px;
}

.v-card--reveal {
align-items: center;
bottom: 0;
justify-content: center;
opacity: .5;
position: absolute;
width: 100%;
}
</style>