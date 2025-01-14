!function(r) {
    var t = {};
    function e(n) {
        if (t[n])
            return t[n].exports;
        var o = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return r[n].call(o.exports, o, o.exports, e),
        o.l = !0,
        o.exports
    }
    e.m = r,
    e.c = t,
    e.d = function(r, t, n) {
        e.o(r, t) || Object.defineProperty(r, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    e.r = function(r) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }
    ,
    e.t = function(r, t) {
        if (1 & t && (r = e(r)),
        8 & t)
            return r;
        if (4 & t && "object" == typeof r && r && r.__esModule)
            return r;
        var n = Object.create(null);
        if (e.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: r
        }),
        2 & t && "string" != typeof r)
            for (var o in r)
                e.d(n, o, function(t) {
                    return r[t]
                }
                .bind(null, o));
        return n
    }
    ,
    e.n = function(r) {
        var t = r && r.__esModule ? function() {
            return r.default
        }
        : function() {
            return r
        }
        ;
        return e.d(t, "a", t),
        t
    }
    ,
    e.o = function(r, t) {
        return Object.prototype.hasOwnProperty.call(r, t)
    }
    ,
    e.p = "",
    e(e.s = 0)
}([function(r, t, e) {
    const n = e(1)
      , o = e(16)
      , c = e(17)
      , u = e(18);
    window.runGenScene = function() {
        var r = document.getElementById("app");
        ((r,t)=>{
            document.body.style.backgroundColor = t.background;
            const e = t;
            r.ports.requestFssRebuild.subscribe(({layer: t, model: c, value: u})=>{
                const i = c.layers[t];
                if (o(i)) {
                    const o = n(c, u, e.layers[t].sceneFuzz);
                    r.ports.rebuildFss.send({
                        value: o,
                        layer: t
                    })
                }
                r.ports.hideControls.send(null)
            }
            );
            const u = c(e);
            u.layers = e.layers.map(r=>{
                const t = c(r);
                return t.model = JSON.stringify(r.model),
                t
            }
            ),
            r.ports.import_.send(JSON.stringify(u))
        }
        )(u.Main.embed(r), window.jsGenScene)
    }
}
, function(r, t, e) {
    window.FSSAvoidFloat32Array = !0,
    e(2),
    e(3),
    e(4),
    e(5),
    e(6),
    e(7),
    e(8),
    e(9),
    e(10),
    e(11),
    e(12),
    e(13),
    e(14),
    e(15),
    r.exports = function(r, t, e) {
        var n = r.palette
          , o = new FSS.Scene
          , c = new FSS.Plane(r.size[0],r.size[1],t.faces[0],t.faces[1])
          , u = new FSS.Material(n[0],n[1])
          , i = new FSS.Mesh(c,u)
          , a = new FSS.Light(n[0],n[1])
          , _ = new FSS.Light(n[1],n[2]);
        return a.speed = t.lightSpeed,
        _.speed = t.lightSpeed,
        function() {
            var r, t;
            for (o.add(i),
            o.add(a),
            o.add(_),
            r = c.vertices.length - 1; r >= 0; r--)
                (t = c.vertices[r]).anchor = FSS.Vector3.clone(t.position),
                t.v0 = e && e[r] ? e[r].v0 : FSS.Vector3.create(Math.randomInRange(.2, 1), Math.randomInRange(.2, 1), Math.randomInRange(.2, 1)),
                t.time = e && e[r] ? e[r].time : Math.randomInRange(0, Math.PIM2),
                t.gradient = e && e[r] ? e[r].gradient : Math.randomInRange(.3, 1);
            a.setPosition(120, 120, 50),
            _.setPosition(30, 100, 30)
        }(),
        o
    }
}
, function(r, t) {
    FSS = {
        FRONT: 0,
        BACK: 1,
        DOUBLE: 2,
        SVGNS: "http://www.w3.org/2000/svg"
    },
    FSS.Array = "function" == typeof Float32Array && void 0 === window.FSSAvoidFloat32Array ? Float32Array : Array,
    FSS.Utils = {
        isNumber: function(r) {
            return !isNaN(parseFloat(r)) && isFinite(r)
        }
    },
    function() {
        for (var r = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e)
            window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"],
            window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
            var n = (new Date).getTime()
              , o = Math.max(0, 16 - (n - r))
              , c = window.setTimeout(function() {
                t(n + o)
            }, o);
            return r = n + o,
            c
        }
        ),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(r) {
            clearTimeout(r)
        }
        )
    }()
}
, function(r, t) {
    FSS.Vector3 = {
        create: function(r, t, e) {
            var n = new FSS.Array(3);
            return this.set(n, r, t, e),
            n
        },
        clone: function(r) {
            var t = this.create();
            return this.copy(t, r),
            t
        },
        set: function(r, t, e, n) {
            return r[0] = t || 0,
            r[1] = e || 0,
            r[2] = n || 0,
            this
        },
        setX: function(r, t) {
            return r[0] = t || 0,
            this
        },
        setY: function(r, t) {
            return r[1] = t || 0,
            this
        },
        setZ: function(r, t) {
            return r[2] = t || 0,
            this
        },
        copy: function(r, t) {
            return r[0] = t[0],
            r[1] = t[1],
            r[2] = t[2],
            this
        },
        add: function(r, t) {
            return r[0] += t[0],
            r[1] += t[1],
            r[2] += t[2],
            this
        },
        addVectors: function(r, t, e) {
            return r[0] = t[0] + e[0],
            r[1] = t[1] + e[1],
            r[2] = t[2] + e[2],
            this
        },
        addScalar: function(r, t) {
            return r[0] += t,
            r[1] += t,
            r[2] += t,
            this
        },
        subtract: function(r, t) {
            return r[0] -= t[0],
            r[1] -= t[1],
            r[2] -= t[2],
            this
        },
        subtractVectors: function(r, t, e) {
            return r[0] = t[0] - e[0],
            r[1] = t[1] - e[1],
            r[2] = t[2] - e[2],
            this
        },
        subtractScalar: function(r, t) {
            return r[0] -= t,
            r[1] -= t,
            r[2] -= t,
            this
        },
        multiply: function(r, t) {
            return r[0] *= t[0],
            r[1] *= t[1],
            r[2] *= t[2],
            this
        },
        multiplyVectors: function(r, t, e) {
            return r[0] = t[0] * e[0],
            r[1] = t[1] * e[1],
            r[2] = t[2] * e[2],
            this
        },
        multiplyScalar: function(r, t) {
            return r[0] *= t,
            r[1] *= t,
            r[2] *= t,
            this
        },
        divide: function(r, t) {
            return r[0] /= t[0],
            r[1] /= t[1],
            r[2] /= t[2],
            this
        },
        divideVectors: function(r, t, e) {
            return r[0] = t[0] / e[0],
            r[1] = t[1] / e[1],
            r[2] = t[2] / e[2],
            this
        },
        divideScalar: function(r, t) {
            return 0 !== t ? (r[0] /= t,
            r[1] /= t,
            r[2] /= t) : (r[0] = 0,
            r[1] = 0,
            r[2] = 0),
            this
        },
        cross: function(r, t) {
            var e = r[0]
              , n = r[1]
              , o = r[2];
            return r[0] = n * t[2] - o * t[1],
            r[1] = o * t[0] - e * t[2],
            r[2] = e * t[1] - n * t[0],
            this
        },
        crossVectors: function(r, t, e) {
            return r[0] = t[1] * e[2] - t[2] * e[1],
            r[1] = t[2] * e[0] - t[0] * e[2],
            r[2] = t[0] * e[1] - t[1] * e[0],
            this
        },
        min: function(r, t) {
            return r[0] < t && (r[0] = t),
            r[1] < t && (r[1] = t),
            r[2] < t && (r[2] = t),
            this
        },
        max: function(r, t) {
            return r[0] > t && (r[0] = t),
            r[1] > t && (r[1] = t),
            r[2] > t && (r[2] = t),
            this
        },
        clamp: function(r, t, e) {
            return this.min(r, t),
            this.max(r, e),
            this
        },
        limit: function(r, t, e) {
            var n = this.length(r);
            return null !== t && n < t ? this.setLength(r, t) : null !== e && n > e && this.setLength(r, e),
            this
        },
        dot: function(r, t) {
            return r[0] * t[0] + r[1] * t[1] + r[2] * t[2]
        },
        normalise: function(r) {
            return this.divideScalar(r, this.length(r))
        },
        negate: function(r) {
            return this.multiplyScalar(r, -1)
        },
        distanceSquared: function(r, t) {
            var e = r[0] - t[0]
              , n = r[1] - t[1]
              , o = r[2] - t[2];
            return e * e + n * n + o * o
        },
        distance: function(r, t) {
            return Math.sqrt(this.distanceSquared(r, t))
        },
        lengthSquared: function(r) {
            return r[0] * r[0] + r[1] * r[1] + r[2] * r[2]
        },
        length: function(r) {
            return Math.sqrt(this.lengthSquared(r))
        },
        setLength: function(r, t) {
            var e = this.length(r);
            return 0 !== e && t !== e && this.multiplyScalar(r, t / e),
            this
        }
    }
}
, function(r, t) {
    FSS.Vector4 = {
        create: function(r, t, e, n) {
            var o = new FSS.Array(4);
            return this.set(o, r, t, e),
            o
        },
        set: function(r, t, e, n, o) {
            return r[0] = t || 0,
            r[1] = e || 0,
            r[2] = n || 0,
            r[3] = o || 0,
            this
        },
        setX: function(r, t) {
            return r[0] = t || 0,
            this
        },
        setY: function(r, t) {
            return r[1] = t || 0,
            this
        },
        setZ: function(r, t) {
            return r[2] = t || 0,
            this
        },
        setW: function(r, t) {
            return r[3] = t || 0,
            this
        },
        add: function(r, t) {
            return r[0] += t[0],
            r[1] += t[1],
            r[2] += t[2],
            r[3] += t[3],
            this
        },
        multiplyVectors: function(r, t, e) {
            return r[0] = t[0] * e[0],
            r[1] = t[1] * e[1],
            r[2] = t[2] * e[2],
            r[3] = t[3] * e[3],
            this
        },
        multiplyScalar: function(r, t) {
            return r[0] *= t,
            r[1] *= t,
            r[2] *= t,
            r[3] *= t,
            this
        },
        min: function(r, t) {
            return r[0] < t && (r[0] = t),
            r[1] < t && (r[1] = t),
            r[2] < t && (r[2] = t),
            r[3] < t && (r[3] = t),
            this
        },
        max: function(r, t) {
            return r[0] > t && (r[0] = t),
            r[1] > t && (r[1] = t),
            r[2] > t && (r[2] = t),
            r[3] > t && (r[3] = t),
            this
        },
        clamp: function(r, t, e) {
            return this.min(r, t),
            this.max(r, e),
            this
        }
    }
}
, function(r, t) {
    FSS.Vertex = function(r, t, e) {
        this.position = FSS.Vector3.create(r, t, e)
    }
    ,
    FSS.Vertex.prototype = {
        setPosition: function(r, t, e) {
            return FSS.Vector3.set(this.position, r, t, e),
            this
        }
    }
}
, function(r, t) {
    FSS.Color = function(r, t) {
        this.rgba = FSS.Vector4.create(),
        this.hex = r || "#000000",
        this.opacity = FSS.Utils.isNumber(t) ? t : 1,
        this.set(this.hex, this.opacity)
    }
    ,
    FSS.Color.prototype = {
        set: function(r, t) {
            var e = (r = r.replace("#", "")).length / 3;
            return this.rgba[0] = parseInt(r.substring(0 * e, 1 * e), 16) / 255,
            this.rgba[1] = parseInt(r.substring(1 * e, 2 * e), 16) / 255,
            this.rgba[2] = parseInt(r.substring(2 * e, 3 * e), 16) / 255,
            this.rgba[3] = FSS.Utils.isNumber(t) ? t : this.rgba[3],
            this
        },
        hexify: function(r) {
            var t = Math.ceil(255 * r).toString(16);
            return 1 === t.length && (t = "0" + t),
            t
        },
        format: function() {
            var r = this.hexify(this.rgba[0])
              , t = this.hexify(this.rgba[1])
              , e = this.hexify(this.rgba[2]);
            return this.hex = "#" + r + t + e,
            this.hex
        }
    }
}
, function(r, t) {
    FSS.Triangle = function(r, t, e) {
        this.a = r || new FSS.Vertex,
        this.b = t || new FSS.Vertex,
        this.c = e || new FSS.Vertex,
        this.vertices = [this.a, this.b, this.c],
        this.u = FSS.Vector3.create(),
        this.v = FSS.Vector3.create(),
        this.centroid = FSS.Vector3.create(),
        this.normal = FSS.Vector3.create(),
        this.color = new FSS.Color,
        this.polygon = document.createElementNS(FSS.SVGNS, "polygon"),
        this.polygon.setAttributeNS(null, "stroke-linejoin", "round"),
        this.polygon.setAttributeNS(null, "stroke-miterlimit", "1"),
        this.polygon.setAttributeNS(null, "stroke-width", "1"),
        this.computeCentroid(),
        this.computeNormal()
    }
    ,
    FSS.Triangle.prototype = {
        computeCentroid: function() {
            return this.centroid[0] = this.a.position[0] + this.b.position[0] + this.c.position[0],
            this.centroid[1] = this.a.position[1] + this.b.position[1] + this.c.position[1],
            this.centroid[2] = this.a.position[2] + this.b.position[2] + this.c.position[2],
            FSS.Vector3.divideScalar(this.centroid, 3),
            this
        },
        computeNormal: function() {
            return FSS.Vector3.subtractVectors(this.u, this.b.position, this.a.position),
            FSS.Vector3.subtractVectors(this.v, this.c.position, this.a.position),
            FSS.Vector3.crossVectors(this.normal, this.u, this.v),
            FSS.Vector3.normalise(this.normal),
            this
        }
    }
}
, function(r, t) {
    FSS.Object = function() {
        this.position = FSS.Vector3.create()
    }
    ,
    FSS.Object.prototype = {
        setPosition: function(r, t, e) {
            return FSS.Vector3.set(this.position, r, t, e),
            this
        }
    }
}
, function(r, t) {
    FSS.Light = function(r, t) {
        FSS.Object.call(this),
        this.ambient = new FSS.Color(r || "#FFFFFF"),
        this.diffuse = new FSS.Color(t || "#FFFFFF"),
        this.ray = FSS.Vector3.create()
    }
    ,
    FSS.Light.prototype = Object.create(FSS.Object.prototype)
}
, function(r, t) {
    FSS.Material = function(r, t) {
        this.ambient = new FSS.Color(r || "#444444"),
        this.diffuse = new FSS.Color(t || "#FFFFFF"),
        this.slave = new FSS.Color
    }
}
, function(r, t) {
    FSS.Geometry = function() {
        this.vertices = [],
        this.triangles = [],
        this.dirty = !1
    }
    ,
    FSS.Geometry.prototype = {
        update: function() {
            if (this.dirty) {
                var r, t;
                for (r = this.triangles.length - 1; r >= 0; r--)
                    (t = this.triangles[r]).computeCentroid(),
                    t.computeNormal();
                this.dirty = !1
            }
            return this
        }
    }
}
, function(r, t) {
    FSS.Plane = function(r, t, e, n) {
        FSS.Geometry.call(this),
        this.width = r || 100,
        this.height = t || 100,
        this.segments = e || 4,
        this.slices = n || 4,
        this.segmentWidth = this.width / this.segments,
        this.sliceHeight = this.height / this.slices;
        var o, c, u, i, a, _, l, s = [], f = -.5 * this.width, d = .5 * this.height;
        for (o = 0; o <= this.segments; o++)
            for (s.push([]),
            c = 0; c <= this.slices; c++)
                l = new FSS.Vertex(f + o * this.segmentWidth,d - c * this.sliceHeight),
                s[o].push(l),
                this.vertices.push(l);
        for (o = 0; o < this.segments; o++)
            for (c = 0; c < this.slices; c++)
                u = s[o + 0][c + 0],
                i = s[o + 0][c + 1],
                a = s[o + 1][c + 0],
                _ = s[o + 1][c + 1],
                t0 = new FSS.Triangle(u,i,a),
                t1 = new FSS.Triangle(a,i,_),
                this.triangles.push(t0, t1)
    }
    ,
    FSS.Plane.prototype = Object.create(FSS.Geometry.prototype)
}
, function(r, t) {
    FSS.Mesh = function(r, t) {
        FSS.Object.call(this),
        this.geometry = r || new FSS.Geometry,
        this.material = t || new FSS.Material,
        this.side = FSS.FRONT,
        this.visible = !0
    }
    ,
    FSS.Mesh.prototype = Object.create(FSS.Object.prototype),
    FSS.Mesh.prototype.update = function(r, t) {
        var e, n, o, c, u;
        if (this.geometry.update(),
        t)
            for (e = this.geometry.triangles.length - 1; e >= 0; e--) {
                for (n = this.geometry.triangles[e],
                FSS.Vector4.set(n.color.rgba),
                o = r.length - 1; o >= 0; o--)
                    c = r[o],
                    FSS.Vector3.subtractVectors(c.ray, c.position, n.centroid),
                    FSS.Vector3.normalise(c.ray),
                    u = FSS.Vector3.dot(n.normal, c.ray),
                    this.side === FSS.FRONT ? u = Math.max(u, 0) : this.side === FSS.BACK ? u = Math.abs(Math.min(u, 0)) : this.side === FSS.DOUBLE && (u = Math.max(Math.abs(u), 0)),
                    FSS.Vector4.multiplyVectors(this.material.slave.rgba, this.material.ambient.rgba, c.ambient.rgba),
                    FSS.Vector4.add(n.color.rgba, this.material.slave.rgba),
                    FSS.Vector4.multiplyVectors(this.material.slave.rgba, this.material.diffuse.rgba, c.diffuse.rgba),
                    FSS.Vector4.multiplyScalar(this.material.slave.rgba, u),
                    FSS.Vector4.add(n.color.rgba, this.material.slave.rgba);
                FSS.Vector4.clamp(n.color.rgba, 0, 1)
            }
        return this
    }
}
, function(r, t) {
    FSS.Scene = function() {
        this.meshes = [],
        this.lights = []
    }
    ,
    FSS.Scene.prototype = {
        add: function(r) {
            return r instanceof FSS.Mesh && !~this.meshes.indexOf(r) ? this.meshes.push(r) : r instanceof FSS.Light && !~this.lights.indexOf(r) && this.lights.push(r),
            this
        },
        remove: function(r) {
            return r instanceof FSS.Mesh && ~this.meshes.indexOf(r) ? this.meshes.splice(this.meshes.indexOf(r), 1) : r instanceof FSS.Light && ~this.lights.indexOf(r) && this.lights.splice(this.lights.indexOf(r), 1),
            this
        }
    }
}
, function(r, t) {
    Math.PIM2 = 2 * Math.PI,
    Math.PID2 = Math.PI / 2,
    Math.randomInRange = function(r, t) {
        return r + (t - r) * Math.random()
    }
    ,
    Math.clamp = function(r, t, e) {
        return r = Math.max(r, t),
        r = Math.min(r, e)
    }
}
, function(r, t) {
    r.exports = (r=>"fss" == r.kind || "fss-mirror" == r.kind)
}
, function(r, t) {
    r.exports = function(r) {
        return JSON.parse(JSON.stringify(r))
    }
}
, function(r, t) {
    (function() {
        "use strict";
        function t(r) {
            function t(t) {
                return function(e) {
                    return r(t, e)
                }
            }
            return t.arity = 2,
            t.func = r,
            t
        }
        function e(r) {
            function t(t) {
                return function(e) {
                    return function(n) {
                        return r(t, e, n)
                    }
                }
            }
            return t.arity = 3,
            t.func = r,
            t
        }
        function n(r) {
            function t(t) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return r(t, e, n, o)
                        }
                    }
                }
            }
            return t.arity = 4,
            t.func = r,
            t
        }
        function o(r) {
            function t(t) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return function(c) {
                                return r(t, e, n, o, c)
                            }
                        }
                    }
                }
            }
            return t.arity = 5,
            t.func = r,
            t
        }
        function c(r) {
            function t(t) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return function(c) {
                                return function(u) {
                                    return r(t, e, n, o, c, u)
                                }
                            }
                        }
                    }
                }
            }
            return t.arity = 6,
            t.func = r,
            t
        }
        function u(r) {
            function t(t) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return function(c) {
                                return function(u) {
                                    return function(i) {
                                        return r(t, e, n, o, c, u, i)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return t.arity = 7,
            t.func = r,
            t
        }
        function i(r) {
            function t(t) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return function(c) {
                                return function(u) {
                                    return function(i) {
                                        return function(a) {
                                            return r(t, e, n, o, c, u, i, a)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return t.arity = 8,
            t.func = r,
            t
        }
        function a(r) {
            function t(t) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return function(c) {
                                return function(u) {
                                    return function(i) {
                                        return function(a) {
                                            return function(_) {
                                                return r(t, e, n, o, c, u, i, a, _)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            return t.arity = 9,
            t.func = r,
            t
        }
        function _(r, t, e) {
            return 2 === r.arity ? r.func(t, e) : r(t)(e)
        }
        function l(r, t, e, n) {
            return 3 === r.arity ? r.func(t, e, n) : r(t)(e)(n)
        }
        function s(r, t, e, n, o) {
            return 4 === r.arity ? r.func(t, e, n, o) : r(t)(e)(n)(o)
        }
        function f(r, t, e, n, o, c) {
            return 5 === r.arity ? r.func(t, e, n, o, c) : r(t)(e)(n)(o)(c)
        }
        function d(r, t, e, n, o, c, u) {
            return 6 === r.arity ? r.func(t, e, n, o, c, u) : r(t)(e)(n)(o)(c)(u)
        }
        function p(r, t, e, n, o, c, u, i, a, _) {
            return 9 === r.arity ? r.func(t, e, n, o, c, u, i, a, _) : r(t)(e)(n)(o)(c)(u)(i)(a)(_)
        }
        var h = function() {
            var r = 32
              , n = 2
              , o = {
                ctor: "_Array",
                height: 0,
                table: []
            };
            function c(t, e) {
                var n = t.height;
                if (e.length === n) {
                    var o = {
                        ctor: "_Array",
                        height: n + 1,
                        table: [],
                        lengths: []
                    };
                    e.push(o)
                }
                e[n].table.push(t);
                var u = v(t);
                e[n].lengths.length > 0 && (u += e[n].lengths[e[n].lengths.length - 1]),
                e[n].lengths.push(u),
                e[n].table.length === r && (c(e[n], e),
                e[n] = {
                    ctor: "_Array",
                    height: n + 1,
                    table: [],
                    lengths: []
                })
            }
            function u(r, t) {
                var e = r.table.length - 1;
                r.table[e] = t,
                r.lengths[e] = v(t),
                r.lengths[e] += e > 0 ? r.lengths[e - 1] : 0
            }
            function i(r, t) {
                if (t.table.length > 0) {
                    r.table[0] = t,
                    r.lengths[0] = v(t);
                    for (var e = v(r.table[0]), n = 1; n < r.lengths.length; n++)
                        e += v(r.table[n]),
                        r.lengths[n] = e
                } else {
                    r.table.shift();
                    for (n = 1; n < r.lengths.length; n++)
                        r.lengths[n] = r.lengths[n] - r.lengths[0];
                    r.lengths.shift()
                }
            }
            function a(t, e) {
                for (var n = 0, o = 0; o < t.table.length; o++)
                    n += t.table[o].table.length;
                for (o = 0; o < e.table.length; o++)
                    n += e.table[o].table.length;
                return t.table.length + e.table.length - (Math.floor((n - 1) / r) + 1)
            }
            function l(r, t, e) {
                return e < r.length ? r[e] : t[e - r.length]
            }
            function s(r, t, e, n) {
                e < r.length ? r[e] = n : t[e - r.length] = n
            }
            function f(r, t, e, n) {
                s(r.table, t.table, e, n);
                var o = 0 === e || e === r.lengths.length ? 0 : l(r.lengths, r.lengths, e - 1);
                s(r.lengths, t.lengths, e, o + v(n))
            }
            function d(r, t) {
                t < 0 && (t = 0);
                var e = {
                    ctor: "_Array",
                    height: r,
                    table: new Array(t)
                };
                return r > 0 && (e.lengths = new Array(t)),
                e
            }
            function p(t, e, n) {
                for (var o = d(t.height, Math.min(r, t.table.length + e.table.length - n)), c = d(t.height, o.table.length - (t.table.length + e.table.length - n)), u = 0; l(t.table, e.table, u).table.length % r == 0; )
                    s(o.table, c.table, u, l(t.table, e.table, u)),
                    s(o.lengths, c.lengths, u, l(t.lengths, e.lengths, u)),
                    u++;
                for (var i = u, a = new d(t.height - 1,0), _ = 0; u - i - (a.table.length > 0 ? 1 : 0) < n; ) {
                    var p = l(t.table, e.table, u)
                      , h = Math.min(r - a.table.length, p.table.length);
                    if (a.table = a.table.concat(p.table.slice(_, h)),
                    a.height > 0)
                        for (var m = a.lengths.length, g = m; g < m + h - _; g++)
                            a.lengths[g] = v(a.table[g]),
                            a.lengths[g] += g > 0 ? a.lengths[g - 1] : 0;
                    _ += h,
                    p.table.length <= h && (u++,
                    _ = 0),
                    a.table.length === r && (f(o, c, i, a),
                    a = d(t.height - 1, 0),
                    i++)
                }
                for (a.table.length > 0 && (f(o, c, i, a),
                i++); u < t.table.length + e.table.length; )
                    f(o, c, i, l(t.table, e.table, u)),
                    u++,
                    i++;
                return [o, c]
            }
            function h(r) {
                return r.table[r.table.length - 1]
            }
            function m(r) {
                return r.table[0]
            }
            function g(r) {
                var t = {
                    ctor: "_Array",
                    height: r.height,
                    table: r.table.slice()
                };
                return r.height > 0 && (t.lengths = r.lengths.slice()),
                t
            }
            function v(r) {
                return 0 === r.height ? r.table.length : r.lengths[r.lengths.length - 1]
            }
            function b(r, t) {
                for (var e = r >> 5 * t.height; t.lengths[e] <= r; )
                    e++;
                return e
            }
            function y(r, t) {
                return 0 === t ? {
                    ctor: "_Array",
                    height: 0,
                    table: [r]
                } : {
                    ctor: "_Array",
                    height: t,
                    table: [y(r, t - 1)],
                    lengths: [1]
                }
            }
            function T(r, t) {
                return t === r.height ? r : {
                    ctor: "_Array",
                    height: t,
                    table: [T(r, t - 1)],
                    lengths: [v(r)]
                }
            }
            function w(r, t) {
                return {
                    ctor: "_Array",
                    height: r.height + 1,
                    table: [r, t],
                    lengths: [v(r), v(r) + v(t)]
                }
            }
            return {
                empty: o,
                fromList: function(t) {
                    if ("[]" === t.ctor)
                        return o;
                    for (var e = new Array(r), n = [], u = 0; "[]" !== t.ctor; )
                        e[u] = t._0,
                        t = t._1,
                        ++u === r && (c({
                            ctor: "_Array",
                            height: 0,
                            table: e
                        }, n),
                        e = new Array(r),
                        u = 0);
                    u > 0 && c({
                        ctor: "_Array",
                        height: 0,
                        table: e.splice(0, u)
                    }, n);
                    for (var i = 0; i < n.length - 1; i++)
                        n[i].table.length > 0 && c(n[i], n);
                    var a = n[n.length - 1];
                    return a.height > 0 && 1 === a.table.length ? a.table[0] : a
                },
                toList: function(r) {
                    return function r(t, e) {
                        for (var n = e.table.length - 1; n >= 0; n--)
                            t = 0 === e.height ? B.Cons(e.table[n], t) : r(t, e.table[n]);
                        return t
                    }(B.Nil, r)
                },
                initialize: t(function(t, e) {
                    return t <= 0 ? o : function t(e, n, o, c) {
                        if (0 === n) {
                            for (var u = new Array((c - o) % (r + 1)), i = 0; i < u.length; i++)
                                u[i] = e(o + i);
                            return {
                                ctor: "_Array",
                                height: 0,
                                table: u
                            }
                        }
                        for (var a = Math.pow(r, n), u = new Array(Math.ceil((c - o) / a)), _ = new Array(u.length), i = 0; i < u.length; i++)
                            u[i] = t(e, n - 1, o + i * a, Math.min(o + (i + 1) * a, c)),
                            _[i] = v(u[i]) + (i > 0 ? _[i - 1] : 0);
                        return {
                            ctor: "_Array",
                            height: n,
                            table: u,
                            lengths: _
                        }
                    }(e, Math.floor(Math.log(t) / Math.log(r)), 0, t)
                }),
                append: t(function(t, e) {
                    if (0 === t.table.length)
                        return e;
                    if (0 === e.table.length)
                        return t;
                    var o = function r(t, e) {
                        if (0 === t.height && 0 === e.height)
                            return [t, e];
                        if (1 !== t.height || 1 !== e.height)
                            if (t.height === e.height) {
                                t = g(t),
                                e = g(e);
                                var o = r(h(t), m(e));
                                u(t, o[1]),
                                i(e, o[0])
                            } else if (t.height > e.height) {
                                t = g(t);
                                var o = r(h(t), e);
                                u(t, o[0]),
                                e = T(o[1], o[1].height + 1)
                            } else {
                                e = g(e);
                                var o = r(t, m(e))
                                  , c = 0 === o[0].table.length ? 0 : 1
                                  , _ = 0 === c ? 1 : 0;
                                i(e, o[c]),
                                t = T(o[_], o[_].height + 1)
                            }
                        if (0 === t.table.length || 0 === e.table.length)
                            return [t, e];
                        var l = a(t, e);
                        return l <= n ? [t, e] : p(t, e, l)
                    }(t, e);
                    if (o[0].table.length + o[1].table.length <= r) {
                        if (0 === o[0].table.length)
                            return o[1];
                        if (0 === o[1].table.length)
                            return o[0];
                        if (o[0].table = o[0].table.concat(o[1].table),
                        o[0].height > 0) {
                            for (var c = v(o[0]), _ = 0; _ < o[1].lengths.length; _++)
                                o[1].lengths[_] += c;
                            o[0].lengths = o[0].lengths.concat(o[1].lengths)
                        }
                        return o[0]
                    }
                    if (o[0].height > 0) {
                        var l = a(t, e);
                        l > n && (o = p(o[0], o[1], l))
                    }
                    return w(o[0], o[1])
                }),
                push: t(function(t, e) {
                    var n = function t(e, n) {
                        if (0 === n.height) {
                            if (n.table.length < r) {
                                var o = {
                                    ctor: "_Array",
                                    height: 0,
                                    table: n.table.slice()
                                };
                                return o.table.push(e),
                                o
                            }
                            return null
                        }
                        var c = t(e, h(n));
                        if (null !== c) {
                            var o = g(n);
                            return o.table[o.table.length - 1] = c,
                            o.lengths[o.lengths.length - 1]++,
                            o
                        }
                        if (n.table.length < r) {
                            var u = y(e, n.height - 1)
                              , o = g(n);
                            return o.table.push(u),
                            o.lengths.push(o.lengths[o.lengths.length - 1] + v(u)),
                            o
                        }
                        return null
                    }(t, e);
                    return null !== n ? n : w(e, y(t, e.height))
                }),
                slice: e(function(r, t, e) {
                    return r < 0 && (r += v(e)),
                    t < 0 && (t += v(e)),
                    function r(t, e) {
                        if (0 === t)
                            return e;
                        if (0 === e.height) {
                            var n = {
                                ctor: "_Array",
                                height: 0
                            };
                            return n.table = e.table.slice(t, e.table.length + 1),
                            n
                        }
                        var o = b(t, e)
                          , c = r(t - (o > 0 ? e.lengths[o - 1] : 0), e.table[o]);
                        if (o === e.table.length - 1)
                            return c;
                        var n = {
                            ctor: "_Array",
                            height: e.height,
                            table: e.table.slice(o, e.table.length + 1),
                            lengths: new Array(e.table.length - o)
                        };
                        n.table[0] = c;
                        for (var u = 0, i = 0; i < n.table.length; i++)
                            u += v(n.table[i]),
                            n.lengths[i] = u;
                        return n
                    }(r, function r(t, e) {
                        if (t === v(e))
                            return e;
                        if (0 === e.height) {
                            var n = {
                                ctor: "_Array",
                                height: 0
                            };
                            return n.table = e.table.slice(0, t),
                            n
                        }
                        var o = b(t, e)
                          , c = r(t - (o > 0 ? e.lengths[o - 1] : 0), e.table[o]);
                        if (0 === o)
                            return c;
                        var n = {
                            ctor: "_Array",
                            height: e.height,
                            table: e.table.slice(0, o),
                            lengths: e.lengths.slice(0, o)
                        };
                        return c.table.length > 0 && (n.table[o] = c,
                        n.lengths[o] = v(c) + (o > 0 ? n.lengths[o - 1] : 0)),
                        n
                    }(t, e))
                }),
                get: t(function(r, t) {
                    if (r < 0 || r >= v(t))
                        throw new Error("Index " + r + " is out of range. Check the length of your array first or use getMaybe or getWithDefault.");
                    return function(r, t) {
                        for (var e = t.height; e > 0; e--) {
                            for (var n = r >> 5 * e; t.lengths[n] <= r; )
                                n++;
                            n > 0 && (r -= t.lengths[n - 1]),
                            t = t.table[n]
                        }
                        return t.table[r]
                    }(r, t)
                }),
                set: e(function(r, t, e) {
                    return r < 0 || v(e) <= r ? e : function r(t, e, n) {
                        if (0 === (n = g(n)).height)
                            n.table[t] = e;
                        else {
                            var o = b(t, n);
                            o > 0 && (t -= n.lengths[o - 1]),
                            n.table[o] = r(t, e, n.table[o])
                        }
                        return n
                    }(r, t, e)
                }),
                map: t(function r(t, e) {
                    var n = {
                        ctor: "_Array",
                        height: e.height,
                        table: new Array(e.table.length)
                    };
                    e.height > 0 && (n.lengths = e.lengths);
                    for (var o = 0; o < e.table.length; o++)
                        n.table[o] = 0 === e.height ? t(e.table[o]) : r(t, e.table[o]);
                    return n
                }),
                indexedMap: t(function(r, t) {
                    return function r(t, e, n) {
                        var o = {
                            ctor: "_Array",
                            height: e.height,
                            table: new Array(e.table.length)
                        };
                        e.height > 0 && (o.lengths = e.lengths);
                        for (var c = 0; c < e.table.length; c++)
                            o.table[c] = 0 === e.height ? _(t, n + c, e.table[c]) : r(t, e.table[c], 0 == c ? n : n + e.lengths[c - 1]);
                        return o
                    }(r, t, 0)
                }),
                foldl: e(function r(t, e, n) {
                    if (0 === n.height)
                        for (var o = 0; o < n.table.length; o++)
                            e = _(t, n.table[o], e);
                    else
                        for (o = 0; o < n.table.length; o++)
                            e = r(t, e, n.table[o]);
                    return e
                }),
                foldr: e(function r(t, e, n) {
                    if (0 === n.height)
                        for (var o = n.table.length; o--; )
                            e = _(t, n.table[o], e);
                    else
                        for (o = n.table.length; o--; )
                            e = r(t, e, n.table[o]);
                    return e
                }),
                length: v,
                toJSArray: function(r) {
                    var t = new Array(v(r));
                    return function r(t, e, n) {
                        for (var o = 0; o < n.table.length; o++)
                            if (0 === n.height)
                                t[e + o] = n.table[o];
                            else {
                                var c = 0 === o ? 0 : n.lengths[o - 1];
                                r(t, e + c, n.table[o])
                            }
                    }(t, 0, r),
                    t
                },
                fromJSArray: function(t) {
                    return 0 === t.length ? o : function t(e, n, o, c) {
                        if (0 === n)
                            return {
                                ctor: "_Array",
                                height: 0,
                                table: e.slice(o, c)
                            };
                        for (var u = Math.pow(r, n), i = new Array(Math.ceil((c - o) / u)), a = new Array(i.length), _ = 0; _ < i.length; _++)
                            i[_] = t(e, n - 1, o + _ * u, Math.min(o + (_ + 1) * u, c)),
                            a[_] = v(i[_]) + (_ > 0 ? a[_ - 1] : 0);
                        return {
                            ctor: "_Array",
                            height: n,
                            table: i,
                            lengths: a
                        }
                    }(t, Math.floor(Math.log(t.length) / Math.log(r)), 0, t.length)
                }
            }
        }()
          , m = function() {
            var r = ["LT", "EQ", "GT"];
            return {
                div: t(function(r, t) {
                    return r / t | 0
                }),
                rem: t(function(r, t) {
                    return r % t
                }),
                mod: t(function r(t, e) {
                    if (0 === e)
                        throw new Error("Cannot perform mod 0. Division by zero error.");
                    var n = t % e
                      , o = 0 === t ? 0 : e > 0 ? t >= 0 ? n : n + e : -r(-t, -e);
                    return o === e ? 0 : o
                }),
                pi: Math.PI,
                e: Math.E,
                cos: Math.cos,
                sin: Math.sin,
                tan: Math.tan,
                acos: Math.acos,
                asin: Math.asin,
                atan: Math.atan,
                atan2: t(Math.atan2),
                degrees: function(r) {
                    return r * Math.PI / 180
                },
                turns: function(r) {
                    return 2 * Math.PI * r
                },
                fromPolar: function(r) {
                    var t = r._0
                      , e = r._1;
                    return g.Tuple2(t * Math.cos(e), t * Math.sin(e))
                },
                toPolar: function(r) {
                    var t = r._0
                      , e = r._1;
                    return g.Tuple2(Math.sqrt(t * t + e * e), Math.atan2(e, t))
                },
                sqrt: Math.sqrt,
                logBase: t(function(r, t) {
                    return Math.log(t) / Math.log(r)
                }),
                negate: function(r) {
                    return -r
                },
                abs: function(r) {
                    return r < 0 ? -r : r
                },
                min: t(function(r, t) {
                    return g.cmp(r, t) < 0 ? r : t
                }),
                max: t(function(r, t) {
                    return g.cmp(r, t) > 0 ? r : t
                }),
                clamp: e(function(r, t, e) {
                    return g.cmp(e, r) < 0 ? r : g.cmp(e, t) > 0 ? t : e
                }),
                compare: t(function(t, e) {
                    return {
                        ctor: r[g.cmp(t, e) + 1]
                    }
                }),
                xor: t(function(r, t) {
                    return r !== t
                }),
                not: function(r) {
                    return !r
                },
                truncate: function(r) {
                    return 0 | r
                },
                ceiling: Math.ceil,
                floor: Math.floor,
                round: Math.round,
                toFloat: function(r) {
                    return r
                },
                isNaN: isNaN,
                isInfinite: function(r) {
                    return r === 1 / 0 || r === -1 / 0
                }
            }
        }()
          , g = function() {
            function r(t, e, n, o) {
                if (n > 100)
                    return o.push({
                        x: t,
                        y: e
                    }),
                    !0;
                if (t === e)
                    return !0;
                if ("object" != typeof t) {
                    if ("function" == typeof t)
                        throw new Error('Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense. Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#== which describes why it is this way and what the better version will look like.');
                    return !1
                }
                if (null === t || null === e)
                    return !1;
                if (t instanceof Date)
                    return t.getTime() === e.getTime();
                if (!("ctor"in t)) {
                    for (var c in t)
                        if (!r(t[c], e[c], n + 1, o))
                            return !1;
                    return !0
                }
                if ("RBNode_elm_builtin" !== t.ctor && "RBEmpty_elm_builtin" !== t.ctor || (t = Wr(t),
                e = Wr(e)),
                "Set_elm_builtin" === t.ctor && (t = $e(t),
                e = $e(e)),
                "::" === t.ctor) {
                    for (var u = t, i = e; "::" === u.ctor && "::" === i.ctor; ) {
                        if (!r(u._0, i._0, n + 1, o))
                            return !1;
                        u = u._1,
                        i = i._1
                    }
                    return u.ctor === i.ctor
                }
                if ("_Array" === t.ctor) {
                    var a = h.toJSArray(t)
                      , _ = h.toJSArray(e);
                    if (a.length !== _.length)
                        return !1;
                    for (var l = 0; l < a.length; l++)
                        if (!r(a[l], _[l], n + 1, o))
                            return !1;
                    return !0
                }
                if (!r(t.ctor, e.ctor, n + 1, o))
                    return !1;
                for (var c in t)
                    if (!r(t[c], e[c], n + 1, o))
                        return !1;
                return !0
            }
            var e = -1
              , n = 0
              , o = 1;
            var c = 0;
            var u = {
                ctor: "[]"
            };
            function i(r, t) {
                return {
                    ctor: "::",
                    _0: r,
                    _1: t
                }
            }
            function a(r) {
                return r.start.line == r.end.line ? "on line " + r.start.line : "between lines " + r.start.line + " and " + r.end.line
            }
            function _(r) {
                var t = typeof r;
                if ("function" === t)
                    return "<function>";
                if ("boolean" === t)
                    return r ? "True" : "False";
                if ("number" === t)
                    return r + "";
                if (r instanceof String)
                    return "'" + l(r, !0) + "'";
                if ("string" === t)
                    return '"' + l(r, !1) + '"';
                if (null === r)
                    return "null";
                if ("object" === t && "ctor"in r) {
                    var e = r.ctor.substring(0, 5);
                    if ("_Tupl" === e) {
                        var n = [];
                        for (var o in r)
                            "ctor" !== o && n.push(_(r[o]));
                        return "(" + n.join(",") + ")"
                    }
                    if ("_Task" === e)
                        return "<task>";
                    if ("_Array" === r.ctor)
                        return "Array.fromList " + _(br(r));
                    if ("<decoder>" === r.ctor)
                        return "<decoder>";
                    if ("_Process" === r.ctor)
                        return "<process:" + r.id + ">";
                    if ("::" === r.ctor) {
                        n = "[" + _(r._0);
                        for (r = r._1; "::" === r.ctor; )
                            n += "," + _(r._0),
                            r = r._1;
                        return n + "]"
                    }
                    if ("[]" === r.ctor)
                        return "[]";
                    if ("Set_elm_builtin" === r.ctor)
                        return "Set.fromList " + _($e(r));
                    if ("RBNode_elm_builtin" === r.ctor || "RBEmpty_elm_builtin" === r.ctor)
                        return "Dict.fromList " + _(Wr(r));
                    n = "";
                    for (var c in r)
                        if ("ctor" !== c) {
                            var u = _(r[c])
                              , i = u[0];
                            n += " " + ("{" === i || "(" === i || "<" === i || '"' === i || u.indexOf(" ") < 0 ? u : "(" + u + ")")
                        }
                    return r.ctor + n
                }
                if ("object" === t) {
                    if (r instanceof Date)
                        return "<" + r.toString() + ">";
                    if (r.elm_web_socket)
                        return "<websocket>";
                    n = [];
                    for (var o in r)
                        n.push(o + " = " + _(r[o]));
                    return 0 === n.length ? "{}" : "{ " + n.join(", ") + " }"
                }
                return "<internal structure>"
            }
            function l(r, t) {
                var e = r.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
                return t ? e.replace(/\'/g, "\\'") : e.replace(/\"/g, '\\"')
            }
            return {
                eq: function(t, e) {
                    for (var n, o = [], c = r(t, e, 0, o); c && (n = o.pop()); )
                        c = r(n.x, n.y, 0, o);
                    return c
                },
                cmp: function r(t, c) {
                    if ("object" != typeof t)
                        return t === c ? n : t < c ? e : o;
                    if (t instanceof String) {
                        var u = t.valueOf()
                          , i = c.valueOf();
                        return u === i ? n : u < i ? e : o
                    }
                    if ("::" === t.ctor || "[]" === t.ctor) {
                        for (; "::" === t.ctor && "::" === c.ctor; ) {
                            if ((a = r(t._0, c._0)) !== n)
                                return a;
                            t = t._1,
                            c = c._1
                        }
                        return t.ctor === c.ctor ? n : "[]" === t.ctor ? e : o
                    }
                    if ("_Tuple" === t.ctor.slice(0, 6)) {
                        var a, _ = t.ctor.slice(6) - 0;
                        if (0 === _)
                            return n;
                        if (_ >= 1) {
                            if ((a = r(t._0, c._0)) !== n)
                                return a;
                            if (_ >= 2) {
                                if ((a = r(t._1, c._1)) !== n)
                                    return a;
                                if (_ >= 3) {
                                    if ((a = r(t._2, c._2)) !== n)
                                        return a;
                                    if (_ >= 4) {
                                        if ((a = r(t._3, c._3)) !== n)
                                            return a;
                                        if (_ >= 5) {
                                            if ((a = r(t._4, c._4)) !== n)
                                                return a;
                                            if (_ >= 6) {
                                                if ((a = r(t._5, c._5)) !== n)
                                                    return a;
                                                if (_ >= 7)
                                                    throw new Error("Comparison error: cannot compare tuples with more than 6 elements.")
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        return n
                    }
                    throw new Error("Comparison error: comparison is only defined on ints, floats, times, chars, strings, lists of comparable values, and tuples of comparable values.")
                },
                Tuple0: {
                    ctor: "_Tuple0"
                },
                Tuple2: function(r, t) {
                    return {
                        ctor: "_Tuple2",
                        _0: r,
                        _1: t
                    }
                },
                chr: function(r) {
                    return new String(r)
                },
                update: function(r, t) {
                    var e = {};
                    for (var n in r)
                        e[n] = r[n];
                    for (var n in t)
                        e[n] = t[n];
                    return e
                },
                guid: function(r) {
                    return c++
                },
                append: t(function(r, t) {
                    if ("string" == typeof r)
                        return r + t;
                    if ("[]" === r.ctor)
                        return t;
                    var e = i(r._0, u)
                      , n = e;
                    for (r = r._1; "[]" !== r.ctor; )
                        n._1 = i(r._0, u),
                        r = r._1,
                        n = n._1;
                    return n._1 = t,
                    e
                }),
                crash: function(r, t) {
                    return function(e) {
                        throw new Error("Ran into a `Debug.crash` in module `" + r + "` " + a(t) + "\nThe message provided by the code author is:\n\n    " + e)
                    }
                },
                crashCase: function(r, t, e) {
                    return function(n) {
                        throw new Error("Ran into a `Debug.crash` in module `" + r + "`\n\nThis was caused by the `case` expression " + a(t) + ".\nOne of the branches ended with a crash and the following value got through:\n\n    " + _(e) + "\n\nThe message provided by the code author is:\n\n    " + n)
                    }
                },
                toString: _
            }
        }()
          , v = (t(function(r, t) {
            var e = t;
            return _(r, e._0, e._1)
        }),
        e(function(r, t, e) {
            return r({
                ctor: "_Tuple2",
                _0: t,
                _1: e
            })
        }),
        e(function(r, t, e) {
            return _(r, e, t)
        }))
          , b = t(function(r, t) {
            return r
        })
          , y = function(r) {
            return r
        };
        (F = F || {})["<|"] = t(function(r, t) {
            return r(t)
        }),
        (F = F || {})["|>"] = t(function(r, t) {
            return t(r)
        }),
        (F = F || {})[">>"] = e(function(r, t, e) {
            return t(r(e))
        }),
        (F = F || {})["<<"] = e(function(r, t, e) {
            return r(t(e))
        }),
        (F = F || {})["++"] = g.append;
        var T = g.toString
          , w = (m.isInfinite,
        m.isNaN,
        m.toFloat)
          , S = m.ceiling
          , k = m.floor
          , x = (m.truncate,
        m.round);
        m.not,
        m.xor;
        (F = F || {})["||"] = m.or,
        (F = F || {})["&&"] = m.and;
        m.max,
        m.min;
        var C = m.compare;
        (F = F || {})[">="] = m.ge,
        (F = F || {})["<="] = m.le,
        (F = F || {})[">"] = m.gt,
        (F = F || {})["<"] = m.lt,
        (F = F || {})["/="] = m.neq,
        (F = F || {})["=="] = m.eq;
        m.e,
        m.pi,
        m.clamp,
        m.logBase,
        m.abs,
        m.negate,
        m.sqrt,
        m.atan2,
        m.atan,
        m.asin,
        m.acos,
        m.tan,
        m.sin,
        m.cos;
        (F = F || {})["^"] = m.exp,
        (F = F || {})["%"] = m.mod;
        var F, L = m.rem;
        (F = F || {})["//"] = m.div,
        (F = F || {})["/"] = m.floatDiv,
        (F = F || {})["*"] = m.mul,
        (F = F || {})["-"] = m.sub,
        (F = F || {})["+"] = m.add;
        m.toPolar,
        m.fromPolar,
        m.turns;
        var R = m.degrees
          , A = t(function(r, t) {
            var e = t;
            return "Just" === e.ctor ? e._0 : r
        })
          , M = {
            ctor: "Nothing"
        }
          , P = t(function(r, t) {
            var e = t;
            return "Just" === e.ctor ? r(e._0) : M
        })
          , E = function(r) {
            return {
                ctor: "Just",
                _0: r
            }
        }
          , N = t(function(r, t) {
            var e = t;
            return "Just" === e.ctor ? E(r(e._0)) : M
        })
          , B = (e(function(r, t, e) {
            var n = {
                ctor: "_Tuple2",
                _0: t,
                _1: e
            };
            return "_Tuple2" === n.ctor && "Just" === n._0.ctor && "Just" === n._1.ctor ? E(_(r, n._0._0, n._1._0)) : M
        }),
        n(function(r, t, e, n) {
            var o = {
                ctor: "_Tuple3",
                _0: t,
                _1: e,
                _2: n
            };
            return "_Tuple3" === o.ctor && "Just" === o._0.ctor && "Just" === o._1.ctor && "Just" === o._2.ctor ? E(l(r, o._0._0, o._1._0, o._2._0)) : M
        }),
        o(function(r, t, e, n, o) {
            var c = {
                ctor: "_Tuple4",
                _0: t,
                _1: e,
                _2: n,
                _3: o
            };
            return "_Tuple4" === c.ctor && "Just" === c._0.ctor && "Just" === c._1.ctor && "Just" === c._2.ctor && "Just" === c._3.ctor ? E(s(r, c._0._0, c._1._0, c._2._0, c._3._0)) : M
        }),
        c(function(r, t, e, n, o, c) {
            var u = {
                ctor: "_Tuple5",
                _0: t,
                _1: e,
                _2: n,
                _3: o,
                _4: c
            };
            return "_Tuple5" === u.ctor && "Just" === u._0.ctor && "Just" === u._1.ctor && "Just" === u._2.ctor && "Just" === u._3.ctor && "Just" === u._4.ctor ? E(f(r, u._0._0, u._1._0, u._2._0, u._3._0, u._4._0)) : M
        }),
        function() {
            var r = {
                ctor: "[]"
            };
            function u(r, t) {
                return {
                    ctor: "::",
                    _0: r,
                    _1: t
                }
            }
            function i(t) {
                for (var e = r, n = t.length; n--; )
                    e = u(t[n], e);
                return e
            }
            function a(r) {
                for (var t = []; "[]" !== r.ctor; )
                    t.push(r._0),
                    r = r._1;
                return t
            }
            return {
                Nil: r,
                Cons: u,
                cons: t(u),
                toArray: a,
                fromArray: i,
                foldr: e(function(r, t, e) {
                    for (var n = a(e), o = t, c = n.length; c--; )
                        o = _(r, n[c], o);
                    return o
                }),
                map2: e(function(r, t, e) {
                    for (var n = []; "[]" !== t.ctor && "[]" !== e.ctor; )
                        n.push(_(r, t._0, e._0)),
                        t = t._1,
                        e = e._1;
                    return i(n)
                }),
                map3: n(function(r, t, e, n) {
                    for (var o = []; "[]" !== t.ctor && "[]" !== e.ctor && "[]" !== n.ctor; )
                        o.push(l(r, t._0, e._0, n._0)),
                        t = t._1,
                        e = e._1,
                        n = n._1;
                    return i(o)
                }),
                map4: o(function(r, t, e, n, o) {
                    for (var c = []; "[]" !== t.ctor && "[]" !== e.ctor && "[]" !== n.ctor && "[]" !== o.ctor; )
                        c.push(s(r, t._0, e._0, n._0, o._0)),
                        t = t._1,
                        e = e._1,
                        n = n._1,
                        o = o._1;
                    return i(c)
                }),
                map5: c(function(r, t, e, n, o, c) {
                    for (var u = []; "[]" !== t.ctor && "[]" !== e.ctor && "[]" !== n.ctor && "[]" !== o.ctor && "[]" !== c.ctor; )
                        u.push(f(r, t._0, e._0, n._0, o._0, c._0)),
                        t = t._1,
                        e = e._1,
                        n = n._1,
                        o = o._1,
                        c = c._1;
                    return i(u)
                }),
                sortBy: t(function(r, t) {
                    return i(a(t).sort(function(t, e) {
                        return g.cmp(r(t), r(e))
                    }))
                }),
                sortWith: t(function(r, t) {
                    return i(a(t).sort(function(t, e) {
                        var n = r(t)(e).ctor;
                        return "EQ" === n ? 0 : "LT" === n ? -1 : 1
                    }))
                })
            }
        }())
          , O = B.sortWith
          , z = (B.sortBy,
        t(function(r, t) {
            for (; ; ) {
                if (g.cmp(r, 0) < 1)
                    return t;
                var e = t;
                if ("[]" === e.ctor)
                    return t;
                r = r - 1,
                t = e._1
            }
        }))
          , I = B.map5
          , q = B.map4
          , V = B.map3
          , D = B.map2
          , G = t(function(r, t) {
            for (; ; ) {
                var e = t;
                if ("[]" === e.ctor)
                    return !1;
                if (r(e._0))
                    return !0;
                r = r,
                t = e._1
            }
        })
          , H = (t(function(r, t) {
            return !_(G, function(t) {
                return !r(t)
            }, t)
        }),
        B.foldr)
          , J = e(function(r, t, e) {
            for (; ; ) {
                var n = e;
                if ("[]" === n.ctor)
                    return t;
                var o = r
                  , c = _(r, n._0, t);
                r = o,
                t = c,
                e = n._1
            }
        })
          , U = function(r) {
            return l(J, t(function(r, t) {
                return t + 1
            }), 0, r)
        }
          , W = t(function(r, t) {
            return _(G, function(t) {
                return g.eq(t, r)
            }, t)
        })
          , j = function(r) {
            return "[]" === r.ctor
        }
          , Y = function(r) {
            var t = r;
            return "::" === t.ctor ? E(t._1) : M
        }
          , K = function(r) {
            var t = r;
            return "::" === t.ctor ? E(t._0) : M
        }
          , X = X || {};
        X["::"] = B.cons;
        var Z = t(function(r, e) {
            return l(H, t(function(t, e) {
                return {
                    ctor: "::",
                    _0: r(t),
                    _1: e
                }
            }), {
                ctor: "[]"
            }, e)
        })
          , $ = t(function(r, e) {
            var n = t(function(t, e) {
                return r(t) ? {
                    ctor: "::",
                    _0: t,
                    _1: e
                } : e
            });
            return l(H, n, {
                ctor: "[]"
            }, e)
        })
          , Q = e(function(r, t, e) {
            var n = r(t);
            return "Just" === n.ctor ? {
                ctor: "::",
                _0: n._0,
                _1: e
            } : e
        })
          , rr = t(function(r, t) {
            return l(H, Q(r), {
                ctor: "[]"
            }, t)
        })
          , tr = function(r) {
            return l(J, t(function(r, t) {
                return {
                    ctor: "::",
                    _0: r,
                    _1: t
                }
            }), {
                ctor: "[]"
            }, r)
        }
          , er = e(function(r, e, n) {
            var o = t(function(t, e) {
                var n = e;
                return "::" === n.ctor ? {
                    ctor: "::",
                    _0: _(r, t, n._0),
                    _1: e
                } : {
                    ctor: "[]"
                }
            });
            return tr(l(J, o, {
                ctor: "::",
                _0: e,
                _1: {
                    ctor: "[]"
                }
            }, n))
        })
          , nr = t(function(r, e) {
            return "[]" === e.ctor ? r : l(H, t(function(r, t) {
                return {
                    ctor: "::",
                    _0: r,
                    _1: t
                }
            }), e, r)
        })
          , or = function(r) {
            return l(H, nr, {
                ctor: "[]"
            }, r)
        }
          , cr = t(function(r, t) {
            return or(_(Z, r, t))
        })
          , ur = (t(function(r, e) {
            var n = t(function(t, e) {
                var n = e
                  , o = n._0
                  , c = n._1;
                return r(t) ? {
                    ctor: "_Tuple2",
                    _0: {
                        ctor: "::",
                        _0: t,
                        _1: o
                    },
                    _1: c
                } : {
                    ctor: "_Tuple2",
                    _0: o,
                    _1: {
                        ctor: "::",
                        _0: t,
                        _1: c
                    }
                }
            });
            return l(H, n, {
                ctor: "_Tuple2",
                _0: {
                    ctor: "[]"
                },
                _1: {
                    ctor: "[]"
                }
            }, e)
        }),
        t(function(r, e) {
            var n = e;
            if ("[]" === n.ctor)
                return {
                    ctor: "[]"
                };
            var o = t(function(t, e) {
                return {
                    ctor: "::",
                    _0: r,
                    _1: {
                        ctor: "::",
                        _0: t,
                        _1: e
                    }
                }
            })
              , c = l(H, o, {
                ctor: "[]"
            }, n._1);
            return {
                ctor: "::",
                _0: n._0,
                _1: c
            }
        }),
        e(function(r, t, e) {
            for (; ; ) {
                if (g.cmp(r, 0) < 1)
                    return e;
                var n = t;
                if ("[]" === n.ctor)
                    return e;
                r = r - 1,
                t = n._1,
                e = {
                    ctor: "::",
                    _0: n._0,
                    _1: e
                }
            }
        }))
          , ir = t(function(r, t) {
            return tr(l(ur, r, t, {
                ctor: "[]"
            }))
        })
          , ar = e(function(r, t, e) {
            if (g.cmp(t, 0) < 1)
                return {
                    ctor: "[]"
                };
            var n = {
                ctor: "_Tuple2",
                _0: t,
                _1: e
            };
            r: do {
                t: do {
                    if ("_Tuple2" !== n.ctor)
                        break r;
                    if ("[]" === n._1.ctor)
                        return e;
                    if ("::" !== n._1._1.ctor) {
                        if (1 === n._0)
                            break t;
                        break r
                    }
                    switch (n._0) {
                    case 1:
                        break t;
                    case 2:
                        return {
                            ctor: "::",
                            _0: n._1._0,
                            _1: {
                                ctor: "::",
                                _0: n._1._1._0,
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        };
                    case 3:
                        if ("::" === n._1._1._1.ctor)
                            return {
                                ctor: "::",
                                _0: n._1._0,
                                _1: {
                                    ctor: "::",
                                    _0: n._1._1._0,
                                    _1: {
                                        ctor: "::",
                                        _0: n._1._1._1._0,
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            };
                        break r;
                    default:
                        if ("::" === n._1._1._1.ctor && "::" === n._1._1._1._1.ctor) {
                            var o = n._1._1._1._0
                              , c = n._1._1._0
                              , u = n._1._0
                              , i = n._1._1._1._1._0
                              , a = n._1._1._1._1._1;
                            return g.cmp(r, 1e3) > 0 ? {
                                ctor: "::",
                                _0: u,
                                _1: {
                                    ctor: "::",
                                    _0: c,
                                    _1: {
                                        ctor: "::",
                                        _0: o,
                                        _1: {
                                            ctor: "::",
                                            _0: i,
                                            _1: _(ir, t - 4, a)
                                        }
                                    }
                                }
                            } : {
                                ctor: "::",
                                _0: u,
                                _1: {
                                    ctor: "::",
                                    _0: c,
                                    _1: {
                                        ctor: "::",
                                        _0: o,
                                        _1: {
                                            ctor: "::",
                                            _0: i,
                                            _1: l(ar, r + 1, t - 4, a)
                                        }
                                    }
                                }
                            }
                        }
                        break r
                    }
                } while (0);return {
                    ctor: "::",
                    _0: n._1._0,
                    _1: {
                        ctor: "[]"
                    }
                }
            } while (0);return e
        })
          , _r = t(function(r, t) {
            return l(ar, 0, r, t)
        })
          , lr = e(function(r, t, e) {
            for (; ; ) {
                if (g.cmp(t, 0) < 1)
                    return r;
                r = {
                    ctor: "::",
                    _0: e,
                    _1: r
                },
                t = t - 1,
                e = e
            }
        })
          , sr = (t(function(r, t) {
            return l(lr, {
                ctor: "[]"
            }, r, t)
        }),
        e(function(r, t, e) {
            for (; ; ) {
                if (!(g.cmp(r, t) < 1))
                    return e;
                var n = {
                    ctor: "::",
                    _0: t,
                    _1: e
                };
                r = r,
                t = t - 1,
                e = n
            }
        }))
          , fr = t(function(r, t) {
            return l(sr, r, t, {
                ctor: "[]"
            })
        })
          , dr = t(function(r, t) {
            return l(D, r, _(fr, 0, U(t) - 1), t)
        })
          , pr = (h.append,
        h.length,
        h.slice,
        h.set)
          , hr = t(function(r, t) {
            return g.cmp(0, r) < 1 && g.cmp(r, h.length(t)) < 0 ? E(_(h.get, r, t)) : M
        })
          , mr = (h.push,
        h.empty,
        t(function(r, e) {
            var n = t(function(t, e) {
                return r(t) ? _(h.push, t, e) : e
            });
            return l(h.foldl, n, h.empty, e)
        }),
        h.foldr,
        h.foldl)
          , gr = h.indexedMap
          , vr = h.map
          , br = h.toList
          , yr = h.fromList
          , Tr = h.initialize
          , wr = t(function(r, t) {
            return _(Tr, r, b(t))
        })
          , Sr = function() {
            return {
                crash: function(r) {
                    throw new Error(r)
                },
                log: t(function(r, t) {
                    var e = r + ": " + g.toString(t)
                      , n = n || {};
                    return n.stdout ? n.stdout.write(e) : console.log(e),
                    t
                })
            }
        }()
          , kr = function() {
            function r(r, t) {
                for (var e = ""; r > 0; )
                    1 & r && (e += t),
                    r >>= 1,
                    t += t;
                return e
            }
            function n(r) {
                return Ar("could not convert string '" + r + "' to an Int")
            }
            function o(r) {
                return Ar("could not convert string '" + r + "' to a Float")
            }
            return {
                isEmpty: function(r) {
                    return 0 === r.length
                },
                cons: t(function(r, t) {
                    return r + t
                }),
                uncons: function(r) {
                    var t = r[0];
                    return t ? E(g.Tuple2(g.chr(t), r.slice(1))) : M
                },
                append: t(function(r, t) {
                    return r + t
                }),
                concat: function(r) {
                    return B.toArray(r).join("")
                },
                length: function(r) {
                    return r.length
                },
                map: t(function(r, t) {
                    for (var e = t.split(""), n = e.length; n--; )
                        e[n] = r(g.chr(e[n]));
                    return e.join("")
                }),
                filter: t(function(r, t) {
                    return t.split("").map(g.chr).filter(r).join("")
                }),
                reverse: function(r) {
                    return r.split("").reverse().join("")
                },
                foldl: e(function(r, t, e) {
                    for (var n = e.length, o = 0; o < n; ++o)
                        t = _(r, g.chr(e[o]), t);
                    return t
                }),
                foldr: e(function(r, t, e) {
                    for (var n = e.length; n--; )
                        t = _(r, g.chr(e[n]), t);
                    return t
                }),
                split: t(function(r, t) {
                    return B.fromArray(t.split(r))
                }),
                join: t(function(r, t) {
                    return B.toArray(t).join(r)
                }),
                repeat: t(r),
                slice: e(function(r, t, e) {
                    return e.slice(r, t)
                }),
                left: t(function(r, t) {
                    return r < 1 ? "" : t.slice(0, r)
                }),
                right: t(function(r, t) {
                    return r < 1 ? "" : t.slice(-r)
                }),
                dropLeft: t(function(r, t) {
                    return r < 1 ? t : t.slice(r)
                }),
                dropRight: t(function(r, t) {
                    return r < 1 ? t : t.slice(0, -r)
                }),
                pad: e(function(t, e, n) {
                    var o = (t - n.length) / 2;
                    return r(Math.ceil(o), e) + n + r(0 | o, e)
                }),
                padLeft: e(function(t, e, n) {
                    return r(t - n.length, e) + n
                }),
                padRight: e(function(t, e, n) {
                    return n + r(t - n.length, e)
                }),
                trim: function(r) {
                    return r.trim()
                },
                trimLeft: function(r) {
                    return r.replace(/^\s+/, "")
                },
                trimRight: function(r) {
                    return r.replace(/\s+$/, "")
                },
                words: function(r) {
                    return B.fromArray(r.trim().split(/\s+/g))
                },
                lines: function(r) {
                    return B.fromArray(r.split(/\r\n|\r|\n/g))
                },
                toUpper: function(r) {
                    return r.toUpperCase()
                },
                toLower: function(r) {
                    return r.toLowerCase()
                },
                any: t(function(r, t) {
                    for (var e = t.length; e--; )
                        if (r(g.chr(t[e])))
                            return !0;
                    return !1
                }),
                all: t(function(r, t) {
                    for (var e = t.length; e--; )
                        if (!r(g.chr(t[e])))
                            return !1;
                    return !0
                }),
                contains: t(function(r, t) {
                    return t.indexOf(r) > -1
                }),
                startsWith: t(function(r, t) {
                    return 0 === t.indexOf(r)
                }),
                endsWith: t(function(r, t) {
                    return t.length >= r.length && t.lastIndexOf(r) === t.length - r.length
                }),
                indexes: t(function(r, t) {
                    var e = r.length;
                    if (e < 1)
                        return B.Nil;
                    for (var n = 0, o = []; (n = t.indexOf(r, n)) > -1; )
                        o.push(n),
                        n += e;
                    return B.fromArray(o)
                }),
                toInt: function(r) {
                    var t = r.length;
                    if (0 === t)
                        return n(r);
                    if ("0" === (o = r[0]) && "x" === r[1]) {
                        for (var e = 2; e < t; ++e)
                            if (!("0" <= (o = r[e]) && o <= "9" || "A" <= o && o <= "F" || "a" <= o && o <= "f"))
                                return n(r);
                        return Mr(parseInt(r, 16))
                    }
                    if (o > "9" || o < "0" && "-" !== o && "+" !== o)
                        return n(r);
                    for (e = 1; e < t; ++e) {
                        var o;
                        if ((o = r[e]) < "0" || "9" < o)
                            return n(r)
                    }
                    return Mr(parseInt(r, 10))
                },
                toFloat: function(r) {
                    if (0 === r.length || /[\sxbo]/.test(r))
                        return o(r);
                    var t = +r;
                    return t == t ? Mr(t) : o(r)
                },
                toList: function(r) {
                    return B.fromArray(r.split("").map(g.chr))
                },
                fromList: function(r) {
                    return B.toArray(r).join("")
                }
            }
        }()
          , xr = {
            fromCode: function(r) {
                return g.chr(String.fromCharCode(r))
            },
            toCode: function(r) {
                return r.charCodeAt(0)
            },
            toUpper: function(r) {
                return g.chr(r.toUpperCase())
            },
            toLower: function(r) {
                return g.chr(r.toLowerCase())
            },
            toLocaleUpper: function(r) {
                return g.chr(r.toLocaleUpperCase())
            },
            toLocaleLower: function(r) {
                return g.chr(r.toLocaleLowerCase())
            }
        }
          , Cr = xr.toCode
          , Fr = e(function(r, t, e) {
            var n = Cr(e);
            return g.cmp(n, Cr(r)) > -1 && g.cmp(n, Cr(t)) < 1
        })
          , Lr = (_(Fr, g.chr("A"), g.chr("Z")),
        _(Fr, g.chr("a"), g.chr("z")),
        _(Fr, g.chr("0"), g.chr("9")),
        _(Fr, g.chr("0"), g.chr("7")),
        function(r) {
            var t = r;
            return "Ok" === t.ctor ? E(t._0) : M
        }
        )
          , Rr = t(function(r, t) {
            var e = t;
            return "Ok" === e.ctor ? e._0 : r
        })
          , Ar = function(r) {
            return {
                ctor: "Err",
                _0: r
            }
        }
          , Mr = (t(function(r, t) {
            var e = t;
            return "Ok" === e.ctor ? r(e._0) : Ar(e._0)
        }),
        function(r) {
            return {
                ctor: "Ok",
                _0: r
            }
        }
        )
          , Pr = (t(function(r, t) {
            var e = t;
            return "Ok" === e.ctor ? Mr(r(e._0)) : Ar(e._0)
        }),
        e(function(r, t, e) {
            var n = {
                ctor: "_Tuple2",
                _0: t,
                _1: e
            };
            return "Ok" === n._0.ctor ? "Ok" === n._1.ctor ? Mr(_(r, n._0._0, n._1._0)) : Ar(n._1._0) : Ar(n._0._0)
        }),
        n(function(r, t, e, n) {
            var o = {
                ctor: "_Tuple3",
                _0: t,
                _1: e,
                _2: n
            };
            return "Ok" === o._0.ctor ? "Ok" === o._1.ctor ? "Ok" === o._2.ctor ? Mr(l(r, o._0._0, o._1._0, o._2._0)) : Ar(o._2._0) : Ar(o._1._0) : Ar(o._0._0)
        }),
        o(function(r, t, e, n, o) {
            var c = {
                ctor: "_Tuple4",
                _0: t,
                _1: e,
                _2: n,
                _3: o
            };
            return "Ok" === c._0.ctor ? "Ok" === c._1.ctor ? "Ok" === c._2.ctor ? "Ok" === c._3.ctor ? Mr(s(r, c._0._0, c._1._0, c._2._0, c._3._0)) : Ar(c._3._0) : Ar(c._2._0) : Ar(c._1._0) : Ar(c._0._0)
        }),
        c(function(r, t, e, n, o, c) {
            var u = {
                ctor: "_Tuple5",
                _0: t,
                _1: e,
                _2: n,
                _3: o,
                _4: c
            };
            return "Ok" === u._0.ctor ? "Ok" === u._1.ctor ? "Ok" === u._2.ctor ? "Ok" === u._3.ctor ? "Ok" === u._4.ctor ? Mr(f(r, u._0._0, u._1._0, u._2._0, u._3._0, u._4._0)) : Ar(u._4._0) : Ar(u._3._0) : Ar(u._2._0) : Ar(u._1._0) : Ar(u._0._0)
        }),
        t(function(r, t) {
            var e = t;
            return "Ok" === e.ctor ? Mr(e._0) : Ar(r(e._0))
        }),
        t(function(r, t) {
            var e = t;
            return "Just" === e.ctor ? Mr(e._0) : Ar(r)
        }),
        kr.fromList)
          , Er = kr.toList
          , Nr = kr.toFloat
          , Br = kr.toInt
          , Or = (kr.indexes,
        kr.indexes,
        kr.endsWith,
        kr.startsWith)
          , zr = (kr.contains,
        kr.all,
        kr.any,
        kr.toLower)
          , Ir = (kr.toUpper,
        kr.lines,
        kr.words,
        kr.trimRight,
        kr.trimLeft,
        kr.trim,
        kr.padRight,
        kr.padLeft,
        kr.pad,
        kr.dropRight,
        kr.dropLeft)
          , qr = (kr.right,
        kr.left,
        kr.slice)
          , Vr = (kr.repeat,
        kr.join)
          , Dr = (kr.split,
        kr.foldr,
        kr.foldl,
        kr.reverse,
        kr.filter,
        kr.map,
        kr.length)
          , Gr = kr.concat
          , Hr = (kr.append,
        kr.uncons,
        kr.cons)
          , Jr = (kr.isEmpty,
        e(function(r, t, e) {
            for (; ; ) {
                var n = e;
                if ("RBEmpty_elm_builtin" === n.ctor)
                    return t;
                var o = r
                  , c = l(r, n._1, n._2, l(Jr, r, t, n._4));
                r = o,
                t = c,
                e = n._3
            }
        }))
          , Ur = function(r) {
            return l(Jr, e(function(r, t, e) {
                return {
                    ctor: "::",
                    _0: r,
                    _1: e
                }
            }), {
                ctor: "[]"
            }, r)
        }
          , Wr = function(r) {
            return l(Jr, e(function(r, t, e) {
                return {
                    ctor: "::",
                    _0: {
                        ctor: "_Tuple2",
                        _0: r,
                        _1: t
                    },
                    _1: e
                }
            }), {
                ctor: "[]"
            }, r)
        }
          , jr = e(function(r, t, e) {
            for (; ; ) {
                var n = e;
                if ("RBEmpty_elm_builtin" === n.ctor)
                    return t;
                var o = r
                  , c = l(r, n._1, n._2, l(jr, r, t, n._3));
                r = o,
                t = c,
                e = n._4
            }
        })
          , Yr = c(function(r, n, o, c, u, i) {
            var a = e(function(t, e, c) {
                for (; ; ) {
                    var u = c
                      , i = u._1
                      , a = u._0
                      , _ = a;
                    if ("[]" === _.ctor)
                        return {
                            ctor: "_Tuple2",
                            _0: a,
                            _1: l(o, t, e, i)
                        };
                    var f = _._1
                      , d = _._0._1
                      , p = _._0._0;
                    if (!(g.cmp(p, t) < 0))
                        return g.cmp(p, t) > 0 ? {
                            ctor: "_Tuple2",
                            _0: a,
                            _1: l(o, t, e, i)
                        } : {
                            ctor: "_Tuple2",
                            _0: f,
                            _1: s(n, p, d, e, i)
                        };
                    t = t,
                    e = e,
                    c = {
                        ctor: "_Tuple2",
                        _0: f,
                        _1: l(r, p, d, i)
                    }
                }
            })
              , _ = l(jr, a, {
                ctor: "_Tuple2",
                _0: Wr(c),
                _1: i
            }, u)
              , f = _._0
              , d = _._1;
            return l(J, t(function(t, e) {
                var n = t;
                return l(r, n._0, n._1, e)
            }), d, f)
        })
          , Kr = n(function(r, t, e, n) {
            return Sr.crash(Gr({
                ctor: "::",
                _0: "Internal red-black tree invariant violated, expected ",
                _1: {
                    ctor: "::",
                    _0: r,
                    _1: {
                        ctor: "::",
                        _0: " and got ",
                        _1: {
                            ctor: "::",
                            _0: T(t),
                            _1: {
                                ctor: "::",
                                _0: "/",
                                _1: {
                                    ctor: "::",
                                    _0: e,
                                    _1: {
                                        ctor: "::",
                                        _0: "/",
                                        _1: {
                                            ctor: "::",
                                            _0: n,
                                            _1: {
                                                ctor: "::",
                                                _0: "\nPlease report this bug to <https://github.com/elm-lang/core/issues>",
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }))
        })
          , Xr = function(r) {
            var t = r;
            r: do {
                if ("RBNode_elm_builtin" === t.ctor) {
                    if ("BBlack" === t._0.ctor)
                        return !0;
                    break r
                }
                if ("LBBlack" === t._0.ctor)
                    return !0;
                break r
            } while (0);return !1
        }
          , Zr = t(function(r, t) {
            for (; ; ) {
                var e = t;
                if ("RBEmpty_elm_builtin" === e.ctor)
                    return r;
                r = _(Zr, r + 1, e._4),
                t = e._3
            }
        })
          , $r = t(function(r, t) {
            r: for (; ; ) {
                var e = t;
                if ("RBEmpty_elm_builtin" === e.ctor)
                    return M;
                switch (_(C, r, e._1).ctor) {
                case "LT":
                    r = r,
                    t = e._3;
                    continue r;
                case "EQ":
                    return E(e._2);
                default:
                    r = r,
                    t = e._4;
                    continue r
                }
            }
        })
          , Qr = t(function(r, t) {
            return "Just" === _($r, r, t).ctor
        })
          , rt = e(function(r, t, e) {
            for (; ; ) {
                var n = e;
                if ("RBEmpty_elm_builtin" === n.ctor)
                    return {
                        ctor: "_Tuple2",
                        _0: r,
                        _1: t
                    };
                r = n._1,
                t = n._2,
                e = n._4
            }
        })
          , tt = {
            ctor: "NBlack"
        }
          , et = {
            ctor: "BBlack"
        }
          , nt = {
            ctor: "Black"
        }
          , ot = {
            ctor: "Red"
        }
          , ct = function(r) {
            switch (r.ctor) {
            case "BBlack":
                return nt;
            case "Black":
                return ot;
            case "Red":
                return tt;
            default:
                return Sr.crash("Can't make a negative black node less black!")
            }
        }
          , ut = {
            ctor: "LBBlack"
        }
          , it = {
            ctor: "LBlack"
        }
          , at = function(r) {
            return {
                ctor: "RBEmpty_elm_builtin",
                _0: r
            }
        }
          , _t = at(it)
          , lt = o(function(r, t, e, n, o) {
            return {
                ctor: "RBNode_elm_builtin",
                _0: r,
                _1: t,
                _2: e,
                _3: n,
                _4: o
            }
        })
          , st = function(r) {
            var t = r;
            return "RBNode_elm_builtin" === t.ctor ? f(lt, ct(t._0), t._1, t._2, t._3, t._4) : at(it)
        }
          , ft = function(r) {
            return function(t) {
                return function(e) {
                    return function(n) {
                        return function(o) {
                            return function(c) {
                                return function(u) {
                                    return function(i) {
                                        return function(a) {
                                            return function(_) {
                                                return function(l) {
                                                    return f(lt, ct(r), n, o, f(lt, nt, t, e, i, a), f(lt, nt, c, u, _, l))
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
          , dt = function(r) {
            var t = r;
            return "RBEmpty_elm_builtin" === t.ctor ? Sr.crash("can't make a Leaf red") : f(lt, ot, t._1, t._2, t._3, t._4)
        }
          , pt = o(function(r, t, e, n, o) {
            var c = f(lt, r, t, e, n, o);
            return function(r) {
                var t = r;
                if ("RBNode_elm_builtin" === t.ctor) {
                    var e = t._0;
                    return g.eq(e, nt) || g.eq(e, et)
                }
                return !0
            }(c) ? function(r) {
                var t = r;
                r: do {
                    t: do {
                        e: do {
                            n: do {
                                o: do {
                                    c: do {
                                        u: do {
                                            if ("RBNode_elm_builtin" !== t.ctor)
                                                break r;
                                            if ("RBNode_elm_builtin" === t._3.ctor)
                                                if ("RBNode_elm_builtin" === t._4.ctor)
                                                    switch (t._3._0.ctor) {
                                                    case "Red":
                                                        switch (t._4._0.ctor) {
                                                        case "Red":
                                                            if ("RBNode_elm_builtin" === t._3._3.ctor && "Red" === t._3._3._0.ctor)
                                                                break u;
                                                            if ("RBNode_elm_builtin" === t._3._4.ctor && "Red" === t._3._4._0.ctor)
                                                                break c;
                                                            if ("RBNode_elm_builtin" === t._4._3.ctor && "Red" === t._4._3._0.ctor)
                                                                break o;
                                                            if ("RBNode_elm_builtin" === t._4._4.ctor && "Red" === t._4._4._0.ctor)
                                                                break n;
                                                            break r;
                                                        case "NBlack":
                                                            if ("RBNode_elm_builtin" === t._3._3.ctor && "Red" === t._3._3._0.ctor)
                                                                break u;
                                                            if ("RBNode_elm_builtin" === t._3._4.ctor && "Red" === t._3._4._0.ctor)
                                                                break c;
                                                            if ("BBlack" === t._0.ctor && "RBNode_elm_builtin" === t._4._3.ctor && "Black" === t._4._3._0.ctor && "RBNode_elm_builtin" === t._4._4.ctor && "Black" === t._4._4._0.ctor)
                                                                break e;
                                                            break r;
                                                        default:
                                                            if ("RBNode_elm_builtin" === t._3._3.ctor && "Red" === t._3._3._0.ctor)
                                                                break u;
                                                            if ("RBNode_elm_builtin" === t._3._4.ctor && "Red" === t._3._4._0.ctor)
                                                                break c;
                                                            break r
                                                        }
                                                    case "NBlack":
                                                        switch (t._4._0.ctor) {
                                                        case "Red":
                                                            if ("RBNode_elm_builtin" === t._4._3.ctor && "Red" === t._4._3._0.ctor)
                                                                break o;
                                                            if ("RBNode_elm_builtin" === t._4._4.ctor && "Red" === t._4._4._0.ctor)
                                                                break n;
                                                            if ("BBlack" === t._0.ctor && "RBNode_elm_builtin" === t._3._3.ctor && "Black" === t._3._3._0.ctor && "RBNode_elm_builtin" === t._3._4.ctor && "Black" === t._3._4._0.ctor)
                                                                break t;
                                                            break r;
                                                        case "NBlack":
                                                            if ("BBlack" === t._0.ctor) {
                                                                if ("RBNode_elm_builtin" === t._4._3.ctor && "Black" === t._4._3._0.ctor && "RBNode_elm_builtin" === t._4._4.ctor && "Black" === t._4._4._0.ctor)
                                                                    break e;
                                                                if ("RBNode_elm_builtin" === t._3._3.ctor && "Black" === t._3._3._0.ctor && "RBNode_elm_builtin" === t._3._4.ctor && "Black" === t._3._4._0.ctor)
                                                                    break t;
                                                                break r
                                                            }
                                                            break r;
                                                        default:
                                                            if ("BBlack" === t._0.ctor && "RBNode_elm_builtin" === t._3._3.ctor && "Black" === t._3._3._0.ctor && "RBNode_elm_builtin" === t._3._4.ctor && "Black" === t._3._4._0.ctor)
                                                                break t;
                                                            break r
                                                        }
                                                    default:
                                                        switch (t._4._0.ctor) {
                                                        case "Red":
                                                            if ("RBNode_elm_builtin" === t._4._3.ctor && "Red" === t._4._3._0.ctor)
                                                                break o;
                                                            if ("RBNode_elm_builtin" === t._4._4.ctor && "Red" === t._4._4._0.ctor)
                                                                break n;
                                                            break r;
                                                        case "NBlack":
                                                            if ("BBlack" === t._0.ctor && "RBNode_elm_builtin" === t._4._3.ctor && "Black" === t._4._3._0.ctor && "RBNode_elm_builtin" === t._4._4.ctor && "Black" === t._4._4._0.ctor)
                                                                break e;
                                                            break r;
                                                        default:
                                                            break r
                                                        }
                                                    }
                                                else
                                                    switch (t._3._0.ctor) {
                                                    case "Red":
                                                        if ("RBNode_elm_builtin" === t._3._3.ctor && "Red" === t._3._3._0.ctor)
                                                            break u;
                                                        if ("RBNode_elm_builtin" === t._3._4.ctor && "Red" === t._3._4._0.ctor)
                                                            break c;
                                                        break r;
                                                    case "NBlack":
                                                        if ("BBlack" === t._0.ctor && "RBNode_elm_builtin" === t._3._3.ctor && "Black" === t._3._3._0.ctor && "RBNode_elm_builtin" === t._3._4.ctor && "Black" === t._3._4._0.ctor)
                                                            break t;
                                                        break r;
                                                    default:
                                                        break r
                                                    }
                                            else {
                                                if ("RBNode_elm_builtin" !== t._4.ctor)
                                                    break r;
                                                switch (t._4._0.ctor) {
                                                case "Red":
                                                    if ("RBNode_elm_builtin" === t._4._3.ctor && "Red" === t._4._3._0.ctor)
                                                        break o;
                                                    if ("RBNode_elm_builtin" === t._4._4.ctor && "Red" === t._4._4._0.ctor)
                                                        break n;
                                                    break r;
                                                case "NBlack":
                                                    if ("BBlack" === t._0.ctor && "RBNode_elm_builtin" === t._4._3.ctor && "Black" === t._4._3._0.ctor && "RBNode_elm_builtin" === t._4._4.ctor && "Black" === t._4._4._0.ctor)
                                                        break e;
                                                    break r;
                                                default:
                                                    break r
                                                }
                                            }
                                        } while (0);return ft(t._0)(t._3._3._1)(t._3._3._2)(t._3._1)(t._3._2)(t._1)(t._2)(t._3._3._3)(t._3._3._4)(t._3._4)(t._4)
                                    } while (0);return ft(t._0)(t._3._1)(t._3._2)(t._3._4._1)(t._3._4._2)(t._1)(t._2)(t._3._3)(t._3._4._3)(t._3._4._4)(t._4)
                                } while (0);return ft(t._0)(t._1)(t._2)(t._4._3._1)(t._4._3._2)(t._4._1)(t._4._2)(t._3)(t._4._3._3)(t._4._3._4)(t._4._4)
                            } while (0);return ft(t._0)(t._1)(t._2)(t._4._1)(t._4._2)(t._4._4._1)(t._4._4._2)(t._3)(t._4._3)(t._4._4._3)(t._4._4._4)
                        } while (0);return f(lt, nt, t._4._3._1, t._4._3._2, f(lt, nt, t._1, t._2, t._3, t._4._3._3), f(pt, nt, t._4._1, t._4._2, t._4._3._4, dt(t._4._4)))
                    } while (0);return f(lt, nt, t._3._4._1, t._3._4._2, f(pt, nt, t._3._1, t._3._2, dt(t._3._3), t._3._4._3), f(lt, nt, t._1, t._2, t._3._4._4, t._4))
                } while (0);return r
            }(c) : c
        })
          , ht = o(function(r, t, e, n, o) {
            return Xr(n) || Xr(o) ? f(pt, function(r) {
                switch (r.ctor) {
                case "Black":
                    return et;
                case "Red":
                    return nt;
                case "NBlack":
                    return ot;
                default:
                    return Sr.crash("Can't make a double black node more black!")
                }
            }(r), t, e, st(n), st(o)) : f(lt, r, t, e, n, o)
        })
          , mt = o(function(r, t, e, n, o) {
            var c = o;
            return "RBEmpty_elm_builtin" === c.ctor ? l(gt, r, n, o) : f(ht, r, t, e, n, f(mt, c._0, c._1, c._2, c._3, c._4))
        })
          , gt = e(function(r, t, e) {
            var n = {
                ctor: "_Tuple2",
                _0: t,
                _1: e
            };
            if ("RBEmpty_elm_builtin" !== n._0.ctor) {
                if ("RBEmpty_elm_builtin" === n._1.ctor) {
                    var o = n._1._0
                      , c = n._0._0
                      , u = {
                        ctor: "_Tuple3",
                        _0: r,
                        _1: c,
                        _2: o
                    };
                    return "_Tuple3" === u.ctor && "Black" === u._0.ctor && "Red" === u._1.ctor && "LBlack" === u._2.ctor ? f(lt, nt, n._0._1, n._0._2, n._0._3, n._0._4) : s(Kr, "Black/Red/LBlack", r, T(c), T(o))
                }
                var i = n._0._2
                  , a = n._0._4
                  , _ = n._0._1
                  , d = f(mt, n._0._0, _, i, n._0._3, a)
                  , p = l(rt, _, i, a)
                  , h = p._0
                  , m = p._1;
                return f(ht, r, h, m, d, e)
            }
            if ("RBEmpty_elm_builtin" !== n._1.ctor) {
                var g = n._1._0
                  , v = n._0._0
                  , b = {
                    ctor: "_Tuple3",
                    _0: r,
                    _1: v,
                    _2: g
                };
                return "_Tuple3" === b.ctor && "Black" === b._0.ctor && "LBlack" === b._1.ctor && "Red" === b._2.ctor ? f(lt, nt, n._1._1, n._1._2, n._1._3, n._1._4) : s(Kr, "Black/LBlack/Red", r, T(v), T(g))
            }
            switch (r.ctor) {
            case "Red":
                return at(it);
            case "Black":
                return at(ut);
            default:
                return Sr.crash("cannot have bblack or nblack nodes at this point")
            }
        })
          , vt = t(function(r, t) {
            var e = t;
            if ("RBEmpty_elm_builtin" === e.ctor)
                return at(it);
            var n = e._1;
            return f(lt, e._0, n, _(r, n, e._2), _(vt, r, e._3), _(vt, r, e._4))
        })
          , bt = {
            ctor: "Same"
        }
          , yt = {
            ctor: "Remove"
        }
          , Tt = {
            ctor: "Insert"
        }
          , wt = e(function(r, t, e) {
            var n = function(e) {
                var o = e;
                if ("RBEmpty_elm_builtin" === o.ctor) {
                    var c = t(M);
                    return "Nothing" === c.ctor ? {
                        ctor: "_Tuple2",
                        _0: bt,
                        _1: _t
                    } : {
                        ctor: "_Tuple2",
                        _0: Tt,
                        _1: f(lt, ot, r, c._0, _t, _t)
                    }
                }
                var u = o._2
                  , i = o._4
                  , a = o._3
                  , s = o._1
                  , d = o._0;
                switch (_(C, r, s).ctor) {
                case "EQ":
                    var p = t(E(u));
                    return "Nothing" === p.ctor ? {
                        ctor: "_Tuple2",
                        _0: yt,
                        _1: l(gt, d, a, i)
                    } : {
                        ctor: "_Tuple2",
                        _0: bt,
                        _1: f(lt, d, s, p._0, a, i)
                    };
                case "LT":
                    var h = n(a)
                      , m = h._0
                      , g = h._1;
                    switch (m.ctor) {
                    case "Same":
                        return {
                            ctor: "_Tuple2",
                            _0: bt,
                            _1: f(lt, d, s, u, g, i)
                        };
                    case "Insert":
                        return {
                            ctor: "_Tuple2",
                            _0: Tt,
                            _1: f(pt, d, s, u, g, i)
                        };
                    default:
                        return {
                            ctor: "_Tuple2",
                            _0: yt,
                            _1: f(ht, d, s, u, g, i)
                        }
                    }
                default:
                    var v = n(i)
                      , b = (m = v._0,
                    v._1);
                    switch (m.ctor) {
                    case "Same":
                        return {
                            ctor: "_Tuple2",
                            _0: bt,
                            _1: f(lt, d, s, u, a, b)
                        };
                    case "Insert":
                        return {
                            ctor: "_Tuple2",
                            _0: Tt,
                            _1: f(pt, d, s, u, a, b)
                        };
                    default:
                        return {
                            ctor: "_Tuple2",
                            _0: yt,
                            _1: f(ht, d, s, u, a, b)
                        }
                    }
                }
            }
              , o = n(e)
              , c = o._0
              , u = o._1;
            switch (c.ctor) {
            case "Same":
                return u;
            case "Insert":
                return function(r) {
                    var t = r;
                    return "RBNode_elm_builtin" === t.ctor && "Red" === t._0.ctor ? f(lt, nt, t._1, t._2, t._3, t._4) : r
                }(u);
            default:
                return function(r) {
                    var t = r;
                    return "RBEmpty_elm_builtin" === t.ctor ? at(it) : f(lt, nt, t._1, t._2, t._3, t._4)
                }(u)
            }
        })
          , St = e(function(r, t, e) {
            return l(wt, r, b(E(t)), e)
        })
          , kt = (t(function(r, t) {
            return l(St, r, t, _t)
        }),
        t(function(r, t) {
            return l(jr, St, t, r)
        }))
          , xt = t(function(r, t) {
            var n = e(function(t, e, n) {
                return _(r, t, e) ? l(St, t, e, n) : n
            });
            return l(jr, n, _t, t)
        })
          , Ct = t(function(r, e) {
            return _(xt, t(function(r, t) {
                return _(Qr, r, e)
            }), r)
        })
          , Ft = t(function(r, t) {
            var n = e(function(t, e, n) {
                var o = n
                  , c = o._1
                  , u = o._0;
                return _(r, t, e) ? {
                    ctor: "_Tuple2",
                    _0: l(St, t, e, u),
                    _1: c
                } : {
                    ctor: "_Tuple2",
                    _0: u,
                    _1: l(St, t, e, c)
                }
            });
            return l(jr, n, {
                ctor: "_Tuple2",
                _0: _t,
                _1: _t
            }, t)
        })
          , Lt = function(r) {
            return l(J, t(function(r, t) {
                var e = r;
                return l(St, e._0, e._1, t)
            }), _t, r)
        }
          , Rt = t(function(r, t) {
            return l(wt, r, b(M), t)
        })
          , At = t(function(r, t) {
            return l(jr, e(function(r, t, e) {
                return _(Rt, r, e)
            }), r, t)
        })
          , Mt = function() {
            function r(r, t) {
                return {
                    ctor: "<decoder>",
                    tag: "map-many",
                    func: r,
                    decoders: t
                }
            }
            function _(r) {
                return {
                    tag: "ok",
                    value: r
                }
            }
            function l(r, t) {
                return {
                    tag: "primitive",
                    type: r,
                    value: t
                }
            }
            function s(r, t) {
                return {
                    tag: "index",
                    index: r,
                    rest: t
                }
            }
            function f(r, t) {
                return {
                    tag: "field",
                    field: r,
                    rest: t
                }
            }
            function s(r, t) {
                return {
                    tag: "index",
                    index: r,
                    rest: t
                }
            }
            function d(r) {
                return void 0 === r ? "undefined" : JSON.stringify(r)
            }
            function p(r, t) {
                var e = function r(t, e) {
                    switch (t.tag) {
                    case "bool":
                        return "boolean" == typeof e ? _(e) : l("a Bool", e);
                    case "int":
                        return "number" != typeof e ? l("an Int", e) : -2147483647 < e && e < 2147483647 && (0 | e) === e ? _(e) : !isFinite(e) || e % 1 ? l("an Int", e) : _(e);
                    case "float":
                        return "number" == typeof e ? _(e) : l("a Float", e);
                    case "string":
                        return "string" == typeof e ? _(e) : e instanceof String ? _(e + "") : l("a String", e);
                    case "null":
                        return null === e ? _(t.value) : l("null", e);
                    case "value":
                        return _(e);
                    case "list":
                        if (!(e instanceof Array))
                            return l("a List", e);
                        for (var n = B.Nil, o = e.length; o--; ) {
                            var c = r(t.decoder, e[o]);
                            if ("ok" !== c.tag)
                                return s(o, c);
                            n = B.Cons(c.value, n)
                        }
                        return _(n);
                    case "array":
                        if (!(e instanceof Array))
                            return l("an Array", e);
                        for (var u = e.length, i = new Array(u), o = u; o--; ) {
                            var c = r(t.decoder, e[o]);
                            if ("ok" !== c.tag)
                                return s(o, c);
                            i[o] = c.value
                        }
                        return _(h.fromJSArray(i));
                    case "maybe":
                        var c = r(t.decoder, e);
                        return "ok" === c.tag ? _(E(c.value)) : _(M);
                    case "field":
                        var a = t.field;
                        if ("object" != typeof e || null === e || !(a in e))
                            return l("an object with a field named `" + a + "`", e);
                        var c = r(t.decoder, e[a]);
                        return "ok" === c.tag ? c : f(a, c);
                    case "index":
                        var d = t.index;
                        if (!(e instanceof Array))
                            return l("an array", e);
                        if (d >= e.length)
                            return l("a longer array. Need index " + d + " but there are only " + e.length + " entries", e);
                        var c = r(t.decoder, e[d]);
                        return "ok" === c.tag ? c : s(d, c);
                    case "key-value":
                        if ("object" != typeof e || null === e || e instanceof Array)
                            return l("an object", e);
                        var p = B.Nil;
                        for (var m in e) {
                            var c = r(t.decoder, e[m]);
                            if ("ok" !== c.tag)
                                return f(m, c);
                            var v = g.Tuple2(m, c.value);
                            p = B.Cons(v, p)
                        }
                        return _(p);
                    case "map-many":
                        for (var b = t.func, y = t.decoders, o = 0; o < y.length; o++) {
                            var c = r(y[o], e);
                            if ("ok" !== c.tag)
                                return c;
                            b = b(c.value)
                        }
                        return _(b);
                    case "andThen":
                        var c = r(t.decoder, e);
                        return "ok" !== c.tag ? c : r(t.callback(c.value), e);
                    case "oneOf":
                        for (var T = [], w = t.decoders; "[]" !== w.ctor; ) {
                            var c = r(w._0, e);
                            if ("ok" === c.tag)
                                return c;
                            T.push(c),
                            w = w._1
                        }
                        return function(r) {
                            return {
                                tag: "oneOf",
                                problems: r
                            }
                        }(T);
                    case "fail":
                        return function(r) {
                            return {
                                tag: "fail",
                                msg: r
                            }
                        }(t.msg);
                    case "succeed":
                        return _(t.msg)
                    }
                }(r, t);
                return "ok" === e.tag ? Mr(e.value) : Ar(function r(t) {
                    for (var e = "_"; t; )
                        switch (t.tag) {
                        case "primitive":
                            return "Expecting " + t.type + ("_" === e ? "" : " at " + e) + " but instead got: " + d(t.value);
                        case "index":
                            e += "[" + t.index + "]",
                            t = t.rest;
                            break;
                        case "field":
                            e += "." + t.field,
                            t = t.rest;
                            break;
                        case "oneOf":
                            for (var n = t.problems, o = 0; o < n.length; o++)
                                n[o] = r(n[o]);
                            return "I ran into the following problems" + ("_" === e ? "" : " at " + e) + ":\n\n" + n.join("\n");
                        case "fail":
                            return "I ran into a `fail` decoder" + ("_" === e ? "" : " at " + e) + ": " + t.msg
                        }
                }(e))
            }
            function m(r, t) {
                if (r === t)
                    return !0;
                if (r.tag !== t.tag)
                    return !1;
                switch (r.tag) {
                case "succeed":
                case "fail":
                    return r.msg === t.msg;
                case "bool":
                case "int":
                case "float":
                case "string":
                case "value":
                    return !0;
                case "null":
                    return r.value === t.value;
                case "list":
                case "array":
                case "maybe":
                case "key-value":
                    return m(r.decoder, t.decoder);
                case "field":
                    return r.field === t.field && m(r.decoder, t.decoder);
                case "index":
                    return r.index === t.index && m(r.decoder, t.decoder);
                case "map-many":
                    return r.func === t.func && v(r.decoders, t.decoders);
                case "andThen":
                    return r.callback === t.callback && m(r.decoder, t.decoder);
                case "oneOf":
                    return v(r.decoders, t.decoders)
                }
            }
            function v(r, t) {
                var e = r.length;
                if (e !== t.length)
                    return !1;
                for (var n = 0; n < e; n++)
                    if (!m(r[n], t[n]))
                        return !1;
                return !0
            }
            return {
                encode: t(function(r, t) {
                    return JSON.stringify(t, null, r)
                }),
                runOnString: t(function(r, t) {
                    var e;
                    try {
                        e = JSON.parse(t)
                    } catch (r) {
                        return Ar("Given an invalid JSON: " + r.message)
                    }
                    return p(r, e)
                }),
                run: t(p),
                decodeNull: function(r) {
                    return {
                        ctor: "<decoder>",
                        tag: "null",
                        value: r
                    }
                },
                decodePrimitive: function(r) {
                    return {
                        ctor: "<decoder>",
                        tag: r
                    }
                },
                decodeContainer: t(function(r, t) {
                    return {
                        ctor: "<decoder>",
                        tag: r,
                        decoder: t
                    }
                }),
                decodeField: t(function(r, t) {
                    return {
                        ctor: "<decoder>",
                        tag: "field",
                        field: r,
                        decoder: t
                    }
                }),
                decodeIndex: t(function(r, t) {
                    return {
                        ctor: "<decoder>",
                        tag: "index",
                        index: r,
                        decoder: t
                    }
                }),
                map1: t(function(t, e) {
                    return r(t, [e])
                }),
                map2: e(function(t, e, n) {
                    return r(t, [e, n])
                }),
                map3: n(function(t, e, n, o) {
                    return r(t, [e, n, o])
                }),
                map4: o(function(t, e, n, o, c) {
                    return r(t, [e, n, o, c])
                }),
                map5: c(function(t, e, n, o, c, u) {
                    return r(t, [e, n, o, c, u])
                }),
                map6: u(function(t, e, n, o, c, u, i) {
                    return r(t, [e, n, o, c, u, i])
                }),
                map7: i(function(t, e, n, o, c, u, i, a) {
                    return r(t, [e, n, o, c, u, i, a])
                }),
                map8: a(function(t, e, n, o, c, u, i, a, _) {
                    return r(t, [e, n, o, c, u, i, a, _])
                }),
                decodeKeyValuePairs: function(r) {
                    return {
                        ctor: "<decoder>",
                        tag: "key-value",
                        decoder: r
                    }
                },
                andThen: t(function(r, t) {
                    return {
                        ctor: "<decoder>",
                        tag: "andThen",
                        decoder: t,
                        callback: r
                    }
                }),
                fail: function(r) {
                    return {
                        ctor: "<decoder>",
                        tag: "fail",
                        msg: r
                    }
                },
                succeed: function(r) {
                    return {
                        ctor: "<decoder>",
                        tag: "succeed",
                        msg: r
                    }
                },
                oneOf: function(r) {
                    return {
                        ctor: "<decoder>",
                        tag: "oneOf",
                        decoders: r
                    }
                },
                identity: function(r) {
                    return r
                },
                encodeNull: null,
                encodeArray: h.toJSArray,
                encodeList: B.toArray,
                encodeObject: function(r) {
                    for (var t = {}; "[]" !== r.ctor; ) {
                        var e = r._0;
                        t[e._0] = e._1,
                        r = r._1
                    }
                    return t
                },
                equality: m
            }
        }()
          , Pt = Mt.encodeList
          , Et = Mt.encodeArray
          , Nt = Mt.encodeObject
          , Bt = (Mt.encodeNull,
        Mt.identity)
          , Ot = Mt.identity
          , zt = Mt.identity
          , It = Mt.identity
          , qt = Mt.encode
          , Vt = Mt.decodeNull
          , Dt = Mt.decodePrimitive("value")
          , Gt = Mt.andThen
          , Ht = Mt.fail
          , Jt = Mt.succeed
          , Ut = Mt.run
          , Wt = Mt.runOnString
          , jt = (Mt.map8,
        Mt.map7,
        Mt.map6,
        Mt.map5,
        Mt.map4,
        Mt.map3,
        Mt.map2)
          , Yt = Mt.map1
          , Kt = Mt.oneOf
          , Xt = Mt.decodeIndex
          , Zt = Mt.decodeField
          , $t = t(function(r, t) {
            return l(H, Zt, t, r)
        })
          , Qt = Mt.decodeKeyValuePairs
          , re = function(r) {
            return _(Mt.decodeContainer, "list", r)
        }
          , te = Mt.decodePrimitive("float")
          , ee = Mt.decodePrimitive("int")
          , ne = Mt.decodePrimitive("bool")
          , oe = Mt.decodePrimitive("string")
          , ce = (Sr.crash,
        Sr.log,
        t(function(r, t) {
            var e = t;
            return {
                ctor: "_Tuple2",
                _0: e._0,
                _1: r(e._1)
            }
        }),
        t(function(r, t) {
            var e = t;
            return {
                ctor: "_Tuple2",
                _0: r(e._0),
                _1: e._1
            }
        }),
        function(r) {
            return r._1
        }
        )
          , ue = function(r) {
            return r._0
        }
          , ie = function() {
            function r(r, t) {
                return function(r) {}
            }
            function n(r, t, e, n) {
                var i, a = {};
                var l = u(ae.nativeBinding(function(t) {
                    var o = r._0;
                    i = n(s, o);
                    var c = r._1
                      , u = e(o);
                    f(a, c, u),
                    t(ae.succeed(o))
                }), function(r, n) {
                    return ae.nativeBinding(function(o) {
                        var c = _(t, r, n);
                        n = c._0,
                        i(n);
                        var u = c._1
                          , l = e(n);
                        f(a, u, l),
                        o(ae.succeed(n))
                    })
                });
                function s(r) {
                    ae.rawSend(l, r)
                }
                var d = function(r, t) {
                    var e;
                    for (var n in o) {
                        var u = o[n];
                        u.isForeign && ((e = e || {})[n] = "cmd" === u.tag ? m(n) : b(n, t)),
                        r[n] = c(u, t)
                    }
                    return e
                }(a, s);
                return d ? {
                    ports: d
                } : {}
            }
            var o = {};
            function c(r, t) {
                var e = {
                    main: t,
                    self: void 0
                }
                  , n = r.tag
                  , o = r.onEffects
                  , c = r.onSelfMsg;
                var i = u(r.init, function(r, t) {
                    if ("self" === r.ctor)
                        return l(c, e, r._0, t);
                    var u = r._0;
                    switch (n) {
                    case "cmd":
                        return l(o, e, u.cmds, t);
                    case "sub":
                        return l(o, e, u.subs, t);
                    case "fx":
                        return s(o, e, u.cmds, u.subs, t)
                    }
                });
                return e.self = i,
                i
            }
            function u(r, t) {
                var e = ae.andThen;
                var n = _(e, function r(n) {
                    var o = ae.receive(function(r) {
                        return t(r, n)
                    });
                    return _(e, r, o)
                }, r);
                return ae.rawSpawn(n)
            }
            function i(r) {
                return function(t) {
                    return {
                        type: "leaf",
                        home: r,
                        value: t
                    }
                }
            }
            function a(r) {
                return {
                    type: "node",
                    branches: r
                }
            }
            function f(r, t, e) {
                var n = {};
                for (var o in d(!0, t, n, null),
                d(!1, e, n, null),
                r) {
                    var c = o in n ? n[o] : {
                        cmds: B.Nil,
                        subs: B.Nil
                    };
                    ae.rawSend(r[o], {
                        ctor: "fx",
                        _0: c
                    })
                }
            }
            function d(r, t, e, n) {
                switch (t.type) {
                case "leaf":
                    var c = t.home
                      , u = function(r, t, e, n) {
                        return _(r ? o[t].cmdMap : o[t].subMap, function(r) {
                            var t = e;
                            for (; t; )
                                r = t.tagger(r),
                                t = t.rest;
                            return r
                        }, n)
                    }(r, c, n, t.value);
                    return void (e[c] = function(r, t, e) {
                        if (e = e || {
                            cmds: B.Nil,
                            subs: B.Nil
                        },
                        r)
                            return e.cmds = B.Cons(t, e.cmds),
                            e;
                        return e.subs = B.Cons(t, e.subs),
                        e
                    }(r, u, e[c]));
                case "node":
                    for (var i = t.branches; "[]" !== i.ctor; )
                        d(r, i._0, e, n),
                        i = i._1;
                    return;
                case "map":
                    return void d(r, t.tree, e, {
                        tagger: t.tagger,
                        rest: n
                    })
                }
            }
            function p(r) {
                if (r in o)
                    throw new Error("There can only be one port named `" + r + "`, but your program has multiple.")
            }
            var h = t(function(r, t) {
                return t
            });
            function m(r) {
                var t = []
                  , n = o[r].converter
                  , c = ae.succeed(null);
                return o[r].init = c,
                o[r].onEffects = e(function(r, e, o) {
                    for (; "[]" !== e.ctor; ) {
                        for (var u = t, i = n(e._0), a = 0; a < u.length; a++)
                            u[a](i);
                        e = e._1
                    }
                    return c
                }),
                {
                    subscribe: function(r) {
                        t.push(r)
                    },
                    unsubscribe: function(r) {
                        var e = (t = t.slice()).indexOf(r);
                        e >= 0 && t.splice(e, 1)
                    }
                }
            }
            var v = t(function(r, t) {
                return function(e) {
                    return r(t(e))
                }
            });
            function b(r, t) {
                var n = []
                  , c = B.Nil
                  , u = o[r].converter
                  , i = function(r, t, e) {
                    for (var o = s(r, t, e), c = 0; c < n.length; c++)
                        f(n[c]);
                    return n = null,
                    a = f,
                    i = s,
                    o
                }
                  , a = function(r) {
                    n.push(r)
                }
                  , l = ae.succeed(null);
                function s(r, t, e) {
                    return c = t,
                    l
                }
                function f(r) {
                    for (var e = c; "[]" !== e.ctor; )
                        t(e._0(r)),
                        e = e._1
                }
                return o[r].init = l,
                o[r].onEffects = e(function(r, t, e) {
                    return i(r, t, e)
                }),
                {
                    send: function(t) {
                        var e = _(Ut, u, t);
                        if ("Err" === e.ctor)
                            throw new Error("Trying to send an unexpected type of value through port `" + r + "`:\n" + e._0);
                        a(e._0)
                    }
                }
            }
            return {
                sendToApp: t(function(r, t) {
                    return ae.nativeBinding(function(e) {
                        r.main(t),
                        e(ae.succeed(g.Tuple0))
                    })
                }),
                sendToSelf: t(function(r, t) {
                    return _(ae.send, r.self, {
                        ctor: "self",
                        _0: t
                    })
                }),
                effectManagers: o,
                outgoingPort: function(r, t) {
                    return p(r),
                    o[r] = {
                        tag: "cmd",
                        cmdMap: h,
                        converter: t,
                        isForeign: !0
                    },
                    i(r)
                },
                incomingPort: function(r, t) {
                    return p(r),
                    o[r] = {
                        tag: "sub",
                        subMap: v,
                        converter: t,
                        isForeign: !0
                    },
                    i(r)
                },
                htmlToProgram: function(r) {
                    var e = a(B.Nil)
                      , n = g.Tuple2(g.Tuple0, e);
                    return In({
                        init: n,
                        view: function(r) {
                            return main
                        },
                        update: t(function(r, t) {
                            return n
                        }),
                        subscriptions: function(r) {
                            return e
                        }
                    })
                },
                program: function(t) {
                    return function(e) {
                        return function(e, o) {
                            e.worker = function(e) {
                                if (void 0 !== e)
                                    throw new Error("The `" + o + "` module does not need flags.\nCall " + o + ".worker() with no arguments and you should be all set!");
                                return n(t.init, t.update, t.subscriptions, r)
                            }
                        }
                    }
                },
                programWithFlags: function(t) {
                    return function(e) {
                        return function(o, c) {
                            o.worker = function(o) {
                                if (void 0 === e)
                                    throw new Error("Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like " + c + ".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.");
                                var u = _(Mt.run, e, o);
                                if ("Err" === u.ctor)
                                    throw new Error(c + ".worker(...) was called with an unexpected argument.\nI tried to convert it to an Elm value, but ran into this problem:\n\n" + u._0);
                                return n(t.init(u._0), t.update, t.subscriptions, r)
                            }
                        }
                    }
                },
                initialize: n,
                leaf: i,
                batch: a,
                map: t(function(r, t) {
                    return {
                        type: "map",
                        tagger: r,
                        tree: t
                    }
                })
            }
        }()
          , ae = function() {
            var r = 1e4;
            function e(r) {
                return {
                    ctor: "_Task_succeed",
                    value: r
                }
            }
            function n(r) {
                return {
                    ctor: "_Task_nativeBinding",
                    callback: r,
                    cancel: null
                }
            }
            function o(r) {
                var t = {
                    ctor: "_Process",
                    id: g.guid(),
                    root: r,
                    stack: null,
                    mailbox: []
                };
                return _(t),
                t
            }
            function c(r, t) {
                r.mailbox.push(t),
                _(r)
            }
            function u(t, e) {
                for (; t < r; ) {
                    var n = e.root.ctor;
                    if ("_Task_succeed" !== n)
                        if ("_Task_fail" !== n)
                            if ("_Task_andThen" !== n)
                                if ("_Task_onError" !== n) {
                                    if ("_Task_nativeBinding" === n) {
                                        e.root.cancel = e.root.callback(function(r) {
                                            e.root = r,
                                            _(e)
                                        });
                                        break
                                    }
                                    if ("_Task_receive" !== n)
                                        throw new Error(n);
                                    var o = e.mailbox;
                                    if (0 === o.length)
                                        break;
                                    e.root = e.root.callback(o.shift()),
                                    ++t
                                } else
                                    e.stack = {
                                        ctor: "_Task_onError",
                                        callback: e.root.callback,
                                        rest: e.stack
                                    },
                                    e.root = e.root.task,
                                    ++t;
                            else
                                e.stack = {
                                    ctor: "_Task_andThen",
                                    callback: e.root.callback,
                                    rest: e.stack
                                },
                                e.root = e.root.task,
                                ++t;
                        else {
                            for (; e.stack && "_Task_andThen" === e.stack.ctor; )
                                e.stack = e.stack.rest;
                            if (null === e.stack)
                                break;
                            e.root = e.stack.callback(e.root.value),
                            e.stack = e.stack.rest,
                            ++t
                        }
                    else {
                        for (; e.stack && "_Task_onError" === e.stack.ctor; )
                            e.stack = e.stack.rest;
                        if (null === e.stack)
                            break;
                        e.root = e.stack.callback(e.root.value),
                        e.stack = e.stack.rest,
                        ++t
                    }
                }
                return t < r ? t + 1 : (_(e),
                t)
            }
            var i = !1
              , a = [];
            function _(r) {
                a.push(r),
                i || (setTimeout(l, 0),
                i = !0)
            }
            function l() {
                for (var t, e = 0; e < r && (t = a.shift()); )
                    t.root && (e = u(e, t));
                t ? setTimeout(l, 0) : i = !1
            }
            return {
                succeed: e,
                fail: function(r) {
                    return {
                        ctor: "_Task_fail",
                        value: r
                    }
                },
                nativeBinding: n,
                andThen: t(function(r, t) {
                    return {
                        ctor: "_Task_andThen",
                        callback: r,
                        task: t
                    }
                }),
                onError: t(function(r, t) {
                    return {
                        ctor: "_Task_onError",
                        callback: r,
                        task: t
                    }
                }),
                receive: function(r) {
                    return {
                        ctor: "_Task_receive",
                        callback: r
                    }
                },
                spawn: function(r) {
                    return n(function(t) {
                        t(e(o(r)))
                    })
                },
                kill: function(r) {
                    return n(function(t) {
                        var n = r.root;
                        "_Task_nativeBinding" === n.ctor && n.cancel && n.cancel(),
                        r.root = null,
                        t(e(g.Tuple0))
                    })
                },
                sleep: function(r) {
                    return n(function(t) {
                        var n = setTimeout(function() {
                            t(e(g.Tuple0))
                        }, r);
                        return function() {
                            clearTimeout(n)
                        }
                    })
                },
                send: t(function(r, t) {
                    return n(function(n) {
                        c(r, t),
                        n(e(g.Tuple0))
                    })
                }),
                rawSpawn: o,
                rawSend: c
            }
        }()
          , _e = ie.batch
          , le = _e({
            ctor: "[]"
        })
          , se = se || {};
        se["!"] = t(function(r, t) {
            return {
                ctor: "_Tuple2",
                _0: r,
                _1: _e(t)
            }
        });
        ie.map;
        var fe = ie.batch
          , de = fe({
            ctor: "[]"
        })
          , pe = (ie.map,
        ae.succeed,
        ie.sendToSelf)
          , he = ie.sendToApp
          , me = (ie.programWithFlags,
        ie.program,
        Jt)
          , ge = (Gt(y),
        t(function(r, e) {
            return l(jt, t(function(r, t) {
                return r(t)
            }), e, r)
        }))
          , ve = e(function(r, t, e) {
            return _(Gt, function(n) {
                var o = _(Ut, r, n);
                if ("Ok" === o.ctor) {
                    var c = _(Ut, function(r) {
                        return Kt({
                            ctor: "::",
                            _0: r,
                            _1: {
                                ctor: "::",
                                _0: Vt(e),
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        })
                    }(t), o._0);
                    return "Ok" === c.ctor ? Jt(c._0) : Ht(c._0)
                }
                var u = _(Ut, Qt(Dt), n);
                return "Ok" === u.ctor ? Jt(e) : Ht(u._0)
            }, Dt)
        })
          , be = (n(function(r, t, e, n) {
            return _(ge, l(ve, _($t, r, Dt), t, e), n)
        }),
        n(function(r, t, e, n) {
            return _(ge, l(ve, _(Zt, r, Dt), t, e), n)
        }),
        e(function(r, t, e) {
            return _(ge, _($t, r, t), e)
        }),
        e(function(r, t, e) {
            return _(ge, _(Zt, r, t), e)
        }))
          , ye = function() {
            var r = Float64Array;
            var o = {};
            o._temp1 = new r(3),
            o._temp2 = new r(3),
            o._temp3 = new r(3),
            r == Array ? (o.x = [1, 0, 0],
            o.y = [0, 1, 0],
            o.z = [0, 0, 1],
            o.$ = function(r, t, e) {
                return [r, t, e]
            }
            ) : (o.x = new r([1, 0, 0]),
            o.y = new r([0, 1, 0]),
            o.z = new r([0, 0, 1]),
            o.$ = function(t, e, n) {
                return new r([t, e, n])
            }
            ),
            o.u = o.x,
            o.v = o.y,
            o.getX = function(r) {
                return r[0]
            }
            ,
            o.getY = function(r) {
                return r[1]
            }
            ,
            o.getZ = function(r) {
                return r[2]
            }
            ,
            o.setX = function(t, e) {
                return new r([t, e[1], e[2]])
            }
            ,
            o.setY = function(t, e) {
                return new r([e[0], t, e[2]])
            }
            ,
            o.setZ = function(t, e) {
                return new r([e[0], e[1], t])
            }
            ,
            o.toTuple3 = function(r) {
                return {
                    ctor: "_Tuple3",
                    _0: r[0],
                    _1: r[1],
                    _2: r[2]
                }
            }
            ,
            o.fromTuple3 = function(t) {
                return new r([t._0, t._1, t._2])
            }
            ,
            o.toRecord3 = function(r) {
                return {
                    _: {},
                    x: r[0],
                    y: r[1],
                    z: r[2]
                }
            }
            ,
            o.fromRecord3 = function(t) {
                return new r([t.x, t.y, t.z])
            }
            ,
            o.add = function(t, e, n) {
                return void 0 == n && (n = new r(3)),
                n[0] = t[0] + e[0],
                n[1] = t[1] + e[1],
                n[2] = t[2] + e[2],
                n
            }
            ,
            o.sub = function(t, e, n) {
                return void 0 == n && (n = new r(3)),
                n[0] = t[0] - e[0],
                n[1] = t[1] - e[1],
                n[2] = t[2] - e[2],
                n
            }
            ,
            o.neg = function(t, e) {
                return void 0 == e && (e = new r(3)),
                e[0] = -t[0],
                e[1] = -t[1],
                e[2] = -t[2],
                e
            }
            ,
            o.direction = function(t, e, n) {
                return void 0 == n && (n = new r(3)),
                o.normalize(o.sub(t, e, n), n)
            }
            ,
            o.length = function(r) {
                return Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2])
            }
            ,
            o.lengthSquared = function(r) {
                return r[0] * r[0] + r[1] * r[1] + r[2] * r[2]
            }
            ,
            o.distance = function(r, t) {
                var e = r[0] - t[0]
                  , n = r[1] - t[1]
                  , o = r[2] - t[2];
                return Math.sqrt(e * e + n * n + o * o)
            }
            ,
            o.distanceSquared = function(r, t) {
                var e = r[0] - t[0]
                  , n = r[1] - t[1]
                  , o = r[2] - t[2];
                return e * e + n * n + o * o
            }
            ,
            o.normalize = function(t, e) {
                void 0 == e && (e = new r(3));
                var n = 1 / o.length(t);
                return e[0] = t[0] * n,
                e[1] = t[1] * n,
                e[2] = t[2] * n,
                e
            }
            ,
            o.scale = function(t, e, n) {
                return void 0 == n && (n = new r(3)),
                n[0] = e[0] * t,
                n[1] = e[1] * t,
                n[2] = e[2] * t,
                n
            }
            ,
            o.dot = function(r, t) {
                return r[0] * t[0] + r[1] * t[1] + r[2] * t[2]
            }
            ,
            o.cross = function(t, e, n) {
                return void 0 == n && (n = new r(3)),
                n[0] = t[1] * e[2] - t[2] * e[1],
                n[1] = t[2] * e[0] - t[0] * e[2],
                n[2] = t[0] * e[1] - t[1] * e[0],
                n
            }
            ,
            o.mul4x4 = function(t, e, n) {
                var c, u = o._temp1;
                return void 0 == n && (n = new r(3)),
                u[0] = t[3],
                u[1] = t[7],
                u[2] = t[11],
                c = o.dot(e, u) + t[15],
                u[0] = t[0],
                u[1] = t[4],
                u[2] = t[8],
                n[0] = (o.dot(e, u) + t[12]) / c,
                u[0] = t[1],
                u[1] = t[5],
                u[2] = t[9],
                n[1] = (o.dot(e, u) + t[13]) / c,
                u[0] = t[2],
                u[1] = t[6],
                u[2] = t[10],
                n[2] = (o.dot(e, u) + t[14]) / c,
                n
            }
            ;
            var u = {};
            return u._temp1 = new r(16),
            u._temp2 = new r(16),
            r == Array ? (u.I = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            u.$ = function(r, t, e, n, o, c, u, i, a, _, l, s, f, d, p, h) {
                return [r, t, e, n, o, c, u, i, a, _, l, s, f, d, p, h]
            }
            ) : (u.I = new r([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
            u.$ = function(t, e, n, o, c, u, i, a, _, l, s, f, d, p, h, m) {
                return new r([t, e, n, o, c, u, i, a, _, l, s, f, d, p, h, m])
            }
            ),
            u.identity = u.I,
            u.fromList = function(r) {
                var t = B.toArray(r);
                return 16 === t.length ? E(u.$(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])) : M
            }
            ,
            u.fromRecord = function(t) {
                return new r([t.m11, t.m21, t.m31, t.m41, t.m12, t.m22, t.m32, t.m42, t.m13, t.m23, t.m33, t.m43, t.m14, t.m24, t.m34, t.m44])
            }
            ,
            u.toRecord = function(r) {
                return {
                    m11: r[0],
                    m21: r[1],
                    m31: r[2],
                    m41: r[3],
                    m12: r[4],
                    m22: r[5],
                    m32: r[6],
                    m42: r[7],
                    m13: r[8],
                    m23: r[9],
                    m33: r[10],
                    m43: r[11],
                    m14: r[12],
                    m24: r[13],
                    m34: r[14],
                    m44: r[15]
                }
            }
            ,
            u.topLeft3x3 = function(t, e) {
                return void 0 == e && (e = new r(9)),
                e[0] = t[0],
                e[1] = t[1],
                e[2] = t[2],
                e[3] = t[4],
                e[4] = t[5],
                e[5] = t[6],
                e[6] = t[8],
                e[7] = t[9],
                e[8] = t[10],
                e
            }
            ,
            u.inverse = function(t, e) {
                void 0 == e && (e = new r(16)),
                e[0] = t[5] * t[10] * t[15] - t[5] * t[11] * t[14] - t[9] * t[6] * t[15] + t[9] * t[7] * t[14] + t[13] * t[6] * t[11] - t[13] * t[7] * t[10],
                e[4] = -t[4] * t[10] * t[15] + t[4] * t[11] * t[14] + t[8] * t[6] * t[15] - t[8] * t[7] * t[14] - t[12] * t[6] * t[11] + t[12] * t[7] * t[10],
                e[8] = t[4] * t[9] * t[15] - t[4] * t[11] * t[13] - t[8] * t[5] * t[15] + t[8] * t[7] * t[13] + t[12] * t[5] * t[11] - t[12] * t[7] * t[9],
                e[12] = -t[4] * t[9] * t[14] + t[4] * t[10] * t[13] + t[8] * t[5] * t[14] - t[8] * t[6] * t[13] - t[12] * t[5] * t[10] + t[12] * t[6] * t[9],
                e[1] = -t[1] * t[10] * t[15] + t[1] * t[11] * t[14] + t[9] * t[2] * t[15] - t[9] * t[3] * t[14] - t[13] * t[2] * t[11] + t[13] * t[3] * t[10],
                e[5] = t[0] * t[10] * t[15] - t[0] * t[11] * t[14] - t[8] * t[2] * t[15] + t[8] * t[3] * t[14] + t[12] * t[2] * t[11] - t[12] * t[3] * t[10],
                e[9] = -t[0] * t[9] * t[15] + t[0] * t[11] * t[13] + t[8] * t[1] * t[15] - t[8] * t[3] * t[13] - t[12] * t[1] * t[11] + t[12] * t[3] * t[9],
                e[13] = t[0] * t[9] * t[14] - t[0] * t[10] * t[13] - t[8] * t[1] * t[14] + t[8] * t[2] * t[13] + t[12] * t[1] * t[10] - t[12] * t[2] * t[9],
                e[2] = t[1] * t[6] * t[15] - t[1] * t[7] * t[14] - t[5] * t[2] * t[15] + t[5] * t[3] * t[14] + t[13] * t[2] * t[7] - t[13] * t[3] * t[6],
                e[6] = -t[0] * t[6] * t[15] + t[0] * t[7] * t[14] + t[4] * t[2] * t[15] - t[4] * t[3] * t[14] - t[12] * t[2] * t[7] + t[12] * t[3] * t[6],
                e[10] = t[0] * t[5] * t[15] - t[0] * t[7] * t[13] - t[4] * t[1] * t[15] + t[4] * t[3] * t[13] + t[12] * t[1] * t[7] - t[12] * t[3] * t[5],
                e[14] = -t[0] * t[5] * t[14] + t[0] * t[6] * t[13] + t[4] * t[1] * t[14] - t[4] * t[2] * t[13] - t[12] * t[1] * t[6] + t[12] * t[2] * t[5],
                e[3] = -t[1] * t[6] * t[11] + t[1] * t[7] * t[10] + t[5] * t[2] * t[11] - t[5] * t[3] * t[10] - t[9] * t[2] * t[7] + t[9] * t[3] * t[6],
                e[7] = t[0] * t[6] * t[11] - t[0] * t[7] * t[10] - t[4] * t[2] * t[11] + t[4] * t[3] * t[10] + t[8] * t[2] * t[7] - t[8] * t[3] * t[6],
                e[11] = -t[0] * t[5] * t[11] + t[0] * t[7] * t[9] + t[4] * t[1] * t[11] - t[4] * t[3] * t[9] - t[8] * t[1] * t[7] + t[8] * t[3] * t[5],
                e[15] = t[0] * t[5] * t[10] - t[0] * t[6] * t[9] - t[4] * t[1] * t[10] + t[4] * t[2] * t[9] + t[8] * t[1] * t[6] - t[8] * t[2] * t[5];
                var n = t[0] * e[0] + t[1] * e[4] + t[2] * e[8] + t[3] * e[12];
                if (0 === n)
                    return M;
                n = 1 / n;
                for (var o = 0; o < 16; o += 1)
                    e[o] = e[o] * n;
                return E(e)
            }
            ,
            u.inverseOrthonormal = function(t, e) {
                void 0 == e && (e = new r(16)),
                u.transpose(t, e);
                var n = [t[12], t[13], t[14]];
                return e[3] = e[7] = e[11] = 0,
                e[12] = -o.dot([e[0], e[4], e[8]], n),
                e[13] = -o.dot([e[1], e[5], e[9]], n),
                e[14] = -o.dot([e[2], e[6], e[10]], n),
                e
            }
            ,
            u.inverseTo3x3 = function(t, e) {
                void 0 == e && (e = new r(9));
                var n = t[10] * t[5] - t[6] * t[9]
                  , o = -t[10] * t[1] + t[2] * t[9]
                  , c = t[6] * t[1] - t[2] * t[5]
                  , u = -t[10] * t[4] + t[6] * t[8]
                  , i = t[10] * t[0] - t[2] * t[8]
                  , a = -t[6] * t[0] + t[2] * t[4]
                  , _ = t[9] * t[4] - t[5] * t[8]
                  , l = -t[9] * t[0] + t[1] * t[8]
                  , s = t[5] * t[0] - t[1] * t[4]
                  , f = t[0] * n + t[1] * u + t[2] * _;
                if (0 == f)
                    throw "matrix not invertible";
                var d = 1 / f;
                return e[0] = d * n,
                e[1] = d * o,
                e[2] = d * c,
                e[3] = d * u,
                e[4] = d * i,
                e[5] = d * a,
                e[6] = d * _,
                e[7] = d * l,
                e[8] = d * s,
                e
            }
            ,
            u.makeFrustum = function(t, e, n, o, c, u, i) {
                void 0 == i && (i = new r(16));
                return i[0] = 2 * c / (e - t),
                i[1] = 0,
                i[2] = 0,
                i[3] = 0,
                i[4] = 0,
                i[5] = 2 * c / (o - n),
                i[6] = 0,
                i[7] = 0,
                i[8] = (e + t) / (e - t),
                i[9] = (o + n) / (o - n),
                i[10] = -(u + c) / (u - c),
                i[11] = -1,
                i[12] = 0,
                i[13] = 0,
                i[14] = -2 * u * c / (u - c),
                i[15] = 0,
                i
            }
            ,
            u.makePerspective = function(r, t, e, n, o) {
                var c = e * Math.tan(r * Math.PI / 360)
                  , i = -c
                  , a = i * t
                  , _ = c * t;
                return u.makeFrustum(a, _, i, c, e, n, o)
            }
            ,
            u.makeOrtho = function(t, e, n, o, c, u, i) {
                void 0 == i && (i = new r(16));
                return i[0] = 2 / (e - t),
                i[1] = 0,
                i[2] = 0,
                i[3] = 0,
                i[4] = 0,
                i[5] = 2 / (o - n),
                i[6] = 0,
                i[7] = 0,
                i[8] = 0,
                i[9] = 0,
                i[10] = -2 / (u - c),
                i[11] = 0,
                i[12] = -(e + t) / (e - t),
                i[13] = -(o + n) / (o - n),
                i[14] = -(u + c) / (u - c),
                i[15] = 1,
                i
            }
            ,
            u.makeOrtho2D = function(r, t, e, n, o) {
                return u.makeOrtho(r, t, e, n, -1, 1, o)
            }
            ,
            u.mul = function(t, e, n) {
                void 0 == n && (n = new r(16));
                var o = t[0]
                  , c = t[1]
                  , u = t[2]
                  , i = t[3]
                  , a = t[4]
                  , _ = t[5]
                  , l = t[6]
                  , s = t[7]
                  , f = t[8]
                  , d = t[9]
                  , p = t[10]
                  , h = t[11]
                  , m = t[12]
                  , g = t[13]
                  , v = t[14]
                  , b = t[15]
                  , y = e[0]
                  , T = e[1]
                  , w = e[2]
                  , S = e[3]
                  , k = e[4]
                  , x = e[5]
                  , C = e[6]
                  , F = e[7]
                  , L = e[8]
                  , R = e[9]
                  , A = e[10]
                  , M = e[11]
                  , P = e[12]
                  , E = e[13]
                  , N = e[14]
                  , B = e[15];
                return n[0] = o * y + a * T + f * w + m * S,
                n[1] = c * y + _ * T + d * w + g * S,
                n[2] = u * y + l * T + p * w + v * S,
                n[3] = i * y + s * T + h * w + b * S,
                n[4] = o * k + a * x + f * C + m * F,
                n[5] = c * k + _ * x + d * C + g * F,
                n[6] = u * k + l * x + p * C + v * F,
                n[7] = i * k + s * x + h * C + b * F,
                n[8] = o * L + a * R + f * A + m * M,
                n[9] = c * L + _ * R + d * A + g * M,
                n[10] = u * L + l * R + p * A + v * M,
                n[11] = i * L + s * R + h * A + b * M,
                n[12] = o * P + a * E + f * N + m * B,
                n[13] = c * P + _ * E + d * N + g * B,
                n[14] = u * P + l * E + p * N + v * B,
                n[15] = i * P + s * E + h * N + b * B,
                n
            }
            ,
            u.mulAffine = function(t, e, n) {
                void 0 == n && (n = new r(16));
                var o = t[0]
                  , c = t[1]
                  , u = t[2]
                  , i = t[4]
                  , a = t[5]
                  , _ = t[6]
                  , l = t[8]
                  , s = t[9]
                  , f = t[10]
                  , d = t[12]
                  , p = t[13]
                  , h = t[14]
                  , m = e[0]
                  , g = e[1]
                  , v = e[2]
                  , b = e[4]
                  , y = e[5]
                  , T = e[6]
                  , w = e[8]
                  , S = e[9]
                  , k = e[10]
                  , x = e[12]
                  , C = e[13]
                  , F = e[14];
                return n[0] = o * m + i * g + l * v,
                n[1] = c * m + a * g + s * v,
                n[2] = u * m + _ * g + f * v,
                n[3] = 0,
                n[4] = o * b + i * y + l * T,
                n[5] = c * b + a * y + s * T,
                n[6] = u * b + _ * y + f * T,
                n[7] = 0,
                n[8] = o * w + i * S + l * k,
                n[9] = c * w + a * S + s * k,
                n[10] = u * w + _ * S + f * k,
                n[11] = 0,
                n[12] = o * x + i * C + l * F + d,
                n[13] = c * x + a * C + s * F + p,
                n[14] = u * x + _ * C + f * F + h,
                n[15] = 1,
                n
            }
            ,
            u.makeRotate = function(t, e, n) {
                void 0 == n && (n = new r(16));
                var c = (e = o.normalize(e, o._temp1))[0]
                  , u = e[1]
                  , i = e[2]
                  , a = Math.cos(t)
                  , _ = 1 - a
                  , l = Math.sin(t);
                return n[0] = c * c * _ + a,
                n[1] = u * c * _ + i * l,
                n[2] = i * c * _ - u * l,
                n[3] = 0,
                n[4] = c * u * _ - i * l,
                n[5] = u * u * _ + a,
                n[6] = u * i * _ + c * l,
                n[7] = 0,
                n[8] = c * i * _ + u * l,
                n[9] = u * i * _ - c * l,
                n[10] = i * i * _ + a,
                n[11] = 0,
                n[12] = 0,
                n[13] = 0,
                n[14] = 0,
                n[15] = 1,
                n
            }
            ,
            u.rotate = function(t, e, n, o) {
                void 0 == o && (o = new r(16));
                var c = e[0]
                  , u = e[1]
                  , i = e[2]
                  , a = Math.sqrt(c * c + u * u + i * i)
                  , _ = c
                  , l = u
                  , s = i;
                if (1 != a) {
                    var f = 1 / a;
                    _ *= f,
                    l *= f,
                    s *= f
                }
                var d = Math.cos(t)
                  , p = 1 - d
                  , h = Math.sin(t)
                  , m = _ * h
                  , g = l * h
                  , v = s * h
                  , b = _ * l * p
                  , y = _ * s * p
                  , T = l * s * p
                  , w = n[0]
                  , S = n[1]
                  , k = n[2]
                  , x = n[3]
                  , C = n[4]
                  , F = n[5]
                  , L = n[6]
                  , R = n[7]
                  , A = n[8]
                  , M = n[9]
                  , P = n[10]
                  , E = n[11]
                  , N = _ * _ * p + d
                  , B = b + v
                  , O = y - g
                  , z = b - v
                  , I = l * l * p + d
                  , q = T + m
                  , V = y + g
                  , D = T - m
                  , G = s * s * p + d;
                return o[0] = w * N + C * B + A * O,
                o[1] = S * N + F * B + M * O,
                o[2] = k * N + L * B + P * O,
                o[3] = x * N + R * B + E * O,
                o[4] = w * z + C * I + A * q,
                o[5] = S * z + F * I + M * q,
                o[6] = k * z + L * I + P * q,
                o[7] = x * z + R * I + E * q,
                o[8] = w * V + C * D + A * G,
                o[9] = S * V + F * D + M * G,
                o[10] = k * V + L * D + P * G,
                o[11] = x * V + R * D + E * G,
                o != n && (o[12] = n[12],
                o[13] = n[13],
                o[14] = n[14],
                o[15] = n[15]),
                o
            }
            ,
            u.makeScale3 = function(t, e, n, o) {
                return void 0 == o && (o = new r(16)),
                o[0] = t,
                o[1] = 0,
                o[2] = 0,
                o[3] = 0,
                o[4] = 0,
                o[5] = e,
                o[6] = 0,
                o[7] = 0,
                o[8] = 0,
                o[9] = 0,
                o[10] = n,
                o[11] = 0,
                o[12] = 0,
                o[13] = 0,
                o[14] = 0,
                o[15] = 1,
                o
            }
            ,
            u.makeScale1 = function(r, t) {
                return u.makeScale3(r, r, r, t)
            }
            ,
            u.makeScale = function(r, t) {
                return u.makeScale3(r[0], r[1], r[2], t)
            }
            ,
            u.scale3 = function(t, e, n, o, c) {
                return c == o ? (o[0] *= t,
                o[1] *= t,
                o[2] *= t,
                o[3] *= t,
                o[4] *= e,
                o[5] *= e,
                o[6] *= e,
                o[7] *= e,
                o[8] *= n,
                o[9] *= n,
                o[10] *= n,
                o[11] *= n,
                o) : (void 0 == c && (c = new r(16)),
                c[0] = o[0] * t,
                c[1] = o[1] * t,
                c[2] = o[2] * t,
                c[3] = o[3] * t,
                c[4] = o[4] * e,
                c[5] = o[5] * e,
                c[6] = o[6] * e,
                c[7] = o[7] * e,
                c[8] = o[8] * n,
                c[9] = o[9] * n,
                c[10] = o[10] * n,
                c[11] = o[11] * n,
                c[12] = o[12],
                c[13] = o[13],
                c[14] = o[14],
                c[15] = o[15],
                c)
            }
            ,
            u.scale1 = function(t, e, n) {
                return n == e ? (e[0] *= t,
                e[1] *= t,
                e[2] *= t,
                e[3] *= t,
                e[4] *= t,
                e[5] *= t,
                e[6] *= t,
                e[7] *= t,
                e[8] *= t,
                e[9] *= t,
                e[10] *= t,
                e[11] *= t,
                e) : (void 0 == n && (n = new r(16)),
                n[0] = e[0] * t,
                n[1] = e[1] * t,
                n[2] = e[2] * t,
                n[3] = e[3] * t,
                n[4] = e[4] * t,
                n[5] = e[5] * t,
                n[6] = e[6] * t,
                n[7] = e[7] * t,
                n[8] = e[8] * t,
                n[9] = e[9] * t,
                n[10] = e[10] * t,
                n[11] = e[11] * t,
                n[12] = e[12],
                n[13] = e[13],
                n[14] = e[14],
                n[15] = e[15],
                n)
            }
            ,
            u.scale = function(t, e, n) {
                var o = t[0]
                  , c = t[1]
                  , u = t[2];
                return n == e ? (e[0] *= o,
                e[1] *= o,
                e[2] *= o,
                e[3] *= o,
                e[4] *= c,
                e[5] *= c,
                e[6] *= c,
                e[7] *= c,
                e[8] *= u,
                e[9] *= u,
                e[10] *= u,
                e[11] *= u,
                e) : (void 0 == n && (n = new r(16)),
                n[0] = e[0] * o,
                n[1] = e[1] * o,
                n[2] = e[2] * o,
                n[3] = e[3] * o,
                n[4] = e[4] * c,
                n[5] = e[5] * c,
                n[6] = e[6] * c,
                n[7] = e[7] * c,
                n[8] = e[8] * u,
                n[9] = e[9] * u,
                n[10] = e[10] * u,
                n[11] = e[11] * u,
                n[12] = e[12],
                n[13] = e[13],
                n[14] = e[14],
                n[15] = e[15],
                n)
            }
            ,
            u.makeTranslate3 = function(t, e, n, o) {
                return void 0 == o && (o = new r(16)),
                o[0] = 1,
                o[1] = 0,
                o[2] = 0,
                o[3] = 0,
                o[4] = 0,
                o[5] = 1,
                o[6] = 0,
                o[7] = 0,
                o[8] = 0,
                o[9] = 0,
                o[10] = 1,
                o[11] = 0,
                o[12] = t,
                o[13] = e,
                o[14] = n,
                o[15] = 1,
                o
            }
            ,
            u.makeTranslate1 = function(r, t) {
                return u.makeTranslate3(r, r, r, t)
            }
            ,
            u.makeTranslate = function(r, t) {
                return u.makeTranslate3(r[0], r[1], r[2], t)
            }
            ,
            u.translate3Self = function(r, t, e, n) {
                return n[12] += n[0] * r + n[4] * t + n[8] * e,
                n[13] += n[1] * r + n[5] * t + n[9] * e,
                n[14] += n[2] * r + n[6] * t + n[10] * e,
                n[15] += n[3] * r + n[7] * t + n[11] * e,
                n
            }
            ,
            u.translate3 = function(t, e, n, o, c) {
                if (c == o)
                    return o[12] += o[0] * t + o[4] * e + o[8] * n,
                    o[13] += o[1] * t + o[5] * e + o[9] * n,
                    o[14] += o[2] * t + o[6] * e + o[10] * n,
                    o[15] += o[3] * t + o[7] * e + o[11] * n,
                    o;
                void 0 == c && (c = new r(16));
                var u = o[0]
                  , i = o[1]
                  , a = o[2]
                  , _ = o[3]
                  , l = o[4]
                  , s = o[5]
                  , f = o[6]
                  , d = o[7]
                  , p = o[8]
                  , h = o[9]
                  , m = o[10]
                  , g = o[11];
                return c[0] = u,
                c[1] = i,
                c[2] = a,
                c[3] = _,
                c[4] = l,
                c[5] = s,
                c[6] = f,
                c[7] = d,
                c[8] = p,
                c[9] = h,
                c[10] = m,
                c[11] = g,
                c[12] = u * t + l * e + p * n + o[12],
                c[13] = i * t + s * e + h * n + o[13],
                c[14] = a * t + f * e + m * n + o[14],
                c[15] = _ * t + d * e + g * n + o[15],
                c
            }
            ,
            u.translate1 = function(r, t, e) {
                return u.translate3(r, r, r, t, e)
            }
            ,
            u.translateSelf = function(r, t) {
                var e = r[0]
                  , n = r[1]
                  , o = r[2];
                return t[12] += t[0] * e + t[4] * n + t[8] * o,
                t[13] += t[1] * e + t[5] * n + t[9] * o,
                t[14] += t[2] * e + t[6] * n + t[10] * o,
                t[15] += t[3] * e + t[7] * n + t[11] * o,
                t
            }
            ,
            u.translate = function(t, e, n) {
                var o = t[0]
                  , c = t[1]
                  , u = t[2];
                if (n == e)
                    return e[12] += e[0] * o + e[4] * c + e[8] * u,
                    e[13] += e[1] * o + e[5] * c + e[9] * u,
                    e[14] += e[2] * o + e[6] * c + e[10] * u,
                    e[15] += e[3] * o + e[7] * c + e[11] * u,
                    e;
                void 0 == n && (n = new r(16));
                var i = e[0]
                  , a = e[1]
                  , _ = e[2]
                  , l = e[3]
                  , s = e[4]
                  , f = e[5]
                  , d = e[6]
                  , p = e[7]
                  , h = e[8]
                  , m = e[9]
                  , g = e[10]
                  , v = e[11];
                return n[0] = i,
                n[1] = a,
                n[2] = _,
                n[3] = l,
                n[4] = s,
                n[5] = f,
                n[6] = d,
                n[7] = p,
                n[8] = h,
                n[9] = m,
                n[10] = g,
                n[11] = v,
                n[12] = i * o + s * c + h * u + e[12],
                n[13] = a * o + f * c + m * u + e[13],
                n[14] = _ * o + d * c + g * u + e[14],
                n[15] = l * o + p * c + v * u + e[15],
                n
            }
            ,
            u.makeLookAt = function(t, e, n, c) {
                var i = o.direction(t, e, o._temp1)
                  , a = o.normalize(o.cross(n, i, o._temp2), o._temp2)
                  , _ = o.normalize(o.cross(i, a, o._temp3), o._temp3)
                  , l = u._temp1
                  , s = u._temp2;
                return l[0] = a[0],
                l[1] = _[0],
                l[2] = i[0],
                l[3] = 0,
                l[4] = a[1],
                l[5] = _[1],
                l[6] = i[1],
                l[7] = 0,
                l[8] = a[2],
                l[9] = _[2],
                l[10] = i[2],
                l[11] = 0,
                l[12] = 0,
                l[13] = 0,
                l[14] = 0,
                l[15] = 1,
                s[0] = 1,
                s[1] = 0,
                s[2] = 0,
                s[3] = 0,
                s[4] = 0,
                s[5] = 1,
                s[6] = 0,
                s[7] = 0,
                s[8] = 0,
                s[9] = 0,
                s[10] = 1,
                s[11] = 0,
                s[12] = -t[0],
                s[13] = -t[1],
                s[14] = -t[2],
                s[15] = 1,
                void 0 == c && (c = new r(16)),
                u.mul(l, s, c)
            }
            ,
            u.transposeSelf = function(r) {
                var t = r[1];
                return r[1] = r[4],
                r[4] = t,
                t = r[2],
                r[2] = r[8],
                r[8] = t,
                t = r[3],
                r[3] = r[12],
                r[12] = t,
                t = r[6],
                r[6] = r[9],
                r[9] = t,
                t = r[7],
                r[7] = r[13],
                r[13] = t,
                t = r[11],
                r[11] = r[14],
                r[14] = t,
                r
            }
            ,
            u.transpose = function(t, e) {
                if (t == e) {
                    var n = 0;
                    return n = t[1],
                    t[1] = t[4],
                    t[4] = n,
                    n = t[2],
                    t[2] = t[8],
                    t[8] = n,
                    n = t[3],
                    t[3] = t[12],
                    t[12] = n,
                    n = t[6],
                    t[6] = t[9],
                    t[9] = n,
                    n = t[7],
                    t[7] = t[13],
                    t[13] = n,
                    n = t[11],
                    t[11] = t[14],
                    t[14] = n,
                    t
                }
                return void 0 == e && (e = new r(16)),
                e[0] = t[0],
                e[1] = t[4],
                e[2] = t[8],
                e[3] = t[12],
                e[4] = t[1],
                e[5] = t[5],
                e[6] = t[9],
                e[7] = t[13],
                e[8] = t[2],
                e[9] = t[6],
                e[10] = t[10],
                e[11] = t[14],
                e[12] = t[3],
                e[13] = t[7],
                e[14] = t[11],
                e[15] = t[15],
                e
            }
            ,
            u.transformPoint = function(t, e, n) {
                void 0 == n && (n = new r(3));
                var o = e[0]
                  , c = e[1]
                  , u = e[2];
                n[0] = t[0] * o + t[4] * c + t[8] * u + t[12],
                n[1] = t[1] * o + t[5] * c + t[9] * u + t[13],
                n[2] = t[2] * o + t[6] * c + t[10] * u + t[14];
                var i = t[3] * o + t[7] * c + t[11] * u + t[15];
                return 1 != i && (n[0] /= i,
                n[1] /= i,
                n[2] /= i),
                n
            }
            ,
            u.transformLine = function(t, e, n) {
                void 0 == n && (n = new r(3));
                var o = e[0]
                  , c = e[1]
                  , u = e[2];
                n[0] = t[0] * o + t[4] * c + t[8] * u,
                n[1] = t[1] * o + t[5] * c + t[9] * u,
                n[2] = t[2] * o + t[6] * c + t[10] * u;
                var i = t[3] * o + t[7] * c + t[11] * u;
                return 1 != i && (n[0] /= i,
                n[1] /= i,
                n[2] /= i),
                n
            }
            ,
            u.transformPointAffine = function(t, e, n) {
                void 0 == n && (n = new r(3));
                var o = e[0]
                  , c = e[1]
                  , u = e[2];
                return n[0] = t[0] * o + t[4] * c + t[8] * u + t[12],
                n[1] = t[1] * o + t[5] * c + t[9] * u + t[13],
                n[2] = t[2] * o + t[6] * c + t[10] * u + t[14],
                n
            }
            ,
            u.transformLineAffine = function(t, e, n) {
                void 0 == n && (n = new r(3));
                var o = e[0]
                  , c = e[1]
                  , u = e[2];
                return n[0] = t[0] * o + t[4] * c + t[8] * u,
                n[1] = t[1] * o + t[5] * c + t[9] * u,
                n[2] = t[2] * o + t[6] * c + t[10] * u,
                n
            }
            ,
            u.makeBasis = function(t, e, n) {
                var o = new r(16);
                return o[0] = t[0],
                o[1] = t[1],
                o[2] = t[2],
                o[3] = 0,
                o[4] = e[0],
                o[5] = e[1],
                o[6] = e[2],
                o[7] = 0,
                o[8] = n[0],
                o[9] = n[1],
                o[10] = n[2],
                o[11] = 0,
                o[12] = 0,
                o[13] = 0,
                o[14] = 0,
                o[15] = 1,
                o
            }
            ,
            {
                vec3: e(o.$),
                v3getX: o.getX,
                v3getY: o.getY,
                v3getZ: o.getZ,
                v3setX: t(o.setX),
                v3setY: t(o.setY),
                v3setZ: t(o.setZ),
                toTuple3: o.toTuple3,
                toRecord3: o.toRecord3,
                fromTuple3: o.fromTuple3,
                fromRecord3: o.fromRecord3,
                v3add: t(o.add),
                v3sub: t(o.sub),
                v3neg: o.neg,
                v3direction: t(o.direction),
                v3length: o.length,
                v3lengthSquared: o.lengthSquared,
                v3distance: t(o.distance),
                v3distanceSquared: t(o.distanceSquared),
                v3normalize: o.normalize,
                v3scale: t(o.scale),
                v3dot: t(o.dot),
                v3cross: t(o.cross),
                v3mul4x4: t(o.mul4x4),
                m4x4fromList: u.fromList,
                m4x4fromRecord: u.fromRecord,
                m4x4toRecord: u.toRecord,
                m4x4identity: u.identity,
                m4x4topLeft3x3: u.topLeft3x3,
                m4x4inverse: u.inverse,
                m4x4inverseOrthonormal: u.inverseOrthonormal,
                m4x4inverseTo3x3: u.inverseTo3x3,
                m4x4makeFrustum: c(u.makeFrustum),
                m4x4makePerspective: n(u.makePerspective),
                m4x4makeOrtho: c(u.makeOrtho),
                m4x4makeOrtho2D: n(u.makeOrtho2D),
                m4x4mul: t(u.mul),
                m4x4mulAffine: t(u.mulAffine),
                m4x4makeRotate: t(u.makeRotate),
                m4x4rotate: e(u.rotate),
                m4x4makeScale3: e(u.makeScale3),
                m4x4makeScale1: u.makeScale1,
                m4x4makeScale: u.makeScale,
                m4x4scale3: n(u.scale3),
                m4x4scale: t(u.scale),
                m4x4makeTranslate3: e(u.makeTranslate3),
                m4x4makeTranslate: u.makeTranslate,
                m4x4translate3: n(u.translate3),
                m4x4translate: t(u.translate),
                m4x4makeLookAt: e(u.makeLookAt),
                m4x4transpose: u.transpose,
                m4x4transformPoint: t(u.transformPoint),
                m4x4makeBasis: e(u.makeBasis)
            }
        }()
          , Te = ye.v3cross
          , we = (ye.v3dot,
        ye.v3scale)
          , Se = ye.v3normalize
          , ke = (ye.v3distanceSquared,
        ye.v3distance,
        ye.v3lengthSquared,
        ye.v3length,
        ye.v3direction)
          , xe = (ye.v3neg,
        ye.v3sub,
        ye.v3add)
          , Ce = (ye.fromRecord3,
        ye.fromTuple3)
          , Fe = (ye.toRecord3,
        ye.toTuple3,
        ye.v3setZ,
        ye.v3setY,
        ye.v3setX,
        ye.v3getZ)
          , Le = ye.v3getY
          , Re = ye.v3getX
          , Ae = (l(ye.vec3, 0, 0, 1),
        l(ye.vec3, 0, 1, 0))
          , Me = l(ye.vec3, 1, 0, 0)
          , Pe = ye.vec3
          , Ee = ye.m4x4fromRecord
          , Ne = (ye.m4x4toRecord,
        ye.m4x4fromList,
        ye.m4x4makeBasis,
        ye.m4x4transpose)
          , Be = ye.m4x4makeLookAt
          , Oe = (ye.m4x4translate,
        ye.m4x4translate3,
        ye.m4x4makeTranslate)
          , ze = (ye.m4x4makeTranslate3,
        ye.m4x4scale,
        ye.m4x4scale3,
        ye.m4x4makeScale,
        ye.m4x4makeScale3,
        ye.m4x4rotate,
        ye.m4x4makeRotate)
          , Ie = (ye.m4x4mulAffine,
        ye.m4x4mul)
          , qe = (ye.m4x4makeOrtho2D,
        ye.m4x4makeOrtho,
        ye.m4x4makePerspective)
          , Ve = (ye.m4x4makeFrustum,
        ye.m4x4inverseOrthonormal,
        ye.m4x4inverse,
        ye.m4x4identity)
          , De = ye.v3mul4x4
          , Ge = function() {
            var r = Float32Array
              , e = {};
            return r == Array ? e.$ = function(r, t) {
                return [r, t]
            }
            : e.$ = function(t, e) {
                return new r([t, e])
            }
            ,
            e.getX = function(r) {
                return r[0]
            }
            ,
            e.getY = function(r) {
                return r[1]
            }
            ,
            e.setX = function(t, e) {
                return new r([t, e[1]])
            }
            ,
            e.setY = function(t, e) {
                return new r([e[0], t])
            }
            ,
            e.toTuple = function(r) {
                return {
                    ctor: "_Tuple2",
                    _0: r[0],
                    _1: r[1]
                }
            }
            ,
            e.fromTuple = function(t) {
                return new r([t._0, t._1])
            }
            ,
            e.toRecord = function(r) {
                return {
                    _: {},
                    x: r[0],
                    y: r[1]
                }
            }
            ,
            e.fromRecord = function(t) {
                return new r([t.x, t.y])
            }
            ,
            e.add = function(t, e) {
                var n = new r(2);
                return n[0] = t[0] + e[0],
                n[1] = t[1] + e[1],
                n
            }
            ,
            e.sub = function(t, e) {
                var n = new r(2);
                return n[0] = t[0] - e[0],
                n[1] = t[1] - e[1],
                n
            }
            ,
            e.neg = function(t) {
                var e = new r(2);
                return e[0] = -t[0],
                e[1] = -t[1],
                e
            }
            ,
            e.direction = function(t, n) {
                var o = new r(2);
                o[0] = t[0] - n[0],
                o[1] = t[1] - n[1];
                var c = 1 / e.length(o);
                return o[0] = o[0] * c,
                o[1] = o[1] * c,
                o
            }
            ,
            e.length = function(r) {
                return Math.sqrt(r[0] * r[0] + r[1] * r[1])
            }
            ,
            e.lengthSquared = function(r) {
                return r[0] * r[0] + r[1] * r[1]
            }
            ,
            e.distance = function(r, t) {
                var e = r[0] - t[0]
                  , n = r[1] - t[1];
                return Math.sqrt(e * e + n * n)
            }
            ,
            e.distanceSquared = function(r, t) {
                var e = r[0] - t[0]
                  , n = r[1] - t[1];
                return e * e + n * n
            }
            ,
            e.normalize = function(t) {
                var n = new r(2)
                  , o = 1 / e.length(t);
                return n[0] = t[0] * o,
                n[1] = t[1] * o,
                n
            }
            ,
            e.scale = function(t, e) {
                var n = new r(2);
                return n[0] = e[0] * t,
                n[1] = e[1] * t,
                n
            }
            ,
            e.dot = function(r, t) {
                return r[0] * t[0] + r[1] * t[1]
            }
            ,
            {
                vec2: t(e.$),
                getX: e.getX,
                getY: e.getY,
                setX: t(e.setX),
                setY: t(e.setY),
                toTuple: e.toTuple,
                toRecord: e.toRecord,
                fromTuple: e.fromTuple,
                fromRecord: e.fromRecord,
                add: t(e.add),
                sub: t(e.sub),
                neg: e.neg,
                direction: t(e.direction),
                length: e.length,
                lengthSquared: e.lengthSquared,
                distance: t(e.distance),
                distanceSquared: t(e.distanceSquared),
                normalize: e.normalize,
                scale: t(e.scale),
                dot: t(e.dot)
            }
        }()
          , He = (Ge.dot,
        Ge.scale,
        Ge.normalize,
        Ge.distanceSquared,
        Ge.distance,
        Ge.lengthSquared,
        Ge.length,
        Ge.direction,
        Ge.neg,
        Ge.sub,
        Ge.add,
        Ge.fromRecord,
        Ge.fromTuple,
        Ge.toRecord,
        Ge.toTuple,
        Ge.setY,
        Ge.setX,
        Ge.getY)
          , Je = Ge.getX
          , Ue = Ge.vec2
          , We = function() {
            var r = Float32Array
              , e = {};
            return r == Array ? e.$ = function(r, t, e, n) {
                return [r, t, e, n]
            }
            : e.$ = function(t, e, n, o) {
                return new r([t, e, n, o])
            }
            ,
            e.getX = function(r) {
                return r[0]
            }
            ,
            e.getY = function(r) {
                return r[1]
            }
            ,
            e.getZ = function(r) {
                return r[2]
            }
            ,
            e.getW = function(r) {
                return r[3]
            }
            ,
            e.setX = function(t, e) {
                return new r([t, e[1], e[2], e[3]])
            }
            ,
            e.setY = function(t, e) {
                return new r([e[0], t, e[2], e[3]])
            }
            ,
            e.setZ = function(t, e) {
                return new r([e[0], e[1], t, e[3]])
            }
            ,
            e.setW = function(t, e) {
                return new r([e[0], e[1], e[2], t])
            }
            ,
            e.toTuple = function(r) {
                return {
                    ctor: "_Tuple4",
                    _0: r[0],
                    _1: r[1],
                    _2: r[2],
                    _3: r[3]
                }
            }
            ,
            e.fromTuple = function(t) {
                return new r([t._0, t._1, t._2, t._3])
            }
            ,
            e.toRecord = function(r) {
                return {
                    _: {},
                    x: r[0],
                    y: r[1],
                    z: r[2],
                    w: r[3]
                }
            }
            ,
            e.fromRecord = function(t) {
                return new r([t.x, t.y, t.z, t.w])
            }
            ,
            e.add = function(t, e) {
                var n = new r(4);
                return n[0] = t[0] + e[0],
                n[1] = t[1] + e[1],
                n[2] = t[2] + e[2],
                n[3] = t[3] + e[3],
                n
            }
            ,
            e.sub = function(t, e) {
                var n = new r(4);
                return n[0] = t[0] - e[0],
                n[1] = t[1] - e[1],
                n[2] = t[2] - e[2],
                n[3] = t[3] - e[3],
                n
            }
            ,
            e.neg = function(t) {
                var e = new r(4);
                return e[0] = -t[0],
                e[1] = -t[1],
                e[2] = -t[2],
                e[3] = -t[3],
                e
            }
            ,
            e.direction = function(t, n) {
                var o = new r(4);
                o[0] = t[0] - n[0],
                o[1] = t[1] - n[1],
                o[2] = t[2] - n[2],
                o[3] = t[3] - n[3];
                var c = 1 / e.length(o);
                return o[0] = o[0] * c,
                o[1] = o[1] * c,
                o[2] = o[2] * c,
                o[3] = o[3] * c,
                o
            }
            ,
            e.length = function(r) {
                return Math.sqrt(r[0] * r[0] + r[1] * r[1] + r[2] * r[2] + r[3] * r[3])
            }
            ,
            e.lengthSquared = function(r) {
                return r[0] * r[0] + r[1] * r[1] + r[2] * r[2] + r[3] * r[3]
            }
            ,
            e.distance = function(r, t) {
                var e = r[0] - t[0]
                  , n = r[1] - t[1]
                  , o = r[2] - t[2]
                  , c = r[3] - t[3];
                return Math.sqrt(e * e + n * n + o * o + c * c)
            }
            ,
            e.distanceSquared = function(r, t) {
                var e = r[0] - t[0]
                  , n = r[1] - t[1]
                  , o = r[2] - t[2]
                  , c = r[3] - t[3];
                return e * e + n * n + o * o + c * c
            }
            ,
            e.normalize = function(t) {
                var n = new r(4)
                  , o = 1 / e.length(t);
                return n[0] = t[0] * o,
                n[1] = t[1] * o,
                n[2] = t[2] * o,
                n[3] = t[3] * o,
                n
            }
            ,
            e.scale = function(t, e) {
                var n = new r(4);
                return n[0] = e[0] * t,
                n[1] = e[1] * t,
                n[2] = e[2] * t,
                n[3] = e[3] * t,
                n
            }
            ,
            e.dot = function(r, t) {
                return r[0] * t[0] + r[1] * t[1] + r[2] * t[2] + r[3] * t[3]
            }
            ,
            {
                vec4: n(e.$),
                getX: e.getX,
                getY: e.getY,
                getZ: e.getZ,
                getW: e.getW,
                setX: t(e.setX),
                setY: t(e.setY),
                setZ: t(e.setZ),
                setW: t(e.setW),
                toTuple: e.toTuple,
                toRecord: e.toRecord,
                fromTuple: e.fromTuple,
                fromRecord: e.fromRecord,
                add: t(e.add),
                sub: t(e.sub),
                neg: e.neg,
                direction: t(e.direction),
                length: e.length,
                lengthSquared: e.lengthSquared,
                distance: t(e.distance),
                distanceSquared: t(e.distanceSquared),
                normalize: e.normalize,
                scale: t(e.scale),
                dot: t(e.dot)
            }
        }()
          , je = (We.dot,
        We.scale,
        We.normalize,
        We.distanceSquared,
        We.distance,
        We.lengthSquared,
        We.length,
        We.direction,
        We.neg,
        We.sub,
        We.add,
        We.fromRecord,
        We.fromTuple,
        We.toRecord,
        We.toTuple,
        We.setW,
        We.setZ,
        We.setY,
        We.setX,
        We.getW)
          , Ye = We.getZ
          , Ke = We.getY
          , Xe = We.getX
          , Ze = We.vec4
          , $e = (e(function(r, t, n) {
            var o = n;
            return l(Jr, e(function(t, e, n) {
                return _(r, t, n)
            }), t, o._0)
        }),
        e(function(r, t, n) {
            var o = n;
            return l(jr, e(function(t, e, n) {
                return _(r, t, n)
            }), t, o._0)
        }),
        function(r) {
            return Ur(r._0)
        }
        )
          , Qe = t(function(r, t) {
            return _(Qr, r, t._0)
        })
          , rn = function(r) {
            return {
                ctor: "Set_elm_builtin",
                _0: r
            }
        }
          , tn = rn(_t)
          , en = t(function(r, t) {
            return rn(l(St, r, {
                ctor: "_Tuple0"
            }, t._0))
        })
          , nn = (t(function(r, t) {
            return function(r) {
                return l(J, en, tn, r)
            }(_(Z, r, $e(t)))
        }),
        t(function(r, t) {
            return rn(_(Rt, r, t._0))
        }),
        t(function(r, t) {
            var e = t;
            return rn(_(kt, r._0, e._0))
        }),
        t(function(r, t) {
            var e = t;
            return rn(_(Ct, r._0, e._0))
        }),
        t(function(r, t) {
            var e = t;
            return rn(_(At, r._0, e._0))
        }),
        t(function(r, e) {
            var n = e;
            return rn(_(xt, t(function(t, e) {
                return r(t)
            }), n._0))
        }),
        t(function(r, e) {
            var n = e
              , o = _(Ft, t(function(t, e) {
                return r(t)
            }), n._0)
              , c = o._0
              , u = o._1;
            return {
                ctor: "_Tuple2",
                _0: rn(c),
                _1: rn(u)
            }
        }),
        e(function(r, t, e) {
            var n = g.cmp(U(e), 0) > 0
              , o = g.cmp(r, 0) > 0 && g.cmp(t, 0) > 0
              , c = _(z, t, e)
              , u = _(_r, r, e);
            return o && n ? {
                ctor: "::",
                _0: u,
                _1: l(nn, r, t, c)
            } : {
                ctor: "[]"
            }
        }))
          , on = (t(function(r, t) {
            return l(nn, r, r, t)
        }),
        e(function(r, t, e) {
            var n = g.cmp(r, 0) > 0 && g.cmp(t, 0) > 0
              , o = _(z, t, e)
              , c = _(_r, r, e)
              , u = g.eq(r, U(c));
            return n && u ? {
                ctor: "::",
                _0: c,
                _1: l(on, r, t, o)
            } : {
                ctor: "[]"
            }
        }))
          , cn = (t(function(r, t) {
            return l(on, r, r, t)
        }),
        I(o(function(r, t, e, n, o) {
            return {
                ctor: "_Tuple5",
                _0: r,
                _1: t,
                _2: e,
                _3: n,
                _4: o
            }
        })),
        q(n(function(r, t, e, n) {
            return {
                ctor: "_Tuple4",
                _0: r,
                _1: t,
                _2: e,
                _3: n
            }
        })),
        V(e(function(r, t, e) {
            return {
                ctor: "_Tuple3",
                _0: r,
                _1: t,
                _2: e
            }
        })),
        D(t(function(r, t) {
            return {
                ctor: "_Tuple2",
                _0: r,
                _1: t
            }
        })),
        t(function(r, t) {
            for (; ; ) {
                var e = {
                    ctor: "_Tuple2",
                    _0: r,
                    _1: t
                };
                if ("[]" === e._0.ctor)
                    return !0;
                if ("[]" === e._1.ctor)
                    return !1;
                var n = e._1._1;
                if (g.eq(e._0._0, e._1._0))
                    r = e._0._1,
                    t = n;
                else
                    r = r,
                    t = n
            }
        }),
        t(function(r, t) {
            var e = {
                ctor: "_Tuple2",
                _0: r,
                _1: t
            };
            return "[]" === e._0.ctor || "[]" !== e._1.ctor && (g.eq(e._0._0, e._1._0) && _(cn, e._0._1, e._1._1))
        }))
          , un = (t(function(r, t) {
            return _(cn, tr(r), tr(t))
        }),
        e(function(r, t, e) {
            for (; ; ) {
                var n = e;
                if ("[]" === n.ctor)
                    return !1;
                var o = n._1;
                if (g.eq(n._0, r))
                    return _(cn, t, o);
                r = r,
                t = t,
                e = o
            }
        }))
          , an = (t(function(r, t) {
            var e = r;
            return "[]" === e.ctor || l(un, e._0, e._1, t)
        }),
        function(r) {
            var t = r;
            if ("[]" === t.ctor)
                return {
                    ctor: "[]"
                };
            var e = t._1
              , n = t._0;
            return {
                ctor: "::",
                _0: {
                    ctor: "_Tuple2",
                    _0: n,
                    _1: e
                },
                _1: _(Z, function(r) {
                    var t = r;
                    return {
                        ctor: "_Tuple2",
                        _0: t._0,
                        _1: {
                            ctor: "::",
                            _0: n,
                            _1: t._1
                        }
                    }
                }, an(e))
            }
        }
        )
          , _n = t(function(r, t) {
            var e = t;
            if ("::" === e.ctor) {
                var n = e._0;
                return {
                    ctor: "::",
                    _0: {
                        ctor: "::",
                        _0: r,
                        _1: n
                    },
                    _1: {
                        ctor: "::",
                        _0: n,
                        _1: e._1
                    }
                }
            }
            return {
                ctor: "[]"
            }
        })
          , ln = (_(H, _n, {
            ctor: "::",
            _0: {
                ctor: "[]"
            },
            _1: {
                ctor: "[]"
            }
        }),
        _(H, t(function(r, e) {
            return {
                ctor: "::",
                _0: {
                    ctor: "[]"
                },
                _1: _(Z, t(function(r, t) {
                    return {
                        ctor: "::",
                        _0: r,
                        _1: t
                    }
                })(r), e)
            }
        }), {
            ctor: "::",
            _0: {
                ctor: "[]"
            },
            _1: {
                ctor: "[]"
            }
        }),
        n(function(r, t, e, n) {
            for (; ; ) {
                var o = n;
                if ("[]" === o.ctor)
                    return tr(j(t) ? r : tr({
                        ctor: "::",
                        _0: t,
                        _1: r
                    }));
                if ("[]" === o._1.ctor)
                    return tr({
                        ctor: "::",
                        _0: tr({
                            ctor: "::",
                            _0: o._0,
                            _1: t
                        }),
                        _1: r
                    });
                var c = o._1
                  , u = o._0;
                if (_(e, u, o._1._0)) {
                    r = r,
                    t = {
                        ctor: "::",
                        _0: u,
                        _1: t
                    },
                    e = e,
                    n = c
                } else {
                    r = {
                        ctor: "::",
                        _0: tr({
                            ctor: "::",
                            _0: u,
                            _1: t
                        }),
                        _1: r
                    },
                    t = {
                        ctor: "[]"
                    },
                    e = e,
                    n = c
                }
            }
        }))
          , sn = (t(function(r, t) {
            return s(ln, {
                ctor: "[]"
            }, {
                ctor: "[]"
            }, r, t)
        }),
        t(function(r, e) {
            var n = t(function(r, t) {
                var e = t;
                return "Nothing" === e.ctor ? M : "[]" === e._0.ctor ? M : g.eq(r, e._0._0) ? E(e._0._1) : M
            });
            return l(J, n, E(e), r)
        }),
        t(function(r, t) {
            return {
                ctor: "_Tuple2",
                _0: _(_r, r, t),
                _1: _(z, r, t)
            }
        }))
          , fn = e(function(r, t, e) {
            for (; ; ) {
                var n = {
                    ctor: "_Tuple2",
                    _0: r,
                    _1: t
                };
                if ("_Tuple2" !== n.ctor || "::" !== n._0.ctor || "::" !== n._1.ctor)
                    return tr(e);
                var o = _(sn, n._0._0, t)
                  , c = o._0
                  , u = o._1;
                r = n._0._1,
                t = u,
                e = {
                    ctor: "::",
                    _0: c,
                    _1: e
                }
            }
        })
          , dn = (t(function(r, t) {
            return l(fn, r, t, {
                ctor: "[]"
            })
        }),
        t(function(r, t) {
            var e = r(t);
            return "Nothing" === e.ctor ? {
                ctor: "[]"
            } : {
                ctor: "::",
                _0: e._0._0,
                _1: _(dn, r, e._0._1)
            }
        }))
          , pn = (e(function(r, e, n) {
            return l(H, t(function(t, e) {
                var n = e
                  , o = _(r, n._0, t);
                return {
                    ctor: "_Tuple2",
                    _0: o._0,
                    _1: {
                        ctor: "::",
                        _0: o._1,
                        _1: n._1
                    }
                }
            }), {
                ctor: "_Tuple2",
                _0: e,
                _1: {
                    ctor: "[]"
                }
            }, n)
        }),
        e(function(r, e, n) {
            var o = l(J, t(function(t, e) {
                var n = e
                  , o = _(r, n._0, t);
                return {
                    ctor: "_Tuple2",
                    _0: o._0,
                    _1: {
                        ctor: "::",
                        _0: o._1,
                        _1: n._1
                    }
                }
            }), {
                ctor: "_Tuple2",
                _0: e,
                _1: {
                    ctor: "[]"
                }
            }, n)
              , c = o._0
              , u = o._1;
            return {
                ctor: "_Tuple2",
                _0: c,
                _1: tr(u)
            }
        }),
        t(function(r, t) {
            var e = t;
            if ("[]" === e.ctor)
                return {
                    ctor: "[]"
                };
            if ("[]" === e._1.ctor)
                return {
                    ctor: "::",
                    _0: e._0,
                    _1: {
                        ctor: "[]"
                    }
                };
            var n = _(pn, r, e._1);
            return "::" === n.ctor ? {
                ctor: "::",
                _0: _(r, e._0, n._0),
                _1: n
            } : {
                ctor: "[]"
            }
        }))
          , hn = e(function(r, t, e) {
            var n = e;
            if ("[]" === n.ctor)
                return {
                    ctor: "::",
                    _0: t,
                    _1: {
                        ctor: "[]"
                    }
                };
            var o = l(hn, r, t, n._1);
            return "::" === o.ctor ? {
                ctor: "::",
                _0: _(r, n._0, o._0),
                _1: o
            } : {
                ctor: "[]"
            }
        })
          , mn = (t(function(r, t) {
            var e = t;
            return "[]" === e.ctor ? {
                ctor: "[]"
            } : l(er, r, e._0, e._1)
        }),
        e(function(r, e, n) {
            var o = t(function(t, e) {
                var n = e
                  , o = n._0;
                return {
                    ctor: "_Tuple2",
                    _0: o - 1,
                    _1: l(r, o, t, n._1)
                }
            });
            return ce(l(H, o, {
                ctor: "_Tuple2",
                _0: U(n) - 1,
                _1: e
            }, n))
        }),
        e(function(r, e, n) {
            var o = t(function(t, e) {
                var n = e
                  , o = n._0;
                return {
                    ctor: "_Tuple2",
                    _0: o + 1,
                    _1: l(r, o, t, n._1)
                }
            });
            return ce(l(J, o, {
                ctor: "_Tuple2",
                _0: 0,
                _1: e
            }, n))
        }),
        t(function(r, e) {
            var n = t(function(t, e) {
                return E(function() {
                    var n = e;
                    return "Nothing" === n.ctor ? t : _(r, t, n._0)
                }())
            });
            return l(H, n, M, e)
        }),
        t(function(r, e) {
            var n = t(function(t, e) {
                return E(function() {
                    var n = e;
                    return "Nothing" === n.ctor ? t : _(r, n._0, t)
                }())
            });
            return l(J, n, M, e)
        }),
        t(function(r, e) {
            return l(J, t(function(r, t) {
                return {
                    ctor: "::",
                    _0: r,
                    _1: t
                }
            }), e, r)
        }))
          , gn = (e(function(r, t, e) {
            r: for (; ; ) {
                var n = {
                    ctor: "_Tuple2",
                    _0: t,
                    _1: e
                };
                if ("::" === n._0.ctor) {
                    if ("::" === n._1.ctor) {
                        r = {
                            ctor: "::",
                            _0: n._1._0,
                            _1: {
                                ctor: "::",
                                _0: n._0._0,
                                _1: r
                            }
                        },
                        t = n._0._1,
                        e = n._1._1;
                        continue r
                    }
                    return _(mn, r, t)
                }
                return _(mn, r, e)
            }
        })({
            ctor: "[]"
        }),
        function(r) {
            var e = r;
            if ("[]" === e.ctor)
                return {
                    ctor: "::",
                    _0: {
                        ctor: "[]"
                    },
                    _1: {
                        ctor: "[]"
                    }
                };
            return _(cr, function(r) {
                var e = r;
                return _(Z, t(function(r, t) {
                    return {
                        ctor: "::",
                        _0: r,
                        _1: t
                    }
                })(e._0), gn(e._1))
            }, an(e))
        }
        )
          , vn = (t(function(r, t) {
            return _(W, r, gn(t))
        }),
        t(function(r, t) {
            return _($, function(t) {
                return !r(t)
            }, t)
        }),
        t(function(r, t) {
            if (g.cmp(r, 0) < 0)
                return t;
            var e = Y(_(z, r, t))
              , n = _(_r, r, t)
              , o = e;
            return "Nothing" === o.ctor ? t : _(nr, n, o._0)
        }),
        t(function(r, e) {
            var n = t(function(t, e) {
                var n = t
                  , o = e
                  , c = _(r, n._0, o._0);
                return "EQ" === c.ctor ? _(C, n._1, o._1) : c
            })
              , o = _(dr, t(function(r, t) {
                return {
                    ctor: "_Tuple2",
                    _0: t,
                    _1: r
                }
            }), e);
            return _(Z, ue, _(O, n, o))
        }),
        t(function(r, t) {
            var e = t;
            if ("[]" === e.ctor)
                return {
                    ctor: "[]"
                };
            var n = e._1
              , o = e._0;
            return g.eq(r, o) ? n : {
                ctor: "::",
                _0: o,
                _1: _(vn, r, n)
            }
        }))
          , bn = (e(function(r, e, n) {
            return _(dr, t(function(t, n) {
                return r(t) ? e(n) : n
            }), n)
        }),
        e(function(r, t, e) {
            if (g.cmp(r, 0) < 0)
                return e;
            var n = _(z, r, e)
              , o = _(_r, r, e)
              , c = n;
            return "::" === c.ctor ? _(F["++"], o, {
                ctor: "::",
                _0: t(c._0),
                _1: c._1
            }) : e
        }))
          , yn = (t(function(r, t) {
            return _(bn, r, b(t))
        }),
        e(function(r, t, e) {
            return _(Z, function(e) {
                return r(e) ? t(e) : e
            }, e)
        }))
          , Tn = (e(function(r, t, e) {
            return l(yn, r, b(t), e)
        }),
        e(function(r, t, e) {
            for (; ; ) {
                var n = e;
                if ("[]" === n.ctor)
                    return M;
                if (t(n._0))
                    return E(r);
                r = r + 1,
                t = t,
                e = n._1
            }
        })(0))
          , wn = (t(function(r, t) {
            return _(N, function(r) {
                return _(sn, r, t)
            }, _(Tn, r, t))
        }),
        function(r) {
            return Tn(t(function(r, t) {
                return g.eq(r, t)
            })(r))
        }
        )
          , Sn = (t(function(r, t) {
            for (; ; ) {
                var e = t;
                if ("[]" === e.ctor)
                    return M;
                var n = e._0;
                if (r(n))
                    return E(n);
                r = r,
                t = e._1
            }
        }),
        t(function(r, e) {
            return l(J, t(function(t, e) {
                return {
                    ctor: "::",
                    _0: r(t),
                    _1: e
                }
            }), {
                ctor: "[]"
            }, e)
        }),
        cr)
          , kn = (e(function(r, t, e) {
            return _(Sn, function(t) {
                return _(Sn, function(e) {
                    return {
                        ctor: "::",
                        _0: _(r, t, e),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }, e)
            }, t)
        }),
        n(function(r, t, e, n) {
            return _(Sn, function(t) {
                return _(Sn, function(e) {
                    return _(Sn, function(n) {
                        return {
                            ctor: "::",
                            _0: l(r, t, e, n),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }, n)
                }, e)
            }, t)
        }),
        o(function(r, t, e, n, o) {
            return _(Sn, function(t) {
                return _(Sn, function(e) {
                    return _(Sn, function(n) {
                        return _(Sn, function(o) {
                            return {
                                ctor: "::",
                                _0: s(r, t, e, n, o),
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }, o)
                    }, n)
                }, e)
            }, t)
        }),
        t(function(r, e) {
            return l(D, t(function(r, t) {
                return r(t)
            }), e, r)
        }),
        n(function(r, t, e, n) {
            for (; ; ) {
                var o = e;
                if ("[]" === o.ctor)
                    return tr(n);
                var c = o._1
                  , u = o._0
                  , i = r(u);
                if (_(Qe, i, t))
                    r = r,
                    t = t,
                    e = c,
                    n = n;
                else
                    r = r,
                    t = _(en, i, t),
                    e = c,
                    n = {
                        ctor: "::",
                        _0: u,
                        _1: n
                    }
            }
        }))
          , xn = t(function(r, t) {
            return s(kn, r, tn, t, {
                ctor: "[]"
            })
        })
          , Cn = (t(function(r, t) {
            return g.eq(U(t), U(_(xn, r, t)))
        }),
        t(function(r, t) {
            for (; ; ) {
                var e = t;
                if ("[]" === e.ctor)
                    return {
                        ctor: "[]"
                    };
                if (!r(e._0))
                    return t;
                r = r,
                t = e._1
            }
        }))
          , Fn = function(r) {
            return t(function(t, e) {
                for (; ; ) {
                    var n = e;
                    if ("[]" === n.ctor)
                        return tr(t);
                    var o = n._0;
                    if (!r(o))
                        return tr(t);
                    t = {
                        ctor: "::",
                        _0: o,
                        _1: t
                    },
                    e = n._1
                }
            })({
                ctor: "[]"
            })
        }
          , Ln = t(function(r, t) {
            return {
                ctor: "_Tuple2",
                _0: _(Fn, r, t),
                _1: _(Cn, r, t)
            }
        })
          , Rn = t(function(r, t) {
            var e = t;
            if ("[]" === e.ctor)
                return {
                    ctor: "[]"
                };
            var n = e._0
              , o = _(Ln, r(n), e._1)
              , c = o._0
              , u = o._1;
            return {
                ctor: "::",
                _0: {
                    ctor: "::",
                    _0: n,
                    _1: c
                },
                _1: _(Rn, r, u)
            }
        })
          , An = (Rn(t(function(r, t) {
            return g.eq(r, t)
        })),
        t(function(r, e) {
            var n = t(function(t, e) {
                var n = e
                  , o = n._1
                  , c = r(t);
                return g.cmp(c, o) < 0 ? {
                    ctor: "_Tuple2",
                    _0: t,
                    _1: c
                } : {
                    ctor: "_Tuple2",
                    _0: n._0,
                    _1: o
                }
            })
              , o = e;
            if ("::" === o.ctor) {
                if ("[]" === o._1.ctor)
                    return E(o._0);
                var c = o._0;
                return E(ue(l(J, n, {
                    ctor: "_Tuple2",
                    _0: c,
                    _1: r(c)
                }, o._1)))
            }
            return M
        }),
        t(function(r, e) {
            var n = t(function(t, e) {
                var n = e
                  , o = n._1
                  , c = r(t);
                return g.cmp(c, o) > 0 ? {
                    ctor: "_Tuple2",
                    _0: t,
                    _1: c
                } : {
                    ctor: "_Tuple2",
                    _0: n._0,
                    _1: o
                }
            })
              , o = e;
            if ("::" === o.ctor) {
                if ("[]" === o._1.ctor)
                    return E(o._0);
                var c = o._0;
                return E(ue(l(J, n, {
                    ctor: "_Tuple2",
                    _0: c,
                    _1: r(c)
                }, o._1)))
            }
            return M
        }),
        function(r) {
            var t = r;
            return "[]" === t.ctor ? M : E({
                ctor: "_Tuple2",
                _0: t._0,
                _1: t._1
            })
        }
        )
          , Mn = (e(function(r, t, e) {
            for (; ; ) {
                if (g.eq(r, t) || g.cmp(r, 0) < 0)
                    return e;
                if (!(g.cmp(r, t) > 0)) {
                    var n = _(sn, r, e)
                      , o = n._0
                      , c = n._1
                      , u = _(sn, t - r, c)
                      , i = u._0
                      , a = u._1
                      , l = {
                        ctor: "_Tuple2",
                        _0: An(i),
                        _1: An(a)
                    };
                    return "_Tuple2" === l.ctor && "Just" === l._0.ctor && "_Tuple2" === l._0._0.ctor && "Just" === l._1.ctor && "_Tuple2" === l._1._0.ctor ? or({
                        ctor: "::",
                        _0: o,
                        _1: {
                            ctor: "::",
                            _0: {
                                ctor: "::",
                                _0: l._1._0._0,
                                _1: l._0._0._1
                            },
                            _1: {
                                ctor: "::",
                                _0: {
                                    ctor: "::",
                                    _0: l._0._0._0,
                                    _1: l._1._0._1
                                },
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }
                    }) : e
                }
                var s = r;
                r = t,
                t = s,
                e = e
            }
        }),
        e(function(r, t, e) {
            for (; ; ) {
                if (!(g.cmp(t, 0) > 0))
                    return r;
                r = _(mn, e, r),
                t = t - 1,
                e = e
            }
        }))
          , Pn = (t(function(r, t) {
            var e = U(t);
            return g.eq(e, 0) || g.eq(e, r) ? t : g.cmp(e, r) < 0 ? tr(_(mn, _(_r, _(L, r, e), t), l(Mn, {
                ctor: "[]"
            }, r / e | 0, t))) : _(_r, r, t)
        }),
        t(function(r, e) {
            return _(t(function(r, t) {
                for (; ; ) {
                    if (g.cmp(r, 0) < 0)
                        return t;
                    var n = r - 1
                      , o = {
                        ctor: "::",
                        _0: e(r),
                        _1: t
                    };
                    r = n,
                    t = o
                }
            }), r - 1, {
                ctor: "[]"
            })
        }),
        t(function(r, t) {
            var e = r(t);
            return "Just" === e.ctor ? {
                ctor: "::",
                _0: t,
                _1: _(Pn, r, e._0)
            } : {
                ctor: "::",
                _0: t,
                _1: {
                    ctor: "[]"
                }
            }
        }))
          , En = t(function(r, t) {
            return g.cmp(r, 0) < 0 ? M : K(_(z, r, t))
        })
          , Nn = Nn || {};
        Nn["!!"] = v(En);
        var Bn, On = function() {
            function r() {
                return g.guid()
            }
            function t(r, t) {
                for (; "[]" !== t.ctor; )
                    r(t._0),
                    t = t._1
            }
            function n(r) {
                for (var t = 0; "[]" !== r.ctor; )
                    t++,
                    r = r._1;
                return t
            }
            var c = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(r) {
                setTimeout(r, 1e3 / 60)
            }
            ;
            function u(r, t, e) {
                var n = r.createShader(e);
                if (r.shaderSource(n, t),
                r.compileShader(n),
                !r.getShaderParameter(n, r.COMPILE_STATUS))
                    throw r.getShaderInfoLog(n);
                return n
            }
            function i(r, t) {
                switch (t) {
                case r.FLOAT:
                    return {
                        size: 1,
                        type: Float32Array,
                        baseType: r.FLOAT
                    };
                case r.FLOAT_VEC2:
                    return {
                        size: 2,
                        type: Float32Array,
                        baseType: r.FLOAT
                    };
                case r.FLOAT_VEC3:
                    return {
                        size: 3,
                        type: Float32Array,
                        baseType: r.FLOAT
                    };
                case r.FLOAT_VEC4:
                    return {
                        size: 4,
                        type: Float32Array,
                        baseType: r.FLOAT
                    };
                case r.INT:
                    return {
                        size: 1,
                        type: Int32Array,
                        baseType: r.INT
                    };
                case r.INT_VEC2:
                    return {
                        size: 2,
                        type: Int32Array,
                        baseType: r.INT
                    };
                case r.INT_VEC3:
                    return {
                        size: 3,
                        type: Int32Array,
                        baseType: r.INT
                    };
                case r.INT_VEC4:
                    return {
                        size: 4,
                        type: Int32Array,
                        baseType: r.INT
                    }
                }
            }
            function a(r, e, o, c) {
                for (var u = [], a = 0; a < c; a++)
                    u.push("_" + a);
                var _ = i(r, e.type);
                if (void 0 === _)
                    throw new Error("No info available for: " + e.type);
                var l = 0
                  , s = new _.type(n(o) * _.size * c);
                t(function(r) {
                    !function(r, t, e, n, o) {
                        if (1 === c)
                            for (var i = 0; i < t; i++)
                                r[e++] = 1 === t ? n[o] : n[o][i];
                        else
                            u.forEach(function(c) {
                                for (var u = 0; u < t; u++)
                                    r[e++] = 1 === t ? n[c][o] : n[c][o][u]
                            })
                    }(s, _.size, l, r, e.name),
                    l += _.size * c
                }, o);
                var f = r.createBuffer();
                return e.name,
                r.bindBuffer(r.ARRAY_BUFFER, f),
                r.bufferData(r.ARRAY_BUFFER, s, r.STATIC_DRAW),
                f
            }
            function _(r, e, o) {
                var c = r.createBuffer()
                  , u = 0 === e.indexSize ? function(r) {
                    for (var t = new Uint16Array(r), e = 0; e < r; e++)
                        t[e] = e;
                    return t
                }(e.elemSize * n(o._0)) : function(r, e) {
                    var o, c = new Uint16Array(n(r) * e), u = 0;
                    return t(function(r) {
                        if (1 === e)
                            c[u++] = r;
                        else
                            for (o = 0; o < e; o++)
                                c[u++] = r["_" + o.toString()]
                    }, r),
                    c
                }(o._1, e.indexSize);
                return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, c),
                r.bufferData(r.ELEMENT_ARRAY_BUFFER, u, r.STATIC_DRAW),
                {
                    numIndices: u.length,
                    indexBuffer: c,
                    buffers: {}
                }
            }
            function l(r, t) {
                return r + "#" + t
            }
            function s(e, n) {
                var o = n.model
                  , c = o.cache.gl;
                if (!c)
                    return e;
                return c.viewport(0, 0, c.drawingBufferWidth, c.drawingBufferHeight),
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT | c.STENCIL_BUFFER_BIT),
                t(function(e) {
                    if ("[]" !== e.buffer._0.ctor) {
                        var n, s, f, d;
                        e.vert.id && e.frag.id && (n = l(e.vert.id, e.frag.id),
                        s = o.cache.programs[n]),
                        s || (e.vert.id ? f = o.cache.shaders[e.vert.id] : e.vert.id = r(),
                        f || (f = u(c, e.vert.src, c.VERTEX_SHADER),
                        o.cache.shaders[e.vert.id] = f),
                        e.frag.id ? d = o.cache.shaders[e.frag.id] : e.frag.id = r(),
                        d || (d = u(c, e.frag.src, c.FRAGMENT_SHADER),
                        o.cache.shaders[e.frag.id] = d),
                        s = function(r, t, e) {
                            var n = r.createProgram();
                            if (r.attachShader(n, t),
                            r.attachShader(n, e),
                            r.linkProgram(n),
                            !r.getProgramParameter(n, r.LINK_STATUS))
                                throw r.getProgramInfoLog(n);
                            return n
                        }(c, f, d),
                        n = l(e.vert.id, e.frag.id),
                        o.cache.programs[n] = s),
                        c.useProgram(s),
                        n = n || l(e.vert.id, e.frag.id);
                        var p = o.cache.uniformSetters[n];
                        p || (p = function(r, t, e) {
                            var n = 0;
                            function o(e, o) {
                                var c = r.getUniformLocation(e, o.name);
                                switch (o.type) {
                                case r.INT:
                                    return function(t) {
                                        r.uniform1i(c, t)
                                    }
                                    ;
                                case r.FLOAT:
                                    return function(t) {
                                        r.uniform1f(c, t)
                                    }
                                    ;
                                case r.FLOAT_VEC2:
                                    return function(t) {
                                        r.uniform2fv(c, new Float32Array(t))
                                    }
                                    ;
                                case r.FLOAT_VEC3:
                                    return function(t) {
                                        r.uniform3fv(c, new Float32Array(t))
                                    }
                                    ;
                                case r.FLOAT_VEC4:
                                    return function(t) {
                                        r.uniform4fv(c, new Float32Array(t))
                                    }
                                    ;
                                case r.FLOAT_MAT4:
                                    return function(t) {
                                        r.uniformMatrix4fv(c, !1, new Float32Array(t))
                                    }
                                    ;
                                case r.SAMPLER_2D:
                                    var u = n++;
                                    return function(e) {
                                        r.activeTexture(r.TEXTURE0 + u);
                                        var n = t.cache.textures[e.id];
                                        n || (n = e.createTexture(r),
                                        t.cache.textures[e.id] = n),
                                        r.bindTexture(r.TEXTURE_2D, n),
                                        r.uniform1i(c, u)
                                    }
                                    ;
                                case r.BOOL:
                                    return function(t) {
                                        r.uniform1i(c, t)
                                    }
                                    ;
                                default:
                                    return o.type,
                                    function() {}
                                }
                            }
                            for (var c = {}, u = r.getProgramParameter(e, r.ACTIVE_UNIFORMS), i = 0; i < u; i++) {
                                var a = r.getActiveUniform(e, i);
                                c[a.name] = o(e, a)
                            }
                            return c
                        }(c, o, s),
                        o.cache.uniformSetters[n] = p),
                        function(r, t) {
                            Object.keys(t).forEach(function(e) {
                                var n = r[e];
                                n && n(t[e])
                            })
                        }(p, e.uniforms);
                        var h = function(r, t) {
                            switch (t) {
                            case "Triangles":
                                return {
                                    mode: r.TRIANGLES,
                                    elemSize: 3,
                                    indexSize: 0
                                };
                            case "LineStrip":
                                return {
                                    mode: r.LINE_STRIP,
                                    elemSize: 1,
                                    indexSize: 0
                                };
                            case "LineLoop":
                                return {
                                    mode: r.LINE_LOOP,
                                    elemSize: 1,
                                    indexSize: 0
                                };
                            case "Points":
                                return {
                                    mode: r.POINTS,
                                    elemSize: 1,
                                    indexSize: 0
                                };
                            case "Lines":
                                return {
                                    mode: r.LINES,
                                    elemSize: 2,
                                    indexSize: 0
                                };
                            case "TriangleStrip":
                                return {
                                    mode: r.TRIANGLE_STRIP,
                                    elemSize: 1,
                                    indexSize: 0
                                };
                            case "TriangleFan":
                                return {
                                    mode: r.TRIANGLE_FAN,
                                    elemSize: 1,
                                    indexSize: 0
                                };
                            case "IndexedTriangles":
                                return {
                                    mode: r.TRIANGLES,
                                    elemSize: 1,
                                    indexSize: 3
                                }
                            }
                        }(c, e.buffer.ctor)
                          , m = o.cache.buffers[e.buffer.guid];
                        m || (m = _(c, h, e.buffer),
                        o.cache.buffers[e.buffer.guid] = m),
                        c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, m.indexBuffer);
                        for (var g = c.getProgramParameter(s, c.ACTIVE_ATTRIBUTES), v = 0; v < g; v++) {
                            var b = c.getActiveAttrib(s, v)
                              , y = c.getAttribLocation(s, b.name);
                            c.enableVertexAttribArray(y),
                            void 0 === m.buffers[b.name] && (m.buffers[b.name] = a(c, b, e.buffer._0, h.elemSize));
                            var T = m.buffers[b.name]
                              , w = i(c, b.type);
                            c.bindBuffer(c.ARRAY_BUFFER, T),
                            c.vertexAttribPointer(y, w.size, w.baseType, !1, 0, 0)
                        }
                        t(function(r) {
                            !function(r, t) {
                                switch (t.ctor) {
                                case "Blend":
                                    r.enable(r.BLEND),
                                    r.blendEquationSeparate(t._0, t._3),
                                    r.blendFuncSeparate(t._1, t._2, t._4, t._5),
                                    r.blendColor(t._6, t._7, t._8, t._9);
                                    break;
                                case "DepthTest":
                                    r.enable(r.DEPTH_TEST),
                                    r.depthFunc(t._0),
                                    r.depthMask(t._1),
                                    r.depthRange(t._2, t._3);
                                    break;
                                case "StencilTest":
                                    r.enable(r.STENCIL_TEST),
                                    r.stencilFuncSeparate(r.FRONT, t._3, t._0, t._1),
                                    r.stencilOpSeparate(r.FRONT, t._4, t._5, t._6),
                                    r.stencilMaskSeparate(r.FRONT, t._2),
                                    r.stencilFuncSeparate(r.BACK, t._7, t._0, t._1),
                                    r.stencilOpSeparate(r.BACK, t._8, t._9, t._10),
                                    r.stencilMaskSeparate(r.BACK, t._2);
                                    break;
                                case "Scissor":
                                    r.enable(r.SCISSOR_TEST),
                                    r.scissor(t._0, t._1, t._2, t._3);
                                    break;
                                case "ColorMask":
                                    r.colorMask(t._0, t._1, t._2, t._3);
                                    break;
                                case "CullFace":
                                    r.enable(r.CULL_FACE),
                                    r.cullFace(t._0);
                                    break;
                                case "PolygonOffset":
                                    r.enable(r.POLYGON_OFFSET_FILL),
                                    r.polygonOffset(t._0, t._1);
                                    break;
                                case "SampleCoverage":
                                    r.enable(r.SAMPLE_COVERAGE),
                                    r.sampleCoverage(t._0, t._1);
                                    break;
                                case "SampleAlphaToCoverage":
                                    r.enable(r.SAMPLE_ALPHA_TO_COVERAGE)
                                }
                            }(c, r)
                        }, e.settings),
                        c.drawElements(h.mode, m.numIndices, c.UNSIGNED_SHORT, 0),
                        t(function(r) {
                            !function(r, t) {
                                switch (t.ctor) {
                                case "Blend":
                                    r.disable(r.BLEND);
                                    break;
                                case "DepthTest":
                                    r.disable(r.DEPTH_TEST);
                                    break;
                                case "StencilTest":
                                    r.disable(r.STENCIL_TEST);
                                    break;
                                case "Scissor":
                                    r.disable(r.SCISSOR_TEST);
                                    break;
                                case "ColorMask":
                                    r.colorMask(!0, !0, !0, !0);
                                    break;
                                case "CullFace":
                                    r.disable(r.CULL_FACE);
                                    break;
                                case "PolygonOffset":
                                    r.disable(r.POLYGON_OFFSET_FILL);
                                    break;
                                case "SampleCoverage":
                                    r.disable(r.SAMPLE_COVERAGE);
                                    break;
                                case "SampleAlphaToCoverage":
                                    r.disable(r.SAMPLE_ALPHA_TO_COVERAGE)
                                }
                            }(c, r)
                        }, e.settings)
                    }
                }, o.entities),
                e
            }
            var f = {
                render: function(r) {
                    var e = {
                        alpha: !1,
                        depth: !1,
                        stencil: !1,
                        antialias: !1,
                        premultipliedAlpha: !1
                    }
                      , n = [];
                    t(function(r) {
                        var t = r._0;
                        switch (r.ctor) {
                        case "Alpha":
                            e.alpha = !0,
                            e.premultipliedAlpha = t;
                            break;
                        case "Antialias":
                            e.antialias = !0;
                            break;
                        case "Depth":
                            e.depth = !0,
                            n.push(function(r) {
                                r.clearDepth(t)
                            });
                            break;
                        case "ClearColor":
                            n.push(function(t) {
                                t.clearColor(r._0, r._1, r._2, r._3)
                            });
                            break;
                        case "Stencil":
                            e.stencil = !0,
                            n.push(function(r) {
                                r.clearStencil(t)
                            })
                        }
                    }, r.options);
                    var o = document.createElement("canvas")
                      , u = o.getContext && (o.getContext("webgl", e) || o.getContext("experimental-webgl", e));
                    u ? n.forEach(function(r) {
                        r(u)
                    }) : (o = document.createElement("div")).innerHTML = '<a href="http://get.webgl.org/">Enable WebGL</a> to see this content!';
                    return r.cache.gl = u,
                    r.cache.shaders = [],
                    r.cache.programs = {},
                    r.cache.uniformSetters = {},
                    r.cache.buffers = [],
                    r.cache.textures = [],
                    c(function() {
                        s(o, {
                            model: r
                        })
                    }),
                    o
                },
                diff: function(r, t) {
                    return t.model.cache = r.model.cache,
                    {
                        applyPatch: s,
                        data: t
                    }
                }
            };
            return {
                unsafeCoerceGLSL: function(r) {
                    return {
                        src: r
                    }
                },
                entity: o(function(t, e, n, o, c) {
                    return o.guid || (o.guid = r()),
                    {
                        ctor: "Entity",
                        vert: e,
                        frag: n,
                        buffer: o,
                        uniforms: c,
                        settings: t
                    }
                }),
                toHtml: e(function(r, t, e) {
                    var n = {
                        entities: e,
                        cache: {},
                        options: r
                    };
                    return zn.custom(t, n, f)
                })
            }
        }(), zn = function() {
            var r = "STYLE"
              , o = "EVENT"
              , c = "ATTR"
              , u = "ATTR_NS"
              , i = "undefined" != typeof document ? document : {};
            function a(r, t, e) {
                return {
                    type: "thunk",
                    func: r,
                    args: t,
                    thunk: e,
                    node: void 0
                }
            }
            function s(t) {
                for (var e, n = {}; "[]" !== t.ctor; ) {
                    var i = t._0
                      , a = i.key;
                    if (a === c || a === u || a === o) {
                        var _ = n[a] || {};
                        _[i.realKey] = i.value,
                        n[a] = _
                    } else if (a === r) {
                        for (var l = n[a] || {}, s = i.value; "[]" !== s.ctor; ) {
                            var f = s._0;
                            l[f._0] = f._1,
                            s = s._1
                        }
                        n[a] = l
                    } else if ("namespace" === a)
                        e = i.value;
                    else if ("className" === a) {
                        var d = n[a];
                        n[a] = void 0 === d ? i.value : d + " " + i.value
                    } else
                        n[a] = i.value;
                    t = t._1
                }
                return {
                    facts: n,
                    namespace: e
                }
            }
            function f(r, t, e) {
                return {
                    key: o,
                    realKey: r,
                    value: {
                        options: t,
                        decoder: e
                    }
                }
            }
            function d(r, t) {
                return (r.options === t.options || r.options.stopPropagation === t.options.stopPropagation && r.options.preventDefault === t.options.preventDefault) && Mt.equality(r.decoder, t.decoder)
            }
            function p(r, t) {
                switch (r.type) {
                case "thunk":
                    return r.node || (r.node = r.thunk()),
                    p(r.node, t);
                case "tagger":
                    for (var e = r.node, n = r.tagger; "tagger" === e.type; )
                        "object" != typeof n ? n = [n, e.tagger] : n.push(e.tagger),
                        e = e.node;
                    var o = {
                        tagger: n,
                        parent: t
                    };
                    return (a = p(e, o)).elm_event_node_ref = o,
                    a;
                case "text":
                    return i.createTextNode(r.text);
                case "node":
                    h(a = r.namespace ? i.createElementNS(r.namespace, r.tag) : i.createElement(r.tag), t, r.facts);
                    for (var c = r.children, u = 0; u < c.length; u++)
                        a.appendChild(p(c[u], t));
                    return a;
                case "keyed-node":
                    h(a = r.namespace ? i.createElementNS(r.namespace, r.tag) : i.createElement(r.tag), t, r.facts);
                    for (c = r.children,
                    u = 0; u < c.length; u++)
                        a.appendChild(p(c[u]._1, t));
                    return a;
                case "custom":
                    var a;
                    return h(a = r.impl.render(r.model), t, r.facts),
                    a
                }
            }
            function h(t, e, n) {
                for (var i in n) {
                    var a = n[i];
                    switch (i) {
                    case r:
                        m(t, a);
                        break;
                    case o:
                        v(t, e, a);
                        break;
                    case c:
                        y(t, a);
                        break;
                    case u:
                        T(t, a);
                        break;
                    case "value":
                        t[i] !== a && (t[i] = a);
                        break;
                    default:
                        t[i] = a
                    }
                }
            }
            function m(r, t) {
                var e = r.style;
                for (var n in t)
                    e[n] = t[n]
            }
            function v(r, t, e) {
                var n = r.elm_handlers || {};
                for (var o in e) {
                    var c = n[o]
                      , u = e[o];
                    if (void 0 === u)
                        r.removeEventListener(o, c),
                        n[o] = void 0;
                    else if (void 0 === c) {
                        c = b(t, u);
                        r.addEventListener(o, c),
                        n[o] = c
                    } else
                        c.info = u
                }
                r.elm_handlers = n
            }
            function y(r, t) {
                for (var e in t) {
                    var n = t[e];
                    void 0 === n ? r.removeAttribute(e) : r.setAttribute(e, n)
                }
            }
            function T(r, t) {
                for (var e in t) {
                    var n = t[e]
                      , o = n.namespace
                      , c = n.value;
                    void 0 === c ? r.removeAttributeNS(o, e) : r.setAttributeNS(o, e, c)
                }
            }
            function w(r, t) {
                var e = [];
                return k(r, t, e, 0),
                e
            }
            function S(r, t, e) {
                return {
                    index: t,
                    type: r,
                    data: e,
                    domNode: void 0,
                    eventNode: void 0
                }
            }
            function k(r, t, e, n) {
                if (r !== t) {
                    var o = r.type
                      , c = t.type;
                    if (o === c)
                        switch (c) {
                        case "thunk":
                            for (var u = r.args, i = t.args, a = u.length, _ = r.func === t.func && a === i.length; _ && a--; )
                                _ = u[a] === i[a];
                            if (_)
                                return void (t.node = r.node);
                            t.node = t.thunk();
                            var l = [];
                            return k(r.node, t.node, l, 0),
                            void (l.length > 0 && e.push(S("p-thunk", n, l)));
                        case "tagger":
                            for (var s = r.tagger, f = t.tagger, d = !1, p = r.node; "tagger" === p.type; )
                                d = !0,
                                "object" != typeof s ? s = [s, p.tagger] : s.push(p.tagger),
                                p = p.node;
                            for (var h = t.node; "tagger" === h.type; )
                                d = !0,
                                "object" != typeof f ? f = [f, h.tagger] : f.push(h.tagger),
                                h = h.node;
                            return d && s.length !== f.length ? void e.push(S("p-redraw", n, t)) : ((d ? function(r, t) {
                                for (var e = 0; e < r.length; e++)
                                    if (r[e] !== t[e])
                                        return !1;
                                return !0
                            }(s, f) : s === f) || e.push(S("p-tagger", n, f)),
                            void k(p, h, e, n + 1));
                        case "text":
                            return r.text !== t.text ? void e.push(S("p-text", n, t.text)) : void 0;
                        case "node":
                            return r.tag !== t.tag || r.namespace !== t.namespace ? void e.push(S("p-redraw", n, t)) : (void 0 !== (m = x(r.facts, t.facts)) && e.push(S("p-facts", n, m)),
                            void function(r, t, e, n) {
                                var o = r.children
                                  , c = t.children
                                  , u = o.length
                                  , i = c.length;
                                u > i ? e.push(S("p-remove-last", n, u - i)) : u < i && e.push(S("p-append", n, c.slice(u)));
                                for (var a = n, _ = u < i ? u : i, l = 0; l < _; l++) {
                                    a++;
                                    var s = o[l];
                                    k(s, c[l], e, a),
                                    a += s.descendantsCount || 0
                                }
                            }(r, t, e, n));
                        case "keyed-node":
                            return r.tag !== t.tag || r.namespace !== t.namespace ? void e.push(S("p-redraw", n, t)) : (void 0 !== (m = x(r.facts, t.facts)) && e.push(S("p-facts", n, m)),
                            void function(r, t, e, n) {
                                var o, c = [], u = {}, i = [], a = r.children, _ = t.children, l = a.length, s = _.length, f = 0, d = 0, p = n;
                                for (; f < l && d < s; ) {
                                    var h = a[f]
                                      , m = _[d]
                                      , g = h._0
                                      , v = m._0
                                      , b = h._1
                                      , y = m._1;
                                    if (g !== v) {
                                        var T = f + 1 < l
                                          , w = d + 1 < s;
                                        if (T)
                                            var x = a[f + 1]
                                              , C = x._0
                                              , R = x._1
                                              , A = v === C;
                                        if (w)
                                            var M = _[d + 1]
                                              , P = M._0
                                              , E = M._1
                                              , N = g === P;
                                        if (T && w && N && A)
                                            k(b, E, c, ++p),
                                            F(u, c, g, y, d, i),
                                            p += b.descendantsCount || 0,
                                            L(u, c, g, R, ++p),
                                            p += R.descendantsCount || 0,
                                            f += 2,
                                            d += 2;
                                        else if (w && N)
                                            p++,
                                            F(u, c, v, y, d, i),
                                            k(b, E, c, p),
                                            p += b.descendantsCount || 0,
                                            f += 1,
                                            d += 2;
                                        else if (T && A)
                                            L(u, c, g, b, ++p),
                                            p += b.descendantsCount || 0,
                                            k(R, y, c, ++p),
                                            p += R.descendantsCount || 0,
                                            f += 2,
                                            d += 1;
                                        else {
                                            if (!T || !w || C !== P)
                                                break;
                                            L(u, c, g, b, ++p),
                                            F(u, c, v, y, d, i),
                                            p += b.descendantsCount || 0,
                                            k(R, E, c, ++p),
                                            p += R.descendantsCount || 0,
                                            f += 2,
                                            d += 2
                                        }
                                    } else
                                        k(b, y, c, ++p),
                                        p += b.descendantsCount || 0,
                                        f++,
                                        d++
                                }
                                for (; f < l; ) {
                                    p++;
                                    var h = a[f]
                                      , b = h._1;
                                    L(u, c, h._0, b, p),
                                    p += b.descendantsCount || 0,
                                    f++
                                }
                                for (; d < s; ) {
                                    o = o || [];
                                    var m = _[d];
                                    F(u, c, m._0, m._1, void 0, o),
                                    d++
                                }
                                (c.length > 0 || i.length > 0 || void 0 !== o) && e.push(S("p-reorder", n, {
                                    patches: c,
                                    inserts: i,
                                    endInserts: o
                                }))
                            }(r, t, e, n));
                        case "custom":
                            if (r.impl !== t.impl)
                                return void e.push(S("p-redraw", n, t));
                            var m;
                            void 0 !== (m = x(r.facts, t.facts)) && e.push(S("p-facts", n, m));
                            var g = t.impl.diff(r, t);
                            return g ? void e.push(S("p-custom", n, g)) : void 0
                        }
                    else
                        e.push(S("p-redraw", n, t))
                }
            }
            function x(t, e, n) {
                var i;
                for (var a in t)
                    if (a !== r && a !== o && a !== c && a !== u)
                        if (a in e) {
                            var _ = t[a]
                              , l = e[a];
                            _ === l && "value" !== a || n === o && d(_, l) || ((i = i || {})[a] = l)
                        } else
                            (i = i || {})[a] = void 0 === n ? "string" == typeof t[a] ? "" : null : n === r ? "" : n === o || n === c ? void 0 : {
                                namespace: t[a].namespace,
                                value: void 0
                            };
                    else {
                        var s = x(t[a], e[a] || {}, a);
                        s && ((i = i || {})[a] = s)
                    }
                for (var f in e)
                    f in t || ((i = i || {})[f] = e[f]);
                return i
            }
            var C = "_elmW6BL";
            function F(r, t, e, n, o, c) {
                var u = r[e];
                if (void 0 === u)
                    return u = {
                        tag: "insert",
                        vnode: n,
                        index: o,
                        data: void 0
                    },
                    c.push({
                        index: o,
                        entry: u
                    }),
                    void (r[e] = u);
                if ("remove" === u.tag) {
                    c.push({
                        index: o,
                        entry: u
                    }),
                    u.tag = "move";
                    var i = [];
                    return k(u.vnode, n, i, u.index),
                    u.index = o,
                    void (u.data.data = {
                        patches: i,
                        entry: u
                    })
                }
                F(r, t, e + C, n, o, c)
            }
            function L(r, t, e, n, o) {
                var c = r[e];
                if (void 0 === c) {
                    var u = S("p-remove", o, void 0);
                    return t.push(u),
                    void (r[e] = {
                        tag: "remove",
                        vnode: n,
                        index: o,
                        data: u
                    })
                }
                if ("insert" !== c.tag)
                    L(r, t, e + C, n, o);
                else {
                    c.tag = "move";
                    var i = [];
                    k(n, c.vnode, i, o);
                    u = S("p-remove", o, {
                        patches: i,
                        entry: c
                    });
                    t.push(u)
                }
            }
            function R(r, t, e, n) {
                !function r(t, e, n, o, c, u, i) {
                    var a = n[o];
                    var _ = a.index;
                    for (; _ === c; ) {
                        var l = a.type;
                        if ("p-thunk" === l)
                            R(t, e.node, a.data, i);
                        else if ("p-reorder" === l) {
                            a.domNode = t,
                            a.eventNode = i;
                            var s = a.data.patches;
                            s.length > 0 && r(t, e, s, 0, c, u, i)
                        } else if ("p-remove" === l) {
                            a.domNode = t,
                            a.eventNode = i;
                            var f = a.data;
                            if (void 0 !== f) {
                                f.entry.data = t;
                                var s = f.patches;
                                s.length > 0 && r(t, e, s, 0, c, u, i)
                            }
                        } else
                            a.domNode = t,
                            a.eventNode = i;
                        if (!(a = n[++o]) || (_ = a.index) > u)
                            return o
                    }
                    switch (e.type) {
                    case "tagger":
                        for (var d = e.node; "tagger" === d.type; )
                            d = d.node;
                        return r(t, d, n, o, c + 1, u, t.elm_event_node_ref);
                    case "node":
                        for (var p = e.children, h = t.childNodes, m = 0; m < p.length; m++) {
                            c++;
                            var g = p[m]
                              , v = c + (g.descendantsCount || 0);
                            if (c <= _ && _ <= v && (o = r(h[m], g, n, o, c, v, i),
                            !(a = n[o]) || (_ = a.index) > u))
                                return o;
                            c = v
                        }
                        return o;
                    case "keyed-node":
                        for (var p = e.children, h = t.childNodes, m = 0; m < p.length; m++) {
                            c++;
                            var g = p[m]._1
                              , v = c + (g.descendantsCount || 0);
                            if (c <= _ && _ <= v && (o = r(h[m], g, n, o, c, v, i),
                            !(a = n[o]) || (_ = a.index) > u))
                                return o;
                            c = v
                        }
                        return o;
                    case "text":
                    case "thunk":
                        throw new Error("should never traverse `text` or `thunk` nodes like this")
                    }
                }(r, t, e, 0, 0, t.descendantsCount, n)
            }
            function A(r, t, e, n) {
                return 0 === e.length ? r : (R(r, t, e, n),
                M(r, e))
            }
            function M(r, t) {
                for (var e = 0; e < t.length; e++) {
                    var n = t[e]
                      , o = n.domNode
                      , c = P(o, n);
                    o === r && (r = c)
                }
                return r
            }
            function P(r, t) {
                switch (t.type) {
                case "p-redraw":
                    return function(r, t, e) {
                        var n = r.parentNode
                          , o = p(t, e);
                        void 0 === o.elm_event_node_ref && (o.elm_event_node_ref = r.elm_event_node_ref);
                        n && o !== r && n.replaceChild(o, r);
                        return o
                    }(r, t.data, t.eventNode);
                case "p-facts":
                    return h(r, t.eventNode, t.data),
                    r;
                case "p-text":
                    return r.replaceData(0, r.length, t.data),
                    r;
                case "p-thunk":
                    return M(r, t.data);
                case "p-tagger":
                    return void 0 !== r.elm_event_node_ref ? r.elm_event_node_ref.tagger = t.data : r.elm_event_node_ref = {
                        tagger: t.data,
                        parent: t.eventNode
                    },
                    r;
                case "p-remove-last":
                    for (var e = t.data; e--; )
                        r.removeChild(r.lastChild);
                    return r;
                case "p-append":
                    var n = t.data;
                    for (e = 0; e < n.length; e++)
                        r.appendChild(p(n[e], t.eventNode));
                    return r;
                case "p-remove":
                    var o = t.data;
                    if (void 0 === o)
                        return r.parentNode.removeChild(r),
                        r;
                    var c = o.entry;
                    return void 0 !== c.index && r.parentNode.removeChild(r),
                    c.data = M(r, o.patches),
                    r;
                case "p-reorder":
                    return function(r, t) {
                        var e = t.data
                          , n = function(r, t) {
                            if (void 0 === r)
                                return;
                            for (var e = i.createDocumentFragment(), n = 0; n < r.length; n++) {
                                var o = r[n]
                                  , c = o.entry;
                                e.appendChild("move" === c.tag ? c.data : p(c.vnode, t.eventNode))
                            }
                            return e
                        }(e.endInserts, t);
                        r = M(r, e.patches);
                        for (var o = e.inserts, c = 0; c < o.length; c++) {
                            var u = o[c]
                              , a = u.entry
                              , _ = "move" === a.tag ? a.data : p(a.vnode, t.eventNode);
                            r.insertBefore(_, r.childNodes[u.index])
                        }
                        void 0 !== n && r.appendChild(n);
                        return r
                    }(r, t);
                case "p-custom":
                    var u = t.data;
                    return u.applyPatch(r, u.data);
                default:
                    throw new Error("Ran into an unknown patch!")
                }
            }
            var E = B(function(r, t) {
                return function(r, e, n) {
                    if (void 0 === e)
                        return r;
                    var o = "The `" + t + "` module does not need flags.\nInitialize it with no arguments and you should be all set!";
                    O(o, n)
                }
            })
              , N = B(function(r, t) {
                return function(e, n, o) {
                    if (void 0 === r) {
                        var c = "Are you trying to sneak a Never value into Elm? Trickster!\nIt looks like " + t + ".main is defined with `programWithFlags` but has type `Program Never`.\nUse `program` instead if you do not want flags.";
                        O(c, o)
                    }
                    var u = _(Mt.run, r, n);
                    if ("Ok" === u.ctor)
                        return e(u._0);
                    var c = "Trying to initialize the `" + t + "` module with an unexpected flag.\nI tried to convert it to an Elm value, but ran into this problem:\n\n" + u._0;
                    O(c, o)
                }
            });
            function B(r) {
                return t(function(t, e) {
                    return function(n) {
                        return function(o, c, u) {
                            var i = r(n, c);
                            void 0 === u ? function(r, t, e, n) {
                                t.embed = function(t, e) {
                                    for (; t.lastChild; )
                                        t.removeChild(t.lastChild);
                                    return ie.initialize(n(r.init, e, t), r.update, r.subscriptions, z(t, r.view))
                                }
                                ,
                                t.fullscreen = function(t) {
                                    return ie.initialize(n(r.init, t, document.body), r.update, r.subscriptions, z(document.body, r.view))
                                }
                            }(e, o, 0, i) : function(r, t, e, n) {
                                t.fullscreen = function(t) {
                                    var o = {
                                        doc: void 0
                                    };
                                    return ie.initialize(n(r.init, t, document.body), r.update(V(o)), r.subscriptions, D(e, document.body, o, r.view, r.viewIn, r.viewOut))
                                }
                                ,
                                t.embed = function(t, o) {
                                    var c = {
                                        doc: void 0
                                    };
                                    return ie.initialize(n(r.init, o, t), r.update(V(c)), r.subscriptions, D(e, t, c, r.view, r.viewIn, r.viewOut))
                                }
                            }(_(t, u, e), o, c, i)
                        }
                    }
                })
            }
            function O(r, t) {
                throw t && (t.innerHTML = '<div style="padding-left:1em;"><h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2><pre style="padding-left:1em;">' + r + "</pre></div>"),
                new Error(r)
            }
            function z(r, t) {
                return function(e, n) {
                    var o = {
                        tagger: e,
                        parent: void 0
                    }
                      , c = t(n)
                      , u = p(c, o);
                    return r.appendChild(u),
                    q(u, t, c, o)
                }
            }
            var I = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(r) {
                setTimeout(r, 1e3 / 60)
            }
            ;
            function q(r, t, e, n) {
                var o, c = "NO_REQUEST", u = e;
                function i() {
                    switch (c) {
                    case "NO_REQUEST":
                        throw new Error("Unexpected draw callback.\nPlease report this to <https://github.com/elm-lang/virtual-dom/issues>.");
                    case "PENDING_REQUEST":
                        I(i),
                        c = "EXTRA_REQUEST";
                        var e = t(o)
                          , a = w(u, e);
                        return r = A(r, u, a, n),
                        void (u = e);
                    case "EXTRA_REQUEST":
                        return void (c = "NO_REQUEST")
                    }
                }
                return function(r) {
                    "NO_REQUEST" === c && I(i),
                    c = "PENDING_REQUEST",
                    o = r
                }
            }
            function V(r) {
                return ae.nativeBinding(function(t) {
                    var e = r.doc;
                    if (e) {
                        var n = e.getElementsByClassName("debugger-sidebar-messages")[0];
                        n && (n.scrollTop = n.scrollHeight)
                    }
                    t(ae.succeed(g.Tuple0))
                })
            }
            function D(r, t, e, n, o, c) {
                return function(u, a) {
                    var _ = {
                        tagger: u,
                        parent: void 0
                    }
                      , l = {
                        tagger: u,
                        parent: void 0
                    }
                      , s = n(a)
                      , f = p(s, _);
                    t.appendChild(f);
                    var d = q(f, n, s, _)
                      , h = o(a)._1
                      , m = p(h, l);
                    t.appendChild(m);
                    var g = q(m, function(r, t, e) {
                        var n, o = function(r) {
                            return function(t) {
                                if ("keydown" !== t.type || !t.metaKey || 82 !== t.which) {
                                    for (var e = "scroll" === t.type || "wheel" === t.type, n = t.target; null !== n; ) {
                                        if ("elm-overlay-message-details" === n.className && e)
                                            return;
                                        if (n === r && !e)
                                            return;
                                        n = n.parentNode
                                    }
                                    t.stopPropagation(),
                                    t.preventDefault()
                                }
                            }
                        }(t), c = "Normal", u = r.tagger, i = function() {};
                        return function(t) {
                            var a = e(t)
                              , _ = a._0.ctor;
                            return r.tagger = "Normal" === _ ? u : i,
                            c !== _ && (G("removeEventListener", o, c),
                            G("addEventListener", o, _),
                            "Normal" === c && (n = document.body.style.overflow,
                            document.body.style.overflow = "hidden"),
                            "Normal" === _ && (document.body.style.overflow = n),
                            c = _),
                            a._1
                        }
                    }(_, m, o), h, l)
                      , v = function(r, t, e, n, o, c) {
                        var u, a;
                        return function(r) {
                            if (r.isDebuggerOpen) {
                                if (!c.doc)
                                    return u = t(r),
                                    void (a = function(r, t, e, n) {
                                        var o = screen.width - 900
                                          , c = screen.height - 360
                                          , u = window.open("", "", "width=900,height=360,left=" + o + ",top=" + c);
                                        i = u.document,
                                        t.doc = i,
                                        i.title = "Debugger - " + r,
                                        i.body.style.margin = "0",
                                        i.body.style.padding = "0";
                                        var a = p(e, n);
                                        function _() {
                                            t.doc = void 0,
                                            u.close()
                                        }
                                        return i.body.appendChild(a),
                                        i.addEventListener("keydown", function(r) {
                                            r.metaKey && 82 === r.which && window.location.reload(),
                                            38 === r.which && (n.tagger({
                                                ctor: "Up"
                                            }),
                                            r.preventDefault()),
                                            40 === r.which && (n.tagger({
                                                ctor: "Down"
                                            }),
                                            r.preventDefault())
                                        }),
                                        window.addEventListener("unload", _),
                                        u.addEventListener("unload", function() {
                                            t.doc = void 0,
                                            window.removeEventListener("unload", _),
                                            n.tagger({
                                                ctor: "Close"
                                            })
                                        }),
                                        i = document,
                                        a
                                    }(o, c, u, e));
                                i = c.doc;
                                var n = t(r)
                                  , _ = w(u, n);
                                a = A(a, u, _, e),
                                u = n,
                                i = document
                            }
                        }
                    }(0, c, l, 0, r, e);
                    return function(r) {
                        d(r),
                        g(r),
                        v(r)
                    }
                }
            }
            function G(r, t, e) {
                switch (e) {
                case "Normal":
                    return;
                case "Pause":
                    return H(r, t, J);
                case "Message":
                    return H(r, t, U)
                }
            }
            function H(r, t, e) {
                for (var n = 0; n < e.length; n++)
                    document.body[r](e[n], t, !0)
            }
            var J = ["click", "dblclick", "mousemove", "mouseup", "mousedown", "mouseenter", "mouseleave", "touchstart", "touchend", "touchcancel", "touchmove", "pointerdown", "pointerup", "pointerover", "pointerout", "pointerenter", "pointerleave", "pointermove", "pointercancel", "dragstart", "drag", "dragend", "dragenter", "dragover", "dragleave", "drop", "keyup", "keydown", "keypress", "input", "change", "focus", "blur"]
              , U = J.concat("wheel", "scroll");
            return {
                node: function(r) {
                    return t(function(t, e) {
                        return function(r, t, e) {
                            for (var n = s(t), o = n.namespace, c = n.facts, u = [], i = 0; "[]" !== e.ctor; ) {
                                var a = e._0;
                                i += a.descendantsCount || 0,
                                u.push(a),
                                e = e._1
                            }
                            return i += u.length,
                            {
                                type: "node",
                                tag: r,
                                facts: c,
                                children: u,
                                namespace: o,
                                descendantsCount: i
                            }
                        }(r, t, e)
                    })
                },
                text: function(r) {
                    return {
                        type: "text",
                        text: r
                    }
                },
                custom: function(r, t, e) {
                    return {
                        type: "custom",
                        facts: s(r).facts,
                        model: t,
                        impl: e
                    }
                },
                map: t(function(r, t) {
                    return {
                        type: "tagger",
                        tagger: r,
                        node: t,
                        descendantsCount: 1 + (t.descendantsCount || 0)
                    }
                }),
                on: e(f),
                style: function(t) {
                    return {
                        key: r,
                        value: t
                    }
                },
                property: t(function(r, t) {
                    return {
                        key: r,
                        value: t
                    }
                }),
                attribute: t(function(r, t) {
                    return {
                        key: c,
                        realKey: r,
                        value: t
                    }
                }),
                attributeNS: e(function(r, t, e) {
                    return {
                        key: u,
                        realKey: t,
                        value: {
                            value: e,
                            namespace: r
                        }
                    }
                }),
                mapProperty: t(function(r, t) {
                    return t.key !== o ? t : f(t.realKey, t.value.options, _(Yt, r, t.value.decoder))
                }),
                lazy: t(function(r, t) {
                    return a(r, [t], function() {
                        return r(t)
                    })
                }),
                lazy2: e(function(r, t, e) {
                    return a(r, [t, e], function() {
                        return _(r, t, e)
                    })
                }),
                lazy3: n(function(r, t, e, n) {
                    return a(r, [t, e, n], function() {
                        return l(r, t, e, n)
                    })
                }),
                keyedNode: e(function(r, t, e) {
                    for (var n = s(t), o = n.namespace, c = n.facts, u = [], i = 0; "[]" !== e.ctor; ) {
                        var a = e._0;
                        i += a._1.descendantsCount || 0,
                        u.push(a),
                        e = e._1
                    }
                    return {
                        type: "keyed-node",
                        tag: r,
                        facts: c,
                        children: u,
                        namespace: o,
                        descendantsCount: i += u.length
                    }
                }),
                program: E,
                programWithFlags: N,
                staticProgram: function(r) {
                    var e = g.Tuple2(g.Tuple0, le);
                    return _(E, Bn, {
                        init: e,
                        view: function() {
                            return r
                        },
                        update: t(function() {
                            return e
                        }),
                        subscriptions: function() {
                            return de
                        }
                    })()
                }
            }
        }(), In = function(r) {
            return _(zn.program, Bn, r)
        }, qn = (zn.keyedNode,
        zn.lazy3,
        zn.lazy2,
        zn.lazy,
        {
            stopPropagation: !1,
            preventDefault: !1
        }), Vn = zn.on, Dn = t(function(r, t) {
            return l(Vn, r, qn, t)
        }), Gn = zn.style, Hn = (zn.mapProperty,
        zn.attributeNS), Jn = zn.attribute, Un = zn.property, Wn = zn.map, jn = zn.text, Yn = zn.node, Kn = (t(function(r, t) {
            return {
                stopPropagation: r,
                preventDefault: t
            }
        }),
        In), Xn = Wn, Zn = jn, $n = Yn, Qn = ($n("body"),
        $n("section"),
        $n("nav"),
        $n("article"),
        $n("aside"),
        $n("h1"),
        $n("h2"),
        $n("h3"),
        $n("h4"),
        $n("h5"),
        $n("h6"),
        $n("header"),
        $n("footer"),
        $n("address"),
        $n("main"),
        $n("p"),
        $n("hr"),
        $n("pre"),
        $n("blockquote"),
        $n("ol"),
        $n("ul"),
        $n("li"),
        $n("dl"),
        $n("dt"),
        $n("dd"),
        $n("figure"),
        $n("figcaption"),
        $n("div")), ro = ($n("a"),
        $n("em"),
        $n("strong"),
        $n("small"),
        $n("s"),
        $n("cite"),
        $n("q"),
        $n("dfn"),
        $n("abbr"),
        $n("time"),
        $n("code"),
        $n("var"),
        $n("samp"),
        $n("kbd"),
        $n("sub"),
        $n("sup"),
        $n("i"),
        $n("b"),
        $n("u"),
        $n("mark"),
        $n("ruby"),
        $n("rt"),
        $n("rp"),
        $n("bdi"),
        $n("bdo"),
        $n("span")), to = $n("br"), eo = ($n("wbr"),
        $n("ins"),
        $n("del"),
        $n("img"),
        $n("iframe"),
        $n("embed"),
        $n("object"),
        $n("param"),
        $n("video"),
        $n("audio"),
        $n("source"),
        $n("track"),
        $n("canvas"),
        $n("math"),
        $n("table"),
        $n("caption"),
        $n("colgroup"),
        $n("col"),
        $n("tbody"),
        $n("thead"),
        $n("tfoot"),
        $n("tr"),
        $n("td"),
        $n("th"),
        $n("form"),
        $n("fieldset"),
        $n("legend"),
        $n("label"),
        $n("input")), no = ($n("button"),
        $n("select"),
        $n("datalist"),
        $n("optgroup"),
        $n("option"),
        $n("textarea"),
        $n("keygen"),
        $n("output"),
        $n("progress"),
        $n("meter"),
        $n("details"),
        $n("summary"),
        $n("menuitem"),
        $n("menu"),
        t(function(r, t) {
            return {
                ctor: "SampleCoverage",
                _0: r,
                _1: t
            }
        }),
        t(function(r, t) {
            return {
                ctor: "PolygonOffset",
                _0: r,
                _1: t
            }
        }),
        n(function(r, t, e, n) {
            return {
                ctor: "ColorMask",
                _0: r,
                _1: t,
                _2: e,
                _3: n
            }
        }),
        n(function(r, t, e, n) {
            return {
                ctor: "Scissor",
                _0: r,
                _1: t,
                _2: e,
                _3: n
            }
        }),
        n(function(r, t, e, n) {
            return {
                ctor: "DepthTest",
                _0: r,
                _1: t,
                _2: e,
                _3: n
            }
        })), oo = {
            ctor: "SampleAlphaToCoverage"
        }, co = function(r) {
            return {
                ctor: "FaceMode",
                _0: r
            }
        }, uo = (co(1028),
        co(1029),
        co(1032),
        function(r) {
            var t = r;
            return s(no, 513, t.write, t.near, t.far)
        }({
            write: !0,
            near: 0,
            far: 1
        })), io = (e(function(r, t, e) {
            return {
                write: r,
                near: t,
                far: e
            }
        }),
        e(function(r, t, e) {
            return l(On.toHtml, r, t, e)
        })), ao = On.entity, _o = (ao({
            ctor: "::",
            _0: uo,
            _1: {
                ctor: "[]"
            }
        }),
        On.unsafeCoerceGLSL,
        t(function(r, t) {
            return {
                ctor: "IndexedTriangles",
                _0: r,
                _1: t
            }
        }),
        function(r) {
            return {
                ctor: "Points",
                _0: r
            }
        }
        ), lo = function(r) {
            return {
                ctor: "Lines",
                _0: r
            }
        }, so = function(r) {
            return {
                ctor: "Triangles",
                _0: r
            }
        }, fo = n(function(r, t, e, n) {
            return {
                ctor: "ClearColor",
                _0: r,
                _1: t,
                _2: e,
                _3: n
            }
        }), po = {
            ctor: "Antialias"
        }, ho = function(r) {
            return {
                ctor: "Depth",
                _0: r
            }
        }, mo = function(r) {
            return {
                ctor: "Alpha",
                _0: r
            }
        }, go = (io({
            ctor: "::",
            _0: mo(!0),
            _1: {
                ctor: "::",
                _0: po,
                _1: {
                    ctor: "::",
                    _0: ho(1),
                    _1: {
                        ctor: "[]"
                    }
                }
            }
        }),
        function(r) {
            var e = r;
            return _(t(function(r, t) {
                var n = r
                  , o = t;
                return function(r) {
                    return function(t) {
                        return function(e) {
                            return function(n) {
                                return function(o) {
                                    return function(c) {
                                        return function(u) {
                                            return function(i) {
                                                return function(a) {
                                                    return function(_) {
                                                        return {
                                                            ctor: "Blend",
                                                            _0: r,
                                                            _1: t,
                                                            _2: e,
                                                            _3: n,
                                                            _4: o,
                                                            _5: c,
                                                            _6: u,
                                                            _7: i,
                                                            _8: a,
                                                            _9: _
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }(n._0)(n._1)(n._2)(o._0)(o._1)(o._2)(e.r)(e.g)(e.b)(e.a)
            }), e.color, e.alpha)
        }
        ), vo = function(r) {
            return {
                ctor: "Factor",
                _0: r
            }
        }, bo = vo(0), yo = vo(1), To = vo(768), wo = vo(769), So = vo(774), ko = vo(775), xo = vo(770), Co = vo(771), Fo = vo(772), Lo = vo(773), Ro = vo(776), Ao = vo(32769), Mo = vo(32770), Po = vo(32771), Eo = vo(32772), No = e(function(r, t, e) {
            return {
                ctor: "Blender",
                _0: r,
                _1: t,
                _2: e
            }
        }), Bo = t(function(r, t) {
            var e = t;
            return l(No, 32774, r._0, e._0)
        }), Oo = (t(function(r, t) {
            return go({
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                color: _(Bo, r, t),
                alpha: _(Bo, r, t)
            })
        }),
        t(function(r, t) {
            var e = t;
            return l(No, 32778, r._0, e._0)
        })), zo = (t(function(r, t) {
            return go({
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                color: _(Oo, r, t),
                alpha: _(Oo, r, t)
            })
        }),
        t(function(r, t) {
            var e = t;
            return l(No, 32779, r._0, e._0)
        })), Io = (t(function(r, t) {
            return go({
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                color: _(zo, r, t),
                alpha: _(zo, r, t)
            })
        }),
        ae.onError), qo = ae.andThen, Vo = t(function(r, t) {
            var e = t;
            return ae.spawn(_(qo, he(r), e._0))
        }), Do = ae.fail, Go = (t(function(r, t) {
            return _(Io, function(t) {
                return Do(r(t))
            }, t)
        }),
        ae.succeed), Ho = t(function(r, t) {
            return _(qo, function(t) {
                return Go(r(t))
            }, t)
        }), Jo = e(function(r, t, e) {
            return _(qo, function(t) {
                return _(qo, function(e) {
                    return Go(_(r, t, e))
                }, e)
            }, t)
        }), Uo = (n(function(r, t, e, n) {
            return _(qo, function(t) {
                return _(qo, function(e) {
                    return _(qo, function(n) {
                        return Go(l(r, t, e, n))
                    }, n)
                }, e)
            }, t)
        }),
        o(function(r, t, e, n, o) {
            return _(qo, function(t) {
                return _(qo, function(e) {
                    return _(qo, function(n) {
                        return _(qo, function(o) {
                            return Go(s(r, t, e, n, o))
                        }, o)
                    }, n)
                }, e)
            }, t)
        }),
        c(function(r, t, e, n, o, c) {
            return _(qo, function(t) {
                return _(qo, function(e) {
                    return _(qo, function(n) {
                        return _(qo, function(o) {
                            return _(qo, function(c) {
                                return Go(f(r, t, e, n, o, c))
                            }, c)
                        }, o)
                    }, n)
                }, e)
            }, t)
        }),
        function(r) {
            var e = r;
            return "[]" === e.ctor ? Go({
                ctor: "[]"
            }) : l(Jo, t(function(r, t) {
                return {
                    ctor: "::",
                    _0: r,
                    _1: t
                }
            }), e._0, Uo(e._1))
        }
        ), Wo = e(function(r, t, e) {
            return _(Ho, function(r) {
                return {
                    ctor: "_Tuple0"
                }
            }, Uo(_(Z, Vo(r), t)))
        }), jo = Go({
            ctor: "_Tuple0"
        }), Yo = e(function(r, t, e) {
            return Go({
                ctor: "_Tuple0"
            })
        }), Ko = ie.leaf("Task"), Xo = function(r) {
            return {
                ctor: "Perform",
                _0: r
            }
        }, Zo = t(function(r, t) {
            return Ko(Xo(_(Ho, r, t)))
        }), $o = (t(function(r, t) {
            return Ko(Xo(_(Io, function(t) {
                return Go(r(Ar(t)))
            }, _(qo, function(t) {
                return Go(r(Mr(t)))
            }, t))))
        }),
        t(function(r, t) {
            return Xo(_(Ho, r, t._0))
        }));
        ie.effectManagers.Task = {
            pkg: "elm-lang/core",
            init: jo,
            onEffects: Wo,
            onSelfMsg: Yo,
            tag: "cmd",
            cmdMap: $o
        };
        var Qo = function() {
            return {
                create: function() {
                    return ae.nativeBinding(function(r) {
                        var t = requestAnimationFrame(function() {
                            r(ae.succeed(Date.now()))
                        });
                        return function() {
                            cancelAnimationFrame(t)
                        }
                    })
                }
            }
        }()
          , rc = function() {
            return {
                now: ae.nativeBinding(function(r) {
                    r(ae.succeed(Date.now()))
                }),
                setInterval_: t(function(r, t) {
                    return ae.nativeBinding(function(e) {
                        var n = setInterval(function() {
                            ae.rawSpawn(t)
                        }, r);
                        return function() {
                            clearInterval(n)
                        }
                    })
                })
            }
        }()
          , tc = rc.setInterval_
          , ec = e(function(r, t, e) {
            var n = t;
            if ("[]" === n.ctor)
                return Go(e);
            var o = n._0
              , c = ae.spawn(_(tc, o, _(pe, r, o)));
            return _(qo, function(t) {
                return l(ec, r, n._1, l(St, o, t, e))
            }, c)
        })
          , nc = t(function(r, t) {
            var e = r
              , n = e._1
              , o = e._0
              , c = _($r, o, t);
            return "Nothing" === c.ctor ? l(St, o, {
                ctor: "::",
                _0: n,
                _1: {
                    ctor: "[]"
                }
            }, t) : l(St, o, {
                ctor: "::",
                _0: n,
                _1: c._0
            }, t)
        })
          , oc = rc.now
          , cc = e(function(r, t, e) {
            var n = _($r, t, e.taggers);
            if ("Nothing" === n.ctor)
                return Go(e);
            return _(qo, function(r) {
                return Go(e)
            }, _(qo, function(t) {
                return Uo(_(Z, function(e) {
                    return _(he, r, e(t))
                }, n._0))
            }, oc))
        })
          , uc = ie.leaf("Time")
          , ic = t(function(r, t) {
            return {
                taggers: r,
                processes: t
            }
        })
          , ac = Go(_(ic, _t, _t))
          , _c = e(function(r, t, o) {
            var c = o
              , u = e(function(r, t, e) {
                var n = e;
                return {
                    ctor: "_Tuple3",
                    _0: n._0,
                    _1: n._1,
                    _2: _(qo, function(r) {
                        return n._2
                    }, ae.kill(t))
                }
            })
              , i = n(function(r, t, e, n) {
                var o = n;
                return {
                    ctor: "_Tuple3",
                    _0: o._0,
                    _1: l(St, r, e, o._1),
                    _2: o._2
                }
            })
              , a = e(function(r, t, e) {
                var n = e;
                return {
                    ctor: "_Tuple3",
                    _0: {
                        ctor: "::",
                        _0: r,
                        _1: n._0
                    },
                    _1: n._1,
                    _2: n._2
                }
            })
              , s = l(J, nc, _t, t)
              , f = d(Yr, a, i, u, s, c.processes, {
                ctor: "_Tuple3",
                _0: {
                    ctor: "[]"
                },
                _1: _t,
                _2: Go({
                    ctor: "_Tuple0"
                })
            })
              , p = f._0
              , h = f._1
              , m = f._2;
            return _(qo, function(r) {
                return Go(_(ic, s, r))
            }, _(qo, function(t) {
                return l(ec, r, p, h)
            }, m))
        })
          , lc = t(function(r, t) {
            return {
                ctor: "Every",
                _0: r,
                _1: t
            }
        })
          , sc = (t(function(r, t) {
            return uc(_(lc, r, t))
        }),
        t(function(r, t) {
            var e = t;
            return _(lc, e._0, function(t) {
                return r(e._1(t))
            })
        }));
        ie.effectManagers.Time = {
            pkg: "elm-lang/core",
            init: ac,
            onEffects: _c,
            onSelfMsg: cc,
            tag: "sub",
            subMap: sc
        };
        var fc = ae.kill
          , dc = (ae.sleep,
        ae.spawn)
          , pc = Qo.create({
            ctor: "_Tuple0"
        })
          , hc = ie.leaf("AnimationFrame")
          , mc = e(function(r, t, e) {
            return {
                subs: r,
                request: t,
                oldTime: e
            }
        })
          , gc = Go(l(mc, {
            ctor: "[]"
        }, M, 0))
          , vc = e(function(r, t, e) {
            var n = e
              , o = n.request
              , c = n.oldTime
              , u = {
                ctor: "_Tuple2",
                _0: o,
                _1: t
            };
            return "Nothing" === u._0.ctor ? "[]" === u._1.ctor ? Go(l(mc, {
                ctor: "[]"
            }, M, c)) : _(qo, function(r) {
                return _(qo, function(e) {
                    return Go(l(mc, t, E(r), e))
                }, oc)
            }, dc(_(qo, pe(r), pc))) : "[]" === u._1.ctor ? _(qo, function(r) {
                return Go(l(mc, {
                    ctor: "[]"
                }, M, c))
            }, fc(u._0._0)) : Go(l(mc, t, o, c))
        })
          , bc = e(function(r, t, e) {
            var n = e
              , o = n.subs
              , c = t - n.oldTime
              , u = function(e) {
                var n = e;
                return "Time" === n.ctor ? _(he, r, n._0(t)) : _(he, r, n._0(c))
            };
            return _(qo, function(r) {
                return _(qo, function(e) {
                    return Go(l(mc, o, E(r), t))
                }, Uo(_(Z, u, o)))
            }, dc(_(qo, pe(r), pc)))
        })
          , yc = function(r) {
            return {
                ctor: "Diff",
                _0: r
            }
        }
          , Tc = function(r) {
            return {
                ctor: "Time",
                _0: r
            }
        }
          , wc = t(function(r, t) {
            var e = t;
            return "Time" === e.ctor ? Tc(function(t) {
                return r(e._0(t))
            }) : yc(function(t) {
                return r(e._0(t))
            })
        });
        ie.effectManagers.AnimationFrame = {
            pkg: "elm-lang/animation-frame",
            init: gc,
            onEffects: vc,
            onSelfMsg: bc,
            tag: "sub",
            subMap: wc
        };
        var Sc = function() {
            var r = {
                addEventListener: function() {},
                removeEventListener: function() {}
            }
              , n = c("undefined" != typeof document ? document : r)
              , o = c("undefined" != typeof window ? window : r);
            function c(r) {
                return function(t, e, n) {
                    return ae.nativeBinding(function(o) {
                        function c(r) {
                            var t = _(Ut, e, r);
                            "Ok" === t.ctor && ae.rawSpawn(n(t._0))
                        }
                        return r.addEventListener(t, c),
                        function() {
                            r.removeEventListener(t, c)
                        }
                    })
                }
            }
            var u = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : function(r) {
                r()
            }
            ;
            function i(r, t) {
                return ae.nativeBinding(function(e) {
                    u(function() {
                        var n = document.getElementById(r);
                        e(null !== n ? ae.succeed(t(n)) : ae.fail({
                            ctor: "NotFound",
                            _0: r
                        }))
                    })
                })
            }
            return {
                onDocument: e(n),
                onWindow: e(o),
                focus: function(r) {
                    return i(r, function(r) {
                        return r.focus(),
                        g.Tuple0
                    })
                },
                blur: function(r) {
                    return i(r, function(r) {
                        return r.blur(),
                        g.Tuple0
                    })
                },
                getScrollTop: function(r) {
                    return i(r, function(r) {
                        return r.scrollTop
                    })
                },
                setScrollTop: t(function(r, t) {
                    return i(r, function(r) {
                        return r.scrollTop = t,
                        g.Tuple0
                    })
                }),
                getScrollLeft: function(r) {
                    return i(r, function(r) {
                        return r.scrollLeft
                    })
                },
                setScrollLeft: t(function(r, t) {
                    return i(r, function(r) {
                        return r.scrollLeft = t,
                        g.Tuple0
                    })
                }),
                toBottom: function(r) {
                    return i(r, function(r) {
                        return r.scrollTop = r.scrollHeight,
                        g.Tuple0
                    })
                },
                toRight: function(r) {
                    return i(r, function(r) {
                        return r.scrollLeft = r.scrollWidth,
                        g.Tuple0
                    })
                },
                height: t(function(r, t) {
                    return i(t, function(t) {
                        switch (r.ctor) {
                        case "Content":
                            return t.scrollHeight;
                        case "VisibleContent":
                            return t.clientHeight;
                        case "VisibleContentWithBorders":
                            return t.offsetHeight;
                        case "VisibleContentWithBordersAndMargins":
                            var e = t.getBoundingClientRect();
                            return e.bottom - e.top
                        }
                    })
                }),
                width: t(function(r, t) {
                    return i(t, function(t) {
                        switch (r.ctor) {
                        case "Content":
                            return t.scrollWidth;
                        case "VisibleContent":
                            return t.clientWidth;
                        case "VisibleContentWithBorders":
                            return t.offsetWidth;
                        case "VisibleContentWithBordersAndMargins":
                            var e = t.getBoundingClientRect();
                            return e.right - e.left
                        }
                    })
                })
            }
        }()
          , kc = Sc.onWindow
          , xc = Sc.onDocument
          , Cc = Jn
          , Fc = Un
          , Lc = t(function(r, t) {
            return _(Fc, r, It(t))
        })
          , Rc = function(r) {
            return _(Lc, "className", r)
        }
          , Ac = function(r) {
            return _(Lc, "type", r)
        }
          , Mc = function(r) {
            return _(Lc, "value", r)
        }
          , Pc = function(r) {
            return _(Lc, "max", r)
        }
          , Ec = function(r) {
            return _(Lc, "min", r)
        }
          , Nc = function(r) {
            return _(Lc, "step", r)
        }
          , Bc = (t(function(r, t) {
            return _(Fc, r, Bt(t))
        }),
        Gn)
          , Oc = _(Zt, "keyCode", ee)
          , zc = (_($t, {
            ctor: "::",
            _0: "target",
            _1: {
                ctor: "::",
                _0: "checked",
                _1: {
                    ctor: "[]"
                }
            }
        }, ne),
        _($t, {
            ctor: "::",
            _0: "target",
            _1: {
                ctor: "::",
                _0: "value",
                _1: {
                    ctor: "[]"
                }
            }
        }, oe))
          , Ic = qn
          , qc = Dn
          , Vc = (g.update(Ic, {
            preventDefault: !0
        }),
        function(r) {
            return _(qc, "input", _(Yt, r, zc))
        }
        )
          , Dc = function(r) {
            return _(qc, "click", Jt(r))
        }
          , Gc = (t(function(r, t) {
            return {
                stopPropagation: r,
                preventDefault: t
            }
        }),
        Gc || {});
        Gc["&>"] = t(function(r, t) {
            return _(qo, function(r) {
                return t
            }, r)
        });
        var Hc = e(function(r, t, e) {
            var n = t
              , o = _($r, n.category, e);
            if ("Nothing" === o.ctor)
                return Go(e);
            return _(Gc["&>"], Uo(_(Z, function(t) {
                return _(he, r, t(n.position))
            }, o._0.taggers)), Go(e))
        })
          , Jc = Go(_t)
          , Uc = t(function(r, t) {
            var e = t;
            return "Nothing" === e.ctor ? E({
                ctor: "::",
                _0: r,
                _1: {
                    ctor: "[]"
                }
            }) : E({
                ctor: "::",
                _0: r,
                _1: e._0
            })
        })
          , Wc = t(function(r, t) {
            for (; ; ) {
                var e = r;
                if ("[]" === e.ctor)
                    return t;
                r = e._1,
                t = l(wt, e._0._0, Uc(e._0._1), t)
            }
        })
          , jc = ie.leaf("Mouse")
          , Yc = t(function(r, t) {
            return {
                x: r,
                y: t
            }
        })
          , Kc = l(jt, Yc, _(Zt, "pageX", ee), _(Zt, "pageY", ee))
          , Xc = t(function(r, t) {
            return {
                taggers: r,
                pid: t
            }
        })
          , Zc = t(function(r, t) {
            return {
                category: r,
                position: t
            }
        })
          , $c = e(function(r, t, o) {
            var c = e(function(t, e, n) {
                var o = l(xc, t, Kc, function(e) {
                    return _(pe, r, _(Zc, t, e))
                });
                return _(qo, function(r) {
                    return _(qo, function(n) {
                        return Go(l(St, t, _(Xc, e, n), r))
                    }, dc(o))
                }, n)
            })
              , u = n(function(r, t, e, n) {
                var o = t;
                return _(qo, function(t) {
                    return Go(l(St, r, _(Xc, e, o.pid), t))
                }, n)
            })
              , i = e(function(r, t, e) {
                var n = t;
                return _(Gc["&>"], fc(n.pid), e)
            });
            return d(Yr, i, u, c, o, function(r) {
                return _(Wc, r, _t)
            }(t), Go(_t))
        })
          , Qc = t(function(r, t) {
            return {
                ctor: "MySub",
                _0: r,
                _1: t
            }
        })
          , ru = t(function(r, t) {
            var e = t;
            return _(Qc, e._0, function(t) {
                return r(e._1(t))
            })
        });
        ie.effectManagers.Mouse = {
            pkg: "elm-lang/mouse",
            init: Jc,
            onEffects: $c,
            onSelfMsg: Hc,
            tag: "sub",
            subMap: ru
        };
        var tu = jn
          , eu = _(Un, "namespace", It("http://www.w3.org/2000/svg"))
          , nu = e(function(r, t, e) {
            return l(Yn, r, {
                ctor: "::",
                _0: eu,
                _1: t
            }, e)
        })
          , ou = nu("svg")
          , cu = (nu("foreignObject"),
        nu("animate"),
        nu("animateColor"),
        nu("animateMotion"),
        nu("animateTransform"),
        nu("mpath"),
        nu("set"),
        nu("a"),
        nu("defs"),
        nu("g"))
          , uu = (nu("marker"),
        nu("mask"),
        nu("pattern"),
        nu("switch"),
        nu("symbol"),
        nu("desc"),
        nu("metadata"),
        nu("title"),
        nu("feBlend"),
        nu("feColorMatrix"),
        nu("feComponentTransfer"),
        nu("feComposite"),
        nu("feConvolveMatrix"),
        nu("feDiffuseLighting"),
        nu("feDisplacementMap"),
        nu("feFlood"),
        nu("feFuncA"),
        nu("feFuncB"),
        nu("feFuncG"),
        nu("feFuncR"),
        nu("feGaussianBlur"),
        nu("feImage"),
        nu("feMerge"),
        nu("feMergeNode"),
        nu("feMorphology"),
        nu("feOffset"),
        nu("feSpecularLighting"),
        nu("feTile"),
        nu("feTurbulence"),
        nu("font"),
        nu("linearGradient"),
        nu("radialGradient"),
        nu("stop"),
        nu("circle"))
          , iu = (nu("ellipse"),
        nu("image"),
        nu("line"),
        nu("path"))
          , au = (nu("polygon"),
        nu("polyline"),
        nu("rect"))
          , _u = (nu("use"),
        nu("feDistantLight"),
        nu("fePointLight"),
        nu("feSpotLight"),
        nu("altGlyph"),
        nu("altGlyphDef"),
        nu("altGlyphItem"),
        nu("glyph"),
        nu("glyphRef"),
        nu("textPath"),
        nu("text"))
          , lu = (nu("tref"),
        nu("tspan"),
        nu("clipPath"),
        nu("colorProfile"),
        nu("cursor"),
        nu("filter"),
        nu("script"),
        nu("style"),
        nu("view"),
        Jn("writing-mode"),
        Jn("word-spacing"),
        Jn("visibility"),
        Jn("unicode-bidi"),
        Jn("text-rendering"),
        Jn("text-decoration"),
        Jn("text-anchor"))
          , su = Jn("stroke")
          , fu = Jn("stroke-width")
          , du = (Jn("stroke-opacity"),
        Jn("stroke-miterlimit"),
        Jn("stroke-linejoin"),
        Jn("stroke-linecap"))
          , pu = (Jn("stroke-dashoffset"),
        Jn("stroke-dasharray"),
        Jn("stop-opacity"),
        Jn("stop-color"),
        Jn("shape-rendering"),
        Jn("pointer-events"),
        Jn("overflow"),
        Jn("opacity"),
        Jn("mask"),
        Jn("marker-start"),
        Jn("marker-mid"),
        Jn("marker-end"),
        Jn("lighting-color"),
        Jn("letter-spacing"),
        Jn("kerning"),
        Jn("image-rendering"),
        Jn("glyph-orientation-vertical"),
        Jn("glyph-orientation-horizontal"),
        Jn("font-weight"),
        Jn("font-variant"),
        Jn("font-style"),
        Jn("font-stretch"),
        Jn("font-size"))
          , hu = (Jn("font-size-adjust"),
        Jn("font-family"),
        Jn("flood-opacity"),
        Jn("flood-color"),
        Jn("filter"),
        Jn("fill"))
          , mu = (Jn("fill-rule"),
        Jn("fill-opacity"),
        Jn("enable-background"),
        Jn("dominant-baseline"),
        Jn("display"),
        Jn("direction"),
        Jn("cursor"),
        Jn("color"),
        Jn("color-rendering"),
        Jn("color-profile"),
        Jn("color-interpolation"),
        Jn("color-interpolation-filters"),
        Jn("clip"),
        Jn("clip-rule"),
        Jn("clip-path"),
        Jn("baseline-shift"),
        Jn("alignment-baseline"))
          , gu = (Jn("zoomAndPan"),
        Jn("z"),
        Jn("yChannelSelector"),
        Jn("y2"),
        Jn("y1"),
        Jn("y"))
          , vu = (_(Hn, "http://www.w3.org/XML/1998/namespace", "xml:space"),
        _(Hn, "http://www.w3.org/XML/1998/namespace", "xml:lang"),
        _(Hn, "http://www.w3.org/XML/1998/namespace", "xml:base"),
        _(Hn, "http://www.w3.org/1999/xlink", "xlink:type"),
        _(Hn, "http://www.w3.org/1999/xlink", "xlink:title"),
        _(Hn, "http://www.w3.org/1999/xlink", "xlink:show"),
        _(Hn, "http://www.w3.org/1999/xlink", "xlink:role"),
        _(Hn, "http://www.w3.org/1999/xlink", "xlink:href"),
        _(Hn, "http://www.w3.org/1999/xlink", "xlink:arcrole"),
        _(Hn, "http://www.w3.org/1999/xlink", "xlink:actuate"),
        Jn("xChannelSelector"),
        Jn("x2"),
        Jn("x1"),
        Jn("x-height"),
        Jn("x"))
          , bu = (Jn("widths"),
        Jn("width"))
          , yu = (Jn("viewTarget"),
        Jn("viewBox"),
        Jn("vert-origin-y"),
        Jn("vert-origin-x"),
        Jn("vert-adv-y"),
        Jn("version"),
        Jn("values"),
        Jn("v-mathematical"),
        Jn("v-ideographic"),
        Jn("v-hanging"),
        Jn("v-alphabetic"),
        Jn("units-per-em"),
        Jn("unicode-range"),
        Jn("unicode"),
        Jn("underline-thickness"),
        Jn("underline-position"),
        Jn("u2"),
        Jn("u1"),
        Jn("type"),
        Jn("transform"))
          , Tu = (Jn("to"),
        Jn("title"),
        Jn("textLength"),
        Jn("targetY"),
        Jn("targetX"),
        Jn("target"),
        Jn("tableValues"),
        Jn("systemLanguage"),
        Jn("surfaceScale"),
        Jn("style"))
          , wu = (Jn("string"),
        Jn("strikethrough-thickness"),
        Jn("strikethrough-position"),
        Jn("stitchTiles"),
        Jn("stemv"),
        Jn("stemh"),
        Jn("stdDeviation"),
        Jn("startOffset"),
        Jn("spreadMethod"),
        Jn("speed"),
        Jn("specularExponent"),
        Jn("specularConstant"),
        Jn("spacing"),
        Jn("slope"),
        Jn("seed"),
        Jn("scale"),
        Jn("ry"),
        Jn("rx"),
        Jn("rotate"),
        Jn("result"),
        Jn("restart"),
        Jn("requiredFeatures"),
        Jn("requiredExtensions"),
        Jn("repeatDur"),
        Jn("repeatCount"),
        Jn("rendering-intent"),
        Jn("refY"),
        Jn("refX"),
        Jn("radius"),
        Jn("r"))
          , Su = (Jn("primitiveUnits"),
        Jn("preserveAspectRatio"),
        Jn("preserveAlpha"),
        Jn("pointsAtZ"),
        Jn("pointsAtY"),
        Jn("pointsAtX"),
        Jn("points"),
        Jn("point-order"),
        Jn("patternUnits"),
        Jn("patternTransform"),
        Jn("patternContentUnits"),
        Jn("pathLength"),
        Jn("path"),
        Jn("panose-1"),
        Jn("overline-thickness"),
        Jn("overline-position"),
        Jn("origin"),
        Jn("orientation"),
        Jn("orient"),
        Jn("order"),
        Jn("operator"),
        Jn("offset"),
        Jn("numOctaves"),
        Jn("name"),
        Jn("mode"),
        Jn("min"),
        Jn("method"),
        Jn("media"),
        Jn("max"),
        Jn("mathematical"),
        Jn("maskUnits"),
        Jn("maskContentUnits"),
        Jn("markerWidth"),
        Jn("markerUnits"),
        Jn("markerHeight"),
        Jn("local"),
        Jn("limitingConeAngle"),
        Jn("lengthAdjust"),
        Jn("lang"),
        Jn("keyTimes"),
        Jn("keySplines"),
        Jn("keyPoints"),
        Jn("kernelUnitLength"),
        Jn("kernelMatrix"),
        Jn("k4"),
        Jn("k3"),
        Jn("k2"),
        Jn("k1"),
        Jn("k"),
        Jn("intercept"),
        Jn("in2"),
        Jn("in"),
        Jn("ideographic"),
        Jn("id"),
        Jn("horiz-origin-y"),
        Jn("horiz-origin-x"),
        Jn("horiz-adv-x"),
        Jn("height"))
          , ku = (Jn("hanging"),
        Jn("gradientUnits"),
        Jn("gradientTransform"),
        Jn("glyphRef"),
        Jn("glyph-name"),
        Jn("g2"),
        Jn("g1"),
        Jn("fy"),
        Jn("fx"),
        Jn("from"),
        Jn("format"),
        Jn("filterUnits"),
        Jn("filterRes"),
        Jn("externalResourcesRequired"),
        Jn("exponent"),
        Jn("end"),
        Jn("elevation"),
        Jn("edgeMode"),
        Jn("dy"),
        Jn("dx"),
        Jn("dur"),
        Jn("divisor"),
        Jn("diffuseConstant"),
        Jn("descent"),
        Jn("decelerate"),
        Jn("d"))
          , xu = Jn("cy")
          , Cu = Jn("cx")
          , Fu = (Jn("contentStyleType"),
        Jn("contentScriptType"),
        Jn("clipPathUnits"),
        Jn("class"))
          , Lu = (Jn("cap-height"),
        Jn("calcMode"),
        Jn("by"),
        Jn("bias"),
        Jn("begin"),
        Jn("bbox"),
        Jn("baseProfile"),
        Jn("baseFrequency"),
        Jn("azimuth"),
        Jn("autoReverse"),
        Jn("attributeType"),
        Jn("attributeName"),
        Jn("ascent"),
        Jn("arabic-form"),
        Jn("amplitude"),
        Jn("allowReorder"),
        Jn("alphabetic"),
        Jn("additive"),
        Jn("accumulate"),
        Jn("accelerate"),
        Jn("accent-height"),
        {
            size: ae.nativeBinding(function(r) {
                r(ae.succeed({
                    width: window.innerWidth,
                    height: window.innerHeight
                }))
            })
        })
          , Ru = Ru || {};
        Ru["&>"] = t(function(r, t) {
            return _(qo, function(r) {
                return t
            }, r)
        });
        var Au = e(function(r, t, e) {
            var n = e;
            if ("Nothing" === n.ctor)
                return Go(e);
            return _(Ru["&>"], Uo(_(Z, function(e) {
                return _(he, r, e._0(t))
            }, n._0.subs)), Go(e))
        })
          , Mu = Go(M)
          , Pu = Lu.size
          , Eu = (_(Ho, function(r) {
            return r.width
        }, Pu),
        _(Ho, function(r) {
            return r.height
        }, Pu),
        e(function(r, t, e) {
            var n = {
                ctor: "_Tuple2",
                _0: e,
                _1: t
            };
            return "Nothing" === n._0.ctor ? "[]" === n._1.ctor ? Go(M) : _(qo, function(r) {
                return Go(E({
                    subs: t,
                    pid: r
                }))
            }, dc(l(kc, "resize", Jt({
                ctor: "_Tuple0"
            }), function(t) {
                return _(qo, pe(r), Pu)
            }))) : "[]" === n._1.ctor ? _(Ru["&>"], fc(n._0._0.pid), Go(M)) : Go(E({
                subs: t,
                pid: n._0._0.pid
            }))
        }))
          , Nu = ie.leaf("Window")
          , Bu = t(function(r, t) {
            return {
                width: r,
                height: t
            }
        })
          , Ou = function(r) {
            return {
                ctor: "MySub",
                _0: r
            }
        }
          , zu = t(function(r, t) {
            var e = t;
            return Ou(function(t) {
                return r(e._0(t))
            })
        });
        ie.effectManagers.Window = {
            pkg: "elm-lang/window",
            init: Mu,
            onEffects: Eu,
            onSelfMsg: Au,
            tag: "sub",
            subMap: zu
        };
        n(function(r, t, e, n) {
            return {
                theta: r,
                size: t,
                origin: e,
                paused: n
            }
        });
        var Iu = l(Pe, 1, 0, 1)
          , qu = l(Pe, 0, 0, 1)
          , Vu = l(Pe, 0, 1, 0)
          , Du = l(Pe, 1, 0, 0)
          , Gu = {
            src: "\n        precision mediump float;\n        uniform float shade;\n        varying vec3 vcolor;\n        void main () {\n            gl_FragColor = shade * vec4(vcolor, 1.0);\n        }\n    "
        }
          , Hu = {
            src: "\n        attribute vec3 position;\n        attribute vec3 color;\n        uniform mat4 cameraTranslate;\n        uniform mat4 cameraRotate;\n        uniform mat4 perspective;\n        uniform mat4 camera;\n        uniform mat4 rotation;\n        varying vec3 vcolor;\n        void main () {\n            gl_Position = perspective * camera * rotation * cameraTranslate * cameraRotate  *  vec4(position, 1.0);\n            vcolor = color;\n        }\n    "
        }
          , Ju = e(function(r, t, e) {
            var n = function() {
                var n = {
                    ctor: "_Tuple2",
                    _0: _(hr, t - 1, r),
                    _1: _(hr, t + 1, r)
                };
                r: do {
                    if ("_Tuple2" === n.ctor) {
                        if ("Nothing" === n._0.ctor) {
                            if ("Just" === n._1.ctor)
                                return {
                                    ctor: "_Tuple2",
                                    _0: e,
                                    _1: n._1._0
                                };
                            break r
                        }
                        return "Just" === n._1.ctor ? {
                            ctor: "_Tuple2",
                            _0: n._0._0,
                            _1: n._1._0
                        } : {
                            ctor: "_Tuple2",
                            _0: n._0._0,
                            _1: e
                        }
                    }
                    break r
                } while (0);return {
                    ctor: "_Tuple2",
                    _0: e,
                    _1: e
                }
            }()
              , o = n._0
              , c = n._1
              , u = {
                ctor: "_Tuple2",
                _0: _(ke, e, o),
                _1: _(ke, c, e)
            }
              , i = u._1
              , a = {
                ctor: "_Tuple2",
                _0: Se(_(Te, o, u._0)),
                _1: Se(_(Te, c, i))
            }
              , l = a._0;
            return {
                index: t,
                position: e,
                sumNormal: Se(_(xe, l, a._1)),
                prevPosition: o,
                prevNormal: l,
                prevSumNormal: M
            }
        })
          , Uu = e(function(r, t, e) {
            var n = _(hr, t - 1, r);
            return g.update(e, {
                prevSumNormal: _(N, function(r) {
                    return r.sumNormal
                }, n)
            })
        })
          , Wu = function(r) {
            return l(Pe, Re(r) / 10, Le(r) / 10, Fe(r) / 100)
        }
          , ju = t(function(r, t) {
            var e = r.step
              , n = r.rho
              , o = r.beta
              , c = r.sigma
              , u = {
                ctor: "_Tuple3",
                _0: Re(t),
                _1: Le(t),
                _2: Fe(t)
            }
              , i = u._0
              , a = u._1
              , _ = u._2;
            return l(Pe, i + c * (a - i) * e, a + (i * (n - _) - a) * e, _ + (i * a - o * _) * e)
        })
          , Yu = e(function(r, t, e) {
            return f(ao, t, Hu, Gu, e, function(r) {
                return {
                    rotation: r.rotation,
                    perspective: r.perspective,
                    camera: r.camera,
                    shade: .8,
                    cameraTranslate: r.cameraTranslate,
                    cameraRotate: r.cameraRotate,
                    size: r.size,
                    origin: r.origin,
                    paused: r.paused
                }
            }(r))
        })
          , Ku = (c(function(r, t, e, n, o, c) {
            return {
                sigma: r,
                beta: t,
                rho: e,
                step: n,
                numVertices: o,
                thickness: c
            }
        }),
        c(function(r, t, e, n, o, c) {
            return {
                index: r,
                position: t,
                prevPosition: e,
                prevNormal: n,
                prevSumNormal: o,
                sumNormal: c
            }
        }),
        t(function(r, t) {
            return {
                position: r,
                color: t
            }
        }))
          , Xu = t(function(r, t) {
            var e = t
              , n = e.position
              , o = n
              , c = _(xe, o, _(we, r, e.sumNormal))
              , u = e.prevPosition
              , i = function() {
                var t = e.prevSumNormal;
                return "Just" === t.ctor ? _(xe, u, _(we, r, t._0)) : _(xe, u, _(we, r, e.prevNormal))
            }();
            return 0 === _(F["%"], e.index, 2) ? {
                ctor: "_Tuple2",
                _0: {
                    ctor: "_Tuple3",
                    _0: _(Ku, u, Du),
                    _1: _(Ku, i, Du),
                    _2: _(Ku, o, Du)
                },
                _1: {
                    ctor: "_Tuple3",
                    _0: _(Ku, o, Iu),
                    _1: _(Ku, i, Iu),
                    _2: _(Ku, c, Iu)
                }
            } : {
                ctor: "_Tuple2",
                _0: {
                    ctor: "_Tuple3",
                    _0: _(Ku, i, qu),
                    _1: _(Ku, u, qu),
                    _2: _(Ku, c, qu)
                },
                _1: {
                    ctor: "_Tuple3",
                    _0: _(Ku, c, Vu),
                    _1: _(Ku, u, Vu),
                    _2: _(Ku, o, Vu)
                }
            }
        })
          , Zu = function(r) {
            var e = l(H, t(function(t, e) {
                var n = e;
                return "[]" === n.ctor ? {
                    ctor: "::",
                    _0: l(Pe, .1, 0, 0),
                    _1: {
                        ctor: "[]"
                    }
                } : {
                    ctor: "::",
                    _0: _(ju, r, n._0),
                    _1: e
                }
            }), {
                ctor: "[]"
            }, _(fr, 1, r.numVertices))
              , n = yr(_(Z, Wu, e))
              , o = _(gr, Ju(n), n)
              , c = _(gr, Uu(o), o);
            return so(function(r) {
                return l(mr, t(function(r, t) {
                    var e = r;
                    return _(F["++"], t, _(F["++"], {
                        ctor: "::",
                        _0: e._0,
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: e._1,
                        _1: {
                            ctor: "[]"
                        }
                    }))
                }), {
                    ctor: "[]"
                }, r)
            }(_(vr, Xu(r.thickness), c)))
        }
          , $u = function(r) {
            return {
                ctor: "Configure",
                _0: r
            }
        }
          , Qu = (e(function(r, t, e) {
            return _(Qn, {
                ctor: "[]"
            }, {
                ctor: "::",
                _0: _(eo, {
                    ctor: "::",
                    _0: Ac("range"),
                    _1: {
                        ctor: "::",
                        _0: Ec("10"),
                        _1: {
                            ctor: "::",
                            _0: Pc("10000"),
                            _1: {
                                ctor: "::",
                                _0: Nc("30"),
                                _1: {
                                    ctor: "::",
                                    _0: Vc(function(t) {
                                        return $u(g.update(e, {
                                            numVertices: _(Rr, r, Br(t))
                                        }))
                                    }),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }
                    }
                }, {
                    ctor: "[]"
                }),
                _1: {
                    ctor: "::",
                    _0: Zn(_(F["++"], "vertices : ", T(r))),
                    _1: {
                        ctor: "::",
                        _0: _(to, {
                            ctor: "[]"
                        }, {
                            ctor: "[]"
                        }),
                        _1: {
                            ctor: "::",
                            _0: _(eo, {
                                ctor: "::",
                                _0: Ac("range"),
                                _1: {
                                    ctor: "::",
                                    _0: Ec("0"),
                                    _1: {
                                        ctor: "::",
                                        _0: Pc("1"),
                                        _1: {
                                            ctor: "::",
                                            _0: Nc("0.01"),
                                            _1: {
                                                ctor: "::",
                                                _0: Vc(function(r) {
                                                    return function(r) {
                                                        return {
                                                            ctor: "Rotate",
                                                            _0: r
                                                        }
                                                    }(_(Rr, t, Nr(r)))
                                                }),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }
                                    }
                                }
                            }, {
                                ctor: "[]"
                            }),
                            _1: {
                                ctor: "::",
                                _0: Zn(_(F["++"], "theta : ", T(t))),
                                _1: {
                                    ctor: "::",
                                    _0: _(to, {
                                        ctor: "[]"
                                    }, {
                                        ctor: "[]"
                                    }),
                                    _1: {
                                        ctor: "::",
                                        _0: _(eo, {
                                            ctor: "::",
                                            _0: Ac("range"),
                                            _1: {
                                                ctor: "::",
                                                _0: Ec("0"),
                                                _1: {
                                                    ctor: "::",
                                                    _0: Pc("100"),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: Nc("0.1"),
                                                        _1: {
                                                            ctor: "::",
                                                            _0: Vc(function(r) {
                                                                return $u(g.update(e, {
                                                                    sigma: _(Rr, e.sigma, Nr(r))
                                                                }))
                                                            }),
                                                            _1: {
                                                                ctor: "[]"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }, {
                                            ctor: "[]"
                                        }),
                                        _1: {
                                            ctor: "::",
                                            _0: Zn(_(F["++"], "sigma : ", T(e.sigma))),
                                            _1: {
                                                ctor: "::",
                                                _0: _(to, {
                                                    ctor: "[]"
                                                }, {
                                                    ctor: "[]"
                                                }),
                                                _1: {
                                                    ctor: "::",
                                                    _0: _(eo, {
                                                        ctor: "::",
                                                        _0: Ac("range"),
                                                        _1: {
                                                            ctor: "::",
                                                            _0: Ec("0"),
                                                            _1: {
                                                                ctor: "::",
                                                                _0: Pc("15"),
                                                                _1: {
                                                                    ctor: "::",
                                                                    _0: Nc("0.01"),
                                                                    _1: {
                                                                        ctor: "::",
                                                                        _0: Vc(function(r) {
                                                                            return $u(g.update(e, {
                                                                                beta: _(Rr, e.beta, Nr(r))
                                                                            }))
                                                                        }),
                                                                        _1: {
                                                                            ctor: "[]"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }, {
                                                        ctor: "[]"
                                                    }),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: Zn(_(F["++"], "beta : ", T(e.beta))),
                                                        _1: {
                                                            ctor: "::",
                                                            _0: _(to, {
                                                                ctor: "[]"
                                                            }, {
                                                                ctor: "[]"
                                                            }),
                                                            _1: {
                                                                ctor: "::",
                                                                _0: _(eo, {
                                                                    ctor: "::",
                                                                    _0: Ac("range"),
                                                                    _1: {
                                                                        ctor: "::",
                                                                        _0: Ec("0"),
                                                                        _1: {
                                                                            ctor: "::",
                                                                            _0: Pc("100"),
                                                                            _1: {
                                                                                ctor: "::",
                                                                                _0: Nc("0.5"),
                                                                                _1: {
                                                                                    ctor: "::",
                                                                                    _0: Vc(function(r) {
                                                                                        return $u(g.update(e, {
                                                                                            rho: _(Rr, e.rho, Nr(r))
                                                                                        }))
                                                                                    }),
                                                                                    _1: {
                                                                                        ctor: "[]"
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }, {
                                                                    ctor: "[]"
                                                                }),
                                                                _1: {
                                                                    ctor: "::",
                                                                    _0: Zn(_(F["++"], "rho : ", T(e.rho))),
                                                                    _1: {
                                                                        ctor: "::",
                                                                        _0: _(to, {
                                                                            ctor: "[]"
                                                                        }, {
                                                                            ctor: "[]"
                                                                        }),
                                                                        _1: {
                                                                            ctor: "::",
                                                                            _0: _(eo, {
                                                                                ctor: "::",
                                                                                _0: Ac("range"),
                                                                                _1: {
                                                                                    ctor: "::",
                                                                                    _0: Ec("0"),
                                                                                    _1: {
                                                                                        ctor: "::",
                                                                                        _0: Pc("1"),
                                                                                        _1: {
                                                                                            ctor: "::",
                                                                                            _0: Nc("0.001"),
                                                                                            _1: {
                                                                                                ctor: "::",
                                                                                                _0: Vc(function(r) {
                                                                                                    return $u(g.update(e, {
                                                                                                        step: _(Rr, e.step, Nr(r))
                                                                                                    }))
                                                                                                }),
                                                                                                _1: {
                                                                                                    ctor: "[]"
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }, {
                                                                                ctor: "[]"
                                                                            }),
                                                                            _1: {
                                                                                ctor: "::",
                                                                                _0: Zn(_(F["++"], "step : ", T(e.step))),
                                                                                _1: {
                                                                                    ctor: "[]"
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            })
        }),
        {
            pos: {
                x: 0,
                y: 0
            },
            down: !1,
            dragFrom: M
        })
          , ri = t(function(r, t) {
            return g.update(t, {
                pos: r,
                down: !0,
                dragFrom: function() {
                    var e = t.dragFrom;
                    return "Just" === e.ctor ? E(e._0) : E(r)
                }()
            })
        })
          , ti = t(function(r, t) {
            return g.update(t, {
                down: !1,
                dragFrom: M
            })
        })
          , ei = t(function(r, t) {
            return g.update(t, {
                pos: r
            })
        })
          , ni = (e(function(r, t, e) {
            return {
                pos: r,
                down: t,
                dragFrom: e
            }
        }),
        o(function(r, t, e, n, o) {
            return {
                min: r,
                max: t,
                step: e,
                roundBy: n,
                $default: o
            }
        }),
        e(function(r, t, e) {
            return {
                focus: r,
                shape: t,
                cells: e
            }
        }),
        function(r) {
            return {
                ctor: "NestPos",
                _0: r
            }
        }
        )
          , oi = function(r) {
            return {
                ctor: "Focus",
                _0: r
            }
        }
          , ci = {
            ctor: "Collapsed"
        }
          , ui = {
            ctor: "Expanded"
        }
          , ii = {
            ctor: "TurnedOff"
        }
          , ai = {
            ctor: "TurnedOn"
        }
          , _i = {
            ctor: "NotSelected"
        }
          , li = {
            ctor: "Selected"
        }
          , si = {
            ctor: "Stay"
        }
          , fi = function(r) {
            return {
                ctor: "ChoiceItem",
                _0: r
            }
        }
          , di = o(function(r, t, e, n, o) {
            return {
                ctor: "Choice",
                _0: r,
                _1: t,
                _2: e,
                _3: n,
                _4: o
            }
        })
          , pi = e(function(r, t, e) {
            return {
                ctor: "Nested",
                _0: r,
                _1: t,
                _2: e
            }
        })
          , hi = t(function(r, t) {
            return {
                ctor: "Button",
                _0: r,
                _1: t
            }
        })
          , mi = e(function(r, t, e) {
            return {
                ctor: "Toggle",
                _0: r,
                _1: t,
                _2: e
            }
        })
          , gi = n(function(r, t, e, n) {
            return {
                ctor: "Knob",
                _0: r,
                _1: t,
                _2: e,
                _3: n
            }
        })
          , vi = e(function(r, t, e) {
            return {
                ctor: "TuneAndApply",
                _0: r,
                _1: t,
                _2: e
            }
        })
          , bi = t(function(r, t) {
            return {
                ctor: "ToggleOffAndSendToUser",
                _0: r,
                _1: t
            }
        })
          , yi = t(function(r, t) {
            return {
                ctor: "ToggleOnAndSendToUser",
                _0: r,
                _1: t
            }
        })
          , Ti = t(function(r, t) {
            return {
                ctor: "SelectAndSendToUser",
                _0: r,
                _1: t
            }
        })
          , wi = function(r) {
            return {
                ctor: "SendToUser",
                _0: r
            }
        }
          , Si = function(r) {
            return {
                ctor: "Select",
                _0: r
            }
        }
          , ki = function(r) {
            return {
                ctor: "CollapseChoice",
                _0: r
            }
        }
          , xi = function(r) {
            return {
                ctor: "ExpandChoice",
                _0: r
            }
        }
          , Ci = function(r) {
            return {
                ctor: "CollapseNested",
                _0: r
            }
        }
          , Fi = function(r) {
            return {
                ctor: "ExpandNested",
                _0: r
            }
        }
          , Li = function(r) {
            return {
                ctor: "ToggleOff",
                _0: r
            }
        }
          , Ri = function(r) {
            return {
                ctor: "ToggleOn",
                _0: r
            }
        }
          , Ai = t(function(r, t) {
            return {
                ctor: "Tune",
                _0: r,
                _1: t
            }
        })
          , Mi = function(r) {
            return {
                ctor: "FocusOn",
                _0: r
            }
        }
          , Pi = function(r) {
            return {
                ctor: "TrackMouse",
                _0: r
            }
        }
          , Ei = {
            ctor: "NoOp"
        }
          , Ni = e(function(r, t, e) {
            return _(cu, {
                ctor: "::",
                _0: Fu("gui-arrow"),
                _1: {
                    ctor: "::",
                    _0: yu("rotate(-180.000000) translate(-30, -12)"),
                    _1: {
                        ctor: "[]"
                    }
                }
            }, {
                ctor: "::",
                _0: _(iu, {
                    ctor: "::",
                    _0: vu(T(r)),
                    _1: {
                        ctor: "::",
                        _0: gu(T(t)),
                        _1: {
                            ctor: "::",
                            _0: ku("m 0 20 l 20 -20 l 20 20"),
                            _1: {
                                ctor: "::",
                                _0: su(e),
                                _1: {
                                    ctor: "::",
                                    _0: hu("none"),
                                    _1: {
                                        ctor: "::",
                                        _0: fu("2"),
                                        _1: {
                                            ctor: "::",
                                            _0: du("round"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, {
                    ctor: "[]"
                }),
                _1: {
                    ctor: "[]"
                }
            })
        })
          , Bi = e(function(r, t, e) {
            return _(cu, {
                ctor: "::",
                _0: Fu("gui-arrow"),
                _1: {
                    ctor: "::",
                    _0: yu("rotate(-180.000000) translate(-30, -12)"),
                    _1: {
                        ctor: "[]"
                    }
                }
            }, {
                ctor: "::",
                _0: _(iu, {
                    ctor: "::",
                    _0: vu(T(r)),
                    _1: {
                        ctor: "::",
                        _0: gu(T(t)),
                        _1: {
                            ctor: "::",
                            _0: ku("m 0 0 l 20 20 l 20 -20"),
                            _1: {
                                ctor: "::",
                                _0: su(e),
                                _1: {
                                    ctor: "::",
                                    _0: hu("none"),
                                    _1: {
                                        ctor: "::",
                                        _0: fu("2"),
                                        _1: {
                                            ctor: "::",
                                            _0: du("round"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, {
                    ctor: "[]"
                }),
                _1: {
                    ctor: "[]"
                }
            })
        })
          , Oi = t(function(r, t) {
            return {
                ctor: "::",
                _0: bu("5"),
                _1: {
                    ctor: "::",
                    _0: Su("5"),
                    _1: {
                        ctor: "::",
                        _0: vu(T(-2.5)),
                        _1: {
                            ctor: "::",
                            _0: gu(T(-2.5)),
                            _1: {
                                ctor: "::",
                                _0: hu(r),
                                _1: {
                                    ctor: "::",
                                    _0: su("none"),
                                    _1: {
                                        ctor: "::",
                                        _0: yu(_(F["++"], "rotate(", _(F["++"], T(t), ") translate(0,-15)"))),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
          , zi = e(function(r, t, e) {
            return {
                ctor: "::",
                _0: Cu(T(r)),
                _1: {
                    ctor: "::",
                    _0: xu(T(t)),
                    _1: {
                        ctor: "::",
                        _0: wu("15"),
                        _1: {
                            ctor: "::",
                            _0: su(e),
                            _1: {
                                ctor: "::",
                                _0: hu("none"),
                                _1: {
                                    ctor: "::",
                                    _0: fu("2"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
          , Ii = e(function(r, t, e) {
            return {
                ctor: "::",
                _0: hu(e),
                _1: {
                    ctor: "::",
                    _0: vu(T(r)),
                    _1: {
                        ctor: "::",
                        _0: gu(T(t)),
                        _1: {
                            ctor: "::",
                            _0: pu("12"),
                            _1: {
                                ctor: "::",
                                _0: Tu("font-family: sans-serif;"),
                                _1: {
                                    ctor: "::",
                                    _0: lu("middle"),
                                    _1: {
                                        ctor: "::",
                                        _0: mu("central"),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
          , qi = n(function(r, t, e, n) {
            var o = function(r) {
                var t = r;
                switch (t.ctor) {
                case "Ghost":
                case "Knob":
                case "Toggle":
                case "Button":
                case "Nested":
                case "Choice":
                default:
                    return t._0
                }
            }
              , c = function() {
                var r = n;
                switch (r.ctor) {
                case "Ghost":
                    return _(cu, {
                        ctor: "::",
                        _0: Fu("gui-ghost"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "[]"
                    });
                case "Knob":
                    var t = r._2
                      , c = r._1.roundBy
                      , u = r._1.min
                      , i = r._1.max
                      , a = 360 * ((r._1.$default - u) / (i - u))
                      , s = 360 * ((t - u) / (i - u))
                      , f = w(x(t * w(c))) / w(c);
                    return _(cu, {
                        ctor: "::",
                        _0: Fu("gui-knob"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: _(_u, l(Ii, 35, 70 / 3, "aqua"), {
                            ctor: "::",
                            _0: tu(T(f)),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: _(cu, {
                                ctor: "::",
                                _0: yu(_(F["++"], "translate(", _(F["++"], T(35), _(F["++"], ",", _(F["++"], T(70 / 3), ")"))))),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: _(uu, l(zi, 0, 0, "aqua"), {
                                    ctor: "[]"
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: _(au, _(Oi, "rgba(0,255,0,0.4)", a), {
                                        ctor: "[]"
                                    }),
                                    _1: {
                                        ctor: "::",
                                        _0: _(au, _(Oi, "aqua", s), {
                                            ctor: "[]"
                                        }),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    });
                case "Toggle":
                    var d = r._1;
                    return _(cu, {
                        ctor: "::",
                        _0: Fu("gui-toggle"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: _(_u, l(Ii, 35, 70 / 3, "aqua"), {
                            ctor: "::",
                            _0: tu(g.eq(d, ai) ? "on" : "off"),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: _(uu, l(zi, 35, 70 / 3, g.eq(d, ai) ? "green" : "red"), {
                                ctor: "[]"
                            }),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    });
                case "Choice":
                    return _(cu, {
                        ctor: "::",
                        _0: Fu("gui-choice"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: _(_u, l(Ii, 35, 35, "aqua"), {
                            ctor: "::",
                            _0: tu(_(A, "", _(N, o, _(hr, r._2, yr(r._4.cells))))),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "::",
                            _0: _(cu, {
                                ctor: "::",
                                _0: yu(_(F["++"], "translate(", _(F["++"], T(25), ",10)"))),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: g.eq(r._1, ui) ? l(Ni, 35, 10, "aqua") : l(Bi, 35, 10, "aqua"),
                                _1: {
                                    ctor: "[]"
                                }
                            }),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    });
                case "Nested":
                    return _(cu, {
                        ctor: "::",
                        _0: Fu("gui-nested"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: _(cu, {
                            ctor: "::",
                            _0: yu(_(F["++"], "translate(", _(F["++"], T(25), ",10)"))),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: g.eq(r._1, ui) ? l(Ni, 35, 10, "aqua") : l(Bi, 35, 10, "aqua"),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "[]"
                        }
                    });
                case "ChoiceItem":
                    return _(cu, {
                        ctor: "::",
                        _0: Fu("gui-choice-item"),
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: _(cu, {
                            ctor: "::",
                            _0: yu(_(F["++"], "translate(", _(F["++"], T(25), ",10)"))),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: function() {
                                var r = e;
                                return "Just" === r.ctor && "Selected" === r._0.ctor ? l(Ni, 35, 10, "green") : l(Ni, 35, 10, "darkgray")
                            }(),
                            _1: {
                                ctor: "[]"
                            }
                        }),
                        _1: {
                            ctor: "[]"
                        }
                    });
                default:
                    return _(cu, {
                        ctor: "[]"
                    }, {
                        ctor: "::",
                        _0: _(uu, l(zi, 35, 70 / 3, "darkgray"), {
                            ctor: "[]"
                        }),
                        _1: {
                            ctor: "[]"
                        }
                    })
                }
            }();
            return _(ou, {
                ctor: "::",
                _0: bu(T(70)),
                _1: {
                    ctor: "::",
                    _0: Su(T(70)),
                    _1: {
                        ctor: "[]"
                    }
                }
            }, {
                ctor: "::",
                _0: c,
                _1: {
                    ctor: "::",
                    _0: _(_u, l(Ii, 35, 60, "white"), {
                        ctor: "::",
                        _0: tu(o(n)),
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }
            })
        })
          , Vi = t(function(r, t) {
            var e = r
              , n = t;
            return g.cmp(U(e._0), U(n._0)) > 0
        })
          , Di = t(function(r, t) {
            var e = r
              , n = t;
            return g.eq(e._0, n._0)
        })
          , Gi = function(r) {
            return _(N, ni, _(P, function(r) {
                return "[]" === r.ctor ? M : E(r)
            }, Y(r._0)))
        }
          , Hi = function(r) {
            return K(r._0)
        }
          , Ji = function(r) {
            return U(r._0)
        }
          , Ui = t(function(r, t) {
            return ni({
                ctor: "::",
                _0: r,
                _1: t._0
            })
        })
          , Wi = function(r) {
            return ni({
                ctor: "::",
                _0: r,
                _1: {
                    ctor: "[]"
                }
            })
        }
          , ji = t(function(r, t) {
            return _(A, Wi(r), _(N, Ui(r), t))
        })
          , Yi = ni({
            ctor: "[]"
        })
          , Ki = n(function(r, t, n, o) {
            var c = o
              , u = e(function(r, e, n) {
                var o = n
                  , c = o._1
                  , u = o._0;
                return {
                    ctor: "_Tuple2",
                    _0: u + 1,
                    _1: function() {
                        var n = function() {
                            var t = r;
                            return "Just" === t.ctor ? _(Ui, u, t._0) : Wi(u)
                        }()
                          , o = e;
                        switch (o.ctor) {
                        case "Nested":
                            return s(Ki, E(n), t, l(t, e, n, c), o._2);
                        case "Choice":
                            return s(Ki, E(n), t, l(t, e, n, c), o._4);
                        default:
                            return l(t, e, n, c)
                        }
                    }()
                }
            });
            return ce(l(J, u(r), {
                ctor: "_Tuple2",
                _0: 0,
                _1: n
            }, c.cells))
        })
          , Xi = Ki(M)
          , Zi = (e(function(r, t, n) {
            return l(Xi, e(function(t, e, n) {
                var o = t;
                switch (o.ctor) {
                case "Nested":
                    return l(r, o._2, e, n);
                case "Choice":
                    return l(r, o._4, e, n);
                default:
                    return n
                }
            }), l(r, n, Yi, t), n)
        }),
        t(function(r, t) {
            return l(Xi, e(function(t, e, n) {
                var o = n;
                return "Just" === o.ctor ? E(o._0) : _(Di, e, r) ? E(t) : M
            }), M, t)
        }))
          , $i = function(r) {
            var t = oi(l(Xi, e(function(r, t, e) {
                var n = r;
                r: do {
                    switch (n.ctor) {
                    case "Nested":
                        if ("Expanded" === n._1.ctor) {
                            var o = _(Ui, n._2.focus, t);
                            return _(Vi, o, e) ? o : e
                        }
                        break r;
                    case "Choice":
                        if ("Expanded" === n._1.ctor) {
                            o = _(Ui, n._4.focus, t);
                            return _(Vi, o, e) ? o : e
                        }
                        break r;
                    default:
                        break r
                    }
                } while (0);return e
            }), Yi, r))._0;
            return _(Di, t, Yi) ? oi(_(Ui, r.focus, Yi)) : oi(t)
        }
          , Qi = t(function(r, t) {
            var n = e(function(t, e, o) {
                var c = function() {
                    var r = t;
                    return "Just" === r.ctor ? _(Ui, e, r._0) : Wi(e)
                }()
                  , u = _(r, o, c);
                switch (u.ctor) {
                case "Nested":
                    var i = u._2;
                    return l(pi, u._0, u._1, g.update(i, {
                        cells: _(dr, n(E(c)), i.cells)
                    }));
                case "Choice":
                    var a = u._4;
                    return f(di, u._0, u._1, u._2, u._3, g.update(a, {
                        cells: _(dr, n(E(c)), a.cells)
                    }));
                default:
                    return u
                }
            });
            return _(dr, n(M), t)
        })
          , ra = t(function(r, e) {
            return g.update(e, {
                cells: _(Qi, t(function(t, e) {
                    var n = t;
                    switch (n.ctor) {
                    case "Nested":
                        return l(pi, n._0, n._1, _(r, n._2, e));
                    case "Choice":
                        return f(di, n._0, n._1, n._2, n._3, _(r, n._4, e));
                    default:
                        return t
                    }
                }), _(r, e, Yi).cells)
            })
        })
          , ta = t(function(r, e) {
            var n = _(A, -1, Hi(r))
              , o = Gi(r);
            return "Just" === o.ctor ? _(ra, t(function(r, t) {
                return _(Di, t, o._0) ? g.update(r, {
                    focus: n
                }) : r
            }), e) : g.update(e, {
                focus: n
            })
        })
          , ea = e(function(r, e, n) {
            var o = Gi(e)
              , c = _(A, 0, Hi(e))
              , u = function(t) {
                var e = t;
                return g.cmp(c + r, 0) > -1 && g.cmp(c + r, U(e.cells)) < 0 ? c + r : c
            }
              , i = o;
            return "Just" === i.ctor ? _(ra, t(function(r, t) {
                return _(Di, t, i._0) ? g.update(r, {
                    focus: u(r)
                }) : r
            }), n) : g.update(n, {
                focus: u(n)
            })
        })
          , na = t(function(r, t) {
            return g.update(t, {
                cells: _(Qi, r, t.cells)
            })
        })
          , oa = e(function(r, e, n) {
            return _(na, t(function(t, n) {
                return _(Di, n, r) ? e(t) : t
            }), n)
        })
          , ca = t(function(r, e) {
            return _(na, t(function(t, e) {
                if (!(g.cmp(Ji(e), Ji(r)) > -1))
                    return t;
                var n = t;
                switch (n.ctor) {
                case "Nested":
                    return l(pi, n._0, ci, n._2);
                case "Choice":
                    return f(di, n._0, ci, n._2, n._3, n._4);
                default:
                    return t
                }
            }), e)
        })
          , ua = t(function(r, t) {
            return {
                focus: 0,
                shape: r,
                cells: t
            }
        })
          , ia = function(r) {
            return {
                focus: 0,
                shape: {
                    ctor: "_Tuple2",
                    _0: U(r),
                    _1: 1
                },
                cells: r
            }
        }
          , aa = t(function(r, e) {
            var n = e;
            return l(mr, t(function(e, n) {
                return l(mr, t(function(t, e) {
                    var n = {
                        ctor: "_Tuple2",
                        _0: e,
                        _1: t
                    };
                    return "_Tuple2" === n.ctor && "Nothing" === n._0.ctor && "Just" === n._1.ctor ? _(Di, r, n._1._0.nestPos) ? E(n._1._0) : M : e
                }), n, e)
            }), M, n._1)
        })
          , _a = t(function(r, t) {
            var e = r
              , n = t
              , o = _(F["++"], function(r) {
                var t = r;
                return _(F["++"], "(", _(F["++"], T(t._0), _(F["++"], ",", _(F["++"], T(t._1), ")"))))
            }(e), _(F["++"], " ", function(r) {
                var t = r;
                return _(F["++"], "<", _(F["++"], _(Vr, ",", _(Z, T, tr(t._0))), ">"))
            }(n.nestPos)))
              , c = n.cell;
            switch (c.ctor) {
            case "Ghost":
                return _(ro, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: Zn(_(F["++"], o, _(F["++"], " ghost: ", c._0))),
                    _1: {
                        ctor: "[]"
                    }
                });
            case "Knob":
                return _(ro, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: Zn(_(F["++"], o, _(F["++"], " knob: ", _(F["++"], c._0, _(F["++"], " ", _(F["++"], T(c._1.min), _(F["++"], "/", _(F["++"], T(c._1.step), _(F["++"], "/", _(F["++"], T(c._1.max), _(F["++"], " ", T(c._2)))))))))))),
                    _1: {
                        ctor: "[]"
                    }
                });
            case "Toggle":
                return _(ro, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: Zn(_(F["++"], o, _(F["++"], " toggle: ", _(F["++"], c._0, _(F["++"], " ", g.eq(c._1, ai) ? "on" : "off"))))),
                    _1: {
                        ctor: "[]"
                    }
                });
            case "Button":
                return _(ro, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: Zn(_(F["++"], o, _(F["++"], " button: ", c._0))),
                    _1: {
                        ctor: "[]"
                    }
                });
            case "Nested":
                return _(ro, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: Zn(_(F["++"], o, _(F["++"], " nested: ", _(F["++"], c._0, _(F["++"], " ", g.eq(c._1, ui) ? "expanded" : "collapsed"))))),
                    _1: {
                        ctor: "[]"
                    }
                });
            case "Choice":
                return _(ro, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: Zn(_(F["++"], o, _(F["++"], " choice: ", _(F["++"], c._0, _(F["++"], " ", T(c._2)))))),
                    _1: {
                        ctor: "[]"
                    }
                });
            default:
                return _(ro, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: Zn(_(F["++"], o, _(F["++"], " choiceitem: ", _(F["++"], c._0, _(F["++"], " ", g.eq(n.isSelected, E(li)) ? "selected" : "not-selected"))))),
                    _1: {
                        ctor: "[]"
                    }
                })
            }
        })
          , la = function(r) {
            var e = r
              , n = e.nestPos
              , o = e.isSelected
              , c = e.cell;
            switch (c.ctor) {
            case "Knob":
                return Mi(n);
            case "Toggle":
                var u = c._2;
                return g.eq(c._1, ai) ? _(bi, n, u(ii)) : _(yi, n, u(ai));
            case "Nested":
                return g.eq(c._1, ui) ? Ci(n) : Fi(n);
            case "Choice":
                return g.eq(c._1, ui) ? ki(n) : xi(n);
            case "Button":
                return wi(c._1({
                    ctor: "_Tuple0"
                }));
            case "ChoiceItem":
                var i = o;
                return "Just" === i.ctor && "NotSelected" === i._0.ctor ? _(A, Si(n), _(N, Ti(n), _(N, t(function(r, t) {
                    return t(r)
                })(c._0), e.onSelect))) : Ei;
            default:
                var a = o;
                return "Just" === a.ctor && "NotSelected" === a._0.ctor ? Si(n) : Ei
            }
        }
          , sa = e(function(r, t, e) {
            var n = $i(r)._0
              , o = _(aa, n, t)
              , c = _(A, Ei, _(N, la, o));
            switch (e) {
            case 37:
                return function(r) {
                    return {
                        ctor: "ShiftFocusLeftAt",
                        _0: r
                    }
                }(n);
            case 39:
                return function(r) {
                    return {
                        ctor: "ShiftFocusRightAt",
                        _0: r
                    }
                }(n);
            case 38:
                return _(A, Ei, _(N, function(r) {
                    var t = r.cell;
                    r: do {
                        switch (t.ctor) {
                        case "Nested":
                            if ("Collapsed" === t._1.ctor)
                                return Fi(n);
                            break r;
                        case "Choice":
                            if ("Collapsed" === t._1.ctor)
                                return xi(n);
                            break r;
                        default:
                            break r
                        }
                    } while (0);return Ei
                }, o));
            case 40:
                var u = function(r) {
                    return ni(_(A, {
                        ctor: "[]"
                    }, Y(r._0)))
                }(n);
                return _(Di, u, Yi) ? Ei : _(A, Ei, _(N, function(r) {
                    var t = r.cell;
                    r: do {
                        switch (t.ctor) {
                        case "Nested":
                            if ("Expanded" === t._1.ctor)
                                return Ci(u);
                            break r;
                        case "Choice":
                            if ("Expanded" === t._1.ctor)
                                return ki(u);
                            break r;
                        default:
                            break r
                        }
                    } while (0);return Ei
                }, _(aa, u, t)));
            case 33:
            case 13:
                return c;
            default:
                return Ei
            }
        })
          , fa = (o(function(r, t, e, n, o) {
            return {
                cell: r,
                nestPos: t,
                onSelect: e,
                isSelected: n,
                isFocused: o
            }
        }),
        t(function(r, t) {
            return {
                ctor: "GridPos",
                _0: r,
                _1: t
            }
        }))
          , da = _(fa, 0, 0)
          , pa = t(function(r, t) {
            return {
                ctor: "Grid",
                _0: r,
                _1: t
            }
        })
          , ha = (e(function(r, t, e) {
            var n = r
              , o = n._0
              , c = e
              , u = c._1;
            return _(A, c, _(N, pa(c._0), _(N, function(r) {
                return l(pr, o, r, u)
            }, _(N, function(r) {
                return l(pr, n._1, E(t), r)
            }, _(hr, o, u)))))
        }),
        {
            ctor: "Fancy"
        })
          , ma = e(function(r, t, e) {
            if ("DebugInfo" === ha.ctor)
                return _(_a, t, e);
            var n = e;
            return s(qi, n.nestPos, r, n.isSelected, n.cell)
        })
          , ga = e(function(r, e, n) {
            var o = _(A, {
                ctor: "[]"
            }, _(N, function(t) {
                return {
                    ctor: "::",
                    _0: l(ma, r, e, t),
                    _1: {
                        ctor: "[]"
                    }
                }
            }, n))
              , c = _(A, {
                ctor: "[]"
            }, _(N, function(r) {
                return {
                    ctor: "::",
                    _0: Dc(la(r)),
                    _1: {
                        ctor: "::",
                        _0: function(r) {
                            return _(qc, "mousedown", Jt(r))
                        }(function(r) {
                            var t = r;
                            return "Knob" === t.cell.ctor ? Mi(t.nestPos) : Ei
                        }(r)),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }, n))
              , u = t(function(r, t) {
                return t - r
            })
              , i = t(function(r, t) {
                var e = t;
                return _(F["++"], "focused--", T(_(u, r, Ji(e._0))))
            })
              , a = t(function(r, t) {
                var e = t;
                return _(F["++"], "level--", T(_(u, r, Ji(e._0))))
            })
              , s = function() {
                var t = n;
                return "Just" === t.ctor ? _(F["++"], function() {
                    var e = {
                        ctor: "_Tuple2",
                        _0: t._0.isSelected,
                        _1: t._0.isFocused
                    };
                    r: do {
                        if ("_Tuple2" === e.ctor) {
                            if ("Just" === e._0.ctor) {
                                if ("Selected" === e._0._0.ctor)
                                    return "Focused" === e._1.ctor ? _(F["++"], "cell selected focused ", _(i, e._1._0, r)) : "cell selected";
                                if ("Focused" === e._1.ctor)
                                    return _(F["++"], "cell focused ", _(i, e._1._0, r));
                                break r
                            }
                            if ("Focused" === e._1.ctor)
                                return _(F["++"], "cell focused ", _(i, e._1._0, r));
                            break r
                        }
                        break r
                    } while (0);return "cell"
                }(), _(F["++"], " ", _(a, Ji(t._0.nestPos), r))) : "cell hole"
            }()
              , f = _(F["++"], {
                ctor: "::",
                _0: Rc(s),
                _1: {
                    ctor: "[]"
                }
            }, c);
            return _(Qn, f, o)
        })
          , va = e(function(r, t, e) {
            var n = t;
            return _(Qn, {
                ctor: "::",
                _0: Rc("row"),
                _1: {
                    ctor: "[]"
                }
            }, br(_(gr, function(t) {
                return _(ga, r, _(fa, n._0, n._1 + t))
            }, e)))
        })
          , ba = t(function(r, t) {
            var e = da
              , n = e._0
              , o = e._1
              , c = br(_(gr, function(t) {
                return _(va, r, _(fa, n + t, o))
            }, t));
            return _(Qn, {
                ctor: "::",
                _0: Rc("cells"),
                _1: {
                    ctor: "[]"
                }
            }, c)
        })
          , ya = e(function(r, t, e) {
            var n = e
              , o = 72 * r + 5 * r * 2;
            return _(Qn, {
                ctor: "::",
                _0: Rc("grid"),
                _1: {
                    ctor: "::",
                    _0: Bc({
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: "width",
                            _1: _(F["++"], T(o), "px")
                        },
                        _1: {
                            ctor: "[]"
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }
            }, {
                ctor: "::",
                _0: _(ba, t, n._1),
                _1: {
                    ctor: "[]"
                }
            })
        })
          , Ta = {
            ctor: "NotFocused"
        }
          , wa = c(function(r, o, c, u, i, a) {
            var f = r
              , p = f._0
              , h = f._1
              , m = a
              , v = m._0
              , b = t(function(r, t) {
                var e = r
                  , n = t;
                return e._0 * n._0 + e._1
            })
              , y = t(function(r, t) {
                var e = r
                  , n = t;
                return g.cmp(e._0, n._1) < 0 && g.cmp(e._1, n._0) < 0
            })
              , T = i.cells
              , w = _(gr, t(function(r, e) {
                var n = _(ji, r, c);
                return {
                    cell: e,
                    nestPos: n,
                    onSelect: _(N, t(function(r, t) {
                        return t(r)
                    })(r), u),
                    isSelected: function() {
                        var t = o;
                        return "Just" === t.ctor ? E(g.eq(r, t._0) ? li : _i) : M
                    }(),
                    isFocused: g.eq(i.focus, r) ? function(r) {
                        return {
                            ctor: "Focused",
                            _0: r
                        }
                    }(Ji(n)) : Ta
                }
            }), yr(T))
              , S = i.shape
              , k = e(function(r, t, e) {
                if (g.cmp(r, p) > -1 && g.cmp(t, h) > -1) {
                    var n = {
                        ctor: "_Tuple2",
                        _0: r - p,
                        _1: t - h
                    };
                    if (_(y, n, S)) {
                        var o = _(hr, _(b, n, S), w);
                        return "Just" === o.ctor ? E(o._0) : e
                    }
                    return e
                }
                return e
            })
              , x = t(function(r, t) {
                return _(gr, k(r), t)
            })
              , C = _(A, 0, _(N, Ji, c))
              , F = v._0
              , L = n(function(r, t, e, n) {
                var o = e._1
                  , c = n._0;
                return g.cmp(t + c, F) < 0 ? _(fa, r + o, t) : _(fa, r + o, F - c)
            })
              , R = t(function(r, t) {
                var e = t
                  , n = e._1
                  , o = e._0;
                return {
                    ctor: "_Tuple2",
                    _0: o + 1,
                    _1: function() {
                        var t = r;
                        if ("Just" === t.ctor) {
                            var e = t._0.nestPos
                              , c = {
                                ctor: "_Tuple2",
                                _0: Ji(e),
                                _1: _(A, -1, Hi(e))
                            }
                              , u = c._0;
                            if (g.eq(u, C + 1)) {
                                var i = t._0.cell;
                                r: do {
                                    switch (i.ctor) {
                                    case "Nested":
                                        if ("Expanded" === i._1.ctor)
                                            return d(wa, s(L, p, o, S, i._2.shape), M, E(e), M, i._2, n);
                                        break r;
                                    case "Choice":
                                        if ("Expanded" === i._1.ctor)
                                            return d(wa, s(L, p, o, S, i._4.shape), E(i._2), E(e), E(i._3), i._4, n);
                                        break r;
                                    default:
                                        break r
                                    }
                                } while (0);return n
                            }
                            return n
                        }
                        return n
                    }()
                }
            })
              , P = t(function(r, t) {
                return ce(l(mr, R, {
                    ctor: "_Tuple2",
                    _0: 0,
                    _1: t
                }, r))
            });
            return function(r) {
                return l(mr, P, _(pa, v, r), r)
            }(_(gr, x, m._1))
        })
          , Sa = e(function(r, t, e) {
            return d(wa, r, M, M, M, t, e)
        })
          , ka = function(r) {
            return function(r) {
                var t = r;
                return _(pa, t._0, yr(tr(br(t._1))))
            }(l(Sa, _(fa, 0, 0), r, function(r) {
                var t = r;
                return _(pa, t, _(wr, t._1, _(wr, t._0, M)))
            }({
                ctor: "_Tuple2",
                _0: 10,
                _1: 6
            })))
        }
          , xa = function(r) {
            var t = function(r) {
                return U(r.cells)
            }(r)
              , e = $i(r)
              , n = ka(r)
              , o = _(qc, "keydown", _(Yt, _(sa, r, n), Oc));
            return _(Qn, {
                ctor: "::",
                _0: function(r) {
                    return _(Lc, "id", r)
                }("grid-gui"),
                _1: {
                    ctor: "::",
                    _0: Rc("gui noselect"),
                    _1: {
                        ctor: "::",
                        _0: function(r) {
                            return _(Cc, "tabIndex", T(r))
                        }(-1),
                        _1: {
                            ctor: "::",
                            _0: o,
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            }, {
                ctor: "::",
                _0: l(ya, t, e, n),
                _1: {
                    ctor: "[]"
                }
            })
        }
          , Ca = e(function(r, t, e) {
            var n = r
              , o = n.min
              , c = t;
            return "Alter" === c.ctor ? o + c._0 * (n.max - o) : e
        })
          , Fa = n(function(r, t, e, n) {
            var o = t.dragFrom;
            if ("Just" === o.ctor) {
                var c = o._0;
                if (g.eq(t.pos, c))
                    return si;
                var u = t.pos.y
                  , i = c.y
                  , a = (w(i),
                (w(i) + 140 - w(u)) / 280);
                return function(r) {
                    return {
                        ctor: "Alter",
                        _0: r
                    }
                }(g.cmp(a, 1) > 0 ? 1 : g.cmp(a, 0) < 0 ? 0 : a)
            }
            return si
        })
          , La = t(function(r, t) {
            var e = r
              , n = e._1
              , o = e._0
              , c = $i(n)._0
              , u = _(Zi, c, n);
            if ("Just" === u.ctor && "Knob" === u._0.ctor) {
                var i = u._0._1
                  , a = u._0._2
                  , f = s(Fa, o, t, i, a);
                return g.eq(o.down, !0) && g.eq(t.down, !1) ? l(vi, c, f, u._0._3(l(Ca, i, f, a))) : _(Ai, c, f)
            }
            return Ei
        })
          , Ra = t(function(r, t) {
            return {
                ctor: "_Tuple2",
                _0: r,
                _1: t
            }
        })
          , Aa = n(function(r, t, e, n) {
            r: for (; ; ) {
                var o = n
                  , c = o._1
                  , u = o._0
                  , i = e;
                switch (i.ctor) {
                case "TrackMouse":
                    var a = i._0;
                    r = r,
                    t = t,
                    e = _(La, o, a),
                    n = {
                        ctor: "_Tuple2",
                        _0: a,
                        _1: c
                    };
                    continue r;
                case "FocusOn":
                    return {
                        ctor: "_Tuple2",
                        _0: _(se["!"], t, {
                            ctor: "[]"
                        }),
                        _1: _(Ra, u, _(ta, i._0, c))
                    };
                case "Tune":
                    var d = i._0;
                    return {
                        ctor: "_Tuple2",
                        _0: _(se["!"], t, {
                            ctor: "[]"
                        }),
                        _1: _(Ra, u, l(oa, d, function(r) {
                            var t = r;
                            if ("Knob" === t.ctor) {
                                var e = t._1;
                                return s(gi, t._0, e, l(Ca, e, i._1, t._2), t._3)
                            }
                            return r
                        }, _(ta, d, c)))
                    };
                case "ToggleOn":
                    var p = i._0;
                    return {
                        ctor: "_Tuple2",
                        _0: _(se["!"], t, {
                            ctor: "[]"
                        }),
                        _1: _(Ra, u, l(oa, p, function(r) {
                            var t = r;
                            return "Toggle" === t.ctor ? l(mi, t._0, ai, t._2) : r
                        }, _(ta, p, c)))
                    };
                case "ToggleOff":
                    var h = i._0;
                    return {
                        ctor: "_Tuple2",
                        _0: _(se["!"], t, {
                            ctor: "[]"
                        }),
                        _1: _(Ra, u, l(oa, h, function(r) {
                            var t = r;
                            return "Toggle" === t.ctor ? l(mi, t._0, ii, t._2) : r
                        }, _(ta, h, c)))
                    };
                case "ExpandNested":
                    var m = i._0;
                    return {
                        ctor: "_Tuple2",
                        _0: _(se["!"], t, {
                            ctor: "[]"
                        }),
                        _1: _(Ra, u, l(oa, m, function(r) {
                            var t = r;
                            return "Nested" === t.ctor ? l(pi, t._0, ui, t._2) : r
                        }, _(ca, m, _(ta, m, c))))
                    };
                case "CollapseNested":
                    var g = i._0;
                    return {
                        ctor: "_Tuple2",
                        _0: _(se["!"], t, {
                            ctor: "[]"
                        }),
                        _1: _(Ra, u, l(oa, g, function(r) {
                            var t = r;
                            return "Nested" === t.ctor ? l(pi, t._0, ci, t._2) : r
                        }, _(ta, g, c)))
                    };
                case "ExpandChoice":
                    var v = i._0;
                    return {
                        ctor: "_Tuple2",
                        _0: _(se["!"], t, {
                            ctor: "[]"
                        }),
                        _1: _(Ra, u, l(oa, v, function(r) {
                            var t = r;
                            return "Choice" === t.ctor ? f(di, t._0, ui, t._2, t._3, t._4) : r
                        }, _(ta, v, _(ca, v, c))))
                    };
                case "CollapseChoice":
                    var b = i._0;
                    return {
                        ctor: "_Tuple2",
                        _0: _(se["!"], t, {
                            ctor: "[]"
                        }),
                        _1: _(Ra, u, l(oa, b, function(r) {
                            var t = r;
                            return "Choice" === t.ctor ? f(di, t._0, ci, t._2, t._3, t._4) : r
                        }, _(ta, b, c)))
                    };
                case "Select":
                    var y = i._0;
                    return {
                        ctor: "_Tuple2",
                        _0: _(se["!"], t, {
                            ctor: "[]"
                        }),
                        _1: function() {
                            var r = _(A, -1, Hi(y))
                              , t = _(A, Yi, Gi(y));
                            return _(Ra, u, l(oa, t, function(t) {
                                var e = t;
                                return "Choice" === e.ctor ? f(di, e._0, e._1, r, e._3, e._4) : t
                            }, _(ta, y, c)))
                        }()
                    };
                case "SendToUser":
                    return {
                        ctor: "_Tuple2",
                        _0: _(r, i._0, t),
                        _1: _(Ra, u, c)
                    };
                case "SelectAndSendToUser":
                    return s(Ma, r, t, {
                        ctor: "::",
                        _0: Si(i._0),
                        _1: {
                            ctor: "::",
                            _0: wi(i._1),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }, _(Ra, u, c));
                case "ToggleOnAndSendToUser":
                    return s(Ma, r, t, {
                        ctor: "::",
                        _0: Ri(i._0),
                        _1: {
                            ctor: "::",
                            _0: wi(i._1),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }, _(Ra, u, c));
                case "ToggleOffAndSendToUser":
                    return s(Ma, r, t, {
                        ctor: "::",
                        _0: Li(i._0),
                        _1: {
                            ctor: "::",
                            _0: wi(i._1),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }, _(Ra, u, c));
                case "ShiftFocusLeftAt":
                    return {
                        ctor: "_Tuple2",
                        _0: _(se["!"], t, {
                            ctor: "[]"
                        }),
                        _1: _(Ra, u, l(ea, -1, i._0, c))
                    };
                case "ShiftFocusRightAt":
                    return {
                        ctor: "_Tuple2",
                        _0: _(se["!"], t, {
                            ctor: "[]"
                        }),
                        _1: _(Ra, u, l(ea, 1, i._0, c))
                    };
                case "TuneAndApply":
                    return s(Ma, r, t, {
                        ctor: "::",
                        _0: _(Ai, i._0, i._1),
                        _1: {
                            ctor: "::",
                            _0: wi(i._2),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }, _(Ra, u, c));
                default:
                    return {
                        ctor: "_Tuple2",
                        _0: _(se["!"], t, {
                            ctor: "[]"
                        }),
                        _1: _(Ra, u, c)
                    }
                }
            }
        })
          , Ma = n(function(r, e, n, o) {
            return l(H, t(function(t, e) {
                var n = e
                  , o = s(Aa, r, n._0._0, t, n._1)
                  , c = o._0._0
                  , u = o._0._1
                  , i = o._1;
                return {
                    ctor: "_Tuple2",
                    _0: {
                        ctor: "_Tuple2",
                        _0: c,
                        _1: _e({
                            ctor: "::",
                            _0: n._0._1,
                            _1: {
                                ctor: "::",
                                _0: u,
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        })
                    },
                    _1: i
                }
            }), {
                ctor: "_Tuple2",
                _0: {
                    ctor: "_Tuple2",
                    _0: e,
                    _1: le
                },
                _1: o
            }, n)
        })
          , Pa = ue
          , Ea = t(function(r, t) {
            return Pi(_(ri, t, Pa(r)))
        })
          , Na = t(function(r, t) {
            return Pi(_(ti, t, Pa(r)))
        })
          , Ba = t(function(r, t) {
            return Pi(_(ei, t, Pa(r)))
        })
          , Oa = function(r) {
            return xa(ce(r))
        }
          , za = function(r) {
            switch (r) {
            case "0":
                return 0;
            case "1":
                return 1;
            case "sC":
                return 2;
            case "1-sC":
                return 3;
            case "dC":
                return 4;
            case "1-dC":
                return 5;
            case "sA":
                return 6;
            case "1-sA":
                return 7;
            case "dA":
                return 8;
            case "1-dA":
                return 9;
            case "AS":
                return 10;
            case "CC":
                return 11;
            case "1-CC":
                return 12;
            case "CA":
                return 13;
            case "1-CA":
                return 14;
            default:
                return 0
            }
        }
          , Ia = function(r) {
            switch (r) {
            case "+":
                return 0;
            case "-":
                return 1;
            case "R-":
                return 2;
            default:
                return 0
            }
        }
          , qa = function(r) {
            switch (r) {
            case 0:
                return "zero";
            case 1:
                return "one";
            case 2:
                return "srcColor";
            case 3:
                return "oneMinusSrcColor";
            case 4:
                return "dstColor";
            case 5:
                return "oneMinusDstColor";
            case 6:
                return "srcAlpha";
            case 7:
                return "oneMinusSrcAlpha";
            case 8:
                return "dstAlpha";
            case 9:
                return "oneMinusDstAlpha";
            case 10:
                return "srcAlphaSaturate";
            case 11:
                return "constantColor";
            case 12:
                return "oneMinusConstantColor";
            case 13:
                return "constantAlpha";
            case 14:
                return "oneMinusConstantAlpha";
            default:
                return "[?]"
            }
        }
          , Va = t(function(r, t) {
            var e = r
              , n = e.space
              , o = e.delim
              , c = t;
            return _(F["++"], n, _(F["++"], "Function: ", _(F["++"], function(r) {
                switch (r) {
                case 0:
                    return "Custom Add";
                case 1:
                    return "Custom Subtract";
                case 2:
                    return "Custom Reverse Subtract";
                default:
                    return "[?]"
                }
            }(c._0), _(F["++"], o, _(F["++"], n, _(F["++"], "Factor 1: ", _(F["++"], qa(c._1), _(F["++"], o, _(F["++"], n, _(F["++"], "Factor 2: ", _(F["++"], qa(c._2), o)))))))))))
        })
          , Da = t(function(r, t) {
            var e = t
              , n = {
                ctor: "::",
                _0: T(e.r),
                _1: {
                    ctor: "::",
                    _0: T(e.g),
                    _1: {
                        ctor: "::",
                        _0: T(e.b),
                        _1: {
                            ctor: "::",
                            _0: T(e.a),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            };
            return "::" === n.ctor && "::" === n._1.ctor && "::" === n._1._1.ctor && "::" === n._1._1._1.ctor && "[]" === n._1._1._1._1.ctor ? _(F["++"], "rgba(", _(F["++"], n._0, _(F["++"], ",", _(F["++"], n._1._0, _(F["++"], ",", _(F["++"], n._1._1._0, _(F["++"], ",", _(F["++"], n._1._1._1._0, ")")))))))) : "[?]"
        })
          , Ga = t(function(r, t) {
            var e = r
              , n = r.delim
              , o = t;
            return _(F["++"], "Color: ", _(F["++"], _(A, "[?]", _(N, Da(e), o.color)), _(F["++"], n, _(F["++"], "Color EQ: ", _(F["++"], _(Va, e, o.colorEq), _(F["++"], n, _(F["++"], "Alpha EQ: ", _(F["++"], _(Va, e, o.alphaEq), n))))))))
        })
          , Ha = (t(function(r, t) {
            return _(Vr, ":", _(Z, Ga(r), t))
        }),
        function(r) {
            switch (r) {
            case 0:
                return g.chr("0");
            case 1:
                return g.chr("1");
            case 2:
                return g.chr("2");
            case 3:
                return g.chr("3");
            case 4:
                return g.chr("4");
            case 5:
                return g.chr("5");
            case 6:
                return g.chr("6");
            case 7:
                return g.chr("7");
            case 8:
                return g.chr("8");
            case 9:
                return g.chr("9");
            case 10:
                return g.chr("a");
            case 11:
                return g.chr("b");
            case 12:
                return g.chr("c");
            case 13:
                return g.chr("d");
            case 14:
                return g.chr("e");
            case 15:
                return g.chr("f");
            default:
                return g.chr("0")
            }
        }
        )
          , Ja = function(r) {
            return Pr({
                ctor: "::",
                _0: Ha(r / 16 | 0),
                _1: {
                    ctor: "::",
                    _0: Ha(_(L, r, 16)),
                    _1: {
                        ctor: "[]"
                    }
                }
            })
        }
          , Ua = function(r) {
            var t = r;
            return _(Hr, Ha(t._0), _(Hr, Ha(t._1), _(Hr, Ha(t._2), "")))
        }
          , Wa = function(r) {
            var t = r;
            return _(F["++"], function(r) {
                var t = r;
                return "Just" === t.ctor ? _(F["++"], Ja(k(255 * t._0.r)), _(F["++"], Ja(k(255 * t._0.g)), _(F["++"], Ja(k(255 * t._0.b)), Ja(k(255 * t._0.a))))) : "00000000"
            }(t.color), _(F["++"], Ua(t.colorEq), Ua(t.alphaEq)))
        }
          , ja = function(r) {
            switch (r.valueOf()) {
            case "0":
                return E(0);
            case "1":
                return E(1);
            case "2":
                return E(2);
            case "3":
                return E(3);
            case "4":
                return E(4);
            case "5":
                return E(5);
            case "6":
                return E(6);
            case "7":
                return E(7);
            case "8":
                return E(8);
            case "9":
                return E(9);
            case "A":
                return E(10);
            case "B":
                return E(11);
            case "C":
                return E(12);
            case "D":
                return E(13);
            case "E":
                return E(14);
            case "F":
                return E(15);
            case "a":
                return E(10);
            case "b":
                return E(11);
            case "c":
                return E(12);
            case "d":
                return E(13);
            case "e":
                return E(14);
            case "f":
                return E(15);
            default:
                return M
            }
        }
          , Ya = function(r) {
            var t = r
              , e = "_Tuple2"
              , n = ja(t._0)
              , o = ja(t._1);
            return "_Tuple2" === e && "Just" === n.ctor && "Just" === o.ctor ? E(16 * n._0 + o._0) : M
        }
          , Ka = function(r) {
            var t = Er(r);
            if ("::" === t.ctor && "::" === t._1.ctor && "::" === t._1._1.ctor && "[]" === t._1._1._1.ctor) {
                var e = _(A, 0, ja(t._1._1._0))
                  , n = _(A, 1, ja(t._1._0))
                  , o = _(A, 0, ja(t._0));
                return E({
                    ctor: "_Tuple3",
                    _0: o,
                    _1: n,
                    _2: e
                })
            }
            return M
        }
          , Xa = function(r) {
            if (g.eq(Dr(r), 14)) {
                var t = l(qr, 11, 14, r)
                  , e = l(qr, 8, 11, r)
                  , n = {
                    ctor: "_Tuple3",
                    _0: function(r) {
                        var t = Er(r);
                        if ("::" === t.ctor && "::" === t._1.ctor && "::" === t._1._1.ctor && "::" === t._1._1._1.ctor && "::" === t._1._1._1._1.ctor && "::" === t._1._1._1._1._1.ctor && "::" === t._1._1._1._1._1._1.ctor && "::" === t._1._1._1._1._1._1._1.ctor && "[]" === t._1._1._1._1._1._1._1._1.ctor) {
                            var e = {
                                ctor: "_Tuple4",
                                _0: Ya({
                                    ctor: "_Tuple2",
                                    _0: t._0,
                                    _1: t._1._0
                                }),
                                _1: Ya({
                                    ctor: "_Tuple2",
                                    _0: t._1._1._0,
                                    _1: t._1._1._1._0
                                }),
                                _2: Ya({
                                    ctor: "_Tuple2",
                                    _0: t._1._1._1._1._0,
                                    _1: t._1._1._1._1._1._0
                                }),
                                _3: Ya({
                                    ctor: "_Tuple2",
                                    _0: t._1._1._1._1._1._1._0,
                                    _1: t._1._1._1._1._1._1._1._0
                                })
                            };
                            return "_Tuple4" === e.ctor && "Just" === e._0.ctor && "Just" === e._1.ctor && "Just" === e._2.ctor && "Just" === e._3.ctor ? E({
                                r: w(e._0._0) / 255,
                                g: w(e._1._0) / 255,
                                b: w(e._2._0) / 255,
                                a: w(e._3._0) / 255
                            }) : M
                        }
                        return M
                    }(l(qr, 0, 8, r)),
                    _1: Ka(e),
                    _2: Ka(t)
                };
                return "_Tuple3" === n.ctor && "Just" === n._0.ctor && "Just" === n._1.ctor && "Just" === n._2.ctor ? E({
                    color: E(n._0._0),
                    colorEq: n._1._0,
                    alphaEq: n._2._0
                }) : M
            }
            return M
        }
          , Za = {
            ctor: "::",
            _0: bo,
            _1: {
                ctor: "::",
                _0: yo,
                _1: {
                    ctor: "::",
                    _0: To,
                    _1: {
                        ctor: "::",
                        _0: wo,
                        _1: {
                            ctor: "::",
                            _0: So,
                            _1: {
                                ctor: "::",
                                _0: ko,
                                _1: {
                                    ctor: "::",
                                    _0: xo,
                                    _1: {
                                        ctor: "::",
                                        _0: Co,
                                        _1: {
                                            ctor: "::",
                                            _0: Fo,
                                            _1: {
                                                ctor: "::",
                                                _0: Lo,
                                                _1: {
                                                    ctor: "::",
                                                    _0: Ro,
                                                    _1: {
                                                        ctor: "::",
                                                        _0: Ao,
                                                        _1: {
                                                            ctor: "::",
                                                            _0: Mo,
                                                            _1: {
                                                                ctor: "::",
                                                                _0: Po,
                                                                _1: {
                                                                    ctor: "::",
                                                                    _0: Eo,
                                                                    _1: {
                                                                        ctor: "[]"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
          , $a = yr(Za)
          , Qa = {
            ctor: "::",
            _0: Bo,
            _1: {
                ctor: "::",
                _0: Oo,
                _1: {
                    ctor: "::",
                    _0: zo,
                    _1: {
                        ctor: "[]"
                    }
                }
            }
        }
          , r_ = yr(Qa)
          , t_ = function(r) {
            var t = r
              , e = _(A, bo, _(hr, t._2, $a))
              , n = _(A, yo, _(hr, t._1, $a));
            return _(_(A, Bo, _(hr, t._0, r_)), n, e)
        }
          , e_ = function(r) {
            var t = r
              , e = _(A, {
                r: 0,
                g: 0,
                b: 0,
                a: 0
            }, t.color);
            return go({
                r: e.r,
                g: e.r,
                b: e.b,
                a: e.a,
                color: t_(t.colorEq),
                alpha: t_(t.alphaEq)
            })
        }
          , n_ = t(function(r, t) {
            var e = r
              , n = t;
            return {
                color: M,
                colorEq: {
                    ctor: "_Tuple3",
                    _0: _(A, 0, _(wn, e._0, Qa)),
                    _1: _(A, 1, _(wn, e._1, Za)),
                    _2: _(A, 0, _(wn, e._2, Za))
                },
                alphaEq: {
                    ctor: "_Tuple3",
                    _0: _(A, 0, _(wn, n._0, Qa)),
                    _1: _(A, 1, _(wn, n._1, Za)),
                    _2: _(A, 0, _(wn, n._2, Za))
                }
            }
        })
          , o_ = {
            color: M,
            colorEq: {
                ctor: "_Tuple3",
                _0: 0,
                _1: 1,
                _2: 0
            },
            alphaEq: {
                ctor: "_Tuple3",
                _0: 0,
                _1: 6,
                _2: 7
            }
        }
          , c_ = (n(function(r, t, e, n) {
            return {
                r: r,
                g: t,
                b: e,
                a: n
            }
        }),
        e(function(r, t, e) {
            return {
                color: r,
                colorEq: t,
                alphaEq: e
            }
        }),
        t(function(r, t) {
            return {
                delim: r,
                space: t
            }
        }),
        function(r) {
            switch (r.ctor) {
            case "Normal":
                return "normal";
            case "Difference":
                return "difference";
            case "Exclusion":
                return "exclusion";
            case "Overlay":
                return "overlay";
            case "SoftLight":
                return "soft-light";
            case "Hue":
                return "hue";
            case "Multiply":
                return "multiply";
            case "Screen":
                return "screen";
            case "Darken":
                return "darken";
            case "Lighten":
                return "lighten";
            case "ColorDodge":
                return "color-dodge";
            case "ColorBurn":
                return "color-burn";
            case "HardLight":
                return "hard-light";
            case "Saturation":
                return "saturation";
            case "Color":
                return "color";
            case "Luminosity":
                return "luminosity";
            default:
                return "unset"
            }
        }
        )
          , u_ = {
            ctor: "Unset"
        }
          , i_ = {
            ctor: "Luminosity"
        }
          , a_ = {
            ctor: "Color"
        }
          , __ = {
            ctor: "Saturation"
        }
          , l_ = {
            ctor: "HardLight"
        }
          , s_ = {
            ctor: "ColorBurn"
        }
          , f_ = {
            ctor: "ColorDodge"
        }
          , d_ = {
            ctor: "Lighten"
        }
          , p_ = {
            ctor: "Darken"
        }
          , h_ = {
            ctor: "Screen"
        }
          , m_ = {
            ctor: "Multiply"
        }
          , g_ = {
            ctor: "Hue"
        }
          , v_ = {
            ctor: "SoftLight"
        }
          , b_ = {
            ctor: "Overlay"
        }
          , y_ = {
            ctor: "Exclusion"
        }
          , T_ = {
            ctor: "Difference"
        }
          , w_ = {
            ctor: "Normal"
        }
          , S_ = function(r) {
            switch (r) {
            case "normal":
                return w_;
            case "difference":
                return T_;
            case "exclusion":
                return y_;
            case "overlay":
                return b_;
            case "soft-light":
                return v_;
            case "hue":
                return g_;
            case "multiply":
                return m_;
            case "screen":
                return h_;
            case "darken":
                return p_;
            case "lighten":
                return d_;
            case "color-dodge":
                return f_;
            case "color-burn":
                return s_;
            case "hard-light":
                return l_;
            case "saturation":
                return __;
            case "color":
                return a_;
            case "luminosity":
                return i_;
            case "unset":
            default:
                return u_
            }
        }
          , k_ = w_
          , x_ = function(r) {
            switch (r.ctor) {
            case "IntelliJ":
                return {
                    ctor: "_Tuple2",
                    _0: 616,
                    _1: 90
                };
            case "PhpStorm":
                return {
                    ctor: "_Tuple2",
                    _0: 518,
                    _1: 108
                };
            case "PyCharm":
                return {
                    ctor: "_Tuple2",
                    _0: 479,
                    _1: 108
                };
            case "RubyMine":
                return {
                    ctor: "_Tuple2",
                    _0: 502,
                    _1: 108
                };
            case "WebStorm":
                return {
                    ctor: "_Tuple2",
                    _0: 567,
                    _1: 90
                };
            case "CLion":
                return {
                    ctor: "_Tuple2",
                    _0: 299,
                    _1: 90
                };
            case "DataGrip":
                return {
                    ctor: "_Tuple2",
                    _0: 468,
                    _1: 108
                };
            case "AppCode":
                return {
                    ctor: "_Tuple2",
                    _0: 518,
                    _1: 108
                };
            case "GoLand":
                return {
                    ctor: "_Tuple2",
                    _0: 419,
                    _1: 90
                };
            case "ReSharper":
                return {
                    ctor: "_Tuple2",
                    _0: 546,
                    _1: 108
                };
            case "ReSharperCpp":
                return {
                    ctor: "_Tuple2",
                    _0: 763,
                    _1: 108
                };
            case "DotCover":
                return {
                    ctor: "_Tuple2",
                    _0: 490,
                    _1: 90
                };
            case "DotMemory":
                return {
                    ctor: "_Tuple2",
                    _0: 620,
                    _1: 108
                };
            case "DotPeek":
                return {
                    ctor: "_Tuple2",
                    _0: 444,
                    _1: 90
                };
            case "DotTrace":
                return {
                    ctor: "_Tuple2",
                    _0: 461,
                    _1: 90
                };
            case "Rider":
                return {
                    ctor: "_Tuple2",
                    _0: 273,
                    _1: 90
                };
            case "TeamCity":
                return {
                    ctor: "_Tuple2",
                    _0: 495,
                    _1: 108
                };
            case "YouTrack":
                return {
                    ctor: "_Tuple2",
                    _0: 485,
                    _1: 90
                };
            case "UpSource":
                return {
                    ctor: "_Tuple2",
                    _0: 490,
                    _1: 104
                };
            case "Hub":
                return {
                    ctor: "_Tuple2",
                    _0: 211,
                    _1: 90
                };
            case "Kotlin":
                return {
                    ctor: "_Tuple2",
                    _0: 323,
                    _1: 99
                };
            case "MPS":
                return {
                    ctor: "_Tuple2",
                    _0: 200,
                    _1: 77
                };
            default:
                return {
                    ctor: "_Tuple2",
                    _0: 90,
                    _1: 90
                }
            }
        }
          , C_ = function(r) {
            switch (r.ctor) {
            case "JetBrains":
                return "jetbrains";
            case "IntelliJ":
                return "intellij-idea";
            case "PhpStorm":
                return "phpstorm";
            case "PyCharm":
                return "pycharm";
            case "RubyMine":
                return "rubymine";
            case "WebStorm":
                return "webstorm";
            case "CLion":
                return "clion";
            case "DataGrip":
                return "datagrip";
            case "AppCode":
                return "appcode";
            case "GoLand":
                return "goland";
            case "ReSharper":
                return "resharper";
            case "ReSharperCpp":
                return "resharper-cpp";
            case "DotCover":
                return "dotcover";
            case "DotMemory":
                return "dotmemory";
            case "DotPeek":
                return "dotpeek";
            case "DotTrace":
                return "dottrace";
            case "Rider":
                return "rider";
            case "TeamCity":
                return "teamcity";
            case "YouTrack":
                return "youtrack";
            case "UpSource":
                return "upsource";
            case "Hub":
                return "hub";
            case "Kotlin":
                return "kotlin";
            case "MPS":
                return "mps";
            default:
                return "unknown"
            }
        }
          , F_ = function(r) {
            var e = _(dr, t(function(r, t) {
                return {
                    ctor: "_Tuple2",
                    _0: r,
                    _1: t
                }
            }), {
                ctor: "::",
                _0: "jetbrains",
                _1: {
                    ctor: "::",
                    _0: "intellij-idea",
                    _1: {
                        ctor: "::",
                        _0: "phpstorm",
                        _1: {
                            ctor: "::",
                            _0: "pycharm",
                            _1: {
                                ctor: "::",
                                _0: "rubymine",
                                _1: {
                                    ctor: "::",
                                    _0: "webstorm",
                                    _1: {
                                        ctor: "::",
                                        _0: "clion",
                                        _1: {
                                            ctor: "::",
                                            _0: "datagrip",
                                            _1: {
                                                ctor: "::",
                                                _0: "appcode",
                                                _1: {
                                                    ctor: "::",
                                                    _0: "goland",
                                                    _1: {
                                                        ctor: "::",
                                                        _0: "resharper",
                                                        _1: {
                                                            ctor: "::",
                                                            _0: "resharper-cpp",
                                                            _1: {
                                                                ctor: "::",
                                                                _0: "dotcover",
                                                                _1: {
                                                                    ctor: "::",
                                                                    _0: "dotmemory",
                                                                    _1: {
                                                                        ctor: "::",
                                                                        _0: "dotpeek",
                                                                        _1: {
                                                                            ctor: "::",
                                                                            _0: "dottrace",
                                                                            _1: {
                                                                                ctor: "::",
                                                                                _0: "rider",
                                                                                _1: {
                                                                                    ctor: "::",
                                                                                    _0: "teamcity",
                                                                                    _1: {
                                                                                        ctor: "::",
                                                                                        _0: "youtrack",
                                                                                        _1: {
                                                                                            ctor: "::",
                                                                                            _0: "upsource",
                                                                                            _1: {
                                                                                                ctor: "::",
                                                                                                _0: "hub",
                                                                                                _1: {
                                                                                                    ctor: "::",
                                                                                                    _0: "kotlin",
                                                                                                    _1: {
                                                                                                        ctor: "::",
                                                                                                        _0: "mps",
                                                                                                        _1: {
                                                                                                            ctor: "[]"
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
            return _(A, -1, K(_(rr, function(t) {
                var e = t;
                return g.eq(C_(r), e._1) ? E(e._0) : M
            }, e)))
        }
          , L_ = function(r) {
            switch (r.ctor) {
            case "JetBrains":
                return {
                    ctor: "::",
                    _0: "#ad3259",
                    _1: {
                        ctor: "::",
                        _0: "#aa48ff",
                        _1: {
                            ctor: "::",
                            _0: "#ffdb00",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "IntelliJ":
                return {
                    ctor: "::",
                    _0: "#0b67cc",
                    _1: {
                        ctor: "::",
                        _0: "#fc31fe",
                        _1: {
                            ctor: "::",
                            _0: "#ffd08d",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "PhpStorm":
                return {
                    ctor: "::",
                    _0: "#b345f1",
                    _1: {
                        ctor: "::",
                        _0: "#765af8",
                        _1: {
                            ctor: "::",
                            _0: "#ff318c",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "PyCharm":
                return {
                    ctor: "::",
                    _0: "#09f58f",
                    _1: {
                        ctor: "::",
                        _0: "#ed8b00",
                        _1: {
                            ctor: "::",
                            _0: "#ffe400",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "RubyMine":
                return {
                    ctor: "::",
                    _0: "#e52763",
                    _1: {
                        ctor: "::",
                        _0: "#8f41cd",
                        _1: {
                            ctor: "::",
                            _0: "#ea7211",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "WebStorm":
                return {
                    ctor: "::",
                    _0: "#00cdd7",
                    _1: {
                        ctor: "::",
                        _0: "#2086d7",
                        _1: {
                            ctor: "::",
                            _0: "#fff045",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "CLion":
                return {
                    ctor: "::",
                    _0: "#22d88f",
                    _1: {
                        ctor: "::",
                        _0: "#029de0",
                        _1: {
                            ctor: "::",
                            _0: "#ed358c",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "DataGrip":
                return {
                    ctor: "::",
                    _0: "#22d88f",
                    _1: {
                        ctor: "::",
                        _0: "#9775f8",
                        _1: {
                            ctor: "::",
                            _0: "#ff59e6",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "AppCode":
                return {
                    ctor: "::",
                    _0: "#247ce6",
                    _1: {
                        ctor: "::",
                        _0: "#00daf0",
                        _1: {
                            ctor: "::",
                            _0: "#1ddf93",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "GoLand":
                return {
                    ctor: "::",
                    _0: "#0670c7",
                    _1: {
                        ctor: "::",
                        _0: "#ea4fff",
                        _1: {
                            ctor: "::",
                            _0: "#3bea62",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "ReSharper":
                return {
                    ctor: "::",
                    _0: "#c21456",
                    _1: {
                        ctor: "::",
                        _0: "#e14ce3",
                        _1: {
                            ctor: "::",
                            _0: "#fdbc2c",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "ReSharperCpp":
                return {
                    ctor: "::",
                    _0: "#fdbc2c",
                    _1: {
                        ctor: "::",
                        _0: "#e14ce3",
                        _1: {
                            ctor: "::",
                            _0: "#c21456",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "DotCover":
                return {
                    ctor: "::",
                    _0: "#ff7500",
                    _1: {
                        ctor: "::",
                        _0: "#7866ff",
                        _1: {
                            ctor: "::",
                            _0: "#e343e6",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "DotMemory":
                return {
                    ctor: "::",
                    _0: "#ffbd00",
                    _1: {
                        ctor: "::",
                        _0: "#7866ff",
                        _1: {
                            ctor: "::",
                            _0: "#e343e6",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "DotPeek":
                return {
                    ctor: "::",
                    _0: "#00caff",
                    _1: {
                        ctor: "::",
                        _0: "#7866ff",
                        _1: {
                            ctor: "::",
                            _0: "#e343e6",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "DotTrace":
                return {
                    ctor: "::",
                    _0: "#fc1681",
                    _1: {
                        ctor: "::",
                        _0: "#786bfb",
                        _1: {
                            ctor: "::",
                            _0: "#e14ce3",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "Rider":
                return {
                    ctor: "::",
                    _0: "#c90f5e",
                    _1: {
                        ctor: "::",
                        _0: "#077cfb",
                        _1: {
                            ctor: "::",
                            _0: "#fdb60d",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "TeamCity":
                return {
                    ctor: "::",
                    _0: "#0cb0f2",
                    _1: {
                        ctor: "::",
                        _0: "#905cfb",
                        _1: {
                            ctor: "::",
                            _0: "#3bea62",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "YouTrack":
                return {
                    ctor: "::",
                    _0: "#0cb0f2",
                    _1: {
                        ctor: "::",
                        _0: "#905cfb",
                        _1: {
                            ctor: "::",
                            _0: "#ff318c",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "UpSource":
                return {
                    ctor: "::",
                    _0: "#22b1ef",
                    _1: {
                        ctor: "::",
                        _0: "#9062f7",
                        _1: {
                            ctor: "::",
                            _0: "#fd8224",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "Hub":
                return {
                    ctor: "::",
                    _0: "#00b8f1",
                    _1: {
                        ctor: "::",
                        _0: "#9758fb",
                        _1: {
                            ctor: "::",
                            _0: "#ffee45",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "Kotlin":
                return {
                    ctor: "::",
                    _0: "#22b1ef",
                    _1: {
                        ctor: "::",
                        _0: "#9062f7",
                        _1: {
                            ctor: "::",
                            _0: "#fd8224",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            case "MPS":
                return {
                    ctor: "::",
                    _0: "#0b8fff",
                    _1: {
                        ctor: "::",
                        _0: "#21d789",
                        _1: {
                            ctor: "::",
                            _0: "#ffdc52",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                };
            default:
                return {
                    ctor: "::",
                    _0: "#9151e1",
                    _1: {
                        ctor: "::",
                        _0: "#ec4476",
                        _1: {
                            ctor: "::",
                            _0: "#fde74a",
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            }
        }
          , R_ = {
            ctor: "Unknown"
        }
          , A_ = {
            ctor: "MPS"
        }
          , M_ = {
            ctor: "Kotlin"
        }
          , P_ = {
            ctor: "Hub"
        }
          , E_ = {
            ctor: "UpSource"
        }
          , N_ = {
            ctor: "YouTrack"
        }
          , B_ = {
            ctor: "TeamCity"
        }
          , O_ = {
            ctor: "Rider"
        }
          , z_ = {
            ctor: "DotTrace"
        }
          , I_ = {
            ctor: "DotPeek"
        }
          , q_ = {
            ctor: "DotMemory"
        }
          , V_ = {
            ctor: "DotCover"
        }
          , D_ = {
            ctor: "ReSharperCpp"
        }
          , G_ = {
            ctor: "ReSharper"
        }
          , H_ = {
            ctor: "GoLand"
        }
          , J_ = {
            ctor: "AppCode"
        }
          , U_ = {
            ctor: "DataGrip"
        }
          , W_ = {
            ctor: "CLion"
        }
          , j_ = {
            ctor: "WebStorm"
        }
          , Y_ = {
            ctor: "RubyMine"
        }
          , K_ = {
            ctor: "PyCharm"
        }
          , X_ = {
            ctor: "PhpStorm"
        }
          , Z_ = {
            ctor: "IntelliJ"
        }
          , $_ = {
            ctor: "JetBrains"
        }
          , Q_ = function(r) {
            switch (r) {
            case "jetbrains":
                return $_;
            case "intellij-idea":
                return Z_;
            case "phpstorm":
                return X_;
            case "pycharm":
                return K_;
            case "rubymine":
                return Y_;
            case "webstorm":
                return j_;
            case "clion":
                return W_;
            case "datagrip":
                return U_;
            case "appcode":
                return J_;
            case "goland":
                return H_;
            case "resharper":
                return G_;
            case "resharper-cpp":
                return D_;
            case "dotcover":
                return V_;
            case "dotmemory":
                return q_;
            case "dotpeek":
                return I_;
            case "dottrace":
                return z_;
            case "rider":
                return O_;
            case "teamcity":
                return B_;
            case "youtrack":
                return N_;
            case "upsource":
                return E_;
            case "hub":
                return P_;
            case "kotlin":
                return M_;
            case "mps":
                return A_;
            default:
                return R_
            }
        }
          , rl = {
            src: "\n\n        // Precision\n        precision mediump float;\n        precision mediump int;\n\n        // Varyings\n        varying vec4 vColor;\n        varying vec4 vColor1;\n        varying vec4 vColor2;\n        varying vec3 vPosition;\n        //varying vec3 vMirror;\n\n        uniform vec3 uResolution;\n        uniform float uNow;\n        uniform vec2 uClip;\n        uniform vec2 uScale;\n        uniform float uVignette;\n        uniform float uIris;\n        uniform float uOpacity;\n        uniform int uLayerIndex;\n\n\n       // vec4 bgColor = vec4(0.0, 0.0, 0.0, 1.0);\n\n       bool midLayer = false;\n\n\n        float noise(vec2 seed, float time) {\n            float x = (seed.x / 3.14159 + 4.0) * (seed.y / 13.0 + 4.0) * ((fract(time) + 1.0) * 10.0);\n            return mod((mod(x, 13.0) + 1.0) * (mod(x, 123.0) + 1.0), 0.01) - 0.005;\n        }\n\n        float brightness(vec3 color) {\n                return (0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b);\n        }\n\n        vec3 rgb2hsv(vec3 c){\n        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n        float d = q.x - min(q.w, q.y);\n        float e = 1.0e-10;\n        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n        }\n\n        vec3 hsv2rgb(vec3 c)\n        {\n        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n        }\n\n        vec4 adjustColor(vec4 origColor, float deltaHue, float deltaSaturation, float deltaBrightness) {\n\n        vec3 changedColor  = rgb2hsv(origColor.rgb);\n        changedColor[0] = mod(changedColor[0] + deltaHue, 1.0); // hue shift\n        changedColor[1] = clamp(changedColor[1] + deltaSaturation, 0.0, 1.0); // saturation shift\n        changedColor[2] = clamp(changedColor[2] + deltaBrightness, 0.0, 1.0); // brightness shift\n\n        return vec4(vec3(hsv2rgb(changedColor)), 1.0);\n        }\n\n\n\n        // Main\n        void main() {\n\n        if ( uLayerIndex == 1 ) {\n              midLayer = true;\n           }\n\n\n            vec2 actPos = gl_FragCoord.xy / uResolution.xy;\n\n            //if (actPos.x < 0.5) discard;\n            // if ((vMirror.x >= 0.0) && (vMirror.y >= 0.0)) {\n\n            // }\n\n            // here uClip.y is not Y coord, but upper limit for X\n            if ((uClip.x >= 0.0) || (uClip.y >= 0.0)) {\n                if ((actPos.x <= uClip.x) || (actPos.x >= uClip.y)) {\n                    discard;\n                }\n            }\n             gl_FragColor = vColor;\n\n\n            // fog\n            vec3 shadowHSV = rgb2hsv(vColor1.rgb);\n            shadowHSV[2] *=  uVignette + 0.1;\n            vec3 shadowRGB = hsv2rgb(shadowHSV);\n            gl_FragColor.rgb =  mix(gl_FragColor.rgb, shadowRGB, smoothstep(0.0, 1.3 - uIris, distance(actPos, vec2(0.5))));\n\n            // noise by brightness\n            if ( midLayer ) {\n               gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(noise(actPos * 1000.0, 1.0) * 100.0), 0.02 / pow(brightness(gl_FragColor.rgb), 0.1));\n            }\n\n\n            gl_FragColor.a = uOpacity;\n\n\n             //gl_FragColor.rgb *= gl_FragColor.a;\n\n\n\n\n        }\n\n    "
        }
          , tl = {
            src: "\n\n\n        // Precision\n        precision mediump float;\n        precision mediump int;\n\n        // Attributes\n        attribute float aSide;\n        attribute vec3 aPosition;\n        attribute vec3 aCentroid;\n        attribute vec3 aNormal;\n        attribute vec4 materialAmbient;\n        attribute vec4 materialDiffuse;\n        attribute vec4 aGradient;\n        attribute vec3 aV0;\n\n        attribute float aPhi;\n\n\n        // Uniforms\n        uniform mat4 cameraTranslate;\n        uniform mat4 cameraRotate;\n        uniform mat4 perspective;\n        uniform mat4 camera;\n        uniform mat4 rotation;\n\n\n        uniform vec3 uResolution;\n        uniform vec2 uScale;\n\n        uniform vec3 uSegment;\n        uniform bool paused;\n        uniform float uNow;\n        uniform int uLayerIndex;\n\n        uniform mat4 uLightPosition;\n        uniform mat4 uLightAmbient;\n        uniform mat4 uLightDiffuse;\n        uniform float uLightSpeed;\n\n        uniform vec3 uAmplitude;\n        uniform vec3 uColorShift;\n        uniform float uOpacity;\n\n        uniform vec2 uMousePosition;\n        uniform int uProductId;\n        uniform float uMirror;\n        uniform vec2 uClip;\n\n        // Varyings\n        varying vec4 vColor;\n        varying vec4 vColor1;\n        varying vec4 vColor2;\n        varying vec3 vPosition;\n        //varying vec3 vMirror;\n\n\n       float time = uNow;\n       vec3 position = vec3(0.0);\n       bool background = false;\n       bool midLayer = false;\n\n       //       vec3 vertexOscillators(vec3 arg) {\n       //     return vec3(sin(arg[0]), cos(arg[1]), sin(arg[2]));\n       // }\n\n\n\n       vec3 vertexOscillators(vec3 arg) {\n            return vec3(sin(arg[0]), cos(arg[1]), sin(arg[2]));\n        }\n\n        vec3 lightOscillators(vec3 arg) {\n           // return vec3( 2.0 * sin( 5.0 * arg[0]), sin( 6.0 * arg[1]), sin(arg[2]));\n\n             return vec3(\n                 cos(3.0 * arg[0]),\n                 sin(2.0 * arg[1]),\n                  sin(arg[2])\n                  );\n\n\n        }\n\n        vec3 rgb2hsv(vec3 c){\n                vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n                vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n                vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n\n                float d = q.x - min(q.w, q.y);\n                float e = 1.0e-10;\n                return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n            }\n\n        vec3 hsv2rgb(vec3 c){\n            vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n            vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n            return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n        }\n\n        vec4 adjustLight(vec4 origColor, vec3 hsb) {\n            vec3 changedColor  = rgb2hsv(origColor.rgb);\n            changedColor[0] = clamp(changedColor[0] + hsb[0], 0.0, 1.0); // hue shift\n            changedColor[1] = clamp(changedColor[1] + hsb[1], 0.0, 1.0); // saturation shift\n            changedColor[2] = clamp(changedColor[2] + hsb[2], 0.0, 1.0); // brightness shift\n            return vec4(vec3(hsv2rgb(changedColor)), 1.0);\n        }\n\n\n        // Main\n        void main() {\n\n           if ( uLayerIndex == 0 ) {\n\n               background = true;\n\n           }\n\n            if ( uLayerIndex == 1 ) {\n              midLayer = true;\n           }\n\n\n            float phase = aPhi;\n            vec3 speed = normalize(aV0) * 0.0007;\n\n            // Create color\n             vColor1 = materialAmbient;\n             vColor2 = materialDiffuse;\n             vColor = vec4(1.0);\n\n            // Calculate the vertex position\n            vec3 amplitudes = uAmplitude * uSegment;\n\n            // Light geometry and magnitudes\n            vec3 orbitFactor = !background ? vec3(2.5, 2.5, 2.5) : vec3(-2.5, 1.5, 1.2) ;\n            vec3 lightsSpeed = !background ? vec3(uLightSpeed * 40.0, uLightSpeed  * 10.0, 100.0) : vec3(uLightSpeed, uLightSpeed  * 5.0, 150.0) ;\n\n\n\n            position = aPosition;\n            position += amplitudes * vertexOscillators(speed * time + phase);\n            position /= uResolution * vec3(uScale, 1.0);\n            position *= 4.0;\n\n            vec4 light1 = vec4(0.0);\n            vec4 light2 = vec4(0.0);\n            vec3 deltaHSVLight1 = vec3(0.0);\n            vec3 deltaHSVLight2 = vec3(0.0);\n            float shine = 1.0;\n\n            // hue shift in shadows\n            vec3 shadowColor = rgb2hsv( aGradient.rgb );\n\n\n            if( uProductId == 0 ) { //JetBrains\n                shadowColor[0] -= 0.25;\n                shadowColor[1] = 1.0;\n                shadowColor[2] *= 0.5;\n            }\n\n            if( uProductId == 1 ) { //IntelliJ IDEA\n                deltaHSVLight1 = vec3( 0.0, 0.0, -0.2 );\n                deltaHSVLight2 = vec3( -0.1, 1.0, 1.0 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.9;\n                shadowColor[2] *= 0.9;\n                shine = 1.1;\n                orbitFactor[1] += 2.5;\n            }\n\n            if( uProductId == 2 ) { //PyCharm\n                deltaHSVLight1 = vec3( 0.1, 0.0, 0.2 );\n                deltaHSVLight2 = vec3( -0.1, 0.0, -0.4 );\n                shadowColor[0] -= 0.4;\n                shadowColor[1] = 0.9;\n                shadowColor[2] *= 0.4;\n                orbitFactor[2] -= 0.5;\n            }\n\n            if( uProductId == 3 ) { //RubyMine\n                deltaHSVLight1 = vec3( 0.1, 1.0, 0.2 );\n                deltaHSVLight2 = vec3( -0.1, 1.0, 0.4 );\n                shadowColor[0] += 0.3;\n                shadowColor[1] = 0.3;\n                shadowColor[2] *= 0.4;\n                shine = 1.1;\n                orbitFactor[1] += 1.5;\n            }\n\n            if( uProductId == 5 ) { //WebStorm\n                deltaHSVLight1 = vec3( 0.0, 0.5, -0.1 );\n                deltaHSVLight2 = vec3( 0.1, 1.0, 0.7 );\n                shadowColor[0] -= 0.1;\n                shadowColor[1] = 0.5;\n                shadowColor[2] *= 0.5;\n                shine = 1.1;\n                orbitFactor[1] += 1.5;\n            }\n            if( uProductId == 6 ) { //CLion\n                deltaHSVLight1 = vec3( -0.04, 1.0, -0.1 );\n                deltaHSVLight2 = vec3( 0.0, 1.0, 0.9 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.9;\n                shadowColor[2] *= 0.5;\n                shine = 1.3;\n                orbitFactor[0] += 0.5;\n            }\n            if( uProductId == 7 ) { //DataGrip\n                deltaHSVLight1 = vec3( -0.18, 0.9, 0.8 );\n                deltaHSVLight2 = vec3( 0.0, 0.4, 0.8 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.4;\n                shadowColor[2] *= 0.4;\n                shine = 1.4;\n                orbitFactor[0] -= 1.5;\n            }\n            if( uProductId == 8 ) { //AppCode\n                deltaHSVLight1 = vec3( -0.03, 0.9, 0.1 );\n                deltaHSVLight2 = vec3( 0.0, 0.9, -0.1 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.9;\n                shadowColor[2] *= 0.2;\n                orbitFactor[1] -= 1.5;\n            }\n\n            if( uProductId == 9 ) { //GoLand\n                deltaHSVLight1 = vec3( 0.1, 0.8, 0.9 );\n                deltaHSVLight2 = vec3( 0.0, 0.6, 0.9 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.8;\n                shadowColor[2] *= 0.4;\n                orbitFactor[1] += 1.5;\n            }\n            if( uProductId == 10 ) { //ReSharper\n                deltaHSVLight1 = vec3( -0.01, 0.8, -0.1 );\n                deltaHSVLight2 = vec3( 0.0, 0.6, 1.0 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.8;\n                shadowColor[2] *= 0.5;\n                orbitFactor[1] -= 2.0;\n            }\n            if( uProductId == 11 ) { //ReSharper C++\n                deltaHSVLight1 = vec3( -0.02, 0.8, -0.1 );\n                deltaHSVLight2 = vec3( 0.0, 0.6, 1.0 );\n                shadowColor[0] -= 0.3;\n                shadowColor[1] = 0.9;\n                shadowColor[2] *= 0.3;\n                orbitFactor[1] -= 2.0;\n            }\n\n            if( uProductId == 12 ) { //dotCover\n                deltaHSVLight1 = vec3( 0.25, 1.0, 0.5 );\n                deltaHSVLight2 = vec3( -0.64, 1.0, 1.0 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 1.0;\n                shadowColor[2] *= 0.7;\n                orbitFactor[2] += 1.0;\n            }\n            if( uProductId == 13 ) { //dotMemory\n                deltaHSVLight1 = vec3( -0.45, 0.4, 0.9 );\n                deltaHSVLight2 = vec3( -0.2, -0.8, 0.7 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.8;\n                shadowColor[2] *= 0.4;\n                orbitFactor[2] += 1.0;\n            }\n\n            if( uProductId == 14 ) { //dotPeek\n                deltaHSVLight1 = vec3( 0.0, -0.7, -0.3 );\n                deltaHSVLight2 = vec3( 0.0, 0.0, 1.0 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.5;\n                orbitFactor[1] += 1.5;\n            }\n\n            if( uProductId == 15 ) { //dotTrace\n                deltaHSVLight1 = vec3( 0.2, 0.4, -0.1 );\n                deltaHSVLight2 = vec3( -0.2, 1.0, 0.3 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.8;\n            }\n\n            if( uProductId == 16 ) { //Rider\n                deltaHSVLight1 = vec3( 0.15, 0.5, 0.0 );\n                deltaHSVLight2 = vec3( 0.0, 0.0, 1.0 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.5;\n            }\n\n            if( uProductId == 17 ) { //Teamcity\n                deltaHSVLight1 = vec3( 0.0, -0.2, -0.2 );\n                deltaHSVLight2 = vec3( -0.2, 1.0, 0.3 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.7;\n                shadowColor[2] *= 0.8;\n                orbitFactor[1] += 1.0;\n            }\n\n            if( uProductId == 18 ) { //YouTrack\n                deltaHSVLight1 = vec3( 0.0, -0.4, -0.2 );\n                deltaHSVLight2 = vec3( 0.1, 1.0, 0.3 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.7;\n                shadowColor[2] *= 0.8;\n                orbitFactor[1] += 1.0;\n            }\n\n            if( uProductId == 19 ) { //Upsource\n                deltaHSVLight1 = vec3( 0.0, -0.3, -0.2 );\n                deltaHSVLight2 = vec3( 0.1, 1.0, 0.3 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.7;\n                shadowColor[2] *= 0.8;\n                orbitFactor[1] += 1.0;\n            }\n\n            if( uProductId == 20 ) { //Hub\n                deltaHSVLight1 = vec3( 0.05, -0.4, -0.1 );\n                deltaHSVLight2 = vec3( 0.0, 0.9, 0.4 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.9;\n                shadowColor[2] *= 0.5;\n                orbitFactor[1] += 1.5;\n            }\n\n            if( uProductId == 21 ) { //Kotlin\n                deltaHSVLight1 = vec3( 0.0, -0.2, -0.2 );\n                deltaHSVLight2 = vec3( 0.06, 1.0, 0.1 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.9;\n                shadowColor[2] *= 0.8;\n                orbitFactor[1] += 1.0;\n            }\n\n            if( uProductId == 22 ) { //MPS\n                deltaHSVLight1 = vec3( 0.0, -0.2, 0.2 );\n                deltaHSVLight2 = vec3( 0.0, 0.7, -0.3 );\n                shadowColor[0] -= 0.2;\n                shadowColor[1] = 0.7;\n                shadowColor[2] *= 0.6;\n                orbitFactor[1] += 1.0;\n            }\n\n            // Iterate through lights\n\n            for (int i = 0; i < 2; i++) {\n\n          //  if(uLayerIndex != 0) {\n                vec3 lightPosition = orbitFactor[i] * vec3(uLightPosition[i]) * lightOscillators(vec3(vec2(uNow / lightsSpeed[i]), 90.0)) ;\n\n                if ( background ) {\n                    light1 =  adjustLight(uLightDiffuse[i], uColorShift);\n                    light2 =  adjustLight(uLightAmbient[i], uColorShift);\n                } else {\n                    light1 =  adjustLight(uLightAmbient[i], deltaHSVLight1 + uColorShift);\n                    light2 =  adjustLight(uLightDiffuse[i], deltaHSVLight2 + uColorShift);\n                }\n\n                vec3 ray = normalize(lightPosition - aCentroid);\n                float illuminance = dot(aNormal, ray);\n                illuminance = shine * max(illuminance, 0.0);\n\n\n                // Calculate ambient light\n                  vColor *=  light1;\n\n                // Calculate diffuse light\n                  vColor +=  light2 * illuminance;\n\n            }\n\n       //Chaotic shadows\n\n             vColor *=  mix(vec4(hsv2rgb(shadowColor), 1.0), vColor, abs(position.z));\n\n           // Set gl_Position\n             gl_Position = cameraRotate * cameraTranslate * vec4(position, 1.0);\n\n\n          if (uMirror > 0.0) {\n              gl_Position.x = -1.0 * gl_Position.x;\n          }\n\n        }\n\n   "
        }
          , el = o(function(r, t, e, n, o) {
            var c = e
              , u = c._3
              , i = c._2
              , a = c._1
              , _ = c._0
              , l = n
              , s = l._3
              , f = l._2
              , d = l._1
              , p = l._0
              , h = o
              , m = h._3
              , g = h._2
              , v = h._1
              , b = h._0;
            return {
                ambient: Ne(Ee({
                    m11: Xe(_),
                    m12: Ke(_),
                    m13: Ye(_),
                    m14: je(_),
                    m21: Xe(a),
                    m22: Ke(a),
                    m23: Ye(a),
                    m24: je(a),
                    m31: Xe(i),
                    m32: Ke(i),
                    m33: Ye(i),
                    m34: je(i),
                    m41: Xe(u),
                    m42: Ke(u),
                    m43: Ye(u),
                    m44: je(u)
                })),
                diffuse: Ne(Ee({
                    m11: Xe(p),
                    m12: Ke(p),
                    m13: Ye(p),
                    m14: je(p),
                    m21: Xe(d),
                    m22: Ke(d),
                    m23: Ye(d),
                    m24: je(d),
                    m31: Xe(f),
                    m32: Ke(f),
                    m33: Ye(f),
                    m34: je(f),
                    m41: Xe(s),
                    m42: Ke(s),
                    m43: Ye(s),
                    m44: je(s)
                })),
                position: Ne(Ee({
                    m11: Re(b),
                    m12: Le(b),
                    m13: Fe(b),
                    m14: 0,
                    m21: Re(v),
                    m22: Le(v),
                    m23: Fe(v),
                    m24: 0,
                    m31: Re(g),
                    m32: Le(g),
                    m33: Fe(g),
                    m34: 0,
                    m41: Re(m),
                    m42: Le(m),
                    m43: Fe(m),
                    m44: 0
                })),
                speed: t
            }
        })
          , nl = function(r) {
            return {
                ambient: function() {
                    var t = r.ambient.rgba;
                    return "::" === t.ctor && "::" === t._1.ctor && "::" === t._1._1.ctor && "::" === t._1._1._1.ctor ? s(Ze, t._0, t._1._0, t._1._1._0, t._1._1._1._0) : s(Ze, 0, 0, 0, 0)
                }(),
                diffuse: function() {
                    var t = r.diffuse.rgba;
                    return "::" === t.ctor && "::" === t._1.ctor && "::" === t._1._1.ctor && "::" === t._1._1._1.ctor ? s(Ze, t._0, t._1._0, t._1._1._0, t._1._1._1._0) : s(Ze, 0, 0, 0, 0)
                }(),
                position: function() {
                    var t = r.position;
                    return "::" === t.ctor && "::" === t._1.ctor && "::" === t._1._1.ctor ? l(Pe, t._0, t._1._0, t._1._1._0) : l(Pe, 0, 0, 0)
                }()
            }
        }
          , ol = e(function(r, t, e) {
            var n = _(Z, nl, e)
              , o = l(Pe, 0, 0, 0)
              , c = s(Ze, 0, 0, 0, 0)
              , u = n;
            if ("::" === u.ctor) {
                if ("[]" === u._1.ctor) {
                    var i = u._0
                      , a = {
                        ctor: "_Tuple4",
                        _0: i.position,
                        _1: o,
                        _2: o,
                        _3: o
                    }
                      , d = {
                        ctor: "_Tuple4",
                        _0: i.diffuse,
                        _1: c,
                        _2: c,
                        _3: c
                    }
                      , p = {
                        ctor: "_Tuple4",
                        _0: i.ambient,
                        _1: c,
                        _2: c,
                        _3: c
                    };
                    return f(el, r, t, p, d, a)
                }
                if ("[]" === u._1._1.ctor) {
                    var h = u._1._0
                      , m = u._0;
                    a = {
                        ctor: "_Tuple4",
                        _0: m.position,
                        _1: h.position,
                        _2: o,
                        _3: o
                    },
                    d = {
                        ctor: "_Tuple4",
                        _0: m.diffuse,
                        _1: h.diffuse,
                        _2: c,
                        _3: c
                    },
                    p = {
                        ctor: "_Tuple4",
                        _0: m.ambient,
                        _1: h.ambient,
                        _2: c,
                        _3: c
                    };
                    return f(el, r, t, p, d, a)
                }
                if ("[]" === u._1._1._1.ctor) {
                    var g = u._1._1._0
                      , v = u._1._0
                      , b = u._0;
                    a = {
                        ctor: "_Tuple4",
                        _0: b.position,
                        _1: v.position,
                        _2: g.position,
                        _3: o
                    },
                    d = {
                        ctor: "_Tuple4",
                        _0: b.diffuse,
                        _1: v.diffuse,
                        _2: g.diffuse,
                        _3: c
                    },
                    p = {
                        ctor: "_Tuple4",
                        _0: b.ambient,
                        _1: v.ambient,
                        _2: g.ambient,
                        _3: c
                    };
                    return f(el, r, t, p, d, a)
                }
                var y = u._1._1._1._0
                  , T = u._1._1._0
                  , w = u._1._0
                  , S = u._0;
                a = {
                    ctor: "_Tuple4",
                    _0: S.position,
                    _1: w.position,
                    _2: T.position,
                    _3: y.position
                },
                d = {
                    ctor: "_Tuple4",
                    _0: S.diffuse,
                    _1: w.diffuse,
                    _2: T.diffuse,
                    _3: y.diffuse
                },
                p = {
                    ctor: "_Tuple4",
                    _0: S.ambient,
                    _1: w.ambient,
                    _2: T.ambient,
                    _3: y.ambient
                };
                return f(el, r, t, p, d, a)
            }
            return {
                ambient: Ve,
                diffuse: Ve,
                position: Ve,
                speed: t
            }
        })
          , cl = function(r) {
            switch (r.ctor) {
            case "Triangles":
                return "triangles";
            case "Lines":
                return "lines";
            case "PartialLines":
                return "partial-lines";
            default:
                return "points"
            }
        }
          , ul = function(r) {
            var t = r;
            return "::" === t.ctor ? "::" === t._1.ctor ? "::" === t._1._1.ctor ? "::" === t._1._1._1.ctor ? s(Ze, t._0, t._1._0, t._1._1._0, t._1._1._1._0) : s(Ze, t._0, t._1._0, t._1._1._0, 0) : s(Ze, t._0, t._1._0, 0, 0) : s(Ze, t._0, 0, 0, 0) : s(Ze, 0, 0, 0, 0)
        }
          , il = function(r) {
            var t = r;
            return "::" === t.ctor ? "::" === t._1.ctor ? "::" === t._1._1.ctor ? l(Pe, t._0, t._1._0, t._1._1._0) : l(Pe, t._0, t._1._0, 0) : l(Pe, t._0, 0, 0) : l(Pe, 0, 0, 0)
        }
          , al = o(function(r, t, e, n, o) {
            return {
                aSide: n,
                materialAmbient: ul(t.ambient.rgba),
                materialDiffuse: ul(t.diffuse.rgba),
                aPosition: il(o.position),
                aCentroid: il(e.centroid),
                aNormal: il(e.normal),
                aGradient: r,
                aV0: il(o.v0),
                aPhi: o.time
            }
        })
          , _l = (so({
            ctor: "[]"
        }),
        {
            materialAmbient: s(Ze, 0, 0, 0, 0),
            aCentroid: l(Pe, 0, 0, 0),
            materialDiffuse: s(Ze, 0, 0, 0, 0),
            aNormal: l(Pe, 0, 0, 0),
            aPosition: l(Pe, 0, 0, 0),
            aSide: 0,
            aGradient: s(Ze, 0, 0, 0, 0),
            aV0: l(Pe, 0, 0, 0),
            aPhi: 0
        })
          , ll = e(function(r, e, n) {
            return _(dr, t(function(t, n) {
                var o = n.vertices;
                if ("::" === o.ctor && "::" === o._1.ctor && "::" === o._1._1.ctor) {
                    var c = o._1._0
                      , u = o._0;
                    return {
                        ctor: "_Tuple3",
                        _0: f(al, s(Ze, u.gradient, u.gradient, u.gradient, 1), r, n, e, u),
                        _1: f(al, s(Ze, u.gradient, u.gradient, u.gradient, 1), r, n, e, c),
                        _2: f(al, s(Ze, c.gradient, c.gradient, c.gradient, 1), r, n, e, o._1._1._0)
                    }
                }
                return {
                    ctor: "_Tuple3",
                    _0: _l,
                    _1: _l,
                    _2: _l
                }
            }), n)
        })
          , sl = t(function(r, e) {
            var n = _(A, {
                ctor: "[]"
            }, _(N, function(r) {
                var t = K(r.meshes);
                if ("Just" === t.ctor) {
                    var e = t._0;
                    return l(ll, e.material, e.side, e.geometry.triangles)
                }
                return {
                    ctor: "[]"
                }
            }, e));
            switch (r.renderMode.ctor) {
            case "Triangles":
                return so(n);
            case "PartialLines":
                return lo(_(Z, function(r) {
                    var t = r;
                    return {
                        ctor: "_Tuple2",
                        _0: t._0,
                        _1: t._1
                    }
                }, n));
            case "Lines":
                return lo(l(J, t(function(r, t) {
                    var e = r
                      , n = e._1;
                    return _(F["++"], t, _(F["++"], {
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: e._0,
                            _1: n
                        },
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: n,
                            _1: e._2
                        },
                        _1: {
                            ctor: "[]"
                        }
                    }))
                }), {
                    ctor: "[]"
                }, n));
            default:
                return _o(l(J, t(function(r, t) {
                    var e = r;
                    return _(F["++"], t, _(F["++"], {
                        ctor: "::",
                        _0: e._0,
                        _1: {
                            ctor: "[]"
                        }
                    }, _(F["++"], {
                        ctor: "::",
                        _0: e._1,
                        _1: {
                            ctor: "[]"
                        }
                    }, {
                        ctor: "::",
                        _0: e._2,
                        _1: {
                            ctor: "[]"
                        }
                    })))
                }), {
                    ctor: "[]"
                }, n))
            }
        })
          , fl = {
            ctor: "_Tuple2",
            _0: -1,
            _1: -1
        }
          , dl = i(function(r, t, e, n, o, c, u, i) {
            var a = u
              , s = (o.opacity,
            o.colorShift)
              , f = s._0
              , d = s._1
              , p = s._2
              , h = o.amplitude
              , m = h._0
              , g = h._1
              , v = h._2
              , b = _(A, fl, o.clip)
              , y = o.mirror ? 1 : 0
              , T = He(n.size)
              , S = Je(n.size)
              , k = c
              , x = k._0
              , C = k._1
              , F = l(ol, c, a._1, a._0);
            return {
                uResolution: l(Pe, S, T, 100),
                uLightAmbient: F.ambient,
                uLightDiffuse: F.diffuse,
                uLightPosition: F.position,
                uLightSpeed: F.speed,
                uNow: r,
                uLayerIndex: i,
                uMousePosition: _(Ue, w(ue(t)), w(ce(t))),
                uSegment: l(Pe, 100, 100, 50),
                uMirror: y,
                uClip: _(Ue, ue(b), ce(b)),
                uScale: _(Ue, w(x) / S, w(C) / T),
                uAmplitude: l(Pe, m, g, v),
                uColorShift: l(Pe, f, d, p),
                uOpacity: o.opacity,
                uVignette: o.vignette,
                uIris: o.iris,
                paused: n.paused,
                rotation: n.rotation,
                perspective: n.perspective,
                camera: n.camera,
                cameraTranslate: n.cameraTranslate,
                cameraRotate: n.cameraRotate,
                size: n.size,
                origin: n.origin,
                uProductId: e
            }
        })
          , pl = a(function(r, t, e, n, o, c, u, i, a) {
            var l = _(A, {
                ctor: "_Tuple2",
                _0: 0,
                _1: 0
            }, _(N, function(r) {
                var t = r;
                if ("Just" === t.ctor) {
                    var e = t._0;
                    return {
                        ctor: "_Tuple2",
                        _0: e.geometry.width,
                        _1: e.geometry.height
                    }
                }
                return {
                    ctor: "_Tuple2",
                    _0: 0,
                    _1: 0
                }
            }, _(N, function(r) {
                return K(r.meshes)
            }, u)))
              , s = _(A, {
                ctor: "[]"
            }, _(N, function(r) {
                return r.lights
            }, u))
              , d = function() {
                var r = s;
                return "::" === r.ctor ? r._0.speed : 0
            }();
            return f(ao, i, tl, rl, a, function(r, t, e, n, o, c, u, i, a) {
                return 8 === r.arity ? r.func(t, e, n, o, c, u, i, a) : r(t)(e)(n)(o)(c)(u)(i)(a)
            }(dl, r, t, e, o, c, l, {
                ctor: "_Tuple2",
                _0: s,
                _1: d
            }, n))
        })
          , hl = (e(function(r, t, e) {
            return {
                rgba: r,
                hex: t,
                opacity: e
            }
        }),
        o(function(r, t, e, n, o) {
            return {
                ambient: r,
                diffuse: t,
                speed: e,
                position: n,
                ray: o
            }
        }),
        e(function(r, t, e) {
            return {
                ambient: r,
                diffuse: t,
                slave: e
            }
        }),
        c(function(r, t, e, n, o, c) {
            return {
                width: r,
                height: t,
                triangles: e,
                vertices: n,
                segmentWidth: o,
                sliceHeight: c
            }
        }),
        a(function(r, t, e, n, o, c, u, i, a) {
            return {
                a: r,
                b: t,
                c: e,
                centroid: n,
                color: o,
                normal: c,
                u: u,
                v: i,
                vertices: a
            }
        }),
        o(function(r, t, e, n, o) {
            return {
                position: r,
                v0: t,
                anchor: e,
                time: n,
                gradient: o
            }
        }),
        n(function(r, t, e, n) {
            return {
                geometry: r,
                material: t,
                position: e,
                side: n
            }
        }),
        t(function(r, t) {
            return {
                lights: r,
                meshes: t
            }
        }),
        a(function(r, t, e, n, o, c, u, i, a) {
            return {
                materialAmbient: r,
                materialDiffuse: t,
                aCentroid: e,
                aNormal: n,
                aPosition: o,
                aSide: c,
                aGradient: u,
                aV0: i,
                aPhi: a
            }
        }),
        n(function(r, t, e, n) {
            return {
                vColor: r,
                vPosition: t,
                vColor1: e,
                vColor2: n
            }
        }),
        {
            ctor: "Points"
        })
          , ml = {
            ctor: "PartialLines"
        }
          , gl = {
            ctor: "Lines"
        }
          , vl = {
            ctor: "Triangles"
        }
          , bl = {
            faces: {
                ctor: "_Tuple2",
                _0: 17,
                _1: 17
            },
            renderMode: vl,
            amplitude: {
                ctor: "_Tuple3",
                _0: .3,
                _1: .3,
                _2: .3
            },
            colorShift: {
                ctor: "_Tuple3",
                _0: 0,
                _1: 0,
                _2: 0
            },
            opacity: 1,
            vignette: 0,
            iris: .07,
            mirror: !1,
            clip: M,
            lightSpeed: 1e3,
            shareMesh: !1
        }
          , yl = function(r) {
            switch (r) {
            case "triangles":
                return vl;
            case "lines":
                return gl;
            case "partial-lines":
                return ml;
            case "points":
                return hl;
            default:
                return vl
            }
        }
          , Tl = {
            src: '\n\nprecision mediump float;\n\nvarying float antialiasing;\nvarying float aoIterations;\nvarying float bailout;\nvarying float maxIterations;\nvarying float minRange;\nvarying float stepLimit;\n\n/**\n* Fractal Lab\'s uber 3D fractal shader\n* Last update: 26 February 2011\n*\n* Changelog:\n*      0.1     - Initial release\n*      0.2     - Refactor for Fractal Lab\n*\n*\n* Copyright 2011, Tom Beddard\n* http://www.subblue.com\n*\n* For more generative graphics experiments see:\n* http://www.subblue.com\n*\n* Licensed under the GPL Version 3 license.\n* http://www.gnu.org/licenses/\n*\n*\n* Credits and references\n* ======================\n*\n* http://www.fractalforums.com/3d-fractal-generation/a-mandelbox-distance-estimate-formula/\n* http://www.fractalforums.com/3d-fractal-generation/revenge-of-the-half-eaten-menger-sponge/msg21700/\n* http://www.fractalforums.com/index.php?topic=3158.msg16982#msg16982\n*\n* Various other discussions on the fractal can be found here:\n* http://www.fractalforums.com/3d-fractal-generation/\n*\n*\n*/\n\n\nuniform float scale;                // {"label":"Scale",        "min":-10,  "max":10,   "step":0.01,     "default":2,    "group":"Fractal", "group_label":"Fractal parameters"}\nuniform float power;                // {"label":"Power",        "min":-20,  "max":20,   "step":0.1,     "default":8,    "group":"Fractal"}\nuniform float surfaceDetail;        // {"label":"Detail",   "min":0.1,  "max":2,    "step":0.01,    "default":0.6,  "group":"Fractal"}\nuniform float surfaceSmoothness;    // {"label":"Smoothness",   "min":0.01,  "max":1,    "step":0.01,    "default":0.8,  "group":"Fractal"}\nuniform float boundingRadius;       // {"label":"Bounding radius", "min":0.1, "max":150, "step":0.01, "default":5, "group":"Fractal"}\nuniform vec3  offset;               // {"label":["Offset x","Offset y","Offset z"],  "min":-3,   "max":3,    "step":0.01,    "default":[0,0,0],  "group":"Fractal", "group_label":"Offsets"}\nuniform vec3  shift;                // {"label":["Shift x","Shift y","Shift z"],  "min":-3,   "max":3,    "step":0.01,    "default":[0,0,0],  "group":"Fractal"}\n\nuniform float cameraRoll;           // {"label":"Roll",         "min":-180, "max":180,  "step":0.5,     "default":0,    "group":"Camera", "group_label":"Camera parameters"}\nuniform float cameraPitch;          // {"label":"Pitch",        "min":-180, "max":180,  "step":0.5,     "default":0,    "group":"Camera"}\nuniform float cameraYaw;            // {"label":"Yaw",          "min":-180, "max":180,  "step":0.5,     "default":0,    "group":"Camera"}\nuniform float cameraFocalLength;    // {"label":"Focal length", "min":0.1,  "max":3,    "step":0.01,    "default":0.9,  "group":"Camera"}\nuniform vec3  cameraPosition;       // {"label":["Camera x", "Camera y", "Camera z"],   "default":[0.0, 0.0, -2.5], "control":"camera", "group":"Camera", "group_label":"Position"}\n\nuniform int   colorIterations;      // {"label":"Colour iterations", "default": 4, "min":0, "max": 30, "step":1, "group":"Colour", "group_label":"Base colour"}\nuniform vec3  color1;               // {"label":"Colour 1",  "default":[1.0, 1.0, 1.0], "group":"Colour", "control":"color"}\nuniform float color1Intensity;      // {"label":"Colour 1 intensity", "default":0.45, "min":0, "max":3, "step":0.01, "group":"Colour"}\nuniform vec3  color2;               // {"label":"Colour 2",  "default":[0, 0.53, 0.8], "group":"Colour", "control":"color"}\nuniform float color2Intensity;      // {"label":"Colour 2 intensity", "default":0.3, "min":0, "max":3, "step":0.01, "group":"Colour"}\nuniform vec3  color3;               // {"label":"Colour 3",  "default":[1.0, 0.53, 0.0], "group":"Colour", "control":"color"}\nuniform float color3Intensity;      // {"label":"Colour 3 intensity", "default":0, "min":0, "max":3, "step":0.01, "group":"Colour"}\nuniform int   transparent;          // {"label":"Transparent background", "default":false, "group":"Colour"}\nuniform float gamma;                // {"label":"Gamma correction", "default":1, "min":0.1, "max":2, "step":0.01, "group":"Colour"}\n\nuniform vec3  light;                // {"label":["Light x", "Light y", "Light z"], "default":[-16.0, 100.0, -60.0], "min":-300, "max":300,  "step":1,   "group":"Shading", "group_label":"Light position"}\nuniform vec2  ambientColor;         // {"label":["Ambient intensity", "Ambient colour"],  "default":[0.5, 0.3], "group":"Colour", "group_label":"Ambient light & background"}\nuniform vec3  background1Color;     // {"label":"Background top",   "default":[0.0, 0.46, 0.8], "group":"Colour", "control":"color"}\nuniform vec3  background2Color;     // {"label":"Background bottom", "default":[0, 0, 0], "group":"Colour", "control":"color"}\nuniform vec3  innerGlowColor;       // {"label":"Inner glow", "default":[0.0, 0.6, 0.8], "group":"Shading", "control":"color", "group_label":"Glows"}\nuniform float innerGlowIntensity;   // {"label":"Inner glow intensity", "default":0.1, "min":0, "max":1, "step":0.01, "group":"Shading"}\nuniform vec3  outerGlowColor;       // {"label":"Outer glow", "default":[1.0, 1.0, 1.0], "group":"Shading", "control":"color"}\nuniform float outerGlowIntensity;   // {"label":"Outer glow intensity", "default":0.0, "min":0, "max":1, "step":0.01, "group":"Shading"}\nuniform float fog;                  // {"label":"Fog intensity",          "min":0,    "max":1,    "step":0.01,    "default":0,    "group":"Shading", "group_label":"Fog"}\nuniform float fogFalloff;           // {"label":"Fog falloff",  "min":0,    "max":10,   "step":0.01,    "default":0,    "group":"Shading"}\nuniform float specularity;          // {"label":"Specularity",  "min":0,    "max":3,    "step":0.01,    "default":0.8,  "group":"Shading", "group_label":"Shininess"}\nuniform float specularExponent;     // {"label":"Specular exponent", "min":0, "max":50, "step":0.1,     "default":4,    "group":"Shading"}\n\nuniform vec2  size;                 // {"default":[400, 300]}\nuniform vec2  outputSize;           // {"default":[800, 600]}\nuniform float aoIntensity;          // {"label":"AO intensity",     "min":0, "max":1, "step":0.01, "default":0.15,  "group":"Shading", "group_label":"Ambient occlusion"}\nuniform float aoSpread;             // {"label":"AO spread",    "min":0, "max":20, "step":0.01, "default":9,  "group":"Shading"}\n\nuniform mat3  objectRotation;       // {"label":["Rotate x", "Rotate y", "Rotate z"], "group":"Fractal", "control":"rotation", "default":[0,0,0], "min":-360, "max":360, "step":1, "group_label":"Object rotation"}\nuniform mat3  fractalRotation1;     // {"label":["Rotate x", "Rotate y", "Rotate z"], "group":"Fractal", "control":"rotation", "default":[0,0,0], "min":-360, "max":360, "step":1, "group_label":"Fractal rotation 1"}\nuniform mat3  fractalRotation2;     // {"label":["Rotate x", "Rotate y", "Rotate z"], "group":"Fractal", "control":"rotation", "default":[0,0,0], "min":-360, "max":360, "step":1, "group_label":"Fractal rotation 2"}\nuniform int   depthMap;             // {"label":"Depth map", "default": false, "value":1, "group":"Shading"}\n\nmat3 objectRotation_ = mat3(0, 0, 1, 0, 1, 0, 1, 0, 0);\nmat3 fractalRotation1_ = mat3(0, 0, 1, 0, 1, 0, 1, 0, 0);\nmat3 fractalRotation2_ = mat3(0, 0, 1, 0, 1, 0, 1, 0, 0);\n\n\nfloat aspectRatio = outputSize.x / outputSize.y;\nfloat fovfactor = 1.0 / sqrt(1.0 + cameraFocalLength * cameraFocalLength);\nfloat pixelScale = 1.0 / min(outputSize.x, outputSize.y);\nfloat epsfactor = 2.0 * fovfactor * pixelScale * surfaceDetail;\nvec3  w = vec3(0, 0, 1);\nvec3  v = vec3(0, 1, 0);\nvec3  u = vec3(1, 0, 0);\nmat3  cameraRotation;\n\n\nfloat HALFPI = 1.570796;\nfloat MIN_EPSILON = 6e-7;\nfloat MIN_NORM = 1.5e-7;\n\n\n// Return rotation matrix for rotating around vector v by angle\nmat3 rotationMatrixVector(vec3 v, float angle)\n{\n    float c = cos(radians(angle));\n    float s = sin(radians(angle));\n\n    return mat3(\n        c + (1.0 - c) * v.x * v.x,\n        (1.0 - c) * v.x * v.y - s * v.z,\n        (1.0 - c) * v.x * v.z + s * v.y,\n        (1.0 - c) * v.x * v.y + s * v.z,\n        c + (1.0 - c) * v.y * v.y,\n        (1.0 - c) * v.y * v.z - s * v.x,\n        (1.0 - c) * v.x * v.z - s * v.y,\n        (1.0 - c) * v.y * v.z + s * v.x,\n        c + (1.0 - c) * v.z * v.z\n    );\n}\n\n\nvec3 halfSpongeScale = vec3(0.5) * scale;\n\n// Adapted from Buddhis algorithm\n// http://www.fractalforums.com/3d-fractal-generation/revenge-of-the-half-eaten-menger-sponge/msg21700/\nvec3 MengerSponge(vec3 w)\n{\n    w *= objectRotation_;\n    w = (w * 0.5 + vec3(0.5)) * scale;  // scale [-1, 1] range to [0, 1]\n\n    vec3 v = abs(w - halfSpongeScale) - halfSpongeScale;\n    float d1 = max(v.x, max(v.y, v.z));     // distance to the box\n    float d = d1;\n    float p = 1.0;\n    float md = 10000.0;\n    vec3 cd = v;\n\n    for (int i = 0; i < 8; i++) {\n        vec3 a = mod(3.0 * w * p, 3.0);\n        p *= 3.0;\n\n        v = vec3(0.5) - abs(a - vec3(1.5)) + offset;\n        v *= fractalRotation1_;\n\n        // distance inside the 3 axis aligned square tubes\n        d1 = min(max(v.x, v.z), min(max(v.x, v.y), max(v.y, v.z))) / p;\n\n        // intersection\n        d = max(d, d1);\n\n        if (i < colorIterations) {\n            md = min(md, d);\n            cd = v;\n        }\n    }\n\n    // The distance estimate, min distance, and fractional iteration count\n    return vec3(d * 2.0 / scale, md, dot(cd, cd));\n}\n\n\n\n\n// Define the ray direction from the pixel coordinates\nvec3 rayDirection(vec2 pixel)\n{\n    vec2 p = (0.5 * size - pixel) / vec2(size.x, -size.y);\n    p.x *= aspectRatio;\n    vec3 d = (p.x * u + p.y * v - cameraFocalLength * w);\n\n    return normalize(cameraRotation * d);\n}\n\n\n\n// Intersect bounding sphere\n//\n// If we intersect then set the tmin and tmax values to set the start and\n// end distances the ray should traverse.\nbool intersectBoundingSphere(vec3 origin,\n                            vec3 direction,\n                            out float tmin,\n                            out float tmax)\n{\n    bool hit = false;\n    float b = dot(origin, direction);\n    float c = dot(origin, origin) - boundingRadius;\n    float disc = b*b - c;           // discriminant\n    tmin = tmax = 0.0;\n\n    if (disc > 0.0) {\n        // Real root of disc, so intersection\n        float sdisc = sqrt(disc);\n        float t0 = -b - sdisc;          // closest intersection distance\n        float t1 = -b + sdisc;          // furthest intersection distance\n\n        if (t0 >= 0.0) {\n            // Ray intersects front of sphere\n            tmin = t0;\n            tmax = t0 + t1;\n        } else if (t0 < 0.0) {\n            // Ray starts inside sphere\n            tmax = t1;\n        }\n        hit = true;\n    }\n\n    return hit;\n}\n\n\n\n\n// Calculate the gradient in each dimension from the intersection point\nvec3 generateNormal(vec3 z, float d)\n{\n    float e = max(d * 0.5, MIN_NORM);\n\n    float dx1 = MengerSponge(z + vec3(e, 0, 0)).x;\n    float dx2 = MengerSponge(z - vec3(e, 0, 0)).x;\n\n    float dy1 = MengerSponge(z + vec3(0, e, 0)).x;\n    float dy2 = MengerSponge(z - vec3(0, e, 0)).x;\n\n    float dz1 = MengerSponge(z + vec3(0, 0, e)).x;\n    float dz2 = MengerSponge(z - vec3(0, 0, e)).x;\n\n    return normalize(vec3(dx1 - dx2, dy1 - dy2, dz1 - dz2));\n}\n\n\n// Blinn phong shading model\n// http://en.wikipedia.org/wiki/BlinnPhong_shading_model\n// base color, incident, point of intersection, normal\nvec3 blinnPhong(vec3 color, vec3 p, vec3 n)\n{\n    // Ambient colour based on background gradient\n    vec3 ambColor = clamp(mix(background2Color, background1Color, (sin(n.y * HALFPI) + 1.0) * 0.5), 0.0, 1.0);\n    ambColor = mix(vec3(ambientColor.x), ambColor, ambientColor.y);\n\n    vec3  halfLV = normalize(light - p);\n    float diffuse = max(dot(n, halfLV), 0.0);\n    float specular = pow(diffuse, specularExponent);\n\n    return ambColor * color + color * diffuse + specular * specularity;\n}\n\n\n\n// Ambient occlusion approximation.\n// Based upon boxplorer\'s implementation which is derived from:\n// http://www.iquilezles.org/www/material/nvscene2008/rwwtt.pdf\nfloat ambientOcclusion(vec3 p, vec3 n, float eps)\n{\n    float o = 1.0;                  // Start at full output colour intensity\n    eps *= aoSpread;                // Spread diffuses the effect\n    float k = aoIntensity / eps;    // Set intensity factor\n    float d = 2.0 * eps;            // Start ray a little off the surface\n\n    for (int i = 0; i < 4; ++i) {\n        o -= (d - MengerSponge(p + n * d).x) * k;\n        d += eps;\n        k *= 0.5;                   // AO contribution drops as we move further from the surface\n    }\n\n    return clamp(o, 0.0, 1.0);\n}\n\n\n// Calculate the output colour for each input pixel\nvec4 render(vec2 pixel)\n{\n    vec3  ray_direction = rayDirection(pixel);\n    float ray_length = minRange;\n    vec3  ray = cameraPosition + ray_length * ray_direction;\n    vec4  bg_color = vec4(clamp(mix(background2Color, background1Color, (sin(ray_direction.y * HALFPI) + 1.0) * 0.5), 0.0, 1.0), 1.0);\n    vec4  color = bg_color;\n\n    float eps = MIN_EPSILON;\n    vec3  dist;\n    vec3  normal = vec3(0);\n    int   steps = 0;\n    bool  hit = false;\n    float tmin = 0.0;\n    float tmax = 10000.0;\n\n    if (intersectBoundingSphere(ray, ray_direction, tmin, tmax)) {\n        ray_length = tmin;\n        ray = cameraPosition + ray_length * ray_direction;\n\n        for (int i = 0; i < 91; i++) {\n            steps = i;\n            dist = MengerSponge(ray);\n            dist.x *= surfaceSmoothness;\n\n            // If we hit the surface on the previous step check again to make sure it wasn\'t\n            // just a thin filament\n            if (hit && dist.x < eps || ray_length > tmax || ray_length < tmin) {\n                steps--;\n                break;\n            }\n\n            hit = false;\n            ray_length += dist.x;\n            ray = cameraPosition + ray_length * ray_direction;\n            eps = ray_length * epsfactor;\n\n            if (dist.x < eps || ray_length < tmin) {\n                hit = true;\n            }\n        }\n    }\n\n    // Found intersection?\n    float glowAmount = float(steps)/float(stepLimit);\n    float glow;\n\n    if (hit) {\n        float aof = 1.0, shadows = 1.0;\n        glow = clamp(glowAmount * innerGlowIntensity * 3.0, 0.0, 1.0);\n\n        if (steps < 1 || ray_length < tmin) {\n            normal = normalize(ray);\n        } else {\n            normal = generateNormal(ray, eps);\n            aof = ambientOcclusion(ray, normal, eps);\n        }\n\n        color.rgb = mix(color1, mix(color2, color3, dist.y * color2Intensity), dist.z * color3Intensity);\n        color.rgb = blinnPhong(clamp(color.rgb * color1Intensity, 0.0, 1.0), ray, normal);\n        color.rgb *= aof;\n        color.rgb = mix(color.rgb, innerGlowColor, glow);\n        color.rgb = mix(bg_color.rgb, color.rgb, exp(-pow(ray_length * exp(fogFalloff), 2.0) * fog));\n        color.a = 1.0;\n    } else {\n        // Apply outer glow and fog\n        ray_length = tmax;\n        color.rgb = mix(bg_color.rgb, color.rgb, exp(-pow(ray_length * exp(fogFalloff), 2.0)) * fog);\n        glow = clamp(glowAmount * outerGlowIntensity * 3.0, 0.0, 1.0);\n        color.rgb = mix(color.rgb, outerGlowColor, glow);\n        if (transparent > 0) color = vec4(0.0);\n    }\n\n    if (depthMap > 0) {\n        color.rgb = vec3(ray_length / 10.0);\n    }\n\n    return color;\n}\n\n\n// ============================================================================================ //\n\n\n// The main loop\nvoid main()\n{\n    vec4 color = vec4(0.0);\n    float n = 0.0;\n\n    cameraRotation = rotationMatrixVector(v, 180.0 - cameraYaw) * rotationMatrixVector(u, -cameraPitch) * rotationMatrixVector(w, cameraRoll);\n\n\n    // #ifdef antialiasing\n//    for (float x = 0.0; x < 1.0; x += float(antialiasing)) {\n//        for (float y = 0.0; y < 1.0; y += float(antialiasing)) {\n//            color += render(gl_FragCoord.xy + vec2(x, y));\n//            n += 1.0;\n//        }\n//    }\n//    color /= n;\n    // #else\n    color = render(gl_FragCoord.xy);\n    // #endif\n\n    if (color.a < 0.00392) discard; // Less than 1/255\n\n    gl_FragColor = vec4(pow(color.rgb, vec3(1.0 / gamma)), color.a);\n    //gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n}\n\n'
        }
          , wl = {
            src: "\n\n        precision mediump float;\n        attribute vec3 vPosition;\n\n        uniform mat4 cameraTranslate;\n        uniform mat4 cameraRotate;\n        uniform mat4 perspective;\n        uniform mat4 camera;\n        uniform mat4 rotation;\n\n        varying float antialiasing;\n        varying float aoIterations;\n        varying float bailout;\n        varying float maxIterations;\n        varying float minRange;\n        varying float stepLimit;\n\n        void main () {\n            antialiasing = 0.5;\n            bailout = 4.0;\n            minRange = 6e-5;\n            stepLimit = 91.0;\n            aoIterations = 4.0;\n            maxIterations = 8.0;\n            // gl_Position = vec4(vPosition * vec3(0.3, 0.3, 0.3), 1.0);\n            gl_Position = perspective * camera * rotation * cameraTranslate * cameraRotate * vec4(vPosition, 1.0);\n        }\n\n    "
        }
          , Sl = e(function(r, t, e) {
            return f(ao, t, wl, Tl, e, function(r) {
                return {
                    rotation: r.rotation,
                    perspective: r.perspective,
                    camera: r.camera,
                    cameraTranslate: r.cameraTranslate,
                    cameraRotate: r.cameraRotate,
                    paused: r.paused,
                    scale: 1,
                    power: 8,
                    surfaceDetail: .6,
                    surfaceSmoothness: .6,
                    boundingRadius: 5,
                    offset: l(Pe, 0, 0, 0),
                    shift: l(Pe, 0, 0, 0),
                    cameraRoll: 0,
                    cameraPitch: -31.5,
                    cameraYaw: -42.5,
                    cameraFocalLength: .9,
                    cameraPosition: l(Pe, 1.909264, 1.37907, -2.195337),
                    colorIterations: 4,
                    color1: l(Pe, 1, 1, 1),
                    color1Intensity: .57,
                    color2: l(Pe, .67, .79, .81),
                    color2Intensity: 1.16,
                    color3: l(Pe, 1, .53, 0),
                    color3Intensity: .57,
                    transparent: 1,
                    gamma: 1,
                    light: l(Pe, -16, 100, -60),
                    ambientColor: _(Ue, .5, .3),
                    background1Color: l(Pe, 0, .46, .8),
                    background2Color: l(Pe, 0, 0, 0),
                    innerGlowColor: l(Pe, 0, .6, .8),
                    innerGlowIntensity: .12,
                    outerGlowColor: l(Pe, 1, 1, 1),
                    outerGlowIntensity: 0,
                    fog: 0,
                    fogFalloff: 0,
                    specularity: .8,
                    specularExponent: 4,
                    size: _(Ue, 400, 300),
                    origin: _(Ue, 0, 0),
                    outputSize: _(Ue, 800, 600),
                    aoIntensity: .15,
                    aoSpread: 9.2,
                    objectRotation: _(ze, 0, l(Pe, 0, 0, 0)),
                    fractalRotation1: _(ze, 0, l(Pe, 0, 0, 0)),
                    fractalRotation2: _(ze, 0, l(Pe, 0, 0, 0)),
                    depthMap: 0
                }
            }(r))
        })
          , kl = (c(function(r, t, e, n, o, c) {
            return {
                antialiasing: r,
                aoIterations: t,
                bailout: e,
                maxIterations: n,
                minRange: o,
                stepLimit: c
            }
        }),
        function(r) {
            return {
                vPosition: r
            }
        }
        )
          , xl = function() {
            var r = kl(l(Pe, 1, -1, 0))
              , t = kl(l(Pe, -1, -1, 0))
              , e = kl(l(Pe, 1, 1, 0));
            return {
                ctor: "::",
                _0: {
                    ctor: "_Tuple3",
                    _0: kl(l(Pe, -1, 1, 0)),
                    _1: e,
                    _2: t
                },
                _1: {
                    ctor: "::",
                    _0: {
                        ctor: "_Tuple3",
                        _0: t,
                        _1: e,
                        _2: r
                    },
                    _1: {
                        ctor: "[]"
                    }
                }
            }
        }()
          , Cl = function(r) {
            var t = r
              , e = l(H, Ie, Ve, {
                ctor: "::",
                _0: Oe(l(Pe, 0, 1, 0)),
                _1: {
                    ctor: "::",
                    _0: _(ze, R(t._0), Ae),
                    _1: {
                        ctor: "::",
                        _0: _(ze, R(t._1), Me),
                        _1: {
                            ctor: "::",
                            _0: Oe(l(Pe, 0, 0, 1)),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            })
              , n = function(r) {
                return g.update(r, {
                    vPosition: _(De, e, r.vPosition)
                })
            };
            return _(Z, function(r) {
                var t = r;
                return {
                    ctor: "_Tuple3",
                    _0: n(t._0),
                    _1: n(t._1),
                    _2: n(t._2)
                }
            }, xl)
        }
          , Fl = function(r) {
            return so(_(cr, Cl, {
                ctor: "::",
                _0: {
                    ctor: "_Tuple2",
                    _0: 0,
                    _1: 0
                },
                _1: {
                    ctor: "::",
                    _0: {
                        ctor: "_Tuple2",
                        _0: 90,
                        _1: 0
                    },
                    _1: {
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: 180,
                            _1: 0
                        },
                        _1: {
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple2",
                                _0: 270,
                                _1: 0
                            },
                            _1: {
                                ctor: "::",
                                _0: {
                                    ctor: "_Tuple2",
                                    _0: 0,
                                    _1: 90
                                },
                                _1: {
                                    ctor: "::",
                                    _0: {
                                        ctor: "_Tuple2",
                                        _0: 0,
                                        _1: 270
                                    },
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }
                    }
                }
            }))
        }
          , Ll = {
            src: "\n\n        precision mediump float;\n        varying vec3 vcolor;\n\n        void main () {\n            gl_FragColor = vec4(vcolor, 1.0);\n        }\n\n    "
        }
          , Rl = {
            src: "\n\n        attribute vec3 position;\n        attribute vec3 color;\n\n        uniform mat4 cameraTranslate;\n        uniform mat4 cameraRotate;\n        uniform mat4 perspective;\n        uniform mat4 camera;\n        uniform mat4 rotation;\n\n        varying vec3 vcolor;\n\n        void main () {\n            // gl_Position = perspective * camera * rotation * cameraTranslate * cameraRotate * vec4(position, 1.0);\n            // gl_Position = perspective * camera * rotation * vec4(position, 1.0);\n            gl_Position = perspective * camera * rotation * vec4(position, 1.0);\n            vcolor = color;\n        }\n\n    "
        }
          , Al = e(function(r, t, e) {
            return f(ao, t, Rl, Ll, e, function(r) {
                return r
            }(r))
        })
          , Ml = t(function(r, t) {
            return {
                position: r,
                color: t
            }
        })
          , Pl = function(r) {
            return so({
                ctor: "::",
                _0: {
                    ctor: "_Tuple3",
                    _0: _(Ml, l(Pe, 0, 0, 0), l(Pe, 1, 0, 0)),
                    _1: _(Ml, l(Pe, 1, 1, 0), l(Pe, 0, 1, 0)),
                    _2: _(Ml, l(Pe, 1, -1, 0), l(Pe, 0, 0, 1))
                },
                _1: {
                    ctor: "[]"
                }
            })
        }
          , El = {
            src: "\n\n        precision mediump float;\n        varying vec3 vcolor;\n\n        void main () {\n            gl_FragColor = vec4(vcolor, 1.0);\n        }\n\n    "
        }
          , Nl = {
            src: "\n\n        attribute vec3 position;\n        attribute vec3 color;\n\n        uniform mat4 cameraTranslate;\n        uniform mat4 cameraRotate;\n        uniform mat4 perspective;\n        uniform mat4 camera;\n        uniform mat4 rotation;\n\n        varying vec3 vcolor;\n\n        void main () {\n            // gl_Position = perspective * camera * rotation * cameraTranslate * cameraRotate * vec4(position, 1.0);\n            // gl_Position = perspective * camera * rotation * vec4(position, 1.0);\n            gl_Position = perspective * camera * rotation * vec4(position, 1.0);\n            vcolor = color;\n        }\n\n    "
        }
          , Bl = e(function(r, t, e) {
            return f(ao, t, Nl, El, e, function(r) {
                return r
            }(r))
        })
          , Ol = t(function(r, t) {
            return {
                position: r,
                color: t
            }
        })
          , zl = function(r) {
            return so({
                ctor: "::",
                _0: {
                    ctor: "_Tuple3",
                    _0: _(Ol, l(Pe, 0, 0, 0), l(Pe, 1, 0, 0)),
                    _1: _(Ol, l(Pe, 1, 1, 0), l(Pe, 0, 1, 0)),
                    _2: _(Ol, l(Pe, 1, -1, 0), l(Pe, 0, 0, 1))
                },
                _1: {
                    ctor: "[]"
                }
            })
        }
          , Il = {
            src: "\n\n        // Precision\n        precision mediump float;\n\n        uniform vec3 uColor;\n        uniform float uOpacity;\n        uniform vec3 uResolution;\n\n        varying vec4 vColor;\n\n\n\n        float vignette() {\n            float st = gl_FragCoord.x/uResolution.x;\n           // return distance(st,vec2(0.5));\n           return st;\n        }\n\n\n        // Main\n        void main() {\n\n            gl_FragColor.rgb = uColor;\n\n          // gl_FragColor = vec4(uColor, vignette());\n             gl_FragColor.a = mix(gl_FragColor.a , uOpacity, pow(smoothstep(0.0, 0.7, vignette()), 2.0));\n\n \n        }\n    "
        }
          , ql = {
            src: "\n        precision mediump float;\n\n        attribute vec3 position;\n        attribute vec3 color;\n\n        uniform vec3 uColor;\n        varying vec4 vColor;\n\n\n        void main () {\n            gl_Position =  vec4(position, 1.0);\n            vColor = vec4(uColor, 0.0);\n        }\n\n    "
        }
          , Vl = t(function(r, t) {
            var e = t
              , n = e.color
              , o = n._0
              , c = n._1
              , u = n._2;
            return {
                rotation: r.rotation,
                perspective: r.perspective,
                camera: r.camera,
                cameraTranslate: r.cameraTranslate,
                cameraRotate: r.cameraRotate,
                size: r.size,
                origin: r.origin,
                paused: r.paused,
                uOpacity: e.opacity,
                uColor: l(Pe, o, c, u),
                uResolution: l(Pe, 2340, 1280, 0)
            }
        })
          , Dl = {
            opacity: 1,
            color: {
                ctor: "_Tuple3",
                _0: .671875,
                _1: .289,
                _2: .5898
            }
        }
          , Gl = (t(function(r, t) {
            return {
                opacity: r,
                color: t
            }
        }),
        t(function(r, t) {
            return {
                position: r,
                color: t
            }
        }))
          , Hl = e(function(r, t, e) {
            return f(ao, e, ql, Il, function(r) {
                return so({
                    ctor: "::",
                    _0: {
                        ctor: "_Tuple3",
                        _0: _(Gl, l(Pe, 1, 1, 0), Ce(r)),
                        _1: _(Gl, l(Pe, -1, 1, 0), Ce(r)),
                        _2: _(Gl, l(Pe, -1, -1, 0), Ce(r))
                    },
                    _1: {
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple3",
                            _0: _(Gl, l(Pe, -1, -1, 0), Ce(r)),
                            _1: _(Gl, l(Pe, 1, 1, 0), Ce(r)),
                            _2: _(Gl, l(Pe, 1, -1, 0), Ce(r))
                        },
                        _1: {
                            ctor: "[]"
                        }
                    }
                })
            }(t.color), _(Vl, r, t))
        })
          , Jl = function(r) {
            return {
                background: "#333",
                mode: r,
                gui: M,
                paused: !1,
                autoRotate: !1,
                fps: 0,
                theta: .1,
                omega: 0,
                layers: {
                    ctor: "[]"
                },
                size: {
                    ctor: "_Tuple2",
                    _0: 1200,
                    _1: 1200
                },
                origin: {
                    ctor: "_Tuple2",
                    _0: 0,
                    _1: 0
                },
                mouse: {
                    ctor: "_Tuple2",
                    _0: 0,
                    _1: 0
                },
                now: 0,
                timeShift: 0,
                product: $_,
                controlsVisible: !0
            }
        }
          , Ul = (o(function(r, t, e, n, o) {
            return {
                kind: r,
                name: t,
                layer: e,
                model: n,
                on: o
            }
        }),
        c(function(r, t, e, n, o, c) {
            return {
                kind: r,
                blend: t,
                webglOrSvg: e,
                isOn: n,
                name: o,
                model: c
            }
        }),
        {
            ctor: "NoOp"
        })
          , Wl = {
            ctor: "SavePng"
        }
          , jl = function(r) {
            return {
                ctor: "ApplyRandomizer",
                _0: r
            }
        }
          , Yl = {
            ctor: "Randomize"
        }
          , Kl = t(function(r, t) {
            return {
                ctor: "ChangeOpacity",
                _0: r,
                _1: t
            }
        })
          , Xl = t(function(r, t) {
            return {
                ctor: "ShiftColor",
                _0: r,
                _1: t
            }
        })
          , Zl = t(function(r, t) {
            return {
                ctor: "AlterAmplitude",
                _0: r,
                _1: t
            }
        })
          , $l = t(function(r, t) {
            return {
                ctor: "ChangeIris",
                _0: r,
                _1: t
            }
        })
          , Ql = t(function(r, t) {
            return {
                ctor: "ChangeVignette",
                _0: r,
                _1: t
            }
        })
          , rs = t(function(r, t) {
            return {
                ctor: "ChangeLightSpeed",
                _0: r,
                _1: t
            }
        })
          , ts = t(function(r, t) {
            return {
                ctor: "AlterFaces",
                _0: r,
                _1: t
            }
        })
          , es = t(function(r, t) {
            return {
                ctor: "ChangeFaces",
                _0: r,
                _1: t
            }
        })
          , ns = t(function(r, t) {
            return {
                ctor: "ChangeFssRenderMode",
                _0: r,
                _1: t
            }
        })
          , os = t(function(r, t) {
            return {
                ctor: "RebuildFss",
                _0: r,
                _1: t
            }
        })
          , cs = t(function(r, t) {
            return {
                ctor: "ChangeSVGBlend",
                _0: r,
                _1: t
            }
        })
          , us = t(function(r, t) {
            return {
                ctor: "AlterWGLBlend",
                _0: r,
                _1: t
            }
        })
          , is = e(function(r, t, n) {
            var o = e(function(r, t, e) {
                return _(us, r, function(r) {
                    var t = r.alphaEq
                      , n = t._0
                      , o = t._2;
                    return g.update(r, {
                        alphaEq: {
                            ctor: "_Tuple3",
                            _0: n,
                            _1: za(e),
                            _2: o
                        }
                    })
                })
            })
              , c = e(function(r, t, e) {
                return _(us, r, function(r) {
                    var t = r.alphaEq
                      , n = t._0
                      , o = t._1;
                    return g.update(r, {
                        alphaEq: {
                            ctor: "_Tuple3",
                            _0: n,
                            _1: o,
                            _2: za(e)
                        }
                    })
                })
            })
              , u = e(function(r, t, e) {
                return _(us, r, function(r) {
                    var t = r.alphaEq
                      , n = t._1
                      , o = t._2;
                    return g.update(r, {
                        alphaEq: {
                            ctor: "_Tuple3",
                            _0: Ia(e),
                            _1: n,
                            _2: o
                        }
                    })
                })
            })
              , i = e(function(r, t, e) {
                return _(us, r, function(r) {
                    var t = r.colorEq
                      , n = t._0
                      , o = t._1;
                    return g.update(r, {
                        colorEq: {
                            ctor: "_Tuple3",
                            _0: n,
                            _1: o,
                            _2: za(e)
                        }
                    })
                })
            })
              , a = e(function(r, t, e) {
                return _(us, r, function(r) {
                    var t = r.colorEq
                      , n = t._0
                      , o = t._2;
                    return g.update(r, {
                        colorEq: {
                            ctor: "_Tuple3",
                            _0: n,
                            _1: za(e),
                            _2: o
                        }
                    })
                })
            })
              , l = e(function(r, t, e) {
                return _(us, r, function(r) {
                    var t = r.colorEq
                      , n = t._1
                      , o = t._2;
                    return g.update(r, {
                        colorEq: {
                            ctor: "_Tuple3",
                            _0: Ia(e),
                            _1: n,
                            _2: o
                        }
                    })
                })
            })
              , s = _(ua, {
                ctor: "_Tuple2",
                _0: 8,
                _1: 2
            }, _(Z, fi, {
                ctor: "::",
                _0: "0",
                _1: {
                    ctor: "::",
                    _0: "1",
                    _1: {
                        ctor: "::",
                        _0: "sC",
                        _1: {
                            ctor: "::",
                            _0: "1-sC",
                            _1: {
                                ctor: "::",
                                _0: "dC",
                                _1: {
                                    ctor: "::",
                                    _0: "1-dC",
                                    _1: {
                                        ctor: "::",
                                        _0: "sα",
                                        _1: {
                                            ctor: "::",
                                            _0: "1-sα",
                                            _1: {
                                                ctor: "::",
                                                _0: "dα",
                                                _1: {
                                                    ctor: "::",
                                                    _0: "1-dα",
                                                    _1: {
                                                        ctor: "::",
                                                        _0: "αS",
                                                        _1: {
                                                            ctor: "::",
                                                            _0: "CC",
                                                            _1: {
                                                                ctor: "::",
                                                                _0: "1-CC",
                                                                _1: {
                                                                    ctor: "::",
                                                                    _0: "Cα",
                                                                    _1: {
                                                                        ctor: "::",
                                                                        _0: "1-Cα",
                                                                        _1: {
                                                                            ctor: "[]"
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }))
              , d = _(ua, {
                ctor: "_Tuple2",
                _0: 3,
                _1: 1
            }, _(Z, fi, {
                ctor: "::",
                _0: "+",
                _1: {
                    ctor: "::",
                    _0: "-",
                    _1: {
                        ctor: "::",
                        _0: "R-",
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }));
            return _(ua, {
                ctor: "_Tuple2",
                _0: 3,
                _1: 2
            }, {
                ctor: "::",
                _0: f(di, "colorFn", ci, 0, l(n), d),
                _1: {
                    ctor: "::",
                    _0: f(di, "colorFt1", ci, 1, a(n), s),
                    _1: {
                        ctor: "::",
                        _0: f(di, "colorFt2", ci, 0, i(n), s),
                        _1: {
                            ctor: "::",
                            _0: f(di, "alphaFn", ci, 0, u(n), d),
                            _1: {
                                ctor: "::",
                                _0: f(di, "alphaFt1", ci, 1, c(n), s),
                                _1: {
                                    ctor: "::",
                                    _0: f(di, "alphaFt2", ci, 0, o(n), s),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }
                    }
                }
            })
        })
          , as = t(function(r, t) {
            return {
                ctor: "ChangeWGLBlend",
                _0: r,
                _1: t
            }
        })
          , _s = t(function(r, t) {
            return {
                ctor: "Configure",
                _0: r,
                _1: t
            }
        })
          , ls = function(r) {
            return {
                ctor: "MirrorOff",
                _0: r
            }
        }
          , ss = function(r) {
            return {
                ctor: "MirrorOn",
                _0: r
            }
        }
          , fs = function(r) {
            return {
                ctor: "TurnOff",
                _0: r
            }
        }
          , ds = function(r) {
            return {
                ctor: "TurnOn",
                _0: r
            }
        }
          , ps = n(function(r, n, o, c) {
            var u = function(r) {
                return {
                    min: -1,
                    max: 1,
                    step: .05,
                    roundBy: 100,
                    $default: r
                }
            }
              , i = function(r) {
                return {
                    min: 0,
                    max: 100,
                    step: 1,
                    roundBy: 1,
                    $default: r
                }
            }
              , a = function(r) {
                return {
                    min: 0,
                    max: 1,
                    step: .05,
                    roundBy: 100,
                    $default: r
                }
            }
              , d = e(function(r, t, e) {
                return _(ns, r, yl(e))
            })
              , p = t(function(r, t) {
                return (g.eq(t, ai) ? ds : fs)(r)
            })
              , h = t(function(r, t) {
                return (g.eq(t, ai) ? ss : ls)(r)
            })
              , m = n
              , v = m.lightSpeed
              , b = m.faces
              , y = m.amplitude
              , T = m.vignette
              , S = m.iris
              , k = m.colorShift
              , C = b
              , F = C._0
              , L = C._1
              , R = y
              , A = R._0
              , P = R._1
              , N = R._2
              , B = k
              , O = B._0
              , z = B._1
              , I = B._2
              , q = {
                min: 0,
                max: 2e3,
                step: 1,
                roundBy: 1,
                $default: w(v)
            };
            return ia({
                ctor: "::",
                _0: l(mi, "visible", ai, p(c)),
                _1: {
                    ctor: "::",
                    _0: l(mi, "mirror", ii, h(c)),
                    _1: {
                        ctor: "::",
                        _0: s(gi, "lights", q, w(v), function(r) {
                            return _(rs, c, x(r))
                        }),
                        _1: {
                            ctor: "::",
                            _0: s(gi, "col", i(w(F)), w(F), function(r) {
                                return _(ts, c, {
                                    ctor: "_Tuple2",
                                    _0: E(x(r)),
                                    _1: M
                                })
                            }),
                            _1: {
                                ctor: "::",
                                _0: s(gi, "row", i(w(L)), w(L), function(r) {
                                    return _(ts, c, {
                                        ctor: "_Tuple2",
                                        _0: M,
                                        _1: E(x(r))
                                    })
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: l(pi, "fog", ci, _(ua, {
                                        ctor: "_Tuple2",
                                        _0: 2,
                                        _1: 1
                                    }, {
                                        ctor: "::",
                                        _0: s(gi, "shine", a(T), T, Ql(c)),
                                        _1: {
                                            ctor: "::",
                                            _0: s(gi, "density", a(S), S, $l(c)),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    })),
                                    _1: {
                                        ctor: "::",
                                        _0: f(di, "mesh", ci, 0, d(c), _(ua, {
                                            ctor: "_Tuple2",
                                            _0: 2,
                                            _1: 1
                                        }, {
                                            ctor: "::",
                                            _0: fi("triangles"),
                                            _1: {
                                                ctor: "::",
                                                _0: fi("lines"),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        })),
                                        _1: {
                                            ctor: "::",
                                            _0: l(pi, "ranges", ci, _(ua, {
                                                ctor: "_Tuple2",
                                                _0: 3,
                                                _1: 1
                                            }, {
                                                ctor: "::",
                                                _0: s(gi, "horizontal", a(A), A, function(r) {
                                                    return _(Zl, c, {
                                                        ctor: "_Tuple3",
                                                        _0: E(r),
                                                        _1: M,
                                                        _2: M
                                                    })
                                                }),
                                                _1: {
                                                    ctor: "::",
                                                    _0: s(gi, "vertical", a(P), P, function(r) {
                                                        return _(Zl, c, {
                                                            ctor: "_Tuple3",
                                                            _0: M,
                                                            _1: E(r),
                                                            _2: M
                                                        })
                                                    }),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: s(gi, "depth", a(N), N, function(r) {
                                                            return _(Zl, c, {
                                                                ctor: "_Tuple3",
                                                                _0: M,
                                                                _1: M,
                                                                _2: E(r)
                                                            })
                                                        }),
                                                        _1: {
                                                            ctor: "[]"
                                                        }
                                                    }
                                                }
                                            })),
                                            _1: {
                                                ctor: "::",
                                                _0: l(pi, "hsb", ci, _(ua, {
                                                    ctor: "_Tuple2",
                                                    _0: 3,
                                                    _1: 1
                                                }, {
                                                    ctor: "::",
                                                    _0: s(gi, "hue", u(O), O, function(r) {
                                                        return _(Xl, c, {
                                                            ctor: "_Tuple3",
                                                            _0: E(r),
                                                            _1: M,
                                                            _2: M
                                                        })
                                                    }),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: s(gi, "saturation", u(z), z, function(r) {
                                                            return _(Xl, c, {
                                                                ctor: "_Tuple3",
                                                                _0: M,
                                                                _1: E(r),
                                                                _2: M
                                                            })
                                                        }),
                                                        _1: {
                                                            ctor: "::",
                                                            _0: s(gi, "brightness", u(I), I, function(r) {
                                                                return _(Xl, c, {
                                                                    ctor: "_Tuple3",
                                                                    _0: M,
                                                                    _1: M,
                                                                    _2: E(r)
                                                                })
                                                            }),
                                                            _1: {
                                                                ctor: "[]"
                                                            }
                                                        }
                                                    }
                                                })),
                                                _1: {
                                                    ctor: "::",
                                                    _0: l(pi, "blend", ci, l(is, r, o, c)),
                                                    _1: {
                                                        ctor: "[]"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            })
        })
          , hs = function(r) {
            return {
                ctor: "ChangeProduct",
                _0: r
            }
        }
          , ms = {
            ctor: "HideControls"
        }
          , gs = {
            ctor: "TriggerPause"
        }
          , vs = {
            ctor: "Continue"
        }
          , bs = {
            ctor: "Pause"
        }
          , ys = {
            ctor: "BackToNow"
        }
          , Ts = {
            ctor: "ExportZip"
        }
          , ws = function(r) {
            return {
                ctor: "Import",
                _0: r
            }
        }
          , Ss = function(r) {
            return {
                ctor: "Rotate",
                _0: r
            }
        }
          , ks = {
            ctor: "RequestFitToWindow"
        }
          , xs = function(r) {
            return {
                ctor: "ResizeFromPreset",
                _0: r
            }
        }
          , Cs = function(r) {
            var n = {
                min: -1,
                max: 1,
                step: .05,
                roundBy: 100,
                $default: r.omega
            }
              , o = t(function(r, t) {
                return (g.eq(t, ai) ? ds : fs)(r)
            })
              , c = e(function(r, t, e) {
                return _(cs, r, S_(e))
            })
              , u = (e(function(r, t, e) {
                return Ul
            }),
            t(function(r, t) {
                switch (t) {
                case "rs":
                    return hs(G_);
                case "rs cpp":
                    return hs(D_);
                case "idea":
                    return hs(Z_);
                default:
                    return hs(Q_(t))
                }
            }))
              , i = _(ua, {
                ctor: "_Tuple2",
                _0: 3,
                _1: 3
            }, _(Z, fi, {
                ctor: "::",
                _0: "normal",
                _1: {
                    ctor: "::",
                    _0: "overlay",
                    _1: {
                        ctor: "::",
                        _0: "multiply",
                        _1: {
                            ctor: "::",
                            _0: "darken",
                            _1: {
                                ctor: "::",
                                _0: "lighten",
                                _1: {
                                    ctor: "::",
                                    _0: "multiply",
                                    _1: {
                                        ctor: "::",
                                        _0: "multiply",
                                        _1: {
                                            ctor: "::",
                                            _0: "multiply",
                                            _1: {
                                                ctor: "::",
                                                _0: "multiply",
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }))
              , a = t(function(r, t) {
                return ia({
                    ctor: "::",
                    _0: l(mi, "visible", ai, o(t)),
                    _1: {
                        ctor: "::",
                        _0: f(di, "blend", ci, 0, c(t), i),
                        _1: {
                            ctor: "[]"
                        }
                    }
                })
            })
              , d = _(dr, t(function(t, e) {
                var n = e
                  , o = n.name
                  , c = n.layer;
                if ("WebGLLayer" === c.ctor) {
                    var u = n.model;
                    return "FssModel" === u.ctor ? l(pi, zr(o), ci, s(ps, r.mode, u._0, c._1, t)) : function(r) {
                        return {
                            ctor: "Ghost",
                            _0: r
                        }
                    }(_(F["++"], "layer ", T(t)))
                }
                return l(pi, zr(o), ci, _(a, c._1, t))
            }), _($, function(t) {
                var e = "_Tuple2"
                  , n = t.name
                  , o = r.mode;
                return "_Tuple2" !== e || "Cover" !== n || "Production" !== o.ctor
            }, r.layers))
              , p = _(ua, {
                ctor: "_Tuple2",
                _0: 6,
                _1: 4
            }, _(Z, fi, {
                ctor: "::",
                _0: "jetbrains",
                _1: {
                    ctor: "::",
                    _0: "idea",
                    _1: {
                        ctor: "::",
                        _0: "phpstorm",
                        _1: {
                            ctor: "::",
                            _0: "pycharm",
                            _1: {
                                ctor: "::",
                                _0: "rubymine",
                                _1: {
                                    ctor: "::",
                                    _0: "webstorm",
                                    _1: {
                                        ctor: "::",
                                        _0: "clion",
                                        _1: {
                                            ctor: "::",
                                            _0: "datagrip",
                                            _1: {
                                                ctor: "::",
                                                _0: "appcode",
                                                _1: {
                                                    ctor: "::",
                                                    _0: "goland",
                                                    _1: {
                                                        ctor: "::",
                                                        _0: "rs",
                                                        _1: {
                                                            ctor: "::",
                                                            _0: "rs cpp",
                                                            _1: {
                                                                ctor: "::",
                                                                _0: "dotcover",
                                                                _1: {
                                                                    ctor: "::",
                                                                    _0: "dotmemory",
                                                                    _1: {
                                                                        ctor: "::",
                                                                        _0: "dotpeek",
                                                                        _1: {
                                                                            ctor: "::",
                                                                            _0: "dottrace",
                                                                            _1: {
                                                                                ctor: "::",
                                                                                _0: "rider",
                                                                                _1: {
                                                                                    ctor: "::",
                                                                                    _0: "teamcity",
                                                                                    _1: {
                                                                                        ctor: "::",
                                                                                        _0: "youtrack",
                                                                                        _1: {
                                                                                            ctor: "::",
                                                                                            _0: "upsource",
                                                                                            _1: {
                                                                                                ctor: "::",
                                                                                                _0: "hub",
                                                                                                _1: {
                                                                                                    ctor: "::",
                                                                                                    _0: "kotlin",
                                                                                                    _1: {
                                                                                                        ctor: "::",
                                                                                                        _0: "mps",
                                                                                                        _1: {
                                                                                                            ctor: "[]"
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }))
              , h = function(r) {
                return "Production" === r.ctor ? {
                    ctor: "_Tuple2",
                    _0: Lt({
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: "2560x1440",
                            _1: {
                                ctor: "_Tuple2",
                                _0: 2560,
                                _1: 1440
                            }
                        },
                        _1: {
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple2",
                                _0: "1920x1200",
                                _1: {
                                    ctor: "_Tuple2",
                                    _0: 1920,
                                    _1: 1200
                                }
                            },
                            _1: {
                                ctor: "::",
                                _0: {
                                    ctor: "_Tuple2",
                                    _0: "1920x1080",
                                    _1: {
                                        ctor: "_Tuple2",
                                        _0: 1920,
                                        _1: 1080
                                    }
                                },
                                _1: {
                                    ctor: "::",
                                    _0: {
                                        ctor: "_Tuple2",
                                        _0: "1680x1050",
                                        _1: {
                                            ctor: "_Tuple2",
                                            _0: 1680,
                                            _1: 1050
                                        }
                                    },
                                    _1: {
                                        ctor: "::",
                                        _0: {
                                            ctor: "_Tuple2",
                                            _0: "1536x864",
                                            _1: {
                                                ctor: "_Tuple2",
                                                _0: 1536,
                                                _1: 864
                                            }
                                        },
                                        _1: {
                                            ctor: "::",
                                            _0: {
                                                ctor: "_Tuple2",
                                                _0: "1440x900",
                                                _1: {
                                                    ctor: "_Tuple2",
                                                    _0: 1440,
                                                    _1: 900
                                                }
                                            },
                                            _1: {
                                                ctor: "::",
                                                _0: {
                                                    ctor: "_Tuple2",
                                                    _0: "1366x768",
                                                    _1: {
                                                        ctor: "_Tuple2",
                                                        _0: 1366,
                                                        _1: 768
                                                    }
                                                },
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }),
                    _1: {
                        ctor: "_Tuple2",
                        _0: 4,
                        _1: 2
                    }
                } : {
                    ctor: "_Tuple2",
                    _0: Lt({
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: "480x297 prodcard",
                            _1: {
                                ctor: "_Tuple2",
                                _0: 480,
                                _1: 297
                            }
                        },
                        _1: {
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple2",
                                _0: "960x594 prodcard@2x",
                                _1: {
                                    ctor: "_Tuple2",
                                    _0: 960,
                                    _1: 594
                                }
                            },
                            _1: {
                                ctor: "::",
                                _0: {
                                    ctor: "_Tuple2",
                                    _0: "640x400 spl",
                                    _1: {
                                        ctor: "_Tuple2",
                                        _0: 640,
                                        _1: 400
                                    }
                                },
                                _1: {
                                    ctor: "::",
                                    _0: {
                                        ctor: "_Tuple2",
                                        _0: "1280x800 spl@2x",
                                        _1: {
                                            ctor: "_Tuple2",
                                            _0: 1280,
                                            _1: 800
                                        }
                                    },
                                    _1: {
                                        ctor: "::",
                                        _0: {
                                            ctor: "_Tuple2",
                                            _0: "650x170 nwlt",
                                            _1: {
                                                ctor: "_Tuple2",
                                                _0: 650,
                                                _1: 170
                                            }
                                        },
                                        _1: {
                                            ctor: "::",
                                            _0: {
                                                ctor: "_Tuple2",
                                                _0: "1300x340 nwlt@2x",
                                                _1: {
                                                    ctor: "_Tuple2",
                                                    _0: 1300,
                                                    _1: 340
                                                }
                                            },
                                            _1: {
                                                ctor: "::",
                                                _0: {
                                                    ctor: "_Tuple2",
                                                    _0: "800x418 tw",
                                                    _1: {
                                                        ctor: "_Tuple2",
                                                        _0: 800,
                                                        _1: 418
                                                    }
                                                },
                                                _1: {
                                                    ctor: "::",
                                                    _0: {
                                                        ctor: "_Tuple2",
                                                        _0: "1200x628 fb",
                                                        _1: {
                                                            ctor: "_Tuple2",
                                                            _0: 1200,
                                                            _1: 628
                                                        }
                                                    },
                                                    _1: {
                                                        ctor: "::",
                                                        _0: {
                                                            ctor: "_Tuple2",
                                                            _0: "1280x800 wprev",
                                                            _1: {
                                                                ctor: "_Tuple2",
                                                                _0: 1280,
                                                                _1: 800
                                                            }
                                                        },
                                                        _1: {
                                                            ctor: "::",
                                                            _0: {
                                                                ctor: "_Tuple2",
                                                                _0: "800x400 blog",
                                                                _1: {
                                                                    ctor: "_Tuple2",
                                                                    _0: 800,
                                                                    _1: 400
                                                                }
                                                            },
                                                            _1: {
                                                                ctor: "::",
                                                                _0: {
                                                                    ctor: "_Tuple2",
                                                                    _0: "1600x800 blog@2x",
                                                                    _1: {
                                                                        ctor: "_Tuple2",
                                                                        _0: 1600,
                                                                        _1: 800
                                                                    }
                                                                },
                                                                _1: {
                                                                    ctor: "::",
                                                                    _0: {
                                                                        ctor: "_Tuple2",
                                                                        _0: "800x155 bfoot",
                                                                        _1: {
                                                                            ctor: "_Tuple2",
                                                                            _0: 800,
                                                                            _1: 155
                                                                        }
                                                                    },
                                                                    _1: {
                                                                        ctor: "::",
                                                                        _0: {
                                                                            ctor: "_Tuple2",
                                                                            _0: "1600x310 bfoot",
                                                                            _1: {
                                                                                ctor: "_Tuple2",
                                                                                _0: 1600,
                                                                                _1: 310
                                                                            }
                                                                        },
                                                                        _1: {
                                                                            ctor: "::",
                                                                            _0: {
                                                                                ctor: "_Tuple2",
                                                                                _0: "2850x1200 landg",
                                                                                _1: {
                                                                                    ctor: "_Tuple2",
                                                                                    _0: 2850,
                                                                                    _1: 1200
                                                                                }
                                                                            },
                                                                            _1: {
                                                                                ctor: "[]"
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }),
                    _1: {
                        ctor: "_Tuple2",
                        _0: 4,
                        _1: 4
                    }
                }
            }(r.mode)
              , m = h._0
              , v = h._1
              , y = _(ua, v, _(Z, fi, {
                ctor: "::",
                _0: "browser",
                _1: Ur(m)
            }))
              , w = t(function(r, t) {
                switch (t) {
                case "window":
                case "browser":
                    return ks;
                default:
                    return _(A, ks, _(N, function(r) {
                        var t = r;
                        return xs(_(Bu, t._0, t._1))
                    }, _($r, t, m)))
                }
            });
            return function(r) {
                return {
                    ctor: "_Tuple2",
                    _0: Qu,
                    _1: r
                }
            }(ia(_(F["++"], {
                ctor: "::",
                _0: f(di, "product", ci, 0, u, p),
                _1: {
                    ctor: "::",
                    _0: s(gi, "rotation", n, r.omega, Ss),
                    _1: {
                        ctor: "::",
                        _0: f(di, "size", ci, 0, w, y),
                        _1: {
                            ctor: "::",
                            _0: _(hi, "lucky", b(Yl)),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            }, d)))
        }
          , Fs = e(function(r, t, e) {
            var n = Jl(r)
              , o = g.update(n, {
                layers: _(Z, function(r) {
                    var t = r
                      , n = t._2
                      , o = t._0;
                    return {
                        kind: o,
                        layer: _(e, o, n),
                        name: t._1,
                        model: n,
                        on: !0
                    }
                }, t)
            });
            return g.update(o, {
                gui: function() {
                    var t = r;
                    return "TronUi" === t.ctor ? E(Cs(g.update(o, {
                        mode: t._0
                    }))) : M
                }()
            })
        })
          , Ls = function(r) {
            return {
                ctor: "Resize",
                _0: r
            }
        }
          , Rs = function(r) {
            return {
                ctor: "GuiMessage",
                _0: r
            }
        }
          , As = function(r) {
            return {
                ctor: "Animate",
                _0: r
            }
        }
          , Ms = {
            ctor: "Bang"
        }
          , Ps = function(r) {
            return {
                ctor: "TronUi",
                _0: r
            }
        }
          , Es = {
            ctor: "Ads"
        }
          , Ns = {
            ctor: "Release"
        }
          , Bs = {
            ctor: "Production"
        }
          , Os = {
            ctor: "Development"
        }
          , zs = {
            ctor: "Empty"
        }
          , Is = {
            ctor: "Vignette"
        }
          , qs = {
            ctor: "Cover"
        }
          , Vs = {
            ctor: "MirroredFss"
        }
          , Ds = {
            ctor: "Fss"
        }
          , Gs = {
            ctor: "Voronoi"
        }
          , Hs = {
            ctor: "Template"
        }
          , Js = {
            ctor: "Fractal"
        }
          , Us = {
            ctor: "Lorenz"
        }
          , Ws = {
            ctor: "NoModel"
        }
          , js = function(r) {
            return {
                ctor: "FssModel",
                _0: r
            }
        }
          , Ys = function(r) {
            return {
                ctor: "LorenzModel",
                _0: r
            }
        }
          , Ks = {
            ctor: "VignetteLayer"
        }
          , Xs = t(function(r, t) {
            return {
                ctor: "MirroredFssLayer",
                _0: r,
                _1: t
            }
        })
          , Zs = t(function(r, t) {
            return {
                ctor: "FssLayer",
                _0: r,
                _1: t
            }
        })
          , $s = function(r) {
            return {
                ctor: "TemplateLayer",
                _0: r
            }
        }
          , Qs = function(r) {
            return {
                ctor: "VoronoiLayer",
                _0: r
            }
        }
          , rf = function(r) {
            return {
                ctor: "FractalLayer",
                _0: r
            }
        }
          , tf = function(r) {
            return {
                ctor: "LorenzLayer",
                _0: r
            }
        }
          , ef = {
            ctor: "CoverLayer"
        }
          , nf = t(function(r, t) {
            return {
                ctor: "SVGLayer",
                _0: r,
                _1: t
            }
        })
          , of = _(nf, {
            ctor: "NoContent"
        }, k_)
          , cf = t(function(r, t) {
            return {
                ctor: "WebGLLayer",
                _0: r,
                _1: t
            }
        })
          , uf = function(r) {
            if (_(Or, "tron-", r))
                return Ps(uf(_(Ir, 5, r)));
            switch (r) {
            case "dev":
                return Os;
            case "prod":
                return Bs;
            case "release":
                return Ns;
            case "ads":
                return Es;
            case "tron":
                return Ps(Bs);
            default:
                return Bs
            }
        }
          , af = function(r) {
            var t = r;
            switch (t.ctor) {
            case "Development":
                return "dev";
            case "Production":
                return "prod";
            case "Release":
                return "release";
            case "Ads":
                return "ads";
            default:
                return _(F["++"], "tron-", af(t._0))
            }
        }
          , _f = t(function(r, t) {
            return {
                amplitude: r.amplitude,
                colorShift: r.colorShift,
                opacity: r.opacity,
                faces: r.faces,
                lightSpeed: r.lightSpeed,
                renderMode: cl(r.renderMode),
                clip: r.clip,
                shareMesh: r.shareMesh,
                vignette: r.vignette,
                iris: r.iris,
                mirror: r.mirror
            }
        })
          , lf = function(r) {
            r: for (; ; ) {
                switch (r.ctor) {
                case "Fss":
                    return l(be, "iris", te, l(be, "vignette", te, l(be, "shareMesh", ne, l(be, "lightSpeed", ee, l(be, "clip", re(te), l(be, "mirror", ne, l(be, "opacity", te, l(be, "colorShift", re(te), l(be, "amplitude", re(te), l(be, "faces", re(ee), l(be, "renderMode", oe, me(function(r) {
                        return function(t) {
                            return function(e) {
                                return function(n) {
                                    return function(o) {
                                        return function(c) {
                                            return function(u) {
                                                return function(i) {
                                                    return function(a) {
                                                        return function(_) {
                                                            return function(l) {
                                                                var s = {
                                                                    ctor: "_Tuple5",
                                                                    _0: t,
                                                                    _1: e,
                                                                    _2: n,
                                                                    _3: o,
                                                                    _4: u
                                                                };
                                                                return "_Tuple5" === s.ctor && "::" === s._0.ctor && "::" === s._0._1.ctor && "[]" === s._0._1._1.ctor && "::" === s._1.ctor && "::" === s._1._1.ctor && "::" === s._1._1._1.ctor && "[]" === s._1._1._1._1.ctor && "::" === s._2.ctor && "::" === s._2._1.ctor && "::" === s._2._1._1.ctor && "[]" === s._2._1._1._1.ctor && "::" === s._4.ctor && "::" === s._4._1.ctor && "[]" === s._4._1._1.ctor ? js({
                                                                    renderMode: yl(r),
                                                                    faces: {
                                                                        ctor: "_Tuple2",
                                                                        _0: s._0._0,
                                                                        _1: s._0._1._0
                                                                    },
                                                                    amplitude: {
                                                                        ctor: "_Tuple3",
                                                                        _0: s._1._0,
                                                                        _1: s._1._1._0,
                                                                        _2: s._1._1._1._0
                                                                    },
                                                                    colorShift: {
                                                                        ctor: "_Tuple3",
                                                                        _0: s._2._0,
                                                                        _1: s._2._1._0,
                                                                        _2: s._2._1._1._0
                                                                    },
                                                                    opacity: s._3,
                                                                    mirror: c,
                                                                    clip: E({
                                                                        ctor: "_Tuple2",
                                                                        _0: s._4._0,
                                                                        _1: s._4._1._0
                                                                    }),
                                                                    lightSpeed: i,
                                                                    shareMesh: a,
                                                                    vignette: _,
                                                                    iris: l
                                                                }) : Ws
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }))))))))))));
                case "MirroredFss":
                    r = Ds;
                    continue r;
                default:
                    return me(Ws)
                }
            }
        }
          , sf = l(be, "v2", ee, l(be, "v1", ee, me(t(function(r, t) {
            return {
                ctor: "_Tuple2",
                _0: r,
                _1: t
            }
        }))))
          , ff = function(r) {
            switch (r) {
            case "fss":
                return Ds;
            case "fss-mirror":
                return Vs;
            case "lorenz":
                return Us;
            case "fractal":
                return Js;
            case "template":
                return Hs;
            case "voronoi":
                return Gs;
            case "cover":
                return qs;
            case "vignette":
                return Is;
            default:
                return zs
            }
        }
          , df = t(function(r, t) {
            var e = a(function(e, n, o, c, u, i, a, _, s) {
                var f = Q_(s)
                  , d = l(Fs, r, {
                    ctor: "[]"
                }, t);
                return g.update(d, {
                    background: e,
                    theta: n,
                    omega: o,
                    layers: c,
                    size: u,
                    origin: i,
                    mouse: a,
                    now: _,
                    product: f
                })
            });
            return l(be, "product", oe, l(be, "now", te, l(be, "mouse", sf, l(be, "origin", sf, l(be, "size", sf, l(be, "layers", re(function(r) {
                var t = o(function(t, e, n, o, c) {
                    var u = ff(t)
                      , i = _(A, Ws, Lr(_(Wt, lf(u), e)))
                      , a = _(r, u, i);
                    return {
                        kind: u,
                        on: o,
                        layer: function() {
                            var r = a;
                            return "WebGLLayer" === r.ctor ? _(cf, r._0, _(A, o_, Xa(c))) : _(nf, r._0, S_(c))
                        }(),
                        model: i,
                        name: n
                    }
                });
                return l(be, "blend", oe, l(be, "isOn", ne, l(be, "name", oe, l(be, "model", oe, l(be, "kind", oe, me(t))))))
            }(t)), l(be, "omega", te, l(be, "theta", te, l(be, "background", oe, me(e))))))))))
        })
          , pf = e(function(r, t, e) {
            return Lr(_(Wt, _(df, r, t), e))
        })
          , hf = t(function(r, t) {
            var e = ff(t.kind)
              , n = _(A, Ws, Lr(_(Wt, lf(e), t.model)))
              , o = _(r, e, n)
              , c = function() {
                var r = o;
                return "WebGLLayer" === r.ctor ? _(cf, r._0, _(A, o_, ue(t.blend))) : _(nf, r._0, _(A, k_, _(N, S_, ce(t.blend))))
            }();
            return {
                kind: e,
                on: t.isOn,
                layer: c,
                model: n,
                name: t.name
            }
        })
          , mf = t(function(r, t) {
            var e = uf(t.mode)
              , n = Jl(e)
              , o = g.update(n, {
                background: t.background,
                mode: e,
                now: t.now,
                theta: t.theta,
                omega: t.omega,
                layers: _(Z, hf(r), t.layers),
                size: t.size,
                origin: t.origin,
                mouse: t.mouse,
                product: Q_(t.product)
            });
            return g.update(o, {
                gui: "TronUi" === e.ctor ? E(Cs(o)) : M
            })
        })
          , gf = function(r) {
            switch (r.ctor) {
            case "Fss":
                return "fss";
            case "MirroredFss":
                return "fss-mirror";
            case "Lorenz":
                return "lorenz";
            case "Fractal":
                return "fractal";
            case "Template":
                return "template";
            case "Voronoi":
                return "voronoi";
            case "Cover":
                return "cover";
            case "Vignette":
                return "vignette";
            default:
                return "empty"
            }
        }
          , vf = t(function(r, t) {
            var e = t;
            return Et(yr(_(Z, r, {
                ctor: "::",
                _0: e._0,
                _1: {
                    ctor: "::",
                    _0: e._1,
                    _1: {
                        ctor: "::",
                        _0: e._2,
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            })))
        })
          , bf = t(function(r, t) {
            var e = t;
            return Et(yr(_(Z, r, {
                ctor: "::",
                _0: e._0,
                _1: {
                    ctor: "::",
                    _0: e._1,
                    _1: {
                        ctor: "[]"
                    }
                }
            })))
        })
          , yf = function(r) {
            return Nt(function() {
                var t = r;
                switch (t.ctor) {
                case "FssModel":
                    var e = t._0;
                    return {
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: "renderMode",
                            _1: It(cl(e.renderMode))
                        },
                        _1: {
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple2",
                                _0: "faces",
                                _1: _(bf, zt, e.faces)
                            },
                            _1: {
                                ctor: "::",
                                _0: {
                                    ctor: "_Tuple2",
                                    _0: "lightSpeed",
                                    _1: zt(e.lightSpeed)
                                },
                                _1: {
                                    ctor: "::",
                                    _0: {
                                        ctor: "_Tuple2",
                                        _0: "amplitude",
                                        _1: _(vf, Ot, e.amplitude)
                                    },
                                    _1: {
                                        ctor: "::",
                                        _0: {
                                            ctor: "_Tuple2",
                                            _0: "colorShift",
                                            _1: _(vf, Ot, e.colorShift)
                                        },
                                        _1: {
                                            ctor: "::",
                                            _0: {
                                                ctor: "_Tuple2",
                                                _0: "opacity",
                                                _1: Ot(e.opacity)
                                            },
                                            _1: {
                                                ctor: "::",
                                                _0: {
                                                    ctor: "_Tuple2",
                                                    _0: "mirror",
                                                    _1: Bt(e.mirror)
                                                },
                                                _1: {
                                                    ctor: "::",
                                                    _0: {
                                                        ctor: "_Tuple2",
                                                        _0: "clip",
                                                        _1: _(bf, Ot, _(A, fl, e.clip))
                                                    },
                                                    _1: {
                                                        ctor: "::",
                                                        _0: {
                                                            ctor: "_Tuple2",
                                                            _0: "shareMesh",
                                                            _1: Bt(e.shareMesh)
                                                        },
                                                        _1: {
                                                            ctor: "::",
                                                            _0: {
                                                                ctor: "_Tuple2",
                                                                _0: "vignette",
                                                                _1: Ot(e.vignette)
                                                            },
                                                            _1: {
                                                                ctor: "::",
                                                                _0: {
                                                                    ctor: "_Tuple2",
                                                                    _0: "iris",
                                                                    _1: Ot(e.iris)
                                                                },
                                                                _1: {
                                                                    ctor: "[]"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    };
                case "VignetteModel":
                    var n = t._0;
                    return {
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: "opacity",
                            _1: Ot(n.opacity)
                        },
                        _1: {
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple2",
                                _0: "color",
                                _1: _(vf, Ot, n.color)
                            },
                            _1: {
                                ctor: "[]"
                            }
                        }
                    };
                default:
                    return {
                        ctor: "[]"
                    }
                }
            }())
        }
          , Tf = function(r) {
            return Nt({
                ctor: "::",
                _0: {
                    ctor: "_Tuple2",
                    _0: "kind",
                    _1: function(r) {
                        return It(gf(r))
                    }(r.kind)
                },
                _1: {
                    ctor: "::",
                    _0: {
                        ctor: "_Tuple2",
                        _0: "blend",
                        _1: function() {
                            var t = r.layer;
                            return "WebGLLayer" === t.ctor ? It(Wa(t._1)) : It(c_(t._1))
                        }()
                    },
                    _1: {
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: "blendDesc",
                            _1: function() {
                                var t = r.layer;
                                return "WebGLLayer" === t.ctor ? It(_(Ga, {
                                    delim: "; ",
                                    space: "> "
                                }, t._1)) : It(c_(t._1))
                            }()
                        },
                        _1: {
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple2",
                                _0: "isOn",
                                _1: Bt(r.on)
                            },
                            _1: {
                                ctor: "::",
                                _0: {
                                    ctor: "_Tuple2",
                                    _0: "model",
                                    _1: yf(r.model)
                                },
                                _1: {
                                    ctor: "::",
                                    _0: {
                                        ctor: "_Tuple2",
                                        _0: "name",
                                        _1: It(r.name)
                                    },
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }
                        }
                    }
                }
            })
        }
          , wf = function(r) {
            return {
                kind: gf(r.kind),
                isOn: r.on,
                webglOrSvg: "WebGLLayer" === r.layer.ctor ? "webgl" : "svg",
                blend: function() {
                    var t = r.layer;
                    return "WebGLLayer" === t.ctor ? {
                        ctor: "_Tuple2",
                        _0: E(t._1),
                        _1: M
                    } : {
                        ctor: "_Tuple2",
                        _0: M,
                        _1: E(c_(t._1))
                    }
                }(),
                name: r.name,
                model: _(qt, 2, yf(r.model))
            }
        }
          , Sf = function(r) {
            return {
                background: r.background,
                mode: af(r.mode),
                now: r.now,
                theta: r.theta,
                omega: r.omega,
                layers: _(Z, wf, r.layers),
                size: r.size,
                origin: r.origin,
                mouse: r.mouse,
                palette: L_(r.product),
                product: C_(r.product)
            }
        }
          , kf = function(r) {
            var t = r;
            return Nt({
                ctor: "::",
                _0: {
                    ctor: "_Tuple2",
                    _0: "v1",
                    _1: zt(t._0)
                },
                _1: {
                    ctor: "::",
                    _0: {
                        ctor: "_Tuple2",
                        _0: "v2",
                        _1: zt(t._1)
                    },
                    _1: {
                        ctor: "[]"
                    }
                }
            })
        }
          , xf = function(r) {
            return _(qt, 2, function(r) {
                return Nt({
                    ctor: "::",
                    _0: {
                        ctor: "_Tuple2",
                        _0: "background",
                        _1: It(r.background)
                    },
                    _1: {
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: "mode",
                            _1: It(af(r.mode))
                        },
                        _1: {
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple2",
                                _0: "theta",
                                _1: Ot(r.theta)
                            },
                            _1: {
                                ctor: "::",
                                _0: {
                                    ctor: "_Tuple2",
                                    _0: "omega",
                                    _1: Ot(r.omega)
                                },
                                _1: {
                                    ctor: "::",
                                    _0: {
                                        ctor: "_Tuple2",
                                        _0: "layers",
                                        _1: Pt(_(Z, Tf, r.layers))
                                    },
                                    _1: {
                                        ctor: "::",
                                        _0: {
                                            ctor: "_Tuple2",
                                            _0: "size",
                                            _1: kf(r.size)
                                        },
                                        _1: {
                                            ctor: "::",
                                            _0: {
                                                ctor: "_Tuple2",
                                                _0: "origin",
                                                _1: kf(r.origin)
                                            },
                                            _1: {
                                                ctor: "::",
                                                _0: {
                                                    ctor: "_Tuple2",
                                                    _0: "mouse",
                                                    _1: kf(r.mouse)
                                                },
                                                _1: {
                                                    ctor: "::",
                                                    _0: {
                                                        ctor: "_Tuple2",
                                                        _0: "now",
                                                        _1: Ot(r.now)
                                                    },
                                                    _1: {
                                                        ctor: "::",
                                                        _0: {
                                                            ctor: "_Tuple2",
                                                            _0: "palette",
                                                            _1: Et(yr(_(Z, It, L_(r.product))))
                                                        },
                                                        _1: {
                                                            ctor: "::",
                                                            _0: {
                                                                ctor: "_Tuple2",
                                                                _0: "product",
                                                                _1: It(C_(r.product))
                                                            },
                                                            _1: {
                                                                ctor: "[]"
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            }(r))
        }
          , Cf = c(function(r, t, e, n, o, c) {
            var u = e
              , i = u._1
              , a = u._0
              , l = n
              , s = l._0
              , f = l._1;
            return _(Qn, {
                ctor: "::",
                _0: Rc(t),
                _1: {
                    ctor: "::",
                    _0: _(Cc, "data-stored", _(qt, 0, function(r) {
                        return Nt({
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple2",
                                _0: "scale",
                                _1: Ot(r.scale)
                            },
                            _1: {
                                ctor: "::",
                                _0: {
                                    ctor: "_Tuple2",
                                    _0: "posX",
                                    _1: Ot(r.posX)
                                },
                                _1: {
                                    ctor: "::",
                                    _0: {
                                        ctor: "_Tuple2",
                                        _0: "posY",
                                        _1: Ot(r.posY)
                                    },
                                    _1: {
                                        ctor: "::",
                                        _0: {
                                            ctor: "_Tuple2",
                                            _0: "blend",
                                            _1: It(r.blend)
                                        },
                                        _1: {
                                            ctor: "::",
                                            _0: {
                                                ctor: "_Tuple2",
                                                _0: "imagePath",
                                                _1: It(r.imagePath)
                                            },
                                            _1: {
                                                ctor: "::",
                                                _0: {
                                                    ctor: "_Tuple2",
                                                    _0: "width",
                                                    _1: zt(r.width)
                                                },
                                                _1: {
                                                    ctor: "::",
                                                    _0: {
                                                        ctor: "_Tuple2",
                                                        _0: "height",
                                                        _1: zt(r.height)
                                                    },
                                                    _1: {
                                                        ctor: "[]"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        })
                    }({
                        blend: c_(o),
                        posX: a,
                        posY: i,
                        width: s,
                        height: f,
                        imagePath: r,
                        scale: c
                    }))),
                    _1: {
                        ctor: "::",
                        _0: Bc({
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple2",
                                _0: "mix-blend-mode",
                                _1: c_(o)
                            },
                            _1: {
                                ctor: "::",
                                _0: {
                                    ctor: "_Tuple2",
                                    _0: "position",
                                    _1: "absolute"
                                },
                                _1: {
                                    ctor: "::",
                                    _0: {
                                        ctor: "_Tuple2",
                                        _0: "top",
                                        _1: "0px"
                                    },
                                    _1: {
                                        ctor: "::",
                                        _0: {
                                            ctor: "_Tuple2",
                                            _0: "left",
                                            _1: "0px"
                                        },
                                        _1: {
                                            ctor: "::",
                                            _0: {
                                                ctor: "_Tuple2",
                                                _0: "width",
                                                _1: _(F["++"], T(w(s) * c), "px")
                                            },
                                            _1: {
                                                ctor: "::",
                                                _0: {
                                                    ctor: "_Tuple2",
                                                    _0: "height",
                                                    _1: _(F["++"], T(w(f) * c), "px")
                                                },
                                                _1: {
                                                    ctor: "::",
                                                    _0: {
                                                        ctor: "_Tuple2",
                                                        _0: "transform",
                                                        _1: _(F["++"], "translate(", _(F["++"], T(a - w(s) * c / 2), _(F["++"], "px, ", _(F["++"], T(i - w(f) * c / 2), "px)"))))
                                                    },
                                                    _1: {
                                                        ctor: "::",
                                                        _0: {
                                                            ctor: "_Tuple2",
                                                            _0: "background-image",
                                                            _1: _(F["++"], 'url("', _(F["++"], r, '")'))
                                                        },
                                                        _1: {
                                                            ctor: "::",
                                                            _0: {
                                                                ctor: "_Tuple2",
                                                                _0: "background-repeat",
                                                                _1: "no-repeat"
                                                            },
                                                            _1: {
                                                                ctor: "::",
                                                                _0: {
                                                                    ctor: "_Tuple2",
                                                                    _0: "background-position",
                                                                    _1: "center center"
                                                                },
                                                                _1: {
                                                                    ctor: "::",
                                                                    _0: {
                                                                        ctor: "_Tuple2",
                                                                        _0: "background-size",
                                                                        _1: "contain"
                                                                    },
                                                                    _1: {
                                                                        ctor: "[]"
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }),
                        _1: {
                            ctor: "[]"
                        }
                    }
                }
            }, {
                ctor: "[]"
            })
        })
          , Ff = e(function(r, t, e) {
            var n = r
              , o = 90
              , c = 90
              , u = function() {
                var r = function(r) {
                    return _(N, function(r) {
                        return _(F["++"], r, ".svg")
                    }, function() {
                        var t = r;
                        return "Unknown" === t.ctor ? M : E(C_(t))
                    }())
                }($_);
                return "Just" === r.ctor ? _(F["++"], "./assets/", r._0) : ""
            }();
            return d(Cf, u, _(F["++"], "logo-layer logo-layer-", C_($_)), {
                ctor: "_Tuple2",
                _0: n._0,
                _1: n._1
            }, {
                ctor: "_Tuple2",
                _0: o,
                _1: c
            }, t, e)
        })
          , Lf = n(function(r, t, e, n) {
            var o = x_(r)
              , c = function() {
                var t = function(r) {
                    return _(N, function(r) {
                        return _(F["++"], r, "-text.svg")
                    }, function() {
                        var t = r;
                        return "Unknown" === t.ctor ? M : E(C_(t))
                    }())
                }(r);
                return "Just" === t.ctor ? _(F["++"], "./assets/", t._0) : ""
            }();
            return d(Cf, c, _(F["++"], "product-name-layer product-name-layer-", C_(r)), t, o, e, n)
        })
          , Rf = o(function(r, t, e, n, o) {
            var c = e
              , u = c._0
              , i = c._1
              , a = n
              , f = a._1
              , d = a._0
              , p = w(i) - w(f) - .1 * w(i)
              , h = w(u) - w(d) - .1 * w(i)
              , m = w(i) / 2 - w(f)
              , v = w(u) / 2 - w(d)
              , b = w(u) / 1500;
            return _(Qn, {
                ctor: "::",
                _0: Rc("cover-layer"),
                _1: {
                    ctor: "::",
                    _0: Bc({
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple2",
                            _0: "mix-blend-mode",
                            _1: c_(o)
                        },
                        _1: {
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple2",
                                _0: "position",
                                _1: "absolute"
                            },
                            _1: {
                                ctor: "::",
                                _0: {
                                    ctor: "_Tuple2",
                                    _0: "top",
                                    _1: "0px"
                                },
                                _1: {
                                    ctor: "::",
                                    _0: {
                                        ctor: "_Tuple2",
                                        _0: "left",
                                        _1: "0px"
                                    },
                                    _1: {
                                        ctor: "::",
                                        _0: {
                                            ctor: "_Tuple2",
                                            _0: "font-size",
                                            _1: _(F["++"], T(110), "px")
                                        },
                                        _1: {
                                            ctor: "::",
                                            _0: {
                                                ctor: "_Tuple2",
                                                _0: "font-family",
                                                _1: "'Gotham', Helvetica, sans-serif"
                                            },
                                            _1: {
                                                ctor: "::",
                                                _0: {
                                                    ctor: "_Tuple2",
                                                    _0: "font-weight",
                                                    _1: "170"
                                                },
                                                _1: {
                                                    ctor: "::",
                                                    _0: {
                                                        ctor: "_Tuple2",
                                                        _0: "color",
                                                        _1: "white"
                                                    },
                                                    _1: {
                                                        ctor: "[]"
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }),
                    _1: {
                        ctor: "[]"
                    }
                }
            }, g.eq(r, Bs) || g.eq(r, Ps(Bs)) ? {
                ctor: "::",
                _0: s(Lf, t, {
                    ctor: "_Tuple2",
                    _0: v,
                    _1: m
                }, o, b),
                _1: {
                    ctor: "::",
                    _0: l(Ff, {
                        ctor: "_Tuple2",
                        _0: h,
                        _1: p
                    }, o, b),
                    _1: {
                        ctor: "[]"
                    }
                }
            } : {
                ctor: "[]"
            })
        })
          , Af = (u(function(r, t, e, n, o, c, u) {
            return {
                scale: r,
                posX: t,
                posY: e,
                blend: n,
                imagePath: o,
                width: c,
                height: u
            }
        }),
        n(function(r, t, e, n) {
            var o = n.layer;
            if ("WebGLLayer" === o.ctor) {
                var c = o._1
                  , u = {
                    ctor: "_Tuple2",
                    _0: o._0,
                    _1: n.model
                };
                r: do {
                    if ("_Tuple2" !== u.ctor)
                        break r;
                    switch (u._0.ctor) {
                    case "LorenzLayer":
                        return {
                            ctor: "::",
                            _0: l(Yu, t, {
                                ctor: "::",
                                _0: uo,
                                _1: {
                                    ctor: "::",
                                    _0: e_(c),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }, u._0._0),
                            _1: {
                                ctor: "[]"
                            }
                        };
                    case "FractalLayer":
                        return {
                            ctor: "::",
                            _0: l(Sl, t, {
                                ctor: "::",
                                _0: uo,
                                _1: {
                                    ctor: "::",
                                    _0: e_(c),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }, u._0._0),
                            _1: {
                                ctor: "[]"
                            }
                        };
                    case "TemplateLayer":
                        return {
                            ctor: "::",
                            _0: l(Bl, t, {
                                ctor: "::",
                                _0: uo,
                                _1: {
                                    ctor: "::",
                                    _0: e_(c),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }, u._0._0),
                            _1: {
                                ctor: "[]"
                            }
                        };
                    case "VoronoiLayer":
                        return {
                            ctor: "::",
                            _0: l(Al, t, {
                                ctor: "::",
                                _0: uo,
                                _1: {
                                    ctor: "::",
                                    _0: e_(c),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }
                            }, u._0._0),
                            _1: {
                                ctor: "[]"
                            }
                        };
                    case "FssLayer":
                        if ("FssModel" === u._1.ctor) {
                            var i = {
                                ctor: "_Tuple2",
                                _0: u._0._0,
                                _1: u._0._1
                            }
                              , a = i._0
                              , f = i._1;
                            return {
                                ctor: "::",
                                _0: p(pl, r.now, r.mouse, F_(r.product), e, t, u._1._0, a, {
                                    ctor: "::",
                                    _0: uo,
                                    _1: {
                                        ctor: "::",
                                        _0: e_(c),
                                        _1: {
                                            ctor: "::",
                                            _0: oo,
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }
                                    }
                                }, f),
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }
                        break r;
                    case "MirroredFssLayer":
                        if ("FssModel" === u._1.ctor) {
                            var d = u._0._0
                              , h = u._0._1
                              , m = u._1._0
                              , v = g.update(m, {
                                clip: E({
                                    ctor: "_Tuple2",
                                    _0: .50001,
                                    _1: 1
                                })
                            })
                              , b = g.update(m, {
                                clip: E({
                                    ctor: "_Tuple2",
                                    _0: 0,
                                    _1: .50001
                                }),
                                mirror: !0
                            });
                            return _(F["++"], s(Af, r, t, e, g.update(n, {
                                layer: _(cf, _(Zs, d, h), c),
                                model: js(b)
                            })), s(Af, r, t, e, g.update(n, {
                                layer: _(cf, _(Zs, d, h), c),
                                model: js(v)
                            })))
                        }
                        break r;
                    default:
                        return {
                            ctor: "::",
                            _0: l(Hl, t, Dl, {
                                ctor: "::",
                                _0: uo,
                                _1: {
                                    ctor: "::",
                                    _0: e_(c),
                                    _1: {
                                        ctor: "::",
                                        _0: oo,
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                } while (0);return {
                    ctor: "[]"
                }
            }
            return {
                ctor: "[]"
            }
        }))
          , Mf = e(function(r, t, e) {
            var n = e.layer;
            return "SVGLayer" === n.ctor && "CoverLayer" === n._0.ctor ? f(Rf, r.mode, r.product, r.size, r.origin, n._1) : _(Qn, {
                ctor: "[]"
            }, {
                ctor: "[]"
            })
        })
          , Pf = function(r) {
            var e = function(r) {
                var t = r
                  , e = t.theta
                  , n = t.origin
                  , o = n._0
                  , c = n._1
                  , u = t.size
                  , i = u._0
                  , a = u._1;
                return {
                    rotation: _(ze, 3 * e, l(Pe, 0, 0, 1)),
                    perspective: s(qe, 80, 1.5, .1, 3e3),
                    camera: l(Be, l(Pe, 0, 0, .5), l(Pe, 0, 0, 0), l(Pe, 1, 0, 0)),
                    cameraTranslate: Oe(l(Pe, 0, -.35, 0)),
                    cameraRotate: _(ze, e + .5, l(Pe, 0, 0, 1)),
                    size: _(Ue, w(i), w(a)),
                    origin: _(Ue, w(o), w(c)),
                    paused: t.paused
                }
            }(function(r) {
                var t = r;
                return {
                    paused: t.paused,
                    size: t.size,
                    origin: t.origin,
                    theta: t.theta
                }
            }(r));
            return _(cr, function(t) {
                var n = t;
                return s(Af, r, e, n._0, n._1)
            }, _(dr, t(function(r, t) {
                return {
                    ctor: "_Tuple2",
                    _0: r,
                    _1: t
                }
            }), _($, function(r) {
                return r.on
            }, _($, function(r) {
                return function(r) {
                    return "WebGLLayer" === r.ctor
                }(r.layer)
            }, r.layers))))
        }
          , Ef = (t(function(r, t) {
            var e = t;
            return "Configure" === e.ctor ? _(_s, 0, Ys(e._0)) : Ss(e._0)
        }),
        t(function(r, t) {
            var e = r
              , n = t
              , o = n._1
              , c = n._0;
            return g.cmp(c, e._0) < 1 && g.cmp(o, e._1) < 1 ? E({
                ctor: "_Tuple2",
                _0: c,
                _1: o
            }) : M
        }))
          , Nf = t(function(r, t) {
            return _(A, b(Ul), _(N, function(t) {
                return function(e) {
                    return Rs(_(r, t, e))
                }
            }, t.gui))
        })
          , Bf = e(function(r, t, e) {
            var n = yr(e.layers)
              , o = _(hr, r, n);
            return "Just" === o.ctor ? g.update(e, {
                layers: br(l(pr, r, t(o._0), n))
            }) : e
        })
          , Of = e(function(r, t, e) {
            return l(Bf, r, function(r) {
                return g.update(r, {
                    layer: _(t, r.layer, r.model)
                })
            }, e)
        })
          , zf = e(function(r, t, e) {
            return l(Bf, r, function(r) {
                var e = t({
                    ctor: "_Tuple2",
                    _0: r.layer,
                    _1: r.model
                });
                return g.update(r, {
                    layer: e._0,
                    model: e._1
                })
            }, e)
        })
          , If = n(function(r, t, e, n) {
            return l(Bf, r, function(r) {
                return g.update(r, {
                    layer: function() {
                        var n = r.layer;
                        if ("WebGLLayer" === n.ctor) {
                            var o = n._1;
                            return _(cf, n._0, _(A, o, t(o)))
                        }
                        var c = n._1;
                        return _(nf, n._0, _(A, c, e(c)))
                    }()
                })
            }, n)
        })
          , qf = t(function(r, t) {
            var e = {
                ctor: "_Tuple2",
                _0: r,
                _1: t
            };
            r: do {
                if ("_Tuple2" !== e.ctor)
                    break r;
                switch (e._0.ctor) {
                case "Fss":
                    if ("FssModel" === e._1.ctor)
                        return _(cf, _(Zs, M, _(sl, e._1._0, M)), o_);
                    break r;
                case "MirroredFss":
                    if ("FssModel" === e._1.ctor)
                        return _(cf, _(Xs, M, _(sl, e._1._0, M)), o_);
                    break r;
                case "Lorenz":
                    if ("LorenzModel" === e._1.ctor)
                        return _(cf, tf(Zu(e._1._0)), o_);
                    break r;
                case "Template":
                    if ("TemplateModel" === e._1.ctor)
                        return _(cf, $s(zl(e._1._0)), o_);
                    break r;
                case "Voronoi":
                    if ("VoronoiModel" === e._1.ctor)
                        return _(cf, Qs(Pl(e._1._0)), o_);
                    break r;
                case "Fractal":
                    if ("FractalModel" === e._1.ctor)
                        return _(cf, rf(Fl(e._1._0)), o_);
                    break r;
                case "Vignette":
                    return _(cf, Ks, _(n_, {
                        ctor: "_Tuple3",
                        _0: Bo,
                        _1: xo,
                        _2: Co
                    }, {
                        ctor: "_Tuple3",
                        _0: Bo,
                        _1: yo,
                        _2: Co
                    }));
                case "Cover":
                    return _(nf, ef, k_);
                default:
                    break r
                }
            } while (0);return of
        })
          , Vf = e(function(r, t, e) {
            return l(zf, r, function(r) {
                var e = r
                  , n = e._1;
                return {
                    ctor: "_Tuple2",
                    _0: e._0,
                    _1: function() {
                        var r = n;
                        return "FssModel" === r.ctor ? js(t(r._0)) : n
                    }()
                }
            }, e)
        })
          , Df = t(function(r, t) {
            return _(N, function(r) {
                return r.model
            }, _(hr, r, yr(t.layers)))
        })
          , Gf = function(r) {
            return {
                size: r.size,
                product: C_(r.product),
                coverSize: x_(r.product),
                background: r.background
            }
        }
          , Hf = function(r) {
            return _($, function(t) {
                var e = "_Tuple2"
                  , n = t._0
                  , o = r;
                return "_Tuple2" !== e || "Cover" !== n.ctor || "Ads" !== o.ctor
            }, {
                ctor: "::",
                _0: {
                    ctor: "_Tuple3",
                    _0: Ds,
                    _1: "Lower Layer",
                    _2: js(bl)
                },
                _1: {
                    ctor: "::",
                    _0: {
                        ctor: "_Tuple3",
                        _0: Ds,
                        _1: "Mid Layer",
                        _2: js(bl)
                    },
                    _1: {
                        ctor: "::",
                        _0: {
                            ctor: "_Tuple3",
                            _0: Ds,
                            _1: "Top layer",
                            _2: function() {
                                var r = bl;
                                return js(g.update(r, {
                                    renderMode: ml,
                                    shareMesh: !0
                                }))
                            }()
                        },
                        _1: {
                            ctor: "::",
                            _0: {
                                ctor: "_Tuple3",
                                _0: qs,
                                _1: "Cover",
                                _2: Ws
                            },
                            _1: {
                                ctor: "[]"
                            }
                        }
                    }
                }
            })
        }
          , Jf = {
            ctor: "_Tuple2",
            _0: l(Fs, Bs, Hf(Bs), qf),
            _1: _e({
                ctor: "::",
                _0: _(Zo, Ls, Pu),
                _1: {
                    ctor: "[]"
                }
            })
        }
          , Uf = function(r) {
            var t = r;
            return {
                ctor: "_Tuple2",
                _0: k(1 * w(t._0)),
                _1: k(1 * w(t._1))
            }
        }
          , Wf = function(r) {
            var t = r;
            return {
                ctor: "_Tuple2",
                _0: S(0 * w(t._0) / 2),
                _1: S(0 * w(t._1) / 2)
            }
        }
          , jf = ie.incomingPort("bang", Vt({
            ctor: "_Tuple0"
        }))
          , Yf = ie.incomingPort("changeMode", oe)
          , Kf = ie.incomingPort("pause", Vt({
            ctor: "_Tuple0"
        }))
          , Xf = ie.incomingPort("continue", Vt({
            ctor: "_Tuple0"
        }))
          , Zf = ie.incomingPort("triggerPause", Vt({
            ctor: "_Tuple0"
        }))
          , $f = ie.incomingPort("hideControls", Vt({
            ctor: "_Tuple0"
        }))
          , Qf = ie.incomingPort("rotate", te)
          , rd = (ie.incomingPort("initLayers", function(r) {
            return _(Mt.decodeContainer, "array", r)
        }(oe)),
        ie.incomingPort("configureLorenz", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", _(Gt, function(r) {
            return _(Gt, function(t) {
                return _(Gt, function(e) {
                    return _(Gt, function(n) {
                        return _(Gt, function(o) {
                            return _(Gt, function(c) {
                                return Jt({
                                    sigma: r,
                                    beta: t,
                                    rho: e,
                                    step: n,
                                    numVertices: o,
                                    thickness: c
                                })
                            }, _(Zt, "thickness", te))
                        }, _(Zt, "numVertices", ee))
                    }, _(Zt, "step", te))
                }, _(Zt, "rho", te))
            }, _(Zt, "beta", te))
        }, _(Zt, "sigma", te))))))
          , td = ie.incomingPort("configureFss", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", _(Gt, function(r) {
            return _(Gt, function(t) {
                return _(Gt, function(e) {
                    return _(Gt, function(n) {
                        return _(Gt, function(o) {
                            return _(Gt, function(c) {
                                return _(Gt, function(u) {
                                    return _(Gt, function(i) {
                                        return _(Gt, function(a) {
                                            return _(Gt, function(l) {
                                                return _(Gt, function(_) {
                                                    return Jt({
                                                        renderMode: r,
                                                        amplitude: t,
                                                        colorShift: e,
                                                        opacity: n,
                                                        vignette: o,
                                                        iris: c,
                                                        faces: u,
                                                        mirror: i,
                                                        clip: a,
                                                        lightSpeed: l,
                                                        shareMesh: _
                                                    })
                                                }, _(Zt, "shareMesh", ne))
                                            }, _(Zt, "lightSpeed", ee))
                                        }, _(Zt, "clip", Kt({
                                            ctor: "::",
                                            _0: Vt(M),
                                            _1: {
                                                ctor: "::",
                                                _0: _(Yt, E, _(Gt, function(r) {
                                                    return _(Gt, function(t) {
                                                        return Jt({
                                                            ctor: "_Tuple2",
                                                            _0: r,
                                                            _1: t
                                                        })
                                                    }, _(Xt, 1, te))
                                                }, _(Xt, 0, te))),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        })))
                                    }, _(Zt, "mirror", ne))
                                }, _(Zt, "faces", _(Gt, function(r) {
                                    return _(Gt, function(t) {
                                        return Jt({
                                            ctor: "_Tuple2",
                                            _0: r,
                                            _1: t
                                        })
                                    }, _(Xt, 1, ee))
                                }, _(Xt, 0, ee))))
                            }, _(Zt, "iris", te))
                        }, _(Zt, "vignette", te))
                    }, _(Zt, "opacity", te))
                }, _(Zt, "colorShift", _(Gt, function(r) {
                    return _(Gt, function(t) {
                        return _(Gt, function(e) {
                            return Jt({
                                ctor: "_Tuple3",
                                _0: r,
                                _1: t,
                                _2: e
                            })
                        }, _(Xt, 2, te))
                    }, _(Xt, 1, te))
                }, _(Xt, 0, te))))
            }, _(Zt, "amplitude", _(Gt, function(r) {
                return _(Gt, function(t) {
                    return _(Gt, function(e) {
                        return Jt({
                            ctor: "_Tuple3",
                            _0: r,
                            _1: t,
                            _2: e
                        })
                    }, _(Xt, 2, te))
                }, _(Xt, 1, te))
            }, _(Xt, 0, te))))
        }, _(Zt, "renderMode", oe)))))
          , ed = (ie.incomingPort("configureMirroredFss", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", _(Gt, function(r) {
            return _(Gt, function(t) {
                return _(Gt, function(e) {
                    return _(Gt, function(n) {
                        return _(Gt, function(o) {
                            return _(Gt, function(c) {
                                return _(Gt, function(u) {
                                    return _(Gt, function(i) {
                                        return _(Gt, function(a) {
                                            return _(Gt, function(l) {
                                                return _(Gt, function(_) {
                                                    return Jt({
                                                        renderMode: r,
                                                        amplitude: t,
                                                        colorShift: e,
                                                        opacity: n,
                                                        vignette: o,
                                                        iris: c,
                                                        faces: u,
                                                        mirror: i,
                                                        clip: a,
                                                        lightSpeed: l,
                                                        shareMesh: _
                                                    })
                                                }, _(Zt, "shareMesh", ne))
                                            }, _(Zt, "lightSpeed", ee))
                                        }, _(Zt, "clip", Kt({
                                            ctor: "::",
                                            _0: Vt(M),
                                            _1: {
                                                ctor: "::",
                                                _0: _(Yt, E, _(Gt, function(r) {
                                                    return _(Gt, function(t) {
                                                        return Jt({
                                                            ctor: "_Tuple2",
                                                            _0: r,
                                                            _1: t
                                                        })
                                                    }, _(Xt, 1, te))
                                                }, _(Xt, 0, te))),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        })))
                                    }, _(Zt, "mirror", ne))
                                }, _(Zt, "faces", _(Gt, function(r) {
                                    return _(Gt, function(t) {
                                        return Jt({
                                            ctor: "_Tuple2",
                                            _0: r,
                                            _1: t
                                        })
                                    }, _(Xt, 1, ee))
                                }, _(Xt, 0, ee))))
                            }, _(Zt, "iris", te))
                        }, _(Zt, "vignette", te))
                    }, _(Zt, "opacity", te))
                }, _(Zt, "colorShift", _(Gt, function(r) {
                    return _(Gt, function(t) {
                        return _(Gt, function(e) {
                            return Jt({
                                ctor: "_Tuple3",
                                _0: r,
                                _1: t,
                                _2: e
                            })
                        }, _(Xt, 2, te))
                    }, _(Xt, 1, te))
                }, _(Xt, 0, te))))
            }, _(Zt, "amplitude", _(Gt, function(r) {
                return _(Gt, function(t) {
                    return _(Gt, function(e) {
                        return Jt({
                            ctor: "_Tuple3",
                            _0: r,
                            _1: t,
                            _2: e
                        })
                    }, _(Xt, 2, te))
                }, _(Xt, 1, te))
            }, _(Xt, 0, te))))
        }, _(Zt, "renderMode", oe))))),
        ie.incomingPort("changeProduct", oe))
          , nd = ie.incomingPort("rebuildFss", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    lights: r,
                    meshes: t
                })
            }, _(Zt, "meshes", re(_(Gt, function(r) {
                return _(Gt, function(t) {
                    return _(Gt, function(e) {
                        return _(Gt, function(n) {
                            return Jt({
                                geometry: r,
                                material: t,
                                position: e,
                                side: n
                            })
                        }, _(Zt, "side", te))
                    }, _(Zt, "position", re(te)))
                }, _(Zt, "material", _(Gt, function(r) {
                    return _(Gt, function(t) {
                        return _(Gt, function(e) {
                            return Jt({
                                ambient: r,
                                diffuse: t,
                                slave: e
                            })
                        }, _(Zt, "slave", _(Gt, function(r) {
                            return _(Gt, function(t) {
                                return _(Gt, function(e) {
                                    return Jt({
                                        rgba: r,
                                        hex: t,
                                        opacity: e
                                    })
                                }, _(Zt, "opacity", te))
                            }, _(Zt, "hex", oe))
                        }, _(Zt, "rgba", re(te)))))
                    }, _(Zt, "diffuse", _(Gt, function(r) {
                        return _(Gt, function(t) {
                            return _(Gt, function(e) {
                                return Jt({
                                    rgba: r,
                                    hex: t,
                                    opacity: e
                                })
                            }, _(Zt, "opacity", te))
                        }, _(Zt, "hex", oe))
                    }, _(Zt, "rgba", re(te)))))
                }, _(Zt, "ambient", _(Gt, function(r) {
                    return _(Gt, function(t) {
                        return _(Gt, function(e) {
                            return Jt({
                                rgba: r,
                                hex: t,
                                opacity: e
                            })
                        }, _(Zt, "opacity", te))
                    }, _(Zt, "hex", oe))
                }, _(Zt, "rgba", re(te)))))))
            }, _(Zt, "geometry", _(Gt, function(r) {
                return _(Gt, function(t) {
                    return _(Gt, function(e) {
                        return _(Gt, function(n) {
                            return _(Gt, function(o) {
                                return _(Gt, function(c) {
                                    return Jt({
                                        width: r,
                                        height: t,
                                        triangles: e,
                                        vertices: n,
                                        segmentWidth: o,
                                        sliceHeight: c
                                    })
                                }, _(Zt, "sliceHeight", te))
                            }, _(Zt, "segmentWidth", te))
                        }, _(Zt, "vertices", re(_(Gt, function(r) {
                            return _(Gt, function(t) {
                                return _(Gt, function(e) {
                                    return _(Gt, function(n) {
                                        return _(Gt, function(o) {
                                            return Jt({
                                                position: r,
                                                v0: t,
                                                anchor: e,
                                                time: n,
                                                gradient: o
                                            })
                                        }, _(Zt, "gradient", te))
                                    }, _(Zt, "time", te))
                                }, _(Zt, "anchor", re(te)))
                            }, _(Zt, "v0", re(te)))
                        }, _(Zt, "position", re(te))))))
                    }, _(Zt, "triangles", re(_(Gt, function(r) {
                        return _(Gt, function(t) {
                            return _(Gt, function(e) {
                                return _(Gt, function(n) {
                                    return _(Gt, function(o) {
                                        return _(Gt, function(c) {
                                            return _(Gt, function(u) {
                                                return _(Gt, function(i) {
                                                    return _(Gt, function(a) {
                                                        return Jt({
                                                            a: r,
                                                            b: t,
                                                            c: e,
                                                            centroid: n,
                                                            color: o,
                                                            normal: c,
                                                            u: u,
                                                            v: i,
                                                            vertices: a
                                                        })
                                                    }, _(Zt, "vertices", re(_(Gt, function(r) {
                                                        return _(Gt, function(t) {
                                                            return _(Gt, function(e) {
                                                                return _(Gt, function(n) {
                                                                    return _(Gt, function(o) {
                                                                        return Jt({
                                                                            position: r,
                                                                            v0: t,
                                                                            anchor: e,
                                                                            time: n,
                                                                            gradient: o
                                                                        })
                                                                    }, _(Zt, "gradient", te))
                                                                }, _(Zt, "time", te))
                                                            }, _(Zt, "anchor", re(te)))
                                                        }, _(Zt, "v0", re(te)))
                                                    }, _(Zt, "position", re(te))))))
                                                }, _(Zt, "v", re(te)))
                                            }, _(Zt, "u", re(te)))
                                        }, _(Zt, "normal", re(te)))
                                    }, _(Zt, "color", _(Gt, function(r) {
                                        return _(Gt, function(t) {
                                            return _(Gt, function(e) {
                                                return Jt({
                                                    rgba: r,
                                                    hex: t,
                                                    opacity: e
                                                })
                                            }, _(Zt, "opacity", te))
                                        }, _(Zt, "hex", oe))
                                    }, _(Zt, "rgba", re(te)))))
                                }, _(Zt, "centroid", re(te)))
                            }, _(Zt, "c", _(Gt, function(r) {
                                return _(Gt, function(t) {
                                    return _(Gt, function(e) {
                                        return _(Gt, function(n) {
                                            return _(Gt, function(o) {
                                                return Jt({
                                                    position: r,
                                                    v0: t,
                                                    anchor: e,
                                                    time: n,
                                                    gradient: o
                                                })
                                            }, _(Zt, "gradient", te))
                                        }, _(Zt, "time", te))
                                    }, _(Zt, "anchor", re(te)))
                                }, _(Zt, "v0", re(te)))
                            }, _(Zt, "position", re(te)))))
                        }, _(Zt, "b", _(Gt, function(r) {
                            return _(Gt, function(t) {
                                return _(Gt, function(e) {
                                    return _(Gt, function(n) {
                                        return _(Gt, function(o) {
                                            return Jt({
                                                position: r,
                                                v0: t,
                                                anchor: e,
                                                time: n,
                                                gradient: o
                                            })
                                        }, _(Zt, "gradient", te))
                                    }, _(Zt, "time", te))
                                }, _(Zt, "anchor", re(te)))
                            }, _(Zt, "v0", re(te)))
                        }, _(Zt, "position", re(te)))))
                    }, _(Zt, "a", _(Gt, function(r) {
                        return _(Gt, function(t) {
                            return _(Gt, function(e) {
                                return _(Gt, function(n) {
                                    return _(Gt, function(o) {
                                        return Jt({
                                            position: r,
                                            v0: t,
                                            anchor: e,
                                            time: n,
                                            gradient: o
                                        })
                                    }, _(Zt, "gradient", te))
                                }, _(Zt, "time", te))
                            }, _(Zt, "anchor", re(te)))
                        }, _(Zt, "v0", re(te)))
                    }, _(Zt, "position", re(te))))))))
                }, _(Zt, "height", ee))
            }, _(Zt, "width", ee)))))))
        }, _(Zt, "lights", re(_(Gt, function(r) {
            return _(Gt, function(t) {
                return _(Gt, function(e) {
                    return _(Gt, function(n) {
                        return _(Gt, function(o) {
                            return Jt({
                                ambient: r,
                                diffuse: t,
                                speed: e,
                                position: n,
                                ray: o
                            })
                        }, _(Zt, "ray", re(te)))
                    }, _(Zt, "position", re(te)))
                }, _(Zt, "speed", te))
            }, _(Zt, "diffuse", _(Gt, function(r) {
                return _(Gt, function(t) {
                    return _(Gt, function(e) {
                        return Jt({
                            rgba: r,
                            hex: t,
                            opacity: e
                        })
                    }, _(Zt, "opacity", te))
                }, _(Zt, "hex", oe))
            }, _(Zt, "rgba", re(te)))))
        }, _(Zt, "ambient", _(Gt, function(r) {
            return _(Gt, function(t) {
                return _(Gt, function(e) {
                    return Jt({
                        rgba: r,
                        hex: t,
                        opacity: e
                    })
                }, _(Zt, "opacity", te))
            }, _(Zt, "hex", oe))
        }, _(Zt, "rgba", re(te)))))))))))
          , od = ie.incomingPort("turnOn", ee)
          , cd = ie.incomingPort("turnOff", ee)
          , ud = ie.incomingPort("mirrorOn", ee)
          , id = ie.incomingPort("mirrorOff", ee)
          , ad = ie.incomingPort("import_", oe)
          , _d = ie.incomingPort("changeFssRenderMode", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", oe)))
          , ld = ie.incomingPort("changeFacesX", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", ee)))
          , sd = ie.incomingPort("changeFacesY", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", ee)))
          , fd = ie.incomingPort("changeLightSpeed", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", ee)))
          , dd = ie.incomingPort("changeVignette", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", te)))
          , pd = ie.incomingPort("changeIris", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", te)))
          , hd = ie.incomingPort("changeAmplitude", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", _(Gt, function(r) {
            return _(Gt, function(t) {
                return _(Gt, function(e) {
                    return Jt({
                        ctor: "_Tuple3",
                        _0: r,
                        _1: t,
                        _2: e
                    })
                }, _(Xt, 2, Kt({
                    ctor: "::",
                    _0: Vt(M),
                    _1: {
                        ctor: "::",
                        _0: _(Yt, E, te),
                        _1: {
                            ctor: "[]"
                        }
                    }
                })))
            }, _(Xt, 1, Kt({
                ctor: "::",
                _0: Vt(M),
                _1: {
                    ctor: "::",
                    _0: _(Yt, E, te),
                    _1: {
                        ctor: "[]"
                    }
                }
            })))
        }, _(Xt, 0, Kt({
            ctor: "::",
            _0: Vt(M),
            _1: {
                ctor: "::",
                _0: _(Yt, E, te),
                _1: {
                    ctor: "[]"
                }
            }
        }))))))
          , md = ie.incomingPort("shiftColor", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", _(Gt, function(r) {
            return _(Gt, function(t) {
                return _(Gt, function(e) {
                    return Jt({
                        ctor: "_Tuple3",
                        _0: r,
                        _1: t,
                        _2: e
                    })
                }, _(Xt, 2, Kt({
                    ctor: "::",
                    _0: Vt(M),
                    _1: {
                        ctor: "::",
                        _0: _(Yt, E, te),
                        _1: {
                            ctor: "[]"
                        }
                    }
                })))
            }, _(Xt, 1, Kt({
                ctor: "::",
                _0: Vt(M),
                _1: {
                    ctor: "::",
                    _0: _(Yt, E, te),
                    _1: {
                        ctor: "[]"
                    }
                }
            })))
        }, _(Xt, 0, Kt({
            ctor: "::",
            _0: Vt(M),
            _1: {
                ctor: "::",
                _0: _(Yt, E, te),
                _1: {
                    ctor: "[]"
                }
            }
        }))))))
          , gd = ie.incomingPort("changeOpacity", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    value: r,
                    layer: t
                })
            }, _(Zt, "layer", ee))
        }, _(Zt, "value", te)))
          , vd = ie.incomingPort("setCustomSize", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    ctor: "_Tuple2",
                    _0: r,
                    _1: t
                })
            }, _(Xt, 1, ee))
        }, _(Xt, 0, ee)))
          , bd = ie.incomingPort("applyRandomizer", _(Gt, function(r) {
            return _(Gt, function(t) {
                return _(Gt, function(e) {
                    return _(Gt, function(n) {
                        return _(Gt, function(o) {
                            return _(Gt, function(c) {
                                return _(Gt, function(u) {
                                    return _(Gt, function(i) {
                                        return _(Gt, function(a) {
                                            return _(Gt, function(l) {
                                                return _(Gt, function(_) {
                                                    return Jt({
                                                        background: r,
                                                        layers: t,
                                                        mode: e,
                                                        mouse: n,
                                                        now: o,
                                                        origin: c,
                                                        size: u,
                                                        theta: i,
                                                        omega: a,
                                                        product: l,
                                                        palette: _
                                                    })
                                                }, _(Zt, "palette", re(oe)))
                                            }, _(Zt, "product", oe))
                                        }, _(Zt, "omega", te))
                                    }, _(Zt, "theta", te))
                                }, _(Zt, "size", _(Gt, function(r) {
                                    return _(Gt, function(t) {
                                        return Jt({
                                            ctor: "_Tuple2",
                                            _0: r,
                                            _1: t
                                        })
                                    }, _(Xt, 1, ee))
                                }, _(Xt, 0, ee))))
                            }, _(Zt, "origin", _(Gt, function(r) {
                                return _(Gt, function(t) {
                                    return Jt({
                                        ctor: "_Tuple2",
                                        _0: r,
                                        _1: t
                                    })
                                }, _(Xt, 1, ee))
                            }, _(Xt, 0, ee))))
                        }, _(Zt, "now", te))
                    }, _(Zt, "mouse", _(Gt, function(r) {
                        return _(Gt, function(t) {
                            return Jt({
                                ctor: "_Tuple2",
                                _0: r,
                                _1: t
                            })
                        }, _(Xt, 1, ee))
                    }, _(Xt, 0, ee))))
                }, _(Zt, "mode", oe))
            }, _(Zt, "layers", re(_(Gt, function(r) {
                return _(Gt, function(t) {
                    return _(Gt, function(e) {
                        return _(Gt, function(n) {
                            return _(Gt, function(o) {
                                return _(Gt, function(c) {
                                    return Jt({
                                        kind: r,
                                        blend: t,
                                        webglOrSvg: e,
                                        isOn: n,
                                        name: o,
                                        model: c
                                    })
                                }, _(Zt, "model", oe))
                            }, _(Zt, "name", oe))
                        }, _(Zt, "isOn", ne))
                    }, _(Zt, "webglOrSvg", oe))
                }, _(Zt, "blend", _(Gt, function(r) {
                    return _(Gt, function(t) {
                        return Jt({
                            ctor: "_Tuple2",
                            _0: r,
                            _1: t
                        })
                    }, _(Xt, 1, Kt({
                        ctor: "::",
                        _0: Vt(M),
                        _1: {
                            ctor: "::",
                            _0: _(Yt, E, oe),
                            _1: {
                                ctor: "[]"
                            }
                        }
                    })))
                }, _(Xt, 0, Kt({
                    ctor: "::",
                    _0: Vt(M),
                    _1: {
                        ctor: "::",
                        _0: _(Yt, E, _(Gt, function(r) {
                            return _(Gt, function(t) {
                                return _(Gt, function(e) {
                                    return Jt({
                                        color: r,
                                        colorEq: t,
                                        alphaEq: e
                                    })
                                }, _(Zt, "alphaEq", _(Gt, function(r) {
                                    return _(Gt, function(t) {
                                        return _(Gt, function(e) {
                                            return Jt({
                                                ctor: "_Tuple3",
                                                _0: r,
                                                _1: t,
                                                _2: e
                                            })
                                        }, _(Xt, 2, ee))
                                    }, _(Xt, 1, ee))
                                }, _(Xt, 0, ee))))
                            }, _(Zt, "colorEq", _(Gt, function(r) {
                                return _(Gt, function(t) {
                                    return _(Gt, function(e) {
                                        return Jt({
                                            ctor: "_Tuple3",
                                            _0: r,
                                            _1: t,
                                            _2: e
                                        })
                                    }, _(Xt, 2, ee))
                                }, _(Xt, 1, ee))
                            }, _(Xt, 0, ee))))
                        }, _(Zt, "color", Kt({
                            ctor: "::",
                            _0: Vt(M),
                            _1: {
                                ctor: "::",
                                _0: _(Yt, E, _(Gt, function(r) {
                                    return _(Gt, function(t) {
                                        return _(Gt, function(e) {
                                            return _(Gt, function(n) {
                                                return Jt({
                                                    r: r,
                                                    g: t,
                                                    b: e,
                                                    a: n
                                                })
                                            }, _(Zt, "a", te))
                                        }, _(Zt, "b", te))
                                    }, _(Zt, "g", te))
                                }, _(Zt, "r", te))),
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        })))),
                        _1: {
                            ctor: "[]"
                        }
                    }
                })))))
            }, _(Zt, "kind", oe)))))
        }, _(Zt, "background", oe)))
          , yd = ie.incomingPort("savePng", Vt({
            ctor: "_Tuple0"
        }))
          , Td = ie.incomingPort("changeWGLBlend", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    layer: r,
                    value: t
                })
            }, _(Zt, "value", _(Gt, function(r) {
                return _(Gt, function(t) {
                    return _(Gt, function(e) {
                        return Jt({
                            color: r,
                            colorEq: t,
                            alphaEq: e
                        })
                    }, _(Zt, "alphaEq", _(Gt, function(r) {
                        return _(Gt, function(t) {
                            return _(Gt, function(e) {
                                return Jt({
                                    ctor: "_Tuple3",
                                    _0: r,
                                    _1: t,
                                    _2: e
                                })
                            }, _(Xt, 2, ee))
                        }, _(Xt, 1, ee))
                    }, _(Xt, 0, ee))))
                }, _(Zt, "colorEq", _(Gt, function(r) {
                    return _(Gt, function(t) {
                        return _(Gt, function(e) {
                            return Jt({
                                ctor: "_Tuple3",
                                _0: r,
                                _1: t,
                                _2: e
                            })
                        }, _(Xt, 2, ee))
                    }, _(Xt, 1, ee))
                }, _(Xt, 0, ee))))
            }, _(Zt, "color", Kt({
                ctor: "::",
                _0: Vt(M),
                _1: {
                    ctor: "::",
                    _0: _(Yt, E, _(Gt, function(r) {
                        return _(Gt, function(t) {
                            return _(Gt, function(e) {
                                return _(Gt, function(n) {
                                    return Jt({
                                        r: r,
                                        g: t,
                                        b: e,
                                        a: n
                                    })
                                }, _(Zt, "a", te))
                            }, _(Zt, "b", te))
                        }, _(Zt, "g", te))
                    }, _(Zt, "r", te))),
                    _1: {
                        ctor: "[]"
                    }
                }
            })))))
        }, _(Zt, "layer", ee)))
          , wd = ie.incomingPort("changeSVGBlend", _(Gt, function(r) {
            return _(Gt, function(t) {
                return Jt({
                    layer: r,
                    value: t
                })
            }, _(Zt, "value", oe))
        }, _(Zt, "layer", ee)))
          , Sd = ie.outgoingPort("startGui", function(r) {
            return {
                background: r.background,
                layers: B.toArray(r.layers).map(function(r) {
                    return {
                        kind: r.kind,
                        blend: ["Nothing" === r.blend._0.ctor ? null : {
                            color: "Nothing" === r.blend._0._0.color.ctor ? null : {
                                r: r.blend._0._0.color._0.r,
                                g: r.blend._0._0.color._0.g,
                                b: r.blend._0._0.color._0.b,
                                a: r.blend._0._0.color._0.a
                            },
                            colorEq: [r.blend._0._0.colorEq._0, r.blend._0._0.colorEq._1, r.blend._0._0.colorEq._2],
                            alphaEq: [r.blend._0._0.alphaEq._0, r.blend._0._0.alphaEq._1, r.blend._0._0.alphaEq._2]
                        }, "Nothing" === r.blend._1.ctor ? null : r.blend._1._0],
                        webglOrSvg: r.webglOrSvg,
                        isOn: r.isOn,
                        name: r.name,
                        model: r.model
                    }
                }),
                mode: r.mode,
                mouse: [r.mouse._0, r.mouse._1],
                now: r.now,
                origin: [r.origin._0, r.origin._1],
                size: [r.size._0, r.size._1],
                theta: r.theta,
                omega: r.omega,
                product: r.product,
                palette: B.toArray(r.palette).map(function(r) {
                    return r
                })
            }
        })
          , kd = ie.outgoingPort("requestFssRebuild", function(r) {
            return {
                layer: r.layer,
                model: {
                    background: r.model.background,
                    layers: B.toArray(r.model.layers).map(function(r) {
                        return {
                            kind: r.kind,
                            blend: ["Nothing" === r.blend._0.ctor ? null : {
                                color: "Nothing" === r.blend._0._0.color.ctor ? null : {
                                    r: r.blend._0._0.color._0.r,
                                    g: r.blend._0._0.color._0.g,
                                    b: r.blend._0._0.color._0.b,
                                    a: r.blend._0._0.color._0.a
                                },
                                colorEq: [r.blend._0._0.colorEq._0, r.blend._0._0.colorEq._1, r.blend._0._0.colorEq._2],
                                alphaEq: [r.blend._0._0.alphaEq._0, r.blend._0._0.alphaEq._1, r.blend._0._0.alphaEq._2]
                            }, "Nothing" === r.blend._1.ctor ? null : r.blend._1._0],
                            webglOrSvg: r.webglOrSvg,
                            isOn: r.isOn,
                            name: r.name,
                            model: r.model
                        }
                    }),
                    mode: r.model.mode,
                    mouse: [r.model.mouse._0, r.model.mouse._1],
                    now: r.model.now,
                    origin: [r.model.origin._0, r.model.origin._1],
                    size: [r.model.size._0, r.model.size._1],
                    theta: r.model.theta,
                    omega: r.model.omega,
                    product: r.model.product,
                    palette: B.toArray(r.model.palette).map(function(r) {
                        return r
                    })
                },
                value: {
                    renderMode: r.value.renderMode,
                    amplitude: [r.value.amplitude._0, r.value.amplitude._1, r.value.amplitude._2],
                    colorShift: [r.value.colorShift._0, r.value.colorShift._1, r.value.colorShift._2],
                    opacity: r.value.opacity,
                    vignette: r.value.vignette,
                    iris: r.value.iris,
                    faces: [r.value.faces._0, r.value.faces._1],
                    mirror: r.value.mirror,
                    clip: "Nothing" === r.value.clip.ctor ? null : [r.value.clip._0._0, r.value.clip._0._1],
                    lightSpeed: r.value.lightSpeed,
                    shareMesh: r.value.shareMesh
                }
            }
        })
          , xd = e(function(r, t, e) {
            var n = l(Vf, r, t, e);
            return {
                ctor: "_Tuple2",
                _0: n,
                _1: function() {
                    var t = _(Df, r, n);
                    return "Just" === t.ctor && "FssModel" === t._0.ctor ? kd({
                        layer: r,
                        model: Sf(n),
                        value: _(_f, t._0._0, n.product)
                    }) : le
                }()
            }
        })
          , Cd = function(r) {
            var e = Sf(r)
              , n = t(function(t, n) {
                return kd({
                    layer: t,
                    model: e,
                    value: _(_f, n, r.product)
                })
            });
            return {
                ctor: "_Tuple2",
                _0: r,
                _1: _e(_(dr, n, _(rr, function(r) {
                    var t = r.model;
                    return "FssModel" === t.ctor ? E(t._0) : M
                }, r.layers)))
            }
        }
          , Fd = ie.outgoingPort("presetSizeChanged", function(r) {
            return {
                size: [r.size._0, r.size._1],
                product: r.product,
                coverSize: [r.coverSize._0, r.coverSize._1],
                background: r.background
            }
        })
          , Ld = ie.outgoingPort("export_", function(r) {
            return r
        })
          , Rd = ie.outgoingPort("exportZip_", function(r) {
            return r
        })
          , Ad = ie.outgoingPort("triggerSavePng", function(r) {
            return {
                size: [r.size._0, r.size._1],
                product: r.product,
                coverSize: [r.coverSize._0, r.coverSize._1],
                background: r.background
            }
        })
          , Md = ie.outgoingPort("requestRandomize", function(r) {
            return {
                background: r.background,
                layers: B.toArray(r.layers).map(function(r) {
                    return {
                        kind: r.kind,
                        blend: ["Nothing" === r.blend._0.ctor ? null : {
                            color: "Nothing" === r.blend._0._0.color.ctor ? null : {
                                r: r.blend._0._0.color._0.r,
                                g: r.blend._0._0.color._0.g,
                                b: r.blend._0._0.color._0.b,
                                a: r.blend._0._0.color._0.a
                            },
                            colorEq: [r.blend._0._0.colorEq._0, r.blend._0._0.colorEq._1, r.blend._0._0.colorEq._2],
                            alphaEq: [r.blend._0._0.alphaEq._0, r.blend._0._0.alphaEq._1, r.blend._0._0.alphaEq._2]
                        }, "Nothing" === r.blend._1.ctor ? null : r.blend._1._0],
                        webglOrSvg: r.webglOrSvg,
                        isOn: r.isOn,
                        name: r.name,
                        model: r.model
                    }
                }),
                mode: r.mode,
                mouse: [r.mouse._0, r.mouse._1],
                now: r.now,
                origin: [r.origin._0, r.origin._1],
                size: [r.size._0, r.size._1],
                theta: r.theta,
                omega: r.omega,
                product: r.product,
                palette: B.toArray(r.palette).map(function(r) {
                    return r
                })
            }
        })
          , Pd = ie.outgoingPort("requestFitToWindow", function(r) {
            return null
        })
          , Ed = t(function(r, e) {
            r: for (; ; ) {
                var n = r;
                switch (n.ctor) {
                case "Bang":
                    return {
                        ctor: "_Tuple2",
                        _0: e,
                        _1: Sd(Sf(e))
                    };
                case "ChangeMode":
                    var o = n._0;
                    return {
                        ctor: "_Tuple2",
                        _0: l(Fs, o, Hf(o), qf),
                        _1: _e({
                            ctor: "::",
                            _0: _(Zo, Ls, Pu),
                            _1: {
                                ctor: "[]"
                            }
                        })
                    };
                case "GuiMessage":
                    var c = e.gui;
                    if ("Just" === c.ctor) {
                        var u = s(Aa, Ed, e, n._0, c._0)
                          , i = u._0._0
                          , a = u._0._1
                          , f = u._1;
                        return {
                            ctor: "_Tuple2",
                            _0: g.update(i, {
                                gui: E(f)
                            }),
                            _1: a
                        }
                    }
                    return {
                        ctor: "_Tuple2",
                        _0: e,
                        _1: le
                    };
                case "Animate":
                    var d = n._0;
                    return {
                        ctor: "_Tuple2",
                        _0: g.update(e, {
                            fps: k(1e3 / d),
                            theta: e.autoRotate || e.paused ? e.theta : e.theta + d * e.omega / 1e3,
                            now: e.paused ? e.now : e.now + d + e.timeShift
                        }),
                        _1: le
                    };
                case "Pause":
                    return {
                        ctor: "_Tuple2",
                        _0: g.update(e, {
                            paused: !0
                        }),
                        _1: le
                    };
                case "Continue":
                    return {
                        ctor: "_Tuple2",
                        _0: g.update(e, {
                            paused: !1
                        }),
                        _1: le
                    };
                case "TriggerPause":
                    return {
                        ctor: "_Tuple2",
                        _0: g.update(e, {
                            paused: !e.paused
                        }),
                        _1: le
                    };
                case "HideControls":
                    return {
                        ctor: "_Tuple2",
                        _0: g.update(e, {
                            controlsVisible: !1
                        }),
                        _1: le
                    };
                case "Import":
                    return Cd(_(A, e, l(pf, e.mode, qf, n._0)));
                case "Export":
                    return {
                        ctor: "_Tuple2",
                        _0: e,
                        _1: Ld(xf(e))
                    };
                case "ExportZip":
                    return {
                        ctor: "_Tuple2",
                        _0: e,
                        _1: Rd(xf(e))
                    };
                case "TimeTravel":
                    return {
                        ctor: "_Tuple2",
                        _0: g.update(e, {
                            timeShift: n._0
                        }),
                        _1: le
                    };
                case "BackToNow":
                    return {
                        ctor: "_Tuple2",
                        _0: g.update(e, {
                            timeShift: 0
                        }),
                        _1: le
                    };
                case "Rotate":
                    return {
                        ctor: "_Tuple2",
                        _0: g.update(e, {
                            omega: n._0
                        }),
                        _1: le
                    };
                case "Resize":
                    var p = n._0.width
                      , h = n._0.height;
                    return {
                        ctor: "_Tuple2",
                        _0: g.update(e, {
                            size: Uf({
                                ctor: "_Tuple2",
                                _0: p,
                                _1: h
                            }),
                            origin: Wf({
                                ctor: "_Tuple2",
                                _0: p,
                                _1: h
                            })
                        }),
                        _1: le
                    };
                case "ResizeFromPreset":
                    var m = n._0.width
                      , v = n._0.height;
                    return {
                        ctor: "_Tuple2",
                        _0: i = g.update(e, {
                            size: Uf({
                                ctor: "_Tuple2",
                                _0: m,
                                _1: v
                            }),
                            origin: Wf({
                                ctor: "_Tuple2",
                                _0: m,
                                _1: v
                            })
                        }),
                        _1: Fd(Gf(i))
                    };
                case "RequestFitToWindow":
                    return {
                        ctor: "_Tuple2",
                        _0: e,
                        _1: Pd({
                            ctor: "_Tuple0"
                        })
                    };
                case "Locate":
                    var b = g.update(e, {
                        mouse: n._0
                    });
                    r = _(A, Ul, _(N, function(r) {
                        return Rs(_(Ba, r, {
                            x: n._0._0,
                            y: n._0._1
                        }))
                    }, b.gui)),
                    e = b;
                    continue r;
                case "TurnOn":
                    return {
                        ctor: "_Tuple2",
                        _0: l(Bf, n._0, function(r) {
                            return g.update(r, {
                                on: !0
                            })
                        }, e),
                        _1: le
                    };
                case "TurnOff":
                    return {
                        ctor: "_Tuple2",
                        _0: l(Bf, n._0, function(r) {
                            return g.update(r, {
                                on: !1
                            })
                        }, e),
                        _1: le
                    };
                case "MirrorOn":
                    return {
                        ctor: "_Tuple2",
                        _0: l(Bf, n._0, function(r) {
                            var t = r.layer;
                            if ("WebGLLayer" === t.ctor) {
                                var e = t._0;
                                return "FssLayer" === e.ctor ? g.update(r, {
                                    layer: _(cf, _(Xs, e._0, e._1), t._1),
                                    kind: Vs
                                }) : r
                            }
                            return r
                        }, e),
                        _1: le
                    };
                case "MirrorOff":
                    return {
                        ctor: "_Tuple2",
                        _0: l(Bf, n._0, function(r) {
                            var t = r.layer;
                            if ("WebGLLayer" === t.ctor) {
                                var e = t._0;
                                return "MirroredFssLayer" === e.ctor ? g.update(r, {
                                    layer: _(cf, _(Zs, e._0, e._1), t._1),
                                    kind: Ds
                                }) : r
                            }
                            return r
                        }, e),
                        _1: le
                    };
                case "ChangeProduct":
                    return Cd(g.update(e, {
                        product: n._0
                    }));
                case "Configure":
                    return {
                        ctor: "_Tuple2",
                        _0: l(Of, n._0, t(function(r, t) {
                            var e = r;
                            if ("WebGLLayer" === e.ctor) {
                                var n = e._0;
                                return _(cf, function() {
                                    var r = {
                                        ctor: "_Tuple2",
                                        _0: n,
                                        _1: t
                                    };
                                    t: do {
                                        if ("_Tuple2" !== r.ctor)
                                            break t;
                                        switch (r._0.ctor) {
                                        case "LorenzLayer":
                                            if ("LorenzModel" === r._1.ctor)
                                                return tf(Zu(r._1._0));
                                            break t;
                                        case "FractalLayer":
                                            if ("FractalModel" === r._1.ctor)
                                                return rf(Fl(r._1._0));
                                            break t;
                                        case "VoronoiLayer":
                                            if ("VoronoiModel" === r._1.ctor)
                                                return Qs(Pl(r._1._0));
                                            break t;
                                        case "FssLayer":
                                            if ("FssModel" === r._1.ctor) {
                                                var e = r._0._0
                                                  , o = _(sl, r._1._0, e);
                                                return _(Zs, e, o)
                                            }
                                            break t;
                                        case "MirroredFssLayer":
                                            if ("FssModel" === r._1.ctor) {
                                                var c = r._0._0;
                                                o = _(sl, r._1._0, c);
                                                return _(Xs, c, o)
                                            }
                                            break t;
                                        case "TemplateLayer":
                                            if ("TemplateModel" === r._1.ctor)
                                                return $s(zl(r._1._0));
                                            break t;
                                        default:
                                            if ("VignetteModel" === r._1.ctor)
                                                return Ks;
                                            break t
                                        }
                                    } while (0);return n
                                }(), e._1)
                            }
                            return r
                        }), e),
                        _1: le
                    };
                case "ChangeWGLBlend":
                    return {
                        ctor: "_Tuple2",
                        _0: s(If, n._0, function(r) {
                            return E(n._1)
                        }, function(r) {
                            return M
                        }, e),
                        _1: le
                    };
                case "AlterWGLBlend":
                    return {
                        ctor: "_Tuple2",
                        _0: s(If, n._0, function(r) {
                            return E(n._1(r))
                        }, function(r) {
                            return M
                        }, e),
                        _1: le
                    };
                case "ChangeSVGBlend":
                    return {
                        ctor: "_Tuple2",
                        _0: s(If, n._0, function(r) {
                            return M
                        }, function(r) {
                            return E(n._1)
                        }, e),
                        _1: le
                    };
                case "ChangeFssRenderMode":
                    return l(xd, n._0, function(r) {
                        return g.update(r, {
                            renderMode: n._1
                        })
                    }, e);
                case "ChangeFaces":
                    return l(xd, n._0, function(r) {
                        return g.update(r, {
                            faces: n._1
                        })
                    }, e);
                case "AlterFaces":
                    return l(xd, n._0, function(r) {
                        var t = r.faces
                          , e = t._0
                          , o = t._1;
                        return g.update(r, {
                            faces: {
                                ctor: "_Tuple2",
                                _0: _(A, e, n._1._0),
                                _1: _(A, o, n._1._1)
                            }
                        })
                    }, e);
                case "ChangeLightSpeed":
                    return l(xd, n._0, function(r) {
                        return g.update(r, {
                            lightSpeed: n._1
                        })
                    }, e);
                case "RebuildFss":
                    var y = n._1;
                    return {
                        ctor: "_Tuple2",
                        _0: l(Of, n._0, t(function(r, t) {
                            var e = r;
                            if ("WebGLLayer" === e.ctor) {
                                var n = e._1
                                  , o = {
                                    ctor: "_Tuple2",
                                    _0: e._0,
                                    _1: t
                                };
                                t: do {
                                    if ("_Tuple2" !== o.ctor || "FssModel" !== o._1.ctor)
                                        break t;
                                    switch (o._0.ctor) {
                                    case "FssLayer":
                                        var c = E(y)
                                          , u = _(sl, o._1._0, c);
                                        return _(cf, _(Zs, c, u), n);
                                    case "MirroredFssLayer":
                                        c = E(y),
                                        u = _(sl, o._1._0, c);
                                        return _(cf, _(Xs, c, u), n);
                                    default:
                                        break t
                                    }
                                } while (0);return r
                            }
                            return r
                        }), e),
                        _1: le
                    };
                case "ChangeVignette":
                    return {
                        ctor: "_Tuple2",
                        _0: l(Vf, n._0, function(r) {
                            return g.update(r, {
                                vignette: n._1
                            })
                        }, e),
                        _1: le
                    };
                case "ChangeIris":
                    return {
                        ctor: "_Tuple2",
                        _0: l(Vf, n._0, function(r) {
                            return g.update(r, {
                                iris: n._1
                            })
                        }, e),
                        _1: le
                    };
                case "AlterAmplitude":
                    return l(xd, n._0, function(r) {
                        var t = r.amplitude
                          , e = t._0
                          , o = t._1
                          , c = t._2;
                        return g.update(r, {
                            amplitude: {
                                ctor: "_Tuple3",
                                _0: _(A, e, n._1._0),
                                _1: _(A, o, n._1._1),
                                _2: _(A, c, n._1._2)
                            }
                        })
                    }, e);
                case "ShiftColor":
                    return {
                        ctor: "_Tuple2",
                        _0: l(Vf, n._0, function(r) {
                            var t = r.colorShift
                              , e = t._0
                              , o = t._1
                              , c = t._2;
                            return g.update(r, {
                                colorShift: {
                                    ctor: "_Tuple3",
                                    _0: _(A, e, n._1._0),
                                    _1: _(A, o, n._1._1),
                                    _2: _(A, c, n._1._2)
                                }
                            })
                        }, e),
                        _1: le
                    };
                case "ChangeOpacity":
                    return {
                        ctor: "_Tuple2",
                        _0: l(Vf, n._0, function(r) {
                            return g.update(r, {
                                opacity: n._1
                            })
                        }, e),
                        _1: le
                    };
                case "SavePng":
                    return {
                        ctor: "_Tuple2",
                        _0: e,
                        _1: Ad(Gf(e))
                    };
                case "Randomize":
                    return {
                        ctor: "_Tuple2",
                        _0: e,
                        _1: Md(Sf(e))
                    };
                case "ApplyRandomizer":
                    return Cd(_(mf, qf, n._0));
                default:
                    return {
                        ctor: "_Tuple2",
                        _0: e,
                        _1: le
                    }
                }
            }
        })
          , Nd = Kn({
            init: Jf,
            view: function(r) {
                return _(Qn, {
                    ctor: "[]"
                }, {
                    ctor: "::",
                    _0: _(Qn, {
                        ctor: "::",
                        _0: Rc("svg-layers"),
                        _1: {
                            ctor: "[]"
                        }
                    }, function(r) {
                        return _(dr, Mf(r), _($, function(r) {
                            return r.on
                        }, _($, function(r) {
                            return function(r) {
                                return "WebGLLayer" !== r.ctor
                            }(r.layer)
                        }, r.layers)))
                    }(r)),
                    _1: {
                        ctor: "::",
                        _0: r.controlsVisible ? _(Qn, {
                            ctor: "::",
                            _0: Rc("overlay-panel import-export-panel hide-on-space"),
                            _1: {
                                ctor: "[]"
                            }
                        }, {
                            ctor: "::",
                            _0: _(Qn, {
                                ctor: "::",
                                _0: Rc("timeline_holder"),
                                _1: {
                                    ctor: "[]"
                                }
                            }, {
                                ctor: "::",
                                _0: _(ro, {
                                    ctor: "::",
                                    _0: Rc("label past"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }, {
                                    ctor: "::",
                                    _0: Zn("past"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: _(eo, {
                                        ctor: "::",
                                        _0: Ac("range"),
                                        _1: {
                                            ctor: "::",
                                            _0: Rc("timeline"),
                                            _1: {
                                                ctor: "::",
                                                _0: Ec("0"),
                                                _1: {
                                                    ctor: "::",
                                                    _0: Pc("100"),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: Mc(function(r) {
                                                            return T(r / 500 * 100 + 50)
                                                        }(r.timeShift)),
                                                        _1: {
                                                            ctor: "::",
                                                            _0: Vc(function(r) {
                                                                return function(r) {
                                                                    return {
                                                                        ctor: "TimeTravel",
                                                                        _0: r
                                                                    }
                                                                }(function(r) {
                                                                    return (_(Rr, 0, Nr(r)) - 50) / 100 * 500
                                                                }(r))
                                                            }),
                                                            _1: {
                                                                ctor: "::",
                                                                _0: function(r) {
                                                                    return _(qc, "mouseup", Jt(r))
                                                                }(ys),
                                                                _1: {
                                                                    ctor: "[]"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }, {
                                        ctor: "[]"
                                    }),
                                    _1: {
                                        ctor: "::",
                                        _0: _(ro, {
                                            ctor: "::",
                                            _0: Rc("label future"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }, {
                                            ctor: "::",
                                            _0: Zn("future"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }),
                            _1: {
                                ctor: "::",
                                _0: _(eo, {
                                    ctor: "::",
                                    _0: Ac("button"),
                                    _1: {
                                        ctor: "::",
                                        _0: Rc("export_html5"),
                                        _1: {
                                            ctor: "::",
                                            _0: Dc(Ts),
                                            _1: {
                                                ctor: "::",
                                                _0: Mc("warp in html5"),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }
                                    }
                                }, {
                                    ctor: "::",
                                    _0: Zn("Export to html5.zip"),
                                    _1: {
                                        ctor: "[]"
                                    }
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: _(eo, {
                                        ctor: "::",
                                        _0: Ac("button"),
                                        _1: {
                                            ctor: "::",
                                            _0: Rc("export_png"),
                                            _1: {
                                                ctor: "::",
                                                _0: Dc(Wl),
                                                _1: {
                                                    ctor: "::",
                                                    _0: Mc("blast to png"),
                                                    _1: {
                                                        ctor: "[]"
                                                    }
                                                }
                                            }
                                        }
                                    }, {
                                        ctor: "::",
                                        _0: Zn("Export to png"),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }),
                                    _1: {
                                        ctor: "::",
                                        _0: _(Qn, {
                                            ctor: "::",
                                            _0: Rc("spacebar_info"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }, {
                                            ctor: "::",
                                            _0: Zn("spacebar to hide controls, click to pause"),
                                            _1: {
                                                ctor: "[]"
                                            }
                                        }),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }
                        }) : _(Qn, {
                            ctor: "[]"
                        }, {
                            ctor: "[]"
                        }),
                        _1: {
                            ctor: "::",
                            _0: l(io, {
                                ctor: "::",
                                _0: po,
                                _1: {
                                    ctor: "::",
                                    _0: mo(!0),
                                    _1: {
                                        ctor: "::",
                                        _0: s(fo, 0, 0, 0, 1),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }
                                }
                            }, {
                                ctor: "::",
                                _0: Rc("webgl-layers"),
                                _1: {
                                    ctor: "::",
                                    _0: function(r) {
                                        return _(Cc, "width", T(r))
                                    }(ue(r.size)),
                                    _1: {
                                        ctor: "::",
                                        _0: function(r) {
                                            return _(Cc, "height", T(r))
                                        }(ce(r.size)),
                                        _1: {
                                            ctor: "::",
                                            _0: Bc({
                                                ctor: "::",
                                                _0: {
                                                    ctor: "_Tuple2",
                                                    _0: "display",
                                                    _1: "block"
                                                },
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }),
                                            _1: {
                                                ctor: "::",
                                                _0: Dc(gs),
                                                _1: {
                                                    ctor: "[]"
                                                }
                                            }
                                        }
                                    }
                                }
                            }, Pf(r)),
                            _1: {
                                ctor: "::",
                                _0: _(A, _(Qn, {
                                    ctor: "[]"
                                }, {
                                    ctor: "[]"
                                }), _(N, function(r) {
                                    return _(Qn, {
                                        ctor: "::",
                                        _0: Rc("hide-on-space"),
                                        _1: {
                                            ctor: "[]"
                                        }
                                    }, {
                                        ctor: "::",
                                        _0: r,
                                        _1: {
                                            ctor: "[]"
                                        }
                                    })
                                }, _(N, Xn(Rs), _(N, Oa, r.gui)))),
                                _1: {
                                    ctor: "[]"
                                }
                            }
                        }
                    }
                })
            },
            subscriptions: function(r) {
                return fe({
                    ctor: "::",
                    _0: jf(function(r) {
                        return Ms
                    }),
                    _1: {
                        ctor: "::",
                        _0: function(r) {
                            return hc(yc(r))
                        }(As),
                        _1: {
                            ctor: "::",
                            _0: function(r) {
                                return Nu(Ou(r))
                            }(Ls),
                            _1: {
                                ctor: "::",
                                _0: function(r) {
                                    return jc(_(Qc, "mousemove", r))
                                }(function(t) {
                                    var e = t;
                                    return _(A, Ul, _(N, function(r) {
                                        return function(r) {
                                            return {
                                                ctor: "Locate",
                                                _0: r
                                            }
                                        }(r)
                                    }, _(Ef, r.size, {
                                        ctor: "_Tuple2",
                                        _0: e.x,
                                        _1: e.y
                                    })))
                                }),
                                _1: {
                                    ctor: "::",
                                    _0: function(r) {
                                        return jc(_(Qc, "mousedown", r))
                                    }(_(Nf, Ea, r)),
                                    _1: {
                                        ctor: "::",
                                        _0: function(r) {
                                            return jc(_(Qc, "mouseup", r))
                                        }(_(Nf, Na, r)),
                                        _1: {
                                            ctor: "::",
                                            _0: Qf(Ss),
                                            _1: {
                                                ctor: "::",
                                                _0: ed(function(r) {
                                                    return hs(Q_(r))
                                                }),
                                                _1: {
                                                    ctor: "::",
                                                    _0: _d(function(r) {
                                                        var t = r;
                                                        return _(ns, t.layer, yl(t.value))
                                                    }),
                                                    _1: {
                                                        ctor: "::",
                                                        _0: ld(function(t) {
                                                            var e = t
                                                              , n = e.layer
                                                              , o = _(Df, n, r);
                                                            if ("Just" === o.ctor && "FssModel" === o._0.ctor) {
                                                                var c = o._0._0.faces;
                                                                return _(es, n, {
                                                                    ctor: "_Tuple2",
                                                                    _0: e.value,
                                                                    _1: c._1
                                                                })
                                                            }
                                                            return Ul
                                                        }),
                                                        _1: {
                                                            ctor: "::",
                                                            _0: sd(function(t) {
                                                                var e = t
                                                                  , n = e.layer
                                                                  , o = _(Df, n, r);
                                                                if ("Just" === o.ctor && "FssModel" === o._0.ctor) {
                                                                    var c = o._0._0.faces;
                                                                    return _(es, n, {
                                                                        ctor: "_Tuple2",
                                                                        _0: c._0,
                                                                        _1: e.value
                                                                    })
                                                                }
                                                                return Ul
                                                            }),
                                                            _1: {
                                                                ctor: "::",
                                                                _0: fd(function(r) {
                                                                    var t = r;
                                                                    return _(rs, t.layer, t.value)
                                                                }),
                                                                _1: {
                                                                    ctor: "::",
                                                                    _0: hd(function(r) {
                                                                        var t = r;
                                                                        return _(Zl, t.layer, t.value)
                                                                    }),
                                                                    _1: {
                                                                        ctor: "::",
                                                                        _0: md(function(r) {
                                                                            var t = r;
                                                                            return _(Xl, t.layer, t.value)
                                                                        }),
                                                                        _1: {
                                                                            ctor: "::",
                                                                            _0: gd(function(r) {
                                                                                var t = r;
                                                                                return _(Kl, t.layer, t.value)
                                                                            }),
                                                                            _1: {
                                                                                ctor: "::",
                                                                                _0: dd(function(r) {
                                                                                    var t = r;
                                                                                    return _(Ql, t.layer, t.value)
                                                                                }),
                                                                                _1: {
                                                                                    ctor: "::",
                                                                                    _0: pd(function(r) {
                                                                                        var t = r;
                                                                                        return _($l, t.layer, t.value)
                                                                                    }),
                                                                                    _1: {
                                                                                        ctor: "::",
                                                                                        _0: Yf(function(r) {
                                                                                            return function(r) {
                                                                                                return {
                                                                                                    ctor: "ChangeMode",
                                                                                                    _0: r
                                                                                                }
                                                                                            }(uf(r))
                                                                                        }),
                                                                                        _1: {
                                                                                            ctor: "::",
                                                                                            _0: vd(function(t) {
                                                                                                var e = t
                                                                                                  , n = e._0
                                                                                                  , o = e._1
                                                                                                  , c = g.cmp(n, 0) > 0 && g.cmp(o, 0) > 0 ? {
                                                                                                    ctor: "_Tuple2",
                                                                                                    _0: n,
                                                                                                    _1: o
                                                                                                } : r.size
                                                                                                  , u = c._0
                                                                                                  , i = c._1;
                                                                                                return xs(_(Bu, u, i))
                                                                                            }),
                                                                                            _1: {
                                                                                                ctor: "::",
                                                                                                _0: Td(function(r) {
                                                                                                    var t = r;
                                                                                                    return _(as, t.layer, t.value)
                                                                                                }),
                                                                                                _1: {
                                                                                                    ctor: "::",
                                                                                                    _0: wd(function(r) {
                                                                                                        var t = r;
                                                                                                        return _(cs, t.layer, S_(t.value))
                                                                                                    }),
                                                                                                    _1: {
                                                                                                        ctor: "::",
                                                                                                        _0: rd(function(r) {
                                                                                                            var t = r;
                                                                                                            return _(_s, t.layer, Ys(t.value))
                                                                                                        }),
                                                                                                        _1: {
                                                                                                            ctor: "::",
                                                                                                            _0: td(function(r) {
                                                                                                                var t = r;
                                                                                                                return _(_s, t.layer, js(function(r) {
                                                                                                                    return g.update(r, {
                                                                                                                        renderMode: yl(r.renderMode)
                                                                                                                    })
                                                                                                                }(t.value)))
                                                                                                            }),
                                                                                                            _1: {
                                                                                                                ctor: "::",
                                                                                                                _0: nd(function(r) {
                                                                                                                    var t = r;
                                                                                                                    return _(os, t.layer, t.value)
                                                                                                                }),
                                                                                                                _1: {
                                                                                                                    ctor: "::",
                                                                                                                    _0: bd(jl),
                                                                                                                    _1: {
                                                                                                                        ctor: "::",
                                                                                                                        _0: ad(ws),
                                                                                                                        _1: {
                                                                                                                            ctor: "::",
                                                                                                                            _0: Kf(function(r) {
                                                                                                                                return bs
                                                                                                                            }),
                                                                                                                            _1: {
                                                                                                                                ctor: "::",
                                                                                                                                _0: Xf(function(r) {
                                                                                                                                    return vs
                                                                                                                                }),
                                                                                                                                _1: {
                                                                                                                                    ctor: "::",
                                                                                                                                    _0: Zf(function(r) {
                                                                                                                                        return gs
                                                                                                                                    }),
                                                                                                                                    _1: {
                                                                                                                                        ctor: "::",
                                                                                                                                        _0: $f(function(r) {
                                                                                                                                            return ms
                                                                                                                                        }),
                                                                                                                                        _1: {
                                                                                                                                            ctor: "::",
                                                                                                                                            _0: od(ds),
                                                                                                                                            _1: {
                                                                                                                                                ctor: "::",
                                                                                                                                                _0: cd(fs),
                                                                                                                                                _1: {
                                                                                                                                                    ctor: "::",
                                                                                                                                                    _0: ud(ss),
                                                                                                                                                    _1: {
                                                                                                                                                        ctor: "::",
                                                                                                                                                        _0: id(ls),
                                                                                                                                                        _1: {
                                                                                                                                                            ctor: "::",
                                                                                                                                                            _0: yd(function(r) {
                                                                                                                                                                return Wl
                                                                                                                                                            }),
                                                                                                                                                            _1: {
                                                                                                                                                                ctor: "[]"
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                }
                                                                                                                                            }
                                                                                                                                        }
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                    }
                                                                                                }
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                })
            },
            update: Ed
        })()
          , Bd = (n(function(r, t, e, n) {
            return {
                size: r,
                product: t,
                coverSize: e,
                background: n
            }
        }),
        {});
        if (Bd.Main = Bd.Main || {},
        void 0 !== Nd && Nd(Bd.Main, "Main", void 0),
        "function" == typeof define && define.amd)
            define([], function() {
                return Bd
            });
        else if ("object" != typeof r) {
            var Od = this.Elm;
            if (void 0 !== Od)
                for (var zd in Bd) {
                    if (zd in Od)
                        throw new Error("There are two Elm modules called `" + zd + "` on this page! Rename one of them.");
                    Od[zd] = Bd[zd]
                }
            else
                this.Elm = Bd
        } else
            r.exports = Bd
    }
    ).call(this)
}
]);
