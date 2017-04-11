<template>
    <div class="select-dropdown no-select">
        <slot></slot>
    </div>
</template>

<script>
    import {
        getStyle
    } from '../../../utils/assist'
    import Popper from 'popper.js'

    export default {
        props: {
            placement: {
                type: String,
                default: 'bottom-start'
            }
        },
        data() {
            return {
                popper: null,
                width: ''
            };
        },
        computed: {
            styles() {
                let style = {};
                if (this.width)
                    style.width = `${this.width}px`;
                return style;
            }
        },
        methods: {
            update() {
                if (this.popper) {
                    this.$nextTick(() => {
                        this.popper.update();
                    });
                } else {
                    this.$nextTick(() => {
                        this.popper = new Popper(this.$parent.$refs.reference, this.$el, {
                            gpuAcceleration: false,
                            placement: this.placement,
                            boundariesPadding: 0,
                            forceAbsolute: true,
                            boundariesElement: 'body',
                            onCreate: () => {
                                this.resetTransformOrigin(this.popper);
                            }
                        });
                    })
                }
            },
            destroy() {
                if (this.popper) {
                    this.resetTransformOrigin(this.popper);
                    setTimeout(() => {
                        this.popper.destroy();
                        this.popper = null;
                    }, 300);
                }
            },
            resetTransformOrigin(popper) {
                let placementMap = {
                    top: 'top',
                    bottom: 'bottom'
                };
                let placement = popper.popper.getAttribute('x-placement').split('-')[0];
                let origin = placementMap[placement];
                popper.popper.style.transformOrigin = `center ${ origin }`;
            }
        },
        compiled() {
            this.$on('on-update-popper', this.update);
            this.$on('on-destroy-popper', this.destroy);
        },
        beforeDestory() {
            if (this.popper) {
                this.popper.destroy();
            }
        }
    }
</script>