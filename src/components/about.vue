<template>
    <div class="bg-white border-t border-gray-300 dark:border-gray-800 dark:bg-gray-900">
        <section id="about" class="flex flex-col max-w-md px-6 py-12 mx-auto sm:px-10 sp:px-10 md:px-8 sm:max-w-2xl md:max-w-3xl lg:max-w-5xl sm:py-20 md:py-24 lg:py-32">
            <div class="w-48 h-48 mx-auto mt-12 mb-10 overflow-hidden rounded-full md:w-56 md:h-56 md:mb-12">
                <img style="width:100%;" src="/static/profile.webp">
            </div>
            <div class="text-gray-800 dark:text-white">
                <div class="mx-auto mb-24">
                    <p class="font-bold leading-snug text-left text-1xl md:text-center sm:text-2xl md:text-3xl lg:text-4xl font-header">
                        Hello ! I'm Raj Matariya, Full-stack Blockchain developer based in India (Gujarat). Tech geek always in search of new ways to make world a better place, Passionate for Blockchain, Docker and Javascript
                    </p>
                </div>
                <div class="mb-24">
                    <h3 class="mb-8 text-xl font-bold text-center uppercase md:text-2xl font-header text-primary dark:text-secondary">
                        My actual stack
                    </h3>
                    <div class="flex flex-wrap justify-center mx-auto lg:max-w-3xl">
                        <div class="flex p-4 md:p-8" v-for="item in data" :key="item.url">
                            <span class="flex items-center justify-center" data-tip="HTML 5" data-offset="{'top': -10}" data-class="tooly" currentitem="false"><img :src="item.url" class="w-16 transition duration-500 ease-in-out transform md:w-20 hover:scale-110" alt="HTML 5"></span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col mb-24 lg:-mx-6 lg:flex-row">
                    <div class="w-2/3 mx-auto mb-12 text-center sm:w-2/3 lg:mb-0 lg:mx-6 lg:w-1/3 lg:w-full">
                        <svg viewBox="0 0 24 24" class="w-16 mx-auto mb-6 sm:w-20"><path d="M10.66.62c.27 0 .49.09.68.27s.29.41.3.69v20.6c0 .28-.1.52-.3.71s-.44.29-.7.29H3.16c-.27 0-.49-.09-.68-.27s-.3-.41-.33-.69V1.63c0-.27.09-.5.27-.69s.41-.3.69-.32h7.55zm-.32 21.28V1.93H3.47v1.08l2.91-.02c.19 0 .34.06.47.19s.19.28.19.47c0 .17-.06.32-.19.46s-.29.19-.47.19l-2.93.02v1.99h1.59c.19 0 .35.06.48.19s.2.28.2.47c0 .17-.06.33-.19.47s-.28.21-.47.21H3.47v2.02H6.4c.2 0 .37.06.49.19s.19.28.19.47a.648.648 0 01-.68.67H3.47v1.97h1.59c.19 0 .34.07.47.2s.19.29.19.48c0 .17-.06.32-.19.45s-.28.19-.47.19H3.47v2.04H6.4c.2 0 .37.07.49.2s.19.29.19.47-.07.35-.2.48-.29.2-.48.2H3.47v1.99h1.57c.19 0 .35.06.48.19s.2.28.2.47c0 .2-.07.37-.2.49s-.29.19-.48.19H3.47v.89h6.87zM21.56 1c.08.09.14.2.2.32s.08.25.08.39l-.02 16.22-2.58 5.16-.07.07c-.06.09-.14.16-.23.19s-.19.05-.28.05h-.12c-.12 0-.23-.04-.33-.11s-.16-.18-.21-.29l-2.53-5.09v-.14l.05-16.12c0-.16.03-.29.08-.41s.13-.22.22-.32c.09-.08.2-.14.33-.19s.27-.07.42-.07c.72-.02 1.44-.02 2.16-.01.72.01 1.43.03 2.13.06.12 0 .25.02.36.07s.23.12.34.22zm-2.9 20.34l1.45-2.91h-.3c-.19 0-.35-.06-.48-.18s-.2-.27-.2-.46c0-.2.06-.37.19-.49s.28-.19.47-.19h.7V5.94H16.8l-.05 11.18h.7c.2 0 .37.06.49.18s.19.28.19.48c0 .19-.06.34-.19.47s-.28.19-.47.19h-.3l1.49 2.9zm.01-19.37c-.62-.01-1.23 0-1.84.01v2.65h3.7V2l-1.86-.03z" class="about-icons dark:fill-neon"></path></svg>
                        <h3 class="mb-2 text-2xl font-semibold lg:text-3xl font-header text-primary dark:text-secondary">
                            Visual Design
                        </h3>
                        <p class="text-xl md:text-2xl">I create the design of your websites and applications.</p>
                    </div>
                    <div class="w-2/3 mx-auto mb-12 text-center sm:w-2/3 lg:mb-0 lg:mx-6 lg:w-1/3 lg:w-full">
                        <svg viewBox="0 0 24 24" class="w-16 mx-auto mb-6 sm:w-20"><path d="M22.31 3.5c.31 0 .58.11.81.33s.34.48.34.8v10.22c0 .33-.11.6-.34.82s-.5.33-.81.33h-9.35v3.14h2.48c.2 0 .37.07.49.2s.19.29.19.48-.07.35-.2.48-.29.2-.48.2H8.55c-.2 0-.37-.07-.49-.2s-.18-.3-.18-.48.07-.35.2-.48.29-.2.48-.2h2.48V16H1.69c-.33 0-.6-.11-.82-.34s-.33-.5-.33-.81V4.65c0-.33.11-.6.34-.82s.5-.33.81-.33h20.62zm-.16 1.32H1.88v9.87h20.27V4.82zM7.69 12.6l-2.41-2.41c-.16-.16-.23-.34-.23-.55s.08-.39.23-.55L7.69 6.7c.12-.13.28-.2.45-.2s.34.07.46.19.19.28.19.46-.06.34-.19.48L6.59 9.64l2.02 2.02c.12.12.19.28.19.46s-.07.34-.2.48c-.06.05-.13.09-.21.13s-.16.06-.26.06c-.08 0-.16-.02-.23-.06s-.15-.09-.21-.13zm2.93.09c-.16-.09-.27-.22-.33-.39s-.05-.33.02-.5l2.16-4.5c.09-.16.23-.27.4-.33s.33-.05.49.03c.17.08.29.2.35.38s.05.34-.02.52l-2.2 4.5a.656.656 0 01-.58.38c-.05 0-.09-.01-.14-.02s-.11-.05-.15-.07zm4.59-.57c0-.18.05-.33.16-.46l2.02-2.02-2.02-2.02c-.12-.14-.19-.3-.19-.48s.06-.33.19-.46c.14-.14.3-.21.48-.21s.33.07.46.21l2.39 2.39c.16.16.23.34.23.55s-.08.39-.23.55l-2.41 2.41c-.06.05-.13.09-.21.13a.525.525 0 01-.49 0 1.07 1.07 0 01-.21-.13.67.67 0 01-.17-.46z" class="about-icons dark:fill-neon"></path></svg>
                        <h3 class="mb-2 text-2xl font-semibold lg:text-3xl font-header text-primary dark:text-secondary">
                            Development
                        </h3>
                        <p class="text-xl md:text-2xl">I develop hybrid app in ionic along with web development in MEAN stack.</p>
                    </div>
                    <div class="w-2/3 mx-auto mb-12 text-center sm:w-2/3 lg:mb-0 lg:mx-6 lg:w-1/3 lg:w-full">
                        <svg id="Layer_1" class="w-16 mx-auto mb-6 sm:w-20" style="enable-background:new 0 0 256 256;" version="1.1" viewBox="0 0 256 256" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M152.4,70.1c-9,9-8.9,23.5,0,32.5c9,9,23.5,9,32.5,0c9-9,9-23.5,0-32.5C175.9,61.2,161.3,61.2,152.4,70.1z M178,95.7   c-5.2,5.2-13.6,5.2-18.7,0c-5.2-5.2-5.2-13.6,0-18.7c5.2-5.2,13.6-5.2,18.7,0C183.1,82.2,183.1,90.6,178,95.7z" class="dark:fill-neon"/><path class="dark:fill-neon" d="M245.9,9.1c-1.9-1.8-4.3-2.8-6.9-2.6l-2.6,0.2c-0.6,0.1-14.7,2.2-20.1,3.4c-5.2,1.1-10.4,2.4-15.5,4   c-3.9,1.2-10.4,3.6-13.9,4.9c-1.6,0.6-3.1,1.2-4.7,1.9l-9.2,4.1l-1.4,0.7c-42.6,21.1-75.4,58.3-92.6,104.6l-5.7,15.5l17.9,18   l18,17.8l15.5-5.7c46.4-17.1,83.5-50,104.6-92.6l4.7-10.5c0.7-1.5,1.3-3.1,1.9-4.7c1.3-3.5,3.7-9.9,4.9-13.9   c1.5-5.1,2.9-10.3,4-15.5c1.1-5.1,3.2-18.7,3.3-19.6l0.3-3.1C248.7,13.5,247.7,10.9,245.9,9.1z M238.5,18c0,0.1-2.1,13.9-3.2,18.7   c-1.1,5-2.3,9.9-3.8,14.7c-1.1,3.7-3.4,9.9-4.7,13.3c-0.5,1.4-1.1,2.8-1.7,4.1l-3.9,8.8l-0.7,1.4c-20,40.3-55.2,71.5-99.3,87.8   l-9.7,3.6l-13.6-13.5l-13.5-13.6l3.6-9.7c16.3-44,47.4-79.3,87.7-99.3l10.2-4.6c1.3-0.6,2.7-1.2,4.1-1.7c3.4-1.3,9.6-3.5,13.3-4.7   c4.8-1.4,9.8-2.7,14.7-3.8c4.8-1,17.6-3,19.4-3.3l1-0.1L238.5,18z"/><path class="dark:fill-neon" d="M53,162.1c-20.8,2.2-33.4,22.5-37.8,39.2c-1.3,5-2.6,9.7-5.5,12.8c-0.8,0.9-2.1,1.6-2.2,2.9c-0.1,1.3,0.9,3,1.8,3.8   c2.6,2.5,6.6,1.9,9.7,0.8c3.7-1.3,6.6-3.8,9.4-6.5c1.2-1.1,2.4-2.2,3.5-3.1c1.5-1.1,3.1-1.6,4.2-1.3c0.8,0.2,1.4,0.9,1.9,2   c1.3,3,0.7,7.4-1.5,10.2c-1.3,1.7-3.2,3.3-5.2,4.9c-4.7,3.8-9.5,8.5-10.3,14.9c-0.3,2.7-0.2,5.9,3.1,6.5c3,0.5,5.4-1.2,7.9-2.6   c5-3,11.2-3.1,16.7-4.6c4.8-1.2,9.5-2.9,14-4.9c7.3-3.3,14.3-7.8,19.7-13.8c5.1-5.7,8.4-12.2,9.7-19.3c2-11.1-1.4-22.3-9.3-30.8   C74.9,165.1,64.1,160.9,53,162.1z M82.5,202.5c-1,5.3-3.4,10.2-7.3,14.5c-7.3,8-19.9,14.2-34.8,17.1l-1.1,0.2c-0.1,0-0.2,0-0.3,0.1   c1.9-1.6,3.8-3.3,5.3-5.4c4.2-5.6,5.3-13.8,2.6-19.9c-0.8-1.8-1.8-3.3-3-4.5c-1.5-1.5-3.3-2.5-5.3-3.1c-4-1.1-8.5-0.1-12.5,2.8   c-0.8,0.5-1.5,1.1-2.2,1.7c0.2-0.8,0.4-1.5,0.6-2.3c3.6-13.7,13.5-30.3,29.4-32c8-0.8,15.9,2.3,21.6,8.3   C81.4,186.3,83.9,194.5,82.5,202.5z"/></g></svg>
                        <h3 class="mb-2 text-2xl font-semibold lg:text-3xl font-header text-primary dark:text-secondary">
                            Deployment
                        </h3>
                        <p class="text-xl md:text-2xl">I deploy my apps in kubernetes network in form of Microservice along with AWS and Firebase service as per need.</p>
                    </div>
                </div>
                <div class="mb-12">
                    <p class="mb-8 text-xl md:mb-16 md:leading-relaxed md:text-center md:text-2xl">
                        Passionate about Blockchain and Docker network development, I am committed to carrying out the opportunities entrusted to me by building modern and effective solutions. Rigorous and demanding, I take care to respect the best practices and standards of the Web. Being also curious and open, I like to experiment with the latest trends through daily monitoring.
                    </p>
                    <div class="flex justify-center"><a href="" class="px-6 py-2 text-xl border-2 rounded-full text-primary border-primary text-center hover:bg-primary_light hover:border-primary_light hover:text-primary md:text-1xl dark:border-secondary_light dark:text-secondary_light dark:hover:bg-secondary dark:hover:border-secondary dark:hover:text-secondary_dark ">Download my résumé</a></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {url: '/static/docker.svg', name: 'HTML 5'},
        {url: '/static/kubernetes.svg', name: 'HTML 5'},
        {url: '/static/hyperledger.svg', name: 'HTML 5'},
        {url: '/static/ethereum.svg', name: 'HTML 5'},
        {url: '/static/blockstack.svg', name: 'HTML 5'},
        {url: '/static/graphql.svg', name: 'HTML 5'},
        {url: '/static/javascript.svg', name: 'HTML 5'},
        {url: '/static/git.svg', name: 'HTML 5'},
        {url: '/static/angular.svg', name: 'HTML 5'},
        {url: '/static/tailwindcss.svg', name: 'HTML 5'},
        {url: '/static/css3.svg', name: 'HTML 5'},
        {url: '/static/html5.svg', name: 'HTML 5'}
      ]
    }
  }
}
</script>

<style scoped>
    .dark-fill {
        fill: red;
    }
</style>
