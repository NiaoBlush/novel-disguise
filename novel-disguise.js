// ==UserScript==
// @name         小说页面伪装|小说页面精简|起点页面伪装|番茄页面伪装|笔趣阁页面伪装
// @namespace    https://github.com/NiaoBlush/novel-disguise
// @version      2.11.0
// @description  将小说页面伪装成一个Word文档或Excel表格，同时净化小说页面，去除不必要的元素。适用于起点、番茄、笔趣阁、晋江、飞卢、69书吧、部分轻小说站等
// @author       NiaoBlush
// @license      MIT
// @run-at       document-end
// @homepageURL  https://github.com/NiaoBlush/novel-disguise
// @supportURL   https://github.com/NiaoBlush/novel-disguise/issues
// @icon64       https://s21.ax1x.com/2024/08/06/pkxPf0S.png
// @match        https://www.qidian.com/chapter/*
// @match        https://fanqienovel.com/reader/*
// @match        *://www.biquge.net/*/*/*.html
// @match        *://www.xbiqugu.net/*/*/*.html
// @match        *://www.biquge.co/*/*.html
// @match        *://www.52wx.com/*/*.html
// @match        https://www.3bqg.cc/book/*/*.html
// @match        https://www.bigee.cc/book/*/*.html
// @match        https://www.bqg2912.cc/*
// @match        https://bqg2912.cc/*
// @match        https://www.bqg955.xyz/*
// @match        https://bqg955.xyz/*
// @match        https://www.beqege.cc/*/*.html
// @match        https://www.biqukun.com/*/*/*.html
// @match        *://www.biqukun.org/*/*/*.html
// @match        https://www.biquge.tw/book/*/*.html
// @match        https://www.wenku8.net/novel/*/*/*.htm
// @exclude      https://www.wenku8.net/novel/*/*/index.htm
// @match        https://www.linovelib.com/novel/*/*.html
// @match        https://www.bilinovel.com/novel/*/*.html
// @match        https://www.qimao.com/shuku/*-*
// @match        https://www.jjwxc.net/onebook.php?novelid=*&chapterid=*
// @match        https://my.jjwxc.net/onebook_vip.php?novelid=*&chapterid=*
// @match        https://my.jjwxc.net/backend/buynovel.php?novelid=*&chapterid=*
// @match        https://www.lightnovel.us/cn/detail/*
// @match        https://b.faloo.com/*_*.html
// @match        https://b.faloo.com/vip/*/*.html
// @match        https://69shuba.cx/txt/*/*
// @match        https://www.69shuba.com/txt/*/*
// @match        https://www.owlook.com.cn/owllook_content*
// @match        https://owlook.com.cn/owllook_content*
// @match        https://www.ciweimao.com/chapter/*
// @match        https://www.v2ex.com/
// @match        https://www.v2ex.com/?*
// @match        https://www.v2ex.com/go/*
// @match        https://www.v2ex.com/t/*
// @match        https://www.v2ex.com/recent*
// @match        https://www.kelexs.com/book/*-*.html
// @match        http://www.xbiqugu.la/*/*/*.html
// @match        https://reader.z-library.ec/read/*
// @match        https://reader.z-library.sk/read/*
// @match        https://www.22biqu.com/*/*.html
// @match        https://www.shoujix.com/shoujixs_*_*.html
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @require      https://update.greasyfork.org/scripts/547816/1651807/novel-disguise-jquery.js?v=2.0.3
// @require      https://update.greasyfork.org/scripts/547815/1651802/novel-disguise-resource.js?v=0.0.1
// ==/UserScript==

(function () {
    'use strict';
    printLog("novel-disguise 开始初始化");

    typeof jQuery !== "undefined" ? printLog("jQuery 版本: " + jQuery.fn.jquery) : printLog("error", "jQuery 未载入！");
    const $ = jQuery.noConflict(true);

    typeof NovelDisguiseResource !== "undefined" ? printLog("资源已载入", NovelDisguiseResource) : printLog("error", "资源未载入");

    const screenInfo = getScreenInfo();
    let disguised_header_img = null;
    let disguised_body_img = null;
    let disguised_footer_img = null;
    let disguised_icon_img = null;
    let headerHeight = null;
    let footerHeight = null;
    let readerHeight = null;

    const originalTitle = document.title;

    const link_text_color = "rgba(0,0,0,.7)";
    const link_bg_color = "#f6f6f6";
    const link_front_color = "rgba(0,0,0,.7)";

    const DICT = {
        MODE: {
            WORD: 'mode_word',
            EXCEL: 'mode_excel',
            ORIGINAL: 'mode_original'
        },
        THEME: {
            OFFICE: 'theme_office',
            WPS: 'theme_wps'
        },
        MARGIN_TYPE: {
            NORMAL: 'normal_margin',
            NONE: 'no_margin'
        },
        RESOURCE_RESOLUTION: {
            AUTO: 'auto',
            FORCE_1K: '1k',
            FORCE_2K: '2k',
            FORCE_4K: '4k'
        }
    };

    const KEY_CONFIG = "KEY_CONFIG";

    function printLog(...args) {
        let level = 'info';

        // 判断第一个参数是否为 level
        if (typeof args[0] === 'string' && ['info', 'warn', 'error'].includes(args[0])) {
            level = args.shift(); // 取出 level
        }

        let levelStyle = '';
        switch (level) {
            case 'info':
                levelStyle = 'color:#00BFFF;font-weight:bold;';
                break;
            case 'warn':
                levelStyle = 'color:#FFA500;font-weight:bold;';
                break;
            case 'error':
                levelStyle = 'color:#FF4500;font-weight:bold;';
                break;
            default:
                levelStyle = 'color:#000;';
        }

        const prefix = `%c🎭novel-disguise%c [${level.toUpperCase()}]`;

        console.log(
            prefix,
            'background:#222;color:#FFD700;font-weight:bold;padding:2px 4px;border-radius:4px;',
            'background:none;' + levelStyle,
            ...args
        );
    }

    function readConfig() {

        const defaultConfig = {
            mode: DICT.MODE.WORD,
            lastVisibleMode: DICT.MODE.WORD,
            theme: DICT.THEME.OFFICE,
            marginType: DICT.MARGIN_TYPE.NORMAL,
            hideImage: true,
            resourceResolution: DICT.RESOURCE_RESOLUTION.AUTO,

            emptyCols: 20,
            enableExcelRandomPopulate: true,
            maxExcelRandomPopulateCol: 9
        };
        const stored = GM_getValue(KEY_CONFIG, {});
        const config = Object.assign({}, defaultConfig, stored);
        if (config.mode !== DICT.MODE.ORIGINAL) {
            config.lastVisibleMode = config.mode;
        }
        printLog("config loaded", config);
        return config;
    }

    const config = readConfig();

    function writeConfig() {
        GM_setValue(KEY_CONFIG, config);
    }

    function applyMode(mode) {
        printLog('准备切换到模式[${mode}]...');
        config.mode = mode;
        writeConfig();
        location.reload();
    }

    function settings() {
        const $settings = $(`
            <form class="nd-settings-form">
                <div class="nd-settings-form-group">
                    <label>模式: </label>
                    <select name="settings-mode">
                        <option value="${DICT.MODE.WORD}">Word</option>
                        <option value="${DICT.MODE.EXCEL}">Excel</option>
                    </select>
                </div>
                <div class="nd-settings-form-group">
                    <label for="settings-mode">主题: </label>
                    <select id="settings-theme" name="settings-theme">
                        <option value="${DICT.THEME.OFFICE}">Office</option>
                        <option value="${DICT.THEME.WPS}">Wps</option>
                    </select>
                </div>
                <div class="nd-settings-form-group">
                    <label title="word半屏时采用无边距会看起来更加自然">Word页边距: </label>
                    <label style="width: 30%;"><input type="radio" name="margin-type" value="${DICT.MARGIN_TYPE.NORMAL}">正常</label>
                    <label style="width: 30%;"><input type="radio" name="margin-type" value="${DICT.MARGIN_TYPE.NONE}">无边距</label>
                </div>
                <div class="nd-settings-form-group">
                    <label>隐藏图片: </label>
                    <label style="width: 30%;"><input type="radio" name="settings-hide-image" value="true">是</label>
                    <label style="width: 30%;"><input type="radio" name="settings-hide-image" value="false">否</label>
                </div>
                <div class="nd-settings-form-group">
                    <label>资源分辨率: </label>
                    <label><input type="radio" name="settings-res-resolution" value="${DICT.RESOURCE_RESOLUTION.AUTO}">自动</label>
                    <label style="margin-left: 4px;"><input type="radio" name="settings-res-resolution" value="${DICT.RESOURCE_RESOLUTION.FORCE_1K}">1K</label>
                    <label style="margin-left: 4px;"><input type="radio" name="settings-res-resolution" value="${DICT.RESOURCE_RESOLUTION.FORCE_2K}">2K</label>
                    <label style="margin-left: 4px;"><input type="radio" name="settings-res-resolution" value="${DICT.RESOURCE_RESOLUTION.FORCE_4K}">4K</label>
                </div>
                
                <div class="nd-settings-form-group" style="margin-top: 20px;">
                    <div class="nd-settings-btn-wrapper">
                        <button type="button" name="tip">好活，当赏❤️</button>
                        <button type="submit">保存设置</button>
                    </div>
                    
                </div>
            </form>
           
        `);

        //default
        $settings.find("select[name=settings-mode]").val(config.mode);
        $settings.find("select[name=settings-theme]").val(config.theme);
        $settings.find(`input[name=margin-type][value='${config.marginType}']`).prop('checked', true);
        $settings.find(`input[name=settings-hide-image][value='${String(config.hideImage)}']`).prop('checked', true);
        $settings.find(`input[name=settings-res-resolution][value='${config.resourceResolution}']`).prop('checked', true);

        const $modal = showModal($settings, {
            title: "设置"
        });

        //submit
        $settings.on('submit', function (event) {
            event.preventDefault();

            const formDataObj = new FormData(this);

            config.mode = formDataObj.get('settings-mode');
            config.theme = formDataObj.get('settings-theme');
            config.marginType = formDataObj.get('margin-type');
            config.hideImage = formDataObj.get('settings-hide-image') === 'true';
            config.resourceResolution = formDataObj.get('settings-res-resolution');
            writeConfig();


            popMsg("设置已保存，刷新页面后生效");
            $modal.remove();
        });

        //tip
        $settings.find("button[name=tip]").on("click", function () {
            const $tipContent = $(`
                <div class="nd-tip-content">
                    <div class="nd-tip-text">
                        <p>感谢使用，如果觉得这个脚本用起来还算愉快，请随意打赏，一切随缘~</p>
                        <br>
                        <p style="font-size: 1.5em;"><b>祝各位摸鱼快乐~</b></p>
                    </div>
                    <div class="nd-tip-img-wrapper">
                        <img src="${NovelDisguiseResource.OTHER_IMAGES.tip_wechat.base64}" alt="微信">
                    </div>
                </div>
            `);

            showModal($tipContent, {
                title: "打赏",
                width: 600
            });
        });
    }

    function setResource() {

        function getActualHeight(originalHeight) {
            return originalHeight / screenInfo.devicePixelRatio;
        }

        printLog('screenInfo', screenInfo);

        function getHeaderResource(currentMode, currentTheme, physicalWidth) {
            const wThreshold2k = 2560;
            const wThreshold4k = 3840;

            let size;
            if (config.resourceResolution === DICT.RESOURCE_RESOLUTION.AUTO) {
                if (physicalWidth >= wThreshold4k) {
                    size = "4k";
                } else if (physicalWidth >= wThreshold2k) {
                    size = "2k";
                } else {
                    size = "1k";
                }
            } else {
                size = config.resourceResolution;
            }


            const header = NovelDisguiseResource.getDisguisedImage({
                app: config.mode,
                theme: config.theme,
                size: size,
                scheme: "light",
                part: "header"
            });
            printLog('header', header);
            return header;
        }

        const src = getHeaderResource(config.mode, config.theme, screenInfo.physicalWidth);
        disguised_header_img = src.url || src.base64;
        headerHeight = getActualHeight(screenInfo.physicalWidth * src.height / src.width);

        const disguised_footer_resource = NovelDisguiseResource.getDisguisedImage({
            app: config.mode,
            theme: DICT.THEME.OFFICE,
            size: "1k",
            scheme: "light",
            part: "footer"
        });
        disguised_footer_img = disguised_footer_resource.base64;
        footerHeight = disguised_footer_resource.height;
        disguised_icon_img = NovelDisguiseResource.getDisguisedImage({
            app: config.mode,
            theme: DICT.THEME.OFFICE,
            size: "1k",
            scheme: "light",
            part: "icon"
        }).base64;

        if (config.mode === DICT.MODE.WORD) {
            disguised_body_img = NovelDisguiseResource.getDisguisedImage({
                app: DICT.MODE.WORD,
                theme: DICT.THEME.OFFICE,
                size: "1k",
                scheme: "light",
                part: "body"
            }).base64;
        }

        readerHeight = window.innerHeight - headerHeight - footerHeight;
    }

    /**
     * 将页面中的图片替换成indicator
     * 受`config.hideImage`控制
     *
     * @param selector css选择器
     * @param replaceParent 是否替换img的父元素(有些img会被a标签包裹)
     * @param indicatorText 占位文字
     */
    function hideImages({selector, replaceParent = false, indicatorText = '点击显示图片'}) {
        if (!config.hideImage) {
            return;
        }

        $(selector).each(function () {
            const imgSrc = $(this).attr('src');
            const span = $('<span class="disguised-img-indicator"></span>')
                .attr('data-src', imgSrc)
                .text(indicatorText);
            if (replaceParent) {
                $(this).parent().replaceWith(span);
            } else {
                $(this).replaceWith(span);
            }

        });
    }

    function registerImageIndicators() {
        $(".disguised-img-indicator").on('click', function () {
            const src = $(this).attr('data-src');
            const $newImg = $('<img>').attr('src', src);
            const $modal = showModal($newImg);
            $modal.find("img").css({
                "max-width": "80vw",
                "max-height": "80vh"
            });
            $newImg.on('click', function () {
                $modal.remove();
            });
        });
    }

    function common() {

        setResource();

        //公共样式
        GM_addStyle(`
        .img-fill-in {
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        
        html {
            overflow-y: hidden;
            color-scheme: normal !important;
        }
        
        #disguised-page {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        
        #disguised-header {
            width: 100%;
            aspect-ratio: ${screenInfo.screenWidth / headerHeight};
            background-image: url(${disguised_header_img});
        }
        
        #disguised-title {
            position: fixed;
            top: 5px;
            left: 0;
            width: 100%;
            z-index: 9999;
            text-align: center;
            color: ${config.theme === DICT.THEME.OFFICE ? '#edffff' : '#232323'};
            font-size: 12px;
            line-height: 22px;
            user-select: none;
        }
        
        #disguised-footer {
            height: ${footerHeight}px;
            line-height: ${footerHeight}px;
            width: 100%;
            background-image: url(${disguised_footer_img});
            font-size: 13px;
            color: #262626;
            
            box-sizing: border-box;
            position: relative;
        }
        
        #footer-content {
            position: absolute;
            left: 0;
            bottom: 0;
            height: ${footerHeight}px;
            line-height: ${footerHeight}px;
            width: 100%;
            flex-direction: row;
            flex-wrap: nowrap;
            align-content: center;
            justify-content: flex-start;
            align-items: center;
            box-sizing: border-box;
            padding-left: 20px;
        }
        
        #footer-content > * {
            height: 100%;
            line-height: 100%;
            margin-right: 10px;
            font-size: 13px;
        }
        
        #disguised-body {
            flex: 1;
            padding-left: ${config.marginType === DICT.MARGIN_TYPE.NORMAL ? '25%' : '0'};
            padding-right: ${config.marginType === DICT.MARGIN_TYPE.NORMAL ? '25%' : '0'};
            background-image: url(${disguised_body_img}) !important;
            background-repeat: repeat-y;
            background-size: 100% auto;
            overflow-y: scroll;
            width: 100%;
            box-sizing: border-box;
        }
        
        #disguised-content {
            background-color: #FFF;
            border-left-color: #c6c6c6;
            border-right-color: #c6c6c6;
            border-left-width: 1px;
            border-right-width: 1px;
            min-height: 100%;
            width: 100%;
            box-sizing: border-box;
        }
        
        #disguised-content > * {
            width: 100%;
            margin: unset;
            box-sizing: border-box;
        }
        
        #disguised-content p {
            color: black;
        }
        
        #disguised-content div {
            background-color: #FFF !important;
        }
        
        #disguised-right-content {
            display: none;
            position: fixed;
            right: 0;
            top: ${headerHeight}px;
            height: ${readerHeight}px;
            width: 400px;
            z-index: 99999;
        }
        
        .disguised-link, .disguised-img-indicator {
            color: ${link_text_color};
            text-decoration: underline;
            cursor: pointer;
            margin-right: 5px;
        }
        
        .disguised-modal-wrapper {
            position: fixed;
            z-index: 99999;
            top: 50%;
            left: 50%;
            max-height: 100%;
            max-width: 100%;
            transform: translate(-50%, -50%);
            border: 1px solid #707070;
            background-color: #F0F0F0;
        }
        
        .disguised-modal-header {
            background-color: #FFF;
            min-width: 200px;
            height: 32px;
            display: flex;
        }
        
        .disguised-modal-title {
            flex: 1;
            user-select: none;
            padding-left: 10px;
            color: black;
            display: flex;
            align-items: center;
        }
        
        .disguised-modal-header-close {
            position: relative;
            background-color: transparent;
            border: none;
            cursor: pointer;
            padding: 0;
            width: 36px;
            height: 32px;
            font-size: 1em;
        }
        .disguised-modal-header-close:hover {
            background-color: #E81023;
        }
        .disguised-modal-header-close::before,
        .disguised-modal-header-close::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 15px;
            height: 1px;
            background-color: black;
            transform-origin: center;
        }
        .disguised-modal-header-close:hover::before,
        .disguised-modal-header-close:hover::after {
            background-color: #FFF;
        }
        .disguised-modal-header-close::before {
            transform: translate(-50%, -50%) rotate(45deg);
        }
        .disguised-modal-header-close::after {
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        
        .disguised-modal-body {
            padding: 10px;
            background-color: #F0F0F0;
            min-height: 32px;
            max-height: calc(100vh - 32px);
            font-size: 1em;
            line-height: normal;
            overflow-y: auto;
        }
        
        .disguised-modal-wrapper * {
            margin: unset;
        }
        
        .nd-settings-form {
            font-family: 'Microsoft YaHei', sans-serif;
            width: 300px;
            box-shadow: none;
        }
        
        .nd-settings-form-group:not(:last-child) {
            margin-bottom: 15px;
        }
        
        .nd-settings-form-group label {
            display: inline-block;
            font-size: 13px;
            color: #000;
            margin-bottom: 5px;
        }
        
        .nd-settings-form-group select,
        .nd-settings-form-group input[type="radio"] {
            font-size: 13px;
            padding: 2px;
            border: 1px solid #c0c0c0;
            background-color: white;
            width: auto;
        }
        
        .nd-settings-form-group input[type="radio"] {
            width: auto;
            margin-right: 5px;
        }
        
        .nd-settings-form-group button {
            font-size: 13px;
            padding: 5px 10px;
            margin-right: 5px;
            border: 1px solid #c0c0c0;
            border-radius: 2px;
            background-color: #e0e0e0;
            cursor: pointer;
        }
        
        .nd-settings-form-group button[type="submit"] {
            background-color: #dcdcdc;
        }
        
        .nd-settings-form-group button:hover {
            background-color: #c0c0c0;
        }
        
        .nd-settings-form-group button:active {
            background-color: #a0a0a0;
        }
        
        .nd-settings-form-group button:focus {
            outline: 1px solid #606060;
        }
        
        .nd-settings-form-group select {
            margin-right: 5px;
            width: 180px;
        }
        
        .nd-settings-form-group select:focus-visible {
            outline: none;
        }
        
        .nd-settings-form-group label:first-child {
            width: 100px;
        }
        
        .nd-settings-form p {
            margin-bottom: 10px;
        }

        .nd-settings-btn-wrapper {
            display: flex;
            justify-content: space-between;
        }

        
        .nd-tip-content {
            font-size: 1.3em;
            display: flex;
        }
        
        .nd-tip-text {
            width: 50%;
            padding: 100px 5px;
        }
        
        .nd-tip-img-wrapper {
            width: 50%;
            display: flex;
            justify-content: space-between;
        }
        
        .nd-tip-img-wrapper img {
            width: 100%;
        }
        
        .nd_msg{display:none;position:fixed;top:10px;left:50%;transform:translateX(-50%);color:#fff;text-align:center;z-index:99996;padding:10px 30px;font-size:16px;border-radius:10px;background-size:25px;background-repeat:no-repeat;background-position:15px}
        .nd_msg a{color:#fff;text-decoration: underline;}
        .nd_msg-ok{background:#4bcc4b}
        .nd_msg-err{background:#c33}
        .nd_msg-warn{background:#FF9900}
        `);

        // 图标
        var link = $('<link rel="icon" type="image/x-icon">').attr('href', disguised_icon_img);
        $('link[rel*="icon"]').remove();
        $('head').append(link);

        $('body').children().hide();

        $(`<div id='disguised-page'>
                <div id='disguised-title'></div>
                <div id='disguised-header' class='img-fill-in'></div>
                <div id='disguised-body'>
                    <div id='disguised-content'></div> 
                    <div id='disguised-right-content'></div>
                </div>
                <div id='disguised-footer' class='img-fill-in'>
                    <div id="footer-content">
                        <span>简体中文（中国大陆）</span><span>辅助功能：一切就绪</span>
                    </div>
                </div>
           </div>`).appendTo("body");

        overridePageTitle();
        if (config.mode === DICT.MODE.WORD) {
            GM_addStyle(`
            #disguised-content {
                padding: 10px 30px;
            }
            `);
        } else {
            GM_addStyle(`
            #footer-content {
                height: 45%;
                line-height: 45%;
            }
            #disguised-body {
                padding-left: 0;
                padding-right: 0;
                overflow-y: hidden;
            }
            #disguised-content {
                height: 100%;
                overflow-x: hidden;
                overflow-y: scroll;
            }
            
            table {
                margin: 0;
            }
            .excel-table,
            .excel-table th,
            .excel-table td,
            .excel-table thead,
            .excel-table tbody {
                border-spacing: 0;
            }
            .excel-table {
                border-collapse: collapse;
            }
            
            .excel-table > thead {
                background-color: ${config.theme === DICT.THEME.OFFICE ? '#E6E6E6' : '#EEEEEE'};
            }
            
            .excel-table > thead > tr > th {
                font-weight: normal;
                font-size: 14px;
                color: black !important;
                background-color: ${config.theme === DICT.THEME.OFFICE ? '#E6E6E6' : '#EEEEEE'};
                position: sticky;
                top: 0;
                outline: 1px solid;
                outline-color: #A0A0A0;
                text-align: center;
                font-family: "SimSun", sans-serif;
                padding: 0;
                line-height: normal;
                z-index: 9999;
            }
            
            .excel-table th {
                min-width: 71px;
            }
            .excel-table th:nth-child(1) {
                width: auto;
                min-width: 20px;
            }
            .excel-table th:nth-child(2) {
                min-width: 50vw;
            }
            .excel-table tbody {
            }
            .excel-table > tbody > tr > td:nth-child(1) {
                text-align: center;
                background-color: #E6E6E6;
                padding-left: 5px;
                padding-right: 5px;
                user-select: none;
            }
            .excel-table tbody td:not(:nth-child(1)):not(:nth-child(2)) {
                white-space: nowrap;
                text-align: center;
            }
            .excel-table > tbody > tr > td {
                border: 1px solid #DDDDDD;
                padding: 3px 10px;
                line-height: normal;
            }
            .excel-table > tbody > tr > td ,
            .excel-table tbody td p {
                font-size: 12px;
                font-weight: normal;
                color: black !important;
                font-family: "Microsoft YaHei", "SimSun", sans-serif;
            }
            .excel-table > tbody > tr:first-child > td {
                border-top: none;
            }
            .excel-table tbody td > div {
                margin: 0;
                padding: 0;
                text-align: unset;
            }
            `);

            //构建表格
            const $table = $('<table class="excel-table"></table>');
            const extraThead = (function () {
                let output = '';
                for (let i = 1; i <= config.emptyCols; i++) {
                    const char = String.fromCharCode(64 + i);
                    output += `<th>${char}</th>`;
                }
                return output;
            })();
            const $thead = $(`<thead><tr><th></th>${extraThead}</tr></thead>`);
            const $tbody = $('<tbody></tbody>');
            // 添加表头
            $table.append($thead);
            $table.append($tbody);
            $("#disguised-content").append($table);

            //占位行
            padExcelBlankLines();
        }
    }

    function overridePageTitle() {
        if (config.mode === DICT.MODE.WORD) {
            document.title = "文档1";
        } else {
            document.title = "工作簿1";
        }
    }

    function setWordContent($contentEl) {
        if (config.mode !== DICT.MODE.WORD) {
            return;
        }
        $contentEl.show().appendTo("#disguised-content");
    }

    function clearExcelContent() {
        if (config.mode === DICT.MODE.EXCEL) {
            $(".excel-table tbody").empty();
        }
    }

    function getExcelLastIndex() {
        const $cell = $(".excel-table > tbody > tr:last-child > td:first-child");
        const indexCellText = $.trim($cell.text());
        return indexCellText ? parseInt(indexCellText) : 0;
    }

    /**
     * 空行补齐
     */
    function padExcelBlankLines(max = 50) {
        const lastIndex = getExcelLastIndex();
        const emptyLines = [];
        for (let i = lastIndex + 1; i <= max; i++) {
            emptyLines.push("\u200B");
        }
        setExcelLines(emptyLines, true);
    }

    function setExcelLines(lines, append = false, rowHandler) {
        if (config.mode !== DICT.MODE.EXCEL) {
            return;
        }

        let lastIndex;
        if (append) {
            lastIndex = getExcelLastIndex();
        } else {
            clearExcelContent();
            lastIndex = 0;
        }
        const $tbody = $(".excel-table > tbody");
        lines.forEach(function (line, index) {
            if (typeof line === 'string') {
                line = line.replace(/&nbsp;/g, '').trim();
            }

            if (line === '') return;
            if (line instanceof $ && line.length === 0) return;

            const $td2 = $('<td></td>');
            if (typeof rowHandler === 'function') {
                line = rowHandler(line, index, $td2);
            }

            const $tr = $('<tr></tr>');
            const $td1 = $('<td></td>').text(++lastIndex);
            $td2.html(line);
            $tr.append($td1);
            $tr.append($td2);
            for (let i = 0; i < config.emptyCols; i++) {
                let tdContent = "";
                if (config.enableExcelRandomPopulate && i < config.maxExcelRandomPopulateCol) {
                    tdContent = generateRandomContent(i);
                }
                $tr.append($(`<td>${tdContent}</td>`));
            }
            $tbody.append($tr);


        });
    }

    function setExcelContent($contentEl, type = 'br', clone = false, rowHandler) {
        if (config.mode !== DICT.MODE.EXCEL) {
            return;
        }

        if (type === 'br') {
            const lines = $contentEl.html().split('<br>');
            setExcelLines(lines);
        } else if (type === 'p') {
            let pList;
            if (clone) {
                pList = $contentEl.children('p').clone().toArray();
            } else {
                pList = $contentEl.children('p').toArray();
            }
            //去除空的p标签
            pList = pList.filter(function (p) {
                return $(p).text().trim() !== '';
            });
            setExcelLines(pList);
        }

    }

    function addEmptyExcelLines(num = 1) {
        setExcelLines(new Array(num).fill("\u200B"), true);
    }

    function addGlobalStyle(styleText) {
        GM_addStyle(styleText);
    }

    function addWordStyle(styleText) {
        if (config.mode === DICT.MODE.WORD) {
            GM_addStyle(styleText);
        }
    }

    function addExcelStyle(styleText) {
        if (config.mode === DICT.MODE.EXCEL) {
            GM_addStyle(styleText);
        }
    }

    function excelUnsupported() {
        if (config.mode === DICT.MODE.EXCEL) {
            alert("本站部分或全部章节不支持Excel模式，将切换到Word模式");
            applyMode(DICT.MODE.WORD);
        }
    }

    function clearWordContent() {
        if (config.mode === DICT.MODE.WORD) {
            $('#disguised-content').empty();
        }

    }

    function setDisguisedTitle(titleStr) {
        $('#disguised-title').text(titleStr);
    }

    function setWordDetail(detail) {
        const $footerEl = $('#footer-content');
        $footerEl.text("");
        if (typeof detail === "string") {
            $footerEl.text(detail);
        } else {
            detail.appendTo($footerEl);
        }

    }

    function setWordRightContent($contentEl) {
        $contentEl.appendTo($("#disguised-right-content"));
    }

    function getScreenInfo() {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const devicePixelRatio = window.devicePixelRatio || 1;
        const physicalWidth = screenWidth * devicePixelRatio;
        return {screenWidth, screenHeight, devicePixelRatio, physicalWidth};
    }

    function generateRandomContent(type = 1) {
        type = (type % 6) + 1;

        function generateRandomLetters(n, isUpperCase) {
            const letters = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
            let result = '';
            for (let i = 0; i < n; i++) {
                result += letters.charAt(Math.floor(Math.random() * letters.length));
            }
            return result;
        }

        function getRandomInt(a, b) {
            return Math.floor(Math.random() * (b - a + 1)) + a;
        }

        function getRandomPaddedInt(n) {
            // 生成 n 位数范围内的随机数
            const max = Math.pow(10, n) - 1;
            const min = Math.pow(10, n - 1);
            const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

            // 返回左侧填充0的字符串
            return randomInt.toString().padStart(n, '0');
        }

        function getRandomItem(list) {
            return list[Math.floor(Math.random() * list.length)];
        }

        function getRandomChineseName() {
            const surnames = ["赵", "钱", "孙", "李", "周", "刘", "王"];
            const commonGivenChars = [
                "伟", "秀", "敏", "静", "丽", "强", "磊", "军", "洋", "杰", "婷", "浩", "婷", "欣",
                "佳", "琪", "婧", "思", "鑫", "博", "宇", "轩", "涵", "宁", "瑶", "晨", "泽", "瑞"
            ];

            const surname = getRandomItem(surnames);
            const len = Math.random() < 0.5 ? 1 : 2;   // 50% 概率取单名或双名
            let given = "";
            for (let i = 0; i < len; i++) {
                given += getRandomItem(commonGivenChars);
            }
            return surname + given;
        }

        function getRandomDateUsingRandomNumbers() {
            const year = Math.floor(Math.random() * (2024 - 2020 + 1)) + 2020;
            const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
            const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'); // 简单处理，每月最多28天
            return `${year}-${month}-${day}`;
        }

        function getYesNo() {
            return Math.random() < 0.5 ? '是' : '否';
        }

        switch (type) {
            case 1:
                //编码
                return `${generateRandomLetters(2, true)}-${generateRandomLetters(2, true)}-${generateRandomLetters(2, true)}${getRandomPaddedInt(6)}`;
            case 2:
                //人名
                return getRandomChineseName();
            case 3:
                //日期
                return getRandomDateUsingRandomNumbers();
            case 4:
                //随机数
                return getRandomInt(1, 9999);
            case 5:
                //字母
                return generateRandomLetters(1, true);
            case 6:
                //是否
                return getYesNo();
        }
    }

    function showModal(content, modalConfig = {}) {
        const $modal = $(`
        <div class="disguised-modal-wrapper">
            <div class="disguised-modal-header">
                <div class="disguised-modal-title">${modalConfig.title || ""}</div>
                
            </div>
            <div class="disguised-modal-body"></div>
        </div>
        `);

        const $headerClose = $(`<div class="disguised-modal-header-close"></div>`);
        $headerClose.on("click", function () {
            $modal.remove();
        });
        $modal.find(".disguised-modal-header").append($headerClose);

        if (modalConfig.width && typeof modalConfig.width === "number") {
            $modal.css("width", `${modalConfig.width}px`);
        }

        if (typeof content === "string") {
            $modal.find(".disguised-modal-body").text(content);
        } else {
            content.appendTo($modal.find(".disguised-modal-body"));
        }

        $("#disguised-page").append($modal);
        return $modal;
    }

    /**
     * 消息弹框
     *
     * 使用了HLD大佬的代码
     *
     * @see https://greasyfork.org/zh-CN/scripts/393991-nga%E4%BC%98%E5%8C%96%E6%91%B8%E9%B1%BC%E4%BD%93%E9%AA%8C/code
     * @method popMsg
     * @param {String} msg 消息内容
     * @param {String} type 消息类型 [ok, err, warn]
     */
    function popMsg(msg, type = 'ok') {
        $('.nd_msg').length > 0 && $('.nd_msg').remove();
        let $msg = $(`<div class="nd_msg nd_msg-${type}">${msg}</div>`);
        $('body').append($msg);
        $msg.slideDown(200);
        setTimeout(() => {
            $msg.fadeOut(500);
        }, type == 'ok' ? 2000 : 5000);
        setTimeout(() => {
            $msg.remove();
        }, type == 'ok' ? 2500 : 5500);
    }

    /**
     * 获取指定的cookie值
     */
    function getCookie(name) {
        let cookieArr = document.cookie.split(";");

        for (let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split("=");

            // 取出cookie名称时去除前后空格
            if (name === cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }

    /**
     * 设置cookie的值
     */
    function setCookie(name, value, days, domain = null) {
        let expires = "";
        if (days) {
            let expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + days);
            expires = "; expires=" + expireDate.toUTCString();
        }

        let domainStr = "";
        if (domain) {
            domainStr = "; domain=" + domain;
        }
        document.cookie = name + "=" + (value || "") + expires + domainStr + "; path=/";
    }

    /**
     * 把 target 的滚动“伪装”为 source 的滚动：镜像事件 + jQuery 取值映射（可选）
     * 单向桥接，避免回弹
     * @param {Element|string} source 站内监听用的容器（如 #idrviewer）
     * @param {Element|string} target 实际滚动容器（如 #disguised-body）
     * @param {Object} [opts]
     * @param {boolean} [opts.twoWay=false]  是否反向同步（一般不要开，开了可能回弹）
     * @param {boolean} [opts.patchJQuery=true] 是否打 jQuery 补丁（映射 $(source).scrollTop/height & .on）
     * @param {boolean} [opts.mirrorGlobal=false] 是否同时触发 window/document 的 scroll
     * @param {boolean} [opts.syncNative=false] 是否把 source.scrollTop 原生属性也设置为 target 的值（可能引发回弹，默认关）
     * @returns {{teardown: Function}}
     */
    function bridgeScrollContainers(source, target, opts = {}) {
        const {
            twoWay = false,
            patchJQuery = true,
            mirrorGlobal = false,
            syncNative = false, // 关键：默认不改原生 scrollTop
        } = opts;

        const src = (typeof source === 'string') ? document.querySelector(source) : source;
        const tgt = (typeof target === 'string') ? document.querySelector(target) : target;
        if (!src || !tgt) {
            printLog('warn', '滚动桥接容器错误', {source, target});
            return {
                teardown: () => {
                }
            };
        }

        // 幂等
        if (src.__bridge_to === tgt && tgt.__bridge_from === src) return {
            teardown: () => {
            }
        };
        src.__bridge_to = tgt;
        tgt.__bridge_from = src;

        // 确保 target 可滚动
        const cs = getComputedStyle(tgt);
        if (!/(auto|scroll|overlay)/.test(cs.overflowY)) tgt.style.overflowY = 'auto';

        let rafTickA = false;
        let rafTickB = false;

        // target -> source：镜像 scroll 事件（必要时同步原生 scrollTop，默认不做）
        const onTargetScroll = () => {
            if (rafTickA) return;
            rafTickA = true;
            requestAnimationFrame(() => {
                rafTickA = false;
                if (syncNative) {
                    try {
                        src.scrollTop = tgt.scrollTop;
                    } catch (e) {
                    }
                }
                // 触发 source 上的 scroll 监听器
                src.dispatchEvent(new Event('scroll', {bubbles: false}));
                if (mirrorGlobal) {
                    window.dispatchEvent(new Event('scroll'));
                    document.dispatchEvent(new Event('scroll'));
                }
            });
        };
        tgt.addEventListener('scroll', onTargetScroll, {passive: true});

        // source -> target：反向同步（默认关闭；只有你非常确定站内不会写回 0 时才打开）
        const onSourceScroll = () => {
            if (!twoWay) return;
            if (rafTickB) return;
            rafTickB = true;
            requestAnimationFrame(() => {
                rafTickB = false;
                try {
                    tgt.scrollTop = src.scrollTop;
                } catch (e) {
                }
                // 让依赖 target 的监听器也感知
                tgt.dispatchEvent(new Event('scroll', {bubbles: false}));
            });
        };
        if (twoWay) src.addEventListener('scroll', onSourceScroll, {passive: true});

        // jQuery 兼容：把 $(source).scrollTop()/height() 映射到 target，并镜像后续 .on('scroll')
        let unpatchJQ = () => {
        };
        if (patchJQuery && window.jQuery) {
            const $ = window.jQuery;
            const _scrollTop = $.fn.scrollTop;
            const _height = $.fn.height;
            const _on = $.fn.on;

            $.fn.scrollTop = function (val) {
                const el = this[0];
                if (el === src) {
                    if (val === undefined) return $(tgt).scrollTop();
                    $(tgt).scrollTop(val);
                    return this;
                }
                return _scrollTop.apply(this, arguments);
            };
            $.fn.height = function () {
                const el = this[0];
                if (el === src) return tgt.clientHeight;
                return _height.apply(this, arguments);
            };
            $.fn.on = function (types, selector, data, fn) {
                const res = _on.apply(this, arguments);
                try {
                    const el = this[0];
                    if (el === src && typeof types === 'string' && /\bscroll\b/.test(types)) {
                        const handler = fn || data || selector;
                        if (typeof handler === 'function') $(tgt).on(types + '.mirror', handler);
                    }
                } catch (e) {
                }
                return res;
            };

            unpatchJQ = () => {
                $.fn.scrollTop = _scrollTop;
                $.fn.height = _height;
                $.fn.on = _on;
            };
        }

        // 初始化：触发一次站内 scroll 检查
        src.dispatchEvent(new Event('scroll', {bubbles: false}));
        window.dispatchEvent(new Event('resize'));

        return {
            teardown() {
                try {
                    tgt.removeEventListener('scroll', onTargetScroll);
                    if (twoWay) src.removeEventListener('scroll', onSourceScroll);
                    unpatchJQ();
                } catch (e) {
                }
                delete src.__bridge_to;
                delete tgt.__bridge_from;
            }
        };
    }

    /**
     * 把 source 的原生滚动 API 代理到 target：
     * - source.scrollTop 读/写  -> target.scrollTop
     * - source.scrollTo / scrollBy -> 调用 target 对应方法
     * 注意：只代理这个实例，不会全局污染。
     */
    function patchNativeScrollProxy(source, target) {
        const src = (typeof source === 'string') ? document.querySelector(source) : source;
        const tgt = (typeof target === 'string') ? document.querySelector(target) : target;
        if (!src || !tgt) return;

        // 幂等
        if (src.__nativeScrollProxiedTo === tgt) return;
        src.__nativeScrollProxiedTo = tgt;

        try {
            // 代理 scrollTop getter/setter
            const desc = Object.getOwnPropertyDescriptor(Element.prototype, 'scrollTop');
            // 某些浏览器把 scrollTop 定义在 HTMLElement.prototype 上
            const proto = desc ? Element.prototype : HTMLElement.prototype;
            const current = Object.getOwnPropertyDescriptor(proto, 'scrollTop');

            Object.defineProperty(src, 'scrollTop', {
                configurable: true,
                get() {
                    return tgt.scrollTop;
                },
                set(v) {
                    tgt.scrollTop = v;
                },
            });
        } catch (e) {
            // 某些环境不允许覆盖；忽略即可（scrollTo/By 仍然能代理）
        }

        // 代理 scrollTo
        const origScrollTo = src.scrollTo?.bind(src);
        src.scrollTo = function (a, b) {
            if (typeof a === 'object' && a) {
                // scrollTo({ top, left, behavior })
                const top = 'top' in a ? a.top : tgt.scrollTop;
                const left = 'left' in a ? a.left : tgt.scrollLeft;
                tgt.scrollTo({top, left, behavior: a.behavior});
            } else {
                // scrollTo(x, y)
                tgt.scrollTo(a || 0, b || 0);
            }
        };

        // 代理 scrollBy
        const origScrollBy = src.scrollBy?.bind(src);
        src.scrollBy = function (a, b) {
            if (typeof a === 'object' && a) {
                const top = 'top' in a ? a.top : 0;
                const left = 'left' in a ? a.left : 0;
                tgt.scrollBy({top, left, behavior: a.behavior});
            } else {
                tgt.scrollBy(a || 0, b || 0);
            }
        };
    }


/////////////////////////////针对站点

    /**
     * 起点
     */
    function qidian() {

        GM_addStyle(`
        #right-container {
            position: unset;
            height: 100%;
        }
        .chapter-end-qrcode {
          display: none;
        }
        .review-icon {
          background: var(--surface-gray-100) !important;
        }
        .review-count {
          color: var(--surface-gray-200) !important;
        }
        .tooltip-wrapper {
            display: none;
        }
        #side-sheet div, #side-sheet section {
            background-color: #FFF;
        }
        .chapter-date {
            background: unset !important;
        }
        button {
            background-color: ${link_bg_color} !important;
            color: ${link_text_color} !important;
        }
        button > span {
            color: ${link_text_color} !important;
        }
        #page-ops {
            // display: none !important;
        }
        
        .excel-table tbody td, .excel-table tbody td p {
            font-family: unset;
        }
        .excel-table tbody td p {
            margin-top: 0 !important;
        }
      
        `);

        const $mainContent = $("main.content");
        const contentId = $mainContent.attr('id');
        const dataType = $mainContent.attr('data-type');
        const $tbody = $(".excel-table tbody");

        //内容
        const scriptContent = $('#vite-plugin-ssr_pageContext').html();
        if (scriptContent && scriptContent.includes('"freeStatus":0')) {
            //免费
            setWordContent($(".chapter-wrapper"));
            setExcelContent($("main.content"), 'p', true);
            setTimeout(function () {
                clearWordContent();
                setWordContent($(".chapter-wrapper"));
                setWordRightContent($("#right-container"));
                setExcelContent($("main.content"), 'p');
                setExcelLines([$(".nav-btn-group")], true);
                observeComments();
                setInfo();
            }, 2000);
        } else {
            if (!$('main.content').hasClass('lock-mask')) {
                //收费
                const targetNode = document.querySelector('main.content');
                const config = {childList: true};
                const callback = function (mutationsList, observer) {
                    for (let mutation of mutationsList) {
                        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                            setWordContent($(".chapter-wrapper"));
                            setWordRightContent($("#right-container"));
                            $tbody.attr("id", contentId);
                            $tbody.attr("data-type", dataType);
                            $tbody.addClass("content");
                            setExcelContent($("main.content"), 'p', true);
                            setTimeout(function () {
                                setExcelContent($("main.content"), 'p');
                                setExcelLines([$(".nav-btn-group")], true);
                            }, 2000);
                            observeComments();
                            setInfo();
                            observer.disconnect();
                            break;
                        }
                    }
                };
                const observer = new MutationObserver(callback);
                observer.observe(targetNode, config);
            } else {
                //未解锁
                setWordContent($(".chapter-wrapper"));
                setExcelLines($(".chapter-wrapper section:not(#r-recommends) > div:not(.download)").toArray());

                // const $loginButton = $("button:contains('登录')");
                // if ($loginButton.length > 0) {
                //     setExcelLines([$loginButton], true);
                // }
            }
        }
        setInfo();

        addExcelStyle(`
             #disguised-page #disguised-body table.excel-table tbody:not(thead) tr .nav-btn-group a {
                font-family: "Microsoft YaHei", "SimSun", sans-serif !important;
            }
            #disguised-page #disguised-body table.excel-table tbody td:not(:nth-child(1)):not(:nth-child(2)) {
                font-family: "Microsoft YaHei", "SimSun", sans-serif !important;
            }
            .nav-btn {
                padding: 0;
            }
            .excel-table button {
                padding: 0;
                font-size: unset;
                line-height: unset;
                height: 20px;
            }
            
        `);

        function observeComments() {
            //本章说
            const targetNode2 = document.querySelector('#side-sheet');
            const callback2 = function (mutationsList, observer) {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        if (mutation.addedNodes.length > 0) {
                            $("#disguised-right-content").show();
                        }
                        if (mutation.removedNodes.length > 0) {
                            $("#disguised-right-content").hide();
                        }
                    }
                }
            };
            const observer2 = new MutationObserver(callback2);
            observer2.observe(targetNode2, {childList: true});
        }

        function setInfo() {
            const titleEl = $('.chapter-wrapper h1.title');
            setDisguisedTitle(titleEl.children().remove().end().text());
            titleEl.hide();

            const infoEl = titleEl.next();
            setWordDetail(infoEl.children());
            infoEl.hide();

            const downloadEl = $('#r-authorSay :contains("下载App")');
            downloadEl.hide();
        }


        setTimeout(function () {
            // 打赏按钮
            const admireBtnEl = $('._admireBtn_131ir_200');
            admireBtnEl.hide();

            $('body').attr('data-theme', 'beige');
        }, 2000);

    }

    /**
     * 番茄
     * e.g. 免费章节 https://fanqienovel.com/reader/7159891022602830375?enter_from=reader
     * e.g. vip章节 https://fanqienovel.com/reader/7226402549753250363?enter_from=reader
     */
    function fanqie() {
        GM_addStyle(`
        .muye-reader-nav {
            display: none !important;
        }
        
        .byte-btn {
            background: ${link_bg_color} !important;
            color: ${link_front_color} !important;
        }
        
        .reader-toolbar {
            display: none;
        }
        
        .muye-reader-box {
            padding-top: 50px;
        }
        
        .excel-table tbody td, .excel-table tbody td p {
            font-family: unset;
        }
        
        p {
            margin: 0;
        }
        
        `);

        setWordContent($(".muye-reader-inner"));
        const titleEl = $('h1.muye-reader-title');
        setDisguisedTitle(titleEl.text());
        titleEl.remove();

        const infoEl = $('.muye-reader-subtitle');
        setWordDetail(infoEl.children());
        infoEl.hide();

        const $readerBox = $('.muye-reader-box');
        const className = $readerBox.attr('class').split(' ').filter(function (cls) {
            return cls.indexOf('font-') === 0;
        })[0];
        let styleAttr = $readerBox.attr('style');
        addExcelStyle(`
        .excel-table tbody td p {
            ${styleAttr}
        }
        `);

        setExcelLines($(".muye-reader-content>div>p").toArray());
        setExcelLines([$(".muye-reader-btns")], true);
        addExcelStyle(`
            .muye-reader-btns button {
                height: 20px !important;
                line-height: 20px !important;
            }
        `);
        $(".muye-reader-btns button").on("click", function () {
            setTimeout(function () {
                location.reload();
            }, 200);
        });

        $(".arco-tooltip").remove();
    }

    /**
     * 笔趣阁
     * biquge.net
     */
    function biquge_net() {

        GM_addStyle(`
        #read_tj {
            display: none;
        }
        
        .section-opt {
            border-top: none !important;
            border-bottom: none !important;
            color: ${link_text_color};
        }
        
        .section-opt a {
            color: ${link_text_color} !important;
        }
        
        .reader-main > a {
            display: none;
        }
        
        `);

        setWordContent($(".reader-main"));
        setDisguisedTitle($(".title").text());
        setExcelContent($("#content"), "p");
        setExcelLines([$(".section-opt").first()], true);
    }

    /**
     * 书香小说
     * xbiqugu.net
     */
    function xbiqugu_net() {
        GM_addStyle(`
        body {
            background-color: #FFF;
        }
        .con_top, #listtj, #content_tip, .bookname>h1, #bdshare, #content>p {
            display: none;
        }
        
        .box_con {
            border: none;
        }
        
        .bookname {
            border-bottom: none;
            color: ${link_text_color};
        }
        
        .bottem2 {
            border-top: none;
            color: ${link_text_color};
            text-align: unset;
            width: unset;
            margin: 0;
            padding: 0;
        }
        
        .bottem1>a, .bottem2>a {
            color: ${link_text_color};
        }
        
        .box_con > table {
            display: none !important;
        }
        
        `);

        $("#content>p").remove();
        setWordContent($(".box_con"));
        setExcelContent($("#content"));
        setExcelLines([$(".bottem2")], true);
        setDisguisedTitle($(".bookname h1").text());
    }

    /**
     * 笔趣阁
     * biquge.co
     */
    function biquge_co() {
        xbiqugu_net();
        GM_addStyle(`
        .lm {
            display: none;
        }
        `);
    }

    /**
     * 笔趣阁
     * www.52wx.com
     */
    function www_52wx_com() {
        GM_addStyle(`
        .hotcmd-box {
            display: none !important;
        }
        #content {
            color: black !important;
        }
        `);
        biquge_net();
        setExcelContent($("#content"));
        setExcelLines([$(".section-opt").first()], true);
    }

    /**
     * 笔趣阁
     * www.3bqg.cc
     */
    function www_3bqg_cc() {
        GM_addStyle(`
        #chaptercontent {
            border-top: none !important;
            border-bottom: none !important;
        }
        
        .content > h1, .content > .link, .readinline {
            display: none !important;
        }
        
        .Readpage a{
            color: ${link_text_color} !important;
            text-shadow: none !important;
        }
        `);
        addExcelStyle(`
            .pagedown {
                padding: 0;
                margin-bottom: 0;
                height: unset;
                line-height: unset;
                text-align: unset;
            }
        `);
        $(".readinline").remove();
        setWordContent($(".content"));
        setDisguisedTitle($(".content>h1").text());
        setExcelContent($("#chaptercontent"));
        setExcelLines([$(".pagedown")], true);
    }

    /**
     * 笔趣阁
     * www.bigee.cc
     */
    function www_bigee_cc() {
        www_3bqg_cc();
    }

    function www_bqg2912_cc() {

        function isChapter() {
            const chapterPattern = /^#\/book\/\d+\/\d+\.html$/;
            return chapterPattern.test(window.location.hash);
        }

        window.addEventListener('hashchange', function () {
            const newHash = window.location.hash;
            console.log("hashchange", newHash);
            location.reload();
        });

        if (isChapter()) {

            const observer = new MutationObserver((mutationsList) => {
                for (const mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        common();
                        www_3bqg_cc();
                        setDisguisedTitle($("#title").text());
                        observer.disconnect();
                    }
                }
            });
            observer.observe($("#chaptercontent").get(0), {childList: true, subtree: false});
        }
    }

    /**
     * 笔趣阁
     * beqege.cc
     */
    function www_beqege_cc() {
        GM_addStyle(`
        .box_con {
            border: none !important;
        }
        
        .read-novel-link, #device, .con_top, .bookname>h1, #test1{
            display: none !important;
        }
        
        .bottem1, .bottem2 {
            border-top: none !important;
            border-bottom: none !important;
        }
        
        .bottem1 a, .bottem2 a {
            color: ${link_text_color} !important;
        }
        `);
        addExcelStyle(`
            .bottem1 {
                text-align: unset;
                margin: 0;
                padding-bottom: 0;
            }
        `);
        setWordContent($(".box_con"));
        setDisguisedTitle($(".bookname>h1").text());
        setExcelContent($("#content"), "p");
        setExcelLines([$(".bottem1")], true);
    }

    /**
     * 笔书网
     * biqukun.com
     */
    function www_biqukun_com() {
        www_beqege_cc();
        GM_addStyle(`
        .lm {
            display: none !important;
        }
        
        .bookname {
            border-bottom: none !important;
        }
        
        .box_con > table {
            display: none !important;
        }
        `);
        setExcelContent($("#content"));
        setExcelLines([$(".bottem2")], true);
    }

    /**
     * 笔趣阁
     * biquge.tw
     */
    function www_biquge_tw() {
        GM_addStyle(`
        #readSet, .book>h1, .chase-book-btn {
            display: none !important;
        }
        
        .read-page, .read-page a {
            border-top: none !important;
            border-bottom: none !important;
            border-left: none !important;
            border-right: none !important;
        }
        
        @media (min-width: 768px) {
            .book {
                padding: unset;
            }
        }
        `);

        setDisguisedTitle($(".book>h1").text());
        setWordContent($(".book"));
        setExcelContent($("#chaptercontent"), "p");
        setExcelLines([$(".read-page").first()], true);
    }

    /**
     * 轻小说文库
     * wenku8.net
     */

    function www_wenku8_net() {
        GM_addStyle(`
        #content {
            padding: 20px;
        }
        
        #foottext {
            text-align: center;
        }
        
        #foottext a {
            color: ${link_text_color};
        }
        `);

        $('#foottext a[href^="http"]').remove();
        $("ul[id='contentdp']").remove();
        setWordContent($("#content"));
        setWordContent($("#foottext"));
        setDisguisedTitle($("#title").text());
        setExcelContent($("#content"));
        setExcelLines([$("#foottext").first()], true);
        addExcelStyle(`
            #foottext {
                text-align: unset;
            }
        `);
    }

    /**
     * 哔哩轻小说
     * www.bilinovel.com
     * 小说阅读页面会跳转到 www.linovelib.com
     * https://www.linovelib.com/novel/4666/275666_2.html, https://www.linovelib.com/novel/2025/251952_2.html 存在部分字体加密
     */
    function linovelib_com() {
        GM_addStyle(`
        .mlfy_page {
            width: 100%;
            background: none !important;
        }
        `);

        $("#mlfy_main_text>h1").hide();
        setWordContent($("#mlfy_main_text"));
        setDisguisedTitle($("#mlfy_main_text>h1").text());
        setWordContent($(".mlfy_page"));
        setExcelContent($("#TextContent"), "p");
        setExcelLines([$(".mlfy_page")], true);
        addExcelStyle(`
        .mlfy_page {
            display: block !important;
            height: unset !important;
            line-height: unset !important;
        }
        .mlfy_page > a {
            line-height: unset !important;
            font-size: 12px;
            width: 80px;
        }
        .mlfy_page > a:hover {
            color: unset !important;
        }
        `);

        // 处理字体加密
        if (config.mode === DICT.MODE.EXCEL) {
            window.addEventListener('load', () => {
                // 如果浏览器支持 adoptedStyleSheets，就优先用它
                const sheets = document.adoptedStyleSheets || [];
                for (const sheet of sheets) {
                    for (const rule of Array.from(sheet.cssRules)) {
                        if (rule.style && rule.style.fontFamily && rule.style.fontFamily.includes('read')) {
                            printLog('找到规则：', rule.selectorText);
                            // 姑且先按 #TextContent p:nth-last-of-type(2) 的形式处理
                            const encryptedIndex = ((sel) => {
                                if (!sel) return null;
                                const m = sel.match(/nth-last-of-type\((\d+)\)/);
                                return m ? +m[1] : null;
                            })(rule.selectorText);
                            printLog('encryptedIndex', encryptedIndex);
                            if (encryptedIndex) {
                                addExcelStyle(`
                                .excel-table tbody tr:nth-last-of-type(${encryptedIndex}) td:nth-child(2) p {
                                    font-family: "read" !important;
                                }
                                `);
                            }

                        }
                    }
                }
            });
        }
    }

    /**
     * bilinovel原站, mac不会跳转linovelib.com
     * 存在字体加密 https://www.bilinovel.com/novel/2025/72668_2.html
     */
    function biilinovel_com() {
        addGlobalStyle(`
        html ins {
            display: none !important;
        }
        `);
        addExcelStyle(`
         table {
            table-layout: auto !important;
            word-break: normal !important;
         }
         table th {
            border-bottom: none !important;
         }
         table tr {
            border-top: none !important;
         }
         .footlink {
            border-top: none !important;
            line-height: unset !important;
            font-size: unset !important;
         }
         .footlink a {
            display: unset !important;
            margin-bottom: unset !important;
            width: unset !important;
            padding: unset !important;
            margin: unset !important;
            margin-right: 10px !important;
            float: unset !important;
        }
        `);

        const $content = $("#acontent");
        const $footLink = $("#footlink");
        setDisguisedTitle($("#atitle").text());
        setWordDetail($(".atitle h3").text());

        setWordContent($content);
        setWordContent($footLink);

        $footLink.css("display", "block");
        setExcelContent($content, "p");
        setExcelLines([$footLink], true);

        // 处理字体加密
        if (config.mode === DICT.MODE.EXCEL) {
            window.addEventListener('load', () => {
                // 如果浏览器支持 adoptedStyleSheets，就优先用它
                const sheets = document.styleSheets || [];
                printLog('sheets', sheets);
                for (const sheet of sheets) {
                    for (const rule of Array.from(sheet.cssRules)) {
                        if (rule.style && rule.style.fontFamily && rule.style.fontFamily.includes('read')) {

                            if (!rule.selectorText || rule.selectorText.includes(".excel-table")) continue;
                            printLog('找到规则：', rule.selectorText);

                            // 姑且先按 #TextContent p:nth-last-of-type(2) 的形式处理
                            const encryptedIndex = ((sel) => {
                                if (!sel) return null;
                                const m = sel.match(/nth-last-of-type\((\d+)\)/);
                                return m ? +m[1] : null;
                            })(rule.selectorText);

                            if (encryptedIndex) {
                                printLog('encryptedIndex', encryptedIndex);
                                addExcelStyle(`
                                .excel-table tbody tr:nth-last-of-type(${encryptedIndex}) td:nth-child(2) p {
                                    font-family: "read" !important;
                                }
                                `);
                            }

                            //如果有 p:last-of-type
                            const isEncryptedLast = ((sel) => {
                                if (!sel) return false;
                                return /p:last-of-type/.test(sel);
                            })(rule.selectorText);
                            if (isEncryptedLast) {
                                addExcelStyle(`
                                .excel-table tbody tr:nth-last-of-type(2) td:nth-child(2) p {
                                    font-family: "read" !important;
                                }
                                `);
                            }
                        }
                    }
                }
            });
        }
    }

    /**
     * 七猫
     * www.qimao.com
     */
    function qimao_com() {
        GM_addStyle(`
        .chapter-tips {
            display: flex;
        }
        .chapter-tips dd, .chapter-tips dt {
            display: flex;
            align-items: center;
        }
        .chapter-tips dd {
            margin-right: 10px;
        }
        .reader-footer {
            padding: 0 !important;
        }
        .qm-btn {
            background-image: none !important;
            border: none !important;
            font-weight: normal !important;
        }
        `);
        setDisguisedTitle($(".chapter-title").text());
        setWordDetail($(".chapter-tips"));
        setWordContent($(".chapter-detail-wrap-content"));
        excelUnsupported();
    }

    /**
     * 晋江
     * www.jjwxc.net
     */
    function jinjiang() {

        GM_addStyle(`
        .novel-pager {
            border: none !important;
            padding: 0 !important;
        }
        h2 {
            display: none;
        }
        #note_danmu_wrapper {
            display: none;
        }
        div[align='right'] {
            display: none;
        }
        `);

        const novelTitle = $("h1 span").text();
        const chapterTitle = $("h2").text();
        setDisguisedTitle(`${novelTitle} ${chapterTitle}`);

        let $content = $(".novelbody").first().children("div");
        const $pager = $(".noveltitle").eq(1).addClass("novel-pager");
        setWordContent($pager.clone());
        setWordContent($content);
        setWordContent($pager.clone());
        setWordDetail(originalTitle);
        $content.children("div").first().remove();
        $content.children("div").last().remove();

        if (config.mode === DICT.MODE.EXCEL) {
            $("h2").remove();
            $("#note_danmu_wrapper").remove();
            $("div[align='right']").remove();

            if ($('.noveltext').length > 0) {
                const fontFamily = $('.noveltext').css('font-family');
                addExcelStyle(`
                    .excel-table tbody td {
                        font-family: ${fontFamily}
                    }
                `);
            }

        } else {
            //这些文字删掉之后又会自动加回来。。
            setTimeout(function () {
                $content.html($content.html().replace(/@无限好文，尽在晋江文学城/g, ''));
            }, 4000);
        }

        setExcelContent($content);
        setExcelLines([$pager], true);
    }

    /**
     * 晋江
     * 购买页面 及付费章节页面
     * e.g. https://my.jjwxc.net/backend/buynovel.php?novelid=4104036&chapterid=21
     * e.g. https://my.jjwxc.net/onebook_vip.php?novelid=4104036&chapterid=21
     */
    function jinjiangBuy() {
        if (window.location.pathname.includes('/backend/buynovel')) {
            const content = '关闭脚本以完成购买';
            setDisguisedTitle(content);
            setWordContent($(`
                <div style="text-align: center;">${content}</div>
            `));
            setExcelLines([content]);
        } else if (window.location.pathname.includes('/onebook_vip.php')) {
            jinjiang();
        }


    }

    /**
     * 轻之国度
     * lightnovel.us
     */
    function lightnovel_us() {

        GM_addStyle(`
        #footer-content>:not(span) {
            display: none;
        }
        #footer-content {
            display: flex;
            align-items: center;
        }
        #footer-content span {
            vertical-align: unset;
            display: flex;
            align-items: center;
        }
        #article-main-contents {
            padding: 15px;
        }
        `);

        hideImages({selector: '#article-main-contents img'});
        registerImageIndicators();

        setWordContent($(".article-content"));
        setExcelContent($("#article-main-contents"));
        setDisguisedTitle($(".article-title").text());
        setWordDetail($(".article-infos").children());
    }

    /**
     * 飞卢小说
     * faloo.com
     */
    function faloo_com() {
        GM_addStyle(`
        .noveContent {
            padding: 15px;
        }
        #footer-content {
            display: flex;
        }
        #footer-content span,  #footer-content a {
            display: flex;
            align-items: center;
        }
        #footer-content img {
            display: none;
        }
        #footer-content div {
            display: none;
        }
        #pageHtml {
            display: flex;
            font-size: 14px !important;
        }
        .next_page_btn {
            font-size: 14px !important;
        }
        #pageHtml img {
            display: none;
        }
        div.noveContent .con_img div:nth-child(2) {
            width: 100% !important;
        }
        .con_img > div {
            width: 100% !important;
        }
        `);
        excelUnsupported();
        setWordContent($(".noveContent"));
        setWordContent($("#pageHtml"));
        setDisguisedTitle($(".c_l_title").text());
        setWordDetail($(".c_l_info").children());
    }

    /**
     * 69书吧
     * 69shuba.cx
     * e.g. https://69shuba.cx/txt/56042/39089569
     */
    function _69shuba_cx() {
        GM_addStyle(`
        .page1 a{
            line-height: normal;
        }
        `);

        setDisguisedTitle($("h1").text());
        setWordDetail($(".txtinfo").text());

        $("h1").remove();
        $(".txtinfo").remove();
        const $txt = $(".txtnav");
        setWordContent($txt);
        setWordContent($(".page1"));
        $txt.find("script").remove();
        setExcelContent($txt);
        setExcelLines([$(".page1")], true);
    }

    /**
     * owlook
     * 基于开源项目owllook搭建的
     * e.g. https://www.owlook.com.cn/owllook_content?url=https://www.bq99.cc/book/141046/42.html&name=%E7%AC%AC%E5%9B%9B%E5%8D%81%E4%B8%80%E7%AB%A0%20%E7%AD%91%E5%9F%BA%E5%8A%9F%E6%B3%95&chapter_url=https://www.bq99.cc/book/141046/&novels_name=%E4%BF%AE%E7%9C%9F%E8%81%8A%E5%A4%A9%E7%BE%A4
     *
     */
    function www_owlook_com_cn() {
        addGlobalStyle(`
            .nd_owllook_pager a {
                color: black;
            }
        `);
        addWordStyle(`
            .nd_owllook_pager {
                text-align: center;
            }
        `);

        $(".readinline").remove();
        setDisguisedTitle($("#content_name").text());
        setWordContent($(".show-content"));
        setExcelContent($(".show-content"));
        const $originalPager = $(".pre_next");
        const $pager = $(`
            <div class="nd_owllook_pager">
                <a href="${$originalPager.children().first().attr('href')}">上一章</a>
                <a href="${$('.left-bar-list > div:first-child>a').attr('href')}">目录</a>
                <a href="${$originalPager.children().last().attr('href')}">下一章</a>
            </div>
        `);
        setWordContent($pager);
        setExcelLines([$pager], true);
    }

    /**
     * 刺猬猫阅读
     * e.g. free https://www.ciweimao.com/chapter/112168341
     * e.g. vip https://www.ciweimao.com/chapter/112171956
     */
    function ciweimao_com() {
        excelUnsupported();

        addGlobalStyle(`
            #footer-content > p {
                display: flex;
                align-items: center;
            }
            #footer-content > p > span {
                margin-right: 10px;
            }
            .book-read-page a {
                background-color: unset;
                border: none;
            }
            .book-read-page a:hover {
                background-color: unset;
                border: none;
            }
        `);

        setTimeout(function () {

            // 读取 bookReadTheme 的值
            const cookieKey = 'bookReadTheme';
            let bookReadTheme = getCookie(cookieKey);
            if (!bookReadTheme) {
                setCookie(cookieKey, 'white%2C3%2C18%2Cundefined%2Ctsu-right%2C0', 365, "." + window.location.hostname);
                location.reload();
            } else if (!bookReadTheme.startsWith('white')) {
                let commaIndex = bookReadTheme.indexOf(',');
                if (commaIndex !== -1) {
                    //改为白色主题
                    let newBookReadTheme = 'white' + bookReadTheme.substring(commaIndex);
                    // 更新cookie并重新加载页面
                    setCookie(cookieKey, newBookReadTheme, 365, "." + window.location.hostname);
                    location.reload();
                }
            }

            setDisguisedTitle($("h1.chapter").text());
            setWordDetail($(".read-hd>p"));
            $("#J_BookRead_WaterMark").remove();
            $("#J_BookRead p span, #J_BookRead p i").remove();
            $("#J_ImgRead i").remove();
            setWordContent($("#J_BookRead"));
            setWordContent($("#J_ImgRead"));
            setWordContent($(".book-read-page"));
        }, 500);


    }

    /**
     * v站 主题
     * e.g. https://www.v2ex.com/t/1142285
     * e.g. https://www.v2ex.com/t/1143210
     * e.g. https://www.v2ex.com/t/803669?p=2
     */
    function v2exThread() {
        setDisguisedTitle($("h1").text());
        setWordDetail($("small"));
        setWordContent($("#Main"));

        hideImages({selector: ".topic_content img.embedded_image"});
        hideImages({selector: ".reply_content img.embedded_image", replaceParent: true});

        if (config.mode === DICT.MODE.EXCEL) {
            const $outdated = $(".outdated");
            let outdatedText = $outdated.text();
            if ($outdated.length > 0) {
                outdatedText = `[ ${outdatedText} ]`;
            }
            setExcelLines([outdatedText], false);

            const $markdownBody = $(".markdown_body");
            if ($markdownBody.length > 0) {
                setExcelLines(
                    $markdownBody
                        .children()
                        .toArray()
                        .flatMap(el => {
                            // https://www.v2ex.com/t/803669
                            const $kids = $markdownBody.children();
                            if ($kids.length === 1 && $kids.eq(0).is('div')) {
                                return $(el).children().get();
                            } else {
                                return [el];
                            }
                        })
                        .flatMap(el => (el.tagName === 'UL' || el.tagName === 'OL' ? [...el.children] : [el]))
                        .flatMap(el =>
                            $(el).html()
                                .split(/<br\s*\/?>/i)
                                .map(s => s.trim())
                        ), true);
            } else {
                setExcelLines(
                    $(".topic_content")
                        .toArray()
                        .flatMap(el =>
                            $(el).html()
                                .split(/<br\s*\/?>/i)
                                .map(s => s.trim())
                        ), true);
            }
            setExcelLines(
                $(".subtle")
                    .toArray()
                    .flatMap(el => {
                            const arr = $(el).find(".topic_content").html()
                                .split(/<br\s*\/?>/i);
                            arr.unshift($(el).children().first().text());
                            return arr;
                        }
                    ), true);
            setExcelLines([$(".topic_buttons")], true);

            const $replyArea = $("#Main :nth-child(2 of .box)");
            const $paginator = $replyArea.find(".ps_container").first();
            addEmptyExcelLines();
            setExcelLines([$replyArea.children().first(), $paginator], true);
            setExcelLines($("div[id^='r_']")
                .toArray()
                .flatMap(el => {
                        const $reply = $(el).find("td").eq(2);
                        const $name = $reply.find("strong");
                        const $badges = $reply.find(".badges");
                        const $ago = $reply.find("span.ago");
                        const $thanks = $reply.children('span').eq(1);
                        const $feedback = $reply.find(".fr").first();
                        $name.css("margin-right", "10px");
                        $badges.css("margin-right", "10px");
                        $ago.css("margin-right", "10px");
                        const $sender = $name.add($ago).add($feedback).add($badges).add($thanks).wrapAll("<span/>");
                        const content = $reply.find(".reply_content").html().split(/<br\s*\/?>/i);
                        return [$sender, ...content];
                    }
                ), true);
            setExcelLines([$paginator.clone()], true);

            const $replyBox = $("#reply-box");
            $replyBox.hide();
            setExcelLines([$replyBox], true);
            const $showReplyBox = $('<span class="disguised-link">显示回复框</span>');
            $showReplyBox.click(function () {
                $replyBox.show();
                $(this).hide();
            });
            $replyBox.before($showReplyBox);

            padExcelBlankLines();
        }

        registerImageIndicators();

        if (config.mode === DICT.MODE.WORD) {
            $("div.header").remove();
            $("div[id^='r_'] tr td:first-child").remove();
        }

        addGlobalStyle(`
        .topic_buttons {
            background: none;
        }
        a.tag:link {
            background-color: unset;
        }
        div.cell {
            border-bottom: none;
        }
        div.ps_container {
            background: none;
        }
        .button {
            background-image: none !important;
        }
        .page_normal:active, .page_normal:link, .page_normal:visited, .page_current {
            box-shadow: none;
            border: none;
        }
        .page_input {
            box-shadow: none;
            border: 1px solid #f1f1f1;
        }
        img[alt='Reply'] {
            filter: brightness(140%) contrast(90%);
        }
        img[alt='❤️'] {
            opacity: 0.2;
        }
        small, small a:link, small a:visited {
            color: black !important;
        }
        .badge {
            color: #a0d9ff !important;
            border-color: #a0d9ff !important;
        }
        .box {
            box-shadow: none;
            border-bottom: 1px solid #F1F1F1 !important;
        }
        `);
        addWordStyle(`
        div.subtle, div.outdated {
           border-left: none;
           border-bottom: none;
        }
        .button {
            padding: 1px !important;
        }
        `);
        addExcelStyle(`
        p {
            margin-block-start: 0;
            margin-block-end: 0;
        }
        .ps_container .page_input {
            padding: 0;
        }
        .button {
            padding: 0 !important;
        }
        `);

    }

    /**
     * v站-列表
     *
     * e.g. https://www.v2ex.com/recent?p=1
     * e.g. https://www.v2ex.com/?tab=creative
     * e.g. https://www.v2ex.com/
     * e.g. https://www.v2ex.com/go/ipad?p=1
     */
    function v2exList() {
        setDisguisedTitle(originalTitle);
        setWordContent($("#Main"));

        setExcelLines([
            $(".node-breadcrumb"),
            $(".topic-count"),
            $(".intro"),
            $(".header"),
            $(".cell_ops"),
            $(".ps_container").first(),
            $("#Tabs"),
            $("#SecondaryTabs")
        ]);
        setExcelLines($(".cell.item").get(), true);
        setExcelLines($("#TopicsNode").children().get(), true);
        setExcelLines([
            $(".ps_container").first(),
            $("#Main").children(".box").eq(0).children().last().filter(".inner"),
            $("#Main .cell.flex-one-row"),
            $(".cell>form"),
        ], true);
        setExcelLines($("strong:contains('V2EX')").parent().parent().parent().children().get(), true);


        $("div.cell.item tr td:nth-child(-n+2)").remove();
        $("div[class*=' t_'] tr td:nth-child(-n+2)").remove();


        addGlobalStyle(`
        div.cell {
            border-bottom: none;
        }
        div.ps_container {
            background: none;
        }
        .button {
            background-image: none !important;
        }
        .page_normal:active, .page_normal:link, .page_normal:visited, .page_current {
            box-shadow: none;
            border: none;
        }
        .page_input {
            box-shadow: none;
            border: 1px solid #f1f1f1;
        }
        .badge {
            color: #a0d9ff !important;
            border-color: #a0d9ff !important;
        }
        .box {
            box-shadow: none;
            border-bottom: 1px solid #F1F1F1 !important;
        }
        .cell_ops {
            box-shadow: none;
        }
        a.count_livid:link {
            background-color: #e5e5e5;
        }
        .page-content-header > img {
            display: none;
        }
        div.intro {
            color: black;
        }
        `);
        addWordStyle(`
        .button {
            padding: 1px !important;
        }
        `);
        addExcelStyle(`
        .ps_container .page_input {
            padding: 0;
        }
        .node-breadcrumb a {
            color: black;
        }
        .header {
            overflow: hidden;
            border: none;
        }
        #SecondaryTabs {
            padding: 0;
        }
        .button {
            padding: 0 !important;
        }
        `);
    }

    /**
     * 可乐小说
     * e.g. https://www.kelexs.com/book/DBIFGD-15.html
     */
    function www_kelexs_com() {
        $("#ad-container").remove();
        addGlobalStyle(`
        html, body {
            text-align: unset;
        }
        .btnW .btnBlack {
            display: unset;
            border: none;
            background-color: ${link_bg_color};
            color: ${link_text_color};
        }
        `);
        addWordStyle(`
        p {
            margin: 16px;
        }
        `);
        addExcelStyle(`
        .btnBlack {
            line-height: unset;
        }
        `);
        setDisguisedTitle($("h1.title").text());
        setWordDetail($("div.about").text());
        setWordContent($("div.content"));
        setWordContent($(".conBox .btnW"));
        setExcelContent($("div.content"), "p");
        setExcelLines([$(".conBox .btnW")], true);
    }

    /**
     * e.g. #contentContainer, svg: https://z-library.ec/book/88886268/431cbe
     * e.g. #innerWrapper, p:  https://z-library.ec/book/29358009/64db39
     */
    function z_library() {

        excelUnsupported();

        addGlobalStyle(`
        #contentContainer > .page {
            width: unset !important;
            box-shadow: none !important;
        }
        .control-cell_big {
            justify-content: unset;
        }
        #pageControls {
            margin-top: 1px;
        }
        #disguised-content div {
            background-color: rgba(0, 0, 0, 0) !important;
        }
        `);

        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.id === 'container') {
                            observer.disconnect();
                            setWordContent($("#innerWrapper"));
                            zLibraryCommon();
                        } else if (node.id === 'viewer-wrapper') {
                            observer.disconnect();
                            setWordContent($("#contentContainer"));
                            zLibraryCommon();
                        }
                    });
                }
            }
        });
        observer.observe($("#idrviewer").get(0), {childList: true, subtree: false});

        const titleObserver = new MutationObserver(function (mutationsList) {
            mutationsList.forEach(function (mutation) {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    titleObserver.disconnect();
                    setDisguisedTitle($("#bookTitle").text());
                    overridePageTitle();
                }
            });
        });
        titleObserver.observe($("#bookTitle").get(0), {childList: true, characterData: true, subtree: true});

        function zLibraryCommon() {
            setWordDetail($("#pageControls"));
            const {teardown} = bridgeScrollContainers('#idrviewer', '#disguised-body', {
                twoWay: false,
                patchJQuery: true,
                mirrorGlobal: false,
                syncNative: false
            });
            patchNativeScrollProxy('#idrviewer', '#disguised-body');
        }

    }

    /**
     * 笔趣阁 www.22biqu.com
     * e.g. https://www.22biqu.com/biqu77953/49231312.html
     */
    function www_22biq_com() {
        $(".hotcmd-box").remove();
        biquge_net();
    }

    /**
     * 手机小说
     * e.g. https://www.shoujix.com/shoujixs_217188_57820123.html
     */
    function www_shoujix_com() {
        $(".lm").remove();
        addGlobalStyle(`
        .bookname {
            border-bottom: none;
        }
        `);
        www_beqege_cc();
    }

///////////////////////////// 站点结束

    // 切换原版界面
    document.addEventListener('keydown', function (event) {
        // 判断是否按下 E 键
        if (event.key === 'e' && !event.ctrlKey && !event.altKey && !event.metaKey) {
            if (config.mode === DICT.MODE.ORIGINAL) {
                applyMode(config.lastVisibleMode);
            } else {
                applyMode(DICT.MODE.ORIGINAL);

            }
        }
    });

    //如果是原始模式
    if (config.mode === DICT.MODE.ORIGINAL) {
        addGlobalStyle(`
        .nd-switch-indicator {
            position: fixed;
            top: 10px;
            right: 10px;
            display: flex;
            flex-direction: row;
            align-items: center;
            height: auto;
            padding: 2rem;
            border-radius: 1rem;
            background: rgba(255, 255, 255, 0.6);
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
            color: black;
            font-size: 14px;
        }
        
        .nd-switch-key {
            border: solid 1px black;
            border-radius: 8px;
            width: 1.5rem;
            height: 1.5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 5px;
        }
        `);
        const $indicator = $(`<div class="nd-switch-indicator">按<div class="nd-switch-key">E</div>键开启伪装</div>`);
        $indicator.appendTo(document.body);
        return;
    }

    // main
    // 这里不再统一执行common(), 而是改为在switch中执行, 因为某些域名需要根据情况判断是否执行common()

    const currentHost = window.location.host;
    const currentPathName = window.location.pathname;
    const currentHash = window.location.hash;
    printLog('currentHost', currentHost);
    printLog('currentPathName', currentPathName);
    printLog('currentHash', currentHash);

    switch (currentHost) {
        case 'www.qidian.com':
            common();
            qidian();
            break;
        case 'fanqienovel.com':
            common();
            fanqie();
            break;
        case `www.biquge.net`:
            common();
            biquge_net();
            break;
        case 'www.xbiqugu.net':
        case 'www.xbiqugu.la':
            common();
            xbiqugu_net();
            break;
        case 'www.biquge.co':
            common();
            biquge_co();
            break;
        case 'www.52wx.com':
            common();
            www_52wx_com();
            break;
        case 'www.3bqg.cc':
            common();
            www_3bqg_cc();
            break;
        case 'www.bigee.cc':
            common();
            www_bigee_cc();
            break;
        case 'www.bqg2912.cc':
        case 'bqg2912.cc':
        case 'www.bqg955.xyz':
        case 'bqg955.xyz':
            www_bqg2912_cc();
            break;
        case 'www.beqege.cc':
            common();
            www_beqege_cc();
            break;
        case 'www.biqukun.com':
        case 'www.biqukun.org':
            common();
            www_biqukun_com();
            break;
        case 'www.biquge.tw':
            common();
            www_biquge_tw();
            break;
        case 'www.wenku8.net':
            common();
            www_wenku8_net();
            break;
        case 'www.linovelib.com':
            common();
            linovelib_com();
            break;
        case 'www.bilinovel.com':
            common();
            biilinovel_com();
            break;
        case 'www.qimao.com':
            common();
            qimao_com();
            break;
        case 'www.jjwxc.net':
            common();
            jinjiang();
            break;
        case 'my.jjwxc.net':
            common();
            jinjiangBuy();
            break;
        case 'www.lightnovel.us':
            common();
            lightnovel_us();
            break;
        case 'b.faloo.com':
            common();
            faloo_com();
            break;
        case '69shuba.cx':
        case 'www.69shuba.com':
            common();
            _69shuba_cx();
            break;
        case 'www.owlook.com.cn':
        case 'owlook.com.cn':
            common();
            www_owlook_com_cn();
            break;
        case 'www.ciweimao.com':
            common();
            ciweimao_com();
            break;
        case 'www.v2ex.com':
            common();
            if (currentPathName.startsWith('/t/')) {
                v2exThread();
            } else if (currentPathName.startsWith('/go/') || currentPathName.startsWith('/recent') || currentPathName === '/') {
                v2exList();
            }
            break;
        case 'www.kelexs.com':
            common();
            www_kelexs_com();
            break;
        case 'reader.z-library.ec':
        case 'reader.z-library.sk':
            common();
            z_library();
            break;
        case 'www.22biqu.com':
            common();
            www_22biq_com();
            break;
        case 'www.shoujix.com':
            common();
            www_shoujix_com();
            break;
        default:
            printLog("error", "当前站点未适配");

    }

    GM_registerMenuCommand("设置", settings);

    printLog("novel-disguise 载入完成");
})
();
