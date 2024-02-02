<script setup>
    import { onMounted, ref, reactive, provide, watch } from 'vue'
    import Ms from './ms/ms.vue'

    import { setListArr, addListItem } from './ms/util.js'
    
    const props = defineProps({
        list: {
            type: Array,
            default: () => []
        },
        name: { //当前用户
            type: String,
            default: ""
        }
    })

    let { name } = props;

    // 消息列表
    let msList = reactive(props.list);

    // setListArr(msList)

    // 重新发送消息
    const handleResend = (data) => {
        console.log(data)
        data.status = 'pending'
        msList.pop();
        // 重新执行 新增-发请求 这个流程
        // addListItem(data)
        emit('request', data) // 发送完消息后端要返回一个status，前端去处理消息列表
    }


    const rightTop = ref(null);

    onMounted(() => {
        rightTop.value.scrollTop = rightTop.value.scrollHeight;
    })

</script>

<template>
    <div class="ms-r-top" ref="rightTop">
        <template v-for="(item, index) in msList" :key="index">
            <Ms :item="item" :name="name" @send="handleResend"></Ms>
        </template>
    </div>
</template>

<style lang="scss">
    @import './ms/ms.scss';
</style>