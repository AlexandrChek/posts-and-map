<template>
    <div>
        <canvas></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
    name: 'StatChart',
    props: ['data'],
    mounted() {
        let labels = []
        for (let i = 0; i < this.data.length; i++) {
            labels.push(i + 1)
        }
        new Chart (
            document.querySelector('canvas'),
            {
                type: 'line',
                data: {
                    labels,
                    datasets: [
                        {
                            label: "Post lengths",
                            data: this.data,
                            borderColor: 'red',
                            backgroundColor: 'violet',
                            borderWidth: 4,
                            cubicInterpolationMode: 'monotone'
                        }
                    ]
                },
                options: {
                    plugins: {
                        title: {
                            display: true,
                            text: 'STATISTICS',
                            font: {
                                size: 16,
                                weight: 'bold'
                            }
                        },
                        legend: {
                            labels: {
                                boxWidth: 14,
                                color: 'red',
                                font: {
                                    size: 16,
                                    weight: 'bold'
                                }
                            }
                        }
                    }
                }
            }
        )
    }
}
</script>

<style scoped lang="scss">
div {
    width: 40%;
    @media (max-width: 1199px) {
        width: 50%;
    }
    @media (max-width: 767px) {
        width: 70%;
    }
    @media (max-width: 575px) {
        width: 100%;
    }
}
</style>
