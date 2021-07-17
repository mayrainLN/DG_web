<template>
	<div class="fixed-service-btn" style="display: block;">
		<div class="service-info-btn service-btn" title="留言给我们">
			<img src="../../public/img/mail.png" alt="填写信息" />
		</div>

		<div class="service-in-btn service-btn" title="在线客服">
			<a href="" target="_blank">
				<img src="../../public/img/talk.png" alt="联系我们" />
			</a>
		</div>

		<div
			class="service-code-btn service-btn"
			title="微信二维码"
			id="wechat"
			@mouseover="hoverwx = true"
			@mouseleave="hoverwx = false"
		>
			<img src="../../public/img/wechat.png" alt="二维码" />
			<div class="code-content">
				<!-- <div class="code-arrow"></div> -->
				<img
					v-show="hoverwx"
					src="../../public/img/2dcode.png"
					class="qrcode"
					alt="安小盾二维码"
				/>
			</div>
		</div>
		<div class="service-in-btn service-btn" title="电话联系">
			<img
				src="../../public/img/call.png"
				@mouseover="hoversj = true"
				@mouseleave="hoversj = false"
			/>
			<div id="phone" v-if="hoversj">186 - 7237 - 8772</div>
		</div>
	</div>
</template>

<style>
.fixed-service-btn {
	position: fixed;
	right: 21px;
	z-index: 3;
	bottom: 73px;
	display: none;
}
.fixed-service-btn .service-btn {
	width: 44px;
	height: 44px;
	line-height: 56px;
	text-align: center;
	background: #ffffff;
	border-radius: 8px;
	margin-bottom: 5px;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
}
img {
	border: 0px;
	height: 100%;
	width: 100%;
}
.qrcode {
	position: absolute;
	width: 150px;
	height: 150px;
	margin-left: -200px;
	margin-top: -120px;
	/* opacity: 0; */
}
#phone {
	margin-top: -80px;
	margin-left: -180px;
	position: absolute;
	padding: 10px;
	color: white;
	border: #ffffff 1px solid;
	border-radius: 20px;
}
.a {
	color: #000;
	text-decoration: none;
}
</style>
<script>
export default {
	methods: {
		talk() {
			this.$router.push("/login");
		},
	},
	data() {
		return {
			hoverwx: false,
			hoversj: false,

			// 分界
			dialogTableVisible: false,
			dialogFormVisible: false,
			form: {
				name: "",
				region: "",
				date1: "",
				date2: "",
				delivery: false,
				type: [],
				resource: "",
				desc: "",
			},
			formLabelWidth: "120px",
		};
	},
};
</script>
