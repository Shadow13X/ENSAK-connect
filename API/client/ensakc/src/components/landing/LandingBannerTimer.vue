<template>
  <div class="countdown" loaded>
    <div class="countdown__num">
      <span class="countdown__num--time">{{ displayDays }}</span>
      <span class="countdown__num--unit">Days</span>
    </div>
    <span class="countdown__num--colon">:</span>

    <div class="countdown__num">
      <span class="countdown__num--time">{{ displayHours }}</span>
      <span class="countdown__num--unit">Hours</span>
    </div>

    <span class="countdown__num--colon">:</span>

    <div class="countdown__num">
      <span class="countdown__num--time">{{ displayMinutes }}</span>
      <span class="countdown__num--unit">Minutes</span>
    </div>

    <span class="countdown__num--colon">:</span>

    <div class="countdown__num">
      <span class="countdown__num--time">{{ displaySeconds }}</span>
      <span class="countdown__num--unit">Minutes</span>
    </div>
  </div>
</template>

<script>
//Todo : Add Weeks Entry to The Timer
export default {
  name: "LandingBannerTimer",
  props: {
    targetDate: { type: Object, required: true },
  },
  data()
  {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
      loaded: false,
      expired: false
    }
  },
  computed: {
    _seconds: () => 1000,
    _minutes()
    {
      return this._seconds * 60
    },
    _hours()
    {
      return this._minutes * 60
    },
    _days()
    {
      return this._hours * 24
    },
    END()
    {
      return new Date(
          this.targetDate.years,
          this.targetDate.months,
          this.targetDate.date,
          this.targetDate.hours,
          this.targetDate.seconds,
          this.targetDate.minutes,
          this.targetDate.milliseconds
      )
    }
  },
  mounted()
  {
    this.showRemaining()
  },
  methods: {
    formatNum: num => (num < 10 ? '0' + num : num),
    showRemaining()
    {
      const TIMER = setInterval(() => {
        const NOW = new Date()
        const DISTANCE = this.END.getTime() - NOW.getTime()

        if (DISTANCE < 0)
        {
          clearInterval(TIMER)
          this.expired = true
          this.loaded = true
          return
        }

        const DAYS = Math.floor(DISTANCE / this._days)
        const HOURS = Math.floor((DISTANCE % this._days) / this._hours)
        const MINUTES = Math.floor((DISTANCE % this._hours) / this._minutes)
        const SECONDS = Math.floor((DISTANCE % this._minutes) / this._seconds)

        this.displayMinutes = this.formatNum(MINUTES)
        this.displaySeconds = this.formatNum(SECONDS)
        this.displayHours = this.formatNum(HOURS)
        this.displayDays = this.formatNum(DAYS)
        this.loaded = true
      }, 1000)
    }
  }
}

</script>

<style lang="scss" scoped>
.countdown {
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;

  &__num {
    display: flex;
    flex-direction: column;
    padding: 0 10px;

    &--time {
      color: var(--color-primary);
      font-size: 40px;
    }

    &--unit {
      color: var(--color-gray);
      font-size: 12px;
    }

    &--colon {
      color: var(--color-primary);
      font-size: 40px;
      line-height: 1.4em;
    }
  }
}
</style>
