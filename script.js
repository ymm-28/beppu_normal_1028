// キーワードと番号、ポイントのマッピング
const keywordPoints = {
    "01べっぷ": { number: 1, points: 10 },
    "01別府": { number: 1, points: 10 },
    "02じごく": { number: 2, points: 40 },
    "02地獄": { number: 2, points: 40 },
    "03たいよう": { number: 3, points: 40 },
    "03太陽": { number: 3, points: 40 },
    "04おおいた": { number: 4, points: 20 },
    "04大分": { number: 4, points: 20 },
    "05じごくめぐり": { number: 5, points: 20 },
    "05地獄めぐり": { number: 5, points: 20 },
    "05地獄巡り": { number: 5, points: 20 },
    "06ゆけむり": { number: 6, points: 10 },
    "06湯煙": { number: 6, points: 10 },
    "06湯けむり": { number: 6, points: 10 },
    "07なんとう": { number: 7, points: 10 },
    "07南東": { number: 7, points: 10 },
    "07SE": { number: 7, points: 10 },
    "08とりてん": { number: 8, points: 30 },
    "08とり天": { number: 8, points: 30 },
    "08鶏天": { number: 8, points: 30 },
    "09よろしく": { number: 9, points: 50 },
    "10せんろ": { number: 10, points: 50 },
    "10線路": { number: 10, points: 50 },
    "11とりてん": { number: 11, points: 20 },
    "11とり天": { number: 11, points: 20 },
    "11鶏天": { number: 11, points: 20 },
    "12ゆけむり": { number: 12, points: 10 },
    "12湯けむり": { number: 12, points: 10 },
    "12湯煙": { number: 12, points: 10 },
    "13つぼみ": { number: 13, points: 20 },
    "13蕾": { number: 13, points: 20 },
    "14とりてん": { number: 14, points: 30 },
    "14とり天": { number: 14, points: 30 },
    "14鶏天": { number: 14, points: 30 },
    "15あぶらやくまはち": { number: 15, points: 50 },
    "15油屋熊八": { number: 15, points: 50 },
    "15油谷熊八": { number: 15, points: 50 },
    "た": { number: 16, points: 40 },
    "ち": { number: 17, points: 40 },
    "つ": { number: 18, points: 40 },
    "て": { number: 19, points: 40 },
    "と": { number: 20, points: 40 },
    "な": { number: 21, points: 50 },
    "に": { number: 22, points: 50 },
    "ぬ": { number: 23, points: 50 },
    "ね": { number: 24, points: 50 },
    "の": { number: 25, points: 50 },
    "は": { number: 26, points: 50 },
    "ひ": { number: 27, points: 50 },
    "ふ": { number: 28, points: 50 },
    "へ": { number: 29, points: 50 },
    "ほ": { number: 30, points: 50 },
    "ま": { number: 31, points: 50 },
    "み": { number: 32, points: 50 },
    "む": { number: 33, points: 50 },
    "め": { number: 34, points: 50 },
    "も": { number: 35, points: 50 },
    "36ZAZY": { number: 36, points: 30 },
    "36zazy": { number: 36, points: 30 },
    "36ざじー": { number: 36, points: 30 },
    "36ザジー": { number: 36, points: 30 },
    "37あかしやさんま": { number: 37, points: 10 },
    "37明石家さんま": { number: 37, points: 10 },
    "38なかがわけ": { number: 38, points: 20 },
    "38中川家": { number: 38, points: 20 },
    "39かぼす": { number: 39, points: 40 },
    "40とりてん": { number: 40, points: 30 },
    "40鶏天": { number: 40, points: 30 },
    "40とり天": { number: 40, points: 30 },
    "41べっぷ": { number: 41, points: 40 },
    "41別府": { number: 41, points: 40 },
    "42いちご": { number: 42, points: 50 },
    "42苺": { number: 42, points: 50 },
    "43おおいた": { number: 43, points: 10 },
    "43大分": { number: 43, points: 10 },
    "44おれんじ": { number: 44, points: 20 },
    "44オレンジ": { number: 44, points: 20 },
    "44だいだい": { number: 44, points: 20 },
    "44橙": { number: 44, points: 20 },
    "44橙色": { number: 44, points: 20 },
    "45べっぷ": { number: 45, points: 50 },
    "45別府": { number: 45, points: 50 },
    "46おんせん": { number: 46, points: 30 },
    "47NGK": { number: 47, points: 40 },
    "48ゆのはな": { number: 48, points: 20 },
    "48湯の花": { number: 48, points: 20 },
    "49あひる": { number: 49, points: 40 },
    "50べっぷひのうみまつり": { number: 50, points: 30 },
    "50別府火の海祭り": { number: 50, points: 30 },
    "51みどりのたいよう": { number: 51, points: 20 },
    "51緑の太陽": { number: 51, points: 20 },
    "52か": { number: 52, points: 50 },
    "53いっちゃん": { number: 53, points: 30 },
    "54COTTON": { number: 54, points: 40 },
    "54cotton": { number: 54, points: 40 },
    "54こっとん": { number: 54, points: 40 },
    "54コットン": { number: 54, points: 40 },
    "55みき": { number: 55, points: 50 },
    "55ミキ": { number: 55, points: 50 },
    "56あかしやさんま": { number: 56, points: 50 },
    "56明石家さんま": { number: 56, points: 50 },
    "57なにげないにちじょう": { number: 57, points: 30 },
    "57何気ない日常": { number: 57, points: 30 },
    "58べっぷはっとう": { number: 58, points: 50 },
    "58別府八湯": { number: 58, points: 50 },
    "59うみたまご": { number: 59, points: 10 },
    "60れいめん": { number: 60, points: 30 },
    "60冷麺": { number: 60, points: 30 },
    "61さいこ": { number: 61, points: 30 },
    "61最古": { number: 61, points: 30 },
    "62とれんでぃえんじぇる": { number: 62, points: 40 },
    "62とれんでぃーえんじぇる": { number: 62, points: 40 },
    "62トレンディエンジェル": { number: 62, points: 40 },
    "62トレンディーエンジェル": { number: 62, points: 40 },
    "63みらい": { number: 63, points: 30 },
    "63未来": { number: 63, points: 30 },
    "64ぽんず": { number: 64, points: 40 },
    "64ポン酢": { number: 64, points: 40 },
    "65とりてん": { number: 65, points: 20 },
    "65とり天": { number: 65, points: 20 },
    "65鶏天": { number: 65, points: 20 },
    "66はなたば": { number: 66, points: 40 },
    "66花束": { number: 66, points: 40 },
    "67すりらー": { number: 67, points: 40 },
    "67スリラー": { number: 67, points: 40 },
    "681987": { number: 68, points: 50 },
    "69まんざいし": { number: 69, points: 50 },
    "69漫才師": { number: 69, points: 50 },
    "70マッチョ": { number: 70, points: 50 }
};

// ローカルストレージからデータを取得
let keywords = JSON.parse(localStorage.getItem('keywords')) || [];
let points = parseInt(localStorage.getItem('points')) || 0;
let awardedNumbers = JSON.parse(localStorage.getItem('awardedNumbers')) || []; // 追加：獲得済み番号のリスト
let hintsUnlocked = JSON.parse(localStorage.getItem('hintsUnlocked')) || { hint1: false, hint2: false, hint3: false };

// ページロード時に表示を更新
document.getElementById('total-points').innerText = points;

// グリッドを生成
const gridContainer = document.querySelector('.grid-container');
for (let i = 1; i <= 70; i++) {
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
