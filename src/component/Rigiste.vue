<template>
	<div>
		<!-- Table -->
		<el-button type="button" @click="dialogFormVisible = true">注册</el-button>

		<el-dialog title="注册" :visible.sync="dialogFormVisible">
			<el-form :model="form">
				<el-form-item label="昵称" :label-width="formLabelWidth">
					<el-input
						v-model="form.username"
						autocomplete="off"
						style="width: 85%;"
					></el-input>
				</el-form-item>
				<el-form-item label="手机/邮箱" :label-width="formLabelWidth">
					<el-input
						v-model="form.userid"
						autocomplete="off"
						style="width: 85%;"
					></el-input>
				</el-form-item>
				<el-form-item label="密码" :label-width="formLabelWidth">
					<el-input
						placeholder="请输入密码"
						v-model="input"
						show-password
						style="width: 85%;"
					></el-input>
					<el-input
						placeholder="请确认密码"
						v-model="input"
						show-password
						style="width: 85%;"
					></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="dialogFormVisible = false"
					>确 定</el-button
				>
			</div>
		</el-dialog>
	</div>
</template>
<script>
export default {
	data() {
		return {
			input: "",
			dialogFormVisible: false,
			modal: false,
			form: {
				date1: "",
				date2: "",
				delivery: false,
				type: [],
				resource: "",
				desc: "",
				modal: false,
			},
			formLabelWidth: "120px",
		};
	},
};
</script>
