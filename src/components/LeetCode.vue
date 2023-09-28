<template>
  <div class="q-pa-sm">
    <q-item-label>
      <h2 style="margin: 0px 0px 10px 0px">LeetCode</h2>
    </q-item-label>
    <q-card class="fit row wrap justify-center items-center content-start">
      <q-card-section horizontal>
        <q-knob
          show-value
          font-size="18px"
          class="text-red q-ma-md"
          :modelValue="
            parseFloat(
              (
                (leetCodeData.totalSolved / leetCodeData.totalQuestions) *
                100
              ).toFixed(2)
            )
          "
          size="120px"
          :thickness="0.1"
          color="orange"
          track-color="grey-3"
        >
          <q-item-label class="text-black text-center"
            >{{ leetCodeData.totalSolved }}
            <q-item-label class="text-grey">Solved</q-item-label>
          </q-item-label>
        </q-knob>
      </q-card-section>
      <q-card-section vertical class="col-grow">
        <q-list>
          <q-item v-ripple>
            <q-item-section>
              <q-item-label>
                <span style="margin-right: 10px">Easy</span>
                <span class="text-weight-bold text-black">{{
                  leetCodeData.easySolved
                }}</span>
                <span class="text-grey">/{{ leetCodeData.totalEasy }}</span>
              </q-item-label>
              <q-item-label>
                <q-linear-progress
                  size="lg"
                  :value="leetCodeData.easySolved / leetCodeData.totalEasy"
                  color="teal-7"
                  track-color="teal-3"
                  style="margin-top: 5px; border-radius: 5px"
              /></q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-ripple>
            <q-item-section>
              <q-item-label>
                <span style="margin-right: 10px">Medium</span>
                <span class="text-weight-bold text-black">{{
                  leetCodeData.mediumSolved
                }}</span>
                <span class="text-grey">/{{ leetCodeData.totalMedium }}</span>
              </q-item-label>
              <q-item-label>
                <q-linear-progress
                  size="lg"
                  :value="leetCodeData.mediumSolved / leetCodeData.totalMedium"
                  color="amber-7"
                  track-color="amber-3"
                  style="margin-top: 5px; border-radius: 5px"
              /></q-item-label>
            </q-item-section>
          </q-item>
          <q-item v-ripple>
            <q-item-section>
              <q-item-label>
                <span style="margin-right: 10px">Hard</span>
                <span class="text-weight-bold text-black">{{
                  leetCodeData.hardSolved
                }}</span>
                <span class="text-grey">/{{ leetCodeData.totalHard }}</span>
              </q-item-label>
              <q-item-label>
                <q-linear-progress
                  size="lg"
                  :value="leetCodeData.hardSolved / leetCodeData.totalHard"
                  color="deep-orange-7"
                  track-color="deep-orange-3"
                  style="margin-top: 5px; border-radius: 5px"
              /></q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: "LeetCodeTwo",
  props: {
    leetCodeData: {
      type: Object,
    },
  },
};
</script>
