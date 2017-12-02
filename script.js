// content page의 모든 텍스트를 가져온다. 그 결과를 bodyText변수에 담는다.
 // var bodyText =
 // document.querySelector('body').innerText;
 // alert(bodyText);

// chrome 확장기능 중에 tabs과 관련된 기능 중에
// 컨텐츠 페이지를 대상으로 아래와 가은 코드를 실행한다.

chrome.tabs.executeScript({
  code:'document.querySelector("body").innerText;'
}, function(result) {
  //위의 코드가 실행된 후에 이 함수를 호출해주세요. 그 때,
  // result란 변수에 결과값을 담아주세요.
  // alert(result[0]);
  // alert(result[0]);
  var bodyText = result[0];
  // var bodyNum = bodyText.split('').length;
  // var myNum = bodyText.match(new RegExp('\\b(the|is|was|of)\\b', 'gi').length;
  // alert(myNum + '/' + bodyNum + '(' + (myNum / bodyNum * 100) + '%)');

  //id값이 result인 태그에 결과를 추가한다.
  document.querySelector('#result').innerText = bodyText



});
