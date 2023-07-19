<!--
 * @Author: mjjh
 * @LastEditTime: 2023-07-19 20:53:57
 * @FilePath: \chagpt-shuowen\src\components\Setting\index.vue
 * @Description: 弹出设置窗口
-->
<script setup lang='ts'>
import { computed, onMounted, ref } from 'vue'
import { NModal, NTabPane, NTabs } from 'naive-ui'
import General from './General.vue'
import { SvgIcon } from '@/components/index'
import DomainsList from '@/components/Setting/DomainsList.vue'
import { getApiList } from '@/api'

interface Props {
  visible: boolean
}

interface Emit {
  (e: 'update:visible', visible: boolean): void
}

const props = defineProps<Props>()

const emit = defineEmits<Emit>()

const active = ref('Domain')

const show = computed({
  get() {
    return props.visible
  },
  set(visible: boolean) {
    emit('update:visible', visible)
  },
})

const toGetApiList = async () => {
  console.log('进来函数')

  const res = await getApiList({
    pageSize: 10,
    pageNum: 1,
  })
  console.log('获取到的res是', res)
}

onMounted(() => {
  console.log('1111')

  toGetApiList()
})
</script>

<template>
  <NModal
    v-model:show="show"
    :auto-focus="false"
    preset="card"
    style="width: 95%; max-width: 640px"
  >
    <div>
      <NTabs v-model:value="active" type="line" animated>
        <NTabPane name="Domain" tab="Domain">
          <template #tab>
            <!--						<SvgIcon class="text-lg" icon="ri:list-settings-line" /> -->
            <span class="ml-2">{{ $t("setting.domain") }}</span>
          </template>
          <DomainsList />
        </NTabPane>
        <NTabPane name="Config" tab="Config">
          <template #tab>
            <SvgIcon class="text-lg" icon="ri:list-settings-line" />
            <span class="ml-2">{{ $t("setting.config") }}</span>
          </template>
          <General />
        </NTabPane>
        <!--        <NTabPane name="General" tab="General"> -->
        <!--          <template #tab> -->
        <!--            <SvgIcon class="text-lg" icon="ri:file-user-line" /> -->
        <!--            <span class="ml-2">{{ $t('setting.general') }}</span> -->
        <!--          </template> -->
        <!--          <div class="min-h-[100px]"> -->
        <!--            <About /> -->
        <!--          </div> -->
        <!--        </NTabPane> -->
      </NTabs>
    </div>
  </NModal>
</template>
