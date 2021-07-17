<template>
	<div class="news-box">
		<div class="get-more">
			<span>了解更多</span>
		</div>
		<div class="news-date">
			<!-- <span>{{ date.year }}</span>
			<span>{{ date.month }}</span> -->
		</div>
		<div class="news">
			<div class="news-head">{{ head }}</div>
			<div class="news-body">{{ body }}</div>
		</div>
	</div>
</template>

<style scoped>
.get-more {
	/* margin: auto auto; */
	width: 150px;
	height: 50px;
	border: 1px solid #fff;
	position: absolute;
	display: none;
	font-size: 15px;
	color: #fff;
	/* font-weight: 10 !important; */
	justify-content: center;
	align-items: center;
	transition: all 0.5s;
}
.get-more:hover {
	background-color: white;
}
.news-box {
	color: white;
	height: 15vh;
	width: 34%;
	/* background-color: turquoise; */
	/* margin: 10vh 10vw 10vh 10vw; */
	margin: 5vh 1vw;
	display: flex;
	animation-name: news-animation;
	animation-duration: 1s;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	transition: all 0.5s;
}
.news-box:hover {
	background-color: rgb(0, 0, 0, 0.9);
	transition: all 0.5s;
}
.news-box:hover :first-child {
	/* 上面这个语法 */
	border-radius: 10px;
	opacity: 1;
	display: flex;
	transition: all 0.5s;
}
.news-box:hover :nth-child(2) {
	/* 上面这个语法 */
	opacity: 0.1;
	transition: all 0.5s;
}
.news-box:hover :nth-child(3) {
	/* 上面这个语法 */
	opacity: 0.1;
	transition: all 0.5s;
}
@keyframes news-animation {
	from {
		margin: 10vh 2vw;
	}
	to {
		margin: 5vh 1vw;
	}
}

.news-date {
	display: flex;
	height: 100%;
	width: 35%;
	background-image: url("../../public/img/newsimg.png");
	background-size: 100%;
	transition: all 0.5s;
}
.news-head {
	padding: 15px;
	text-align: left;
	font-size: larger;
	font-weight: bolder;
	transition: all 0.5s;
}
.news-body {
	padding: 15px;
	text-align: left;
	font-size: normal;
	transition: all 0.5s;
}
</style>
<script>
export default {
	data: function() {
		return {
			date: { year: 2016, month: 8 },
			head: "SKYLINE系列智能开关",
			body:
				" 近年来在房地产行业的推动下，电器开关的市场规模持续扩大，各类品牌不断推出，产品系列也不断完善。国内品牌",
		};
	},
};
</script>
