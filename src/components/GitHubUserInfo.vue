<template>
  <q-card class="my-card" flat bordered>
    <h4 style="text-align: center; margin-bottom: 20px; margin-top: 0px">
      About Me
    </h4>
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
        <p>On the GitHub from: {{ user.created_at }}</p>
        <p>Last updates: {{ user.updated_at }}</p>
      </q-card-section>
    </q-card-section>
  </q-card>
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
</style>
