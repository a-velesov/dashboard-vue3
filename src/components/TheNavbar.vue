<template>
  <nav class="navbar">
    <h3>Blinkoff</h3>

    <ul class="navbar-menu">
      <li>
        <router-link to="/">
          Заявки
        </router-link>
      </li>
      <li>
        <router-link to="/help">
          Помощь
        </router-link>
      </li>
      <li>
        <a>
          Сообщения
        </a>
      </li>
      <li>
        <a>
          Выход
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  methods: {},
};
</script>

<style scoped>

</style>
