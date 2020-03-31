
/*
var lesson;

(function() {
   var i;
   lesson = function () {
      if (i) return i;
      i = this;
      i.setme= function (x,n) { x.lesson= 3; x.number= n; };
      return i;
   }();
}());
*/

var home= 'initfields'; 
var style= `
div { background-color: green; border: 10px; }
div div { background-color: pink; border: 4px; }
div div div { background-color: maroon; border: 16px; }
img { width: 500px; height: auto; }
`;


var pad= function (x)   { return x.toString().padStart(2, "0"); };
var parse= function (s)   { return s.split(/\s+/); }; 

var util= {
   zipme : function (a,b) { return a.map( function(e, i) { return [e, b[i]]; } ); },
   fill  : function (id, x) { document.getElementById(id).innerHTML= this.pretty(x); }
};


var html= {
   pretty: function (x) { return x.split( '\n' ).join( '<br>' ); },
   img :  function (src) { return ` <img src='${src}'> `; }, 
   richdiv :  function (id,s) { return ` <div id="${id}"> ${s} </div> `; }, 
   anonymousdiv : function (x) { return ` <div> ${x} </div> `; }, 
   iframe : function (vid) {
	return ` <iframe width="440" height="248" src="https://www.youtube.com/embed/${vid}?rel=0&amp;mute=1&cc_load_policy=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> `;
   },
   richbutton : function (id, code, s) {
	return ` <button id= ${id} onclick= "(${code})()"> ${s} </button> `;
   },
   table : {
     td : function (x) { return ` <td> ${x} </td> `; }, 
     tr : function (x) {
        var cells= x.split(',').map( this.td ).join( '' );
        return ` <tr> ${cells} </tr> `;
     },
     get : function (x) {
        var rows= x.split('\n').map( this.tr ).join( '' );
        return ` <table valign="top"> ${rows} </table> `;
     }
   }
};


var _element= function () {
	return {
   _e : null, 
   _create : function (eT) { this._e= document.createElement(eT); return this; },
   _find : function (id) { this._e= document.getElementById(id); return this; },
   _init: function (x) { this._e= x; return this; },
   setid : function (id) { this._e.id= id; return this; },
   appendTo: function (p) { p._e.appendChild(this._e); return this; },
   append: function (e) { this._e.appendChild(e._e); return this; },
   setme: function (x) { this._e.innerHTML= x; return this; }, 
   setonclick: function (f) { this._e.onclick= f; return this; },
   setsrc: function (x) { this._e.src= x; return this; }
	};
};


var dom;
(function () {
   var i;
   dom= function () {
      if (i) return i;
      i={};
      i.make= function (eT) {
	      //alert("make= "+eT);
	      return _element()._create(eT); };
      i.find= function (id) { return _element()._find(id); };
      i.init= function (_e)  { return _element()._init(_e); };
      i.body= i.init( document.body );
      i.head= i.init( document.head );
      i.style= function (x) {
	      //alert("style= "+x);
	      return i.make('style').setme(x); };
      i.img= function (x) { return i.make('img').setsrc(x); };
      i.div= function (x) { return i.make('div').setme(x.toString()); };
      i.button= function (x) { return i.make('button').setme(x); };
      i.title= function (x) { return i.make('title').setme(x); };
	   return i;
   }();
})();

var page;
(function () {
   var i;
   page= function () {
	   if (i) return i;
	   i= {};
      i.xs= [];
      i.e= null;
      i.p= dom.find(home);
      i.div= function (x) { i.e= dom.div(x); return i; };
      i.button= function (x) { i.e= dom.button(x); return i; };
      i.id= function (x) { i.e= i.e.setid(x); return i; };
      i.onclick= function (x) { i.e= i.e.setonclick(x); return i; };
      i.push= function () { i.xs.push (i.e); return i.e._e; };
      i.append= function () { i.xs.map( function(x,n) {i.p.append(x);} ); };
	   return i;
   }();
})();


page.div('hi').id('d1').push();
var field= function (x) {
   var i;
   return function (id) {
      i= {};
      i.ispretty= false;
      i.pretty= function () { i.ispretty= true; return i; };
      i.inner= function () {
		var t= x.toString();
	      	if (i.ispretty) { alert(1); t= html.pretty(t); }
	      return id + "= " + t; 
      };
      i.div= function () { return page.div(i.inner()).id(id).push(); };
      i.button= function (f) { page.button(x).id(id).onclick(f).push(); };
      return i;
	};
};


var ediv= function (x,id) { 
   var s= field(x)(id).div().innerHTML;
   var onclick1= function () { dom.find(id).setme(id); };
   field('clear me')(id+'clearmebutton').button(onclick1);
   var onclick2= function () { dom.find(id).setme(s); };
   field('fill me')(id+'fillmebutton').button(onclick2);
      };


dom.style(style).appendTo(dom.head);


field('hi')('d1').div();
field('1')('test').div();
field('2')( "navigate").div();

var setup= new Object();
setup.fields= function (x) {
   field([x.prev, x.next])( "navigate").div();
   field(x.title)("CourseTitle").div();
   field(x.wiki)("Wiki").div();
   field(x.url)('URL').div();
   field(x.concept)('Concept').div();
   field(x.vids)('VideoID').div();
   var makeID= function (id) { return function (n) { return id+pad(n); }; };
   var g= function (id) { return function (x,n) { ediv(x,makeID(id)(n)); }; };
   parse(x.vids).map(html.iframe).map(g('embed'));
   x.subs.map(html.pretty).map(g('subs'));
   x.subsmeaning.map(html.pretty).map(g('subsmeaning'));
   if ( 'quiz' in x && x.quiz!=null ) {
     var q= x.quiz;
     ediv(html.img(q.image), "QuizImage");
alert(1);
     field(q.ocr)("QuizOCR").pretty().div();
     field(q.solution)("quizSolution").pretty().div();
     field(q.solutionfeedback)("quizSolutionFeedback").pretty().div();
   }
   page.append();
};


setup.page= function (x) {
   var p= dom.head;
   //p.append(dom.style(style));
   var t= pad(x.lesson);
   x.name= `${t}${pad(x.number)}`;
   //p.append(dom.title(x.name));
  var prev= t+ pad(x.number-1), next= t+ pad(x.number+1);
  x.prev= `<a href= "${prev}.html"> prev </a>`;
  x.next= `<a href= "${next}.html"> next </a>`;
  //x.subs= zipme( x.subs, x.subsmeaning ).map(objectSubtitle);
  setup.fields(x);
};

