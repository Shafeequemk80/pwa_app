function swDev(){

    let swURL=`${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swURL).then((resp)=>{
        console.log("resp",resp);
    })
}

export default swDev