/** @license
 * Copyright (c) 2013-2017 Ephox Corp. All rights reserved.
 * This software is provided "AS IS," without a warranty of any kind.
 */
!function(){var a=function(){return{a11y:{widget:{title:"\u8fdb\u5165\u68c0\u67e5\u5668",running:"\u6b63\u5728\u68c0\u67e5......",issue:{counter:"\u95ee\u9898{0}\uff0c\u5171{1}",help:"WCAG 2.0\u53c2\u8003-\u5728\u65b0\u89c6\u7a97\u4e2d\u6253\u5f00",none:"\u6ca1\u6709\u68c0\u6d4b\u5230\u8fdb\u5165\u95ee\u9898"},previous:"\u4ee5\u524d\u7684\u95ee\u9898",next:"\u4e0b\u4e00\u4e2a\u95ee\u9898",repair:"\u4fee\u590d\u95ee\u9898",available:"\u63d0\u4f9b\u7ef4\u4fee\u670d\u52a1",ignore:"\u5ffd\u7565"},image:{alttext:{empty:"\u56fe\u50cf\u5fc5\u987b\u6709\u4e00\u4e2a\u53ef\u9009\u6587\u5b57\u8bf4\u660e",filenameduplicate:"\u53ef\u9009\u6587\u5b57\u4e0d\u80fd\u4e0e\u56fe\u50cf\u6587\u4ef6\u540d\u76f8\u540c",set:"\u63d0\u4f9b\u53ef\u9009\u6587\u5b57\ufe30",validation:{empty:"\u53ef\u9009\u6587\u5b57\u4e0d\u80fd\u4e3a\u7a7a",filenameduplicate:"\u53ef\u9009\u6587\u5b57\u4e0d\u80fd\u4e0e\u6587\u4ef6\u540d\u76f8\u540c"}}},table:{caption:{empty:"\u56fe\u8868\u5fc5\u987b\u6709\u8bf4\u660e\u6587\u5b57",summaryduplicate:"\u56fe\u8868\u8bf4\u660e\u6587\u5b57\u4e0d\u80fd\u6709\u76f8\u540c\u7684\u503c",set:"\u63d0\u4f9b\u8bf4\u660e\u6587\u5b57\ufe30",validation:{empty:"\u8bf4\u660e\u6587\u5b57\u4e0d\u80fd\u4e3a\u7a7a",summaryduplicate:"\u56fe\u8868\u8bf4\u660e\u6587\u5b57\u4e0d\u80fd\u4e0e\u56fe\u8868\u6982\u62ec\u8bf4\u660e\u76f8\u540c"}},summary:{empty:"\u590d\u6742\u7684\u56fe\u8868\u5e94\u8be5\u6709\u6982\u62ec\u8bf4\u660e",set:"\u63d0\u4f9b\u56fe\u8868\u6982\u62ec\u8bf4\u660e\ufe30",validation:{empty:"\u6982\u62ec\u8bf4\u660e\u4e0d\u80fd\u4e3a\u7a7a",captionduplicate:"\u56fe\u8868\u6982\u62ec\u8bf4\u660e\u4e0d\u80fd\u4e0e\u56fe\u8868\u8bf4\u660e\u6587\u5b57\u76f8\u540c"}},rowscells:{none:"\u56fe\u8868\u5143\u7d20\u5fc5\u987b\u5305\u542bTR\u548cTDtag\u952e"},headers:{none:"\u56fe\u8868\u5fc5\u987b\u81f3\u5c11\u6709\u4e00\u4e2a\u6807\u9898\u50a8\u5b58\u683c",set:"\u9009\u62e9\u56fe\u8868\u6807\u9898\ufe30",validation:{none:"\u8bf7\u9009\u62e9\u884c\u6216\u5217\u6807\u9898"}},headerscope:{none:"\u56fe\u8868\u6807\u9898\u5fc5\u987b\u5e94\u7528\u5230\u884c\u6216\u5217",set:"\u9009\u62e9\u6807\u9898\u8303\u56f4\ufe30",scope:{row:"\u884c",col:"\u680f\u76ee",rowgroup:"\u884c\u7fa4\u7ec4",colgroup:"\u680f\u7fa4\u7ec4"}}},heading:{nonsequential:"\u6807\u9898\u5fc5\u987b\u6309\u987a\u5e8f\u5e94\u7528\u3002\u4f8b\u5982\ufe30\u6807\u98981\u5e94\u4f9d\u5e8f\u8ddf\u968f\u6807\u98982\u3001\u6807\u98983\u3002",paragraphmisuse:"\u8fd9\u4e00\u6bb5\u770b\u8d77\u6765\u50cf\u4e00\u4e2a\u6807\u9898\u3002\u5982\u679c\u5b83\u662f\u4e00\u4e2a\u6807\u9898\uff0c\u8bf7\u9009\u62e9\u4e00\u4e2a\u6807\u9898\u7ea7\u522b\u3002",set:"\u9009\u62e9\u4e00\u4e2a\u6807\u9898\u7ea7\u522b\ufe30"},link:{adjacent:"\u6709\u76f8\u540cURL\u7684\u76f8\u90bb\u94fe\u63a5\u5e94\u8be5\u5408\u5e76\u5230\u4e00\u4e2a\u94fe\u63a5\u5185"},list:{paragraphmisuse:"\u9009\u5b9a\u7684\u6587\u5b57\u4f3c\u4e4e\u662f\u4e00\u4e2a\u5217\u8868\u3002\u5e94\u4f7f\u7528\u5217\u8868tag\u952e\u683c\u5f0f\u5316\u5217\u8868\u3002"},contrast:{smalltext:"\u6587\u5b57\u5fc5\u987b\u81f3\u5c11\u67094.5:1\u7684\u5bf9\u6bd4\u5ea6",largetext:"\u5927\u53f7\u6587\u5b57\u5fc5\u987b\u81f3\u5c11\u67093:1\u7684\u5bf9\u6bd4\u5ea6"},severity:{error:"\u9519\u8bef",warning:"\u8b66\u544a",info:"\u5185\u5bb9\u4e30\u5bcc"}},aria:{autocorrect:{announce:"\u81ea\u52a8\u7ea0\u6b63{0}"},label:{toolbar:"\u5bcc\u6587\u5b57\u7f16\u8f91\u5668\u5de5\u5177\u5217",editor:"Textbox.io\u5bcc\u6587\u5b57\u7f16\u8f91\u5668-{0}",fullscreen:"Textbox.io\u5168\u5c4f\u5bcc\u6587\u5b57\u7f16\u8f91\u5668-{0}",content:"\u53ef\u7f16\u8f91\u5185\u5bb9",more:"\u70b9\u51fb\u5c55\u5f00\u6216\u9690\u85cf"},help:{mac:"\u6709\u5173\u5e2e\u52a9\uff0c\u8bf7\u6309\u2303\u2325H",ctrl:"\u6709\u5173\u5e2e\u52a9\uff0c\u8bf7\u6309CTRL SHIFT H"},color:{picker:"\u9009\u8272\u5668",menu:"\u9009\u8272\u5668\u83dc\u5355"},font:{color:"\u6587\u5b57\u989c\u8272",highlight:"\u4eae\u663e\u989c\u8272",palette:"\u8272\u76d8"},context:{menu:{generic:"\u5185\u5bb9\u83dc\u5355"}},stepper:{input:{invalid:"\u5927\u5c0f\u503c\u65e0\u6548"}},table:{headerdescription:"\u6309\u7a7a\u683c\u952e\u542f\u52a8\u8bbe\u5b9a\u3002\u6309tab\u952e\u8fd4\u56de\u8868\u683c\u9009\u8272\u5668\u3002",cell:{border:{size:"\u6846\u7ebf\u5c3a\u5bf8"}}},input:{invalid:"\u65e0\u6548\u7684\u8f93\u5165"},widget:{navigation:"\u4f7f\u7528\u7bad\u5934\u952e\u5bfc\u822a\u3002"},image:{crop:{size:"\u526a\u88c1\u5c3a\u5bf8\u662f{0}\u50cf\u7d20{1}\u7684\u50cf\u7d20"}}},color:{white:"\u767d\u8272",black:"\u9ed1\u8272",gray:"\u7070\u8272",metal:"\u91d1\u5c5e\u8272",smoke:"\u70df\u8272",red:"\u7ea2\u8272",darkred:"\u6df1\u7ea2\u8272",darkorange:"\u6df1\u6a59\u8272",orange:"\u6a59\u8272",yellow:"\u9ec4\u8272",green:"\u7eff\u8272",darkgreen:"\u6df1\u7eff\u8272",mediumseagreen:"\u4e2d\u6d77\u7eff\u8272",lightgreen:"\u6de1\u7eff\u8272",lime:"\u7eff\u9ec4\u8272",mediumblue:"\u4e2d\u84dd\u8272",navy:"\u6df1\u84dd\u8272",blue:"\u84dd\u8272",lightblue:"\u6d45\u84dd\u8272",violet:"\u84dd\u7d2b\u8272"},directionality:{rtldir:"\u65b9\u5411\u53f3\u81f3\u5de6",ltrdir:"\u65b9\u5411\u5de6\u81f3\u53f3"},parlance:{menu:"\u8bed\u8a00\u83dc\u5355",set:"\u8bbe\u5b9a\u8bed\u8a00",ar:"\u963f\u62c9\u4f2f\u6587",ca:"\u52a0\u6cf0\u7f57\u5c3c\u4e9a\u6587",zh_cn:"\u4e2d\u6587\uff08\u7b80\u4f53\uff09",zh_tw:"\u4e2d\u6587\uff08\u7e41\u4f53\uff09",hr:"\u514b\u7f57\u5730\u4e9a\u6587",cs:"\u6377\u514b\u6587",da:"\u4e39\u9ea6\u6587",nl:"\u8377\u5170\u6587",en:"\u82f1\u6587",en_au:"\u82f1\u6587\uff08\u6fb3\u5927\u5229\u4e9a\uff09",en_ca:"\u82f1\u6587\uff08\u52a0\u62ff\u5927\uff09",en_gb:"\u82f1\u6587\uff08\u82f1\u56fd\uff09",en_us:"\u82f1\u6587\uff08\u7f8e\u56fd\uff09",fa:"\u6ce2\u65af\u6587",fi:"\u82ac\u5170\u6587",fr:"\u6cd5\u6587",fr_ca:"\u6cd5\u6587\uff08\u52a0\u62ff\u5927\uff09",de:"\u5fb7\u6587",el:"\u5e0c\u814a\u6587",he:"\u5e0c\u4f2f\u6765\u6587",hu:"\u5308\u7259\u5229\u6587",it:"\u610f\u5927\u5229\u6587",ja:"\u65e5\u6587",kk:"\u54c8\u8428\u514b\u6587",ko:"\u97e9\u6587",no:"\u632a\u5a01\u6587",pl:"\u6ce2\u5170\u6587",pt_br:"\u8461\u8404\u7259\u6587\uff08\u5df4\u897f\uff09",pt_pt:"\u8461\u8404\u7259\u6587\uff08\u8461\u8404\u7259\uff09",ro:"\u7f57\u9a6c\u5c3c\u4e9a\u6587",ru:"\u4fc4\u6587",sk:"\u65af\u6d1b\u4f10\u514b\u6587",sl:"\u65af\u6d1b\u6587\u5c3c\u4e9a\u6587",es:"\u897f\u73ed\u7259\u6587",es_419:"\u897f\u73ed\u7259\u6587\uff08\u62c9\u4e01\u7f8e\u6d32\uff09",es_es:"\u897f\u73ed\u7259\u6587\uff08\u897f\u73ed\u7259\uff09",sv:"\u745e\u5178\u6587",tt:"\u9791\u977c\u6587",th:"\u6cf0\u6587",tr:"\u571f\u8033\u5176\u6587",uk:"\u4e4c\u514b\u5170\u6587"},taptoedit:"\u70b9\u51fb\u7f16\u8f91",plaincode:{dialog:{title:"\u4ee3\u7801\u89c6\u56fe",editor:"HTML\u539f\u59cb\u7801\u7f16\u8f91\u5668"}},help:{dialog:{accessibility:"\u952e\u76d8\u5bfc\u822a",a11ycheck:"\u8fdb\u5165\u68c0\u67e5",about:"\u5173\u4e8eTextbox.io",markdown:"Markdown\u683c\u5f0f\u5316",shortcuts:"\u5feb\u6377\u952e"}},spelling:{context:{more:"\u66f4\u591a",morelabel:"\u66f4\u591a\u62fc\u5199\u9009\u9879\u5b50\u83dc\u5355"},none:"\u65e0",menu:"\u62fc\u5199\u68c0\u67e5\u8bed\u8a00"},specialchar:{open:"\u7279\u6b8a\u5b57\u7b26",dialog:"\u63d2\u5165\u7279\u6b8a\u5b57\u7b26",latin:"\u62c9\u4e01\u5b57\u6bcd",insert:"\u63d2\u5165",punctuation:"\u6807\u70b9\u7b26\u53f7",currency:"\u8d27\u5e01","extended-latin-a":"\u62c9\u4e01\u5b57\u6bcd\u6269\u5145A","extended-latin-b":"\u62c9\u4e01\u5b57\u6bcd\u6269\u5145B",arrows:"\u7bad\u5934",mathematical:"\u6570\u5b66",miscellaneous:"\u6742\u9879",selects:"\u9009\u53d6\u5b57\u7b26",grid:"\u7279\u6b8a\u5b57\u7b26"},insert:{"menu-button":"\u63d2\u5165\u83dc\u5355",menu:"\u63d2\u5165",link:"\u94fe\u63a5",image:"\u56fe\u50cf",table:"\u8868\u683c",horizontalrule:"\u6c34\u5e73\u5c3a",media:"\u5a92\u4f53"},media:{embed:"\u5a92\u4f53\u5d4c\u5165\u4ee3\u7801",insert:"\u63d2\u5165",placeholder:"\u5728\u6b64\u8d34\u4e0a\u5d4c\u5165\u4ee3\u7801\u3002"},wordcount:{open:"\u5b57\u6570\u7edf\u8ba1",dialog:"\u5b57\u6570\u7edf\u8ba1",counts:"\u8ba1\u7b97",selection:"\u9009\u9879",document:"\u6587\u4ef6",characters:"\u5b57\u7b26",charactersnospaces:"\u5b57\u7b26(\u65e0\u7a7a\u683c)",words:"\u5b57\u6570"},list:{unordered:{menu:"\u672a\u6392\u5e8f\u5217\u8868\u9009\u9879",default:"\u9884\u8bbe\u672a\u6392\u5e8f",circle:"\u5706\u5708\u672a\u6392\u5e8f",square:"\u6846\u672a\u6392\u5e8f",disc:"\u78c1\u789f\u672a\u6392\u5e8f"},ordered:{menu:"\u5df2\u6392\u5e8f\u5217\u8868\u9009\u9879",default:"\u9884\u8bbe\u5df2\u6392\u5e8f",decimal:"\u5c0f\u6570\u70b9\u5df2\u6392\u5e8f","upper-alpha":"\u5927\u5199\u82f1\u6587\u5b57\u6bcd\u5df2\u6392\u5e8f","lower-alpha":"\u5c0f\u5199\u82f1\u6587\u5b57\u6bcd\u5df2\u6392\u5e8f","upper-roman":"\u5927\u5199\u7f57\u9a6c\u6587\u5df2\u6392\u5e8f","lower-roman":"\u5c0f\u5199\u7f57\u9a6c\u6587\u5df2\u6392\u5e8f","lower-greek":"\u5c0f\u5199\u5e0c\u814a\u6587\u5df2\u6392\u5e8f"}},tag:{inline:{class:"\u8de8\u5ea6{0})"},img:"\u56fe\u50cf"},block:{normal:"\u5e38\u89c4",p:"\u6bb5\u843d",h1:"\u6807\u98981",h2:"\u6807\u98982",h3:"\u6807\u98983",h4:"\u6807\u98984",h5:"\u6807\u98985",h6:"\u6807\u98986",div:"Div",pre:"Pre",li:"\u5217\u51fa\u9879\u76ee",td:"\u50a8\u5b58\u683c",th:"\u6807\u9898\u50a8\u5b58\u683c",styles:"\u6837\u5f0f\u83dc\u5355",dropdown:"\u57fa\u5757",describe:"\u76ee\u524d\u6837\u5f0f{0}",menu:"\u6837\u5f0f",label:{inline:"\u5d01\u5165\u5f0f\u6837\u5f0f",table:"\u8868\u683c\u6837\u5f0f",line:"\u884c\u6837\u5f0f",media:"\u5a92\u4f53\u6837\u5f0f",list:"\u5217\u8868\u6837\u5f0f",link:"\u94fe\u63a5\u6837\u5f0f"}},font:{"menu-button":"\u5b57\u4f53\u83dc\u5355",menu:"\u5b57\u4f53",face:"\u5b57\u6837",size:"\u5b57\u4f53\u5927\u5c0f",coloroption:"\u989c\u8272",describe:"\u76ee\u524d\u5b57\u4f53{0}",color:"\u6587\u5b57",highlight:"\u4eae\u663e",stepper:{input:"\u8bbe\u7f6e\u5b57\u4f53\u5927\u5c0f",increase:"\u589e\u52a0\u5b57\u4f53\u5927\u5c0f",decrease:"\u51cf\u5c0f\u5b57\u4f53\u5927\u5c0f"}},cog:{"menu-button":"\u8bbe\u7f6e\u83dc\u5355",menu:"\u8bbe\u7f6e",spellcheck:"\u62fc\u5199\u68c0\u67e5",capitalisation:"\u5927\u5199",autocorrect:"\u81ea\u52a8\u6821\u6b63",linkpreviews:"\u9884\u89c8\u94fe\u63a5",help:"\u5e2e\u52a9"},alignment:{toolbar:"\u5bf9\u9f50\u83dc\u5355",menu:"\u5bf9\u9f50",left:"\u5de6\u5bf9\u9f50",center:"\u5c45\u4e2d",right:"\u53f3\u5bf9\u9f50",justify:"\u4e24\u7aef\u5bf9\u9f50",describe:"\u76ee\u524d\u5bf9\u9f50{0}"},category:{language:"\u8bed\u8a00\u7ec4",undo:"\u64a4\u9500\u548c\u91cd\u505a\u7ec4",insert:"\u63d2\u5165\u7ec4",style:"\u6837\u5f0f\u7ec4",emphasis:"\u683c\u5f0f\u5316\u7ec4",align:"\u5bf9\u9f50\u7ec4",listindent:"\u5217\u8868\u548c\u7f29\u8fdb\u7ec4",format:"\u5b57\u4f53\u7ec4",tools:"\u5de5\u5177\u7ec4",table:"\u8868\u683c\u7ec4",image:"\u56fe\u50cf\u7f16\u8f91\u7ec4"},action:{undo:"\u64a4\u9500",redo:"\u91cd\u505a",bold:"\u7c97\u4f53",italic:"\u659c\u4f53",underline:"\u4e0b\u5212\u7ebf",strikethrough:"\u5220\u9664\u7ebf",subscript:"\u4e0b\u6807",superscript:"\u4e0a\u6807",removeformat:"\u5220\u9664\u683c\u5f0f\u5316",bullist:"\u672a\u6392\u5e8f\u5217\u8868",numlist:"\u6392\u5e8f\u5217\u8868",indent:"\u7f29\u8fdb\u66f4\u591a",outdent:"\u7f29\u8fdb\u66f4\u5c11",blockquote:"\u5f15\u6587\u533a\u5757",fullscreen:"\u5168\u5c4f",search:"\u67e5\u627e\u548c\u66ff\u6362\u5bf9\u8bdd\u6846",a11ycheck:"\u68c0\u67e5\u8fdb\u5165",toggle:{fullscreen:"\u9000\u51fa\u5168\u5c4f"}},table:{menu:"\u63d2\u5165\u8868\u683c","column-header":"\u6807\u9898\u680f","row-header":"\u6807\u9898\u884c",float:"\u6d6e\u52a8\u5bf9\u9f50",cell:{color:{border:"\u6846\u7ebf\u989c\u8272",background:"\u80cc\u666f\u989c\u8272"},border:{width:"\u6846\u7ebf\u5bbd\u5ea6",stepper:{input:"\u8bbe\u5b9a\u6846\u7ebf\u5bbd\u5ea6",increase:"\u589e\u52a0\u6846\u7ebf\u5bbd\u5ea6",decrease:"\u51cf\u5c11\u6846\u7ebf\u5bbd\u5ea6"}}},context:{row:{title:"\u884c\u5b50\u83dc\u5355",menu:"\u884c",insertabove:"\u63d2\u5165\u4e0a\u65b9",insertbelow:"\u63d2\u5165\u4e0b\u65b9"},column:{title:"\u680f\u76ee\u5b50\u83dc\u5355",menu:"\u680f\u76ee",insertleft:"\u63d2\u5165\u5de6\u8fb9",insertright:"\u63d2\u5165\u53f3\u8fb9"},cell:{merge:"\u5408\u5e76\u50a8\u5b58\u683c",unmerge:"\u62c6\u5206\u50a8\u5b58\u683c","split-cols":"\u62c6\u5206\u6210\u5217","split-rows":"\u62c6\u5206\u6210\u884c"},table:{title:"\u8868\u683c\u5b50\u83dc\u5355",menu:"\u8868\u683c",properties:"\u5c5e\u6027",delete:"\u5220\u9664"},common:{delete:"\u5220\u9664",normal:"\u8bbe\u7f6e\u4e3a\u5e38\u89c4",header:"\u8bbe\u7f6e\u4e3a\u6807\u9898"},palette:{show:"\u5de5\u5177\u680f\u4e2d\u63d0\u4f9b\u56fe\u8868\u7f16\u8f91\u9009\u9879",hide:"\u4e0d\u518d\u63d0\u4f9b\u56fe\u8868\u7f16\u8f91\u9009\u9879"}},picker:{header:"\u6807\u9898\u8bbe\u7f6e",label:"\u8868\u683c\u9009\u8272\u5668",describepicker:"\u4f7f\u7528\u7bad\u5934\u952e\u8bbe\u5b9a\u8868\u683c\u5c3a\u5bf8\u3002\u6309\u4e0btab\u524d\u5f80\u8868\u683c\u6807\u9898\u8bbe\u5b9a\u3002\u6309space\u6216enter\u952e\u63d2\u5165\u8868\u683c\u3002",rows:"{0}\u9ad8",cols:"{0}\u5bbd"},border:"\u6846\u7ebf",summary:"\u6982\u8981",dialog:"\u8868\u683c\u5c5e\u6027",caption:"\u8868\u683c\u8bf4\u660e\u6587\u5b57",width:"\u5bbd\u5ea6",height:"\u9ad8\u5ea6"},align:{none:"\u4e0d\u5bf9\u9f50",center:"\u5c45\u4e2d",left:"\u5de6\u5bf9\u9f50",right:"\u53f3\u5bf9\u9f50"},button:{ok:"\u786e\u5b9a",cancel:"\u53d6\u6d88",close:"\u53d6\u6d88\u5bf9\u8bdd\u6846"},banner:{close:"\u5173\u95ed\u6a2a\u5e45"},border:{on:"\u5f00",off:"\u5173",labels:{on:"\u6846\u7ebf\u5f00",off:"\u6846\u7ebf\u5173"}},loading:{wait:"\u8bf7\u7a0d\u5019"},toolbar:{more:"\u66f4\u591a",backbutton:"\u8fd4\u56de","switch-code":"\u8f6c\u6362\u81f3\u7f16\u7801\u89c6\u56fe","switch-pencil":"\u8f6c\u6362\u81f3\u8bbe\u8ba1\u89c6\u56fe"},link:{context:{edit:"\u7f16\u8f91\u94fe\u63a5",follow:"\u6253\u5f00\u94fe\u63a5",ignore:"\u5ffd\u7565\u65ad\u5f00\u7684\u94fe\u63a5",remove:"\u5220\u9664\u94fe\u63a5"},dialog:{aria:{update:"\u66f4\u65b0\u94fe\u63a5",insert:"\u63d2\u5165\u94fe\u63a5",properties:"\u94fe\u63a5\u5c5e\u6027",quick:"\u5feb\u901f\u9009\u9879"},autocomplete:{open:"\u94fe\u63a5\u81ea\u52a8\u586b\u5145\u5217\u8868\u53ef\u7528\u3002\u7ee7\u7eed\u8f93\u5165\u6216\u4f7f\u7528\u5411\u4e0a\u548c\u5411\u4e0b\u952e\u9009\u62e9\u5efa\u8bae\u3002",close:"\u94fe\u63a5\u81ea\u52a8\u586b\u5145\u5217\u8868\u5df2\u5173\u95ed\u3002",accept:"\u9009\u5b9a\u7684\u94fe\u63a5\u5efa\u8bae{0}"},edit:"\u7f16\u8f91",remove:"\u5220\u9664",preview:"\u9884\u89c8",update:"\u66f4\u65b0",insert:"\u63d2\u5165",tooltip:"\u94fe\u63a5"},properties:{dialog:{title:"\u94fe\u63a5\u5c5e\u6027"},text:{label:"\u8981\u663e\u793a\u7684\u6587\u672c",placeholder:"\u8f93\u5165\u6216\u7c98\u8d34\u663e\u793a\u6587\u672c"},url:{label:"\u94fe\u63a5URL\u6216\u4e66\u7b7e",placeholder:"\u8f93\u5165\u94fe\u63a5URL\u6216\u4e66\u7b7e",invalid:"\u94fe\u63a5URL\u53ef\u80fd\u4e0d\u6b63\u786e"},title:{label:"\u6807\u9898",placeholder:"\u8f93\u5165\u6216\u7c98\u8d34\u94fe\u63a5\u6807\u9898"},button:{remove:"\u5220\u9664"},target:{label:"\u76ee\u6807",none:"\u65e0",blank:"\u65b0\u89c6\u7a97",top:"\u6574\u9875",self:"\u76f8\u540c\u5e27",parent:"\u7236\u7cfb\u5e27"}},anchor:{top:"\u6587\u4ef6\u9876\u90e8",bottom:"\u6587\u4ef6\u5e95\u90e8"}},fileupload:{title:"\u63d2\u5165\u56fe\u50cf",tablocal:"\u672c\u5730\u6587\u4ef6",tabweburl:"\u7f51\u7edcURL",dropimages:"\u5c06\u56fe\u50cf\u653e\u5728\u8fd9\u91cc",chooseimage:"\u9009\u62e9\u4e0a\u4f20\u7684\u56fe\u50cf",web:{url:"\u7f51\u7edc\u56fe\u50cfURL\uff1a"},weburlhelp:"\u952e\u5165URL\uff0c\u67e5\u770b\u56fe\u50cf\u9884\u89c8\u3002\u5927\u56fe\u50cf\u53ef\u80fd\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u624d\u80fd\u663e\u793a\u3002",invalid1:"\u6211\u4eec\u5728\u60a8\u4f7f\u7528\u7684URL\u627e\u4e0d\u5230\u56fe\u50cf\u3002",invalid2:"\u8bf7\u68c0\u67e5URL\u662f\u5426\u8f93\u5165\u6b63\u786e\u3002",invalid3:"\u8bf7\u786e\u4fdd\u60a8\u8bbf\u95ee\u7684\u56fe\u50cf\u662f\u516c\u5f00\u7684\uff0c\u800c\u975e\u53d7\u5bc6\u7801\u4fdd\u62a4\u6216\u4f4d\u4e8e\u79c1\u4eba\u7f51\u7edc\u5185\u3002"},image:{context:{properties:"\u56fe\u50cf\u5c5e\u6027",palette:{show:"\u5de5\u5177\u680f\u4e2d\u63d0\u4f9b\u56fe\u50cf\u7f16\u8f91\u9009\u9879",hide:"\u4e0d\u518d\u63d0\u4f9b\u56fe\u50cf\u7f16\u8f91\u9009\u9879"}},dialog:{title:"\u56fe\u50cf\u5c5e\u6027",fields:{align:"\u6d6e\u52a8\u5bf9\u9f50",url:"URL",urllocal:"\u5c1a\u672a\u4fdd\u5b58\u56fe\u50cf",alt:"\u5907\u9009\u6587\u5b57",width:"\u5bbd\u5ea6",height:"\u9ad8\u5ea6",constrain:{label:"\u4fdd\u6301\u6bd4\u4f8b",on:"\u9501\u5b9a\u7684\u6bd4\u4f8b",off:"\u89e3\u9501\u7684\u6bd4\u4f8b"}}},menu:"\u63d2\u5165\u56fe\u50cf","menu-button":"\u63d2\u5165\u56fe\u50cf\u83dc\u5355","from-url":"\u7f51\u7edcURL","from-camera":"\u624b\u673a\u76f8\u7c3f",toolbar:{rotateleft:"\u5411\u5de6\u65cb\u8f6c",rotateright:"\u5411\u53f3\u65cb\u8f6c",fliphorizontal:"\u6c34\u5e73\u7ffb\u8f6c",flipvertical:"\u5782\u76f4\u7ffb\u8f6c",properties:"\u56fe\u50cf\u5c5e\u6027"},crop:{announce:"\u8fdb\u5165\u88c1\u526a\u4ecb\u9762\u3002\u6309enter\u952e\u5e94\u7528\uff0c\u6309escape\u952e\u53d6\u6d88\u3002",cancel:"\u53d6\u6d88\u88c1\u526a\u64cd\u4f5c",begin:"\u526a\u88c1\u56fe\u50cf",apply:"\u9002\u7528\u88c1\u526a",handle:{nw:"\u5de6\u4e0a\u89d2\u7684\u88c1\u526a\u624b\u67c4",ne:"\u53f3\u4e0a\u89d2\u7684\u88c1\u526a\u624b\u67c4",se:"\u53f3\u4e0b\u89d2\u7684\u88c1\u526a\u624b\u67c4",sw:"\u5de6\u4e0b\u89d2\u7684\u88c1\u526a\u624b\u67c4",shade:"\u88c1\u526a\u906e\u7f69"}}},units:{"amount-of-total":"{1} \u7684 {0}"},search:{menu:"\u67e5\u627e\u548c\u66ff\u6362",field:{replace:"\u66ff\u6362\u57df",search:"\u641c\u7d22\u57df"},search:"\u641c\u7d22",previous:"\u4e0a\u4e00\u4e2a",next:"\u4e0b\u4e00\u4e2a",replace:"\u66ff\u6362","replace-all":"\u5168\u90e8\u66ff\u6362",matchcase:"\u5927\u5c0f\u5199\u76f8\u7b26"},mentions:{initiated:"\u521b\u5efa\u63d0\u793a\uff0c\u7ee7\u7eed\u952e\u5165\u524d\u9762\u7684\u7c7b\u578b",lookahead:{open:"\u952e\u5165\u524d\u9762\u7684\u5217\u8868\u6846",cancelled:"\u5df2\u53d6\u6d88\u7684\u63d0\u793a",searching:"\u641c\u7d22\u7ed3\u679c",selected:"\u5df2\u63d2\u5165{0}\u7684\u63d0\u793a",noresults:"\u6ca1\u6709\u7ed3\u679c"}},cement:{dialog:{paste:{title:"\u7c98\u8d34\u683c\u5f0f\u5316\u9009\u9879",instructions:"\u9009\u62e9\u5728\u7c98\u8d34\u7684\u5185\u5bb9\u5185\u4fdd\u6301\u6216\u53bb\u9664\u683c\u5f0f\u5316\u3002",merge:"\u4fdd\u6301\u683c\u5f0f\u5316",clean:"\u5220\u9664\u683c\u5f0f\u5316"},flash:{title:"\u8f93\u5165\u672c\u5730\u56fe\u50cf","trigger-paste":"\u518d\u6b21\u4ece\u952e\u76d8\u89e6\u53d1\u7c98\u8d34\u64cd\u4f5c\uff0c\u7c98\u8d34\u542b\u56fe\u50cf\u7684\u5185\u5bb9\u3002",missing:'\u4ece\u5fae\u8f6f\u529e\u516c\u8f6f\u4ef6\u8f93\u5165\u56fe\u50cf\u9700\u8981Adobe Flash\u3002\u5b89\u88c5<a href="http://get.adobe.com/flashplayer/" target="_blank">Adobe Flash\u64ad\u653e\u5668</a>\u3002',"press-escape":'\u6309<span class="ephox-polish-help-kbd">ESC</span>\uff0c\u5ffd\u7565\u672c\u5730\u56fe\u50cf\u5e76\u7ee7\u7eed\u7f16\u8f91\u3002'}}},cloud:{error:{apikey:"\u60a8\u7684API\u952e\u65e0\u6548\u3002",domain:"\u60a8\u7684API\u952e\u4e0d\u652f\u6301\u60a8\u7684\u7f51\u57df({0})\u3002",plan:"\u60a8\u5df2\u8d85\u8fc7\u65b9\u6848\u53ef\u7528\u7684\u7f16\u8f91\u5668\u4e0b\u8f7d\u6b21\u6570\u3002\u8bbf\u95ee\u7f51\u7ad9\u8fdb\u884c\u5347\u7ea7\u3002"},dashboard:"\u524d\u5f80\u7ba1\u7406\u5458\u63a7\u5236\u677f"},errors:{paste:{notready:"\u6587\u5b57\u8f93\u5165\u529f\u80fd\u5c1a\u672a\u8f7d\u5165\u3002\u8bf7\u7a0d\u7b49\u7247\u523b\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",generic:"\u7c98\u8d34\u5185\u5bb9\u65f6\u53d1\u751f\u9519\u8bef\u3002"},toolbar:{missing:{custom:{string:"\u81ea\u5b9a\u4e49\u6307\u4ee4\u5fc5\u987b\u542b\u6709\u201c{0}\u201d\u5c5e\u6027\uff0c\u800c\u4e14\u5fc5\u987b\u662f\u4e00\u4e32\u5b57\u7b26\u3002"}},invalid:"\u5de5\u5177\u5217\u914d\u7f6e\u65e0\u6548({0}\uff09\u3002\u8be6\u60c5\u8bf7\u67e5\u770b\u63a7\u5236\u53f0\u3002"},spelling:{missing:{service:"\u627e\u4e0d\u5230\u62fc\u5199\u670d\u52a1\uff1a\uff08{0}\uff09\u3002"}},images:{edit:{needsproxy:"\u9700\u8981\u901a\u8fc7\u4ee3\u7406\u624d\u80fd\u5728\u6b64\u57df\u7f16\u8f91\u56fe\u50cf:\uff08{0}\uff09",proxyerror:"\u7f16\u8f91\u6b64\u56fe\u50cf\u65f6\u65e0\u6cd5\u4e0e\u4ee3\u7406\u6c9f\u901a\u3002\u8be6\u60c5\u8bf7\u67e5\u770b\u63a7\u5236\u53f0\u3002",generic:"\u6267\u884c\u56fe\u50cf\u7f16\u8f91\u64cd\u4f5c\u65f6\u51fa\u9519\u3002\u8be6\u60c5\u8bf7\u67e5\u770b\u63a7\u5236\u53f0\u3002"},disallowed:{local:"\u5c40\u90e8\u56fe\u50cf\u7c98\u8d34\u5df2\u88ab\u7981\u7528\u3002\u5c40\u90e8\u56fe\u50cf\u5df2\u4ece\u7c98\u8d34\u5185\u5bb9\u5904\u5220\u9664\u3002",dragdrop:"\u62d6\u62fd\u5df2\u88ab\u7981\u7528\u3002"},upload:{unknown:"\u56fe\u50cf\u4e0a\u4f20\u5931\u8d25",invalid:"\u5e76\u4e0d\u662f\u6240\u6709\u6587\u4ef6\u90fd\u5df2\u88ab\u5904\u7406-\u5176\u4e2d\u4e00\u4e9b\u4e0d\u662f\u6709\u6548\u7684\u56fe\u50cf",failed:"\u56fe\u50cf\u4e0a\u4f20\u5931\u8d25\uff1a({0})\u3002",cors:"\u65e0\u6cd5\u8054\u7cfb\u56fe\u50cf\u4e0a\u4f20\u670d\u52a1\u3002\u53ef\u80fd\u662fCORS\u9519\u8bef\uff1a({0})"},missing:{service:"\u627e\u4e0d\u5230\u56fe\u50cf\u670d\u52a1\uff1a\uff08{0}\uff09\u3002",flash:"\u6d4f\u89c8\u5668\u7684\u5b89\u5168\u8bbe\u7f6e\u53ef\u80fd\u963b\u6b62\u4e86\u56fe\u50cf\u8f93\u5165\u3002"},import:{failed:"\u4e00\u4e9b\u56fe\u50cf\u5bfc\u5165\u5931\u8d25\u3002",unsupported:"\u4e0d\u652f\u6301\u56fe\u50cf\u7c7b\u578b\u3002",invalid:"\u56fe\u50cf\u662f\u65e0\u6548\u7684\u3002"}},webview:{image:"\u4e0d\u80fd\u7c98\u8d34\u76f4\u63a5\u590d\u5236\u7684\u56fe\u50cf\u3002"},safari:{image:"Safari\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u76f4\u63a5\u7c98\u8d34\u56fe\u50cf\u3002",url:"\u5efa\u8bae\u89e3\u51b3\u65b9\u6cd5",rtf:"\u4e86\u89e3\u64cd\u4f5c\u65b9\u6cd5","browser-settings":"\u82e5\u8981\u7c98\u8d34\u56fe\u7247\uff0c\u8bf7\u5148\u8c03\u6574\u60a8\u7684\u6d4f\u89c8\u5668\u8bbe\u7f6e\u3002"},flash:{crashed:"\u672a\u5bfc\u5165\u56fe\u50cf\uff0cAdobe Flash\u53ef\u80fd\u51fa\u73b0\u4e86\u6545\u969c\u3002\u8fd9\u53ef\u80fd\u662f\u56e0\u4e3a\u7c98\u8d34\u5927\u578b\u6587\u4ef6\u5f15\u8d77\u7684\u3002"},http:{400:"\u9519\u8bef\u7684\u8981\u6c42\uff1a{0}",401:"\u672a\u6388\u6743\uff1a{0}",403:"\u7981\u6b62\uff1a{0}",404:"\u627e\u4e0d\u5230\uff1a{0}",407:"\u9700\u8981Proxy\u6388\u6743\uff1a{0}",409:"\u6587\u4ef6\u51b2\u7a81\uff1a{0}",413:"\u88c5\u8f7d\u8fc7\u5927\uff1a{0}",415:"\u4e0d\u652f\u6301\u7684\u5a92\u4f53\u7c7b\u578b\uff1a{0}",500:"\u5185\u90e8\u670d\u52a1\u5668\u9519\u8bef\uff1a{0}",501:"\u5c1a\u672a\u6267\u884c\uff1a{0}"}}}},b=function(a,b){var c=a.src.indexOf("?");return a.src.indexOf(b)+b.length===c},c=function(a){for(var b=a.split("."),c=window,d=0;d<b.length&&void 0!==c&&null!==c;++d)c=c[b[d]];return c},d=function(a,b){if(a){var d=a.getAttribute("data-main");if(d){a.removeAttribute("data-main");var e=c(d);if("function"==typeof e)return e;console.warn("attribute on "+b+" does not reference a global method")}else console.warn("no data-main attribute found on "+b+" script tag")}};!function(a,c){var e=d(document.currentScript,c);if(e)return e;for(var f=document.getElementsByTagName("script"),g=0;g<f.length;g++)if(b(f[g],a)){var h=d(f[g],c);if(h)return h}throw"cannot locate "+c+" script tag"}("tbio_zh.js","strings for language zh")({version:"2.3.0",strings:a})}();