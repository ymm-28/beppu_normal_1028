// キーワードと番号、ポイントのマッピング
const keywordPoints = {
    "1べっぷ": { number: 1, points: 10 },
    "1別府": { number: 1, points: 10 },
    "2じごく": { number: 2, points: 40 },
    "2地獄": { number: 2, points: 40 },
    "3たいよう": { number: 3, points: 40 },
    "3太陽": { number: 3, points: 40 },
    "4おおいた": { number: 4, points: 20 },
    "4大分": { number: 4, points: 20 },
    "5じごくめぐり": { number: 5, points: 20 },
    "5地獄めぐり": { number: 5, points: 20 },
    "5地獄巡り": { number: 5, points: 20 },
    "6ゆけむり": { number: 6, points: 10 },
    "6湯煙": { number: 6, points: 10 },
    "6湯けむり": { number: 6, points: 10 },
    "7なんとう": { number: 7, points: 10 },
    "7南東": { number: 7, points: 10 },
    "7SE": { number: 7, points: 10 },
    "8まつり": { number: 8, points: 50 },
    "8マツリ": { number: 8, points: 50 },
    "8祭": { number: 8, points: 50 },
    "8祭り": { number: 8, points: 50 },
    "9よろしく": { number: 9, points: 50 },
    "9ヨロシク": { number: 9, points: 50 },
    "10せんろ": { number: 10, points: 50 },
    "10センロ": { number: 10, points: 50 },
    "10線路": { number: 10, points: 50 },
    "11て": { number: 11, points: 40 },
    "11手": { number: 11, points: 40 },
    "11てがた": { number: 11, points: 40 },
    "11手形": { number: 11, points: 40 },
    "11てのひら": { number: 11, points: 40 },
    "11手のひら": { number: 11, points: 40 },
    "11手の平": { number: 11, points: 40 },
    "11掌": { number: 11, points: 40 },
    "12びーこん": { number: 12, points: 40 },
    "12ビーコン": { number: 12, points: 40 },
    "13つぼみ": { number: 13, points: 20 },
    "13蕾": { number: 13, points: 20 },
    "14おおいた": { number: 14, points: 30 },
    "14大分": { number: 14, points: 30 },
    "15あぶらやくまはち": { number: 15, points: 50 },
    "15油屋熊八": { number: 15, points: 50 },
    "15油谷熊八": { number: 15, points: 50 },
    "16なぞなぞ": { number: 16, points: 40 },
    "16ナゾナゾ": { number: 16, points: 40 },
    "16謎謎": { number: 16, points: 40 },
    "16謎々": { number: 16, points: 40 },
    "17さが": { number: 17, points: 30 },
    "17さがけん": { number: 17, points: 30 },
    "17佐賀": { number: 17, points: 30 },
    "17佐賀県": { number: 17, points: 30 },
    "18すうじ": { number: 18, points: 50 },
    "18数字": { number: 18, points: 50 },
    "18スウジ": { number: 18, points: 50 },
    "19へら": { number: 19, points: 50 },
    "19ヘラ": { number: 19, points: 50 },
    "20かけあい": { number: 20, points: 50 },
    "20掛け合い": { number: 20, points: 50 },
    "20カケアイ": { number: 20, points: 50 },
    "21てのこう": { number: 21, points: 50 },
    "21テノコウ": { number: 21, points: 50 },
    "21手の甲": { number: 21, points: 50 },
    "22ゆのはな": { number: 22, points: 30 },
    "22湯の花": { number: 22, points: 30 },
    "22ユノハナ": { number: 22, points: 30 },
    "23ぶた": { number: 23, points: 20 },
    "23ブタ": { number: 23, points: 20 },
    "23豚": { number: 23, points: 20 },
    "24あかしやさんま": { number: 24, points: 10 },
    "24明石家さんま": { number: 24, points: 10 },
    "25なかがわけ": { number: 25, points: 20 },
    "25中川家": { number: 25, points: 20 },
    "26かぼす": { number: 26, points: 40 },
    "27とりてん": { number: 27, points: 30 },
    "27鶏天": { number: 27, points: 30 },
    "27とり天": { number: 27, points: 30 },
    "28べっぷ": { number: 28, points: 40 },
    "28ベップ": { number: 28, points: 40 },
    "28別府": { number: 28, points: 40 },
    "29いちご": { number: 29, points: 50 },
    "29イチゴ": { number: 29, points: 50 },
    "29苺": { number: 29, points: 50 },
    "30おおいた": { number: 30, points: 10 },
    "30大分": { number: 30, points: 10 },
    "31おれんじ": { number: 31, points: 20 },
    "31オレンジ": { number: 31, points: 20 },
    "31だいだい": { number: 31, points: 20 },
    "31橙": { number: 31, points: 20 },
    "31橙色": { number: 31, points: 20 },
    "32べっぷ": { number: 32, points: 50 },
    "32別府": { number: 32, points: 50 },
    "33おんせん": { number: 33, points: 30 },
    "33温泉": { number: 33, points: 30 },
    "34NGK": { number: 34, points: 40 },
    "34ngk": { number: 34, points: 40 },
    "34Ngk": { number: 34, points: 40 },
    "34なんばグランド花月": { number: 34, points: 40 },
    "35ゆのはな": { number: 35, points: 20 },
    "35べっぷのゆのはな": { number: 35, points: 20 },
    "35湯の花": { number: 35, points: 20 },
    "35別府の湯の花": { number: 35, points: 20 },
    "36あひる": { number: 36, points: 40 },
    "37べっぷひのうみまつり": { number: 37, points: 30 },
    "37別府火の海祭り": { number: 37, points: 30 },
    "37別府火の海": { number: 37, points: 30 },
    "37火の海祭り": { number: 37, points: 30 },
    "37べっぷひのうみ": { number: 37, points: 30 },
    "37ひのうみまつり": { number: 37, points: 30 },
    "38みどりのたいよう": { number: 38, points: 20 },
    "38緑の太陽": { number: 38, points: 20 },
    "39か": { number: 39, points: 50 },
    "40いっちゃん": { number: 40, points: 30 },
    "41COTTON": { number: 41, points: 40 },
    "41cotton": { number: 41, points: 40 },
    "41Cotton": { number: 41, points: 40 },
    "41こっとん": { number: 41, points: 40 },
    "41コットン": { number: 41, points: 40 },
    "42みき": { number: 42, points: 50 },
    "42ミキ": { number: 42, points: 50 },
    "43あかしやさんま": { number: 43, points: 50 },
    "43明石家さんま": { number: 43, points: 50 },
    "43さんま": { number: 43, points: 50 },
    "44なにげないにちじょう": { number: 44, points: 40 },
    "44何気ない日常": { number: 44, points: 40 },
    "45べっぷはっとう": { number: 45, points: 50 },
    "45別府八湯": { number: 45, points: 50 },
    "46うみたまご": { number: 46, points: 10 },
    "46ウミタマゴ": { number: 46, points: 10 },
    "47れいめん": { number: 47, points: 30 },
    "47冷麺": { number: 47, points: 30 },
    "48さいこ": { number: 48, points: 30 },
    "48最古": { number: 48, points: 30 },
    "49とれんでぃえんじぇる": { number: 49, points: 40 },
    "49とれんでぃーえんじぇる": { number: 49, points: 40 },
    "49トレンディエンジェル": { number: 49, points: 40 },
    "49トレンディーエンジェル": { number: 49, points: 40 },
    "50みらい": { number: 50, points: 30 },
    "50未来": { number: 50, points: 30 },
    "51ぽんず": { number: 51, points: 40 },
    "51ポン酢": { number: 51, points: 40 },
    "52とりてん": { number: 52, points: 20 },
    "52とり天": { number: 52, points: 20 },
    "52鶏天": { number: 52, points: 20 },
    "53はなたば": { number: 53, points: 40 },
    "53花束": { number: 53, points: 40 },
    "54すりらー": { number: 54, points: 40 },
    "54スリラー": { number: 54, points: 40 },
    "551987": { number: 55, points: 50 },
    "56ZAZY": { number: 56, points: 40 },
    "56zazy": { number: 56, points: 40 },
    "56ざじー": { number: 56, points: 40 },
    "56ザジー": { number: 56, points: 40 },
    "57まんざいし": { number: 57, points: 50 },
    "57漫才師": { number: 57, points: 50 },
    "58マッチョ": { number: 58, points: 50 },
    "58まっちょ": { number: 58, points: 50 },
    "59できたて": { number: 59, points: 50 },
    "59デキタテ": { number: 59, points: 50 },
    "59出来立て": { number: 59, points: 50 },
    "59出来たて": { number: 59, points: 50 },
    "60りずむ": { number: 60, points: 50 },
    "60リズム": { number: 60, points: 50 }
};

// ローカルストレージからデータを取得
let keywords = JSON.parse(localStorage.getItem('keywords')) || [];
let points = parseInt(localStorage.getItem('points')) || 0;
let awardedNumbers = JSON.parse(localStorage.getItem('awardedNumbers')) || []; // 追加：獲得済み番号のリスト
let hintsUnlocked = JSON.parse(localStorage.getItem('hintsUnlocked')) || { hint1: false, hint2: false, hint3: false, hint4: false, hint5: false, hint6: false };

// ページロード時に表示を更新
document.getElementById('total-points').innerText = points;

// グリッドを生成
const gridContainer = document.querySelector('.grid-container');
for (let i = 1; i <= 60; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridItem.textContent = i;
    gridItem.id = `grid-${i}`;  // グリッドにIDを付与
    gridContainer.appendChild(gridItem);
}

// ロード時に既に正解したキーワードのグリッドを緑色に
keywords.forEach(keyword => {
    const keywordData = keywordPoints[keyword];
    if (keywordData) {
        document.getElementById(`grid-${keywordData.number}`).classList.add('correct');
    }
});

// フォーム送信時の処理
document.getElementById('keyword-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const keyword = document.getElementById('keyword').value.trim();

    if (keywordPoints.hasOwnProperty(keyword)) {
        const { number, points: gainedPoints } = keywordPoints[keyword];

        // 獲得済みの番号でないか確認
        if (!awardedNumbers.includes(number)) {
            keywords.push(keyword);
            awardedNumbers.push(number);  // 追加：番号をリストに追加
            points += gainedPoints;

            // ローカルストレージにデータを保存
            localStorage.setItem('keywords', JSON.stringify(keywords));
            localStorage.setItem('points', points);
            localStorage.setItem('awardedNumbers', JSON.stringify(awardedNumbers)); // 追加：獲得済み番号の保存

            // グリッドの色を変更
            document.getElementById(`grid-${number}`).classList.add('correct');

            // ポイント表示を更新
            document.getElementById('total-points').innerText = points;

            // ポップアップメッセージの表示
            showPopupMessage(`${gainedPoints}ポイント獲得！`);

            // ヒントの表示を更新
            updateHints(points);

            // フォームをリセット
            document.getElementById('keyword').value = '';
        } else {
            alert("入力済みです。");
        }
    } else if (keywords.includes(keyword)) {
        alert("入力済みです。");
    } else {
        alert("設定されていないキーワードです。");
    }
});



// ヒントの表示を更新する関数
function updateHints(points) {
    // 30ポイントでヒント1を表示
    if (points >= 30) {
        document.getElementById('hint1').classList.remove('hidden');
        hintsUnlocked.hint1 = true;
    }

    // 60ポイントでヒント2を表示
    if (points >= 60) {
        document.getElementById('hint2').classList.remove('hidden');
        hintsUnlocked.hint2 = true;
    }

    // 90ポイントでヒント3を表示
    if (points >= 90) {
        document.getElementById('hint3').classList.remove('hidden');
        hintsUnlocked.hint3 = true;
    }

    // 120ポイントでヒント4を表示
    if (points >= 120) {
        document.getElementById('hint4').classList.remove('hidden');
        hintsUnlocked.hint4 = true;
    }

    // 150ポイントでヒント5を表示
    if (points >= 150) {
        document.getElementById('hint5').classList.remove('hidden');
        hintsUnlocked.hint5 = true;
    }

    // 1000ポイントでヒント5を表示
    if (points >= 1000) {
        document.getElementById('hint6').classList.remove('hidden');
        hintsUnlocked.hint6 = true;
    }

    // ローカルストレージにヒントの状態を保存
    localStorage.setItem('hintsUnlocked', JSON.stringify(hintsUnlocked));
}

// ページロード時にヒントを再表示するための処理
function loadHints() {
    if (hintsUnlocked.hint1) {
        document.getElementById('hint1').classList.remove('hidden');
    }
    if (hintsUnlocked.hint2) {
        document.getElementById('hint2').classList.remove('hidden');
    }
    if (hintsUnlocked.hint3) {
        document.getElementById('hint3').classList.remove('hidden');
    }
    if (hintsUnlocked.hint4) {
        document.getElementById('hint4').classList.remove('hidden');
    }
    if (hintsUnlocked.hint5) {
        document.getElementById('hint5').classList.remove('hidden');
    }
    if (hintsUnlocked.hint6) {
        document.getElementById('hint6').classList.remove('hidden');
    }
}

// ページがロードされた時に、ローカルストレージからヒント状態をロード
window.onload = function() {
    loadHints();  // ページロード時にヒントをロード
};

// プルダウンをクリックした時の挙動
document.querySelectorAll('.hint-btn').forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
    });
});



// ポップアップメッセージを表示する関数
function showPopupMessage(message) {
    const popup = document.getElementById('popup-message');
    popup.innerText = message;
    popup.style.display = 'block'; // ポップアップを表示

    // 3秒後にフェードアウトして消える
    setTimeout(function() {
        popup.style.opacity = '0'; // フェードアウト
        setTimeout(function() {
            popup.style.display = 'none';
            popup.style.opacity = '1'; // フェードイン用にリセット
        }, 500); // フェードアウトが終わるまで待つ
    }, 1500); // 3秒後に消える
}

// フォーム送信時の処理
document.getElementById('keyword-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const keywordInput = document.getElementById('keyword').value;
    const keyword = normalizeKeyword(keywordInput);

    if (keywordPoints.hasOwnProperty(keyword)) { 
        // キーワードが設定されているか確認
        if (!keywords.includes(keyword)) {
            // まだ入力されていない場合
            keywords.push(keyword);
            const gainedPoints = keywordPoints[keyword];  // 獲得したポイントを変数に格納
            points += gainedPoints;  // キーワードに対応するポイントを加算

            // ポップアップメッセージを表示
            showPopupMessage(`${gainedPoints}ポイント獲得！`);

            // ローカルストレージにデータを保存
            localStorage.setItem('keywords', JSON.stringify(keywords));
            localStorage.setItem('points', points);

            // 画面上の表示を更新
            document.getElementById('total-points').innerText = points;
            document.getElementById('entered-keywords').innerText = keywords.join(', ');

            // ヒントの表示を更新
            updateHints(points);

            document.getElementById('keyword').value = '';  // 入力フォームをリセット
        } else {
            alert("入力済みです。");
        }
    } else {
        alert("設定されていないキーワードです。");
    }
});
