<template>
	<div id="about-me" class="py-15">
		<h2>ABOUT ME</h2>
		<div class="title-line my-5"></div>

		<!-- Profile -->
		<v-card class="profile px-4 pb-10 mt-8" width="900" rounded>
			<v-card-title>PROFILE</v-card-title>
			<v-card-text class="d-flex py-2">
				After a cursus at 19 (42 network) and a rewarding internship in software
				development at Niboo, I am aiming at a company that could not only trust
				me but also allow me to grow as a developer. With an overflowing
				curiosity and a pronounced taste for learning, I wish to work mainly
				with React.js or Vue.js for the front-end.
			</v-card-text>
		</v-card>

		<!-- Skills -->
		<v-card class="skills px-4 pb-10 mt-8" width="900" rounded>
			<v-card-title>SKILLS</v-card-title>
			<v-card-text
				class="d-flex justify-center justify-sm-start flex-wrap py-2"
			>
				<div
					v-for="(skill, idx) in skills"
					:key="idx"
					class="d-flex flex-column align-center ma-4"
				>
					<v-img
						width="45"
						class="skill img-to-scale mb-4"
						:src="require('@/assets/skills/' + skill.src)"
					></v-img>
					<span>{{ skill.title }}</span>
				</div>
			</v-card-text>
		</v-card>

		<!-- Work Experiences -->
		<v-card class="work-xp mt-8 pt-4" width="900">
			<v-card-title>WORK EXPERIENCE</v-card-title>
			<v-card-text>
				<div class="d-flex">
					<a href="https://www.niboo.com/page/homepage" target="_blank">
						<v-img
							:src="require('@/assets/niboo.png')"
							width="80"
							class="mx-6 img-to-scale"
						></v-img>
					</a>
					<v-list-item class="px-0">
						<v-list-item-content>
							<v-list-item-title>Intern Software Developer</v-list-item-title>
							<v-list-item-subtitle
								>April 2020 - August 2020 | Niboo</v-list-item-subtitle
							>
						</v-list-item-content>
					</v-list-item>
				</div>
				<v-list-item-content class="pt-0">
					It was a very rewarding first professional experience. The languages
					used were python and javascript, we also used other tools such as Odoo
					ERP for project management (tasks, clients...) or github for
					decentralized version management. The goal was to develop customized
					solutions for the customer.
				</v-list-item-content>
			</v-card-text>
		</v-card>

		<!-- Education -->
		<v-card class="education mt-8 pt-4" width="900">
			<v-card-title>EDUCATION</v-card-title>
			<v-card-text>
				<div
					v-for="(school, idx) in schools"
					:key="idx"
					class="school-item px-5 py-2"
				>
					<a :href="school.site" target="_blank">
						<v-img
							:src="require('@/assets/education/' + school.src)"
							width="50"
							class="mr-4 img-to-scale"
						></v-img>
					</a>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title>{{
								`${school.date} | ${school.name}`
							}}</v-list-item-title>
							<v-list-item-subtitle>{{ school.course }}</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
				</div>
			</v-card-text>
		</v-card>
	</div>
</template>

<script>
export default {
	name: 'AboutMe',
	data() {
		return {
			skills: [
				{ src: 'javascript.png', title: 'Javascript' },
				// { src: 'typescript.png', title: 'Typescript' },
				{ src: 'vue.png', title: 'Vue.js' },
				{ src: 'react.png', title: 'React.js' },
				// { src: 'nuxt.png', title: 'Nuxt.js' },
				{ src: 'html.png', title: 'HTML 5' },
				{ src: 'css.png', title: 'CSS 3' },
				// { src: 'sass.png', title: 'Sass' },
				{ src: 'vuetify.png', title: 'Vuetify' },
				{ src: 'bootstrap.png', title: 'Bootstrap' },
				{ src: 'mui.png', title: 'Material UI' },
				{ src: 'git.png', title: 'Git' },
				{ src: 'webpack.png', title: 'Webpack' },
				{ src: 'jest.png', title: 'Jest' },
				{ src: 'node.png', title: 'Node.js' },
				{ src: 'mongo.png', title: 'MongoDB' },
			],
			schools: [
				{
					src: 'epfc.jpg',
					site: 'https://www.epfc.eu/',
					name: 'EPFC',
					date: '2020',
					course: 'English Course',
				},
				{
					src: '19.png',
					site: 'https://www.s19.be/',
					name: '19 Coding School',
					date: '2018 - 2020',
					course: 'Computer Programming',
				},
			],
		}
	},
}
</script>

<style>
/* min-height: 165vh; */
#about-me {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.school-item {
	display: flex;
	align-items: center;
}

#about-me .title-line {
	height: 1px;
	border: 1px solid black;
	width: 10vh;
}

.img-to-scale {
	transform: scale(1);
	transition-property: transform;
	transition-duration: 300ms;
}

.img-to-scale:hover {
	transform: scale(1.25);
}
</style>
