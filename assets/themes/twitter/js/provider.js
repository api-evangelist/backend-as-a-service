function listProviders()
    {
    $.getJSON('data/providers.json', function(data) {
    	toggle = 0;
    	 $.each(data['stack'], function(key, val) {
    	 	alert(toggle);
			var template = $('#providerListingTemplate').html();
			var html = Mustache.to_html(template, val);
			$('#providerListing').append(html);    	 	
    	 	
    	 	if(toggle==1){
				$('#providerListing').append('</tr><tr>');
				toggle=0;
				}
			else{
				toggle=1;
			}
			alert($('#providerListing').html());
	        });
        });

    }    
     