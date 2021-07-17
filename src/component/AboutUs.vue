<template>
	<div class="about-box">
		<el-tabs
			v-model="editableTabsValue"
			type="card"
			tab-position="left"
			style="
whitespace:nowrap; 
 
overflow:hidden;   
 
test-overflow:ellipsis;"
		>
			<el-tab-pane
				v-for="(item, index) in editableTabs"
				:key="item.name"
				:label="item.title"
				:name="item.name"
				style="padding:70px;"
			>
				{{ item.content }}
			</el-tab-pane>
		</el-tabs>
	</div>
</template>
<script>
export default {
	name: "AboutUs",
	data() {
		return {
			editableTabsValue: "2",
			editableTabs: [
				{
					title: "我们的资质",
					name: "1",
					content:
						"武汉达冠知识产权代理有限公司是经中华人民共和国国家工商管理总局批准设立并备案，是具备知识产权代理资格的机构。公司秉承“诚信、高效、合作、共赢”的企业宗旨，采用“一对一顾问式”咨询服务模式，为广大客户提供国内外商标注册、专利代理、版权登记、项目申报等一站式知识产权服务。",
				},
				{
					title: "我们的团队",
					name: "2",
					content:
						"公司拥有一支技术精湛，经验丰富，态度热忱的顾问团队，以“诚信为本，服务至上”为服务理念，为广大客户提供真诚、专业，高效的优质服务。公司会为客户量身定制最适合客户自身的知识产权项目方案，并层层把关，保证客户服务项目的有效进行，以最专业的业务水平，最认真的工作态度，最优质的服务效果，让客户得到最满意的成果。",
				},
				{
					title: "我们的优势",
					name: "3",
					content:
						"公司具有规范的管理制度和有效的激励机制，使团队始终具有很强的凝聚力和执行力，可以最快速的响应客户的需求，为客户解决知识产权方面的相关问题。我们愿意以“精益求精，全程服务”的工作态度，赢得客户对我们的信任，我们会用真诚回报客户，用我们的服务为客户带来更大的收益，提高客户企业在知识产权方面的核心竞争力，在激烈的市场竞争中，实现最大的财富价值。",
				},
				{
					title: "我们的理念",
					name: "4",
					content:
						"我们坚守企业的宗旨和理念，不断提升企业自身的专业水准，不断完善企业部门的建设和管理，努力超越过去，超越自己，为客户提供更优质的服务，为推动中国知识产权事业的发展做出自身的努力和贡献。",
				},
			],
			tabIndex: 1,
		};
	},
	methods: {
		addTab(targetName) {
			let newTabName = ++this.tabIndex + "";
			this.editableTabs.push({
				title: "New Tab",
				name: newTabName,
				content: "New Tab content",
			});
			this.editableTabsValue = newTabName;
		},
		removeTab(targetName) {
			let tabs = this.editableTabs;
			let activeName = this.editableTabsValue;
			if (activeName === targetName) {
				tabs.forEach((tab, index) => {
					if (tab.name === targetName) {
						let nextTab = tabs[index + 1] || tabs[index - 1];
						if (nextTab) {
							activeName = nextTab.name;
						}
					}
				});
			}

			this.editableTabsValue = activeName;
			this.editableTabs = tabs.filter((tab) => tab.name !== targetName);
		},
	},
};
</script>

<style></style>
