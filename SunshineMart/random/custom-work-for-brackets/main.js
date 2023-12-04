define(function (e, t, i) {
  "use strict";
  function a(e, t, i, a) {
    var n = $(t).eq(a),
      o = parseInt(n.val(), 10),
      r = function (t) {
        t = window.event || t;
        var r = Math.max(-1, Math.min(1, t.wheelDelta || -t.detail)),
          l = parseInt(n.val(), 10),
          s = 0 > r ? o + l : l - o,
          d = e[0].scrollWidth - $(i).eq(a).width(),
          c = s > d ? d : 0 > s ? 0 : s;
        n.val(c);
        var u = n.val();
        $(this).scrollLeft(u), t.preventDefault();
      };
    e.on("mousewheel", r);
  }
  function n() {
    $("<div>", { class: "avril-parent-work", html: E }).insertBefore(
      $("#editor-holder")
    );
    $(".working-set-splitview-btn").appendTo($(".AllTabWork")),
      $(".working-set-option-btn").appendTo($(".AllTabWork")),
      $("#working-set-list-container").appendTo($(".avril-tabs-work")),
      a(
        $("#working-set-list-first-pane ul"),
        $(".avril-custom-val"),
        $(".open-files-container"),
        0
      ),
      a(
        $("#working-set-list-second-pane ul"),
        $(".avril-custom-val"),
        $(".open-files-container"),
        1
      );
  }
  function o() {
    var e = $("#workfile-avril");
    e.hide(),
      $(".all-workfile").click(function (t) {
        t.stopPropagation(), r(), e.toggle("fast");
      });
  }
  function r() {
    $("#workfile-avril").children().remove();
    {
      var e =
        ($(".avril-tabs-work #working-set-list-second-pane"),
        $(".avril-tabs-work #working-set-list-first-pane ul")
          .children()
          .clone(!0, !0));
      $("<ul>", { id: "workSortable", class: "list-group", html: e }).appendTo(
        "#workfile-avril"
      );
    }
    $("#workfile-avril").click(l);
  }
  function l() {
    $("#workfile-avril").is(":visible") &&
      ($("#workfile-avril").hide(), $("#workfile-avril").children().remove());
  }
  function s() {
    $("#working-set-list-first-pane ul").attr("id", "sortableOneWork"),
      $("#working-set-list-second-pane ul").attr("id", "sortableTwoWork"),
      2 === w.getPaneCount() &&
        ($("#working-set-list-first-pane").addClass("CtmWorkFirstPane"),
        $("#working-set-list-second-pane").addClass("CtmWorkSecondPane")),
      $(".CtmWorkFirstPane").length && $(".CtmWorkSecondPane").length
        ? ($(".CtmWorkFirstPane").css(
            "width",
            Math.abs($("#first-pane").width() - 78)
          ),
          $(".CtmWorkSecondPane").css(
            "width",
            Math.abs($("#second-pane").width() - 50)
          ))
        : 1 === w.getPaneCount() &&
          ($("#working-set-list-first-pane").removeClass("CtmWorkFirstPane"),
          $("#working-set-list-first-pane").css("width", ""));
  }
  function d() {
    f.toggle(T);
  }
  function c() {
    m.set(W, !m.get(W)), m.save();
  }
  function u() {
    var e = $("#fullScreenSidebar-avril");
    g.isVisible()
      ? e.html("←").attr("title", "Hide Sidebar").css("color", "#37b1ac")
      : e.html("→").attr("title", "Show Sidebar"),
      T.on("panelCollapsed", function () {
        e.html("→").attr("title", "Show Sidebar"),
          e.css("color") && e.removeAttr("style");
      }),
      T.on("panelExpanded", function () {
        e.html("←").attr("title", "Hide Sidebar").css("color", "#37b1ac");
      });
  }
  function v() {
    window.setTimeout(function () {
      var e = $(".content .working-file-tabs-container").length,
        t = $("#editor-holder #ext-documents").length,
        i = $(".content .gt-tabs").length,
        a = $("#status-bar .extension-toolbar").length,
        n = "<br> Brackets Working File Tabs",
        o = "<br> Documents Toolbar",
        r = "<br> Brackets File Tabs",
        l = "<br> Extensions Toolbar Reposition",
        s = function () {
          return !e || t || i || a
            ? !t || e || i || a
              ? !i || t || e || a
                ? !a || e || t || i
                  ? e && t && !i && !a
                    ? [n, o]
                    : e && i && !t && !a
                    ? [n, r]
                    : e && a && !t && !a
                    ? [n, l]
                    : t && i && !e && !a
                    ? [o, r]
                    : t && a && !e && !i
                    ? [o, l]
                    : i && a && !e && !t
                    ? [n, o]
                    : e && t && i && !a
                    ? [n, o, r]
                    : e && t && a && !i
                    ? [n, o, l]
                    : e && i && a && !t
                    ? [n, r, l]
                    : e && t && i && a
                    ? [n, o, r, l]
                    : void 0
                  : l
                : r
              : o
            : n;
        },
        d = s();
      (e || t || i || a) &&
        h.showModalDialog(S, "Tabs - Custom Working", M + "<br>" + d);
    }, 2e3);
  }
  var b = brackets.getModule("utils/AppInit"),
    k = brackets.getModule("utils/ExtensionUtils"),
    f = brackets.getModule("utils/Resizer"),
    g =
      (brackets.getModule("editor/EditorManager"),
      brackets.getModule("project/SidebarView")),
    w = brackets.getModule("view/MainViewManager"),
    h =
      (brackets.getModule("view/WorkspaceManager"),
      brackets.getModule("project/ProjectManager"),
      brackets.getModule("widgets/Dialogs")),
    p = brackets.getModule("preferences/PreferencesManager"),
    m = p.getExtensionPrefs("customToolbar"),
    M =
      "it is possible that a similar extension to this is interfering with the operation <br> Please uninstall the extensions similar to this.",
    S = "fjkgsd.avril",
    W = "red",
    T = $("#sidebar"),
    C = $("#main-toolbar");
  k.loadStyleSheet(i, "style.min.css");
  var P = '<input type="hidden" value="15" class="avril-custom-val">',
    x = '<input type="hidden" value="15" class="avril-custom-val">',
    I =
      '<div class="disInWork btn-sidebar-bks btn-alt-quiet" id="fullScreenSidebar-avril"></div>',
    y = '<div class="disInWork avril-tabs-work"></div>',
    F = '<div id="workfile-avril"><span></span></div>',
    q =
      '<div id="anotherPanel" class="disInWork btn-another-panel btn-alt-quiet">⇓</div>',
    B =
      '<div class="disInWork all-workfile btn-alt-quiet" title="Show worklist">≡</div>',
    A =
      '<div id="fullmainToolbar-avril" class="disInWork btn-mainToolbar-bks btn-alt-quiet" title="Hide toolBar">»</div>',
    D = P + x + I + y + q + B + A,
    E = '<div class="AllTabWork">' + D + "</div>" + F;
  w
    .on("currentFileChange", function () {
      s(), l();
    })
    .on("paneLayoutChange", function () {
      s(), l();
    })
    .on("activePaneChange", s),
    $("#editor-holder").on("panelResizeUpdate", s),
    (window.onresize = s),
    m.definePreference(W, "boolean", "true").on("change", function () {
      var e = $(".content"),
        t = m.get(W);
      t ? C.show("fast") : C.hide("fast");
      var i = t ? 30 : 0,
        a = t ? "»" : "«",
        n = t ? "Hide toolBar" : "Show toolBar";
      e.animate({ right: i }, "fast", function () {
        $("#fullmainToolbar-avril").html(a).attr("title", n);
      });
    });
  var j = function () {
    n(),
      o(),
      $("#fullScreenSidebar-avril").click(d),
      $("#fullmainToolbar-avril").click(c),
      u();
  };
  b.appReady(j), b.extensionsLoaded(v);
});
