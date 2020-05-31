<template>
    <div class="pb-20 bg-white border-t border-gray-300 dark:border-gray-800 dark:bg-gray-900">
        <section id="work" class="px-3 pt-12 pb-0 mx-auto sm:px-6 sm:pt-16 md:max-w-4xl md:pt-20 lg:pt-32 lg:max-w-6xl">
            <div class="grid md:grid-cols-2 grid-cols-1 gap-8">
                <div v-for="item in data" :key="item.title">
                    <div style="max-width:550px; height: 400px" class="transition duration-500 ease-in-out transform rounded shadow-xl hover:shadow-xl hover:scale-105 hover:-translate-y-1  gatsby-image-wrapper mb-4 flex justify-center items-center">
                        <img :src="item.imageURL">
                    </div>
                    <h4 class="mb-2 text-2xl font-bold md:text-2_5xl font-header">
                        <a :href="item.link" target="_blank">
                            <span class="text-black dark:text-secondary">{{item.title}}</span>
                            <svg v-if="item.link" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="inline mb-1 ml-4 text-black dark:text-secondary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                        </a>
                    </h4>
                    <p class="block mb-6 dark:text-white">{{item.description}}</p>
                    <div class="flex flex-wrap">
                        <span v-for="tag in item.tags" :key="tag" class="px-2 py-1 mb-2 text-gray-700 bg-gray-200 dark:bg-gray-800 rounded dark:text-gray-400 mr-4">{{tag}}</span>
                    </div>
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
        {
          title: 'Sports Extra Mile',
          description: `A network platform to get live update on local sport tournaments.`,
          tags: ['Ionic', 'Angular', '50000+ User', 'Nodejs', 'Graph QL', 'AWS', 'Docker', 'Kubernates', 'Micro Services'],
          link: 'https://www.sportsextramile.com/',
          imageURL: '/static/sxm.png'
        },
        {
          title: 'Sports Extra Mile (client App)',
          description: `A network platform to get live update on local sport tournaments.`,
          tags: ['Ionic', 'Angular', 'Nodejs', 'Graph QL', 'AWS', 'Docker', 'Kubernates', 'Micro Services'],
          link: 'https://play.google.com/store/apps/developer?id=SXM+Technologies&hl=en',
          imageURL: '/static/cricziner.webp'
        },
        {
          title: 'Prakarsh XIII',
          description: `It's an android application for technical fest management. It provides all necessary and useful information for technical festival and feature like live news feed, google firebase support etc.`,
          tags: ['JAVA', 'Android APP', 'Firebase'],
          link: 'https://play.google.com/store/apps/details?id=in.ac.svit.prakarsh',
          imageURL: '/static/prakesh.webp'
        },
        {
          title: 'Lycans logistics - blockchain and IoT powered supply chain',
          description: `It's an supply chain management and management system with the power of blockchain technology and IoT which will help to manage distributed ledger.`,
          tags: ['Hyperledger fabric', 'Angular', 'Nodejs', 'IoT', 'Loopback', 'Firebase', 'IBM Blockchain Platform 2.0'],
          imageURL: '/static/lycans.png'
        },
        {
          title: 'Medikeep - an crypto medical records',
          description: `A decentralized medical database using Blockchain Technology.`,
          tags: ['Ethereum', 'Angular', 'Nodejs', 'Blockchain', 'Loopback', 'Firebase'],
          imageURL: '/static/eth.png'
        },
        {
          title: 'Trackk',
          description: `A vehicle tracking system developed on blockchain.`,
          tags: ['Hyperledger fabric', 'Angular', 'Nodejs', 'IoT', 'Loopback', 'Firebase', 'IBM Blockchain Platform 2.0'],
          imageURL: '/static/trackk.png'
        }
      ]
    }
  }
}
</script>
