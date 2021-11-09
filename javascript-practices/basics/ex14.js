/* 
URL 다루기
*/

var url1 = "http://www.mysite.com/user?name=둘리&no=10";

// 1. escape : URL 전부 encoding (쓰지말것) deprecated
var url2 = escape(url1);
console.log(url2);

// 2. encodeURI : parameter 부분 만 encoding (사용가능)
var url3 = encodeURI(url1);
console.log(url3);

// 3. encodeURIComponent : 값만 encoding 해야하는 경우 (사용가능)
var url4 = encodeURIComponent(url1); // 안 좋은 사용 예
console.log(url4);

// 만들어야 할 URL
// http://mysite.com/user?no=10&name=둘리&email=sh0807@naver.com
var toQueryString = function(o) {
    var qs = [];
    for(prop in o){
        qs.push(prop + "=" + o[prop]);
    }
    return qs.join("&");
}
var url = "http://mysite.com/user";
var params = {
    name: '둘리',
    no: 10,
    email: 'sh970807@naver.com'
}

var url5 = url + "?" + toQueryString(params);
console.log(url5);

/*
$.ajax({
    url: url,
    type: 'post',
    dataType: 'application/json',
    contentType: 'application/json',
    data: JSON.stringify(params)
    // data:"no=10&name=둘리&email=sh0807@naver.com" (contentType 안쓸 때 data 작성법)
})
*/
