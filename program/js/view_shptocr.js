var datacr = [{ crid: "cr01" , crname: "Indra" , crloc: "<a href='#'>location cr01</a>" },
              { crid: "cr02" , crname: "Indra" , crloc: "<a href='#'>location cr02</a>" }]

var tplsearch = function(obj){
  
  var tgl = webix.i18n.dateFormatStr(obj.trdate);
  return "<div class=''>" + obj.trid +" / "+ tgl + "</div>";

}
    
var btnbawah = {

								view: "form",
								css: "highlighted_header header6",
								paddingX:5,
								paddingY:5,
								height:40,

								cols:[
                                  { view: "button", type: "form", icon: "plus", label: "Save", width: 90, click: function(){ $$("mainView").save(); webix.message("data saved");}},
									{ view: "button", css: "button2", icon: "angle-left", label: "Reset", width: 90},

									{},
									{ view: "button", css: "button0", icon: "times", label: "Delete", width: 90}
								]

							};
    
var search = {
			rows:[
				{
					view: "form",
                  id: "frmsearch",
					paddingX:5,
					paddingY:5,
					margin: 2,
					rows:[
						{view: "label",label: "Find Shipment:"},
                      {view: "search" , id: "cari"}
					]
				},
				{
					view: "list",
					id: "list",
					select: true,
					template: tplsearch,
                  url: proxy,
                  save: proxy
				}
			]
		}
    
    var frmisi = [{view: "text", label: "Awb" , name: "trid"},
                  {view: "datepicker" , label: "Date", name: "trdate", stringResult: true, format: "%Y-%m-%d"},
                  {view: "text", label: "Srv" , name: "trtypeofservice"},
                  {view: "text" , label: "Shipper" , name: "trshpname" } ,
                  {view: "text" , label: "Consignee" , name: "trcnename" } ,
                  {view: "text" , label: "Address" , name: "trcneaddress" } ,
                  {view: "text" , label: "City" , name: "trcnecity" } ,
                  {view: "select", label: "Courier" , name: "crid", options: ["CR01","CR02","CR03"]},
                 btnbawah];

var transview =  {
		view: "form",
		id: "mainView",
		elementsConfig:{

			labelWidth: 130
		},
		scroll: true,
        elements: frmisi
    }
                       
    
    var courierloc = {id:"crView",view:"datatable", autoConfig: true, data: datacr}
        var maps = {
				view:"google-map",
				id:"mapView",
				zoom:12,
				center:[ -6.212679, 106.845829 ]
			}
    var products = {}
        
      
var layout = {
	type: "space",
	rows:[
		{
				type: "wide",
				cols:[
					search,
					{
						gravity: 2.2,
						rows:[
							{view: "tabbar", multiview: true,optionWidth: 130,
								options:[
									{id: "mainView", value: "Job Assignment"},
									{id: "crView", value: "Courier Location"},
									{id: "mapView", value: "Maps"}
								]
							},
							{
								cells:[
									transview,
									courierloc,
									maps
								]
							}
							
						]



			}
		]}


	]

};

webix.ui(layout);

	$$("mainView").bind($$("list"));



$$("cari").attachEvent("onTimedKeyPress",function(){ 

	var value = this.getValue().toLowerCase(); 
	$$("list").filter(function(obj){ //here it filters data!
		return obj.trid.toLowerCase().indexOf(value)==0;
	})
});
