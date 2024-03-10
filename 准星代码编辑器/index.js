(()=>{
  "use strict";
  const e = function() {
      return void 0 !== e.loggedIn ? e.loggedIn : null !== function(e) {
          for (var t = document.cookie.split(";"), n = 0; n < t.length; n++) {
              var r = t[n].split("=");
              if ("loggedIn" == r[0].trim())
                  return decodeURIComponent(r[1])
          }
          return null
      }() ? (e.loggedIn = !0,
      !0) : (e.loggedIn = !1,
      !1)
  }
    , t = function(e) {
      navigator.clipboard ? navigator.clipboard.writeText(e) : alert(e)
  };
  window.addEventListener("load", (()=>{
      document.documentElement.clientWidth < 768 && document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, initial-scale=0.75"),
      document.querySelectorAll(".preload").forEach((e=>e.classList.remove("preload")));
      // const t = document.querySelector("header > ul.menu > li > a.headerProfile");
      // t && !e() && t.setAttribute("href", "./login")
  }
  ));
  const n = {
      "0:p": ["general.adsUsePrimary", 0, 1, !0, e=>0 !== e],
      "0:c": ["general.overwriteAllPrimary", 0, 1, !0, e=>0 !== e],
      "0:s": ["general.advancedOptions", 0, 1, !0, e=>0 !== e],
      "P:c": ["primary.color", 0, 8, !0],
      "P:u": ["primary.hexColor.value", 0, 4294967295, !0, e=>i(e)],
      "P:h": ["primary.outlines.enabled", 0, 1, !0, e=>0 !== e],
      "P:t": ["primary.outlines.width", 1, 6, !0],
      "P:o": ["primary.outlines.alpha", 0, 1, !1],
      "P:d": ["primary.dot.enabled", 0, 1, !0, e=>0 !== e],
      "P:b": ["primary.hexColor.enabled", 0, 1, !0, e=>0 !== e],
      "P:z": ["primary.dot.width", 1, 6, !0],
      "P:a": ["primary.dot.alpha", 0, 1, !1],
      "P:f": ["general.hideOnFire", 0, 1, !0, e=>0 !== e],
      "P:s": ["general.followSpectating", 0, 1, !0, e=>0 !== e],
      "P:m": ["primary.overwriteFireMul", 0, 1, !0, e=>0 !== e],
      "P:0b": ["primary.inner.enabled", 0, 1, !0, e=>0 !== e],
      "P:0t": ["primary.inner.width", 0, 10, !0],
      "P:0l": ["primary.inner.length", 0, 20, !0],
      "P:0v": ["primary.inner.vertical.length", 0, 20, !0],
      "P:0g": ["primary.inner.vertical.enabled", 0, 1, !0, e=>0 !== e],
      "P:0o": ["primary.inner.offset", 0, 20, !0],
      "P:0a": ["primary.inner.alpha", 0, 1, !1],
      "P:0m": ["primary.inner.moveMul.enabled", 0, 1, !0, e=>0 !== e],
      "P:0f": ["primary.inner.fireMul.enabled", 0, 1, !0, e=>0 !== e],
      "P:0s": ["primary.inner.moveMul.mul", 0, 3, !1],
      "P:0e": ["primary.inner.fireMul.mul", 0, 3, !1],
      "P:1b": ["primary.outer.enabled", 0, 1, !0, e=>0 !== e],
      "P:1t": ["primary.outer.width", 0, 10, !0],
      "P:1l": ["primary.outer.length", 0, 10, !0],
      "P:1v": ["primary.outer.vertical.length", 0, 20, !0],
      "P:1g": ["primary.outer.vertical.enabled", 0, 1, !0, e=>0 !== e],
      "P:1o": ["primary.outer.offset", 0, 40, !0],
      "P:1a": ["primary.outer.alpha", 0, 1, !1],
      "P:1m": ["primary.outer.moveMul.enabled", 0, 1, !0, e=>0 !== e],
      "P:1f": ["primary.outer.fireMul.enabled", 0, 1, !0, e=>0 !== e],
      "P:1s": ["primary.outer.moveMul.mul", 0, 3, !1],
      "P:1e": ["primary.outer.fireMul.mul", 0, 3, !1],
      "A:c": ["ads.color", 0, 8, !0],
      "A:u": ["ads.hexColor.value", 0, 4294967295, !0, e=>i(e)],
      "A:h": ["ads.outlines.enabled", 0, 1, !0, e=>0 !== e],
      "A:t": ["ads.outlines.width", 1, 6, !0],
      "A:o": ["ads.outlines.alpha", 0, 1, !1],
      "A:d": ["ads.dot.enabled", 0, 1, !0, e=>0 !== e],
      "A:b": ["ads.hexColor.enabled", 0, 1, !0, e=>0 !== e],
      "A:z": ["ads.dot.width", 1, 6, !0],
      "A:a": ["ads.dot.alpha", 0, 1, !1],
      "A:m": ["ads.overwriteFireMul", 0, 1, !0, e=>0 !== e],
      "A:0b": ["ads.inner.enabled", 0, 1, !0, e=>0 !== e],
      "A:0t": ["ads.inner.width", 0, 10, !0],
      "A:0l": ["ads.inner.length", 0, 20, !0],
      "A:0v": ["ads.inner.vertical.length", 0, 20, !0],
      "A:0g": ["ads.inner.vertical.enabled", 0, 1, !0, e=>0 !== e],
      "A:0o": ["ads.inner.offset", 0, 20, !0],
      "A:0a": ["ads.inner.alpha", 0, 1, !1],
      "A:0m": ["ads.inner.moveMul.enabled", 0, 1, !0, e=>0 !== e],
      "A:0f": ["ads.inner.fireMul.enabled", 0, 1, !0, e=>0 !== e],
      "A:0s": ["ads.inner.moveMul.mul", 0, 3, !1],
      "A:0e": ["ads.inner.fireMul.mul", 0, 3, !1],
      "A:1b": ["ads.outer.enabled", 0, 1, !0, e=>0 !== e],
      "A:1t": ["ads.outer.width", 0, 10, !0],
      "A:1l": ["ads.outer.length", 0, 10, !0],
      "A:1v": ["ads.outer.vertical.length", 0, 20, !0],
      "A:1g": ["ads.outer.vertical.enabled", 0, 1, !0, e=>0 !== e],
      "A:1o": ["ads.outer.offset", 0, 40, !0],
      "A:1a": ["ads.outer.alpha", 0, 1, !1],
      "A:1m": ["ads.outer.moveMul.enabled", 0, 1, !0, e=>0 !== e],
      "A:1f": ["ads.outer.fireMul.enabled", 0, 1, !0, e=>0 !== e],
      "A:1s": ["ads.outer.moveMul.mul", 0, 3, !1],
      "A:1e": ["ads.outer.fireMul.mul", 0, 3, !1],
      "S:b": ["sniper.hexColor.enabled", 0, 1, !0, e=>0 !== e],
      "S:c": ["sniper.color", 0, 8, !0],
      "S:t": ["sniper.hexColor.value", 0, 4294967295, !0, e=>i(e)],
      "S:d": ["sniper.dot.enabled", 0, 1, !0, e=>0 !== e],
      "S:s": ["sniper.dot.width", 0, 4, !1],
      "S:o": ["sniper.dot.alpha", 0, 1, !1]
  }
    , r = ["P", "A", "S"]
    , l = {
      general: {
          advancedOptions: !1,
          adsUsePrimary: !0,
          overwriteAllPrimary: !1,
          hideOnFire: !0,
          followSpectating: !0
      },
      primary: {
          color: 0,
          useCustomColor: !1,
          hexColor: {
              enabled: !1,
              value: "FFFFFFFF"
          },
          outlines: {
              enabled: !0,
              width: 1,
              alpha: .5
          },
          dot: {
              enabled: !1,
              width: 2,
              alpha: 1
          },
          overwriteFireMul: !1,
          inner: {
              enabled: !0,
              width: 2,
              length: 6,
              vertical: {
                  enabled: !1,
                  length: 6
              },
              offset: 3,
              alpha: .8,
              moveMul: {
                  enabled: !1,
                  mul: 1
              },
              fireMul: {
                  enabled: !0,
                  mul: 1
              }
          },
          outer: {
              enabled: !0,
              width: 2,
              length: 2,
              vertical: {
                  enabled: !1,
                  length: 2
              },
              offset: 10,
              alpha: .35,
              moveMul: {
                  enabled: !0,
                  mul: 1
              },
              fireMul: {
                  enabled: !0,
                  mul: 1
              }
          }
      },
      ads: {
          color: 0,
          useCustomColor: !1,
          hexColor: {
              enabled: !1,
              value: "FFFFFFFF"
          },
          outlines: {
              enabled: !0,
              width: 1,
              alpha: .5
          },
          dot: {
              enabled: !1,
              width: 2,
              alpha: 1
          },
          overwriteFireMul: !1,
          inner: {
              enabled: !0,
              width: 2,
              length: 6,
              vertical: {
                  enabled: !1,
                  length: 6
              },
              offset: 3,
              alpha: .8,
              moveMul: {
                  enabled: !1,
                  mul: 1
              },
              fireMul: {
                  enabled: !0,
                  mul: 1
              }
          },
          outer: {
              enabled: !0,
              width: 2,
              length: 2,
              vertical: {
                  enabled: !1,
                  length: 2
              },
              offset: 10,
              alpha: .35,
              moveMul: {
                  enabled: !0,
                  mul: 1
              },
              fireMul: {
                  enabled: !0,
                  mul: 1
              }
          }
      },
      sniper: {
          color: 7,
          useCustomColor: !1,
          hexColor: {
              enabled: !1,
              value: "FFFFFFFF"
          },
          dot: {
              enabled: !0,
              width: 1,
              alpha: .75
          }
      }
  }
    , a = ["#ffffff", "#00ff00", "#7fff00", "#dfff00", "#ffff00", "#00ffff", "#ff00ff", "#ff0000"]
    , o = ["White", "Green", "Yellow Green", "Green Yellow", "Yellow", "Cyan", "Pink", "Red", "Custom"]
    , i = function(e) {
      let t = e.toString(16).toUpperCase();
      return t.length < 8 && (t = "0".repeat(8 - t.length) + t),
      t
  }
    , d = function(e, t, n) {
      const r = t.split(".");
      for (var l = e, a = 0; a < r.length - 1; a++)
          l = l[r[a]];
      l[r[r.length - 1]] = n
  }
    , u = function(e, t) {
      try {
          const l = t.split(".");
          for (var n = e, r = 0; r < l.length - 1; r++)
              n = n[l[r]];
          return n[l[l.length - 1]]
      } catch (e) {
          return
      }
  }
    , c = function(e) {
      return u(l, e)
  }
    , s = /^[0-9A-F]{8}$/g
    , h = function(e, t) {
      if (e.length > t + 1) {
          if (8 === e[t + 1].length && e[t + 1].match(s))
              return parseInt(e[t + 1], 16);
          const n = parseFloat(e[t + 1]);
          if (!isNaN(n))
              return n
      }
      return !1
  }
    , m = function(e) {
      return e = e.trim(),
      !!/^0[a-zA-Z0-9;.]*$/.test(e) && !!e.startsWith("0") && e
  }
    , p = function(e) {
      var t = v(l, e, e.general.advancedOptions, e.general.adsUsePrimary);
      if (0 === Object.keys(t).length)
          return "0";
      var r = "0"
        , a = "0";
      for (var o in n) {
          var i = u(t, n[o][0]);
          void 0 !== i && ("boolean" == typeof i && (i = i ? 1 : 0),
          a != o.charAt(0) && (r += ";" + (a = o.charAt(0))),
          r += ";" + o.split(":")[1] + ";" + i)
      }
      return r
  }
    , v = function(e, t, n, r) {
      if ("enabled"in t && !t.enabled)
          return e.enabled ? {
              enabled: !1
          } : {};
      var l = {};
      for (var a in t.hexColor && (t.hexColor.enabled = 8 === t.color),
      t) {
          if (!n && ("ads" === a || "sniper" === a))
              continue;
          if (r && "ads" === a)
              continue;
          const o = e[a]
            , i = t[a];
          if ("object" == typeof i) {
              const e = v(o, i, r);
              0 !== Object.keys(e).length && (l[a] = e)
          } else
              o !== i && (l[a] = i)
      }
      return l
  }
    , g = function(e) {
      if (!(e = m(e)))
          throw "This is not a valid crosshair!";
      return f(e)
  }
    , f = function(e) {
      const t = e.split(";");
      var a = JSON.parse(JSON.stringify(l));
      if (t.length <= 1)
          return a;
      var o = "0"
        , i = [];
      const d = t.length;
      for (var u = 1; u < d; u += 2) {
          if (r.includes(t[u])) {
              if (o = t[u],
              u--,
              i.includes(o))
                  return console.error("got category " + o + " twice? skipping rest"),
                  a;
              i.push(o);
              continue
          }
          const e = h(t, u);
          if (!1 === e) {
              console.error("ignoring invalid key: " + t[u]);
              continue
          }
          const l = o + ":" + t[u]
            , d = n[l];
          if (!d) {
              console.error("ignoring unmapped key: " + l);
              continue
          }
          if (d[3] && !Number.isInteger(e)) {
              console.error("ignoring non-int value: " + l + "=" + e);
              continue
          }
          if (e < d[1] || e > d[2]) {
              console.error("ignoring out of bounds value: " + l + "=" + e);
              continue
          }
          const m = d[0].split(".");
          for (var c = a, s = 0; s < m.length - 1; s++)
              c = c[m[s]];
          c[m[m.length - 1]] = d.length >= 5 ? d[4](e) : e
      }
      return a
  }
    , b = function(e, t, n=!1, r="primary") {
      const l = e
        , o = t.getContext("2d")
        , i = t.width / 2;
      switch (o.imageSmoothingEnabled = !1,
      o.clearRect(0, 0, t.width, t.height),
      o.strokeStyle = "#000",
      o.globalAlpha = .03,
      o.strokeText("vcrdb.net", 0, t.height),
      r) {
      case "primary":
      case "ads":
          {
              const t = (e = e[l.general.adsUsePrimary ? "primary" : r]).outlines
                , c = {
                  xy: .5 * t.width,
                  wh: 1 * t.width
              };
              8 == e.color ? o.fillStyle = "#" + e.hexColor.value.substr(0, 6) : o.fillStyle = a[e.color],
              o.lineWidth = t.width;
              const s = ["inner", "dot", "outer"];
              for (var d in s) {
                  const r = s[d];
                  if ("dot" === r) {
                      if (e.dot.enabled) {
                          const {width: n, alpha: r} = e.dot;
                          o.globalAlpha = r;
                          const l = i - Math.ceil(n / 2);
                          o.fillRect(l, l, n, n),
                          t.enabled && (o.globalAlpha = t.alpha,
                          o.strokeRect(l - c.xy, l - c.xy, n + c.wh, n + c.wh))
                      }
                  } else {
                      const a = e[r];
                      if (a.enabled) {
                          let {width: r, length: d, alpha: s, fireMul: h} = a;
                          var u = a.offset;
                          h.enabled && !e.overwriteFireMul && (u += 4);
                          const m = r % 2;
                          y(o, i + u, Math.floor(i - r / 2), d, r, c, t, s),
                          y(o, i - u - d - m, Math.floor(i - r / 2), d, r, c, t, s),
                          a.vertical.enabled && (d = a.vertical.length),
                          y(o, Math.floor(i - r / 2), i + u, r, d, c, t, s),
                          n && l.general.hideOnFire || y(o, Math.floor(i - r / 2), i - u - d - m, r, d, c, t, s)
                      }
                  }
              }
              break
          }
      case "sniper":
          e = e[r],
          o.globalAlpha = 1,
          o.fillStyle = "#0003",
          o.fillRect(0, i - 1, 2 * i, 2),
          o.fillRect(i - 1, 0, 2, 2 * i),
          e.dot.enabled && (o.globalAlpha = e.dot.alpha,
          8 == e.color ? o.fillStyle = "#" + e.hexColor.value.substr(0, 6) : o.fillStyle = a[e.color],
          o.beginPath(),
          o.arc(i, i, 3 * e.dot.width, 0, 2 * Math.PI),
          o.fill())
      }
      return t
  }
    , y = function(e, t, n, r, l, a, o, i) {
      e.globalAlpha = i,
      e.fillRect(t, n, r, l),
      o.enabled && 0 !== r && 0 !== l && (e.globalAlpha = o.alpha,
      e.strokeRect(t - a.xy, n - a.xy, r + a.wh, l + a.wh))
  }
    , A = {
      green: "Green Box",
      metall: "Metal",
      blaugelb: "Blue/Yellow",
      yellow: "Yellow",
      orange: "Orange/White",
      blue: "Blue/White",
      grass: "Grass",
      sky: "Sky"
  };
  function w(e, t, n, r=!1, l) {
      if (!1 === t)
          return console.error("invalid code: " + t),
          !1;
      void 0 !== e && (e = e.trim());
      const a = m(t);
      if (!a)
          return console.error("invalid code: " + a),
          !1;
      const o = document.createElement("DIV");
      o.classList.add("x-hair-container");
      const i = document.createElement("X-HAIR");
      if (i.attr_code = a,
      i.attr_name = e,
      o.appendChild(i),
      void 0 !== e) {
          const t = document.createElement("H2");
          t.innerText = e,
          o.appendChild(t)
      }
      const d = document.createElement("IMG");
      d.src = "./img/bgs/" + (void 0 === n ? "default" : n) + ".webp",
      i.appendChild(d);
      const u = ()=>function(e, t, n) {
          if (!t.attr_code)
              return !1;
          const r = t.attr_code;
          try {
              const e = function(e, t=!1, n=128) {
                  try {
                      const r = g(e);
                      if (t && !r.general.hideOnFire)
                          return !1;
                      const l = document.createElement("CANVAS");
                      return l.width = l.height = n,
                      b(r, l, t)
                  } catch (e) {
                      console.error(e)
                  }
                  return !1
              }(r, n);
              return !1 !== e && (t.appendChild(e),
              !0)
          } catch (e) {
              console.error("Invalid crosshair code: " + r),
              console.error(e)
          }
          return !1
      }(0, i, r);
      if (l)
          o.lazyLoader = u,
          l.observe(o);
      else if (!u())
          return !1;
      return o
  }
  window.addEventListener("load", (()=>{
      document.getElementById("builderCopy").addEventListener("click", (e=>{
          t(p(document.getElementById("builderCustomize").currentParsed))
      }
      )),
      document.getElementById("builderPaste").addEventListener("click", (e=>function() {
          const e = e=>E(m(e))
            , t = function() {
              const t = prompt("Your browser doesn't support reading from your clipboard. Please paste your code here.");
              e(t)
          };
          try {
              navigator.clipboard.readText().then((t=>e(t))).catch((e=>t()))
          } catch (e) {
              t()
          }
      }())),
      document.getElementById("builderRandomize").addEventListener("click", (e=>function() {
          const e = document.getElementById("builderCustomize").currentParsed;
          e.general.advancedOptions = !1,
          document.getElementById("builderCustomize").lastCode = p(e);
          const t = e=>e.enabled && e.alpha > .5 && (void 0 === e.length || void 0 === e.width || 0 !== e.length && 0 !== e.width);
          do {
              for (var r in n) {
                  if (!r.startsWith("P:") || P.includes(r))
                      continue;
                  const t = n[r];
                  var l;
                  t[3] ? l = Math.floor(t[1] + Math.random() * (t[2] - t[1] + 1)) : (l = t[1] + Math.random() * (t[2] - t[1]),
                  l = Math.round(1e3 * l) / 1e3),
                  d(e, t[0], t.length >= 5 ? t[4](l) : l)
              }
          } while (!t(e.primary.inner) && !t(e.primary.outer) && !t(e.primary.dot));
          E(p(e))
      }())),
      // document.getElementById("builderShare").addEventListener("click", (e=>{
      //     const n = p(document.getElementById("builderCustomize").currentParsed);
      //     t(document.location.origin + document.location.pathname + "?c=" + n),
      //     history.replaceState({}, "", "builder?c=" + n)
      // }
      // )),
      // document.documentElement.addEventListener("mouseleave", (e=>{
      //     e.clientY > 0 || history.replaceState({}, "", "builder?c=" + p(document.getElementById("builderCustomize").currentParsed))
      // }
      // )),
      document.addEventListener("keydown", (e=>{
          e.ctrlKey && "z" === e.key && void 0 !== document.getElementById("builderCustomize").lastCode && E(document.getElementById("builderCustomize").lastCode)
      }
      )),
      function() {
          const e = document.getElementById("builderResize")
            , t = document.getElementById("builderImage");
          let n, r = !1;
          const l = function(t) {
              r = !1,
              document.body.removeEventListener("mouseup", l),
              e.removeEventListener("mousemove", n)
          };
          n = function(e) {
              r ? t.style.flexBasis = 100 * e.clientX / window.innerWidth + "%" : l()
          }
          ,
          e.addEventListener("mousedown", (e=>{
              r = !0,
              document.body.addEventListener("mousemove", n),
              document.body.addEventListener("mouseup", l)
          }
          ))
      }(),
      function(e, t, r) {
          e.images = t;
          const l = e.querySelectorAll(".x-hair-toggle");
          for (var i = 0; i < l.length; i++) {
              const t = l[i];
              if (0 !== t.children.length || !t.hasAttribute("binding"))
                  continue;
              const r = t.getAttribute("binding")
                , a = n[r]
                , o = c(a[0])
                , d = document.createElement("BUTTON")
                , u = document.createElement("BUTTON");
              d.innerText = "On",
              u.innerText = "Off",
              o && t.classList.add("x-checked"),
              d.addEventListener("click", (n=>{
                  t.classList.add("x-checked"),
                  k(e, a, 1)
              }
              )),
              u.addEventListener("click", (n=>{
                  t.classList.remove("x-checked"),
                  k(e, a, 0)
              }
              )),
              t.appendChild(d),
              t.appendChild(u),
              t.updateValue = function(e, n) {
                  n ? t.classList.add("x-checked") : t.classList.remove("x-checked")
              }
          }
          const d = e.querySelectorAll(".x-hair-slider");
          for (i = 0; i < d.length; i++) {
              const t = d[i];
              if (0 !== t.children.length || !t.hasAttribute("binding"))
                  continue;
              const r = t.hasAttribute("bindinglink")
                , l = t.getAttribute("binding")
                , a = n[l]
                , o = c(a[0])
                , u = r ? t.getAttribute("bindinglink") : null
                , s = r ? t.getAttribute("bindinglinked") : null
                , h = r ? n[u] : null
                , m = r ? n[s] : null
                , p = document.createElement("INPUT")
                , v = r ? document.createElement("INPUT") : null
                , g = r ? document.createElement("BUTTON") : null
                , f = document.createElement("INPUT")
                , b = r ? document.createElement("INPUT") : null;
              p.setAttribute("type", "text"),
              p.value = o,
              f.setAttribute("type", "range"),
              f.setAttribute("min", a[1]),
              f.setAttribute("max", a[2]),
              f.setAttribute("step", a[3] ? 1 : .001),
              f.setAttribute("value", o),
              r && (v.setAttribute("type", "text"),
              v.value = o,
              g.innerHTML = '<span class="material-icons">link</span>',
              g.classList.add("link"),
              g.value = "true",
              g.set = e=>g.value = e,
              g.get = ()=>"true" === g.value,
              g.toggle = ()=>(g.value = !g.get(),
              g.get()),
              b.setAttribute("type", "range"),
              b.setAttribute("min", a[1]),
              b.setAttribute("max", a[2]),
              b.setAttribute("step", a[3] ? 1 : .001),
              b.setAttribute("value", o)),
              p.addEventListener("change", (n=>{
                  isNaN(p.value) ? p.value = f.value : (f.value = p.value,
                  p.value = f.value,
                  k(e, a, f.value),
                  r && g.get() && t.updateValue(s, f.value))
              }
              )),
              f.addEventListener("input", (n=>{
                  p.value = f.value,
                  k(e, a, f.value),
                  r && g.get() && t.updateValue(s, f.value)
              }
              )),
              r && (v.addEventListener("change", (t=>{
                  g.get() && (g.toggle(),
                  g.querySelector("span").innerText = "link_off",
                  k(e, h, 1)),
                  isNaN(v.value) ? v.value = b.value : (b.value = v.value,
                  v.value = b.value,
                  k(e, m, b.value))
              }
              )),
              g.addEventListener("click", (t=>{
                  const n = g.toggle();
                  g.querySelector("span").innerText = n ? "link" : "link_off",
                  n ? (v.value = f.value,
                  b.value = f.value) : (v.value = F(e, m),
                  b.value = F(e, m)),
                  k(e, h, n ? 0 : 1)
              }
              )),
              b.addEventListener("input", (t=>{
                  g.get() && (g.toggle(),
                  g.querySelector("span").innerText = "link_off",
                  k(e, h, 1)),
                  v.value = b.value,
                  k(e, m, b.value)
              }
              ))),
              t.appendChild(p),
              r && t.appendChild(v),
              t.appendChild(f),
              r && (t.appendChild(g),
              t.appendChild(b)),
              t.updateValue = function(e, t) {
                  r ? e === l ? (p.value = t,
                  f.value = t) : e === u ? (t = !t,
                  g.set(t),
                  g.querySelector("span").innerText = t ? "link" : "link_off",
                  t && (v.value = f.value,
                  b.value = f.value)) : e === s && (v.value = t,
                  b.value = t) : (p.value = t,
                  f.value = t)
              }
          }
          const u = e.querySelectorAll(".x-hair-drop");
          for (i = 0; i < u.length; i++) {
              const t = u[i];
              if (0 !== t.children.length || !t.hasAttribute("binding"))
                  continue;
              const r = t.getAttribute("binding")
                , l = n[r]
                , d = c(l[0])
                , h = document.createElement("SELECT");
              if (h.classList.add("x-hair-drop-content"),
              t.colorPickerHook = ()=>null,
              t.hasAttribute("colorpicker")) {
                  const n = t.getAttribute("colorpicker")
                    , r = e.querySelector('.x-hair-color[binding="' + n + '"]');
                  t.colorPickerHook = ()=>{
                      "Custom" !== h.options[h.value].innerText && r.updateValue(n, a[h.value], !0)
                  }
              }
              h.addEventListener("change", (n=>{
                  k(e, l, h.value),
                  t.colorPickerHook()
              }
              ));
              for (var s = l[1]; s <= l[2]; s++) {
                  const e = document.createElement("OPTION");
                  e.value = s,
                  e.innerText = o[s],
                  s === d && e.setAttribute("selected", ""),
                  h.appendChild(e)
              }
              t.appendChild(h),
              t.updateValue = function(e, n) {
                  h.value = n,
                  t.colorPickerHook()
              }
          }
          const h = e.querySelectorAll(".x-hair-color");
          for (i = 0; i < h.length; i++) {
              const t = h[i];
              if (0 !== t.children.length || !t.hasAttribute("binding"))
                  continue;
              const r = t.getAttribute("binding")
                , l = n[r];
              if (c(l[0]),
              t.colorDropHook = ()=>null,
              t.hasAttribute("colordrop")) {
                  const r = t.getAttribute("colordrop")
                    , l = e.querySelector('.x-hair-drop[binding="' + r + '"]')
                    , a = l.getAttribute("binding")
                    , o = n[a];
                  t.innerSelect = l.querySelector("select"),
                  t.colorDropHook = ()=>{
                      l.updateValue(r, "8"),
                      k(e, o, "8")
                  }
              }
              const a = document.createElement("DIV");
              a.classList.add("picker");
              const o = document.createElement("INPUT");
              o.setAttribute("type", "color"),
              a.appendChild(o);
              const d = document.createElement("DIV");
              d.classList.add("hex-code-input");
              const u = document.createElement("INPUT");
              u.setAttribute("type", "text"),
              d.appendChild(u),
              u.addEventListener("input", (n=>{
                  const r = C(u.value);
                  o.value = "#" + r,
                  k(e, l, r + "FF"),
                  t.colorDropHook()
              }
              )),
              o.addEventListener("input", (n=>{
                  const r = C(o.value);
                  u.value = "#" + r,
                  k(e, l, r + "FF"),
                  t.colorDropHook()
              }
              )),
              t.appendChild(a),
              t.appendChild(d),
              t.updateValue = function(e, n, r) {
                  (r || "8" === t.innerSelect.value) && (n = C(n),
                  u.value = "#" + n,
                  o.value = "#" + n)
              }
          }
          const m = r.querySelectorAll("button");
          for (i = 0; i < m.length; i++) {
              const t = m[i]
                , n = t.innerText.toLowerCase();
              t.addEventListener("click", (r=>{
                  m.forEach((e=>e.classList.remove("selected"))),
                  t.classList.add("selected"),
                  x(e, n)
              }
              )),
              t.classList.contains("selected") && x(e, n)
          }
      }(document.getElementById("builderCustomize"), document.getElementById("builderImage"), document.getElementById("builderTabSelect"));
      var e = "0";
      const r = new URLSearchParams(window.location.search);
      if (r.has("c")) {
          const t = m(r.get("c"));
          t && (e = t)
      }
      E(e)
  }
  ));
  const P = ["P:f", "P:s"];
  function E(e) {
      const t = w(void 0, e);
      if (!t)
          return;
      const r = document.getElementById("builderImage");
      for (var l in r.innerHTML = "",
      r.appendChild(t),
      A) {
          const t = w(void 0, e, l);
          r.appendChild(t)
      }
      !function(e, t) {
          for (var r in t.currentParsed = e,
          n) {
              const l = t.querySelector('x-chapter > div > div[binding="' + r + '"], x-chapter > div > div[bindinglink="' + r + '"], x-chapter > div > div[bindinglinked="' + r + '"]');
              if (!l || !l.updateValue)
                  continue;
              const a = u(e, n[r][0]);
              l.updateValue(r, a)
          }
          const l = document.getElementsByClassName("tabAdvanced");
          for (var a = 0; a < l.length; a++)
              e.general.advancedOptions ? l[a].removeAttribute("disabled") : l[a].setAttribute("disabled", "")
      }(g(e), document.getElementById("builderCustomize"))
  }
  function C(e) {
      return e.startsWith("#") && (e = e.substr(1)),
      8 === e.length && (e = e.substr(0, 6)),
      (e = e.toUpperCase()).match(/^[0-9A-F]{6}$/g) ? e : "FFFFFF"
  }
  function x(e, t) {
      const n = e.querySelectorAll("x-chapter");
      for (var r = 0; r < n.length; r++) {
          const e = n[r];
          t === e.getAttribute("data-tab") ? e.style.display = null : e.style.display = "none"
      }
      const l = t.toLowerCase();
      "general" !== l && (e.currentTab = l,
      S(e))
  }
  function k(e, t, n) {
      if ("string" != typeof n || 8 === n.length || n.match(s) || (n = parseFloat(n)),
      d(e.currentParsed, t[0], t.length >= 5 ? t[4](n) : n),
      "general.advancedOptions" === t[0]) {
          const e = document.getElementsByClassName("tabAdvanced");
          for (var r = 0; r < e.length; r++)
              n ? e[r].removeAttribute("disabled") : e[r].setAttribute("disabled", "")
      }
      S(e)
  }
  function F(e, t) {
      return u(e.currentParsed, t[0])
  }
  function S(e) {
      if (!e.images)
          return;
      const t = e.images.children;
      for (var n = 0; n < t.length; n++) {
          const r = t[n].querySelector("x-hair > canvas");
          b(e.currentParsed, r, !1, e.currentTab)
      }
  }
}
)();
