<script>
    import Button from "./Button.svelte";
    import { popupStore } from '../stores.js';
    export let name;
    export let short_description;
    export let primary_tech;
    export let src;
    export let popup_values;

    const popup = (values) => {
        popupStore.set({
            popup: popup_values,
            toggled: true
        });
    }
</script>

<style>
    section {
        position: relative;
        height: 275px;
    }

    @media only screen and (min-width: 768px) {
        section {
            height: initial;
        }
    }

    section:hover .project__details {
        opacity: 1;
        box-shadow: inset 0 0 2em var(--color-offwhite);
        pointer-events: all;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    @media only screen and (min-width: 768px) {
        img {
            height: initial;
            width: initial;
            object-fit: initial;
        }
    }

    .project__details {
        pointer-events: none;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity .25s;
        background-color: rgba(255,255,255,.8);
        display: grid;
        align-content: center;
    }

    h2 {
        margin-bottom: .5rem;
    }

    ul {
        display: flex;
        justify-content: center;
    }

    ul li {
        position: relative;
        font-weight: 700;
        color: var(--color-primary);
        margin: .5em .5em 2.5em;
    }
</style>

<section>
    <img {src} alt={`${name} example image`} />
    <div class="project__details">
        <div>
            <h2>{name}</h2>
            <p>{short_description}</p>
            <ul>
                {#each primary_tech as tech}
                    <li>{tech}</li>
                {/each}
            </ul>
            <Button
                    handleClick={() => popup(popup_values)}
                    className="primary"
            >
                Learn More
            </Button>
        </div>
    </div>
</section>