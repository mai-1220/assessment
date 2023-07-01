'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivision = document.getElementById('result-area');
const tweetDivision = document.getElementById('tweet-area');

assessmentButton.onclick = function() {
assessmentButton.onclick = () =>{
  if (userName.length === 0) {
    // 名前が空の時は処理を終了する
    return;
  }
  const userName = userNameInput.ariaValue;
  //診断結果表示エリアの作成
  resultDivision.innerText = '';
  const header = document.createElement('h3');
  header.innerText = '診断結果';
  resultDivision.appendChild(header);

  const paragraph = document(userName);
  paragraph.innerText = result;
  resultDivision.appendChild(paragraph);

  //TODO ツイートエリアの作成
  tweetDivision.innerText = '';
};

}
const answers = [
  '###userName###のいいところは声です。###userName###の特徴な声は皆を惹きつけ、心に残ります。',
  '###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
  '###userName###のいいところは情熱です。###userName###の情熱に周りの人は感化されます。',
  '###userName###のいいところは厳しさです。###userName###の厳しさがものごとをいつも成功に導きます。',
  '###userName###のいいところは知識です。博職###userName###を多くの人が頼りにしてます。',
  '###userName###のいいところはユニークさです。###userName###だけのその特徴が皆を楽しくさせます。',
  '###userName###のいいところは用心深さです。###userName### の洞察に、多くの人が助けられます。',
  '###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気に惹かれます。',
  '###userName###のいいところは決断力です。###userName###が感じたことに皆が共感し、分かり合うことができます。',
  '###userName###のいいところは思いやりです。###userNme###に気をかけてもらった多くの人が感謝しています。',
  '###userName###のいいところは感受性です。###userName###が感じたことに皆が共感しています。',
  '###userName###のいいところは節度です。強引すぎない##userName###の考えにみんなが感謝しています。',
  '###userName###のいいところは好奇心です。新しいことに向かっていく###userName###に多くの人が魅力を感じてます。',
  '###userName###のいいところは気配りです。###userName###の配慮が多くの人を救っています。',
  '###userName###のいいところはすべてです。ありのままの###userName###自身がいいところです。',
  '###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されてます。',
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザーの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
 //全文字のコード番号を習得してそれを足し合わせる
 let sumOfCharCode = 0;
 for (let i = 0; i < userName.length; i++) {
   sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
  }

  //文字のコード番号の合計を回答の数で割って
  const index = sumOfCharCode % answers.length;
  const result = answers[index];
 //TODO ###userName### をユーザの名前に置き換える
  return result;
}

console.log(assessment('太郎'));
console.log(assessment('次郎'));
console.log(assessment('太郎'));
