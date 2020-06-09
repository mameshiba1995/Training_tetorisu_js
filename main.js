// タイトル画面
const SCENE_TITLE   = 0;
// ゲーム画面
const SCENE_GAME    = 1;
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

// Next表示用の枠の左上座標（X）
const NEXT_FIELD_X	= CANVAS_WIDTH - 200;
// Next表示用の枠の左上座標（Y）
const NEXT_FIELD_Y	= FIELD_Y;

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
// Next表示用
let nbtype;
let nbrot;
let nbcolor;

// 落下速度
let spd;
// ゲームオーバーフラグ
let gameoverflag;
// 場面切り替え用変数
let scene;

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
    nbtype = Math.floor(Math.random() * 7); // 次のブロックの種類
	nbrot = Math.floor(Math.random() * 4); // 次のブロックの回転種類
	nbcolor = Math.floor(Math.random() * 100); // 次のブロックの色
	if(nbcolor < 35)		nbcolor = 1; // 赤色 35%
	else if(nbcolor < 65)	nbcolor = 2; // 青色 30%
	else if(nbcolor < 85)	nbcolor = 3; // 緑色 20%
	else					nbcolor = 4; // 黄色 15%
    initBlock(); // ブロック初期化
    btype = 0;
    brot = 0;
    bcolor = 4; // ブロックの色
    delflag = Array(FIELD_HEIGHT);
    dropflag = false; // 行削除後のブロック落下フラグ
    spd = 30;
    gameoverflag = false; // ゲームオーバーフラグ

    scene = SCENE_TITLE; // タイトル画面に設定
}

//	キー操作「可能・不可能」判定
function ctrlJudge() {
	var num; // 一番上にあるブロックの位置（行番号）
	var breakflag = false;
	
	for(var i = 0;i < BLOCK_HEIGHT;i++) {
		for(var j = 0;j < BLOCK_WIDTH;j++) {
			if(block[btype][brot][i][j] == 1) { // ブロックなら
				num = i; // 行番号を取得
				breakflag = true; // ループを抜ける
			}
		}
		if(breakflag) break;
	}
	return num; // 行番号を返す
}

function keyCtrl(){
    if(by < -ctrlJudge()) return; // フィールドをはみ出していたら処理しない（０行目より上なら処理しない）

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
    if(cnt % Math.floor(spd) == 0 || (key[KEY_SPACE] > 0 && cnt % 4 == 0)) {
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
    initBlock(); // 
    spd -= 0.2; // スピードアップ（間隔縮小）
	if(spd < 8) spd = 8;

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

//	Nextブロック領域の描画
function drawNextBlock() {
	// 枠の描画
	context.fillStyle = "rgba(230, 230, 230, 1.0)"; // 白色に設定
	
	context.fillRect(NEXT_FIELD_X,		NEXT_FIELD_Y,		150, 1);
	context.fillRect(NEXT_FIELD_X,		NEXT_FIELD_Y + 150, 150, 1);
	context.fillRect(NEXT_FIELD_X,		NEXT_FIELD_Y,		1, 150);
	context.fillRect(NEXT_FIELD_X + 150,NEXT_FIELD_Y,		1, 150);
	
	// ブロックの描画
	//	１：赤色　２：青色　３：緑色　４：黄色　９：灰色　に設定
	var str;
	switch(nbcolor) {
	case 1: str = BLOCK_RED_COLOR; break;
	case 2: str = BLOCK_BLU_COLOR; break;
	case 3: str = BLOCK_GRE_COLOR; break;
	case 4: str = BLOCK_YEL_COLOR; break;
	case 9: str = "rgba(150, 150, 150, 1.0)"; break;
	}
	context.fillStyle = str;
	
	for(var i = 0;i < BLOCK_HEIGHT;i++) {
		for(var j = 0;j < BLOCK_WIDTH;j++) {
			if(block[nbtype][nbrot][i][j] == 1) {
				context.fillRect(NEXT_FIELD_X + 25 + j * 25, NEXT_FIELD_Y + 15 + 25 + i * 25, 25, 25);
			}
		}
	}
 
	// ブロックの枠の描画
	context.fillStyle = "rgba(230, 230, 230, 1.0)";
	for(var i = 0;i < BLOCK_HEIGHT;i++) {
		for(var j = 0;j < BLOCK_WIDTH;j++) {
			if(block[nbtype][nbrot][i][j] == 1) {
				context.fillRect(NEXT_FIELD_X + 25 + j * 25,		NEXT_FIELD_Y + 15 + 25 + i * 25,		25, 1);
				context.fillRect(NEXT_FIELD_X + 25 + j * 25,		NEXT_FIELD_Y + 15 + 25 + i * 25 + 25,	25, 1);
				context.fillRect(NEXT_FIELD_X + 25 + j * 25, 		NEXT_FIELD_Y + 15 + 25 + i * 25,		1, 25);
				context.fillRect(NEXT_FIELD_X + 25 + j * 25 + 25,	NEXT_FIELD_Y + 15 + 25 + i * 25,		1, 25);
			}
		}
	}
	
	context.font = "bold 20px sans-serif";
	context.fillText("Next", NEXT_FIELD_X + 50, 60);
	context.fillRect(NEXT_FIELD_X, 70, 150, 1);
}
// ブロック初期化関数
function initBlock() {
	btype = nbtype; // 落下ブロックの種類
	brot = nbrot; // 落下ブロックの回転種類
	bcolor = nbcolor; // 落下ブロックの色
	
	nbtype = Math.floor(Math.random() * 7); // 次のブロックの種類
	nbrot = Math.floor(Math.random() * 4); // 次のブロックの回転種類
	nbcolor = Math.floor(Math.random() * 100); // 次のブロックの色
	if(nbcolor < 35)		nbcolor = 1; // 赤色 35%
	else if(nbcolor < 65)	nbcolor = 2; // 青色 30%
	else if(nbcolor < 85)	nbcolor = 3; // 緑色 20%
	else					nbcolor = 4; // 黄色 15%
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
        case 13:
            if(scene == SCENE_TITLE){
                scene = SCENE_GAME; // タイトルからゲーム画面に切り替え
            }
			if(gameoverflag){
                init();
            }
        break; // ゲームオーバーならエンターでタイトルへ
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

    if(scene == SCENE_TITLE) {
		context.fillStyle = "rgba(230, 230, 230, 1.0)"; // 文字色の設定
		context.font = "bold 48px sans-serif"; // 文字フォントの設定
		context.fillText("テトリス", CANVAS_WIDTH / 3, CANVAS_HEIGHT / 3); // 文字の描画
		context.font = "bold 32px sans-serif"; // 文字フォントの設定
		context.fillText("はじめる（Enter）", CANVAS_WIDTH / 3, CANVAS_HEIGHT / 3 + 100); // 文字の描画
	}
	else if(scene == SCENE_GAME) {
        if(!gameoverflag) {
            // ゲームオーバーなら実行しない
            keyCtrl();
            update();
            enterBlock();
        }
        drawBrock();
        drawField();
        drawFrame();
        drawNextBlock();

        cnt++;

        //	ゲームオーバー判定（０行目にブロックが登録されたら）
        for(var i = 0;i < FIELD_WIDTH;i++) {
            if(field[0][i] != 0 && field[0][i] != 9) {
                gameoverflag = true;
                break;
            }
        }
    }
    requestAnimationFrame(main);
}
