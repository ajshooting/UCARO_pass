function ToPass() {

    console.log("関数実行してるよ")

    const passHTML =
        `<section class="pass-body">
        <div class="pass-body-inr">
            <div class="qrcode-right">
                <div data-qr-value="UCARO:pn" class="qrcode" title="UCARO:pn"><canvas width="256" height="256"
                        style="display: none;"></canvas><img style="display: block;" src="https://raw.githubusercontent.com/ajshooting/UCARO_pass/main/img/fakeQR.png"></div>
                <div style="text-align:center;" class="qrcode-label">※大学管理用</div>
            </div>
            <p class="pass-cap">おめでとうございます</p>
            <h4 class="pass-ttl">合格</h4>
            <div class="pass-txt">
                <p></p>
                <p></p>
            </div>
        </div><!-- /.pass-body-inr -->
    </section>`

    // 書き換え_html
    const targetSection = document.querySelector('.ng-body.ng');
    if (targetSection) {
        targetSection.outerHTML = passHTML;
    }

    // 書き換え_画像
    var imageElement = document.querySelector('qrcode');
    const qrPath = chrome.extension.getURL('img/fakeQR.png');

    imageElement.classList.add('custom-style_qr');
    const customStyle_qr = document.createElement('style-qr');
    imageElement.style.background = "url(" + qrPath + ") no-repeat right top;";
    customStyle_qr.textContent = `
    .custom-style_qr {
    }`;
    document.head.appendChild(customStyle_qr);

    // ここちょっとよくわからんくなってる

    // var imageElement = document.getElementById('qrCanvas');
    // if (imageElement) {
    //     imageElement.src = qrPath;
    // }

    const passBodyElement = document.querySelector('.pass-body');
    passBodyElement.classList.add('custom-style');
    const customStyle = document.createElement('style');
    const bgPath = chrome.extension.getURL('img/passBG.jpg');
    passBodyElement.style.background = "url(" + bgPath + ") no-repeat right top;";

    // 書き換え_css
    customStyle.textContent = `
    .custom-style {
        background-size: cover;
        padding: 15px 6.6666666%;
    }
    .pass-body-inr {
        background: rgba(255, 255, 255, 0.7);
        text-align: center;
        padding: 10px 0px;
        position: relative;
    }`;
    document.head.appendChild(customStyle);



    console.log("合格おめでとう！")
}


function Zan_nen() {
    // ちょっとめんどくさくなっちゃったなー
}




chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'button1Clicked') {
        ToPass()
    } else if (request.action === 'button2Clicked') {
        Zan_nen()
    }
});