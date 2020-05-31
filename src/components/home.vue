<template>
    <div>
        <app-banner></app-banner>
        <app-project></app-project>
        <app-funproject></app-funproject>
        <app-about></app-about>
        <div v-if="false" class="bg-transparent text-center py-4 lg:px-4 fixed bottom-0 w-full">
            <div class="p-4 bg-gray-800 items-center text-gray-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                <span class="flex rounded-full bg-gray-500 text-primary dark:text-black uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
                <span class="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
                <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
            </div>
        </div>
    </div>
</template>
