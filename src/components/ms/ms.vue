<!-- from 恪愚@mengxiaochen，请标注此行 -->
<script setup>
    import { onMounted, ref, reactive, defineEmits } from 'vue'

    const emit = defineEmits();

    const props = defineProps({
        item: {
            type: Object,
            default: () => {}
        },
        name: { //当前用户
            type: String,
            default: "22"
        }
    })

    let { item, name } = props; // {img: [], text: "", status: 'pending', id: '', name: ""}

    const images = item.img;
    const texts = item.text;
    const emptyH = ref('0px');
    const spacerXTop = ref('0px');
    const spacerETop = ref('0px');
    const outerLineRef = ref(null);

    onMounted(() => {
        emptyH.value = outerLineRef.value.clientHeight + 'px';
        spacerXTop.value = (outerLineRef.value.clientHeight - 20) + 'px';
        spacerETop.value = (outerLineRef.value.clientHeight - 30) + 'px';
    })

    const handleResend = () => {
        emit('send', item) //这里是把错误的一条原封不动发回去
    }

    const handleCheckImg = (e) => {
        emit('view', e.target.currentSrc || e.target.src) //预览图片
    }
    
</script>

<template>
    <div class="m-message" style="width: 100%;">
        <div class="message__outer" ref="outerLineRef" :class="[item.name === name ? 'message-reverse' : '']">
            <div :style="{'height': emptyH}">
                <div class="message__avatar font-11" :style="{'opacity': item.hidden ? 0 : 1, 'margin-top': spacerXTop}">{{ item.name.slice(0, 1) }}</div>
            </div>
            <div class="message__inner" :class="[item.name === name ? 'message-reverse' : 'message-s', item.first ? 'message--first' : '', item.middle ? 'message--middle' : '', item.last ? 'message--last' : '']">
                <div class="m-message__bubble">
                    <template v-if="images.length && !texts.length">
                        <a class="image" href="#">
                            <div class="image__main" @click="handleCheckImg">
                                <div class="gallery" style="width: 21rem;">
                                    <template v-for="(item, index) in images">
                                        <template v-if="images.length === 1">
                                            <div class="image__element gallery__item--half">
                                                <div class="image__aspectRatio" style="padding-bottom: 57%">
                                                    <div class="image__wrapper">
                                                        <img style="display: block;max-width: 100%;max-height: 200px;width: 100%;height: 100%;" :src="item" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                        <template v-if="images.length === 2 || images.length === 4">
                                            <div class="image__element gallery__item gallery__item--half">
                                                <div class="image__aspectRatio" :style="{'padding-bottom': (208 / images.length) + '%'}">
                                                    <div class="image__wrapper">
                                                        <img style="display: block;max-width: 100%;max-height: 200px;width: 100%;height: 100%;" :src="item" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                        <template v-else-if="images.length === 3 || images.length === 6">
                                            <div class="image__element gallery__item gallery__item--third">
                                                <div class="image__aspectRatio" style="padding-bottom: 98%">
                                                    <div class="image__wrapper">
                                                        <img style="display: block;max-width: 100%;max-height: 200px;width: 100%;height: 100%;" :src="item" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </template>
                                        <template v-else-if="images.length === 5">
                                            <template v-if="index < 2">
                                                <div class="image__element gallery__item gallery__item--half">
                                                    <div class="image__aspectRatio" style="padding-bottom: 69.5%">
                                                        <div class="image__wrapper">
                                                            <img style="display: block;max-width: 100%;max-height: 200px;width: 100%;height: 100%;" :src="item" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                            <template v-else>
                                                <div class="image__element gallery__item gallery__item--third">
                                                    <div class="image__aspectRatio" style="padding-bottom: 67%">
                                                        <div class="image__wrapper">
                                                            <img style="display: block;max-width: 100%;max-height: 200px;width: 100%;height: 100%;" :src="item" alt="">
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                        </template>
                                    </template>
                                </div>
                            </div>
                        </a>
                    </template>
                    <template v-else>
                        <div class="image text" dir="auto">
                            <p class="font-12">{{ texts }}</p>
                        </div>
                    </template>
                </div> <!-- 图片或文字消息的父元素 -->
                <div class="message__actions">
                    <ul class="menu"></ul>
                </div> <!-- 消息状态及操作menu -->
                <div class="message__spacer">
                    <p class="status font-11" v-show="item.status === 'pending'" :style="{'margin-top': spacerXTop}">发送中...</p>
                    <p class="status font-11" v-show="item.status === 'send'"> </p>
                    <div class="error font-14" style="text-align: center;cursor: pointer;" :style="{'margin-top': spacerETop}" v-show="item.status === 'error'" @click="handleResend">
                        <el-icon class="icon">
                            <WarningFilled />
                        </el-icon>
                        <p class="font-11">重新发送</p>
                    </div>
                </div>
            </div>
            <div class="message__status" :style="{'height': emptyH}"></div> <!-- 间隔元素 -->
        </div>
    </div>
    <div class="spacer-lg" style="width: 100%;"></div>
</template>

<style lang="scss" scoped>
    @import "ms.scss";
</style>