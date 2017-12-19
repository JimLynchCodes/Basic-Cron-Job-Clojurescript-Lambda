// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9785_9799 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9786_9800 = null;
var count__9787_9801 = (0);
var i__9788_9802 = (0);
while(true){
if((i__9788_9802 < count__9787_9801)){
var f_9803 = cljs.core._nth.call(null,chunk__9786_9800,i__9788_9802);
cljs.core.println.call(null,"  ",f_9803);

var G__9804 = seq__9785_9799;
var G__9805 = chunk__9786_9800;
var G__9806 = count__9787_9801;
var G__9807 = (i__9788_9802 + (1));
seq__9785_9799 = G__9804;
chunk__9786_9800 = G__9805;
count__9787_9801 = G__9806;
i__9788_9802 = G__9807;
continue;
} else {
var temp__4657__auto___9808 = cljs.core.seq.call(null,seq__9785_9799);
if(temp__4657__auto___9808){
var seq__9785_9809__$1 = temp__4657__auto___9808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9785_9809__$1)){
var c__7570__auto___9810 = cljs.core.chunk_first.call(null,seq__9785_9809__$1);
var G__9811 = cljs.core.chunk_rest.call(null,seq__9785_9809__$1);
var G__9812 = c__7570__auto___9810;
var G__9813 = cljs.core.count.call(null,c__7570__auto___9810);
var G__9814 = (0);
seq__9785_9799 = G__9811;
chunk__9786_9800 = G__9812;
count__9787_9801 = G__9813;
i__9788_9802 = G__9814;
continue;
} else {
var f_9815 = cljs.core.first.call(null,seq__9785_9809__$1);
cljs.core.println.call(null,"  ",f_9815);

var G__9816 = cljs.core.next.call(null,seq__9785_9809__$1);
var G__9817 = null;
var G__9818 = (0);
var G__9819 = (0);
seq__9785_9799 = G__9816;
chunk__9786_9800 = G__9817;
count__9787_9801 = G__9818;
i__9788_9802 = G__9819;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9820 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6759__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6759__auto__)){
return or__6759__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9820);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9820)))?cljs.core.second.call(null,arglists_9820):arglists_9820));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__9789 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9790 = null;
var count__9791 = (0);
var i__9792 = (0);
while(true){
if((i__9792 < count__9791)){
var vec__9793 = cljs.core._nth.call(null,chunk__9790,i__9792);
var name = cljs.core.nth.call(null,vec__9793,(0),null);
var map__9794 = cljs.core.nth.call(null,vec__9793,(1),null);
var map__9794__$1 = ((((!((map__9794 == null)))?((((map__9794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9794):map__9794);
var doc = cljs.core.get.call(null,map__9794__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9794__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9821 = seq__9789;
var G__9822 = chunk__9790;
var G__9823 = count__9791;
var G__9824 = (i__9792 + (1));
seq__9789 = G__9821;
chunk__9790 = G__9822;
count__9791 = G__9823;
i__9792 = G__9824;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9789);
if(temp__4657__auto__){
var seq__9789__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9789__$1)){
var c__7570__auto__ = cljs.core.chunk_first.call(null,seq__9789__$1);
var G__9825 = cljs.core.chunk_rest.call(null,seq__9789__$1);
var G__9826 = c__7570__auto__;
var G__9827 = cljs.core.count.call(null,c__7570__auto__);
var G__9828 = (0);
seq__9789 = G__9825;
chunk__9790 = G__9826;
count__9791 = G__9827;
i__9792 = G__9828;
continue;
} else {
var vec__9796 = cljs.core.first.call(null,seq__9789__$1);
var name = cljs.core.nth.call(null,vec__9796,(0),null);
var map__9797 = cljs.core.nth.call(null,vec__9796,(1),null);
var map__9797__$1 = ((((!((map__9797 == null)))?((((map__9797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9797):map__9797);
var doc = cljs.core.get.call(null,map__9797__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9797__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9829 = cljs.core.next.call(null,seq__9789__$1);
var G__9830 = null;
var G__9831 = (0);
var G__9832 = (0);
seq__9789 = G__9829;
chunk__9790 = G__9830;
count__9791 = G__9831;
i__9792 = G__9832;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map