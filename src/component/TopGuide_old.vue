<template>
	<div id="top-box">
		<div id="logo-box">
			<img src="../../public/img/logo.png" alt="" id="logo" />
			<!-- 不知道为什么，放图进去就会bug -->
		</div>
		<!-- <div id="top-guide-box">
			<div id="top-guide">
				<ul>
					<li><span>网站首页</span></li>
					<li><span>公司介绍</span></li>
					<li><span>服务支持</span></li>
					<li><span>咨询动态</span></li>
					<li><span>关于我们</span></li>
				</ul>
			</div>
		</div> -->
		<el-menu
			:default-active="activeIndex2"
			class="el-menu-demo"
			mode="horizontal"
			@select="handleSelect"
			background-color="#545c64"
			text-color="white"
			active-text-color="rgb(64,158,255)"
		>
			<el-menu-item index="1">处理中心</el-menu-item>
			<el-submenu index="2">
				<template slot="title">我的工作台</template>
				<el-menu-item index="2-1">选项1</el-menu-item>
				<el-menu-item index="2-2">选项2</el-menu-item>
				<el-menu-item index="2-3">选项3</el-menu-item>
				<el-submenu index="2-4">
					<template slot="title">选项4</template>
					<el-menu-item index="2-4-1">选项1</el-menu-item>
					<el-menu-item index="2-4-2">选项2</el-menu-item>
					<el-menu-item index="2-4-3">选项3</el-menu-item>
				</el-submenu>
			</el-submenu>
			<el-menu-item index="3" disabled>消息中心</el-menu-item>
			<el-menu-item index="4"
				><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item
			>
		</el-menu>
	</div>
</template>

<style scoped>
#top-box {
	width: 100%;
	height: 10%;
	/* background-color: antiquewhite; */
	display: flex;
}
#logo-box {
	height: 100%;
	flex: 2;
	/* background-color: aqua; */
	display: flex;
}
#logo {
	margin-top: 15px;
	margin-left: 15%;
	height: 50px;
	width: 50px;
}
#top-guide-box {
	flex: 5;
	/* background-color: brown; */
	display: flex;
	align-items: center;
	/* 子元素垂直居中 */
}
#top-guide {
	/* background-color: bisque; */
	/* 垂直居中 */
	width: 100%;
	height: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}
#top-guide ul {
	width: 70%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	margin-left: 10%;
	list-style-type: none;
	/* background-color: white; */
	align-items: center;
}
#top-guide ul li {
	width: 10%;
	height: 70%;
	font-size: 15px;
	font-weight: inherit;
	border-radius: 30%;
	/* background-color: green; */
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition-duration: 0.3s;
	color: white;
}
#top-guide ul li:hover {
	font-weight: bolder;
	background-color: rgb(0, 121, 215);
	color: white;
}
</style>

<script>
export default {
	name: "TopGuide",
	data() {
		return {
			activeIndex: "1",
			activeIndex2: "1",
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
	},
};
</script>
