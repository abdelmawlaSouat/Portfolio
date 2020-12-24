<template>
	<div id="contact" class="pt-10">
		<div class="d-flex flex-column align-center mb-10">
			<h2>CONTACT</h2>
			<div class="title-line my-5"></div>

			<v-card class="pa-8 mt-5 d-flex flex-column align-start" color="#252934">
				<a class="pb-5" href="mailto:abdelmawla.souat@gmail.com">
					<v-icon large class="mr-4" color="#1ABC9C">mdi-email</v-icon>
					<span>abdelmawla.souat@gmail.com</span>
				</a>
				<a class="pb-5" href="tel:+32484697707">
					<v-icon large class="mr-4" color="#1ABC9C">mdi-phone</v-icon>
					<span>+32 48 46 97 07</span>
				</a>
				<a
					class=""
					href="https://www.linkedin.com/in/abdelmawla-souat-3a4aa1165/"
					target="_blank"
				>
					<v-icon large class="mr-4" color="#1ABC9C">mdi-linkedin</v-icon>
					<span> Abdelmawla Souat </span>
				</a>
			</v-card>
		</div>

		<div class="circle-div" style="margin-bottom: 5vh">
			<a href="#" v-scroll-to="'#home'">
				<v-icon dark x-large>mdi-chevron-up</v-icon>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Contact',
	data() {
		return {
			fields: {
				name: '',
				email: '',
				subject: '',
				message: '',
			},
			attrsFields: {
				class: 'mx-2',
				color: '#1ABC9C',
				outlined: true,
				dark: true,
			},
		}
	},
}
</script>

<style>
#contact {
	/* min-height: 90vh; */
	background-color: #252934;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	text-align: center;
}

#contact .title-line {
	height: 1px;
	border: 1px solid white;
	width: 10vh;
}
</style>
