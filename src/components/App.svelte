<script>
    import Header from "./Header.svelte";
    import Project from "./Project.svelte";
    import projects from "../projects";

    import Footer from "./Footer.svelte";
    import Popup from "./Popup.svelte";
</script>

<style>
    .main {
        min-height: calc(100vh - 82px);
    }

    .projects {
        display: grid;
        grid-gap: 1em;
    }

    @media only screen and (min-width: 768px) {
        .projects {
            grid-template-columns: 1fr 1fr;
            grid-gap: 0;
        }
    }
    @media only screen and (min-width: 1200px) {
        .projects {
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 0;
        }
    }
    .coming-soon {
        position: relative;
        background: var(--color-offwhite);
        height: 275px;
    }

    @media only screen and (min-width: 768px) {
        .coming-soon {
            height: initial;
            padding-bottom: 56.25%;
        }
    }

    .coming-soon h2 {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>

<div class="main">
    <Header />

    <div class="projects">
        {#each projects as project}
            <Project
                    name={project.name }
                    short_description={project.short_description}
                    src={project.src}
                    primary_tech={project.primary_tech}
                    popup_values={project.popup_values}
            />
        {/each}
        <div class="coming-soon">
            <h2>Coming Soon</h2>
        </div>
    </div>
</div>

<Footer />

<Popup />