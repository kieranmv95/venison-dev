<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
</script>

<style>
    .app {
        display: grid;
        min-height: 100vh;
        grid-template-rows: auto 1fr auto;
    }

    main {
        text-align: center;
        margin-top: 4rem;
    }

    h1 {
        margin-bottom: 1rem;
    }

    p {
        margin-bottom: 1rem;
    }
</style>

<div class="app">
    <Header />
    <main>
        <h1>Its moved!</h1>
        <p>This used to be a showcase of all my work and projects. Its moved!</p>
        <p>It now lives <a href="https://www.kieranvenison.co.uk/projects">here, Check it out!</a></p>
    </main>
    <Footer />
</div>