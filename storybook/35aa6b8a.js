System.register(["./23447ac8.js"],(function(t){"use strict";var e,n,i,s,r,o,l,d,a;return{setters:[function(t){e=t._,n=t.a,i=t.i,s=t.b,r=t.x,o=t.V,l=t.s,d=t.c,a=t.d}],execute:function(){var u,c,h,p,m,g,f,x,k,y=t("GradeBookStudentBlock",function(t){function o(){var t;return d(this,o),(t=a(this,o)).student={},t.t={profileImageFor:"Profile image for",userID:"User ID",preferredName:"Preferred name",emailAddress:"Email this student",notes:"Notes",interests:"Interests"},t.registerLocalization({context:t,namespace:"grade-book"}),t}return e(o,t),n(o,[{key:"render",value:function(){return r(u||(u=s(['\n      <grid-plate layout="1-2" disable-responsive>\n        <div slot="col-1" style="text-align:center;">\n          ','\n        </div>\n        <div slot="col-2">\n          <h2>',"</h2>\n          <ul>\n            ","\n            ","\n            ","\n            ","\n            ","\n          </ul>\n        </div>\n      </grid-plate>\n    "])),this.student.photo?r(c||(c=s(['\n                <img\n                  src="','"\n                  alt="'," ",'"\n                />\n              '])),this.student.photo,this.t.photoOf,this.student.prefName):r(h||(h=s(['\n                <simple-icon-lite icon="account-circle"></simple-icon-lite>\n              ']))),this.student.name,this.student.userId?r(p||(p=s(["<li>",": ","</li>"])),this.t.userID,this.student.userId):"",this.student.prefName?r(m||(m=s(["<li>",": ","</li>"])),this.t.preferredName,this.student.prefName):"",this.student.email?r(g||(g=s(['<li>\n                  <a href="mailto:','"\n                    >',"</a\n                  >\n                </li>"])),this.student.email,this.t.emailAddress):"",this.student.notes?r(f||(f=s(["<li>",": ","</li>"])),this.t.notes,this.student.notes):"",this.student.interests?r(x||(x=s(["<li>\n                  ",": ","\n                </li>"])),this.t.interests,this.student.interests.join(",")):"")}}],[{key:"properties",get:function(){return{student:{type:Object}}}},{key:"styles",get:function(){return i(k||(k=s(["\n      :host {\n        display: block;\n      }\n      img {\n        max-width: 150px;\n        height: 150px;\n        border-radius: 50%;\n      }\n      grid-plate {\n        --grid-plate-col-transition: none;\n        --grid-plate-item-margin: 0px;\n        --grid-plate-item-padding: 4px;\n      }\n      simple-icon-lite {\n        --simple-icon-height: 150px;\n        --simple-icon-width: 150px;\n      }\n    "])))}},{key:"tag",get:function(){return"grade-book-student-block"}}])}(o(l)));customElements.define(y.tag,y)}}}));
