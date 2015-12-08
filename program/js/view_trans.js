var blanktr =
    {
"trid": "",
"trdate": "",
"trorg": "JKT",
"trservpoint": "",
"trtypeofservice":"",
"trdst": "",
"trcust": "",
"trshpname": "",
"trshpaddress": "",
"trshpcity": "",
"trshpnohp": "",
"trshpzone": "",
"crid": "",
"trcneename": "",
"trcneeaddress": "",
"trcneecity": "",
"trcneenohap": "",
"trcneeremark": "",
"trpodate": "",
"trpodtime": "",
"trpodreceiver": "",
"trpodstatus": "",
"trpodremark": ""
};

var toolbar = {
		view:"toolbar",
		elements:[
			{ view:"label", label:"(C) 2015"},
			{ view:"button", value:"Add", width:100, click:function(){
				var row = $$("grid").add(blanktr);		
                $$("grid").select(row,"trid");
           //     $$("tab02").show();
			}},
          {view: "button" , value: "Save" , width: 100, click: function(){
              $$("myfrm").save();
             // $$("tab01").show();
          }},
			{ view:"button", value:"Remove", width:100, click:function(){
				var id = $$("grid").getSelectedId();
				if (id)
					$$("grid").remove(id);
				else
					webix.message("Please select any row first");
			}}
		]
	}


var vfrm = {
  "view": "form",
  "id" : "myfrm",
  "elements": [
    {
    "view": "text",
    "name": "trid",
    "label": "AWB Number",
    "labelWidth": "100"
  },
  {
    "view": "datepicker",
    "name": "trdate",
    "label": "Date",
    "labelWidth": "100",
    "stringResult":true, 
    "format":"%Y-%m-%d"
  },
  {
    "view": "text",
    "name": "trorg",
    "label": "Origin",
    "labelWidth": "100",
    "options": [
      ""
    ]
  },
  {
    "view": "select",
    "name": "trservpoint",
    "label": "Service Point",
    "labelWidth": "100",
    "options": ["TOC","INFINA","COPYLAS","J2","OTHERS"]
  },
  {
    "view": "select",
    "name": "trtypeofservice",
    "label": "Service",
    "labelWidth": "100",
    "options": ["P2P","REG","ONS","SDS","OTHERS"]
  },
  {
    "view": "text",
    "name": "trdst",
    "label": "Destination",
    "labelWidth": "100"
  },
  {
    "view": "text",
    "name": "trcust",
    "label": "Shipper ID",
    "labelWidth": "100"
  },
  {
    "view": "text",
    "name": "trshpname",
    "label": "Shipper Name",
    "labelWidth": "100"
  },
  {
    "view": "textarea",
    "name": "trshpaddress",
    "label": "Shipper Address",
    "labelWidth": "100"
  },
  {
    "view": "text",
    "name": "trshpcity",
    "label": "Shipper City",
    "labelWidth": "100"
  },
  {
    "view": "text",
    "name": "trshpnohp",
    "label": "Handphone",
    "labelWidth": "100"
  },
  {
    "view": "text",
    "name": "trshpzone",
    "label": "Phone Number",
    "labelWidth": "100"
  },
  {
    "view": "text",
    "name": "crid",
    "label": "Courier ID",
    "labelWidth": "100"
  },
  {
    "view": "text",
    "name": "trcneename",
    "label": "Consignee name",
    "labelWidth": "100"
  },
  {
    "view": "textarea",
    "name": "trcneeaddress",
    "label": "Consignee Address",
    "labelWidth": "100"
  },
  {
    "view": "text",
    "name": "trcneecity",
    "label": "Consignee City",
    "labelWidth": "100"
  },
  {
    "view": "text",
    "name": "trcneenohap",
    "label": "Consignee HP",
    "labelWidth": "100"
  },
  {
    "view": "text",
    "name": "trcneeremark",
    "label": "Consignee Remark",
    "labelWidth": "100"
  },
  {
    "view": "datepicker",
    "name": "trpodate",
    "label": "POD Date",
    "labelWidth": "100",
        "stringResult":true, 
    "format":"%Y-%m-%d"
  },
  {
    "view": "datepicker",
    "name": "trpodtime",
    "label": "POD time",
    "labelWidth": "100",
    "timepicker":true,
    "stringResult":true ,
    "type": "time"
 
  },
  {
    "view": "text",
    "name": "trpodreceiver",
    "label": "POD Receiver",
    "labelWidth": "100"
  },
  {
    "view": "text",
    "name": "trpodstatus",
    "label": "POD Status",
    "labelWidth": "100"
  },
  {
    "view": "text",
    "name": "trpodremark",
    "label": "POD Remark",
    "labelWidth": "100"
  },
    { view: "button",
      value: "save",
      click: function(){
        $$('myfrm').save();
     }
    }
  ]
}

var clmn01 = [{id:"trid", header:"No AWB", sort: "int" },
              {id:"trdate",format:webix.Date.dateToStr("%Y-%m-%d") ,header:"AWB Date",sort: "string"},
              {id:"trorg",header:"Origin",sort: "string"},            
              {id:"trservpoint",header:"Service Point",sort: "string"},              
              {id:"trtypeofservice",header:"Service",sort: "string"},
              {id:"trdst",header:"Destination",sort: "string"},              
              {id:"trcust",header:"Shipper ID",sort: "int"},              
              {id:"trshpname",header:"Shipper Name",sort: "string"},              
              {id:"trshpaddress",header:"Shipper Address",sort: "string"},              
              {id:"trshpcity",header:"Shipper City",sort: "string"},              
              {id:"trshpnohp",header:"Shipper HP",sort: "string"},              
              {id:"trshpzone",header:"Shipper Phone",sort: "string"},              
              {id:"crid",header:"Courier ID",sort: "int"},              
              {id:"trcneename",header:"Cnee Name",sort: "string"},              
              {id:"trcneeaddress",header:"Cnee Address",sort: "string"},              
              {id:"trcneecity",header:"Cnee City",sort: "string"},              
              {id:"trcneenohap",header:"Cnee Handphone",sort: "string"},              
              {id:"trcneeremark",header:"Cnee Remark",sort: "string"},              
              {id:"trpoddate",format:webix.Date.dateToStr("%Y-%m-%d"),header:"POD Date",sort: "string"},              
              {id:"trpodtime",header:"POD Time",sort: "string"},              
              {id:"trpodreceiver",header:"POD Receiver",sort: "string"},              
              {id:"trpodstatus",header:"POD Status",sort: "string"},              
              {id:"trpodremark",header:"POD Remark",sort: "string"}]


var mygrid = { view:"datatable", 
               id: "grid",               
              select: true, columns:clmn01, url: proxy, save: proxy }    

webix.ui({
  rows:[
    { type:"header", template:"Preview" },
               toolbar,
    { view: "tabview",
     multiview: {
  fitBiggest:true
},
      cells: [                  
        {id: "tab01" , header: "grid" ,  body:mygrid},
        {id: "tab02" , header: "input" , body:{ view:"scrollview" , body:vfrm }}
             ]
}
  ]
});


$$('myfrm').bind($$('grid'));
