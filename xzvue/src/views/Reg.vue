<template>
  <div>
    <section >
      <img src="img/login/logo2.png" alt="" width="130.81px" style="margin-top:100px">
      <div class="parent">
        <span>用户名：</span><input type="text" placeholder="请输入您喜欢的用户名（3-12位）" v-model="uname" class="wen2"><br>
        <span>密码：</span><input type="password" :placeholder="upwdholder" v-model="upwd" class="wen2"><br>
        <span>邮箱：</span><input type="text" placeholder="请使用您的常用邮箱" v-model="email" class="wen2"><br>
        <span>手机：</span><input type="text" placeholder="请使用您的常用手机" v-model="phone" class="wen2"><br>
        <div class="sex">性别:
            <label class="sex"></label>
            <label class="sex"><input type="radio" value="1" v-model="gender">男生</label>
            <label class="sex"><input type="radio" value="0" v-model="gender">女生</label>
	    </div>
        <br><br><button class="b2" id="jishu" @click="reg">提交注册</button>
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
                upwdholder:"请输入密码（3-12位）",
                uname:"",
                upwd:"",
                email:"",
                phone:"",
                gender:""
            }
        },
        methods:{
            reg(){
                var u = this.uname;
                var p = this.upwd;
                var e = this.email;
                var ph = this.phone;
                var g = this.gender;
                // console.log(u+"_"+p);
                var reg = /^.{3,12}$/i;
                var reg2 = /^[a-z0-9]{3,12}$/i
                var reg3 = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}$/i;
                var reg4 = /^0?(13|14|15|18|17)[0-9]{9}$/i;
                if(!reg.test(u)){
                    alert("用户名格式不正确");
                    return;//用户名验证失败不再向后执行
                }
                if(!reg2.test(p)){
                    alert("密码格式不正确");
                    return;//密码验证失败不再向后执行
                }
                if(!reg3.test(e)){
                    alert("邮箱格式不正确");
                    return;//密码验证失败不再向后执行
                }
                if(!reg4.test(ph)){
                    alert("手机号格式不正确");
                    return;//密码验证失败不再向后执行
                }
                //发送ajax请求axios
                var url = "http://127.0.0.1:3000/reg?";
                var obj = {uname:u,upwd:p,email:e,phone:ph,gender:g}
                this.axios.get(url,{params:obj}).then(res=>
                {
                    var i = 3;
                    var timer=setInterval(function(){
                        i--;
                        if(res.data.code==1){
                            if(i>0){
                                jishu.innerHTML=`验证通过！${i}秒后自动跳转登录页面`;
                            }else{
                                location.replace("http://127.0.0.1:8080/#/login")
                                
                            }
                        }else{
                            alert("注册失败，请重试！");
                            clearInterval(timer);
                        }
                    },1000);
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
.wen2{
	width:230px;
    margin: 5px;
    border: none;
}
.parent{
line-height:15px;
margin-top:15px;
height:320px;
}
.parent>span{display: inline-block;width: 80px;}
.sex{display: flex;align-items: center;padding: 0 18px}
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
