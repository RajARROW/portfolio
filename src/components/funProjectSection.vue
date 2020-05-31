<template>
  <section
    class="px-4 py-20 text-center bg-white border-t border-gray-400 dark:border-gray-800 dark:bg-gray-900 relative"
  >
    <div v-if="!isHidden">
      <h3
        class="text-xl font-bold text-center uppercase md:text-2xl font-header text-primary dark:text-secondary"
      >Fun Project</h3>
      <div class="grid grid-cols-1 gap-4 mt-8">
        <div class="max-w-md py-4 px-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg mx-auto">
          <div>
            <h2
              class="text-xl font-bold text-center uppercase md:text-2xl font-header text-primary dark:text-secondary"
            >Tic-Tac-Toe</h2>
            <p
              class="mt-2 text-black dark:text-white"
            >Exploring Artificial Intelligence technology with minmax algorithm. AI powered Tic-Tac-Toe. <strong>I dare you to beat it!</strong></p>
          </div>
          <div class="flex justify-center mt-4">
            <button
              v-on:click="isHidden = !isHidden"
              class="text-xl font-medium text-primary dark:text-secondary"
            >Play !</button>
          </div>
        </div>
      </div>
    </div>
    <app-tictac v-if="isHidden"></app-tictac>
    <svg v-if="isHidden" v-on:click="isHidden = !isHidden" class="absolute fill-blue dark:fill-neon" style="top: 10%;right: 10%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" width="50px" height="50px"><path d="M0 0h24v24H0z" fill="none"/><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isHidden: false
    }
  }
}
</script>
