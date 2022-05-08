function bg() {
    var background = document.getElementById("background-standard");
    var range = 40;    // 移动幅度
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 1.5).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function (_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function () {
                var yValue = calcValue(y, window.innerHeight);
                var xValue = calcValue(x, window.innerWidth);
                background.style.backgroundPositionX = xValue * 1 - 200 + "px ";    //越高越往左偏
                background.style.backgroundPositionY = (-yValue * 1 - 40) + "px";    //越低越往下偏
            })
        }, false);

}

function bg2() {
    var background = document.getElementById("background-blurred");
    var range = 40;
    var calcValue = function calcValue(a, b) {
        return (a / b * range - range / 1.5).toFixed(1);
    };
    var timeout = void 0;
    document.addEventListener('mousemove',
        function (_ref) {
            var x = _ref.x,
                y = _ref.y;
            if (timeout) {
                window.cancelAnimationFrame(timeout);
            }
            timeout = window.requestAnimationFrame(function () {
                var yValue = calcValue(y, window.innerHeight);
                var xValue = calcValue(x, window.innerWidth);
                background.style.backgroundPositionX = xValue * 1 - 200 + "px ";
                background.style.backgroundPositionY = (-yValue * 1 - 40) + "px";
            })
        }, false);

}


function bg2_2() {
    var background = document.getElementById("background-blurred");
    document.onmousemove = function () {
        console.log(window.outerHeight);
        background.style.opacity = 1 - (getMousePos() / window.outerHeight * 2.5);
    }
}

function getMousePos(event) {
    var e = event || window.event;
    var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
    var y = e.pageY || e.clientY + scrollY;
    return y;
}


var i = 0;

function aboutMe() {
    var desc = document.getElementById("desc");
    var say = document.getElementById("say");
    if (i == 0) {
        i = 1;
        desc.style.height = "100px";
        say.innerHTML = "这里是锦鲤未离";
    } else {
        i = 0;
        desc.style.height = "50px";
        say.innerHTML = "暂未想好...";
    }

}