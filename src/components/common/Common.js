import axios from 'axios';
export const ajaxCall=function(args) {
		var timeout = 120000;
		var data = args.data || {};
		let method = args.method.toLowerCase();
		var header = {...args.header};
		let URL;
		URL=args.url;
		if(method === "get") {
			return axios.get(URL, {headers:header},{withCredentials:true}, {timeout: timeout}).then(res=>{
					return new Promise(function(resolve, reject) {
						resolve(res);
					});
				}).catch(err=>{
					//console.log(err);

				})
		}
		if(method === "delete") {
        			return axios.delete(URL, {headers:header},{withCredentials:true}, {timeout: timeout}).then(res=>{
        					return new Promise(function(resolve, reject) {
        						resolve(res);
        					});
        				}).catch(err=>{
        					//console.log(err);

        				})
        		}

        if(method === "put") {
        			return axios.put(URL, data, {headers:header},{withCredentials:true}, {timeout: timeout}).then(res=>{
        					return new Promise(function(resolve, reject) {
        						resolve(res);
        					});
        				}).catch(err=>{
        					//console.log(err);
        				})
        	}
		if(method === "post") {
			return axios.post(URL, data, {headers:header},{withCredentials:true}, {timeout: timeout}).then(res=>{
					return new Promise(function(resolve, reject) {
						resolve(res);
					});
				}).catch(err=>{
					//console.log(err);
				})
		}
	};

