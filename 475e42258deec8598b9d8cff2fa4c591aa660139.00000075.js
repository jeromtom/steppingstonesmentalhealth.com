//----------DHTML Menu Created using AllWebMenus PRO ver 5.3-#886---------------
//C:\DATA\All Projects\Stepping Stones\energyequation\energyequation.awm
var awmMenuName='energyequation';
var awmLibraryBuild=886;
var awmLibraryPath='/awmData-menu';
var awmImagesPath='/awmData-menu';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1)?2:((nua.indexOf('Safari')>-1)?2:(nua.indexOf('Gecko')>-1)?2:((nua.indexOf('Opera')>-1)?4:1));
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var mpin=mpi;
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+awmMenuPath+awmLibraryPath+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='';
var awmPosID='';
var awmPosClass='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=0;
var awmHash='XXWZLOSHNNEEGMOUVCZE';
var awmNoMenuPrint=1;
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["b-about.gif",55,10,"arrow.gif",7,8,"b-services.gif",72,10,"b-blog.gif",50,10,"b-resources.gif",79,10];
awmCreateCSS(0,1,0,n,'#00004F',n,n,n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,1,'#FFFFFF','#C3B063',n,'14px Arial',n,'none','0','#000000','0px 0px 0px 0',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#FFFFFF','#C3B063',n,'14px Arial',n,'none','0','#000000','0px 0px 0px 0',1,'0px / 0px',n);
awmCreateCSS(0,1,0,n,'#C3B063',n,n,n,'solid','1','#C3B063','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,1,'#000000','#E6DEB3',n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#000000','#DACF99',n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#000000',n,n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
awmCreateCSS(1,2,1,'#000000','#EEE7C6',n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#000000','#E6DEB3',n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
awmCreateCSS(1,2,1,'#000000','#FFFFFF',n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#000000','#F6EEC1',n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,0,15,10,1,1,0,0,0,1,n,n,100,1,0,5,10,0,-1,1,200,200,0,0,1,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,1,0,0,0,1,0,0,1);
it=s0.addItemWithImages(1,2,2,"","","","",0,0,0,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,0,n);
var s1=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,1,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s1.addItemWithImages(4,5,5," &nbsp;Consultants &nbsp;",n,n,"",n,n,n,3,3,3,n,n,n,"",n,n,n,"ee-consultants.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,1,n);
it=s1.addItem(4,5,5," &nbsp;In the News &nbsp;",n,n,"","",n,n,n,"ee-news.shtml",n,0,0,2,0,0,2,n);
it=s1.addItem(4,5,5," &nbsp;What Others Say &nbsp;",n,n,"","",n,n,n,"ee-testimonials.shtml",n,0,0,2,0,0,3,n);
it=s1.addItem(4,5,5," &nbsp;Client List &nbsp;",n,n,"","",n,n,n,"ee-clientlist.shtml",n,0,0,2,0,0,4,n);
it=s1.addItem(4,5,5," &nbsp;Speaker Sheet &nbsp;",n,n,"","",n,n,n,"https://steppingstonesmentalhealth.com/docs/About_Susan_Mikolic-Wellness.pdf",n,0,0,2,0,0,5,n);
it=s1.addItem(4,5,5," &nbsp;Illnesses Resolved &nbsp;",n,n,"","",n,n,n,"ee-illnesses_resolved.shtml",n,0,0,2,0,0,6,n);
it=s1.addItem(4,5,5," &nbsp;Old/New Energy Equation Comparison &nbsp;",n,n,"","",n,n,n,"ee-comparison.shtml",n,0,0,2,0,0,7,n);
it=s0.addItemWithImages(1,2,2,"","","","",2,2,2,3,3,3,n,n,n,"",n,n,n,"../educators.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,8,n);
var s1=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,3,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s1.addItem(4,5,6," &nbsp;Case Studies &nbsp;",n,n,"","",n,n,n,"ee-case_studies.shtml",n,0,0,2,0,0,11,n);
it=s1.addItem(4,5,5," &nbsp;The Energy Equation Experience &nbsp;",n,n,"","",n,n,n,"home.shtml",n,0,0,2,0,0,14,n);
it=s1.addItem(4,5,5," &nbsp;Calculate YOUR Energy Equation &nbsp;",n,n,"","",n,n,n,"assessment.shtml",n,0,0,2,0,0,16,n);
it=s0.addItemWithImages(1,2,2,"","","","",3,3,3,3,3,3,n,n,n,"",n,n,n,"/blog",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,19,n);
it=s0.addItemWithImages(1,2,2,"","","","",4,4,4,3,3,3,n,n,n,"",n,n,n,"ee-resources.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,21,n);
var s1=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,5,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s1.addItem(4,5,5," &nbsp;Articles &nbsp;",n,n,"","",n,n,n,"ee-articles.shtml",n,0,0,2,0,0,22,n);
it=s1.addItem(4,5,5," &nbsp;Parables / Short Stories &nbsp;",n,n,"","",n,n,n,"parables.shtml",n,0,0,2,0,0,23,n);
it=s1.addItem(4,5,5," &nbsp;Questions &amp; Answers &nbsp;",n,n,"","",n,n,n,"ee-QandA.shtml",n,0,0,2,0,0,24,n);
it=s1.addItem(4,5,5," &nbsp;Sample Forms / Worksheet Tools &nbsp;",n,n,"","",n,n,n,"ee-forms.shtml",n,0,0,2,0,0,25,n);
it=s1.addItem(4,5,5," &nbsp;Prayers &nbsp;",n,n,"","",n,n,n,"prayers.shtml",n,0,0,2,0,0,26,n);
it=s1.addItemWithImages(4,5,5," &nbsp;Links &nbsp;",n,n,"",n,n,n,3,3,3,1,1,1,"",n,n,n,"links.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,28,n);
var s2=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,6,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItem(7,8,8," &nbsp;Complimentary Medicine &nbsp;",n,n,"","",n,n,n,"links-medicine.shtml",n,0,0,2,0,0,29,n);
it=s2.addItem(7,8,8," &nbsp;Holistic Health Referral Registries &nbsp;",n,n,"","",n,n,n,"links-holistic_health.shtml",n,0,0,2,0,0,30,n);
it=s2.addItem(7,8,8," &nbsp;General Wellness &nbsp;",n,n,"","",n,n,n,"links-wellness.shtml",n,0,0,2,0,0,31,n);
it=s2.addItemWithImages(7,8,8," &nbsp;Approaches &nbsp;",n,n,"",n,n,n,3,3,3,1,1,1,"",n,n,n,"links-approaches.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,32,n);
var s3=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,2,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s3.addItem(9,10,10," &nbsp;Healing &nbsp;",n,n,"","",n,n,n,"links-approaches.shtml",n,0,0,2,0,0,33,n);
it=s3.addItem(9,10,10," &nbsp;Spiritual &nbsp;",n,n,"","",n,n,n,"links-approaches.shtml#spiritual",n,0,0,2,0,0,34,n);
it=s3.addItem(9,10,10," &nbsp;Inspirational &nbsp;",n,n,"","",n,n,n,"links-approaches.shtml#inspirational",n,0,0,2,0,0,35,n);
it=s3.addItem(9,10,10," &nbsp;Energy &nbsp;",n,n,"","",n,n,n,"links-approaches.shtml#energy",n,0,0,2,0,0,36,n);
it=s3.addItem(9,10,10," &nbsp;Products &nbsp;",n,n,"","",n,n,n,"links-approaches.shtml#products",n,0,0,2,0,0,37,n);
it=s3.addItem(9,10,10," &nbsp;Body Work &nbsp;",n,n,"","",n,n,n,"links-approaches.shtml#bodywork",n,0,0,2,0,0,38,n);
it=s3.addItem(9,10,10," &nbsp;Meditation &nbsp;",n,n,"","",n,n,n,"links-approaches.shtml#meditation",n,0,0,2,0,0,39,n);
it=s2.addItemWithImages(7,8,8," &nbsp;Energy Equation Principles &nbsp;",n,n,"",n,n,n,3,3,3,1,1,1,"",n,n,n,"links-principles.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,40,n);
var s3=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,4,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s3.addItem(9,10,10," &nbsp;Principles &nbsp;",n,n,"","",n,n,n,"links-principles.shtml",n,0,0,2,0,0,41,n);
it=s3.addItem(9,10,10," &nbsp;Role of Stress &nbsp;",n,n,"","",n,n,n,"links-approaches.shtml#spiritual",n,0,0,2,0,0,42,n);
s0.pm.buildMenu();
}}