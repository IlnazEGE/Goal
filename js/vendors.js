let move_array=[];function dynamic_adaptive(){let e=$(window).outerWidth();$.each($("*[data-move]"),(function(t,s){if(""!=$(this).data("move")&&null!=$(this).data("move")){let t=$(this).data("move").split(","),s=$("."+t[0]),i=t[1],n=t[2];e<n?$(this).hasClass("js-move_done_"+n)||(i>0?$(this).insertAfter(s.find("*").eq(i-1)):$(this).prependTo(s),$(this).addClass("js-move_done_"+n)):$(this).hasClass("js-move_done_"+n)&&(dynamic_adaptive_back($(this)),$(this).removeClass("js-move_done_"+n))}}))}function dynamic_adaptive_back(e){let t=e.data("move-index"),s=move_array[t],i=s.parent,n=s.index;n>0?e.insertAfter(i.find("*").eq(n-1)):e.prependTo(i)}$("*[data-move]")&&$.each($("*[data-move]"),(function(e,t){""!=$(this).data("move")&&null!=$(this).data("move")&&($(this).attr("data-move-index",e),move_array[e]={parent:$(this).parent(),index:$(this).index()})})),$(window).resize((function(e){dynamic_adaptive()})),dynamic_adaptive(),function(e){e.fn.niceSelect=function(t){if("string"==typeof t)return"update"==t?this.each((function(){var t=e(this),i=e(this).next(".nice-select"),n=i.hasClass("open");i.length&&(i.remove(),s(t),n&&t.next().trigger("click"))})):"destroy"==t?(this.each((function(){var t=e(this),s=e(this).next(".nice-select");s.length&&(s.remove(),t.css("display",""))})),0==e(".nice-select").length&&e(document).off(".nice_select")):console.log('Method "'+t+'" does not exist.'),this;function s(t){t.after(e("<div></div>").addClass("nice-select").addClass(t.attr("class")||"").addClass(t.attr("disabled")?"disabled":"").attr("tabindex",t.attr("disabled")?null:"0").html('<span class="current"></span><ul class="list"></ul>'));var s=t.next(),i=t.find("option"),n=t.find("option:selected");s.find(".current").html(n.data("display")||n.text()),i.each((function(t){var i=e(this),n=i.data("display");s.find("ul").append(e("<li></li>").attr("data-value",i.val()).attr("data-display",n||null).addClass("option"+(i.is(":selected")?" selected":"")+(i.is(":disabled")?" disabled":"")).html(i.text()))}))}this.hide(),this.each((function(){var t=e(this);t.next().hasClass("nice-select")||s(t)})),e(document).off(".nice_select"),e(document).on("click.nice_select",".nice-select",(function(t){var s=e(this);e(".nice-select").not(s).removeClass("open"),s.toggleClass("open"),s.hasClass("open")?(s.find(".option"),s.find(".focus").removeClass("focus"),s.find(".selected").addClass("focus")):s.focus()})),e(document).on("click.nice_select",(function(t){0===e(t.target).closest(".nice-select").length&&e(".nice-select").removeClass("open").find(".option")})),e(document).on("click.nice_select",".nice-select .option:not(.disabled)",(function(t){var s=e(this),i=s.closest(".nice-select");i.find(".selected").removeClass("selected"),s.addClass("selected");var n=s.data("display")||s.text();i.find(".current").text(n),i.prev("select").val(s.data("value")).trigger("change")})),e(document).on("keydown.nice_select",".nice-select",(function(t){var s=e(this),i=e(s.find(".focus")||s.find(".list .option.selected"));if(32==t.keyCode||13==t.keyCode)return s.hasClass("open")?i.trigger("click"):s.trigger("click"),!1;if(40==t.keyCode){if(s.hasClass("open")){var n=i.nextAll(".option:not(.disabled)").first();n.length>0&&(s.find(".focus").removeClass("focus"),n.addClass("focus"))}else s.trigger("click");return!1}if(38==t.keyCode){if(s.hasClass("open")){var a=i.prevAll(".option:not(.disabled)").first();a.length>0&&(s.find(".focus").removeClass("focus"),a.addClass("focus"))}else s.trigger("click");return!1}if(27==t.keyCode)s.hasClass("open")&&s.trigger("click");else if(9==t.keyCode&&s.hasClass("open"))return!1}));var i=document.createElement("a").style;return i.cssText="pointer-events:auto","auto"!==i.pointerEvents&&e("html").addClass("no-csspointerevents"),this}}(jQuery);