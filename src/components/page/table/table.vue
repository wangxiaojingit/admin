<template>

 <div id="tableWrapper">
 <h1>斑马线表格</h1>
   <el-table :data="tableData"  :row-class-name="rowCls">
       <el-table-column prop="date" label="日期" width="380"></el-table-column>
       <el-table-column prop="name" label="姓名" width="380"></el-table-column>
       <el-table-column prop="address" label="地址"></el-table-column>
   </el-table>
   <h1>固定表头表格</h1>
   <el-table :data="tableData" height="200"  :row-class-name="rowCls">
       <el-table-column prop="date" label="日期" width="380"></el-table-column>
       <el-table-column prop="name" label="姓名" width="380"></el-table-column>
       <el-table-column prop="address" label="地址"></el-table-column>
   </el-table>
<h1>固定列的表格</h1>
   <el-table
    :data="tableData3"
    border
    height="200"
    style="width: 50%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
 <h1>带索引并且可以单行选中高亮显示</h1>
 <el-table :data="tableData" highlight-current-row>
   <el-table-column type="index" label="" width="50"></el-table-column>
   <el-table-column prop="date" label="日期"></el-table-column>
   <el-table-column prop="name" label="名字"></el-table-column>
   <el-table-column prop="address" label="地址"></el-table-column>
 </el-table>

  <!-- <h1>多级表头</h1>
  <el-table ref="table3" highlight-current-row  @current-change="handleCurrentChange">
    <el-table-column label="日期" width="150"></el-table-column>
    <el-table-column label="配送信息">
       <el-table-column width="150" label="姓名"></el-table-column>
       <el-table-column label="地址">
         <el-table-column label="省份" width="150"></el-table-column>
         <el-table-column label="市区" width="150"></el-table-column>
         <el-table-column label="地址"></el-table-column>
       </el-table-column>
    </el-table-column>
  </el-table> -->

  </div>

</template>
<script>
export default {
  data () {
    return {
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
      tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]  ,
        currentRow:""  
      
   
    
    }
  },
  methods: {
      rowCls({row, rowIndex}) {
        if (rowIndex ==1) {
          return 'warning-row';
        } else if (rowIndex == 3) {
          return 'success-row';
        }
        return '';
      },
      setCurrent(row) {
        console.log(row)
        this.$refs.table3.setCurrentRow(row);
      },
      handleCurrentChange(val){
        console.log(88)
        console.log(val)
        console.log(88)
          this.currentRow=val

      }

    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
#tableWrapper{
  h1{ font-size:18px;
      font-weight:normal;
      height:30px;
      line-height:30px;
      margin:20px 0;
  }
  .current-row{
    background:gold
  }
}

  .el-table .warning-row {
    background: oldlace;
    
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
