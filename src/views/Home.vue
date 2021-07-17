<template>
	<div class="home">
		<Hovernew></Hovernew>
		<Login id="login"></Login>
		<Rigiste id="rigiste"></Rigiste>
		<div class="Suggest-box">
		</div>
		<div id="top-box">
					<div id="logo-box">
						<img src="../../public/img/logo.png" alt="" id="logo" />
					</div>

					<el-menu
						style="border-bottom:0"
						:default-active="activeIndex2"
						class="el-menu-demo"
						mode="horizontal"
						@select="handleSelect"
						background-color="rgb(1,2,3,0)"
						text-color="white"
						active-text-color="rgb(64,158,255)"
					>
						<el-menu-item index="1" @click="$refs.fullpage.api.moveTo(1)"
							>网站首页</el-menu-item
						>
						<el-menu-item index="2" @click="$refs.fullpage.api.moveTo(2)"
							>公司介绍</el-menu-item
						>
						<!-- <el-submenu index="2">
							<template slot="title">公司介绍</template> -->
							<!-- <el-menu-item index="2-1">选项1</el-menu-item>
							<el-menu-item index="2-2">选项2</el-menu-item>
							<el-menu-item index="2-3">选项3</el-menu-item>
							<el-submenu index="2-4">
								<template slot="title">选项4</template>
								<el-menu-item index="2-4-1">选项1</el-menu-item>
								<el-menu-item index="2-4-2">选项2</el-menu-item>
								<el-menu-item index="2-4-3">选项3</el-menu-item>
							</el-submenu> -->
						</el-submenu>
						<el-menu-item index="3" @click="$refs.fullpage.api.moveTo(3)">服务支持</el-menu-item>
						<el-menu-item index="4" @click="$refs.fullpage.api.moveTo(4)"
							>资讯动态</el-menu-item
						>
						<el-menu-item index="5" @click="$refs.fullpage.api.moveTo(5)"
							>关于我们</el-menu-item
						>
					</el-menu>
				</div>

		<full-page :options="options" ref="fullpage" id="abc">
			<div class="section" id="Page1">
				<!-- 为了api的正常使用，只能把top-guide拆了 -->
				
				<Intro class="intro"> </Intro>
			</div>

			<div class="section" id="page2">
				<Swiper></Swiper>
				<div id="about-us" @click="this.$refs.fullpage.api.moveSectionDown()">
					关于我们
				</div>
				<About-us class="introduction"> </About-us>
			</div>

			<div class="section" id="page3">
				<vue-particles
					color="#409EFF"
					:particleOpacity="0.5"
					:particlesNumber="60"
					shapeType="triangle"
					:particleSize="6"
					linesColor="#409EFF"
					:linesWidth="1"
					:lineLinked="true"
					:lineOpacity="0.4"
					:linesDistance="150"
					:moveSpeed="3"
					:hoverEffect="true"
					hoverMode="grab"
					:clickEffect="true"
					clickMode="push"
				>
				</vue-particles>
				<Service></Service>

			</div>

			<div class="section" id="page4">
				<el-container>
					<el-header style="height: 35vh;">
						<div>
							<span style="font-size:20px;font-weight:bolder"
								>了解知识产权政策·掌握市场动向</span
							>
						</div>
						<div>
							<span style="font-size:30px;font-weight:bold">资讯动态</span>
						</div>
					</el-header>
					<el-main>
						<News-box></News-box>
						<News-box></News-box>
						<News-box></News-box>
						<News-box></News-box>
					</el-main>
					<div id="more-news">更多动态</div>
				</el-container>
			</div>

			<div class="section" id="page5">
				
			</div>
		</full-page>
	</div>
</template>

<style>
#login {
	position: fixed;
	height: 30px;
	width: 60px;
	margin-left: 90vw;
	margin-top: 15px;
	z-index: 999;
	font-weight: bolder;
	font-size: large;
}
#rigiste {
	position: fixed;
	height: 30px;
	width: 60px;
	margin-left: 95vw;
	margin-top: 15px;
	z-index: 999;
	font-weight: bolder;
	font-size: large;
}
/* #hover-box {
	position: fixed;

	height: 150px;
	width: 50px;
	margin-top: 60vh;
	margin-left: 96vw;

	z-index: 999;
} */
.home {
	margin-top: 0px;
}

#Page1 {
	background-image: url("../../public/img/page1.png");
	background-size: 100% 100%;
}
/* 导航栏的css */
#top-box {
	width: 100vw;
	height: 10vh;
	/* background-color: antiquewhite; */
	display: flex;
	justify-content: space-between;
	position: fixed;
	z-index: 99;
	
}
#logo-box {
	height: 100%;
	/* background-color: aqua; */
	display: flex;
	margin-left: 40px;
}
#logo {
	margin-top: 15px;
	margin-left: 15%;
	height: 50px;
	width: 50px;
}
.el-menu {
	width: 85vw;
	margin-top: 0px;
	/* margin-left: -5vw !important; */
	justify-content: center;
	display: flex;
}
.el-menu-item {
	padding: 1vh 5vw !important;
}
.intro {
	width: 100%;
}
#page2 {
	background-image: url("../../public/img/page2.png");
	background-size: 100% 100%;
	color: white;
}
#about-us {
	padding: 1%;
	align-items: center;
	font-size: 40px;
	font-weight: bolder;
	font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
	animation-name: anim-1;
	animation-duration: 4s;
}
.introduction {
	padding: 100px;
}

/* .service-box {
	border: 1px solid rgb(35, 169, 242);
	border-radius: 10px;
	width: 30%;
} */

#page4 {
	height: 100vh;
	background-image: url("../../public/img/news-background.jpg");
	background-size: 100% 100%;
}
.el-container {
	height: 100vh;
}
.el-header {
	/* background-color: aqua; */
	/* 这里设置高度没用，就离谱，网上查到 */
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: white;
}
.el-header div {
	margin: 20px;
}

.el-main {
	/* background-color: brown; */
	height: 60vh;
	width: 100vw;
	/* 妈的又是这样的情况，这个el-main真的坑爹。不给imp flex不生效 */
	display: flex !important;
	flex-wrap: wrap;
	justify-content: center;
}
#more-news {
	position: absolute;
	margin-top: 90vh;
	margin-left: 80vw;
	color: white;
	cursor: pointer;
}

#particles-js {
  width: 100%;
  height: 100vh;
  position: absolute;
  background-image: url("../../public/img/news-background.jpg");
  background-size: 100% 100%;
}
</style>

<script>
import TopGuide from "../component/TopGuide";
import Intro from "../component/Intro.vue";
import AboutUs from "../component/AboutUs.vue";
import Swiper from "../component/Swiper";
import Service from "../component/Service";
import Hover from "../component/Hover.vue";
import Hovernew from "../component/Hovernew.vue";

import Login from "../component/Login.vue";
import Rigiste from "@/component/Rigiste";
import NewsBox from "@/component/NewsBox";
import Suggestion from '@/component/Suggestion';

export default {
	data() {
		return {
			options: {
				licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
				//是否显示导航，默认为false
				slideSelector: ".slide",
				verticalCentered: false,
				//垂直居中，妈的坑死我了
				navigation: true,
				//为什么没有生效？
				navigationPosition: "right",
				//为每个section设置背景色
				// sectionsColor: ["#41b883", "#ff5f45", "black"],
			},
			activeIndex2: "1",
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
	},
	components: {
		TopGuide,
		Intro,
		AboutUs,
		Swiper,
		Service,
		Hover,
		Hovernew,

		Login,
		Rigiste,
		Service,
		Rigiste,
		NewsBox,
		Suggestion,
Suggestion,
		
	}, //这里注册，注册的是局部组件
};
</script>
