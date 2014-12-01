var map_api = {
	sprintf:function(){
		for(var i=1,l=arguments.length;i<l;i++){
			arguments[0] = arguments[0].replace(/{.+?}/i,arguments[i]);
		}
		arguments[0].replace(/{.+?}/img,'');
		return arguments[0];
	},
	getGeo:"http://api.map.baidu.com/geocoder/v2/?address={address}&output=json&ak=HAyE5ZGrAciHq2h2w01sfSTX",
	getStreetName:"http://api.map.baidu.com/geocoder/v2/?ak=HAyE5ZGrAciHq2h2w01sfSTX&location={longitude},{latitude}&output=json",
	getLbs:'http://api.map.baidu.com/geosearch/v3/nearby?ak=HAyE5ZGrAciHq2h2w01sfSTX&geotable_id=47087&location={longitude},{latitude}&q={xm}&radius=3000&sortby=distance:1&page_size=30&page_index={page}'	
};