<template>
  <div>
    <b-navbar
      toggleable="sm"
      type="dark"
      variant="info"
    >
      <b-navbar-brand to="/">
        Elevation
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>
          <b-nav-item to="/page2">
            Page2
          </b-nav-item>
          <b-nav-item to="/page3">
            Page3
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BNavbarNav,
  BNavItem,
  BCollapse
} from 'bootstrap-vue'

export default {
  name: 'CustomNavBar',
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,
    BNavbarNav,
    BNavItem,
    BCollapse
  }
}
</script>

<style>
</style>
