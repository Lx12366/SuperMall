export default{
  addCart(context,payload){
    return new Promise(resolve => {
      let oldProduct = context.state.cartList.find(item =>item.iid===payload.iid)
      if(oldProduct){
        context.commit('addCounter',oldProduct)
      }else{
        payload.count=1
        context.commit('addCart',payload)
      }
      resolve('添加成功')
    })


  }
}
