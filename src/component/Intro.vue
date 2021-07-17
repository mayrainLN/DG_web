<template>
	<div class="slogen-box">
		<div class="slogen">
			<div class="slogen-head">武汉达冠 · 知识产权代理</div>
			<div class="slogen-body">武汉达冠知识产权代理有限公司竭诚为您服务</div>
			<!-- <div class="slogen-foot">武汉达冠知识产权代理有限公司竭诚为您服务</div> -->
		</div>
	</div>
</template>
<style>
.solgen-box {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 90vh;

	background-color: salmon;
}
.slogen {
	width: 100%;
	height: 90vh;
	color: white;

	display: flex;
	flex-direction: column;
	animation-name: expand;
	animation-duration: 2s;
}
@keyframes expand {
	from {
		margin-left: 50vw;
		color: rgb(20, 31, 70);
		opacity: 0;
	}
	to {
		height: 70%;
		opacity: 1;
	}
}
.slogen-head {
	height: 10%;
	margin-top: 12%;
	font-size: 50px;
	font-weight: 700;
}

.slogen-body {
	height: 20%;
	margin-top: 2%;
	font-size: 30px;
	width: 60%;
	margin-left: auto;
	margin-right: auto;
}
.slogen-foot {
	height: 20%;
	margin: 5%;
}
</style>

<script>
export default {
	name: "Intro",

	methods: {},
};
</script>
