<template>
	<div id="top-box">
		<div id="logo-box">
			<img src="../../public/img/logo.png" alt="" id="logo" />
			<!-- 不知道为什么，放图进去就会bug -->
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
			<el-menu-item index="1">网站首页</el-menu-item>
			<el-submenu index="2">
				<template slot="title">公司介绍</template>
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
			<el-menu-item index="3">服务支持</el-menu-item>
			<el-menu-item index="4"
				><a href="https://www.ele.me" target="_blank">咨询动态</a></el-menu-item
			>
			<el-menu-item index="5">关于我们</el-menu-item>
		</el-menu>
	</div>
</template>

<style scoped>
#top-box {
	width: 100%;
	height: 10vh;
	/* background-color: antiquewhite; */
	display: flex;
	justify-content: space-between;
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
	margin-top: 0px;
	margin-right: 15%;
}
.el-menu-item {
	padding-left: 6vw;
	padding-right: 6vw;
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
