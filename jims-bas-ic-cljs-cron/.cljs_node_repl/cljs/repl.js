// Compiled by ClojureScript 1.8.51 {:target :nodejs}
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
var seq__9566_9580 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9567_9581 = null;
var count__9568_9582 = (0);
var i__9569_9583 = (0);
while(true){
if((i__9569_9583 < count__9568_9582)){
var f_9584 = cljs.core._nth.call(null,chunk__9567_9581,i__9569_9583);
cljs.core.println.call(null,"  ",f_9584);

var G__9585 = seq__9566_9580;
var G__9586 = chunk__9567_9581;
var G__9587 = count__9568_9582;
var G__9588 = (i__9569_9583 + (1));
seq__9566_9580 = G__9585;
chunk__9567_9581 = G__9586;
count__9568_9582 = G__9587;
i__9569_9583 = G__9588;
continue;
} else {
var temp__4657__auto___9589 = cljs.core.seq.call(null,seq__9566_9580);
if(temp__4657__auto___9589){
var seq__9566_9590__$1 = temp__4657__auto___9589;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9566_9590__$1)){
var c__7351__auto___9591 = cljs.core.chunk_first.call(null,seq__9566_9590__$1);
var G__9592 = cljs.core.chunk_rest.call(null,seq__9566_9590__$1);
var G__9593 = c__7351__auto___9591;
var G__9594 = cljs.core.count.call(null,c__7351__auto___9591);
var G__9595 = (0);
seq__9566_9580 = G__9592;
chunk__9567_9581 = G__9593;
count__9568_9582 = G__9594;
i__9569_9583 = G__9595;
continue;
} else {
var f_9596 = cljs.core.first.call(null,seq__9566_9590__$1);
cljs.core.println.call(null,"  ",f_9596);

var G__9597 = cljs.core.next.call(null,seq__9566_9590__$1);
var G__9598 = null;
var G__9599 = (0);
var G__9600 = (0);
seq__9566_9580 = G__9597;
chunk__9567_9581 = G__9598;
count__9568_9582 = G__9599;
i__9569_9583 = G__9600;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9601 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6540__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6540__auto__)){
return or__6540__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9601);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9601)))?cljs.core.second.call(null,arglists_9601):arglists_9601));
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
var seq__9570 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9571 = null;
var count__9572 = (0);
var i__9573 = (0);
while(true){
if((i__9573 < count__9572)){
var vec__9574 = cljs.core._nth.call(null,chunk__9571,i__9573);
var name = cljs.core.nth.call(null,vec__9574,(0),null);
var map__9575 = cljs.core.nth.call(null,vec__9574,(1),null);
var map__9575__$1 = ((((!((map__9575 == null)))?((((map__9575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9575):map__9575);
var doc = cljs.core.get.call(null,map__9575__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9575__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9602 = seq__9570;
var G__9603 = chunk__9571;
var G__9604 = count__9572;
var G__9605 = (i__9573 + (1));
seq__9570 = G__9602;
chunk__9571 = G__9603;
count__9572 = G__9604;
i__9573 = G__9605;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9570);
if(temp__4657__auto__){
var seq__9570__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9570__$1)){
var c__7351__auto__ = cljs.core.chunk_first.call(null,seq__9570__$1);
var G__9606 = cljs.core.chunk_rest.call(null,seq__9570__$1);
var G__9607 = c__7351__auto__;
var G__9608 = cljs.core.count.call(null,c__7351__auto__);
var G__9609 = (0);
seq__9570 = G__9606;
chunk__9571 = G__9607;
count__9572 = G__9608;
i__9573 = G__9609;
continue;
} else {
var vec__9577 = cljs.core.first.call(null,seq__9570__$1);
var name = cljs.core.nth.call(null,vec__9577,(0),null);
var map__9578 = cljs.core.nth.call(null,vec__9577,(1),null);
var map__9578__$1 = ((((!((map__9578 == null)))?((((map__9578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9578):map__9578);
var doc = cljs.core.get.call(null,map__9578__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9578__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9610 = cljs.core.next.call(null,seq__9570__$1);
var G__9611 = null;
var G__9612 = (0);
var G__9613 = (0);
seq__9570 = G__9610;
chunk__9571 = G__9611;
count__9572 = G__9612;
i__9573 = G__9613;
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