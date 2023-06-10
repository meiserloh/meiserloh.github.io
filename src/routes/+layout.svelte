<script>
    import './styles.css';
    import '../app.css'
</script>

<div class="app">
    <main>
        <slot/>
    </main>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        background: linear-gradient(to right, #2b5876, #4e4376);
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 64rem;
        margin: 0 auto;
        box-sizing: border-box;
    }
</style>
