var dturl = webix.proxy("firebase", ref)
  
  webix.i18n.dateFormat = "%Y-%m-%d";
  webix.i18n.setLocale()
    var clm01 = [
            // {header: "E" , template:"{common.editIcon()}", width: 30},
            // {header: "D", template:"{common.trashIcon()}", width: 30},
             { id: "crid", header: "Courier ID", editor: "text"},
             { id: "crname" , header: "Courier Name", width: 200, sort: "string" , editor: "text"},             
             { id: "crzone", header: ["Zona", {content: "textFilter" }], sort:"string"},
             { id: "crmainhp" , header: "No HP", width: 150 },
             { id: "cractive" , header: "Status", checkValue: "y", template:"{common.checkbox()}"},
             { id: "craddress", width: 400, header: "Address"},
             { id: "cruuid", header: "Mobile GUID", width: 300}
             ]
var toolbar = {
		view:"toolbar",
		elements:[
			{ view:"label", label:"Master Data Courier"},
			{ view:"button", value:"Add", width:100, click:function(){
				var row = $$("gridcr").add(blankcr);	
                $$("gridcr").unselect()
                $$("gridcr").select(row,"crid");
           //     $$("tab02").show();
			}},
        //  {view: "button" , value: "Save" , width: 100, click: function(){
          //    $$("gridcr").save();
           //   dturl.save();
             // $$("tab01").show();
          //}},
			{ view:"button", value:"Remove", width:100, click:function(){
				var id = $$("gridcr").getSelectedId();
				if (id)
					$$("gridcr").remove(id);
				else
					webix.message("Please select any row first");
			}}
		]
	}
 
    var layout = {rows: [
        toolbar,
        {view: "datatable", id: "gridcr", columns: clm01, multiselect: false, select: "row", editaction: "dblclick", editable: true, url: dturl, save: dturl },
        {type:"header", template: "(C) 2015 paketku"},
        ]
    }

webix.ui(layout);
