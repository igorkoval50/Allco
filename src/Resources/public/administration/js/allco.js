(this.webpackJsonp=this.webpackJsonp||[]).push([["allco"],{"1FxZ":function(e,t,a){var n=a("FakK");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("7bbe2417",n,!0,{})},"2sQZ":function(e,t,a){var n=a("sa9r");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("d80fb96c",n,!0,{})},"2x3u":function(e,t){e.exports='{% block sw_cms_block_image_text_custom %}\n    <div class="sw-cms-block-image-text-custom">\n        <slot name="left">{% block sw_cms_block_image_text_custom_slot_left %}{% endblock %}</slot>\n        <slot name="right">{% block sw_cms_block_image_text_custom_slot_right %}{% endblock %}</slot>\n    </div>\n{% endblock %}\n'},"4w3q":function(e){e.exports=JSON.parse('{"sw-cms":{"blocks":{"text":{"headline":{"label":"Headline product slider"}},"imageText":{"imageTextReversed":{"label":"Two columns text & image"},"imageTextCustom":{"label":"Two columns image & text"},"brands":{"label":"brands image slider"},"imageCategoryText":{"label-right":"image-right & text-category","label-left":"image-left & text-category"}}}}}')},"4yhZ":function(e,t,a){},As62:function(e,t,a){},BrZ2:function(e,t,a){var n=a("WlyM");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("5d56cf4c",n,!0,{})},Dc7d:function(e,t,a){var n=a("pKy5");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("f21095fc",n,!0,{})},EEUV:function(e,t){e.exports='{% block sw_cms_block_image_text_row %}\n    <div class="sw-cms-block-image-text-row">\n        <div class="sw-cms-block-image-text-row__top">\n            <div class="top-image">\n                <slot name="top-image"></slot>\n            </div>\n           <div class="top-text">\n               <slot name="top-text"></slot>\n           </div>\n        </div>\n\n       <div class="three-element">\n           <div class="sw-cms-block-image-text-row__left">\n               <slot name="left-image"></slot>\n               <slot name="left-text"></slot>\n           </div>\n\n           <div class="sw-cms-block-image-text-row__center">\n               <slot name="center-image"></slot>\n               <slot name="center-text"></slot>\n           </div>\n\n           <div class="sw-cms-block-image-text-row__right">\n               <slot name="right-image"></slot>\n               <slot name="right-text"></slot>\n           </div>\n       </div>\n    </div>\n{% endblock %}\n'},FakK:function(e,t,a){},Fvvb:function(e,t,a){var n=a("daiL");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("7268bb2c",n,!0,{})},R7Fn:function(e,t){e.exports='{% block sw_cms_block_text_headline %}\n    <div class="sw-cms-block-text-headline">\n        <slot name="center"></slot>\n    </div>\n{% endblock %}\n'},R7i5:function(e,t,a){},RMvS:function(e,t,a){var n=a("R7i5");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("71a580d5",n,!0,{})},SuN1:function(e,t,a){},"UE/t":function(e){e.exports=JSON.parse('{"sw-cms":{"blocks":{"text":{"headline":{"label":"Headline product slider"}},"imageText":{"imageTextReversed":{"label":"Text & Bild mit zwei Spalten"},"imageTextCustom":{"label":"Bild & Text mit zwei Spalten"},"brands":{"label":"brands image slider"},"imageCategoryText":{"label-right":"Bild rechts & Textkategorie","label-left":"Bild links und Textkategorie"}}}}}')},VVhh:function(e,t,a){var n=a("4yhZ");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("6b36003b",n,!0,{})},"W/Mj":function(e,t,a){"use strict";a.r(t);var n=a("l2cv"),s=a.n(n);a("iZln");Shopware.Component.register("sw-cms-block-image-text-reversed",{template:s.a});var i=a("zY67"),o=a.n(i);a("jz8a");Shopware.Component.register("sw-cms-preview-image-text-reversed",{template:o.a}),Shopware.Service("cmsService").registerCmsBlock({name:"image-text-reversed",label:"sw-cms.blocks.imageText.imageTextReversed.label",category:"text-image",component:"sw-cms-block-image-text-reversed",previewComponent:"sw-cms-preview-image-text-reversed",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{left:{type:"text",default:{config:{content:{source:"static",value:'\n                                <div class="top-text">\n                                <svg xmlns="http://www.w3.org/2000/svg" width="42" height="162" viewBox="0 0 42 162">\n                                  <text id="_" data-name="„" transform="translate(0 126)" fill="#fff" font-size="135" font-family="LeagueGothic-Regular, League Gothic" letter-spacing="0.027em" opacity="0.902"><tspan x="0" y="0">„</tspan></text>\n                                </svg>\n                                </div>\n                                <h2>Unser Ziel ist es, Tiernahrung zu entwickeln, die ohne Wenn und Aber die tatsächlichen Bedürfnisse der Tiere in den Mittelpunkt stellt.</h2>\n                                <p>- Leitsatz von Claus und Jörg Lefers</p>\n                        '.trim()}}}},right:{type:"image",default:{config:{displayMode:{source:"static",value:"standard"}},data:{media:{url:"/allco/static/img/cms/dog.jpg"}}}}}});var c=a("2x3u"),l=a.n(c);a("a5Z+");Shopware.Component.register("sw-cms-block-image-text-custom",{template:l.a});var r=a("fnTF"),m=a.n(r);a("Dc7d");Shopware.Component.register("sw-cms-preview-image-text-custom",{template:m.a}),Shopware.Service("cmsService").registerCmsBlock({name:"image-text-custom",label:"sw-cms.blocks.imageText.imageTextCustom.label",category:"text-image",component:"sw-cms-block-image-text-custom",previewComponent:"sw-cms-preview-image-text-custom",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{left:{type:"image",default:{config:{displayMode:{source:"static",value:"standard"}},data:{media:{url:"/allco/static/img/cms/about.jpg"}}}},right:{type:"text",default:{config:{content:{source:"static",value:'\n                                <h2>Tiernahrung mit Leidenschaft und Know-how.</h2>\n                                <p>Das Fundament von ALLCO und unserem Erfolg ist unsere Produktqualität. Unser Versprechen: Ob Hund, Katze, Pferd, Fisch oder Nager - unser Futter entspricht den Bedürfnissen der jeweiligen Tierart, abgestimmt auf ihr Alter und ihre Lebensbedingungen. Unsere 30 tierbegeisterten Mitarbeiter geben dabei täglich alles, für gesunde Tiere und zufriedene Kunden. Seit Dezember 2017 gehört ALLCO zur tschechischen VAFO-Gruppe und bietet exklusiv für den deutschen Markt die Flagship-Marke BRIT sowie Carnilove Hund & Katze an.</p>\n                                <a class="btn btn-primary" href="#">MEHR ÜBER UNS</a>\n                        '.trim()}}}}}});var d=a("z5IG"),g=a.n(d);a("BrZ2");Shopware.Component.register("sw-cms-block-image-brands",{template:g.a});var p=a("ouxh"),u=a.n(p);a("1FxZ");Shopware.Component.register("sw-cms-preview-image-brands",{template:u.a}),Shopware.Service("cmsService").registerCmsBlock({name:"image-brands",label:"sw-cms.blocks.imageText.brands.label",category:"text-image",component:"sw-cms-block-image-brands",previewComponent:"sw-cms-preview-image-brands",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{right:{type:"text",default:{config:{content:{source:"static",value:"\n                                <h2>Unsere Marken</h2>\n                        ".trim()}}}}}});var v=a("EEUV"),f=a.n(v);a("Wfp6");const{Component:x}=Shopware;x.register("sw-cms-block-image-text-rows",{template:f.a});var w=a("h4KR"),h=a.n(w);a("Fvvb");const{Component:b}=Shopware;b.register("sw-cms-preview-image-text-rows",{template:h.a}),Shopware.Service("cmsService").registerCmsBlock({name:"image-text-rows",label:"sw-cms.blocks.imageText.imageCategoryText.label-right",category:"text-image",component:"sw-cms-block-image-text-rows",previewComponent:"sw-cms-preview-image-text-rows",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{"top-image":{type:"image",default:{config:{displayMode:{source:"static",value:"cover"}},data:{media:{url:"/allco/static/img/cms/right-image.jpg"}}}},"top-text":{type:"text",default:{config:{content:{source:"static",value:'\n                        <h2>Futter und Snacks für Hunde.</h2>\n                        <p class="transform"><span class="white">CARNILOVE WURDE MIT DEM GEDANKEN AN DIE NATÜRLICHE HERKUNFT DER HUNDE ZUSAMMENGESTELLT.</span></p>\n                        <p>Das breite Spektrum an sorgfältig ausgewähltem Fleisch von \n                        <span class="white">frei lebenden Tieren </span>\n                        wie Rentier, Ente, Fasan, Truthahn, Lamm, Wildschwein, Lachs und die neuen Futtermittel aus dem FRESH MEAT-Sortiment wie Karpfen, Forelle, Strauß, Kaninchen und Huhn \n                        <span class="white">entsprechen der Zusammensetzung der natürlichen Beute </span>\n                        und gewährleisten die Aufnahme wichtiger Aminosäuren.</p>\n                        <p><span class="white">Waldfrüchte, Gemüsearten, Wildbeeren</span> und sind natürliche Quellen wichtiger Vitamine, Antioxidanzien und anderer lebenswichtiger Inhaltsstoffe.</p>\n                        '.trim()}}}},"left-image":{type:"image",default:{config:{displayMode:{source:"static",value:"cover"}},data:{media:{url:"/allco/static/img/cms/bags.jpg"}}}},"left-text":{type:"text",default:{config:{content:{source:"static",value:'\n                        <a href="#"><span>TROCKENFUTTER</span></a>\n                        '.trim()}}}},"center-image":{type:"image",default:{config:{displayMode:{source:"static",value:"cover"}},data:{media:{url:"/allco/static/img/cms/bags.jpg"}}}},"center-text":{type:"text",default:{config:{content:{source:"static",value:'\n                         <a href="#"><span>NASSFUTTER</span></a>\n                        '.trim()}}}},"right-image":{type:"image",default:{config:{displayMode:{source:"static",value:"cover"}},data:{media:{url:"/allco/static/img/cms/bags.jpg"}}}},"right-text":{type:"text",default:{config:{content:{source:"static",value:'\n                        <a href="#"><span>SNACKS</span></a>\n                        '.trim()}}}}}});var _=a("szmf"),k=a.n(_);a("btQW");const{Component:S}=Shopware;S.register("sw-cms-block-images-text-rows",{template:k.a});var y=a("c6qW"),T=a.n(y);a("RMvS");const{Component:C}=Shopware;C.register("sw-cms-preview-images-text-rows",{template:T.a}),Shopware.Service("cmsService").registerCmsBlock({name:"images-text-rows",label:"sw-cms.blocks.imageText.imageCategoryText.label-left",category:"text-image",component:"sw-cms-block-images-text-rows",previewComponent:"sw-cms-preview-images-text-rows",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{"top-image":{type:"image",default:{config:{displayMode:{source:"static",value:"cover"}},data:{media:{url:"/allco/static/img/cms/left-image.jpg"}}}},"top-text":{type:"text",default:{config:{content:{source:"static",value:'\n                        <h2>Futter und Snacks für Katzen.</h2>\n                        <p class="transform"><span class="white">CARNILOVE WURDE MIT DEM GEDANKEN AN DIE NATÜRLICHE HERKUNFT DER HUNDE ZUSAMMENGESTELLT.</span></p>\n                        \n                        <p>\n                        Getreidefreie Futtermittel, die reich an Fleisch von frei lebenden Tieren wie Lachs, \n                        <span class="white">Truthahn, Ente, Fasan, Lamm, Rentier und Wildschwein</span> \n                        sind, und die neuen Futtermittel aus dem Fresh Meat-Sortiment, wie \n                        <span class="white">Karpfen, Forelle, Kaninchen und Huhn</span> \n                        mit Waldfrüchten und -kräutern liefern essentielle Proteine, Fette, Vitamine und natürliche Antioxidanzien für eine perfekte \n                        körperliche Kondition und die optimale Unterstützung des Immunsystems.\n                        </p>\n                        '.trim()}}}},"left-image":{type:"image",default:{config:{displayMode:{source:"static",value:"cover"}},data:{media:{url:"/allco/static/img/cms/bags.jpg"}}}},"left-text":{type:"text",default:{config:{content:{source:"static",value:'\n                        <a href="#"><span>TROCKENFUTTER</span></a>\n                        '.trim()}}}},"center-image":{type:"image",default:{config:{displayMode:{source:"static",value:"cover"}},data:{media:{url:"/allco/static/img/cms/bags.jpg"}}}},"center-text":{type:"text",default:{config:{content:{source:"static",value:'\n                         <a href="#"><span>NASSFUTTER</span></a>\n                        '.trim()}}}},"right-image":{type:"image",default:{config:{displayMode:{source:"static",value:"cover"}},data:{media:{url:"/allco/static/img/cms/bags.jpg"}}}},"right-text":{type:"text",default:{config:{content:{source:"static",value:'\n                        <a href="#"><span>SNACKS</span></a>\n                        '.trim()}}}}}});var E=a("R7Fn"),M=a.n(E);a("2sQZ");Shopware.Component.register("sw-cms-block-text-headline",{template:M.a});var A=a("ZHZB"),R=a.n(A);a("VVhh");Shopware.Component.register("sw-cms-preview-text-headline",{template:R.a}),Shopware.Service("cmsService").registerCmsBlock({name:"text-headline",label:"sw-cms.blocks.text.headline.label",category:"text",component:"sw-cms-block-text-headline",previewComponent:"sw-cms-preview-text-headline",defaultConfig:{marginBottom:"20px",marginTop:"20px",marginLeft:"20px",marginRight:"20px",sizingMode:"boxed"},slots:{center:{type:"text",default:{config:{content:{source:"static",value:'\n                                <h2>Unsere beliebtesten Produkte</h2>\n                                <div class="swicher">\n                                <div id="dog" class="dog animal active">\n                                <i>\n                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="26" height="27" viewBox="0 0 26 27">\n                              <defs>\n                                <clipPath id="clip-path">\n                                  <rect width="26" height="27" fill="none"/>\n                                </clipPath>\n                              </defs>\n                              <g id="Повторяющаяся_сетка_6" data-name="Повторяющаяся сетка 6" clip-path="url(#clip-path)">\n                                <g id="Сгруппировать_7945" data-name="Сгруппировать 7945">\n                                  <g id="Сгруппировать_7944" data-name="Сгруппировать 7944" clip-path="url(#clip-path)">\n                                    <path id="Контур_20771" data-name="Контур 20771" d="M19.381,33.973H31.427a.548.548,0,0,0,.548-.548v-1.1a1.645,1.645,0,0,0-1.643-1.643H28.064c.7-1.158,1.7-3.184,1.132-4.587-.53-1.3-1.857-2.651-5.165-1.707a.547.547,0,0,0,.3,1.053c3.058-.872,3.655.587,3.851,1.068.427,1.046-.741,3.253-1.577,4.4a.547.547,0,0,0,.442.871h3.285a.548.548,0,0,1,.548.548v.548h-11.3c-.54-.446-2.378-1.966-3.125-2.606a.778.778,0,0,1-.178-1.143c.109-.137.373-.352.593-.191.943.693,2.182,1.637,2.182,1.637a.547.547,0,0,0,.879-.435v-.548c0-4.779,1.091-5.836,2.246-6.954.111-.107.221-.214.331-.324l4.38-4.38a.547.547,0,1,0-.774-.774l-4.38,4.38c-.106.106-.212.209-.319.312-1.223,1.184-2.485,2.406-2.574,7.191-.407-.307-.9-.672-1.323-.987a1.5,1.5,0,0,0-2.1.392,1.857,1.857,0,0,0,.323,2.655c.884.758,3.269,2.725,3.293,2.744a.547.547,0,0,0,.348.125" transform="translate(-14.941 -7.761)" fill="#505050"/>\n                                    <path id="Контур_20772" data-name="Контур 20772" d="M6.57,26.281H9.308a.548.548,0,0,0,.548-.548v-1.1a1.644,1.644,0,0,0-1.219-1.587L7.195,18.243c2.241-2.066,2.661-3.545,2.661-5.649A23.066,23.066,0,0,0,8.88,7.443c1.408-.551,3-1.127,3.9-1.453a.546.546,0,0,0,.347-.388,16.372,16.372,0,0,0,.562-2.864A1.539,1.539,0,0,0,12.046,1.1h-2.5C9.428.977,9.271.82,9.128.69A2.811,2.811,0,0,0,7.118,0a10.966,10.966,0,0,0-4.7,1.2C.792,2.351,0,4.288,0,7.118A2.74,2.74,0,0,0,3.262,9.807,2.774,2.774,0,0,0,5.475,7.02a8.157,8.157,0,0,0-.608-3.438.548.548,0,0,0-.975.5A7.391,7.391,0,0,1,4.38,7.028a1.7,1.7,0,0,1-1.32,1.7A1.645,1.645,0,0,1,1.1,7.118c0-2.449.641-4.094,1.96-5.029A10.037,10.037,0,0,1,7.118,1.1,1.719,1.719,0,0,1,8.392,1.5c.234.213.511.511.515.515a.548.548,0,0,0,.4.175h2.738c.338,0,.548.091.548.548a15.768,15.768,0,0,1-.464,2.323c-1.046.379-2.727.992-4.12,1.548a.548.548,0,0,0-.316.682,25.191,25.191,0,0,1,1.067,5.3c0,1.691-.178,2.958-2.554,5.066a.547.547,0,0,0-.161.567L7.688,23.7a.548.548,0,0,0,.525.39.548.548,0,0,1,.548.548v.548H6.57a.548.548,0,1,0,0,1.1" transform="translate(11.558 -0.069)" fill="#505050"/>\n                                  </g>\n                                </g>\n                              </g>\n                            </svg>\n                            </i>\n                                <span>Hunde</span>\n                            </div>\n                            <div id="cat" class="cat animal">\n                            <i>\n                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="29.008" height="27.311" viewBox="0 0 29.008 27.311">\n                              <defs>\n                                <clipPath id="clip-path">\n                                  <rect width="29.008" height="27.31" fill="none"/>\n                                </clipPath>\n                              </defs>\n                              <g id="Повторяющаяся_сетка_6" data-name="Повторяющаяся сетка 6" clip-path="url(#clip-path)">\n                                <g id="Сгруппировать_9012" data-name="Сгруппировать 9012">\n                                  <g id="Сгруппировать_7946" data-name="Сгруппировать 7946" transform="translate(0 0)" clip-path="url(#clip-path)">\n                                    <path id="Контур_20773" data-name="Контур 20773" d="M6.658,27.31h11.5a.605.605,0,0,0,.605-.605v-1.21a1.817,1.817,0,0,0-1.815-1.815H14.888a8.412,8.412,0,0,0,.846-3.025c0-1.38-.63-3.025-3.63-3.025a.605.605,0,1,0,0,1.21c2.133,0,2.42.918,2.42,1.815A9.59,9.59,0,0,1,13.387,24a.605.605,0,0,0,.532.892h3.025a.606.606,0,0,1,.605.605V26.1H6.658C4.3,26.1,2.7,24.992,1.644,22.613a5.61,5.61,0,0,1,1.276-6.1,6,6,0,0,0,1.873-4.3A3.379,3.379,0,0,0,3.652,9.9a.834.834,0,0,1-.078-1.216.934.934,0,0,1,1.249.027,5.091,5.091,0,0,1,1.63,3.376c.1,1.26-.226,3.243-2.3,5.54a3.9,3.9,0,0,0-.991,4.311,4.171,4.171,0,0,0,2.468,2.176.606.606,0,0,0,.81-.535c.105-1.888.779-4.491,2.01-5.745.483-.491.936-1.056,1.416-1.654a14.955,14.955,0,0,1,5.139-4.536c2.13-1.066,3.034-3.628,3.833-5.889.134-.378.264-.748.4-1.1a7.323,7.323,0,0,1,2.916-3.285,6.081,6.081,0,0,1,0,1.214.606.606,0,0,0,.586.663,7.129,7.129,0,0,1,1.789.288c1.829.54,1.829.54,2.179,2.271.065.321.14.692.238,1.121a2.105,2.105,0,0,0,.745,1.23c.046.041.091.082.136.126a1.672,1.672,0,0,1-.12.359,4.764,4.764,0,0,1-1.226,1.448,8.019,8.019,0,0,1-2.552.362.618.618,0,0,0-.224.045c-.138.056-1.346.62-1.392,3.085a.584.584,0,0,0,.007.1,5.09,5.09,0,0,1-.606,3.571,3.486,3.486,0,0,0-.529,1.738c.04,1.465,1.682,5.129,1.869,5.542a.6.6,0,0,0,.551.355.606.606,0,0,1,.605.605V26.1H22.39a1.189,1.189,0,0,1-.683-.3,32.807,32.807,0,0,1-2.346-7.036.605.605,0,0,0-1.2.145,33.215,33.215,0,0,0,2.472,7.442,2.207,2.207,0,0,0,1.76.957h2.42a.605.605,0,0,0,.605-.605v-1.21a1.818,1.818,0,0,0-1.4-1.767A21.257,21.257,0,0,1,22.39,18.96a2.5,2.5,0,0,1,.4-1.154,6.264,6.264,0,0,0,.733-4.254,2.539,2.539,0,0,1,.594-1.9,8.856,8.856,0,0,0,2.856-.464,5.486,5.486,0,0,0,1.794-1.971,1.552,1.552,0,0,0-.077-1.787c-.062-.064-.127-.122-.192-.181a.929.929,0,0,1-.372-.6c-.095-.418-.168-.779-.232-1.093-.427-2.106-.667-2.495-3.023-3.191a8.418,8.418,0,0,0-1.478-.295A3.8,3.8,0,0,0,23.117.346.73.73,0,0,0,22.411,0c-.932.076-3.448,1.955-4.306,4.225-.136.361-.269.739-.406,1.126-.721,2.045-1.539,4.362-3.233,5.209a16.175,16.175,0,0,0-5.541,4.861c-.46.574-.9,1.115-1.335,1.563C6.19,18.41,5.544,20.9,5.319,22.621a2.718,2.718,0,0,1-1.049-1.176,2.8,2.8,0,0,1,.784-3.009c2.358-2.615,2.718-4.946,2.6-6.442A6.325,6.325,0,0,0,5.623,7.8a2.152,2.152,0,0,0-2.932.052,2.026,2.026,0,0,0-.551,1.534,2.048,2.048,0,0,0,.745,1.447,2.169,2.169,0,0,1,.7,1.469,4.871,4.871,0,0,1-1.565,3.4A6.785,6.785,0,0,0,.539,23.1C1.8,25.935,3.8,27.31,6.658,27.31" transform="translate(-0.001 0)" fill="#505050"/>\n                                  </g>\n                                </g>\n                              </g>\n                            </svg>\n                            </i>\n                            <span>KATZEN</span>\n                            </div>\n                            </div>\n                        '.trim()}}}}}});var F=a("UE/t"),L=a("4w3q");Shopware.Locale.extend("de-DE",F),Shopware.Locale.extend("en-GB",L)},Wfp6:function(e,t,a){var n=a("As62");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("d1147692",n,!0,{})},WlyM:function(e,t,a){},ZHZB:function(e,t){e.exports='{% block sw_cms_block_text_headline_preview %}\n    <div class="sw-cms-preview-text-headline">\n        <div class="sw-cms-preview-image-brands">\n            <img :src="\'/allco/static/img/cms/product-headline.jpg\' | asset">\n        </div>\n    </div>\n{% endblock %}\n\n'},"a5Z+":function(e,t,a){var n=a("c12o");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("f434c5a6",n,!0,{})},btQW:function(e,t,a){var n=a("SuN1");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("de6be9ec",n,!0,{})},c12o:function(e,t,a){},c6qW:function(e,t){e.exports='{% block sw_cms_block_image_text_rows_preview %}\n    <div class="sw-cms-preview-images-text-rows">\n        <div>\n            <img :src="\'/allco/static/img/cms/image-text-categorys.jpg\' | asset">\n        </div>\n    </div>\n{% endblock %}\n'},d3oF:function(e,t,a){},daiL:function(e,t,a){},fnTF:function(e,t){e.exports='{% block sw_cms_block_image_text_custom_preview %}\n    <div class="sw-cms-preview-image-text-custom">\n        <div>\n            <img :src="\'/allco/static/img/cms/image-text.jpg\' | asset">\n        </div>\n    </div>\n{% endblock %}\n'},h4KR:function(e,t){e.exports='{% block sw_cms_block_image_text_rows_preview %}\n    <div class="sw-cms-preview-image-text-rows">\n        <div>\n            <img :src="\'/allco/static/img/cms/image-text-category.jpg\' | asset">\n        </div>\n    </div>\n{% endblock %}\n'},iZln:function(e,t,a){var n=a("mNok");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("6d64831c",n,!0,{})},jz8a:function(e,t,a){var n=a("d3oF");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,a("SZ7m").default)("644f3f31",n,!0,{})},l2cv:function(e,t){e.exports='{% block sw_cms_block_image_text_reversed %}\n    <div class="sw-cms-block-image-text-reversed">\n        <slot name="left">{% block sw_cms_block_image_text_reversed_slot_left %}{% endblock %}</slot>\n        <slot name="right">{% block sw_cms_block_image_text_reversed_slot_right %}{% endblock %}</slot>\n    </div>\n{% endblock %}\n'},mNok:function(e,t,a){},ouxh:function(e,t){e.exports='{% block sw_cms_block_image_brands_preview %}\n    <div class="sw-cms-preview-image-brands">\n        <div>\n            <img :src="\'/allco/static/img/cms/brands-slider.jpg\' | asset">\n        </div>\n    </div>\n{% endblock %}\n'},pKy5:function(e,t,a){},sa9r:function(e,t,a){},szmf:function(e,t){e.exports='{% block sw_cms_block_image_text_row %}\n    <div class="sw-cms-block-image-text-rows">\n        <div class="sw-cms-block-image-text-row__top">\n            <div class="top-image">\n                <slot name="top-image"></slot>\n            </div>\n            <div class="top-text">\n                <slot name="top-text"></slot>\n            </div>\n        </div>\n\n        <div class="three-element">\n            <div class="sw-cms-block-image-text-row__left">\n                <slot name="left-image"></slot>\n                <slot name="left-text"></slot>\n            </div>\n\n            <div class="sw-cms-block-image-text-row__center">\n                <slot name="center-image"></slot>\n                <slot name="center-text"></slot>\n            </div>\n\n            <div class="sw-cms-block-image-text-row__right">\n                <slot name="right-image"></slot>\n                <slot name="right-text"></slot>\n            </div>\n        </div>\n    </div>\n{% endblock %}\n'},z5IG:function(e,t){e.exports='{% block sw_cms_block_image_brands %}\n    <div class="sw-cms-block-image-text-brands">\n        <slot name="right"></slot>\n        <img :src="\'/allco/static/img/cms/brands-slider.jpg\' | asset">\n    </div>\n{% endblock %}\n'},zY67:function(e,t){e.exports='{% block sw_cms_block_image_text_reversed_preview %}\n    <div class="sw-cms-preview-image-text-reversed">\n        <div>\n            <img :src="\'/allco/static/img/cms/text-image.jpg\' | asset">\n        </div>\n    </div>\n{% endblock %}\n'}},[["W/Mj","runtime","vendors-node"]]]);