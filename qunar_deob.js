(function(e) {
    var t = {
        id: "7393e3bde0cacc766d44ba0a125904a8",
        filename: "seceye.js",
        exports: {}
    };
    if (!e.____MODULES) {
        e.____MODULES = {}
    }
    var n = function(e, t, n) {
        (function(e) {
            if (!e['QSecPusher']) {
                var c = {},
                    h = {},
                    p = {},
                    d = {},
                    v = {},
                    m = {};
                try {
                    c['addEvent'] = function(c, h, p, d) {
                        if (e['addEventListener']) {
                            if ((h === 'mousewheel' || h === 'wheel') && document.mozFullScreen !== undefined) {
                                h = 'DOMMouseScroll'
                            }
                            c['addEventListener'](h, p, d || false)
                        } else if (e['attachEvent']) {
                            c['attachEvent']('on' + h, p)
                        }
                    };
                    c['imageSend'] = function(n) {
                        var i = new Image,
                            c = '__action_img_' + Math.random();
                        e[c] = i;
                        i['onload'] = i['onerror'] = function() {
                            e[c] = null
                        };
                        i['src'] = n
                    };
                    c['uuid'] = function() {
                        if (c['pageUuid']) {
                            return c['pageUuid']
                        }
                        var e = [];
                        var h = '0123456789abcdef';
                        for (var p = 0; p < 36; p++) {
                            e[p] = h.substr(Math.floor(Math.random() * 16), 1)
                        }
                        e[14] = '4';
                        e[19] = h.substr(e[19] & 3 | 8, 1);
                        e[8] = e[13] = e[18] = e[23] = '-';
                        c['pageUuid'] = e.join("");
                        return c['pageUuid']
                    };
                    c['getTime'] = function() {
                        return new Date().getTime();
                    };
                    c['keyCodeName'] = {
                        8: 'bs',
                        9: 'tab',
                        12: 'cle',
                        13: 'en',
                        19: 'pa',
                        20: 'cap',
                        27: 'esc',
                        32: 'sp',
                        33: 'pg',
                        34: 'pd',
                        35: 'end',
                        36: 'hm',
                        37: 'le',
                        38: 'up',
                        39: 'ri',
                        40: 'do',
                        41: 'se',
                        42: 'pt',
                        43: 'exe',
                        45: 'in',
                        46: 'del',
                        47: 'hp',
                        112: 'f1',
                        113: 'f2',
                        114: 'f3',
                        115: 'f4',
                        116: 'f5',
                        117: 'f6',
                        118: 'f7',
                        119: 'f8',
                        120: 'f9',
                        121: 'f10',
                        122: 'f11',
                        123: 'f12',
                        144: 'nl',
                        145: 'sl',
                        16: 'sft',
                        17: 'ctl',
                        18: 'alt',
                        91: 'win',
                        93: 'cm'
                    };
                    c['encode'] = function(e, c) {
                        var h = "";
                        var p = e.length % 3;
                        switch (p) {
                            case 0:
                                break;
                            case 1:
                                e += "\0\0";
                                break;
                            case 2:
                                e += "\0";
                                break
                        }
                        var d = 0,
                            v = 'abcdefghijklmnopqrstuvwxyz_1234567890-ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                        for (var m = e.length - 1; m >= 0; m -= 3) {
                            var g = e.charCodeAt(m) ^ c >>> 8 * (d++ % 4) & 255;
                            g |= (e.charCodeAt(m - 1) ^ c >>> 8 * (d++ % 4) & 255) << 8;
                            g |= (e.charCodeAt(m - 2) ^ c >>> 8 * (d++ % 4) & 255) << 16;
                            h += v.charAt(g & 63);
                            h += v.charAt(g >>> 6 & 63);
                            h += v.charAt(g >>> 12 & 63);
                            h += v.charAt(g >>> 18 & 63)
                        }
                        return h
                    };
                    c['send_ex'] = function(e) {
                        var h = 'https://security.qunar.com/api/gather/m.gif?e=' + e;
                        c.imageSend(h)
                    };
                    h['threshold'] = 100;
                    h['create'] = function() {
                        h.init();
                        c.addEvent(e.document, 'mousemove', function(e) {
                            h['action_listener'](e)
                        }, false);
                        return h
                    };

                    h['init'] = function() {
                        this.track_data = [];
                        this.count = 0
                    };

                    h['action_listener'] = function(h) {
                        var p = h || e.event;
                        var d = p['clientX'];
                        var v = p['clientY'];
                        this.count++;
                        this['track_data'].push([c.getTime(), d, v])
                    };
                    h['get_count'] = function() {
                        return this.count
                    };
                    h['product'] = function() {
                        var e = this['track_data'];
                        this['track_data'] = [];
                        var c = [];
                        if (e.length > 0) {
                            var h = e[0];
                            c.push(h[0] + ':' + h[1] + ':' + h[2]);
                            var p = e.length / this['threshold'];
                            var d = 1;
                            var v = 1;
                            while (d < e.length) {
                                var m = e[d];
                                var g = parseInt(m[0]) - parseInt(h[0]);
                                var y = parseInt(m[1]) - parseInt(h[1]);
                                var b = parseInt(m[2]) - parseInt(h[2]);
                                c.push(g + ':' + y + ':' + b);
                                if (p < 1) {
                                    d = d + 1
                                } else {
                                    v = v + 1;
                                    d = parseInt(v * p)
                                }
                            }
                        }
                        return c.join('_')
                    };
                    p['threshold'] = 100;
                    p['create'] = function() {
                        p['init']();
                        c['addEvent'](e.document, 'keydown', function(e) {
                            p['down_listener'](e)
                        }, false);
                        c['addEvent'](e.document, 'keypress', function(e) {
                            p['press_listener'](e)
                        }, false);
                        return p
                    };
                    p['init'] = function() {
                        this['key_data'] = [];
                        this['count'] = 0
                    };
                    p['down_listener'] = function(h) {
                        var p = h || e['event'];
                        if (!p) {
                            this['count']++;
                            return
                        }
                        if (!p['target'] || p['target']['type'] != 'password') {
                            var d = p['keyCode'] || p['which'] || p['charCode'];
                            if (c['keyCodeName'][d]) {
                                this['key_data'].push([c.getTime(), c['keyCodeName'][d]]);
                                this['count']++
                            }
                        }
                    };
                    p['press_listener'] = function(h) {
                        var p = h || e['event'];
                        if (!p) {
                            this['count']++;
                            return
                        }
                        if (!p['target'] || p['target']['type'] != 'password') {
                            var d = p['keyCode'] || p['which'] || p['charCode'];
                            if (d > 32 && d < 127) {
                                var v = false;
                                var m = /Firefox[\/\s](\d+)/.test(navigator['userAgent']);
                                if (m) {
                                    var g = p['key'];
                                    if (g && g.length == 1) {
                                        v = true
                                    }
                                } else {
                                    v = true
                                }
                                if (v) {
                                    if (p['shiftKey'] || p['altKey'] || p['ctrlKey']) {
                                        var y = this['key_data']['pop']();
                                        if (!(y[1] == "sft" || y[1] == "ctl" || y[1] == "alt")) {
                                            this['key_data'].push(y)
                                        }
                                    }
                                    this['key_data'].push([c.getTime(), d]);
                                    this['count']++
                                }
                            }
                        }
                    };
                    p['get_count'] = function() {
                        return this['count']
                    };
                    p['product'] = function() {
                        var e = this['key_data'];
                        this['key_data'] = [];
                        var c = [];
                        if (e.length > 0) {
                            var h = e.length / this['threshold'];
                            var p = e[0];
                            var d = 1;
                            var v = 1;
                            c.push(p[0] + ':' + p[1]);
                            while (d < e.length) {
                                var m = e[d];
                                var g = parseInt(m[0]) - parseInt(p[0]);
                                c.push(g + ':' + m[1]);
                                if (h < 1) {
                                    d = d + 1
                                } else {
                                    v = v + 1;
                                    d = parseInt(v * h)
                                }
                            }
                        }
                        return c.join('_')
                    };
                    d['threshold'] = 100;
                    d['create'] = function() {
                        d['init']();
                        c['addEvent'](e.document, 'mousedown', function(e) {
                            d['action_listener'](e)
                        }, false);
                        return d
                    };
                    d.init = function() {
                        this['mouse_data'] = [];
                        this['left_count'] = 0;
                        this['mid_count'] = 0;
                        this['right_count'] = 0
                    };
                    d['action_listener'] = function(h) {
                        var p = h || e['event'];
                        this['mouse_data'].push([c.getTime(), p['button']]);
                        if (e['IE_F']) {
                            if (p['button'] == 1) {
                                this['left_count']++
                            } else if (p['button'] == 4) {
                                this['mid_count']++
                            } else if (p['button'] == 2) {
                                this['right_count']++
                            }
                            return
                        }
                        if (p['button'] == 0) {
                            this['left_count']++
                        } else if (p['button'] == 1) {
                            this['mid_count']++
                        } else {
                            this['right_count']++
                        }
                    };
                    d['get_count'] = function() {
                        var e = [];
                        e.push(this['left_count']);
                        e.push(this['mid_count']);
                        e.push(this['right_count']);
                        return e.join("_")
                    };
                    d['product'] = function() {
                        var e = this['mouse_data'];
                        this['mouse_data'] = [];
                        var c = [];
                        if (e.length > 0) {
                            var h = e[0];
                            c.push(h[0] + ':' + h[1]);
                            var p = e.length / this['threshold'];
                            var d = 1;
                            var v = 1;
                            while (d < e.length) {
                                var m = e[d];
                                var g = parseInt(m[0]) - parseInt(h[0]);
                                c.push(g + ':' + m[1]);
                                if (p < 1) {
                                    d = d + 1
                                } else {
                                    v = v + 1;
                                    d = parseInt(v * p)
                                }
                            }
                        }
                        return c.join('_')
                    };
                    v['threshold'] = 100;
                    v['create'] = function() {
                        v['init']();
                        var h = 'wheel';
                        if (e['IE_F']) {
                            h = 'mousewheel'
                        }
                        c.addEvent(e.document, h, function(e) {
                            v['action_listener'](e)
                        }, false);
                        return v
                    };
                    v['init'] = function() {
                        this['data'] = [];
                        this['count'] = 0
                    };
                    v['action_listener'] = function(h) {
                        var p = h || e['event'];
                        if (!p) {
                            this['count']++;
                            return
                        }
                        if (!p['wheelDelta']) {
                            this['count']++;
                            return
                        }
                        var d = p['wheelDelta'] ? p['wheelDelta'] / 120 : -(p['detail'] || 0) / 3;
                        this['data'].push([c.getTime(), d]);
                        this['count']++
                    };
                    v['get_count'] = function() {
                        return this['count']
                    };
                    v['product'] = function() {
                        var e = this['data'];
                        this['data'] = [];
                        var c = [];
                        if (e.length > 0) {
                            var h = e[0];
                            c.push(h[0] + ':' + h[1]);
                            var p = e.length / this['threshold'];
                            var d = 1;
                            var v = 1;
                            while (d < e.length) {
                                var m = e[d];
                                var g = parseInt(m[0]) - parseInt(h[0]);
                                c.push(g + ':' + m[1]);
                                if (p < 1) {
                                    d = d + 1
                                } else {
                                    v = v + 1;
                                    d = parseInt(v * p)
                                }
                            }
                        }
                        return c.join('_')
                    };
                    m['create'] = function() {
                        m['init']();
                        return m
                    };
                    m['init'] = function() {
                        this['runner'] = [];
                        this['start_time'] = (new Date).getTime();
                        var h = this;
                        c['addEvent'](e.document, 'beforeunload', function(e) {
                            h['run'](true, false)
                        }, false)
                    };
                    m['add_runner'] = function(e) {
                        this['runner'].push(e)
                    };
                    m['device_info'] = function() {
                        return [e.document.body.clientHeight.toString(36), e.document.body.clientWidth.toString(36), e.screen.height.toString(36), e.screen.width.toString(36), e.screen.colorDepth.toString(36)].join("_")
                    };
                    m.run = function(e, h) {
                        try {
                            var p = [];
                            var d = [];
                            for (var v = 0; v < this.runner.length; v++) {
                                p.push(this.runner[v]['product']());
                                d.push(this.runner[v]['get_count']())
                            }
                            var m = (new Date).getTime() - this['start_time'];
                            var g = p.join('#');
                            if (g.length > p.length - 1 || h) {
                                var y = "";
                                var b = this['device_info']();
                                if (!h) {
                                    y = "d=" + c.encode(c.uuid() + '#' + g + '#' + m + '#' + b + '#' + d.join('_'), 128)
                                } else {
                                    y = "f=" + c.encode(c.uuid() + '#' + document.referrer + '#' + b + '#' + d.join('_'), 128)
                                }
                                var w = 'https://security.qunar.com/api/gather/ac.gif?' + y;
                                c.imageSend(w)
                            }
                        } catch (E) {
                            c['send_ex'](E)
                        }
                    };
                    if (!!e['ActiveXObject'] || 'ActiveXObject' in e) {
                        e['IE_F'] = true
                    }
                    var g = h.create();
                    var y = p.create();
                    var b = d.create();
                    var w = v.create();
                    var m = m.create();
                    m['add_runner'](g);
                    m['add_runner'](y);
                    m['add_runner'](b);
                    m['add_runner'](w);
                    m.run(false, true);
                    e['setInterval'](function() {
                        m.run(false, false)
                    }, 5e3);
                    e['QSecPusher'] = m
                } catch (E) {
                    c['send_ex'](E)
                }
            }
        })(window)
    }(t.exports, t, e);
    e.____MODULES["7393e3bde0cacc766d44ba0a125904a8"] = t.exports
})(this);