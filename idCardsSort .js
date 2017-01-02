;(function(){
			var arr=["429005198411040053","429005198412010053",
				 "429005198411060053"];

		var yourBirthday = "1105";
		function getSortFunction(yourBirthday){

			//现在离你的生日的相差天数
			function getDays (d){
				var month = d.slice(0,2);
				var day = d.slice(2,4);

				var date = new Date();  //今天
				var currentM = date.getMonth()+1;
				var currentD = date.getDate();

				var nextBirthday = new Date();

				nextBirthday.setMonth(month-1);
				nextBirthday.setDate(day);

				if(currentM >month)
				{ //生日已经过了 当前 9月，生日是8月
					var year = date.getFullYear();
					nextBirthday.setYear(year+1);
					return (nextBirthday.getTime() - new Date().getTime() )/(24 * 60 * 60 * 1000);
				}
				else if(currentM == month)
				{
					if(currentD == day)
					{
						//今天生日 
						return 0;
					}
					else if(currentD > day)
					{ //今天是11号 生日 是10号。生日已经过了
						var year = date.getFullYear();
					nextBirthday.setYear(year+1);
					return (nextBirthday.getTime() - new Date().getTime() )/(24 * 60 * 60 * 1000);

					}
					else
					{
						var year = date.getFullYear();
					nextBirthday.setYear(year);
					return (nextBirthday.getTime() - new Date().getTime() )/(24 * 60 * 60 * 1000);
					}
				}
				else
				{

					var year = date.getFullYear();
					nextBirthday.setYear(year);
					return (nextBirthday.getTime() - new Date().getTime() )/(24 * 60 * 60 * 1000);
				}
			}


			return function(a,b){
				var abirthday = a.slice(10,14);
				var bbirthday = b.slice(10,14);
				var a1 = getDays(abirthday);
				var a2 = getDays(bbirthday);
				return a1 - a2;
			}
		}

		console.info( arr.sort(getSortFunction(yourBirthday)) );
})()