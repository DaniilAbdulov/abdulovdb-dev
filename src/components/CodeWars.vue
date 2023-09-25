<template>
  <h2 style="margin: 0px 0px 10px 0px">CodeWars</h2>
  <div
    class="codewars"
    v-if="
      codeWarsData &&
      codeWarsData.overall &&
      codeWarsData.languages &&
      codeWarsData.honor
    "
  >
    <div class="codewars__overal overal">
      <div class="overal__title ttl">Progress:</div>
      <div class="overal__rank rank">
        Rank:
        <div
          class="kyu"
          :style="
            'border: 2px solid ' +
            codeWarsData.overall.color +
            '; color: ' +
            codeWarsData.overall.color +
            ';'
          "
        >
          {{ codeWarsData.overall.name }}
        </div>
      </div>
      <div class="overal__honor">Honor: {{ codeWarsData.honor }}</div>
      <div class="overal__tc">
        Total completed: {{ codeWarsData.totalCompleted }}
      </div>
    </div>

    <div class="codewars__image">
      <img
        src="https://uploads-ssl.webflow.com/62e95dddfb380a0e61193e7d/6363e7db70db732290fa3db6_logo-256.png"
        alt=""
      />
    </div>
    <div class="codewars__languages cd-lang">
      <div class="cd-lang__title ttl">Languages:</div>
      <ul
        class="cd-lang__list"
        v-for="(lang, index) in codeWarsData.languages"
        :key="index"
      >
        <li class="cd-lang__item item">
          <div class="item__rank rank">
            {{ lang[0] }}
            <div
              class="kyu"
              :style="
                'border: 2px solid ' +
                lang[1].color +
                '; color: ' +
                lang[1].color +
                ';'
              "
            >
              {{ lang[1].name }}
            </div>
          </div>
          <div class="item__score">/ Score: {{ lang[1].score }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CodeWars",
  props: {
    codeWarsData: {
      honor: 0,
      totalCompleted: 0,
      overall: {
        type: Object,
        required: true,
      },
      languages: [],
    },
  },
};
</script>

<style lang="scss" scoped>
.codewars {
  max-width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $primary;
  &__overal {
  }
  &__languages {
  }
  &__image {
    max-width: 200px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
.rank {
  display: flex;
  align-items: center;
}
.overal {
  &__title {
  }
  &__rank {
  }
  &__honor {
  }
  &__tc {
  }
}
.ttl {
  font-size: 20px;
}
.kyu {
  margin-left: 5px;
  padding: 2px;
}
.cd-lang {
  &__title {
  }
  &__list {
  }
  &__item {
  }
}
.item {
  display: flex;
  align-items: center;
  gap: 5px;
  &__title {
  }
  &__kyu {
  }
  &__score {
  }
}
</style>
