<template>
	<form class="card" @submit.prevent="onSubmit">
		<h1>Войти в систему</h1>

		<div :class="['form-control', {invalid: eError}]">
			<label for="email">Email</label>
			<input type="email" id="email" v-model="email" @blur="eBlur">
			<small v-if="eError">{{ eError }}</small>
		</div>

		<div :class="['form-control', {invalid: pError}]">
			<label for="password">Пароль</label>
			<input type="password" id="password" v-model="password" @blur="pBlur">
			<small v-if="pError">{{ pError }}</small>
		</div>

		<button class="btn primary" :disabled="isSubmitting || isTooManyAttemps">Войти</button>
		<div class="text-danger" v-if="isTooManyAttemps">{{ title }}</div>
	</form>
</template>

<script>
import { useLoginForm } from '@/use/loginForm';

export default {
	name: 'Auth',
	setup() {
		return {...useLoginForm()}
	},

};
</script>

<style scoped>

</style>