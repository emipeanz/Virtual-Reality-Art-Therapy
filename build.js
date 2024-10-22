!function (e) {
    function t(r) {
        if (i[r]) return i[r].exports;
        var s = i[r] = {exports: {}, id: r, loaded: !1};
        return e[r].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
    }

    var i = {};
    return t.m = e, t.c = i, t.p = "", t(0)
}([function (e, t, i) {
    window.saveAs = i(1).saveAs, i(4), i(6), i(7), i(8), i(9), i(10), i(11), i(12), i(13), i(14), i(15), i(16), i(17), i(18), i(19), i(20), i(21), i(22), i(23), i(25), i(26), i(27), i(28), i(29)
}, function (e, t, i) {
    var r, s, n = n || function (e) {
        "use strict";
        if (!("undefined" == typeof e || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
            var t = e.document, i = function () {
                return e.URL || e.webkitURL || e
            }, r = t.createElementNS("http://www.w3.org/1999/xhtml", "a"), s = "download" in r, n = function (e) {
                var t = new MouseEvent("click");
                e.dispatchEvent(t)
            }, a = /constructor/i.test(e.HTMLElement), o = /CriOS\/[\d]+/.test(navigator.userAgent), h = function (t) {
                (e.setImmediate || e.setTimeout)(function () {
                    throw t
                }, 0)
            }, u = "application/octet-stream", c = 4e4, d = function (e) {
                var t = function () {
                    "string" == typeof e ? i().revokeObjectURL(e) : e.remove()
                };
                setTimeout(t, c)
            }, l = function (e, t, i) {
                t = [].concat(t);
                for (var r = t.length; r--;) {
                    var s = e["on" + t[r]];
                    if ("function" == typeof s) try {
                        s.call(e, i || e)
                    } catch (e) {
                        h(e)
                    }
                }
            }, m = function (e) {
                return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], {type: e.type}) : e
            }, p = function (t, h, c) {
                c || (t = m(t));
                var p, f = this, b = t.type, g = b === u, v = function () {
                    l(f, "writestart progress write writeend".split(" "))
                }, E = function () {
                    if ((o || g && a) && e.FileReader) {
                        var r = new FileReader;
                        return r.onloadend = function () {
                            var t = o ? r.result : r.result.replace(/^data:[^;]*;/, "data:attachment/file;"),
                                i = e.open(t, "_blank");
                            i || (e.location.href = t), t = void 0, f.readyState = f.DONE, v()
                        }, r.readAsDataURL(t), void (f.readyState = f.INIT)
                    }
                    if (p || (p = i().createObjectURL(t)), g) e.location.href = p; else {
                        var s = e.open(p, "_blank");
                        s || (e.location.href = p)
                    }
                    f.readyState = f.DONE, v(), d(p)
                };
                return f.readyState = f.INIT, s ? (p = i().createObjectURL(t), void setTimeout(function () {
                    r.href = p, r.download = h, n(r), v(), d(p), f.readyState = f.DONE
                })) : void E()
            }, f = p.prototype, b = function (e, t, i) {
                return new p(e, t || e.name || "download", i)
            };
            return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (e, t, i) {
                return t = t || e.name || "download", i || (e = m(e)), navigator.msSaveOrOpenBlob(e, t)
            } : (f.abort = function () {
            }, f.readyState = f.INIT = 0, f.WRITING = 1, f.DONE = 2, f.error = f.onwritestart = f.onprogress = f.onwrite = f.onabort = f.onerror = f.onwriteend = null, b)
        }
    }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
    "undefined" != typeof e && e.exports ? e.exports.saveAs = n : null !== i(2) && null !== i(3) && (r = [], s = function () {
        return n
    }.apply(t, r), !(void 0 !== s && (e.exports = s)))
}, function (e, t) {
    e.exports = function () {
        throw new Error("define cannot be used indirect")
    }
}, function (e, t) {
    (function (t) {
        e.exports = t
    }).call(t, {})
}, function (e, t, i) {
    function r() {
        this.map = (new THREE.TextureLoader).load("assets/images/" + s.meta.image)
    }

    const s = i(5);
    r.prototype = {
        getUVConverters: function (e) {
            return e ? (e = e.replace("brushes/", ""), {
                convertU: function (t) {
                    var i = s.meta.size, r = s.frames[e];
                    return (t > 1 || t < 0) && (t = 0), r.frame.x / i.w + t * r.frame.w / i.w
                }, convertV: function (t) {
                    var i = s.meta.size, r = s.frames[e];
                    return (t > 1 || t < 0) && (t = 0), 1 - (r.frame.y / i.h + t * r.frame.h / i.h)
                }
            }) : {convertU: function(e)
            {
                return
                e
            }
        ,
            convertV:function (e) {
                return e
            }
        }
        }
    }, window.atlas = new r
}, function (e, t) {
    e.exports = {
        meta: {image: "brush_atlas.png", size: {w: 3584, h: 2944}, scale: "1"}, frames: {
            "stamp_grass.png": {
                frame: {x: 0, y: 128, w: 1536, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1536, h: 512},
                sourceSize: {w: 1536, h: 512}
            },
            "lines4.png": {
                frame: {x: 0, y: 0, w: 2048, h: 128},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 2048, h: 128},
                sourceSize: {w: 2048, h: 128}
            },
            "stamp_fur2.png": {
                frame: {x: 0, y: 640, w: 1536, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1536, h: 512},
                sourceSize: {w: 1536, h: 512}
            },
            "stamp_bush.png": {
                frame: {x: 0, y: 1152, w: 1024, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 512},
                sourceSize: {w: 1024, h: 512}
            },
            "stamp_gear.png": {
                frame: {x: 1024, y: 1152, w: 1024, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 512},
                sourceSize: {w: 1024, h: 512}
            },
            "stamp_fur1.png": {
                frame: {x: 2048, y: 0, w: 1024, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 512},
                sourceSize: {w: 1024, h: 512}
            },
            "lines3.png": {
                frame: {x: 2048, y: 512, w: 1024, h: 256},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 256},
                sourceSize: {w: 1024, h: 256}
            },
            "line_gradient.png": {
                frame: {x: 2048, y: 768, w: 1024, h: 256},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 256},
                sourceSize: {w: 1024, h: 256}
            },
            "lines5.png": {
                frame: {x: 2048, y: 1024, w: 1024, h: 256},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 256},
                sourceSize: {w: 1024, h: 256}
            },
            "silky_flat.png": {
                frame: {x: 2048, y: 1280, w: 1024, h: 256},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 256},
                sourceSize: {w: 1024, h: 256}
            },
            "silky_textured.png": {
                frame: {x: 0, y: 1664, w: 1024, h: 256},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 256},
                sourceSize: {w: 1024, h: 256}
            },
            "squared_textured.png": {
                frame: {x: 1024, y: 1664, w: 1024, h: 256},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 256},
                sourceSize: {w: 1024, h: 256}
            },
            "line_grunge2.png": {
                frame: {x: 2048, y: 1664, w: 1024, h: 256},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 256},
                sourceSize: {w: 1024, h: 256}
            },
            "line_grunge3.png": {
                frame: {x: 0, y: 1920, w: 1024, h: 256},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 256},
                sourceSize: {w: 1024, h: 256}
            },
            "line_grunge1.png": {
                frame: {x: 1024, y: 1920, w: 1024, h: 256},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 256},
                sourceSize: {w: 1024, h: 256}
            },
            "lines2.png": {
                frame: {x: 2048, y: 1920, w: 1024, h: 256},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 1024, h: 256},
                sourceSize: {w: 1024, h: 256}
            },
            "stamp_leaf3.png": {
                frame: {x: 1536, y: 128, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            },
            "stamp_dots.png": {
                frame: {x: 1536, y: 640, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            },
            "thumb_stamp_star.png": {
                frame: {x: 2304, y: 1536, w: 128, h: 128},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 128, h: 128},
                sourceSize: {w: 128, h: 128}
            },
            "stamp_grunge1.png": {
                frame: {x: 512, y: 2176, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            },
            "stamp_grunge2.png": {
                frame: {x: 1024, y: 2176, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            },
            "stamp_grunge3.png": {
                frame: {x: 1536, y: 2176, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            },
            "stamp_grunge4.png": {
                frame: {x: 2048, y: 2176, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            },
            "stamp_grunge5.png": {
                frame: {x: 2560, y: 2176, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            },
            "stamp_leaf1.png": {
                frame: {x: 3072, y: 0, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            },
            "stamp_leaf2.png": {
                frame: {x: 3072, y: 512, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            },
            "stamp_column.png": {
                frame: {x: 3072, y: 1024, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            },
            "stamp_snow.png": {
                frame: {x: 3072, y: 1536, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            },
            "stamp_squares.png": {
                frame: {x: 3072, y: 2048, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            },
            "lines1.png": {
                frame: {x: 0, y: 2688, w: 256, h: 256},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 256, h: 256},
                sourceSize: {w: 256, h: 256}
            },
            "thumb_rainbow.png": {
                frame: {x: 3072, y: 2560, w: 128, h: 128},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 128, h: 128},
                sourceSize: {w: 128, h: 128}
            },
            "thumb_single_sphere.png": {
                frame: {x: 3200, y: 2560, w: 128, h: 128},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 128, h: 128},
                sourceSize: {w: 128, h: 128}
            },
            "thumb_stamp_fur1.png": {
                frame: {x: 3328, y: 2560, w: 128, h: 128},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 128, h: 128},
                sourceSize: {w: 128, h: 128}
            },
            "thumb_stamp_fur2.png": {
                frame: {x: 3456, y: 2560, w: 128, h: 128},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 128, h: 128},
                sourceSize: {w: 128, h: 128}
            },
            "thumb_stamp_grass.png": {
                frame: {x: 2048, y: 1536, w: 128, h: 128},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 128, h: 128},
                sourceSize: {w: 128, h: 128}
            },
            "thumb_stamp_snow.png": {
                frame: {x: 2176, y: 1536, w: 128, h: 128},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 128, h: 128},
                sourceSize: {w: 128, h: 128}
            },
            "stamp_star.png": {
                frame: {x: 0, y: 2176, w: 512, h: 512},
                rotated: !1,
                trimmed: !1,
                spriteSourceSize: {x: 0, y: 0, w: 512, h: 512},
                sourceSize: {w: 512, h: 512}
            }
        }
    }
}, function (e, t) {
    window.addEventListener("load", function (e) {
        var t = document.body;
        t.addEventListener("dragover", function (e) {
            e.stopPropagation(), e.preventDefault(), e.dataTransfer.dropEffect = "copy"
        }, !1), t.addEventListener("drop", function (e) {
            e.stopPropagation(), e.preventDefault();
            for (var t = e.dataTransfer.files, i = 0; i < t.length; i++) {
                var r = t[i];
                if (".apa" === r.name.substr(r.name.length - 4).toLowerCase()) {
                    var s = new FileReader;
                    s.onload = function (e) {
                        document.querySelector("a-scene").systems.brush.loadBinary(e.target.result)
                    }, s.readAsArrayBuffer(r)
                } else if (".json" === r.name.substr(r.name.length - 5).toLowerCase()) {
                    var s = new FileReader;
                    s.onload = function (e) {
                        document.querySelector("a-scene").systems.brush.loadJSON(JSON.parse(e.target.result))
                    }, s.readAsText(r)
                } else ".obj" === r.name.substr(r.name.length - 4).toLowerCase() ? (s = new FileReader, s.onload = function (e) {
                    for (var t = new AFRAME.THREE.OBJLoader, i = t.parse(e.target.result), r = document.createElement("a-entity"), s = 0; s < i.children.length; s++) {
                        var n = i.children[s];
                        n.material.color.set("#333")
                    }
                    r.setObject3D("mesh", i), r.className = "templateitem", document.querySelector("a-scene").appendChild(r)
                }, s.readAsText(r)) : r.type.match(/image.*/) && (s = new FileReader, s.onload = function (e) {
                    var t = new Image;
                    t.src = e.target.result;
                    var i, r;
                    t.width > t.height ? (i = 1, r = t.height / t.width) : (r = 1, i = t.width / t.height);
                    var s = [3 * Math.random() - 1.5, 1 + Math.random() - .5, -1.4 + .2 * Math.random()],
                        n = document.createElement("a-image");
                    n.setAttribute("src", e.target.result), n.setAttribute("position", s.join(" ")), n.setAttribute("width", i), n.setAttribute("height", r), n.className = "templateitem", document.querySelector("a-scene").appendChild(n)
                }, s.readAsDataURL(r))
            }
        }, !1)
    })
}, function (e, t) {
    window.BinaryManager = function (e) {
        this.dataview = new DataView(e), this.offset = 0, this.isLittleEndian = !0
    }, window.BinaryManager.prototype = {
        readQuaternion: function () {
            return new THREE.Quaternion(this.readFloat(), this.readFloat(), this.readFloat(), this.readFloat())
        }, readVector3: function () {
            return new THREE.Vector3(this.readFloat(), this.readFloat(), this.readFloat())
        }, readString: function () {
            for (var e = this.dataview.getUint8(this.offset++, !0), t = "", i = 0; i < e; i++) t += String.fromCharCode(this.dataview.getUint8(this.offset++, !0));
            return t
        }, readColor: function () {
            return new THREE.Color(this.readFloat(), this.readFloat(), this.readFloat())
        }, readFloat: function () {
            var e = this.dataview.getFloat32(this.offset, !0);
            return this.offset += 4, e
        }, readUint32: function () {
            var e = this.dataview.getUint32(this.offset, !0);
            return this.offset += 4, e
        }, readUint16: function () {
            var e = this.dataview.getUint16(this.offset, !0);
            return this.offset += 2, e
        }, readUint8: function () {
            var e = this.dataview.getUint8(this.offset, !0);
            return this.offset++, e
        }, writeVector: function (e) {
            this.writeFloat32Array(e.toArray())
        }, writeColor: function (e) {
            this.writeFloat32Array(e.toArray())
        }, writeString: function (e) {
            this.writeUint8(e.length);
            for (var t = 0; t < e.length; t++) this.writeUint8(e.charCodeAt(t))
        }, writeUint8: function (e) {
            this.dataview.setUint8(this.offset, e, this.isLittleEndian), this.offset++
        }, writeUint16: function (e) {
            this.dataview.setUint16(this.offset, e, this.isLittleEndian), this.offset += 2
        }, writeUint32: function (e) {
            this.dataview.setUint32(this.offset, e, this.isLittleEndian), this.offset += 4
        }, writeFloat32: function (e) {
            this.dataview.setFloat32(this.offset, e, this.isLittleEndian), this.offset += 4
        }, writeFloat32Array: function (e) {
            for (var t = 0; t < e.length; t++) this.writeFloat32(e[t])
        }, getDataView: function () {
            return this.dataview
        }
    }
}, function (e, t) {
    THREE.OrbitControls = function (e, t) {
        function i() {
            return 2 * Math.PI / 60 / 60 * z.autoRotateSpeed
        }

        function r() {
            return Math.pow(.95, z.zoomSpeed)
        }

        function s(e) {
            V.theta -= e
        }

        function n(e) {
            V.phi -= e
        }

        function a(e) {
            z.object instanceof THREE.PerspectiveCamera ? N /= e : z.object instanceof THREE.OrthographicCamera ? (z.object.zoom = Math.max(z.minZoom, Math.min(z.maxZoom, z.object.zoom * e)), z.object.updateProjectionMatrix(), q = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), z.enableZoom = !1)
        }

        function o(e) {
            z.object instanceof THREE.PerspectiveCamera ? N *= e : z.object instanceof THREE.OrthographicCamera ? (z.object.zoom = Math.max(z.minZoom, Math.min(z.maxZoom, z.object.zoom / e)), z.object.updateProjectionMatrix(), q = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), z.enableZoom = !1)
        }

        function h(e) {
            W.set(e.clientX, e.clientY)
        }

        function u(e) {
            K.set(e.clientX, e.clientY)
        }

        function c(e) {
            Y.set(e.clientX, e.clientY)
        }

        function d(e) {
            J.set(e.clientX, e.clientY), Z.subVectors(J, W);
            var t = z.domElement === document ? z.domElement.body : z.domElement;
            s(2 * Math.PI * Z.x / t.clientWidth * z.rotateSpeed), n(2 * Math.PI * Z.y / t.clientHeight * z.rotateSpeed), W.copy(J), z.update()
        }

        function l(e) {
            G.set(e.clientX, e.clientY), $.subVectors(G, K), $.y > 0 ? a(r()) : $.y < 0 && o(r()), K.copy(G), z.update()
        }

        function m(e) {
            X.set(e.clientX, e.clientY), Q.subVectors(X, Y), ie(Q.x, Q.y), Y.copy(X), z.update()
        }

        function p(e) {
        }

        function f(e) {
            e.deltaY < 0 ? o(r()) : e.deltaY > 0 && a(r()), z.update()
        }

        function b(e) {
            switch (e.keyCode) {
                case z.keys.UP:
                    ie(0, z.keyPanSpeed), z.update();
                    break;
                case z.keys.BOTTOM:
                    ie(0, -z.keyPanSpeed), z.update();
                    break;
                case z.keys.LEFT:
                    ie(z.keyPanSpeed, 0), z.update();
                    break;
                case z.keys.RIGHT:
                    ie(-z.keyPanSpeed, 0), z.update()
            }
        }

        function g(e) {
            W.set(e.touches[0].pageX, e.touches[0].pageY)
        }

        function v(e) {
            var t = e.touches[0].pageX - e.touches[1].pageX, i = e.touches[0].pageY - e.touches[1].pageY,
                r = Math.sqrt(t * t + i * i);
            K.set(0, r)
        }

        function E(e) {
            Y.set(e.touches[0].pageX, e.touches[0].pageY)
        }

        function y(e) {
            J.set(e.touches[0].pageX, e.touches[0].pageY), Z.subVectors(J, W);
            var t = z.domElement === document ? z.domElement.body : z.domElement;
            s(2 * Math.PI * Z.x / t.clientWidth * z.rotateSpeed), n(2 * Math.PI * Z.y / t.clientHeight * z.rotateSpeed), W.copy(J), z.update()
        }

        function w(e) {
            var t = e.touches[0].pageX - e.touches[1].pageX, i = e.touches[0].pageY - e.touches[1].pageY,
                s = Math.sqrt(t * t + i * i);
            G.set(0, s), $.subVectors(G, K), $.y > 0 ? o(r()) : $.y < 0 && a(r()), K.copy(G), z.update()
        }

        function x(e) {
            X.set(e.touches[0].pageX, e.touches[0].pageY), Q.subVectors(X, Y), ie(Q.x, Q.y), Y.copy(X), z.update()
        }

        function S(e) {
        }

        function T(e) {
            if (z.enabled !== !1) {
                if (e.preventDefault(), e.button === z.mouseButtons.ORBIT) {
                    if (z.enableRotate === !1) return;
                    h(e), U = L.ROTATE
                } else if (e.button === z.mouseButtons.ZOOM) {
                    if (z.enableZoom === !1) return;
                    u(e), U = L.DOLLY
                } else if (e.button === z.mouseButtons.PAN) {
                    if (z.enablePan === !1) return;
                    c(e), U = L.PAN
                }
                U !== L.NONE && (document.addEventListener("mousemove", R, !1), document.addEventListener("mouseup", A, !1), z.dispatchEvent(P))
            }
        }

        function R(e) {
            if (z.enabled !== !1) if (e.preventDefault(), U === L.ROTATE) {
                if (z.enableRotate === !1) return;
                d(e)
            } else if (U === L.DOLLY) {
                if (z.enableZoom === !1) return;
                l(e)
            } else if (U === L.PAN) {
                if (z.enablePan === !1) return;
                m(e)
            }
        }

        function A(e) {
            z.enabled !== !1 && (p(e), document.removeEventListener("mousemove", R, !1), document.removeEventListener("mouseup", A, !1), z.dispatchEvent(_), U = L.NONE)
        }

        function M(e) {
            z.enabled === !1 || z.enableZoom === !1 || U !== L.NONE && U !== L.ROTATE || (e.preventDefault(), e.stopPropagation(), f(e), z.dispatchEvent(P), z.dispatchEvent(_))
        }

        function O(e) {
            z.enabled !== !1 && z.enableKeys !== !1 && z.enablePan !== !1 && b(e)
        }

        function j(e) {
            if (z.enabled !== !1) {
                switch (e.touches.length) {
                    case 1:
                        if (z.enableRotate === !1) return;
                        g(e), U = L.TOUCH_ROTATE;
                        break;
                    case 2:
                        if (z.enableZoom === !1) return;
                        v(e), U = L.TOUCH_DOLLY;
                        break;
                    case 3:
                        if (z.enablePan === !1) return;
                        E(e), U = L.TOUCH_PAN;
                        break;
                    default:
                        U = L.NONE
                }
                U !== L.NONE && z.dispatchEvent(P)
            }
        }

        function H(e) {
            if (z.enabled !== !1) switch (e.preventDefault(), e.stopPropagation(), e.touches.length) {
                case 1:
                    if (z.enableRotate === !1) return;
                    if (U !== L.TOUCH_ROTATE) return;
                    y(e);
                    break;
                case 2:
                    if (z.enableZoom === !1) return;
                    if (U !== L.TOUCH_DOLLY) return;
                    w(e);
                    break;
                case 3:
                    if (z.enablePan === !1) return;
                    if (U !== L.TOUCH_PAN) return;
                    x(e);
                    break;
                default:
                    U = L.NONE
            }
        }

        function B(e) {
            z.enabled !== !1 && (S(e), z.dispatchEvent(_), U = L.NONE)
        }

        function k(e) {
            e.preventDefault()
        }

        this.object = e, this.domElement = void 0 !== t ? t : document, this.enabled = !0, this.target = new THREE.Vector3, this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -(1 / 0), this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = .25, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.enableKeys = !0, this.keys = {
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            BOTTOM: 40
        }, this.mouseButtons = {
            ORBIT: THREE.MOUSE.LEFT,
            ZOOM: THREE.MOUSE.MIDDLE,
            PAN: THREE.MOUSE.RIGHT
        }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this.getPolarAngle = function () {
            return F.phi
        }, this.getAzimuthalAngle = function () {
            return F.theta
        }, this.reset = function () {
            z.target.copy(z.target0), z.object.position.copy(z.position0), z.object.zoom = z.zoom0, z.object.updateProjectionMatrix(), z.dispatchEvent(C), z.update(), U = L.NONE
        }, this.update = function () {
            var t = new THREE.Vector3, r = (new THREE.Quaternion).setFromUnitVectors(e.up, new THREE.Vector3(0, 1, 0)),
                n = r.clone().inverse(), a = new THREE.Vector3, o = new THREE.Quaternion;
            return function () {
                var e = z.object.position;
                return t.copy(e).sub(z.target), t.applyQuaternion(r), F.setFromVector3(t), z.autoRotate && U === L.NONE && s(i()), F.theta += V.theta, F.phi += V.phi, F.theta = Math.max(z.minAzimuthAngle, Math.min(z.maxAzimuthAngle, F.theta)), F.phi = Math.max(z.minPolarAngle, Math.min(z.maxPolarAngle, F.phi)), F.makeSafe(), F.radius *= N, F.radius = Math.max(z.minDistance, Math.min(z.maxDistance, F.radius)), z.target.add(D), t.setFromSpherical(F), t.applyQuaternion(n), e.copy(z.target).add(t), z.object.lookAt(z.target), z.enableDamping === !0 ? (V.theta *= 1 - z.dampingFactor, V.phi *= 1 - z.dampingFactor) : V.set(0, 0, 0), N = 1, D.set(0, 0, 0), !!(q || a.distanceToSquared(z.object.position) > I || 8 * (1 - o.dot(z.object.quaternion)) > I) && (z.dispatchEvent(C), a.copy(z.object.position), o.copy(z.object.quaternion), q = !1, !0)
            }
        }(), this.dispose = function () {
            z.domElement.removeEventListener("contextmenu", k, !1), z.domElement.removeEventListener("mousedown", T, !1), z.domElement.removeEventListener("wheel", M, !1), z.domElement.removeEventListener("touchstart", j, !1), z.domElement.removeEventListener("touchend", B, !1), z.domElement.removeEventListener("touchmove", H, !1), document.removeEventListener("mousemove", R, !1), document.removeEventListener("mouseup", A, !1), window.removeEventListener("keydown", O, !1)
        };
        var z = this, C = {type: "change"}, P = {type: "start"}, _ = {type: "end"},
            L = {NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5}, U = L.NONE,
            I = 1e-6, F = new THREE.Spherical, V = new THREE.Spherical, N = 1, D = new THREE.Vector3, q = !1,
            W = new THREE.Vector2, J = new THREE.Vector2, Z = new THREE.Vector2, Y = new THREE.Vector2,
            X = new THREE.Vector2, Q = new THREE.Vector2, K = new THREE.Vector2, G = new THREE.Vector2,
            $ = new THREE.Vector2, ee = function () {
                var e = new THREE.Vector3;
                return function (t, i) {
                    e.setFromMatrixColumn(i, 0), e.multiplyScalar(-t), D.add(e)
                }
            }(), te = function () {
                var e = new THREE.Vector3;
                return function (t, i) {
                    e.setFromMatrixColumn(i, 1), e.multiplyScalar(t), D.add(e)
                }
            }(), ie = function () {
                var e = new THREE.Vector3;
                return function (t, i) {
                    var r = z.domElement === document ? z.domElement.body : z.domElement;
                    if (z.object instanceof THREE.PerspectiveCamera) {
                        var s = z.object.position;
                        e.copy(s).sub(z.target);
                        var n = e.length();
                        n *= Math.tan(z.object.fov / 2 * Math.PI / 180), ee(2 * t * n / r.clientHeight, z.object.matrix), te(2 * i * n / r.clientHeight, z.object.matrix)
                    } else z.object instanceof THREE.OrthographicCamera ? (ee(t * (z.object.right - z.object.left) / z.object.zoom / r.clientWidth, z.object.matrix), te(i * (z.object.top - z.object.bottom) / z.object.zoom / r.clientHeight, z.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), z.enablePan = !1)
                }
            }();
        z.domElement.addEventListener("contextmenu", k, !1), z.domElement.addEventListener("mousedown", T, !1), z.domElement.addEventListener("wheel", M, !1), z.domElement.addEventListener("touchstart", j, !1), z.domElement.addEventListener("touchend", B, !1), z.domElement.addEventListener("touchmove", H, !1), window.addEventListener("keydown", O, !1), this.update()
    }, THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype), THREE.OrbitControls.prototype.constructor = THREE.OrbitControls, Object.defineProperties(THREE.OrbitControls.prototype, {
        center: {
            get: function () {
                return console.warn("THREE.OrbitControls: .center has been renamed to .target"), this.target
            }
        }, noZoom: {
            get: function () {
                return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), !this.enableZoom
            }, set: function (e) {
                console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."), this.enableZoom = !e
            }
        }, noRotate: {
            get: function () {
                return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), !this.enableRotate
            }, set: function (e) {
                console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."), this.enableRotate = !e
            }
        }, noPan: {
            get: function () {
                return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), !this.enablePan
            }, set: function (e) {
                console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."), this.enablePan = !e
            }
        }, noKeys: {
            get: function () {
                return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), !this.enableKeys
            }, set: function (e) {
                console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."), this.enableKeys = !e
            }
        }, staticMoving: {
            get: function () {
                return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), !this.enableDamping
            }, set: function (e) {
                console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."), this.enableDamping = !e
            }
        }, dynamicDampingFactor: {
            get: function () {
                return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor
            }, set: function (e) {
                console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."), this.dampingFactor = e
            }
        }
    })
}, function (e, t, i) {
    function r() {
        this.sharedBuffers = {}
    }

    var s = i(10);
    r.prototype = {
        addSharedBuffer: function (e, t, i) {
            var r = new s(t, i);
            this.sharedBuffers[e] = r
        }, getSharedBuffer: function (e) {
            return this.sharedBuffers[e]
        }
    }, e.exports = new r
}, function (e, t) {
    function i(e, t) {
        this.material = e, this.primitiveMode = t, this.maxBufferSize = 1e6, this.geometries = [], this.current = null, this.addBuffer(!1)
    }

    i.prototype = {
        restartPrimitive: function () {
            if (this.idx.position >= this.current.attributes.position.count) this.addBuffer(!1); else if (0 !== this.idx.position) {
                var e = 3 * (this.idx.position - 1), t = this.current.attributes.position.array;
                this.addVertex(t[e++], t[e++], t[e++]), this.idx.color++, this.idx.normal++, this.idx.uv++
            }
        }, remove: function (e, t) {
            var i = this.current.attributes.position.array;
            if (this.idx.position > t.position) for (key in this.idx) for (var r = "uv" === key ? 2 : 3, i = e[key] * r, s = (t[key] + 1) * r, n = this.idx[key] * r, a = s; a < n; a++) this.current.attributes[key].array[i++] = this.current.attributes[key].array[a];
            for (key in this.idx) {
                var o = t[key] - e[key];
                this.idx[key] -= o
            }
            this.update()
        }, undo: function (e) {
            this.idx = e, this.update()
        }, addBuffer: function (e) {
            var t = new THREE.BufferGeometry, i = new Float32Array(3 * this.maxBufferSize),
                r = new Float32Array(3 * this.maxBufferSize), s = new Float32Array(2 * this.maxBufferSize),
                n = new Float32Array(3 * this.maxBufferSize), a = new THREE.Mesh(t, this.material);
            a.drawMode = this.primitiveMode, a.frustumCulled = !1, a.vertices = i, this.object3D = new THREE.Object3D;
            var o = document.querySelector(".a-drawing");
            if (o || (o = document.createElement("a-entity"), o.className = "a-drawing", document.querySelector("a-scene").appendChild(o)), o.object3D.add(this.object3D), this.object3D.add(a), t.setDrawRange(0, 0), t.addAttribute("position", new THREE.BufferAttribute(i, 3).setDynamic(!0)), t.addAttribute("uv", new THREE.BufferAttribute(s, 2).setDynamic(!0)), t.addAttribute("normal", new THREE.BufferAttribute(r, 3).setDynamic(!0)), t.addAttribute("color", new THREE.BufferAttribute(n, 3).setDynamic(!0)), this.previous = null, this.geometries.length > 0 && (this.previous = this.current), this.idx = {
                position: 0,
                uv: 0,
                normal: 0,
                color: 0
            }, this.geometries.push(t), this.current = t, this.previous && e) {
                var h = 3 * (this.maxBufferSize - 2), u = 3 * (this.maxBufferSize - 2),
                    c = (2 * (this.maxBufferSize - 2), 3 * (this.maxBufferSize - 2)),
                    d = this.previous.attributes.position.array;
                this.addVertex(d[h++], d[h++], d[h++]), this.addVertex(d[h++], d[h++], d[h++]);
                var l = this.previous.attributes.normal.array;
                this.addNormal(l[c++], l[c++], l[c++]), this.addNormal(l[c++], l[c++], l[c++]);
                var m = this.previous.attributes.color.array;
                this.addColor(m[u++], m[u++], m[u++]), this.addColor(m[u++], m[u++], m[u++]);
                var s = this.previous.attributes.uv.array
            }
        }, addColor: function (e, t, i) {
            this.current.attributes.color.setXYZ(this.idx.color++, e, t, i)
        }, addNormal: function (e, t, i) {
            this.current.attributes.normal.setXYZ(this.idx.normal++, e, t, i)
        }, addVertex: function (e, t, i) {
            var r = this.current.attributes.position;
            this.idx.position === r.count && (this.addBuffer(!0), r = this.current.attributes.position), r.setXYZ(this.idx.position++, e, t, i)
        }, addUV: function (e, t) {
            this.current.attributes.uv.setXY(this.idx.uv++, e, t)
        }, update: function () {
            this.current.setDrawRange(0, this.idx.position), this.current.attributes.color.needsUpdate = !0, this.current.attributes.normal.needsUpdate = !0, this.current.attributes.position.needsUpdate = !0, this.current.attributes.uv.needsUpdate = !0
        }
    }, e.exports = i
}, function (e, t) {
    window.Utils = function () {
        function e(e) {
            return parseFloat(e.toFixed(r))
        }

        function t(t) {
            for (var i = 0; i < t.length; i++) t[i] = e(t[i]);
            return this
        }

        function i(e) {
            var t, i;
            switch (e) {
                case"windows-motion-controls":
                    i = ".windows-motion-tooltips";
                    break;
                case"oculus-touch-controls":
                    i = ".oculus-tooltips";
                    break;
                case"vive-controls":
                    i = ".vive-tooltips"
            }
            return t = Array.prototype.slice.call(document.querySelectorAll(i))
        }

        const r = 6;
        return {numberToFixed: e, arrayNumbersToFixed: t, getTooltips: i}
    }()
}, function (e, t) {
    window.addEventListener("load", function (e) {
        var t = document.getElementById("apainter-ui"), i = document.querySelector("#apainter-ui .share"),
            r = document.getElementById("apainter-share-url"), s = document.querySelector("#apainter-ui .progress"),
            n = document.querySelector("#apainter-ui .bar");
        document.addEventListener("drawing-upload-completed", function (e) {
            i.classList.remove("hide"), s.classList.add("hide"), r.value = e.detail.url
        }), document.addEventListener("drawing-upload-started", function (e) {
            t.style.display = "block", i.classList.add("hide"), s.classList.remove("hide")
        }), document.addEventListener("drawing-upload-progress", function (e) {
            n.style.width = Math.floor(100 * e.detail.progress) + "%"
        });
        var a = new Clipboard(".button.copy");
        a.on("error", function (e) {
            console.error("Error copying to clipboard:", e.action, e.trigger)
        })
    })
}, function (e, t) {
    var r = 1;
    AFRAME.BRUSHES = {}, APAINTER_STATS = {brushes: {}}, AFRAME.registerBrush = function (e, t, i) {
        function r(e) {
            return function (t, i, r, s) {
                this.object3D = new THREE.Object3D, this.data = {
                    points: [],
                    size: i,
                    prevPosition: null,
                    prevPointerPosition: null,
                    numPoints: 0,
                    color: t.clone(),
                    timestamp: s,
                    owner: r
                }, e.call(this, t, i)
            }
        }

        function s(e) {
            return function (t, i, r, s, n) {
                this.data.prevPosition && this.data.prevPosition.distanceTo(t) <= this.options.spacing || 0 !== this.options.maxPoints && this.data.numPoints >= this.options.maxPoints || e.call(this, t, i, r, s, n) && (this.data.numPoints++, this.data.points.push({
                    position: t.clone(),
                    orientation: i.clone(),
                    pressure: s,
                    timestamp: n
                }), this.data.prevPosition = t.clone(), this.data.prevPointerPosition = r.clone())
            }
        }

        var n = {};
        if (Object.keys(t).forEach(function (e) {
            n[e] = {value: t[e], writable: !0}
        }), AFRAME.BRUSHES[e]) throw new Error("The brush `" + e + "` has been already registered. Check that you are not loading two versions of the same brush or two different brushes of the same name.");
        var a = function () {
        }, o = {spacing: 0, maxPoints: 0};
        a.prototype = {
            options: Object.assign(o, i), reset: function () {
            }, tick: function (e, t) {
            }, undo: function () {
            }, remove: function () {
            }, addPoint: function (e, t, i, r, s) {
            }, getJSON: function (e) {
                for (var t = [], i = 0; i < this.data.points.length; i++) {
                    var r = this.data.points[i];
                    t.push({
                        orientation: Utils.arrayNumbersToFixed(r.orientation.toArray()),
                        position: Utils.arrayNumbersToFixed(r.position.toArray()),
                        pressure: Utils.numberToFixed(r.pressure),
                        timestamp: r.timestamp
                    })
                }
                return {
                    brush: {
                        index: e.getUsedBrushes().indexOf(this.brushName),
                        color: Utils.arrayNumbersToFixed(this.data.color.toArray()),
                        size: Utils.numberToFixed(this.data.size)
                    }, points: t
                }
            }, getBinary: function (e) {
                var t = 21 + 36 * this.data.points.length, i = new BinaryManager(new ArrayBuffer(t));
                i.writeUint8(e.getUsedBrushes().indexOf(this.brushName)), i.writeColor(this.data.color), i.writeFloat32(this.data.size), i.writeUint32(this.data.points.length);
                for (var r = 0; r < this.data.points.length; r++) {
                    var s = this.data.points[r];
                    i.writeFloat32Array(s.position.toArray()), i.writeFloat32Array(s.orientation.toArray()), i.writeFloat32(s.pressure), i.writeUint32(s.timestamp)
                }
                return i.getDataView()
            }
        };
        var h = function () {
        };
        return h.prototype = Object.create(a.prototype, n), h.prototype.brushName = e, h.prototype.constructor = h, h.prototype.init = r(h.prototype.init), h.prototype.addPoint = s(h.prototype.addPoint), AFRAME.BRUSHES[e] = h, h.used = !1, h
    }, AFRAME.registerSystem("brush", {
        schema: {}, brushes: {}, strokes: [], getUsedBrushes: function () {
            return Object.keys(AFRAME.BRUSHES).filter(function (e) {
                return AFRAME.BRUSHES[e].used
            })
        }, getBrushByName: function (e) {
            return AFRAME.BRUSHES[e]
        }, undo: function () {
            for (var e, t = this.strokes.length - 1; t >= 0; t--) if ("local" === this.strokes[t].data.owner) {
                e = this.strokes.splice(t, 1)[0];
                break
            }
            if (e) {
                e.undo();
                var i = document.querySelector(".a-drawing");
                i.emit("stroke-removed", {stroke: e})
            }
        }, removeById: function (e) {
            e = 1;
            var t = this.strokes[e];
            if (console.log(t, this.strokes), t) {
                for (var i = this.strokes.length - 1; i > e; i--) if (stroke = this.strokes[i], t.sharedBuffer === stroke.sharedBuffer) {
                    console.log(">>>", stroke.prevIdx, "->", stroke.idx, "target", t.prevIdx, "->", t.idx);
                    for (key in t.idx) {
                        var r = t.idx[key] - t.prevIdx[key];
                        stroke.idx[key] -= r, stroke.prevIdx[key] -= r
                    }
                    console.log("<<<", stroke.idx, stroke.prevIdx)
                }
                this.strokes.splice(e, 1)[0].remove()
            }
        }, clear: function () {
            for (var e = this.strokes.length - 1; e >= 0; e--) if ("local" === this.strokes[e].data.owner) {
                var t = this.strokes[e];
                t.undo();
                var i = document.querySelector(".a-drawing");
                i.emit("stroke-removed", {stroke: t})
            }
            Object.keys(AFRAME.BRUSHES).forEach(function (e) {
                AFRAME.BRUSHES[e].used = !1
            }), this.strokes = []
        }, init: function () {
            this.version = r, this.clear(), this.controllerName = null;
            var e = this;
            this.sceneEl.addEventListener("controllerconnected", function (t) {
                e.controllerName = t.detail.name
            })
        }, tick: function (e, t) {
            if (this.strokes.length) for (var i = 0; i < this.strokes.length; i++) this.strokes[i].tick(e, t)
        }, generateTestLines: function () {
            var e = -2, t = .5, i = 3, r = 1, s = 4, n = i / s, a = Object.keys(AFRAME.BRUSHES);
            brushesNames2 = ["leaf1", "fur2", "star", "squared-textured", "flat", "squared-textured", "lines5"];
            var o = -(t + .1) * a.length / 2;
            o = 0;
            var h = 0;
            a.forEach(function (i) {
                var a = new THREE.Color(Math.random(), Math.random(), Math.random()), u = this.addNewStroke(i, a, t),
                    c = document.querySelector("#left-hand");
                c.emit("stroke-started", {entity: c, stroke: u});
                for (var d = new THREE.Vector3(o, h, e), l = new THREE.Vector3, m = 0; m < s; m++) {
                    var p = new THREE.Quaternion;
                    l.set(0, n, .1);
                    var f = new THREE.Euler(0, Math.PI, 0);
                    p.setFromEuler(f), d = d.add(l);
                    var b = 0, g = this.getPointerPosition(d, p);
                    u.addPoint(d, p, g, r, b)
                }
                o += t + .1
            })
        }, generateRandomStrokes: function (e) {
            function t() {
                return 2 * Math.random() - 1
            }

            for (var i = document.querySelector("#left-hand"), r = Object.keys(AFRAME.BRUSHES), s = 0; s < e; s++) {
                var n = r[parseInt(13 * Math.random())],
                    a = new THREE.Color(Math.random(), Math.random(), Math.random()), o = .3 * Math.random(),
                    h = parseInt(500 * Math.random()), u = this.addNewStroke(n, a, o);
                i.emit("stroke-started", {entity: i, stroke: u});
                for (var c = new THREE.Vector3(t(), t(), t()), d = new THREE.Vector3, l = new THREE.Quaternion, m = .2, p = 0; p < h; p++) {
                    d.set(t(), t(), t()), d.multiplyScalar(t() / 20), l.setFromUnitVectors(c.clone().normalize(), d.clone().normalize()), c = c.add(d), c.y < 0 && (c.y = -c.y);
                    var f = 0;
                    m += 1 - 2 * Math.random(), m < 0 && (m = .2), m > 1 && (m = 1);
                    var b = this.getPointerPosition(c, l);
                    u.addPoint(c, l, b, m, f)
                }
            }
        }, addNewStroke: function (e, t, i, r, s) {
            APAINTER_STATS.brushes[e] || (APAINTER_STATS.brushes[e] = 0), APAINTER_STATS.brushes[e]++, r = r || "local", s = s || Date.now();
            var n = this.getBrushByName(e);
            if (!n) {
                var a = Object.keys(AFRAME.BRUSHES)[0];
                n = AFRAME.BRUSHES[a], console.warn("Invalid brush name: `" + e + "` using `" + a + "`")
            }
            n.used = !0;
            var o = new n;
            o.brush = n, o.init(t, i, r, s), this.strokes.push(o);
            var h = document.querySelector(".a-drawing");
            return h || (h = document.createElement("a-entity"), h.className = "a-drawing", document.querySelector("a-scene").appendChild(h)), o
        }, getJSON: function () {
            var e = {version: r, strokes: [], author: "", brushes: this.getUsedBrushes()};
            for (i = 0; i < this.strokes.length; i++) e.strokes.push(this.strokes[i].getJSON(this));
            return e
        }, getBinary: function () {
            var e = [], t = "apainter", i = this.getUsedBrushes(), s = t.length + i.join(" ").length + 9,
                n = new BinaryManager(new ArrayBuffer(s));
            n.writeString(t), n.writeUint16(r), n.writeUint8(i.length);
            for (var a = 0; a < i.length; a++) n.writeString(i[a]);
            for (n.writeUint32(this.strokes.length), e.push(n.getDataView()), a = 0; a < this.strokes.length; a++) e.push(this.strokes[a].getBinary(this));
            return e
        }, getPointerPosition: function () {
            var e = new THREE.Vector3, t = {
                "vive-controls": {vec: new THREE.Vector3(0, .7, 1), mult: -.03},
                "oculus-touch-controls": {vec: new THREE.Vector3(0, 0, 2.8), mult: -.05},
                "windows-motion-controls": {vec: new THREE.Vector3(0, 0, 1), mult: -.12}
            };
            return function (i, r) {
                if (!this.controllerName) return i;
                var s = t[this.controllerName], n = s.vec.clone().applyQuaternion(r).normalize().multiplyScalar(s.mult);
                return e.copy(i).add(n), e
            }
        }(), loadJSON: function (e) {
            e.version !== r && console.error("Invalid version: ", e.version, "(Expected: " + r + ")"), console.time("JSON Loading");
            for (var t = 0; t < e.strokes.length; t++) for (var i = e.strokes[t], s = i.brush, n = this.addNewStroke(e.brushes[s.index], (new THREE.Color).fromArray(s.color), s.size), a = 0; a < i.points.length; a++) {
                var o = i.points[a], h = (new THREE.Vector3).fromArray(o.position),
                    u = (new THREE.Quaternion).fromArray(o.orientation), c = o.pressure, d = o.timestamp,
                    l = this.getPointerPosition(h, u);
                n.addPoint(h, u, l, c, d)
            }
            console.timeEnd("JSON Loading")
        }, loadBinary: function (e) {
            var t = new BinaryManager(e), i = t.readString();
            if ("apainter" !== i) return void console.error("Invalid `magic` header");
            var s = t.readUint16();
            s !== r && console.error("Invalid version: ", s, "(Expected: " + r + ")"), console.time("Binary Loading");
            for (var n = t.readUint8(), a = [], o = 0; o < n; o++) a.push(t.readString());
            for (var h = t.readUint32(), u = 0; u < h; u++) for (var c = t.readUint8(), d = t.readColor(), l = t.readFloat(), m = t.readUint32(), p = this.addNewStroke(a[c], d, l), f = 0; f < m; f++) {
                var b = t.readVector3(), g = t.readQuaternion(), v = t.readFloat(), E = t.readUint32(),
                    y = this.getPointerPosition(b, g);
                p.addPoint(b, g, y, v, E)
            }
            console.timeEnd("Binary Loading")
        }, loadFromUrl: function (e, t) {
            var i = new THREE.XHRLoader(this.manager);
            i.crossOrigin = "anonymous", t === !0 && i.setResponseType("arraybuffer");
            var r = this;
            i.load(e, function (e) {
                t === !0 ? r.loadBinary(e) : r.loadJSON(JSON.parse(e))
            })
        }
    })
}, function (e, t) {
    AFRAME.registerSystem("ui", {
        init: function () {
            this.initTextures()
        }, initTextures: function () {
            function e(e) {
                i.hoverTexture = e
            }

            function t(e) {
                i.pressedTexture = e
            }

            var i = this, r = "assets/images/ui-hover.png", s = "assets/images/ui-pressed.png";
            this.sceneEl.systems.material.loadTexture(r, {src: r}, e), this.sceneEl.systems.material.loadTexture(s, {src: s}, t)
        }, closeAll: function () {
            var e, t = document.querySelectorAll("[ui]");
            for (e = 0; e < t.length; e++) t[e].components.ui.close()
        }
    })
}, function (e, t, i) {
    var r = i(1).saveAs;
    AFRAME.registerSystem("painter", {
        init: function () {
            function e() {
                var e, t = /\+/g, i = /([^&=]+)=?([^&]*)/g, r = function (e) {
                    return decodeURIComponent(e.replace(t, " "))
                }, s = window.location.search.substring(1), n = {};
                for (e = i.exec(s); e;) n[r(e[1])] = r(e[2]), e = i.exec(s);
                return n
            }

            var t = {
                behaviours: {},
                mappings: {
                    painting: {
                        common: {"grip.down": "undo", "trigger.changed": "paint"},
                        "vive-controls": {
                            "axis.move": "changeBrushSizeInc",
                            "trackpad.touchstart": "startChangeBrushSize",
                            "menu.down": "toggleMenu",
                            "trackpad.down": "aim",
                            "trackpad.up": "teleport"
                        },
                        "oculus-touch-controls": {
                            "axis.move": "changeBrushSizeAbs",
                            "abutton.down": "toggleMenu",
                            "xbutton.down": "toggleMenu",
                            "ybutton.down": "aim",
                            "ybutton.up": "teleport",
                            "bbutton.down": "aim",
                            "bbutton.up": "teleport"
                        },
                        "windows-motion-controls": {
                            "axis.move": "changeBrushSizeAbs",
                            "menu.down": "toggleMenu",
                            "trackpad.down": "aim",
                            "trackpad.up": "teleport"
                        }
                    }
                }
            };
            this.sceneEl.addEventListener("loaded", function () {
                AFRAME.registerInputMappings(t), AFRAME.currentInputMapping = "painting"
            }), this.version = "1.2", this.brushSystem = this.sceneEl.systems.brush, this.showTemplateItems = !0;
            var i = e();
            if (i.url || i.urljson) {
                var r = void 0 === i.urljson;
                this.brushSystem.loadFromUrl(i.url || i.urljson, r), document.getElementById("logo").setAttribute("visible", !1), document.getElementById("acamera").setAttribute("orbit-controls", "position", "0 1.6 3"), document.getElementById("apainter-logo").classList.remove("hidden")
            }
            void 0 !== i.bgcolor && (document.body.style.backgroundColor = "#" + i.bgcolor), void 0 !== i.sky && this.sceneEl.addEventListener("loaded", function (e) {
                "" === i.sky ? document.getElementById("sky").setAttribute("visible", !1) : document.getElementById("sky").setAttribute("material", "src", i.sky)
            }), void 0 !== i.floor && this.sceneEl.addEventListener("loaded", function (e) {
                "" === i.floor ? document.getElementById("ground").setAttribute("visible", !1) : document.getElementById("ground").setAttribute("material", "src", i.floor)
            }), this.startPainting = !1;
            var s = this;
            document.addEventListener("stroke-started", function (e) {
                if (!s.startPainting) {
                    var t = document.getElementById("logo"), i = t.getObject3D("mesh");
                    new AFRAME.TWEEN.Tween({alpha: 1}).to({alpha: 0}, 4e3).onComplete(function () {
                        t.setAttribute("visible", !1)
                    }).onUpdate(function () {
                        i.children[0].material.opacity = this.alpha
                    }).start();
                    s.startPainting = !0
                }
            }), document.addEventListener("keyup", function (e) {
                if (!e.shiftKey && !e.ctrlKey) {
                    if (8 === e.keyCode && s.brushSystem.undo(), 67 === e.keyCode && s.brushSystem.clear(), 71 === e.keyCode) {
                        var t = document.querySelector(".a-drawing");
                        s.sceneEl.systems["gltf-exporter"].export(t)
                    }
                    if (78 === e.keyCode) {
                        var i = document.querySelectorAll("[paint-controls]"), r = Object.keys(AFRAME.BRUSHES),
                            n = r.indexOf(i[0].components.brush.data.brush);
                        n = (n + 1) % r.length, [].forEach.call(i, function (e) {
                            e.setAttribute("brush", "brush", r[n])
                        })
                    }
                    if (84 === e.keyCode && s.brushSystem.generateTestLines(), 82 === e.keyCode && s.brushSystem.generateRandomStrokes(1), 76 === e.keyCode && s.brushSystem.loadFromUrl("demo.apa", !0), 85 === e.keyCode && s.upload(), 86 === e.keyCode && s.save(), 74 === e.keyCode && s.saveJSON(), 79 === e.keyCode) {
                        s.showTemplateItems = !s.showTemplateItems;
                        for (var a = document.querySelectorAll(".templateitem"), o = 0; o < a.length; o++) a[o].setAttribute("visible", s.showTemplateItems)
                    }
                    88 === e.keyCode && s.brushSystem.removeById(2)
                }
            }), console.info("A-PAINTER Version: " + this.version)
        }, saveJSON: function () {
            var e = this.brushSystem.getJSON(), t = new Blob([JSON.stringify(e)], {type: "application/json"});
            r(t, "demo.json")
        }, save: function () {
            var e = this.brushSystem.getBinary(), t = new Blob(e, {type: "application/octet-binary"});
            r(t, "demo.apa")
        }, upload: function (e, t) {
            this.sceneEl.emit("drawing-upload-started");
            var i = this, r = "https://aframe.io/a-painter/?url=", s = this.brushSystem.getBinary(),
                n = new Blob(s, {type: "application/octet-binary"}), a = "uploadcare";
            if ("fileio" === a) {
                var o = new window.FormData;
                o.append("file", n);
                var h = new window.XMLHttpRequest;
                h.open("POST", "https://file.io"), h.onreadystatechange = function (s) {
                    if (4 === h.readyState) {
                        var n = JSON.parse(h.response);
                        n.success && (console.log("Uploaded link: ", r + n.link), i.sceneEl.emit("drawing-upload-completed", {url: r + n.link}), e && e())
                    } else i.sceneEl.emit("drawing-upload-error", {errorInfo: null, fileInfo: null}), t && t()
                }, h.send(o)
            } else {
                var u = uploadcare.fileFrom("object", n);
                u.done(function (t) {
                    console.log("Uploaded link: ", r + t.cdnUrl), i.sceneEl.emit("drawing-upload-completed", {url: r + t.cdnUrl}), e && e()
                }).fail(function (e, r) {
                    i.sceneEl.emit("drawing-upload-error", {errorInfo: e, fileInfo: r}), t && t(e)
                }).progress(function (e) {
                    i.sceneEl.emit("drawing-upload-progress", {progress: e.progress})
                })
            }
        }
    })
}, function (e, t) {
    AFRAME.registerComponent("brush", {
        schema: {
            color: {type: "color", default: "#ef2d5e"},
            size: {default: .01, min: .001, max: .3},
            brush: {default: "flat"},
            enabled: {default: !0}
        }, init: function () {
            var e = this.data;
            this.color = new THREE.Color(e.color), this.el.emit("brushcolor-changed", {color: this.color}), this.el.emit("brushsize-changed", {brushSize: e.size}), this.active = !1, this.obj = this.el.object3D, this.currentStroke = null, this.strokeEntities = [], this.sizeModifier = 0, this.textures = {}, this.currentMap = 0, this.model = this.el.getObject3D("mesh"), this.drawing = !1;
            var t = this;
            this.previousAxis = 0, this.el.addEventListener("undo", function (e) {
                t.data.enabled && (t.system.undo(), document.getElementById("ui_undo").play())
            }), this.el.addEventListener("paint", function (e) {
                if (t.data.enabled) {
                    var i = e.detail.value;
                    t.sizeModifier = i, i > .1 ? t.active || (t.startNewStroke(), t.active = !0) : (t.active && (t.previousEntity = t.currentEntity, t.currentStroke = null), t.active = !1)
                }
            })
        }, update: function (e) {
            var t = this.data;
            e.color !== t.color && (this.color.set(t.color), this.el.emit("brushcolor-changed", {color: this.color})), e.size !== t.size && this.el.emit("brushsize-changed", {size: t.size})
        }, tick: function () {
            var e = new THREE.Vector3, t = new THREE.Quaternion, i = new THREE.Vector3;
            return function (r, s) {
                if (this.currentStroke && this.active) {
                    this.obj.matrixWorld.decompose(e, t, i);
                    var n = this.system.getPointerPosition(e, t);
                    this.currentStroke.addPoint(e, t, n, this.sizeModifier, r)
                }
            }
        }(), startNewStroke: function () {
            document.getElementById("ui_paint").play(), this.currentStroke = this.system.addNewStroke(this.data.brush, this.color, this.data.size), this.el.emit("stroke-started", {
                entity: this.el,
                stroke: this.currentStroke
            })
        }
    })
}, function (e, t) {
    var i = AFRAME.utils;
    AFRAME.registerComponent("if-no-vr-headset", {
        schema: {default: {}, parse: i.styleParser.parse},
        update: function () {
            var e = this;
            return this.el.sceneEl.isMobile ? void this.setProperties() : void navigator.getVRDisplays().then(function (t) {
                t.length && "Emulated HTC Vive DVT" !== t[0].displayName || e.setProperties()
            })
        },
        setProperties: function () {
            var e = this.data, t = this.el;
            Object.keys(e).forEach(function (i) {
                t.setAttribute(i, e[i])
            })
        }
    })
}, function (e, t) {
    AFRAME.registerComponent("json-model", {
        schema: {src: {type: "asset"}}, init: function () {
            this.objectLoader = new THREE.ObjectLoader, this.objectLoader.setCrossOrigin("")
        }, update: function (e) {
            var t = this, i = this.data.src;
            i && i !== e.src && this.objectLoader.load(this.data.src, function (e) {
                var r = (new THREE.Matrix4).makeRotationX(-Math.PI / 2);
                e.traverse(function (e) {
                    e instanceof THREE.Mesh && e.position.applyMatrix4(r)
                }), t.el.setObject3D("mesh", e), t.el.emit("model-loaded", {format: "json", model: e, src: i})
            })
        }
    })
}, function (e, t) {
    AFRAME.registerComponent("orbit-controls", {
        dependencies: ["camera"],
        schema: {position: {default: {x: 0, y: 1.6, z: .1}, type: "vec3"}},
        init: function () {
            var e = this.el.sceneEl, t = this.setupControls.bind(this);
            this.el.sceneEl.is("vr-mode") || this.el.setAttribute("position", this.data.position), e.canvas ? t() : e.addEventListener("render-target-loaded", t), this.onEnterVR = this.onEnterVR.bind(this), this.onExitVR = this.onExitVR.bind(this), e.addEventListener("enter-vr", this.onEnterVR), e.addEventListener("exit-vr", this.onExitVR)
        },
        onExitVR: function () {
            this.el.setAttribute("position", this.data.position), this.controls.enabled = !0
        },
        onEnterVR: function () {
            if (AFRAME.utils.device.checkHeadsetConnected() || this.el.sceneEl.isMobile) {
                var e = this.el.getAttribute("position"), t = this.el.getObject3D("camera");
                this.controls.enabled = !1, t.position.set(0, 0, 0), t.rotation.set(0, 0, 0), this.el.sceneEl.isMobile || this.el.setAttribute("position", {
                    x: e.x - this.data.position.x,
                    y: e.y - this.data.position.y,
                    z: e.z - this.data.position.z
                })
            }
        },
        setupControls: function () {
            var e = this.el.sceneEl.renderer, t = this.el.getObject3D("camera"),
                i = this.controls = new THREE.OrbitControls(t, e.domElement), r = this.el.getAttribute("position");
            i.target.setX(-r.x), i.target.setZ(-r.z), i.enableDamping = !0, i.dampingFactor = 1, i.enableZoom = !0
        },
        play: function () {
            this.controls && (this.controls.enabled = !0)
        },
        pause: function () {
            this.controls && (this.controls.enabled = !1)
        },
        remove: function () {
            this.pause()
        }
    })
}, function (e, t) {
    AFRAME.registerSystem("paint-controls", {numberStrokes: 0}), AFRAME.registerComponent("paint-controls", {
        dependencies: ["brush"],
        schema: {hand: {default: "left"}},
        init: function () {
            function e(e) {
                var t = i.highLightMaterial = new THREE.MeshBasicMaterial;
                t.map = e, t.needsUpdate = !0
            }

            var t = this.el, i = this, r = "assets/images/controller-pressed.png", s = null;
            this.controller = null, this.modelLoaded = !1, this.onModelLoaded = this.onModelLoaded.bind(this), t.addEventListener("model-loaded", this.onModelLoaded), t.addEventListener("changeBrushSizeAbs", function (e) {
                if ((0 !== e.detail.axis[0] || 0 !== e.detail.axis[1]) && i.previousAxis !== e.detail.axis[1]) {
                    var r = e.detail.axis[1] / 300, s = t.components.brush.schema.size,
                        n = THREE.Math.clamp(i.el.getAttribute("brush").size - r, s.min, s.max);
                    i.el.setAttribute("brush", "size", n)
                }
            }), t.addEventListener("changeBrushSizeInc", function (e) {
                if ((0 !== e.detail.axis[0] || 0 !== e.detail.axis[1]) && i.previousAxis !== e.detail.axis[1]) {
                    i.touchStarted && (i.touchStarted = !1, i.startAxis = (e.detail.axis[1] + 1) / 2);
                    var r = (e.detail.axis[1] + 1) / 2, s = (i.startAxis - r) / 2;
                    i.startAxis = r;
                    var n = i.el.getAttribute("brush").size, a = t.components.brush.schema.size,
                        o = THREE.Math.clamp(n - s, a.min, a.max);
                    i.el.setAttribute("brush", "size", o)
                }
            }), i.touchStarted = !1, t.addEventListener("startChangeBrushSize", function () {
                i.touchStarted = !0
            }), t.addEventListener("controllerconnected", function (e) {
                var i = e.detail.name;
                if (s = Utils.getTooltips(i), "windows-motion-controls" === i) ; else if ("oculus-touch-controls" === i) {
                    var r = e.detail.component.data.hand;
                    t.setAttribute("obj-model", {
                        obj: "assets/models/oculus-" + r + "-controller.obj",
                        mtl: "https://cdn.aframe.io/controllers/oculus/oculus-touch-controller-" + r + ".mtl"
                    })
                } else {
                    if ("vive-controls" !== i) return;
                    t.setAttribute("json-model", {src: "assets/models/controller_vive.json"})
                }
                s && s.forEach(function (e) {
                    e.setAttribute("visible", !0)
                }), this.controller = i
            }), t.addEventListener("brushsize-changed", function (e) {
                i.changeBrushSize(e.detail.size)
            }), t.addEventListener("brushcolor-changed", function (e) {
                i.changeBrushColor(e.detail.color)
            }), t.sceneEl.systems.material.loadTexture(r, {src: r}, e), this.startAxis = 0, this.numberStrokes = 0, document.addEventListener("stroke-started", function (e) {
                if (e.detail.entity.components["paint-controls"] === i && (i.numberStrokes++, i.system.numberStrokes++, 3 === i.system.numberStrokes)) {
                    var t = Array.prototype.slice.call(document.querySelectorAll("[tooltip]")), r = {opacity: 1},
                        s = new AFRAME.TWEEN.Tween(r).to({opacity: 0}, 1e3).onComplete(function () {
                            t.forEach(function (e) {
                                e.setAttribute("visible", !1)
                            })
                        }).delay(2e3).onUpdate(function () {
                            t.forEach(function (e) {
                                e.setAttribute("tooltip", {opacity: r.opacity})
                            })
                        });
                    s.start()
                }
            })
        },
        changeBrushColor: function (e) {
            this.modelLoaded && this.buttonMeshes.sizeHint && (this.buttonMeshes.colorTip.material.color.copy(e), this.buttonMeshes.sizeHint.material.color.copy(e))
        },
        changeBrushSize: function (e) {
            var t = e / 2 * 10;
            this.modelLoaded && this.buttonMeshes.sizeHint && this.buttonMeshes.sizeHint.scale.set(t, t, 1)
        },
        mapping: {
            axis0: "trackpad",
            axis1: "trackpad",
            button0: "trackpad",
            button1: "trigger",
            button2: "grip",
            button3: "menu",
            button4: "system"
        },
        update: function () {
            var e = this.data, t = this.el;
            t.setAttribute("vive-controls", {
                hand: e.hand,
                model: !1
            }), t.setAttribute("oculus-touch-controls", {
                hand: e.hand,
                model: !1
            }), t.setAttribute("windows-motion-controls", {hand: e.hand})
        },
        play: function () {
        },
        pause: function () {
        },
        onModelLoaded: function (e) {
            if (e.target === this.el) {
                var t, i = e.detail.model;
                t = this.buttonMeshes = {}, t.sizeHint = i.getObjectByName("sizehint"), t.colorTip = i.getObjectByName("tip"), this.modelLoaded = !0, this.changeBrushSize(this.el.components.brush.data.size), this.changeBrushColor(this.el.components.brush.color)
            }
        },
        onButtonEvent: function (e, t) {
            var i = this.mapping["button" + e];
            this.el.emit(i + t), this.updateModel(i, t)
        },
        updateModel: function (e, t) {
            var i = "up" === t ? this.material : this.highLightMaterial, r = this.buttonMeshes, s = r && r[e];
            if ("down" === t && s && !this.material && (i = this.material = s.material), i) return "grip" === e ? (r.grip.left.material = i, void (r.grip.right.material = i)) : void (s && (s.material = i))
        }
    })
}, function (e, t) {
    AFRAME.registerComponent("ui", {
        schema: {brightness: {default: 1, max: 1, min: 0}}, dependencies: ["ui-raycaster"], init: function () {
            var e = this.el, t = this.uiEl = document.createElement("a-entity"),
                i = this.rayEl = document.createElement("a-entity");
            this.closed = !0, this.isTooltipPaused = !1, this.colorStack = ["#272727", "#727272", "#FFFFFF", "#24CAFF", "#249F90", "#F2E646", "#EF2D5E"], this.bindMethods(), this.colorHasChanged = !0, this.highlightMaterials = {}, this.intersectedObjects = [], this.hoveredOffObjects = [], this.hoveredOnObjects = [], this.pressedObjects = {}, this.selectedObjects = {}, this.unpressedObjects = {}, this.brushButtonsMapping = {}, this.brushRegexp = /^(?!.*(fg|bg)$)brush[0-9]+/, this.colorHistoryRegexp = /^(?!.*(fg|bg)$)colorhistory[0-9]+$/, this.hsv = {
                h: 0,
                s: 0,
                v: 1
            }, this.rayAngle = 45, this.rayDistance = .2, this.cursorOffset = new THREE.Vector3(.06409, .01419, -.10242), t.setAttribute("material", {
                color: "#ffffff",
                flatShading: !0,
                shader: "flat",
                transparent: !0,
                fog: !1,
                src: "#uinormal"
            }), t.setAttribute("obj-model", "obj:#uiobj"), t.setAttribute("position", "0 0.04 -0.15"), t.setAttribute("scale", "0 0 0"), t.setAttribute("visible", !1), t.classList.add("apainter-ui"), e.appendChild(t), i.setAttribute("line", ""), e.appendChild(i), e.setAttribute("ui-raycaster", {
                far: this.rayDistance,
                objects: ".apainter-ui",
                rotation: -this.rayAngle
            }), this.controller = null;
            var r = this;
            e.addEventListener("controllerconnected", function (i) {
                var s = i.detail.name;
                r.tooltips = Utils.getTooltips(s), r.controller = {
                    name: s,
                    hand: i.detail.component.data.hand
                }, "oculus-touch-controls" === s ? (r.uiEl.setAttribute("rotation", "45 0 0"), t.setAttribute("position", "0 0.13 -0.08"), r.rayAngle = 0, e.setAttribute("ui-raycaster", {rotation: 0})) : "windows-motion-controls" === s && (r.rayAngle = 25, r.rayDistance = 1, e.setAttribute("ui-raycaster", {
                    rotation: -30,
                    far: r.rayDistance
                })), r.el.isPlaying && r.addToggleEvent()
            })
        }, initColorWheel: function () {
            var e = this.objects.hueWheel,
                t = "\t      varying vec2 vUv;\t      void main() {\t        vUv = uv;\t        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\t        gl_Position = projectionMatrix * mvPosition;\t      }\t      ",
                i = "\t      #define M_PI2 6.28318530718\n \t      uniform float brightness;\t      varying vec2 vUv;\t      vec3 hsb2rgb(in vec3 c){\t          vec3 rgb = clamp(abs(mod(c.x * 6.0 + vec3(0.0, 4.0, 2.0), 6.0) - 3.0) - 1.0, \t                           0.0, \t                           1.0 );\t          rgb = rgb * rgb * (3.0 - 2.0 * rgb);\t          return c.z * mix( vec3(1.0), rgb, c.y);\t      }\t      \t      void main() {\t        vec2 toCenter = vec2(0.5) - vUv;\t        float angle = atan(toCenter.y, toCenter.x);\t        float radius = length(toCenter) * 2.0;\t        vec3 color = hsb2rgb(vec3((angle / M_PI2) + 0.5, radius, brightness));\t        gl_FragColor = vec4(color, 1.0);\t      }\t      ",
                r = new THREE.ShaderMaterial({
                    uniforms: {brightness: {type: "f", value: this.hsv.v}},
                    vertexShader: t,
                    fragmentShader: i
                });
            e.material = r
        }, bindMethods: function () {
            this.onComponentChanged = this.onComponentChanged.bind(this), this.onTriggerChanged = this.onTriggerChanged.bind(this), this.onIntersection = this.onIntersection.bind(this), this.onIntersected = this.onIntersected.bind(this), this.onIntersectionCleared = this.onIntersectionCleared.bind(this), this.onIntersectedCleared = this.onIntersectedCleared.bind(this), this.onModelLoaded = this.onModelLoaded.bind(this), this.onStrokeStarted = this.onStrokeStarted.bind(this), this.toggleMenu = this.toggleMenu.bind(this)
        }, tick: function () {
            this.el.components["ui-raycaster"].refreshObjects(), !this.closed && this.handEl && (this.updateIntersections(), this.handleHover(), this.handlePressedButtons())
        }, onTriggerChanged: function (e) {
            var t = e.detail.value;
            this.lastTriggerValue = t, e.detail.value >= .25 ? this.triggeredPressed = !0 : (this.triggeredPressed = !1, this.handleButtonUp())
        }, handleButtonDown: function (e, t) {
            var i = e.name;
            if (!this.activeWidget || this.activeWidget === i) {
                switch (this.activeWidget = i, !0) {
                    case"brightness" === i:
                        this.onBrightnessDown(t);
                        break;
                    case"brushnext" === i:
                        this.pressedObjects[i] || this.nextPage();
                        break;
                    case"brushprev" === i:
                        this.pressedObjects[i] || this.previousPage();
                        break;
                    case"clear" === i:
                        this.pressedObjects[i] || (this.el.sceneEl.systems.brush.clear(), this.playSound("ui_click1"));
                        break;
                    case"copy" === i:
                        this.pressedObjects[i] || (this.copyBrush(), this.playSound("ui_click1"));
                        break;
                    case"hue" === i:
                        this.onHueDown(t);
                        break;
                    case"save" === i:
                        this.pressedObjects[i] || (this.el.sceneEl.systems.painter.upload(), this.playSound("ui_click1"));
                        break;
                    case"sizebg" === i:
                        this.onBrushSizeBackgroundDown(t);
                        break;
                    case this.brushRegexp.test(i):
                        this.onBrushDown(i);
                        break;
                    case this.colorHistoryRegexp.test(i):
                        this.onColorHistoryButtonDown(e);
                        break;
                    default:
                        this.activeWidget = void 0
                }
                this.pressedObjects[i] = e
            }
        }, copyBrush: function () {
            var e = this.el.getAttribute("brush");
            this.handEl.setAttribute("brush", "brush", e.brush), this.handEl.setAttribute("brush", "color", e.color), this.handEl.setAttribute("brush", "size", e.size), this.colorHasChanged = !0
        }, handleButtonUp: function () {
            var e = this.pressedObjects, t = this.unpressedObjects;
            this.activeWidget = void 0, Object.keys(e).forEach(function (i) {
                var r = e[i].name;
                switch (!0) {
                    case"size" === r:
                }
                t[r] = e[r], delete e[r]
            })
        }, handlePressedButtons: function () {
            var e = this;
            this.triggeredPressed && this.hoveredOnObjects.forEach(function (t) {
                e.handleButtonDown(t.object, t.point)
            })
        }, onColorHistoryButtonDown: function (e) {
            var t = e.material.color.getHexString();
            this.handEl.setAttribute("brush", "color", "#" + t), this.playSound("ui_click0", e.name)
        }, onBrushDown: function (e) {
            var t = this.brushButtonsMapping[e];
            t && (this.selectBrushButton(e), this.handEl.setAttribute("brush", "brush", t.toLowerCase()))
        }, selectBrushButton: function (e) {
            var t = this.uiEl.getObject3D("mesh").getObjectByName(e + "bg"), i = this.selectedObjects,
                r = this.selectedBrush;
            r && (this.highlightMaterials[r.name] || this.initHighlightMaterial(t), r.material = this.highlightMaterials[r.name].normal, delete i[r.name]), i[t.name] = t, this.selectedBrush = t, this.playSound("ui_click1", e)
        }, onHueDown: function (e) {
            var t, i = this.objects.hueWheel, r = this.colorWheelSize;
            i.updateMatrixWorld(), i.worldToLocal(e), this.objects.hueCursor.position.copy(e), t = {
                r: Math.sqrt(e.x * e.x + e.z * e.z),
                theta: Math.PI + Math.atan2(-e.z, e.x)
            };
            var s = (t.theta * (180 / Math.PI) + 180) % 360;
            this.hsv.h = s / 360, this.hsv.s = t.r / r, this.updateColor(), this.playSound("ui_click0", "hue")
        }, updateColor: function () {
            var e = this.hsv2rgb(this.hsv), t = "rgb(" + e.r + ", " + e.g + ", " + e.b + ")";
            this.handEl.setAttribute("brush", "color", t), this.colorHasChanged = !0
        }, hsv2rgb: function (e) {
            var t, i, r, s, n, a, o, h, u = THREE.Math.clamp(e.h, 0, 1), c = THREE.Math.clamp(e.s, 0, 1), d = e.v;
            switch (s = Math.floor(6 * u), n = 6 * u - s, a = d * (1 - c), o = d * (1 - n * c), h = d * (1 - (1 - n) * c), s % 6) {
                case 0:
                    t = d, i = h, r = a;
                    break;
                case 1:
                    t = o, i = d, r = a;
                    break;
                case 2:
                    t = a, i = d, r = h;
                    break;
                case 3:
                    t = a, i = o, r = d;
                    break;
                case 4:
                    t = h, i = a, r = d;
                    break;
                case 5:
                    t = d, i = a, r = o
            }
            return {r: Math.round(255 * t), g: Math.round(255 * i), b: Math.round(255 * r)}
        }, rgb2hsv: function (e, t, i) {
            var r, s = Math.max(e, t, i), n = Math.min(e, t, i), a = s - n, o = 0 === s ? 0 : a / s, h = s;
            switch (1 === arguments.length && (t = e.g, i = e.b, e = e.r), s) {
                case n:
                    r = 0;
                    break;
                case e:
                    r = t - i + a * (t < i ? 6 : 0), r /= 6 * a;
                    break;
                case t:
                    r = i - e + 2 * a, r /= 6 * a;
                    break;
                case i:
                    r = e - t + 4 * a, r /= 6 * a
            }
            return {h: r, s: o, v: h}
        }, onBrightnessDown: function (e) {
            var t = this.objects.brightnessSlider, i = t.geometry.boundingBox, r = i.max.z - i.min.z;
            t.updateMatrixWorld(), t.worldToLocal(e);
            var s = 1 - (e.z - i.min.z) / r;
            s = THREE.Math.clamp(1.29 * s - .12, 0, 1), this.objects.hueWheel.material.uniforms.brightness.value = s, this.objects.brightnessCursor.rotation.y = 1.5 * s - 1.5, this.hsv.v = s, this.updateColor(), this.playSound("ui_click0", "brightness")
        }, onBrushSizeBackgroundDown: function (e) {
            var t = this.objects.sizeSlider, i = t.geometry.boundingBox, r = i.max.x - i.min.x;
            t.updateMatrixWorld(), t.worldToLocal(e);
            var s = (e.x - i.min.x) / r;
            s *= AFRAME.components.brush.schema.size.max, this.handEl.setAttribute("brush", "size", s), this.playSound("ui_click0", "sizebg")
        }, handleHover: function () {
            this.updateHoverObjects(), this.updateMaterials()
        }, updateHoverObjects: function () {
            var e = this.intersectedObjects;
            e = e.filter(function (e) {
                return "bb" !== e.object.name && "msg_save" !== e.object.name
            }), this.hoveredOffObjects = this.hoveredOnObjects.filter(function (t) {
                return e.indexOf(t) === -1
            }), this.hoveredOnObjects = e
        }, updateMaterials: function () {
            var e = new THREE.Vector3;
            return function () {
                var t = this, i = this.pressedObjects, r = this.unpressedObjects, s = this.selectedObjects;
                this.hoveredOffObjects.forEach(function (e) {
                    var i = e.object;
                    i.material = t.highlightMaterials[i.name].normal
                }), this.hoveredOnObjects.forEach(function (i) {
                    var r = i.object;
                    e.copy(i.point), t.highlightMaterials[r.name] || t.initHighlightMaterial(r), t.handRayEl.object3D.worldToLocal(e), t.handRayEl.setAttribute("line", "end", e), r.material = t.highlightMaterials[r.name].hover
                }), Object.keys(i).forEach(function (e) {
                    var r = i[e], s = t.highlightMaterials[r.name];
                    r.material = s.pressed || r.material
                }), Object.keys(r).forEach(function (e) {
                    var i = r[e], s = t.highlightMaterials[i.name];
                    i.material = s.normal, delete r[e]
                }), Object.keys(s).forEach(function (e) {
                    var i = s[e], r = t.highlightMaterials[i.name];
                    r && (i.material = r.selected)
                })
            }
        }(), addToggleEvent: function () {
            this.el.addEventListener("toggleMenu", this.toggleMenu)
        }, removeToggleEvent: function () {
            this.el.removeEventListener("toggleMenu", this.toggleMenu)
        }, play: function () {
            var e = this.el, t = this.handEl;
            this.controller && this.addToggleEvent(), e.addEventListener("model-loaded", this.onModelLoaded), e.addEventListener("raycaster-intersection", this.onIntersection), e.addEventListener("raycaster-intersection-cleared", this.onIntersectionCleared), e.addEventListener("raycaster-intersected", this.onIntersected), e.addEventListener("raycaster-intersected-cleared", this.onIntersectedCleared), t && this.addHandListeners()
        }, pause: function () {
            var e = this.el, t = this.handEl;
            this.controller && this.removeToggleEvent(), e.removeEventListener("raycaster-intersection", this.onIntersection), e.removeEventListener("raycaster-intersection-cleared", this.onIntersectionCleared), e.removeEventListener("raycaster-intersected", this.onIntersected), e.removeEventListener("raycaster-intersected-cleared", this.onIntersectedCleared), t && this.removeHandListeners()
        }, onModelLoaded: function (e) {
            function t(e) {
                e.visible = !0;
                var t = {opacity: 0}, i = new AFRAME.TWEEN.Tween(t).to({opacity: 1}, 500).onUpdate(function () {
                    n.messagesMaterial.opacity = t.opacity
                }).chain(new AFRAME.TWEEN.Tween(t).to({opacity: 0}, 500).delay(3e3).onComplete(function () {
                    e.visible = !1
                }).onUpdate(function () {
                    n.messagesMaterial.opacity = t.opacity
                }));
                i.start()
            }

            var i = this.uiEl, r = i.getObject3D("mesh");
            if (r = e.detail.model, "obj" === e.detail.format && r.getObjectByName("brightnesscursor")) {
                this.objects = {}, this.objects.brightnessCursor = r.getObjectByName("brightnesscursor"), this.objects.brightnessSlider = r.getObjectByName("brightness"), this.objects.brightnessSlider.geometry.computeBoundingBox(), this.objects.previousPage = r.getObjectByName("brushprev"), this.objects.nextPage = r.getObjectByName("brushnext"), this.objects.hueCursor = r.getObjectByName("huecursor"), this.objects.hueWheel = r.getObjectByName("hue"), this.objects.hueWheel.geometry.computeBoundingSphere(), this.colorWheelSize = this.objects.hueWheel.geometry.boundingSphere.radius, this.objects.sizeCursor = r.getObjectByName("size"), this.objects.sizeCursor.position.copy(this.cursorOffset), this.objects.colorHistory = [];
                for (var s = 0; s < 7; s++) this.objects.colorHistory[s] = r.getObjectByName("colorhistory" + s);
                this.objects.currentColor = r.getObjectByName("currentcolor"), this.objects.sizeSlider = r.getObjectByName("sizebg"), this.objects.sizeSlider.geometry.computeBoundingBox(), r.getObjectByName("bb").material = new THREE.MeshBasicMaterial({
                    color: 2395940,
                    alphaTest: 0,
                    visible: !1
                });
                var n = this;
                this.messagesMaterial = new THREE.MeshBasicMaterial({
                    map: null,
                    transparent: !0,
                    opacity: 0
                }), this.objects.messageSave = r.getObjectByName("msg_save"), this.objects.messageSave.material = this.messagesMaterial, this.objects.messageSave.visible = !1, this.objects.messageError = r.getObjectByName("msg_error"), this.objects.messageError.visible = !1, this.objects.messageError.material = this.messagesMaterial;
                var a = "assets/images/messages.png";
                this.el.sceneEl.systems.material.loadTexture(a, {src: a}, function (e) {
                    var t = n.messagesMaterial;
                    t.map = e, t.needsUpdate = !0
                }), this.el.sceneEl.addEventListener("drawing-upload-completed", function (e) {
                    t(n.objects.messageSave)
                }), this.el.sceneEl.addEventListener("drawing-upload-error", function (e) {
                    t(n.objects.messageError)
                }), this.initColorWheel(), this.initColorHistory(), this.initBrushesMenu(), this.setCursorTransparency(), this.updateColorUI(this.el.getAttribute("brush").color), this.updateSizeSlider(this.el.getAttribute("brush").size)
            }
        }, initBrushesMenu: function () {
            var e = this.objects.previousPage, t = this.objects.nextPage, i = Object.keys(AFRAME.BRUSHES);
            this.initHighlightMaterial(t), this.initHighlightMaterial(e), e.visible = !1, t.visible = !1, this.brushesPerPage = 15, this.brushesPagesNum = Math.ceil(i.length / this.brushesPerPage), this.brushesPage = 0, this.loadBrushes(this.brushesPage, this.brushesPerPage)
        }, setCursorTransparency: function () {
            var e = this.objects.hueCursor, t = this.objects.brightnessCursor, i = this.objects.sizeCursor;
            i.material.alphaTest = .5, e.material.alphaTest = .5, t.material.alphaTest = .5, i.material.transparent = !0, e.material.transparent = !0, t.material.transparent = !0
        }, loadBrushes: function () {
            var e = {};
            return function (t, i) {
                function r(t, i, r) {
                    function n(e) {
                        var t = c.getObjectByName("brush" + i);
                        l.brushButtonsMapping["brush" + i] = a, s(e, t)
                    }

                    var a = t ? (t.charAt(0).toUpperCase() + t.slice(1)).toLowerCase() : void 0;
                    return r && !e[a] ? void l.el.sceneEl.systems.material.loadTexture(r, {src: r}, n) : void n()
                }

                function s(t, i) {
                    var r = l.brushButtonsMapping[i.name], s = e[r] || new THREE.MeshBasicMaterial;
                    t ? (s.map = t, s.alphaTest = .5, s.transparent = !0) : e[r] || (s.visible = !1), e[r] = s, l.highlightMaterials[i.name] = {
                        normal: s,
                        hover: s,
                        pressed: s,
                        selected: s
                    }, i.material = s
                }

                var n, a, o, h, u = 0, c = this.uiEl.getObject3D("mesh"), d = Object.keys(AFRAME.BRUSHES), l = this;
                if (!(t < 0 || t >= this.brushesPagesNum)) for (0 === t ? this.objects.previousPage.visible = !1 : this.objects.previousPage.visible = !0, t === this.brushesPagesNum - 1 ? this.objects.nextPage.visible = !1 : this.objects.nextPage.visible = !0, h = 0; h < i; h++) o = t * i + h, n = d[o], a = n && AFRAME.BRUSHES[n].prototype.options.thumbnail, r(n, u, a), u += 1
            }
        }(), nextPage: function () {
            this.brushesPage >= this.brushesPagesNum - 1 || (this.brushesPage++, this.loadBrushes(this.brushesPage, this.brushesPerPage), this.playSound("ui_click1"))
        }, previousPage: function () {
            0 !== this.brushesPage && (this.brushesPage--, this.loadBrushes(this.brushesPage, this.brushesPerPage), this.playSound("ui_click1"))
        }, initHighlightMaterial: function (e) {
            var t = e.name, i = this.brushRegexp.test(t), r = t.indexOf("history") !== -1,
                s = "hue" === t || "huecursor" === t,
                n = {normal: e.material, hover: e.material, pressed: e.material, selected: e.material};
            i || r || s || (n.normal = e.material, n.hover = e.material.clone(), n.hover.map = this.system.hoverTexture, n.selected = e.material.clone(), n.selected.map = this.system.pressedTexture, n.pressed = e.material.clone(), n.pressed.map = this.system.pressedTexture), this.highlightMaterials[t] = n
        }, toggleMenu: function (e) {
            this.closed ? (this.system.closeAll(), this.open(), this.system.opened = this.el) : (this.close(), this.system.opened = void 0)
        }, open: function () {
            var e, t = this.uiEl, i = {x: 0, y: 0, z: 0};
            if (this.closed) {
                if (this.uiEl.setAttribute("visible", !0), e = new AFRAME.TWEEN.Tween(i).to({
                    x: 1,
                    y: 1,
                    z: 1
                }, 100).onUpdate(function () {
                    t.setAttribute("scale", this)
                }).easing(AFRAME.TWEEN.Easing.Exponential.Out), e.start(), this.el.setAttribute("brush", "enabled", !1), this.rayEl.setAttribute("visible", !1), this.closed = !1, this.tooltips) {
                    var r = this;
                    this.tooltips.forEach(function (e) {
                        e.getAttribute("visible") && t.parentEl.id !== e.parentEl.id && (r.isTooltipPaused = !0, e.setAttribute("visible", !1))
                    })
                }
                this.playSound("ui_menu")
            }
        }, updateIntersections: function () {
            var e = this.raycaster = new THREE.Raycaster;
            return function (t) {
                this.updateRaycaster(e), this.intersectedObjects = e.intersectObjects(this.menuEls, !0)
            }
        }(), onIntersection: function (e) {
            var t = this.closed && this.system.opened;
            this.el.components.brush.active || (this.rayEl.setAttribute("visible", !!t),
                this.el.setAttribute("brush", "enabled", !1))
        }, onIntersected: function (e) {
            var t = e.detail.el;
            this.handEl && this.removeHandListeners(), this.handEl = t, this.handRayEl = this.handEl.components.ui.rayEl, this.menuEls = this.uiEl.object3D.children, this.syncUI(), this.addHandListeners()
        }, addHandListeners: function () {
            var e = this.handEl;
            e.addEventListener("componentchanged", this.onComponentChanged), e.addEventListener("stroke-started", this.onStrokeStarted), e.addEventListener("triggerchanged", this.onTriggerChanged)
        }, removeHandListeners: function () {
            var e = this.handEl;
            e.removeEventListener("componentchanged", this.onComponentChanged), e.removeEventListener("stroke-started", this.onStrokeStarted), e.removeEventListener("triggerchanged", this.onTriggerChanged)
        }, onComponentChanged: function (e) {
            "brush" === e.detail.name && this.syncUI()
        }, syncUI: function () {
            var e;
            this.handEl && this.objects && (e = this.handEl.getAttribute("brush"), this.updateSizeSlider(e.size), this.updateColorUI(e.color), this.updateColorHistory())
        }, initColorHistory: function () {
            for (var e, t = this.objects.currentColor, i = 0; i < this.objects.colorHistory.length; i++) e = this.objects.colorHistory[i], e.material = e.material.clone(), e.material.map = this.system.selectedTexture;
            t.material = t.material.clone(), t.material.map = this.system.selectedTexture, this.updateColorHistory()
        }, updateColorHistory: function () {
            var e = this.handEl && this.handEl.getAttribute("brush").color, t = this.colorStack;
            e || (e = this.el.components.brush.schema.color.default), this.objects.currentColor.material.color.set(e);
            for (var i = 0; i < t.length; i++) e = t[t.length - i - 1], this.objects.colorHistory[i].material.color.set(e)
        }, updateSizeSlider: function (e) {
            var t = this.objects.sizeSlider, i = t.geometry.boundingBox, r = this.objects.sizeCursor,
                s = i.max.x - i.min.x, n = e / AFRAME.components.brush.schema.size.max, a = n * s;
            r.position.setX(a - this.cursorOffset.x);
            var o = n + .3;
            r.scale.set(o, 1, o)
        }, updateColorUI: function (e) {
            var t = new THREE.Color(e), i = this.hsv = this.rgb2hsv(t.r, t.g, t.b), r = 2 * i.h * Math.PI,
                s = i.s * this.colorWheelSize, n = s * Math.cos(r), a = s * Math.sin(r);
            this.objects.hueCursor.position.setX(n), this.objects.hueCursor.position.setZ(-a), this.objects.hueWheel.material.uniforms.brightness.value = this.hsv.v, this.objects.brightnessCursor.rotation.y = 1.5 * this.hsv.v - 1.5
        }, updateBrushSelector: function (e) {
            var t = this, i = Object.keys(this.brushButtonsMapping), r = this.brushButtonsMapping;
            i.forEach(function (i) {
                r[i] === e && t.selectBrushButton(i)
            })
        }, onIntersectionCleared: function () {
            this.checkMenuIntersections = !1, this.rayEl.setAttribute("visible", !1), this.el.setAttribute("brush", "enabled", !0)
        }, onIntersectedCleared: function (e) {
            this.handEl && this.handEl.removeEventListener("triggerchanged", this.onTriggerChanged)
        }, onStrokeStarted: function () {
            var e, t = this.colorStack;
            this.colorHasChanged && (e = this.handEl.getAttribute("brush").color, this.colorHasChanged = !1, 7 === t.length && t.shift(), t.push(e), this.syncUI())
        }, updateRaycaster: function () {
            var e = new THREE.Vector3, t = new THREE.Quaternion, i = new THREE.Vector3, r = new THREE.Vector3;
            return function (s) {
                var n = this.handEl.object3D;
                n.updateMatrixWorld(), n.matrixWorld.decompose(r, t, i), e.set(0, 0, -1), e.applyAxisAngle(new THREE.Vector3(1, 0, 0), 2 * -(this.rayAngle / 360) * Math.PI), e.applyQuaternion(t), s.far = this.rayDistance, s.set(r, e)
            }
        }(), close: function () {
            var e, t = this.uiEl, i = {x: 1, y: 1, z: 1};
            this.closed || (e = new AFRAME.TWEEN.Tween(i).to({x: 0, y: 0, z: 0}, 100).onUpdate(function () {
                t.setAttribute("scale", this)
            }).onComplete(function () {
                t.setAttribute("visible", !1)
            }).easing(AFRAME.TWEEN.Easing.Exponential.Out), e.start(), this.el.setAttribute("brush", "enabled", !0), this.closed = !0, this.tooltips && this.isTooltipPaused && (this.isTooltipPaused = !1, this.tooltips.forEach(function (e) {
                e.setAttribute("visible", !0)
            })), this.playSound("ui_menu"))
        }, playSound: function (e, t) {
            void 0 !== t && this.pressedObjects[t] || document.getElementById(e).play()
        }
    })
}, function (e, t) {
    AFRAME.registerComponent("ui-raycaster", {
        schema: {
            far: {default: 1 / 0},
            interval: {default: 100},
            near: {default: 0},
            objects: {default: ""},
            recursive: {default: !0},
            rotation: {default: 0}
        }, init: function () {
            this.direction = new THREE.Vector3, this.intersectedEls = [], this.objects = null, this.prevCheckTime = void 0, this.raycaster = new THREE.Raycaster, this.updateOriginDirection(), this.refreshObjects = this.refreshObjects.bind(this)
        }, play: function () {
            this.el.sceneEl.addEventListener("child-attached", this.refreshObjects), this.el.sceneEl.addEventListener("child-detached", this.refreshObjects)
        }, pause: function () {
            this.el.sceneEl.removeEventListener("child-attached", this.refreshObjects), this.el.sceneEl.removeEventListener("child-detached", this.refreshObjects)
        }, update: function () {
            var e = this.data, t = this.raycaster;
            t.far = e.far, t.near = e.near, this.refreshObjects()
        }, refreshObjects: function () {
            var e, t, i = this.data;
            if (i.objects) for (t = this.el.sceneEl.querySelectorAll(i.objects), this.objects = [], e = 0; e < t.length; e++) this.objects.push(t[e].object3D); else this.objects = this.el.sceneEl.object3D.children
        }, tick: function (e) {
            var t, i, r, s = this.el, n = this.data, a = this.prevCheckTime;
            a && e - a < n.interval || (r = this.intersectedEls.slice(), this.updateOriginDirection(), i = this.raycaster.intersectObjects(this.objects, n.recursive), i = i.filter(function (e) {
                return !!e.object.el
            }), t = this.intersectedEls = i.map(function (e) {
                return e.object.el
            }), i.forEach(function (e) {
                var t = e.object.el;
                t.emit("raycaster-intersected", {el: s, intersection: e})
            }), i.length && s.emit("raycaster-intersection", {els: t, intersections: i}), r.forEach(function (e) {
                t.indexOf(e) === -1 && (s.emit("raycaster-intersection-cleared", {el: e}), e.emit("raycaster-intersected-cleared", {el: s}))
            }))
        }, updateOriginDirection: function () {
            var e = new THREE.Quaternion, t = new THREE.Vector3, i = new THREE.Vector3;
            return function () {
                var r = this.el, s = this.direction, n = r.object3D;
                n.updateMatrixWorld(), n.matrixWorld.decompose(t, e, i), s.set(0, 0, -1), s.applyAxisAngle(new THREE.Vector3(1, 0, 0), this.data.rotation / 360 * 2 * Math.PI), s.applyQuaternion(e), this.raycaster.set(t, s)
            }
        }()
    })
}, function (e, t, i) {
    var r = i(9), s = i(24);
    !function () {
        s(function () {
            var e = {vertexColors: THREE.VertexColors, side: THREE.DoubleSide}, t = {
                roughness: .75,
                metalness: .25,
                vertexColors: THREE.VertexColors,
                map: window.atlas.map,
                side: THREE.DoubleSide
            }, i = {
                roughness: .75,
                metalness: .25,
                vertexColors: THREE.VertexColors,
                side: THREE.DoubleSide,
                map: window.atlas.map,
                transparent: !0,
                alphaTest: .5
            };
            r.addSharedBuffer("strip-flat", new THREE.MeshBasicMaterial(e), THREE.TriangleStripDrawMode), r.addSharedBuffer("strip-shaded", new THREE.MeshStandardMaterial(t), THREE.TriangleStripDrawMode), r.addSharedBuffer("strip-textured", new THREE.MeshStandardMaterial(i), THREE.TriangleStripDrawMode)
        });
        for (var e = {
            init: function (e, t) {
                this.sharedBuffer = r.getSharedBuffer("strip-" + this.materialOptions.type), this.sharedBuffer.restartPrimitive(), this.prevIdx = Object.assign({}, this.sharedBuffer.idx), this.idx = Object.assign({}, this.sharedBuffer.idx), this.first = !0
            }, remove: function () {
                this.sharedBuffer.remove(this.prevIdx, this.idx)
            }, undo: function () {
                this.sharedBuffer.undo(this.prevIdx)
            }, addPoint: function () {
                var e = new THREE.Vector3;
                return function (t, i, r, s, n) {
                    var a = this.materialOptions.converter;
                    e.set(1, 0, 0), e.applyQuaternion(i), e.normalize();
                    var o = r.clone(), h = r.clone(), u = this.data.size * s;
                    if (o.add(e.clone().multiplyScalar(u / 2)), h.add(e.clone().multiplyScalar(-u / 2)), this.first && this.prevIdx.position > 0 && (this.first = !1, this.sharedBuffer.addVertex(o.x, o.y, o.z), this.sharedBuffer.idx.normal++, this.sharedBuffer.idx.color++, this.sharedBuffer.idx.uv++, this.idx = Object.assign({}, this.sharedBuffer.idx)), this.sharedBuffer.addVertex(o.x, o.y, o.z), this.sharedBuffer.addVertex(h.x, h.y, h.z), this.sharedBuffer.idx.normal += 2, this.sharedBuffer.addColor(this.data.color.r, this.data.color.g, this.data.color.b), this.sharedBuffer.addColor(this.data.color.r, this.data.color.g, this.data.color.b), "textured" === this.materialOptions.type) {
                        this.sharedBuffer.idx.uv += 2;
                        for (var c, d, l = this.sharedBuffer.current.attributes.uv.array, m = 0; m < this.data.numPoints + 1; m++) c = m / this.data.numPoints, d = 4 * m, 0 !== this.prevIdx.uv && (d += 2 * (this.prevIdx.uv + 1)), l[d] = a.convertU(c), l[d + 1] = a.convertV(0), l[d + 2] = a.convertU(c), l[d + 3] = a.convertV(1)
                    }
                    return this.idx = Object.assign({}, this.sharedBuffer.idx), this.sharedBuffer.update(), this.computeStripVertexNormals(), !0
                }
            }(), computeStripVertexNormals: function () {
                var e = new THREE.Vector3, t = new THREE.Vector3, i = new THREE.Vector3, r = new THREE.Vector3,
                    s = new THREE.Vector3;
                return function () {
                    for (var n = 0 === this.prevIdx.position ? 0 : 3 * (this.prevIdx.position + 1), a = 3 * this.idx.position, o = this.sharedBuffer.current.attributes.position.array, h = this.sharedBuffer.current.attributes.normal.array, u = n; u <= a; u++) h[u] = 0;
                    var c = !0;
                    for (u = n; u < a - 6; u += 3) c ? (e.fromArray(o, u), t.fromArray(o, u + 3), i.fromArray(o, u + 6)) : (t.fromArray(o, u), i.fromArray(o, u + 6), e.fromArray(o, u + 3)), c = !c, r.subVectors(i, t), s.subVectors(e, t), r.cross(s), r.normalize(), h[u] += r.x, h[u + 1] += r.y, h[u + 2] += r.z, h[u + 3] += r.x, h[u + 4] += r.y, h[u + 5] += r.z, h[u + 6] += r.x, h[u + 7] += r.y, h[u + 8] += r.z;
                    for (u = n + 6; u < a - 6; u++) h[u] = h[u] / 3;
                    h[n + 3] = h[n + 3] / 2, h[n + 3 + 1] = h[n + 3 + 1] / 2, h[n + 3 + 2] = h[n + 3 + 2] / 2, h[a - 6] = h[a - 6] / 2, h[a - 6 + 1] = h[a - 6 + 1] / 2, h[a - 6 + 2] = h[a - 6 + 2] / 2
                }
            }()
        }, t = [{name: "flat", materialOptions: {type: "flat"}, thumbnail: "brushes/thumb_flat.gif"}, {
            name: "smooth",
            materialOptions: {type: "shaded"},
            thumbnail: "brushes/thumb_smooth.gif"
        }, {
            name: "squared-textured",
            materialOptions: {type: "textured", textureSrc: "brushes/squared_textured.png"},
            thumbnail: "brushes/thumb_squared_textured.gif"
        }, {
            name: "line-gradient",
            materialOptions: {type: "textured", textureSrc: "brushes/line_gradient.png"},
            thumbnail: "brushes/thumb_line_gradient.gif"
        }, {
            name: "silky-flat",
            materialOptions: {type: "textured", textureSrc: "brushes/silky_flat.png"},
            thumbnail: "brushes/thumb_silky_flat.gif"
        }, {
            name: "silky-textured",
            materialOptions: {type: "textured", textureSrc: "brushes/silky_textured.png"},
            thumbnail: "brushes/thumb_silky_textured.gif"
        }, {
            name: "lines1",
            materialOptions: {type: "textured", textureSrc: "brushes/lines1.png"},
            thumbnail: "brushes/thumb_lines1.gif"
        }, {
            name: "lines2",
            materialOptions: {type: "textured", textureSrc: "brushes/lines2.png"},
            thumbnail: "brushes/thumb_lines2.gif"
        }, {
            name: "lines3",
            materialOptions: {type: "textured", textureSrc: "brushes/lines3.png"},
            thumbnail: "brushes/thumb_lines3.gif"
        }, {
            name: "lines4",
            materialOptions: {type: "textured", textureSrc: "brushes/lines4.png"},
            thumbnail: "brushes/thumb_lines4.gif"
        }, {
            name: "lines5",
            materialOptions: {type: "textured", textureSrc: "brushes/lines5.png"},
            thumbnail: "brushes/thumb_lines5.gif"
        }, {
            name: "line-grunge1",
            materialOptions: {type: "textured", textureSrc: "brushes/line_grunge1.png"},
            thumbnail: "brushes/thumb_line_grunge1.gif"
        }, {
            name: "line-grunge2",
            materialOptions: {type: "textured", textureSrc: "brushes/line_grunge2.png"},
            thumbnail: "brushes/thumb_line_grunge2.gif"
        }, {
            name: "line-grunge3",
            materialOptions: {type: "textured", textureSrc: "brushes/line_grunge3.png"},
            thumbnail: "brushes/thumb_line_grunge3.gif"
        }], i = 0; i < t.length; i++) {
            var n = t[i];
            n.materialOptions.textureSrc ? n.materialOptions.converter = window.atlas.getUVConverters(n.materialOptions.textureSrc) : n.materialOptions.converter = window.atlas.getUVConverters(null), AFRAME.registerBrush(n.name, Object.assign({}, e, {materialOptions: n.materialOptions}), {
                thumbnail: n.thumbnail,
                maxPoints: 3e3
            })
        }
    }()
}, function (e, t) {
    e.exports = function (e) {
        function t() {
            var t = document.querySelector("a-scene");
            t.hasLoaded ? e() : t.addEventListener("loaded", e())
        }

        "complete" === document.readyState || "loaded" === document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)
    }
}, function (e, t, i) {
    var r = i(9), s = i(24);
    !function () {
        s(function () {
            var e = new THREE.MeshStandardMaterial({
                side: THREE.DoubleSide,
                map: window.atlas.map,
                vertexColors: THREE.VertexColors,
                transparent: !0,
                alphaTest: .5,
                roughness: .75,
                metalness: .25
            }), t = new THREE.MeshBasicMaterial({
                side: THREE.DoubleSide,
                map: window.atlas.map,
                vertexColors: THREE.VertexColors,
                transparent: !0,
                alphaTest: .5
            });
            r.addSharedBuffer("tris-flat", t, THREE.TrianglesDrawMode), r.addSharedBuffer("tris-shaded", e, THREE.TrianglesDrawMode)
        });
        for (var e = {
            init: function (e, t) {
                this.sharedBuffer = r.getSharedBuffer("tris-" + this.materialOptions.type), this.prevIdx = Object.assign({}, this.sharedBuffer.idx), this.idx = Object.assign({}, this.sharedBuffer.idx), this.currAngle = 0, this.subTextures = 1, this.angleJitter = 0, this.autoRotate = !1, void 0 !== this.materialOptions.subTextures && (this.subTextures = this.materialOptions.subTextures), this.materialOptions.autoRotate === !0 && (this.autoRotate = !0), void 0 !== this.materialOptions.angleJitter && (this.angleJitter = this.materialOptions.angleJitter, this.angleJitter = 2 * this.angleJitter - this.angleJitter)
            }, remove: function () {
                this.sharedBuffer.remove(this.prevIdx, this.idx)
            }, undo: function () {
                this.sharedBuffer.undo(this.prevIdx)
            }, addPoint: function () {
                var e = new THREE.Vector3, t = new THREE.Vector3, i = new THREE.Vector3, r = new THREE.Vector3,
                    s = new THREE.Vector3, n = new THREE.Vector3, a = new THREE.Vector3, o = Math.PI / 2;
                return function (h, u, c, d, l) {
                    t.set(1, 0, 0), t.applyQuaternion(u), t.normalize(), e.set(0, 1, 0), e.applyQuaternion(u), e.normalize();
                    var m = this.data.size * d / 2, p = Math.PI / 4 + Math.random() * this.angleJitter;
                    this.autoRotate && (this.currAngle += .1, p += this.currAngle), i.copy(c).add(a.copy(t.applyAxisAngle(e, p)).multiplyScalar(m)), r.copy(c).add(a.copy(t.applyAxisAngle(e, o)).multiplyScalar(m)), s.copy(c).add(a.copy(t.applyAxisAngle(e, o)).multiplyScalar(m)), n.copy(c).add(t.applyAxisAngle(e, o).multiplyScalar(m));
                    this.idx.position, this.idx.position;
                    this.sharedBuffer.addVertex(i.x, i.y, i.z), this.sharedBuffer.addVertex(r.x, r.y, r.z), this.sharedBuffer.addVertex(s.x, s.y, s.z), this.sharedBuffer.addVertex(s.x, s.y, s.z), this.sharedBuffer.addVertex(n.x, n.y, n.z), this.sharedBuffer.addVertex(i.x, i.y, i.z);
                    for (var f = 0; f < 6; f++) this.sharedBuffer.addNormal(e.x, e.y, e.z), this.sharedBuffer.addColor(this.data.color.r, this.data.color.g, this.data.color.b);
                    var b = (6 * this.data.numPoints * 2, 0), g = 1;
                    if (this.subTextures > 1) {
                        var v = Math.floor(Math.random() * this.subTextures);
                        b = 1 / this.subTextures * v, g = b + 1 / this.subTextures
                    }
                    var E = this.materialOptions.converter;
                    return this.sharedBuffer.addUV(E.convertU(b), E.convertV(1)), this.sharedBuffer.addUV(E.convertU(b), E.convertV(0)), this.sharedBuffer.addUV(E.convertU(g), E.convertV(0)), this.sharedBuffer.addUV(E.convertU(g), E.convertV(0)), this.sharedBuffer.addUV(E.convertU(g), E.convertV(1)), this.sharedBuffer.addUV(E.convertU(b), E.convertV(1)), this.idx = Object.assign({}, this.sharedBuffer.idx), this.sharedBuffer.update(), !0
                }
            }()
        }, t = [{
            name: "dots",
            materialOptions: {type: "shaded", textureSrc: "brushes/stamp_dots.png"},
            thumbnail: "brushes/thumb_stamp_dots.gif",
            spacing: .01
        }, {
            name: "squares",
            materialOptions: {type: "shaded", textureSrc: "brushes/stamp_squares.png"},
            thumbnail: "brushes/thumb_stamp_squares.gif",
            spacing: .01
        }, {
            name: "column",
            materialOptions: {type: "shaded", autoRotate: !0, textureSrc: "brushes/stamp_column.png"},
            thumbnail: "brushes/thumb_stamp_column.gif",
            spacing: .01
        }, {
            name: "gear1",
            materialOptions: {
                type: "shaded",
                angleJitter: 2 * Math.PI,
                subTextures: 2,
                textureSrc: "brushes/stamp_gear.png"
            },
            thumbnail: "brushes/thumb_stamp_gear.gif",
            spacing: .05
        }, {
            name: "grunge1",
            materialOptions: {type: "shaded", angleJitter: 2 * Math.PI, textureSrc: "brushes/stamp_grunge1.png"},
            thumbnail: "brushes/stamp_grunge1.png",
            spacing: .02
        }, {
            name: "grunge2",
            materialOptions: {type: "shaded", angleJitter: 2 * Math.PI, textureSrc: "brushes/stamp_grunge2.png"},
            thumbnail: "brushes/stamp_grunge2.png",
            spacing: .02
        }, {
            name: "grunge3",
            materialOptions: {type: "shaded", angleJitter: 2 * Math.PI, textureSrc: "brushes/stamp_grunge3.png"},
            thumbnail: "brushes/stamp_grunge3.png",
            spacing: .02
        }, {
            name: "grunge4",
            materialOptions: {type: "shaded", angleJitter: 2 * Math.PI, textureSrc: "brushes/stamp_grunge4.png"},
            thumbnail: "brushes/stamp_grunge4.png",
            spacing: .02
        }, {
            name: "grunge5",
            materialOptions: {type: "shaded", angleJitter: 2 * Math.PI, textureSrc: "brushes/stamp_grunge5.png"},
            thumbnail: "brushes/thumb_stamp_grunge5.gif",
            spacing: .02
        }, {
            name: "leaf1",
            materialOptions: {type: "shaded", angleJitter: Math.PI, textureSrc: "brushes/stamp_leaf1.png"},
            thumbnail: "brushes/stamp_leaf1.png",
            spacing: .03
        }, {
            name: "leaf2",
            materialOptions: {type: "shaded", angleJitter: 60 * Math.PI / 180, textureSrc: "brushes/stamp_leaf2.png"},
            thumbnail: "brushes/thumb_stamp_leaf2.gif",
            spacing: .03
        }, {
            name: "leaf3",
            materialOptions: {type: "shaded", angleJitter: 60 * Math.PI / 180, textureSrc: "brushes/stamp_leaf3.png"},
            thumbnail: "brushes/thumb_stamp_leaf3.gif",
            spacing: .03
        }, {
            name: "fur1",
            materialOptions: {
                type: "shaded",
                angleJitter: 40 * Math.PI / 180,
                subTextures: 2,
                textureSrc: "brushes/stamp_fur1.png"
            },
            thumbnail: "brushes/stamp_fur1.png",
            spacing: .01
        }, {
            name: "fur2",
            materialOptions: {
                type: "shaded",
                angleJitter: 10 * Math.PI / 180,
                subTextures: 3,
                textureSrc: "brushes/stamp_fur2.png"
            },
            thumbnail: "brushes/stamp_fur2.png",
            spacing: .01
        }, {
            name: "grass",
            materialOptions: {
                type: "shaded",
                angleJitter: 10 * Math.PI / 180,
                subTextures: 3,
                textureSrc: "brushes/stamp_grass.png"
            },
            thumbnail: "brushes/thumb_stamp_grass.png",
            spacing: .03
        }, {
            name: "bush",
            materialOptions: {type: "shaded", subTextures: 2, textureSrc: "brushes/stamp_bush.png"},
            thumbnail: "brushes/thumb_stamp_bush.gif",
            spacing: .04
        }, {
            name: "star",
            materialOptions: {type: "shaded", textureSrc: "brushes/stamp_star.png"},
            thumbnail: "brushes/thumb_stamp_star.png",
            spacing: .06
        }, {
            name: "snow",
            materialOptions: {type: "shaded", angleJitter: 2 * Math.PI, textureSrc: "brushes/stamp_snow.png"},
            thumbnail: "brushes/thumb_stamp_snow.png",
            spacing: .06
        }], i = 0; i < t.length; i++) {
            var n = t[i];
            n.materialOptions.textureSrc && (n.materialOptions.map = window.atlas.map, n.materialOptions.converter = window.atlas.getUVConverters(n.materialOptions.textureSrc), delete n.materialOptions.textureSrc), AFRAME.registerBrush(n.name, Object.assign({}, e, {materialOptions: n.materialOptions}), {
                thumbnail: n.thumbnail,
                spacing: n.spacing,
                maxPoints: 3e3
            })
        }
    }()
}, function (e, t) {
    AFRAME.registerBrush("spheres", {
        init: function (e, t) {
            this.material = new THREE.MeshStandardMaterial({
                color: this.data.color,
                roughness: .5,
                metalness: .5,
                side: THREE.DoubleSide,
                shading: THREE.FlatShading
            }), this.geometry = new THREE.IcosahedronGeometry(1, 0)
        }, addPoint: function (e, t, i, r, s) {
            var n = new THREE.Mesh(this.geometry, this.material), a = this.data.size / 2 * r;
            return n.scale.set(a, a, a), n.initialScale = n.scale.clone(), n.phase = Math.random() * Math.PI * 2, n.position.copy(i), n.rotation.copy(t), this.object3D.add(n), !0
        }, tick: function (e, t) {
            for (var i = 0; i < this.object3D.children.length; i++) {
                var r = this.object3D.children[i], s = (Math.sin(r.phase + e / 500) + 1) / 2 + .1;
                r.scale.copy(r.initialScale).multiplyScalar(s)
            }
        }
    }, {thumbnail: "brushes/thumb_spheres.gif", spacing: .01})
}, function (e, t) {
    AFRAME.registerBrush("cubes", {
        init: function (e, t) {
            this.material = new THREE.MeshStandardMaterial({
                color: this.data.color,
                roughness: .5,
                metalness: .5,
                side: THREE.DoubleSide,
                shading: THREE.FlatShading
            }), this.geometry = new THREE.BoxGeometry(1, 1, 1)
        }, addPoint: function (e, t, i, r, s) {
            var n = new THREE.Mesh(this.geometry, this.material), a = r * this.data.size * Math.random();
            return n.scale.set(a, a, a), n.position.copy(i), n.rotation.copy(t), this.object3D.add(n), !0
        }
    }, {thumbnail: "brushes/thumb_cubes.gif", spacing: .01})
}, function (e, t) {
    !function () {
        var e = "varying vec2 vUv; \t    void main() { \t      vUv = uv; \t      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 ); \t    }",
            t = "uniform sampler2D tDiffuse; \t    uniform float amount; \t    uniform float time; \t    varying vec2 vUv; \t    \t    vec3 hsv2rgb(vec3 c) { \t        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0); \t        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www); \t        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y); \t    } \t    \t    void main() { \t      float h = mod(vUv.x - time / 3000.0, 1.0); \t      vec4 color = vec4(hsv2rgb(vec3(h, 1.0, 0.5)), 1.0); \t      gl_FragColor = color; \t    }",
            r = new THREE.ShaderMaterial({
                vertexShader: e,
                fragmentShader: t,
                side: THREE.DoubleSide,
                uniforms: {time: {type: "f", value: 0}}
            });
        AFRAME.registerBrush("line-rainbow", {
            init: function (e, t) {
                this.idx = 0, this.geometry = new THREE.BufferGeometry, this.vertices = new Float32Array(3 * this.options.maxPoints * 3), this.uvs = new Float32Array(2 * this.options.maxPoints * 2), this.linepositions = new Float32Array(this.options.maxPoints), this.geometry.setDrawRange(0, 0), this.geometry.addAttribute("position", new THREE.BufferAttribute(this.vertices, 3).setDynamic(!0)), this.geometry.addAttribute("uv", new THREE.BufferAttribute(this.uvs, 2).setDynamic(!0)), this.geometry.addAttribute("lineposition", new THREE.BufferAttribute(this.linepositions, 1).setDynamic(!0)), this.material = r;
                var i = new THREE.Mesh(this.geometry, this.material);
                i.drawMode = THREE.TriangleStripDrawMode, i.frustumCulled = !1, i.vertices = this.vertices, this.object3D.add(i)
            }, addPoint: function () {
                var e = new THREE.Vector3, t = new THREE.Vector3, r = new THREE.Vector3, s = new THREE.Vector3;
                return function (n, a, o, h, u) {
                    var c = 0;
                    for (i = 0; i < this.data.numPoints; i++) this.uvs[c++] = i / (this.data.numPoints - 1), this.uvs[c++] = 0, this.uvs[c++] = i / (this.data.numPoints - 1), this.uvs[c++] = 1;
                    e.set(1, 0, 0), e.applyQuaternion(a), e.normalize(), t.copy(o), r.copy(o);
                    var d = this.data.size * h;
                    return t.add(s.copy(e).multiplyScalar(d / 2)), r.add(s.copy(e).multiplyScalar(-d / 2)), this.vertices[this.idx++] = t.x, this.vertices[this.idx++] = t.y, this.vertices[this.idx++] = t.z, this.vertices[this.idx++] = r.x, this.vertices[this.idx++] = r.y, this.vertices[this.idx++] = r.z, this.geometry.attributes.position.needsUpdate = !0, this.geometry.attributes.uv.needsUpdate = !0, this.geometry.setDrawRange(0, 2 * this.data.numPoints), !0
                }
            }(), tick: function (e, t) {
                this.material.uniforms.time.value = e
            }
        }, {thumbnail: "brushes/thumb_rainbow.png", maxPoints: 3e3})
    }()
}, function (e, t) {
    AFRAME.registerBrush("single-sphere", {
        init: function (e, t) {
            this.material = new THREE.MeshStandardMaterial({
                color: this.data.color,
                roughness: .6,
                metalness: .2,
                side: THREE.FrontSide,
                shading: THREE.SmoothShading
            }), this.geometry = new THREE.IcosahedronGeometry(1, 2), this.mesh = new THREE.Mesh(this.geometry, this.material), this.object3D.add(this.mesh), this.mesh.visible = !1
        }, addPoint: function (e, t, i, r, s) {
            this.firstPoint || (this.firstPoint = i.clone(), this.mesh.position.set(this.firstPoint.x, this.firstPoint.y, this.firstPoint.z)), this.mesh.visible = !0;
            var n = this.firstPoint.distanceTo(i);
            return this.mesh.scale.set(n, n, n), !0
        }
    }, {thumbnail: "brushes/thumb_single_sphere.png", spacing: 0})
}]);