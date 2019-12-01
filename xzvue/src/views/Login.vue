<template>
  <div>
    <section >
      <img src="img/login/logo2.png" alt="" width="130.81px" style="margin-top:100px">
      <div id="yonghu">
        <fieldset><input type="text" :placeholder="unameholder" v-model="uname" class="wen1"><button class="b1">获取验证码</button></fieldset>
        <fieldset><input type="password" :placeholder="upwdholder" v-model="upwd" class="wen2"></fieldset>
        <p>新用户使用验证码登录即自动注册，并表示已同意<a href="javascript:;">《用户服务协议》</a>您也可以点击<a href="#/reg">去注册</a></p>
        <br><br><button class="b2" @click="login">登录</button>
      </div>
    </section>
    <footer>
      <h4>所有方：上海拉扎斯信息科技有限公司</h4>
      <p>增值电信业务许可证：<a href="">沪B2-20150033|</a><a href="">沪ICP备09007032|</a><a href="">上海工商行政管理Copyright?2008-2007ele.me,All Rights Reserved.</a>
      </p>
      <img src="img/login/f1.jpg" alt="" width="86.54">
    </footer>
  </div>
</template>
<script>
export default{
        data(){
            return{
                unameholder:"请输入用户名或手机号",
                upwdholder:"请输入密码",
                uname:"",
                upwd:""
            }
        },
        created(){
            this.getMore();
        },
        methods:{
            getMore(){
                var uname = sessionStorage.getItem("uname");
                var url = "http://127.0.0.1:3000/user";
                this.axios.get(url).then(res=>{
                if(res.data.code == 1){
                    yonghu.innerHTML=`<h1 style="margin-top:100px;width:400px;color:#ee7700">尊敬的${uname},欢迎您！</h1>`;
                }
                })
            },
            login(){
                var u = this.uname;
                var p = this.upwd;
                // console.log(u+"_"+p);
                var reg1 = /^.{3,12}$/i;
                var reg = /^[a-z0-9]{3,12}$/i;
                if(!reg1.test(u)){
                    alert("用户名格式不正确");
                    return;//用户名验证失败不再向后执行
                }
                if(!reg.test(p)){
                    alert("密码格式不正确");
                    return;//密码验证失败不再向后执行
                }
                //发送ajax请求axios
                var url = "http://127.0.0.1:3000/login?";
                var obj = {uname:u,upwd:p}
                this.axios.get(url,{params:obj}).then(res=>
                {
                    //console.log(res);
                    if(res.data.code==-1){
                        alert("用户名和密码有误");
                    }else{
                        console.log(res)
                        var uname = res.data.uname;
                        console.log(uname)
                        sessionStorage.setItem("uname",uname);
                        // yonghu.innerHTML=`<h1 style="color:#ee7700">尊敬的${uname},欢迎您！</h1>`;
                        this.$router.push("/Products")
                    }
                })
            }
        }
    }
</script>
<style scoped>
section,h4,p,footer{text-align:center}
body{
	margin:0;padding:0;
	width:100%;
	height:100%;
	overflow:hidden;
}
a{text-decoration: none;}
section{height:535px;width: 320px;margin: 0 auto}
section input{
font-size:14px;
	height:40px; 
	}
input::-ms-input-placeholder {
            text-align:left;
        } 
input::-webkit-input-placeholder {
            text-align:left;
}
fieldset{
	width:280px;
	height:35px; 
	border-color:#fefefe;
	border-width:1px;
	margin: 0 0 30px 0;
}
.wen1{
	width:170px;
	border:none; 
	outline:none;
}
.wen2{
	width:270px;
	border:none; 
	outline:none;
}
section p{
color:#999999;
font-size:14px;
width:300px;
margin:0 auto;
text-align:left;
}
section div{
line-height:15px;
margin-top:15px;
height:320px;
}
.b1{width:100px;height:40px;color:grey;background:none;margin:0;
	padding:0;border:0;outline:none;
	font-size:16px;}
.b2{width:300px;height:48px;background:#4CD96F;color:#ffffff;
	font-size:16px;border:0;}
footer{
	height:104px;
	font-size:12px;
	color:grey;
}
footer a{color:#999999;}
section a{color:#2395ff;}
</style>
