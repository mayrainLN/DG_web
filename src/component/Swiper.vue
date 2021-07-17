<template>
	<el-carousel :interval="4000" type="card" height="40vh">
		<el-carousel-item v-for="item in swiperImg" :key="item.id">
			<img :src="item.src" alt="" />
		</el-carousel-item>
	</el-carousel>
</template>
<script>
export default {
	name: "Swiper",
	data() {
		return {
			swiperImg: [
				{
					id: "Img-1",
					src: "http://p18.qhimg.com/bdr/__85/d/_open360/pet01081/7.jpg",
				},
				{ id: "Img-2", src: "http://pic.pc6.com/up/2016-3/201635174246.jpg" },
				{
					id: "Img-3",
					src:
						"http://img2.jqw.com/2014/07/23/1424004/product/b201407291815310134.jpg",
				},
				{
					id: "Img-4",
					src:
						"https://img.zcool.cn/community/017e755b1e7800a80121bbecf2960b.jpg@2o.jpg",
				},
				{
					id: "Img-5",
					src:
						"http://img5.pcpop.com/ArticleImages/picshow/900x675/20140225/2014022517222006977.jpg",
				},
				{
					id: "Img-6",
					src:
						"https://fs.zhenjiang365.cn/bbsatt/day_190913/qn_1568373248270795907rs.jpg",
				},
			],
		};
	},
};
</script>

<style>
/* .el-carousel__item h3 {
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 200px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
} */
</style>
