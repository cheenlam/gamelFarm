reShowBox()
$(window).resize(function () {
    reShowBox();
    closeIpt();
})

let index = 0;
// 上方按鈕切換
$('.showBtn').click(function () {
    $('.showBtn').removeClass('on');
    $(this).addClass('on')

    index = $('#showBox .showBtn').index(".showBtn.on")
    if (index == 0) {
        title.innerHTML = localStorage.getItem("name");
        msgBox.value = localStorage.getItem("msg");

    } else {
        title.innerHTML = localStorage.getItem("name2");
        msgBox.value = localStorage.getItem("msg2");
    }
    showList()
});


// 填入遊戲ID與訊息
var title = document.querySelector('#showName');
var msgBox = document.querySelector('#showMsg');
var iptName = document.querySelector('#iptName');
var iptText = document.querySelector('#iptText');
var nowId = localStorage.getItem("name");
var nowmag = localStorage.getItem("msg");

title.innerHTML = nowId == null || '' ? "輸入遊戲ID" : nowId
msgBox.value = nowmag == null || '' ? "輸入訊息" : nowmag

$("#btn").click(function () {

    if ($("#iptName").val() != '') {
        if (index == 0) {
            localStorage.setItem("name", iptName.value)
            title.innerHTML = localStorage.getItem("name");
        } else {
            localStorage.setItem("name2", iptName.value)
            title.innerHTML = localStorage.getItem("name2");
        }

    }

    if ($("#iptText").val() != '') {
        if (index == 0) {
            localStorage.setItem("msg", iptText.value)
            msgBox.value = localStorage.getItem("msg")
        } else {
            localStorage.setItem("msg2", iptText.value)
            msgBox.value = localStorage.getItem("msg2")
        }
    }

    iptName.value = ''
    iptText.value = ''
    closeIpt()
});


// 增加清單
let list = document.querySelector('#list');
let sel = document.querySelector('#sel');
let selIpt = document.querySelector('#selIpt');

let now = localStorage.getItem("saveList");
let now2 = localStorage.getItem("saveList2");

localStorage.setItem("saveList", now == null ? '[]' : now)
localStorage.setItem("saveList2", now2 == null ? '[]' : now2)

let listData = now == null ? [] : JSON.parse(now);
let listData2 = now2 == null ? [] : JSON.parse(now2);
showList();


$("#btn2").click(function () {
    let len = document.querySelectorAll('#list li').length;

    if (len < 8) {
        let data = sel.value
        let price = selIpt.value
        switch (data) {
            // 農作物
            case "1": addList(1, "珠寶瓜", price); break;
            case "2": addList(2, "金瓜", price); break;
            case "3": addList(3, "銀瓜", price); break;
            case "4": addList(4, "銅瓜", price); break;
            case "5": addList(5, "花椰菜", price); break;
            case "6": addList(6, "覆盆莓", price); break;
            case "7": addList(7, "藍莓", price); break;
            case "8": addList(8, "草莓", price); break;
            case "9": addList(9, "蔓越莓", price); break;
            // 飲料
            case "10": addList(10, "50水", price); break;
            case "11": addList(11, "100水", price); break;
            case "12": addList(12, "150水", price); break;
            case "13": addList(13, "300水", price); break;
            case "14": addList(14, "600水", price); break;
            case "15": addList(15, "1200水", price); break;
            // 基肥
            case "16": addList(16, "下級基肥", price); break;
            case "17": addList(17, "中級基肥", price); break;
            case "18": addList(18, "上級基肥", price); break;
            case "19": addList(19, "特級基肥", price); break;
            // 肥料
            case "20": addList(20, "下級肥料", price); break;
            case "21": addList(21, "中級肥料", price); break;
            case "22": addList(22, "上級肥料", price); break;
            case "23": addList(23, "特級肥料", price); break;
            case "24": addList(24, "液肥", price); break;
            // 床土
            case "25": addList(25, "下級床土", price); break;
            case "26": addList(26, "中級床土", price); break;
            case "27": addList(27, "上級床土", price); break;
            case "28": addList(28, "特級床土", price); break;
            // 堆肥
            case "29": addList(29, "雜亂堆肥", price); break;
            case "30": addList(30, "一般堆肥", price); break;
            case "31": addList(31, "不錯堆肥", price); break;
            case "32": addList(32, "優良堆肥", price); break;
            // 酵素
            case "33": addList(33, "酵素", price); break;
            case "34": addList(34, "精煉酵素", price); break;
            // 農業用土壤
            case "35": addList(35, "牛糞", price); break;
            case "36": addList(36, "農業用土壤", price); break;
            // 魚餌
            case "37": addList(37, "蝸牛餌", price); break;
            case "38": addList(38, "特級蝦子餌", price); break;
            // 飲料製作材料
            case "39": addList(39, "甲殼素", price); break;
            case "40": addList(40, "濃縮甲殼素", price); break;
            case "41": addList(41, "牛磺酸", price); break;
            case "42": addList(42, "濃縮牛磺酸", price); break;
            // 肥料製作材料
            case "43": addList(43, "礦物質", price); break;
            case "44": addList(44, "濃縮礦物質", price); break;
            case "45": addList(45, "胺基酸", price); break;
            case "46": addList(46, "濃縮胺基酸", price); break;
            // 裝備製作材料
            case "47": addList(47, "布料", price); break;
            case "48": addList(48, "高級布料", price); break;
            case "49": addList(49, "毛線球", price); break;
            case "50": addList(50, "皮革", price); break;
            case "51": addList(51, "橡膠", price); break;
            // 農具製作材料
            case "52": addList(52, "鐵", price); break;
            case "53": addList(53, "高級鐵塊", price); break;
            case "54": addList(54, "耙子", price); break;
            case "55": addList(55, "鏟頭", price); break;
            case "56": addList(56, "小鏟頭", price); break;
            case "57": addList(57, "塑膠", price); break;
            case "58": addList(58, "鐮刀刀刃", price); break;
            case "59": addList(59, "樹枝", price); break;
        }
        showList()
    }
    closeIpt()
})

// 清除清單
list.addEventListener('click', function (e) {
    if (e.target.nodeName == 'A') {
        let num = e.target.getAttribute("data-nb")
        if (index == 0) {
            listData.splice(num, 1)
            let saveList = JSON.stringify(listData)
            localStorage.setItem("saveList", saveList)
        } else {
            listData2.splice(num, 1)
            let saveList = JSON.stringify(listData2)
            localStorage.setItem("saveList2", saveList)
        }

        showList()
    }
})

// 小畫面按鈕
$('#minBtnBox li').click(function () {
    var index = $('#minBtnBox li').index(this);
    $('.iptBox').addClass('on');
    $('.textBox ,.textBox input,.textBox textarea,.selBox').removeClass('on')
    switch (index) {
        case 0:
            $('.textBox ,.textBox input').addClass('on'); break;
        case 1:
            $('.textBox ,.textBox textarea').addClass('on'); break;
        case 2:
            $('.selBox').addClass('on'); break;
    }
})

// 小畫面關閉ipt按鈕
$('#iptColse').click(function () {
    closeIpt()
});

$('#sort').change(function(){
    let data = $(this).val()
    $('#sel').attr("data-sort",data)
    $('#sel').val("0")
})


// $('#pwdBtn').click(function(){
//     var pwd = $('#pwdIpt').val();
//     if(pwd == '使用密碼'){
//         $('#pwdBox').addClass('on')
//     }
// })


// ===== 函式區塊 =====
// 展示區域自適應縮放
function reShowBox() {
    let winW = $(this).width()
    let change = winW / 800 > 1 ? 1 : winW / 800 - 0.01
    $("#showBox").css("transform", `scale(${change})`).css("height", 458 * change);
}

// 小畫面關閉ipt視窗
function closeIpt() {
    $('.iptBox').removeClass('on');
}

// 增加清單列
function addList(num, title, price) {
    if (index == 0) {
        listData.push({
            "listNum": num,
            "listTitle": title,
            "listPrice": price
        })
    } else {
        listData2.push({
            "listNum": num,
            "listTitle": title,
            "listPrice": price
        })
    }

    let saveList;

    if (index == 0) {
        saveList = JSON.stringify(listData);
        localStorage.setItem("saveList", saveList);
    } else {
        saveList = JSON.stringify(listData2);
        localStorage.setItem("saveList2", saveList);
    }

    sel.value = '0';
    selIpt.value = '';
}



// 顯示清單跑回圈
function showList() {
    let str = '';
    var getList;

    list.innerHTML = ''
    if (index == 0) {
        getList = JSON.parse(localStorage.getItem("saveList"))
    } else {
        getList = JSON.parse(localStorage.getItem("saveList2"))
    }


    for (let i = 0; i < getList.length; i++) {
        str += `<li>

    <div data-num="${getList[i].listNum}">
            <div class="listImg"></div>
            <div class="listName" id="listName">${getList[i].listTitle}</div>
            <div class="listTitle" id="listTitle"> 
                <a class="del" data-nb="${i}"></a>    
                <p>${getList[i].listPrice}</p>            
            </div>
    </div>
</li>
`;
    }

    list.innerHTML = str;
}
