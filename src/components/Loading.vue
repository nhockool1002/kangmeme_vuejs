<template>
    <div class="loading">
        <div class="loadingio-spinner-cube-n64xrj311">
        <div class="ldio-dlh92lbttge">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'loading',
    data() {
        return {}
    }
}
</script>

<style>
    .loading {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        transition: ease all 0.2s;
        z-index: 1000001;
        background-color: rgba(0, 0, 0, 0.66)
    }
    .showLoading {
        opacity: 1;
        visibility: visible;
    }
    .loading .loadingio-spinner-cube-n64xrj311 {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @keyframes ldio-dlh92lbttge {
            0% {
                transform: scale(1.12)
            }

            100% {
                transform: scale(1)
            }
        }

        .ldio-dlh92lbttge div {
            position: absolute;
            width: 38px;
            height: 38px;
            top: 8px;
            left: 8px;
            background: #e15b64;
            animation: ldio-dlh92lbttge 1.3888888888888886s cubic-bezier(0, 0.5, 0.5, 1) infinite;
            animation-delay: -0.41666666666666663s;
        }

        .ldio-dlh92lbttge div:nth-child(2) {
            top: 8px;
            left: 54px;
            background: #f47e60;
            animation-delay: -0.27777777777777773s;
        }

        .ldio-dlh92lbttge div:nth-child(3) {
            top: 54px;
            left: 8px;
            background: #abbd81;
            animation-delay: 0s;
        }

        .ldio-dlh92lbttge div:nth-child(4) {
            top: 54px;
            left: 54px;
            background: #f8b26a;
            animation-delay: -0.13888888888888887s;
        }

        .loadingio-spinner-cube-n64xrj311 {
            width: 90px;
            height: 90px;
            display: inline-block;
            overflow: hidden;
            background: rgba(NaN, NaN, NaN, 0);
        }

        .ldio-dlh92lbttge {
            width: 100%;
            height: 100%;
            position: relative;
            transform: translateZ(0) scale(0.9);
            backface-visibility: hidden;
            transform-origin: 0 0;
            /* see note above */
        }

        .ldio-dlh92lbttge div {
            box-sizing: content-box;
        }
</style>