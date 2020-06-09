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

    bx = 4;
    by = 0;
    btype = 0;
    brot = 0;
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
                    by--; // 移動距離分を戻す
                    breakflag = true; // ループを抜ける
                    break;
                }
            }
            if(breakflag) break;
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
            context.fillStyle = "rgba(150, 150, 150, 1.0)";
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

init();
requestAnimationFrame(main);
function main(){
    context.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    update();
    drawBrock();
    drawField();
    drawFrame();

    cnt++;

    requestAnimationFrame(main);
}
