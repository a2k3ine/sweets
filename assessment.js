'use strict';
const todayInput = document.getElementById("today");
const assessmentButton = document.getElementById("assessment");
const resultDivided = document.getElementById("result-area");
//【ガード句】日付が何も入力されていない場合は処理を中断
assessmentButton.onclick = () => {
  let today = todayInput.value;
  if(!today) {
    return;
  }

// すでにある診断結果（result-area内のタグ）を全て削除
while (resultDivided.firstChild){
  resultDivided.removeChild(resultDivided.firstChild);
}

/**
 * h3タグの文字の表示エリアの作成
 * javascriptでh3タグのオブジェクトを作りHTMLのresult-areaのdivタグにh3変数を設定
 */
  const h3 = document.createElement('h3');
  h3.innerText = 'ラッキースイーツはこちら';
  resultDivided.appendChild(h3);

//診断処理を実行
  const result = assessment(today);

//pタグの診断結果の表示エリアの作成
  const p = document.createElement('p');
  p.innerText = result;
  resultDivided.appendChild(p);
  
}
const answers = [
  '{today}のラッキースイーツは、チーズケーキです。',
  '{today}のラッキースイーツは、シュークリームです。',
  '{today}のラッキースイーツは、チョコレートです。',
  '{today}のラッキースイーツは、クッキーです。',
  '{today}のラッキースイーツは、ペロペロキャンディーです。',
  '{today}のラッキースイーツは、マカロンです。',
  '{today}のラッキースイーツは、スコーンです。',
  '{today}のラッキースイーツは、プリンです。',
  '{today}のラッキースイーツは、アイスクリームです。',
  '{today}のラッキースイーツは、ドーナツです。',
  '{today}のラッキースイーツは、スフレです。',
  '{today}のラッキースイーツは、モンブランです。',
  '{today}のラッキースイーツは、クレープです。',
  '{today}のラッキースイーツは、団子です。',
  '{today}のラッキースイーツは、金太郎飴です。',
  '{today}のラッキースイーツは、あんみつです。',
  '{today}のラッキースイーツは、たい焼きです。',
  '{today}のラッキースイーツは、いちご大福です。',
  '{today}のラッキースイーツは、ブッシュドノエルです。',
];


/**
 *【JS Doc】
 * 入力者が日付(today)を渡すと診断結果を返す関数
 * @param {string} today 今日の日付
 * @return {string} 診断結果
 */

function assessment(today) {
 var todayNumber = 0;
 for (let i = 0; i < today.length; i++) {
  todayNumber += today.charCodeAt(i);
 }
 var answerNumber = todayNumber % answers.length;
 var result = answers[answerNumber];
 return result.replace(/\{today\}/, today);
 }

 
