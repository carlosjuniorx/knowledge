<template>
    <footer class="footer">
        <span>Copyright <strong>Junior</strong>© 2020-2021</span>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style>
    .footer{
        grid-area: footer;
        background-color: #ddd;
        color: #333;
        padding-right: 10px;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 10px;
    }
</style>