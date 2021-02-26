<template>
 <a-form :form="form" :label-col="{ span: 7 }" :wrapper-col="{ span: 17 }" @submit="handleSubmit">
    <a-form-item label="Enterprise Name">
        <a-upload-dragger
            name="file"
            :multiple="false"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            @change="handleChange"
        >
            <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text">
            Click or drag Resume file to this area to upload
            </p>
            <p class="ant-upload-hint">
            Support for a single upload.
            </p>
        </a-upload-dragger>
    </a-form-item>
 </a-form>
</template>
<script>
import { Upload, Form } from "ant-design-vue"
export default {
  components:{
      "a-upload-dragger":Upload.Dragger,
      "a-form":Form,
      "a-form-item":Form.Item
  },
  data() {
    return {};
  },
  methods: {
    handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>