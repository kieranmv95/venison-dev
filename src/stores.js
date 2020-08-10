import { writable } from "svelte/store"

export const popupStore = writable({
    popup: null,
    toggled: false
});
