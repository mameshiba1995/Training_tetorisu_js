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
const KEY_SPACE =4; 
// キー判定用変数
let key = Array(5);
key[KEY_RIGHT] = 0;
key[KEY_LEFT] = 0;
key[KEY_UP] = 0;
key[KEY_DOWN] = 0;
key[KEY_SPACE] = 0;
// ブロックの定義
let block = [
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

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let field;
// ブロック着地フラグ
let bflag;
// ブロックの種類
let btype
// ブロックの回転タイプ
let brot;
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
    btype = 0;
    brot = 0;
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
function update(){
    if(cnt % 30 == 0){
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
}

function drawBrock(){
    context.fillStyle = "rgba(255, 100, 100, 1.0)";
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
                case 1: str = "rgba(255, 100, 100, 1.0)"; break; // 赤に設定
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
