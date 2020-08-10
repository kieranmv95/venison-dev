<script>
    export let handleClick;
    export let className = "default";
</script>

<style>
    button {
        border: none;
        font-size: 1em;
        padding: .75em 1em;
        cursor: pointer;
    }

    .default {
        background: var(--color-grey--light);
        color: var(--color-black);
    }

    .primary {
        background: var(--color-primary);
        color: var(--color-white);
    }
</style>

<button on:click={handleClick} class={className ? className : null}>
    <slot />
</button>