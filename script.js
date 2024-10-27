// キーワードと番号、ポイントのマッピング
const keywordPoints = {
    "01ゆけむり": { number: 1, points: 10 },
    "02じごく": { number: 2, points: 40 },
    "03たいよう": { number: 3, points: 40 },
    "04おおいた": { number: 4, points: 20 },
    "05じごくめぐり": { number: 5, points: 20 },
    "06ゆけむり": { number: 6, points: 10 },
    "07なんとう": { number: 7, points: 10 },
    "08とりてん": { number: 8, points: 30 },
    "09よろしく": { number: 9, points: 50 },
    "10せんろ": { number: 10, points: 50 },
    "さ": { number: 11, points: 30 },
    "し": { number: 12, points: 30 },
    "す": { number: 13, points: 30 }
    "せ": { number: 14, points: 30 },
    "そ": { number: 15, points: 30 },
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
    "37あかしやさんま": { number: 37, points: 10 },
    "38なかがわけ": { number: 38, points: 20 },
    "39かぼす": { number: 39, points: 40 },
    "40とりてん": { number: 40, points: 30 },
    "41べっぷ": { number: 41, points: 40 },
    "42いちご": { number: 42, points: 50 },
    "43おおいた": { number: 43, points: 10 },
    "44おれんじ": { number: 44, points: 20 },
    "45べっぷ": { number: 45, points: 50 },
    "46おんせん": { number: 46, points: 30 },
    "47NGK": { number: 47, points: 40 },
    "48ゆのはな": { number: 48, points: 20 },
    "49あひる": { number: 49, points: 40 },
    "50べっぷひのうみまつり": { number: 50, points: 30 },
    "51みどりのたいよう": { number: 51, points: 20 },
    "52か": { number: 52, points: 50 },
    "53いっちゃん": { number: 53, points: 30 },
    "54COTTON": { number: 54, points: 40 },
    "55みき": { number: 55, points: 50 },
    "56あかしやさんま": { number: 56, points: 50 },
    "57なにげないにちじょう": { number: 57, points: 30 },
    "58べっぷはっとう": { number: 58, points: 50 },
    "59うみたまご": { number: 59, points: 10 },
    "60れいめん": { number: 60, points: 30 },
    "61さいこ": { number: 61, points: 30 },
    "62とれんでぃえんじぇる": { number: 62, points: 40 },
    "63みらい": { number: 63, points: 30 },
    "64ぽんず": { number: 64, points: 40 },
    "65とりてん": { number: 65, points: 20 },
    "66はなたば": { number: 66, points: 40 },
    "67すりらー": { number: 67, points: 40 },
    "681987": { number: 68, points: 50 },
    "69まんざいし": { number: 69, points: 50 },
    "70まっちょ": { number: 70, points: 50 }
};

// ローカルストレージからデータを取得
let keywords = JSON.parse(localStorage.getItem('keywords')) || [];
let points = parseInt(localStorage.getItem('points')) || 0;
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

    if (keywordPoints.hasOwnProperty(keyword) && !keywords.includes(keyword)) {
        const { number, points: gainedPoints } = keywordPoints[keyword];

        // キーワードとポイントを保存
        keywords.push(keyword);
        points += gainedPoints;

        // ローカルストレージにデータを保存
        localStorage.setItem('keywords', JSON.stringify(keywords));
        localStorage.setItem('points', points);

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
