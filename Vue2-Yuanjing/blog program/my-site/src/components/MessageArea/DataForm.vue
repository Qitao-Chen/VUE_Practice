<template>
  <form id="data-form-container" ref="form" @submit.prevent="handleSubmit" class="data-form-container">
      <div class="form-item">
          <div class="input-area">
              <input type="text" placeholder="User Name" maxlength="20" v-model="formData.nickName">
              <span class="tip">{{formData.nickName.length}}/20</span>
          </div>
          <div class="error">{{error.nickName}}</div>
      </div>
      <div class="form-item">
          <div class="text-area">
              <textarea placeholder="Input Comment" maxlength="300" v-model="formData.content"></textarea>
              <span class="tip">{{formData.content.length}}/300</span>
          </div>
          <div class="error">{{error.content}}</div>
      </div>
      <div class="form-item">
          <div class="button-area">
              <button :disabled="isSubmitting">{{isSubmitting ? "Submitting" :"Submit"}}</button>
          </div>
      </div>
  </form>
</template>

<script>

export default {
    data(){
       return{
        formData:{
            nickName:'',
            content: '',
        },
        error:{
            nickName:'',
            content:'',
        },
        isSubmitting:false,
       }
    },
    methods:{
        handleSubmit(){
          if(!this.formData.nickName){
              this.error.nickName = "Please fill the nick name"
          }
          this.error.content = this.formData.content ? "" : "Please fill the content";
          if(this.error.nickName || this.error.content){
              //有错误
              return
          }
          this.isSubmitting = true;
          this.$emit("submit", this.formData,(successMsg) =>{
              //method 1 callback
                this.$showMessage({
                content:successMsg,
                type:"success",
                duration:2000,
                container:this.$refs.form,
                callback: () =>{
                    this.isSubmitting =false;
                    this.formData.nickName='';
                    this.formData.content='';
                }
            })
          })
        }
    }
}
</script>

<style lang="less" scoped>
    @import url(~@/styles/var.less);
    .data-form-container{
        margin-bottom: 20px;
        overflow: hidden;
    }
    .form-item{
        margin-bottom: 8px;
    }
    .input-area{
        width: 50%;
        position: relative;
    }
    .text-area{
        position: relative;
    }
    .tip{
        position: absolute;
        right: 5px;
        bottom: 5px;
        color: #b4b8bc;
        font-size: 12px;
    }
    input,
    textarea{
        display: block;
        width: 100%;
        box-sizing: border-box;
        border: 1px dashed @grey;
        outline: none;
        color: @words;
        font-size: 14px;
        border-radius: 4px;
        &:focus{
            border-color:@primary;
        }
    }
    input{
        padding: 0 15px;
        height: 40px;
    }
    textarea{
        resize: none;
        padding: 8px 15px;
        height: 120px;
    }
    .error{
        margin-top: 6px;
        color: @danger;
        font-size: 14px;
        height: 20px;
        line-height: 20px;
    }
    button{
        position: relative;
        cursor:pointer;
        border: none;
        outline: none;
        width: 100px;
        height: 34px;
        color: #fff;
        border-radius: 4px;
        background: @primary;
        &:hover{
            background: darken(@primary,10%);
        }
        &:disabled{
            background: lighten(@primary, 20%);
            cursor: not-allowed;
        }
    }

</style>