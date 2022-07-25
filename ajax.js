/**
 * 封装异步ajax
 * @param  url 请求url
 */
function myAjax(url) {
    return new Promise(function(resolve,reject) {
        var xhr = XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4){
                if (this.status == 200) {
                    resolve(this.responseText)
                } else {
                    reject(new Error());
                }
            }   
        }
        xhr.open('get', url)
        xhr.send();
    })
}