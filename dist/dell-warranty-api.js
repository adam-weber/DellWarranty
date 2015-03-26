/*
  Dell Warranty API - Wrapper
  Adam Weber / CCI Systems
  V. 1.0
  
  For information/examples, see README
  https://github.com/adam-weber/DellWarranty
*/
options = ['ServiceLevelDescription', 'ServiceProvider', 'StartDate', 'EndDate']

function getWarranty(svcTag, apiKey, dataType) {
  warranty = {
    tag: svcTag || null,
    key: apiKey || null,
    type: dataType.toLowerCase() || null
  }
  for (var prop in warranty) {
    if (!warranty[prop]) {
      console.log('Argument Missing-' + prop)
      alert('ERROR-Console')
    }
  }
  apiRequest(warranty.type)
}

function apiRequest(requestType) {
  requestType = requestType != 'table' ? requestType : 'xml'
  jQuery.ajax({
    url: "https://api.dell.com/support/v2/assetinfo/warranty/tags." + requestType + "?svctags=" + warranty.tag + "&apikey=" + warranty.key + "",
    async: true,
    type: 'GET',
    success: function(response) {
      processData(response)
    },
    error: function(response) {
      console.log(response)
      alert('ERROR-Console')
    }
  })
}

function processData(response) {
  switch (warranty.type) {
    case 'xml', 'json':
      return response
    case 'table':
      pattern = /\d/
      tableHTML = "<table><tr><th>Service</th><th>Provider</th><th>Start Date</th><th>End Date</th></tr></td>"
      doc = response.getElementsByTagName('Warranty')
      i = doc.length
      while (--i) {
        for (var j in options) {
          current = doc[i].getElementsByTagName(options[j])[0].childNodes[0].nodeValue
          tableHTML += pattern.test(current) ? "<td>"+ $.format.date(current,"MM/dd/yyyy")+"</td>" : "<td>"+ current+"</td>"
        }
        tableHTML += "</td></tr>"
      }
      return tableHTML
  }
}