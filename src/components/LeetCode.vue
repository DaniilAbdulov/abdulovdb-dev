<template>
  <h2 style="margin: 0px 0px 10px 0px">LeetCode</h2>
  <div class="leetcode">
    <p>Solved Problems</p>
    <div class="leetcode__wrapper">
      <div class="leetcode__static">
        <div class="leetcode__circular"></div>
        <q-knob
          show-value
          font-size="25px"
          class="text-red q-ma-md"
          :value="
            (
              (leetCodeData.totalSolved / leetCodeData.totalQuestions) *
              100
            ).toFixed(2)
          "
          size="160px"
          :thickness="0.1"
          color="orange"
          track-color="grey-3"
        >
          <div class="column justify-center" style="text-align: center">
            <div class="q-p-xs text-black">{{ leetCodeData.totalSolved }}</div>
            <q-item-label caption>Solved</q-item-label>
          </div>
        </q-knob>
      </div>
      <div class="leetcode__body">
        <div class="leetcode__linear">
          <div class="q-pa-md q-gutter-md">
            <div class="linear__info li">
              <div class="li__left">Easy</div>
              <div class="li__right">
                <div class="li__right-solved">
                  {{ leetCodeData.easySolved }}
                </div>
                <div class="li__right-total">/{{ leetCodeData.totalEasy }}</div>
              </div>
            </div>
            <q-linear-progress
              size="lg"
              :value="leetCodeData.easySolved / leetCodeData.totalEasy"
              color="teal-7"
              track-color="teal-3"
              style="margin-top: 5px; border-radius: 5px"
            />
          </div>
        </div>
        <div class="leetcode__linear">
          <div class="q-pa-md q-gutter-md">
            <div class="linear__info li">
              <div class="li__left">Medium</div>
              <div class="li__right">
                <div class="li__right-solved">
                  {{ leetCodeData.mediumSolved }}
                </div>
                <div class="li__right-total">
                  /{{ leetCodeData.totalMedium }}
                </div>
              </div>
            </div>
            <q-linear-progress
              size="lg"
              :value="leetCodeData.mediumSolved / leetCodeData.totalMedium"
              color="amber-5"
              track-color="orange-3"
              style="margin-top: 5px; border-radius: 5px"
            />
          </div>
        </div>
        <div class="leetcode__linear">
          <div class="q-pa-md q-gutter-md">
            <div class="linear__info li">
              <div class="li__left">Hard</div>
              <div class="li__right">
                <div class="li__right-solved">
                  {{ leetCodeData.hardSolved }}
                </div>
                <div class="li__right-total">/{{ leetCodeData.totalHard }}</div>
              </div>
            </div>
            <q-linear-progress
              size="lg"
              :value="leetCodeData.hardSolved / leetCodeData.totalHard"
              color="deep-orange-14"
              track-color="deep-orange-3"
              style="margin-top: 5px; border-radius: 5px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LeetCode",
  props: {
    leetCodeData: {
      type: Object,
      required: true,
    },
  },

  setup() {
    return {
      value: 81,
    };
  },
};
</script>

<style lang="scss" scoped>
.leetcode {
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 6px, rgba(0, 0, 0, 0.02) 0px 4px 8px,
    rgba(0, 0, 0, 0.02) 0px 6px 12px;
  padding: 10px;
  &__wrapper {
    display: flex;
    align-items: center;
  }
  &__static {
  }
  &__circular {
  }
  &__body {
    flex: 1 1 auto;
    padding: 0px 10px;
  }
  &__linear {
  }
}
.linear__info {
}

.li {
  display: flex;

  align-items: flex-end;
  &__left {
    padding: 0px 10px 0px 0px;
    flex: 0 1 auto;
  }
  &__right {
    display: flex;
    justify-content: flex-start;
  }
  &__right-solved {
    font-size: 16px;
    font-weight: 500;
  }
  &__right-total {
    color: grey;
  }
}
</style>
