const show = {
  year: 0,
  month: 0,
  day: 0,
  title: {},
  img: {},
  a: {},
  text: {},
  setmessage: function(str1,str2,str3,str4) {
    title = document.querySelector('h2.pictitle div')
    img = document.querySelector('li#pic a img')
    a = document.querySelector('li#pic a')
    text = document.querySelector('div.bd div.right')
    title.innerHTML = str1
    text.innerHTML = str2
    img.src = `./素材库/act`+str3+`.jpg`
    a.href = str4
  }
}
const next = document.querySelector('button.next')
const pre = document.querySelector('button.pre')
const message = [
  {0:'2022年12月30日，天协十周年活动举行',1:'介绍1',2:1,3:'超链接1',hot:true,act:true,event:false,news:true,year:2022,month:12,day:30},
  {0:'2023年3月24日晚，月掩金星上演',1:'介绍2',2:2,3:'超链接2',hot:true,act:false,event:true,news:false,year:2023,month:3,day:24},
  {0:'2023年11月17日，和小天看木卫凌木',1:'介绍3',2:3,3:'超链接3',hot:true,act:true,event:true,news:false,year:2023,month:11,day:17},
  {0:'2023年12月，天协陨石上线，预计稍后加入奖品库',1:'介绍4',2:4,3:'超链接4',hot:true,act:false,event:false,news:true,year:2023,month:12,day:1},
  {0:'2024年3月19日，新学期首个路边天文来啦',1:'介绍5',2:5,3:'超链接5',hot:true,act:true,event:false,news:false,year:2024,month:3,day:19}
]
let now_type = 'hot'
let now = message.length
while(true){
  // now = message.length  //初始化要加这一行
  now = (now-1+message.length)%message.length
  if(message[now][now_type] === true){
    break
  }
}
show.setmessage(message[now][0],message[now][1],message[now][2],message[now][3])
next.addEventListener('click',function(){
  while(true){
    now = (now+1)%message.length
    if(message[now][now_type] === true){
      break
    }
  }
  show.setmessage(message[now][0],message[now][1],message[now][2],message[now][3])
})
pre.addEventListener('click',function(){
  while(true){
    now = (now-1+message.length)%message.length
    if(message[now][now_type] === true){
      break
    }
  }
  show.setmessage(message[now][0],message[now][1],message[now][2],message[now][3])
})