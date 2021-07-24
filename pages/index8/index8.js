Page({
  data: {
    curring:-1,
    detail: [
      {
        id: '1', title: '下面哪一句不是华师校训',answer:'2',array: [
          { name: '艰苦奋斗', usname: false }, { name: '求是创新', usname: false },
          { name: '为人师表', usname: false }, { name: '严谨治学', usname: false },
        ]
      },
      {
        id: '2', title: '华师始建于哪一年？', answer: '1', array: [
          { name: '1933', usname: false }, { name: '1922', usname: false },
          { name: '1934', usname: false }, { name: '1921', usname: false },
        ]
      },
      {
        id: '3', title: '下列哪个不是华师的校区所在地', answer: '4', array: [
          { name: '广州', usname: false }, { name: '汕尾', usname: false },
          { name: '佛山南海', usname: false }, { name: '珠海', usname: false },
        ]
      },
      {
        id: '4', title: '华师最早的校名是什么？', answer: '3',  array: [
          { name: '广东师范学院', usname: false }, { name: '国立中山大学师范学院', usname: false },
          { name: '广东省立勷勤大学师范学院', usname: false }, { name: '勷勤大学教育学院', usname: false },
        ]
      },
    ],
    number: 0,
    answer:0,
  },
  previous:function(e){//上一步
    this.setData({
      number: this.data.number-1,
      curring: this.data.curring-1,
    })
  },
  radioChange:function(e){
    let index = e.currentTarget.dataset.index
    let id = e.currentTarget.dataset.id
    let detail = this.data.detail//把数组拿出来
    for(let i = 0;i<detail.length;i++){//遍历组里的每一道题
      if(detail[i].id == id){//如果用户做到的题目的和里面的一个元素对应
        detail[i].array[index].usname = true//标记被用户选上
        for(let j = 0;j<detail[i].array.length;j++){//遍历每一个选项
          if (j != index){
            detail[i].array[j].usname = false
          }
        }
      }
    }
    this.setData({
      detail:detail//更新值
    })
  },
  nextstep:function(e){//下一步
    let detail = this.data.detail
    let number = this.data.number
    let curring = this.data.curring
    let usname = 0;
    for(let i = 0;i<detail[number].array.length;i++){
      if(!detail[number].array[i].usname){
        usname++//如果这个选项没有选就递增
      }
    }
    if(usname == detail[number].array.length){//所有选项都没选上
      wx.showToast({
        title: '答题选项不能为空',
        icon: 'none',
        duration: 2000
      })
      return false;
    }
    curring++
    number++
    if (curring > 3){
      curring = -1
    }
    this.setData({
      curring: curring,
      number: number,//更新值
    })
  },
  subsic:function(e){//提交答案
    let detail = this.data.detail
    let answer = 0//答对了几题
    let letter = ''
    for(let i = 0;i < detail.length;i++){
      for(let j = 0;j < detail[i].array.length;j++){
        if(detail[i].array[j].usname){
          letter = detail[i].answer-1
          if(letter == j){
            answer++
          }
        }
      }
    }
    wx.showToast({
      title: '答对了:' + answer + '题',
      icon: 'none',
      duration: 2000
    })
  },
})