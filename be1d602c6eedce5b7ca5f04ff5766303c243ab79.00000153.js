//----------DHTML Menu Created using AllWebMenus PRO ver 5.3-#886---------------
//C:\DATA\All Projects\Stepping Stones\menu.awm
var awmMenuName='menu';
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
var awmHash='LXGMGFCLJVKWQOIGZYNI';
var awmNoMenuPrint=1;
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["b-about.gif",55,10,"arrow.gif",7,8,"b-services.gif",72,10,"b-resources.gif",79,10];
awmCreateCSS(0,1,0,n,'#00004F',n,n,n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,1,'#FFFFFF','#C3B063',n,'14px Arial',n,'none','0','#000000','0px 0px 0px 0',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#FFFFFF','#C3B063',n,'14px Arial',n,'none','0','#000000','0px 0px 0px 0',1,'0px / 0px',n);
awmCreateCSS(0,1,0,n,'#C3B063',n,n,n,'solid','1','#C3B063','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,1,'#000000','#E6DEB3',n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#000000','#DACF99',n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
awmCreateCSS(1,2,1,'#000000','#FFFFFF',n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#000000','#E6DEB3',n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
awmCreateCSS(1,2,1,'#000000','#F6EEC1',n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#000000','#F6EEC1',n,'14px sans-serif',n,'none','0','#000000','3px 3px 3px 3',1,'0px / 0px',n);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,0,15,10,1,1,0,0,0,1,n,n,100,1,0,5,10,0,-1,1,200,200,0,0,1,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,1,0,0,0,1,0,0,1);
it=s0.addItemWithImages(1,2,2,"","","","",0,0,0,3,3,3,n,n,n,"",n,n,n,"mission.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,0,n);
var s1=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,1,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s1.addItem(4,5,5," &nbsp;Mission and Vision &nbsp;",n,n,"","",n,n,n,"mission.shtml",n,0,0,2,0,0,1,n);
it=s1.addItemWithImages(4,5,5," &nbsp;Consultants &nbsp;",n,n,"",n,n,n,3,3,3,1,1,1,"",n,n,n,"consultants.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,2,n);
var s2=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,2,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItem(6,7,7," &nbsp;Consultants &nbsp;",n,n,"","",n,n,n,"consultants.shtml",n,0,0,2,0,0,3,n);
it=s2.addItem(6,7,7," &nbsp;Curriculum Vitae &nbsp;",n,n,"","",n,n,n,"vitae.shtml",n,0,0,2,0,0,4,n);
it=s1.addItem(4,5,5," &nbsp;System Advocacy &nbsp;",n,n,"","",n,n,n,"advocacy.shtml",n,0,0,2,0,0,5,n);
it=s1.addItem(4,5,5," &nbsp;In the News &nbsp;",n,n,"","",n,n,n,"news.shtml",n,0,0,2,0,0,6,n);
it=s1.addItem(4,5,5," &nbsp;What Others Say &nbsp;",n,n,"","",n,n,n,"testimonials.shtml",n,0,0,2,0,0,7,n);
it=s1.addItem(4,5,5," &nbsp;Biography &nbsp;",n,n,"","",n,n,n,"biography.shtml",n,0,0,2,0,0,8,n);
it=s1.addItem(4,5,5," &nbsp;Business Profile &nbsp;",n,n,"","",n,n,n,"profile.shtml",n,0,0,2,0,0,9,n);
it=s1.addItem(4,5,5," &nbsp;Client List &nbsp;",n,n,"","",n,n,n,"client_list.shtml",n,0,0,2,0,0,10,n);
it=s1.addItem(4,5,5," &nbsp;Media Topics &nbsp;",n,n,"","",n,n,n,"media_topics.shtml",n,0,0,2,0,0,11,n);
it=s1.addItem(4,5,5," &nbsp;Press Kit &nbsp;",n,n,"","",n,n,n,"https://steppingstonesmentalhealth.com/docs/PressKit.pdf",n,0,0,2,0,0,13,n);
it=s1.addItem(4,5,5," &nbsp;Speaker Sheet &nbsp;",n,n,"","",n,n,n,"https://steppingstonesmentalhealth.com/docs/About_Susan_Mikolic.pdf",n,0,0,2,0,0,14,n);
it=s0.addItemWithImages(1,2,2,"","","","",2,2,2,3,3,3,n,n,n,"",n,n,n,n,n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,15,n);
var s1=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,3,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s1.addItem(4,5,5," &nbsp;Understanding the Problem &nbsp;",n,n,"","",n,n,n,"problem.shtml",n,0,0,2,0,0,16,n);
it=s1.addItemWithImages(4,5,5," &nbsp;Meet Matt &nbsp;",n,n,"",n,n,n,3,3,3,1,1,1,"",n,n,n,"matt.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,25,n);
var s2=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,4,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItem(6,7,7," &nbsp;Meet Matt &nbsp;",n,n,"","",n,n,n,"matt.shtml",n,0,0,2,0,0,26,n);
it=s2.addItem(6,7,7," &nbsp;Articles About Matt &nbsp;",n,n,"","",n,n,n,"matt-articles.shtml",n,0,0,2,0,0,27,n);
it=s2.addItem(6,7,7," &nbsp;Letters About Matt &nbsp;",n,n,"","",n,n,n,"matt-letters.shtml",n,0,0,2,0,0,28,n);
it=s2.addItem(6,7,7," &nbsp;Matt&#39;s Thoughts On. . . &nbsp;",n,n,"","",n,n,n,"matt-thoughts.shtml",n,0,0,2,0,0,29,n);
it=s1.addItem(4,5,5," &nbsp;Youth Voice &nbsp;",n,n,"","",n,n,n,"youth_voice.shtml",n,0,0,2,0,0,30,n);
it=s0.addItemWithImages(1,2,2,"","","","",3,3,3,3,3,3,n,n,n,"",n,n,n,"resources.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,34,n);
var s1=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,5,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s1.addItem(4,5,5," &nbsp;Articles &nbsp;",n,n,"","",n,n,n,"articles.shtml",n,0,0,2,0,0,35,n);
it=s1.addItem(4,5,5," &nbsp;Questions &amp; Answers &nbsp;",n,n,"","",n,n,n,"QandA.shtml",n,0,0,2,0,0,36,n);
it=s1.addItem(4,5,5," &nbsp;Dilemmas and Strategies &nbsp;",n,n,"","",n,n,n,"dilemmas.shtml",n,0,0,2,0,0,37,n);
it=s1.addItem(4,5,5," &nbsp;Sample Forms &nbsp;",n,n,"","",n,n,n,"forms.shtml",n,0,0,2,0,0,38,n);
it=s1.addItem(4,5,5," &nbsp;Organizations &nbsp;",n,n,"","",n,n,n,"organizations.shtml",n,0,0,2,0,0,39,n);
it=s1.addItem(4,5,5," &nbsp;Book List &nbsp;",n,n,"","",n,n,n,"books.shtml",n,0,0,2,0,0,40,n);
it=s1.addItemWithImages(4,5,5," &nbsp;Links &nbsp;",n,n,"",n,n,n,3,3,3,1,1,1,"",n,n,n,"https://steppingstonesmentalhealth.com/links.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,41,n);
var s2=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,6,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s2.addItemWithImages(8,7,7," &nbsp;Education of Hurricane Katrina Victims &nbsp;",n,n,"",n,n,n,3,3,3,1,1,1,"",n,n,n,"links-katrina.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,42,n);
var s3=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,7,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s3.addItem(6,9,9," &nbsp;McKinney-Vento Homeless Assistance Act &nbsp;",n,n,"","",n,n,n,"links-katrina.shtml",n,0,0,2,0,0,43,n);
it=s3.addItem(6,9,9," &nbsp;Education of Homeless Children &nbsp;",n,n,"","",n,n,n,"links-katrina.shtml#homeless",n,0,0,2,0,0,44,n);
it=s3.addItem(6,9,9," &nbsp;Flyers &nbsp;",n,n,"","",n,n,n,"links-katrina.shtml#flyers",n,0,0,2,0,0,45,n);
it=s3.addItem(6,9,9," &nbsp;Other &nbsp;",n,n,"","",n,n,n,"links-katrina.shtml#other",n,0,0,2,0,0,46,n);
it=s2.addItemWithImages(8,7,7," &nbsp;Mental Health &nbsp;",n,n,"",n,n,n,3,3,3,1,1,1,"",n,n,n,"links-mental_health.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,47,n);
var s3=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,8,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s3.addItem(6,9,9," &nbsp;Government &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml",n,0,0,2,0,0,48,n);
it=s3.addItem(6,9,9," &nbsp;Suicide Prevention &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#suicide",n,0,0,2,0,0,49,n);
it=s3.addItem(6,9,9," &nbsp;Crisis Prevention &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#crisis",n,0,0,2,0,0,50,n);
it=s3.addItem(6,9,9," &nbsp;Diagnoses &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#diagnosis",n,0,0,2,0,0,51,n);
it=s3.addItem(6,9,9," &nbsp;Associations/Advocacy &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#assoc",n,0,0,2,0,0,52,n);
it=s3.addItem(6,9,9," &nbsp;Journals &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#journals",n,0,0,2,0,0,53,n);
it=s3.addItem(6,9,9," &nbsp;Products/Services &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#products",n,0,0,2,0,0,54,n);
it=s3.addItem(6,9,9," &nbsp;Financial &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#financial",n,0,0,2,0,0,55,n);
it=s3.addItem(6,9,9," &nbsp;Transition &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#transition",n,0,0,2,0,0,56,n);
it=s3.addItem(6,9,9," &nbsp;Youth &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#youth",n,0,0,2,0,0,57,n);
it=s3.addItem(6,9,9," &nbsp;Community Services &nbsp;"," &nbsp;Youth &nbsp;"," &nbsp;Youth &nbsp;","","",n,n,n,"links-mental_health.shtml#community",n,0,0,2,0,0,58,n);
it=s3.addItem(6,9,9," &nbsp;Crisis Assistance &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#crisisassist",n,0,0,2,0,0,59,n);
it=s3.addItem(6,9,9," &nbsp;General &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#general",n,0,0,2,0,0,60,n);
it=s2.addItemWithImages(8,7,7," &nbsp;Special Education &nbsp;",n,n,"",n,n,n,3,3,3,1,1,1,"",n,n,n,"links-special_ed.shtml",n,0,0,2,n,n,n,n,n,n,0,0,0,0,0,n,n,n,0,0,0,61,n);
var s3=it.addSubmenu(0,0,0,2,0,0,0,3,1,1,0,n,n,100,0,9,0,-1,1,200,200,0,0,"0,0,0",0,"0",1);
it=s3.addItem(6,9,9," &nbsp;Government &nbsp;",n,n,"","",n,n,n,"links-special_ed.shtml#gov",n,0,0,2,0,0,62,n);
it=s3.addItem(6,9,9," &nbsp;Partnerships/Projects &nbsp;",n,n,"","",n,n,n,"links-special_ed.shtml#partnership",n,0,0,2,0,0,63,n);
it=s3.addItem(6,9,9," &nbsp;Education Law &nbsp;",n,n,"","",n,n,n,"links-special_ed.shtml#law",n,0,0,2,0,0,64,n);
it=s3.addItem(6,9,9," &nbsp;Special Education Legal Services &nbsp;",n,n,"","",n,n,n,"links-special_ed.shtml#legal",n,0,0,2,0,0,65,n);
it=s3.addItem(6,9,9," &nbsp;Alternative Education &nbsp;",n,n,"","",n,n,n,"links-special_ed.shtml#alternative",n,0,0,2,0,0,66,n);
it=s3.addItem(6,9,9," &nbsp;Learning Disabilities &nbsp;",n,n,"","",n,n,n,"links-special_ed.shtml#disabilities",n,0,0,2,0,0,67,n);
it=s3.addItem(6,9,9," &nbsp;Safe Schools &nbsp;",n,n,"","",n,n,n,"links-special_ed.shtml#safe",n,0,0,2,0,0,68,n);
it=s3.addItem(6,9,9," &nbsp;Associations/Advocacy &nbsp;",n,n,"","",n,n,n,"links-special_ed.shtml#assoc",n,0,0,2,0,0,69,n);
it=s3.addItem(6,9,9," &nbsp;Products/Services &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#products",n,0,0,2,0,0,70,n);
it=s3.addItem(6,9,9," &nbsp;Financial &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#financial",n,0,0,2,0,0,71,n);
it=s3.addItem(6,9,9," &nbsp;System Change &nbsp;",n,n,"","",n,n,n,"links-mental_health.shtml#change",n,0,0,2,0,0,72,n);
it=s2.addItem(8,7,7," &nbsp;Health &nbsp;",n,n,"","",n,n,n,"links-health.shtml",n,0,0,2,0,0,73,n);
it=s2.addItem(8,7,7," &nbsp;Disability &nbsp;",n,n,"","",n,n,n,"links-disability.shtml",n,0,0,2,0,0,74,n);
s0.pm.buildMenu();
}}