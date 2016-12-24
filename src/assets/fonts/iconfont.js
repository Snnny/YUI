;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-caidan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M82 720c-38 0-72 32-72 70s34 72 72 72 70-34 70-72S120 720 82 720z"  ></path>' +
    '' +
    '<path d="M82 376c-38 0-72 32-72 70s34 70 72 70 70-32 70-70S120 376 82 376z"  ></path>' +
    '' +
    '<path d="M338 166l606 0c36 0 66-28 66-64s-30-66-66-66L338 36c-36 0-66 30-66 66S302 166 338 166z"  ></path>' +
    '' +
    '<path d="M82 30C44 30 10 64 10 102s34 70 72 70 70-32 70-70S120 30 82 30z"  ></path>' +
    '' +
    '<path d="M944 380 338 380c-36 0-66 30-66 66s30 66 66 66l606 0c36 0 66-30 66-66S980 380 944 380z"  ></path>' +
    '' +
    '<path d="M944 724 338 724c-36 0-66 30-66 66s30 66 66 66l606 0c36 0 66-30 66-66S980 724 944 724z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-spinner" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M384 128c0-70.688 57.312-128 128-128s128 57.312 128 128c0 70.688-57.312 128-128 128s-128-57.312-128-128zM655.52 240.48c0-70.688 57.312-128 128-128s128 57.312 128 128c0 70.688-57.312 128-128 128s-128-57.312-128-128zM832 512c0-35.36 28.64-64 64-64s64 28.64 64 64c0 35.36-28.64 64-64 64s-64-28.64-64-64zM719.52 783.52c0-35.36 28.64-64 64-64s64 28.64 64 64c0 35.36-28.64 64-64 64s-64-28.64-64-64zM448 896c0 0 0 0 0 0 0-35.36 28.64-64 64-64s64 28.64 64 64c0 0 0 0 0 0 0 35.36-28.64 64-64 64s-64-28.64-64-64zM176.48 783.52c0 0 0 0 0 0 0-35.36 28.64-64 64-64s64 28.64 64 64c0 0 0 0 0 0 0 35.36-28.64 64-64 64s-64-28.64-64-64zM144.48 240.48c0 0 0 0 0 0 0-53.024 42.976-96 96-96s96 42.976 96 96c0 0 0 0 0 0 0 53.024-42.976 96-96 96s-96-42.976-96-96zM56 512c0-39.776 32.224-72 72-72s72 32.224 72 72c0 39.776-32.224 72-72 72s-72-32.224-72-72z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-dialog" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M870.4 178.688 153.6 178.688c-14.11584 0-25.6 10.121216-25.6 22.562816l0 487.354368c0 12.4416 11.48416 22.562816 25.6 22.562816l151.461888 0 0 134.144 30.72 0 0-0.03584L534.605824 711.168 870.4 711.168c14.11584 0 25.6-10.121216 25.6-22.562816L896 201.250816C896 188.809216 884.51584 178.688 870.4 178.688zM865.28 684.092416 519.168 684.092416l0 0.433152L335.781888 808.221696 335.781888 684.188672 329.216 684.188672l0-0.095232L158.72 684.09344 158.72 205.763584l706.56 0L865.28 684.092416z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiangshang" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.999993 0 202.496546 309.503447 821.503441 309.503447Z"  ></path>' +
    '' +
    '<path d="M372.0103 273.632426l279.979386 0 0 750.367574-279.979386 0 0-750.367574Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-25" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M310.30303 372.363636 124.121212 372.363636c-17.128727 0-31.030303 13.901576-31.030303 31.030303l0 186.181818c0 17.128727 13.901576 31.030303 31.030303 31.030303l186.181818 0c17.128727 0 31.030303-13.901576 31.030303-31.030303L341.333333 403.393939C341.333333 386.265212 327.431758 372.363636 310.30303 372.363636zM294.787879 589.575758 139.636364 589.575758c-17.128727 0-15.515152 1.613576-15.515152-15.515152L124.121212 418.909091c0-17.128727-1.613576-15.515152 15.515152-15.515152l155.151515 0c17.128727 0 15.515152-1.613576 15.515152 15.515152l0 155.151515C310.30303 591.189333 311.916606 589.575758 294.787879 589.575758zM418.909091 543.030303l480.969697 0 0-31.030303L418.909091 512 418.909091 543.030303zM418.909091 667.151515l480.969697 0 0-31.030303L418.909091 636.121212 418.909091 667.151515zM418.909091 806.787879l480.969697 0 0-31.030303L418.909091 775.757576 418.909091 806.787879zM418.909091 403.393939l480.969697 0 0-31.030303L418.909091 372.363636 418.909091 403.393939zM992.969697 170.666667l-15.515152 0L977.454545 46.545455c0-17.128727-13.901576-31.030303-31.030303-31.030303L775.757576 15.515152c-17.128727 0-31.030303 13.901576-31.030303 31.030303l0 124.121212-139.636364 0L605.090909 46.545455c0-17.128727-13.901576-31.030303-31.030303-31.030303L403.393939 15.515152c-17.128727 0-31.030303 13.901576-31.030303 31.030303l0 124.121212-124.121212 0L248.242424 46.545455c0-17.128727-13.901576-31.030303-31.030303-31.030303L31.030303 15.515152C13.901576 15.515152 0 29.416727 0 46.545455l0 946.424242c0 17.128727 13.901576 31.030303 31.030303 31.030303l961.939394 0c17.128727 0 31.030303-13.901576 31.030303-31.030303L1024 201.69697C1024 184.568242 1010.098424 170.666667 992.969697 170.666667zM992.969697 961.939394c0 17.128727-13.901576 31.030303-31.030303 31.030303L62.060606 992.969697c-17.128727 0-31.030303-13.901576-31.030303-31.030303L31.030303 77.575758c0-17.128727 13.901576-31.030303 31.030303-31.030303l124.121212 0c17.128727 0 31.030303 13.901576 31.030303 31.030303l0 124.121212 744.727273 0c17.128727 0 31.030303 13.901576 31.030303 31.030303L992.969697 961.939394z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-switch" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M665.6 153.6 358.4 153.6c-197.9392 0-358.4 160.4608-358.4 358.4 0 197.9392 160.4608 358.4 358.4 358.4l307.2 0c197.9392 0 358.4-160.4608 358.4-358.4C1024 314.0608 863.5392 153.6 665.6 153.6zM665.6 768c-141.3632 0-256-114.6368-256-256s114.6368-256 256-256 256 114.6368 256 256S806.9632 768 665.6 768z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)