<template>
  <div class="trade">
    <el-card shadow="always">
      <h1>品牌管理</h1>
      <el-button type="warning" plain icon="Plus" style="margin-top: 15px">
        添加品牌
      </el-button>

      <el-table :data="pages.data" stripe border style="margin-top: 25px">
        <el-table-column
          label="序号"
          type="index"
          width="100"
          align="center"
        ></el-table-column>
        <el-table-column
          prop="tmName"
          label="品牌名称"
          align="center"
        ></el-table-column>
        <el-table-column label="品牌LOGO" align="center">
          <template v-slot="{ row }">
            <img :src="row.logoUrl" alt="" style="width: 60px; height: 60px" />
          </template>
        </el-table-column>
        <el-table-column label="品牌操作" width="260" align="center">
          <el-button type="success" icon="Edit"></el-button>
          <el-button type="danger" icon="Delete"></el-button>
        </el-table-column>
      </el-table>

      <el-pagination
        v-model:current-page="pages.page"
        v-model:page-size="pages.pageSize"
        style="margin-top: 30px"
        :page-sizes="[7, 10, 13, 16]"
        :background="true"
        layout="prev, pager, next, jumper, ->, total, sizes"
        :total="pages.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { reqTrademark } from '@/api/product/trademark';
import { TrademarkRes, Record } from '@/utils/type';

type Data = {
  page: number;
  pageSize: number;
  total: number;
  data: Record[];
};

const pages = reactive<Data>({
  //当前页码
  page: 1,
  //每一页展示多少数据
  pageSize: 7,

  total: 0,

  data: [
    {
      id: 0,
      createTime: '',
      updateTime: '',
      tmName: '',
      logoUrl: '',
    },
  ],
});

const handleSizeChange = (val: number) => {
  pages.page = 1;
  pages.pageSize = val;
  getTrademark();
};
const handleCurrentChange = (val: number) => {
  pages.page = val;
  getTrademark();
};
const getTrademark = async () => {
  const result: TrademarkRes | any = await reqTrademark(
    pages.page,
    pages.pageSize,
  );
  if (result.code === 200) {
    pages.page = result.data.current;
    pages.pageSize = result.data.size;
    pages.total = result.data.total;
    pages.data = result.data.records;
  }
};

onMounted(() => {
  getTrademark();
});
</script>

<style scoped lang="scss"></style>
