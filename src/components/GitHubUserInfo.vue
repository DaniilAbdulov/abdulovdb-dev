<template>
  <q-card
    v-if="Object.entries(user).length > 0 && user_languages.length > 0"
    class="my-card"
    flat
    bordered
  >
    <q-item-label
      class="text-h4"
      style="text-align: center; margin-bottom: 10px; margin-top: 0px"
    >
      About me
    </q-item-label>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img :src="user.avatar_url" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label> {{ user.name }} </q-item-label>
        <q-item-label caption> {{ user.email }} </q-item-label>
      </q-item-section>
    </q-item>

    <q-separator />

    <q-card-section horizontal>
      <q-card-section>
        {{ user.bio }}
      </q-card-section>

      <q-separator vertical />

      <q-card-section class="col-6">
        {{ user.location }}
      </q-card-section>
    </q-card-section>
    <div>
      <LinearDataAboutLanguages :user_languages="user_languages" />
    </div>
    <q-card-section horizontal>
      <q-card-section>
        <q-item-label
          >On the GitHub from: {{ user.formarredCreatedAt }}</q-item-label
        >
        <q-item-label>Last updates: {{ user.formarredUpdatedAt }}</q-item-label>
      </q-card-section>
    </q-card-section>
  </q-card>
  <q-skeleton v-else class="my-card" height="509px" square />
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapActions } from "vuex";
import LinearDataAboutLanguages from "components/LinearDataAboutLanguages.vue";
export default defineComponent({
  name: "GitHubUserInfo",
  components: {
    LinearDataAboutLanguages,
  },
  computed: {
    ...mapState("git_hub_repos", {
      user: (state) => state.user,
      user_languages: (state) => state.user_languages,
    }),
  },
  methods: {
    ...mapActions("git_hub_repos", ["getInfoAboutUser"]),
  },
  mounted() {
    this.getInfoAboutUser();
  },
});
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 350px
  min-width: 284px
</style>
