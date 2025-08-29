// ==UserScript==
// @name           novel-disguise-resource
// @version        0.0.1
// @license        MIT
// @author         NiaoBlush
// ==/UserScript==


;(function (global) {
    const IMAGES = {
        word: {
            office: {
                '1k': {
                    light: 'data:image/png;base64,BASE64_WORD_OFFICE_1K_LIGHT',
                    dark:  'data:image/png;base64,BASE64_WORD_OFFICE_1K_DARK'
                },
                '2k': {
                    light: 'data:image/png;base64,BASE64_WORD_OFFICE_2K_LIGHT',
                    dark:  'data:image/png;base64,BASE64_WORD_OFFICE_2K_DARK'
                },
                '4k': {
                    light: 'data:image/png;base64,BASE64_WORD_OFFICE_4K_LIGHT',
                    dark:  'data:image/png;base64,BASE64_WORD_OFFICE_4K_DARK'
                }
            },
            wps: {
                '1k': {
                    light: 'data:image/png;base64,BASE64_WORD_WPS_1K_LIGHT',
                    dark:  'data:image/png;base64,BASE64_WORD_WPS_1K_DARK'
                },
                '2k': {
                    light: 'data:image/png;base64,BASE64_WORD_WPS_2K_LIGHT',
                    dark:  'data:image/png;base64,BASE64_WORD_WPS_2K_DARK'
                },
                '4k': {
                    light: 'data:image/png;base64,BASE64_WORD_WPS_4K_LIGHT',
                    dark:  'data:image/png;base64,BASE64_WORD_WPS_4K_DARK'
                }
            }
        },
        excel: {
            office: {
                '1k': {
                    light: 'data:image/png;base64,BASE64_EXCEL_OFFICE_1K_LIGHT',
                    dark:  'data:image/png;base64,BASE64_EXCEL_OFFICE_1K_DARK'
                },
                '2k': {
                    light: 'data:image/png;base64,BASE64_EXCEL_OFFICE_2K_LIGHT',
                    dark:  'data:image/png;base64,BASE64_EXCEL_OFFICE_2K_DARK'
                },
                '4k': {
                    light: 'data:image/png;base64,BASE64_EXCEL_OFFICE_4K_LIGHT',
                    dark:  'data:image/png;base64,BASE64_EXCEL_OFFICE_4K_DARK'
                }
            },
            wps: {
                '1k': {
                    light: 'data:image/png;base64,BASE64_EXCEL_WPS_1K_LIGHT',
                    dark:  'data:image/png;base64,BASE64_EXCEL_WPS_1K_DARK'
                },
                '2k': {
                    light: 'data:image/png;base64,BASE64_EXCEL_WPS_2K_LIGHT',
                    dark:  'data:image/png;base64,BASE64_EXCEL_WPS_2K_DARK'
                },
                '4k': {
                    light: 'data:image/png;base64,BASE64_EXCEL_WPS_4K_LIGHT',
                    dark:  'data:image/png;base64,BASE64_EXCEL_WPS_4K_DARK'
                }
            }
        }
    }

    function getImage({ app, theme, size, scheme }) {
        const a = String(app || '').toLowerCase()
        const t = String(theme || '').toLowerCase()
        const s = String(size || '').toLowerCase()
        const m = (scheme || 'light').toLowerCase()

        // 容错：如果不存在，尝试回退
        const byApp = IMAGES[a]
        if (!byApp) return null
        const byTheme = byApp[t] || byApp.office || byApp.wps
        if (!byTheme) return null
        const bySize = byTheme[s] || byTheme['2k'] || byTheme['1k'] || byTheme['4k']
        if (!bySize) return null
        return bySize[m] || bySize.light || null
    }

    // 可选：导出所有键，方便做下拉/校验
    const meta = {
        apps: Object.keys(IMAGES),
        themes: ['office', 'wps'],
        sizes: ['1k', '2k', '4k'],
        schemes: ['light', 'dark']
    }

    global.ThemeImages = {
        getImage,
        meta,
        data: IMAGES
    }
})(this)
