<script>
    import { onDestroy } from "svelte";
    import { popupStore } from '../stores';
    import githubIcon from "../assets/github.svg";
    import linkIcon from "../assets/link.svg";
    import closeIcon from "../assets/close.svg";

    let popup_value;

    const unsubscribe = popupStore.subscribe(value => {
        popup_value = value;
    });

    const handleClick = () => {
        popupStore.set({
            popup: null,
            toggled: false,
        });
    }

    const handleOutsideClick = (e) => {
        console.log(e.target.id === "close");
        if(e.target.id === "close") {
            popupStore.set({
                popup: null,
                toggled: false,
            });
        }
    }

    onDestroy(unsubscribe);
</script>

<style>
    .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.5);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 15px;
    }

    .wrapper > div {
        display: grid;
        align-content: center;
    }

    .wrapper__inner {
        position: relative;
        background: var(--color-white);
        max-width: 680px;
        width: 100%;
        text-align: center;
        padding: 2em 1em;
    }

    .close {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        padding: 1em;
    }

    .close img {
        width: 20px;
        height: 20px;
    }

    h2 {
        margin-bottom: 1rem;
    }

    @media only screen and (min-width: 768px) {
        h2 {
            margin-bottom: 1.75rem;
        }
    }

    .description {
        margin-bottom: 1em;
    }

    @media only screen and (min-width: 768px) {
        .description {
            margin-bottom: 2.75em;
        }
    }

    .links {
        display: flex;
        justify-content: center;
    }

    @media only screen and (min-width: 768px) {
        .links {
            margin-bottom: 2em;
        }
    }

    .links a {
        padding: .5em;
    }

    .links img {
        width: 30px;
        height: 30px;
    }

    .built-with {
        margin-top: 1em;
        font-weight: 700;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    li {
        padding: .3em;
    }

    @media only screen and (min-width: 768px) {
        li { padding: .8em; }
    }

    .hr-one {
        margin: 1em 0;
    }

    .hr-two {
        margin: 1em 0;
    }

    @media only screen and (min-width: 768px) {
        .hr-two {
            margin: 2em 0;
        }
    }
</style>

{#if popup_value.toggled}
    <div id="close" class="wrapper" on:click={handleOutsideClick}>
        <div>
            <div class="wrapper__inner">
                <div class="close" on:click={handleClick}>
                    <img src={closeIcon} alt="close popup" />
                </div>
                <h2>{popup_value.popup.title}</h2>
                <p class="description">{popup_value.popup.description}</p>
                <div class="links">
                    <a
                        href={popup_value.popup.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={githubIcon} alt="github link icon">
                    </a>
                    <a
                        href={popup_value.popup.links.website}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={linkIcon} alt="website link icon">
                    </a>
                </div>
                <hr class="hr-one" />
                <div>
                    <img src={popup_value.popup.img} alt={`${popup_value.popup.title} project image`} />
                </div>
                <hr class="hr-two" />
                <p class="built-with">Built with</p>
                <ul>
                    {#each popup_value.popup.languages as language}
                        <li class="built-with-tech">{language}</li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
{/if}