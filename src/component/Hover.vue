<template>
	<div class="hover" @click="talk">
		<div class="to-talk">
			<img src="../../public/img/talk.png" alt="" class="tubiao" />
		</div>
		<div
			class="to-wechat"
			@mouseover="hoverwx = true"
			@mouseleave="hoverwx = false"
		>
			<img src="../../public/img/wechat.png" alt="" class="tubiao" />

			<img
				id="two-code"
				v-show="hoverwx"
				src="../../public/img/2dcode.png"
				alt=""
			/>
		</div>
		<div
			class="get-phone"
			@mouseover="hoversj = true"
			@mouseleave="hoversj = false"
		>
			<img src="../../public/img/call.png" alt="" class="tubiao" />
			<div id="phone" v-show="hoversj">186-7237-8772</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Hover",
	methods: {
		talk() {
			this.$router.push("/login");
		},
	},
	data() {
		return {
			hoverwx: false,
			hoversj: false,
		};
	},
};
</script>

<style scoped>
.hover {
	display: flex;
	position: relative;
	flex-direction: column;
	width: 100%;
	height: 100%;
	align-items: stretch;
}
.to-talk {
	/* background-color: cadetblue; */
	/* border: rgb(64, 158, 255) 1px solid */
	/* border-radius: 20%; */
	height: 30%;
	margin: 10%;
	cursor: pointer;
}

.to-wechat {
	/* border: rgb(64, 158, 255) 1px solid; */
	/* border-radius: 20%; */
	height: 40%;
	width: 105%;
	margin: 10%;
	margin-left: -2px;
	position: relative;
	cursor: pointer;
}
.get-phone {
	/* border: rgb(64, 158, 255) 1px solid; */
	/* border-radius: 20%; */
	position: relative;
	height: 30%;
	margin: 10%;
	cursor: pointer;
}
#phone {
	position: absolute;
	/* background-color: rgb(64, 158, 255); */
	margin-left: -165px;
	margin-top: -50px;
	height: 50px;
	width: 150px;
	display: flex;
	color: white;
	border: white 2px solid;
	border-radius: 10px;
	text-align: center;
	align-items: center;
	justify-content: center;
}
.tubiao {
	height: 100%;
	width: 100%;
}
#wechat {
	height: 50px;
	width: 50px;
	position: absolute;
	background-color: darkgoldenrod;
	margin-left: -50px;
	margin-top: -200px;
}
#two-code {
	margin-left: -150px;
	margin-top: 0px;
	position: absolute;
	width: 80px;
	height: 80px;
}
</style>
