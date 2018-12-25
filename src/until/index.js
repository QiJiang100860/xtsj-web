// 引入高德地图
export function loadGDMap(opt) {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = `https://webapi.amap.com/maps?v=1.3&key=${opt.key}` // 高德地图
    document.body.appendChild(script)
    
    opt.success()
}