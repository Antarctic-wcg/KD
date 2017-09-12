var mongoose = require('mongoose');//引入模块
var url = 'mongodb://kd:kd@ds133004.mlab.com:33004/kd';
mongoose.Promise = global.Promise;
mongoose.connect(url, {useMongoClient: true});
//获取文件句柄
var db = mongoose.connection;
//获取文件的错误信息
db.on('error',() =>{
  console.log('Connect error');
});
//打开数据库成功
db.open('open', () =>{
  console.log('mongoose working!!!');
});

var sj = new Date(Date.now() + (8 * 60 * 60 * 1000));//获取当前的时间

//创建集合的文档类型
var Schema = mongoose.Schema;
//用户信息
var userSchema = new Schema({
  user_id : { type : String}, //用户名
  name : { type : String}, //姓名
  sex : { type : String}, //性别
  password : { type : String}, //密码
  email : { type : String, default : ''}, //邮箱
  phone : { type : Number, default : ''}, //电话
  profile : { type : String, default : ''}, //个人简历
  problem : { type : String}, //密保问题
  answer : { type : String} //密保答案
});

//发布问题
var userquestion = new Schema({
  user_id : { type : String}, //用户名
  user_tip : {type : String},//标题
  user_label : { type : String, default : ''}, //标签
  user_quiz : { type : String}, //发布的问题
  user_time : { type : Date, default: sj } //提问的时间
});

//问题的详情
var userproblem = new Schema({
  user_id : { type : String}, //提问用户名
  users_id : { type : String}, //回答用户名
  content : { type : String}, //回答内容
  like_id : { type : String, default : ''}, //点赞的用户名
  like : { type : Array, default: [] }, //是否点赞
  total : { type : Number, default: 0 }, //点赞的总数
  time : { type : Date } //回答的时间
});

//管理员
var useradmin = new Schema({
  admin_id : { type : String}, //管理员账号
  password : { type : String}, //管理员密码
  jurl : { type : Number, default: 1} //管理权限 1代表管理员 2代表超级管理员
});

//链接集合
var User = mongoose.model('User',userSchema);
//创建一个用户信息user模块
module.exports.user = User;

//链接集合
var Question_list = mongoose.model('Question_list',userquestion);
//创建一个发布问题question_list模块
module.exports.question_list = Question_list;

//链接集合
var Problem_details = mongoose.model('Problem_details',userproblem);
//创建一个问题的详情problem_details模块
module.exports.problem_details = Problem_details;

//链接集合
var Admin = mongoose.model('Admin',useradmin);
//创建一个管理员admin模块
module.exports.admin = Admin;
