// canvasの幅
const CANVAS_WIDTH = 600;
// canvasの高さ
const CANVAS_HEIGHT = 600;

// ブロックの領域：幅
const BLOCK_WIDTH = 4;
// ブロックの領域：高さ
const BLOCK_HEIGHT = 4;

// フィールドの領域：幅
const FIELD_WIDTH = 12;
// フィールドの領域：高さ
const FIELD_HEIGHT = 22;

const FIELD_X	= 40;
const FIELD_Y	= 40;

// 右キー
const KEY_RIGHT = 0;
// 左キー
const KEY_LEFT = 1;
// 上キー
const KEY_UP = 2;
// 下キー
const KEY_DOWN = 3;
// スペースキー
const KEY_SPACE = 4; 
// キー判定用変数
let key = Array(5);
key[KEY_RIGHT] = 0;
key[KEY_LEFT] = 0;
key[KEY_UP] = 0;
key[KEY_DOWN] = 0;
key[KEY_SPACE] = 0;
// ブロックの定義
const block = [
    // **
    // **
    [
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ],
    ],
    // ****
    [
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
        ],
    ],
    //  **
    // **
    [
        [
            [0, 0, 0, 0],
            [0, 0, 1, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 1, 1],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
        ],
    ],
    // **
    //  **
    [
        [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
        ],
    ],
    // *
    // ***
    [
        [
            [0, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 0],
        ],
        [
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [1, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ],
    ],
    //   *
    // ***
    [
        [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [1, 1, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
        ],
    ],
    //  *
    // ***
    [
        [
            [0, 0, 0, 0],
            [0, 1, 1, 1],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 1, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0],
        ],
        [
            [0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 1, 1, 1],
            [0, 0, 0, 0],
        ],
        [
            [0, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 0],
            [0, 0, 0, 0],
        ],
    ],
];

// 赤色
const BLOCK_RED_COLOR	= "rgba(255, 100, 100, 1.0)";
// 青色
const BLOCK_BLU_COLOR	= "rgba(100, 100, 255, 1.0)";
// 緑色
const BLOCK_GRE_COLOR	= "rgba(100, 255, 100, 1.0)";
// 黄色
const BLOCK_YEL_COLOR	= "rgba(255, 255, 100, 1.0)";

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let field;
// ブロック着地フラグ
let bflag;
// ブロックの削除フラグ
let delflag;
// 行削除後のブロック落下フラグ
let dropflag;
// ブロックの種類
let btype
// ブロックの回転タイプ
let brot;
// ブロックのカラー
let bcolor;
// ブロック：x座標
let bx;
// ブロック：y座標
let by;
// カウンタ変数
let cnt;

function init(){

    cnt = 1;

    field = [
        [9, 9, 9, 0, 0, 0, 0, 0, 0, 9, 9, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9,],
        [9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,],
        ];

    bflag = false; //ブロック着地フラグ
    bx = 4;
    by = 0;
    initBlock(); // ブロック初期化
    btype = 0;
    brot = 0;
    bcolor = 4; // ブロックの色
    delflag = Array(FIELD_HEIGHT);
    dropflag = false; // 行削除後のブロック落下フラグ
}

function keyCtrl(){
    if(key[KEY_RIGHT] <= 1 && key[KEY_LEFT] <= 1){
        bx += key[KEY_RIGHT] - key[KEY_LEFT];

        let breakflag = false;
        for(let i = 0; i < BLOCK_HEIGHT; i++){
            for(let j = 0; j < BLOCK_WIDTH; j++){
                if(bx + j < 0 || bx + j >= FIELD_WIDTH || by + i < 0 || by + i >= FIELD_HEIGHT){
                    continue;
                }
                // 当たり判定
				if(field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) {
					bx -= key[KEY_RIGHT] - key[KEY_LEFT]; // 移動距離分を戻す
					breakflag = true; // ループを抜ける
					break;
				}
            }
            if(breakflag) break;
        }
        // キーの状態を更新
		if(key[KEY_RIGHT] == 1) key[KEY_RIGHT]++;
		else if(key[KEY_LEFT] == 1) key[KEY_LEFT]++;
    }
    if(key[KEY_DOWN] <= 1 && key[KEY_UP] <= 1) {
		brot += key[KEY_DOWN] - key[KEY_UP]; // 回転
		if(brot < 0) brot = 3;
		else if(brot > 3) brot = 0;
		
		var breakflag = false;
		for(var i = 0;i < BLOCK_HEIGHT;i++) {
			for(var j = 0;j < BLOCK_WIDTH;j++) {
				// 配列番号がおかしかったら処理しない
				if(bx + j < 0 || bx + j >= FIELD_WIDTH || by + i < 0 || by + i >= FIELD_HEIGHT){
                    continue;
                }
				// 当たり判定
				if((field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) || (block[btype][brot][i][j] == 1 && by + i < 0)) {
					brot -= key[KEY_DOWN] - key[KEY_UP]; // 回転を戻す
					if(brot < 0) brot = 3;
					else if(brot > 3) brot = 0;
					breakflag = true; // ループを抜ける
					break;
                }
            }
			if(breakflag) break;
		}
		
		// キーの状態を更新
		if(key[KEY_DOWN] == 1) key[KEY_DOWN]++;
		else if(key[KEY_UP] == 1) key[KEY_UP]++;
	}
}

//	「何もない行」かどうか判定
function rowJudge(num) {
    var flag = true;

	for(var i = 1;i < FIELD_WIDTH - 1;i++) {
        if(field[num][i] != 0) { // １つでもブロックが埋まっていたらフラグをオフにして処理を終了する
            flag = false;
            break;
		}
	}
	
	return flag;
}
function update(){
    if(cnt % 30 == 0){
        if(dropflag) { // 落下フラグがオンなら
			var num = 0; // 削除された行の番号
			
			for(var i = FIELD_HEIGHT - 2;i > 0;i--) {
				if(rowJudge(i)) { // 削除された行かどうか判定
					num = i; // 削除された行なら「num」に代入してループを抜ける
					break;
				}
			}
			
			for(var i = num;i > 1;i--) { // 「num」番目の行より上にあるブロックを対象に落下させる
				for(var j = 1;j < FIELD_WIDTH -1;j++) {
					field[i][j] = field[i - 1][j]; // １つ上の行と全く同じ内容にする
				}
			}
			for(var i = 1;i < FIELD_WIDTH - 1;i++) { // 「１」行目は必ず空白になるので、削除する
				field[1][i] = 0;
			}
			
			var flag = false;
			
			for(var i = FIELD_HEIGHT - 2;i > 1;i--) {
				if(rowJudge(i)) { // 下から順に見て、一番最初の空白行を「num」に代入
					flag = true; // フラグをオンにする
					num = i;
					break;
				}
			}
			
			if(flag) { // フラグがオンなら（空白行があるなら）
				dropflag = false;
				for(var i = 2;i < num;i++) {
					if(!rowJudge(i)) { // 2〜「num」までの間に空白があるなら落下処理を続行させる
						dropflag = true;
						break;
					}
				}
			}
			else if(!flag) { // 空白行がないなら落下フラグをオフにする
				dropflag = false;
			}
		}
		else if(!dropflag) {
            // ブロックを１マス落下
            by++;

            let breakflag = false;
            for(let i = 0; i < BLOCK_HEIGHT; i++){
                for(let j = 0; j < BLOCK_WIDTH; j++){
                    if(bx + j < 0 || bx + j >= FIELD_WIDTH || by + i < 0 || by + i >= FIELD_HEIGHT){
                        continue;
                    }
                    if(field[by + i][bx + j] != 0 && block[btype][brot][i][j] == 1) {
                        bflag = true;
                        by--; // 移動距離分を戻す
                        breakflag = true; // ループを抜ける
                        break;
                    }
                }
                if(breakflag) break;
            }
        }
    }
}


// 落下ブロックの着地点登録
function enterBlock(){
    if(!bflag){
        return;
    }
    for(let i = 0; i < BLOCK_HEIGHT; i++){
        for(let j = 0; j < BLOCK_WIDTH; j++){
            if(bx + j < 0 || bx + j >= FIELD_WIDTH || by + i < 0 || by + i >= FIELD_HEIGHT) continue;
            //	ブロックが「０」なら処理しない
            if(block[btype][brot][i][j] == 0) continue;
            //	ブロックをフィールドに登録
            field[by + i][bx + j] = 1;
        }
    }

    deleteJudge(); // 削除行を検索
    bflag = false; // ブロック着地フラグを解除
	bx = 4; // ブロックのX座標
	by = -4; // ブロックのY座標
	
	btype = 0; // ブロックの種類
    brot = 0; // ブロックの回転種類
    bcolor = 4; // ブロックの色
    initBlock(); // ブロック初期化
}

// ブロックの削除判定
function deleteJudge(){
    for(var i = 1;i < FIELD_HEIGHT - 1;i++) { // 壁は含まないので「1〜FIELD_HEIGHT - 1」の間になります。
		for(var j = 1;j < FIELD_WIDTH - 1;j++) {
			if(field[i][j] != 0) {
				delflag[i] = true;
			}
			else if(field[i][j] == 0) { // 行内に１つでも空白があったら削除フラグは立てずに、ループを抜ける
				delflag[i] = false;
				break;
			}
		}
    }
    
	for(var i = 1;i < FIELD_HEIGHT - 1;i++) {
        if(!delflag[i]) continue; // 削除フラグが立っていなかったら処理しない
        
        if(!dropflag) dropflag = true; // 落下フラグがオフならオンにする
        
        //	ブロック行を削除
		for(var j = 1;j < FIELD_WIDTH - 1;j++) field[i][j] = 0;
    }
    
    //	delflag の初期化
    for(var i = 0;i < FIELD_HEIGHT;i++) delflag[i] = false;
}

function drawBrock(){
    var str;
	
	switch(bcolor) {
	    case 1: str = BLOCK_RED_COLOR; break;
	    case 2: str = BLOCK_BLU_COLOR; break;
	    case 3: str = BLOCK_GRE_COLOR; break;
	    case 4: str = BLOCK_YEL_COLOR; break;
	}
	context.fillStyle = str; // 色の設定
    // ブロックを描画
    for(let i = 0; i < BLOCK_HEIGHT; i++){
        for(let j = 0; j < BLOCK_WIDTH; j++){
            if(block[btype][brot][i][j] == 1){
                context.fillRect(FIELD_X + (bx + j) * 25, FIELD_Y + (by + i) * 25, 25, 25);
            }
        }
    }
}
function drawField(){
    for(let i = 0; i < FIELD_HEIGHT; i++){
        for(let j = 0; j < FIELD_WIDTH; j++){
            if(field[i][j] == 0) continue;

            let str;
            switch(field[i][j]){
                case 1: str = BLOCK_RED_COLOR; break; // 赤色
			    case 2: str = BLOCK_BLU_COLOR; break; // 青色
			    case 3: str = BLOCK_GRE_COLOR; break; // 緑色
			    case 4: str = BLOCK_YEL_COLOR; break; // 黄色
			    case 9: str = "rgba(150, 150, 150, 1.0)"; break; // グレーに設定
            }
            context.fillStyle = str;
            context.fillRect(FIELD_X + j * 25, FIELD_Y + i * 25, 25, 25);
        }
    }
}

function drawFrame(){
    context.fillStyle = "rgba(230, 230, 230, 1.0)";
    for(let i = 0; i < FIELD_WIDTH + 1; i++){
        context.fillRect(FIELD_X + i * 25, FIELD_Y, 1, 25 * FIELD_HEIGHT);
    }
    for(let i = 0; i < FIELD_HEIGHT + 1; i++){
        context.fillRect(FIELD_X, FIELD_Y + i * 25, 25 * FIELD_WIDTH, 1);
    }
}

// ブロック初期化関数
function initBlock() {
	btype = Math.floor(Math.random() * 7);	//	落下ブロックの種類
	brot = Math.floor(Math.random() * 4);	//	落下ブロックの回転種類
	bcolor = Math.floor(Math.random() * 100); // 落下ブロックの色
	if(bcolor < 35)			bcolor = 1; // 赤色 35%
	else if(bcolor < 65)	bcolor = 2; // 青色 30%
	else if(bcolor < 85)	bcolor = 3; // 緑色 20%
	else					bcolor = 4; // 黄色 15%
}

document.addEventListener("keydown", e => {
    let keyCode = e.keyCode;

    switch(keyCode){
        case 39:
            key[KEY_RIGHT]++;
        break;
        case 37:
            key[KEY_LEFT]++;
        break;
        case 38:
            key[KEY_UP]++;
        break;
        case 40:
            key[KEY_DOWN]++;
        break;
        case 32:
            key[KEY_SPACE]++;
        break;
    }
});

document.addEventListener("keyup", e => {
    let keyCode = e.keyCode;

    switch(keyCode){
        case 39:
            key[KEY_RIGHT] = 0;
        break;
        case 37:
            key[KEY_LEFT] = 0;
        break;
        case 38:
            key[KEY_UP] = 0;
        break;
        case 40:
            key[KEY_DOWN] = 0;
        break;
        case 32:
            key[KEY_SPACE] = 0;
        break;
    }
});

init();
requestAnimationFrame(main);
function main(){
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    keyCtrl();
    update();
    enterBlock();
    drawBrock();
    drawField();
    drawFrame();

    cnt++;

    requestAnimationFrame(main);
}
