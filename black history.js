//Turns the $ into a reference for the line we're returning
function $(id){
	return document.getElementById(id);
}

var figures = [{img: 'rp.jpg', name: "Rosa Parks", history: "Rosa Parks (1913—2005) helped initiate the civil rights movement in the United States when she refused to give up her seat to a white man on a Montgomery, Alabama bus in 1955. Her actions inspired the leaders of the local Black community to organize the Montgomery Bus Boycott. Led by a young Rev. Dr. Martin Luther King Jr., the boycott lasted more than a year—during which Parks not coincidentally lost her job—and ended only when the U.S. Supreme Court ruled that bus segregation was unconstitutional. Over the next half-century, Parks became a nationally recognized symbol of dignity and strength in the struggle to end entrenched racial segregation."},
				{img: 'mlk.jpg', name: "Martin Luther King Jr.", history: "Martin Luther King Jr. was an African American Baptist minister and activist who became the most visible spokesperson and leader in the Civil Rights Movement from 1955 until his assassination in 1968"}];


window.onload = function(){
		
		//Set a counter to check against the position of the array
		var counter = 0;
		
		setInfo();

		//We need to 'listen' to know when someone has clicked on the next button
		//So we add what is called an Event Listener
		$('btnNext').addEventListener('click', function(){
			
			if(counter < figures.length-1){
				counter++;
			}else{
				counter = 0;
			}
		
			setInfo();
		});
	
		$('btnBack').addEventListener('click', function(){

				if(counter < figures.length-1){
					counter--;
				}else{
					counter = 0;
				}

				setInfo();
			});
		
		$('btnLearn').addEventListener('click', function(){
			

			if($('profileSection').style.display == "block"){
				$('historySection').style.display = "block";
				$('profileSection').style.display = "none";
				
			}else{
				$('historySection').style.display = "none";
				$('profileSection').style.display = "block"
			}
		});
		
	function setInfo(){
			$('figurePic').src = 'images/' + figures[counter].img;
			$('name').innerHTML = figures[counter].name;
			$('history').innerHTML = figures[counter].history;
		}
}

