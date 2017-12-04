// content page의 모든 텍스트를 가져온다. 그 결과를 bodyText변수에 담는다.
 // var bodyText =
 // document.querySelector('body').innerText;
 // alert(bodyText);




// chrome 확장기능 중에 tabs과 관련된 기능 중에
// 컨텐츠 페이지를 대상으로 아래와 가은 코드를 실행한다.

chrome.tabs.executeScript({
  code:'document.querySelector("body").innerText;'
}, function(result) {
    // 값을 잘 출력하는지 확인
    // alert(result[0]);

  //1. **크롤링에 필요한 코드**
  var bodyText = result[0];
      //id값이 result인 태그에 결과를 추가한다.
  document.querySelector('#result').innerText = bodyText









  // //2. 수업 따라가기
  //   //이 문서에서 body  태그 아래에 있는 모든 텍스를 가져온다. 그 결과를 bodyText라는 변수에 담는다.
  // var bodyText = result[0];
  //   //bodyText의 모든 단어를 추출하고, 그 단어의 숫자를 센다. 그 결과를 bodyNum이라는 변수에 담는다.
  // var bodyNum = bodyText.split(' ').length;
  //   //bodyText에서 자신이 알고 있는 단어(the)가 몇번 등장하는지를 알아본다. 그 결과를 myNum이라는 변수에 담는다.
  // var myNum = bodyText.match(new RegExp('\\b(the|is|was|of)\\b', 'gi')).length;
  //
  // var per = myNum / bodyNum * 100;
  // per = per.toFixed(1);
  //
  // document.querySelector('#result').innerText = myNum+'/'+bodyNum +'('+ (per)+'%)';

});





// // 컨텐츠 페이지의 # user입력된 값이 변경 되었을 때
// document.querySelector('#user').addEventListener('change',
// function() {
//   // 컴텐츠 페이지에 몇개의 단어가 등장하는지 계산하라
//   var user = document.querySelector('#user').value;
//
//   // 크롬 스토리지에 입력값을 저장한다.
//   // google의 서버에 저장
//   chrome.storage.sync.set({
//     userWords:user
//   });
//
//   chrome.tabs.executeScript({
//     code:'document.querySelector("body").innerText;'
//   }, function(result) {
//
//     var bodyText = result[0];
//     var bodyNum = bodyText.split(' ').length;
//     var myNum = bodyText.match(new RegExp('\\b('+user+')\\b', 'gi')).length;
//
//     var per = myNum / bodyNum * 100;
//     per = per.toFixed(1);
//
//     document.querySelector('#result').innerText = myNum+'/'+bodyNum +'('+ (per)+'%)';
//
//
//   });
//
// });
